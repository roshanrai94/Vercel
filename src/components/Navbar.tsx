import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, PhoneCall, Globe } from 'lucide-react';
import { LiveHeaderStrip } from './LiveHeaderStrip';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  darkMode?: boolean;
  setDarkMode?: (val: boolean | ((prev: boolean) => boolean)) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const { language, setLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navLinks = [
    { name: t.nav.home, href: '#home', id: 'home' },
    { name: t.nav.about, href: '#about', id: 'about' },
    { name: t.nav.journey, href: '#journey', id: 'journey' },
    { name: t.nav.ventures, href: '#ventures', id: 'ventures' },
    { name: t.nav.locations, href: '#locations', id: 'locations' },
    { name: t.nav.impact, href: '#impact', id: 'impact' },
    { name: t.nav.updates, href: '#newsletter', id: 'newsletter' },
    { name: t.nav.recognition, href: '#recognition', id: 'recognition' },
    { name: t.nav.media, href: '#media', id: 'media' },
    { name: t.nav.gallery, href: '#gallery', id: 'gallery' },
    { name: t.nav.faq, href: '#faq', id: 'faq' },
    { name: t.nav.contact, href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sectionIds = navLinks.map(l => l.id);
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -110;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Live Date, Time & 24h/Total Visitor Counter Strip */}
      <LiveHeaderStrip />

      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'py-2.5 bg-stone-950/95 border-b border-amber-500/20 backdrop-blur-xl shadow-[0_4px_25px_rgba(0,0,0,0.6)]'
            : 'py-3.5 bg-stone-950/80 border-b border-amber-800/30 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 via-amber-600 to-amber-800 text-stone-950 flex items-center justify-center font-display font-bold text-xs tracking-wider shadow-md group-hover:scale-105 transition-transform">
              SR
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition-colors tracking-wide">
                {t.brand.name}
              </span>
              <span className="text-[9px] uppercase tracking-widest text-amber-400/80 font-sans font-semibold">
                {t.brand.location}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-2xl bg-stone-900/90 border border-amber-500/20 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 tracking-wider whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 shadow-[0_2px_10px_rgba(245,158,11,0.35)]'
                      : 'text-stone-300 hover:text-amber-200 hover:bg-stone-800/80'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Language Switcher Toggle + Direct Connect CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Language Switcher Toggle */}
            <div
              className="flex items-center p-0.5 rounded-xl bg-stone-900/95 border border-amber-500/30 backdrop-blur-md shadow-inner"
              role="group"
              aria-label={t.switcher.ariaLabel}
            >
              <div className="pl-2 pr-1 text-amber-400/80 hidden sm:flex items-center" aria-hidden="true">
                <Globe className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                title="Switch to English"
                className={`px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 shadow-[0_2px_8px_rgba(245,158,11,0.4)]'
                    : 'text-stone-400 hover:text-amber-200'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('ne')}
                title="नेपाली भाषामा बदल्नुहोस्"
                className={`px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${
                  language === 'ne'
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 shadow-[0_2px_8px_rgba(245,158,11,0.4)]'
                    : 'text-stone-400 hover:text-amber-200'
                }`}
              >
                नेपाली
              </button>
            </div>

            {/* Direct Connect WhatsApp CTA */}
            <div className="hidden sm:flex items-center">
              <a
                href="https://wa.me/917431833009"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 text-xs font-bold transition-all hover:scale-105 shadow-sm"
              >
                <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t.nav.connect}</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-stone-900 text-amber-300 border border-amber-500/30 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Horizontal Scrollable Nav (always accessible when mobile menu is closed) */}
        <div className="lg:hidden mt-2.5 pt-2 border-t border-stone-900 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all shrink-0 whitespace-nowrap ${
                  isActive
                    ? 'bg-amber-500 text-stone-950 shadow-sm'
                    : 'bg-stone-900/80 text-stone-300 hover:text-amber-200 border border-stone-800'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

      </div>
      </div>

      {/* Mobile Drawer Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute inset-x-0 top-full bg-stone-950/98 border-b border-amber-500/30 backdrop-blur-2xl p-6 shadow-2xl animate-fadeIn">
          
          {/* Mobile Language Switcher Banner */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-stone-900/90 border border-amber-500/30 mb-4">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-200">
              <Globe className="w-4 h-4 text-amber-400" />
              <span>Language / भाषा:</span>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-amber-500 text-stone-950 shadow-sm'
                    : 'bg-stone-800 text-stone-400 hover:text-stone-200'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLanguage('ne')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  language === 'ne'
                    ? 'bg-amber-500 text-stone-950 shadow-sm'
                    : 'bg-stone-800 text-stone-400 hover:text-stone-200'
                }`}
              >
                नेपाली
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`p-3 rounded-xl text-center text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-amber-500 text-stone-950 shadow-md'
                      : 'bg-stone-900 text-stone-200 border border-stone-800'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <a
            href="https://wa.me/917431833009"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-lg hover:bg-emerald-500 transition-colors"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Direct WhatsApp: +91 7431833009</span>
          </a>
        </div>
      )}
    </header>
  );
};

