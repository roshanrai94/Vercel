import React, { useState, useEffect, useRef } from 'react';
import {
  Compass,
  GraduationCap,
  Scissors,
  ShoppingBag,
  Users,
  Award,
  Calendar,
  MapPin,
  TrendingUp,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Target,
  Layers,
  ArrowRight
} from 'lucide-react';

export interface TimelineMilestone {
  id: string;
  period: string;
  year: string;
  title: string;
  category: 'all' | 'enterprise' | 'mastery' | 'mentorship' | 'recognition';
  categoryLabel: string;
  subtitle: string;
  location: string;
  summary: string;
  achievements: string[];
  keyImpact: string;
  statsValue: string;
  statsLabel: string;
  iconName: 'Compass' | 'GraduationCap' | 'Scissors' | 'ShoppingBag' | 'Users' | 'Award';
}

export const milestonesData: TimelineMilestone[] = [
  {
    id: 'milestone-roots',
    period: 'Early Beginnings',
    year: '1998 – 2003',
    title: 'Artistic Foundations & Independent Vision',
    category: 'mastery',
    categoryLabel: 'Creative Foundations',
    subtitle: 'Self-Taught Roots in Himalayan Craft & Confectionery',
    location: 'Gangtok, Sikkim',
    summary:
      'Driven by an innate entrepreneurial instinct and curiosity, Mrs. Shova Rai immersed herself in baking, fine embroidery, beauty styling, and traditional Himalayan crafts. Working independently in Gangtok, she laid the foundation for lifelong creative self-reliance and economic independence.',
    achievements: [
      'Mastered traditional handicraft techniques, embroidery, and home confectionery through self-directed practice',
      'Cultivated an enduring philosophy of financial independence for Himalayan women and youth',
      'Developed foundational experiments in organic skincare and hair styling formulations'
    ],
    keyImpact: 'Built an authentic, multi-disciplinary skill base that catalyzed future enterprises.',
    statsValue: '100% Self-Initiated',
    statsLabel: 'Early Foundation',
    iconName: 'Compass'
  },
  {
    id: 'milestone-training',
    period: 'Foundation Phase',
    year: '2004 – 2006',
    title: 'Elite Technical Masteries in Mumbai & Delhi',
    category: 'mastery',
    categoryLabel: 'National Skill Mastery',
    subtitle: 'Advanced Cosmetology & Commercial Baking Academies',
    location: 'Mumbai & New Delhi',
    summary:
      'Determined to bring world-class quality standards back to Sikkim, she traveled to top national academies. She completed rigorous cosmetology training under industry legends at Nalini & Yasmin Hair Academy in Mumbai, followed by specialized commercial confectionery training at Truffle Nation in Delhi.',
    achievements: [
      'Certified in advanced precision hair cutting and international bridal makeover design at Nalini & Yasmin Mumbai',
      'Completed commercial baking and master confectionery certification at Truffle Nation in New Delhi',
      'Studied traditional block printing guilds and regional Himalayan handicraft restoration'
    ],
    keyImpact: 'Imported premier metropolitan standards to Sikkim, bridging the gap with national beauty hubs.',
    statsValue: '2 Premier Academies',
    statsLabel: 'Master Certifications',
    iconName: 'GraduationCap'
  },
  {
    id: 'milestone-cutting-edge',
    period: 'Flagship Launch',
    year: '2007',
    title: 'Establishing Cutting Edge Hair & Beauty',
    category: 'enterprise',
    categoryLabel: 'Flagship Enterprise',
    subtitle: 'Landmark Salon & Professional Grooming Studio in Gangtok',
    location: 'Namnang, Gangtok, Sikkim',
    summary:
      'Established Cutting Edge Hair & Beauty at Namnang, Gangtok. It quickly grew into Sikkim’s premier styling destination, renowned for transformative hair design, bridal beauty, certified hygiene, and creating dignified career pathways for aspiring youth.',
    achievements: [
      'Pioneered international-standard styling, hair coloring, rebonding, and organic skincare in Gangtok',
      'Created a landmark bridal destination trusted by generations of Sikkimese families',
      'Instituted an ongoing salon apprenticeship program, training dozens of local women as certified professionals'
    ],
    keyImpact: 'Over 17 years of trusted service, serving thousands of clients and mentoring 100+ stylists.',
    statsValue: '100+ Trainees',
    statsLabel: 'Est. 2007 • Namnang',
    iconName: 'Scissors'
  },
  {
    id: 'milestone-expansion',
    period: 'Multi-Sector Growth',
    year: '2010 – 2018',
    title: 'Blush Fashion Boutique & Zayel’s Pickle',
    category: 'enterprise',
    categoryLabel: 'Multi-Sector Expansion',
    subtitle: 'Contemporary Fashion & Authentic Himalayan Food Preserves',
    location: 'Namnang Hub & Rural Sikkim',
    summary:
      'Diversified into a multi-industry entrepreneur by founding Blush Fashion Store to celebrate contemporary and traditional attire, and launching "A Taste of Sikkim – Zayel’s Pickle" to introduce organic Dalle Khorsani, bamboo shoot, and wild Himalayan preserves to wider audiences.',
    achievements: [
      'Curated contemporary western fashion alongside traditional Sikkimese handloom elegance at Blush',
      'Secured FSSAI registration & UDYAM MSME certification for Zayel’s Pickle food enterprise',
      'Built direct sourcing partnerships with rural Himalayan farming households for chemical-free produce'
    ],
    keyImpact: 'Expanded the local economic ecosystem across beauty, fashion, and organic agriculture.',
    statsValue: '3 Active Ventures',
    statsLabel: 'FSSAI Registered',
    iconName: 'ShoppingBag'
  },
  {
    id: 'milestone-mentorship',
    period: 'Social Leadership',
    year: '2019 – Present',
    title: 'Community Empowerment & Inclusive Mentorship',
    category: 'mentorship',
    categoryLabel: 'Livelihood Mentorship',
    subtitle: 'Uplifting Rural Women SHGs & Differently-Abled Artisans',
    location: 'Statewide Across Sikkim',
    summary:
      'Deepened her lifelong commitment to community welfare. Mrs. Shova Rai spearheads hands-on vocational workshops for rural women Self-Help Groups (SHGs), delivers motivational lectures at Sikkim University, and conducts inclusive baking and craft training for differently-abled individuals.',
    achievements: [
      'Conducted livelihood training and skill transfer workshops for rural Self-Help Groups (SHGs) across Sikkim',
      'Designed adaptive vocational programs teaching commercial baking and handicrafts to differently-abled youth',
      'Appointed as Guest Speaker & Resource Person at Sikkim University and state enterprise summits'
    ],
    keyImpact: 'Empowered 500+ women and marginalized individuals with actionable financial self-reliance.',
    statsValue: '500+ Livelihoods',
    statsLabel: 'Statewide Impact',
    iconName: 'Users'
  },
  {
    id: 'milestone-recognition',
    period: 'National Horizon',
    year: '2024 – 2026 & Beyond',
    title: 'National NCW Felicitation & Global Scaling',
    category: 'recognition',
    categoryLabel: 'National Recognition',
    subtitle: 'Honored by National Commission for Women (NCW) in New Delhi',
    location: 'New Delhi & Pan-India',
    summary:
      'Honored in New Delhi by the National Commission for Women (NCW), Government of India, for outstanding contributions to women’s entrepreneurship and grassroots leadership. Today, she is scaling Sikkim’s culinary and artisanal heritage toward nationwide and international markets.',
    achievements: [
      'Felicitated in New Delhi by the National Commission for Women (NCW) under the Government of India',
      'Featured in national news broadcasts, Doordarshan (DD) Gangtok specials, and major podcast platforms',
      'Championing digital regional expansion and sustainable packaging for Himalayan organic preserves'
    ],
    keyImpact: 'Cemented Sikkim’s reputation for visionary women-led enterprise on the national stage.',
    statsValue: 'NCW National Honor',
    statsLabel: 'Govt. of India',
    iconName: 'Award'
  }
];

export const ProfessionalJourneyTimeline: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'enterprise' | 'mastery' | 'mentorship' | 'recognition'>('all');
  const [activeMilestoneId, setActiveMilestoneId] = useState<string>(milestonesData[0].id);
  const [expandedId, setExpandedId] = useState<string | null>(milestonesData[0].id);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const milestoneRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const filteredMilestones = selectedFilter === 'all'
    ? milestonesData
    : milestonesData.filter((m) => m.category === selectedFilter);

  // Scroll Progress and Active Node Calculation
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress relative to container in viewport
      const totalDist = rect.height - windowHeight * 0.5;
      const currentDist = windowHeight * 0.5 - rect.top;

      let pct = (currentDist / totalDist) * 100;
      pct = Math.max(0, Math.min(100, pct));
      setScrollProgress(pct);

      // Find which milestone card is closest to the middle of the viewport
      let closestId = activeMilestoneId;
      let minDistance = Infinity;

      filteredMilestones.forEach((m) => {
        const el = milestoneRefs.current[m.id];
        if (el) {
          const elRect = el.getBoundingClientRect();
          const elementMid = elRect.top + elRect.height / 2;
          const viewportMid = windowHeight / 2;
          const dist = Math.abs(elementMid - viewportMid);
          if (dist < minDistance) {
            minDistance = dist;
            closestId = m.id;
          }
        }
      });

      if (closestId && closestId !== activeMilestoneId) {
        setActiveMilestoneId(closestId);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [filteredMilestones, activeMilestoneId]);

  const scrollToMilestone = (id: string) => {
    setActiveMilestoneId(id);
    setExpandedId(id);
    const element = milestoneRefs.current[id];
    if (element) {
      const yOffset = -120;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const currentIdx = filteredMilestones.findIndex((m) => m.id === activeMilestoneId);

  const handleNext = () => {
    if (currentIdx < filteredMilestones.length - 1) {
      scrollToMilestone(filteredMilestones[currentIdx + 1].id);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      scrollToMilestone(filteredMilestones[currentIdx - 1].id);
    }
  };

  const renderIcon = (name: TimelineMilestone['iconName'], className: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className={className} />;
      case 'GraduationCap':
        return <GraduationCap className={className} />;
      case 'Scissors':
        return <Scissors className={className} />;
      case 'ShoppingBag':
        return <ShoppingBag className={className} />;
      case 'Users':
        return <Users className={className} />;
      case 'Award':
        return <Award className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  return (
    <section id="journey" className="py-24 sm:py-32 bg-stone-950 text-stone-100 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-radial-gradient from-amber-600/5 via-stone-950/40 to-stone-950 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-amber-700/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>PROFESSIONAL TIMELINE</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-amber-100 leading-tight mb-4">
            The Professional Journey
          </h2>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            From humble beginnings in Gangtok to founding landmark salons, multi-sector enterprises, and earning national felicitation by the Government of India.
          </p>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-8 p-1.5 rounded-2xl bg-stone-900/90 border border-amber-500/20 backdrop-blur-md max-w-2xl mx-auto">
            {[
              { id: 'all', label: 'All Milestones' },
              { id: 'mastery', label: 'Masteries & Roots' },
              { id: 'enterprise', label: 'Enterprises & Salons' },
              { id: 'mentorship', label: 'Social Mentorship' },
              { id: 'recognition', label: 'National Recognition' }
            ].map((tab) => {
              const isActive = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id as typeof selectedFilter)}
                  className={`px-3 sm:px-4 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-amber-500 text-stone-950 shadow-md font-bold'
                      : 'text-stone-400 hover:text-amber-200 hover:bg-stone-800/80'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Guided Step Navigator Bar */}
        <div className="max-w-xl mx-auto mb-12 bg-stone-900/70 border border-stone-800 rounded-2xl p-3 flex items-center justify-between gap-3 text-xs backdrop-blur-sm shadow-md">
          <button
            onClick={handlePrev}
            disabled={currentIdx <= 0}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-xl transition-all font-medium ${
              currentIdx <= 0
                ? 'opacity-40 cursor-not-allowed text-stone-500'
                : 'text-amber-300 hover:bg-stone-800 hover:text-amber-200 cursor-pointer'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous Era</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-stone-400 text-[11px] uppercase tracking-wider font-semibold">
              Milestone {currentIdx >= 0 ? currentIdx + 1 : 1} of {filteredMilestones.length}
            </span>
            <span className="text-stone-600">•</span>
            <span className="font-serif font-bold text-amber-300 truncate max-w-[140px] sm:max-w-[200px]">
              {filteredMilestones[currentIdx >= 0 ? currentIdx : 0]?.period}
            </span>
          </div>

          <button
            onClick={handleNext}
            disabled={currentIdx >= filteredMilestones.length - 1}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-xl transition-all font-medium ${
              currentIdx >= filteredMilestones.length - 1
                ? 'opacity-40 cursor-not-allowed text-stone-500'
                : 'text-amber-300 hover:bg-stone-800 hover:text-amber-200 cursor-pointer'
            }`}
          >
            <span className="hidden sm:inline">Next Era</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Main Vertical Timeline Layout */}
        <div className="relative">
          
          {/* Central Vertical Timeline Track (Desktop: Centered; Mobile: Left-aligned) */}
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 md:-translate-x-1/2 w-0.5 bg-stone-800/80">
            {/* Scroll-Triggered Golden Fill */}
            <div
              className="w-full bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 transition-all duration-150 ease-out shadow-[0_0_12px_rgba(245,158,11,0.8)]"
              style={{ height: `${scrollProgress}%` }}
            />
          </div>

          {/* Timeline Nodes & Milestone Cards */}
          <div className="space-y-12 sm:space-y-16">
            {filteredMilestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              const isActive = activeMilestoneId === milestone.id;
              const isExpanded = expandedId === milestone.id;

              return (
                <div
                  key={milestone.id}
                  ref={(el) => (milestoneRefs.current[milestone.id] = el)}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } group`}
                >
                  
                  {/* Central Node Anchor */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 z-20">
                    <button
                      type="button"
                      onClick={() => scrollToMilestone(milestone.id)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl cursor-pointer ${
                        isActive
                          ? 'bg-amber-500 text-stone-950 scale-125 ring-4 ring-amber-500/30 ring-offset-2 ring-offset-stone-950'
                          : 'bg-stone-900 border-2 border-amber-600/60 text-amber-300 hover:border-amber-400 hover:scale-110'
                      }`}
                      title={`Jump to ${milestone.title}`}
                    >
                      {renderIcon(milestone.iconName, 'w-4 h-4')}
                    </button>
                  </div>

                  {/* Empty Spacer on Alternate Side (Desktop only) */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Milestone Content Card */}
                  <div
                    className={`w-full md:w-1/2 pl-14 md:pl-0 ${
                      isEven ? 'md:pr-12' : 'md:pl-12'
                    }`}
                  >
                    <div
                      className={`rounded-2xl transition-all duration-300 p-6 sm:p-7 border backdrop-blur-md relative overflow-hidden ${
                        isActive
                          ? 'bg-stone-900/95 border-amber-500/50 shadow-[0_12px_40px_rgba(245,158,11,0.15)] ring-1 ring-amber-500/30'
                          : 'bg-stone-900/60 border-stone-800/80 hover:border-amber-500/30 hover:bg-stone-900/80'
                      }`}
                    >
                      {/* Subtle Ambient Top Border Highlight */}
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

                      {/* Card Header & Unboxed Metadata */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                          <Calendar className="w-3.5 h-3.5" />
                          <span className="font-mono">{milestone.year}</span>
                          <span className="text-stone-600">·</span>
                          <span className="text-amber-200/90 font-serif">{milestone.period}</span>
                        </div>

                        <div className="flex items-center gap-1.5 text-xs text-stone-400">
                          <MapPin className="w-3 h-3 text-amber-500" />
                          <span>{milestone.location}</span>
                        </div>
                      </div>

                      {/* Main Title & Subtitle */}
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-100 group-hover:text-amber-200 transition-colors leading-snug mb-1">
                        {milestone.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-amber-300/80 font-medium mb-3.5 flex items-center gap-1.5">
                        <Target className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{milestone.subtitle}</span>
                      </p>

                      {/* Summary Paragraph */}
                      <p className="text-stone-300 text-sm leading-relaxed mb-4">
                        {milestone.summary}
                      </p>

                      {/* Key Quantitative Highlight Strip */}
                      <div className="p-3 rounded-xl bg-stone-950/70 border border-stone-800/90 flex items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                            <TrendingUp className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block">
                              {milestone.statsLabel}
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-amber-200">
                              {milestone.statsValue}
                            </span>
                          </div>
                        </div>

                        <span className="text-[11px] text-stone-400 font-medium hidden sm:inline text-right max-w-[180px]">
                          {milestone.keyImpact}
                        </span>
                      </div>

                      {/* Interactive Expandable Detailed Achievements */}
                      <div className="border-t border-stone-800/80 pt-3">
                        <button
                          type="button"
                          onClick={() => setExpandedId(isExpanded ? null : milestone.id)}
                          className="w-full flex items-center justify-between text-xs font-semibold text-amber-300 hover:text-amber-200 transition-colors py-1 cursor-pointer"
                        >
                          <span className="flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5 text-amber-400" />
                            <span>{isExpanded ? 'Hide Key Milestones' : 'View Key Milestones & Details'}</span>
                          </span>
                          <span className="text-[11px] text-stone-400">
                            {isExpanded ? 'Collapse ▲' : `${milestone.achievements.length} Points ▼`}
                          </span>
                        </button>

                        {isExpanded && (
                          <div className="mt-3 space-y-2 text-xs text-stone-300 pl-1 border-l-2 border-amber-500/30 ml-1 py-1 animate-fadeIn">
                            {milestone.achievements.map((item, aIdx) => (
                              <div key={aIdx} className="flex items-start gap-2 pl-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                                <span className="leading-relaxed">{item}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Callout: Continued Legacy */}
        <div className="mt-16 sm:mt-20 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-stone-900/90 via-stone-900/70 to-stone-900/90 border border-amber-500/30 max-w-3xl mx-auto text-center backdrop-blur-md shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-emerald-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Continuously Evolving Legacy</span>
          </div>
          <h4 className="text-xl sm:text-2xl font-serif font-bold text-amber-100 mb-2">
            Pioneering Sikkim’s Future with Purpose
          </h4>
          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-5 max-w-xl mx-auto">
            Mrs. Shova Rai continues to mentor the next generation of Himalayan entrepreneurs, expanding craft preservation, organic culinary heritage, and regional women’s livelihood programs.
          </p>
          <a
            href="#ventures"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-md hover:scale-105 transition-all"
          >
            <span>Explore Enterprises &amp; Ventures</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
