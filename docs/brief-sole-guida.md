# Brief: Sole come guida della visita

**Stato:** in attesa di risposte dall'autrice. Non si costruisce finché le domande aperte qui sotto non hanno risposta e non c'è almeno un'illustrazione di Sole.

## 1. Lavoro e pubblico
- Il visitatore è un adulto (genitore, nonno, educatore) che arriva dai social o da Google, spesso dal telefono.
- Oggi conosce il progetto solo attraverso testi e copertine. Sole, la cosa che il bambino ricorderà, non compare mai sul sito.
- Le pagine coinvolte sono soprattutto di persuasione (home, pagine libro, conferma iscrizione) più la pagina 404.

## 2. Risultato e prova
- **Risultato:** l'adulto riconosce Sole come protagonista della collana e collega il sito ai libri che ha visto o vedrà.
- **Effetto sul percorso:** l'iscrizione e l'acquisto restano le azioni principali; Sole le rende più calde, non le sostituisce.
- **Prova accettabile:** solo il personaggio vero dei libri. Nessuna Sole inventata o generata.

## 3. Direzione
- **Riferimento visivo:** il mondo visivo attuale del sito (pigmenti, Young Serif e Atkinson, grana carta, scaffale). Sole entra in quel mondo e non lo sostituisce.
- **Idea guida:** Sole compare in **quattro momenti**, non in ogni sezione. È una guida, non una mascotte decorativa.
  1. **Hero della home:** Sole accanto alla promessa, è il primo volto del progetto. Restano le due CTA fissate dal brief. È il **momento focale**.
  2. **Conferma iscrizione:** Sole propone la prima carta da provare stasera, con un ritorno ai libri.
  3. **Pagine libro:** Sole introduce la domanda da provare insieme.
  4. **404 e stati vuoti:** Sole racconta la pagina che non c'è e i volumi in arrivo (didascalia dello scaffale).
- **Conseguenza tecnica:**
  - un componente riutilizzabile per i "momenti di Sole", con immagine e frase;
  - i dati di Sole in `src/config/site.ts`: identità, voce, illustrazioni per posa;
  - in assenza di illustrazione il componente non mostra nulla, così il sito attuale resta invariato.

## 4. Perimetro e limiti
- **Si tocca:** i quattro punti sopra.
- **Non si tocca:** le etichette fissate dal brief, il flusso delle CTA, la palette, la tipografia, le pagine Collana, Risorse e Antonella, tranne la didascalia dello scaffale.
- **Da evitare:**
  - Sole in ogni sezione;
  - un tono cartoon infantile verso l'adulto;
  - un aspetto di Sole inventato;
  - personaggi generati con l'IA;
  - animazioni continue;
  - Sole che "parla" sopra le CTA d'acquisto.

## 5. Stati e casi
- **Nessuna illustrazione:** nulla di nuovo compare (oggi).
- **Una sola posa:** si attivano hero e conferma.
- **3–4 pose o espressioni** (per esempio serena, curiosa, un po' impaurita, che legge): si attivano tutti e quattro i momenti.
- **Lunghezza delle frasi:** al massimo 1–2 frasi brevi per momento, che non vanno a capo più di tre volte su un telefono da 360 px.

## 6. Interazione e layout (intenzione)
- **Home su mobile:** Sole non deve spingere le CTA sotto la piega; va sotto le CTA, o in piccolo accanto al titolo.
- **Conferma iscrizione:** Sole accanto al messaggio di conferma, con un solo link successivo («Prova stasera la carta 1» oppure «Torna ai libri»: da scegliere).
- **Pagine libro:** Sole accanto al blocco della domanda; la CTA Amazon resta in testa e non viene toccata.
- **Movimento:** al massimo un piccolo ingresso una volta sola, rispettando la riduzione del movimento.

## 7. Domande aperte (da chiedere all'autrice)
1. **Chi è Sole nei libri?** Una bambina, un sole-personaggio o entrambi? Che età ha e quali tratti la rendono riconoscibile?
2. **A chi parla Sole sul sito?**
   - al bambino, con frasi lette ad alta voce dall'adulto;
   - all'adulto;
   - oppure parla solo un narratore che racconta Sole.
3. **Illustrazioni:** quali pose o espressioni si possono avere? Servono in PNG trasparente o SVG, almeno 1200 px sul lato lungo. Le copertine attuali sono l'unico materiale disponibile.
4. **Diritti:** le illustrazioni dei libri si possono usare sul sito (e sui social)?
5. **Maria Sole:** qual è il legame da raccontare (figlia?) e se ne può parlare per nome nei testi accanto al personaggio.
6. **Etichetta «Ricevi per prima le prossime emozioni»** (fissata nel brief): va bene al femminile o preferisci una forma inclusiva, per esempio «Ricevi in anteprima le prossime emozioni»?
