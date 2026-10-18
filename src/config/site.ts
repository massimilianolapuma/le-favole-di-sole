/**
 * Configurazione centrale del sito "Le Favole di Sole".
 *
 * Tutti i valori di brand, link esterni, stato dei volumi, social, email,
 * privacy e integrazioni future vivono qui. I componenti leggono solo da
 * questo file: per cambiare un link o un testo ricorrente, modifica qui.
 *
 * Valori marcati con `TODO` sono segnaposto da confermare prima del lancio.
 */

export type SocialLink = {
  id: 'instagram' | 'facebook' | 'youtube';
  label: string;
  handle: string;
  /** `null` = profilo non ancora configurato: viene mostrato come "in arrivo", senza link. */
  url: string | null;
};

export type BookTone = 'amore' | 'paura';

export type Book = {
  slug: string;
  volume: number;
  title: string;
  emotion: string;
  tone: BookTone;
  ageRange: string;
  /** URL Amazon esatto della scheda (ASIN). Mai la pagina autore. */
  amazonUrl: string;
  asin: string;
  metaTitle: string;
  metaDescription: string;
  /** Sinossi di una riga per card e liste. */
  oneLiner: string;
  /** Descrizione per l'adulto nella pagina libro (paragrafi). */
  description: string[];
  /** Voci del blocco "Dentro il libro". */
  inside: { title: string; text: string }[];
  /** Didascalie delle tre tavole interne. */
  spreads: string[];
  question: string;
  questionHint: string;
  /**
   * Recensioni Amazon. Il blocco compare solo con `verified: true`:
   * mettilo a `true` solo dopo aver controllato numero e media sulla scheda Amazon.it,
   * e aggiorna `checkedAt` ogni volta che ricontrolli.
   * `null` = nessuna recensione da mostrare.
   */
  reviews: { verified: boolean; average: number; count: number; checkedAt: string } | null;
  /**
   * Dati del volume mostrati sotto il titolo. Lascia `null` ciò che non è confermato:
   * non viene mostrato. Il prezzo non si scrive qui: rimandiamo sempre ad Amazon.it.
   */
  facts: { format: string | null; pages: number | null };
  /**
   * Testimonianze reali e autorizzate. Lasciare vuoto finché non ce ne sono:
   * la sezione appare automaticamente solo quando l'array contiene almeno una voce.
   */
  testimonials: { quote: string; author: string }[];
  /**
   * Copertina definitiva. Lasciare `null` per usare il placeholder illustrato.
   * Per sostituire: metti l'immagine in /public/images/ e indica qui il percorso,
   * es. '/images/sole-e-l-amore-copertina.webp'.
   */
  coverImage: string | null;
  /** Percorsi delle tavole interne definitive (stesso ordine di `spreads`). */
  spreadImages: (string | null)[];
  crossLink: { label: string; slug: string };
};

export type SeriesSlot =
  | { volume: number; status: 'disponibile'; slug: string }
  | { volume: number; status: 'in-arrivo'; emotion: string | null };

export const site = {
  brand: 'Le Favole di Sole',
  seriesName: 'Le Emozioni di Sole',
  tagline: 'Storie illustrate per dare un nome alle emozioni, una favola alla volta.',
  author: {
    name: 'Antonella Barbera', // TODO: confermare la firma preferita dall'autrice
    shortName: 'Antonella',
    /** Foto definitiva in /public/images/, es. '/images/antonella.webp'. `null` = placeholder. */
    photo: null as string | null,
  },
  language: 'it-IT',
  /**
   * Indirizzo pubblico del sito, usato da canonical, sitemap.xml, robots.txt e JSON-LD.
   * Oggi: anteprima su GitHub Pages, servita nella sottocartella `base`.
   * Con un dominio proprio: `url: 'https://www.dominio.it'` e `base: ''`.
   */
  url: 'https://massimilianolapuma.github.io',
  base: '/le-favole-di-sole',
  /**
   * `false` finché il sito è un'anteprima: tutte le pagine hanno `noindex` e robots.txt
   * chiede ai motori di non indicizzare. Mettere `true` solo al lancio sul dominio definitivo.
   */
  indexable: false,
  defaultDescription:
    'Le Favole di Sole: favole e fumetti illustrati per bambini dai 3 ai 9 anni, per parlare insieme di emozioni. Libri della collana Le Emozioni di Sole e risorse gratuite per genitori.',

  /** `null` = indirizzo non ancora attivo: nel footer appare come "in arrivo", senza mailto. */
  email: null as string | null, // TODO: es. 'ciao@dominio.it'

  social: [
    { id: 'instagram', label: 'Instagram', handle: '@lefavoledisole2025', url: 'https://www.instagram.com/lefavoledisole2025/' },
    { id: 'facebook', label: 'Facebook', handle: 'Le Favole di Sole', url: null }, // TODO
    { id: 'youtube', label: 'YouTube', handle: 'Le Favole di Sole', url: null }, // TODO
  ] satisfies SocialLink[],

  legal: {
    privacyUrl: '/privacy',
    cookieUrl: '/cookie',
  },

  nav: [
    { label: 'Home', href: '/' },
    { label: 'La collana', href: '/collana' },
    { label: 'Risorse per genitori', href: '/risorse' },
    { label: 'Chi è Antonella', href: '/antonella' },
    { label: 'Newsletter', href: '/newsletter' },
  ],

  leadMagnet: {
    title: 'Le carte delle emozioni di Sole',
    subtitle: '10 domande e attività da fare insieme',
    format: 'PDF da stampare',
    successMessage: 'Le carte stanno arrivando nella tua casella di posta.',
  },

  /**
   * Newsletter: provider attivo. 'preview' non invia nulla (solo validazione e conferma).
   * Per collegare un provider vedi src/lib/newsletter.ts e il README.
   */
  newsletter: {
    provider: 'preview' as 'preview' | 'brevo' | 'mailerlite' | 'custom',
    /** Endpoint del form del provider o di una tua funzione serverless. Vuoto in preview. */
    endpoint: '',
    /** ID lista/gruppo del provider, se richiesto. */
    listId: '',
  },

  /**
   * Analytics e Search Console: tutti vuoti in preview, nessuno script viene caricato.
   * Vedi src/components/Analytics.astro e il README.
   */
  analytics: {
    googleSiteVerification: '', // contenuto del meta "google-site-verification"
    plausibleDomain: '', // es. 'dominio.it' se si usa Plausible
    ga4MeasurementId: '', // es. 'G-XXXXXXX' (richiede banner cookie e consenso)
  },
};

export const books: Book[] = [
  {
    slug: 'sole-e-l-amore',
    volume: 1,
    title: "Sole e l'Amore",
    emotion: 'Amore',
    tone: 'amore',
    ageRange: '3–9 anni',
    amazonUrl: 'https://www.amazon.it/Sole-lAmore-fumetto-educativo-bambini/dp/B0HJHBPSSN',
    asin: 'B0HJHBPSSN',
    metaTitle: "Sole e l'Amore — favola e fumetto illustrato sulle emozioni, 3–9 anni",
    metaDescription:
      "Sole e l'Amore, volume 1 della collana Le Emozioni di Sole: fumetto, favola completa, disegno da colorare e attività per parlare di affetto e legami in famiglia.",
    oneLiner: 'Sole scopre i mille modi in cui ci si vuole bene, dentro e fuori casa.',
    description: [
      "Sole e l'Amore è una favola e un fumetto illustrato per riconoscere l'amore nelle sue forme più quotidiane: l'affetto di chi si prende cura di noi, i legami di famiglia, i piccoli gesti che dicono «ci sono».",
      "È pensato per essere letto insieme. Le pagine lasciano spazio alle domande del bambino e alle vostre, e le attività finali trasformano la lettura in un momento da condividere.",
    ],
    inside: [
      { title: 'Fumetto illustrato', text: 'Le avventure di Sole raccontate per immagini, da sfogliare anche prima di saper leggere.' },
      { title: 'Favola completa', text: "La stessa storia in forma di favola, da leggere ad alta voce la sera o in un momento tranquillo." },
      { title: 'Disegno da colorare', text: 'Una tavola da colorare per continuare la storia con le proprie mani.' },
      { title: 'Attività emotive', text: 'Piccoli esercizi per riconoscere quando e da chi ci sentiamo voluti bene.' },
      { title: 'Mini guida per genitori', text: 'Spunti semplici per accompagnare la lettura e le domande che possono nascere.' },
    ],
    spreads: ['Una pagina del fumetto', 'Una pagina della favola', 'Il disegno da colorare'],
    spreadImages: [null, null, null],
    question: 'Quando ti sei sentito/a molto amato/a oggi?',
    questionHint: 'Potete rispondere a turno. Anche un ricordo piccolo va benissimo: un abbraccio, una merenda, una parola gentile.',
    testimonials: [],
    // Dato indicato nel brief (8 recensioni a 5 stelle). TODO: verificare sulla scheda Amazon.it,
    // poi lasciare `verified: true` e aggiornare `checkedAt`; con `false` il blocco sparisce.
    reviews: { verified: true, average: 5, count: 8, checkedAt: 'ottobre 2026' },
    facts: { format: null, pages: null }, // TODO: es. { format: 'Copertina flessibile', pages: 48 }
    coverImage: null,
    crossLink: { label: 'Scopri Sole e la Paura', slug: 'sole-e-la-paura' },
  },
  {
    slug: 'sole-e-la-paura',
    volume: 2,
    title: 'Sole e la Paura',
    emotion: 'Paura',
    tone: 'paura',
    ageRange: '3–9 anni',
    amazonUrl: 'https://www.amazon.it/Antonella-Barbera/dp/B0HN7FR169',
    asin: 'B0HN7FR169',
    metaTitle: 'Sole e la Paura — favola e fumetto illustrato sulla paura del buio, 3–9 anni',
    metaDescription:
      'Sole e la Paura, volume 2 della collana Le Emozioni di Sole: una storia illustrata per parlare di buio, ombre e coraggio, con attività e mini guida per genitori.',
    oneLiner: "Quando arriva il buio, Sole impara che anche la paura si può guardare insieme.",
    description: [
      "Sole e la Paura è una storia per parlare della paura con i bambini: il buio, le ombre sul muro, l'immaginazione che corre e il coraggio che arriva un passo alla volta.",
      'La storia non dice al bambino che «non c\'è niente da temere». Riconosce quello che prova, gli dà un nome e lascia spazio a ciò che può aiutarlo, insieme a un adulto vicino.',
    ],
    inside: [
      { title: 'Fumetto illustrato', text: 'Sole e le sue ombre raccontati per immagini, da guardare anche prima di saper leggere.' },
      { title: 'Favola completa', text: 'La storia in forma di favola, da leggere ad alta voce magari proprio prima di spegnere la luce.' },
      { title: 'Disegno da colorare', text: 'Una tavola da colorare per dare forma e colore a ciò che fa un po\' paura.' },
      { title: 'Attività sulla paura', text: 'Piccoli esercizi per nominare le paure e pensare insieme a cosa può essere d\'aiuto.' },
      { title: 'Mini guida per genitori', text: 'Spunti per accogliere la paura senza minimizzarla e senza alimentarla.' },
    ],
    spreads: ['Una pagina del fumetto', 'Una pagina della favola', 'Il disegno da colorare'],
    spreadImages: [null, null, null],
    question: "Cosa potrebbe aiutarti quando una cosa ti fa un po' paura?",
    questionHint: 'Una luce accesa, un pupazzo, una parola da dire ad alta voce: ogni idea del bambino merita di essere ascoltata.',
    reviews: null,
    facts: { format: null, pages: null }, // TODO
    testimonials: [],
    coverImage: null,
    crossLink: { label: "Parti dal primo volume: Sole e l'Amore", slug: 'sole-e-l-amore' },
  },
];

/**
 * I dieci volumi della collana. Per i volumi futuri non indichiamo titoli o date:
 * quando un volume è pronto, aggiungi il libro in `books` e cambia lo slot in
 * `{ volume: n, status: 'disponibile', slug: '...' }`.
 * `emotion` può essere valorizzato quando l'emozione del volume è ufficiale.
 */
export const series: SeriesSlot[] = [
  { volume: 1, status: 'disponibile', slug: 'sole-e-l-amore' },
  { volume: 2, status: 'disponibile', slug: 'sole-e-la-paura' },
  ...[3, 4, 5, 6, 7, 8, 9, 10].map((volume) => ({ volume, status: 'in-arrivo' as const, emotion: null })),
];

export const bookBySlug = (slug: string) => books.find((b) => b.slug === slug);
export const bookPath = (slug: string) => `/libri/${slug}`;
