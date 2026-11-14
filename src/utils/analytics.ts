/**
 * Google Analytics 4 (GA4) & Privacy Consent Utility
 * ---------------------------------------------------
 * Replace GA_MEASUREMENT_ID in index.html and here with your real GA4 Measurement ID (e.g. G-ABC123XYZ).
 * Events are queued cleanly and respect user cookie/analytics consent.
 */

export const GA_MEASUREMENT_ID = '[G-XXXXXXX]';
const CONSENT_STORAGE_KEY = 'shovarai_analytics_consent_v1';

export type ConsentStatus = 'accepted' | 'declined' | 'unset';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function getAnalyticsConsent(): ConsentStatus {
  try {
    const saved = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (saved === 'accepted' || saved === 'declined') return saved;
  } catch {
    // Ignore storage access errors in restricted browsers
  }
  return 'unset';
}

export function setAnalyticsConsent(status: 'accepted' | 'declined'): void {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, status);
  } catch {
    // Ignore storage access errors
  }

  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: status === 'accepted' ? 'granted' : 'denied',
    });
  }
}

export interface TrackEventParams {
  category: 'conversion' | 'engagement' | 'navigation';
  label: string;
  business?: string;
  value?: number;
}

/**
 * Fires a conversion/engagement event to Google Analytics 4 when configured and consented.
 */
export function trackEvent(
  eventName: 'whatsapp_click' | 'call_click' | 'directions_click' | 'form_submit' | 'section_view',
  params: TrackEventParams
): void {
  const consent = getAnalyticsConsent();
  if (consent === 'declined') return;

  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, {
      event_category: params.category,
      event_label: params.label,
      business_unit: params.business || 'general',
      value: params.value,
    });
  }
}
