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

export function isLocalhost() {
  if (typeof window === "undefined") return false;
  const h = window.location.hostname;
  return h === "localhost" || h === "127.0.0.1" || h === "::1";
}

/**
 * Push a Matomo event if _paq is available.
 * - If localhost: logs to console instead (so you can debug without polluting analytics)
 * - If value is provided: it will be rounded to an integer (Matomo prefers integers)
 */
export function trackMatomoEvent({ category, action, name, value }: MatomoEvent) {
  if (typeof window === "undefined") return;

  const payload: any[] = ["trackEvent", category, action];

  if (name != null) payload.push(name);

  const roundedValue = value != null ? Math.round(value) : undefined;
  if (roundedValue != null) payload.push(roundedValue);

  if (isLocalhost()) {
    // eslint-disable-next-line no-console
    const log: Record<string, unknown> = { category, action };
    if (name != null) log.name = name;
    if (roundedValue != null) log.value = roundedValue;

    console.log("[Matomo trackEvent]", log);
    return;
  }

  if (Array.isArray(window._paq)) {
    window._paq.push(payload);
  }
}