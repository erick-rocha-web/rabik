/**
 * Mensagens automáticas do WhatsApp — fonte única, uma por contexto.
 * O link só abre a conversa com o texto preenchido; a pessoa revisa e decide se envia.
 */
import { basicOffer, formatBRL } from './offers';

/** Preço com espaço comum (o Intl usa espaço não separável, que não precisa ir para o WhatsApp). */
const price = formatBRL(basicOffer.priceCents).replace(/ /g, ' ');

export const messages = {
  /** CTAs gerais: cabeçalho, menu mobile, hero e fechamento. */
  business: 'Olá! Conheci a Rabik e gostaria de conversar sobre um site para o meu negócio.',
  /** Pacote básico: card de investimento e opção "Site de apresentação". */
  basicOffer: `Olá! Tenho interesse no site de apresentação da Rabik por ${price}. Gostaria de entender os próximos passos.`,
  /** Opção "Reformulação". */
  redesign: 'Olá! Já tenho um site e gostaria de conversar com a Rabik sobre uma reformulação.',
  /** Projeto sob medida: card de investimento e opção "Projeto sob medida". */
  custom: 'Olá! Tenho uma ideia de projeto e gostaria de conversar com a Rabik sobre as funcionalidades e o orçamento.',
  /** FAQ "Posso ver exemplos antes de decidir?". */
  examples: 'Olá! Conheci a Rabik e gostaria de ver alguns exemplos de sites antes de decidir.',
} as const;
