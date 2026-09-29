import { defineConfig } from 'astro/config';
import type { AstroIntegration } from 'astro';
import { readFile, writeFile } from 'node:fs/promises';
import { siteConfig } from './src/config/site';
import { validateSiteConfig } from './src/config/validate';

/**
 * - Em produção, interrompe o build se faltar contato/domínio/responsável (SDD AC-09).
 * - Gera robots.txt e, apenas com domínio real configurado, sitemap.xml.
 */
function rabikSite(): AstroIntegration {
  return {
    name: 'rabik-site',
    hooks: {
      'astro:config:setup': ({ logger }) => {
        const { errors, warnings } = validateSiteConfig(siteConfig);
        logger.info(`modo: ${siteConfig.mode}`);
        for (const w of warnings) logger.warn(`pendência: ${w}`);
        if (errors.length) {
          throw new Error(
            `Configuração impede o build (${siteConfig.mode}):\n- ${errors.join('\n- ')}\n\nAjuste src/config/site.ts e veja docs/PENDENCIAS.md.`,
          );
        }
      },
      'astro:build:done': async ({ dir, pages }) => {
        const origin = siteConfig.canonicalOrigin;
        const indexable = siteConfig.mode === 'production' && origin !== null;
        const robots = indexable
          ? `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`
          : 'User-agent: *\nDisallow: /\n';
        await writeFile(new URL('robots.txt', dir), robots);
        if (!indexable) return;
        // Só entram páginas geradas, sem noindex, com canonical próprio neste domínio.
        const locs = new Set<string>();
        for (const { pathname } of pages) {
          const file = pathname === '' ? 'index.html' : `${pathname.replace(/\/$/, '')}/index.html`;
          const html = await readFile(new URL(file, dir), 'utf8').catch(() => null);
          if (html === null || /<meta name="robots" content="[^"]*noindex/i.test(html)) continue;
          const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
          if (canonical?.startsWith(`${origin}/`)) locs.add(canonical);
        }
        const urls = [...locs].sort().map((loc) => `  <url><loc>${loc}</loc></url>`).join('\n');
        await writeFile(
          new URL('sitemap.xml', dir),
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
        );
      },
    },
  };
}

export default defineConfig({
  site: siteConfig.canonicalOrigin ?? undefined,
  trailingSlash: 'always',
  integrations: [rabikSite()],
  devToolbar: { enabled: false },
});
