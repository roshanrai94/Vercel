import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { SITE_CONFIG, buildWhatsAppUrl } from '../data/siteConfig';
import {
  getAnalyticsConsent,
  setAnalyticsConsent,
  trackEvent,
} from '../utils/analytics';

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
 * Lightweight Analytics & Cookie Consent Notice
 */
export const CookieNotice: React.FC<{ onOpenPrivacy: () => void }> = ({ onOpenPrivacy }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getAnalyticsConsent() === 'unset') {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const handleChoice = (choice: 'accepted' | 'declined') => {
    setAnalyticsConsent(choice);
    setVisible(false);
  };

  return (
    <aside
      aria-label="Cookie and analytics notice"
      className="card-static card-static--raised fixed bottom-4 left-4 right-20 sm:right-auto sm:max-w-md z-40 p-4 sm:p-5 text-sm text-[var(--text)] backdrop-blur-md"
    >
      <p className="leading-relaxed">
        We use basic privacy-friendly analytics to understand which buttons help visitors reach us.{' '}
        <button
          type="button"
          onClick={onOpenPrivacy}
          className="text-[var(--gold)] hover:text-[var(--gold-hover)] underline underline-offset-2 cursor-pointer"
        >
          Privacy Notice
        </button>
      </p>
      <div className="flex items-center gap-3 mt-3">
        <button
          type="button"
          onClick={() => handleChoice('accepted')}
          className="btn-primary !px-4 !text-sm"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => handleChoice('declined')}
          className="btn-secondary !px-4 !text-sm"
        >
          Decline
        </button>
      </div>
    </aside>
  );
};

/**
 * Accessible Privacy & Analytics Notice Modal
 */
export const PrivacyModal: React.FC<{ open: boolean; onClose: () => void }> = ({
  open,
  onClose,
}) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
      className="fixed inset-0 z-50 backdrop-blur-sm flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(12, 10, 9, 0.88)' }}
      onClick={onClose}
    >
      <div
        className="card-static max-w-lg w-full p-6 sm:p-8 space-y-4 text-base text-[var(--text-muted)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
          <h2 id="privacy-modal-title" className="font-serif text-2xl font-bold text-[var(--text)]">
            Privacy &amp; Cookie Notice
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close privacy notice"
            className="w-12 h-12 rounded-[12px] bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text)] hover:text-[var(--gold)] hover:border-[var(--gold)] flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="leading-relaxed">
          <strong className="text-[var(--text)]">Enquiry Form Data:</strong> When you submit the
          mentorship or contact form on shovarai.in, your name, phone number, selected business, and
          message are used solely to respond to your booking or collaboration request.
        </p>

        <p className="leading-relaxed">
          <strong className="text-[var(--text)]">Analytics &amp; Cookies:</strong> With your consent,
          this website uses Google Analytics 4 (with IP anonymization) to measure clicks on WhatsApp,
          phone, and enquiry buttons. You may decline analytics cookies at any time.
        </p>

        <p className="text-sm text-[var(--text-muted)]">
          Contact: {SITE_CONFIG.email} · {SITE_CONFIG.phoneDisplay} · {SITE_CONFIG.addressFull}
        </p>

        <div className="pt-2 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="btn-primary !px-5 !text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
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
