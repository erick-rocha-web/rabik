# Pendências (v2)

O site está em `https://rabikk.vercel.app` (Vercel). Domínio, indexação, sitemap e verificação do Search Console estão configurados; o deploy de produção da Vercel builda em modo produção.

Não há pendência bloqueante: `npm run build:production` passa.

**Resolvido:** responsável no aviso de privacidade (`Erick Roberto Araújo Rocha`) e e-mail de contato (`rabik.digital@gmail.com`), confirmados pelo Erick em `src/config/site.ts`. O e-mail aparece com link `mailto:` no aviso de privacidade (junto com o WhatsApp) e no rodapé.

**Resolvido:** provedor de hospedagem (Vercel), confirmado pelas respostas do site publicado. Confira os termos do plano da Vercel para uso comercial (o Hobby é restrito a uso pessoal).

Se o domínio mudar, atualize `siteConfig.canonicalOrigin` (e o teste em `tests/config.test.ts`).

**Resolvido:** WhatsApp comercial `+55 61 98364-5763` confirmado pelo Erick e configurado (`5561983645763`). Todos os botões abrem a conversa com a mensagem preenchida.

## Não bloqueiam

| Pendência | Situação atual |
|---|---|
| Foto do Erick | Opcional. O bloco coral agora apresenta os objetivos da Rabik, com a logo. |
| Redes sociais da marca | Não aparecem (SDD: só links confirmados). |
| SVG original da logo | A logo em uso é vetorizada a partir de `logo_rabik.png`. Se existir um SVG original, substitua os arquivos de `src/assets/brand/` mantendo os nomes. |
| Exemplos para enviar pelo WhatsApp | O site não mostra portfólio. As capturas feitas na v1 estão em `drafts/portfolio-v1/` e podem ser usadas pelo Erick ao responder pedidos de exemplos. A Animalandia continua sem autorização de divulgação. |
