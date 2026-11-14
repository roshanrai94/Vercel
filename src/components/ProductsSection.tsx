import React from 'react';
import { MessageCircle } from 'lucide-react';
import { PICKLE_PRODUCTS, buildWhatsAppUrl } from '../data/siteConfig';
import { OptimizedImage } from './OptimizedImage';
import { useLanguage } from '../context/LanguageContext';
import { trackEvent } from '../utils/analytics';

export const ProductsSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="products" className="py-16 sm:py-24 bg-[#0c0a09] border-b border-stone-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-amber-400">
            {language === 'ne' ? 'अ टेस्ट अफ सिक्किम · जायल्स अचार' : "Zayel's Organic Pickles"}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-50">
            {language === 'ne'
              ? 'सिक्किमका प्राङ्गारिक र मौलिक घरेलु अचारहरू'
              : 'Small-Batch Organic Pickles from Sikkim'}
          </h2>
          <p className="text-base sm:text-lg text-stone-300">
            {language === 'ne'
              ? 'FSSAI र UDYAM दर्ता भएको, कुनै रासायनिक संरक्षक बिना किसानबाट सिधै सङ्कलित उत्पादन। मनपर्ने स्वाद सिधै ह्वाट्सएपमा अर्डर गर्नुहोस्।'
              : 'FSSAI food safety certified and UDYAM registered. Made in Gangtok using farm-fresh Himalayan produce without synthetic preservatives.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PICKLE_PRODUCTS.map((product) => {
            const name = language === 'ne' ? product.nameNe : product.name;
            const description = language === 'ne' ? product.descriptionNe : product.description;
            const badge = language === 'ne' ? product.badgeNe : product.badge;
            const priceOrSize = language === 'ne' ? product.priceOrSizeNe : product.priceOrSize;
            const orderUrl = buildWhatsAppUrl(
              `Hi Shova, I would like to order "${product.name}" from Zayel's Organic Pickles. Please share jar sizes and pricing.`
            );

            return (
              <article
                key={product.id}
                className="flex flex-col rounded-2xl bg-stone-900/70 border border-stone-800 overflow-hidden"
              >
                {product.imageFallback && (
                  <div className="aspect-[4/3] w-full overflow-hidden bg-stone-950 border-b border-stone-800">
                    <OptimizedImage
                      webpSrc={product.imageWebp}
                      fallbackSrc={product.imageFallback}
                      alt={product.imageAlt}
                      width={960}
                      height={917}
                      imgClassName="w-full h-full object-cover"
                      fallbackTitle={name}
                    />
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col justify-between gap-5">
                  <div className="space-y-2.5">
                    <p className="text-xs font-medium text-amber-400">
                      {badge} <span aria-hidden="true">·</span> {priceOrSize}
                    </p>
                    <h3 className="font-serif text-2xl font-bold text-stone-50">{name}</h3>
                    <p className="text-base text-stone-300 leading-relaxed">{description}</p>
                  </div>

                  <a
                    href={orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent('whatsapp_click', {
                        category: 'conversion',
                        label: `order_pickle_${product.id}`,
                        business: 'zayels',
                      })
                    }
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold text-sm transition-colors min-h-[44px]"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>{language === 'ne' ? 'ह्वाट्सएपमा अर्डर गर्नुहोस्' : 'Order on WhatsApp'}</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
