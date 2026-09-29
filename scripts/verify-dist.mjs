// Auditoria do build (dist/): garante que rascunhos e links inventados não vazaram.
// Roda automaticamente depois de `npm run build`.
import { readdir, readFile, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';

const DIST = 'dist';
/**
 * SDD v2: o site não é portfólio. Nomes de projetos anteriores, a rota /projetos/ e termos de
 * portfólio não podem aparecer no build. Exemplos só pelo WhatsApp (FAQ).
 */
const FORBIDDEN = [
  /animalandia/i,
  /vault-?scanner/i,
  /arist[oó]teles/i,
  /poder do tempo/i,
  /tag-?flow/i,
  /\/projetos\//i,
  /portf[oó]lio/i,
  /\bcases?\b/i,
  /trabalhos realizados/i,
  /depoimento/i,
];
/** Placeholders que nunca podem ir para o ar. */
const PLACEHOLDERS = [/contato@rabik\.com\.br/i, /wa\.me\/(?:\?|$|["'<\s])/i, /wa\.me\/0/i, /lorem ipsum/i, /TODO|FIXME/];
const TEXT = new Set(['.html', '.js', '.css', '.xml', '.txt', '.json', '.svg', '.webmanifest']);

async function walk(dir) {
  const out = [];
  for (const name of await readdir(dir)) {
    const p = join(dir, name);
    if ((await stat(p)).isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

const files = await walk(DIST);
const problems = [];
for (const f of files) {
  for (const re of FORBIDDEN) if (re.test(f)) problems.push(`arquivo de rascunho publicado: ${f}`);
  if (!TEXT.has(extname(f))) continue;
  const body = await readFile(f, 'utf8');
  for (const re of [...FORBIDDEN, ...PLACEHOLDERS]) {
    if (re.test(body)) problems.push(`${f}: contém ${re}`);
  }
}

const html = files.filter((f) => f.endsWith('.html'));
for (const f of html) {
  const body = await readFile(f, 'utf8');
  if (!/<html[^>]*lang="pt-BR"/.test(body)) problems.push(`${f}: sem lang="pt-BR"`);
  const h1 = body.match(/<h1[\s>]/g)?.length ?? 0;
  if (h1 !== 1) problems.push(`${f}: ${h1} elementos h1`);
}

// Indexação: verificação do Search Console na home e, com sitemap (produção), só páginas indexáveis nele.
const GOOGLE_VERIFICATION =
  '<meta name="google-site-verification" content="IwnzcLAJltjM0-NP84PYbF5mswojCSDFhhqkQDb8r5w" />';
if (!(await readFile(join(DIST, 'index.html'), 'utf8')).includes(GOOGLE_VERIFICATION)) {
  problems.push('dist/index.html: sem a tag de verificação do Google Search Console');
}
const sitemap = await readFile(join(DIST, 'sitemap.xml'), 'utf8').catch(() => null);
if (sitemap !== null) {
  const robotsTxt = await readFile(join(DIST, 'robots.txt'), 'utf8');
  if (/^Disallow: \/\s*$/m.test(robotsTxt)) problems.push('robots.txt bloqueia o site, mas há sitemap');
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (locs.length === 0) problems.push('sitemap.xml sem URLs');
  for (const loc of locs) {
    const { origin, pathname } = new URL(loc);
    if (!robotsTxt.includes(`Sitemap: ${origin}/sitemap.xml`)) problems.push(`robots.txt sem Sitemap: ${origin}/sitemap.xml`);
    const page = await readFile(join(DIST, pathname, 'index.html'), 'utf8').catch(() => '');
    if (/<meta name="robots" content="[^"]*noindex/i.test(page)) problems.push(`sitemap lista página com noindex: ${loc}`);
    if (!page.includes(`<link rel="canonical" href="${loc}">`)) problems.push(`sitemap: ${loc} sem canonical igual na página`);
  }
}

if (problems.length) {
  console.error(`verify-dist: ${problems.length} problema(s)\n- ${problems.join('\n- ')}`);
  process.exit(1);
}
console.log(`verify-dist: ok (${files.length} arquivos, ${html.length} páginas)`);
