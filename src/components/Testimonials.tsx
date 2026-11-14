import React from 'react';
import { TESTIMONIALS_DATA } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';

/**
 * Customer Testimonials Section
 * Hidden automatically when TESTIMONIALS_DATA in src/data/siteConfig.ts is empty.
 * Add 3 real customer reviews with first names to display this section.
 */
export const Testimonials: React.FC = () => {
  const { language } = useLanguage();

  if (!TESTIMONIALS_DATA || TESTIMONIALS_DATA.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-[#0c0a09] border-b border-stone-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-amber-400">
            {language === 'ne' ? 'ग्राहकका अनुभवहरू' : 'Testimonials'}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-50">
            {language === 'ne' ? 'गान्तोकका ग्राहकहरूको विश्वास' : 'What Clients Say'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((review) => (
            <blockquote
              key={review.id}
              className="p-6 rounded-2xl bg-stone-900/70 border border-stone-800 flex flex-col justify-between gap-5"
            >
              <p className="text-base text-stone-200 leading-relaxed">“{review.quote}”</p>
              <footer className="pt-4 border-t border-stone-800">
                <div className="font-semibold text-base text-amber-300">{review.firstName}</div>
                <div className="text-sm text-stone-400">{review.context}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};
