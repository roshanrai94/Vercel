import React, { useState } from 'react';
import { Sparkles, Filter, Maximize2, X } from 'lucide-react';
import { PhotoPlaceholder } from './PhotoPlaceholder';
import { usePhotos } from '../context/PhotoContext';
import { editorialGalleryData } from '../data/portfolioData';

export const Gallery: React.FC = () => {
  const { photoMapping } = usePhotos();
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeLightbox, setActiveLightbox] = useState<{ key: string; title: string; category: string } | null>(null);

  const categories = [
    'ALL',
    'Beauty & Salon',
    'Culinary Arts',
    'Zayel\'s Pickle',
    'Traditional Craft',
    'Community Impact',
    'Fashion & Style'
  ];

  const filteredItems = selectedCategory === 'ALL'
    ? editorialGalleryData
    : editorialGalleryData.filter(item => item.category === selectedCategory);

  const lightboxData = activeLightbox ? photoMapping[activeLightbox.key] : null;
  const lightboxSrc = lightboxData?.dataUrl || lightboxData?.path;
  const isLightboxVideo = Boolean(
    lightboxSrc && (lightboxSrc.match(/\.(mp4|webm|mov|ogg)(\?.*)?$/i) || lightboxSrc.startsWith('data:video/'))
  );

  return (
    <section id="gallery" className="py-24 bg-stone-950 text-stone-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EDITORIAL CHRONICLE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-amber-100 leading-tight">
            Visual Gallery
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto my-4 rounded-full" />
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
            A visual showcase of Mrs. Shova Rai's creative craftsmanship, client reviews, community engagements, and enterprises.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10 pb-6 border-b border-stone-800">
          
          <div className="flex flex-wrap items-center gap-2.5 justify-center">
            <span className="text-xs sm:text-sm font-bold text-amber-400 uppercase tracking-wider mr-2 flex items-center gap-1">
              <Filter className="w-4 h-4" />
              <span>Category:</span>
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-stone-950 shadow-md'
                    : 'bg-stone-900 text-stone-300 hover:bg-stone-800 border border-stone-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-stone-900/80 p-4 rounded-[2rem] border border-stone-800 hover:border-amber-500/40 transition-all shadow-xl group flex flex-col justify-between"
            >
              {/* Photo Container with Curved Border Frame */}
              <div
                onClick={() => setActiveLightbox({ key: item.photoKey, title: item.title, category: item.category })}
                className="relative group/frame cursor-pointer p-1.5 sm:p-2 rounded-[1.75rem] bg-gradient-to-br from-amber-400 via-amber-600/70 to-amber-950/90 shadow-[0_8px_30px_rgba(217,119,6,0.2)] hover:shadow-[0_12px_40px_rgba(245,158,11,0.35)] transition-all duration-300 mb-3"
              >
                <div className="w-full rounded-[1.25rem] overflow-hidden bg-stone-950 flex items-center justify-center border border-amber-500/30 relative">
                  <PhotoPlaceholder
                    slotKey={item.photoKey}
                    aspectRatio="landscape"
                    className="w-full aspect-[4/3]"
                    label={item.title}
                    imageClassName="w-full h-full object-contain p-1 transition-transform duration-500 group-hover/frame:scale-[1.02]"
                  />
                  <div className="absolute top-2 right-2 opacity-0 group-hover/frame:opacity-100 transition-opacity bg-stone-950/80 text-amber-300 p-1.5 rounded-lg border border-amber-500/40 backdrop-blur-sm pointer-events-none">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5 px-1 pb-1">
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
                  {item.category}
                </span>
                <h3 className="text-base font-serif font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
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
              <span className="text-[10px] uppercase font-bold text-amber-400 tracking-widest px-2.5 py-0.5 rounded-md bg-amber-500/20 border border-amber-500/30">
                {activeLightbox.category}
              </span>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-amber-100">
                {activeLightbox.title}
              </h3>
            </div>

            <div className="w-full max-h-[75vh] flex items-center justify-center bg-stone-950 rounded-[1.25rem] border border-stone-800 p-2 overflow-hidden">
              {lightboxSrc ? (
                isLightboxVideo ? (
                  <video src={lightboxSrc} controls autoPlay className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain" />
                ) : (
                  <img src={lightboxSrc} alt={activeLightbox.title} className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain" />
                )
              ) : (
                <div className="p-8 text-center text-stone-400 text-sm">No image available in this slot</div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

