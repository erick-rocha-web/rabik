import { describe, expect, it } from 'vitest';
import { basicOffer, formatBRL, offerText, customOffer } from '../src/config/offers';
import { messages } from '../src/config/messages';
import { faq } from '../src/data/faq';
import { solutions } from '../src/data/solutions';

const nbsp = (s: string) => s.replace(/ /g, ' ');
const allText = () => nbsp(JSON.stringify({ offerText, customOffer, messages, faq, solutions }));

describe('valores comerciais centralizados (AC-08)', () => {
  it('formata em BRL com Intl', () => {
    expect(nbsp(formatBRL(99700))).toBe('R$ 997');
    expect(nbsp(formatBRL(49850))).toBe('R$ 498,50');
    expect(nbsp(formatBRL(10000))).toBe('R$ 100');
    expect(() => formatBRL(99.5)).toThrow();
  });

  it('entrada + saldo = preço', () => {
    expect(basicOffer.depositCents + basicOffer.balanceCents).toBe(basicOffer.priceCents);
  });

  it('oferta mostra preço, entrada, saldo e renovação', () => {
    expect(nbsp(offerText.price)).toBe('R$ 997');
    expect(nbsp(offerText.payment)).toBe('R$ 498,50 para iniciar + R$ 498,50 após a aprovação, antes da publicação definitiva.');
    expect(nbsp(offerText.renewal)).toContain('R$ 100 por ano');
  });

  it('FAQ e mensagens usam os mesmos valores', () => {
    const mensalidade = faq.find((f) => f.question === 'Tem mensalidade?')!;
    expect(mensalidade.answer).toContain(offerText.price);
    expect(mensalidade.answer).toContain(formatBRL(basicOffer.annualRenewalCents));
    expect(messages.basicOffer).toContain(nbsp(offerText.price));
  });

  it('nenhum valor em R$ diferente dos configurados', () => {
    const allowed = new Set([basicOffer.priceCents, basicOffer.depositCents, basicOffer.annualRenewalCents].map((c) => nbsp(formatBRL(c))));
    for (const m of allText().match(/R\$ \d{1,3}(?:\.\d{3})*(?:,\d{2})?/g) ?? []) expect(allowed).toContain(m);
  });

  it('sob medida sem preço inventado (AC-09)', () => {
    expect(JSON.stringify(customOffer)).not.toMatch(/R\$/);
    expect(customOffer.price).toBe('Sob orçamento');
    expect(customOffer.text).toMatch(/loja/);
    expect(customOffer.text).toMatch(/painel/);
  });
});

describe('soluções (AC-07)', () => {
  it('três pontos de partida com os CTAs do SDD e mensagens distintas', () => {
    expect(solutions.map((s) => s.cta)).toEqual(['Quero um site de apresentação', 'Quero melhorar meu site', 'Quero explicar meu projeto']);
    expect(new Set(solutions.map((s) => s.message)).size).toBe(3);
    expect(solutions.map((s) => s.message)).toEqual([messages.basicOffer, messages.redesign, messages.custom]);
  });

  it('nenhuma solução mostra orçamento ou soma de preços', () => {
    for (const s of solutions) expect(`${s.text} ${s.guidance}`).not.toMatch(/R\$/);
    // Só a mensagem do pacote básico cita preço, e é o preço configurado.
    expect(solutions.filter((s) => /R\$/.test(s.message)).map((s) => s.id)).toEqual(['site-apresentacao']);
  });
});

describe('FAQ (AC-04)', () => {
  it('no máximo seis perguntas', () => {
    expect(faq.length).toBeLessThanOrEqual(6);
  });

  it('pergunta de exemplos existe e tem o CTA com a mensagem de exemplos', () => {
    const ex = faq.find((f) => f.question === 'Posso ver exemplos antes de decidir?')!;
    expect(ex.whatsapp).toEqual({ label: 'Pedir exemplos pelo WhatsApp', message: 'examples' });
    expect(ex.answer).toMatch(/pelo WhatsApp/);
  });

  it('só a pergunta de exemplos fala em exemplos', () => {
    expect(faq.filter((f) => /exemplo/i.test(f.question + f.answer))).toHaveLength(1);
  });
});

describe('claims (AC-03, AC-15)', () => {
  it('nenhum texto central cita portfólio, cases, depoimentos ou resultados', () => {
    expect(allText()).not.toMatch(/portf[oó]lio|clientes atendidos|\bcases?\b|trabalhos realizados|depoimento|garantimos|\+\d+%/i);
  });
});
