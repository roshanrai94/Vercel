import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "Who is Shova Rai?",
    answer: "Mrs. Shova Rai is a premier entrepreneur, master artisan, hairstylist, certified baker, and community mentor based in Gangtok, Sikkim. With more than two decades of independent enterprise experience, she is widely celebrated for championing women's economic self-reliance, Himalayan culinary heritage, and sustainable craft development across Sikkim."
  },
  {
    question: "What businesses has Shova Rai founded in Sikkim?",
    answer: "Shova Rai has founded and operates multiple thriving enterprises in Namnang, Gangtok: Cutting Edge Hair & Beauty (established 2007, an acclaimed modern salon and bridal styling studio), Blush Fashion Store (curated contemporary and traditional Sikkimese apparel), A Taste of Sikkim – Zayel's Pickle (FSSAI-certified, organic artisanal Himalayan preserves including Dalle Khorsani), and traditional Himalayan Block Printing & Textile Craft workshops."
  },
  {
    question: "What national and state awards has Shova Rai received?",
    answer: "Shova Rai has been honored by the National Commission for Women (NCW) in New Delhi, felicitated by Union Minister Smt. Shobha Karandlaje for grassroots women's empowerment, awarded by the Sikkim Gyan Manch, and recognized as an academic resource person and mentor at Sikkim University."
  },
  {
    question: "How does Shova Rai support local Self-Help Groups (SHGs) and youth in Sikkim?",
    answer: "Through over 50 vocational training programs and livelihood workshops, Shova Rai trains rural women, SHGs, and differently-abled individuals in commercial baking, hair styling, hygienic food preservation, and block printing, helping them attain financial independence."
  },
  {
    question: "Where are Shova Rai's enterprises located in Gangtok?",
    answer: "Her core establishments, including Cutting Edge Hair & Beauty and Blush Fashion Store, are centrally located at Namnang, Gangtok, Sikkim, 737101, India."
  },
  {
    question: "How can I get in touch with Shova Rai for styling, classes, or collaborations?",
    answer: "You can reach out directly via WhatsApp at +91 7431833009, email cuttingedge723@gmail.com, or send a direct inquiry through the contact form on this official website."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-stone-950 text-stone-100 relative overflow-hidden border-t border-stone-800/60">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>KNOWLEDGE BASE &amp; QUICK FACTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-100">
            Frequently Asked Questions About Shova Rai
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto my-4 rounded-full" />
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto">
            Everything you need to know about Mrs. Shova Rai, her enterprises in Gangtok, community initiatives, and public recognitions.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-stone-900/90 border-amber-500/40 shadow-[0_4px_20px_rgba(245,158,11,0.12)]'
                    : 'bg-stone-900/40 border-stone-800/80 hover:border-amber-500/20 hover:bg-stone-900/60'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-semibold text-base sm:text-lg text-amber-100 tracking-wide flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-amber-500 text-stone-950 rotate-180'
                        : 'bg-stone-800 text-stone-300'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-stone-300 text-sm sm:text-base leading-relaxed border-t border-amber-500/10">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
