import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';

export const FAQ: React.FC = () => {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#0c0a09] border-b border-stone-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="space-y-3">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-amber-400">
            {language === 'ne' ? 'सामान्य प्रश्नहरू' : 'Frequently Asked Questions'}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-50">
            {language === 'ne'
              ? 'गान्तोक सैलुन, बुटिक र अचारसम्बन्धी प्रश्नोत्तर'
              : 'Helpful Answers Before You Visit or Order'}
          </h2>
        </div>

        <div className="divide-y divide-stone-800 border-y border-stone-800">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            const question = language === 'ne' ? item.questionNe : item.question;
            const answer = language === 'ne' ? item.answerNe : item.answer;
            const panelId = `faq-panel-${idx}`;
            const buttonId = `faq-button-${idx}`;

            return (
              <div key={item.question}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full py-5 flex items-center justify-between gap-4 text-left cursor-pointer group min-h-[56px]"
                  >
                    <span className="font-serif text-xl sm:text-2xl font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
                      {question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="pb-5 pr-8 text-base text-stone-300 leading-relaxed"
                >
                  <p>{answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
