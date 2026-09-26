/**
 * Link do WhatsApp. Módulo puro: roda no navegador e nos testes; não importa a configuração.
 * O número vem sempre de siteConfig.whatsappDigits.
 */

/**
 * Estrutura mínima de um número internacional (E.164 sem "+"): 10 a 15 dígitos, sem zero inicial.
 * Validar a estrutura NÃO confirma que o número existe ou usa WhatsApp, e nada aqui
 * acrescenta ou remove o nono dígito.
 */
export function isValidWhatsAppDigits(digits: string | null | undefined): digits is string {
  return typeof digits === 'string' && /^[1-9]\d{9,14}$/.test(digits);
}

/** Retorna null quando não há número válido: nunca gera link quebrado ou inventado. */
export function buildWhatsAppUrl(digits: string | null | undefined, message?: string): string | null {
  if (!isValidWhatsAppDigits(digits)) return null;
  const base = `https://wa.me/${digits}`;
  const text = message?.replace(/\r\n?/g, '\n').trim();
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
