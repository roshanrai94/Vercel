import React from 'react';
import { Compass, Sparkles, Calendar, CheckCircle } from 'lucide-react';
import { chroniclesData } from '../data/portfolioData';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-24 bg-stone-950 text-stone-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LEADERSHIP CHRONICLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-amber-100 leading-tight">
            The Entrepreneurial Journey
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto my-4 rounded-full" />
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed text-center">
            From humble beginnings in Gangtok to building multiple enterprises and empowering hundreds of lives.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-amber-700/40 ml-4 md:ml-32 space-y-12">
          {chroniclesData.map((item, idx) => (
            <div key={item.id} className="relative pl-8 md:pl-12 group">
              
              {/* Timeline Bullet */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-amber-600 text-stone-950 flex items-center justify-center font-bold text-xs shadow-lg group-hover:scale-110 transition-transform">
                {idx + 1}
              </div>

              {/* Period Badge - Mobile / Desktop layout */}
              <div className="md:absolute md:-left-36 md:top-1.5 md:w-28 md:text-right mb-2 md:mb-0">
                <span className="inline-block px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-serif font-bold border border-amber-500/30">
                  {item.period}
                </span>
              </div>

              {/* Card Content */}
              <div className="bg-stone-900/80 p-6 sm:p-8 rounded-2xl border border-stone-800 hover:border-amber-500/40 transition-all shadow-xl space-y-3">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                  <Compass className="w-4 h-4" />
                  <span>{item.subtitle}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-100">
                  {item.title}
                </h3>

                <p className="text-stone-300 text-sm sm:text-base leading-relaxed text-justify">
                  {item.description}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs text-amber-300/80">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                  <span>Key Milestone in Mrs. Shova Rai's Legacy</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
