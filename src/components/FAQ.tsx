import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/siteConfig';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-shell section-bg">
      <div className="site-container">
        <div className="max-w-4xl space-y-10">
          <div className="space-y-3">
            <p className="section-eyebrow">Frequently Asked Questions</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text)]">
              Helpful Answers Before You Visit or Order
            </h2>
          </div>

          <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
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
                      <span className="font-serif text-xl sm:text-2xl font-bold text-[var(--text)] group-hover:text-[var(--gold)] transition-colors">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[var(--gold)] shrink-0 transition-transform duration-200 ${
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
                    className="pb-6 pr-8 text-base text-[var(--text-muted)] leading-relaxed"
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
