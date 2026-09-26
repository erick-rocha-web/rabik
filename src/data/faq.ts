import { basicOffer, formatBRL } from '../config/offers';

export interface FaqItem {
  question: string;
  answer: string;
  /** Quando presente, a resposta termina com um CTA de WhatsApp com esta mensagem. */
  whatsapp?: { label: string; message: 'examples' };
}

const price = formatBRL(basicOffer.priceCents);
const renewal = formatBRL(basicOffer.annualRenewalCents);

/** No máximo seis perguntas (SDD v2 §13). A de exemplos é o único ponto que fala em trabalhos anteriores. */
export const faq: FaqItem[] = [
  {
    question: 'O que vocês fazem?',
    answer:
      'Criamos sites de apresentação e avaliamos projetos digitais que precisam de uma solução sob medida. O primeiro passo é entender o negócio e o que o cliente precisa encontrar.',
  },
  {
    question: 'Posso ver exemplos antes de decidir?',
    answer:
      'Sim. Como cada negócio precisa de uma solução diferente, enviamos exemplos pelo WhatsApp conforme o tipo de página que você está imaginando. Clique no botão abaixo e peça os exemplos.',
    whatsapp: { label: 'Pedir exemplos pelo WhatsApp', message: 'examples' },
  },
  {
    question: 'Tem mensalidade?',
    answer: `No pacote básico, não há mensalidade da Rabik. O primeiro período anual do domínio e da hospedagem está incluído nos ${price}. Depois, a renovação é de ${renewal} por ano para o domínio e a gestão técnica básica. Projetos com sistemas podem ter custos próprios.`,
  },
  {
    question: 'Eu mesmo vou precisar atualizar tudo?',
    answer:
      'O básico é uma página de apresentação, sem painel de edição. Alterações posteriores podem ser combinadas. Se você precisa editar produtos, fotos ou textos sozinho, podemos avaliar um painel em outro orçamento.',
  },
  {
    question: 'O site aparece no Google?',
    answer:
      'O site recebe preparação técnica básica para buscadores. A indexação e a posição dependem de fatores externos e não são garantidas. O link também pode ser colocado no Google Maps, Instagram e outros canais do negócio.',
  },
  {
    question: 'Como começo?',
    answer:
      'Clique em qualquer botão de conversa, explique o negócio e diga o que gostaria de apresentar. A Rabik responde com as próximas perguntas e, quando fizer sentido, uma proposta com escopo, preço e prazo.',
  },
];
