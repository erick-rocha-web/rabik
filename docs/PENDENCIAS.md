# Pendências (v2)

O site está **pronto para revisão** (preview completo). Para ficar **pronto para publicação**, os itens bloqueantes precisam ser resolvidos — `npm run build:production` falha até lá, listando o que falta.

## Bloqueiam a publicação

| # | Pendência | Onde resolver | Observação |
|---|---|---|---|
| 1 | **Domínio final** | `siteConfig.canonicalOrigin` | Ex.: `https://www.dominio.com.br` (sem barra final). Ativa canonical, sitemap, robots com indexação e URL absoluta da imagem OG. |
| 2 | **Responsável no aviso de privacidade** | `siteConfig.responsibleDisplayName` | Nome como deve aparecer em `/privacidade/`. |
| 3 | **Provedor de hospedagem no aviso** | `src/pages/privacidade.astro` (bloco "Provedor de hospedagem em definição") | Nome do provedor escolhido, depois de conferir os termos dele para uso comercial. |

**Resolvido:** WhatsApp comercial `+55 61 98364-5763` confirmado pelo Erick e configurado (`5561983645763`). Todos os botões abrem a conversa com a mensagem preenchida.

## Não bloqueiam

| Pendência | Situação atual |
|---|---|
| E-mail comercial | `contactEmail: null`. O site funciona sem e-mail. |
| Foto do Erick | Opcional. O bloco coral agora apresenta os objetivos da Rabik, com a logo. |
| Redes sociais da marca | Não aparecem (SDD: só links confirmados). |
| SVG original da logo | A logo em uso é vetorizada a partir de `logo_rabik.png`. Se existir um SVG original, substitua os arquivos de `src/assets/brand/` mantendo os nomes. |
| Exemplos para enviar pelo WhatsApp | O site não mostra portfólio. As capturas feitas na v1 estão em `drafts/portfolio-v1/` e podem ser usadas pelo Erick ao responder pedidos de exemplos. A Animalandia continua sem autorização de divulgação. |
