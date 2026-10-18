# Testi del sito — bozza da revisionare

Tutti i testi della preview, pagina per pagina. Accanto a ogni blocco è indicato il file in cui modificarlo.
Le voci **[DA CONFERMARE]** sono ipotesi o segnaposto da verificare con l'autrice prima della pubblicazione.

## Da confermare prima del lancio

- **[DA CONFERMARE] Firma dell'autrice**: "Antonella Barbera", ricavata dallo slug dell'URL Amazon di *Sole e la Paura* (`site.author.name`).
- **[DA CONFERMARE] Maria Sole**: i testi la presentano come la bambina per cui Antonella ha cominciato a raccontare storie dopo essere diventata mamma, senza dire esplicitamente "figlia". Va verificato il legame e cosa l'autrice vuole raccontare.
- **[DA CONFERMARE] La nonna**: nei testi è la nonna di Antonella, che le raccontava storie. Va verificato.
- **[DA CONFERMARE] Recensioni**: *Sole e l'Amore* mostra "Media 5 su 5 · 8 recensioni su Amazon.it · Aggiornato a ottobre 2026" (dato del brief). Il blocco compare solo con `reviews.verified: true` in `site.ts`: ricontrollare sulla scheda e aggiornare `checkedAt`, oppure mettere `false` per nasconderlo.
- **[DA CONFERMARE] Formato e pagine**: `facts.format` e `facts.pages` sono vuoti; quando valorizzati compaiono sotto il titolo del libro. Il prezzo non viene mai scritto sul sito: "Prezzo su Amazon.it".
- **[DA CONFERMARE] Contenuti dei libri**: la struttura "Dentro il libro" (fumetto, favola, disegno da colorare, attività, mini guida) viene dal brief. Le descrizioni di dettaglio delle attività sono da verificare.
- **[DA CONFERMARE] Lead magnet**: le 10 carte qui sotto sono una proposta. Il PDF va ancora realizzato.
- **Segnaposto**: dominio, email, Facebook, YouTube, informativa privacy e cookie policy.
- **[DA CHIEDERE ALL'AUTRICE] "Ricevi per prima"**: l'etichetta del brief è al femminile ed esclude padri, nonni e insegnanti. Proporre "Ricevi in anteprima le prossime emozioni" o confermare.
- **[DA CHIEDERE ALL'AUTRICE] Sole come guida del sito**: chi è Sole, a chi parla, illustrazioni disponibili e diritti d'uso. Domande complete in `docs/brief-sole-guida.md`.

---

## Globali (`src/config/site.ts`)

- **Brand**: Le Favole di Sole
- **Collana**: Le Emozioni di Sole
- **Payoff**: Storie illustrate per dare un nome alle emozioni, una favola alla volta.
- **Meta description predefinita**: Le Favole di Sole: favole e fumetti illustrati per bambini dai 3 ai 9 anni, per parlare insieme di emozioni. Libri della collana Le Emozioni di Sole e risorse gratuite per genitori.
- **Menu**: Home · La collana · Risorse per genitori · Chi è Antonella · Newsletter · @lefavoledisole2025 (Instagram)
- **CTA mobile persistente**: "Ricevi le carte gratis" (in home porta al form nella pagina; negli articoli compare dopo metà lettura; nelle pagine libro: "Acquista su Amazon"). Non appare nella pagina Newsletter.
- **Footer**: payoff · "Le Favole di Sole non vende direttamente: i libri della collana si acquistano su Amazon.it." · Instagram @lefavoledisole2025 · Facebook, profilo in arrivo · YouTube, profilo in arrivo · Email, indirizzo in arrivo · Privacy · Cookie

## Home `/` (`src/pages/index.astro`, `src/data/content.ts`)

**Title**: Le Favole di Sole — favole illustrate sulle emozioni per bambini 3–9 anni

### Hero
- **H1**: Storie illustrate per dare un nome alle emozioni, una favola alla volta.
- **Testo**: Libri illustrati per bambini dai 3 ai 9 anni: un fumetto, una favola e piccole attività per parlare insieme di ciò che si prova.
- **CTA**: Scopri la collana · Scarica le carte delle emozioni
- **Segnali di fiducia**: 3–9 anni, da leggere con un adulto · Fumetto, favola e attività in ogni volume · Scritti da Antonella, mamma e autrice

### Le emozioni sono tutte importanti
Anche quelle che fanno un po' di rumore. Ognuna ha qualcosa da dire, e si può ascoltare insieme.
- **Amore**: È il calore di un abbraccio e di chi si prende cura di noi. → *Leggi Sole e l'Amore*
- **Paura**: Ci avvisa quando qualcosa sembra troppo grande. Si può guardare insieme. → *Leggi Sole e la Paura*
- **Gioia**: Arriva all'improvviso e ha voglia di essere condivisa. Non ha ancora un libro. La trovi nella *carta 3 delle carte gratuite* (→ form)
- **Rabbia**: Dice che qualcosa non va. Ha bisogno di essere ascoltata, non zittita. Non ha ancora un libro. La trovi nella *carta 4 delle carte gratuite* (→ form)

### Una storia, un'emozione, un momento insieme
Ogni volume è pensato per un tempo condiviso, breve e possibile anche nelle sere più piene.
1. **Leggere insieme**: Dieci minuti, una favola o un fumetto, il bambino vicino. È il momento in cui ci si ferma.
2. **Nominare ciò che si prova**: Le emozioni di Sole diventano parole da usare anche per le proprie: «anche io, a volte».
3. **Fare una piccola attività**: Un disegno, una domanda, un gioco breve alla fine del libro per continuare la conversazione.

### I primi due volumi, già disponibili
La collana Le Emozioni di Sole conta dieci favole. Puoi cominciare da qui, in qualsiasi ordine.
Card libro (vedi sotto) con CTA "Scopri il libro" · link "Guarda tutti i dieci volumi della collana"

### Storie nate in famiglia
Antonella ha cominciato a scrivere quando è diventata mamma. Le storie che inventava per Maria Sole avevano il sapore di quelle che le raccontava sua nonna: semplici, piene di immagini, capaci di far sentire al sicuro.
Da quelle sere è nata Sole, e con lei l'idea di una favola per ogni emozione.
→ *Leggi la storia di Antonella*

### Lead magnet (vedi Newsletter)

### Piccoli strumenti per genitori
Idee brevi e concrete da leggere anche se non hai ancora un libro della collana. → *Vai a tutte le risorse per genitori*

## La collana `/collana` (`src/pages/collana.astro`)

**Title**: La collana Le Emozioni di Sole — dieci favole sulle emozioni
**Description**: Le Emozioni di Sole: una collana di dieci favole e fumetti illustrati per bambini dai 3 ai 9 anni. Ogni volume accompagna bambini e adulti nell'ascolto di un'emozione.

- **H1**: Le Emozioni di Sole
- Una collana di dieci favole e fumetti illustrati. Ogni volume accompagna bambini e adulti nell'ascolto di un'emozione, con una storia da leggere insieme e piccole attività per continuare a parlarne.
- Oggi sono disponibili 2 volumi su 10: scegli un dorso per scoprirli. (Nascosto su mobile, dove lo dice già lo scaffale.)
- **Scaffale** (accanto al testo su desktop): #1 Sole e l'Amore (link) · #2 Sole e la Paura (link) · #3–#10 dorsi sottili velati con i pigmenti del brand, scritta verticale "in arrivo", non cliccabili · didascalia "Volumi 3–10: in arrivo, uno alla volta." · *Ricevi per prima le prossime emozioni* (nelle pagine libro solo la didascalia)
- **Disponibili ora**: Si possono leggere in qualsiasi ordine. Ogni volume è una storia completa.
- **Com'è fatto ogni volume**: Ogni libro ha la stessa struttura, così bambini e adulti sanno cosa aspettarsi: prima il fumetto, poi la favola completa, quindi un disegno da colorare, alcune attività sull'emozione del volume e una mini guida per chi legge.
- **Le prossime emozioni arrivano per email**: Ti scriviamo quando esce un nuovo volume. Iscrivendoti ricevi subito, gratis, «Le carte delle emozioni di Sole». → **Ricevi per prima le prossime emozioni**

## Pagina libro: Sole e l'Amore `/libri/sole-e-l-amore` (`books[0]` in `src/config/site.ts`)

**Title**: Sole e l'Amore — favola e fumetto illustrato sulle emozioni, 3–9 anni
**Description**: Sole e l'Amore, volume 1 della collana Le Emozioni di Sole: fumetto, favola completa, disegno da colorare e attività per parlare di affetto e legami in famiglia.

- **Etichetta**: Volume 1 · Le Emozioni di Sole · 3–9 anni
- **H1**: Sole e l'Amore
- **Sinossi breve (card)**: Sole scopre i mille modi in cui ci si vuole bene, dentro e fuori casa.
- **Descrizione**:
  - Sole e l'Amore è una favola e un fumetto illustrato per riconoscere l'amore nelle sue forme più quotidiane: l'affetto di chi si prende cura di noi, i legami di famiglia, i piccoli gesti che dicono «ci sono».
  - È pensato per essere letto insieme. Le pagine lasciano spazio alle domande del bambino e alle vostre, e le attività finali trasformano la lettura in un momento da condividere.
- **Sotto il titolo**: Fumetto + favola + attività · Prezzo su Amazon.it (più formato e pagine quando confermati)
- **Recensioni**: 5 stelle (icone) · Media 5 su 5 · 8 recensioni su Amazon.it · Aggiornato a ottobre 2026 **[DA CONFERMARE]**
- **CTA primaria**: Acquista Sole e l'Amore su Amazon → https://www.amazon.it/Sole-lAmore-fumetto-educativo-bambini/dp/B0HJHBPSSN
- **Nota**: Si apre la scheda del libro su Amazon.it. Il sito non gestisce pagamenti.
- **CTA secondaria**: Scopri Sole e la Paura
- **Dentro il libro**:
  - **Fumetto illustrato**: Le avventure di Sole raccontate per immagini, da sfogliare anche prima di saper leggere.
  - **Favola completa**: La stessa storia in forma di favola, da leggere ad alta voce la sera o in un momento tranquillo.
  - **Disegno da colorare**: Una tavola da colorare per continuare la storia con le proprie mani.
  - **Attività emotive**: Piccoli esercizi per riconoscere quando e da chi ci sentiamo voluti bene.
  - **Mini guida per genitori**: Spunti semplici per accompagnare la lettura e le domande che possono nascere.
- **Tavole**: Una pagina del fumetto · Una pagina della favola · Il disegno da colorare
- **Domanda**: «Quando ti sei sentito/a molto amato/a oggi?». Potete rispondere a turno. Anche un ricordo piccolo va benissimo: un abbraccio, una merenda, una parola gentile.
- **Dopo la domanda (entrambi i libri)**: **Vuoi altre domande come questa?** Le carte delle emozioni di Sole ne raccolgono dieci, ognuna con un'attività da fare insieme. Gratis, via email. → Ricevi le carte gratis
- **Chiusura**: Fa parte della collana Le Emozioni di Sole. Dieci favole, un'emozione per volume. Sole e l'Amore è il volume 1.

## Pagina libro: Sole e la Paura `/libri/sole-e-la-paura` (`books[1]`)

**Title**: Sole e la Paura — favola e fumetto illustrato sulla paura del buio, 3–9 anni
**Description**: Sole e la Paura, volume 2 della collana Le Emozioni di Sole: una storia illustrata per parlare di buio, ombre e coraggio, con attività e mini guida per genitori.

- **Etichetta**: Volume 2 · Le Emozioni di Sole · 3–9 anni
- **H1**: Sole e la Paura
- **Sinossi breve (card)**: Quando arriva il buio, Sole impara che anche la paura si può guardare insieme.
- **Descrizione**:
  - Sole e la Paura è una storia per parlare della paura con i bambini: il buio, le ombre sul muro, l'immaginazione che corre e il coraggio che arriva un passo alla volta.
  - La storia non dice al bambino che «non c'è niente da temere». Riconosce quello che prova, gli dà un nome e lascia spazio a ciò che può aiutarlo, insieme a un adulto vicino.
- **Sotto il titolo**: Fumetto + favola + attività · Prezzo su Amazon.it
- **Recensioni**: nessuna (non mostrate)
- **CTA primaria**: Acquista Sole e la Paura su Amazon → https://www.amazon.it/Antonella-Barbera/dp/B0HN7FR169
- **CTA secondaria**: Parti dal primo volume: Sole e l'Amore
- **Dentro il libro**:
  - **Fumetto illustrato**: Sole e le sue ombre raccontati per immagini, da guardare anche prima di saper leggere.
  - **Favola completa**: La storia in forma di favola, da leggere ad alta voce magari proprio prima di spegnere la luce.
  - **Disegno da colorare**: Una tavola da colorare per dare forma e colore a ciò che fa un po' paura.
  - **Attività sulla paura**: Piccoli esercizi per nominare le paure e pensare insieme a cosa può essere d'aiuto.
  - **Mini guida per genitori**: Spunti per accogliere la paura senza minimizzarla e senza alimentarla.
- **Domanda**: «Cosa potrebbe aiutarti quando una cosa ti fa un po' paura?». Una luce accesa, un pupazzo, una parola da dire ad alta voce: ogni idea del bambino merita di essere ascoltata.

## Risorse per genitori `/risorse` (`src/pages/risorse/index.astro`)

**Title**: Risorse per genitori — idee per parlare di emozioni con i bambini
- **H1**: Piccoli strumenti per grandi emozioni
- Idee brevi da leggere in pochi minuti e da provare la sera stessa. Per genitori, nonni, educatori e insegnanti, anche senza un libro tra le mani.
- Nuove risorse arrivano con la newsletter, insieme alle prossime storie.

### Articoli (`src/content/articoli/`)
Il testo completo è nei file Markdown.

| Articolo | File | Libro collegato |
| --- | --- | --- |
| Cosa dire quando un bambino ha paura del buio | `paura-del-buio.md` | Sole e la Paura |
| Tre domande per parlare delle emozioni dopo una storia | `tre-domande-dopo-una-storia.md` | Sole e l'Amore |
| Come usare una favola per creare un momento di ascolto | `favola-momento-di-ascolto.md` | Sole e l'Amore |

**Box finale in ogni articolo**: Ti è stato utile? Prova le carte delle emozioni. Dieci domande e attività da fare insieme, gratis in un PDF da stampare. Arrivano via email. → **Ricevi le carte gratis** · Se vuoi una storia su questo tema, c'è *[libro]*.

## Chi è Antonella `/antonella` (`src/pages/antonella.astro`)

**Title**: Chi è Antonella — l'autrice delle Favole di Sole
- **H1**: Chi è Antonella
- Mamma e autrice. Scrive favole illustrate per bambini perché crede che una storia letta insieme sia uno dei modi più semplici per dire: quello che provi conta.
- **Tutto è cominciato con Maria Sole** **[DA CONFERMARE]**: Quando è nata Maria Sole, Antonella ha ricominciato a raccontare storie. Prima per farla addormentare, poi per rispondere alle sue domande, poi per accompagnarla nei momenti in cui un'emozione sembrava troppo grande da spiegare. Il personaggio di Sole è nato così: dalla voglia di avere una storia giusta al momento giusto.
- **Le storie della nonna** **[DA CONFERMARE]**: Prima ancora, c'erano le storie della nonna. Racconti semplici, pieni di immagini, detti con la calma di chi ha tempo per ascoltare. Da lì vengono il tono gentile delle Favole di Sole e l'idea che una storia possa far sentire al sicuro.
- **Perché scrivere di emozioni**: I bambini provano emozioni grandi molto prima di avere le parole per dirle. Una favola dà loro un personaggio in cui riconoscersi e agli adulti un modo per cominciare la conversazione, senza fretta e senza giudizio. Per questo ogni volume della collana Le Emozioni di Sole è dedicato a un'emozione e si chiude con piccole attività da fare insieme. Non per insegnare cosa provare, ma per fare spazio a ciò che si prova.
- **Comincia da una storia**: Scopri i primi due volumi, o ricevi gratis le carte delle emozioni da usare a casa. → Scopri la collana · Ricevi le carte gratis

## Newsletter `/newsletter` (`src/pages/newsletter.astro`, `src/components/LeadMagnet.astro`, `NewsletterForm.astro`)

**Title**: Le carte delle emozioni di Sole — risorsa gratuita e newsletter
- **H1**: Le carte delle emozioni di Sole
- 10 domande e attività da fare insieme, gratis in un PDF da stampare.
- Lasciaci la tua email: ti mandiamo subito le carte e, ogni tanto, una nuova storia, un'idea da provare a casa o la notizia di un nuovo volume della collana.
- Dieci carte, una per emozione, con una domanda e un'attività. · Pensate per bambini dai 3 ai 9 anni, da usare con un adulto. · Ogni tanto, una storia o un'idea nuova via email. Niente spam.
- **Form**: Nome (facoltativo) · Email · [ ] Voglio ricevere le carte e le email di Le Favole di Sole. Ho letto l'informativa privacy. Posso cancellarmi quando voglio. · **Ricevi le carte gratis**
- **Errori**: Inserisci la tua email per ricevere le carte. · Controlla l'email: sembra incompleta (esempio: nome@dominio.it). · Per inviarti le carte serve il tuo consenso.
- **Conferma**: Le carte stanno arrivando nella tua casella di posta. Se l'email non arriva entro qualche minuto, guarda anche nelle cartelle Promozioni e Spam. Nel frattempo puoi leggere le risorse per genitori.
- **Nota preview**: Anteprima del sito: il modulo verifica i dati ma non li invia.
- **Come funziona**: Cosa ricevo? · Quante email arrivano? · Posso cancellarmi? · Come usate i miei dati?

### Le 10 carte del PDF (`src/data/content.ts`) [DA CONFERMARE]

| # | Emozione | Domanda | Attività |
| --- | --- | --- | --- |
| 1 | Amore | Quando ti sei sentito/a voluto/a bene oggi? | Raccontatevi a turno un momento della giornata e disegnate un cuore per ciascuno. |
| 2 | Paura | Che forma e che colore ha la tua paura? | Disegnatela insieme, poi pensate a cosa potrebbe farla sentire meno grande. |
| 3 | Gioia | Cosa ti fa venire voglia di ridere forte? | Inventate insieme un ballo della gioia di tre passi. |
| 4 | Rabbia | Dove la senti nel corpo, la rabbia? | Soffiate piano tre volte, come per spegnere una candelina, e dite come vi sentite dopo. |
| 5 | Tristezza | Cosa ti aiuta quando ti senti un po' giù? | Preparate una scatola del conforto con tre oggetti scelti dal bambino. |
| 6 | Calma | Qual è il tuo posto tranquillo? | Chiudete gli occhi e descrivetelo a turno: colori, suoni, profumi. |
| 7 | Coraggio | Quando sei stato/a coraggioso/a anche se avevi un po' paura? | Disegnate una medaglia per quel momento. |
| 8 | Gentilezza | Che gesto gentile hai ricevuto oggi? | Scegliete un piccolo gesto gentile da fare domani per qualcuno. |
| 9 | Gratitudine | Per quale cosa piccola dici grazie stasera? | Disegnate tre «grazie» su un foglietto da tenere vicino al letto. |
| 10 | Tutte le emozioni | Che tempo fa dentro di te oggi: sole, nuvole o temporale? | Disegnate il vostro meteo delle emozioni e confrontatelo. |

## Privacy e Cookie (`src/pages/privacy.astro`, `cookie.astro`)
Testi segnaposto con avviso visibile "da redigere prima della pubblicazione". Le pagine sono `noindex` e restano fuori dalla sitemap.
