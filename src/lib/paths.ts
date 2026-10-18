/**
 * Percorsi del sito. Tutti i link interni nel codice e in `site.ts` sono scritti dalla radice
 * (es. '/collana'): `link()` aggiunge la sottocartella in cui il sito è pubblicato
 * (es. '/le-favole-di-sole' su GitHub Pages), così i componenti non dipendono dall'hosting.
 */
import { site } from '../config/site';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** '/collana' → '/le-favole-di-sole/collana'. Ancore ('#carte') e URL esterni restano invariati. */
export const link = (path: string) => (path.startsWith('/') ? `${BASE}${path}` : path);

/** URL assoluto per canonical, JSON-LD e sitemap. */
export const absoluteUrl = (path: string) => new URL(link(path), site.url).href;

/** Toglie la sottocartella dal percorso della pagina corrente. */
export const stripBase = (pathname: string) =>
  BASE && pathname.startsWith(BASE) ? pathname.slice(BASE.length) || '/' : pathname;

/** Percorso pulito senza sottocartella, estensione .html né slash finale (la build genera file .html). */
export const cleanPath = (pathname: string) =>
  stripBase(pathname).replace(/(\.html|\/)$/, '').replace(/\/index$/, '') || '/';
