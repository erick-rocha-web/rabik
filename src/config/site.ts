/**
 * Configuração pública da Rabik — o único lugar para contatos, domínio e modo.
 *
 * Todos os campos aqui são conteúdo público (aparecem no site), não credenciais.
 * Campos `null` estão pendentes de confirmação pelo Erick: veja docs/PENDENCIAS.md.
 * Nunca preencha com dados de prospects (pet shops, salões etc.) nem com endereços
 * que ainda não existem.
 */

export type SiteMode = 'preview' | 'production';

export interface SiteConfig {
  brand: 'Rabik';
  mode: SiteMode;
  /** Domínio final, ex.: "https://www.exemplo.com.br". Sem ele não há canonical nem sitemap. */
  canonicalOrigin: string | null;
  /** WhatsApp comercial confirmado, formato internacional só com dígitos, ex.: "5561900000000". */
  whatsappDigits: string | null;
  contactEmail: string | null;
  /** Nome do responsável exibido no aviso de privacidade. */
  responsibleDisplayName: string | null;
}

/** O modo vem da variável RABIK_MODE (definida por `npm run build:production`). */
export function resolveMode(value: string | undefined): SiteMode {
  return value === 'production' ? 'production' : 'preview';
}

export const siteConfig: SiteConfig = {
  brand: 'Rabik',
  mode: resolveMode(process.env.RABIK_MODE),
  canonicalOrigin: null,
  whatsappDigits: '5561983645763', // +55 61 98364-5763, confirmado pelo Erick
  contactEmail: null,
  responsibleDisplayName: null,
};

export const seo = {
  homeTitle: 'Rabik — sites claros para negócios que querem aparecer bem',
  homeDescription:
    'A Rabik cria sites profissionais para apresentar seu negócio, organizar seus serviços e facilitar o contato pelo WhatsApp.',
};
