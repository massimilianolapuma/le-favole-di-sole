# Conversion checklist

Ogni pagina ha un obiettivo e al massimo due CTA principali. Gli eventi tra parentesi sono i nomi `data-track` (vedi `src/lib/analytics.ts`).

Flusso principale: **social / Google → pagina utile o pagina libro → carte gratuite + email → sequenza email → scheda Amazon → altri volumi.**

## Elementi globali

| Elemento | CTA | Destinazione | Obiettivo |
| --- | --- | --- | --- |
| Barra mobile persistente (≤ 768 px) | Ricevi le carte gratis (`cta_lead_magnet`); su `/collana`: Ricevi per prima le prossime emozioni | `/newsletter#modulo` (in home: `#carte`, nella pagina) | Lead sempre raggiungibile. Si nasconde quando il form o la CTA principale sono già visibili; negli articoli compare solo dopo il 60% della lettura; non appare su `/newsletter` |
| Barra mobile, pagine libro | Acquista su Amazon (`cta_amazon`) | Scheda Amazon del libro, nuova scheda | Acquisto |
| Header | Voci di menu + Instagram (`social_click`) | Pagine interne, profilo Instagram | Orientamento, fiducia social |
| Footer | Menu, Instagram, Privacy, Cookie | Pagine interne. Facebook, YouTube ed email "in arrivo" senza link | Fiducia, aspetti legali |

Nessun pop-up automatico. Il form si raggiunge solo da CTA esplicite e dal box in fondo a ogni articolo, cioè dopo una lettura completa.

## Home `/`

| Blocco | CTA | Destinazione | Obiettivo |
| --- | --- | --- | --- |
| Hero (sopra la piega, desktop e 360 px) | **Scopri la collana** (`cta_collection`) | `/collana` | Scelta del libro |
| Hero | **Scarica le carte delle emozioni** (`cta_lead_magnet`) | `#carte` (form nella stessa pagina) | Lead |
| Emozioni: Amore, Paura | Leggi Sole e l'Amore / Leggi Sole e la Paura (`cta_book_page`) | `/libri/sole-e-l-amore`, `/libri/sole-e-la-paura` | Pagina libro |
| Emozioni: Gioia, Rabbia | "carta 3/4 delle carte gratuite" (`cta_lead_magnet`) | `#carte` | Nessun link a libri inesistenti; l'emozione diventa aggancio al lead magnet |
| Libri disponibili | Scopri il libro (`cta_book_page`) | Pagine libro | Pagina libro |
| Libri disponibili | Guarda tutti i dieci volumi della collana | `/collana` | Percezione della collana |
| Autrice | Leggi la storia di Antonella | `/antonella` | Fiducia |
| Lead magnet | **Ricevi le carte gratis** (`newsletter_submit`, `newsletter_success`) | Validazione + conferma (preview, nessun invio) | Lead |
| Risorse | Card articolo (`article_open`) · Vai a tutte le risorse | `/risorse/*`, `/risorse` | Contenuto utile, SEO |

## La collana `/collana`

| Blocco | CTA | Destinazione | Obiettivo |
| --- | --- | --- | --- |
| Scaffale 1–10 | Dorsi #1 e #2 (`cta_book_page`) | Pagine libro | Pagina libro |
| Scaffale (prima schermata, accanto al testo) | #3–#10 dorsi velati "in arrivo" + didascalia · Ricevi per prima le prossime emozioni (`cta_lead_magnet`) | `/newsletter#modulo` | Mostrare il progetto in 10 volumi senza promettere titoli o date; la barra mobile si nasconde mentre lo scaffale è visibile |
| Disponibili ora | Scopri il libro | Pagine libro | Pagina libro |
| Box newsletter | **Ricevi per prima le prossime emozioni** (`cta_lead_magnet`) | `/newsletter#modulo` | Lead + attesa dei volumi successivi |

## Sole e l'Amore `/libri/sole-e-l-amore`

| Blocco | CTA | Destinazione | Obiettivo |
| --- | --- | --- | --- |
| Hero (sopra la piega, desktop e 360 px) | **Acquista Sole e l'Amore su Amazon** (`cta_amazon`) | https://www.amazon.it/Sole-lAmore-fumetto-educativo-bambini/dp/B0HJHBPSSN, nuova scheda, `rel="noopener noreferrer"` | Acquisto |
| Hero | Scopri Sole e la Paura (`cta_book_page`) | `/libri/sole-e-la-paura` | Altro volume |
| Segnale di fiducia | Media 5 su 5 · 8 recensioni su Amazon.it · aggiornato a ottobre 2026 (solo con `reviews.verified: true`) | — | Riprova sociale verificata |
| Dopo la domanda | Ricevi le carte gratis (`cta_lead_magnet`) | `/newsletter#modulo` | Lead per chi non è pronto a comprare |
| Chiusura | Acquista su Amazon · Scopri Sole e la Paura · scaffale | Come sopra | Acquisto o volume successivo |
| Testimonianze | Sezione predisposta, nascosta finché `testimonials` è vuoto | — | Solo testimonianze future e verificate |

## Sole e la Paura `/libri/sole-e-la-paura`

| Blocco | CTA | Destinazione | Obiettivo |
| --- | --- | --- | --- |
| Hero (sopra la piega) | **Acquista Sole e la Paura su Amazon** (`cta_amazon`) | https://www.amazon.it/Antonella-Barbera/dp/B0HN7FR169, nuova scheda, `rel="noopener noreferrer"` | Acquisto |
| Hero | Parti dal primo volume: Sole e l'Amore (`cta_book_page`) | `/libri/sole-e-l-amore` | Volume 1 |
| Recensioni | nessuna mostrata | — | Nessuna recensione inventata |
| Dopo la domanda | Ricevi le carte gratis (`cta_lead_magnet`) | `/newsletter#modulo` | Lead per chi non è pronto a comprare |
| Chiusura | Acquista su Amazon · Parti dal primo volume · scaffale | Come sopra | Acquisto o volume 1 |

## Risorse `/risorse`

| Blocco | CTA | Destinazione | Obiettivo |
| --- | --- | --- | --- |
| Lista | 3 card articolo (`article_open`) | `/risorse/<slug>` | Lettura, fiducia, SEO |

## Articoli `/risorse/<slug>`

Una sola azione principale: le carte gratuite. Al massimo un link secondario a un libro.

| Articolo | CTA principale (box finale + barra mobile dopo metà lettura) | Link secondario (uno) |
| --- | --- | --- |
| Cosa dire quando un bambino ha paura del buio | Ricevi le carte gratis → `/newsletter#modulo` | Sole e la Paura |
| Tre domande per parlare delle emozioni dopo una storia | Ricevi le carte gratis → `/newsletter#modulo` | Sole e l'Amore |
| Come usare una favola per creare un momento di ascolto | Ricevi le carte gratis → `/newsletter#modulo` | Sole e l'Amore |

## Chi è Antonella `/antonella`

| Blocco | CTA | Destinazione | Obiettivo |
| --- | --- | --- | --- |
| Chiusura | **Scopri la collana** (`cta_collection`) | `/collana` | Scelta del libro |
| Chiusura | Ricevi le carte gratis (`cta_lead_magnet`) | `/newsletter#modulo` | Lead |

## Newsletter `/newsletter`

| Blocco | CTA | Destinazione | Obiettivo |
| --- | --- | --- | --- |
| Form | **Ricevi le carte gratis** (`newsletter_submit` / `newsletter_success`) | `subscribe()` in `src/lib/newsletter.ts`: in preview nessun invio | Lead |
| Conferma | leggere le risorse per genitori | `/risorse` | Coinvolgimento dopo l'iscrizione |
| Consenso | informativa privacy | `/privacy` | Conformità |

## Verifiche automatiche

`npm run build && npm run check` controlla tutte le pagine generate:
- nessun link senza destinazione (`href` vuoto o `#`) e nessuna ancora inesistente;
- tutti i link interni portano a pagine esistenti;
- link Amazon solo verso i due URL configurati, con `target="_blank"` e `rel="noopener noreferrer"`;
- un solo H1 per pagina, con title e meta description presenti e unici.

## Da fare quando il sito va live

- [ ] Collegare il provider email e la sequenza di benvenuto con il PDF (README → Newsletter)
- [ ] Sostituire dominio, email, Facebook e YouTube in `src/config/site.ts`
- [ ] Ricontrollare recensioni su Amazon.it (`reviews.verified`, `checkedAt`) e inserire formato/pagine (`facts`)
- [ ] Inserire copertine, tavole e foto definitive
- [ ] Redigere privacy e cookie policy
- [ ] Attivare analytics e Search Console, poi inviare la sitemap
- [ ] Usare link UTM nei post social (es. `?utm_source=instagram&utm_medium=social&utm_campaign=paura-del-buio`) verso la pagina più pertinente, non sempre la home
