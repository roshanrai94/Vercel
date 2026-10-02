import React, { useState, useEffect } from 'react';
import { PhotoProvider } from './context/PhotoContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Journey } from './components/Journey';
import { Ventures } from './components/Ventures';
import { Impact } from './components/Impact';
import { Recognition } from './components/Recognition';
import { Gallery } from './components/Gallery';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ArrowUp, MessageCircle } from 'lucide-react';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const updateScroll = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollProgress((currentScroll / scrollHeight) * 100);
      }
      setShowScrollTop(currentScroll > 500);
    };

    window.addEventListener('scroll', updateScroll, { passive: true });
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <PhotoProvider>
      <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-500 selection:text-stone-950 transition-colors duration-300 relative">
        
        {/* Top Reading Progress Bar */}
        <div className="fixed top-0 left-0 right-0 h-1 bg-stone-900 z-[60] pointer-events-none">
          <div
            className="h-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-300 transition-all duration-150 ease-out shadow-[0_0_8px_rgba(245,158,11,0.8)]"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Navigation Header */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          <Hero />
          <About />
          <Journey />
          <Ventures />
          <Impact />
          <Recognition />
          <Gallery />
          <FAQ />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Quick Action Widget (WhatsApp & Back-to-Top) */}
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
          {/* Quick WhatsApp Bubble */}
          <a
            href="https://wa.me/917431833009"
            target="_blank"
            rel="noopener noreferrer"
            title="Chat directly on WhatsApp"
            className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-[0_8px_25px_rgba(16,185,129,0.4)] hover:scale-110 transition-all border border-emerald-400/40 group"
          >
            <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          </a>

          {/* Back to top button */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              title="Scroll back to top"
              className="w-10 h-10 rounded-full bg-stone-900/90 hover:bg-amber-500 hover:text-stone-950 text-amber-300 border border-amber-500/40 backdrop-blur-md flex items-center justify-center shadow-xl hover:scale-110 transition-all"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>
    </PhotoProvider>
  );
}

