import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SALON_SERVICES, buildWhatsAppUrl } from '../data/siteConfig';
import { trackEvent } from '../utils/analytics';

export const ServicesPriceList: React.FC = () => {
  return (
    <section id="services" className="section-shell section-surface">
      <div className="site-container space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <p className="section-eyebrow">Salon Services &amp; Price List</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text)]">
              Cutting Edge Hair &amp; Beauty Menu
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-muted)]">
              Custom hair treatments and bridal makeup in Gangtok are quoted transparently based on
              hair length and styling requirements. Tap any service to ask on WhatsApp.
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
            className="btn-whatsapp shrink-0"
          >
            <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Ask Salon Prices on WhatsApp</span>
          </a>
        </div>

        {/* Clean Accessible Service List */}
        <div
          className="card-static bg-[var(--bg)] divide-y divide-[var(--border)] overflow-hidden"
          style={{ borderTop: '3px solid var(--salon)' }}
        >
          {SALON_SERVICES.map((service) => {
            const waUrl = buildWhatsAppUrl(
              `Hi Shova, I would like to inquire about "${service.name}" at Cutting Edge Hair & Beauty, Namnang.`
            );

            return (
              <div
                key={service.id}
                className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[var(--surface-2)] transition-colors"
              >
                <div className="space-y-1 max-w-2xl">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[var(--text)]">
                    {service.name}
                  </h3>
                  <p className="text-base text-[var(--text-muted)]">{service.details}</p>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pt-2 sm:pt-0">
                  <span className="text-base font-semibold text-[var(--gold)] tabular-nums">
                    {service.price}
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
                    className="btn-secondary !px-4 !text-sm"
                  >
                    <MessageCircle
                      className="w-4 h-4 shrink-0 text-[var(--gold)]"
                      aria-hidden="true"
                    />
                    <span>Ask / Book</span>
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
