# Rabik — site comercial

Landing page da Rabik: sites claros para negócios locais, com conversa pelo WhatsApp.
Astro 7 + TypeScript, HTML estático, sem backend, sem analytics. Segue `Specs/SDD_Rabik_Claude_Code_versao2.md`.

**Estado:** publicado na Vercel, com WhatsApp, e-mail, responsável e domínio configurados. Veja `docs/PENDENCIAS.md`.

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

## Publicação

O site está na Vercel (`https://rabikk.vercel.app`), publicado a partir de `main` no GitHub. O build é estático (`dist/`).

1. `npm test` e `npm run build:production` — precisam passar sem erros.
2. Commit e `git push origin main`: a Vercel faz o deploy de produção com `npm run build`.

**Cloudflare Pages** (opção documentada para Astro): comando de build `npm run build:production`, pasta `dist`, variável `NODE_VERSION=24`. Confira termos e limites vigentes.

**Vercel:** o plano Hobby é restrito a uso pessoal não comercial.

Em produção com domínio, o build gera `robots.txt` liberando indexação e `sitemap.xml`; em preview, bloqueia tudo e as páginas têm `noindex`.

**Indexação na Vercel (atual: `https://rabikk.vercel.app`):** o `npm run build` entra em modo produção sozinho quando `VERCEL_ENV=production` (deploy de produção); deploys de prévia seguem em preview, com `noindex` e `Disallow: /`. O sitemap é montado a partir do HTML gerado: entram só páginas sem `noindex`, pelo canonical de cada uma. O deploy de produção falha se faltar o responsável do aviso de privacidade (`siteConfig.responsibleDisplayName`). A home tem a tag de verificação do Google Search Console, conferida pelo `verify-dist`.

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
