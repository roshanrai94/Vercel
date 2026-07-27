import React from 'react';
import { Sparkles, FolderOpen, Heart, ArrowUp } from 'lucide-react';
import { usePhotos } from '../context/PhotoContext';
import { personalData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { openManager } = usePhotos();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-400 border-t border-amber-900/40 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 text-stone-950 flex items-center justify-center font-serif font-bold text-base shadow-md">
                SR
              </div>
              <span className="text-xl font-serif font-bold text-amber-100">
                {personalData.name}
              </span>
            </div>

            <p className="text-sm text-stone-300 leading-relaxed max-w-sm">
              Sikkim's Visionary Leader & Mentor — Empowering Communities Through Entrepreneurship, Beauty, Artisanal Food & Cultural Craft.
            </p>

            <div className="pt-2">
              <button
                onClick={openManager}
                className="px-3.5 py-1.5 text-xs sm:text-sm font-semibold bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-lg transition-all flex items-center gap-1.5"
              >
                <FolderOpen className="w-4 h-4 text-amber-400" />
                <span>Configure Photo Spaces</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs sm:text-sm font-bold text-amber-300 uppercase tracking-widest mb-3">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm font-medium">
              <a href="#home" className="hover:text-amber-300 transition-colors">HOME</a>
              <a href="#about" className="hover:text-amber-300 transition-colors">ABOUT</a>
              <a href="#journey" className="hover:text-amber-300 transition-colors">JOURNEY</a>
              <a href="#ventures" className="hover:text-amber-300 transition-colors">VENTURES</a>
              <a href="#impact" className="hover:text-amber-300 transition-colors">IMPACT</a>
              <a href="#recognition" className="hover:text-amber-300 transition-colors">RECOGNITION</a>
              <a href="#gallery" className="hover:text-amber-300 transition-colors">GALLERY</a>
              <a href="#contact" className="hover:text-amber-300 transition-colors">CONTACT</a>
            </div>
          </div>

          {/* Core Enterprises */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs sm:text-sm font-bold text-amber-300 uppercase tracking-widest mb-3">
              Key Enterprises
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-stone-300">
              <li>Cutting Edge Hair & Beauty</li>
              <li>Blush Fashion Store</li>
              <li>A Taste of Sikkim – Zayel's Pickle</li>
              <li>Block Printing & Traditional Art</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-stone-300">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} {personalData.name}. All rights reserved. Namnang, Gangtok, Sikkim.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-amber-400 hover:text-amber-300 transition-colors font-medium"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
