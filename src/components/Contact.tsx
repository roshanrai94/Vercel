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
import { trackEvent } from '../utils/analytics';

export const Contact: React.FC = () => {
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
    <section id="contact" className="section-shell section-surface">
      <div className="site-container space-y-12">
        <div className="max-w-2xl space-y-3">
          <p className="section-eyebrow">Contact &amp; Location</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text)]">
            Visit Us in Namnang, Gangtok or Connect Directly
          </h2>
        </div>

        {/* Contact Details + Hours + Socials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Direct Contact Details */}
          <div className="lg:col-span-6 card-static bg-[var(--bg)] p-6 sm:p-8 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[var(--text)]">
              Direct Booking &amp; Contact
            </h3>

            <dl className="space-y-5 text-base">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[var(--gold)] shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <dt className="text-sm font-semibold text-[var(--text-muted)]">Address</dt>
                  <dd className="text-[var(--text)]">{SITE_CONFIG.addressFull}</dd>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <PhoneCall
                  className="w-5 h-5 text-[var(--gold)] shrink-0 mt-1"
                  aria-hidden="true"
                />
                <div>
                  <dt className="text-sm font-semibold text-[var(--text-muted)]">
                    Phone &amp; WhatsApp
                  </dt>
                  <dd className="flex flex-wrap items-center gap-3 mt-1.5">
                    <a
                      href={SITE_CONFIG.phoneHref}
                      onClick={() =>
                        trackEvent('call_click', {
                          category: 'conversion',
                          label: 'contact_phone_link',
                          business: 'general',
                        })
                      }
                      className="text-[var(--gold)] hover:text-[var(--gold-hover)] font-semibold underline underline-offset-4 tabular-nums"
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
                      className="btn-whatsapp !px-4 !text-sm"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>WhatsApp</span>
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-[var(--gold)] shrink-0 mt-1" aria-hidden="true" />
                <div className="min-w-0 flex-1">
                  <dt className="text-sm font-semibold text-[var(--text-muted)]">Email</dt>
                  <dd className="flex flex-wrap items-center gap-3 mt-1">
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-[var(--text)] hover:text-[var(--gold)] underline underline-offset-4 break-all transition-colors"
                    >
                      {SITE_CONFIG.email}
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      aria-label="Copy email address"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-[12px] min-h-[48px] bg-[var(--surface-2)] border border-[var(--border)] text-xs font-semibold text-[var(--text)] hover:border-[var(--gold)] hover:text-[var(--gold)] cursor-pointer transition-colors"
                    >
                      {copiedEmail ? (
                        <>
                          <Check
                            className="w-4 h-4 text-[var(--success)]"
                            aria-hidden="true"
                          />
                          <span className="text-[var(--success)]">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" aria-hidden="true" />
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
          <div className="lg:col-span-6 card-static bg-[var(--bg)] p-6 sm:p-8 space-y-6">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[var(--text)] flex items-center gap-2">
                <Clock className="w-5 h-5 text-[var(--gold)]" aria-hidden="true" />
                <span>Opening Hours</span>
              </h3>
              <ul className="space-y-3 text-base">
                {BUSINESSES.map((biz) => (
                  <li
                    key={biz.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-[var(--border)] last:border-b-0 last:pb-0"
                  >
                    <span className="font-medium text-[var(--text)]">{biz.name}</span>
                    <span className="text-[var(--text-muted)] text-sm sm:text-base">
                      {biz.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 pt-3 border-t border-[var(--border)]">
              <h3 className="font-serif text-xl font-bold text-[var(--text)]">
                Follow on Social Media
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={SITE_CONFIG.socials.cuttingEdgeInstagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-2 px-4 py-3 min-h-[48px] rounded-[12px] bg-[var(--surface-2)] border border-[var(--border)] hover:border-[var(--gold)] text-sm text-[var(--text)] hover:text-[var(--gold)] transition-colors"
                >
                  <span className="flex items-center gap-2 min-w-0 truncate">
                    <Instagram className="w-4 h-4 text-[var(--gold)] shrink-0" aria-hidden="true" />
                    <span className="truncate">Instagram (Cutting Edge)</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </a>

                <a
                  href={SITE_CONFIG.socials.blushInstagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-2 px-4 py-3 min-h-[48px] rounded-[12px] bg-[var(--surface-2)] border border-[var(--border)] hover:border-[var(--gold)] text-sm text-[var(--text)] hover:text-[var(--gold)] transition-colors"
                >
                  <span className="flex items-center gap-2 min-w-0 truncate">
                    <Instagram className="w-4 h-4 text-[var(--gold)] shrink-0" aria-hidden="true" />
                    <span className="truncate">Instagram (Blush)</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </a>

                <a
                  href={SITE_CONFIG.socials.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-2 px-4 py-3 min-h-[48px] rounded-[12px] bg-[var(--surface-2)] border border-[var(--border)] hover:border-[var(--gold)] text-sm text-[var(--text)] hover:text-[var(--gold)] transition-colors"
                >
                  <span className="flex items-center gap-2 min-w-0 truncate">
                    <Facebook className="w-4 h-4 text-[var(--gold)] shrink-0" aria-hidden="true" />
                    <span className="truncate">Facebook (Shova Rai)</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </a>

                <a
                  href={SITE_CONFIG.socials.youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-2 px-4 py-3 min-h-[48px] rounded-[12px] bg-[var(--surface-2)] border border-[var(--border)] hover:border-[var(--gold)] text-sm text-[var(--text)] hover:text-[var(--gold)] transition-colors"
                >
                  <span className="flex items-center gap-2 min-w-0 truncate">
                    <Youtube className="w-4 h-4 text-[var(--gold)] shrink-0" aria-hidden="true" />
                    <span className="truncate">YouTube (@shovarai963)</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Single Embedded Google Map for Namnang, Gangtok Hub */}
        <div className="space-y-6">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text)]">
            Find Us in Namnang, Gangtok
          </h3>

          <article className="card-static bg-[var(--bg)] overflow-hidden">
            <div className="w-full h-[300px] sm:h-[380px] bg-[var(--surface-2)] border-b border-[var(--border)]">
              <iframe
                title="Shova Rai Enterprises Google Map — Namnang Road, Gangtok, Sikkim"
                src={SITE_CONFIG.mapEmbedUrl}
                width="1200"
                height="380"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              />
            </div>
            <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-[var(--text)]">
                  Cutting Edge Hair &amp; Beauty · Blush · Zayel&apos;s Pickles
                </h4>
                <p className="text-sm sm:text-base text-[var(--text-muted)]">
                  {SITE_CONFIG.addressFull}
                </p>
              </div>
              <a
                href={SITE_CONFIG.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent('directions_click', {
                    category: 'engagement',
                    label: 'contact_map_namnang',
                    business: 'general',
                  })
                }
                className="btn-secondary shrink-0 !text-sm"
              >
                <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Get Directions</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
