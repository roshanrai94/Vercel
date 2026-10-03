import React from 'react';
import { ArrowUp, Sparkles, MapPin, Heart, Clock, Calendar, Users, Eye, Radio } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { useLiveVisitorStats } from '../hooks/useLiveVisitorStats';

export const Footer: React.FC = () => {
  const { dateString, timeString, dailyVisitors, totalVisitors } = useLiveVisitorStats();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-400 border-t border-amber-500/20 py-16 relative">
      {/* Background Accent Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-amber-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 via-amber-600 to-amber-800 text-stone-950 flex items-center justify-center font-display font-bold text-base shadow-[0_4px_15px_rgba(245,158,11,0.3)]">
                SR
              </div>
              <div>
                <span className="text-xl font-serif font-bold text-amber-100 block">
                  {personalData.name}
                </span>
                <span className="text-xs text-amber-400/90 font-display tracking-widest uppercase block">
                  Sikkim Visionary &amp; Entrepreneur
                </span>
              </div>
            </div>

            <p className="text-sm text-stone-300 leading-relaxed max-w-sm">
              Empowering communities through beauty, artisanal heritage food, traditional Himalayan crafts, and women's economic self-reliance.
            </p>

            <div className="flex items-center gap-2 text-xs text-stone-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Namnang, Gangtok, Sikkim — 737101, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-amber-300 uppercase tracking-widest font-display">
              PORTFOLIO SECTIONS
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-medium">
              <a href="#home" className="text-stone-300 hover:text-amber-300 transition-colors py-1">HOME</a>
              <a href="#about" className="text-stone-300 hover:text-amber-300 transition-colors py-1">ABOUT</a>
              <a href="#journey" className="text-stone-300 hover:text-amber-300 transition-colors py-1">JOURNEY</a>
              <a href="#ventures" className="text-stone-300 hover:text-amber-300 transition-colors py-1">VENTURES</a>
              <a href="#impact" className="text-stone-300 hover:text-amber-300 transition-colors py-1">IMPACT</a>
              <a href="#recognition" className="text-stone-300 hover:text-amber-300 transition-colors py-1">RECOGNITION</a>
              <a href="#media" className="text-stone-300 hover:text-amber-300 transition-colors py-1">MEDIA &amp; PRESS</a>
              <a href="#gallery" className="text-stone-300 hover:text-amber-300 transition-colors py-1">GALLERY</a>
              <a href="#faq" className="text-stone-300 hover:text-amber-300 transition-colors py-1">FAQ</a>
              <a href="#contact" className="text-stone-300 hover:text-amber-300 transition-colors py-1">CONTACT</a>
            </div>
          </div>

          {/* Core Enterprises */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-amber-300 uppercase tracking-widest font-display">
              VENTURES &amp; INITIATIVES
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                <span>Cutting Edge Hair &amp; Beauty</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                <span>Blush Fashion Boutique</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                <span>A Taste of Sikkim – Zayel's Pickle</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                <span>Traditional Block Printing Art</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Live Site Metrics & Sikkim Time Strip */}
        <div className="rounded-2xl bg-gradient-to-r from-stone-900/90 via-stone-900/70 to-stone-900/90 border border-amber-500/20 p-5 sm:p-6 backdrop-blur-md shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 mb-4 border-b border-stone-800">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-bold text-amber-200 font-display">
                Real-Time Website Activity &amp; Official Sikkim Time
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-stone-400">
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-medium">
                System Active
              </span>
              <span>• Gangtok, Sikkim (UTC+5:30)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {/* Metric 1: Live Date */}
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-stone-950/70 border border-stone-800/90">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-400">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block">
                  Current Date (IST)
                </span>
                <span className="text-sm font-semibold text-amber-100">
                  {dateString}
                </span>
              </div>
            </div>

            {/* Metric 2: Live Time */}
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-stone-950/70 border border-stone-800/90">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-400">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Sikkim Time
                </span>
                <span className="text-sm font-mono font-bold text-amber-300 tabular-nums">
                  {timeString} <span className="text-xs text-amber-400/80 font-sans">IST</span>
                </span>
              </div>
            </div>

            {/* Metric 3: 24h Visitors */}
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-stone-950/70 border border-stone-800/90">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-400">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block">
                  Visitors in 24 Hours
                </span>
                <span className="text-base font-mono font-bold text-amber-200 tabular-nums">
                  {dailyVisitors.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Metric 4: Total Visitors */}
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-stone-950/70 border border-stone-800/90">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-400">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block">
                  Total Site Visits
                </span>
                <span className="text-base font-mono font-bold text-amber-300 tabular-nums">
                  {totalVisitors.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="text-center sm:text-left">
            <span>© {new Date().getFullYear()} {personalData.name}. All rights reserved. Gangtok, Sikkim.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-400 hover:text-amber-300 border border-stone-800 hover:border-amber-500/30 transition-all font-medium text-xs shadow-sm hover:scale-105"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

