/**
 * Testi ricorrenti non legati a un singolo libro: mini-card emozioni della home
 * e anteprima delle carte del lead magnet. Bozza da revisionare (vedi CONTENT.md).
 */

export type Emotion = {
  name: string;
  tone: 'cipria' | 'pesca' | 'sole' | 'polvere' | 'salvia';
  text: string;
  /** Slug del libro collegato. Solo le emozioni con un volume disponibile hanno un link. */
  bookSlug?: string;
};

export const emotions: Emotion[] = [
  { name: 'Amore', tone: 'cipria', text: "È il calore di un abbraccio e di chi si prende cura di noi.", bookSlug: 'sole-e-l-amore' },
  { name: 'Paura', tone: 'polvere', text: 'Ci avvisa quando qualcosa sembra troppo grande. Si può guardare insieme.', bookSlug: 'sole-e-la-paura' },
  { name: 'Gioia', tone: 'sole', text: "Arriva all'improvviso e ha voglia di essere condivisa." },
  { name: 'Rabbia', tone: 'pesca', text: 'Dice che qualcosa non va. Ha bisogno di essere ascoltata, non zittita.' },
];

export type EmotionCard = { emotion: string; tone: Emotion['tone']; question: string; activity: string };

/** Le 10 carte del PDF "Le carte delle emozioni di Sole". Le prime tre compaiono come anteprima. */
export const emotionCards: EmotionCard[] = [
  { emotion: 'Amore', tone: 'cipria', question: 'Quando ti sei sentito/a voluto/a bene oggi?', activity: 'Raccontatevi a turno un momento della giornata e disegnate un cuore per ciascuno.' },
  { emotion: 'Paura', tone: 'polvere', question: 'Che forma e che colore ha la tua paura?', activity: 'Disegnatela insieme, poi pensate a cosa potrebbe farla sentire meno grande.' },
  { emotion: 'Gioia', tone: 'sole', question: 'Cosa ti fa venire voglia di ridere forte?', activity: 'Inventate insieme un ballo della gioia di tre passi.' },
  { emotion: 'Rabbia', tone: 'pesca', question: 'Dove la senti nel corpo, la rabbia?', activity: 'Soffiate piano tre volte, come per spegnere una candelina, e dite come vi sentite dopo.' },
  { emotion: 'Tristezza', tone: 'polvere', question: "Cosa ti aiuta quando ti senti un po' giù?", activity: 'Preparate una scatola del conforto con tre oggetti scelti dal bambino.' },
  { emotion: 'Calma', tone: 'salvia', question: 'Qual è il tuo posto tranquillo?', activity: 'Chiudete gli occhi e descrivetelo a turno: colori, suoni, profumi.' },
  { emotion: 'Coraggio', tone: 'sole', question: "Quando sei stato/a coraggioso/a anche se avevi un po' paura?", activity: 'Disegnate una medaglia per quel momento.' },
  { emotion: 'Gentilezza', tone: 'salvia', question: 'Che gesto gentile hai ricevuto oggi?', activity: 'Scegliete un piccolo gesto gentile da fare domani per qualcuno.' },
  { emotion: 'Gratitudine', tone: 'cipria', question: 'Per quale cosa piccola dici grazie stasera?', activity: 'Disegnate tre «grazie» su un foglietto da tenere vicino al letto.' },
  { emotion: 'Tutte le emozioni', tone: 'pesca', question: 'Che tempo fa dentro di te oggi: sole, nuvole o temporale?', activity: 'Disegnate il vostro meteo delle emozioni e confrontatelo.' },
];
