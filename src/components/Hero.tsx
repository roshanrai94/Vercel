import React from 'react';
import { PhoneCall, MessageCircle, MapPin } from 'lucide-react';
import { OptimizedImage } from './OptimizedImage';
import { SITE_CONFIG, buildWhatsAppUrl } from '../data/siteConfig';
import { trackEvent } from '../utils/analytics';

export const Hero: React.FC = () => {
  const heroWhatsAppUrl = buildWhatsAppUrl(
    'Hi Shova, I would like to book an appointment or inquire about your businesses in Gangtok.'
  );

  const metrics = [
    { value: '20+', label: 'Years in Business' },
    { value: '3', label: 'Gangtok Enterprises' },
    { value: '50+', label: 'Skill Workshops' },
    { value: 'NCW', label: 'National Recognition' },
  ];

  return (
    <section id="home" className="section-shell section-bg relative overflow-hidden">
      <div className="site-container">
        {/* Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Core Identity & Conversion CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <p className="section-eyebrow inline-flex items-center gap-2">
              <MapPin className="w-4 h-4 shrink-0 text-[var(--gold)]" aria-hidden="true" />
              <span>Namnang, Gangtok, Sikkim · Entrepreneur &amp; Mentor</span>
            </p>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text)] leading-[1.12] tracking-[-0.015em]">
              Shova Rai — Master Stylist, Artisan &amp; Sikkim Women Entrepreneur
            </h1>

            <p className="text-lg sm:text-xl text-[var(--text-muted)] leading-relaxed max-w-2xl">
              Founder of Cutting Edge Hair &amp; Beauty, Blush Fashion Store, and Zayel’s Organic
              Pickles—bringing beauty, fashion, and organic Himalayan flavours to Gangtok for over
              20 years.
            </p>

            {/* Primary Conversion Buttons with subtle gold glow behind CTA */}
            <div className="relative pt-2">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-x-6 -top-4 -bottom-4 rounded-full blur-2xl"
                style={{
                  background:
                    'radial-gradient(ellipse at 25% 50%, rgba(212, 169, 79, 0.16) 0%, transparent 65%)',
                }}
              />

              <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
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
                  className="btn-whatsapp"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span>Book on WhatsApp</span>
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
                  className="btn-secondary"
                >
                  <PhoneCall className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span>Call Now · {SITE_CONFIG.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Priority Portrait Image with soft dark gradient overlay */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm rounded-[16px] overflow-hidden bg-[var(--surface)] border border-[var(--border)] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.75)]">
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
              {/* Dark overlay gradient >= 55% opacity at text area for guaranteed contrast */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to top, rgba(12, 10, 9, 0.85) 0%, rgba(12, 10, 9, 0.58) 28%, rgba(12, 10, 9, 0) 60%)',
                }}
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-serif text-xl font-bold text-[var(--text)]">
                  Mrs. Shova Rai
                </p>
                <p className="text-sm text-[var(--gold)] font-medium">
                  Namnang, Gangtok · Sikkim
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Verified Credentials Row Below Split */}
        <div className="mt-12 pt-8 border-t border-[var(--border)] grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item) => (
            <div key={item.label} className="space-y-1">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[var(--gold)] tabular-nums">
                {item.value}
              </div>
              <div className="text-sm sm:text-base text-[var(--text-muted)]">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
