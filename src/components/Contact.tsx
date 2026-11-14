import React, { useState } from 'react';
import {
  MapPin,
  PhoneCall,
  Mail,
  MessageCircle,
  Clock,
  ExternalLink,
  Copy,
  Check,
  Instagram,
  Facebook,
  Youtube,
} from 'lucide-react';
import { BUSINESSES, SITE_CONFIG, buildWhatsAppUrl } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import { trackEvent } from '../utils/analytics';

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const contactWaUrl = buildWhatsAppUrl(
    'Hi Shova, I would like to book an appointment or ask a question.'
  );

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#12100e] border-b border-stone-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-amber-400">
            {language === 'ne' ? 'सम्पर्क र स्थान' : 'Contact & Locations'}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-50">
            {language === 'ne'
              ? 'नामनाङ, गान्तोकमा भेट्नुहोस् वा सिधै सम्पर्क गर्नुहोस्'
              : 'Visit Us in Namnang, Gangtok or Connect Directly'}
          </h2>
        </div>

        {/* Contact Details + Hours + Socials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Direct Contact Details */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-stone-950/90 border border-stone-800 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-stone-100">
              {language === 'ne' ? 'प्रत्यक्ष सम्पर्क विवरण' : 'Direct Booking & Contact'}
            </h3>

            <dl className="space-y-5 text-base">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <dt className="text-sm font-semibold text-stone-400">
                    {language === 'ne' ? 'ठेगाना' : 'Address'}
                  </dt>
                  <dd className="text-stone-100">{SITE_CONFIG.addressFull}</dd>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <PhoneCall className="w-5 h-5 text-amber-400 shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <dt className="text-sm font-semibold text-stone-400">
                    {language === 'ne' ? 'फोन र ह्वाट्सएप' : 'Phone & WhatsApp'}
                  </dt>
                  <dd className="flex flex-wrap items-center gap-3 mt-1">
                    <a
                      href={SITE_CONFIG.phoneHref}
                      onClick={() =>
                        trackEvent('call_click', {
                          category: 'conversion',
                          label: 'contact_phone_link',
                          business: 'general',
                        })
                      }
                      className="text-amber-300 hover:text-amber-200 font-semibold underline underline-offset-4 tabular-nums"
                    >
                      {SITE_CONFIG.phoneDisplay}
                    </a>
                    <a
                      href={contactWaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackEvent('whatsapp_click', {
                          category: 'conversion',
                          label: 'contact_whatsapp_cta',
                          business: 'general',
                        })
                      }
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold text-sm transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" aria-hidden="true" />
                      <span>WhatsApp</span>
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-1" aria-hidden="true" />
                <div className="min-w-0 flex-1">
                  <dt className="text-sm font-semibold text-stone-400">
                    {language === 'ne' ? 'इमेल' : 'Email'}
                  </dt>
                  <dd className="flex flex-wrap items-center gap-2 mt-0.5">
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-stone-100 hover:text-amber-300 underline underline-offset-4 break-all"
                    >
                      {SITE_CONFIG.email}
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      aria-label="Copy email address"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded border border-stone-700 text-xs text-stone-300 hover:text-amber-300 cursor-pointer"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-amber-400" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          {/* Opening Hours + Social Channels */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-stone-950/90 border border-stone-800 space-y-6">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-stone-100 flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-400" aria-hidden="true" />
                <span>{language === 'ne' ? 'सञ्चालन समय' : 'Opening Hours'}</span>
              </h3>
              <ul className="space-y-2.5 text-base">
                {BUSINESSES.map((biz) => (
                  <li
                    key={biz.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2.5 border-b border-stone-800/80 last:border-b-0 last:pb-0"
                  >
                    <span className="font-medium text-stone-100">
                      {language === 'ne' ? biz.nameNe : biz.name}
                    </span>
                    <span className="text-stone-300 text-sm sm:text-base">
                      {language === 'ne' ? biz.hoursNe : biz.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 pt-2 border-t border-stone-800">
              <h3 className="font-serif text-xl font-bold text-stone-100">
                {language === 'ne' ? 'सामाजिक सञ्जाल' : 'Follow on Social Media'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={SITE_CONFIG.socials.cuttingEdgeInstagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-2 p-3 rounded-lg bg-stone-900 border border-stone-800 hover:border-amber-400/60 text-sm text-stone-200 hover:text-amber-300 transition-colors"
                >
                  <span className="flex items-center gap-2 min-w-0 truncate">
                    <Instagram className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
                    <span className="truncate">Instagram (Cutting Edge)</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </a>

                <a
                  href={SITE_CONFIG.socials.blushInstagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-2 p-3 rounded-lg bg-stone-900 border border-stone-800 hover:border-amber-400/60 text-sm text-stone-200 hover:text-amber-300 transition-colors"
                >
                  <span className="flex items-center gap-2 min-w-0 truncate">
                    <Instagram className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
                    <span className="truncate">Instagram (Blush)</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </a>

                <a
                  href={SITE_CONFIG.socials.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-2 p-3 rounded-lg bg-stone-900 border border-stone-800 hover:border-amber-400/60 text-sm text-stone-200 hover:text-amber-300 transition-colors"
                >
                  <span className="flex items-center gap-2 min-w-0 truncate">
                    <Facebook className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
                    <span className="truncate">Facebook (Shova Rai)</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </a>

                <a
                  href={SITE_CONFIG.socials.youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-2 p-3 rounded-lg bg-stone-900 border border-stone-800 hover:border-amber-400/60 text-sm text-stone-200 hover:text-amber-300 transition-colors"
                >
                  <span className="flex items-center gap-2 min-w-0 truncate">
                    <Youtube className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
                    <span className="truncate">YouTube (@shovarai963)</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Google Map for Each Business Location (Lazy-loaded for mobile speed) */}
        <div className="space-y-6">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100">
            {language === 'ne' ? 'प्रत्येक व्यवसायको गुगल नक्सा' : 'Map Locations in Namnang, Gangtok'}
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {BUSINESSES.map((biz) => {
              const name = language === 'ne' ? biz.nameNe : biz.name;
              const addr = language === 'ne' ? biz.addressNe : biz.address;
              return (
                <article
                  key={biz.id}
                  className="rounded-2xl bg-stone-950/90 border border-stone-800 overflow-hidden flex flex-col"
                >
                  <div className="aspect-[16/10] w-full bg-stone-900 border-b border-stone-800">
                    <iframe
                      title={`${name} Google Map — Namnang, Gangtok`}
                      src={biz.mapEmbedUrl}
                      width="400"
                      height="250"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full border-0"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                    <div>
                      <h4 className="font-serif text-xl font-bold text-stone-100">{name}</h4>
                      <p className="text-sm text-stone-400 mt-1">{addr}</p>
                    </div>
                    <a
                      href={biz.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackEvent('directions_click', {
                          category: 'engagement',
                          label: `contact_map_${biz.id}`,
                          business: biz.id,
                        })
                      }
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-stone-700 hover:border-amber-400 text-sm font-semibold text-stone-100 hover:text-amber-300 transition-colors min-h-[44px]"
                    >
                      <MapPin className="w-4 h-4 text-amber-400" aria-hidden="true" />
                      <span>
                        {language === 'ne'
                          ? `${name} — दिशा हेर्नुहोस्`
                          : `Get Directions to ${biz.name}`}
                      </span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
