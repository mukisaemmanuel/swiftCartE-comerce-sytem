import React from 'react';

export interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: number | string;
  height?: number | string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  variant = 'rectangular',
  width,
  height,
}) => {
  let roundedClass = 'rounded-xl';
  if (variant === 'circular') roundedClass = 'rounded-full';
  if (variant === 'text') roundedClass = 'rounded-md';

  return (
    <div
      className={`animate-pulse bg-slate-300/30 ${roundedClass} ${className}`}
      style={{
        width: width ?? '100%',
        height: height ?? (variant === 'text' ? '1rem' : '100%'),
      }}
      aria-hidden="true"
    />
  );
};

export default Skeleton;

