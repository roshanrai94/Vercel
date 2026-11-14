import React from 'react';
import { Award, ExternalLink, Newspaper } from 'lucide-react';
import { AWARDS_AND_PRESS } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';

export const AwardsPress: React.FC = () => {
  const { language } = useLanguage();

  // Hide section completely if no awards/press entries exist
  if (!AWARDS_AND_PRESS || AWARDS_AND_PRESS.length === 0) {
    return null;
  }

  return (
    <section id="awards" className="section-shell section-surface">
      <div className="site-container space-y-12">
        <div className="max-w-2xl space-y-3">
          <p className="section-eyebrow">
            {language === 'ne' ? 'सम्मान र मिडिया कभरेज' : 'Awards & Press'}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text)]">
            {language === 'ne'
              ? 'राष्ट्रिय कदर, सम्मान र समाचार फिचरहरू'
              : 'National Honors & Media Features'}
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-muted)]">
            {language === 'ne'
              ? 'राष्ट्रिय महिला आयोग, भारत सरकारका पोर्टल, दूरदर्शन र पोडकास्टमा प्रकाशित आधिकारिक सम्मान र अन्तर्वार्ताहरू।'
              : 'Verified recognitions and interviews chronicling Shova Rai’s entrepreneurial journey in Sikkim.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {AWARDS_AND_PRESS.map((item) => {
            const title = language === 'ne' ? item.titleNe : item.title;
            const source = language === 'ne' ? item.sourceOrLocationNe : item.sourceOrLocation;
            const tag = language === 'ne' ? item.yearOrTagNe : item.yearOrTag;
            const summary = language === 'ne' ? item.summaryNe : item.summary;

            return (
              <article
                key={item.id}
                className="card-elevated card-elevated--raised p-6 flex flex-col justify-between gap-5"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[var(--gold)]">
                    {item.kind === 'award' ? (
                      <Award className="w-4 h-4 shrink-0" aria-hidden="true" />
                    ) : (
                      <Newspaper className="w-4 h-4 shrink-0" aria-hidden="true" />
                    )}
                    <span>{tag}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[var(--text-muted)]">{source}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[var(--text)] leading-snug">
                    {title}
                  </h3>

                  <p className="text-base text-[var(--text-muted)] leading-relaxed">{summary}</p>
                </div>

                {item.url && (
                  <div className="pt-4 border-t border-[var(--border)]">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--gold)] hover:text-[var(--gold-hover)] underline underline-offset-4 transition-colors"
                    >
                      <span>
                        {item.kind === 'award'
                          ? language === 'ne'
                            ? 'आधिकारिक समाचार पढ्नुहोस्'
                            : 'Read official report'
                          : language === 'ne'
                            ? 'पूरा अन्तर्वार्ता हेर्नुहोस्'
                            : `View feature on ${source.split('·')[0].trim()}`}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    </a>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
