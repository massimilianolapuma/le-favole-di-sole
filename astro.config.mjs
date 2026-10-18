// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site } from './src/config/site.ts';

export default defineConfig({
  // Il dominio si cambia in src/config/site.ts (site.url).
  site: site.url,
  base: site.base,
  trailingSlash: 'ignore',
  build: { format: 'file' },
  integrations: [
    sitemap({
      filter: (page) => !/\/(privacy|cookie|404)$/.test(page.replace(/\/$/, '')),
    }),
  ],
});
