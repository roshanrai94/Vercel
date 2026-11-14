import React from 'react';
import { MessageCircle } from 'lucide-react';
import { PICKLE_PRODUCTS, buildWhatsAppUrl } from '../data/siteConfig';
import { OptimizedImage } from './OptimizedImage';
import { trackEvent } from '../utils/analytics';

export const ProductsSection: React.FC = () => {
  return (
    <section id="products" className="section-shell section-bg">
      <div className="site-container space-y-12">
        <div className="max-w-2xl space-y-3">
          <p className="section-eyebrow">Zayel&apos;s Organic Pickles</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text)]">
            Small-Batch Organic Pickles from Sikkim
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-muted)]">
            FSSAI food safety certified and UDYAM registered. Made in Gangtok using farm-fresh
            Himalayan produce without synthetic preservatives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PICKLE_PRODUCTS.map((product) => {
            const orderUrl = buildWhatsAppUrl(
              `Hi Shova, I would like to order "${product.name}" from Zayel's Organic Pickles. Please share jar sizes and pricing.`
            );

            return (
              <article
                key={product.id}
                className="card-elevated flex flex-col overflow-hidden"
                style={{ borderTop: '3px solid var(--zayel)' }}
              >
                {product.imageFallback && (
                  <div className="aspect-[4/3] w-full overflow-hidden bg-[var(--bg)] border-b border-[var(--border)]">
                    <OptimizedImage
                      webpSrc={product.imageWebp}
                      fallbackSrc={product.imageFallback}
                      alt={product.imageAlt}
                      width={960}
                      height={917}
                      imgClassName="w-full h-full object-cover"
                      fallbackTitle={product.name}
                    />
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col justify-between gap-5">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className="inline-flex items-center px-2.5 py-1 rounded-[8px] text-xs font-semibold"
                        style={{
                          backgroundColor: 'var(--zayel-soft)',
                          color: 'var(--zayel)',
                        }}
                      >
                        {product.badge}
                      </span>
                      <span className="text-xs font-medium text-[var(--text-muted)]">
                        {product.priceOrSize}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[var(--text)]">
                      {product.name}
                    </h3>
                    <p className="text-base text-[var(--text-muted)] leading-relaxed">
                      {product.description}
                    </p>
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
                    className="btn-whatsapp w-full"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Order on WhatsApp</span>
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
