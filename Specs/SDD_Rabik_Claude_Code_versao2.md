# RABIK — SDD de implementação do site comercial

**Versão:** 2.0 · 25/09/2026  
**Responsável pela marca:** Erick  
**Executor:** Claude Code  
**Produto:** landing page comercial de uma empresa nova de desenvolvimento web

## 0. Mudança obrigatória de direção

Esta versão substitui a direção anterior do SDD.

O site da Rabik **não é um portfólio**. Não apresentar uma grade de projetos, screenshots de sites anteriores, filtros, estudos escolares ou uma vitrine técnica na home. A Rabik é uma empresa nova e precisa vender clareza, confiança e uma conversa inicial, sem fingir uma carteira de clientes ou uma história que ainda não existe.

Os projetos anteriores de Erick podem ser enviados manualmente pelo WhatsApp quando uma pessoa pedir exemplos. Eles não devem ocupar a página principal. A única referência a exemplos no site será uma pergunta no FAQ, com um link que abre o WhatsApp com uma mensagem pronta.

A página também precisa abandonar a aparência muito escura, pesada e genérica de portfólio de desenvolvedor. A direção é **clara, colorida, simpática, levemente irreverente e profissional**. “Alegre e besta” significa uma personalidade visual humana e descontraída, com pequenos desenhos e frases diretas, sem transformar a empresa em uma marca infantil.

Leia todo este arquivo antes de editar. Inspecione o repositório, as instruções locais, o logo e os assets existentes. Preserve alterações do usuário e adapte a stack atual. Não publique, compre domínio, envie mensagens ou modifique produção automaticamente.

**Prioridade:** instrução atual do Erick → fatos comerciais confirmados → acessibilidade e clareza → esta direção visual → efeitos decorativos.

## 1. Objetivo de negócio

O site precisa fazer um dono de negócio pensar: “Entendi o que eles podem resolver para mim e sei como começar a conversa”.

Em até dez segundos, o visitante deve entender que a Rabik:

- cria sites profissionais para negócios locais;
- organiza serviços, fotos, informações e contato em um só lugar;
- também pode analisar projetos com painel, loja ou outras funções;
- trabalha com uma proposta clara antes de iniciar;
- atende pelo WhatsApp.

O caminho principal é:

```text
entender o problema → reconhecer a solução → ver como funciona → conhecer a faixa de investimento → chamar no WhatsApp
```

**Público inicial:** salões, barbearias, pet shops, academias, clínicas, oficinas, lojas e prestadores de serviço que dependem de Instagram, Google Maps e WhatsApp.

**Tom:** direto, próximo, inteligente e sem jargão. A Rabik pode fazer uma piada pequena ou usar uma frase informal, mas cada frase precisa ajudar a pessoa a decidir.

Não inventar clientes, depoimentos, faturamento, quantidade de sites entregues, certificações, escritório, CNPJ, equipe grande, resultados no Google ou “anos de experiência”. Erick é o responsável pelo desenvolvimento. O símbolo de três bonequinhos é uma assinatura gráfica; não declarar que existem três sócios.

## 2. Conteúdo e portfólio

### 2.1 Conteúdo permitido

- explicação do serviço de site de apresentação;
- explicação de projetos sob medida, como painel, loja ou integração;
- processo de trabalho;
- preço e condições do pacote básico aprovados pelo Erick;
- perguntas frequentes;
- chamada para WhatsApp;
- breve apresentação do Erick e da Rabik.

### 2.2 Portfólio fora da página

Não criar na versão pública:

- seção `Projetos` na home;
- cards de VaultScanner, Animalandia, Aristóteles no Liceu ou O Poder do Tempo;
- rota `/projetos/`;
- carrossel de screenshots;
- rótulos como `clientes`, `cases`, `trabalhos realizados` ou `resultados`;
- links para projetos anteriores no menu principal.

O FAQ deve conter a pergunta **“Posso ver exemplos antes de decidir?”**. A resposta deve explicar que Erick envia exemplos pelo WhatsApp conforme o tipo de negócio e incluir o CTA `Pedir exemplos pelo WhatsApp`.

Mensagem automática do CTA:

```text
Olá, Erick! Conheci a Rabik e gostaria de ver alguns exemplos de sites para entender como vocês trabalham.
```

Esse CTA só pode usar o número de WhatsApp confirmado na configuração. Se o número ainda não estiver configurado, mostrar uma pendência no preview e um botão para copiar a mensagem, sem inventar um link.

### 2.3 Referências internas

Os sites abaixo servem apenas para Erick e Claude Code entenderem capacidades que podem ser descritas com honestidade. Não devem ser exibidos automaticamente na home:

- `https://erick-rocha-web.github.io/Portfolio/`
- `https://vault-scanner.vercel.app/`
- `https://trabalho-map-mat.vercel.app/`
- `https://aristoteles-no-liceu.vercel.app/`
- `https://animalandiapet.vercel.app/`

Não copiar textos, identidade ou layout de `joaodev-pro.vercel.app`. A referência serve somente para lembrar que o site deve ter proporções humanas e conteúdo legível, sem títulos gigantes.

## 3. Direção visual da Rabik

### 3.1 Conceito

Imagine uma pequena empresa criativa que trabalha com código, mas conversa como gente. A base é clara e quente, como papel de caderno de ideias, com blocos brancos, tinta escura e três cores vivas usadas como adesivos e destaques. O logo dos bonequinhos aparece como personagem gráfico da marca, sem virar mascote animado o tempo todo.

A página deve parecer desenhada e cuidada por uma pessoa. Pequenas imperfeições controladas são bem-vindas: uma seta rabiscada, um círculo irregular atrás de uma palavra, uma etiqueta inclinada em poucos graus. Todos os elementos importantes continuam alinhados e acessíveis.

### 3.2 Paleta

```css
:root {
  --paper: #fff8ec;
  --paper-strong: #fffdf8;
  --ink: #202431;
  --muted: #626878;
  --blue: #3978f6;
  --blue-dark: #2051bd;
  --coral: #ff6b5e;
  --yellow: #ffd35a;
  --mint: #76d6b4;
  --line: #e8dfd2;
  --white: #ffffff;
  --focus: #1745a4;
  --radius-sm: 10px;
  --radius-md: 18px;
  --radius-lg: 28px;
  --container: 1160px;
}
```

Regras:

- Fundo principal claro; não usar preto, navy ou cinza muito escuro como tela inteira.
- Texto principal em `--ink`; não usar azul claro ou amarelo para texto longo.
- Azul é a cor principal de ação; coral, amarelo e mint são acentos.
- Gradientes, se houver, ficam em pequenos detalhes. Não criar um fundo de gradiente permanente.
- Cards podem ser brancos com borda e sombra curta, ou blocos de cor sólida. Não transformar tudo em glassmorphism.
- Os três personagens devem continuar legíveis e separados. Nunca unir braços, mãos, corpos ou bases.

### 3.3 Tipografia e proporções

Usar **Plus Jakarta Sans** para títulos e **DM Sans** ou `system-ui` para texto. Se as fontes não estiverem disponíveis localmente, usar uma opção do sistema.

| Elemento | Desktop | Mobile |
|---|---:|---:|
| H1 | 48–64 px | 36–42 px |
| Título de seção | 32–42 px | 28–32 px |
| Texto | 17–18 px | 16–17 px |
| Navegação | 14–16 px | 15–16 px |
| Etiqueta | 12–14 px | 12–13 px |

O H1 pode ter no máximo três linhas no desktop. Não preencher a tela com fonte de 90 px. Reduzir espaços vazios, mantendo leitura confortável.

### 3.4 Logo e símbolo

- Usar a logo Rabik fornecida no repositório, se disponível.
- O símbolo tem três bonequinhos de palito lado a lado, com traços orgânicos e separados.
- Não criar uma ilustração corporativa de três pessoas apertando as mãos.
- Em fundo claro, usar a versão escura do símbolo; em adesivos azuis ou corais, usar a versão que preserve contraste.
- Cabeçalho com logo compacto, entre 30 e 38 px de altura.
- Usar o símbolo isolado em pequenos detalhes, como selo no hero, divisor ou marca d’água leve.
- Não fazer os bonequinhos correrem, dançarem, piscarem ou seguirem o cursor continuamente. Um pequeno movimento de entrada ou inclinação no hover é suficiente.
- Se só houver PNG, preparar uma aplicação sem borda branca aparente. Não esticar nem recortar o logo.

## 4. Arquitetura da página

Criar uma única landing page comercial, com rotas auxiliares mínimas:

| Rota | Uso |
|---|---|
| `/` | Página comercial completa |
| `/privacidade/` | Aviso baseado no que a implementação realmente trata |
| `/404` | Retorno simples para a home |

Não criar rota pública de portfólio nesta versão. Se o repositório já possuir páginas de projetos, não as colocar no menu nem ligar a elas a partir da home; preserve-as somente se removê-las for destrutivo, documentando a decisão.

### Ordem da home

1. Cabeçalho compacto.
2. Hero de venda.
3. Problema que a página resolve.
4. O que a Rabik entrega.
5. Como funciona.
6. Oferta básica e projetos sob medida.
7. FAQ com exemplos via WhatsApp.
8. CTA final.
9. Rodapé.

O site deve caber em uma rolagem razoável. Cada seção precisa responder a uma dúvida diferente.

## 5. Cabeçalho

Cabeçalho claro, com container de até 1160 px e bastante respiro. Pode ter borda inferior fina ou sombra curta, mas não deve parecer uma barra pesada.

Desktop:

- logo à esquerda;
- links `Como funciona`, `O que entregamos`, `Investimento`, `Dúvidas`;
- botão azul `Falar sobre meu negócio`.

Mobile:

- logo e menu hambúrguer com área de toque mínima de 44 × 44 px;
- menu abre sem bloquear o foco, fecha com Escape e retorna foco ao botão;
- CTA principal dentro do menu.

Não colocar `Projetos` na navegação. Não colocar links sociais que não estejam confirmados. Adicionar link de pular para o conteúdo.

## 6. Hero comercial

### 6.1 Composição

Hero com fundo `--paper`, altura natural e duas colunas no desktop:

- esquerda: etiqueta, título, texto e CTAs;
- direita: composição gráfica com o símbolo Rabik, uma folha/cartão de briefing, etiquetas coloridas e pequenos elementos desenhados.

Não usar screenshot de site, mockup de portfólio ou dashboard no hero. A composição pode mostrar um cartão abstrato com linhas de texto, botão e blocos de cor, mas não pode fingir ser um cliente ou produto real.

A coluna gráfica deve ter aproximadamente 420–500 px de largura. No mobile, texto e CTA aparecem antes da ilustração.

### 6.2 Texto-base

**Etiqueta:** `RABIK · SITES E SOLUÇÕES DIGITAIS`

**H1:** `Seu negócio já faz um bom trabalho. Agora ele precisa aparecer bem.`

**Texto:** `A Rabik cria sites claros, bonitos e fáceis de usar para mostrar seus serviços, explicar o que você oferece e levar o cliente direto para o WhatsApp.`

**CTA principal:** `Quero conversar sobre meu negócio` → WhatsApp com mensagem automática.

**CTA secundário:** `Entender como funciona` → âncora da seção de processo.

Texto opcional próximo aos CTAs: `Sem enrolação, sem painel complicado no pacote básico.`

Se a composição pedir outro título, manter a mesma ideia: o negócio já tem valor; o site organiza e apresenta esse valor. Evitar “transforme sua presença digital”, “desbloqueie seu potencial”, “soluções inovadoras” e promessas genéricas.

### 6.3 Mensagem do CTA principal

```text
Olá, Erick! Conheci a Rabik e gostaria de conversar sobre um site para o meu negócio.
```

O número deve vir de `siteConfig.whatsappDigits`. Abrir o WhatsApp somente após clique explícito. Não fingir que a mensagem foi enviada.

## 7. Seção do problema

**Título:** `Quando alguém encontra seu negócio, o que ela consegue entender?`

Texto: `Muita empresa depende de uma bio, de mensagens espalhadas e de fotos perdidas no feed. Isso funciona até o cliente precisar de uma informação rápida.`

Mostrar três situações em blocos pequenos e coloridos:

1. `“Quais serviços vocês oferecem?”` — a resposta está espalhada em várias mensagens.
2. `“Onde fica e como agendo?”` — o cliente precisa perguntar o básico.
3. `“Posso ver alguns trabalhos?”` — as melhores fotos se perdem no feed.

Fechar com: `Um site organiza essa primeira conversa antes mesmo do WhatsApp.`

Não afirmar que toda empresa perde clientes ou que o site garante vendas.

## 8. O que a Rabik entrega

**Título:** `Uma página feita para o seu cliente entender rápido.`

Quatro cards em grade, com ícones simples desenhados em linha e fundo branco:

| Card | Texto |
|---|---|
| Apresentação | `Uma primeira impressão profissional, com a personalidade do seu negócio.` |
| Serviços | `O que você faz, explicado de forma organizada e fácil de consultar.` |
| Contato | `Botões para WhatsApp, telefone, redes e localização, conforme o que você precisar.` |
| Base para crescer | `Uma estrutura que pode evoluir para novas páginas, painel, loja ou integração.` |

Nota: `O conteúdo final é definido com você. Não usamos fotos, informações ou resultados inventados.`

Adicionar uma interação leve: ao passar ou focar em cada card, uma etiqueta de cor muda e o bonequinho correspondente pode inclinar poucos graus. No touch, o card funciona sem hover.

## 9. Soluções sem complicar

**Título:** `Você escolhe o ponto de partida.`

Três cartões com seleção acessível:

### Site de apresentação

`Para mostrar serviços, fotos, informações úteis e contato. É o pacote básico da Rabik.`

### Reformulação

`Para reorganizar um site que já existe, melhorar a leitura e deixar a experiência mais atual.`

### Projeto sob medida

`Para loja virtual, painel, agenda, área restrita ou integração. Primeiro entendemos as funções; depois enviamos o orçamento.`

Ao selecionar um cartão, mostrar uma frase de orientação e trocar o CTA para:

- `Quero um site de apresentação`;
- `Quero melhorar meu site`;
- `Quero explicar meu projeto`.

O CTA abre o WhatsApp com o tipo selecionado na mensagem. Não criar calculadora falsa nem somar preços de extras automaticamente.

## 10. Como funciona

**Título:** `Do “preciso de um site” até a publicação.`

Quatro passos, com números grandes coloridos, sem timeline travada:

1. **Você conta:** `Entendemos seu negócio, seus serviços e o que o cliente precisa encontrar.`
2. **A Rabik organiza:** `Definimos estrutura, visual, conteúdo, valor e prazo antes de começar.`
3. **Você acompanha:** `Recebe uma prévia e reúne seus ajustes dentro do escopo combinado.`
4. **A gente publica:** `Depois da aprovação, colocamos a página no ar e orientamos os próximos passos.`

Inserir uma frase desenhada: `Sem reunião que poderia ser uma mensagem.`

Não prometer publicação em data não confirmada. O prazo do pacote básico é de até sete dias úteis a partir da data combinada, após entrada e materiais completos.

## 11. Apresentação da Rabik

Bloco curto, em fundo azul ou coral com texto contrastante. Não transformar em currículo ou portfólio.

**Título:** `Por trás da Rabik tem uma pessoa que vai acompanhar o projeto.`

**Texto:** `Eu sou o Erick, desenvolvedor e responsável pela Rabik. Crio sites e interfaces pensando no que o cliente precisa entender e no que o negócio precisa facilitar. Você conversa comigo, recebe uma proposta clara e acompanha a construção da sua página.`

Se houver uma foto real fornecida pelo Erick, ela pode aparecer em moldura simples. Sem foto, usar a logo e o desenho dos três personagens. Não gerar um rosto por IA. Não mencionar idade, amigos ou ausência de CNPJ nesta seção.

## 12. Investimento

Esta seção vende com transparência e sem transformar a home em uma tabela de planos.

### Oferta principal

**Título:** `Para começar, existe um caminho simples.`

**Nome:** `Site de apresentação Rabik`

**Preço:** `R$ 997`

**Texto:** `Um site com até seis seções para apresentar seu negócio, organizar serviços, inserir fotos e facilitar o contato.`

Lista visível:

- adaptado para celular, tablet e computador;
- até oito serviços ou categorias com descrição curta;
- até doze imagens inseridas e otimizadas;
- WhatsApp, telefone, redes e localização fornecidos;
- duas rodadas de ajustes dentro do escopo;
- primeiro período anual de domínio .com.br comum e hospedagem estática incluído.

Mostrar ao lado do preço:

`R$ 498,50 para iniciar + R$ 498,50 após a aprovação, antes da publicação definitiva.`

`Depois do primeiro período, a renovação é de R$ 100 por ano para o domínio e a gestão técnica básica. Alterações e recursos extras têm orçamento separado.`

CTA: `Conversar sobre o pacote básico`.

### Projetos sob medida

Bloco secundário:

`Precisa de loja, painel, agenda, login ou integração? Podemos avaliar. Esses projetos têm criação, infraestrutura e manutenção definidos em uma proposta própria.`

Preço: `Sob orçamento`.

Não mostrar três planos fictícios, desconto falso, contador de vagas ou promessa de mensalidade zero para sistemas complexos. Não chamar o domínio de gratuito para sempre.

## 13. FAQ final e pedido de exemplos

Esta é a seção final de dúvidas, antes do CTA. Usar no máximo seis perguntas em `<details>` ou acordeão acessível.

**O que vocês fazem?**  
Criamos sites de apresentação e avaliamos projetos digitais que precisam de uma solução sob medida. O primeiro passo é entender o negócio e o que o cliente precisa encontrar.

**Posso ver exemplos antes de decidir?**  
Sim. Como cada negócio precisa de uma solução diferente, enviamos exemplos pelo WhatsApp conforme o tipo de página que você está imaginando. Clique no botão abaixo e peça os exemplos.

Botão dentro desta resposta: `Pedir exemplos pelo WhatsApp`.

Mensagem automática:

```text
Olá, Erick! Conheci a Rabik e gostaria de ver alguns exemplos de sites para entender como vocês trabalham.
```

**Tem mensalidade?**  
No pacote básico, não há mensalidade da Rabik. O primeiro período anual do domínio e da hospedagem está incluído nos R$ 997. Depois, a renovação é de R$ 100 por ano para o domínio e a gestão técnica básica. Projetos com sistemas podem ter custos próprios.

**Eu mesmo vou precisar atualizar tudo?**  
O básico é uma página de apresentação, sem painel de edição. Alterações posteriores podem ser combinadas. Se você precisa editar produtos, fotos ou textos sozinho, podemos avaliar um painel em outro orçamento.

**O site aparece no Google?**  
O site recebe preparação técnica básica para buscadores. A indexação e a posição dependem de fatores externos e não são garantidas. O link também pode ser colocado no Google Maps, Instagram e outros canais do negócio.

**Como começo?**  
Clique em qualquer botão de conversa, explique o negócio e diga o que gostaria de apresentar. A Rabik responde com as próximas perguntas e, quando fizer sentido, uma proposta com escopo, preço e prazo.

O FAQ é o único lugar que fala em exemplos de trabalhos anteriores. Não inserir thumbnails escondidas ou uma frase “veja nosso portfólio” fora desta seção.

## 14. CTA final

Fundo azul ou coral, com o símbolo Rabik em aplicação pequena e divertida.

**Título:** `Seu cliente não precisa adivinhar o que você faz.`

**Texto:** `Vamos organizar essa primeira impressão?`

**Botão:** `Falar sobre meu negócio`.

Mensagem automática:

```text
Olá, Erick! Conheci a Rabik e gostaria de conversar sobre um site para o meu negócio.
```

Texto de apoio: `Você revisa a mensagem antes de enviar.`

## 15. Regras de WhatsApp

Centralizar tudo em `siteConfig.whatsappDigits` e não espalhar o número por componentes.

```ts
export function buildWhatsAppUrl(digits: string | null, message: string) {
  if (!digits) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
```

Regras:

- guardar apenas dígitos no formato internacional;
- não adicionar ou remover nono dígito automaticamente;
- não converter telefone fixo em celular;
- abrir somente depois do clique explícito;
- não declarar que a mensagem foi enviada;
- montar texto sem `innerHTML`;
- em preview sem número configurado, habilitar `Copiar mensagem` e registrar pendência;
- em produção sem número confirmado, bloquear CTAs de WhatsApp até corrigir a configuração;
- o texto do FAQ deve usar exatamente a mensagem de pedir exemplos;
- não armazenar nome ou descrição do visitante em localStorage, analytics ou servidor nesta versão.

O CTA principal usa a mensagem sobre criar um site. O FAQ usa a mensagem sobre pedir exemplos. O CTA da seleção de soluções acrescenta o tipo escolhido, com texto editável antes de abrir o WhatsApp.

## 16. Interações e personalidade

A Rabik pode ser divertida nos detalhes:

- seta desenhada apontando para o CTA;
- etiquetas inclinadas como `feito com código` e `sem enrolação`;
- pequenas formas de papel, círculos ou rabiscos em posições controladas;
- números dos passos com cores diferentes;
- símbolo dos bonequinhos como selo em duas ou três seções;
- mudança suave de cor nos cards quando focados;
- pequeno movimento de entrada do logo e dos acentos.

Limites:

- sem fundo escuro dominante;
- sem partículas, cursor personalizado, vídeo automático ou som;
- sem scroll hijacking, parallax pesado ou preloader;
- sem animação contínua dos bonequinhos;
- sem confete em cada clique;
- sem ilustrações para esconder ausência de conteúdo;
- sem excesso de bordas arredondadas ou cartões idênticos;
- sem botões gigantes ocupando metade da tela.

Respeitar `prefers-reduced-motion`. Todas as informações e funções devem funcionar sem animação.

## 17. Assets e imagens

O site não precisa de screenshots de projetos anteriores nem de fotografias de clientes.

Criar `docs/ASSETS.md` com arquivo, origem, licença/autorização conhecida, finalidade e pendências.

Assets necessários:

| Asset | Uso |
|---|---|
| Logo Rabik | Cabeçalho, CTA final e rodapé |
| Símbolo dos três bonequinhos | Hero e detalhes de marca |
| Foto real do Erick | Opcional, somente se fornecida |
| Ícones lineares | Cards de entrega, com uma única família |
| Ilustração abstrata | Opcional; CSS/SVG, sem pessoas ou telas falsas |
| Open Graph | Composição clara com logo e frase curta |

Não baixar imagens aleatórias do Google, Instagram ou Pinterest. Não fazer hotlink de imagens externas. Não gerar pessoas, clientes, escritórios, depoimentos ou screenshots fictícios com IA.

Se a logo não estiver no repositório, usar um wordmark temporário de texto e registrar a pendência. Não parar toda a implementação por falta de um asset.

## 18. Responsividade e acessibilidade

- 320–639 px: uma coluna; título, texto e CTA antes do desenho.
- 640–1023 px: duas colunas somente quando o texto continuar confortável.
- 1024 px ou mais: container máximo de 1160 px; manter proporções contidas.
- 1440 × 900: hero completo sem rolagem exagerada e sem título gigante.
- 390 × 844: título, explicação e CTA principal aparecem no primeiro quadro.
- áreas de toque mínimas de 44 × 44 px;
- foco visível equivalente ao hover;
- navegação por teclado em menu, seleção de solução e FAQ;
- menu fecha com Escape e retorna foco;
- `lang="pt-BR"`, um único H1 e títulos hierárquicos;
- labels reais em campos, caso existam;
- contraste mínimo de 4,5:1 para texto comum;
- texto legível em zoom de 200% e viewport de 320 px;
- não usar cor como único indicador de estado;
- imagens decorativas com `alt=""`; logo e ilustrações com descrição apropriada;
- sem rolagem horizontal.

## 19. Arquitetura técnica

Leia `AGENTS.md`, `CLAUDE.md`, `package.json`, lockfile e `git status` antes de editar. Preserve a stack existente quando ela atender à especificação.

Se o repositório estiver vazio, a recomendação é Astro + TypeScript + CSS com tokens, ou a stack já adotada no projeto. A página pode ser estática; menu, acordeão, seleção de solução e WhatsApp são pequenas ilhas de interação. Não adicionar banco de dados, CMS, autenticação, painel ou backend.

Estrutura sugerida:

```text
src/
  components/
    BrandMark.*
    Header.*
    Hero.*
    ProblemSection.*
    DeliveryCards.*
    SolutionSelector.*
    ProcessSteps.*
    Pricing.*
    FAQ.*
    WhatsAppCTA.*
    Footer.*
  config/site.ts
  lib/whatsapp.ts
  pages/index.*
  pages/privacidade.*
  pages/404.*
  styles/tokens.css
  styles/global.css
public/brand/
docs/ASSETS.md
docs/PENDENCIAS.md
docs/VALIDACAO.md
README.md
```

Centralizar nome, WhatsApp, e-mail, domínio, textos de oferta e mensagens automáticas em arquivos de configuração.

```ts
export const siteConfig = {
  brand: 'Rabik',
  mode: 'preview' as 'preview' | 'production',
  whatsappDigits: null as string | null,
  contactEmail: null as string | null,
  canonicalOrigin: null as string | null,
};

export const basicOffer = {
  priceCents: 99700,
  depositCents: 49850,
  balanceCents: 49850,
  annualRenewalCents: 10000,
  productionBusinessDays: 7,
};
```

Usar `Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })`. Não duplicar valores monetários em textos e componentes sem uma fonte central.

## 20. SEO, privacidade e publicação

Title sugerido: `Rabik — sites claros para negócios que querem aparecer bem`.

Description sugerida: `A Rabik cria sites profissionais para apresentar seu negócio, organizar seus serviços e facilitar o contato pelo WhatsApp.`

- conteúdo principal deve estar no HTML inicial;
- preview deve usar `noindex`;
- canonical, sitemap e OG devem usar o domínio real somente quando configurado;
- não criar schema de avaliações, endereço, CNPJ ou clientes que não foram confirmados;
- não criar páginas falsas para cidades ou nichos;
- não incluir analytics, pixel, cookies de marketing ou formulário que envie dados sem decisão posterior;
- aviso de privacidade deve refletir o que realmente existe: hospedagem, registros técnicos e abertura voluntária do WhatsApp;
- não publicar placeholders como e-mail, responsável ou domínio válidos.

Preparar build estático compatível com hospedagem adequada ao uso comercial. Não provisionar conta nem publicar automaticamente.

## 21. Critérios de aceitação

| ID | Verificação | Resultado |
|---|---|---|
| AC-01 | Abrir em 390 × 844 | Visual claro, alegre, legível e CTA visível sem depender de rolagem |
| AC-02 | Abrir em 1440 × 900 | Hero contido; nenhum título, card ou botão gigante |
| AC-03 | Procurar portfólio no menu/home | Não há seção, grade, screenshot ou link de projetos anteriores |
| AC-04 | Abrir FAQ de exemplos | Resposta explica o envio manual e mostra CTA para WhatsApp |
| AC-05 | Clicar em pedir exemplos | Mensagem é exatamente a definida neste SDD e o número é o configurado |
| AC-06 | WhatsApp ausente no preview | Mensagem pode ser copiada e não existe link quebrado ou número inventado |
| AC-07 | Selecionar cada solução | Texto e mensagem mudam corretamente; nenhum orçamento falso aparece |
| AC-08 | Ler investimento | R$ 997, entrada, saldo e renovação anual de R$ 100 estão claros |
| AC-09 | Ler projeto sob medida | Painel, loja e integração aparecem como orçamento próprio |
| AC-10 | Navegar só por teclado | Menu, cards, FAQ e CTAs têm foco e operação acessíveis |
| AC-11 | Ativar movimento reduzido | Conteúdo completo continua disponível sem deslocamentos decorativos |
| AC-12 | Desativar JavaScript | Texto, preço, links diretos e FAQ básico continuam acessíveis |
| AC-13 | Conferir logo | Três bonequinhos continuam separados e nenhum braço foi unido |
| AC-14 | Rodar build | Sem erro de compilação, links quebrados ou erro de console da aplicação |
| AC-15 | Conferir claims | Não há cliente, resultado, equipe ou certificação inventados |

## 22. Revisão visual obrigatória

Abrir o site e revisar pelo menos:

- 390 × 844: hero, cartões e FAQ;
- 768 × 1024: menu e seções intermediárias;
- 1280 × 720: hero e investimento;
- 1440 × 900: página completa.

Corrigir depois da primeira inspeção: excesso de espaço, texto muito pequeno, aparência de template, contraste, desalinhamento, cards repetitivos, acentos infantis e CTA pouco evidente.

O resultado deve parecer uma marca jovem e bem pensada. A logo dá personalidade; o layout deve dar confiança.

## 23. Definition of Done

- [ ] A home vende o serviço e não funciona como portfólio.
- [ ] A direção clara substituiu a aparência dark dominante.
- [ ] A paleta alegre combina com o símbolo Rabik.
- [ ] O H1 explica o valor para o negócio e não usa promessa genérica.
- [ ] Há CTA de WhatsApp no hero, investimento, FAQ e fechamento.
- [ ] O FAQ contém pedido de exemplos com mensagem automática específica.
- [ ] Projetos anteriores não aparecem na home nem no menu.
- [ ] Preço de R$ 997, entrada, saldo e renovação de R$ 100 estão visíveis.
- [ ] Projetos sob medida são apresentados sem preço inventado.
- [ ] Logo e bonequinhos não foram alterados para dar as mãos.
- [ ] Não existem depoimentos, métricas, clientes ou resultados inventados.
- [ ] Build, responsividade, teclado, foco, movimento reduzido e links foram revisados.
- [ ] Pendências reais de WhatsApp, domínio, e-mail e assets estão em `docs/PENDENCIAS.md`.
- [ ] README explica como trocar contato, mensagens, preço e textos.

## 24. Prompt para iniciar o Claude Code

Depois de colocar este arquivo na raiz do projeto, envie:

> Leia integralmente `SDD_Rabik_Claude_Code.md` e implemente a versão 2.0 do site da Rabik. Esta é uma landing page comercial, não um portfólio: remova da home e da navegação a grade de projetos, screenshots e links para trabalhos anteriores. Use uma direção clara, alegre, colorida e levemente irreverente, combinando com a logo dos três bonequinhos separados. Venda a solução para negócios locais, explique o processo, mostre o pacote de R$ 997 com suas condições, apresente projetos sob medida e coloque um FAQ no final. A pergunta sobre exemplos deve abrir o WhatsApp com a mensagem definida no SDD para que Erick envie o portfólio manualmente. Inspecione o repositório e os assets antes de editar, preserve o que já estiver correto, implemente tudo e faça a revisão visual nos viewports especificados. Não publique nada automaticamente. Ao terminar, entregue os arquivos alterados, o README, `docs/PENDENCIAS.md` e o resultado das verificações.
