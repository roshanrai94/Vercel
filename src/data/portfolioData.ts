import { PhotoMapping, Venture, Accolade, PublicSpeaking, ChronicleItem, EditorialItem, Endorsement } from '../types';

export const DEFAULT_PHOTO_MAPPING: PhotoMapping = {
  hero_portrait: {
    alt: "Mrs. Shova Rai Portrait",
    label: "Hero Portrait",
    path: "/Hero.jpg",
    recommendedSize: "800x1000px (Portrait)"
  },
  about_portrait: {
    alt: "Mrs. Shova Rai - Entrepreneur & Visionary",
    label: "About Section Portrait",
    path: "/Shova.jpg",
    recommendedSize: "800x1000px (Portrait)"
  },
  inspiration_roots: {
    alt: "Mrs. Shova Rai - Early Artisanal Creations & Roots",
    label: "Inspiration & Roots Photo Space",
    recommendedSize: "600x600px (Square)"
  },
  cutting_edge_1: {
    alt: "Cutting Edge Hair & Beauty Display 1",
    label: "Cutting Edge Display 1",
    path: "/cut1.jpg",
    recommendedSize: "800x600px"
  },
  cutting_edge_2: {
    alt: "Cutting Edge Hair & Beauty Display 2",
    label: "Cutting Edge Display 2",
    path: "/cut2.jpg",
    recommendedSize: "800x600px"
  },
  cutting_edge_3: {
    alt: "Cutting Edge Hair & Beauty Display 3",
    label: "Cutting Edge Display 3",
    path: "/Cut3.jpg",
    recommendedSize: "800x600px"
  },
  cutting_edge_4: {
    alt: "Cutting Edge Hair & Beauty Video Demonstration",
    label: "Cutting Edge Video Demonstration",
    path: "/Cut4.mp4",
    recommendedSize: "HD Video MP4"
  },
  cutting_edge_5: {
    alt: "Cutting Edge Hair & Beauty Video 1",
    label: "Cutting Edge Video 1",
    path: "/Cuti1.mp4",
    recommendedSize: "HD Video MP4"
  },
  cutting_edge_6: {
    alt: "Cutting Edge Hair & Beauty Video 2",
    label: "Cutting Edge Video 2",
    path: "/Cuti2.mp4",
    recommendedSize: "HD Video MP4"
  },
  cutting_edge_7: {
    alt: "Cutting Edge Hair & Beauty Video 3",
    label: "Cutting Edge Video 3",
    path: "/Hair1.mp4",
    recommendedSize: "HD Video MP4"
  },
  cutting_edge_8: {
    alt: "Cutting Edge Hair & Beauty Video 4",
    label: "Cutting Edge Video 4",
    path: "/Cut5-1.mp4?v=2",
    recommendedSize: "HD Video MP4"
  },
  blush_1: {
    alt: "Blush Fashion Store Interior Display",
    label: "Blush Store Display",
    path: "/Blush.jpeg",
    recommendedSize: "800x600px"
  },
  blush_2: {
    alt: "Blush Fashion Showcase & Collection",
    label: "Blush Fashion Showcase",
    path: "/Blush1.jpg",
    recommendedSize: "800x600px"
  },
  blush_3: {
    alt: "Blush Fashion Boutique Video Walkthrough",
    label: "Blush Store Video Walkthrough",
    path: "/Blush2.mp4",
    recommendedSize: "HD Video MP4"
  },
  zayel_1: {
    alt: "A Taste of Sikkim - Zayel's Pickle Display 1",
    label: "Zayel's Pickle Display 1",
    path: "/Pickle1.PNG",
    recommendedSize: "800x600px"
  },
  zayel_2: {
    alt: "A Taste of Sikkim - Zayel's Pickle Display 2",
    label: "Zayel's Pickle Display 2",
    path: "/Pickle2.PNG",
    recommendedSize: "800x600px"
  },
  block_print_1: {
    alt: "Block Printing & Traditional Artistry Display 1",
    label: "Block Printing Display 1",
    path: "/Block1.jpeg",
    recommendedSize: "800x600px"
  },
  block_print_2: {
    alt: "Block Printing & Traditional Artistry Display 2",
    label: "Block Printing Display 2",
    path: "/Block2.jpeg",
    recommendedSize: "800x600px"
  },
  block_print_3: {
    alt: "Block Printing & Traditional Artistry Video Demo",
    label: "Block Printing Video Demonstration",
    path: "/Block3.mp4",
    recommendedSize: "HD Video MP4"
  },
  award_1: {
    alt: "Felicitation Display 1",
    label: "Felicitation Display 1",
    path: "/Award1.jpeg",
    recommendedSize: "800x600px"
  },
  award_2: {
    alt: "Felicitation Display 2",
    label: "Felicitation Display 2",
    path: "/Award2.jpeg",
    recommendedSize: "800x600px"
  },
  award_3: {
    alt: "Felicitation Display 3",
    label: "Felicitation Display 3",
    path: "/Award3.jpeg",
    recommendedSize: "800x600px"
  },
  award_4: {
    alt: "Felicitation Display 4",
    label: "Felicitation Display 4",
    path: "/Award4.jpg",
    recommendedSize: "800x600px"
  },
  award_5: {
    alt: "Felicitation Display 5",
    label: "Felicitation Display 5",
    path: "/Award5.jpeg",
    recommendedSize: "800x600px"
  },
  award_6: {
    alt: "Felicitation Display 6",
    label: "Felicitation Display 6",
    path: "/Award6.jpg",
    recommendedSize: "800x600px"
  },
  award_7: {
    alt: "Felicitation Display 7",
    label: "Felicitation Display 7",
    path: "/Award7.jpg",
    recommendedSize: "800x600px"
  },
  award_8: {
    alt: "Divyangjan Welfare Felicitation",
    label: "Divyangjan Welfare Felicitation",
    path: "/Award8.mp4?v=2",
    recommendedSize: "HD Video MP4"
  },
  gallery_1: {
    alt: "Master Hair Styling Showcase",
    label: "Gallery Display 1",
    path: "/Gallery1.png",
    recommendedSize: "800x600px"
  },
  gallery_3: {
    alt: "Baking with Love",
    label: "Gallery Display 3",
    path: "/Gallery4-1.jpeg",
    recommendedSize: "800x600px"
  },
  gallery_4: {
    alt: "Painting, a Passion for Art",
    label: "Gallery Display 4",
    path: "/Gallery9-1.mp4",
    recommendedSize: "HD Video MP4"
  },
  gallery_5: {
    alt: "Women Livelihood Skill Workshop Video",
    label: "Gallery Video Display 5",
    path: "/Gal1.mp4",
    recommendedSize: "HD Video MP4"
  },
  gallery_6: {
    alt: "Customizing Fashion at Blush Fashion Store",
    label: "Gallery Video Display 6",
    path: "/Gal2.mp4",
    recommendedSize: "HD Video MP4"
  },
  gallery_7: {
    alt: "Traditional Himalayan Craft & Enterprise",
    label: "Gallery Display 7",
    path: "/Gallery7.PNG",
    recommendedSize: "800x600px"
  },
  gallery_8: {
    alt: "Grassroots Empowerment Showcase",
    label: "Gallery Display 8",
    path: "/Gallery8.jpeg",
    recommendedSize: "800x600px"
  },
  gallery_9: {
    alt: "Paint Video 1",
    label: "Paint Video 1",
    path: "/Paint1.mp4",
    recommendedSize: "HD Video MP4"
  },
  gallery_10: {
    alt: "Paint Video 2",
    label: "Paint Video 2",
    path: "/Paint2.mp4",
    recommendedSize: "HD Video MP4"
  },
  gallery_11: {
    alt: "Paint Video 3",
    label: "Paint Video 3",
    path: "/Paint3.mp4",
    recommendedSize: "HD Video MP4"
  },
  gallery_12: {
    alt: "Certificate",
    label: "Certificate Display",
    path: "/Certi.jpg",
    recommendedSize: "800x600px"
  },
  gallery_13: {
    alt: "Gallery Video Showcase 9",
    label: "Gallery Video 9",
    path: "/Gal3.mp4",
    recommendedSize: "HD Video MP4"
  },
  gallery_14: {
    alt: "Felicitation at Sikkim Premier League",
    label: "Gallery Video Display 10",
    path: "/SPL1.mp4",
    recommendedSize: "HD Video MP4"
  },
  gallery_15: {
    alt: "The Passion for Paintings",
    label: "Gallery Video Display 11",
    path: "/Gallery11-1.mp4",
    recommendedSize: "HD Video MP4"
  },
  gallery_16: {
    alt: "Baking Class & Culinary Workshop",
    label: "Gallery Video 12",
    path: "/Gallery5-1.mp4?v=2",
    recommendedSize: "HD Video MP4"
  },
  review_1: {
    alt: "Client Review & Feedback Display 1",
    label: "Review Display 1",
    path: "/Review1.jpg",
    recommendedSize: "800x600px"
  },
  review_2: {
    alt: "Client Review & Feedback Display 2",
    label: "Review Display 2",
    path: "/Review2.jpg",
    recommendedSize: "800x600px"
  },
  review_3: {
    alt: "Client Review & Feedback Display 3",
    label: "Review Display 3",
    path: "/Review3.jpg",
    recommendedSize: "800x600px"
  },
  review_4: {
    alt: "Client Review & Feedback Display 4",
    label: "Review Display 4",
    path: "/Review4.jpg",
    recommendedSize: "800x600px"
  },
  review_5: {
    alt: "Client Review & Feedback Display 5",
    label: "Review Display 5",
    path: "/Review5.jpg",
    recommendedSize: "800x600px"
  },
  review_6: {
    alt: "Client Review & Feedback Display 6",
    label: "Review Display 6",
    path: "/Review6.jpg",
    recommendedSize: "800x600px"
  },
  endorsement_1: {
    alt: "Handwritten Review & Endorsement 1",
    label: "Review & Testimony 1",
    path: "/Review1.jpg",
    recommendedSize: "800x1000px"
  },
  endorsement_2: {
    alt: "Handwritten Review & Endorsement 2",
    label: "Review & Testimony 2",
    path: "/Review2.jpg",
    recommendedSize: "800x1000px"
  },
  endorsement_3: {
    alt: "Handwritten Review & Endorsement 3",
    label: "Review & Testimony 3",
    path: "/Review3.jpg",
    recommendedSize: "800x1000px"
  },
  endorsement_4: {
    alt: "Handwritten Review & Endorsement 4",
    label: "Review & Testimony 4",
    path: "/Review4.jpg",
    recommendedSize: "800x1000px"
  },
  endorsement_5: {
    alt: "Handwritten Review & Endorsement 5",
    label: "Review & Testimony 5",
    path: "/Review5.jpg",
    recommendedSize: "800x1000px"
  },
  endorsement_6: {
    alt: "Handwritten Review & Endorsement 6",
    label: "Review & Testimony 6",
    path: "/Review6.jpg",
    recommendedSize: "800x1000px"
  }
};


export const personalData = {
  name: "Mrs. Shova Rai",
  title: "Entrepreneur & Visionary",
  subtitle: "Sikkim's Visionary Leader & Mentor",
  roles: ["Entrepreneur", "Artist", "Mentor", "Baker", "Hairstylist", "Community Builder"],
  location: "Namnang, Gangtok, Sikkim, India",
  email: "cuttingedge723@gmail.com",
  phone: "+91 7431833009",
  whatsapp: "+91 7431833009",
  whatsappUrl: "https://wa.me/917431833009",
  socialLinks: {
    whatsapp: {
      name: "WhatsApp Direct Message",
      url: "https://wa.me/917431833009",
      handle: "+91 7431833009"
    },
    facebook: {
      name: "Shova Rai Facebook Page",
      url: "https://www.facebook.com/share/1FGMEjv4Qr/",
      handle: "Shova Rai Official"
    },
    cuttingEdgeInstagram: {
      name: "Cutting Edge Instagram",
      url: "https://www.instagram.com/cuttingedge_hair_salon_gtk__?igsh=aG8xamhqcHlvMmpx",
      handle: "@cuttingedge_hair_salon_gtk__"
    },
    blushInstagram: {
      name: "Blush Instagram Page",
      url: "https://www.instagram.com/blush.clothingstore?igsh=MWtpeGFvMm84eDJ2ag==",
      handle: "@blush.clothingstore"
    },
    youtube: {
      name: "Shova Rai YouTube Channel",
      url: "https://youtube.com/@shovarai963?si=q1TtfmDNex0Nekrs",
      handle: "@shovarai963"
    }
  },
  quote: "Welcome! I am Shova Rai—An entrepreneur, master artisan, hairstylist, baker, mentor, and community builder dedicated to bringing beauty, authentic Himalayan flavours, creativity, and sustainable livelihood opportunities to Gangtok and beyond.",
  bioParagraphs: [
    "Mrs. Shova Rai is a self-made entrepreneur from Gangtok, Sikkim, with over two decades of experience across beauty, fashion, food entrepreneurship, arts, and community empowerment. Through sheer resilience, determination, and continuous self-driven learning, she has built multiple successful enterprises completely on her own while uplifting local communities, self-help groups (SHGs), and youth across Sikkim.",
    "Rooted in Himalayan heritage and driven by an innate passion for artistic craftsmanship, Shova Rai seamlessly blends traditional craftsmanship with modern business practices.",
    "Today, her work stands at the intersection of economic independence for women, heritage preservation, sustainable organic living, and creative skill development."
  ],
  personalPhilosophy: "Built on self-reliance, dedication, and passion—crafting a legacy of creative entrepreneurship and community empowerment through independent perseverance."
};

export const statsData = [
  { label: "Years of Excellence", value: "20+", description: "In Beauty, Fashion, Food & Craft" },
  { label: "Business Ventures", value: "4+", description: "Built & Scaled in Gangtok" },
  { label: "National & State Honors", value: "10+", description: "Recognized by NCW & Ministers" },
  { label: "Skill Workshops", value: "50+", description: "Empowering Women & SHGs" }
];

export const qualificationsData = [
  {
    institution: "Nalini & Yasmin Hair Academy (Mumbai)",
    qualification: "Advanced Hair Styling, Cutting, Perms, Chemical Services & Academy Operations",
    badge: "Master Stylist"
  },
  {
    institution: "Truffle Nation Baking School",
    qualification: "Baking & Bakery Management",
    badge: "Certified Baker"
  },
  {
    institution: "FSSAI & UDYAM Registered",
    qualification: "Certified Organic & Artisanal Food Entrepreneur",
    badge: "Food Licensee"
  },
  {
    institution: "Handicrafts & Block Printing Guilds",
    qualification: "Professional Block Printing & Traditional Himalayan Handicrafts Training",
    badge: "Master Artisan"
  }
];

export const chroniclesData: ChronicleItem[] = [
  {
    id: "c1",
    period: "Early Beginnings",
    title: "Inspiration & Roots",
    subtitle: "Self-Taught Vision & Independent Passion",
    description: "Built her creative and artistic foundation entirely through her own initiative, innate curiosity, and self-taught dedication to baking, embroidery, beauty styling, and traditional Himalayan crafts in Gangtok."
  },
  {
    id: "c2",
    period: "Foundation Phase",
    title: "Mastering Professional Skills",
    subtitle: "Trainings in Mumbai & Delhi",
    description: "Traveled to premier institutions including Nalini & Yasmin Hair Academy in Mumbai and Truffle Nation in Delhi to gain master-level technical expertise in hair styling and commercial baking."
  },
  {
    id: "c3",
    period: "2007",
    title: "Cutting Edge Hair & Beauty",
    subtitle: "Establishing a Landmark Salon in Gangtok",
    description: "Established Cutting Edge Hair & Beauty Salon at Namnang, Gangtok. Provided top-tier grooming, bridal styling, and hair transformations using international standards."
  },
  {
    id: "c4",
    period: "2010 - 2020",
    title: "Multi-Sector Expansion",
    subtitle: "Fashion, Organic Food & Craft Arts",
    description: "Launched Blush Fashion Store catering to contemporary and Sikkimese ethnic wear. Founded Zayel's Pickle producing authentic Dalle Khorsani and Himalayan organic preserves. Developed Block Printing art workshops."
  },
  {
    id: "c5",
    period: "Ongoing",
    title: "Community Livelihood & Mentorship",
    subtitle: "Uplifting Women, Youth & SHGs",
    description: "Active mentorship across Sikkim: guiding Self-Help Groups (SHGs), conducting skill workshops at Sikkim University, and facilitating livelihood training for differently-abled individuals."
  },
  {
    id: "c6",
    period: "2026 & Beyond",
    title: "Digital Legacy & Regional Scaling",
    subtitle: "Promoting Sikkim's Entrepreneurial Spirit Globally",
    description: "Creating a digital showcase of Sikkim's entrepreneurial capability, fostering regional partnerships, and expanding artisanal products to nationwide markets."
  }
];

export const venturesData: Venture[] = [
  {
    id: "v1",
    name: "Cutting Edge Hair & Beauty",
    tagline: "Premier Hair Styling, Bridal Care & Salon Mentorship in Gangtok",
    est: "Est. 2007 • Namnang, Gangtok",
    description: "Cutting Edge Hair & Beauty is a trusted destination for modern hair transformations, organic skin care, intricate bridal styling, and hair academy mentorship. Established with international quality standards to bring advanced beauty solutions to Sikkim.",
    highlights: [
      "Advanced hair cuts, coloring, perms & rebonding treatments",
      "Customized Sikkimese & contemporary bridal makeover packages",
      "Certified hygiene, premium products & personalized consultations",
      "Skill training & internship ground for aspiring hairstylists"
    ],
    visuals: [
      { slotKey: "cutting_edge_1", title: "Cutting Edge Display 1", caption: "Premier salon interior & styling station" },
      { slotKey: "cutting_edge_2", title: "Cutting Edge Display 2", caption: "Bridal makeover & hair transformation session" },
      { slotKey: "cutting_edge_3", title: "Cutting Edge Display 3", caption: "Precision hair cutting and styling showcase" },
      { slotKey: "cutting_edge_4", title: "Cutting Edge Video Walkthrough", caption: "Video walkthrough of Cutting Edge Hair & Beauty" },
      { slotKey: "cutting_edge_7", title: "Cutting Edge Video 3", caption: "Video showcase of Cutting Edge Hair & Beauty 3" },
      { slotKey: "cutting_edge_8", title: "Cutting Edge Video 4", caption: "Video showcase of Cutting Edge Hair & Beauty 4" }
    ]
  },
  {
    id: "v2",
    name: "Blush Fashion Store",
    tagline: "Curated Contemporary Apparel & Traditional Sikkimese Elegance",
    est: "Namnang, Gangtok",
    description: "Blush Fashion Store offers handpicked contemporary attire, ethnic Himalayan garments, and custom-styled fashion accessories designed to elevate style for all occasions.",
    highlights: [
      "Curated collection of modern dresses, outerwear & traditional attire",
      "Sourced with a focus on fabric quality, comfort, and timeless elegance",
      "Personalized styling assistance for clients and special events",
      "Located in the prime Namnang hub of Gangtok"
    ],
    visuals: [
      { slotKey: "blush_1", title: "Blush Store Display", caption: "Boutique interior & product display" },
      { slotKey: "blush_2", title: "Fashion Showcase", caption: "Contemporary & ethnic fashion collection" },
      { slotKey: "blush_3", title: "Blush Video Walkthrough", caption: "Live video tour of Blush Fashion Store" }
    ]
  },
  {
    id: "v3",
    name: "A Taste of Sikkim – Zayel's Pickle",
    tagline: "Authentic, Home-Crafted Organic Himalayan Pickles & Preserves",
    est: "FSSAI Registered • UDYAM Certified",
    description: "Zayel's Pickle brings the authentic, fiery, and soulful flavors of Sikkim to every table. Prepared in small batches using organic local ingredients like Dalle Khorsani (cherry pepper), bamboo shoots, Gundruk, and local spices without synthetic chemical preservatives.",
    highlights: [
      "Signature Organic Dalle Khorsani (Whole & Paste)",
      "Traditional Bamboo Shoot, Gundruk & Mixed Veg Pickles",
      "FSSAI Food Safety Certified & UDYAM Registered micro-enterprise",
      "Supports local Sikkimese organic farmers through direct procurement"
    ],
    visuals: [
      { slotKey: "zayel_1", title: "Zayel's Pickle Display 1", caption: "A Taste of Sikkim - Artisanal Organic Pickle" },
      { slotKey: "zayel_2", title: "Zayel's Pickle Display 2", caption: "Authentic Dalle Khorsani & Sikkimese Preserves" }
    ]
  },
  {
    id: "v4",
    name: "Block Printing & Traditional Artistry",
    tagline: "Eco-Friendly Textile Crafts, Hand-Carved Prints & Workshops",
    est: "Gangtok, Sikkim",
    description: "Celebrating traditional block printing and Himalayan motif art. Shova Rai crafts hand-printed fabrics, tote bags, scarves, and home decor items while hosting hands-on workshops to keep folk art traditions alive.",
    highlights: [
      "Hand-carved wooden block printing on natural fabrics",
      "Inspired by traditional Himalayan flora, fauna & cultural motifs",
      "Eco-conscious natural dyes and sustainable textile choices",
      "Community skill workshops for youth, artisans & hobbyists"
    ],
    visuals: [
      { slotKey: "block_print_1", title: "Block Photo Display 1", caption: "Hand-carved wooden block printing & textile art" },
      { slotKey: "block_print_2", title: "Block Photo Display 2", caption: "Traditional Himalayan artisan patterns & crafting" },
      { slotKey: "block_print_3", title: "Block Video Demo", caption: "Video walkthrough of traditional block printing process" }
    ]
  }
];

export const impactDomains = [
  {
    title: "Women Empowerment & Livelihoods",
    description: "Providing vocational training in beauty services, baking, and handicrafts to enable financial independence for women across rural and urban Sikkim."
  },
  {
    title: "Self-Help Group (SHG) Support",
    description: "Collaborating with local SHGs to standardize food processing, packaging, and marketing for organic pickles and handicrafts."
  },
  {
    title: "Mentorship for Differently-Abled Youth",
    description: "Conducting inclusive skill programs in partnership with welfare organizations to empower differently-abled individuals with sustainable vocational trades."
  },
  {
    title: "Himalayan Culture & Organic Living",
    description: "Promoting organic Sikkimese produce (Dalle, Bamboo, Gundruk) and eco-friendly traditional block printing to preserve local heritage."
  }
];

export const accoladesData: Accolade[] = [
  {
    id: "a1",
    title: "National Commission for Women (NCW) Felicitation",
    location: "New Delhi",
    date: "National Recognition"
  },
  {
    id: "a2",
    title: "Felicitation by Union Minister Smt. Shobha Karandlaje",
    location: "Gangtok, Sikkim",
    date: "Ministerial Honor"
  },
  {
    id: "a3",
    title: "Sikkim Gyan Manch Appreciation Award",
    location: "Gangtok, Sikkim",
    date: "Community Honor"
  },
  {
    id: "a4",
    title: "Resource Person & Guest Speaker at Sikkim University",
    location: "Sikkim University, Gangtok",
    date: "Academic Mentorship"
  },
  {
    id: "a5",
    title: "Commendation for Divyangjan Welfare & Inclusive Training",
    location: "Gangtok, Sikkim",
    date: "Social Impact Honor"
  }
];

export const publicSpeakingData: PublicSpeaking[] = [
  {
    role: "RESOURCE PERSON",
    event: "Entrepreneurship & Livelihood Skill Workshop for Youth",
    location: "Sikkim University, Gangtok"
  },
  {
    role: "GUEST SPEAKER",
    event: "Women's Economic Empowerment Summit & SHG Convention",
    location: "Gangtok, Sikkim"
  },
  {
    role: "MOTIVATIONAL SPEAKER",
    event: "Vocational Livelihoods for Differently-Abled Youth",
    location: "Divyangjan Welfare Assembly, Sikkim"
  },
  {
    role: "MASTER INSTRUCTOR",
    event: "Artisanal Food Processing & Hygiene Standards (FSSAI Aligned)",
    location: "Community Livelihood Center, Gangtok"
  }
];

export const photoAwardSlots = [
  { key: "award_1", label: "Union Minister Felicitation", sub: "Honored by Smt. Shobha Karandlaje for grassroots impact" },
  { key: "award_2", label: "National Commission for Women (NCW)", sub: "Honored in New Delhi for empowering women entrepreneurs" },
  { key: "award_3", label: "National Commission of Women, New Delhi", sub: "In the office of Chairperson, National Commission of Women, Delhi" },
  { key: "award_4", label: "Continuous Training and Learning", sub: "Engaging in ongoing skill development and educational workshops" },
  { key: "award_5", label: "Talk at District Administration Center, Gangtok", sub: "Speaking on community empowerment and livelihood initiatives" },
  { key: "award_6", label: "Interview at DD Gangtok", sub: "Sharing insights on women's entrepreneurship and social impact" },
  { key: "award_7", label: "Empowerment Excellence", sub: "National recognition for advancing women's livelihoods" },
  { key: "award_8", label: "Divyangjan Welfare Felicitation", sub: "Commendation for inclusive vocational training initiatives" }
];

export const editorialGalleryData: EditorialItem[] = [
  { id: "g1", title: "Master Hair Styling Showcase", category: "Beauty & Salon", photoKey: "gallery_1" },
  { id: "g3", title: "Baking with Love", category: "Baking with Love", photoKey: "gallery_3" },
  { id: "g4", title: "Painting, a Passion for Art", category: "Art & Painting", photoKey: "gallery_4" },
  { id: "g5", title: "Women Livelihood Skill Workshop Video", category: "Community Impact", photoKey: "gallery_5" },
  { id: "g6", title: "Customizing Fashion at Blush Fashion Store", category: "Fashion & Style", photoKey: "gallery_6" },
  { id: "g7", title: "Sikkimese Craft & Enterprise Display", category: "Traditional Craft", photoKey: "gallery_7" },
  { id: "g8", title: "Empowerment & Livelihood Showcase", category: "Community Impact", photoKey: "gallery_8" },
  { id: "g13", title: "Creative Enterprise Video Showcase", category: "Creative Visual Showcase", photoKey: "gallery_13" },
  { id: "g14", title: "Felicitation at Sikkim Premier League", category: "Awards & Recognition", photoKey: "gallery_14" },
  { id: "g15", title: "The Passion for Paintings", category: "Traditional Craft", photoKey: "gallery_15" },
  { id: "g16", title: "Hands-On Baking Class & Workshop", category: "Baking Class", photoKey: "gallery_16" }
];

export const nationalAlignments = [
  { title: "MSME Registered", desc: "Recognized micro-enterprise fostering local economic growth." },
  { title: "Startup India & Skill India", desc: "Aligned with national skill development and entrepreneurship goals." },
  { title: "Vocal for Local", desc: "Sourcing 100% organic local Sikkimese produce and materials." },
  { title: "Women Entrepreneurship (WEP)", desc: "Empowering female-led micro-enterprises across Eastern Himalayas." },
  { title: "FSSAI Food Safety Certified", desc: "Highest hygiene and safety standards for artisanal preserves." },
  { title: "Self-Help Group Networks", desc: "Direct training and market linkage for grassroots SHG women." }
];

export const endorsementsData: Endorsement[] = [
  { id: "e1", title: "Outstanding Leadership & Vision Review", photoKey: "endorsement_1" },
  { id: "e2", title: "Community Impact & Dedication Testimony", photoKey: "endorsement_2" },
  { id: "e3", title: "Professional Skill Training Endorsement", photoKey: "endorsement_3" },
  { id: "e4", title: "Artisanal Craftsmanship Recognition", photoKey: "endorsement_4" },
  { id: "e5", title: "Client Satisfaction & Success Review", photoKey: "endorsement_5" },
  { id: "e6", title: "Empowerment & Mentorship Testimony", photoKey: "endorsement_6" }
];
