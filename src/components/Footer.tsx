import React from 'react';
import { SITE_CONFIG } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import { trackEvent } from '../utils/analytics';

interface FooterProps {
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  const { language, setLanguage } = useLanguage();

  const quickLinks = [
    { label: language === 'ne' ? 'परिचय' : 'About', href: '#about' },
    { label: language === 'ne' ? 'व्यवसायहरू' : 'Businesses', href: '#businesses' },
    { label: language === 'ne' ? 'सैलुन सेवा' : 'Services & Prices', href: '#services' },
    { label: language === 'ne' ? 'जायल्स अचार' : "Zayel's Pickles", href: '#products' },
    { label: language === 'ne' ? 'सम्मान र प्रेस' : 'Awards & Press', href: '#awards' },
    { label: language === 'ne' ? 'ग्यालरी' : 'Gallery', href: '#gallery' },
    { label: language === 'ne' ? 'परामर्श' : 'Mentorship', href: '#mentorship' },
    { label: language === 'ne' ? 'प्रश्नोत्तर' : 'FAQ', href: '#faq' },
    { label: language === 'ne' ? 'सम्पर्क' : 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#0c0a09] text-stone-300 border-t border-stone-800 py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Summary */}
          <div className="md:col-span-5 space-y-3">
            <p className="font-serif text-2xl font-bold text-stone-100">
              {SITE_CONFIG.brandFullName}
            </p>
            <p className="text-base text-stone-300 leading-relaxed max-w-sm">
              {language === 'ne'
                ? 'नामनाङ, गान्तोक, सिक्किममा सौन्दर्य, फेसन, प्राङ्गारिक खाद्य उत्पादन र महिला सशक्तीकरणमा समर्पित।'
                : 'Entrepreneur, master stylist, and community mentor in Namnang, Gangtok, Sikkim.'}
            </p>
            <p className="text-sm text-stone-400">{SITE_CONFIG.addressFull}</p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400">
              {language === 'ne' ? 'द्रुत लिङ्कहरू' : 'Quick Links'}
            </h3>
            <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-stone-300 hover:text-amber-300 transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Language */}
          <div className="md:col-span-3 space-y-3 text-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400">
              {language === 'ne' ? 'सम्पर्क विवरण' : 'Contact Details'}
            </h3>
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
                  className="text-stone-200 hover:text-amber-300 transition-colors tabular-nums"
                >
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-stone-200 hover:text-amber-300 transition-colors break-all"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>

            <div className="pt-2 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded text-xs font-semibold cursor-pointer ${
                  language === 'en'
                    ? 'bg-amber-400 text-stone-950'
                    : 'bg-stone-900 text-stone-300 border border-stone-800'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLanguage('ne')}
                className={`px-2.5 py-1 rounded text-xs font-semibold cursor-pointer ${
                  language === 'ne'
                    ? 'bg-amber-400 text-stone-950'
                    : 'bg-stone-900 text-stone-300 border border-stone-800'
                }`}
              >
                नेपाली
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Privacy Notice */}
        <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-stone-400">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.brandFullName}. All rights reserved. Namnang,
            Gangtok, Sikkim.
          </p>
          <button
            type="button"
            onClick={onOpenPrivacy}
            className="text-stone-300 hover:text-amber-300 underline underline-offset-4 cursor-pointer"
          >
            {language === 'ne' ? 'गोपनीयता र कुकी सूचना' : 'Privacy & Cookie Notice'}
          </button>
        </div>
      </div>
    </footer>
  );
};
