/**
 * Adattatore newsletter: l'interfaccia (NewsletterForm.astro) chiama solo `subscribe()`.
 * Per collegare un provider cambia `site.newsletter` in src/config/site.ts e completa
 * il ramo corrispondente qui sotto: il form non va riscritto.
 *
 * Importante: non inserire mai chiavi API private nel codice client. Per Brevo o MailerLite
 * usa il loro form endpoint pubblico (double opt-in) oppure una piccola funzione serverless
 * (Netlify/Vercel/Cloudflare) che riceve questi dati e chiama l'API con la chiave lato server.
 */
import { site } from '../config/site';

export type Subscription = {
  email: string;
  name?: string;
  /** Consenso esplicito dato dall'utente (checkbox non preselezionata). */
  consent: boolean;
  /** Pagina o blocco da cui arriva l'iscrizione, utile per segmentare la sequenza email. */
  source: string;
};

export type SubscribeResult = { ok: true } | { ok: false; error: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isValidEmail(value: string) {
  return EMAIL_RE.test(value.trim());
}

export async function subscribe(data: Subscription): Promise<SubscribeResult> {
  const { provider, endpoint, listId } = site.newsletter;

  if (provider === 'preview') {
    // Nessun invio reale: simuliamo solo la latenza di rete.
    await new Promise((r) => setTimeout(r, 600));
    return { ok: true };
  }

  if (!endpoint) {
    return { ok: false, error: 'Iscrizione non ancora attiva. Riprova più tardi.' };
  }

  try {
    // Brevo, MailerLite e un endpoint personalizzato ricevono lo stesso payload JSON:
    // adatta i nomi dei campi se il provider ne richiede altri (es. `fields[name]` per MailerLite).
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...data, listId, provider }),
    });
    if (!res.ok) throw new Error(String(res.status));
    return { ok: true };
  } catch {
    return { ok: false, error: 'Non siamo riusciti a completare l\'iscrizione. Controlla la connessione e riprova.' };
  }
}
