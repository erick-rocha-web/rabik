import { messages } from '../config/messages';

export interface Solution {
  id: 'site-apresentacao' | 'reformulacao' | 'sob-medida';
  title: string;
  text: string;
  /** Frase de orientação exibida ao selecionar. */
  guidance: string;
  cta: string;
  message: string;
}

export const solutions: Solution[] = [
  {
    id: 'site-apresentacao',
    title: 'Site de apresentação',
    text: 'Para mostrar serviços, fotos, informações úteis e contato. É o pacote básico da Rabik.',
    guidance: 'Bom ponto de partida se hoje o cliente depende da sua bio e das mensagens para entender o que você faz.',
    cta: 'Quero um site de apresentação',
    message: messages.basicOffer,
  },
  {
    id: 'reformulacao',
    title: 'Reformulação',
    text: 'Para reorganizar um site que já existe, melhorar a leitura e deixar a experiência mais atual.',
    guidance: 'Mande o link do site atual na conversa: o orçamento depende do que dá para reaproveitar.',
    cta: 'Quero melhorar meu site',
    message: messages.redesign,
  },
  {
    id: 'sob-medida',
    title: 'Projeto sob medida',
    text: 'Para loja virtual, painel, agenda, área restrita ou integração. Primeiro entendemos as funções; depois enviamos o orçamento.',
    guidance: 'Conte quem vai usar e o que precisa acontecer. O preço vem depois, numa proposta própria.',
    cta: 'Quero explicar meu projeto',
    message: messages.custom,
  },
];
