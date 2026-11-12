import React, { useState } from 'react';

export interface SafeImageProps {
  src?: string | null;
  alt: string;
  fallbackSrc?: string;
  aspectRatio?: 'square' | 'video' | 'banner' | 'avatar' | 'auto' | string;
  className?: string;
  imageClassName?: string;
  loading?: 'lazy' | 'eager';
  objectFit?: 'cover' | 'contain' | 'fill';
  onClick?: () => void;
  width?: number | string;
  height?: number | string;
}

const DEFAULT_FALLBACK = '/placeholders/placeholder-neutral.svg';

const ASPECT_CLASSES: Record<string, string> = {
  square: 'aspect-square',
  video: 'aspect-video',
  banner: 'aspect-[21/9]',
  avatar: 'aspect-square rounded-full',
  auto: '',
};

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  fallbackSrc = DEFAULT_FALLBACK,
  aspectRatio = 'square',
  className = '',
  imageClassName = '',
  loading = 'lazy',
  objectFit = 'cover',
  onClick,
  width,
  height,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const effectiveSrc = hasError || !src ? fallbackSrc : src;
  const aspectClass = ASPECT_CLASSES[aspectRatio] || aspectRatio;

  const fitClass =
    objectFit === 'contain'
      ? 'object-contain'
      : objectFit === 'fill'
      ? 'object-fill'
      : 'object-cover';

  return (
    <div
      className={`relative overflow-hidden bg-slate-100 ${aspectClass} ${className}`}
      onClick={onClick}
      style={{ width, height }}
    >
      <img
        src={effectiveSrc}
        alt={alt}
        loading={loading}
        onError={() => setHasError(true)}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full ${fitClass} transition-opacity duration-200 ${
          isLoaded ? 'opacity-100' : 'opacity-80'
        } ${imageClassName}`}
      />
    </div>
  );
};

export default SafeImage;

