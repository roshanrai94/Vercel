import React from 'react';
import { GraduationCap, HeartHandshake, ExternalLink } from 'lucide-react';
import { OptimizedImage } from './OptimizedImage';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { language } = useLanguage();

  const milestones =
    language === 'ne'
      ? [
          {
            period: 'प्रारम्भिक यात्रा',
            title: 'स्वावलम्बन र सीपको जग',
            detail:
              'गान्तोकमा बेकिङ, हेयर स्टाइलिङ, चित्रकला र परम्परागत शिल्पमा आत्मनिर्भर सिकाइ र निरन्तर साधनाबाट उद्यमशील यात्राको सुरुवात।',
          },
          {
            period: 'व्यावसायिक तालिम',
            title: 'मुम्बई र दिल्लीमा उच्च प्रशिक्षण',
            detail:
              'नालिनी एन्ड यास्मिन हेयर एकेडेमी (मुम्बई) बाट उन्नत हेयर स्टाइलिङ र ट्रफल नेसन (दिल्ली) बाट व्यावसायिक बेकिङ प्रशिक्षण।',
          },
          {
            period: '२००७ देखि हालसम्म',
            title: 'गान्तोकमा बहु-क्षेत्रीय उद्यम र नेतृत्व',
            detail:
              'नामनाङमा कटिङ एज हेयर एन्ड ब्युटी (२००७), ब्लश फेसन स्टोर र FSSAI-प्रमाणित जायल्स अर्गानिक अचारको स्थापना।',
          },
          {
            period: 'सामुदायिक सेवा',
            title: 'महिला समूह र युवा परामर्श',
            detail:
              'सिक्किम विश्वविद्यालय, महिला स्वयं सहायता समूह (SHG) र फरक क्षमता भएका युवाहरूका लागि ५०+ सीप कार्यशाला र परामर्श।',
          },
        ]
      : [
          {
            period: 'Early Roots',
            title: 'Self-Reliant Craft & Curiosity',
            detail:
              'Built an artistic and culinary foundation in Gangtok through independent dedication to baking, beauty styling, painting, and traditional Himalayan textile crafts.',
          },
          {
            period: 'Specialist Training',
            title: 'Mumbai & Delhi Academies',
            detail:
              'Trained at Nalini & Yasmin Hair Academy (Mumbai) for advanced cutting, chemical treatments, and salon operations, and Truffle Nation Baking School (Delhi).',
          },
          {
            period: '2007 – Present',
            title: 'Building Ventures in Namnang, Gangtok',
            detail:
              'Founded Cutting Edge Hair & Beauty in 2007, expanded into Blush Fashion Store, and launched FSSAI & UDYAM-registered Zayel’s Organic Pickles.',
          },
          {
            period: 'Community Work',
            title: 'Women SHGs & Youth Mentorship',
            detail:
              'Conducted 50+ vocational workshops across Sikkim—including resource sessions at Sikkim University and inclusive training for women SHGs and differently-abled youth.',
          },
        ];

  return (
    <section id="about" className="section-shell section-surface">
      <div className="site-container space-y-12">
        {/* Section Heading */}
        <div className="max-w-2xl space-y-4">
          <p className="section-eyebrow">
            {language === 'ne' ? 'परिचय र यात्रा' : 'About Shova Rai'}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text)] leading-[1.18]">
            {language === 'ne'
              ? 'गान्तोकको आत्मनिर्भर उद्यमशीलता र सामुदायिक नेतृत्व'
              : 'Twenty Years of Craft, Enterprise & Community Upliftment in Sikkim'}
          </h2>
        </div>

        {/* Main Bio + Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="rounded-[16px] overflow-hidden bg-[var(--surface-2)] border border-[var(--border)] shadow-[0_12px_32px_-12px_rgba(0,0,0,0.55)] max-w-md mx-auto lg:mx-0">
              <OptimizedImage
                webpSrc="/webp/Shova.webp"
                fallbackSrc="/Shova.jpg"
                alt="Mrs. Shova Rai smiling portrait in Gangtok, Sikkim"
                width={660}
                height={688}
                imgClassName="w-full h-auto object-cover"
                fallbackTitle="Mrs. Shova Rai"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[var(--text)] leading-relaxed">
            <p>
              {language === 'ne'
                ? 'श्रीमती शोभा राई गान्तोक, सिक्किमकी आत्मनिर्भर उद्यमी, मास्टर हेयरस्टाइलिस्ट, प्रमाणित बेकर र सामुदायिक परामर्शदाता हुनुहुन्छ। दुई दशकभन्दा लामो व्यावसायिक यात्रामा उहाँले सौन्दर्य, फेसन, प्राङ्गारिक खाद्य प्रशोधन र परम्परागत ब्लक प्रिन्टिङ क्षेत्रमा सफल उद्यमहरू निर्माण गर्नुभएको छ।'
                : 'Mrs. Shova Rai is a self-made entrepreneur from Namnang, Gangtok, Sikkim, with over two decades of hands-on experience across beauty, fashion, artisanal food preservation, baking, and traditional block printing.'}
            </p>
            <p className="text-[var(--text-muted)]">
              {language === 'ne'
                ? 'उहाँको कार्यले स्थानीय महिला स्वयं सहायता समूह (SHGs), ग्रामीण कृषक र फरक क्षमता भएका युवाहरूलाई सीप र बजारसँग जोडेर आर्थिक स्वावलम्बन हासिल गर्न मद्दत पुर्‍याउँदै आएको छ।'
                : 'Rooted in Himalayan heritage, she pairs professional salon and culinary standards with grassroots mentorship—helping women Self-Help Groups (SHGs), aspiring youth, and rural organic farmers across Sikkim build sustainable livelihoods.'}
            </p>

            {/* Credentials summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="card-static card-static--raised p-6 flex items-start gap-4">
                <GraduationCap className="w-5 h-5 text-[var(--gold)] shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-sans text-base font-semibold text-[var(--text)]">
                    {language === 'ne' ? 'प्रमाणित प्रशिक्षण' : 'Certified Specialist'}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] mt-1">
                    Nalini &amp; Yasmin Hair Academy (Mumbai) · Truffle Nation Baking School
                  </p>
                </div>
              </div>

              <div className="card-static card-static--raised p-6 flex items-start gap-4">
                <HeartHandshake className="w-5 h-5 text-[var(--gold)] shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-sans text-base font-semibold text-[var(--text)]">
                    {language === 'ne' ? 'दर्ता र खाद्य सुरक्षा' : 'Registered & Certified'}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] mt-1">
                    FSSAI Food Safety Certified · UDYAM / MSME Registered Micro-Enterprise
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://myvillagemypride.wordpress.com/2015/02/04/sikkim-an-inspiring-story-of-shova-rai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 min-h-[48px] text-base font-semibold text-[var(--gold)] hover:text-[var(--gold-hover)] underline underline-offset-4 transition-colors"
              >
                <span>
                  {language === 'ne'
                    ? 'माई भिलेज माई प्राइडमा प्रकाशित जीवनी पढ्नुहोस्'
                    : 'Read Shova Rai’s biography on My Village My Pride'}
                </span>
                <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Clean 4-Step Journey Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-[var(--border)]">
          {milestones.map((item) => (
            <article key={item.title} className="card-elevated card-elevated--raised p-6 space-y-2">
              <p className="text-xs font-semibold tracking-wider uppercase text-[var(--gold)]">
                {item.period}
              </p>
              <h3 className="font-serif text-xl font-bold text-[var(--text)]">{item.title}</h3>
              <p className="text-base text-[var(--text-muted)] leading-relaxed">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
