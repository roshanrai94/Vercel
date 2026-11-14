import React from 'react';
import { MessageCircle, MapPin, Clock, Check, Scissors, ShoppingBag, Flame } from 'lucide-react';
import { BUSINESSES, buildWhatsAppUrl, BusinessItem } from '../data/siteConfig';
import { OptimizedImage } from './OptimizedImage';
import { useLanguage } from '../context/LanguageContext';
import { trackEvent } from '../utils/analytics';

const BUSINESS_STYLES: Record<
  BusinessItem['id'],
  {
    accentVar: string;
    softBgVar: string;
    Icon: React.FC<{ className?: string; style?: React.CSSProperties }>;
  }
> = {
  'cutting-edge': {
    accentVar: 'var(--salon)',
    softBgVar: 'var(--salon-soft)',
    Icon: Scissors,
  },
  blush: {
    accentVar: 'var(--blush)',
    softBgVar: 'var(--blush-soft)',
    Icon: ShoppingBag,
  },
  zayels: {
    accentVar: 'var(--zayel)',
    softBgVar: 'var(--zayel-soft)',
    Icon: Flame,
  },
};

export const Ventures: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="businesses" className="section-shell section-bg">
      <div className="site-container space-y-12">
        <div className="max-w-2xl space-y-4">
          <p className="section-eyebrow">
            {language === 'ne' ? 'प्रमुख व्यवसायहरू' : 'My Businesses'}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text)] leading-[1.18]">
            {language === 'ne'
              ? 'नामनाङ, गान्तोकमा अवस्थित तीन प्रमुख उद्यमहरू'
              : 'Three Local Enterprises in Namnang, Gangtok'}
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-muted)]">
            {language === 'ne'
              ? 'अपोइन्टमेन्ट, बुटिक जानकारी वा प्राङ्गारिक अचार अर्डरका लागि प्रत्येक व्यवसायमा सिधै ह्वाट्सएप वा नक्सा प्रयोग गर्नुहोस्।'
              : 'Book your salon visit, explore contemporary and ethnic styles, or order small-batch organic Sikkimese pickles directly via WhatsApp.'}
          </p>
        </div>

        {/* 3 Business Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {BUSINESSES.map((biz) => {
            const name = language === 'ne' ? biz.nameNe : biz.name;
            const category = language === 'ne' ? biz.categoryNe : biz.category;
            const description = language === 'ne' ? biz.descriptionNe : biz.description;
            const highlights = language === 'ne' ? biz.highlightsNe : biz.highlights;
            const hours = language === 'ne' ? biz.hoursNe : biz.hours;
            const whatsappUrl = buildWhatsAppUrl(biz.whatsappMessage);
            const styleTokens = BUSINESS_STYLES[biz.id];
            const BizIcon = styleTokens.Icon;

            return (
              <article
                key={biz.id}
                className="card-elevated flex flex-col overflow-hidden"
                style={{ borderTop: `3px solid ${styleTokens.accentVar}` }}
              >
                {/* Business Photo */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-[var(--bg)] border-b border-[var(--border)]">
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
                    {/* Small business-accent badge + icon + established */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[8px] text-xs font-semibold"
                        style={{
                          backgroundColor: styleTokens.softBgVar,
                          color: styleTokens.accentVar,
                        }}
                      >
                        <BizIcon className="w-3.5 h-3.5 shrink-0" />
                        <span>{category}</span>
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-serif text-2xl font-bold text-[var(--text)]">{name}</h3>
                      <p className="text-xs font-medium text-[var(--text-muted)]">
                        {biz.established}
                      </p>
                    </div>

                    <p className="text-base text-[var(--text)] leading-relaxed line-clamp-3">
                      {description}
                    </p>

                    <ul className="space-y-2 pt-1">
                      {highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm sm:text-base text-[var(--text-muted)]"
                        >
                          <Check
                            className="w-4 h-4 shrink-0 mt-1"
                            style={{ color: styleTokens.accentVar }}
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="flex items-start gap-2 text-sm text-[var(--text-muted)] pt-1">
                      <Clock
                        className="w-4 h-4 shrink-0 mt-0.5 text-[var(--gold)]"
                        aria-hidden="true"
                      />
                      <span>{hours}</span>
                    </p>
                  </div>

                  {/* Card Actions: WhatsApp + Directions */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[var(--border)]">
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
                      className="btn-whatsapp !px-3"
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
                      className="btn-secondary !px-3"
                    >
                      <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
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
