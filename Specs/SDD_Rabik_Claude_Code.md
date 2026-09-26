# RABIK — SDD de implementação do site

**Versão:** 1.0 · 25/09/2026  
**Responsável pela marca:** Erick  
**Executor:** Claude Code no repositório do usuário  
**Entrega:** site completo, navegável, responsivo e revisado visualmente, com conteúdo centralizado e documentação de manutenção.

## 0. Instrução principal ao Claude Code

Você vai projetar e implementar o site da **Rabik**, marca de desenvolvimento de sites e sistemas do Erick. Assuma as responsabilidades de direção de arte, UX, desenvolvimento frontend e revisão de qualidade. Este documento define o produto e os critérios de aceitação. Execute a implementação; não entregue apenas uma proposta de estrutura ou um plano.

Leia integralmente este SDD antes de editar. Inspecione o repositório, as instruções locais, os arquivos de identidade visual e os projetos existentes. Preserve alterações do usuário. Faça escolhas reversíveis e registre suposições. Trabalhe até concluir o que for possível localmente, sem interromper para pedir aprovação de cores, espaçamentos, componentes ou decisões já especificadas aqui.

O resultado deve ser visualmente marcante pela composição, pela qualidade das imagens dos projetos e pelos detalhes de interação. Não confunda acabamento com quantidade de efeitos. O usuário já rejeitou uma versão de portfólio com textos comerciais forçados, botões excessivos, elementos gigantes e muitas seções repetitivas.

**Prioridade de decisão:** instrução atual do Erick → fatos e condições comerciais confirmados → funcionalidade e acessibilidade → direção visual deste documento → efeito decorativo.

O nome **Rabik está escolhido**. Não reinicie a discussão de naming. Não publique o site, compre domínio, contrate serviços, envie mensagens ou modifique produção só porque isso aparece como etapa futura. Deixe o projeto pronto para revisão e informe os comandos de publicação. Uma autorização posterior explícita pode ampliar esse escopo.

## 1. Objetivo e posicionamento

A Rabik transforma informações de um negócio em uma presença digital bem organizada e desenvolve recursos adicionais quando eles fazem sentido para a operação.

O site deve permitir que um visitante:

1. Entenda o que a Rabik faz em poucos segundos.
2. Veja exemplos concretos da capacidade técnica e visual do Erick.
3. Diferencie uma página de apresentação de um sistema com painel ou loja.
4. Entenda o preço de entrada e os custos posteriores, sem surpresa.
5. Inicie uma conversa pelo WhatsApp com um resumo do que precisa.

**Público principal:** donos e responsáveis por pequenos negócios, incluindo salões, barbearias, pet shops, academias e prestadores de serviços. Eles não precisam conhecer programação.

**Público secundário:** pessoas com uma ideia de produto, painel ou aplicação web que precisam de avaliação técnica.

**Personalidade:** segura, precisa, criativa, próxima e tecnológica. O texto deve soar como uma conversa com um desenvolvedor que sabe explicar seu trabalho.

Não inventar estrutura empresarial, CNPJ, escritório, funcionários, certificações, anos de atuação, volume de projetos, resultados financeiros ou carteira de clientes. Os três personagens do símbolo não representam necessariamente três sócios ou três integrantes da equipe. Erick conduz o desenvolvimento; eventuais parceiros comerciais não precisam aparecer no site.

## 2. Fontes e grau de certeza

### 2.1 Materiais disponíveis

| Material | Uso autorizado no planejamento | Cuidado |
|---|---|---|
| Logo Rabik e desenho dos três personagens, se anexados ao repositório | Identidade da marca | Não supor um caminho de arquivo que não existe; inspecionar `assets/` e demais pastas |
| https://joaodev-pro.vercel.app/ | Referência de atmosfera escura, navegação compacta e apresentação pessoal | Não copiar layout integral, textos, fotografia ou identidade |
| https://erick-rocha-web.github.io/Portfolio/ | Fonte para localizar projetos e informações do Erick | Confirmar dados atuais e autoria; não transportar todo o conteúdo automaticamente |
| https://vault-scanner.vercel.app/ | Projeto próprio de aplicação de segurança em desenvolvimento | Não afirmar auditoria, certificação, clientes ou eficácia não demonstrada |
| https://trabalho-map-mat.vercel.app/ | Projeto educacional de juros simples e compostos com interação | Identificar como projeto educacional |
| https://aristoteles-no-liceu.vercel.app/ | Projeto escolar sobre Aristóteles | Conferir as funcionalidades antes de descrevê-las |
| https://animalandiapet.vercel.app/ | Demonstração produzida para uma pet shop | Não classificar como cliente contratado ou caso de sucesso; publicação no portfólio depende de autorização |
| Plano comercial do Erick, revisado em 25/09/2026 | Oferta de R$ 997 e renovação de R$ 100/ano | Condições relevantes estão transcritas na seção 10 |

Na elaboração deste SDD, a abertura automatizada dos seis sites acima não retornou seu conteúdo. As descrições derivam do histórico e dos materiais fornecidos pelo Erick. **Você deve conferir os projetos no navegador e/ou no código antes de produzir screenshots e afirmações novas.** A referência visual também tem capturas fornecidas anteriormente; se não estiverem no repositório, siga os limites de composição deste SDD.

### 2.2 Campos que não podem ser inventados

- WhatsApp comercial definitivo da Rabik.
- E-mail comercial definitivo e domínio final.
- Perfis sociais próprios da marca.
- Identificação do responsável a constar nos avisos públicos.
- Autorização para divulgar nomes, fotos e demonstrações feitas para terceiros.
- Depoimentos e resultados de clientes.

Procure esses dados em configurações existentes e materiais do usuário. Não reaproveite o telefone de uma pet shop, salão ou outro prospect. Não crie um endereço como `contato@rabik.com.br` como se já existisse.

Se algum dado faltar, conclua toda a implementação e registre em `docs/PENDENCIAS.md`. Use uma configuração explícita, sem links fictícios. O preview deve continuar navegável; o build de produção deve apontar somente as pendências que realmente impedem a publicação. A ausência de depoimentos, redes sociais ou fotografia pessoal não é bloqueio: essas partes podem simplesmente não aparecer.

## 3. Direção de arte: tecnologia com uma assinatura humana

### 3.1 Conceito visual

Uma interface escura, precisa e compacta, com azul elétrico como destaque e o símbolo desenhado dos três personagens como assinatura. A parte tecnológica vem da organização, tipografia, miniaturas reais de interfaces e transições; a parte humana vem do traço da marca e da apresentação do Erick.

Escolher **uma direção visual coerente**. Não misturar glassmorphism intenso, neomorfismo, fundos de galáxia, cartões neon e ilustrações 3D em um mesmo layout.

O primeiro quadro deve apresentar uma composição assimétrica de duas colunas: mensagem breve à esquerda e uma vitrine de projeto à direita. A imagem do projeto deve ser legível como interface, não uma textura minúscula em um mockup distante.

### 3.2 Sistema de marca

- Grafia de interface: **Rabik**. A logo pode usar **RABIK**, conforme o arquivo fornecido.
- Três bonequinhos de palito lado a lado, separados, com variações orgânicas no traço.
- **Nunca de mãos dadas.** Não unir braços, corpos ou bases.
- Não redesenhar como três pessoas corporativas genéricas, três pontos ou um ícone de equipe de biblioteca.
- Não adicionar aperto de mãos, organograma, coroa ou emblema de agência.
- Cabeçalho: versão horizontal compacta; altura total aproximada de 28–34 px.
- Rodapé: versão maior, até 180 px de largura; não usar como título de tela inteira.
- Favicon: usar uma forma derivada da letra R se o trio perder legibilidade em 16–32 px. Não forçar detalhes ilegíveis.
- Se houver SVG vetorial aprovado, preferi-lo. Se houver somente PNG, usar o arquivo corretamente e preparar uma versão vetorial fiel apenas se necessário, sem alterar a ideia do símbolo.
- Se faltar o arquivo da logo, usar temporariamente um wordmark tipográfico Rabik; não travar o restante do site.

O arquivo de logo gerado anteriormente mostra os três personagens acima de RABIK, em preto sobre branco. Se esse arquivo for fornecido, ele é referência de geometria, não autorização para exibir um retângulo branco enorme sobre o site escuro. Preparar aplicação monocromática adequada e preservar o traço.

### 3.3 Cores

Tokens iniciais; ajustes finos de contraste são permitidos:

```css
:root {
  --bg: #080c10;
  --surface: #10171e;
  --surface-raised: #17222d;
  --text: #f3f6fa;
  --text-muted: #a8b4c0;
  --accent: #49b4ff;
  --accent-hover: #7ac9ff;
  --on-accent: #06111a;
  --border: #293744;
  --focus: #9dd8ff;
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --container: 1160px;
}
```

- Botão azul usa texto escuro, após verificação de contraste.
- Texto secundário não deve desaparecer em cinza escuro.
- Bordas decorativas podem ser discretas; bordas de controles precisam permanecer identificáveis.
- Um brilho azul estático suave atrás da vitrine é permitido, com área pequena e baixa opacidade. Não iluminar toda a página com gradientes.
- Não usar roxo como destaque principal nesta versão.
- Não adicionar alternância claro/escuro: a direção escura é a experiência principal.

### 3.4 Tipografia e proporções

Família principal: **Manrope**, preferencialmente hospedada localmente com licença incluída; fallback `system-ui, sans-serif`. Usar apenas os pesos necessários. Uma família é suficiente. Não usar serifa no título principal.

| Elemento | Desktop | Mobile | Observação |
|---|---:|---:|---|
| Título principal | 48–56 px | 34–40 px | Máximo de 3 linhas desktop; nunca 90–120 px |
| Título de seção | 30–36 px | 26–30 px | Uma ideia por título |
| Título de projeto | 20–24 px | 20–22 px | Sem competir com H1 |
| Texto principal | 16–18 px | 16 px | Entrelinha de 1,55–1,7 |
| Navegação/botões | 14–16 px | 14–16 px | Sem texto espremido |
| Rótulos auxiliares | 12–13 px | 12–13 px | Nunca informação essencial apenas nesse tamanho |

- Largura máxima do conteúdo: 1160 px; casos de projeto podem usar imagem com até 1280 px.
- Margens laterais: 20 px no celular; 32 px no tablet; margem automática no desktop.
- Seções com 72–96 px de respiro vertical no desktop e 48–64 px no celular.
- Botões: 44–48 px de altura; áreas de toque de pelo menos 44 × 44 px.
- H1 deve respeitar o espaço real da coluna: ajustar `clamp`, largura e quebra de linha em conjunto.
- Cards com padding de 20–28 px; evitar blocos de 48–64 px de padding sem necessidade.
- Não definir `min-height: 100vh` em todas as seções.
- O conteúdo não pode ficar minúsculo para aparentar ser compacto. Reduzir redundância e espaço desperdiçado, preservando legibilidade.

## 4. Arquitetura da informação

### 4.1 Rotas

| Rota | Finalidade |
|---|---|
| `/` | Apresentação, projetos selecionados, soluções, processo, investimento e contato |
| `/projetos/` | Índice dos projetos publicáveis, com filtros simples |
| `/projetos/[slug]/` | Página de projeto com fatos, imagens e explicação do desenvolvimento |
| `/privacidade/` | Aviso compatível com os dados realmente tratados pela implementação |
| `/404` | Página de erro com retorno ao início e aos projetos |

Não criar blog vazio, área de cliente, login, página de vagas, dashboard de vendedores ou catálogo de dezenas de serviços. O sistema comercial interno fica fora deste site.

### 4.2 Ordem da home

1. Cabeçalho.
2. Hero com vitrine interativa compacta.
3. Projetos selecionados.
4. Soluções e seleção do tipo de projeto.
5. Processo e apresentação breve do Erick.
6. Investimento.
7. Perguntas frequentes.
8. Contato com resumo opcional.
9. Rodapé.

Cada bloco precisa cumprir uma função distinta. Não repetir a mesma promessa em três seções. Não adicionar uma seção só porque existe um componente pronto.

## 5. Cabeçalho e hero

### 5.1 Cabeçalho

Container flutuante discreto, alinhado à grade, com fundo quase opaco, borda fina e cantos arredondados. A ideia de navegação compacta da referência serve como ponto de partida, sem copiar sua identidade.

- Desktop: logo à esquerda, links `Projetos`, `Soluções`, `Como funciona`, `Investimento`; botão `Falar sobre um projeto`.
- Altura aproximada: 64–72 px; distância do topo: 16–20 px.
- No scroll, pode ficar sticky. Não aumentar de tamanho ou ocultar conteúdo.
- Mobile: logo, botão de menu e CTA dentro do menu. O menu deve abrir por clique, fechar com Escape e restituir o foco.
- Âncoras com `scroll-margin-top` compatível com a altura do cabeçalho.
- Incluir link de pular para o conteúdo.

### 5.2 Copy inicial do hero

**Rótulo:** `RABIK · DESIGN E DESENVOLVIMENTO`

**H1:** `Seu próximo projeto começa a tomar forma aqui.`

**Texto:** `Sites para apresentar seu negócio. Interfaces e sistemas para colocar novas ideias em prática. Do primeiro desenho à publicação, com desenvolvimento conduzido por Erick.`

**CTA principal:** `Ver projetos` → seção de projetos.

**CTA secundário:** `Conversar sobre minha ideia` → contato.

O H1 pode receber uma edição curta se a composição exigir, mas deve manter o sentido. Não usar frases como “revolucionamos sua presença digital”, “desbloqueie seu potencial”, “eleve seu negócio ao próximo nível” ou “transformamos cliques em clientes”. Não colocar a promessa de visibilidade no Google no centro da marca.

### 5.3 Vitrine interativa do hero

Exibir uma interface real de projeto em um frame de navegador minimalista. Tamanho inicial no desktop: aproximadamente 460–530 px de largura por 340–410 px de altura, considerando imagem e legenda. O conjunto deve caber no espaço da coluna sem esmagar o texto.

Acima ou abaixo do frame, três controles acessíveis: `Sites`, `Interfaces`, `Interação`. Cada controle apresenta um projeto real e verificado que ilustre a categoria. Se não houver projeto elegível para uma categoria, omitir esse controle; não inventar uma entrega para preencher o layout.

- Imagem estática otimizada; sem carregar iframes externos automaticamente.
- Troca por clique e teclado; sem carrossel automático.
- Transição curta de opacidade, com dimensões estáveis para evitar salto.
- Legenda: nome do projeto + categoria honesta + link `Explorar projeto`.
- No máximo uma linha explicativa abaixo da legenda.
- Em touch, não exigir hover ou arrastar.
- Se houver menos de dois projetos verificados, mostrar uma única vitrine bem resolvida.

O hero precisa começar a mostrar o conteúdo útil no primeiro quadro. Como referência em 1440 × 900, manter cabeçalho e hero dentro de aproximadamente 720–820 px; testar no navegador, sem fixar uma altura que corte textos. Em 390 × 844, o título, a explicação e o CTA principal precisam aparecer sem depender da vitrine estar totalmente visível.

## 6. Projetos: principal prova de qualidade

### 6.1 Seleção e hierarquia

Exibir 3 projetos selecionados na home quando houver material suficiente: um card principal mais largo e dois complementares, ou uma grade de duas colunas com hierarquia clara. Evitar três cards idênticos com prints ilegíveis. O índice pode conter todos os projetos verificados.

Conteúdo inicial elegível:

| Projeto | Categoria editorial | O que pode ser contado inicialmente | Não afirmar |
|---|---|---|---|
| VaultScanner | Produto próprio · em desenvolvimento | Aplicação voltada à análise de segurança de código; explicar somente telas e fluxos verificados | Uso por empresas, precisão, cobertura total, certificação, garantia de segurança |
| O poder do tempo | Projeto educacional · interação | Juros simples e compostos com simulador, gráficos e conteúdo didático, após conferência | Projeto comercial ou aumento de aprendizagem medido |
| Aristóteles no Liceu | Projeto educacional · conteúdo | Site sobre Aristóteles; descrever narrativa e interação observadas | Funcionalidades não verificadas |
| Animalandia | Demonstração comercial | Apresentação de banho e tosa e categorias de produtos, se a divulgação estiver autorizada | Contrato fechado, cliente atendido, resultado de vendas |

Se a demonstração de terceiro não tiver autorização, mantenha-a fora do build público. Pode permanecer cadastrada como rascunho local. Não substituir a marca por outra mantendo fotos e dados sem autorização.

Não colocar todos os projetos escolares como “clientes”. A qualidade pode ser demonstrada com estudos e produtos próprios, desde que classificados corretamente.

### 6.2 Estrutura do card

- Imagem real dominante, com recorte planejado para celular e desktop.
- Nome, categoria e descrição de até duas linhas.
- No máximo três rótulos: exemplo `Interface`, `Interação`, `Responsivo`; usar tecnologias apenas onde forem relevantes e confirmadas.
- Link `Ver projeto` para a página interna.
- Link externo separado `Abrir site`, se disponível.
- Não aninhar botões dentro de um link que cobre todo o card.
- Hover: elevação de até 4 px e leve mudança de borda; duração aproximada de 180–220 ms. O conteúdo já deve estar visível antes do hover.

### 6.3 Página interna de projeto

Layout editorial, com largura contida, texto curto e imagens grandes o suficiente para compreender a interface:

1. Nome, classificação e resumo.
2. Hero visual real do projeto.
3. `O que o projeto precisava resolver` — objetivo real, sem dramatização.
4. `O que foi desenvolvido` — itens verificáveis.
5. Duas ou três decisões de interface explicadas por imagem e texto.
6. Captura em celular, se existir.
7. Papel do Erick e tecnologias confirmadas.
8. Link externo, repositório público se verificado e próximo projeto.
9. CTA breve `Tem um projeto parecido em mente?`.

Não inventar métricas. Não escrever “resultado: +300% de conversão”. Quando não houver dados de resultado, encerrar com o que foi entregue e o que foi aprendido tecnicamente.

### 6.4 Filtros do índice

Filtros por `Todos`, `Sites`, `Aplicações`, `Interativos` apenas se houver volume que justifique pelo menos duas categorias. Com três itens, a grade simples pode ser melhor. Estado selecionado visível, acessível e associado ao conteúdo; anunciar a quantidade de resultados sem deslocar o foco.

Sem JavaScript, todos os projetos publicáveis devem continuar visíveis e os links funcionar.

## 7. Soluções e interação de escolha

**Título:** `O que você quer colocar no ar?`

Três opções compactas:

| Opção | Texto público | Ação |
|---|---|---|
| Apresentar meu negócio | `Serviços, fotos e informações reunidos em uma página, com contato pelo WhatsApp.` | Seleciona `site-apresentacao` |
| Atualizar meu site | `Uma revisão da estrutura, do visual e da experiência do site que você já tem.` | Seleciona `reformulacao` |
| Criar algo sob medida | `Painéis, lojas e integrações avaliados conforme as funções que você precisa.` | Seleciona `sob-medida` |

Interação: ao selecionar uma opção, mostrar ao lado uma explicação de 2–3 itens e um botão `Levar essa ideia para a conversa`. A seleção alimenta o resumo da seção de contato. Este é o principal momento interativo útil do site.

Em desktop, controles à esquerda e conteúdo à direita; em mobile, controles empilhados seguidos da resposta. Usar radios ou botões com estados semanticamente corretos; não implementar um tablist incompleto.

Não simular orçamento instantâneo. Não mostrar números fictícios de retorno, visitantes ou vendas. A escolha de painel ou loja deve levar a `Sob orçamento`, nunca somar um adicional arbitrário a R$ 997.

## 8. Processo e quem desenvolve

### 8.1 Processo

**Título:** `Você acompanha cada etapa.`

Quatro etapas, em uma linha no desktop e lista no mobile:

1. **Entender:** `Conversamos sobre o negócio, o objetivo e o que precisa entrar no projeto.`
2. **Definir:** `Você recebe o escopo, o valor e o prazo antes do início.`
3. **Construir:** `O site ganha forma em uma prévia para você acompanhar e reunir seus ajustes.`
4. **Publicar:** `Depois da aprovação, fazemos a publicação e entregamos as orientações combinadas.`

Aparecimento sutil ao entrar na tela; nenhuma animação deve obrigar a esperar para ler. Não usar uma linha do tempo com scroll travado.

### 8.2 Apresentação do Erick

Bloco compacto, integrado ao processo ou logo abaixo:

**Título:** `Desenvolvimento conduzido por Erick.`

**Texto base:** `Sou desenvolvedor e responsável pela Rabik. Trabalho com criação de sites, interfaces interativas e projetos próprios de software. Minha proposta é entender o que você precisa, explicar as escolhas e construir uma solução que faça sentido para o seu projeto.`

- Se houver retrato real adequado, usar com enquadramento simples e autorização.
- Sem retrato, compor o bloco com o símbolo da marca; não gerar uma pessoa para representar o Erick.
- Pode incluir link para o GitHub confirmado e para o VaultScanner.
- Não exibir idade, informações familiares ou justificativas sobre formalização no texto de apresentação.
- Não criar cargos e biografias de amigos.

## 9. Contato: resumo simples para WhatsApp

### 9.1 Fluxo

**Título:** `Vamos conversar sobre a sua ideia?`

**Texto:** `Conte o que você quer criar. Se preferir, use as opções abaixo para levar um resumo para o WhatsApp.`

Formulário local e opcional, com no máximo três grupos visíveis:

1. **O que você precisa?** Apresentação / Reformulação / Projeto sob medida / Ainda não sei.
2. **Nome do negócio ou projeto.** Campo opcional, limite de 100 caracteres.
3. **O que você gostaria de incluir?** Texto opcional, limite de 600 caracteres.

Não pedir CPF, CNPJ, endereço residencial, senha, telefone do visitante ou arquivo. A primeira conversa não exige esse atrito.

Mostrar um resumo editável ou uma prévia de mensagem antes de abrir o WhatsApp:

```text
Olá, Erick! Conheci a Rabik e gostaria de conversar sobre um projeto.

Tipo: [opção selecionada]
Negócio/projeto: [somente quando preenchido]
O que preciso: [somente quando preenchido]
```

**CTA:** `Continuar no WhatsApp`.

Texto de apoio: `Você poderá revisar a mensagem no WhatsApp antes de enviar.`

Oferecer também um link direto `Prefiro conversar sem preencher` e botão `Copiar resumo`.

### 9.2 Regras técnicas e estados

- Construir o link como `https://wa.me/<numero-confirmado>?text=<encodeURIComponent(mensagem)>`.
- Guardar o número em formato internacional somente com dígitos, confirmado pelo Erick. Validar estrutura não equivale a confirmar cadastro no WhatsApp.
- Não inserir ou remover nono dígito por tentativa. Não converter telefone fixo em celular.
- Não abrir WhatsApp ao selecionar uma opção: somente após clique explícito no CTA.
- Construir a mensagem como texto; nunca inserir dados digitados via `innerHTML`.
- Não enviar mensagens automaticamente. Não mostrar “enviado com sucesso” ao apenas abrir um link.
- Estado de cópia: `Resumo copiado`; falha: permitir selecionar e copiar manualmente.
- Manter o resumo apenas em memória durante a sessão. Não salvar em localStorage nem enviar a analytics.
- Em preview sem número configurado: permitir montar/copiar o resumo e mostrar discretamente `Canal de contato em configuração`; não criar link quebrado.
- Na produção, ausência de WhatsApp confirmado bloqueia a publicação deste fluxo até configurar um canal real.
- Sem JavaScript: exibir contato direto válido, ocultando o construtor de resumo inoperante.

Se houver CTA fixo no mobile, mostrá-lo apenas depois que o hero sair da tela, ocultá-lo quando contato/rodapé entrarem e considerar `safe-area-inset-bottom`. Não cobrir campos, controles ou texto ao ampliar a página.

## 10. Investimento: conteúdo comercial obrigatório

Fonte: plano comercial do Erick revisado em 25/09/2026. Não criar três planos fictícios. Exibir **uma oferta básica** e **projetos sob orçamento**.

### 10.1 Card principal: Site de apresentação

**Preço:** `R$ 997`  
**Complemento:** `Pela criação do site básico.`

Lista curta visível:

- Uma página com até seis seções.
- Adaptado para celular, tablet e computador.
- Serviços, fotos, localização e contato pelo WhatsApp.
- Duas rodadas de ajustes dentro do escopo.
- Primeiro período anual de um domínio .com.br comum e hospedagem estática incluído.

**Condição visível junto ao preço:** `Depois do primeiro período, R$ 100 por ano para domínio e gestão técnica básica. Alterações e recursos extras são orçados separadamente.`

**Pagamento:** `R$ 498,50 para iniciar e R$ 498,50 após aprovação, antes da publicação definitiva.`

**CTA:** `Conversar sobre o site básico` — preenche a intenção de site de apresentação, sem afirmar contratação concluída.

Prazo: `Produção em até sete dias úteis, a partir da data combinada, com entrada e materiais completos.` A data de início depende da agenda confirmada. Não usar um contador de vagas ou prazo automático que ignore essa condição.

### 10.2 Detalhamento em disclosure acessível

Rótulo `Ver o que está incluído`:

- Uma empresa, uma identidade visual e uma unidade/endereço.
- Até oito serviços ou categorias, com descrição curta.
- Até doze imagens inseridas e otimizadas.
- Organização e revisão de até 700 palavras a partir das informações enviadas.
- Um WhatsApp principal e links de contato/redes/localização fornecidos.
- Título, descrição e estrutura técnica para buscadores; sem garantia de posição ou volume de acessos.
- Duas rodadas de listas consolidadas de ajustes dentro do escopo; correções de defeitos não consomem essas rodadas.
- Domínio .com.br comum disponível para registro. Domínio especial ou já pertencente a terceiro exige análise.
- O ciclo anual acompanha o vencimento informado na proposta.
- A renovação de R$ 100 cobre domínio e gestão técnica básica; não inclui novas páginas, alterações ilimitadas, painel ou manutenção de sistemas.
- Acompanhamento inicial de 30 dias para dúvidas e problemas da entrega, sem afastar responsabilidades aplicáveis.

Não apresentar os R$ 100 inteiros como tarifa oficial do Registro.br. Não publicar o custo interno hipotético de R$ 40 como preço final do serviço. Não chamar o primeiro ano de “grátis” escondendo que está incluído na criação.

### 10.3 Bloco secundário: Projeto sob medida

**Título:** `Precisa de painel, loja ou integração?`

**Texto:** `Esses projetos têm escopo e orçamento próprios. Definimos as funções, a plataforma e os custos de manutenção antes de começar.`

**Preço:** `Sob orçamento`.

**Observação:** `Pode haver custos mensais ou anuais de plataforma, infraestrutura e manutenção, conforme a solução.`

Não usar a anualidade de R$ 100 como promessa para esses projetos. Não vender automação de WhatsApp, pagamentos, usuários ou painel como parte implícita do básico. Não divulgar parcelamento no cartão enquanto condições reais não estiverem confirmadas.

## 11. Perguntas frequentes: texto base

Usar no máximo seis perguntas, com `<details>` ou componente equivalente acessível.

**Vou precisar ficar publicando conteúdo?**  
Um site de apresentação pode reunir informações estáveis do negócio. Você atualiza quando serviços, fotos, contatos ou outras informações mudarem. Alterações posteriores são combinadas conforme o escopo.

**Eu mesmo posso alterar o site?**  
O básico não inclui painel de edição. Se você quiser trocar textos, imagens ou produtos por conta própria, isso pode ser previsto em um projeto com orçamento específico.

**Tem mensalidade?**  
O básico não tem mensalidade da Rabik. O primeiro período anual de domínio e hospedagem está incluído nos R$ 997. Depois, a renovação é de R$ 100 por ano para domínio e gestão técnica básica. Projetos com sistemas podem ter outras cobranças previstas na proposta.

**Vocês fazem loja virtual?**  
Podemos avaliar uma loja conforme os produtos, o estoque, o frete, os meios de pagamento e quem vai administrar os pedidos. A criação e os custos recorrentes são definidos em orçamento próprio.

**O site vai aparecer no Google?**  
O projeto inclui preparação técnica para buscadores. A indexação e a posição nas pesquisas dependem de fatores externos e não são garantidas. O endereço também pode ser divulgado no perfil da empresa no Google, no Instagram e nos materiais do negócio.

**Como acompanho e peço ajustes?**  
Você recebe uma prévia para avaliar e reunir suas observações. O básico inclui duas rodadas de ajustes dentro do escopo. Novas funções ou mudanças de escopo são combinadas antes da execução.

Não usar FAQ como depósito de textos extensos ou avisos que deveriam estar ao lado do preço.

## 12. Imagens e outros assets

### 12.1 Manifesto obrigatório

Criar `docs/ASSETS.md` com: arquivo, origem, finalidade, autorização/licença conhecida, se é real ou ilustrativo, dimensões e pendências. Não baixar imagens aleatórias do Google para preencher a página.

| Asset | Quantidade inicial | Diretriz |
|---|---:|---|
| Logo e símbolo | 2 aplicações | SVG fiel ou raster adequado; monocromático |
| Capturas desktop de projetos | 3–4 | Reais, locais, sem dados privados, otimizadas |
| Capturas mobile | 2–3 | Reais; só para projetos que tenham página interna |
| Detalhes de interface | 2 por projeto principal, no máximo | Recortes reais que sustentem a explicação |
| Retrato do Erick | Opcional | Apenas foto real fornecida |
| Imagem social/OG | 1 padrão + variações se úteis | Wordmark, fundo da marca e tipografia legível |
| Ícones | Pequeno conjunto | Mesma família, espessura coerente, licença registrada |

### 12.2 Captura de projetos

Se tiver navegador disponível, abrir as URLs e capturar em aproximadamente 1440 × 1000 e 390 × 844. Esperar fontes e imagens carregarem; verificar banners, menus e estados antes da captura. Não fotografar telas de login, mensagens de erro ou placeholders como se fossem a interface final.

Salvar localmente, gerar AVIF/WebP e fornecer `srcset`, `sizes`, `width` e `height`. Os screenshots podem exigir ajustes de compressão para preservar texto. O `object-position` deve ser decidido por imagem.

Se uma URL estiver inacessível, procurar screenshot existente ou executar o projeto local autorizado. Se nenhum material estiver disponível, registrar a limitação e usar um layout textual temporário no preview. O build público não deve exibir cards com imagem quebrada ou uma captura inventada.

Não carregar screenshot dinamicamente por serviço de terceiros em cada visita. Não depender de hotlink de Instagram ou Google Maps.

### 12.3 Geração por IA

**O site não precisa de fotografias geradas por IA.** O foco visual está no trabalho real e na marca.

Se houver ferramenta de imagem e fizer sentido adicionar uma única textura abstrata discreta, ela deve ser claramente decorativa, sem pessoas, escritórios, clientes, telas falsas, texto embutido ou promessa visual de equipe. Esse asset é opcional; não pode bloquear a entrega.

Não gerar print de interface para fingir que um recurso foi implementado. Não gerar testemunhos, pessoas que pareçam funcionários ou resultados de clientes.

## 13. Movimento e microinterações

| Elemento | Comportamento | Limite |
|---|---|---|
| Entrada do hero | Opacidade e deslocamento de até 12 px | 400–550 ms; conteúdo legível mesmo se a animação falhar |
| Troca de projeto | Crossfade entre imagens com tamanho estável | 180–240 ms; acionamento manual |
| Cards | Pequena elevação e mudança de borda | Até 4 px; hover e foco equivalentes |
| Botões | Cor e ícone de seta com deslocamento curto | 140–180 ms; botão nunca foge do cursor |
| Seletor de solução | Realce do estado e atualização do resumo | Resposta imediata; sem transição longa |
| Entrada de seções | Revelação única e discreta | Sem delays acumulados em listas extensas |
| Logo | Pequeno detalhe opcional ao foco/hover | Não deformar ou unir os três personagens |

Regras:

- Scroll nativo. Sem scroll hijacking, rolagem horizontal obrigatória ou cursor personalizado.
- Sem som, vídeo automático, partículas contínuas, trilhas no mouse ou preloader artificial.
- Não usar WebGL/Three.js para esta primeira versão. Se o layout só parece bom com efeitos ligados, refaça o layout.
- Movimento não pode ocultar controles, atrasar clique, deslocar foco ou causar salto de layout.
- Respeitar `prefers-reduced-motion`: remover deslocamentos, parallax e transições desnecessárias; manter todas as funções.
- Conteúdo inicialmente visível no HTML; animação é aprimoramento progressivo. Se houver classe preparatória, deve existir recuperação quando JS/observer falhar.
- Pausar qualquer efeito decorativo quando fora de tela ou com aba oculta.
- Preferir CSS, IntersectionObserver e Web Animations API. Não instalar duas bibliotecas de animação para efeitos simples.

## 14. Responsividade e acessibilidade

### 14.1 Comportamento por faixa

| Faixa | Layout |
|---|---|
| 320–639 px | Uma coluna, menu compacto, hero em texto → CTAs → vitrine, projetos empilhados |
| 640–1023 px | Duas colunas onde couber sem comprimir texto, navegação por menu se necessário |
| 1024–1439 px | Hero em duas colunas e container limitado; revisar 1280 × 720 |
| 1440 px ou mais | Largura máxima permanece; não aumentar fontes proporcionalmente à tela |

- Cards não devem obrigar o usuário a arrastar para ver informações essenciais.
- Não usar quebra manual de título que funcione apenas em um viewport.
- Interações disponíveis com mouse, teclado e touch.
- Testar zoom de 200% e reflow em 320 CSS px.
- Documentos com `lang="pt-BR"`, um H1 e hierarquia de títulos coerente.
- Contraste alvo: 4,5:1 em texto comum; 3:1 em texto grande e componentes relevantes.
- Foco visível consistente, não removido por CSS.
- Imagens decorativas com alt vazio; screenshots com descrição da tela e sua função, sem keyword stuffing.
- Inputs com labels reais; nenhum placeholder substitui label.
- Erros próximos ao campo e anunciados quando necessário; não depender só de cor.
- Menus e eventuais diálogos devem gerenciar foco e Escape corretamente.
- Ícones puramente decorativos ocultos da árvore de acessibilidade; ícones acionáveis com nome acessível.
- Não declarar certificação de acessibilidade apenas porque testes automáticos passaram.

## 15. Arquitetura técnica

### 15.1 Repositório existente tem prioridade

Antes de instalar ou migrar:

1. Leia `AGENTS.md`, `CLAUDE.md`, package manifest e lockfile.
2. Inspecione `git status` e preserve o que já foi alterado.
3. Identifique o gerenciador de pacotes e os scripts existentes.
4. Reutilize a stack se ela consegue cumprir este SDD sem retrabalho desnecessário.
5. Não execute `git reset --hard`, force push ou remoção de histórico.

Se não existir projeto, escolha inicial recomendada: **Astro + TypeScript + CSS com tokens**, com HTML estático e JavaScript localizado nos componentes interativos. React é opcional se trouxer ganho concreto; não é necessário para menu, tabs, filtros e resumo de contato.

Astro foi escolhido por permitir conteúdo pré-renderizado com interação seletiva. Confira a documentação oficial compatível com a versão instalada. Não fixar neste documento um número de versão que pode estar desatualizado.

Não adicionar banco de dados, Supabase, autenticação, CMS ou backend para esta versão. O formulário monta uma mensagem local. Se o repositório já usar Next/React, manter a arquitetura e evitar dependências de servidor onde não forem necessárias.

### 15.2 Organização sugerida

```text
src/
  components/
    brand/
    layout/
    sections/
    projects/
    contact/
    ui/
  content/
    projects/
  config/
    site.ts
    offers.ts
  lib/
    whatsapp.ts
    project-filters.ts
  pages/
    index.astro
    projetos/index.astro
    projetos/[slug].astro
    privacidade.astro
    404.astro
  styles/
    tokens.css
    global.css
public/
  brand/
  projects/
  fonts/
docs/
  INVENTARIO.md
  ASSETS.md
  DECISOES.md
  PENDENCIAS.md
  VALIDACAO.md
README.md
```

Adapte nomes e extensões à stack encontrada. Não crie pastas vazias só para imitar essa árvore. Conteúdo, preços e contatos devem ficar centralizados; não espalhar o valor de R$ 997 em dez componentes.

### 15.3 Modelo de projeto

```ts
type ProjectKind = 'site' | 'application' | 'interactive';
type ProjectOrigin = 'own-product' | 'educational' | 'commercial-demo' | 'client';

interface Project {
  slug: string;
  title: string;
  kind: ProjectKind;
  origin: ProjectOrigin;
  status: 'in-development' | 'demo' | 'published';
  publicAllowed: boolean;
  featured: boolean;
  summary: string;
  role: string;
  technologies: string[]; // somente as verificadas
  cover: { src: string; alt: string; width: number; height: number };
  gallery: Array<{ src: string; alt: string; caption: string }>;
  liveUrl?: string;
  repositoryUrl?: string;
  factsCheckedAt?: string;
}
```

Usar `publicAllowed` para excluir rascunhos não autorizados de páginas, dados enviados ao navegador, sitemap, OG e busca interna. Não apenas esconder com CSS. A classificação precisa estar visível para o visitante.

### 15.4 Configuração comercial e de contato

```ts
interface SiteConfig {
  brand: 'Rabik';
  mode: 'preview' | 'production';
  canonicalOrigin: string | null;
  whatsappDigits: string | null;
  contactEmail: string | null;
  githubUrl: string | null;
  responsibleDisplayName: string | null;
}

const basicOffer = {
  creationPriceCents: 99700,
  depositCents: 49850,
  balanceCents: 49850,
  annualRenewalCents: 10000,
  maxSections: 6,
  maxImages: 12,
  maxServiceCategories: 8,
  revisionRounds: 2,
  productionBusinessDays: 7,
};
```

Formatar dinheiro com `Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })`. Não calcular valores monetários por concatenação de strings. Não mostrar segredos em configuração pública; os campos acima são conteúdo público, não credenciais.

## 16. Performance e estabilidade

Metas de engenharia, medidas em build de produção. Não publicar estes números como promessa comercial ou selo de qualidade sem medição.

- LCP alvo até 2,5 s e CLS até 0,1 em condições razoáveis de teste.
- INP alvo até 200 ms quando houver dados de campo; sem tráfego, avaliar responsividade local e registrar que não há medição de campo.
- Lighthouse mobile como referência: desempenho ≥ 90; acessibilidade, boas práticas e SEO ≥ 95, quando o ambiente permitir. Reportar configuração e limitações; não inventar score.
- JavaScript inicial: tentar manter até 150 KB comprimidos, preferencialmente menos; justificar excessos.
- Transferência inicial alvo até 1,5 MB, sem contar imagens abaixo da dobra carregadas depois.
- Hero: uma imagem prioritária; não preload de todas as opções da vitrine.
- Captura principal idealmente até 250–350 KB, ajustando para não destruir legibilidade.
- Lazy loading abaixo da dobra; dimensões explícitas para evitar saltos.
- Fontes locais WOFF2, `font-display: swap`, subset quando viável.
- Sem iframes, rastreadores ou bibliotecas de vídeo na carga inicial.
- Não baixar JavaScript de um CMS que não será usado.
- Evitar efeitos com filtros grandes, sombras gigantes ou `backdrop-filter` em áreas extensas.
- Remover listeners e observers ao desmontar componentes em stacks com navegação cliente.

## 17. SEO, privacidade e publicação

### 17.1 SEO técnico

- Home title sugerido: `Rabik — Sites, interfaces e desenvolvimento web`.
- Description sugerida: `Sites para apresentar seu negócio e projetos web sob medida. Conheça o trabalho da Rabik, veja projetos e converse com Erick sobre sua ideia.`
- Titles e descriptions próprios para páginas de projeto.
- Conteúdo principal no HTML; não depender da execução de JS para exibir título, oferta e projetos.
- Canonical e sitemap somente com domínio final real configurado.
- OG/Twitter card com imagem local, título e descrição coerentes.
- Preview com `noindex`; se houver material não autorizado para divulgação, usar controle de acesso real. `noindex` não torna conteúdo privado.
- Não criar URLs fictícias para dezenas de cidades ou serviços.
- Dados estruturados apenas quando dados reais sustentarem a entidade; sem avaliações agregadas, endereço, CNPJ ou `sameAs` inventados. Não tratar schema como garantia de resultados.
- Não repetir “melhor agência de sites do Brasil” ou afirmações equivalentes.

### 17.2 Privacidade e contatos externos

Por padrão, esta versão não possui analytics, pixel de anúncios, cookies de marketing ou formulário que envie dados a um servidor da Rabik. Não incluir banner de cookies decorativo sem relação com a implementação.

O aviso de privacidade deve descrever o que realmente existir: hospedagem e eventuais registros técnicos, composição local da mensagem, abertura voluntária do WhatsApp e links externos. Informar responsável e contato reais. A ausência de backend próprio não significa ausência de tratamento de dados por terceiros.

Não gerar uma política extensa com fornecedores ou prazos de retenção inventados. Se identificação e configuração de hospedagem estiverem pendentes, preparar o texto correspondente e listar a revisão necessária antes de produção. Nunca exibir placeholders jurídicos como se fossem dados válidos.

### 17.3 Hospedagem

Para uma implementação estática, preparar build compatível com hospedagem estática, sem exigir banco ou função de servidor. Cloudflare Pages é uma opção técnica documentada para Astro; conferir termos e limites vigentes antes da publicação.

**Não assumir Vercel Hobby para o site comercial da Rabik.** A documentação consultada restringe esse plano a uso pessoal não comercial. Se escolher Vercel, verificar plano elegível e custos. Não prometer infraestrutura paga antes de autorização.

Não provisionar contas nem publicar automaticamente. Entregar instruções para preview e produção, variáveis públicas necessárias e regras de headers realmente suportadas pela plataforma escolhida.

## 18. Fluxos e critérios de aceitação

| ID | Cenário | Resultado esperado |
|---|---|---|
| AC-01 | Visitante abre a home em 390 × 844 | Entende serviço e encontra CTA; nenhum corte ou scroll horizontal |
| AC-02 | Abre em 1440 × 900 | Container contido, H1 até 56 px, vitrine legível, hero sem aparência gigante |
| AC-03 | Troca projeto no hero | Imagem, nome e link atualizam juntos; layout não salta |
| AC-04 | Navega só por teclado | Alcança links, menu, seletores, FAQ e contato com foco visível |
| AC-05 | Seleciona solução e vai ao contato | Intenção correspondente aparece no resumo e pode ser alterada |
| AC-06 | Escreve acentos, &, quebra de linha e emoji | Link codifica o texto corretamente, sem truncamento ou HTML executável |
| AC-07 | Clica em WhatsApp | Abre o contato confirmado e mensagem correta; não afirma envio automático |
| AC-08 | Falta WhatsApp no preview | Nenhum link inventado; resumo pode ser copiado; pendência documentada |
| AC-09 | Falta WhatsApp em produção | Verificação de configuração falha com mensagem clara |
| AC-10 | Abre projeto educacional | Categoria visível, descrição factual, nenhuma alegação de cliente |
| AC-11 | Projeto não tem permissão pública | Não aparece no site, sitemap, JSON público ou assets de publicação associados |
| AC-12 | Lê a oferta básica | Vê R$ 997, entrada/saldo e renovação de R$ 100 ao ano sem procurar no rodapé |
| AC-13 | Seleciona painel/loja | Site informa orçamento e recorrência próprios; não aplica o básico automaticamente |
| AC-14 | Ativa movimento reduzido | Experiência completa, estável e sem deslocamentos decorativos |
| AC-15 | Desativa JavaScript | Conteúdo e links diretos funcionam; nenhum bloco principal fica invisível |
| AC-16 | Abre URL inexistente | 404 útil, com links válidos de retorno |
| AC-17 | Usa zoom 200% e tela estreita | Texto reflow, controles utilizáveis e nenhum CTA fixo encobre conteúdo |
| AC-18 | Imagem demora/falha | Espaço preservado, descrição útil e nenhuma quebra estrutural |
| AC-19 | Executa build/checagem | Sem erros de compilação, tipos ou console da aplicação |
| AC-20 | Revê todos os contatos | Nenhum número de prospect foi confundido com o contato da Rabik |

### 18.1 Verificação automatizada proporcional

Criar testes relevantes para:

- Montagem da mensagem e URL de WhatsApp com caracteres especiais e campos vazios.
- Seleção de solução → resumo do contato.
- Exclusão real de projetos não publicáveis.
- Configuração de preview/produção e ausência de contatos obrigatórios.
- Valores comerciais centralizados e consistentes entre card, FAQ e texto de WhatsApp, quando o preço for incluído.

Não criar centenas de testes de classes CSS ou snapshots que apenas repitam a implementação. Usar testes existentes no repositório quando adequados. Build, revisão funcional e inspeção visual são necessários; relatórios fictícios são proibidos.

### 18.2 Revisão visual obrigatória

Abrir a aplicação em navegador real, se disponível, e capturar pelo menos:

- 390 × 844: hero e contato.
- 768 × 1024: home e menu.
- 1280 × 720: hero e investimento.
- 1440 × 900: hero, projetos e contato.

Inspecionar fontes, recortes, contraste, ritmo vertical, texto órfão, bordas, estado ativo, tamanho dos botões e consistência dos projetos. Fazer uma rodada de correção após as capturas. Se o navegador não estiver disponível, declarar essa limitação e entregar o roteiro de verificação; não afirmar validação visual concluída.

## 19. Plano de execução em etapas

### Etapa A — Inventário

- Ler repositório e instruções locais.
- Localizar logo, fotos, screenshots, contatos e links.
- Separar projeto próprio, educacional e demonstração.
- Registrar o que foi de fato acessado, o que falhou e o que falta.
- Criar `docs/INVENTARIO.md` de forma objetiva.

### Etapa B — Fundamentos visuais

- Criar tokens, tipografia, container e componentes básicos.
- Implementar cabeçalho, hero e um card de projeto completo.
- Fazer captura e corrigir proporções antes de replicar o padrão.
- Não pedir aprovação para continuar: use o SDD como decisão de direção visual, salvo conflito material com novas instruções do usuário.

### Etapa C — Conteúdo e páginas

- Criar cadastro central de projetos e oferta.
- Montar home, índice e páginas internas publicáveis.
- Inserir screenshots reais, textos finais e classificação correta.
- Implementar condições comerciais e FAQ sem divergências.

### Etapa D — Interações

- Menu, vitrine, seleção de solução, resumo e copiar mensagem.
- Estados de erro/ausência de configuração, teclado e movimento reduzido.
- Efeitos visuais discretos somente depois dos fluxos principais funcionarem.

### Etapa E — Acabamento e validação

- Revisar quatro viewports e zoom.
- Verificar links, conteúdo, valores e imagens.
- Rodar build, tipos, testes essenciais e auditoria disponível.
- Corrigir problemas observados e registrar evidências.

### Etapa F — Entrega

- README com instalação, desenvolvimento, build e preview.
- Instruções para trocar logo, contatos, projetos, imagens e preço em um único local.
- Registrar decisões relevantes, pendências reais e verificações realizadas.
- Informar arquivos alterados, comandos executados e limitações.
- Deixar publicação como próxima ação concreta, com configuração pronta e sem contratação automática.

## 20. Definition of Done

A entrega está pronta para revisão quando:

- [ ] Rabik aparece consistentemente em título, navegação, rodapé e metadados.
- [ ] Símbolo preserva três personagens separados, sem mãos dadas.
- [ ] Site tem identidade escura e azul, com proporções compactas e imagens legíveis.
- [ ] Hero, projetos, soluções, processo, investimento, FAQ e contato cumprem funções distintas.
- [ ] Projetos são reais e classificados; demonstrações sem permissão não vazam no build público.
- [ ] Todos os CTAs têm destino ou estado de configuração honesto.
- [ ] Resumo de contato funciona e não envia dados sem ação do visitante.
- [ ] Oferta de R$ 997 e renovação de R$ 100/ano estão claras e consistentes.
- [ ] Recursos sob medida não recebem preço ou mensalidade inventados.
- [ ] Navegação por teclado e movimento reduzido foram conferidos.
- [ ] Não há fontes pequenas demais, overflow ou botões gigantes nos viewports de teste.
- [ ] Build e verificações executáveis passam, ou a limitação restante está documentada.
- [ ] Há screenshots de revisão quando a ferramenta estiver disponível.
- [ ] README explica como manter e publicar sem depender da memória do executor.
- [ ] Não houve publicação, compra ou envio de mensagem sem autorização específica.

Pendências de contato/domínio não autorizam entregar um esqueleto visual. O site deve estar completo no preview. Diferencie **pronto para revisão** de **pronto para publicação**: a segunda condição exige contatos, permissões de conteúdo, domínio/configuração e aviso de privacidade coerentes com a versão final.

## 21. Antipadrões que precisam ser eliminados na revisão final

1. H1 gigantesco, áreas vazias enormes e rolagem excessiva.
2. Tudo dentro de cards com o mesmo formato e a mesma altura.
3. Texto genérico sobre inovação sem mostrar projetos.
4. Dez CTAs diferentes pedindo a mesma coisa no primeiro quadro.
5. Logos de empresas conhecidas insinuando clientes ou parcerias.
6. Depoimentos, contadores, prêmios e resultados inventados.
7. Fotos de equipe gerada, escritório de banco de imagem ou telas fictícias.
8. Vídeo de fundo, partículas, cursor customizado e scroll travado.
9. Botões que não fazem nada, formulário que finge envio ou projeto com link quebrado.
10. Preço de criação destacado com renovação escondida.
11. Site básico anunciado com painel, loja ou automação incluídos sem orçamento.
12. Tom de marca infantil por causa dos bonequinhos; o traço deve ser uma assinatura contida.

## 22. Referências técnicas para o executor

Consultadas em 25/09/2026. Confira as páginas oficiais na versão que implementar:

- [Astro — Islands architecture](https://docs.astro.build/en/concepts/islands/): conteúdo estático com interatividade localizada.
- [Cloudflare Pages — Astro](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/): orientação de implantação; o projeto proposto não exige SSR.
- [Cloudflare Pages — Static HTML](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/): publicação de conteúdo estático.
- [Vercel — Hobby](https://vercel.com/docs/plans/hobby): restrição de uso pessoal não comercial.

Os valores e limites da oferta comercial vêm das decisões do Erick e do plano comercial, não dessas referências técnicas. Este documento especifica uma implementação; não declara marca registrada, regularidade jurídica integral, resultado comercial ou perfeição garantida.

## 23. Comando inicial para usar este arquivo

Copie este arquivo para a raiz do projeto como `SDD_Rabik_Claude_Code.md`. Coloque os arquivos da marca em `assets/brand/` ou informe os caminhos existentes. Então envie ao Claude Code:

> Leia integralmente `SDD_Rabik_Claude_Code.md` e implemente o site da Rabik seguindo essa especificação. Inspecione primeiro o repositório, as instruções locais e os assets; preserve o trabalho existente. Faça a implementação completa, com projetos reais, conteúdo comercial consistente, interações funcionais e revisão visual nos viewports definidos. Não pare no planejamento e não publique nada automaticamente. Se faltar contato, domínio ou autorização de imagem, conclua o preview usando os estados previstos no SDD e registre somente essas pendências. Ao terminar, entregue o site executável, o README e as evidências das verificações realizadas.

