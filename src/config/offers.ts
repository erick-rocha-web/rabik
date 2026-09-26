/**
 * Condições comerciais — fonte única. Plano comercial do Erick revisado em 25/09/2026.
 * Para mudar um preço ou limite, altere apenas este arquivo: card, FAQ e mensagens derivam daqui.
 */

export const basicOffer = {
  priceCents: 99700,
  depositCents: 49850,
  balanceCents: 49850,
  annualRenewalCents: 10000,
  productionBusinessDays: 7,
  maxSections: 6,
  maxServiceCategories: 8,
  maxImages: 12,
  maxWords: 700,
  revisionRounds: 2,
  supportDays: 30,
} as const;

const brlWhole = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
const brlCents = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 });

/** Formata centavos em reais; omite ",00" em valores inteiros (R$ 997, R$ 498,50). */
export function formatBRL(cents: number): string {
  if (!Number.isInteger(cents)) throw new Error(`Valor em centavos deve ser inteiro: ${cents}`);
  return cents % 100 === 0 ? brlWhole.format(cents / 100) : brlCents.format(cents / 100);
}

const numberWords: Record<number, string> = {
  1: 'um', 2: 'duas', 3: 'três', 4: 'quatro', 5: 'cinco', 6: 'seis', 7: 'sete', 8: 'oito', 9: 'nove', 10: 'dez', 11: 'onze', 12: 'doze',
};
/** Número por extenso até doze (forma usada com substantivos femininos); acima disso, algarismos. */
export const inWords = (n: number) => numberWords[n] ?? String(n);

const o = basicOffer;

export const offerText = {
  title: 'Para começar, existe um caminho simples.',
  name: 'Site de apresentação Rabik',
  price: formatBRL(o.priceCents),
  description: `Um site com até ${inWords(o.maxSections)} seções para apresentar seu negócio, organizar serviços, inserir fotos e facilitar o contato.`,
  highlights: [
    'Adaptado para celular, tablet e computador.',
    `Até ${inWords(o.maxServiceCategories)} serviços ou categorias com descrição curta.`,
    `Até ${inWords(o.maxImages)} imagens inseridas e otimizadas.`,
    'WhatsApp, telefone, redes e localização fornecidos.',
    `${inWords(o.revisionRounds).replace(/^./, (c) => c.toUpperCase())} rodadas de ajustes dentro do escopo.`,
    'Primeiro período anual de domínio .com.br comum e hospedagem estática incluído.',
  ],
  payment: `${formatBRL(o.depositCents)} para iniciar + ${formatBRL(o.balanceCents)} após a aprovação, antes da publicação definitiva.`,
  renewal: `Depois do primeiro período, a renovação é de ${formatBRL(o.annualRenewalCents)} por ano para o domínio e a gestão técnica básica. Alterações e recursos extras têm orçamento separado.`,
  deadline: `Produção em até ${inWords(o.productionBusinessDays)} dias úteis a partir da data combinada, depois da entrada e com os materiais completos.`,
  /** Detalhes para o disclosure "Ver o que está incluído" (o que não cabe na lista visível). */
  details: [
    'Uma empresa, uma identidade visual e uma unidade/endereço.',
    `Organização e revisão de até ${o.maxWords} palavras a partir das informações que você enviar.`,
    'Título, descrição e estrutura técnica para buscadores, sem garantia de posição ou volume de acessos.',
    'Correções de defeitos não consomem as rodadas de ajustes.',
    'Domínio .com.br comum disponível para registro. Domínio especial ou já pertencente a terceiro exige análise.',
    `A renovação de ${formatBRL(o.annualRenewalCents)} não inclui novas páginas, alterações ilimitadas, painel ou manutenção de sistemas.`,
    `Acompanhamento inicial de ${o.supportDays} dias para dúvidas e problemas da entrega.`,
  ],
  cta: 'Conversar sobre o pacote básico',
};

export const customOffer = {
  title: 'Projetos sob medida',
  text: 'Precisa de loja, painel, agenda, login ou integração? Podemos avaliar. Esses projetos têm criação, infraestrutura e manutenção definidos em uma proposta própria.',
  price: 'Sob orçamento',
  cta: 'Quero explicar meu projeto',
};
