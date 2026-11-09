import React from 'react';
import { Sparkles, Check, Scissors, ShoppingBag, Utensils, Palette } from 'lucide-react';
import { PhotoPlaceholder } from './PhotoPlaceholder';
import { venturesData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export const Ventures: React.FC = () => {
  const { t } = useLanguage();

  const getVentureIcon = (id: string) => {
    switch (id) {
      case 'v1': return <Scissors className="w-6 h-6 text-amber-400" />;
      case 'v2': return <ShoppingBag className="w-6 h-6 text-amber-400" />;
      case 'v3': return <Utensils className="w-6 h-6 text-amber-400" />;
      case 'v4': return <Palette className="w-6 h-6 text-amber-400" />;
      default: return <Sparkles className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="ventures" className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.ventures.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-amber-100 leading-tight">
            {t.ventures.heading}
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto my-4 rounded-full" />
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed text-center">
            {t.ventures.subheading}
          </p>
        </div>

        {/* Ventures List */}
        <div className="space-y-16">
          {venturesData.map((venture, vIdx) => {
            const translatedVenture = t.ventures.items[vIdx] || venture;

            return (
              <div
                key={venture.id}
                className="bg-stone-950/80 rounded-3xl border border-stone-800 p-6 sm:p-10 shadow-2xl space-y-8"
              >
                
                {/* Top Banner & Info */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-stone-800 pb-6">
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0">
                      {getVentureIcon(venture.id)}
                    </div>

                    <div>
                      <span className="text-xs sm:text-sm font-bold text-amber-400 uppercase tracking-widest">
                        {translatedVenture.est}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-amber-100 mt-1">
                        {translatedVenture.name}
                      </h3>
                      <p className="text-base sm:text-lg font-medium text-amber-300/90 mt-1">
                        {translatedVenture.tagline}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Description & Highlights */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  <div className="lg:col-span-6 space-y-4">
                    <p className="text-stone-300 text-base sm:text-lg leading-relaxed text-justify">
                      {translatedVenture.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      <h4 className="text-xs sm:text-sm font-bold text-amber-400 uppercase tracking-wider">
                        {t.brand.location.includes('भारत') ? 'प्रमुख व्यावसायिक विशेषताहरू:' : 'Key Enterprise Highlights:'}
                      </h4>
                      <ul className="space-y-2.5">
                        {translatedVenture.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-stone-300 text-justify">
                            <Check className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Photo Slots Grid for this Venture */}
                  <div className="lg:col-span-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {venture.visuals.map((vis, visIdx) => {
                        const nepaliVisualCaptions: Record<string, { title: string; caption: string }> = {
                          cutting_edge_1: { title: 'कटिङ एज डिस्प्ले १', caption: 'प्रिमियर सैलुन इन्टेरियर तथा स्टाइलिङ स्टेसन' },
                          cutting_edge_2: { title: 'कटिङ एज डिस्प्ले २', caption: 'दुलही शृङ्गार तथा हेयर ट्रान्सफर्मेसन' },
                          cutting_edge_3: { title: 'कटिङ एज डिस्प्ले ३', caption: 'हेयर कटिङ तथा स्टाइलिङ सेवा' },
                          cutting_edge_4: { title: 'कटिङ एज भिडियो टुर', caption: 'कटिङ एज हेयर एन्ड ब्युटी भिडियो प्रदर्शन' },
                          cutting_edge_7: { title: 'कटिङ एज भिडियो ३', caption: 'कटिङ एज हेयर एन्ड ब्युटी भिडियो' },
                          blush_1: { title: 'ब्लश स्टोर डिस्प्ले', caption: 'बुटिक इन्टेरियर तथा पोसाक प्रदर्शन' },
                          blush_2: { title: 'फेसन सङ्ग्रह', caption: 'आधुनिक तथा परम्परागत फेसन सङ्ग्रह' },
                          blush_3: { title: 'ब्लश भिडियो टुर', caption: 'ब्लश फेसन स्टोरको प्रत्यक्ष भिडियो' },
                          zayel_1: { title: 'जायल्स अचार डिस्प्ले १', caption: 'अ टेस्ट अफ सिक्किम - प्राङ्गारिक घरेलु अचार' },
                          zayel_2: { title: 'जायल्स अचार डिस्प्ले २', caption: 'मौलिक डल्ले खोर्सानी र हिमाली परिकार' },
                          block_print_1: { title: 'ब्लक प्रिन्ट डिस्प्ले १', caption: 'हातले कुँदिएको काठको ब्लक प्रिन्ट र कपडा कला' },
                          block_print_2: { title: 'ब्लक प्रिन्ट डिस्प्ले २', caption: 'परम्परागत हिमाली शिल्पकला र ढाँचाहरू' },
                          block_print_3: { title: 'ब्लक प्रिन्ट भिडियो डेमो', caption: 'परम्परागत ब्लक प्रिन्टिङ विधिको भिडियो' }
                        };

                        const visData = (t.brand.location.includes('भारत') && nepaliVisualCaptions[vis.slotKey]) 
                          ? nepaliVisualCaptions[vis.slotKey] 
                          : vis;

                        return (
                          <div key={visIdx} className={`${venture.visuals.length === 3 && visIdx === 2 ? 'sm:col-span-2' : ''}`}>
                            <div className="relative group p-1.5 sm:p-2 rounded-[1.75rem] bg-gradient-to-br from-amber-400 via-amber-600/70 to-amber-950/90 shadow-[0_8px_30px_rgba(217,119,6,0.2)] hover:shadow-[0_12px_40px_rgba(245,158,11,0.3)] transition-all duration-300">
                              <div className="w-full rounded-[1.25rem] overflow-hidden bg-stone-950 flex items-center justify-center border border-amber-500/30">
                                <PhotoPlaceholder
                                  slotKey={vis.slotKey}
                                  aspectRatio="landscape"
                                  className="w-full aspect-[4/3]"
                                  label={visData.title}
                                  imageClassName="w-full h-full object-contain p-1 transition-transform duration-500 group-hover:scale-[1.02]"
                                />
                              </div>
                            </div>
                            <div className="mt-2.5 text-center">
                              <div className="text-xs sm:text-sm font-bold text-amber-200 tracking-wide">{visData.title}</div>
                              <div className="text-xs text-stone-400 mt-0.5">{visData.caption}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
