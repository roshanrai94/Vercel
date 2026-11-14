import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SALON_SERVICES, buildWhatsAppUrl } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import { trackEvent } from '../utils/analytics';

export const ServicesPriceList: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#12100e] border-b border-stone-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-amber-400">
              {language === 'ne' ? 'कटिङ एज सैलुन सेवाहरू' : 'Salon Services & Price List'}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-50">
              {language === 'ne'
                ? 'कटिङ एज हेयर एन्ड ब्युटी — नामनाङ, गान्तोक'
                : 'Cutting Edge Hair & Beauty Menu'}
            </h2>
            <p className="text-base sm:text-lg text-stone-300">
              {language === 'ne'
                ? 'कपालको लम्बाइ र आवश्यकताअनुसार मूल्य तय हुने भएकाले प्रत्येक सेवाका लागि सिधै ह्वाट्सएपमा मूल्य सोध्न वा अपोइन्टमेन्ट लिन सक्नुहुन्छ।'
                : 'Custom hair treatments and bridal makeup in Gangtok are quoted transparently based on hair length and styling requirements. Tap any service to ask on WhatsApp.'}
            </p>
          </div>

          <a
            href={buildWhatsAppUrl(
              'Hi Shova, please share the service menu and appointment availability for Cutting Edge Hair & Beauty.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent('whatsapp_click', {
                category: 'conversion',
                label: 'salon_full_menu_whatsapp',
                business: 'cutting-edge',
              })
            }
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold text-sm transition-colors shrink-0 min-h-[44px]"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            <span>{language === 'ne' ? 'सैलुन मूल्य सोध्नुहोस्' : 'Ask Salon Prices on WhatsApp'}</span>
          </a>
        </div>

        {/* Clean Accessible Service List */}
        <div className="rounded-2xl border border-stone-800 bg-stone-950/70 divide-y divide-stone-800/90 overflow-hidden">
          {SALON_SERVICES.map((service) => {
            const name = language === 'ne' ? service.nameNe : service.name;
            const details = language === 'ne' ? service.detailsNe : service.details;
            const price = language === 'ne' ? service.priceNe : service.price;
            const waUrl = buildWhatsAppUrl(
              `Hi Shova, I would like to inquire about "${service.name}" at Cutting Edge Hair & Beauty, Namnang.`
            );

            return (
              <div
                key={service.id}
                className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-stone-900/50 transition-colors"
              >
                <div className="space-y-1 max-w-2xl">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-100">{name}</h3>
                  <p className="text-base text-stone-300">{details}</p>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pt-2 sm:pt-0">
                  <span className="text-base font-semibold text-amber-300 tabular-nums">
                    {price}
                  </span>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent('whatsapp_click', {
                        category: 'conversion',
                        label: `service_${service.id}`,
                        business: 'cutting-edge',
                      })
                    }
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-stone-700 hover:border-amber-400 bg-stone-900 hover:bg-stone-800 text-stone-100 text-sm font-semibold transition-colors min-h-[44px]"
                  >
                    <MessageCircle className="w-4 h-4 text-amber-400" aria-hidden="true" />
                    <span>{language === 'ne' ? 'सोध्नुहोस्' : 'Ask / Book'}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
