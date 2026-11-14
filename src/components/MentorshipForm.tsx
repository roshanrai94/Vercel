import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, MessageCircle, Send } from 'lucide-react';
import { SITE_CONFIG, buildWhatsAppUrl } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import { trackEvent } from '../utils/analytics';

interface FormState {
  name: string;
  phone: string;
  business: string;
  message: string;
  honeypot: string;
}

export const MentorshipForm: React.FC = () => {
  const { language } = useLanguage();
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    business: 'Cutting Edge Hair & Beauty',
    message: '',
    honeypot: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [serverNote, setServerNote] = useState<string>('');

  const isPlaceholderFormspree = SITE_CONFIG.formspreeEndpoint.includes('[YOUR_FORMSPREE_FORM_ID]');

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!form.name.trim() || form.name.trim().length < 2) {
      nextErrors.name =
        language === 'ne' ? 'कृपया आफ्नो पूरा नाम लेख्नुहोस्।' : 'Please enter your full name.';
    }

    const digits = form.phone.replace(/\D/g, '');
    if (digits.length < 10) {
      nextErrors.phone =
        language === 'ne'
          ? 'कृपया कम्तीमा १० अंकको मान्य फोन वा ह्वाट्सएप नम्बर लेख्नुहोस्।'
          : 'Please enter a valid 10-digit phone or WhatsApp number.';
    }

    if (!form.message.trim() || form.message.trim().length < 10) {
      nextErrors.message =
        language === 'ne'
          ? 'कृपया कम्तीमा १० अक्षरको सन्देश लेख्नुहोस्।'
          : 'Please enter a brief message (at least 10 characters).';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot check: silently pretend success for bots
    if (form.honeypot.trim() !== '') {
      setStatus('success');
      return;
    }

    if (!validate()) return;

    setStatus('submitting');
    setServerNote('');

    trackEvent('form_submit', {
      category: 'conversion',
      label: `enquiry_${form.business.toLowerCase().replace(/\s+/g, '_')}`,
      business: form.business,
    });

    // If Formspree placeholder has not been replaced yet, show friendly confirmation with instant WhatsApp handoff
    if (isPlaceholderFormspree) {
      setStatus('success');
      setServerNote(
        language === 'ne'
          ? 'सन्देश तयार भयो। छिटो जवाफको लागि तलको ह्वाट्सएप बटन वा इमेल प्रयोग गर्न सक्नुहुन्छ।'
          : 'Your enquiry is ready. For fastest response before Formspree is connected, tap Send via WhatsApp below.'
      );
      return;
    }

    try {
      const response = await fetch(SITE_CONFIG.formspreeEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          business: form.business,
          message: form.message.trim(),
          _subject: `New Enquiry on shovarai.in — ${form.business}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setStatus('success');
      setForm({
        name: '',
        phone: '',
        business: 'Cutting Edge Hair & Beauty',
        message: '',
        honeypot: '',
      });
    } catch {
      setStatus('error');
      setServerNote(
        language === 'ne'
          ? 'फारम पठाउन समस्या भयो। कृपया ह्वाट्सएप वा फोनमार्फत सिधै सम्पर्क गर्नुहोस्।'
          : 'Could not send form automatically. Please reach out directly via WhatsApp or phone.'
      );
    }
  };

  const prefilledFollowUpWa = buildWhatsAppUrl(
    `Hi Shova, I just sent an enquiry about ${form.business}. Name: ${form.name || '[Your Name]'}, Phone: ${
      form.phone || '[Phone]'
    }. Message: ${form.message}`
  );

  return (
    <section id="mentorship" className="py-16 sm:py-24 bg-[#12100e] border-b border-stone-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Mentorship & Collaboration Narrative */}
          <div className="lg:col-span-5 space-y-5">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-amber-400">
              {language === 'ne' ? 'परामर्श र सहकार्य' : 'Mentorship & Collaborate With Me'}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-50">
              {language === 'ne'
                ? 'सीप कार्यशाला, महिला समूह र व्यावसायिक सहकार्य'
                : 'Workshops, SHG Training & Business Collaborations'}
            </h2>
            <p className="text-base sm:text-lg text-stone-300 leading-relaxed">
              {language === 'ne'
                ? 'शोभा राईले सिक्किमभरिका महिला स्वयं सहायता समूह (SHGs), युवा र संस्थाहरूका लागि बेकिङ, हेयर स्टाइलिङ, ब्लक प्रिन्टिङ र खाद्य प्रशोधन तालिम सञ्चालन गर्नुहुन्छ।'
                : 'Shova Rai partners with women’s Self-Help Groups (SHGs), welfare organizations, colleges, and aspiring founders across Sikkim for practical skill workshops in salon trades, baking, FSSAI food preservation, and traditional block printing.'}
            </p>
            <ul className="space-y-2.5 text-base text-stone-200 pt-2">
              <li>
                <span className="text-amber-400 font-semibold">·</span>{' '}
                {language === 'ne'
                  ? 'सैलुन र दुलही मेकअप अपोइन्टमेन्ट'
                  : 'Salon bookings & bridal consultations in Gangtok'}
              </li>
              <li>
                <span className="text-amber-400 font-semibold">·</span>{' '}
                {language === 'ne'
                  ? 'जायल्स अर्गानिक अचार थोक वा खुद्रा अर्डर'
                  : "Retail & bulk supply of Zayel's Organic Pickles"}
              </li>
              <li>
                <span className="text-amber-400 font-semibold">·</span>{' '}
                {language === 'ne'
                  ? 'अतिथि वक्ता र सामुदायिक तालिम सत्र'
                  : 'Vocational workshops & speaking engagements'}
              </li>
            </ul>
          </div>

          {/* Right Column: Accessible Validated Enquiry Form */}
          <div className="lg:col-span-7 bg-stone-950/90 border border-stone-800 rounded-2xl p-6 sm:p-8">
            {status === 'success' ? (
              <div className="space-y-4 py-6" role="status" aria-live="polite">
                <div className="flex items-center gap-3 text-amber-300">
                  <CheckCircle2 className="w-7 h-7 shrink-0" aria-hidden="true" />
                  <h3 className="font-serif text-2xl font-bold text-stone-50">
                    {language === 'ne' ? 'धन्यवाद! सन्देश प्राप्त भयो' : 'Thank You — Enquiry Received'}
                  </h3>
                </div>
                <p className="text-base text-stone-300 leading-relaxed">
                  {serverNote ||
                    (language === 'ne'
                      ? 'तपाईंको सन्देश पठाइएको छ। शोभा राईले छिट्टै सम्पर्क गर्नुहुनेछ।'
                      : 'Thank you for reaching out. Shova Rai will respond to your enquiry shortly.')}
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={prefilledFollowUpWa}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent('whatsapp_click', {
                        category: 'conversion',
                        label: 'post_form_whatsapp',
                        business: form.business,
                      })
                    }
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold text-sm transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    <span>{language === 'ne' ? 'ह्वाट्सएपमा पठाउनुहोस्' : 'Send via WhatsApp'}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle');
                      setForm({
                        name: '',
                        phone: '',
                        business: 'Cutting Edge Hair & Beauty',
                        message: '',
                        honeypot: '',
                      });
                    }}
                    className="px-4 py-3 rounded-lg border border-stone-700 text-stone-200 hover:text-amber-300 text-sm font-medium cursor-pointer"
                  >
                    {language === 'ne' ? 'अर्को सन्देश पठाउनुहोस्' : 'Send Another Enquiry'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Spam Honeypot Field (invisible to humans) */}
                <div className="sr-only" aria-hidden="true">
                  <label htmlFor="website_url">Leave this field blank</label>
                  <input
                    id="website_url"
                    name="_gotcha"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.honeypot}
                    onChange={(e) => setForm({ ...form, honeypot: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="enquiry-name"
                      className="block text-sm font-medium text-stone-200 mb-1.5"
                    >
                      {language === 'ne' ? 'पूरा नाम *' : 'Full Name *'}
                    </label>
                    <input
                      id="enquiry-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder={language === 'ne' ? 'तपाईंको नाम' : 'Enter your name'}
                      value={form.name}
                      onChange={(e) => {
                        setForm({ ...form, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      aria-invalid={Boolean(errors.name)}
                      className="w-full px-4 py-3 rounded-lg bg-stone-900 border border-stone-700 text-base text-stone-100 placeholder:text-stone-500 focus:border-amber-400"
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-sm text-rose-400" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-phone"
                      className="block text-sm font-medium text-stone-200 mb-1.5"
                    >
                      {language === 'ne' ? 'फोन / ह्वाट्सएप नम्बर *' : 'Phone / WhatsApp *'}
                    </label>
                    <input
                      id="enquiry-phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="+91 98XXXXXXXX"
                      value={form.phone}
                      onChange={(e) => {
                        setForm({ ...form, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      aria-invalid={Boolean(errors.phone)}
                      className="w-full px-4 py-3 rounded-lg bg-stone-900 border border-stone-700 text-base text-stone-100 placeholder:text-stone-500 focus:border-amber-400"
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-sm text-rose-400" role="alert">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="enquiry-business"
                    className="block text-sm font-medium text-stone-200 mb-1.5"
                  >
                    {language === 'ne' ? 'सम्बन्धित व्यवसाय वा विषय *' : 'Business / Interest *'}
                  </label>
                  <select
                    id="enquiry-business"
                    name="business"
                    value={form.business}
                    onChange={(e) => setForm({ ...form, business: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-stone-900 border border-stone-700 text-base text-stone-100 focus:border-amber-400"
                  >
                    <option value="Cutting Edge Hair & Beauty">
                      Cutting Edge Hair &amp; Beauty (Salon &amp; Bridal)
                    </option>
                    <option value="Blush Fashion Store">Blush Fashion Store (Boutique)</option>
                    <option value="Zayel's Organic Pickles">
                      Zayel&apos;s Organic Pickles (Orders &amp; Stock)
                    </option>
                    <option value="Mentorship & SHG Workshop">
                      Mentorship, Workshops &amp; Collaboration
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="enquiry-message"
                    className="block text-sm font-medium text-stone-200 mb-1.5"
                  >
                    {language === 'ne' ? 'तपाईंको सन्देश *' : 'Message *'}
                  </label>
                  <textarea
                    id="enquiry-message"
                    name="message"
                    rows={4}
                    required
                    placeholder={
                      language === 'ne'
                        ? 'मिति, सेवा वा सहकार्यबारे जानकारी लेख्नुहोस्...'
                        : 'Share your preferred date, service, pickle order, or collaboration idea...'
                    }
                    value={form.message}
                    onChange={(e) => {
                      setForm({ ...form, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    aria-invalid={Boolean(errors.message)}
                    className="w-full px-4 py-3 rounded-lg bg-stone-900 border border-stone-700 text-base text-stone-100 placeholder:text-stone-500 focus:border-amber-400"
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-sm text-rose-400" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                {status === 'error' && serverNote && (
                  <div
                    role="alert"
                    className="p-3.5 rounded-lg bg-rose-950/60 border border-rose-500/40 text-sm text-rose-200 flex items-start gap-2"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{serverNote}</span>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-amber-400 hover:bg-amber-300 disabled:opacity-60 text-stone-950 font-semibold text-base transition-colors cursor-pointer min-h-[48px]"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    <span>
                      {status === 'submitting'
                        ? language === 'ne'
                          ? 'पठाइँदैछ...'
                          : 'Sending...'
                        : language === 'ne'
                        ? 'सन्देश पठाउनुहोस्'
                        : 'Send Enquiry'}
                    </span>
                  </button>

                  <p className="text-xs text-stone-400">
                    {language === 'ne'
                      ? 'प्रत्यक्ष जवाफको लागि ह्वाट्सएप वा फोन प्रयोग गर्नुहोस्।'
                      : `Or email ${SITE_CONFIG.email}`}
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
