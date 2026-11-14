import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SITE_CONFIG, buildWhatsAppUrl } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import { trackEvent } from '../utils/analytics';

export const Navbar: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: language === 'ne' ? 'परिचय' : 'About', href: '#about' },
    { label: language === 'ne' ? 'व्यवसाय' : 'Businesses', href: '#businesses' },
    { label: language === 'ne' ? 'सेवा र मूल्य' : 'Services', href: '#services' },
    { label: language === 'ne' ? 'अचार' : 'Pickles', href: '#products' },
    { label: language === 'ne' ? 'ग्यालरी' : 'Gallery', href: '#gallery' },
    { label: language === 'ne' ? 'सम्पर्क' : 'Contact', href: '#contact' },
  ];

  const allMobileLinks = [
    ...navLinks,
    { label: language === 'ne' ? 'सम्मान र प्रेस' : 'Awards & Press', href: '#awards' },
    { label: language === 'ne' ? 'परामर्श' : 'Mentorship', href: '#mentorship' },
    { label: language === 'ne' ? 'प्रश्नोत्तर' : 'FAQ', href: '#faq' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (window.location.hash !== href) {
      window.history.pushState(null, '', href);
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const bookUrl = buildWhatsAppUrl(
    'Hi Shova, I would like to book an appointment or inquire about your services.'
  );

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
        scrolled
          ? 'bg-[#0c0a09]/95 border-b border-stone-800 backdrop-blur-md'
          : 'bg-[#0c0a09]/90 border-b border-stone-900 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-amber-100 hover:text-amber-300 transition-colors whitespace-nowrap shrink-0"
        >
          {SITE_CONFIG.brandName}
        </a>

        {/* Zone 2: Clean Desktop Navigation Links */}
        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium text-stone-300 hover:text-amber-300 transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Visible Primary CTA ("Book Now") + Mobile Menu Button */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={() => setLanguage(language === 'en' ? 'ne' : 'en')}
            aria-label={language === 'en' ? 'Switch language to Nepali' : 'Switch language to English'}
            className="hidden sm:inline-flex items-center justify-center px-2.5 py-2 rounded-lg text-xs font-semibold text-stone-300 hover:text-amber-300 border border-stone-800 hover:border-stone-700 transition-colors cursor-pointer whitespace-nowrap"
          >
            {language === 'en' ? 'नेपाली' : 'EN'}
          </button>

          <a
            href={bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent('whatsapp_click', {
                category: 'conversion',
                label: 'header_book_now',
                business: 'general',
              })
            }
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold text-sm transition-colors whitespace-nowrap shrink-0"
          >
            {language === 'ne' ? 'अहिले बुक गर्नुहोस्' : 'Book Now'}
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-stone-800 bg-stone-900 text-stone-200 hover:text-amber-300 transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation-drawer"
          aria-label="Mobile navigation"
          className="lg:hidden border-t border-stone-800 bg-[#0c0a09] px-4 py-4 space-y-3"
        >
          <div className="grid grid-cols-2 gap-2">
            {allMobileLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2.5 rounded-lg bg-stone-900/90 border border-stone-800 text-sm font-medium text-stone-200 hover:text-amber-300 hover:border-amber-500/40 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-stone-800">
            <span className="text-sm text-stone-400">
              {language === 'ne' ? 'भाषा छान्नुहोस्:' : 'Language:'}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer ${
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
                className={`px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer ${
                  language === 'ne'
                    ? 'bg-amber-400 text-stone-950'
                    : 'bg-stone-900 text-stone-300 border border-stone-800'
                }`}
              >
                नेपाली
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};
