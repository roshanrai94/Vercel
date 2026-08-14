import React, { useState, useRef, useEffect } from 'react';
import { Camera, ImagePlus, Upload, Image as ImageIcon, Volume2, VolumeX, Maximize2, Minimize2, X, Play, Sparkles } from 'lucide-react';
import { usePhotos } from '../context/PhotoContext';

interface PhotoPlaceholderProps {
  slotKey: string;
  className?: string;
  roundedClassName?: string;
  customOverlayText?: string;
  showQuickUpload?: boolean;
  imageClassName?: string;
  aspectRatio?: string;
}

export const PhotoPlaceholder: React.FC<PhotoPlaceholderProps> = ({
  slotKey,
  className = '',
  roundedClassName = 'rounded-2xl',
  customOverlayText,
  showQuickUpload = true,
  imageClassName = 'w-full h-full object-contain p-1 transition-transform duration-500 group-hover:scale-105',
}) => {
  const { photoMapping } = usePhotos();
  const [imageError, setImageError] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isExpandedArea, setIsExpandedArea] = useState(false);
  const [isTheaterOpen, setIsTheaterOpen] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const slotData = photoMapping[slotKey];
  const imgSrc = slotData?.dataUrl || slotData?.path;
  const label = slotData?.label || slotKey;
  const recommendedSize = slotData?.recommendedSize || 'Any image format';

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    if (videoRef.current) {
      videoRef.current.muted = newMuted;
      if (!newMuted) {
        videoRef.current.volume = 1.0;
        videoRef.current.play().catch(() => {});
      }
    }
  };

  const toggleExpandArea = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpandedArea((prev) => !prev);
  };

  const openTheaterView = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsTheaterOpen(true);
  };

  const isVideo = Boolean(
    imgSrc && (imgSrc.match(/\.(mp4|webm|mov|ogg)(\?.*)?$/i) || imgSrc.startsWith('data:video/'))
  );

  const hasValidImage = Boolean(imgSrc && !imageError);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement || !isVideo) return;

    // Handle pausing when scrolling out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && !videoElement.paused) {
            videoElement.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(videoElement);

    // Handle mutual exclusivity (only one video plays at a time)
    const handlePlay = () => {
      const allVideos = document.querySelectorAll('video');
      allVideos.forEach((vid) => {
        if (vid !== videoElement && !vid.paused) {
          vid.pause();
        }
      });
    };

    videoElement.addEventListener('play', handlePlay);

    return () => {
      observer.disconnect();
      videoElement.removeEventListener('play', handlePlay);
    };
  }, [isVideo, imgSrc]);

  if (hasValidImage && imgSrc) {
    return (
      <>
        <div
          className={`relative group overflow-hidden transition-all duration-300 ${roundedClassName} ${className} ${
            isExpandedArea ? '!aspect-auto !h-auto w-full min-h-[300px] max-h-[700px]' : ''
          }`}
        >
          {isVideo ? (
            <div className="relative w-full h-full flex flex-col justify-center bg-stone-950">
              <video
                ref={videoRef}
                src={imgSrc}
                controls
                autoPlay
                muted={isMuted}
                loop
                playsInline
                onError={() => setImageError(true)}
                className={
                  isExpandedArea
                    ? 'w-full h-auto max-h-[650px] object-contain rounded-xl'
                    : imageClassName
                }
              />

              {/* Video Quick Action Buttons (Sound & Extend Video Area) */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-20 pointer-events-auto">
                <button
                  type="button"
                  onClick={toggleSound}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-950/80 hover:bg-amber-950/90 text-amber-200 border border-amber-500/40 rounded-full text-xs font-bold transition-all shadow-lg backdrop-blur-md"
                  title={isMuted ? 'Click to enable video sound' : 'Sound is ON'}
                >
                  {isMuted ? (
                    <>
                      <VolumeX className="w-4 h-4 text-amber-400 animate-pulse" />
                      <span>Unmute Sound</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300">Sound ON</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={toggleExpandArea}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-950/80 hover:bg-stone-900 text-amber-300 border border-amber-500/40 rounded-full text-xs font-bold transition-all shadow-lg backdrop-blur-md"
                    title="Toggle extended video container size"
                  >
                    {isExpandedArea ? (
                      <>
                        <Minimize2 className="w-3.5 h-3.5 text-amber-400" />
                        <span>Compact Area</span>
                      </>
                    ) : (
                      <>
                        <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                        <span>Extend Video Area</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={openTheaterView}
                    className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold rounded-full text-xs transition-all shadow-lg"
                    title="Open full video theater with full sound"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Fullscreen</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <img
              src={imgSrc}
              alt={slotData?.alt || label}
              onError={() => setImageError(true)}
              className={imageClassName}
            />
          )}
        </div>

        {/* Extended Theater Modal View */}
        {isTheaterOpen && isVideo && (
          <div
            className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
            onClick={() => setIsTheaterOpen(false)}
          >
            <div
              className="relative max-w-6xl w-full bg-stone-900 border border-amber-500/50 rounded-[2rem] p-4 sm:p-6 shadow-2xl flex flex-col items-center gap-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsTheaterOpen(false)}
                className="absolute top-4 right-4 p-2 bg-stone-950 text-stone-300 hover:text-amber-400 rounded-full border border-stone-800 transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center space-y-1 w-full border-b border-stone-800 pb-3 pr-10">
                <span className="text-[10px] uppercase font-bold text-amber-400 tracking-widest px-2.5 py-0.5 rounded-md bg-amber-500/20 border border-amber-500/30">
                  Extended Video View with Sound
                </span>
                <h3 className="text-lg sm:text-2xl font-serif font-bold text-amber-100">
                  {label}
                </h3>
              </div>

              <div className="w-full max-h-[80vh] flex items-center justify-center bg-black rounded-2xl border border-stone-800 p-2 overflow-hidden">
                <video
                  src={imgSrc}
                  controls
                  autoPlay
                  onPlay={(e) => {
                    const allVideos = document.querySelectorAll('video');
                    allVideos.forEach((vid) => {
                      if (vid !== e.currentTarget && !vid.paused) {
                        vid.pause();
                      }
                    });
                  }}
                  className="max-h-[75vh] w-full rounded-xl object-contain"
                />
              </div>

              <p className="text-xs text-stone-400 text-center">
                🔊 Adjust volume or toggle full screen directly using the video controls.
              </p>
            </div>
          </div>
        )}
      </>
    );
  }

  // Blank Photo Space Placeholder
  return (
    <div
      className={`relative group border-2 border-dashed border-amber-900/40 bg-stone-900/40 hover:bg-stone-900/70 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center ${roundedClassName} ${className}`}
    >
      <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3 shadow-sm group-hover:scale-110 transition-transform">
        <ImageIcon className="w-6 h-6" />
      </div>

      <h4 className="text-sm font-semibold text-amber-100 mb-1">
        {customOverlayText || label}
      </h4>

      <p className="text-xs text-amber-200/60 mb-3 max-w-[240px]">
        Blank Photo or Video Space ({recommendedSize})
      </p>

      {imageError && (
        <p className="text-[11px] text-amber-400 mt-2 font-medium">
          ⚠️ Media failed to load. The file might be corrupted or unsupported.
        </p>
      )}
    </div>
  );
};

