import React from 'react';

export interface LogoProps {
  variant?: 'full' | 'icon' | 'white' | 'icon-white';
  className?: string;
  height?: number | string;
  width?: number | string;
  alt?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  className = '',
  height,
  width,
  alt = 'SwiftCart Uganda',
}) => {
  let src = '/brand/swiftcart-logo.png';

  switch (variant) {
    case 'icon':
      src = '/brand/swiftcart-logo-icon.png';
      break;
    case 'white':
      src = '/brand/swiftcart-logo-white.png';
      break;
    case 'icon-white':
      src = '/brand/swiftcart-logo-icon-white.png';
      break;
    case 'full':
    default:
      src = '/brand/swiftcart-logo.png';
      break;
  }

  const defaultHeight = variant === 'icon' || variant === 'icon-white' ? 36 : 32;

  return (
    <img
      src={src}
      alt={alt}
      className={`inline-block select-none object-contain ${className}`}
      style={{
        height: height ?? defaultHeight,
        width: width ?? 'auto',
      }}
      loading="eager"
    />
  );
};

export default Logo;

