# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Chi compra e legge:** adulti italiani, cioè genitori, nonni, educatori e insegnanti. Arrivano soprattutto da Instagram (`@lefavoledisole2025`), Facebook, YouTube o Google, spesso dal telefono, attratti da un contenuto social o da una ricerca su un tema concreto (per esempio la paura del buio).
- **Chi ascolta:** bambini dai 3 ai 9 anni. Non usano il sito da soli; il libro si legge con un adulto.
- **Il loro compito:** capire in pochi secondi se queste storie aiutano a parlare di emozioni con il bambino, poi scegliere fra una risorsa gratuita e il libro giusto.

## Product Purpose

Sito di accompagnamento al profilo Instagram e alla collana **Le Emozioni di Sole**, dieci libri illustrati (favola + fumetto + attività) pubblicati su Amazon KDP, uno per emozione. Non è un e-commerce. Il sito deve:

1. creare fiducia nel progetto e nell'autrice;
2. raccogliere email con la risorsa gratuita «Le carte delle emozioni di Sole — 10 domande e attività da fare insieme»;
3. portare l'adulto alla **scheda Amazon esatta** del libro pertinente, e da lì agli altri volumi.

Successo: il visitatore capisce cosa sono i libri, lascia la sua email o apre la scheda Amazon corretta.

## Positioning

Storie illustrate per dare un nome alle emozioni, una favola alla volta. Ogni volume unisce fumetto, favola completa, disegno da colorare, attività emotive e una mini guida per genitori. Nasce da un'autrice mamma, dal ricordo delle storie della nonna e da Maria Sole. Il valore è il momento condiviso tra adulto e bambino, non un metodo o un risultato.

## Operating Context

- Lettura serale o in un momento tranquillo, adulto e bambino insieme; attività brevi alla fine del libro.
- Acquisto solo su Amazon.it, in una nuova scheda. Il sito non gestisce pagamenti.
- Newsletter e lead magnet via email. Il provider non è ancora collegato: la preview non invia dati.

## Capabilities and Constraints

- **Collana:** 10 volumi. Disponibili: #1 *Sole e l'Amore* (ASIN B0HJHBPSSN), #2 *Sole e la Paura* (ASIN B0HN7FR169). #3–#10 sono «in arrivo», senza titoli né date.
- **Link Amazon:** solo verso le schede prodotto esatte, mai la pagina autore né ASIN vecchi. Sempre in una nuova scheda, con `rel="noopener noreferrer"`.
- **Nessuna promessa clinica, educativa o terapeutica.** Si parla di dialogo, ascolto e condivisione.
- **Niente pop-up automatici.** Il form si raggiunge da CTA esplicite.
- **Fuori perimetro:** e-commerce proprio, login, pagamenti, campagne Amazon Ads, modifiche alle schede KDP.
- **Da decidere:**
  - **chi è Sole nei libri** (bambina, personaggio-sole o altro): l'autrice deve confermarlo;
  - il cognome dell'autrice: «Barbera» è ricavato dall'URL Amazon, da confermare;
  - il legame con Maria Sole;
  - formato e numero di pagine dei volumi;
  - dominio, email, profili Facebook e YouTube.

## Brand Commitments

- **Nomi:** *Le Favole di Sole* (marchio), *Le Emozioni di Sole* (collana).
- **Payoff:** «Storie illustrate per dare un nome alle emozioni, una favola alla volta.»
- **Tono:** caldo, fiabesco, rispettoso, concreto; mai infantile verso l'adulto. Italiano.
- **Valori:** ascolto, emozioni senza giudizio, relazione famigliare, immaginazione, attività condivise.
- **Vincoli visivi del brief:** atmosfera luminosa e gentile (crema, rosa cipria, pesca, giallo sole, azzurro polvere, verde salvia); illustrazioni morbide, texture tipo carta o acquerello; un serif editoriale amichevole per i titoli e un sans molto leggibile per il testo; niente elementi stock aziendali.
- **Etichette fissate dal brief:**
  - menu: Home · La collana · Risorse per genitori · Chi è Antonella · Newsletter;
  - CTA dell'hero: «Scopri la collana», «Scarica le carte delle emozioni»;
  - CTA della collana: «Ricevi per prima le prossime emozioni»;
  - CTA d'acquisto: «Acquista [titolo] su Amazon».

## Evidence on Hand

- **Recensioni:** per *Sole e l'Amore*, 8 recensioni a 5 stelle su Amazon.it, indicate nel brief e da ricontrollare (flag `verified` in `src/config/site.ts`). Per *Sole e la Paura*: nessuna.
- **Immagini:** esistono solo le copertine su Amazon. **Non ci sono illustrazioni di Sole isolate, tavole interne né foto dell'autrice**: oggi sono tutte segnaposto etichettati.
- **Testimonianze:** nessuna. Non vanno inventate. La sezione è predisposta e resta nascosta finché è vuota.
- **Mai da inventare:** premi, partner, dati di vendita, qualifiche professionali, citazioni di clienti.

## Product Principles

1. **Il momento insieme prima del prodotto:** ogni pagina propone qualcosa da fare con il bambino, anche a chi non compra.
2. **Onestà prima della persuasione:** solo prove reali; le assenze (volumi futuri, immagini mancanti) si dichiarano, non si mascherano.
3. **Una decisione chiara per schermata:** al massimo due azioni principali; acquisto e risorsa gratuita non competono nello stesso punto.
4. **L'adulto è il lettore, il bambino il destinatario:** linguaggio adulto e gentile, immaginario da fiaba.

## Accessibility & Inclusion

- Contrasto sufficiente, focus visibile, navigazione da tastiera, `alt` descrittivi, nessuna informazione affidata solo al colore.
- Testo leggibile anche per i nonni.
- Esperienza mobile curata a 360 px.
- Domande al bambino con forme inclusive («sentito/a»).
