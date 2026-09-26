import { describe, expect, it } from 'vitest';
import { buildWhatsAppUrl, isValidWhatsAppDigits } from '../src/lib/whatsapp';
import { messages } from '../src/config/messages';

const textOf = (url: string) => new URL(url).searchParams.get('text');

describe('buildWhatsAppUrl', () => {
  it('não gera link sem número confirmado (AC-06)', () => {
    expect(buildWhatsAppUrl(null, 'oi')).toBeNull();
    expect(buildWhatsAppUrl(undefined, 'oi')).toBeNull();
    expect(buildWhatsAppUrl('', 'oi')).toBeNull();
  });

  it('rejeita formatos que não são só dígitos internacionais, sem "corrigir" nada', () => {
    for (const bad of ['+5561900000000', '(61) 90000-0000', '061900000000', '123', '5561 900000000']) {
      expect(isValidWhatsAppDigits(bad)).toBe(false);
      expect(buildWhatsAppUrl(bad, 'x')).toBeNull();
    }
  });

  it('mantém o número exatamente como configurado', () => {
    // Fixo de 10 dígitos continua fixo: nada de acrescentar nono dígito.
    expect(buildWhatsAppUrl('556133334444', 'x')!.startsWith('https://wa.me/556133334444?')).toBe(true);
  });

  it('codifica acentos, &, quebras de linha, emoji e HTML sem perda', () => {
    const msg = 'Salão & barbearia — agenda\n2ª linha 😀 <script>alert(1)</script> 100% ?#';
    const url = buildWhatsAppUrl('5561900000000', msg)!;
    const encoded = url.split('?text=')[1];
    expect(encoded).not.toMatch(/[\s&#<>?]/);
    expect(textOf(url)).toBe(msg);
  });

  it('link direto sem texto', () => {
    expect(buildWhatsAppUrl('5561900000000')).toBe('https://wa.me/5561900000000');
  });
});

describe('mensagens automáticas por contexto', () => {
  it('usam exatamente os textos definidos pelo Erick', () => {
    expect(messages).toEqual({
      business: 'Olá! Conheci a Rabik e gostaria de conversar sobre um site para o meu negócio.',
      basicOffer: 'Olá! Tenho interesse no site de apresentação da Rabik por R$ 997. Gostaria de entender os próximos passos.',
      redesign: 'Olá! Já tenho um site e gostaria de conversar com a Rabik sobre uma reformulação.',
      custom: 'Olá! Tenho uma ideia de projeto e gostaria de conversar com a Rabik sobre as funcionalidades e o orçamento.',
      examples: 'Olá! Conheci a Rabik e gostaria de ver alguns exemplos de sites antes de decidir.',
    });
  });

  it('o preço da mensagem usa espaço comum, não o espaço não separável do Intl', () => {
    expect(messages.basicOffer).not.toContain(' ');
  });

  it('acentos e espaços viram %XX e voltam idênticos', () => {
    for (const msg of Object.values(messages)) {
      const url = buildWhatsAppUrl('5561983645763', msg)!;
      expect(url).toBe(`https://wa.me/5561983645763?text=${encodeURIComponent(msg)}`);
      expect(url).not.toMatch(/[ áãâçéêíóõú]/); // `!` é permitido em URL e não precisa ser codificado
      expect(textOf(url)).toBe(msg);
    }
  });
});
