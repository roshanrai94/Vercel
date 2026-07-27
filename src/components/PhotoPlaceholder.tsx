import React, { useState } from 'react';
import { Camera, ImagePlus, Upload, Settings2, Image as ImageIcon } from 'lucide-react';
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
  imageClassName = 'w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105',
}) => {
  const { photoMapping, openManager, setActiveSlotToEdit, setPhotoDataUrl } = usePhotos();
  const [imageError, setImageError] = useState(false);

  const slotData = photoMapping[slotKey];
  const imgSrc = slotData?.dataUrl || slotData?.path;
  const label = slotData?.label || slotKey;
  const recommendedSize = slotData?.recommendedSize || 'Any image format';

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setPhotoDataUrl(slotKey, event.target.result as string);
          setImageError(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleOpenManager = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSlotToEdit(slotKey);
    openManager();
  };

  const isVideo = Boolean(
    imgSrc && (imgSrc.match(/\.(mp4|webm|mov|ogg)(\?.*)?$/i) || imgSrc.startsWith('data:video/'))
  );

  const hasValidImage = Boolean(imgSrc && !imageError);

  if (hasValidImage && imgSrc) {
    return (
      <div className={`relative group overflow-hidden ${roundedClassName} ${className}`}>
        {isVideo ? (
          <video
            src={imgSrc}
            controls
            autoPlay
            muted
            loop
            playsInline
            onError={() => setImageError(true)}
            className={imageClassName}
          />
        ) : (
          <img
            src={imgSrc}
            alt={slotData?.alt || label}
            onError={() => setImageError(true)}
            className={imageClassName}
          />
        )}
        {/* Hover overlay with edit options */}
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-4 text-white text-center pointer-events-none group-hover:pointer-events-auto">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-300">
            {label}
          </p>
          <div className="flex items-center gap-2 mt-1">
            <label className="cursor-pointer px-3 py-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-md text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 border border-white/20">
              <Upload className="w-3.5 h-3.5" />
              <span>Change</span>
              <input
                type="file"
                accept="image/*,video/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
            <button
              onClick={handleOpenManager}
              className="px-3 py-1.5 bg-teal-500/80 hover:bg-teal-500 text-white text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
              title="Configure Image Path"
            >
              <Settings2 className="w-3.5 h-3.5" />
              <span>Config Path</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Blank Photo Space Placeholder (Clean, professional, intentional)
  return (
    <div
      className={`relative group border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-800/50 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center ${roundedClassName} ${className}`}
    >
      <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/50 border border-teal-200/60 dark:border-teal-800/50 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-3 shadow-sm group-hover:scale-110 transition-transform">
        <ImageIcon className="w-6 h-6" />
      </div>

      <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1">
        {customOverlayText || label}
      </h4>

      <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 max-w-[240px]">
        Blank Photo Space ({recommendedSize})
      </p>

      {showQuickUpload && (
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <label className="cursor-pointer px-3 py-1.5 bg-teal-600 hover:bg-teal-700 text-white text-xs font-medium rounded-lg shadow-sm transition-all flex items-center gap-1.5">
            <ImagePlus className="w-3.5 h-3.5" />
            <span>Upload Photo</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          <button
            onClick={handleOpenManager}
            className="px-3 py-1.5 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5"
            title="Set relative file path from /public directory"
          >
            <Settings2 className="w-3.5 h-3.5" />
            <span>Set File Path</span>
          </button>
        </div>
      )}

      {imageError && (
        <p className="text-[11px] text-amber-600 dark:text-amber-400 mt-2 font-medium">
          ⚠️ Image path not found. Please upload file or check path.
        </p>
      )}
    </div>
  );
};
