import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ne';

export interface Translations {
  nav: {
    home: string;
    about: string;
    journey: string;
    ventures: string;
    impact: string;
    updates: string;
    recognition: string;
    media: string;
    gallery: string;
    faq: string;
    contact: string;
    connect: string;
  };
  brand: {
    name: string;
    location: string;
    title: string;
  };
  liveStrip: {
    istLive: string;
    dailyVisitors: string;
    totalVisits: string;
  };
  hero: {
    badge: string;
    subheadline: string;
    roles: string;
    exploreVentures: string;
    communityImpact: string;
    locationGangtok: string;
  };
  about: {
    badge: string;
    heading: string;
    bioLead: string;
  };
  newsletter: {
    badge: string;
    heading: string;
    subheading: string;
    nameLabel: string;
    emailLabel: string;
    interestLabel: string;
    subscribeBtn: string;
    subscribing: string;
    earlyAccess: string;
    eventInvites: string;
    noSpam: string;
    thankTitle: string;
    thankMsg: string;
    subscribeAnother: string;
  };
  footer: {
    sectionsTitle: string;
    venturesTitle: string;
    locationText: string;
    tagline: string;
  };
  switcher: {
    english: string;
    nepali: string;
    ariaLabel: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      journey: 'Journey',
      ventures: 'Ventures',
      impact: 'Impact',
      updates: 'Updates',
      recognition: 'Recognition',
      media: 'Media',
      gallery: 'Gallery',
      faq: 'FAQ',
      contact: 'Contact',
      connect: 'Connect',
    },
    brand: {
      name: 'Shova Rai',
      location: 'Sikkim • India',
      title: 'Sikkim Visionary & Entrepreneur',
    },
    liveStrip: {
      istLive: 'IST Live',
      dailyVisitors: '24h Visitors:',
      totalVisits: 'Total Visits:',
    },
    hero: {
      badge: "SIKKIM'S VISIONARY LEADER & MENTOR",
      subheadline: 'Empowering Sikkim Through Entrepreneurship, Creativity & Skill Development',
      roles: 'Entrepreneur • Artist • Mentor • Baker • Hairstylist • Community Builder',
      exploreVentures: 'EXPLORE VENTURES',
      communityImpact: 'COMMUNITY IMPACT',
      locationGangtok: 'Namnang, Gangtok',
    },
    about: {
      badge: 'HER STORY & ROOTS',
      heading: 'About Mrs. Shova Rai',
      bioLead: 'A pioneer of grassroots entrepreneurship and artisanal excellence in the Eastern Himalayas.',
    },
    newsletter: {
      badge: 'DIRECT DISPATCHES',
      heading: 'Stay Connected with Shova Rai’s Mentorship & Events',
      subheading: 'Subscribe to receive priority announcements for upcoming women entrepreneurship cohorts, vocational workshops, regional business summits, and inspirational case studies across Sikkim.',
      nameLabel: 'Your Full Name (optional)',
      emailLabel: 'Email Address',
      interestLabel: 'Primary Area of Interest',
      subscribeBtn: 'Subscribe for Program Updates',
      subscribing: 'Confirming Subscription...',
      earlyAccess: 'Early Access: Priority registrations for upcoming Masterclasses in Gangtok & Namchi.',
      eventInvites: 'Event Invitations: Summits, panel features, and entrepreneur network meetups.',
      noSpam: 'No Spam Ever: Purely curated quarterly briefings and event invitations.',
      thankTitle: 'Thank You for Subscribing!',
      thankMsg: 'We have registered your email for priority notifications on upcoming mentorship programs and business events.',
      subscribeAnother: 'Subscribe Another Email',
    },
    footer: {
      sectionsTitle: 'PORTFOLIO SECTIONS',
      venturesTitle: 'VENTURES & INITIATIVES',
      locationText: 'Namnang, Gangtok, Sikkim — 737101, India',
      tagline: "Empowering communities through beauty, artisanal heritage food, traditional Himalayan crafts, and women's economic self-reliance.",
    },
    switcher: {
      english: 'EN',
      nepali: 'नेपाली',
      ariaLabel: 'Switch language between English and Nepali',
    },
  },
  ne: {
    nav: {
      home: 'गृहपृष्ठ',
      about: 'परिचय',
      journey: 'यात्रा',
      ventures: 'व्यवसायहरू',
      impact: 'प्रभाव',
      updates: 'अपडेटहरू',
      recognition: 'सम्मान',
      media: 'मिडिया',
      gallery: 'तस्बिरहरू',
      faq: 'प्रश्नोत्तर',
      contact: 'सम्पर्क',
      connect: 'जोडिनुहोस्',
    },
    brand: {
      name: 'शोभा राई',
      location: 'सिक्किम • भारत',
      title: 'सिक्किमका दूरदर्शी तथा उद्यमी',
    },
    liveStrip: {
      istLive: 'प्रत्यक्ष समय (IST)',
      dailyVisitors: '२४ घण्टाका आगन्तुक:',
      totalVisits: 'कुल भ्रमण:',
    },
    hero: {
      badge: 'सिक्किमका दूरदर्शी नेता तथा परामर्शदाता',
      subheadline: 'उद्यमशीलता, सिर्जनशीलता र सीप विकासमार्फत सिक्किमको सशक्तीकरण',
      roles: 'उद्यमी • कलाकार • परामर्शदाता • बेकर • हेयरस्टाइलिस्ट • समुदाय निर्माता',
      exploreVentures: 'व्यवसायहरू हेर्नुहोस्',
      communityImpact: 'सामुदायिक प्रभाव',
      locationGangtok: 'नामनाङ, गान्तोक',
    },
    about: {
      badge: 'उहाँको कथा र जराहरू',
      heading: 'श्रीमती शोभा राईको बारेमा',
      bioLead: 'पूर्वी हिमालयमा तृणमूल उद्यमशीलता र सीप उत्कृष्टताको अग्रणी व्यक्तित्व।',
    },
    newsletter: {
      badge: 'प्रत्यक्ष अपडेटहरू',
      heading: 'शोभा राईको परामर्श तथा कार्यक्रमहरूसँग जोडिनुहोस्',
      subheading: 'सिक्किमभरि आगामी महिला उद्यमशीलता ब्याच, सीपमूलक कार्यशाला, क्षेत्रीय व्यापार सम्मेलन तथा प्रेरणादायी केस स्टडीका प्राथमिकता सूचनाहरू प्राप्त गर्नुहोस्।',
      nameLabel: 'तपाईंको पूरा नाम (ऐच्छिक)',
      emailLabel: 'इमेल ठेगाना',
      interestLabel: 'मुख्य चासोको क्षेत्र',
      subscribeBtn: 'कार्यक्रम अपडेटका लागि सदस्यता लिनुहोस्',
      subscribing: 'दर्ता हुँदैछ...',
      earlyAccess: 'पूर्व प्रवेश: गान्तोक र नाम्चीमा आगामी मास्टरक्लासहरूको लागि प्राथमिकता दर्ता।',
      eventInvites: 'कार्यक्रम निम्तो: शिखर सम्मेलन, प्यानल छलफल र उद्यमी भेटघाटहरू।',
      noSpam: 'कुनै स्पाम छैन: केवल त्रैमासिक जानकारी र कार्यक्रमका निमन्त्रणाहरू।',
      thankTitle: 'सदस्यता लिनुभएकोमा धन्यवाद!',
      thankMsg: 'श्रीमती शोभा राईका आगामी परामर्श सत्र तथा व्यापार कार्यक्रमहरूको प्राथमिकता सूचनाका लागि तपाईंको इमेल दर्ता भएको छ।',
      subscribeAnother: 'अर्को इमेल दर्ता गर्नुहोस्',
    },
    footer: {
      sectionsTitle: 'पोर्टफोलियो खण्डहरू',
      venturesTitle: 'व्यवसाय र पहलहरू',
      locationText: 'नामनाङ, गान्तोक, सिक्किम — ७३७१०१, भारत',
      tagline: 'सौन्दर्य, परम्परागत हिमाली खाना, हस्तकला र महिलाहरूको आर्थिक आत्मनिर्भरतामार्फत समाजको सशक्तीकरण।',
    },
    switcher: {
      english: 'EN',
      nepali: 'नेपाली',
      ariaLabel: 'भाषा अंग्रेजी वा नेपालीमा परिवर्तन गर्नुहोस्',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('shova_app_lang');
      if (saved === 'ne' || saved === 'en') return saved;
    } catch {
      // fallback
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('shova_app_lang', lang);
    } catch {
      // fallback
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ne' : 'en');
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
