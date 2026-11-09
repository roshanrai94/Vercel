import React, { useState } from 'react';
import { 
  MapPin, 
  Sparkles, 
  ExternalLink, 
  Compass, 
  Scissors, 
  ShoppingBag, 
  Utensils, 
  Palette, 
  ArrowRight, 
  Clock, 
  Phone, 
  Navigation, 
  Layers, 
  Info,
  CheckCircle2,
  Mountain
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface BusinessLocation {
  id: string;
  name: string;
  nameNe: string;
  category: string;
  categoryNe: string;
  tagline: string;
  taglineNe: string;
  address: string;
  addressNe: string;
  landmark: string;
  landmarkNe: string;
  hours: string;
  hoursNe: string;
  phone: string;
  whatsappUrl: string;
  mapsQuery: string;
  icon: React.FC<{ className?: string }>;
  coords: { x: number; y: number }; // Relative position on the Gangtok inset map
  sikkimPin: { x: number; y: number }; // Relative position on the Sikkim map
  features: string[];
  featuresNe: string[];
  accentColor: string;
  bgGlow: string;
  badgeBorder: string;
}

export const Locations: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedBusinessId, setSelectedBusinessId] = useState<string>('all');
  const [activeDistrict, setActiveDistrict] = useState<'east' | 'west' | 'south' | 'north' | null>('east');
  const [showSupplyTrail, setShowSupplyTrail] = useState<boolean>(true);
  const [hoveredPin, setHoveredPin] = useState<string | null>(null);

  const businesses: BusinessLocation[] = [
    {
      id: 'cutting_edge',
      name: 'Cutting Edge Hair & Beauty Salon',
      nameNe: 'कटिङ एज हेयर एन्ड ब्युटी सैलुन',
      category: 'Premier Salon, Bridal Studio & Academy',
      categoryNe: 'प्रिमियर सैलुन, दुलही शृङ्गार स्टुडियो र एकेडेमी',
      tagline: 'Modern hair styling, organic skin therapy & professional mentorship',
      taglineNe: 'आधुनिक हेयर स्टाइलिङ, अर्गानिक छाला हेरचाह र व्यावसायिक परामर्श',
      address: 'Namnang Road, Gangtok, Sikkim - 737101',
      addressNe: 'नामनाङ रोड, गान्तोक, सिक्किम - ७३७१०१',
      landmark: 'Near Namnang viewpoint, 5 mins from MG Marg',
      landmarkNe: 'नामनाङ भ्यू पोइन्ट नजिक, एमजी मार्गबाट ५ मिनेट',
      hours: 'Mon–Sun: 9:00 AM – 7:00 PM (Closed Tuesday)',
      hoursNe: 'सोम–आइत: बिहान ९:०० – साँझ ७:०० (मंगलबार बन्द)',
      phone: '+91 7431833009',
      whatsappUrl: 'https://wa.me/917431833009?text=Hello%20Cutting%20Edge%20Salon%2C%20I%20would%20like%20to%20inquire%20about%20services',
      mapsQuery: 'Cutting+Edge+Hair+and+Beauty+Namnang+Gangtok+Sikkim+737101',
      icon: Scissors,
      coords: { x: 52, y: 48 },
      sikkimPin: { x: 70, y: 64 },
      features: [
        'Advanced hair cutting, coloring, rebonding & perms',
        'Customized bridal and ethnic makeover packages',
        'Apprenticeship and hands-on skill training for aspiring youth',
        'Air-conditioned styling suites with certified hygiene'
      ],
      featuresNe: [
        'उन्नत हेयर कटिङ, कलरिङ, रिबोन्डिङ र पर्म्स',
        'दुलही शृङ्गार तथा मौलिक पहिरन मेकओभर प्याकेज',
        'इच्छुक युवाहरूका लागि प्रयोगात्मक सीप तालिम र इन्टर्नसिप',
        'प्रमाणित सरसफाइ र व्यक्तिगत परामर्श'
      ],
      accentColor: 'text-amber-300',
      bgGlow: 'bg-amber-500/20',
      badgeBorder: 'border-amber-500/40'
    },
    {
      id: 'blush',
      name: 'Blush Fashion Boutique',
      nameNe: 'ब्लश फेसन बुटिक',
      category: 'Contemporary & Himalayan Ethnic Boutique',
      categoryNe: 'आधुनिक तथा हिमाली परम्परागत फेसन बुटिक',
      tagline: 'Handpicked contemporary fashion, traditional Sikkimese attire & custom styling',
      taglineNe: 'आधुनिक फेसन, परम्परागत सिक्किमेली पोसाक र विशेष स्टाइलिङ',
      address: 'Namnang Hub, Gangtok, Sikkim - 737101',
      addressNe: 'नामनाङ हब, गान्तोक, सिक्किम - ७३७१०१',
      landmark: 'Walking distance from Cutting Edge Salon, Namnang',
      landmarkNe: 'कटिङ एज सैलुनसँगै, नामनाङ गान्तोक',
      hours: 'Mon–Sun: 10:00 AM – 7:30 PM',
      hoursNe: 'सोम–आइत: बिहान १०:०० – साँझ ७:३०',
      phone: '+91 7431833009',
      whatsappUrl: 'https://wa.me/917431833009?text=Hello%20Blush%20Fashion%2C%20I%20would%20like%20to%20know%20more%20about%20your%20collection',
      mapsQuery: 'Blush+Fashion+Store+Namnang+Gangtok+Sikkim+737101',
      icon: ShoppingBag,
      coords: { x: 58, y: 42 },
      sikkimPin: { x: 72, y: 63 },
      features: [
        'Curated gowns, smart casuals & winterwear',
        'Traditional Himalayan ethnic attire & custom accessories',
        'Personalized bridal styling consultations',
        'High-grade Himalayan fabrics and modern craftsmanship'
      ],
      featuresNe: [
        'आधुनिक पहिरन, क्याजुअल र विन्टरवेयर सङ्ग्रह',
        'परम्परागत हिमाली पोसाक र हस्तनिर्मित सामग्री',
        'विशेष अवसरहरूका लागि व्यक्तिगत स्टाइलिङ परामर्श',
        'उत्कृष्ट कपडा र आरामदायी सिलाइ'
      ],
      accentColor: 'text-purple-300',
      bgGlow: 'bg-purple-500/20',
      badgeBorder: 'border-purple-500/40'
    },
    {
      id: 'zayel',
      name: "A Taste of Sikkim – Zayel’s Pickle",
      nameNe: 'अ टेस्ट अफ सिक्किम – जायल्स अचार',
      category: 'FSSAI Certified Organic Preserves & Processing Hub',
      categoryNe: 'FSSAI प्रमाणित प्राङ्गारिक घरेलु अचार प्रशोधन केन्द्र',
      tagline: 'Home-crafted organic Dalle Khorsani, bamboo shoot & Gundruk preserves',
      taglineNe: 'घरेलु प्राङ्गारिक डल्ले खोर्सानी, बाँसको तामा र गुन्द्रुकको मौलिक अचार',
      address: 'Artisanal Kitchen & Bottling Hub, Gangtok, Sikkim - 737101',
      addressNe: 'घरेलु भान्छा तथा प्याकेजिङ केन्द्र, गान्तोक, सिक्किम - ७३७१०१',
      landmark: 'Procured across South & West Sikkim, bottled in Gangtok',
      landmarkNe: 'दक्षिण र पश्चिम सिक्किमका किसानबाट सङ्कलन, गान्तोकमा प्याकेजिङ',
      hours: 'Online Orders: Daily 8:00 AM – 8:00 PM',
      hoursNe: 'अनलाइन अर्डर: बिहान ८:०० – साँझ ८:००',
      phone: '+91 7431833009',
      whatsappUrl: 'https://wa.me/917431833009?text=Hello%20Zayel%27s%20Pickle%2C%20I%20would%20like%20to%20order%20organic%20Sikkim%20pickles',
      mapsQuery: 'Namnang+Gangtok+Sikkim+737101',
      icon: Utensils,
      coords: { x: 44, y: 56 },
      sikkimPin: { x: 69, y: 66 },
      features: [
        '100% Organic Dalle Khorsani (Whole & Fiery Paste)',
        'Traditional Bamboo Shoot, Gundruk & Mixed Himalayan preserves',
        'FSSAI & UDYAM registered with strict food safety standards',
        'Direct ethical farm procurement empowering rural Sikkimese growers'
      ],
      featuresNe: [
        '१००% प्राङ्गारिक डल्ले खोर्सानी (सिङ्गो र पेस्ट)',
        'परम्परागत बाँसको तामा, गुन्द्रुक र हिमाली मसलाको अचार',
        'FSSAI र UDYAM दर्ता भएको खाद्य सुरक्षा प्रमाणित उद्यम',
        'स्थानीय कृषकहरूबाट सिधै खरिद गरी किसानको आय वृद्धि'
      ],
      accentColor: 'text-rose-300',
      bgGlow: 'bg-rose-500/20',
      badgeBorder: 'border-rose-500/40'
    },
    {
      id: 'block_printing',
      name: 'Block Printing & Traditional Craft Studio',
      nameNe: 'ब्लक प्रिन्टिङ तथा परम्परागत हस्तकला स्टुडियो',
      category: 'Himalayan Eco-Textile Art & Workshop Hub',
      categoryNe: 'हिमाली पर्यावरणमैत्री कपडा कला तथा कार्यशाला केन्द्र',
      tagline: 'Hand-carved wooden block printing, cultural flora/fauna motifs & artisan training',
      taglineNe: 'हातले कुँदिएको काठको ब्लक प्रिन्ट, सांस्कृतिक ढाँचा र शिल्पी तालिम',
      address: 'Creative Heritage Center, Gangtok, Sikkim - 737101',
      addressNe: 'सिर्जनात्मक सम्पदा केन्द्र, गान्तोक, सिक्किम - ७३७१०१',
      landmark: 'Namnang Craft Enclave, Gangtok',
      landmarkNe: 'नामनाङ क्राफ्ट एन्क्लेभ, गान्तोक',
      hours: 'Workshops & Studio: By Appointment',
      hoursNe: 'कार्यशाला र स्टुडियो: अग्रिम अपोइन्टमेन्टद्वारा',
      phone: '+91 7431833009',
      whatsappUrl: 'https://wa.me/917431833009?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20Block%20Printing%20Workshops',
      mapsQuery: 'Namnang+Road+Gangtok+Sikkim+737101',
      icon: Palette,
      coords: { x: 48, y: 38 },
      sikkimPin: { x: 71, y: 62 },
      features: [
        'Hand-carved wooden blocks inspired by Himalayan fauna and floral heritage',
        'Sustainable natural dyes and pure eco-cotton fabrics',
        'Hands-on vocational workshops for women SHGs, youth and students',
        'Artisan crafted scarves, tapestries, tote bags and apparel'
      ],
      featuresNe: [
        'हिमाली वनस्पति र सांस्कृतिक कलाबाट प्रेरित हातले कुँदिएको ब्लक',
        'पर्यावरणमैत्री प्राकृतिक रङ र शुद्ध सुती कपडाको प्रयोग',
        'महिला समूह, युवा र सिकारुहरूका लागि सीपमूलक कार्यशालाहरू',
        'हातले छापिएका स्कार्फ, झोला र सजावटका सामग्रीहरू'
      ],
      accentColor: 'text-emerald-300',
      bgGlow: 'bg-emerald-500/20',
      badgeBorder: 'border-emerald-500/40'
    }
  ];

  const displayedBusinesses = selectedBusinessId === 'all'
    ? businesses
    : businesses.filter(b => b.id === selectedBusinessId);

  return (
    <section id="locations" className="py-24 bg-stone-950 text-stone-100 relative overflow-hidden border-t border-b border-amber-500/20">
      
      {/* Background Ambience */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#d97706_0.5px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t.locations.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-amber-100 leading-tight">
            {t.locations.heading}
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto my-4 rounded-full" />
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed text-center">
            {t.locations.subheading}
          </p>
        </div>

        {/* Business Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          <button
            onClick={() => setSelectedBusinessId('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
              selectedBusinessId === 'all'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 shadow-[0_4px_15px_rgba(245,158,11,0.35)] scale-105'
                : 'bg-stone-900/90 text-stone-300 hover:bg-stone-800 border border-stone-800 hover:text-amber-200'
            }`}
          >
            {t.locations.allLocations}
          </button>

          {businesses.map((biz) => {
            const Icon = biz.icon;
            const isSelected = selectedBusinessId === biz.id;
            const label = language === 'ne' ? biz.nameNe : biz.name;

            return (
              <button
                key={biz.id}
                onClick={() => setSelectedBusinessId(biz.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-bold shadow-[0_4px_15px_rgba(245,158,11,0.35)] scale-105'
                    : 'bg-stone-900/90 text-stone-300 hover:bg-stone-800 border border-stone-800 hover:text-amber-200'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-stone-950' : 'text-amber-400'}`} />
                <span className="truncate max-w-[180px] sm:max-w-none">{label}</span>
              </button>
            );
          })}

          {/* Toggle Supply Trail */}
          <button
            onClick={() => setShowSupplyTrail(!showSupplyTrail)}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all duration-300 cursor-pointer ${
              showSupplyTrail
                ? 'bg-emerald-950/60 text-emerald-300 border-emerald-500/40 shadow-sm'
                : 'bg-stone-900/60 text-stone-400 border-stone-800 hover:text-stone-200'
            }`}
            title="Toggle rural farm supply trails"
          >
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            <span>{language === 'ne' ? 'प्राङ्गारिक आपूर्ति मार्ग' : 'Organic Supply Trail'}</span>
            <span className={`w-2 h-2 rounded-full ${showSupplyTrail ? 'bg-emerald-400 animate-pulse' : 'bg-stone-600'}`} />
          </button>
        </div>

        {/* Main Interactive Map & Directory Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Stylized SVG Map of Sikkim with Inset */}
          <div className="lg:col-span-7 bg-stone-900/90 p-5 sm:p-7 rounded-[2.5rem] border border-amber-500/30 shadow-2xl flex flex-col justify-between space-y-6 relative overflow-hidden">
            
            {/* Top Bar of Map Container */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-800 pb-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest font-display">
                  <Compass className="w-4 h-4 text-amber-400 animate-spin-slow" />
                  <span>{t.locations.sikkimMapTitle}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-100 mt-0.5">
                  {language === 'ne' ? 'सिक्किम र गान्तोक व्यावसायिक केन्द्र' : 'Sikkim & Gangtok Enterprise Hub'}
                </h3>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="text-[11px] font-mono text-amber-300/80 bg-stone-950/80 px-2.5 py-1 rounded-lg border border-stone-800">
                  {t.locations.coordinates}
                </span>
                <span className="text-[11px] font-sans text-stone-300 bg-stone-950/80 px-2.5 py-1 rounded-lg border border-stone-800 hidden sm:inline-block">
                  {t.locations.elevation}
                </span>
              </div>
            </div>

            {/* The Stylized SVG Vector Map */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] bg-stone-950 rounded-2xl border border-stone-800/90 overflow-hidden shadow-inner flex items-center justify-center p-2 sm:p-4">
              
              <svg 
                viewBox="0 0 800 600" 
                className="w-full h-full select-none"
                style={{ filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.5))' }}
              >
                <defs>
                  {/* Subtle terrain gradients */}
                  <linearGradient id="northSikkimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1c2d27" />
                    <stop offset="100%" stopColor="#0f1f1a" />
                  </linearGradient>

                  <linearGradient id="eastSikkimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2c3b28" />
                    <stop offset="100%" stopColor="#1a2e1f" />
                  </linearGradient>

                  <linearGradient id="southSikkimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e2c1e" />
                    <stop offset="100%" stopColor="#122013" />
                  </linearGradient>

                  <linearGradient id="westSikkimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e2d28" />
                    <stop offset="100%" stopColor="#14211d" />
                  </linearGradient>

                  <linearGradient id="goldGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#d97706" stopOpacity="0.2" />
                  </linearGradient>

                  <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* International Boundaries & Outer Surrounding Region Labels */}
                <rect width="800" height="600" fill="#0c0e12" />

                {/* Subtle Coordinate Grid lines */}
                <path d="M 100 0 L 100 600 M 250 0 L 250 600 M 400 0 L 400 600 M 550 0 L 550 600 M 700 0 L 700 600" stroke="#1f2937" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.4" />
                <path d="M 0 100 L 800 100 M 0 220 L 800 220 M 0 350 L 800 350 M 0 480 L 800 480" stroke="#1f2937" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.4" />

                {/* Border labels */}
                <text x="360" y="40" fill="#475569" fontSize="11" fontWeight="bold" letterSpacing="4">TIBET / CHINA (NORTH)</text>
                <text x="45" y="300" fill="#475569" fontSize="11" fontWeight="bold" letterSpacing="3" transform="rotate(-90 45 300)">NEPAL (WEST)</text>
                <text x="740" y="320" fill="#475569" fontSize="11" fontWeight="bold" letterSpacing="3" transform="rotate(90 740 320)">BHUTAN (EAST)</text>
                <text x="330" y="580" fill="#475569" fontSize="11" fontWeight="bold" letterSpacing="4">WEST BENGAL / DARJEELING (SOUTH)</text>

                {/* Mountain Range Illustration: Kangchenjunga Range (North-West) */}
                <g opacity="0.6">
                  <path d="M 150 160 L 190 90 L 230 150 L 270 80 L 310 160 Z" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" opacity="0.7" />
                  <path d="M 270 80 L 285 105 L 255 105 Z" fill="#fef3c7" opacity="0.8" />
                  <path d="M 190 90 L 202 110 L 178 110 Z" fill="#fef3c7" opacity="0.8" />
                  <text x="220" y="65" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="middle">
                    Mt. Kangchenjunga (8,586m)
                  </text>
                </g>

                {/* SIKKIM DISTRICT POLYGONS */}
                {/* 1. North Sikkim (Mangan) - Top massive region */}
                <path
                  d="M 240 160 
                     C 300 110, 420 80, 520 120 
                     C 570 140, 560 210, 530 260 
                     C 500 290, 440 280, 400 300 
                     C 370 290, 310 290, 270 260 
                     C 220 230, 210 180, 240 160 Z"
                  fill="url(#northSikkimGrad)"
                  stroke={activeDistrict === 'north' ? '#f59e0b' : '#334155'}
                  strokeWidth={activeDistrict === 'north' ? '2.5' : '1.5'}
                  className="transition-all duration-300 cursor-pointer hover:opacity-90"
                  onClick={() => setActiveDistrict('north')}
                />
                <text x="390" y="190" fill="#94a3b8" fontSize="12" fontWeight="bold" textAnchor="middle">
                  {language === 'ne' ? 'उत्तर सिक्किम (मङ्गन)' : 'North Sikkim (Mangan)'}
                </text>
                <text x="390" y="206" fill="#64748b" fontSize="9" textAnchor="middle">
                  Alpine Valleys &amp; Lakes
                </text>

                {/* 2. West Sikkim (Gyalshing / Soreng) */}
                <path
                  d="M 240 250 
                     C 270 250, 310 280, 320 340 
                     C 330 390, 310 430, 260 450 
                     C 210 440, 180 390, 190 330 
                     C 200 280, 220 260, 240 250 Z"
                  fill="url(#westSikkimGrad)"
                  stroke={activeDistrict === 'west' ? '#f59e0b' : '#334155'}
                  strokeWidth={activeDistrict === 'west' ? '2.5' : '1.5'}
                  className="transition-all duration-300 cursor-pointer hover:opacity-90"
                  onClick={() => setActiveDistrict('west')}
                />
                <text x="250" y="350" fill="#94a3b8" fontSize="12" fontWeight="bold" textAnchor="middle">
                  {language === 'ne' ? 'पश्चिम सिक्किम' : 'West Sikkim'}
                </text>
                <text x="250" y="366" fill="#64748b" fontSize="9" textAnchor="middle">
                  Gyalshing / Pelling
                </text>
                <circle cx="270" cy="385" r="3.5" fill="#10b981" />
                <text x="270" y="400" fill="#a7f3d0" fontSize="8.5" textAnchor="middle">
                  Bamboo Shoot Farms
                </text>

                {/* 3. South Sikkim (Namchi / Ravangla) */}
                <path
                  d="M 320 340 
                     C 370 320, 420 350, 430 400 
                     C 440 450, 390 510, 340 520 
                     C 290 500, 270 450, 300 420 
                     C 320 400, 320 360, 320 340 Z"
                  fill="url(#southSikkimGrad)"
                  stroke={activeDistrict === 'south' ? '#f59e0b' : '#334155'}
                  strokeWidth={activeDistrict === 'south' ? '2.5' : '1.5'}
                  className="transition-all duration-300 cursor-pointer hover:opacity-90"
                  onClick={() => setActiveDistrict('south')}
                />
                <text x="360" y="420" fill="#94a3b8" fontSize="12" fontWeight="bold" textAnchor="middle">
                  {language === 'ne' ? 'दक्षिण सिक्किम' : 'South Sikkim'}
                </text>
                <text x="360" y="436" fill="#64748b" fontSize="9" textAnchor="middle">
                  Namchi / Ravangla
                </text>
                <circle cx="370" cy="460" r="3.5" fill="#f43f5e" />
                <text x="370" y="475" fill="#fecdd3" fontSize="8.5" textAnchor="middle">
                  Dalle Khorsani Cultivation
                </text>

                {/* 4. East Sikkim (Gangtok / Pakyong) - PRIMARY HIGHLIGHTED DISTRICT */}
                <path
                  d="M 400 290 
                     C 470 280, 550 300, 560 360 
                     C 570 420, 520 480, 450 490 
                     C 420 470, 420 400, 400 370 
                     C 380 340, 380 310, 400 290 Z"
                  fill="url(#eastSikkimGrad)"
                  stroke="#f59e0b"
                  strokeWidth="3"
                  className="transition-all duration-300 cursor-pointer"
                  onClick={() => setActiveDistrict('east')}
                  filter="url(#glowEffect)"
                />
                <text x="480" y="340" fill="#fef3c7" fontSize="14" fontWeight="bold" textAnchor="middle">
                  {language === 'ne' ? 'पूर्व सिक्किम' : 'East Sikkim'}
                </text>
                <text x="480" y="358" fill="#fde68a" fontSize="10" fontWeight="bold" textAnchor="middle">
                  Capital: Gangtok
                </text>

                {/* Teesta River Flow */}
                <path 
                  d="M 460 120 Q 420 220 400 310 T 360 410 T 370 540" 
                  fill="none" 
                  stroke="#38bdf8" 
                  strokeWidth="2" 
                  strokeDasharray="4 4" 
                  opacity="0.45" 
                />
                <text x="395" y="270" fill="#38bdf8" fontSize="8" transform="rotate(75 395 270)" opacity="0.7">
                  Teesta River
                </text>

                {/* Organic Supply Trails (Animated dotted trails into Gangtok) */}
                {showSupplyTrail && (
                  <g>
                    {/* From South Sikkim Dalle Farms into Gangtok */}
                    <path
                      d="M 370 460 Q 430 430 475 390"
                      fill="none"
                      stroke="#f43f5e"
                      strokeWidth="2"
                      strokeDasharray="6 4"
                      className="animate-pulse"
                    />
                    {/* From West Sikkim Bamboo harvest into Gangtok */}
                    <path
                      d="M 270 385 Q 360 370 475 390"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                      strokeDasharray="6 4"
                      className="animate-pulse"
                    />
                  </g>
                )}

                {/* GANGTOK MAIN HUB PIN WITH RADAR PULSE */}
                <g 
                  transform="translate(485, 395)"
                  className="cursor-pointer"
                  onClick={() => setSelectedBusinessId('all')}
                  onMouseEnter={() => setHoveredPin('gangtok')}
                  onMouseLeave={() => setHoveredPin(null)}
                >
                  {/* Radar Wave Effect */}
                  <circle cx="0" cy="0" r="28" fill="#f59e0b" opacity="0.15" className="animate-ping" />
                  <circle cx="0" cy="0" r="16" fill="#f59e0b" opacity="0.3" className="animate-pulse" />
                  <circle cx="0" cy="0" r="10" fill="#f59e0b" stroke="#78350f" strokeWidth="2" />
                  <circle cx="0" cy="0" r="4" fill="#ffffff" />

                  {/* Pin Flag */}
                  <g transform="translate(14, -20)">
                    <rect x="0" y="0" width="130" height="42" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
                    <text x="10" y="18" fill="#fef3c7" fontSize="11" fontWeight="bold">
                      GANGTOK HUB
                    </text>
                    <text x="10" y="32" fill="#cbd5e1" fontSize="9">
                      Cutting Edge • Blush • Zayel’s
                    </text>
                  </g>
                </g>

                {/* Compass Rose */}
                <g transform="translate(710, 80)" opacity="0.8">
                  <circle cx="0" cy="0" r="25" fill="#0f172a" stroke="#d97706" strokeWidth="1" />
                  <path d="M 0 -22 L 4 -4 L 22 0 L 4 4 L 0 22 L -4 4 L -22 0 L -4 -4 Z" fill="#f59e0b" />
                  <text x="0" y="-26" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="middle">N</text>
                  <text x="0" y="34" fill="#64748b" fontSize="8" textAnchor="middle">S</text>
                  <text x="32" y="3" fill="#64748b" fontSize="8" textAnchor="middle">E</text>
                  <text x="-32" y="3" fill="#64748b" fontSize="8" textAnchor="middle">W</text>
                </g>

                {/* Map Legend */}
                <g transform="translate(30, 500)">
                  <rect x="0" y="0" width="220" height="75" rx="10" fill="#090d16" stroke="#1e293b" strokeWidth="1" opacity="0.9" />
                  <text x="12" y="18" fill="#e2e8f0" fontSize="10" fontWeight="bold">MAP LEGEND</text>
                  
                  <circle cx="20" cy="34" r="5" fill="#f59e0b" />
                  <text x="32" y="37" fill="#cbd5e1" fontSize="9">Shova Rai Headquarters (Gangtok)</text>

                  <circle cx="20" cy="50" r="4" fill="#f43f5e" />
                  <text x="32" y="53" fill="#cbd5e1" fontSize="9">Organic Dalle Sourcing (South Sikkim)</text>

                  <circle cx="20" cy="64" r="4" fill="#10b981" />
                  <text x="32" y="67" fill="#cbd5e1" fontSize="9">Bamboo / Organic Harvest (West Sikkim)</text>
                </g>

              </svg>

              {/* Floating Map Overlay Note */}
              <div className="absolute top-3 left-3 bg-stone-900/90 border border-stone-700/70 px-3 py-1.5 rounded-xl text-[11px] text-stone-300 backdrop-blur-md shadow-md flex items-center gap-2">
                <Mountain className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{language === 'ne' ? 'सिक्किम: हिमालयी उद्यमशीलता र जैविक विविधता' : 'Sikkim: Himalayan Biodiversity & Enterprise'}</span>
              </div>
            </div>

            {/* Bottom Supply Trail Explainer Banner */}
            <div className="p-4 rounded-2xl bg-stone-950/80 border border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-amber-200 block">
                    {t.locations.organicTrailTitle}
                  </span>
                  <p className="text-stone-300 text-xs mt-0.5 leading-relaxed">
                    {t.locations.organicTrailDesc}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Gangtok Hub Inset & Business Cards Directory */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Gangtok Urban Inset Banner */}
            <div className="p-6 rounded-[2rem] bg-gradient-to-br from-amber-500/10 via-stone-900/90 to-stone-950 border border-amber-500/30 shadow-xl space-y-3">
              <div className="flex items-center justify-between gap-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider font-display">
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{t.locations.gangtokHubTitle}</span>
                </div>

                <a
                  href="https://maps.google.com/?q=Namnang,+Gangtok,+Sikkim+737101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 hover:underline font-semibold"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <h4 className="text-xl font-serif font-bold text-amber-100">
                Namnang Road Corridor, Gangtok
              </h4>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                {language === 'ne' 
                  ? 'गान्तोकको प्रसिद्ध नामनाङ रोडमा कटिङ एज सैलुन र ब्लश फेसन बुटिक अवस्थित छन्। यो क्षेत्र एमजी मार्गबाट केवल ५ मिनेटको दूरीमा शान्त र रमणीय वातावरणमा छ।'
                  : 'Located along the scenic Namnang Road in Gangtok, just 5 minutes from MG Marg. Centrally positioned for residents and tourists visiting Sikkim.'}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-amber-300/90 font-medium">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t.locations.activeStatus}</span>
                </span>
                <span>•</span>
                <span>East Sikkim • 737101</span>
              </div>
            </div>

            {/* Individual Business Cards */}
            <div className="space-y-4 flex-1">
              {displayedBusinesses.map((biz) => {
                const Icon = biz.icon;
                const isSelected = selectedBusinessId === biz.id;
                const bizName = language === 'ne' ? biz.nameNe : biz.name;
                const bizCat = language === 'ne' ? biz.categoryNe : biz.category;
                const bizTagline = language === 'ne' ? biz.taglineNe : biz.tagline;
                const bizAddress = language === 'ne' ? biz.addressNe : biz.address;
                const bizLandmark = language === 'ne' ? biz.landmarkNe : biz.landmark;
                const bizHours = language === 'ne' ? biz.hoursNe : biz.hours;
                const bizFeatures = language === 'ne' ? biz.featuresNe : biz.features;

                return (
                  <div
                    key={biz.id}
                    onClick={() => setSelectedBusinessId(biz.id)}
                    className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer space-y-3.5 ${
                      isSelected
                        ? 'bg-stone-900 border-amber-500 shadow-[0_8px_25px_rgba(245,158,11,0.2)] scale-[1.01]'
                        : 'bg-stone-950/80 border-stone-800 hover:border-amber-500/40 hover:bg-stone-900/60'
                    }`}
                  >
                    {/* Card Header */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3 min-w-0">
                        <div className={`w-10 h-10 rounded-xl ${biz.bgGlow} flex items-center justify-center shrink-0 border ${biz.badgeBorder}`}>
                          <Icon className={`w-5 h-5 ${biz.accentColor}`} />
                        </div>
                        <div className="min-w-0">
                          <span className={`text-[11px] font-bold uppercase tracking-wider block ${biz.accentColor}`}>
                            {bizCat}
                          </span>
                          <h4 className="text-base sm:text-lg font-serif font-bold text-amber-100 truncate">
                            {bizName}
                          </h4>
                        </div>
                      </div>

                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(biz.mapsQuery)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        title="Open directions in Google Maps"
                        className="p-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-amber-300 border border-stone-800 shrink-0 transition-colors"
                      >
                        <Navigation className="w-4 h-4 text-amber-400" />
                      </a>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                      {bizTagline}
                    </p>

                    {/* Address & Hours */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-300 bg-stone-950/60 p-3 rounded-xl border border-stone-800/80">
                      <div className="flex items-start gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-stone-200 block">{bizAddress}</span>
                          <span className="text-[11px] text-stone-400">{bizLandmark}</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-stone-200 block">{t.locations.openHours}</span>
                          <span className="text-[11px] text-stone-400">{bizHours}</span>
                        </div>
                      </div>
                    </div>

                    {/* Features list (if selected) */}
                    {isSelected && (
                      <div className="pt-2 border-t border-stone-800/80 space-y-1.5 animate-fadeIn">
                        {bizFeatures.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs text-stone-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Action Bar */}
                    <div className="flex items-center justify-between gap-3 pt-2">
                      <a
                        href={biz.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-sm"
                      >
                        <span>{language === 'ne' ? 'ह्वाट्सएप सोधपुछ' : 'WhatsApp Direct'}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>

                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(biz.mapsQuery)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-xs text-amber-300 hover:text-amber-200 hover:underline font-medium"
                      >
                        <span>{t.locations.getDirections}</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
