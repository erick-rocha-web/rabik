// Verificação funcional em navegador real (Playwright) — critérios do SDD v2.
// Uso: npm run build && npm run preview  (em outro terminal)  →  npm run qa
// QA_URL muda o endereço; QA_WHATSAPP muda o número esperado nos links.
import { chromium } from 'playwright';

const B = process.env.QA_URL ?? 'http://localhost:4321';
const WA = process.env.QA_WHATSAPP ?? '5561983645763';
const EXAMPLES = 'Olá! Conheci a Rabik e gostaria de ver alguns exemplos de sites antes de decidir.';
const BUSINESS = 'Olá! Conheci a Rabik e gostaria de conversar sobre um site para o meu negócio.';
const BASIC = 'Olá! Tenho interesse no site de apresentação da Rabik por R$ 997. Gostaria de entender os próximos passos.';
const REDESIGN = 'Olá! Já tenho um site e gostaria de conversar com a Rabik sobre uma reformulação.';
const CUSTOM = 'Olá! Tenho uma ideia de projeto e gostaria de conversar com a Rabik sobre as funcionalidades e o orçamento.';

const b = await chromium.launch();
const res = [];
const ok = (name, cond, extra = '') => res.push(`${cond ? 'PASS' : 'FAIL'} ${name}${extra ? ' — ' + extra : ''}`);
const norm = (s) => s.replace(/\r\n/g, '\n'); // Windows converte \n em \r\n na área de transferência

let ctx = await b.newContext({ viewport: { width: 1440, height: 900 }, permissions: ['clipboard-read', 'clipboard-write'] });
let p = await ctx.newPage();
const consoleErrors = [];
p.on('console', (m) => m.type() === 'error' && consoleErrors.push(m.text()));
p.on('pageerror', (e) => consoleErrors.push(e.message));
await p.goto(B + '/', { waitUntil: 'networkidle' });

// AC-03: nada de portfólio
const portfolio = await p.evaluate(() => ({
  links: [...document.querySelectorAll('a')].filter((a) => /projetos|portfolio|vercel\.app|github/i.test(a.href)).length,
  words: /vaultscanner|aristóteles|poder do tempo|animalandia|portfólio|\bcases?\b/i.test(document.body.innerText),
  imgs: document.querySelectorAll('main img').length,
}));
ok('AC-03 sem portfólio, screenshots ou links de projetos', portfolio.links === 0 && !portfolio.words && portfolio.imgs === 0, JSON.stringify(portfolio));
ok('AC-03 menu sem "Projetos"', !(await p.locator('header nav a', { hasText: 'Projetos' }).count()));

// AC-02: proporções do hero
const h1 = await p.evaluate(() => {
  const h = document.querySelector('h1');
  const cs = getComputedStyle(h);
  return { size: parseFloat(cs.fontSize), lines: Math.round(h.getBoundingClientRect().height / parseFloat(cs.lineHeight)) };
});
ok('AC-02 H1 entre 48 e 64 px e até 3 linhas em 1440', h1.size >= 48 && h1.size <= 64 && h1.lines <= 3, JSON.stringify(h1));
const heroBottom = await p.evaluate(() => document.querySelector('.hero').getBoundingClientRect().bottom);
ok('AC-02 hero cabe sem rolagem exagerada (1440×900)', heroBottom <= 900, `${Math.round(heroBottom)} px`);

// Mensagem de um CTA (link com número ou botão de copiar no preview)
const ctaMessage = async (locator) => {
  const el = locator.first();
  if (WA) {
    const url = new URL(await el.getAttribute('href'));
    return { digits: url.pathname.slice(1), text: url.searchParams.get('text') };
  }
  return { digits: null, text: await el.getAttribute('data-wa-message') };
};

// AC-04 / AC-05 / AC-06: pergunta de exemplos
await p.locator('#duvidas summary', { hasText: 'Posso ver exemplos antes de decidir?' }).click();
const exBtn = p.locator('#duvidas details[open] :is(a, button)', { hasText: 'Pedir exemplos pelo WhatsApp' });
ok('AC-04 FAQ de exemplos mostra o CTA', (await exBtn.count()) === 1);
const ex = await ctaMessage(exBtn);
ok('AC-05 mensagem de exemplos exata', ex.text === EXAMPLES, ex.text ?? '');
if (WA) {
  ok('AC-05 número é o configurado', ex.digits === WA, ex.digits);
  ok('link abre só por clique, em nova aba', (await exBtn.getAttribute('target')) === '_blank');
} else {
  ok('AC-06 sem número: nenhum link wa.me na página', (await p.locator('a[href*="wa.me"]').count()) === 0);
  await exBtn.click();
  await p.waitForTimeout(300);
  const clip = norm(await p.evaluate(() => navigator.clipboard.readText()));
  ok('AC-06 botão copia a mensagem de exemplos', clip === EXAMPLES);
  ok('AC-06 estado de cópia informado', (await p.locator('#duvidas details[open] [data-wa-status]').textContent()).includes('Mensagem copiada'));
}

// CTA principal do hero
const hero = await ctaMessage(p.locator('.hero .actions [data-wa-message]'));
ok('CTA do hero usa a mensagem sobre o negócio', hero.text === BUSINESS, hero.text ?? '');

// Todos os CTAs de WhatsApp: link real, número configurado, mensagem do contexto certo
const allLinks = await p.evaluate(() =>
  [...document.querySelectorAll('a[data-wa-link]')].map((a) => {
    const where = a.closest('#menu-mobile') ? 'menu-mobile' : a.closest('header') ? 'cabecalho'
      : a.closest('.hero') ? 'hero' : a.closest('#solucoes') ? 'solucoes' : a.closest('#investimento') ? 'investimento'
      : a.closest('#duvidas') ? 'faq' : a.closest('#comecar') ? 'fechamento' : 'outro';
    return { where, href: a.getAttribute('href'), target: a.target };
  }),
);
const expectedByPlace = { 'menu-mobile': [BUSINESS], cabecalho: [BUSINESS], hero: [BUSINESS], fechamento: [BUSINESS],
  solucoes: [BASIC, REDESIGN, CUSTOM], investimento: [BASIC, CUSTOM], faq: [EXAMPLES] };
const seen = {};
let linksOk = true;
for (const l of allLinks) {
  const url = new URL(l.href);
  const text = url.searchParams.get('text');
  const good = l.href.startsWith(`https://wa.me/${WA}?text=`) && l.href === `https://wa.me/${WA}?text=${encodeURIComponent(text)}`
    && (expectedByPlace[l.where] ?? []).includes(text) && l.target === '_blank';
  if (!good) { linksOk = false; res.push(`  ↳ link inesperado em ${l.where}: ${l.href}`); }
  (seen[l.where] ??= new Set()).add(text);
}
ok(`todos os ${allLinks.length} links de WhatsApp com número e mensagem do contexto`, linksOk && allLinks.length === 10, JSON.stringify(Object.fromEntries(Object.entries(seen).map(([k, v]) => [k, v.size]))));
ok('nenhum botão de copiar ou aviso de configuração', (await p.locator('[data-wa-copy], .wa-note').count()) === 0 && !(await p.locator('body').innerText()).includes('em configuração'));
ok('acentos e espaços codificados nos links', allLinks.every((l) => !/[ áãâçéêíóõú]/.test(l.href)));

// AC-07: seleção de soluções
const expected = [
  ['site-apresentacao', 'Quero um site de apresentação', BASIC],
  ['reformulacao', 'Quero melhorar meu site', REDESIGN],
  ['sob-medida', 'Quero explicar meu projeto', CUSTOM],
];
for (const [id, label, message] of expected) {
  await p.click(`label.option:has(input[value="${id}"])`);
  await p.waitForTimeout(150);
  const visible = p.locator('#solucoes .cta:visible [data-wa-message]');
  const text = (await visible.first().textContent()).trim();
  const msg = await p.inputValue('#solucao-mensagem');
  const ctaMsg = await ctaMessage(visible);
  ok(`AC-07 ${id}: CTA e mensagem mudam juntos`, text.startsWith(label) && msg === message && ctaMsg.text === message, `"${text}"`);
}
ok('AC-07 nenhum orçamento inventado nas soluções (só o preço configurado na mensagem do básico)', !/R\$/.test(await p.locator('#solucoes .options').innerText()));
await p.fill('#solucao-mensagem', 'Oi Erick! Tenho uma barbearia & quero agenda 😀\nlinha 2');
const edited = await ctaMessage(p.locator('#solucoes .cta:visible [data-wa-message]'));
ok('AC-07 mensagem editada chega ao CTA como texto', edited.text === 'Oi Erick! Tenho uma barbearia & quero agenda 😀\nlinha 2');

// AC-08 / AC-09: investimento
const inv = (await p.locator('#investimento').innerText()).replace(/ /g, ' ');
ok('AC-08 preço, entrada, saldo e renovação visíveis', inv.includes('R$ 997') && inv.includes('R$ 498,50 para iniciar + R$ 498,50 após a aprovação') && inv.includes('R$ 100 por ano'));
ok('AC-09 sob medida como orçamento próprio', inv.includes('Sob orçamento') && /loja, painel/.test(inv));
const ctas = await p.evaluate(() => Object.fromEntries(['.hero', '#investimento', '#duvidas', '#comecar'].map((s) => [s, !!document.querySelector(`${s} [data-wa-message]`)])));
ok('CTA de WhatsApp no hero, investimento, FAQ e fechamento', Object.values(ctas).every(Boolean), JSON.stringify(ctas));
ok('nada salvo em localStorage', await p.evaluate(() => localStorage.length === 0));

// AC-10: teclado
await p.focus('#entregamos li[tabindex="0"]');
await p.keyboard.press('Tab');
await p.keyboard.press('Shift+Tab');
await p.waitForTimeout(350); // transição da cor da etiqueta
const cardFocus = await p.evaluate(() => {
  const el = document.activeElement;
  return { focused: el.matches('#entregamos li'), outline: getComputedStyle(el).outlineStyle, tag: getComputedStyle(el.querySelector('.tag')).backgroundColor };
});
ok('AC-10 cards de entrega recebem foco visível e mudam a etiqueta', cardFocus.focused && cardFocus.outline !== 'none' && cardFocus.tag !== 'rgb(255, 248, 236)', JSON.stringify(cardFocus));
await p.focus('#duvidas summary >> nth=0');
await p.keyboard.press('Enter');
ok('AC-10 FAQ abre com teclado', await p.evaluate(() => document.querySelector('#duvidas details').open));
await p.click('label.option:has(input[value="site-apresentacao"])');
await p.focus('input[name="solucao"]:checked');
await p.keyboard.press('ArrowDown');
ok('AC-10 soluções mudam com as setas', (await p.inputValue('#solucao-mensagem')) === REDESIGN);
ok('sem erros de console', consoleErrors.length === 0, consoleErrors.join(' | '));
await ctx.close();

// AC-01 + menu mobile
ctx = await b.newContext({ viewport: { width: 390, height: 844 } });
p = await ctx.newPage();
await p.goto(B + '/', { waitUntil: 'networkidle' });
const first = await p.evaluate(() => {
  const bottom = (s) => document.querySelector(s).getBoundingClientRect().bottom;
  return { h1: bottom('h1'), lead: bottom('.hero .lead'), cta: bottom('.hero .actions .btn') };
});
ok('AC-01 390×844: título, texto e CTA no primeiro quadro', Math.max(...Object.values(first)) <= 844, JSON.stringify(first));
const artTop = await p.evaluate(() => document.querySelector('.hero .art').getBoundingClientRect().top);
ok('AC-01 mobile: ilustração depois do texto e do CTA', artTop > first.cta);
await p.focus('[data-menu-toggle]');
await p.keyboard.press('Enter');
ok('menu abre', await p.evaluate(() => !document.querySelector('[data-menu]').hidden));
await p.keyboard.press('Tab');
await p.keyboard.press('Escape');
ok('menu fecha com Escape e devolve o foco', await p.evaluate(() => document.querySelector('[data-menu]').hidden && document.activeElement.matches('[data-menu-toggle]')));
const toggleSize = await p.evaluate(() => { const r = document.querySelector('[data-menu-toggle]').getBoundingClientRect(); return [r.width, r.height]; });
ok('botão de menu com área ≥ 44×44', toggleSize[0] >= 44 && toggleSize[1] >= 44, JSON.stringify(toggleSize));
await ctx.close();

// AC-12: sem JavaScript
ctx = await b.newContext({ viewport: { width: 1280, height: 720 }, javaScriptEnabled: false });
p = await ctx.newPage();
await p.goto(B + '/', { waitUntil: 'networkidle' });
const nojs = await p.evaluate(() => ({
  price: document.body.innerText.replace(/ /g, ' ').includes('R$ 997'),
  faq: document.querySelectorAll('#duvidas details').length,
  hidden: [...document.querySelectorAll('[data-reveal]')].filter((e) => getComputedStyle(e).opacity !== '1').length,
  nav: getComputedStyle(document.querySelector('.nav-desktop')).display !== 'none',
  solutionCta: [...document.querySelectorAll('#solucoes .cta')].filter((e) => getComputedStyle(e).display !== 'none').length,
}));
ok('AC-12 sem JS: texto, preço, FAQ e navegação acessíveis', nojs.price && nojs.faq === 6 && nojs.hidden === 0 && nojs.nav && nojs.solutionCta === 1, JSON.stringify(nojs));
await p.click('label.option:has(input[value="sob-medida"])', { force: true });
ok('AC-12 sem JS: seleção de soluções troca só com CSS', (await p.locator('#solucoes .cta:visible').innerText()).includes('Quero explicar meu projeto'));
await p.locator('#duvidas summary').first().click({ force: true });
ok('AC-12 sem JS: FAQ abre', await p.evaluate(() => document.querySelector('#duvidas details').open));
await ctx.close();

// AC-11: movimento reduzido
ctx = await b.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
p = await ctx.newPage();
await p.goto(B + '/', { waitUntil: 'networkidle' });
const rm = await p.evaluate(() => ({
  revealReady: document.documentElement.classList.contains('reveal-ready'),
  hidden: [...document.querySelectorAll('[data-reveal]')].filter((e) => getComputedStyle(e).opacity !== '1').length,
}));
ok('AC-11 movimento reduzido: conteúdo completo e estável', !rm.revealReady && rm.hidden === 0, JSON.stringify(rm));
await ctx.close();

// Reflow: 320 px ≈ 1280 com zoom 400%; 640 px ≈ 1280 com 200%
for (const w of [320, 640]) {
  ctx = await b.newContext({ viewport: { width: w, height: 700 } });
  p = await ctx.newPage();
  for (const path of ['/', '/privacidade/']) {
    await p.goto(B + path, { waitUntil: 'networkidle' });
    const ov = await p.evaluate(() => document.documentElement.scrollWidth - innerWidth);
    ok(`reflow ${w}px ${path}`, ov <= 0, `overflow=${ov}`);
  }
  await ctx.close();
}

// Rotas
ctx = await b.newContext();
p = await ctx.newPage();
const r404 = await p.goto(B + '/nao-existe/');
ok('404 com retorno à home', r404.status() === 404 && (await p.locator('main a[href="/"]').count()) === 1);
const rProj = await p.goto(B + '/projetos/');
ok('rota /projetos/ não existe', rProj.status() === 404);
await b.close();

console.log(res.join('\n'));
if (res.some((r) => r.startsWith('FAIL'))) process.exit(1);
