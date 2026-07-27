import React from 'react';
import { ArrowDown, Award, Compass, Sparkles } from 'lucide-react';
import { PhotoPlaceholder } from './PhotoPlaceholder';
import { personalData, statsData } from '../data/portfolioData';

export const Hero: React.FC = () => {

  const handleScrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-20 pb-20 md:pt-24 md:pb-28 bg-gradient-to-b from-stone-900 via-amber-950 to-stone-950 text-amber-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-600/10 via-amber-950/20 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-amber-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header & Title */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>✦ SIKKIM'S VISIONARY LEADER & MENTOR ✦</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-amber-100 leading-tight mb-6">
            {personalData.name}
          </h1>

          <p className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-serif text-amber-300/90 font-light max-w-4xl mx-auto leading-snug mb-6 text-center">
            <span className="block">Empowering Sikkim Through Entrepreneurship,</span>
            <span className="block">Creativity &amp; Skill Development</span>
          </p>

          <div className="flex items-center justify-center gap-3 text-amber-400 text-lg font-serif mb-6">
            <span>✦</span>
            <span>❖</span>
            <span>✦</span>
          </div>

          <p className="text-base sm:text-lg font-semibold text-amber-200/90 tracking-widest uppercase mb-8 text-center">
            Entrepreneur • Artist • Mentor • Baker • Hairstylist • Community Builder
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <a
              href="#ventures"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo('#ventures');
              }}
              className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-base transition-all shadow-lg hover:shadow-amber-500/20 flex items-center gap-2 tracking-wider"
            >
              <Compass className="w-5 h-5" />
              <span>EXPLORE VENTURES</span>
            </a>

            <a
              href="#impact"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo('#impact');
              }}
              className="px-6 py-3.5 rounded-xl bg-stone-900/80 hover:bg-stone-800 text-amber-200 border border-amber-500/40 font-semibold text-base transition-all flex items-center gap-2"
            >
              <Award className="w-5 h-5 text-amber-400" />
              <span>COMMUNITY IMPACT</span>
            </a>
          </div>
        </div>

        {/* Hero Grid - Portrait & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center my-12 bg-amber-950/40 border border-amber-800/30 rounded-3xl p-6 sm:p-10 backdrop-blur-md">
          
          {/* Photo Slot */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md">
              <PhotoPlaceholder
                slotKey="hero_portrait"
                aspectRatio="portrait"
                className="w-full aspect-[4/5] shadow-2xl rounded-2xl border-2 border-amber-500/30 overflow-hidden"
              />
            </div>
          </div>

          {/* Vision Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-3.5 py-1 rounded-md bg-amber-500/20 text-amber-300 text-xs sm:text-sm font-bold tracking-widest uppercase">
              DIGITAL LEGACY & VISION
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-100 leading-snug">
              Empowering Communities Through Passion & Purpose
            </h2>

            <blockquote className="p-6 sm:p-7 bg-stone-950/60 rounded-2xl border-l-4 border-amber-500 italic text-amber-200/90 text-lg sm:text-xl leading-relaxed shadow-inner text-justify">
              "{personalData.quote.replace('Welcome! I am Shova Rai—', '')}"
            </blockquote>

            <p className="text-base sm:text-lg text-amber-100/90 leading-relaxed font-light text-justify">
              Mrs. Shova Rai is a self-made entrepreneur from Gangtok, Sikkim, with over two decades of experience across beauty, fashion, food entrepreneurship, arts, and community empowerment. Through sheer resilience, determination, and continuous learning, she has successfully built multiple enterprises entirely on her own while uplifting local communities, self-help groups (SHGs), and youth across Sikkim.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-amber-800/30">
              {statsData.slice(0, 4).map((stat, idx) => (
                <div key={idx} className="bg-stone-900/60 p-3.5 rounded-xl border border-amber-800/20 text-center">
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-400">{stat.value}</div>
                  <div className="text-xs sm:text-sm font-medium text-amber-200/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center justify-center pt-8">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo('#about');
            }}
            className="flex flex-col items-center gap-2 text-amber-400/90 hover:text-amber-300 transition-colors group"
          >
            <span className="text-xs sm:text-sm tracking-widest uppercase font-bold">SCROLL DOWN</span>
            <ArrowDown className="w-4 h-4 animate-bounce group-hover:translate-y-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
