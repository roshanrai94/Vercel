import React from 'react';
import { TESTIMONIALS_DATA } from '../data/siteConfig';

/**
 * Customer Testimonials Section
 * Hidden automatically when TESTIMONIALS_DATA in src/data/siteConfig.ts is empty.
 * Add 3 real customer reviews with first names to display this section.
 */
export const Testimonials: React.FC = () => {
  if (!TESTIMONIALS_DATA || TESTIMONIALS_DATA.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="section-shell section-bg">
      <div className="site-container space-y-10">
        <div className="max-w-2xl space-y-3">
          <p className="section-eyebrow">Testimonials</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text)]">
            What Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS_DATA.map((review) => (
            <blockquote
              key={review.id}
              className="card-elevated p-6 flex flex-col justify-between gap-5"
            >
              <p className="text-base text-[var(--text)] leading-relaxed">“{review.quote}”</p>
              <footer className="pt-4 border-t border-[var(--border)]">
                <div className="font-semibold text-base text-[var(--gold)]">{review.firstName}</div>
                <div className="text-sm text-[var(--text-muted)]">{review.context}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};
