/**
 * Cadastro central de projetos.
 *
 * Regras (SDD §6 e §15.3):
 * - Somente fatos verificados. `factsCheckedAt` registra quando a tela/código foi conferido.
 * - `publicAllowed: false` mantém o projeto fora de páginas, sitemap e assets do build.
 *   Rascunhos NÃO importam imagens: assim nenhum arquivo deles entra no bundle.
 * - Classificação sempre visível (`originLabel`). Nada de "cliente" sem contrato real.
 */
import type { ImageMetadata } from 'astro';
import type { ProjectKind } from '../lib/project-filters';
import { onlyPublic } from '../lib/project-filters';

import vaultCover from '../assets/projects/vaultscanner/cover.png';
import vaultMobile from '../assets/projects/vaultscanner/mobile.png';
import jurosCover from '../assets/projects/o-poder-do-tempo/cover.png';
import jurosSimulador from '../assets/projects/o-poder-do-tempo/simulador.png';
import jurosConceitos from '../assets/projects/o-poder-do-tempo/conceitos.png';
import jurosMobile from '../assets/projects/o-poder-do-tempo/mobile.png';
import ariCover from '../assets/projects/aristoteles-no-liceu/cover.png';
import ariFinal from '../assets/projects/aristoteles-no-liceu/encerramento.png';
import ariMobile from '../assets/projects/aristoteles-no-liceu/mobile.png';
import tagCover from '../assets/projects/tagflow/cover.png';
import tagMobile from '../assets/projects/tagflow/mobile.png';

export type ProjectOrigin = 'own-product' | 'educational' | 'commercial-demo' | 'client';
export type ShowcaseCategory = 'Sites' | 'Interfaces' | 'Interação';

export interface ProjectImage {
  src: ImageMetadata;
  alt: string;
  /** object-position decidido por imagem para recortes em cards. */
  position?: string;
}

export interface Project {
  slug: string;
  title: string;
  kind: ProjectKind;
  origin: ProjectOrigin;
  /** Classificação editorial exibida ao visitante. */
  originLabel: string;
  status: 'in-development' | 'demo' | 'published';
  publicAllowed: boolean;
  featured: boolean;
  /** Até duas linhas no card. */
  summary: string;
  /** Até três rótulos. */
  tags: string[];
  role: string;
  technologies: string[];
  technologiesNote: string;
  cover: ProjectImage | null;
  mobile?: ProjectImage;
  gallery: Array<ProjectImage & { caption: string }>;
  need: string;
  built: string[];
  decisions: Array<{ title: string; text: string; imageIndex?: number }>;
  limitations: string[];
  learned: string;
  liveUrl?: string;
  liveLabel?: string;
  repositoryUrl?: string;
  factsCheckedAt?: string;
  showcase?: { category: ShowcaseCategory; line: string };
  metaDescription: string;
}

const allProjects: Project[] = [
  {
    slug: 'vaultscanner',
    title: 'VaultScanner',
    kind: 'application',
    origin: 'own-product',
    originLabel: 'Produto próprio · em desenvolvimento',
    status: 'in-development',
    publicAllowed: true,
    featured: true,
    summary:
      'Ferramenta de análise estática de código. A tela pública explica o que a pessoa recebe antes de pedir o cadastro.',
    tags: ['Interface', 'Produto', 'Responsivo'],
    role: 'Produto do Erick: concepção, interface e desenvolvimento.',
    technologies: ['Next.js', 'React', 'TypeScript'],
    technologiesNote:
      'Next.js foi identificado pelos arquivos que a página pública carrega; o repositório não é público.',
    cover: {
      src: vaultCover,
      alt: 'Tela pública do VaultScanner: à esquerda, a proposta “Encontre a falha antes que ela chegue à produção” e um exemplo de saída em terminal; à direita, o formulário de acesso.',
      position: '50% 50%',
    },
    mobile: {
      src: vaultMobile,
      alt: 'Tela pública do VaultScanner no celular, com a proposta acima do formulário de acesso.',
    },
    gallery: [],
    need: 'O endereço do produto abre direto na tela de acesso. Quem chega por um link ainda não sabe o que a ferramenta faz, então essa mesma tela precisa responder “o que é isto?” antes de pedir login.',
    built: [
      'Tela dividida: a proposta do produto de um lado, o acesso do outro.',
      'Exemplo de resultado em formato de terminal, com a escala de severidade que a ferramenta usa.',
      'Alternância entre entrar e criar conta na mesma tela.',
      'Entrada pelo GitHub marcada como “em breve”, em vez de um botão que não funciona.',
    ],
    decisions: [
      {
        title: 'A promessa e o acesso na mesma tela',
        text: 'Em vez de uma página de vendas separada do login, os dois convivem. Quem já tem conta entra direto; quem chegou pelo link entende do que se trata sem procurar.',
      },
      {
        title: 'Um exemplo de resultado no lugar de adjetivos',
        text: 'O bloco em formato de terminal resume em quatro linhas o que a ferramenta devolve. É mais concreto do que descrever a análise e já apresenta o vocabulário do produto.',
      },
      {
        title: 'Uma ação em destaque por vez',
        text: 'Só o botão de entrar tem preenchimento sólido. Criar conta, recuperar senha e GitHub ficam com peso visual menor.',
      },
    ],
    limitations: [
      'Produto em desenvolvimento: telas e escopo podem mudar.',
      'Esta página descreve apenas a interface pública. Não há aqui afirmações sobre precisão da análise, cobertura ou uso por empresas.',
    ],
    learned:
      'Explicar uma função técnica para quem chega de fora é o mesmo problema dos projetos didáticos, só que dentro de um produto.',
    liveUrl: 'https://vault-scanner.vercel.app/',
    liveLabel: 'Abrir a tela pública',
    factsCheckedAt: '2026-09-25',
    showcase: { category: 'Interfaces', line: 'Tela pública de um produto próprio, que explica antes de pedir cadastro.' },
    metaDescription:
      'VaultScanner, produto próprio do Erick em desenvolvimento: como a tela pública explica a ferramenta de análise estática antes do cadastro.',
  },
  {
    slug: 'o-poder-do-tempo',
    title: 'O poder do tempo',
    kind: 'interactive',
    origin: 'educational',
    originLabel: 'Projeto educacional · interação',
    status: 'published',
    publicAllowed: true,
    featured: true,
    summary:
      'Juros simples e compostos com simulador, gráfico e tabelas que recalculam a cada alteração.',
    tags: ['Interação', 'Simulador', 'Responsivo'],
    role: 'Interface, interações e desenvolvimento, a partir do conteúdo do trabalho escolar do grupo.',
    technologies: ['React', 'TypeScript', 'Vite', 'GSAP', 'KaTeX', 'Vitest', 'Playwright'],
    technologiesNote: 'Confirmadas no package.json do repositório público.',
    cover: {
      src: jurosCover,
      alt: 'Abertura de “O poder do tempo”: título “O tempo muda a conta.”, valor de R$ 1.000,00 a 1% ao mês e uma pergunta de previsão para a turma.',
      position: '0% 40%',
    },
    mobile: {
      src: jurosMobile,
      alt: 'Abertura de “O poder do tempo” no celular, com título, valor inicial e botões Começar e Ler trabalho completo.',
    },
    gallery: [
      {
        src: jurosSimulador,
        alt: 'Simulador com campos de capital, taxa e prazo à esquerda e, à direita, os montantes em juros simples e compostos e o gráfico das duas curvas.',
        caption: 'Simulador: parâmetros de um lado, resultado e gráfico do outro.',
      },
      {
        src: jurosConceitos,
        alt: 'Seção de conceitos com o texto de pesquisa do grupo ao lado das fórmulas de juros compostos e simples diagramadas.',
        caption: 'O texto do grupo ao lado das fórmulas diagramadas.',
      },
    ],
    need: 'Trabalho de matemática (MAP, 1ª série do Ensino Médio, SESI) sobre juros simples e compostos. O conteúdo já existia; o desafio era fazer alguém perceber a diferença entre os regimes, em vez de apenas ler que ela existe.',
    built: [
      'Leitura longa dividida em capítulos numerados, com menu de capítulos.',
      'Simulador de capital, taxa e prazo, com campo de texto e controle deslizante, que recalcula montante, juros e diferença a cada alteração.',
      'Gráfico em SVG com as duas curvas e a área da diferença preenchida.',
      'Fórmulas compostas com KaTeX, mantendo o texto selecionável.',
      'Modo de apresentação e botão visível para reduzir movimento.',
    ],
    decisions: [
      {
        title: 'Cálculo e leitura na mesma tela',
        text: 'Os parâmetros ficam de um lado e o resultado do outro. Quem move o controle de taxa vê o número e a curva mudarem juntos.',
        imageIndex: 0,
      },
      {
        title: 'O texto do grupo preservado',
        text: 'A pesquisa escrita pelo grupo aparece como está, identificada, e os complementos didáticos ficam ao lado, com as fórmulas diagramadas.',
        imageIndex: 1,
      },
      {
        title: 'Reduzir movimento como botão',
        text: 'A preferência do sistema é respeitada, mas nem todo mundo sabe que ela existe. O controle na própria interface torna essa escolha visível.',
      },
    ],
    limitations: [
      'Exemplo didático com hipótese simplificada: sem aportes, impostos ou custos. Os valores não são cotação de investimento.',
      'É um trabalho escolar: não há medição de resultado de aprendizagem.',
    ],
    learned:
      'Controles que recalculam e desenham o resultado na hora são a mesma base de um simulador de parcelas ou de um comparador de planos.',
    liveUrl: 'https://trabalho-map-mat.vercel.app/',
    repositoryUrl: 'https://github.com/erick-rocha-web/trabalho_map_mat',
    factsCheckedAt: '2026-09-25',
    showcase: { category: 'Interação', line: 'Simulador didático que recalcula valores e gráfico a cada alteração.' },
    metaDescription:
      'O poder do tempo: projeto educacional sobre juros simples e compostos, com simulador, gráfico em SVG e capítulos interativos.',
  },
  {
    slug: 'aristoteles-no-liceu',
    title: 'Aristóteles no Liceu',
    kind: 'site',
    origin: 'educational',
    originLabel: 'Projeto educacional · conteúdo',
    status: 'published',
    publicAllowed: true,
    featured: true,
    summary: 'Conteúdo histórico apresentado como percurso visual, com a narrativa acompanhando a rolagem.',
    tags: ['Narrativa', 'Animação', 'Conteúdo'],
    role: 'Composição visual, narrativa e desenvolvimento do trabalho escolar.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP', 'ScrollTrigger'],
    technologiesNote: 'Confirmadas nos arquivos carregados pela página publicada e no repositório público.',
    cover: {
      src: ariCover,
      alt: 'Primeiro trecho da narrativa: texto “Bem-vindo ao Liceu de Atenas” em uma caixa escura sobre um corredor de colunas que leva à pintura A Escola de Atenas.',
      position: '20% 30%',
    },
    mobile: {
      src: ariMobile,
      alt: 'Trecho da narrativa no celular, com o texto em caixa escura no topo e o corredor de colunas ao fundo.',
    },
    gallery: [
      {
        src: ariFinal,
        alt: 'Encerramento: título “Aristóteles Ensinando no Liceu” sobre um detalhe da pintura de Rafael, com quatro tópicos sobre o significado da obra.',
        caption: 'Encerramento, com o título da obra revelado ao fim do percurso.',
      },
    ],
    need: 'Trabalho escolar sobre Aristóteles e a fundação do Liceu de Atenas. O material de partida era um texto histórico e uma obra de arte; a ideia foi fazer da imagem o espaço onde o texto acontece, e não uma ilustração acima dele.',
    built: [
      'Sequência narrativa ligada à posição da rolagem: cada trecho entra e sai conforme a pessoa avança.',
      'Plano de fundo contínuo, com o texto em uma caixa escurecida para manter o contraste.',
      'Encerramento com o título da obra e os pontos principais do trabalho.',
      'Animações com GSAP e ScrollTrigger sem substituir a rolagem nativa.',
    ],
    decisions: [
      {
        title: 'Um único cenário do começo ao fim',
        text: 'Trocar de fundo a cada trecho obrigaria o olho a se reorientar. Mantendo a mesma imagem, muda só o texto, e a atenção fica nele.',
      },
      {
        title: 'Caixa escurecida em vez de sombra no texto',
        text: 'Texto claro sobre uma pintura colorida tem contraste imprevisível. A caixa garante um fundo constante sem cobrir a obra inteira.',
      },
    ],
    limitations: [
      'A abertura mostra uma tela de carregamento antes de liberar a página.',
      'Durante a transição, dois trechos de texto chegam a se sobrepor por alguns instantes.',
    ],
    learned:
      'Conduzir alguém por uma ordem de leitura sem exigir cliques serve para apresentar marcas, métodos ou lançamentos em que a sequência importa.',
    liveUrl: 'https://aristoteles-no-liceu.vercel.app/',
    repositoryUrl: 'https://github.com/erick-rocha-web/aristoteles',
    factsCheckedAt: '2026-09-25',
    showcase: { category: 'Sites', line: 'Página narrativa em que o texto acompanha a rolagem.' },
    metaDescription:
      'Aristóteles no Liceu: projeto educacional que apresenta conteúdo histórico como percurso visual acompanhando a rolagem.',
  },
  {
    slug: 'tagflow',
    title: 'TagFlow',
    kind: 'interactive',
    origin: 'educational',
    originLabel: 'Projeto pessoal · educacional',
    status: 'published',
    publicAllowed: true,
    featured: false,
    summary: 'Busca em português que devolve a tag HTML certa, a explicação e um exemplo de código.',
    tags: ['Busca', 'Conteúdo', 'Interação'],
    role: 'Projeto pessoal de aprendizagem: conteúdo, interface e desenvolvimento.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    technologiesNote: 'Confirmadas no repositório público.',
    cover: {
      src: tagCover,
      alt: 'TagFlow com a busca “imagem” respondida: a tag img, a descrição e um exemplo de código, com o menu de tags por categoria à esquerda.',
      position: '60% 50%',
    },
    mobile: {
      src: tagMobile,
      alt: 'TagFlow no celular, com a busca “imagem” e a resposta com a tag img e o exemplo.',
    },
    gallery: [],
    need: 'Quem está aprendendo HTML sabe que quer “colocar uma imagem”, mas a documentação está organizada pelo nome técnico, <img>, que a pessoa ainda não conhece.',
    built: [
      'Busca por termo em português: “imagem” devolve a tag, a descrição e um exemplo.',
      'Menu lateral com as tags agrupadas por categoria.',
      'Sugestões clicáveis para quem não sabe por onde começar.',
    ],
    decisions: [
      {
        title: 'A entrada é a palavra que a pessoa já sabe',
        text: 'O índice parte do vocabulário comum, não do nome técnico. A busca aceita o que a pessoa tem.',
      },
      {
        title: 'Dois caminhos para o mesmo conteúdo',
        text: 'Busca para quem tem uma pergunta, menu por categoria para quem está explorando.',
      },
    ],
    limitations: [
      'Cobre um conjunto de tags escolhidas, não a especificação inteira do HTML.',
      'A busca funciona por termos previstos.',
    ],
    learned: 'Busca somada a categorias é o que um site com bastante conteúdo precisa para as pessoas acharem o que procuram.',
    liveUrl: 'https://erick-rocha-web.github.io/Tag-Flow/',
    repositoryUrl: 'https://github.com/erick-rocha-web/Tag-Flow',
    factsCheckedAt: '2026-09-25',
    metaDescription: 'TagFlow: projeto pessoal que encontra a tag HTML certa a partir de uma palavra em português.',
  },
  {
    // Demonstração feita para uma pet shop. Sem autorização registrada para divulgação:
    // permanece como rascunho local (captura em drafts/animalandia/, fora do build).
    slug: 'animalandia',
    title: 'Animalandia',
    kind: 'site',
    origin: 'commercial-demo',
    originLabel: 'Demonstração comercial',
    status: 'demo',
    publicAllowed: false,
    featured: false,
    summary: 'Demonstração de site para pet shop, com banho e tosa e categorias de produtos.',
    tags: ['Site', 'Demonstração'],
    role: 'Demonstração preparada pelo Erick.',
    technologies: [],
    technologiesNote: 'Não verificadas.',
    cover: null,
    gallery: [],
    need: '',
    built: [],
    decisions: [],
    limitations: [],
    learned: '',
    metaDescription: '',
  },
];

/** Tudo o que as páginas usam passa por aqui. */
export const projects: Project[] = onlyPublic(allProjects);

/** Apenas para testes e auditoria. Não usar em páginas. */
export const __allProjectsForTests = allProjects;

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function nextProject(slug: string): Project {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}
