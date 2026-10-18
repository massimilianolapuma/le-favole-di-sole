# Le Favole di Sole — sito preview

Sito statico (Astro 7) per la collana **Le Emozioni di Sole**: home, collana, due pagine libro, risorse per genitori con tre articoli, pagina autrice e newsletter con lead magnet. Nessun e-commerce: i CTA d'acquisto portano alla scheda Amazon.it esatta di ogni libro.

## Avvio

Richiede Node.js 22.22 o successivo.

```bash
npm install
npm run dev        # sviluppo con ricarica automatica → http://localhost:4321/le-favole-di-sole/
npm run build      # build statica in dist/
npm run preview    # serve la build → http://localhost:4321/le-favole-di-sole/
npm run check      # dopo la build: link interni, link Amazon, H1, title e description
```

Se `npm install` segnala lo script di installazione di `esbuild`, approvalo con `npm install-scripts approve esbuild`.

## Pubblicazione (GitHub Pages)

Ogni push su `main` avvia `.github/workflows/deploy.yml`, che esegue build e `npm run check` e pubblica `dist/` su GitHub Pages:
**https://massimilianolapuma.github.io/le-favole-di-sole/**

- Il sito vive nella sottocartella `/le-favole-di-sole`, definita in `site.base` (`src/config/site.ts`). Nel codice tutti i link interni si scrivono dalla radice (`'/collana'`) e passano da `link()` in `src/lib/paths.ts`, che aggiunge la sottocartella.
- In locale: `npm run build && npm run preview`, poi apri http://localhost:4321/le-favole-di-sole/
- **Anteprima non indicizzata:** con `site.indexable: false` tutte le pagine hanno `noindex` e `robots.txt` blocca i motori di ricerca. Mettilo a `true` solo al lancio.
- **Dominio proprio:** imposta `site.url` (es. `https://www.dominio.it`) e `site.base: ''`, aggiungi `public/CNAME` con il dominio e configura il DNS secondo la guida di GitHub Pages.

## Pagine

| URL | File |
| --- | --- |
| `/` | `src/pages/index.astro` |
| `/collana` | `src/pages/collana.astro` |
| `/libri/sole-e-l-amore`, `/libri/sole-e-la-paura` | `src/pages/libri/[slug].astro` → `src/components/BookPage.astro` |
| `/risorse` | `src/pages/risorse/index.astro` |
| `/risorse/<articolo>` | `src/pages/risorse/[slug].astro` + `src/content/articoli/*.md` |
| `/antonella` | `src/pages/antonella.astro` |
| `/newsletter` | `src/pages/newsletter.astro` |
| `/privacy`, `/cookie` | testi segnaposto, `noindex` |
| `/sitemap-index.xml`, `/robots.txt` | generati in build |

## Dove cambiare i contenuti

**Tutto ciò che si ripete o porta fuori dal sito è in `src/config/site.ts`:** nome del brand, payoff, autrice, dominio, email, social, link privacy/cookie, testi del lead magnet, provider newsletter, analytics, dati dei libri (titoli, URL Amazon, ASIN, descrizioni, "Dentro il libro", domanda, recensioni) e stato dei dieci volumi.

- **Dominio**: `site.url` e `site.base` (oggi GitHub Pages). Vengono usati da canonical, sitemap, robots e JSON-LD.
- **Email e social**: `site.email`, `site.social`. Se il valore è `null`, il footer mostra "in arrivo" senza link.
- **Nuovo volume**: aggiungi un oggetto in `books` e cambia lo slot corrispondente in `series` in `{ volume: n, status: 'disponibile', slug: '...' }`. La pagina `/libri/<slug>` nasce da sola. Per un volume non ancora uscito puoi indicare l'emozione con `emotion: 'Gioia'`.
- **Recensioni**: `books[n].reviews` (`average`, `count`, `checkedAt`). Compaiono solo con `verified: true`: mettilo dopo aver controllato la scheda Amazon.it.
- **Formato e pagine**: `books[n].facts`. Ciò che resta `null` non viene mostrato; il prezzo rimanda sempre ad Amazon.it.
- **Testimonianze**: `books[n].testimonials`. La sezione compare solo quando l'array contiene almeno una voce. Usa solo testimonianze vere e autorizzate.
- **Mini-card emozioni della home e carte del PDF**: `src/data/content.ts`.
- **Articoli**: un file Markdown per articolo in `src/content/articoli/`. Il frontmatter indica titolo, meta description, estratto, minuti di lettura e un solo libro collegato (facoltativo).

Tutti i testi sono raccolti anche in `CONTENT.md` per la revisione.

## Immagini

Il sito funziona senza immagini definitive: copertine, tavole e foto sono segnaposto illustrati con un'etichetta visibile ("da sostituire").

1. Esporta le immagini in WebP o AVIF: circa 800×1000 px per le copertine (rapporto 4:5) e 1200×900 px per le tavole (4:3).
2. Mettile in `public/images/`.
3. Indica il percorso in `src/config/site.ts`:
   - copertina: `books[n].coverImage: '/images/sole-e-l-amore-copertina.webp'`
   - tavole: `books[n].spreadImages: ['/images/amore-1.webp', null, null]`
   - foto dell'autrice: `site.author.photo: '/images/antonella.webp'`

I componenti `BookCover` e `Placeholder` passano da soli all'`<img>` con caricamento lazy (eager solo nella prima schermata). Quando avrai un'immagine social da 1200×630, aggiungi `og:image` in `src/layouts/BaseLayout.astro`, dove c'è il TODO.

## Newsletter: come collegare un provider

Il form (`src/components/NewsletterForm.astro`) chiama solo `subscribe()` di `src/lib/newsletter.ts`. In preview (`site.newsletter.provider = 'preview'`) valida i dati e mostra la conferma, **senza inviare nulla**.

Per andare live:

1. Crea la lista e la sequenza di benvenuto (con il PDF delle carte) su Brevo, MailerLite o un altro provider. Attiva il double opt-in.
2. **Non mettere chiavi API nel codice client.** Ci sono due strade:
   - usare l'endpoint pubblico del form del provider;
   - creare una piccola funzione serverless (Netlify, Vercel, Cloudflare) che riceve `{ email, name, consent, source }` e chiama l'API con la chiave lato server.
3. In `site.newsletter` imposta `provider`, `endpoint` ed eventualmente `listId`. Se il provider vuole nomi di campo diversi, adatta il body in `subscribe()`.
4. Completa l'informativa privacy (`/privacy`) indicando il provider scelto.

Il campo `source` (`home`, `newsletter`, …) indica da dove arriva l'iscrizione e serve per segmentare la sequenza.

## Analytics e Search Console

Punto unico: `src/components/Analytics.astro`, configurato da `site.analytics`. In preview è tutto vuoto e non viene caricato alcuno script.

- **Search Console**: incolla il codice di verifica in `googleSiteVerification` (meta tag), poi invia `https://<dominio>/sitemap-index.xml`.
- **Plausible** (senza cookie, la scelta più semplice per il GDPR): imposta `plausibleDomain`.
- **GA4 o pixel**: servono un banner cookie e il consenso preventivo. Lo snippet va caricato solo dopo il consenso, nel punto indicato nel componente.

Gli eventi passano tutti da `track()` in `src/lib/analytics.ts`. I click sugli elementi con `data-track` vengono già tracciati: `cta_amazon`, `cta_book_page`, `cta_lead_magnet`, `cta_collection`, `newsletter_submit`, `newsletter_success`, `article_open`, `social_click`.

## Dati strutturati

- `Organization` su tutte le pagine (`BaseLayout.astro`).
- `Book` sulle due pagine libro (`BookPage.astro`), `BookSeries` su `/collana`, `Article` sugli articoli.
- Nessuna `AggregateRating` e nessuna Google Book Action.

## Struttura

```
src/
  config/site.ts          configurazione centrale
  data/content.ts         mini-card emozioni + 10 carte del lead magnet
  content/articoli/*.md   articoli risorse
  components/             Header, Footer, MobileBar, BookPage, BookCard, BookCover,
                          Shelf (scaffale collana), LeadMagnet, NewsletterForm, Placeholder…
  layouts/BaseLayout.astro  head, SEO, JSON-LD Organization, analytics
  lib/                    newsletter, analytics, paths
  styles/global.css       token di design (colori, tipografia, spaziature)
scripts/check-links.mjs   controlli di accettazione sulla build
docs/screenshots/         screenshot desktop e mobile
```

I font (Young Serif per i titoli, Atkinson Hyperlegible Next per il testo) sono serviti dal sito stesso tramite Fontsource: nessuna chiamata a Google Fonts.
