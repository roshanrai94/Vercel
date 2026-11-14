import React from 'react';
import { SITE_CONFIG } from '../data/siteConfig';
import { trackEvent } from '../utils/analytics';

export const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Businesses', href: '#businesses' },
    { label: 'Services & Prices', href: '#services' },
    { label: "Zayel's Pickles", href: '#products' },
    { label: 'Awards & Press', href: '#awards' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Mentorship', href: '#mentorship' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[var(--bg)] text-[var(--text-muted)] py-16">
      <div className="site-container space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Summary */}
          <div className="md:col-span-5 space-y-3">
            <p className="font-serif text-2xl font-bold text-[var(--text)]">
              {SITE_CONFIG.brandFullName}
            </p>
            <p className="text-base text-[var(--text-muted)] leading-relaxed max-w-sm">
              Entrepreneur, master stylist, and community mentor in Namnang, Gangtok, Sikkim.
            </p>
            <p className="text-sm text-[var(--text-muted)]">{SITE_CONFIG.addressFull}</p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="section-eyebrow">Quick Links</h3>
            <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 space-y-3 text-sm">
            <h3 className="section-eyebrow">Contact Details</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={SITE_CONFIG.phoneHref}
                  onClick={() =>
                    trackEvent('call_click', {
                      category: 'conversion',
                      label: 'footer_phone',
                      business: 'general',
                    })
                  }
                  className="text-[var(--text)] hover:text-[var(--gold)] transition-colors tabular-nums"
                >
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-[var(--text)] hover:text-[var(--gold)] transition-colors break-all"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--text-muted)]">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.brandFullName}. All rights reserved. Namnang,
            Gangtok, Sikkim.
          </p>
          <p>{SITE_CONFIG.locationShort}</p>
        </div>
      </div>
    </footer>
  );
};
