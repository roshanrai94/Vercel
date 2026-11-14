import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Ventures } from './components/Ventures';
import { ServicesPriceList } from './components/ServicesPriceList';
import { ProductsSection } from './components/ProductsSection';
import { AwardsPress } from './components/AwardsPress';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { MentorshipForm } from './components/MentorshipForm';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import {
  FloatingWhatsApp,
  CookieNotice,
  PrivacyModal,
  NotFound,
} from './components/SiteOverlays';

function isValidRootPath(pathname: string): boolean {
  return pathname === '/' || pathname === '' || pathname === '/index.html';
}

export default function App() {
  const [isNotFound, setIsNotFound] = useState<boolean>(() => !isValidRootPath(window.location.pathname));
  const [privacyOpen, setPrivacyOpen] = useState<boolean>(false);

  useEffect(() => {
    const onPopState = () => {
      setIsNotFound(!isValidRootPath(window.location.pathname));
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const handleReturnHome = () => {
    window.history.pushState(null, '', '/');
    setIsNotFound(false);
    window.scrollTo({ top: 0 });
  };

  if (isNotFound) {
    return (
      <LanguageProvider>
        <NotFound onGoHome={handleReturnHome} />
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-sans">
        {/* Skip-to-content accessibility link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-3 focus:rounded-[12px] focus:bg-[var(--gold)] focus:text-[var(--on-gold)] focus:font-semibold"
        >
          Skip to main content
        </a>

        {/* Sticky Navigation Header */}
        <Navbar />

        {/* Single-Page Anchor Sections (Alternating --bg and --surface with 1px --border dividers) */}
        <main id="main-content">
          <Hero />
          <About />
          <Ventures />
          <ServicesPriceList />
          <ProductsSection />
          <AwardsPress />
          <Testimonials />
          <Gallery />
          <MentorshipForm />
          <FAQ />
          <Contact />
        </main>

        {/* Footer */}
        <Footer onOpenPrivacy={() => setPrivacyOpen(true)} />

        {/* Conversion & Compliance Overlays */}
        <FloatingWhatsApp />
        <CookieNotice onOpenPrivacy={() => setPrivacyOpen(true)} />
        <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      </div>
    </LanguageProvider>
  );
}
