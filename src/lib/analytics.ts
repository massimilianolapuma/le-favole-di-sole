/**
 * Tracciamento eventi — punto unico per il futuro collegamento analytics.
 *
 * In preview non viene inviato nulla: gli eventi vengono solo scritti in console
 * durante lo sviluppo. Quando colleghi Plausible o GA4 (vedi src/components/Analytics.astro),
 * questa funzione inoltra gli eventi al tool caricato, senza toccare i componenti.
 *
 * Gli elementi con attributo `data-track="nome-evento"` (e opzionale `data-track-label`)
 * vengono tracciati automaticamente al click da `initClickTracking()`.
 */

type Props = Record<string, string | number | boolean>;

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Props }) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: string, props: Props = {}) {
  if (typeof window === 'undefined') return;
  if (window.plausible) window.plausible(event, { props });
  if (window.gtag) window.gtag('event', event, props);
  if (import.meta.env.DEV) console.info('[track]', event, props);
}

export function initClickTracking() {
  document.addEventListener('click', (e) => {
    const el = (e.target as Element | null)?.closest<HTMLElement>('[data-track]');
    if (!el) return;
    track(el.dataset.track!, {
      label: el.dataset.trackLabel ?? el.textContent?.trim() ?? '',
      path: location.pathname,
    });
  });
}
