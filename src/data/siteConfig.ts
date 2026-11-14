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
  directionsUrl: 'https://maps.google.com/?q=Namnang+Road+Gangtok+Sikkim+737101',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Namnang%20Road,%20Gangtok,%20Sikkim%20737101&t=&z=16&ie=UTF8&iwloc=&output=embed',

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
  category: string;
  established: string;
  description: string;
  highlights: string[];
  hours: string;
  address: string;
  imageWebp: string;
  imageFallback: string;
  imageAlt: string;
  width: number;
  height: number;
  whatsappMessage: string;
  directionsUrl: string;
}

export const BUSINESSES: BusinessItem[] = [
  {
    id: 'cutting-edge',
    name: 'Cutting Edge Hair & Beauty',
    category: 'Hair Salon & Bridal Studio',
    established: 'Est. 2007 · Namnang, Gangtok',
    description:
      'Trusted hair salon in Gangtok for modern cuts, coloring, rebonding, organic skin care, and bridal makeup in Namnang. Trained at Nalini & Yasmin Hair Academy, Mumbai.',
    highlights: [
      'Precision haircuts, coloring, perms & rebonding',
      'Bridal makeup Gangtok & traditional Sikkimese styling',
      'Apprenticeships & salon skill mentorship',
    ],
    hours: 'Mon–Sun: 9:00 AM – 7:00 PM (Closed Tuesday)',
    address: 'Namnang Road, Gangtok, Sikkim 737101',
    imageWebp: '/webp/cut1.webp',
    imageFallback: '/cut1.jpg',
    imageAlt: 'Cutting Edge Hair and Beauty salon styling interior in Namnang, Gangtok',
    width: 769,
    height: 960,
    whatsappMessage:
      'Hi Shova, I would like to book an appointment at Cutting Edge Hair & Beauty in Namnang, Gangtok.',
    directionsUrl:
      'https://maps.google.com/?q=Cutting+Edge+Hair+and+Beauty+Namnang+Gangtok+Sikkim+737101',
  },
  {
    id: 'blush',
    name: 'Blush Fashion Store',
    category: 'Boutique & Ethnic Wear',
    established: 'Namnang, Gangtok',
    description:
      'Handpicked boutique in Gangtok featuring contemporary western wear, winter outerwear, and traditional Sikkimese ethnic attire with personal styling support.',
    highlights: [
      'Curated gowns, smart casuals & seasonal outerwear',
      'Traditional Himalayan & Sikkimese ethnic outfits',
      'Personal event & bridal wardrobe styling',
    ],
    hours: 'Mon–Sun: 10:00 AM – 7:30 PM',
    address: 'Namnang Hub, Gangtok, Sikkim 737101',
    imageWebp: '/webp/Blush.webp',
    imageFallback: '/Blush.jpeg',
    imageAlt: 'Blush Fashion Store boutique display in Namnang, Gangtok',
    width: 960,
    height: 720,
    whatsappMessage:
      'Hi Shova, I would like to inquire about outfits and collections at Blush Fashion Store, Gangtok.',
    directionsUrl: 'https://maps.google.com/?q=Blush+Fashion+Store+Namnang+Gangtok+Sikkim+737101',
  },
  {
    id: 'zayels',
    name: "Zayel's Organic Pickles",
    category: 'A Taste of Sikkim · FSSAI Certified',
    established: 'FSSAI & UDYAM Registered · Gangtok',
    description:
      'Small-batch organic pickles Sikkim consumers love—crafted from farm-sourced Dalle Khorsani, bamboo shoot, and Gundruk with zero synthetic preservatives.',
    highlights: [
      '100% organic Dalle Khorsani (Whole & Fiery Paste)',
      'Traditional Bamboo Shoot (Tama) & Gundruk preserves',
      'FSSAI Food Safety & UDYAM registered micro-enterprise',
    ],
    hours: 'Orders Open Daily: 8:00 AM – 8:00 PM',
    address: 'Namnang Dispatch Hub, Gangtok, Sikkim 737101',
    imageWebp: '/webp/Pickle1.webp',
    imageFallback: '/Pickle1.PNG',
    imageAlt: "Zayel's Organic Pickles - A Taste of Sikkim Dalle Khorsani jar",
    width: 960,
    height: 917,
    whatsappMessage:
      "Hi Shova, I would like to order Zayel's Organic Pickles (A Taste of Sikkim). Please share availability.",
    directionsUrl: 'https://maps.google.com/?q=Namnang+Gangtok+Sikkim+737101',
  },
];

export interface SalonService {
  id: string;
  name: string;
  details: string;
  /**
   * [PLACEHOLDER] Replace 'Ask on WhatsApp' with exact ₹ pricing (e.g. '₹600 onwards') when ready.
   */
  price: string;
}

export const SALON_SERVICES: SalonService[] = [
  {
    id: 'haircut-styling',
    name: 'Precision Haircut & Blow-Dry Styling',
    details: 'Tailored cuts and styling for women, men, and special events.',
    price: 'Ask on WhatsApp',
  },
  {
    id: 'hair-color',
    name: 'Global Hair Coloring & Highlights',
    details: 'Ammonia-conscious gloss, root touch-ups, balayage & custom shades.',
    price: 'Ask on WhatsApp',
  },
  {
    id: 'rebonding-perms',
    name: 'Hair Rebonding, Keratin & Perms',
    details: 'Long-lasting smoothing, curl texture transformations & repair.',
    price: 'Ask on WhatsApp',
  },
  {
    id: 'bridal-makeup',
    name: 'Bridal Makeup & Ethnic Makeover (Gangtok)',
    details: 'Complete Sikkimese traditional and contemporary bridal packages.',
    price: 'Ask on WhatsApp',
  },
  {
    id: 'skin-care',
    name: 'Organic Skin Therapy & Facials',
    details: 'Hydrating and clarifying facials tailored for Himalayan climates.',
    price: 'Ask on WhatsApp',
  },
  {
    id: 'salon-training',
    name: 'Salon Mentorship & Skill Consultation',
    details: 'Hands-on hair styling guidance and salon business mentorship.',
    price: 'Ask on WhatsApp',
  },
];

export interface PickleProduct {
  id: string;
  name: string;
  description: string;
  badge: string;
  /**
   * [PLACEHOLDER] Replace with jar sizes & prices (e.g. '250g · ₹[Price]') when ready.
   */
  priceOrSize: string;
  imageWebp?: string;
  imageFallback?: string;
  imageAlt: string;
}

export const PICKLE_PRODUCTS: PickleProduct[] = [
  {
    id: 'dalle-whole',
    name: 'Organic Dalle Khorsani (Whole)',
    description:
      'Sun-ripened Sikkimese red cherry peppers preserved in pure mustard oil and traditional spices without artificial preservatives.',
    badge: 'Signature Variety',
    priceOrSize: 'Ask price & jar sizes on WhatsApp',
    imageWebp: '/webp/Pickle1.webp',
    imageFallback: '/Pickle1.PNG',
    imageAlt: "Zayel's Organic Whole Dalle Khorsani Pickle jar from Sikkim",
  },
  {
    id: 'dalle-paste',
    name: 'Organic Dalle Khorsani (Fiery Paste)',
    description:
      'Smooth, potent Dalle Khorsani chilli paste crafted in small batches—ideal alongside momos, thukpa, and daily meals.',
    badge: 'Bestseller',
    priceOrSize: 'Ask price & jar sizes on WhatsApp',
    imageWebp: '/webp/Pickle2.webp',
    imageFallback: '/Pickle2.PNG',
    imageAlt: "Zayel's Organic Dalle Khorsani Paste preserve",
  },
  {
    id: 'bamboo-shoot',
    name: 'Traditional Bamboo Shoot Pickle (Tama)',
    description:
      'Tender Himalayan bamboo shoots cured using authentic Sikkimese heirloom fermentation and spice blends.',
    badge: 'Heirloom Recipe',
    priceOrSize: 'Ask price & jar sizes on WhatsApp',
    imageWebp: '/webp/Pickle1.webp',
    imageFallback: '/Pickle1.PNG',
    imageAlt: 'Traditional Sikkimese Bamboo Shoot Tama Pickle',
  },
  {
    id: 'gundruk-pickle',
    name: 'Traditional Gundruk Pickle',
    description:
      'Tangy sun-dried fermented leafy greens blended with roasted Himalayan spices and cold-pressed oil.',
    badge: 'Organic Heritage',
    priceOrSize: 'Ask price & jar sizes on WhatsApp',
    imageWebp: '/webp/Pickle2.webp',
    imageFallback: '/Pickle2.PNG',
    imageAlt: 'Traditional Gundruk fermented greens pickle from Sikkim',
  },
  {
    id: 'mixed-veg-pickle',
    name: 'Mixed Himalayan Vegetable Pickle',
    description:
      'Seasonal mountain vegetables pickled with mustard seeds, turmeric, and aromatic whole spices.',
    badge: 'FSSAI Certified',
    priceOrSize: 'Ask price & jar sizes on WhatsApp',
    imageWebp: '/webp/Pickle1.webp',
    imageFallback: '/Pickle1.PNG',
    imageAlt: 'Mixed Himalayan Vegetable Organic Pickle from Sikkim',
  },
];

export interface AwardOrPressItem {
  id: string;
  kind: 'award' | 'press';
  title: string;
  sourceOrLocation: string;
  yearOrTag: string;
  summary: string;
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
    sourceOrLocation: 'New Delhi · All India Radio (News On AIR)',
    yearOrTag: 'National Recognition',
    summary:
      'Honored in New Delhi by the National Commission for Women for contributions to women’s entrepreneurship and community empowerment in Sikkim.',
    url: 'https://newsonair.gov.in/ncw-felicitates-sikkim-entrepreneur-shova-rai-for-her-contributions/',
  },
  {
    id: 'union-minister',
    kind: 'award',
    title: 'Felicitation by Union Minister Smt. Shobha Karandlaje',
    sourceOrLocation: 'Gangtok, Sikkim',
    yearOrTag: 'Ministerial Honor',
    summary:
      'Recognized in Gangtok for grassroots micro-enterprise leadership and mentoring women Self-Help Groups across Sikkim.',
  },
  {
    id: 'sikkim-gyan-manch',
    kind: 'award',
    title: 'Sikkim Gyan Manch Appreciation Award',
    sourceOrLocation: 'Gangtok, Sikkim',
    yearOrTag: 'Community Honor',
    summary:
      'Awarded for advancing community skill education, inclusive training, and local enterprise resilience.',
  },
  {
    id: 'ins-podcast',
    kind: 'press',
    title: 'I.N.S Podcast (Season 2, Episode 4) — Building Businesses & Breaking Barriers',
    sourceOrLocation: 'I.N.S. Production Darjeeling · YouTube',
    yearOrTag: 'Video Podcast',
    summary:
      'In-depth podcast conversation covering Shova Rai’s journey across baking, hairstyling, painting, and women’s empowerment.',
    url: 'https://www.youtube.com/watch?v=ZuFv1Ik6cvI',
  },
  {
    id: 'dd-gangtok',
    kind: 'press',
    title: 'Inspiring Women of Sikkim — Exclusive TV Interview',
    sourceOrLocation: 'Doordarshan (DD) Gangtok',
    yearOrTag: 'TV Broadcast',
    summary:
      'Official Doordarshan Gangtok broadcast documenting Cutting Edge Hair & Beauty, Blush, and organic culinary livelihoods.',
    url: 'https://www.youtube.com/watch?v=vr6VxkkS8fY',
  },
  {
    id: 'myvillagemypride',
    kind: 'press',
    title: 'Sikkim: An Inspiring Story of Shova Rai',
    sourceOrLocation: 'My Village My Pride',
    yearOrTag: '2015 Feature',
    summary:
      'Biographical editorial feature tracing Shova Rai’s early perseverance and rise as an entrepreneur and mentor in Sikkim.',
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
    webp: '/webp/Review1.webp',
    fallback: '/Review1.jpg',
    alt: 'Handwritten client appreciation note for Shova Rai in Gangtok',
    width: 750,
    height: 750,
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What are the opening hours for Cutting Edge Salon and Blush in Gangtok?',
    answer:
      'Cutting Edge Hair & Beauty is open Monday to Sunday from 9:00 AM to 7:00 PM (closed on Tuesdays). Blush Fashion Store is open daily from 10:00 AM to 7:30 PM. Zayel’s Organic Pickles accepts WhatsApp and phone inquiries daily from 8:00 AM to 8:00 PM.',
  },
  {
    question: 'How do I book a hair styling or bridal makeup appointment?',
    answer:
      'Tap any "Book on WhatsApp" button on this website or call +91 7431833009 directly. For bridal makeup in Gangtok, sharing your wedding date and preferred look via WhatsApp helps us confirm trial slots and availability promptly.',
  },
  {
    question: 'Where in Namnang, Gangtok are Cutting Edge and Blush located?',
    answer:
      'Both Cutting Edge Hair & Beauty and Blush Fashion Store are located along Namnang Road, Gangtok, East Sikkim (PIN 737101)—about 5 minutes from MG Marg near the Namnang viewpoint. Use the "Get Directions" button in the Businesses or Contact section for exact Google Maps navigation.',
  },
  {
    question: "How can I order and receive Zayel's Organic Pickles?",
    answer:
      "Select your preferred variety—such as Whole Dalle Khorsani, Fiery Paste, Bamboo Shoot (Tama), or Gundruk—and tap 'Order on WhatsApp'. Orders can be picked up in Gangtok or arranged for local and courier delivery; we confirm stock, jar sizes, and shipping charges directly on WhatsApp.",
  },
  {
    question: 'Why are salon prices listed as "Ask on WhatsApp"?',
    answer:
      'Hair treatments (such as coloring, rebonding, keratin, and bridal makeup packages) depend on hair length, hair condition, and customization. Messaging on WhatsApp ensures you receive an accurate quote tailored to your exact request before visiting.',
  },
  {
    question: 'Can women Self-Help Groups (SHGs) or organizations invite Shova Rai for mentorship?',
    answer:
      'Yes. Shova Rai conducts vocational workshops in baking, salon skills, FSSAI-aligned food preservation, and traditional block printing for women’s SHGs, youth, and welfare groups across Sikkim. Use the Mentorship & Collaboration form below to share your dates and requirements.',
  },
  {
    question: "Are Zayel's Organic Pickles FSSAI certified and preservative-free?",
    answer:
      "Yes. A Taste of Sikkim – Zayel's Pickle is FSSAI food safety certified and UDYAM registered. Every batch is prepared with locally sourced organic Sikkim produce and natural spices without synthetic chemical preservatives.",
  },
];
