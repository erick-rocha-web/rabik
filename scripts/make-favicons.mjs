// Gera os favicons a partir do símbolo da logo (src/assets/brand/rabik-symbol.svg).
// Uso: npm run favicons   (requer Playwright: npx playwright install chromium)
//
// O símbolo não é redesenhado: em tamanhos pequenos o traço original some (≈0,4 px em 16 px),
// então o mesmo desenho recebe um contorno da própria cor, que só engrossa as linhas.
// Medição feita no original: os três personagens só se encostam com contorno ≥ 36 unidades
// (18 para cada lado). O maior valor usado aqui é 24, preservando a separação.
// Em 16–48 px a distância entre os pés fica abaixo de 1 pixel; por isso, nesses tamanhos,
// as três figuras são afastadas por inteiro (`spread`), sem alterar o desenho de nenhuma.
import { chromium } from 'playwright';
import { readFile, writeFile } from 'node:fs/promises';

const INK = '#202431';
const PAPER = '#fff8ec';
const SYMBOL = { w: 516, h: 385 };
const MAX_SAFE_STROKE = 24;

const path = (await readFile('src/assets/brand/rabik-symbol.svg', 'utf8')).match(/ d="([^"]+)"/)[1];

// Agrupa os subcaminhos do traço por personagem, pela posição horizontal do centro.
const centerX = (sub) => {
  const xs = sub.match(/-?\d+(?:\.\d+)?/g).map(Number).filter((_, i) => i % 2 === 0);
  return (Math.min(...xs) + Math.max(...xs)) / 2;
};
const figures = [[], [], []];
for (const sub of path.split(/(?=M )/).filter(Boolean)) {
  const x = centerX(sub);
  figures[x < SYMBOL.w / 3 ? 0 : x < (2 * SYMBOL.w) / 3 ? 1 : 2].push(sub);
}
if (figures.some((f) => f.length === 0)) throw new Error('Não foi possível separar os três personagens do símbolo.');

/** SVG quadrado: fundo claro arredondado + símbolo centralizado, com margem. */
function iconSvg({ stroke, pad = 40, spread = 0, rounded = true }) {
  if (stroke > MAX_SAFE_STROKE) throw new Error(`Contorno ${stroke} uniria os personagens (máx. ${MAX_SAFE_STROKE}).`);
  const width = SYMBOL.w + 2 * spread;
  const side = width + 2 * pad;
  const ty = (side - SYMBOL.h) / 2;
  const bg = rounded
    ? `<rect width="${side}" height="${side}" rx="${Math.round(side * 0.16)}" fill="${PAPER}"/>`
    : `<rect width="${side}" height="${side}" fill="${PAPER}"/>`;
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${side} ${side}">` +
    `<title>Rabik</title>${bg}` +
    `<g fill="${INK}" fill-rule="evenodd" stroke="${INK}" stroke-width="${stroke}" stroke-linejoin="round">` +
    figures.map((f, i) => `<path transform="translate(${pad + spread * i} ${ty})" d="${f.join(' ')}"/>`).join('') +
    `</g>` +
    `</svg>\n`
  );
}

const browser = await chromium.launch();
const page = await browser.newPage();
async function png(svg, size) {
  await page.setViewportSize({ width: size, height: size });
  await page.setContent(
    `<html><body style="margin:0;background:transparent"><img src="data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}" width="${size}" height="${size}" style="display:block"></body></html>`,
  );
  await page.waitForFunction(() => document.images[0].complete);
  return page.screenshot({ omitBackground: true, clip: { x: 0, y: 0, width: size, height: size } });
}

/** ICO com imagens PNG embutidas (suportado por navegadores modernos e Windows Vista+). */
function ico(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  let offset = 6 + 16 * images.length;
  const entries = images.map(({ size, data }) => {
    const e = Buffer.alloc(16);
    e.writeUInt8(size >= 256 ? 0 : size, 0);
    e.writeUInt8(size >= 256 ? 0 : size, 1);
    e.writeUInt16LE(1, 4); // planos
    e.writeUInt16LE(32, 6); // bits por pixel
    e.writeUInt32LE(data.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += data.length;
    return e;
  });
  return Buffer.concat([header, ...entries, ...images.map((i) => i.data)]);
}

// Espessura por tamanho: mais grossa onde há menos pixels.
const icoFrames = [
  { size: 16, stroke: 22, pad: 10, spread: 30 },
  { size: 32, stroke: 20, pad: 16, spread: 20 },
  { size: 48, stroke: 16, pad: 24, spread: 12 },
];
const frames = [];
for (const f of icoFrames) frames.push({ size: f.size, data: await png(iconSvg(f), f.size) });

// O SVG é usado pelo navegador em 16–32 px na aba: espessura pensada para esses tamanhos.
await writeFile('public/favicon.svg', iconSvg({ stroke: 22, pad: 10, spread: 30 }));
await writeFile('public/favicon.ico', ico(frames));
await writeFile('public/favicon-96x96.png', await png(iconSvg({ stroke: 12, pad: 44 }), 96));
// iOS aplica a própria máscara arredondada: fundo cheio, margem maior.
await writeFile('public/apple-touch-icon.png', await png(iconSvg({ stroke: 8, pad: 90, rounded: false }), 180));

await browser.close();
console.log('favicons: favicon.svg, favicon.ico (16/32/48), favicon-96x96.png, apple-touch-icon.png');
