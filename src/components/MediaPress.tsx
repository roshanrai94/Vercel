import React, { useState } from 'react';
import { Newspaper, Video, Music, Sparkles, ExternalLink, Play, Tv, Share2, Tag, Check, PlusCircle, X } from 'lucide-react';
import { mediaFeaturesData } from '../data/portfolioData';
import { MediaCategory, MediaFeature } from '../types';

export const MediaPress: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<MediaCategory>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<{ title: string; embedUrl: string; source: string; originalUrl: string } | null>(null);

  const categories: { id: MediaCategory; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'all', label: 'All Media', icon: Sparkles },
    { id: 'interview', label: 'Video Interviews', icon: Video },
    { id: 'report', label: 'News & Press Reports', icon: Newspaper },
    { id: 'music_video', label: 'Music Videos', icon: Music },
    { id: 'feature', label: 'Special Features', icon: Tv },
  ];

  const filteredMedia = selectedCategory === 'all'
    ? mediaFeaturesData
    : mediaFeaturesData.filter((item) => item.category === selectedCategory);

  const getYouTubeEmbedUrl = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|(?:embed|v)\/))([\w-]{11})/);
    return match ? `https://www.youtube-nocookie.com/embed/${match[1]}?autoplay=1&rel=0` : null;
  };

  const getCategoryBadge = (category: MediaFeature['category']) => {
    switch (category) {
      case 'interview':
        return { label: 'Video Interview', color: 'bg-rose-500/20 text-rose-300 border-rose-500/30' };
      case 'report':
        return { label: 'Press & News Report', color: 'bg-blue-500/20 text-blue-300 border-blue-500/30' };
      case 'music_video':
        return { label: 'Music Video', color: 'bg-purple-500/20 text-purple-300 border-purple-500/30' };
      case 'feature':
        return { label: 'Broadcast Feature', color: 'bg-amber-500/20 text-amber-300 border-amber-500/30' };
      default:
        return { label: 'Media Mention', color: 'bg-stone-700/40 text-stone-300 border-stone-600/30' };
    }
  };

  const handleShare = (item: MediaFeature) => {
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: item.description,
        url: item.url,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(item.url);
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const handleCardClick = (item: MediaFeature) => {
    const embedUrl = getYouTubeEmbedUrl(item.url);
    if (embedUrl) {
      setActiveVideo({
        title: item.title,
        embedUrl,
        source: item.sourceName,
        originalUrl: item.url,
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
            <span>PRESS, MEDIA &amp; INTERVIEWS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-amber-100 leading-tight">
            Media Coverage &amp; External Reports
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto my-4 rounded-full" />
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
            Explore verified television interviews, news reports, music videos, and official public features documenting the journey of Mrs. Shova Rai.
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
            const badge = getCategoryBadge(item.category);
            const isCopied = copiedId === item.id;
            const hasEmbed = !!getYouTubeEmbedUrl(item.url);

            return (
              <article
                key={item.id}
                className="group flex flex-col justify-between rounded-2xl bg-stone-950/80 border border-stone-800 hover:border-amber-500/50 shadow-lg hover:shadow-[0_8px_30px_rgba(245,158,11,0.15)] transition-all duration-300 overflow-hidden"
              >
                {/* Visual Thumbnail / Card Top */}
                <div
                  onClick={() => handleCardClick(item)}
                  className="relative aspect-[16/9] w-full overflow-hidden bg-stone-900 cursor-pointer"
                  title={hasEmbed ? `Click to watch "${item.title}"` : `Click to open link`}
                >
                  {item.thumbnail ? (
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = '/Hero.jpg';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-stone-900 text-amber-400/50">
                      <Tv className="w-12 h-12" />
                    </div>
                  )}

                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-md ${badge.color}`}>
                      {item.category === 'interview' && <Video className="w-3 h-3" />}
                      {item.category === 'report' && <Newspaper className="w-3 h-3" />}
                      {item.category === 'music_video' && <Music className="w-3 h-3" />}
                      {item.category === 'feature' && <Tv className="w-3 h-3" />}
                      <span>{badge.label}</span>
                    </span>
                  </div>

                  {/* Play icon overlay for videos */}
                  {(item.category === 'interview' || item.category === 'music_video' || item.category === 'feature') && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-14 h-14 rounded-full bg-amber-500/90 text-stone-950 flex items-center justify-center shadow-[0_4px_25px_rgba(245,158,11,0.5)] group-hover:scale-115 group-hover:bg-amber-400 transition-all duration-300">
                        <Play className="w-6 h-6 fill-current translate-x-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Source Name tag on bottom right of thumbnail */}
                  <div className="absolute bottom-2.5 right-3 text-[11px] font-medium text-amber-200/90 bg-stone-950/85 backdrop-blur-sm px-2.5 py-0.5 rounded-md border border-stone-800">
                    {item.sourceName}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      onClick={() => handleCardClick(item)}
                      className="text-lg sm:text-xl font-serif font-bold text-amber-100 group-hover:text-amber-300 transition-colors line-clamp-2 leading-snug mb-2.5 cursor-pointer"
                    >
                      {item.title}
                    </h3>
                    <p className="text-stone-300 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4 font-light">
                      {item.description}
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
                        <span>Watch Video</span>
                      </button>
                    ) : (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-amber-500 hover:bg-amber-400 text-stone-950 transition-all duration-200 shadow-sm hover:shadow-[0_2px_12px_rgba(245,158,11,0.25)] flex-1 justify-center"
                      >
                        <span>
                          {item.category === 'report' ? 'Read Report' : item.category === 'music_video' ? 'Watch Music Video' : 'View Link'}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open on YouTube / External Site"
                      className="p-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-amber-300 border border-stone-800 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    <button
                      type="button"
                      onClick={() => handleShare(item)}
                      title="Share link"
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

        {/* Suggest / Add Media Note Card */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950 border border-amber-500/20 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
              <PlusCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-lg sm:text-xl text-amber-200">
                Have a News Report, Video, or Article to Feature?
              </h4>
              <p className="text-xs sm:text-sm text-stone-300 max-w-2xl mt-1 leading-relaxed">
                You can easily add new newspaper reports, TV interviews, YouTube links, or music video appearances to this list anytime in <code className="text-amber-300 px-1.5 py-0.5 rounded bg-stone-800 font-mono text-xs">src/data/portfolioData.ts</code>.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-800 hover:bg-amber-500 hover:text-stone-950 text-amber-200 border border-amber-500/30 hover:border-amber-500 text-xs sm:text-sm font-semibold transition-all duration-300 shrink-0"
          >
            <span>Share a Link / Inquire</span>
          </a>
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
                  <span>Open in YouTube</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <button
                  type="button"
                  onClick={() => setActiveVideo(null)}
                  className="p-1.5 rounded-lg text-stone-400 hover:text-amber-200 hover:bg-stone-800 transition-colors cursor-pointer"
                  title="Close video"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Video Player Frame */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={activeVideo.embedUrl}
                title={activeVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
