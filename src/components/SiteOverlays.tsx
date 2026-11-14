import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG, buildWhatsAppUrl } from '../data/siteConfig';
import { trackEvent } from '../utils/analytics';

/**
 * Compact Floating WhatsApp CTA — respects the 15% mobile sticky height cap.
 */
export const FloatingWhatsApp: React.FC = () => {
  const waUrl = buildWhatsAppUrl(
    'Hi Shova, I would like to book an appointment or ask about your services.'
  );

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book or message Shova Rai on WhatsApp"
      onClick={() =>
        trackEvent('whatsapp_click', {
          category: 'conversion',
          label: 'floating_whatsapp_button',
          business: 'general',
        })
      }
      className="btn-whatsapp fixed bottom-4 right-4 z-40 shadow-[0_14px_32px_-8px_rgba(0,0,0,0.75)]"
    >
      <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
};

/**
 * Custom 404 Page for unrecognized paths
 */
export const NotFound: React.FC<{ onGoHome: () => void }> = ({ onGoHome }) => {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)] flex items-center justify-center p-6">
      <div className="card-static max-w-md w-full p-8 text-center space-y-5">
        <p className="section-eyebrow">404 · Page Not Found</p>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--text)]">
          Page Not Found
        </h1>
        <p className="text-base text-[var(--text-muted)] leading-relaxed">
          The page you looked for is not available. Return to the main page to explore Cutting Edge
          Hair &amp; Beauty, Blush Fashion Store, and Zayel&apos;s Organic Pickles.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <button
            type="button"
            onClick={onGoHome}
            className="btn-primary !text-sm"
          >
            Return to Home
          </button>
          <a
            href={buildWhatsAppUrl('Hi Shova, I visited shovarai.in and would like to connect.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp !text-sm"
          >
            WhatsApp {SITE_CONFIG.phoneDisplay}
          </a>
        </div>
      </div>
    </main>
  );
};
