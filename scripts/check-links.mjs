// Controllo di accettazione sulla build statica (dist/). Uso: npm run build && npm run check
// Verifica: link interni esistenti, nessun href vuoto o "#", link Amazon solo verso gli ASIN
// configurati con target/rel corretti, un solo H1, title e meta description unici per pagina.
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const config = readFileSync(new URL('../src/config/site.ts', import.meta.url), 'utf8');
const allowedAmazon = [...config.matchAll(/amazonUrl: '([^']+)'/g)].map((m) => m[1]);
// Sottocartella di pubblicazione (es. '/le-favole-di-sole' su GitHub Pages): i link interni la includono.
const BASE = config.match(/^\s*base: '([^']*)'/m)?.[1] ?? '';

const files = [];
const walk = (dir) => {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (p.endsWith('.html')) files.push(p);
  }
};
walk(DIST);

const errors = [];
const titles = new Map();
const descriptions = new Map();

const resolveInternal = (href) => {
  let path = href.split('#')[0].split('?')[0];
  if (BASE) {
    if (path !== BASE && !path.startsWith(BASE + '/')) return false;
    path = path.slice(BASE.length) || '/';
  }
  if (path === '' || path === '/') return existsSync(join(DIST, 'index.html'));
  const clean = path.replace(/^\//, '').replace(/\/$/, '');
  return [clean, `${clean}.html`, join(clean, 'index.html')].some((c) => existsSync(join(DIST, c)));
};

for (const file of files) {
  const page = '/' + relative(DIST, file);
  const html = readFileSync(file, 'utf8');

  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) errors.push(`${page}: ${h1} elementi H1 (atteso 1)`);

  const title = html.match(/<title>([^<]*)<\/title>/)?.[1];
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
  if (!title) errors.push(`${page}: <title> mancante`);
  if (!desc) errors.push(`${page}: meta description mancante`);
  if (titles.has(title)) errors.push(`${page}: title duplicato di ${titles.get(title)}`);
  if (descriptions.has(desc)) errors.push(`${page}: description duplicata di ${descriptions.get(desc)}`);
  titles.set(title, page);
  descriptions.set(desc, page);

  for (const [tag] of html.matchAll(/<a\b[^>]*>/g)) {
    const href = tag.match(/href="([^"]*)"/)?.[1];
    if (href === undefined || href === '' || href === '#') {
      errors.push(`${page}: link senza destinazione ${tag}`);
      continue;
    }
    if (href.includes('amazon.')) {
      if (!allowedAmazon.includes(href)) errors.push(`${page}: link Amazon non consentito ${href}`);
      if (!tag.includes('target="_blank"') || !tag.includes('rel="noopener noreferrer"'))
        errors.push(`${page}: link Amazon senza target/rel corretti`);
    } else if (href.startsWith('#')) {
      if (!html.includes(`id="${href.slice(1)}"`)) errors.push(`${page}: ancora inesistente ${href}`);
    } else if (href.startsWith('/')) {
      if (!resolveInternal(href)) errors.push(`${page}: link interno rotto ${href}`);
    }
  }
}

console.log(`Pagine controllate: ${files.length}`);
console.log(`Link Amazon consentiti:\n  ${allowedAmazon.join('\n  ')}`);
if (errors.length) {
  console.error(`\n${errors.length} problemi:\n- ${errors.join('\n- ')}`);
  process.exit(1);
}
console.log('Nessun problema trovato.');
