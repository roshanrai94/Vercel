import React from 'react';
import { Sparkles, Heart, Users, ShieldCheck, Globe, Award, CheckCircle2 } from 'lucide-react';
import { impactDomains, nationalAlignments } from '../data/portfolioData';

export const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-24 bg-stone-950 text-stone-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COMMUNITY LEGACY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-amber-100 leading-tight">
            Livelihood & Community Impact
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto my-4 rounded-full" />
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed text-center">
            Fostering sustainable livelihoods, empowering women, and preserving Himalayan artisanal heritage across Sikkim.
          </p>
        </div>

        {/* Vision & Mission Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-stone-900/90 p-8 rounded-3xl border border-amber-800/40 shadow-xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-amber-100">
              Community Vision
            </h3>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed text-justify">
              To transform local artisanal talents, organic food traditions, and beauty skills into sustainable, self-reliant micro-enterprises that generate economic dignity for women and youth across the Eastern Himalayas.
            </p>
          </div>

          <div className="bg-stone-900/90 p-8 rounded-3xl border border-amber-800/40 shadow-xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-amber-100">
              Empowerment Mission
            </h3>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed text-justify">
              Conducting hands-on vocational workshops in baking, hair styling, block printing, and food processing for Self-Help Groups (SHGs), rural women, and differently-abled individuals.
            </p>
          </div>
        </div>

        {/* Impact Domains Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-serif font-bold text-amber-100 text-center mb-10">
            Core Livelihood Domains
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactDomains.map((domain, idx) => (
              <div
                key={idx}
                className="bg-stone-900/60 p-6 rounded-2xl border border-stone-800 hover:border-amber-500/40 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-serif font-bold text-amber-200">
                  {domain.title}
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed text-justify">
                  {domain.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* National Alignment & Standards */}
        <div className="bg-stone-900 p-8 sm:p-10 rounded-3xl border border-stone-800">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>NATIONAL ALIGNMENT</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-amber-100">
              Aligned with National Development Goals
            </h3>
            <p className="text-stone-400 text-sm mt-2 text-center">
              Every enterprise operated by Mrs. Shova Rai operates under formal regulatory certifications and national skill development frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {nationalAlignments.map((item, idx) => (
              <div key={idx} className="bg-stone-950 p-5 rounded-xl border border-stone-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-amber-200">{item.title}</h4>
                  <p className="text-xs text-stone-400 mt-1 text-justify">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
