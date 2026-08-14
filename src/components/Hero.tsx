import React from 'react';
import { ArrowDown, Award, Compass, Sparkles, Star } from 'lucide-react';
import { PhotoPlaceholder } from './PhotoPlaceholder';
import { personalData, statsData } from '../data/portfolioData';

export const Hero: React.FC = () => {

  const handleScrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-amber-50 overflow-hidden">
      {/* Decorative Subtle Ambient Background Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,119,6,0.15),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-amber-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header & Title */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-display font-semibold tracking-widest text-[11px] sm:text-xs">SIKKIM'S VISIONARY LEADER & MENTOR</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-amber-100 leading-[1.05] mb-6">
            {personalData.name}
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl font-serif text-amber-200/90 font-light max-w-3xl mx-auto leading-snug mb-6 text-center italic">
            Empowering Sikkim Through Entrepreneurship, Creativity &amp; Skill Development
          </p>

          <div className="flex items-center justify-center gap-3 text-amber-400/80 text-sm mb-6">
            <span className="h-[1px] w-12 bg-amber-500/30" />
            <Star className="w-3.5 h-3.5 fill-amber-400/40 text-amber-400" />
            <span className="font-display text-xs tracking-widest uppercase text-amber-300">Namnang, Gangtok</span>
            <Star className="w-3.5 h-3.5 fill-amber-400/40 text-amber-400" />
            <span className="h-[1px] w-12 bg-amber-500/30" />
          </div>

          <p className="text-xs sm:text-sm font-semibold text-amber-300/80 tracking-widest uppercase mb-8 text-center font-sans">
            Entrepreneur • Artist • Mentor • Baker • Hairstylist • Community Builder
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <a
              href="#ventures"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo('#ventures');
              }}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-sm sm:text-base transition-all shadow-[0_4px_20px_rgba(245,158,11,0.3)] hover:scale-105 flex items-center gap-2 tracking-wider"
            >
              <Compass className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>EXPLORE VENTURES</span>
            </a>

            <a
              href="#impact"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo('#impact');
              }}
              className="px-6 py-3.5 rounded-xl bg-stone-900/90 hover:bg-stone-800 text-amber-200 border border-amber-500/40 font-semibold text-sm sm:text-base transition-all flex items-center gap-2 hover:scale-105 shadow-md"
            >
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
              <span>COMMUNITY IMPACT</span>
            </a>
          </div>
        </div>

        {/* Hero Grid - Portrait & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center my-12 bg-stone-950/80 border border-amber-500/30 rounded-[2.5rem] p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
          
          {/* Photo Slot */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md p-1.5 rounded-[2.25rem] bg-gradient-to-br from-amber-400 via-amber-600 to-amber-950 shadow-[0_12px_40px_rgba(217,119,6,0.25)]">
              <div className="w-full rounded-[1.75rem] overflow-hidden bg-stone-950 border border-amber-500/30">
                <PhotoPlaceholder
                  slotKey="hero_portrait"
                  aspectRatio="portrait"
                  className="w-full aspect-[4/5] overflow-hidden"
                />
              </div>
            </div>
          </div>

          {/* Vision Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-3.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-bold tracking-widest uppercase border border-amber-500/30">
              DIGITAL LEGACY & VISION
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-amber-100 leading-snug">
              Empowering Communities Through Passion & Purpose
            </h2>

            <blockquote className="p-6 sm:p-7 bg-stone-900/90 rounded-2xl border-l-4 border-amber-500 italic text-amber-200/90 text-base sm:text-lg leading-relaxed shadow-inner text-justify">
              "{personalData.quote.replace('Welcome! I am Shova Rai—', '')}"
            </blockquote>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-light text-justify">
              Mrs. Shova Rai is a self-made entrepreneur from Gangtok, Sikkim, with over two decades of experience across beauty, fashion, food entrepreneurship, arts, and community empowerment. Through sheer resilience, determination, and continuous learning, she has successfully built multiple enterprises entirely on her own while uplifting local communities, self-help groups (SHGs), and youth across Sikkim.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-4 border-t border-amber-800/30">
              {statsData.slice(0, 4).map((stat, idx) => (
                <div key={idx} className="bg-stone-900/80 p-3.5 rounded-xl border border-amber-500/20 text-center hover:border-amber-400/50 transition-colors">
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-400">{stat.value}</div>
                  <div className="text-xs font-medium text-amber-200/80 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center justify-center pt-6">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo('#about');
            }}
            className="flex flex-col items-center gap-2 text-amber-400/90 hover:text-amber-300 transition-colors group"
          >
            <span className="text-xs tracking-widest uppercase font-bold font-display">DISCOVER LEGACY</span>
            <ArrowDown className="w-4 h-4 animate-bounce group-hover:translate-y-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};

