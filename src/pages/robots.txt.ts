import type { APIRoute } from 'astro';
import { site } from '../config/site';
import { absoluteUrl } from '../lib/paths';

// Finché `site.indexable` è false (anteprima) chiediamo ai motori di non indicizzare.
export const GET: APIRoute = () =>
  new Response(
    `User-agent: *\n${site.indexable ? 'Allow: /' : 'Disallow: /'}\n\nSitemap: ${absoluteUrl('/sitemap-index.xml')}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
