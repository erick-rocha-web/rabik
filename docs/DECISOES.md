# Decisões

## v2 — landing page comercial (SDD v2, 25/09/2026)

| Decisão | Motivo | Como reverter |
|---|---|---|
| Portfólio removido da home, do menu e das rotas (`/projetos/` deixou de existir) | SDD v2 §0 e §2.2: o site vende o serviço, não é portfólio. | — |
| Material da v1 movido para `drafts/portfolio-v1/`, não apagado | O SDD pede para não ser destrutivo. As capturas servem para o Erick enviar exemplos pelo WhatsApp. `drafts/` fica fora do build e do TypeScript. | Mover de volta. |
| `verify-dist` barra nomes de projetos anteriores, `/projetos/`, "portfólio", "cases", "depoimento" no build | Garante o AC-03 automaticamente, não só na revisão visual. | `FORBIDDEN` em `scripts/verify-dist.mjs`. |
| Formulário de contato da v1 removido | A v2 não pede formulário. Cada CTA tem uma mensagem pronta; só as soluções têm mensagem editável (§9, §15). | — |
| Botões de ação em `#2c66e0` em vez de `--blue` (`#3978f6`) | Branco sobre `--blue` dá 4,05:1, abaixo de 4,5:1. O azul um pouco mais fundo dá 5,14:1. `--blue` segue em blocos decorativos. | `--action` em `tokens.css`. |
| Links de texto em `--blue-dark` | `--blue` sobre o papel dá 3,83:1; `--blue-dark` dá 6,69:1. | — |
| Coral sempre com texto escuro | Branco sobre coral dá 2,79:1; tinta sobre coral dá 5,53:1. Bloco "Por trás da Rabik" em coral com texto escuro; CTA final em azul escuro com texto branco (7,06:1). | — |
| Borda de controles `#8f8676` | `--line` (1,25:1) não identifica um controle; `#8f8676` dá 3,4:1 (mínimo de 3:1 para componentes). | `--control-border`. |
| Etiqueta do card "Apresentação" vira azul escuro com texto branco no hover/foco | Com `--blue` e texto escuro seria 3,82:1. Detectado pelo teste de navegador. | `Delivery.astro`. |
| Números dos passos em discos coloridos, algarismo escuro | Números amarelos/mint direto no papel ficariam ilegíveis. O disco dá a cor e mantém o contraste. | — |
| CTA de WhatsApp como componente único (`WhatsAppCta.astro`), sempre link real | Número confirmado pelo Erick (`5561983645763`) em `siteConfig.whatsappDigits`. O estado "copiar mensagem" foi removido a pedido do Erick. Sem número válido, o build falha. | — |
| Mensagens por contexto definidas pelo Erick | Gerais (cabeçalho, menu, hero, fechamento), pacote básico (card e opção "Site de apresentação"), reformulação, sob medida (card e opção) e exemplos (FAQ). O preço da mensagem do básico vem de `offers.ts`, com espaço comum. | `src/config/messages.ts`. |
| Bloco coral com os objetivos da Rabik, não apresentação pessoal | Pedido do Erick: voz da marca, sem história, tempo de mercado, clientes ou equipe. Composição do bloco mantida. | `About.astro`. |
| Menu mobile com fundo sólido | O fundo 94% opaco do cabeçalho deixava o texto da página aparecer por trás dos links com o menu aberto. | `Header.astro`. |
| Seção "Soluções" entre "O que entregamos" e "Como funciona"; "Por trás da Rabik" entre processo e investimento | A ordem do §4 não posiciona as seções §9 e §11. Coloquei cada uma perto da dúvida que responde. | `src/pages/index.astro`. |
| Seleção de soluções com rádios nativos + CSS `:has()` | Setas do teclado e semântica corretas sem tablist incompleto; troca de painel funciona sem JS. Com JS, aparece a mensagem editável. | — |
| Cards de entrega focáveis (`tabindex="0"`) | O SDD pede que a mudança de cor funcione no foco (§8, AC-10). Não são links: só realçam. | `Delivery.astro`. |
| Disclosure "Ver o que está incluído em detalhe" no investimento | Mantém a transparência das condições do plano comercial (domínio especial, limites da renovação, 30 dias) sem virar tabela. | `offerText.details`. |
| Fontes locais (Plus Jakarta Sans + DM Sans) | SDD v2 §3.3. Hospedadas no próprio site, sem Google Fonts. | — |
| GitHub do Erick removido | Link para trabalhos anteriores fora do FAQ contraria o §2.2. | — |

## Mantido da v1

| Decisão | Motivo |
|---|---|
| Astro 7 + TypeScript, HTML estático, sem backend/CMS/analytics | Continua atendendo o SDD v2 §19. |
| Contatos da Rabik como `null` até confirmação | O WhatsApp do portfólio pessoal não foi confirmado como comercial. |
| Produção falha sem WhatsApp, domínio e responsável | SDD v2 §15 e §20. |
| Logo vetorizada a partir do PNG, sempre via `currentColor` | Sem borda branca, sem alterar os personagens. |
| Revelação de seções só depois que o script confirma o IntersectionObserver | Sem JS ou com movimento reduzido, nada fica escondido. |
