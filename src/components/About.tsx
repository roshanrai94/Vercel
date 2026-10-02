import React from 'react';
import { Award, BookOpen, Heart, Sparkles, ShieldCheck, GraduationCap, ExternalLink } from 'lucide-react';
import { PhotoPlaceholder } from './PhotoPlaceholder';
import { personalData, qualificationsData, statsData } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BIOGRAPHY & LEGACY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-amber-100 leading-tight">
            About Mrs. Shova Rai
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto my-4 rounded-full" />
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed text-center">
            A self-made visionary blending Himalayan tradition with modern entrepreneurship and community uplifting.
          </p>
        </div>

        {/* Main Grid: Bio & Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Portrait Photo Space */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group w-full max-w-md p-1.5 sm:p-2 rounded-[2.25rem] bg-gradient-to-br from-amber-400 via-amber-600/70 to-amber-900/90 shadow-[0_10px_35px_rgba(217,119,6,0.25)] hover:shadow-[0_15px_45px_rgba(245,158,11,0.35)] transition-all duration-500">
              <div className="w-full rounded-[1.75rem] overflow-hidden bg-stone-950 flex items-center justify-center border border-amber-500/30">
                <PhotoPlaceholder
                  slotKey="about_portrait"
                  aspectRatio="portrait"
                  className="w-full aspect-[4/5]"
                  label="Mrs. Shova Rai Portrait"
                  imageClassName="w-full h-full object-contain p-1.5 transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
            <p className="mt-3.5 text-xs sm:text-sm text-amber-300/90 font-medium tracking-wider text-center flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Mrs. Shova Rai — Entrepreneur &amp; Visionary</span>
            </p>
          </div>

          {/* Right Column: Bio Content */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-amber-200">
              Two Decades of Resilient Entrepreneurship & Community Building
            </h3>

            {personalData.bioParagraphs.map((paragraph, index) => (
              <p key={index} className="text-stone-300 text-base sm:text-lg leading-relaxed font-light text-justify">
                {paragraph}
              </p>
            ))}

            <div className="pt-1 pb-2">
              <a
                href="https://myvillagemypride.wordpress.com/2015/02/04/sikkim-an-inspiring-story-of-shova-rai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 hover:text-amber-200 border border-amber-500/30 text-xs sm:text-sm font-medium transition-all group"
              >
                <span>Read published profile story: &ldquo;Sikkim: An Inspiring Story of Shova Rai&rdquo;</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-800">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-800/50 border border-stone-700/50">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-amber-200 uppercase">Registered Business</div>
                  <div className="text-xs sm:text-sm text-stone-300">MSME UDYAM & FSSAI Certified</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-800/50 border border-stone-700/50">
                <Heart className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-amber-200 uppercase">Community Focus</div>
                  <div className="text-xs sm:text-sm text-stone-300">SHGs, Youth & Differently-Abled</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Qualifications & Expertise */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-amber-100">
              Professional Qualifications & Mastery
            </h3>
            <p className="text-stone-300 text-base sm:text-lg mt-2 text-center">
              Combining formal professional diplomas from India's premier institutes with master-craftsman traditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualificationsData.map((item, idx) => (
              <div
                key={idx}
                className="bg-stone-800/70 p-6 rounded-2xl border border-stone-700/60 hover:border-amber-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <GraduationCap className="w-8 h-8 text-amber-400" />
                    <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold tracking-wider uppercase">
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="text-lg font-serif font-bold text-amber-100 mb-2">
                    {item.institution}
                  </h4>
                  <p className="text-sm text-stone-300 leading-relaxed text-justify">
                    {item.qualification}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Counter Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-stone-950 p-6 sm:p-8 rounded-2xl border border-stone-800">
          {statsData.map((stat, idx) => (
            <div key={idx} className="text-center p-3">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-amber-400 mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-amber-100 uppercase tracking-wider mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-stone-400 leading-tight text-center">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
