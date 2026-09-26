# Rabik — site comercial

Landing page da Rabik: sites claros para negócios locais, com conversa pelo WhatsApp.
Astro 7 + TypeScript, HTML estático, sem backend, sem analytics. Segue `Specs/SDD_Rabik_Claude_Code_versao2.md`.

**Estado:** pronto para revisão, com WhatsApp configurado. Para publicar, resolva `docs/PENDENCIAS.md` (domínio, responsável, hospedagem).

## Comandos

Requer Node 22+ (testado com Node 24).

```bash
npm install
npm run dev               # desenvolvimento em http://localhost:4321
npm run build             # build de preview (noindex) + auditoria do dist
npm run preview           # serve o dist/ localmente
npm test                  # testes unitários (Vitest)
npm run check             # checagem de tipos
npm run qa                # verificação em navegador; precisa do preview rodando
                          # (primeira vez: npx playwright install chromium)
npm run build:production  # build final; FALHA enquanto houver pendência bloqueante
npm run favicons          # regenera os favicons a partir do símbolo da logo
```

## Onde mudar cada coisa (um lugar só)

| O quê | Arquivo |
|---|---|
| WhatsApp, e-mail, domínio, responsável | `src/config/site.ts` |
| Mensagens automáticas do WhatsApp | `src/config/messages.ts` |
| Preço, entrada, renovação, limites e textos da oferta | `src/config/offers.ts` (card, FAQ e mensagens leem daqui) |
| Perguntas frequentes | `src/data/faq.ts` |
| Opções de "Você escolhe o ponto de partida" | `src/data/solutions.ts` |
| Textos das demais seções | `src/components/sections/*.astro` |
| Cores, raios, largura do container | `src/styles/tokens.css` |
| Logo | `src/assets/brand/*.svg` (vetorizados de `logo_rabik.png`) |
| Favicon | `npm run favicons` (gera `favicon.ico`, `favicon.svg`, `favicon-96x96.png`, `apple-touch-icon.png` em `public/`) |
| Imagem social | `public/og-default.png` |

### WhatsApp

O número fica só em `src/config/site.ts` (`whatsappDigits`, formato internacional só com dígitos — hoje `5561983645763`). Cada botão gera `https://wa.me/<número>?text=<mensagem codificada>`; as mensagens por contexto (gerais, pacote básico, reformulação, sob medida, exemplos) ficam em `src/config/messages.ts`. Abrir a conversa não envia nada: a pessoa revisa e envia. Nada acrescenta ou remove o nono dígito. Se o número ficar vazio ou inválido, o build falha em vez de publicar botões quebrados.

## Publicação (não foi feita)

Nada foi publicado, comprado ou provisionado. O build é estático (`dist/`).

1. Resolva as pendências bloqueantes (`src/config/site.ts` e o provedor em `src/pages/privacidade.astro`).
2. `npm run build:production` — precisa passar sem erros.
3. Publique a pasta `dist/` numa hospedagem adequada a uso comercial.

**Cloudflare Pages** (opção documentada para Astro): comando de build `npm run build:production`, pasta `dist`, variável `NODE_VERSION=24`. Confira termos e limites vigentes.

**Vercel:** o plano Hobby é restrito a uso pessoal não comercial.

Em produção com domínio, o build gera `robots.txt` liberando indexação e `sitemap.xml`; em preview, bloqueia tudo e as páginas têm `noindex`.

## Estrutura

```text
src/
  config/     site.ts, offers.ts, messages.ts, validate.ts
  data/       faq.ts, solutions.ts
  lib/        whatsapp.ts
  components/ brand/ (logo), layout/ (cabeçalho, rodapé), sections/ (seções da home), ui/ (CTA, ícones, rabiscos)
  pages/      index, privacidade, 404
  styles/     tokens.css, global.css
  assets/     brand/ (SVG da logo)
public/       fontes (OFL), favicon, imagem OG, licenças
scripts/      build-production, verify-dist, qa-browser
tests/        whatsapp, config, content
drafts/       portfolio-v1/ — material da versão anterior, fora do build
docs/         PENDENCIAS, DECISOES, ASSETS, VALIDACAO, INVENTARIO (+ capturas)
Specs/        SDD v2
```
