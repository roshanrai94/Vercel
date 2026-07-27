import React, { useState } from 'react';
import { Award, Sparkles, FolderOpen, Mic, FileCheck2, Maximize2, X } from 'lucide-react';
import { PhotoPlaceholder } from './PhotoPlaceholder';
import { usePhotos } from '../context/PhotoContext';
import { accoladesData, publicSpeakingData, photoAwardSlots, endorsementsData } from '../data/portfolioData';

export const Recognition: React.FC = () => {
  const { openManager, photoMapping } = usePhotos();
  const [activeLightbox, setActiveLightbox] = useState<{ key: string; title: string; category?: string } | null>(null);

  const lightboxData = activeLightbox ? photoMapping[activeLightbox.key] : null;
  const lightboxSrc = lightboxData?.dataUrl || lightboxData?.path;

  return (
    <section id="recognition" className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HONORS & ACCOLADES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-amber-100 leading-tight">
            National & State Recognition
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto my-4 rounded-full" />
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
            Honored by National Commissions, Union Ministers, Educational Institutions, and Community Organizations for visionary leadership.
          </p>
        </div>

        {/* Accolades & Speaking Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Key Felicitations */}
          <div className="lg:col-span-7 bg-stone-950/80 p-8 rounded-3xl border border-stone-800 space-y-6">
            <div className="flex items-center gap-2 text-amber-400 text-base font-bold uppercase tracking-wider">
              <Award className="w-5 h-5" />
              <span>Distinguished Honors & Commendations</span>
            </div>

            <div className="space-y-4">
              {accoladesData.map((accolade) => (
                <div key={accolade.id} className="p-4 sm:p-5 rounded-xl bg-stone-900 border border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-lg font-serif font-bold text-amber-100">{accolade.title}</h4>
                    <p className="text-sm text-stone-300 mt-0.5">{accolade.location}</p>
                  </div>
                  <span className="shrink-0 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider text-center">
                    {accolade.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Speaking & Resource Engagements */}
          <div className="lg:col-span-5 bg-stone-950/80 p-8 rounded-3xl border border-stone-800 space-y-6">
            <div className="flex items-center gap-2 text-amber-400 text-base font-bold uppercase tracking-wider">
              <Mic className="w-5 h-5" />
              <span>Academic & Public Engagements</span>
            </div>

            <div className="space-y-4">
              {publicSpeakingData.map((talk, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-stone-900 border border-stone-800 space-y-1.5">
                  <span className="inline-block px-2.5 py-0.5 rounded bg-amber-600/30 text-amber-300 text-xs font-bold">
                    {talk.role}
                  </span>
                  <h4 className="text-base font-bold text-amber-100">{talk.event}</h4>
                  <p className="text-sm text-stone-300">{talk.location}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Award Photo Spaces Grid */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-amber-100 flex items-center gap-2">
                <Award className="w-6 h-6 text-amber-400" />
                <span>Felicitation Photo Corner</span>
              </h3>
              <p className="text-stone-300 text-sm mt-1">
                National and State award ceremonies, felicitation plaques, and ministerial honors.
              </p>
            </div>

            <button
              onClick={openManager}
              className="px-4 py-2.5 text-xs sm:text-sm font-semibold bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 rounded-xl transition-all flex items-center gap-2 self-start sm:self-auto"
            >
              <FolderOpen className="w-4 h-4 text-amber-400" />
              <span>Upload Award Photos</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photoAwardSlots.map((slot) => (
              <div key={slot.key} className="flex flex-col">
                <div
                  onClick={() => setActiveLightbox({ key: slot.key, title: slot.label, category: 'Felicitation & Award' })}
                  className="relative group cursor-pointer p-1.5 sm:p-2 rounded-[1.75rem] bg-gradient-to-br from-amber-400 via-amber-600/70 to-amber-950/90 shadow-[0_8px_30px_rgba(217,119,6,0.2)] hover:shadow-[0_12px_40px_rgba(245,158,11,0.35)] transition-all duration-300"
                >
                  <div className="w-full aspect-[4/3] rounded-[1.25rem] overflow-hidden bg-stone-950 flex items-center justify-center border border-amber-500/30 relative">
                    <PhotoPlaceholder
                      slotKey={slot.key}
                      aspectRatio="landscape"
                      label={slot.label}
                      imageClassName="w-full h-full object-contain p-1 transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-950/80 text-amber-300 p-1.5 rounded-lg border border-amber-500/40 backdrop-blur-sm pointer-events-none">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <h4 className="text-base font-serif font-bold text-amber-200">{slot.label}</h4>
                  <p className="text-xs sm:text-sm text-stone-300 mt-0.5">{slot.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Endorsement Certificates & Handwritten Testimonies Grid */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-2">
              <FileCheck2 className="w-4 h-4" />
              <span>TESTIMONIES & REVIEWS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-amber-100">
              Endorsement & Handwritten Testimonies
            </h3>
            <p className="text-stone-300 text-sm mt-1">
              Handwritten testimonies, client reviews, official certificates of recognition, and institutional endorsements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {endorsementsData.map((item) => (
              <div key={item.id} className="bg-stone-950/80 p-4 sm:p-5 rounded-[2rem] border border-stone-800 hover:border-amber-500/40 transition-all shadow-xl group flex flex-col justify-between">
                <div
                  onClick={() => setActiveLightbox({ key: item.photoKey, title: item.title, category: 'Handwritten Testimony & Review' })}
                  className="relative group/frame cursor-pointer p-1.5 sm:p-2 rounded-[1.75rem] bg-gradient-to-br from-amber-400 via-amber-600/70 to-amber-950/90 shadow-[0_8px_30px_rgba(217,119,6,0.2)] hover:shadow-[0_12px_40px_rgba(245,158,11,0.35)] transition-all duration-300 mb-3"
                >
                  <div className="w-full aspect-[3/4] rounded-[1.25rem] overflow-hidden bg-stone-950 flex items-center justify-center border border-amber-500/30 relative">
                    <PhotoPlaceholder
                      slotKey={item.photoKey}
                      aspectRatio="portrait"
                      label={item.title}
                      imageClassName="w-full h-full object-contain p-1 transition-transform duration-500 group-hover/frame:scale-[1.02]"
                    />
                    <div className="absolute top-2 right-2 opacity-0 group-hover/frame:opacity-100 transition-opacity bg-stone-950/80 text-amber-300 p-1.5 rounded-lg border border-amber-500/40 backdrop-blur-sm pointer-events-none">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
                <div className="text-center px-1 pb-1">
                  <h4 className="text-sm font-bold text-amber-200 leading-snug group-hover:text-amber-300 transition-colors">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setActiveLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-stone-900 border border-amber-500/40 rounded-[2rem] p-4 sm:p-6 shadow-2xl flex flex-col items-center gap-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveLightbox(null)}
              className="absolute top-4 right-4 p-2 bg-stone-950 text-stone-300 hover:text-amber-400 rounded-full border border-stone-800 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-1 w-full border-b border-stone-800 pb-3 pr-10">
              {activeLightbox.category && (
                <span className="text-[10px] uppercase font-bold text-amber-400 tracking-widest px-2.5 py-0.5 rounded-md bg-amber-500/20 border border-amber-500/30">
                  {activeLightbox.category}
                </span>
              )}
              <h3 className="text-lg sm:text-xl font-serif font-bold text-amber-100">
                {activeLightbox.title}
              </h3>
            </div>

            <div className="w-full max-h-[75vh] flex items-center justify-center bg-stone-950 rounded-[1.25rem] border border-stone-800 p-2 overflow-hidden">
              {lightboxSrc ? (
                <img src={lightboxSrc} alt={activeLightbox.title} className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain" />
              ) : (
                <div className="p-8 text-center text-stone-400 text-sm">No image uploaded for this slot yet</div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
