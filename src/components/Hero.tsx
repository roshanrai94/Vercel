import React from 'react';
import { PhoneCall, MessageCircle, MapPin } from 'lucide-react';
import { OptimizedImage } from './OptimizedImage';
import { SITE_CONFIG, buildWhatsAppUrl } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import { trackEvent } from '../utils/analytics';

export const Hero: React.FC = () => {
  const { language } = useLanguage();

  const heroWhatsAppUrl = buildWhatsAppUrl(
    'Hi Shova, I would like to book an appointment or inquire about your businesses in Gangtok.'
  );

  const metrics =
    language === 'ne'
      ? [
          { value: '२०+', label: 'वर्षको अनुभव' },
          { value: '३', label: 'प्रमुख उद्यम (नामनाङ)' },
          { value: '५०+', label: 'सीपमूलक कार्यशाला' },
          { value: 'NCW', label: 'राष्ट्रिय महिला आयोग सम्मान' },
        ]
      : [
          { value: '20+', label: 'Years in Business' },
          { value: '3', label: 'Gangtok Enterprises' },
          { value: '50+', label: 'Skill Workshops' },
          { value: 'NCW', label: 'National Recognition' },
        ];

  return (
    <section
      id="home"
      className="pt-10 pb-16 sm:pt-14 sm:pb-24 bg-[#0c0a09] border-b border-stone-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Core Identity & Conversion CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-400">
              <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>
                {language === 'ne'
                  ? 'नामनाङ, गान्तोक, सिक्किम · उद्यमी र परामर्शदाता'
                  : 'Namnang, Gangtok, Sikkim · Entrepreneur & Mentor'}
              </span>
            </p>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-50 leading-[1.08]">
              {language === 'ne'
                ? 'श्रीमती शोभा राई — गान्तोककी उद्यमी, मास्टर स्टाइलिस्ट र परामर्शदाता'
                : 'Shova Rai — Master Stylist, Artisan & Sikkim Women Entrepreneur'}
            </h1>

            <p className="text-lg sm:text-xl text-stone-300 leading-relaxed max-w-2xl">
              {language === 'ne'
                ? 'कटिङ एज हेयर एन्ड ब्युटी, ब्लश फेसन स्टोर र जायल्स अर्गानिक अचारकी संस्थापक — बीस वर्षभन्दा बढीको अनुभवसहित गान्तोकमा सेवा र महिला सशक्तीकरणमा समर्पित।'
                : 'Founder of Cutting Edge Hair & Beauty, Blush Fashion Store, and Zayel’s Organic Pickles—bringing beauty, fashion, and organic Himalayan flavours to Gangtok for over 20 years.'}
            </p>

            {/* Primary Conversion Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href={heroWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent('whatsapp_click', {
                    category: 'conversion',
                    label: 'hero_book_whatsapp',
                    business: 'general',
                  })
                }
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold text-base transition-colors min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span>{language === 'ne' ? 'ह्वाट्सएपमा बुक गर्नुहोस्' : 'Book on WhatsApp'}</span>
              </a>

              <a
                href={SITE_CONFIG.phoneHref}
                onClick={() =>
                  trackEvent('call_click', {
                    category: 'conversion',
                    label: 'hero_call_now',
                    business: 'general',
                  })
                }
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-100 border border-stone-700 font-semibold text-base transition-colors min-h-[48px]"
              >
                <PhoneCall className="w-5 h-5 text-amber-400 shrink-0" aria-hidden="true" />
                <span>
                  {language === 'ne' ? `कल गर्नुहोस् · ${SITE_CONFIG.phoneDisplay}` : `Call Now · ${SITE_CONFIG.phoneDisplay}`}
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Priority Portrait Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 shadow-2xl">
              <OptimizedImage
                webpSrc="/webp/Hero.webp"
                fallbackSrc="/Hero.jpg"
                alt="Mrs. Shova Rai, entrepreneur, master hairstylist and community mentor from Gangtok, Sikkim"
                width={514}
                height={754}
                priority={true}
                imgClassName="w-full h-auto object-cover"
                fallbackTitle="Mrs. Shova Rai"
              />
            </div>
          </div>
        </div>

        {/* Full-Width Verified Credentials Row Below Split */}
        <div className="mt-12 pt-8 border-t border-stone-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item) => (
            <div key={item.label} className="space-y-1">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-amber-400 tabular-nums">
                {item.value}
              </div>
              <div className="text-sm sm:text-base text-stone-300">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
