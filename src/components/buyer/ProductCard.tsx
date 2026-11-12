import React from 'react';
import PriceUGX from './PriceUGX';
import StarRating from './StarRating';
import VerifiedBadge from './VerifiedBadge';

export interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  imageUrl?: string;
  rating?: number;
  reviewCount?: number;
  storeName?: string;
  isStoreVerified?: boolean;
  inStock?: boolean;
  onAddToCart?: (id: string) => void;
  onClick?: (id: string) => void;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  originalPrice,
  imageUrl,
  rating = 4.7,
  reviewCount = 28,
  storeName = 'Kampala Express Store',
  isStoreVerified = true,
  inStock = true,
  onAddToCart,
  onClick,
  className = '',
}) => {
  const discountPercent =
    originalPrice && originalPrice > price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : null;

  return (
    <article
      onClick={() => onClick?.(id)}
      className={`group relative flex flex-col bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all overflow-hidden cursor-pointer ${className}`}
      aria-label={title}
    >
      {/* Product Image */}
      <div className="relative aspect-square w-full bg-slate-50 overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-slate-300">
            <span className="material-symbols-rounded text-[48px]">shopping_bag</span>
            <span className="text-[14px] text-slate-400 mt-1">Product Photo</span>
          </div>
        )}

        {/* Discount Badge */}
        {discountPercent !== null && (
          <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full text-[14px] font-bold bg-[#ED1C24] text-white shadow-sm">
            -{discountPercent}%
          </span>
        )}

        {/* Out of Stock Banner */}
        {!inStock && (
          <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center">
            <span className="px-3 py-1.5 rounded-lg bg-white/90 text-[#0E1B4D] font-bold text-[14px]">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Details */}
      <div className="flex flex-col flex-1 p-3.5 gap-2">
        {/* Store Name & Verification */}
        <div className="flex items-center justify-between text-[14px] text-slate-600 gap-2">
          <span className="truncate font-medium">{storeName}</span>
          {isStoreVerified && <VerifiedBadge size="sm" />}
        </div>

        {/* Title */}
        <h3 className="text-[15px] font-semibold text-[#0E1B4D] line-clamp-2 leading-snug group-hover:text-[#DA3700] transition-colors">
          {title}
        </h3>

        {/* Rating */}
        <StarRating rating={rating} reviewCount={reviewCount} size="sm" />

        {/* Pricing & Add to Cart button */}
        <div className="mt-auto pt-2 flex items-center justify-between gap-2 border-t border-slate-100">
          <PriceUGX amount={price} originalAmount={originalPrice} />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart?.(id);
            }}
            disabled={!inStock}
            className="touch-target min-w-[48px] min-h-[48px] px-3 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] hover:opacity-95 text-white font-semibold text-[14px] flex items-center justify-center shadow-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            aria-label={`Add ${title} to cart`}
          >
            <span className="material-symbols-rounded text-[20px]" aria-hidden="true">
              add_shopping_cart
            </span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;

