# Validação — v2 (25/09/2026)

## Favicon com o símbolo (26/09/2026)

| Verificação | Resultado |
|---|---|
| Arquivos | `favicon.ico` (PNG embutido em 16, 32 e 48 px), `favicon.svg`, `favicon-96x96.png`, `apple-touch-icon.png` (180 px). `favicon-32.png` (antigo "R") removido e sem referência. |
| URLs no preview | As quatro respondem 200 com o tipo certo (`image/x-icon`, `image/svg+xml`, `image/png`); conteúdo servido idêntico aos arquivos; `/favicon-32.png` responde 404 |
| Todas as páginas | `/`, `/privacidade/` e a 404 declaram o mesmo conjunto; `npm run qa` confere que os 4 ícones carregam e decodificam em cada página, numa sessão nova (**43/43**) |
| Escolha do navegador | Chromium com janela visível e **perfil novo a cada página** (sem cache) pede `/favicon.svg` → 200 nas três páginas |
| Legibilidade | Cada tamanho foi inspecionado pixel a pixel sobre fundo claro e escuro; o SVG foi renderizado numa barra de abas em 1× e 2×: três personagens separados e reconhecíveis |
| Separação dos personagens | Medida no original: só se encostam com contorno ≥ 36; o máximo usado é 24. Em 16–48 px as figuras ficam afastadas por inteiro |
| Produção | Em produção, `robots.txt` libera todo o site (`Allow: /`), incluindo os ícones; no preview, bloqueia tudo de propósito |

Não verificado: aparência no Firefox/Safari e o cache de favicon de navegadores que já tinham visitado o preview (use uma janela anônima ou limpe o cache do site).

---

## Ajuste de WhatsApp e bloco de objetivos (25/09/2026)

| Verificação | Resultado |
|---|---|
| `npm run check` | 0 erros, 0 avisos |
| `npm test` | 28/28 — mensagens exatas por contexto; URL igual a `https://wa.me/5561983645763?text=${encodeURIComponent(msg)}`; acentos e espaços codificados e decodificados sem perda |
| `npm run build` | `verify-dist: ok` |
| `npm run qa` | **40/40** — os 10 CTAs (cabeçalho, menu mobile, hero, 3 soluções, 2 de investimento, FAQ, fechamento) são links reais com o número configurado, a mensagem do contexto e `target="_blank"`; nenhum botão de copiar nem aviso de configuração; mensagem editada nas soluções chega ao link |
| HTML gerado | 11 links `wa.me/5561983645763` (10 CTAs + link direto do rodapé) |
| Bloco "Seu negócio merece um site à altura do que faz." | Revisado em 390, 768 e 1440 px |

Abrir o link não envia nada: o WhatsApp abre com o texto para a pessoa revisar. A abertura no aplicativo real não foi testada aqui.

---


Tudo abaixo foi executado neste ambiente (Windows 11, Node 24.14, Chromium do Playwright 1.63). Nada foi estimado.

## Build e checagens

| Comando | Resultado |
|---|---|
| `npm run check` | 0 erros, 0 avisos |
| `npm test` | 28/28 testes passando |
| `npm run build` | 3 páginas (`/`, `/privacidade/`, `/404`); `verify-dist: ok` (sem nomes de projetos, `/projetos/`, "portfólio", "cases", depoimentos, placeholders ou `wa.me` vazio; `lang="pt-BR"` e um H1 por página) |
| `npm run build:production` | **Falha de propósito**, listando WhatsApp, domínio e responsável |
| `npm run qa` (preview sem número) | **38/38** — saída em `validacao/qa-browser.txt` |
| `npm run qa` com `QA_WHATSAPP` num build temporário com número de teste | **37/37** — o link usa o número configurado, a mensagem exata e abre em nova aba só pelo clique. O build temporário foi apagado e a configuração voltou a `null`. |

### Critérios de aceitação

| ID | Como foi verificado | Resultado |
|---|---|---|
| AC-01 | 390×844: H1, texto e CTA terminam em 507 px; ilustração vem depois | ok |
| AC-02 | 1440×900: H1 com 50 px em 3 linhas; hero termina em 691 px | ok |
| AC-03 | Nenhum link, imagem ou nome de projeto na página; menu sem "Projetos"; `/projetos/` responde 404; `verify-dist` barra no build | ok |
| AC-04 | FAQ "Posso ver exemplos antes de decidir?" mostra "Pedir exemplos pelo WhatsApp" | ok |
| AC-05 | Mensagem idêntica à do SDD; número = configurado (build de teste) | ok |
| AC-06 | Sem número: nenhum `wa.me`, botão copia a mensagem e informa "Mensagem copiada" | ok |
| AC-07 | Cada solução troca CTA e mensagem juntos; nenhum preço; texto editado chega ao link como texto | ok |
| AC-08 | R$ 997, "R$ 498,50 para iniciar + R$ 498,50 após a aprovação" e R$ 100/ano visíveis | ok |
| AC-09 | "Sob orçamento" com loja/painel/integração | ok |
| AC-10 | Cards de entrega com foco visível e etiqueta que muda de cor; FAQ abre com Enter; soluções mudam com as setas; menu fecha com Escape e devolve o foco | ok |
| AC-11 | Movimento reduzido: nada escondido nem deslocado | ok |
| AC-12 | Sem JS: preço, 6 perguntas, navegação e CTA de cada solução visíveis; soluções trocam só com CSS; FAQ abre | ok |
| AC-13 | Logo vetorizada e comparada lado a lado com o original; personagens separados | ok |
| AC-14 | Build sem erros; zero erros de console | ok |
| AC-15 | Testes barram portfólio, cases, depoimentos, "garantimos" e percentuais; revisão manual dos textos | ok |

Reflow sem rolagem horizontal em 320 px e 640 px (equivale a zoom de 400% e 200% em 1280 px), na home e na privacidade.

## Lighthouse 13.5 (mobile, throttling simulado, build local)

| Página | Desempenho | Acessibilidade | Boas práticas | SEO | LCP | CLS | TBT | Peso |
|---|---|---|---|---|---|---|---|---|
| `/` | 100 | 100 | 100 | 63* | 1,5 s | 0 | 0 ms | 89 KiB |

\* A única falha de SEO é `is-crawlable`: o preview tem `noindex` **de propósito**. No build de produção com domínio configurado, o `noindex` sai.

Limitações: medição de laboratório em servidor local, sem rede real. Não há dados de campo. Pontuação automática não é certificação de acessibilidade.

## Contraste (calculado com a fórmula WCAG)

Tinta/papel 14,65 · texto secundário/papel 5,27 · branco/botão `#2c66e0` 5,14 · branco/azul escuro 7,06 · tinta/coral 5,53 · tinta/amarelo 10,84 · tinta/mint 8,87 · links `--blue-dark`/papel 6,69 · borda de controles/papel 3,41.

## Revisão visual

Capturas em `validacao/` (WebP), feitas após a última rodada de correções:

- 390 × 844: `390-hero`, `390-faq`, `390-full-pagina`
- 768 × 1024: `768-menu`, `768-full-pagina`
- 1280 × 720: `1280-hero`, `1280-investimento`
- 1440 × 900: `1440-hero`, `1440-full-pagina`, `1440-priv-pagina`, `1440-404`

### Correções feitas após as capturas

1. H1 em 4 linhas a 1440 px → tamanho e largura da coluna ajustados (3 linhas).
2. Espaço entre "precisa" e "aparecer" removido pelo compilador → espaço explícito.
3. Círculo rabiscado deslocado e cortado (escala proporcional + `max-width` global) → acompanha a frase inteira em 390, 768 e 1440 px.
4. Seta rabiscada sem direção clara → seta desenhada apontando para o CTA.
5. Espaço vertical entre seções reduzido (88 → 72 px no desktop).
6. Estrelinha do CTA final encostando no texto no celular → oculta abaixo de 760 px.
7. Contraste da etiqueta do card "Apresentação" no foco (3,82:1) → azul escuro com texto branco.
8. Chave duplicada que apagaria o texto dos cards de entrega → corrigida antes de publicar a revisão.

## Não verificado

- Leitores de tela reais (NVDA/VoiceOver).
- Safari/iOS e Firefox (revisão só no Chromium).
- Abertura real do WhatsApp com o número definitivo da Rabik.
