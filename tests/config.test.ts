import { describe, expect, it } from 'vitest';
import { resolveMode, siteConfig, type SiteConfig } from '../src/config/site';
import { validateSiteConfig } from '../src/config/validate';

const complete: SiteConfig = {
  brand: 'Rabik',
  mode: 'production',
  canonicalOrigin: 'https://www.exemplo.com.br',
  whatsappDigits: '5561900000000',
  contactEmail: null,
  responsibleDisplayName: 'Nome do responsável',
};

describe('modo', () => {
  it('só é produção quando pedido explicitamente', () => {
    expect(resolveMode('production')).toBe('production');
    expect(resolveMode(undefined)).toBe('preview');
    expect(resolveMode('prod')).toBe('preview');
  });

  it('na Vercel, só o deploy de produção é produção', () => {
    expect(resolveMode(undefined, 'production')).toBe('production');
    expect(resolveMode(undefined, 'preview')).toBe('preview');
    expect(resolveMode(undefined, 'development')).toBe('preview');
    expect(resolveMode('preview', 'production')).toBe('preview');
  });
});

describe('validateSiteConfig', () => {
  it('preview sem contatos: apenas avisos, build segue (AC-08)', () => {
    const r = validateSiteConfig({ ...complete, mode: 'preview', whatsappDigits: null, canonicalOrigin: null, responsibleDisplayName: null });
    expect(r.errors).toEqual([]);
    expect(r.warnings.length).toBe(3);
  });

  it('produção sem WhatsApp falha com mensagem clara (AC-09)', () => {
    const r = validateSiteConfig({ ...complete, whatsappDigits: null });
    expect(r.errors).toHaveLength(1);
    expect(r.errors[0]).toMatch(/WhatsApp comercial não configurado/);
  });

  it('produção exige domínio e responsável', () => {
    const r = validateSiteConfig({ ...complete, canonicalOrigin: null, responsibleDisplayName: null });
    expect(r.errors.join(' ')).toMatch(/Domínio final/);
    expect(r.errors.join(' ')).toMatch(/Responsável/);
  });

  it('configuração completa passa', () => {
    expect(validateSiteConfig(complete)).toEqual({ errors: [], warnings: [] });
  });

  it('número com formato inválido é erro em qualquer modo', () => {
    expect(validateSiteConfig({ ...complete, mode: 'preview', whatsappDigits: '+55 61 90000-0000' }).errors).toHaveLength(1);
  });

  it('origem com barra final ou http é rejeitada', () => {
    expect(validateSiteConfig({ ...complete, canonicalOrigin: 'https://exemplo.com.br/' }).errors).toHaveLength(1);
    expect(validateSiteConfig({ ...complete, canonicalOrigin: 'http://exemplo.com.br' }).errors).toHaveLength(1);
  });
});

describe('configuração atual (AC-20)', () => {
  it('não contém contatos inventados', () => {
    // Só dados confirmados pelo Erick. Ao mudar um contato, atualize este teste
    // conscientemente — ele existe para impedir que um número de prospect entre por engano.
    expect(siteConfig.whatsappDigits).toBe('5561983645763'); // +55 61 98364-5763, confirmado pelo Erick
    expect(validateSiteConfig({ ...siteConfig, mode: 'preview' }).errors).toEqual([]);
    expect(siteConfig.contactEmail).toBe('rabik.digital@gmail.com'); // confirmado pelo Erick
    expect(siteConfig.responsibleDisplayName).toBe('Erick Roberto Araújo Rocha'); // confirmado pelo Erick
    expect(validateSiteConfig({ ...siteConfig, mode: 'production' })).toEqual({ errors: [], warnings: [] });
    expect(siteConfig.canonicalOrigin).toBe('https://rabikk.vercel.app');
  });
});
