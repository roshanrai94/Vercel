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
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 px-4 h-12 rounded-full bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold text-sm shadow-xl transition-colors"
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
      className="fixed bottom-4 left-4 right-20 sm:right-auto sm:max-w-md z-40 p-4 rounded-xl bg-stone-900/95 border border-stone-700 shadow-2xl text-sm text-stone-200 backdrop-blur-md"
    >
      <p className="leading-relaxed">
        We use basic privacy-friendly analytics to understand which buttons help visitors reach us.{' '}
        <button
          type="button"
          onClick={onOpenPrivacy}
          className="text-amber-300 hover:text-amber-200 underline underline-offset-2 cursor-pointer"
        >
          Privacy Notice
        </button>
      </p>
      <div className="flex items-center gap-2.5 mt-3">
        <button
          type="button"
          onClick={() => handleChoice('accepted')}
          className="px-3.5 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold text-xs cursor-pointer"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => handleChoice('declined')}
          className="px-3.5 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium cursor-pointer"
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
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="max-w-lg w-full rounded-2xl bg-stone-950 border border-stone-800 p-6 sm:p-8 space-y-4 text-base text-stone-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-stone-800 pb-3">
          <h2 id="privacy-modal-title" className="font-serif text-2xl font-bold text-stone-100">
            Privacy &amp; Cookie Notice
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close privacy notice"
            className="w-10 h-10 rounded-lg bg-stone-900 border border-stone-700 text-stone-200 hover:text-amber-300 flex items-center justify-center cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="leading-relaxed">
          <strong>Enquiry Form Data:</strong> When you submit the mentorship or contact form on
          shovarai.in, your name, phone number, selected business, and message are used solely to
          respond to your booking or collaboration request.
        </p>

        <p className="leading-relaxed">
          <strong>Analytics &amp; Cookies:</strong> With your consent, this website uses Google
          Analytics 4 (with IP anonymization) to measure clicks on WhatsApp, phone, and enquiry
          buttons. You may decline analytics cookies at any time.
        </p>

        <p className="text-sm text-stone-400">
          Contact: {SITE_CONFIG.email} · {SITE_CONFIG.phoneDisplay} · {SITE_CONFIG.addressFull}
        </p>

        <div className="pt-2 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold text-sm cursor-pointer"
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
    <main className="min-h-screen bg-[#0c0a09] text-stone-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full rounded-2xl bg-stone-900 border border-stone-800 p-8 text-center space-y-5">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-400">
          404 · Page Not Found
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-50">
          Page Not Found
        </h1>
        <p className="text-base text-stone-300 leading-relaxed">
          The page you looked for is not available. Return to the main page to explore Cutting Edge
          Hair &amp; Beauty, Blush Fashion Store, and Zayel&apos;s Organic Pickles.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <button
            type="button"
            onClick={onGoHome}
            className="px-5 py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold text-sm cursor-pointer"
          >
            Return to Home
          </button>
          <a
            href={buildWhatsAppUrl('Hi Shova, I visited shovarai.in and would like to connect.')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg border border-stone-700 hover:border-amber-400 text-stone-100 font-semibold text-sm"
          >
            WhatsApp {SITE_CONFIG.phoneDisplay}
          </a>
        </div>
      </div>
    </main>
  );
};
