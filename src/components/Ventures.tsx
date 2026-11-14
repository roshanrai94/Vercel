import React from 'react';
import { MessageCircle, MapPin, Clock, Check } from 'lucide-react';
import { BUSINESSES, buildWhatsAppUrl } from '../data/siteConfig';
import { OptimizedImage } from './OptimizedImage';
import { useLanguage } from '../context/LanguageContext';
import { trackEvent } from '../utils/analytics';

export const Ventures: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="businesses" className="py-16 sm:py-24 bg-[#0c0a09] border-b border-stone-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-amber-400">
            {language === 'ne' ? 'प्रमुख व्यवसायहरू' : 'My Businesses'}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-50">
            {language === 'ne'
              ? 'नामनाङ, गान्तोकमा अवस्थित तीन प्रमुख उद्यमहरू'
              : 'Three Local Enterprises in Namnang, Gangtok'}
          </h2>
          <p className="text-base sm:text-lg text-stone-300">
            {language === 'ne'
              ? 'अपोइन्टमेन्ट, बुटिक जानकारी वा प्राङ्गारिक अचार अर्डरका लागि प्रत्येक व्यवसायमा सिधै ह्वाट्सएप वा नक्सा प्रयोग गर्नुहोस्।'
              : 'Book your salon visit, explore contemporary and ethnic styles, or order small-batch organic Sikkimese pickles directly via WhatsApp.'}
          </p>
        </div>

        {/* 3 Business Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {BUSINESSES.map((biz) => {
            const name = language === 'ne' ? biz.nameNe : biz.name;
            const category = language === 'ne' ? biz.categoryNe : biz.category;
            const description = language === 'ne' ? biz.descriptionNe : biz.description;
            const highlights = language === 'ne' ? biz.highlightsNe : biz.highlights;
            const hours = language === 'ne' ? biz.hoursNe : biz.hours;
            const whatsappUrl = buildWhatsAppUrl(biz.whatsappMessage);

            return (
              <article
                key={biz.id}
                className="flex flex-col rounded-2xl bg-stone-900/70 border border-stone-800 overflow-hidden"
              >
                {/* Business Photo */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-stone-950 border-b border-stone-800">
                  <OptimizedImage
                    webpSrc={biz.imageWebp}
                    fallbackSrc={biz.imageFallback}
                    alt={biz.imageAlt}
                    width={biz.width}
                    height={biz.height}
                    imgClassName="w-full h-full object-cover"
                    fallbackTitle={name}
                  />
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between gap-6">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-amber-400">
                        {category} <span aria-hidden="true">·</span> {biz.established}
                      </p>
                      <h3 className="font-serif text-2xl font-bold text-stone-50">{name}</h3>
                    </div>

                    <p className="text-base text-stone-300 leading-relaxed line-clamp-3">
                      {description}
                    </p>

                    <ul className="space-y-2 pt-1">
                      {highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm sm:text-base text-stone-200">
                          <Check className="w-4 h-4 text-amber-400 shrink-0 mt-1" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="flex items-start gap-2 text-sm text-stone-400 pt-1">
                      <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{hours}</span>
                    </p>
                  </div>

                  {/* Card Actions: WhatsApp + Directions */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-stone-800">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackEvent('whatsapp_click', {
                          category: 'conversion',
                          label: `business_card_${biz.id}`,
                          business: biz.id,
                        })
                      }
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold text-sm transition-colors min-h-[44px]"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>WhatsApp</span>
                    </a>

                    <a
                      href={biz.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackEvent('directions_click', {
                          category: 'engagement',
                          label: `directions_${biz.id}`,
                          business: biz.id,
                        })
                      }
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-stone-950 hover:bg-stone-800 text-stone-100 border border-stone-700 font-semibold text-sm transition-colors min-h-[44px]"
                    >
                      <MapPin className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
                      <span>{language === 'ne' ? 'दिशा' : 'Directions'}</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
