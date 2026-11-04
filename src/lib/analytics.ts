/**
 * Push events to GTM dataLayer. Safe on server (no-op) and when GTM is unloaded (localhost).
 */
export function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean | undefined>
) {
  if (typeof window === "undefined") return;

  const payload: Record<string, unknown> = { event: name };
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined) payload[key] = value;
    }
  }

  const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(payload);
}

export type CtaClickParams = {
  cta_id: string;
  page_type: string;
  slug: string;
  destination: string;
};

export function trackCtaClick(params: CtaClickParams) {
  trackEvent("cta_click", params);
}
