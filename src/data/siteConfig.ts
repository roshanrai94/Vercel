/**
 * Centralized Site Configuration & Verified Business Content
 * --------------------------------------------------------
 * Every placeholder requiring your input is marked with [PLACEHOLDER] brackets
 * so you can find and update it quickly before deploying to shovarai.in.
 */

export const SITE_CONFIG = {
  brandName: 'Shova Rai',
  brandFullName: 'Mrs. Shova Rai',
  siteUrl: 'https://www.shovarai.in',
  locationShort: 'Namnang, Gangtok, Sikkim',
  addressFull: 'Namnang Road, Gangtok, East Sikkim - 737101, India',

  // Real verified contact details from existing site
  phoneDisplay: '+91 7431833009',
  phoneHref: 'tel:+917431833009',
  whatsappNumber: '917431833009', // Format: country code + 10-digit number, no '+'
  email: 'cuttingedge723@gmail.com',

  /**
   * [PLACEHOLDER] Formspree Endpoint
   * Sign up free at https://formspree.io, create a form linked to cuttingedge723@gmail.com,
   * and replace '[YOUR_FORMSPREE_FORM_ID]' below (e.g. 'https://formspree.io/f/mqazwsxe').
   */
  formspreeEndpoint: 'https://formspree.io/f/[YOUR_FORMSPREE_FORM_ID]',

  // [PLACEHOLDER] Replace with your real GA4 ID in index.html & src/utils/analytics.ts
  gaMeasurementId: '[G-XXXXXXX]',

  // Verified social links
  socials: {
    facebook: {
      label: 'Facebook',
      handle: 'Shova Rai Official',
      url: 'https://www.facebook.com/share/1FGMEjv4Qr/',
    },
    cuttingEdgeInstagram: {
      label: 'Instagram — Cutting Edge',
      handle: '@cuttingedge_hair_salon_gtk__',
      url: 'https://www.instagram.com/cuttingedge_hair_salon_gtk__?igsh=aG8xamhqcHlvMmpx',
    },
    blushInstagram: {
      label: 'Instagram — Blush',
      handle: '@blush.clothingstore',
      url: 'https://www.instagram.com/blush.clothingstore?igsh=MWtpeGFvMm84eDJ2ag==',
    },
    youtube: {
      label: 'YouTube',
      handle: '@shovarai963',
      url: 'https://youtube.com/@shovarai963?si=q1TtfmDNex0Nekrs',
    },
  },
} as const;

/**
 * Helper to generate prefilled WhatsApp links with business-specific messages.
 */
export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export interface BusinessItem {
  id: 'cutting-edge' | 'blush' | 'zayels';
  name: string;
  nameNe: string;
  category: string;
  categoryNe: string;
  established: string;
  description: string;
  descriptionNe: string;
  highlights: string[];
  highlightsNe: string[];
  hours: string;
  hoursNe: string;
  address: string;
  addressNe: string;
  imageWebp: string;
  imageFallback: string;
  imageAlt: string;
  width: number;
  height: number;
  whatsappMessage: string;
  directionsUrl: string;
  mapEmbedUrl: string;
}

export const BUSINESSES: BusinessItem[] = [
  {
    id: 'cutting-edge',
    name: 'Cutting Edge Hair & Beauty',
    nameNe: 'कटिङ एज हेयर एन्ड ब्युटी',
    category: 'Hair Salon & Bridal Studio',
    categoryNe: 'हेयर सैलुन र दुलही शृङ्गार स्टुडियो',
    established: 'Est. 2007 · Namnang, Gangtok',
    description:
      'Trusted hair salon in Gangtok for modern cuts, coloring, rebonding, organic skin care, and bridal makeup in Namnang. Trained at Nalini & Yasmin Hair Academy, Mumbai.',
    descriptionNe:
      'नामनाङ, गान्तोकमा आधुनिक हेयर कटिङ, कलरिङ, रिबोन्डिङ, अर्गानिक छाला उपचार र दुलही मेकअपका लागि भरपर्दो सैलुन।',
    highlights: [
      'Precision haircuts, coloring, perms & rebonding',
      'Bridal makeup Gangtok & traditional Sikkimese styling',
      'Apprenticeships & salon skill mentorship',
    ],
    highlightsNe: [
      'आधुनिक हेयर कटिङ, कलरिङ, पर्म्स र रिबोन्डिङ',
      'सिक्किमेली तथा आधुनिक दुलही मेकअप प्याकेज',
      'युवाहरूका लागि प्रयोगात्मक सैलुन सीप तालिम',
    ],
    hours: 'Mon–Sun: 9:00 AM – 7:00 PM (Closed Tuesday)',
    hoursNe: 'सोम–आइत: बिहान ९:०० – साँझ ७:०० (मंगलबार बन्द)',
    address: 'Namnang Road, Gangtok, Sikkim 737101',
    addressNe: 'नामनाङ रोड, गान्तोक, सिक्किम ७३७१०१',
    imageWebp: '/webp/cut1.webp',
    imageFallback: '/cut1.jpg',
    imageAlt: 'Cutting Edge Hair and Beauty salon styling interior in Namnang, Gangtok',
    width: 769,
    height: 960,
    whatsappMessage:
      'Hi Shova, I would like to book an appointment at Cutting Edge Hair & Beauty in Namnang, Gangtok.',
    directionsUrl: 'https://maps.google.com/?q=Cutting+Edge+Hair+and+Beauty+Namnang+Gangtok+Sikkim+737101',
    mapEmbedUrl:
      'https://maps.google.com/maps?q=Cutting%20Edge%20Hair%20and%20Beauty,%20Namnang,%20Gangtok,%20Sikkim%20737101&t=&z=16&ie=UTF8&iwloc=&output=embed',
  },
  {
    id: 'blush',
    name: 'Blush Fashion Store',
    nameNe: 'ब्लश फेसन स्टोर',
    category: 'Boutique & Ethnic Wear',
    categoryNe: 'फेसन बुटिक र परम्परागत पहिरन',
    established: 'Namnang, Gangtok',
    description:
      'Handpicked boutique in Gangtok featuring contemporary western wear, winter outerwear, and traditional Sikkimese ethnic attire with personal styling support.',
    descriptionNe:
      'गान्तोकको नामनाङमा अवस्थित आधुनिक पहिरन, विन्टरवेयर र परम्परागत सिक्किमेली पोसाकको विशेष बुटिक।',
    highlights: [
      'Curated gowns, smart casuals & seasonal outerwear',
      'Traditional Himalayan & Sikkimese ethnic outfits',
      'Personal event & bridal wardrobe styling',
    ],
    highlightsNe: [
      'आधुनिक गाउन, क्याजुअल र सिजनल विन्टरवेयर',
      'परम्परागत हिमाली तथा सिक्किमेली पहिरन',
      'विशेष कार्यक्रमका लागि व्यक्तिगत स्टाइलिङ सेवा',
    ],
    hours: 'Mon–Sun: 10:00 AM – 7:30 PM',
    hoursNe: 'सोम–आइत: बिहान १०:०० – साँझ ७:३०',
    address: 'Namnang Hub, Gangtok, Sikkim 737101',
    addressNe: 'नामनाङ हब, गान्तोक, सिक्किम ७३७१०१',
    imageWebp: '/webp/Blush.webp',
    imageFallback: '/Blush.jpeg',
    imageAlt: 'Blush Fashion Store boutique display in Namnang, Gangtok',
    width: 960,
    height: 720,
    whatsappMessage:
      'Hi Shova, I would like to inquire about outfits and collections at Blush Fashion Store, Gangtok.',
    directionsUrl: 'https://maps.google.com/?q=Blush+Fashion+Store+Namnang+Gangtok+Sikkim+737101',
    mapEmbedUrl:
      'https://maps.google.com/maps?q=Namnang%20Road,%20Gangtok,%20Sikkim%20737101&t=&z=16&ie=UTF8&iwloc=&output=embed',
  },
  {
    id: 'zayels',
    name: "Zayel's Organic Pickles",
    nameNe: 'जायल्स अर्गानिक अचार',
    category: 'A Taste of Sikkim · FSSAI Certified',
    categoryNe: 'अ टेस्ट अफ सिक्किम · FSSAI प्रमाणित',
    established: 'FSSAI & UDYAM Registered · Gangtok',
    description:
      'Small-batch organic pickles Sikkim consumers love—crafted from farm-sourced Dalle Khorsani, bamboo shoot, and Gundruk with zero synthetic preservatives.',
    descriptionNe:
      'स्थानीय किसानबाट खरिद गरिएको प्राङ्गारिक डल्ले खोर्सानी, बाँसको तामा र गुन्द्रुकबाट रसायनरहित तयार पारिएको घरेलु अचार।',
    highlights: [
      '100% organic Dalle Khorsani (Whole & Fiery Paste)',
      'Traditional Bamboo Shoot (Tama) & Gundruk preserves',
      'FSSAI Food Safety & UDYAM registered micro-enterprise',
    ],
    highlightsNe: [
      '१००% प्राङ्गारिक डल्ले खोर्सानी (सिङ्गो र पेस्ट)',
      'परम्परागत बाँसको तामा र गुन्द्रुकको अचार',
      'FSSAI र UDYAM दर्ता भएको खाद्य सुरक्षा प्रमाणित उद्योग',
    ],
    hours: 'Orders Open Daily: 8:00 AM – 8:00 PM',
    hoursNe: 'दैनिक अर्डर: बिहान ८:०० – साँझ ८:००',
    address: 'Namnang Dispatch Hub, Gangtok, Sikkim 737101',
    addressNe: 'नामनाङ केन्द्र, गान्तोक, सिक्किम ७३७१०१',
    imageWebp: '/webp/Pickle1.webp',
    imageFallback: '/Pickle1.PNG',
    imageAlt: "Zayel's Organic Pickles - A Taste of Sikkim Dalle Khorsani jar",
    width: 960,
    height: 917,
    whatsappMessage:
      "Hi Shova, I would like to order Zayel's Organic Pickles (A Taste of Sikkim). Please share availability.",
    directionsUrl: 'https://maps.google.com/?q=Namnang+Gangtok+Sikkim+737101',
    mapEmbedUrl:
      'https://maps.google.com/maps?q=Namnang,%20Gangtok,%20Sikkim%20737101&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
];

export interface SalonService {
  id: string;
  name: string;
  nameNe: string;
  details: string;
  detailsNe: string;
  /**
   * [PLACEHOLDER] Replace 'Ask me' with exact ₹ pricing (e.g. '₹600 onwards') when ready.
   */
  price: string;
  priceNe: string;
}

export const SALON_SERVICES: SalonService[] = [
  {
    id: 'haircut-styling',
    name: 'Precision Haircut & Blow-Dry Styling',
    nameNe: 'आधुनिक हेयर कट र स्टाइलिङ',
    details: 'Tailored cuts and styling for women, men, and special events.',
    detailsNe: 'अनुहारको बनौटअनुसार आधुनिक हेयर कट र फिनिसिङ।',
    price: 'Ask on WhatsApp',
    priceNe: 'ह्वाट्सएपमा सोध्नुहोस्',
  },
  {
    id: 'hair-color',
    name: 'Global Hair Coloring & Highlights',
    nameNe: 'हेयर कलरिङ र हाइलाइट्स',
    details: 'Ammonia-conscious gloss, root touch-ups, balayage & custom shades.',
    detailsNe: 'गुणस्तरीय रङ र कपालको सुरक्षासहित विशेष कलरिङ।',
    price: 'Ask on WhatsApp',
    priceNe: 'ह्वाट्सएपमा सोध्नुहोस्',
  },
  {
    id: 'rebonding-perms',
    name: 'Hair Rebonding, Keratin & Perms',
    nameNe: 'रिबोन्डिङ, केराटिन र पर्म्स',
    details: 'Long-lasting smoothing, curl texture transformations & repair.',
    detailsNe: 'कपाल सिधा बनाउने, केराटिन र कर्ल उपचार सेवा।',
    price: 'Ask on WhatsApp',
    priceNe: 'ह्वाट्सएपमा सोध्नुहोस्',
  },
  {
    id: 'bridal-makeup',
    name: 'Bridal Makeup & Ethnic Makeover (Gangtok)',
    nameNe: 'दुलही मेकअप र परम्परागत शृङ्गार',
    details: 'Complete Sikkimese traditional and contemporary bridal packages.',
    detailsNe: 'परम्परागत सिक्किमेली र आधुनिक दुलही मेकओभर प्याकेज।',
    price: 'Ask on WhatsApp',
    priceNe: 'ह्वाट्सएपमा सोध्नुहोस्',
  },
  {
    id: 'skin-care',
    name: 'Organic Skin Therapy & Facials',
    nameNe: 'अर्गानिक छाला उपचार र फेसियल',
    details: 'Hydrating and clarifying facials tailored for Himalayan climates.',
    detailsNe: 'हिमाली मौसम सुहाउँदो छालाको हेरचाह र फेसियल।',
    price: 'Ask on WhatsApp',
    priceNe: 'ह्वाट्सएपमा सोध्नुहोस्',
  },
  {
    id: 'salon-training',
    name: 'Salon Mentorship & Skill Consultation',
    nameNe: 'सैलुन परामर्श र सीप प्रशिक्षण',
    details: 'Hands-on hair styling guidance and salon business mentorship.',
    detailsNe: 'इच्छुक युवाहरूका लागि प्रयोगात्मक सैलुन सीप तालिम।',
    price: 'Ask on WhatsApp',
    priceNe: 'ह्वाट्सएपमा सोध्नुहोस्',
  },
];

export interface PickleProduct {
  id: string;
  name: string;
  nameNe: string;
  description: string;
  descriptionNe: string;
  badge: string;
  badgeNe: string;
  /**
   * [PLACEHOLDER] Replace with jar sizes & prices (e.g. '250g · ₹[Price]') when ready.
   */
  priceOrSize: string;
  priceOrSizeNe: string;
  imageWebp?: string;
  imageFallback?: string;
  imageAlt: string;
}

export const PICKLE_PRODUCTS: PickleProduct[] = [
  {
    id: 'dalle-whole',
    name: 'Organic Dalle Khorsani (Whole)',
    nameNe: 'प्राङ्गारिक सिङ्गो डल्ले खोर्सानी',
    description:
      'Sun-ripened Sikkimese red cherry peppers preserved in pure mustard oil and traditional spices without artificial preservatives.',
    descriptionNe:
      'स्थानीय किसानबाट सङ्कलित रातो डल्ले खोर्सानी शुद्ध तोरीको तेल र हिमाली मसलामा तयार पारिएको।',
    badge: 'Signature Variety',
    badgeNe: 'विशेष स्वाद',
    priceOrSize: 'Ask price & jar sizes on WhatsApp',
    priceOrSizeNe: 'ह्वाट्सएपमा मूल्य सोध्नुहोस्',
    imageWebp: '/webp/Pickle1.webp',
    imageFallback: '/Pickle1.PNG',
    imageAlt: "Zayel's Organic Whole Dalle Khorsani Pickle jar from Sikkim",
  },
  {
    id: 'dalle-paste',
    name: 'Organic Dalle Khorsani (Fiery Paste)',
    nameNe: 'प्राङ्गारिक डल्ले खोर्सानी पेस्ट',
    description:
      'Smooth, potent Dalle Khorsani chilli paste crafted in small batches—ideal alongside momos, thukpa, and daily meals.',
    descriptionNe:
      'मम, थुक्पा र दैनिक खानासँग खान उपयुक्त पिरो र स्वादिष्ट प्राङ्गारिक डल्ले खोर्सानी पेस्ट।',
    badge: 'Bestseller',
    badgeNe: 'सर्वाधिक रुचाइएको',
    priceOrSize: 'Ask price & jar sizes on WhatsApp',
    priceOrSizeNe: 'ह्वाट्सएपमा मूल्य सोध्नुहोस्',
    imageWebp: '/webp/Pickle2.webp',
    imageFallback: '/Pickle2.PNG',
    imageAlt: "Zayel's Organic Dalle Khorsani Paste preserve",
  },
  {
    id: 'bamboo-shoot',
    name: 'Traditional Bamboo Shoot Pickle (Tama)',
    nameNe: 'परम्परागत बाँसको तामा अचार',
    description:
      'Tender Himalayan bamboo shoots cured using authentic Sikkimese heirloom fermentation and spice blends.',
    descriptionNe:
      'परम्परागत सिक्किमेली विधिबाट तयार पारिएको नरम र स्वादिष्ट बाँसको तामाको अचार।',
    badge: 'Heirloom Recipe',
    badgeNe: 'मौलिक परिकार',
    priceOrSize: 'Ask price & jar sizes on WhatsApp',
    priceOrSizeNe: 'ह्वाट्सएपमा मूल्य सोध्नुहोस्',
    imageWebp: '/webp/Pickle1.webp',
    imageFallback: '/Pickle1.PNG',
    imageAlt: 'Traditional Sikkimese Bamboo Shoot Tama Pickle',
  },
  {
    id: 'gundruk-pickle',
    name: 'Traditional Gundruk Pickle',
    nameNe: 'परम्परागत गुन्द्रुक अचार',
    description:
      'Tangy sun-dried fermented leafy greens blended with roasted Himalayan spices and cold-pressed oil.',
    descriptionNe:
      'घाममा सुकाइएको गुन्द्रुकलाई भुटेको मसला र शुद्ध तेलमा मोलेर बनाइएको परम्परागत अचार।',
    badge: 'Organic Heritage',
    badgeNe: 'प्राङ्गारिक सम्पदा',
    priceOrSize: 'Ask price & jar sizes on WhatsApp',
    priceOrSizeNe: 'ह्वाट्सएपमा मूल्य सोध्नुहोस्',
    imageWebp: '/webp/Pickle2.webp',
    imageFallback: '/Pickle2.PNG',
    imageAlt: 'Traditional Gundruk fermented greens pickle from Sikkim',
  },
  {
    id: 'mixed-veg-pickle',
    name: 'Mixed Himalayan Vegetable Pickle',
    nameNe: 'मिश्रित हिमाली तरकारी अचार',
    description:
      'Seasonal mountain vegetables pickled with mustard seeds, turmeric, and aromatic whole spices.',
    descriptionNe:
      'मौसमी पहाडी तरकारी, तोरी, बेसार र स्थानीय मसलाबाट तयार पारिएको स्वादिलो मिश्रित अचार।',
    badge: 'FSSAI Certified',
    badgeNe: 'FSSAI प्रमाणित',
    priceOrSize: 'Ask price & jar sizes on WhatsApp',
    priceOrSizeNe: 'ह्वाट्सएपमा मूल्य सोध्नुहोस्',
    imageWebp: '/webp/Pickle1.webp',
    imageFallback: '/Pickle1.PNG',
    imageAlt: 'Mixed Himalayan Vegetable Organic Pickle from Sikkim',
  },
];

export interface AwardOrPressItem {
  id: string;
  kind: 'award' | 'press';
  title: string;
  titleNe: string;
  sourceOrLocation: string;
  sourceOrLocationNe: string;
  yearOrTag: string;
  yearOrTagNe: string;
  summary: string;
  summaryNe: string;
  url?: string;
}

/**
 * Real Awards & Press present in the official shovarai.in portfolio.
 * Remove all items (set to []) if you wish to hide the Awards & Press section.
 */
export const AWARDS_AND_PRESS: AwardOrPressItem[] = [
  {
    id: 'ncw-delhi',
    kind: 'award',
    title: 'National Commission for Women (NCW) Felicitation',
    titleNe: 'राष्ट्रिय महिला आयोग (NCW) द्वारा सम्मान',
    sourceOrLocation: 'New Delhi · All India Radio (News On AIR)',
    sourceOrLocationNe: 'नयाँ दिल्ली · अल इन्डिया रेडियो',
    yearOrTag: 'National Recognition',
    yearOrTagNe: 'राष्ट्रिय सम्मान',
    summary:
      'Honored in New Delhi by the National Commission for Women for contributions to women’s entrepreneurship and community empowerment in Sikkim.',
    summaryNe:
      'सिक्किममा महिला उद्यमशीलता र सामुदायिक सशक्तीकरणमा पुर्‍याएको योगदानका लागि नयाँ दिल्लीमा सम्मानित।',
    url: 'https://newsonair.gov.in/ncw-felicitates-sikkim-entrepreneur-shova-rai-for-her-contributions/',
  },
  {
    id: 'union-minister',
    kind: 'award',
    title: 'Felicitation by Union Minister Smt. Shobha Karandlaje',
    titleNe: 'केन्द्रीय मन्त्री श्रीमती शोभा करन्दलाजेद्वारा सम्मान',
    sourceOrLocation: 'Gangtok, Sikkim',
    sourceOrLocationNe: 'गान्तोक, सिक्किम',
    yearOrTag: 'Ministerial Honor',
    yearOrTagNe: 'मन्त्रीस्तरीय सम्मान',
    summary:
      'Recognized in Gangtok for grassroots micro-enterprise leadership and mentoring women Self-Help Groups across Sikkim.',
    summaryNe: 'तृणमूल उद्यमशीलता र महिला समूहको सशक्तीकरणमा पुर्‍याएको योगदानका लागि अभिनन्दित।',
  },
  {
    id: 'sikkim-gyan-manch',
    kind: 'award',
    title: 'Sikkim Gyan Manch Appreciation Award',
    titleNe: 'सिक्किम ज्ञान मञ्च कदर पुरस्कार',
    sourceOrLocation: 'Gangtok, Sikkim',
    sourceOrLocationNe: 'गान्तोक, सिक्किम',
    yearOrTag: 'Community Honor',
    yearOrTagNe: 'सामुदायिक सम्मान',
    summary:
      'Awarded for advancing community skill education, inclusive training, and local enterprise resilience.',
    summaryNe: 'सामुदायिक सीप शिक्षा र स्थानीय उद्यम प्रवर्द्धनमा पुर्‍याएको योगदानका लागि सम्मानित।',
  },
  {
    id: 'ins-podcast',
    kind: 'press',
    title: 'I.N.S Podcast (Season 2, Episode 4) — Building Businesses & Breaking Barriers',
    titleNe: 'I.N.S पोडकास्ट (सिजन २, भाग ४)',
    sourceOrLocation: 'I.N.S. Production Darjeeling · YouTube',
    sourceOrLocationNe: 'I.N.S. प्रोडक्सन दार्जिलिङ · युट्युब',
    yearOrTag: 'Video Podcast',
    yearOrTagNe: 'भिडियो पोडकास्ट',
    summary:
      'In-depth podcast conversation covering Shova Rai’s journey across baking, hairstyling, painting, and women’s empowerment.',
    summaryNe: 'बेकिङ, हेयरस्टाइलिङ, चित्रकला र महिला सशक्तीकरणको यात्राबारे विस्तृत पोडकास्ट संवाद।',
    url: 'https://www.youtube.com/watch?v=ZuFv1Ik6cvI',
  },
  {
    id: 'dd-gangtok',
    kind: 'press',
    title: 'Inspiring Women of Sikkim — Exclusive TV Interview',
    titleNe: 'सिक्किमका प्रेरणादायी महिलाहरू — विशेष टिभी अन्तर्वार्ता',
    sourceOrLocation: 'Doordarshan (DD) Gangtok',
    sourceOrLocationNe: 'दूरदर्शन (DD) गान्तोक',
    yearOrTag: 'TV Broadcast',
    yearOrTagNe: 'टिभी प्रसारण',
    summary:
      'Official Doordarshan Gangtok broadcast documenting Cutting Edge Hair & Beauty, Blush, and organic culinary livelihoods.',
    summaryNe: 'कटिङ एज, ब्लश र प्राङ्गारिक खाद्य उद्यमशीलताबारे दूरदर्शन गान्तोकको आधिकारिक प्रसारण।',
    url: 'https://www.youtube.com/watch?v=vr6VxkkS8fY',
  },
  {
    id: 'myvillagemypride',
    kind: 'press',
    title: 'Sikkim: An Inspiring Story of Shova Rai',
    titleNe: 'सिक्किम: शोभा राईको प्रेरणादायी कथा',
    sourceOrLocation: 'My Village My Pride',
    sourceOrLocationNe: 'माई भिलेज माई प्राइड',
    yearOrTag: '2015 Feature',
    yearOrTagNe: '२०१५ फिचर लेख',
    summary:
      'Biographical editorial feature tracing Shova Rai’s early perseverance and rise as an entrepreneur and mentor in Sikkim.',
    summaryNe: 'प्रारम्भिक सङ्घर्षदेखि सिक्किमकी सफल उद्यमी र परामर्शदातासम्मको जीवनी लेख।',
    url: 'https://myvillagemypride.wordpress.com/2015/02/04/sikkim-an-inspiring-story-of-shova-rai/',
  },
];

export interface TestimonialItem {
  id: string;
  firstName: string;
  context: string; // e.g., "Bridal Client · Gangtok" or "Zayel's Customer"
  quote: string;
}

/**
 * [PLACEHOLDER] Testimonials Section
 * Currently empty, so the Testimonials text section is automatically hidden.
 * Add 3 real customer reviews with first names below to automatically display the section:
 * Example:
 * {
 *   id: 't1',
 *   firstName: 'Anjali',
 *   context: 'Bridal Client, Gangtok',
 *   quote: '...'
 * }
 */
export const TESTIMONIALS_DATA: TestimonialItem[] = [];

export interface GalleryPhotoItem {
  id: string;
  category: 'Salon & Beauty' | 'Fashion' | 'Pickles & Baking' | 'Craft & Art' | 'Awards' | 'Client Notes';
  title: string;
  titleNe: string;
  webp: string;
  fallback: string;
  alt: string;
  width: number;
  height: number;
}

export const GALLERY_PHOTOS: GalleryPhotoItem[] = [
  {
    id: 'gal-cut1',
    category: 'Salon & Beauty',
    title: 'Cutting Edge Salon Styling',
    titleNe: 'कटिङ एज सैलुन स्टाइलिङ',
    webp: '/webp/cut1.webp',
    fallback: '/cut1.jpg',
    alt: 'Cutting Edge Hair and Beauty salon styling station in Namnang, Gangtok',
    width: 769,
    height: 960,
  },
  {
    id: 'gal-cut2',
    category: 'Salon & Beauty',
    title: 'Hair Transformation & Bridal Studio',
    titleNe: 'हेयर ट्रान्सफर्मेसन र ब्राइडल स्टुडियो',
    webp: '/webp/cut2.webp',
    fallback: '/cut2.jpg',
    alt: 'Bridal hair and beauty makeover session at Cutting Edge Gangtok',
    width: 960,
    height: 640,
  },
  {
    id: 'gal-blush1',
    category: 'Fashion',
    title: 'Blush Fashion Store Display',
    titleNe: 'ब्लश फेसन स्टोर प्रदर्शनी',
    webp: '/webp/Blush.webp',
    fallback: '/Blush.jpeg',
    alt: 'Curated apparel display inside Blush Fashion Store in Namnang, Gangtok',
    width: 960,
    height: 720,
  },
  {
    id: 'gal-blush2',
    category: 'Fashion',
    title: 'Contemporary & Ethnic Attire',
    titleNe: 'आधुनिक तथा परम्परागत पहिरन',
    webp: '/webp/Blush1.webp',
    fallback: '/Blush1.jpg',
    alt: 'Ethnic and contemporary outfits curated at Blush Fashion Store Gangtok',
    width: 714,
    height: 960,
  },
  {
    id: 'gal-pickle1',
    category: 'Pickles & Baking',
    title: "Zayel's Organic Dalle Khorsani",
    titleNe: 'जायल्स प्राङ्गारिक डल्ले खोर्सानी',
    webp: '/webp/Pickle1.webp',
    fallback: '/Pickle1.PNG',
    alt: "Zayel's Organic Pickles artisanal Dalle Khorsani jar in Sikkim",
    width: 960,
    height: 917,
  },
  {
    id: 'gal-baking',
    category: 'Pickles & Baking',
    title: 'Artisanal Baking Craft',
    titleNe: 'घरेलु बेकिङ कला',
    webp: '/webp/Gallery4-1.webp',
    fallback: '/Gallery4-1.jpeg',
    alt: 'Shova Rai baking artisanal treats in Gangtok, Sikkim',
    width: 777,
    height: 960,
  },
  {
    id: 'gal-block1',
    category: 'Craft & Art',
    title: 'Traditional Wooden Block Printing',
    titleNe: 'परम्परागत काठको ब्लक प्रिन्टिङ',
    webp: '/webp/Block1.webp',
    fallback: '/Block1.jpeg',
    alt: 'Hand-carved wooden block printing on natural cotton textile by Shova Rai',
    width: 746,
    height: 960,
  },
  {
    id: 'gal-block2',
    category: 'Craft & Art',
    title: 'Himalayan Textile Motif Craft',
    titleNe: 'हिमाली कपडा र शिल्पकला',
    webp: '/webp/Block2.webp',
    fallback: '/Block2.jpeg',
    alt: 'Traditional Himalayan motifs printed using natural dyes in Gangtok',
    width: 800,
    height: 960,
  },
  {
    id: 'gal-award1',
    category: 'Awards',
    title: 'Union Minister Felicitation',
    titleNe: 'केन्द्रीय मन्त्रीद्वारा सम्मान',
    webp: '/webp/Award1.webp',
    fallback: '/Award1.jpeg',
    alt: 'Shova Rai receiving felicitation from Union Minister Smt. Shobha Karandlaje',
    width: 960,
    height: 919,
  },
  {
    id: 'gal-award2',
    category: 'Awards',
    title: 'National Commission for Women Honor',
    titleNe: 'राष्ट्रिय महिला आयोग सम्मान',
    webp: '/webp/Award2.webp',
    fallback: '/Award2.jpeg',
    alt: 'Shova Rai honored by National Commission for Women (NCW) in New Delhi',
    width: 490,
    height: 960,
  },
  {
    id: 'gal-community',
    category: 'Awards',
    title: 'Grassroots Women Livelihood Workshop',
    titleNe: 'महिला जीविकोपार्जन सीप कार्यशाला',
    webp: '/webp/Gallery8.webp',
    fallback: '/Gallery8.jpeg',
    alt: 'Community skill mentorship and women empowerment workshop in Sikkim',
    width: 804,
    height: 960,
  },
  {
    id: 'gal-review1',
    category: 'Client Notes',
    title: 'Handwritten Client Note',
    titleNe: 'ग्राहकको हस्तलिखित प्रतिक्रिया',
    webp: '/webp/Review1.webp',
    fallback: '/Review1.jpg',
    alt: 'Handwritten client appreciation note for Shova Rai in Gangtok',
    width: 750,
    height: 750,
  },
];

export interface FAQItem {
  question: string;
  questionNe: string;
  answer: string;
  answerNe: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What are the opening hours for Cutting Edge Salon and Blush in Gangtok?',
    questionNe: 'गान्तोकस्थित कटिङ एज सैलुन र ब्लश बुटिक खुल्ने समय के हो?',
    answer:
      'Cutting Edge Hair & Beauty is open Monday to Sunday from 9:00 AM to 7:00 PM (closed on Tuesdays). Blush Fashion Store is open daily from 10:00 AM to 7:30 PM. Zayel’s Organic Pickles accepts WhatsApp and phone inquiries daily from 8:00 AM to 8:00 PM.',
    answerNe:
      'कटिङ एज हेयर एन्ड ब्युटी सोमबारदेखि आइतबार बिहान ९:०० देखि साँझ ७:०० बजेसम्म खुल्छ (मंगलबार बन्द)। ब्लश फेसन स्टोर दैनिक बिहान १०:०० देखि साँझ ७:३० बजेसम्म खुला रहन्छ।',
  },
  {
    question: 'How do I book a hair styling or bridal makeup appointment?',
    questionNe: 'हेयर स्टाइलिङ वा दुलही मेकअपको अपोइन्टमेन्ट कसरी बुक गर्ने?',
    answer:
      'Tap any "Book on WhatsApp" button on this website or call +91 7431833009 directly. For bridal makeup in Gangtok, sharing your wedding date and preferred look via WhatsApp helps us confirm trial slots and availability promptly.',
    answerNe:
      'वेबसाइटमा रहेको "Book on WhatsApp" बटन थिचेर वा +91 7431833009 मा सिधै फोन गरेर समय बुक गर्न सक्नुहुन्छ।',
  },
  {
    question: 'Where in Namnang, Gangtok are Cutting Edge and Blush located?',
    questionNe: 'नामनाङ, गान्तोकमा कटिङ एज र ब्लश ठ्याक्कै कहाँ छन्?',
    answer:
      'Both Cutting Edge Hair & Beauty and Blush Fashion Store are located along Namnang Road, Gangtok, East Sikkim (PIN 737101)—about 5 minutes from MG Marg near the Namnang viewpoint. Use the "Get Directions" button in the Businesses or Contact section for exact Google Maps navigation.',
    answerNe:
      'दुवै उद्यम एमजी मार्गबाट करिब ५ मिनेटको दूरीमा रहेको नामनाङ रोड, गान्तोक (७३७१०१) मा अवस्थित छन्।',
  },
  {
    question: "How can I order and receive Zayel's Organic Pickles?",
    questionNe: 'जायल्स अर्गानिक अचार कसरी अर्डर र डेलिभरी पाउन सकिन्छ?',
    answer:
      "Select your preferred variety—such as Whole Dalle Khorsani, Fiery Paste, Bamboo Shoot (Tama), or Gundruk—and tap 'Order on WhatsApp'. Orders can be picked up in Gangtok or arranged for local and courier delivery; we confirm stock, jar sizes, and shipping charges directly on WhatsApp.",
    answerNe:
      'आफूलाई मनपर्ने अचार छनोट गरी "Order on WhatsApp" मा क्लिक गर्नुहोस्। गान्तोकमा सिधै लिन वा स्थानीय र कुरियर डेलिभरीको व्यवस्था मिलाउन सकिन्छ।',
  },
  {
    question: 'Why are salon prices listed as "Ask on WhatsApp"?',
    questionNe: 'सैलुन सेवाको मूल्य किन ह्वाट्सएपमा सोध्न भनिएको हो?',
    answer:
      'Hair treatments (such as coloring, rebonding, keratin, and bridal makeup packages) depend on hair length, hair condition, and customization. Messaging on WhatsApp ensures you receive an accurate quote tailored to your exact request before visiting.',
    answerNe:
      'हेयर कलरिङ, रिबोन्डिङ र दुलही मेकअप जस्ता सेवा कपालको लम्बाइ र आवश्यकताअनुसार फरक हुने भएकाले सही मूल्य ह्वाट्सएपमार्फत प्रदान गरिन्छ।',
  },
  {
    question: 'Can women Self-Help Groups (SHGs) or organizations invite Shova Rai for mentorship?',
    questionNe: 'के महिला समूह वा संस्थाले तालिम वा परामर्शका लागि सम्पर्क गर्न सक्छन्?',
    answer:
      'Yes. Shova Rai conducts vocational workshops in baking, salon skills, FSSAI-aligned food preservation, and traditional block printing for women’s SHGs, youth, and welfare groups across Sikkim. Use the Mentorship & Collaboration form below to share your dates and requirements.',
    answerNe:
      'अवश्य। शोभा राईले सिक्किमभरिका महिला समूह, युवा र संस्थाहरूका लागि बेकिङ, सैलुन सीप, खाद्य प्रशोधन र ब्लक प्रिन्टिङ तालिम सञ्चालन गर्नुहुन्छ।',
  },
  {
    question: "Are Zayel's Organic Pickles FSSAI certified and preservative-free?",
    questionNe: 'के जायल्स अर्गानिक अचार FSSAI प्रमाणित र रसायनरहित छन्?',
    answer:
      "Yes. A Taste of Sikkim – Zayel's Pickle is FSSAI food safety certified and UDYAM registered. Every batch is prepared with locally sourced organic Sikkim produce and natural spices without synthetic chemical preservatives.",
    answerNe:
      'हो, जायल्स अचार FSSAI खाद्य सुरक्षा प्रमाणित र UDYAM दर्ता भएको उद्यम हो, र रासायनिक संरक्षक बिना तयार पारिन्छ।',
  },
];
