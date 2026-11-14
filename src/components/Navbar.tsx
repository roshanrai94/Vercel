import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SITE_CONFIG, buildWhatsAppUrl } from '../data/siteConfig';
import { trackEvent } from '../utils/analytics';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Businesses', href: '#businesses' },
    { label: 'Services', href: '#services' },
    { label: 'Pickles', href: '#products' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const allMobileLinks = [
    ...navLinks,
    { label: 'Awards & Press', href: '#awards' },
    { label: 'Mentorship', href: '#mentorship' },
    { label: 'FAQ', href: '#faq' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
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
      className="sticky top-0 z-40 w-full backdrop-blur-md transition-colors duration-200"
      style={{
        backgroundColor: scrolled ? 'rgba(12, 10, 9, 0.92)' : 'rgba(12, 10, 9, 0.72)',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <div className="site-container h-[72px] flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="font-serif text-2xl font-bold tracking-tight text-[var(--text)] hover:text-[var(--gold)] transition-colors whitespace-nowrap shrink-0"
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
              className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors whitespace-nowrap shrink-0 py-2"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Gold "Book Now" CTA + Mobile Menu Button */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
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
            className="btn-primary !px-4 sm:!px-5 whitespace-nowrap shrink-0"
          >
            Book Now
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-12 h-12 rounded-[12px] border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors cursor-pointer shrink-0"
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
          className="lg:hidden border-t border-[var(--border)] bg-[var(--surface)] px-4 py-4"
        >
          <div className="grid grid-cols-2 gap-2">
            {allMobileLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="min-h-[48px] flex items-center px-4 py-2 rounded-[12px] bg-[var(--surface-2)] border border-[var(--border)] text-sm font-medium text-[var(--text)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
