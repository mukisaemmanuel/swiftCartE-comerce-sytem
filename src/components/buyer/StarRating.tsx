import React from 'react';

export interface StarRatingProps {
  rating: number; // 0 to 5
  maxStars?: number;
  reviewCount?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showScore?: boolean;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxStars = 5,
  reviewCount,
  size = 'md',
  className = '',
  showScore = true,
}) => {
  const iconSize = size === 'sm' ? 'text-[18px]' : size === 'lg' ? 'text-[24px]' : 'text-[20px]';
  const clampedRating = Math.max(0, Math.min(maxStars, rating));

  return (
    <div
      className={`inline-flex items-center gap-1.5 ${className}`}
      aria-label={`Rated ${rating} out of ${maxStars} stars`}
    >
      <div className="flex items-center text-[#F59E0B]">
        {Array.from({ length: maxStars }).map((_, i) => {
          const filled = i + 1 <= clampedRating;
          const half = !filled && i < clampedRating && clampedRating - i >= 0.5;

          return (
            <span
              key={i}
              className={`material-symbols-rounded ${iconSize} leading-none`}
              aria-hidden="true"
            >
              {filled ? 'star' : half ? 'star_half' : 'star'}
            </span>
          );
        })}
      </div>
      {showScore && (
        <span className="text-[14px] font-semibold text-[#0E1B4D]">
          {rating.toFixed(1)}
        </span>
      )}
      {reviewCount !== undefined && (
        <span className="text-[14px] text-slate-500">
          ({reviewCount.toLocaleString()})
        </span>
      )}
    </div>
  );
};

export default StarRating;

