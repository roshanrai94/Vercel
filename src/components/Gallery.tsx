import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_PHOTOS, GalleryPhotoItem } from '../data/siteConfig';
import { OptimizedImage } from './OptimizedImage';
import { useLanguage } from '../context/LanguageContext';

export const Gallery: React.FC = () => {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['ALL', ...Array.from(new Set(GALLERY_PHOTOS.map((p) => p.category)))];

  const filteredPhotos: GalleryPhotoItem[] =
    selectedCategory === 'ALL'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === selectedCategory);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % filteredPhotos.length));
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev - 1 + filteredPhotos.length) % filteredPhotos.length
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, filteredPhotos.length]);

  const activePhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#0c0a09] border-b border-stone-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-amber-400">
            {language === 'ne' ? 'तस्बिर ग्यालरी' : 'Gallery'}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-50">
            {language === 'ne'
              ? 'कार्य, कला, उत्पादन र सम्मानका झलकहरू'
              : 'Inside the Salon, Boutique, Kitchen & Workshops'}
          </h2>
          <p className="text-base sm:text-lg text-stone-300">
            {language === 'ne'
              ? 'कुनै पनि तस्बिरमा क्लिक गरी ठूलो आकारमा हेर्नुहोस्।'
              : 'Select any image to inspect full-size photography from Gangtok.'}
          </p>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter gallery photos">
          {categories.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => {
                  setSelectedCategory(cat);
                  setLightboxIndex(null);
                }}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer whitespace-nowrap min-h-[40px] ${
                  active
                    ? 'bg-amber-400 text-stone-950 font-semibold'
                    : 'bg-stone-900 text-stone-300 border border-stone-800 hover:text-amber-300'
                }`}
              >
                {cat === 'ALL' ? (language === 'ne' ? 'सबै' : 'All Photos') : cat}
              </button>
            );
          })}
        </div>

        {/* Responsive Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((item, idx) => {
            const title = language === 'ne' ? item.titleNe : item.title;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setLightboxIndex(idx)}
                aria-label={`Open full-size image: ${title}`}
                className="group text-left rounded-2xl bg-stone-900/70 border border-stone-800 hover:border-amber-400/60 overflow-hidden transition-colors cursor-pointer focus-visible:outline-2"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-stone-950">
                  <OptimizedImage
                    webpSrc={item.webp}
                    fallbackSrc={item.fallback}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    imgClassName="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    fallbackTitle={title}
                  />
                </div>
                <div className="p-4 space-y-1">
                  <p className="text-xs font-medium text-amber-400">{item.category}</p>
                  <h3 className="font-serif text-lg font-bold text-stone-100 group-hover:text-amber-200 transition-colors">
                    {title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={language === 'ne' ? activePhoto.titleNe : activePhoto.title}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-stone-950 border border-stone-800 rounded-2xl p-4 sm:p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-stone-800 pb-3">
              <div>
                <p className="text-xs font-medium text-amber-400">{activePhoto.category}</p>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-100">
                  {language === 'ne' ? activePhoto.titleNe : activePhoto.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close lightbox"
                className="w-11 h-11 rounded-lg bg-stone-900 border border-stone-700 text-stone-200 hover:text-amber-300 flex items-center justify-center cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative flex items-center justify-center bg-black rounded-xl overflow-hidden max-h-[70vh]">
              <OptimizedImage
                webpSrc={activePhoto.webp}
                fallbackSrc={activePhoto.fallback}
                alt={activePhoto.alt}
                width={activePhoto.width}
                height={activePhoto.height}
                priority={true}
                imgClassName="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="flex items-center justify-between gap-4 pt-1">
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex((prev) =>
                    prev === null ? null : (prev - 1 + filteredPhotos.length) % filteredPhotos.length
                  )
                }
                aria-label="Previous image"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-stone-900 border border-stone-800 text-sm text-stone-200 hover:text-amber-300 cursor-pointer min-h-[44px]"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <span className="text-sm text-stone-400 tabular-nums">
                {(lightboxIndex ?? 0) + 1} / {filteredPhotos.length}
              </span>

              <button
                type="button"
                onClick={() =>
                  setLightboxIndex((prev) =>
                    prev === null ? null : (prev + 1) % filteredPhotos.length
                  )
                }
                aria-label="Next image"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-stone-900 border border-stone-800 text-sm text-stone-200 hover:text-amber-300 cursor-pointer min-h-[44px]"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
