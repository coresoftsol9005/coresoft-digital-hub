// Lightweight analytics event tracker.
// Pushes to dataLayer (GTM/GA4 friendly) and falls back to console in dev.
// Safe on SSR (no-ops without window).

type EventProps = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: string, props: EventProps = {}) {
  if (typeof window === "undefined") return;
  const payload = { event, ...props, ts: Date.now() };
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);
    if (typeof window.gtag === "function") {
      window.gtag("event", event, props);
    }
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.debug("[analytics]", payload);
    }
  } catch {
    /* noop */
  }
}

export const Events = {
  CtaClick: "cta_click",
  NavClick: "nav_click",
  MobileMenuOpen: "mobile_menu_open",
  MobileMenuClose: "mobile_menu_close",
  WhatsAppClick: "whatsapp_click",
  FormStart: "form_start",
  FormStep: "form_step",
  FormSubmit: "form_submit",
  FormWhatsAppOpen: "form_whatsapp_open",
  QuoteRequest: "quote_request",
  CaseStudyView: "case_study_view",
} as const;
