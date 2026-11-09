import React, { useState, useEffect } from 'react';
import { Award, Sparkles, Mic, FileCheck2, Maximize2, X, ExternalLink } from 'lucide-react';
import { PhotoPlaceholder } from './PhotoPlaceholder';
import { usePhotos } from '../context/PhotoContext';
import { accoladesData, publicSpeakingData, photoAwardSlots, endorsementsData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export const Recognition: React.FC = () => {
  const { t, language } = useLanguage();
  const { photoMapping } = usePhotos();
  const [activeLightbox, setActiveLightbox] = useState<{ key: string; title: string; category?: string } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveLightbox(null);
      }
    };
    if (activeLightbox) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeLightbox]);

  const lightboxData = activeLightbox ? photoMapping[activeLightbox.key] : null;
  const lightboxSrc = lightboxData?.dataUrl || lightboxData?.path;

  const isLightboxVideo = Boolean(
    lightboxSrc && (lightboxSrc.match(/\.(mp4|webm|mov|ogg)(\?.*)?$/i) || lightboxSrc.startsWith('data:video/'))
  );

  return (
    <section id="recognition" className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.recognition.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-amber-100 leading-tight">
            {t.recognition.heading}
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto my-4 rounded-full" />
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
            {t.recognition.subheading}
          </p>
        </div>

        {/* Accolades & Speaking Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Key Felicitations */}
          <div className="lg:col-span-7 bg-stone-950/80 p-6 sm:p-8 rounded-3xl border border-stone-800 space-y-6">
            <div className="flex items-center gap-2 text-amber-400 text-sm sm:text-base font-bold uppercase tracking-wider font-display">
              <Award className="w-5 h-5" />
              <span>{t.recognition.felicitationsTitle}</span>
            </div>

            <div className="space-y-4">
              {accoladesData.map((accolade, idx) => {
                const tr = t.recognition.accolades[idx] || accolade;
                return (
                  <div key={accolade.id} className="p-4 sm:p-5 rounded-2xl bg-stone-900/90 border border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-amber-500/30 transition-colors">
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-serif font-bold text-amber-100">{tr.title}</h4>
                      <p className="text-xs sm:text-sm text-stone-300 mt-0.5">{tr.location}</p>
                      {accolade.articleUrl && (
                        <a
                          href={accolade.articleUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 hover:underline mt-2 font-medium"
                        >
                          <span>
                            {language === 'ne' 
                              ? `आधिकारिक समाचार कभरेज: ${('source' in tr && tr.source) ? tr.source : (accolade.articleSource || 'सरकारी पोर्टल')}` 
                              : `Official coverage on ${('source' in tr && tr.source) ? tr.source : (accolade.articleSource || 'Government Portal')}`}
                          </span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                    <span className="shrink-0 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider text-center border border-amber-500/30">
                      {tr.date}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Speaking & Resource Engagements */}
          <div className="lg:col-span-5 bg-stone-950/80 p-6 sm:p-8 rounded-3xl border border-stone-800 space-y-6">
            <div className="flex items-center gap-2 text-amber-400 text-sm sm:text-base font-bold uppercase tracking-wider font-display">
              <Mic className="w-5 h-5" />
              <span>{t.recognition.publicSpeakingTitle}</span>
            </div>

            <div className="space-y-4">
              {publicSpeakingData.map((talk, idx) => {
                const tr = t.recognition.publicSpeaking[idx] || talk;
                return (
                  <div key={idx} className="p-4 rounded-2xl bg-stone-900/90 border border-stone-800 space-y-1.5 hover:border-amber-500/30 transition-colors">
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-amber-600/30 text-amber-300 text-xs font-bold border border-amber-500/30">
                      {tr.role}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-amber-100">{tr.event}</h4>
                    <p className="text-xs sm:text-sm text-stone-300">{tr.location}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

          {/* Award Photo Spaces Grid */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-amber-100 flex items-center gap-2">
                <Award className="w-6 h-6 text-amber-400" />
                <span>{language === 'ne' ? 'सम्मान तथा कदर तस्बिर सङ्ग्रह' : 'Felicitation Photo Corner'}</span>
              </h3>
              <p className="text-stone-300 text-sm mt-1">
                {language === 'ne'
                  ? 'राष्ट्रिय तथा राज्यस्तरीय पुरस्कार वितरण समारोह, अभिनन्दन पत्र र मन्त्रीस्तरीय कदर।'
                  : 'National and State award ceremonies, felicitation plaques, and ministerial honors.'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photoAwardSlots.map((slot) => {
              const nepaliSlot = {
                award_1: { label: 'केन्द्रीय मन्त्रीद्वारा सम्मान', sub: 'तृणमूल प्रभावका लागि श्रीमती शोभा करन्दलाजेद्वारा अभिनन्दित' },
                award_2: { label: 'राष्ट्रिय महिला आयोग (NCW)', sub: 'महिला उद्यमीहरूको सशक्तीकरणका लागि नयाँ दिल्लीमा सम्मानित' },
                award_3: { label: 'राष्ट्रिय महिला आयोग, नयाँ दिल्ली', sub: 'अध्यक्ष, राष्ट्रिय महिला आयोग, दिल्लीको कार्यकक्षमा' },
                award_4: { label: 'निरन्तर सीप तालिम र सिकाइ', sub: 'व्यावसायिक सीप विकास र शैक्षिक कार्यशालाहरूमा संलग्नता' },
                award_5: { label: 'जिल्ला प्रशासन केन्द्र गान्तोकमा मन्तव्य', sub: 'सामुदायिक सशक्तीकरण र जीविकोपार्जन पहलहरूमा व्याख्यान' },
                award_6: { label: 'दूरदर्शन गान्तोकमा विशेष अन्तर्वार्ता', sub: 'महिला उद्यमशीलता र सामाजिक प्रभावबारे विचार साझा' },
                award_7: { label: 'सशक्तीकरणमा उत्कृष्टता', sub: 'महिला जीविकोपार्जन प्रवर्द्धनका लागि राष्ट्रिय कदर' }
              }[slot.key];

              const slotLabel = language === 'ne' && nepaliSlot ? nepaliSlot.label : slot.label;
              const slotSub = language === 'ne' && nepaliSlot ? nepaliSlot.sub : slot.sub;

              return (
                <div key={slot.key} className="flex flex-col">
                  <div
                    onClick={() => setActiveLightbox({ key: slot.key, title: slotLabel, category: language === 'ne' ? 'सम्मान तथा पुरस्कार' : 'Felicitation & Award' })}
                    className="relative group cursor-pointer p-1.5 sm:p-2 rounded-[1.75rem] bg-gradient-to-br from-amber-400 via-amber-600/70 to-amber-950/90 shadow-[0_8px_30px_rgba(217,119,6,0.2)] hover:shadow-[0_12px_40px_rgba(245,158,11,0.35)] transition-all duration-300"
                  >
                    <div className="w-full rounded-[1.25rem] overflow-hidden bg-stone-950 flex items-center justify-center border border-amber-500/30 relative">
                      <PhotoPlaceholder
                        slotKey={slot.key}
                        aspectRatio="landscape"
                        className="w-full aspect-[4/3]"
                        label={slotLabel}
                        imageClassName="w-full h-full object-contain p-1 transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-950/80 text-amber-300 p-1.5 rounded-lg border border-amber-500/40 backdrop-blur-sm pointer-events-none">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 text-center">
                    <h4 className="text-base font-serif font-bold text-amber-200">{slotLabel}</h4>
                    <p className="text-xs sm:text-sm text-stone-300 mt-0.5">{slotSub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Endorsement Certificates & Handwritten Testimonies Grid */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-2 font-display">
              <FileCheck2 className="w-4 h-4" />
              <span>{language === 'ne' ? 'प्रशंसापत्र तथा प्रतिक्रिया' : 'TESTIMONIES & REVIEWS'}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-amber-100">
              {language === 'ne' ? 'प्रशंसापत्र तथा हस्तलिखित अनुभवहरू' : 'Endorsement & Handwritten Testimonies'}
            </h3>
            <p className="text-stone-300 text-sm mt-1">
              {language === 'ne'
                ? 'हस्तलिखित प्रशंसापत्र, ग्राहकका अनुभव, आधिकारिक कदर-पत्र र संस्थागत सिफारिसहरू।'
                : 'Handwritten testimonies, client reviews, official certificates of recognition, and institutional endorsements.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {endorsementsData.map((item) => {
              const nepaliEndorsements: Record<string, string> = {
                e1: 'उत्कृष्ट नेतृत्व तथा दूरदर्शिता समीक्षा',
                e2: 'सामुदायिक प्रभाव तथा समर्पणको गवाही',
                e3: 'व्यावसायिक सीप तालिम सिफारिस पत्र',
                e4: 'परम्परागत शिल्प कौशल कदर पत्र',
                e5: 'ग्राहक सन्तुष्टि तथा सफलताको अनुभव',
                e6: 'सशक्तीकरण तथा परामर्श अनुभव'
              };
              const itemTitle = language === 'ne' && nepaliEndorsements[item.id] ? nepaliEndorsements[item.id] : item.title;

              return (
                <div key={item.id} className="bg-stone-950/80 p-3 sm:p-4 rounded-[2rem] border border-stone-800 hover:border-amber-500/40 transition-all shadow-xl group">
                  <div
                    onClick={() => setActiveLightbox({ key: item.photoKey, title: itemTitle, category: language === 'ne' ? 'हस्तलिखित प्रशंसापत्र र समीक्षा' : 'Handwritten Testimony & Review' })}
                    className="relative group/frame cursor-pointer p-1.5 sm:p-2 rounded-[1.75rem] bg-gradient-to-br from-amber-400 via-amber-600/70 to-amber-950/90 shadow-[0_8px_30px_rgba(217,119,6,0.2)] hover:shadow-[0_12px_40px_rgba(245,158,11,0.35)] transition-all duration-300"
                  >
                    <div className="w-full rounded-[1.25rem] overflow-hidden bg-stone-950 flex items-center justify-center border border-amber-500/30 relative">
                      <PhotoPlaceholder
                        slotKey={item.photoKey}
                        aspectRatio="portrait"
                        className="w-full aspect-[3/4]"
                        label={itemTitle}
                        imageClassName="w-full h-full object-contain p-1 transition-transform duration-500 group-hover/frame:scale-[1.02]"
                      />
                      <div className="absolute top-2 right-2 opacity-0 group-hover/frame:opacity-100 transition-opacity bg-stone-950/80 text-amber-300 p-1.5 rounded-lg border border-amber-500/40 backdrop-blur-sm pointer-events-none">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Lightbox Modal with smooth escape key and full frame rendering */}
      {activeLightbox && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6"
          onClick={() => setActiveLightbox(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-stone-900/95 border border-amber-500/40 rounded-[2rem] p-4 sm:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col items-center gap-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveLightbox(null)}
              className="absolute top-4 right-4 p-2.5 bg-stone-950 text-stone-300 hover:text-amber-400 rounded-full border border-stone-700 transition-all hover:scale-110 z-10 shadow-lg"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-1 w-full border-b border-stone-800 pb-3 pr-12">
              {activeLightbox.category && (
                <span className="text-[10px] uppercase font-bold text-amber-400 tracking-widest px-2.5 py-0.5 rounded-md bg-amber-500/20 border border-amber-500/30">
                  {activeLightbox.category}
                </span>
              )}
              <h3 className="text-lg sm:text-2xl font-serif font-bold text-amber-100">
                {activeLightbox.title}
              </h3>
            </div>

            <div className="w-full max-h-[75vh] flex items-center justify-center bg-stone-950 rounded-[1.5rem] border border-stone-800 p-2 overflow-hidden shadow-inner">
              {lightboxSrc ? (
                isLightboxVideo ? (
                  <video 
                    src={lightboxSrc} 
                    controls 
                    autoPlay 
                    onPlay={(e) => {
                      const allVideos = document.querySelectorAll('video');
                      allVideos.forEach((vid) => {
                        if (vid !== e.currentTarget && !vid.paused) {
                          vid.pause();
                        }
                      });
                    }}
                    className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain" 
                  />
                ) : (
                  <img src={lightboxSrc} alt={activeLightbox.title} className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain" />
                )
              ) : (
                <div className="p-8 text-center text-stone-400 text-sm">No photo or video uploaded for this slot yet</div>
              )}
            </div>

            <div className="text-[11px] text-stone-400 tracking-wider">
              Press <kbd className="px-1.5 py-0.5 bg-stone-800 rounded border border-stone-700 text-amber-300">Esc</kbd> or click outside to close
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

