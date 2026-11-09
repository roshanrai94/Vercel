import React, { useState } from 'react';
import { Mail, CheckCircle2, Sparkles, Send, Calendar, Users, Award, AlertCircle, ArrowRight, RefreshCw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface SubscriberRecord {
  email: string;
  name: string;
  interest: string;
  subscribedAt: string;
}

export const NewsletterSignup: React.FC = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [selectedInterest, setSelectedInterest] = useState<'all' | 'mentorship' | 'events' | 'culinary'>('all');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isExistingSubscriber, setIsExistingSubscriber] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');

  const interests = [
    { id: 'all', label: 'All Updates & Insights' },
    { id: 'mentorship', label: 'Mentorship & Masterclasses' },
    { id: 'events', label: 'Business Summits & Events' },
    { id: 'culinary', label: 'Artisanal & Food Crafts' },
  ] as const;

  const validateEmail = (value: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value.trim());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const trimmedEmail = email.trim().toLowerCase();

    if (!trimmedEmail) {
      setErrorMessage('Please enter your email address.');
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      setErrorMessage('Please enter a valid email address (e.g., name@domain.com).');
      return;
    }

    setIsSubmitting(true);

    // Simulate realistic async dispatch & local persistence
    setTimeout(() => {
      try {
        const stored = localStorage.getItem('shova_subscribers_list');
        const subscribers: SubscriberRecord[] = stored ? JSON.parse(stored) : [];

        const existingIndex = subscribers.findIndex(
          (s) => s.email.toLowerCase() === trimmedEmail
        );

        if (existingIndex >= 0) {
          // Update existing preference
          subscribers[existingIndex].name = name.trim() || subscribers[existingIndex].name;
          subscribers[existingIndex].interest = selectedInterest;
          setIsExistingSubscriber(true);
        } else {
          // Add new subscriber
          subscribers.push({
            email: trimmedEmail,
            name: name.trim() || 'Valued Subscriber',
            interest: selectedInterest,
            subscribedAt: new Date().toISOString(),
          });
          setIsExistingSubscriber(false);
        }

        localStorage.setItem('shova_subscribers_list', JSON.stringify(subscribers));
      } catch {
        // Fallback gracefully if localStorage is disabled
      }

      setSubmittedEmail(trimmedEmail);
      setIsSuccess(true);
      setIsSubmitting(false);
    }, 700);
  };

  const handleReset = () => {
    setEmail('');
    setName('');
    setSelectedInterest('all');
    setErrorMessage(null);
    setIsSuccess(false);
    setIsExistingSubscriber(false);
  };

  return (
    <section id="newsletter" className="py-20 bg-stone-950 text-stone-100 relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-12 right-12 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="relative rounded-3xl bg-gradient-to-br from-stone-900 via-stone-900/95 to-amber-950/30 border border-amber-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden p-8 sm:p-12 lg:p-16">
          
          {/* Subtle top decorative ribbon */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600" />

          {!isSuccess ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Context & Value Proposition */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t.newsletter.badge}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-100 leading-tight">
                  {t.newsletter.heading}
                </h2>

                <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                  {t.newsletter.subheading}
                </p>

                {/* Benefits Bullet Grid */}
                <div className="pt-2 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 mt-0.5">
                      <Calendar className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-xs sm:text-sm text-stone-300">
                      {t.newsletter.earlyAccess}
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 mt-0.5">
                      <Users className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-xs sm:text-sm text-stone-300">
                      {t.newsletter.eventInvites}
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 mt-0.5">
                      <Award className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-xs sm:text-sm text-stone-300">
                      {t.newsletter.noSpam}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Subscription Form */}
              <div className="lg:col-span-6 bg-stone-950/80 p-6 sm:p-8 rounded-2xl border border-stone-800 shadow-xl backdrop-blur-sm">
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  
                  {/* Name field */}
                  <div>
                    <label htmlFor="subscriber-name" className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-2">
                      {t.newsletter.nameLabel}
                    </label>
                    <input
                      id="subscriber-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Roshni Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-700 text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all text-sm"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="subscriber-email" className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-2">
                      {t.newsletter.emailLabel} <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="subscriber-email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errorMessage) setErrorMessage(null);
                        }}
                        placeholder="you@domain.com"
                        className={`w-full pl-11 pr-4 py-3 rounded-xl bg-stone-900 border ${
                          errorMessage ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-stone-700 focus:border-amber-400 focus:ring-amber-400'
                        } text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-1 transition-all text-sm`}
                      />
                      <Mail className="w-5 h-5 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>

                    {/* Error message */}
                    {errorMessage && (
                      <div className="flex items-center gap-1.5 mt-2 text-xs text-rose-400">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}
                  </div>

                  {/* Program Focus Selection */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-2">
                      {t.newsletter.interestLabel}
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {interests.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setSelectedInterest(item.id)}
                          className={`text-left px-3 py-2 rounded-lg text-xs font-medium transition-all border ${
                            selectedInterest === item.id
                              ? 'bg-amber-500/20 border-amber-400 text-amber-200 shadow-sm'
                              : 'bg-stone-900 border-stone-800 text-stone-400 hover:border-stone-700 hover:text-stone-300'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-sm tracking-wide shadow-[0_4px_20px_rgba(245,158,11,0.3)] hover:shadow-[0_6px_25px_rgba(245,158,11,0.4)] transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin text-stone-950" />
                        <span>{t.newsletter.subscribing}</span>
                      </>
                    ) : (
                      <>
                        <span>{t.newsletter.subscribeBtn}</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-stone-500 text-center">
                    🔒 Your email is treated with respect and confidentiality. Unsubscribe at any time.
                  </p>
                </form>
              </div>

            </div>
          ) : (
            /* Thank-You Success State */
            <div className="py-8 text-center max-w-2xl mx-auto space-y-6">
              
              {/* Success badge icon */}
              <div className="w-20 h-20 rounded-full bg-amber-500/10 border-2 border-amber-400 text-amber-300 mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.25)] animate-bounce-short">
                <CheckCircle2 className="w-10 h-10 text-amber-400" />
              </div>

              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{isExistingSubscriber ? 'Subscription Preferences Updated' : 'Subscription Confirmed!'}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-amber-100">
                  {name ? `${t.newsletter.thankTitle.replace('!', '')}, ${name}!` : t.newsletter.thankTitle}
                </h3>

                <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                  {t.newsletter.thankMsg} (<span className="font-semibold text-amber-300">{submittedEmail}</span>).
                </p>
              </div>

              {/* What to expect card */}
              <div className="bg-stone-950/80 rounded-2xl p-5 border border-stone-800 text-left space-y-3 max-w-lg mx-auto">
                <h4 className="text-xs uppercase tracking-wider font-bold text-amber-200 flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  What to Expect Next
                </h4>
                <ul className="text-xs text-stone-300 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>An introductory overview of upcoming 2026 entrepreneurship dates.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>Early-bird application links prior to public announcement.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>Curated insights on Himalayan self-reliance and enterprise scaling.</span>
                  </li>
                </ul>
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-200 text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>{t.newsletter.subscribeAnother}</span>
                </button>
                <a
                  href="#contact"
                  className="px-6 py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/50 text-amber-300 text-xs font-semibold transition-all cursor-pointer"
                >
                  Need Immediate Mentorship? Message Directly &rarr;
                </a>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
