# Manifesto de assets (v2)

A v2 não usa screenshots de projetos, fotos de clientes, imagens de banco nem imagens geradas por IA. Nenhuma imagem externa é carregada ou referenciada por hotlink.

## Marca

| Arquivo | Origem | Finalidade | Licença/autorização | Dimensões |
|---|---|---|---|---|
| `logo_rabik.png` (raiz) | Fornecido pelo Erick em 25/09/2026 | Original de referência (não publicado) | Da marca | 1536 × 1024 |
| `src/assets/brand/rabik-logo.svg` | Vetorização fiel de `logo_rabik.png` (potrace, limiar 50%), comparada lado a lado com o original | Logo empilhada: bloco "Por trás da Rabik", CTA final (branca) e rodapé | Da marca | viewBox 928 × 645 |
| `src/assets/brand/rabik-symbol.svg` | Recorte do trio no original, vetorizado | Cabeçalho, selo do hero, cards de entrega, marca d'água do FAQ, 404 | Da marca | viewBox 516 × 385 |
| `src/assets/brand/rabik-wordmark.svg` | Recorte de "RABIK" no original, vetorizado | Cabeçalho (ao lado do símbolo) | Da marca | viewBox 928 × 207 |
| `public/favicon.svg`, `favicon.ico` (16/32/48), `favicon-96x96.png`, `apple-touch-icon.png` (180) | Gerados por `npm run favicons` a partir de `rabik-symbol.svg`: três bonequinhos em tinta `#202431` sobre papel `#fff8ec`, sem a palavra RABIK | Favicon em todas as páginas | Da marca | ver colunas |
| `public/og-default.png` | Composição local: fundo papel, título curto, logo em cartão, etiquetas | Imagem social/OG | Da marca | 1200 × 630 |

**Favicon:** o desenho não é redesenhado. Em tamanhos pequenos, o mesmo traço recebe um contorno da própria cor (até 24 unidades; os personagens só se encostariam a partir de 36, medido no original). Em 16–48 px, onde a distância entre os pés ficaria abaixo de 1 pixel, as três figuras são afastadas por inteiro, sem alterar nenhuma. De 96 px para cima, o espaçamento é o original.

Todos os SVGs usam `fill="currentColor"`: escuros no papel, brancos no bloco azul. Os três personagens não foram redesenhados, unidos, esticados nem recortados.

## Ilustração e detalhes

| Asset | Origem | Observação |
|---|---|---|
| Cartão "Briefing do seu negócio" no hero | HTML/CSS próprio | Abstrato: linhas, caixas marcadas e botão genérico. Não representa cliente nem produto real. |
| Rabiscos (`src/components/ui/Doodle.astro`): seta, sublinhado, círculo, faísca, onda | Traço próprio em SVG | Decorativos (`aria-hidden`). |
| Ícones (`src/components/ui/Icon.astro`) | Desenho próprio, uma família (24 × 24, traço 1,75) | Decorativos, exceto quando recebem `label`. |

## Fontes

| Fonte | Arquivos | Licença |
|---|---|---|
| Plus Jakarta Sans (variável, títulos) | `public/fonts/plus-jakarta-sans-latin{,-ext}-wght-normal.woff2`, de `@fontsource-variable/plus-jakarta-sans` | SIL OFL 1.1 — `public/licenses/plus-jakarta-sans-OFL.txt` |
| DM Sans (variável, texto) | `public/fonts/dm-sans-latin{,-ext}-wght-normal.woff2`, de `@fontsource-variable/dm-sans` | SIL OFL 1.1 — `public/licenses/dm-sans-OFL.txt` |

## Fora do build

| Material | Local | Situação |
|---|---|---|
| Capturas e páginas de projetos da v1 (VaultScanner, O poder do tempo, Aristóteles no Liceu, TagFlow) | `drafts/portfolio-v1/` | Preservadas para o Erick enviar como exemplos pelo WhatsApp. `scripts/verify-dist.mjs` barra qualquer menção a elas no build. |
| Captura da Animalandia | `drafts/portfolio-v1/animalandia/` | Sem autorização de divulgação. |

## Pendências de assets

- Foto real do Erick (opcional).
- SVG original da logo, se existir.
