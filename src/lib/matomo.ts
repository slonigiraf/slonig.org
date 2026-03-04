// lib/matomo.ts
declare global {
  interface Window {
    _paq?: any[];
  }
}

export type MatomoEvent = {
  category: string;
  action: string;
  name?: string;
  value?: number; // Matomo expects integer if provided
};

// ✅ Client-side env var (must start with NEXT_PUBLIC_ in Next.js)
const MATOMO_LOG_ONLY =
  process.env.NEXT_PUBLIC_MATOMO_LOG_ONLY === "1" ||
  process.env.NEXT_PUBLIC_MATOMO_LOG_ONLY === "true";

/**
 * Push a Matomo event if _paq is available.
 * - If MATOMO_LOG_ONLY: logs to console instead (debug without polluting analytics)
 * - If value is provided: it will be rounded to an integer (Matomo prefers integers)
 */
export function trackMatomoEvent({ category, action, name, value }: MatomoEvent) {
  
  if (typeof window === "undefined") return;
  window._paq = window._paq || [];

  const payload: any[] = ["trackEvent", category, action];

  if (name != null) payload.push(name);

  const roundedValue = value != null ? Math.round(value) : undefined;
  if (roundedValue != null) payload.push(roundedValue);

  // ✅ replace isLocalhost() with env flag
  if (MATOMO_LOG_ONLY) {
    // eslint-disable-next-line no-console
    const log: Record<string, unknown> = { category, action };
    if (name != null) log.name = name;
    if (roundedValue != null) log.value = roundedValue;

    console.log("[Matomo trackEvent]", log);
    return;
  }

  window._paq.push(payload);
}