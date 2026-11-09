import React, { useState, useEffect } from 'react';
import { Newspaper, Video, Music, Sparkles, ExternalLink, Play, Tv, Share2, Tag, Check, X, Film, RotateCcw, CheckCircle2 } from 'lucide-react';
import { mediaFeaturesData } from '../data/portfolioData';
import { MediaCategory, MediaFeature } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const MediaPress: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<MediaCategory>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<{
    title: string;
    embedUrl: string;
    source: string;
    originalUrl: string;
    platformName: string;
    type: 'youtube' | 'facebook';
    thumbnail?: string;
  } | null>(null);
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [replayKey, setReplayKey] = useState(0);

  const categories: { id: MediaCategory; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'all', label: t.media.filterAll, icon: Sparkles },
    { id: 'interview', label: t.media.filterInterview, icon: Video },
    { id: 'film', label: t.media.filterFilm, icon: Film },
    { id: 'music_video', label: t.media.filterMusic, icon: Music },
    { id: 'report', label: t.media.filterReport, icon: Newspaper },
  ];

  const nepaliMediaTranslations: Record<string, { title: string; description: string; sourceName?: string }> = {
    'media-ins-podcast': {
      title: 'शोभा राई | I.N.S पोडकास्ट | सिजन २ भाग ४',
      description: 'बहुआयामिक उद्यमी शोभा राई (बेकर, हेयरस्टाइलिस्ट, चित्रकार र रेष्टुरेन्ट व्यवसायी) सँगको प्रेरणादायी कुराकानी। उहाँले पुरुषप्रधान क्षेत्रमा महिलाहरूले सामना गर्ने चुनौती र आत्मनिर्भर बन्ने दृढ सङ्कल्पबारे चर्चा गर्नुभएको छ।',
      sourceName: 'I.N.S. प्रोडक्सन दार्जिलिङ'
    },
    'media-1': {
      title: 'सिक्किमका प्रेरणादायी महिलाहरू: श्रीमती शोभा राईसँग विशेष टिभी अन्तर्वार्ता',
      description: 'दूरदर्शन (DD) गान्तोकमा प्रसारित आधिकारिक अन्तर्वार्ता: कटिङ एज सैलुन र ब्लश स्थापनादेखि महिला सशक्तीकरण र परम्परागत सिक्किमेली खाद्य उद्यमशीलतासम्मको गौरवमय यात्रा।',
      sourceName: 'दूरदर्शन (DD) गान्तोक'
    },
    'media-ncw-newsonair': {
      title: 'सिक्किमकी उद्यमी शोभा राईलाई राष्ट्रिय महिला आयोग (NCW) द्वारा अभिनन्दन',
      description: 'अल इन्डिया रेडियो (News On AIR) द्वारा प्रकाशित आधिकारिक समाचार रिपोर्ट: नयाँ दिल्लीमा राष्ट्रिय महिला आयोग (NCW) द्वारा सिक्किमकी उद्यमी श्रीमती शोभा राईलाई महिला सशक्तीकरण र उद्यमशीलतामा पुर्‍याएको योगदानका लागि सम्मान।',
      sourceName: 'अल इन्डिया रेडियो (भारत सरकार)'
    },
    'media-myvillagemypride': {
      title: 'सिक्किम: शोभा राईको एक प्रेरणादायी कथा',
      description: 'माई भिलेज माई प्राइड पोर्टलमा प्रकाशित विशेष जीवनी: प्रारम्भिक सङ्घर्ष र हस्तकलाप्रतिको लगावदेखि सिक्किमकी अग्रणी महिला उद्यमी र परामर्शदातासम्मको यात्रा।',
      sourceName: 'माई भिलेज माई प्राइड पोर्टल'
    },
    'media-music-video-timi-chau': {
      title: '"तिमी छौ र त प्रिये" — म्युजिक भिडियो (श्रीमती शोभा राई अभिनीत)',
      description: 'वरिष्ठ गायक उदय सोताङ र मनिला सोताङको स्वरमा सजिएको कालजयी नेपाली गीतको आधिकारिक म्युजिक भिडियोमा श्रीमती शोभा राईको विशेष अभिनय, हिमाली सुन्दरता र कलाको प्रस्तुति।',
      sourceName: 'वरिष्ठ गायक उदय सोताङ र मनिला सोताङ'
    },
    'media-shortfilm-lift': {
      title: 'नेपाली लघु चलचित्र "लिफ्ट" — श्रीमती शोभा राईको अभिनय',
      description: 'श्रीमती शोभा राईको सशक्त अभिनय रहेको विचारोत्तेजक नेपाली छोटो चलचित्र "लिफ्ट", जसले मानवीय भावना र हिमाली कथालाई सुन्दर ढङ्गले प्रस्तुत गर्दछ।',
      sourceName: 'नेपाली सिनेमा र युट्युब'
    },
    'media-digital-sikkim': {
      title: 'स्थानीय उद्यमी विशेष: डिजिटल सिक्किम भिडियो अन्तर्वार्ता',
      description: 'सिक्किमको अग्रणी डिजिटल मञ्च "डिजिटल सिक्किम" द्वारा गान्तोकमा शोभा राईको बहुआयामिक उद्यमशीलता, सैलुन व्यवस्थापन र महिला सशक्तीकरणमाथि विशेष अन्तर्वार्ता।',
      sourceName: 'डिजिटल सिक्किम (अनलाइन मिडिया)'
    },
    'media-sikkim-com-baking': {
      title: 'आत्मनिर्भरता: कसरी श्रीमती शोभा राईले बेकिङ रोजेर स्वावलम्बन हासिल गरिन्',
      description: 'सिक्किम डट कम र डिजिटल सिक्किममा प्रस्तुत प्रेरणादायी फिचर: बेकिङप्रतिको लगावलाई आत्मनिर्भर व्यवसायमा बदलेर अन्य गृहिणीहरूलाई प्रेरित गरेको कथा।',
      sourceName: 'सिक्किम डट कम र डिजिटल सिक्किम'
    }
  };

  const filteredMedia = selectedCategory === 'all'
    ? mediaFeaturesData
    : mediaFeaturesData.filter((item) => item.category === selectedCategory);

  const getVideoEmbed = (url: string) => {
    const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|(?:embed|v)\/))([\w-]{11})/);
    if (ytMatch) {
      return {
        type: 'youtube' as const,
        embedUrl: `https://www.youtube-nocookie.com/embed/${ytMatch[1]}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&enablejsapi=1`,
        platformName: 'YouTube',
      };
    }
    if (url.includes('facebook.com') && (url.includes('/videos/') || url.includes('/watch/'))) {
      return {
        type: 'facebook' as const,
        embedUrl: `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=0&autoplay=1&width=500`,
        platformName: 'Facebook',
      };
    }
    return null;
  };

  const getCategoryBadge = (category: MediaFeature['category'], title?: string) => {
    switch (category) {
      case 'interview':
        if (title && title.toLowerCase().includes('podcast')) {
          return {
            label: language === 'ne' ? 'भिडियो पोडकास्ट' : 'Video Podcast',
            color: 'bg-rose-500/20 text-rose-300 border-rose-500/30'
          };
        }
        return {
          label: language === 'ne' ? 'भिडियो अन्तर्वार्ता' : 'Video Interview',
          color: 'bg-rose-500/20 text-rose-300 border-rose-500/30'
        };
      case 'film':
        return {
          label: language === 'ne' ? 'लघु चलचित्र' : 'Short Film',
          color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
        };
      case 'report':
        return {
          label: language === 'ne' ? 'समाचार तथा प्रेस' : 'Press & News Report',
          color: 'bg-blue-500/20 text-blue-300 border-blue-500/30'
        };
      case 'music_video':
        return {
          label: language === 'ne' ? 'म्युजिक भिडियो' : 'Music Video',
          color: 'bg-purple-500/20 text-purple-300 border-purple-500/30'
        };
      case 'feature':
        return {
          label: language === 'ne' ? 'प्रसारण फिचर' : 'Broadcast Feature',
          color: 'bg-amber-500/20 text-amber-300 border-amber-500/30'
        };
      default:
        return {
          label: language === 'ne' ? 'मिडिया कभरेज' : 'Media Mention',
          color: 'bg-stone-700/40 text-stone-300 border-stone-600/30'
        };
    }
  };

  const handleShare = (item: MediaFeature) => {
    const title = language === 'ne' && nepaliMediaTranslations[item.id]
      ? nepaliMediaTranslations[item.id].title
      : item.title;
    const text = language === 'ne' && nepaliMediaTranslations[item.id]
      ? nepaliMediaTranslations[item.id].description
      : item.description;

    if (navigator.share) {
      navigator.share({
        title,
        text,
        url: item.url,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(item.url);
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  useEffect(() => {
    if (!activeVideo) {
      setIsVideoEnded(false);
      return;
    }

    const handleMessage = (event: MessageEvent) => {
      // YouTube Iframe API onStateChange ended event (data: 0)
      if (typeof event.data === 'string') {
        try {
          const parsed = JSON.parse(event.data);
          if (parsed.event === 'onStateChange' && parsed.info === 0) {
            setIsVideoEnded(true);
          }
        } catch {
          // ignore non-json messages
        }
      }
      // Facebook video player events
      if (event.origin && event.origin.includes('facebook.com')) {
        if (typeof event.data === 'string' && (event.data.includes('finished') || event.data.includes('ended'))) {
          setIsVideoEnded(true);
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [activeVideo]);

  const handleReplay = () => {
    setIsVideoEnded(false);
    setReplayKey((k) => k + 1);
  };

  const handleCardClick = (item: MediaFeature) => {
    const video = getVideoEmbed(item.url);
    const itemTitle = language === 'ne' && nepaliMediaTranslations[item.id]
      ? nepaliMediaTranslations[item.id].title
      : item.title;
    const itemSource = language === 'ne' && nepaliMediaTranslations[item.id]?.sourceName
      ? nepaliMediaTranslations[item.id].sourceName!
      : item.sourceName;

    if (video) {
      const ytMatch = item.url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|(?:embed|v)\/))([\w-]{11})/);
      const thumb = ytMatch
        ? `https://i.ytimg.com/vi/${ytMatch[1]}/maxresdefault.jpg`
        : (item.thumbnail || '/Hero.jpg');

      setIsVideoEnded(false);
      setReplayKey((k) => k + 1);
      setActiveVideo({
        title: itemTitle,
        embedUrl: video.embedUrl,
        source: itemSource,
        originalUrl: item.url,
        platformName: video.platformName,
        type: video.type,
        thumbnail: thumb,
      });
    } else {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="media" className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-rose-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.media.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-amber-100 leading-tight">
            {t.media.heading}
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto my-4 rounded-full" />
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
            {t.media.subheading}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const count = cat.id === 'all'
              ? mediaFeaturesData.length
              : mediaFeaturesData.filter((i) => i.category === cat.id).length;
            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-bold shadow-[0_4px_15px_rgba(245,158,11,0.3)] scale-105'
                    : 'bg-stone-800/80 text-stone-300 hover:bg-stone-800 hover:text-amber-200 border border-stone-700/60'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-stone-950' : 'text-amber-400'}`} />
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-stone-950/20 text-stone-950 font-bold' : 'bg-stone-700/60 text-stone-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredMedia.map((item) => {
            const translatedInfo = language === 'ne' ? nepaliMediaTranslations[item.id] : null;
            const itemTitle = translatedInfo ? translatedInfo.title : item.title;
            const itemDesc = translatedInfo ? translatedInfo.description : item.description;
            const itemSource = (translatedInfo && translatedInfo.sourceName) ? translatedInfo.sourceName : item.sourceName;

            const badge = getCategoryBadge(item.category, item.title);
            const isCopied = copiedId === item.id;
            const videoInfo = getVideoEmbed(item.url);
            const hasEmbed = !!videoInfo;
            const ytMatch = item.url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|(?:embed|v)\/))([\w-]{11})/);
            const ytId = ytMatch ? ytMatch[1] : null;
            const thumbnailSrc = ytId
              ? `https://i.ytimg.com/vi/${ytId}/maxresdefault.jpg`
              : (item.thumbnail || '/Hero.jpg');

            const platformLabel = item.url.includes('facebook.com')
              ? 'Facebook'
              : ytId
              ? 'YouTube'
              : 'External Link';

            return (
              <article
                key={item.id}
                className="group flex flex-col justify-between rounded-2xl bg-stone-950/80 border border-stone-800 hover:border-amber-500/50 shadow-lg hover:shadow-[0_8px_30px_rgba(245,158,11,0.15)] transition-all duration-300 overflow-hidden"
              >
                {/* Visual Thumbnail / Card Top */}
                <div
                  onClick={() => handleCardClick(item)}
                  className="relative aspect-[16/9] w-full overflow-hidden bg-stone-900 cursor-pointer"
                  title={hasEmbed ? `Click to watch "${itemTitle}"` : `Click to open link`}
                >
                  <img
                    src={thumbnailSrc}
                    alt={itemTitle}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      if (ytId && !img.src.includes('hqdefault.jpg')) {
                        img.src = `https://i.ytimg.com/vi/${ytId}/hqdefault.jpg`;
                      } else {
                        img.src = '/Hero.jpg';
                      }
                    }}
                  />

                  {/* Clean subtle hover effect (not obscuring the YouTube thumbnail) */}
                  <div className="absolute inset-0 bg-stone-950/5 group-hover:bg-black/25 transition-colors duration-300 pointer-events-none" />

                  {/* Category Badge */}
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border backdrop-blur-md shadow-sm ${badge.color}`}>
                      {item.category === 'interview' && <Video className="w-3 h-3" />}
                      {item.category === 'film' && <Film className="w-3 h-3" />}
                      {item.category === 'report' && <Newspaper className="w-3 h-3" />}
                      {item.category === 'music_video' && <Music className="w-3 h-3" />}
                      {item.category === 'feature' && <Tv className="w-3 h-3" />}
                      <span>{badge.label}</span>
                    </span>
                  </div>

                  {/* Sleek Play indicator for videos */}
                  {(item.category === 'interview' || item.category === 'film' || item.category === 'music_video' || item.category === 'feature') && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 backdrop-blur-[2px] ${
                        ytId 
                          ? 'bg-red-600/90 text-white shadow-[0_4px_20px_rgba(220,38,38,0.5)] group-hover:scale-115 group-hover:bg-red-600' 
                          : 'bg-amber-500/90 text-stone-950 shadow-[0_4px_20px_rgba(245,158,11,0.5)] group-hover:scale-115 group-hover:bg-amber-400'
                      }`}>
                        <Play className="w-5 h-5 fill-current translate-x-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Source Name tag on bottom right of thumbnail */}
                  <div className="absolute bottom-2 right-2 text-[11px] font-medium text-amber-200/90 bg-stone-950/85 backdrop-blur-sm px-2.5 py-0.5 rounded-md border border-stone-800 shadow-sm z-10">
                    {itemSource}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      onClick={() => handleCardClick(item)}
                      className="text-lg sm:text-xl font-serif font-bold text-amber-100 group-hover:text-amber-300 transition-colors line-clamp-2 leading-snug mb-2.5 cursor-pointer"
                    >
                      {itemTitle}
                    </h3>
                    <p className="text-stone-300 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4 font-light">
                      {itemDesc}
                    </p>

                    {/* Tags */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {item.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="inline-flex items-center gap-1 text-[11px] text-stone-400 bg-stone-900 px-2 py-0.5 rounded-md border border-stone-800"
                          >
                            <Tag className="w-2.5 h-2.5 text-amber-400/70" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between gap-3">
                    {hasEmbed ? (
                      <button
                        type="button"
                        onClick={() => handleCardClick(item)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-amber-500 hover:bg-amber-400 text-stone-950 transition-all duration-200 shadow-sm hover:shadow-[0_2px_12px_rgba(245,158,11,0.25)] flex-1 justify-center cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>
                          {item.category === 'film' 
                            ? (language === 'ne' ? 'लघु चलचित्र हेर्नुहोस्' : 'Watch Short Film')
                            : item.category === 'music_video' 
                            ? (language === 'ne' ? 'म्युजिक भिडियो हेर्नुहोस्' : 'Watch Music Video')
                            : item.category === 'interview' 
                            ? (item.title.toLowerCase().includes('podcast') 
                                ? (language === 'ne' ? 'पोडकास्ट हेर्नुहोस्' : 'Watch Podcast')
                                : (language === 'ne' ? 'अन्तर्वार्ता हेर्नुहोस्' : 'Watch Interview'))
                            : (language === 'ne' ? 'भिडियो हेर्नुहोस्' : t.media.watchFeature)}
                        </span>
                      </button>
                    ) : (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-amber-500 hover:bg-amber-400 text-stone-950 transition-all duration-200 shadow-sm hover:shadow-[0_2px_12px_rgba(245,158,11,0.25)] flex-1 justify-center"
                      >
                        <span>
                          {item.category === 'report' 
                            ? (language === 'ne' ? 'रिपोर्ट पढ्नुहोस्' : t.media.readReport)
                            : item.category === 'music_video' 
                            ? (language === 'ne' ? 'म्युजिक भिडियो हेर्नुहोस्' : 'Watch Music Video')
                            : (language === 'ne' ? 'लिङ्क हेर्नुहोस्' : 'View Link')}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={language === 'ne' ? `${platformLabel} मा खोल्नुहोस्` : `Open on ${platformLabel}`}
                      className="p-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-amber-300 border border-stone-800 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    <button
                      type="button"
                      onClick={() => handleShare(item)}
                      title={language === 'ne' ? 'लिङ्क सेयर गर्नुहोस्' : 'Share link'}
                      className="p-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-amber-300 border border-stone-800 transition-colors cursor-pointer"
                    >
                      {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Embedded Video Modal Player */}
      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-stone-900 border border-amber-500/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-stone-950 border-b border-stone-800">
              <div className="flex items-center gap-2 truncate pr-4">
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {activeVideo.source}
                </span>
                <h4 className="font-serif font-bold text-sm sm:text-base text-amber-100 truncate">
                  {activeVideo.title}
                </h4>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={activeVideo.originalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 px-2.5 py-1 rounded-lg bg-stone-800 hover:bg-stone-700 transition-colors"
                >
                  <span>
                    {language === 'ne' ? `${activeVideo.platformName} मा खोल्नुहोस्` : `Open on ${activeVideo.platformName}`}
                  </span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <button
                  type="button"
                  onClick={handleReplay}
                  className="p-1.5 rounded-lg text-stone-400 hover:text-amber-200 hover:bg-stone-800 transition-colors cursor-pointer"
                  title={language === 'ne' ? 'भिडियो सुरुबाट फेरि सुरु गर्नुहोस्' : 'Restart interview from beginning'}
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setActiveVideo(null)}
                  className="p-1.5 rounded-lg text-stone-400 hover:text-amber-200 hover:bg-stone-800 transition-colors cursor-pointer"
                  title={language === 'ne' ? 'भिडियो बन्द गर्नुहोस्' : 'Close video'}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Video Player Frame */}
            <div className="relative aspect-video w-full bg-black overflow-hidden">
              <iframe
                key={replayKey}
                src={activeVideo.embedUrl}
                title={activeVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />

              {/* End Screen: Blocks suggestions/recommendations and offers clean replay */}
              {isVideoEnded && (
                <div className="absolute inset-0 bg-stone-950/95 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center z-20">
                  <div className="relative w-full max-w-sm aspect-video rounded-xl overflow-hidden mb-4 border border-amber-500/40 shadow-2xl bg-stone-900">
                    <img
                      src={activeVideo.thumbnail || '/Hero.jpg'}
                      alt={activeVideo.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-stone-950/40 flex items-center justify-center">
                      <button
                        type="button"
                        onClick={handleReplay}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-lg transition-transform hover:scale-105 cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>{language === 'ne' ? 'भिडियो फेरि हेर्नुहोस्' : 'Replay Interview'}</span>
                      </button>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30 mb-2">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{language === 'ne' ? 'भिडियो समाप्त' : 'Interview Complete'}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-serif font-bold text-amber-100 max-w-lg mb-1 truncate px-2">
                    {activeVideo.title}
                  </h3>
                  <p className="text-xs text-stone-400 max-w-md mb-4">
                    {language === 'ne' 
                      ? 'श्रीमती शोभा राईसँगको विशेष अन्तर्वार्ता। तलबाट फेरि हेर्नुहोस् वा अन्य पहलहरू अन्वेषण गर्नुहोस्।'
                      : 'Exclusive interview feature with Mrs. Shova Rai. Replay the interview below or explore her other initiatives.'}
                  </p>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={handleReplay}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 text-stone-950 font-bold text-xs hover:bg-amber-400 transition-colors cursor-pointer shadow-md"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>{language === 'ne' ? 'फेरि हेर्नुहोस्' : 'Watch Again'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveVideo(null)}
                      className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium transition-colors cursor-pointer"
                    >
                      {language === 'ne' ? 'बन्द गर्नुहोस्' : 'Close Player'}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Platform indicator / direct link note */}
            <div className="px-5 py-2.5 bg-stone-950/90 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3 text-[11px] text-stone-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>
                  {language === 'ne' ? 'आधिकारिक अन्तर्वार्ता स्ट्रिमिङ • अनावश्यक सुझाव रोकिएको' : 'Streaming official interview • Suggestions blocked'}
                </span>
              </span>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleReplay}
                  className="text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 text-[11px] font-medium transition-colors cursor-pointer"
                  title={language === 'ne' ? 'सुरुबाट भिडियो सुरु गर्नुहोस्' : 'Restart video from beginning'}
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>{language === 'ne' ? 'पुन: सुरु गर्नुहोस्' : 'Restart Video'}</span>
                </button>

                <span className="text-stone-700">•</span>

                <button
                  type="button"
                  onClick={() => setIsVideoEnded((prev) => !prev)}
                  className="text-stone-400 hover:text-stone-300 text-[11px] transition-colors cursor-pointer"
                >
                  {isVideoEnded 
                    ? (language === 'ne' ? 'भिडियो जारी राख्नुहोस्' : 'Resume Video') 
                    : (language === 'ne' ? 'समाप्त र रिप्ले' : 'Finish & Replay')}
                </button>

                <span className="text-stone-700">•</span>

                <a
                  href={activeVideo.originalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 hover:underline inline-flex items-center gap-1"
                >
                  <span>{language === 'ne' ? `${activeVideo.platformName} मा खोल्नुहोस्` : `Open on ${activeVideo.platformName}`}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
