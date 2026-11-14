import React, { useState } from 'react';

interface OptimizedImageProps {
  webpSrc?: string;
  fallbackSrc: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  fallbackTitle?: string;
}

/**
 * Serves compressed WebP with automatic fallback to original format,
 * explicit width/height attributes to prevent CLS, and a resilient UI fallback.
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  webpSrc,
  fallbackSrc,
  alt,
  width,
  height,
  priority = false,
  className = '',
  imgClassName = 'w-full h-full object-cover',
  fallbackTitle,
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-[var(--surface-2)] border border-[var(--border)] text-center p-6 ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="space-y-1">
          <p className="font-serif text-lg font-semibold text-[var(--gold)]">
            {fallbackTitle || 'Shova Rai · Gangtok'}
          </p>
          <p className="text-sm text-[var(--text-muted)]">{alt}</p>
        </div>
      </div>
    );
  }

  return (
    <picture className={`block ${className}`}>
      {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
      <img
        src={fallbackSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={imgClassName}
      />
    </picture>
  );
};
