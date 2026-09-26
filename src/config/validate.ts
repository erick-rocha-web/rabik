import type { SiteConfig } from './site';
import { isValidWhatsAppDigits } from '../lib/whatsapp';

export interface ConfigReport {
  /** Impedem o build de produção. */
  errors: string[];
  /** Não bloqueiam, mas devem ser revistos. */
  warnings: string[];
}

/**
 * Verifica se a configuração permite publicar. Em preview, ausências viram avisos;
 * em produção, o que impede uma publicação honesta vira erro.
 */
export function validateSiteConfig(config: SiteConfig): ConfigReport {
  const errors: string[] = [];
  const warnings: string[] = [];
  const blocking = (msg: string) => (config.mode === 'production' ? errors : warnings).push(msg);

  if (config.whatsappDigits === null) {
    blocking(
      'WhatsApp comercial não configurado (siteConfig.whatsappDigits). O fluxo de contato não pode ser publicado sem um canal real confirmado pelo Erick.',
    );
  } else if (!isValidWhatsAppDigits(config.whatsappDigits)) {
    errors.push(
      `siteConfig.whatsappDigits tem formato inválido ("${config.whatsappDigits}"). Use formato internacional só com dígitos, ex.: 5561900000000.`,
    );
  }

  if (config.canonicalOrigin === null) {
    blocking('Domínio final não configurado (siteConfig.canonicalOrigin). Sem ele não há canonical, sitemap nem URLs absolutas de OG.');
  } else if (!/^https:\/\/[a-z0-9.-]+[a-z0-9]$/i.test(config.canonicalOrigin)) {
    errors.push(`siteConfig.canonicalOrigin deve ser uma origem https sem barra final (recebido "${config.canonicalOrigin}").`);
  }

  if (config.responsibleDisplayName === null) {
    blocking('Responsável não identificado (siteConfig.responsibleDisplayName). O aviso de privacidade precisa dessa informação.');
  }

  if (config.contactEmail !== null && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.contactEmail)) {
    errors.push(`siteConfig.contactEmail inválido ("${config.contactEmail}").`);
  }

  return { errors, warnings };
}
