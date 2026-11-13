import React, { useState } from 'react';
import { useWishlist } from '../../hooks/useWishlist';
import { useCart } from '../../hooks/useCart';
import PriceUGX from '../../components/buyer/PriceUGX';
import StarRating from '../../components/buyer/StarRating';
import VerifiedBadge from '../../components/buyer/VerifiedBadge';
import Skeleton from '../../components/shared/Skeleton';
import EmptyState from '../../components/shared/EmptyState';
import Toast from '../../components/shared/Toast';
import type { Product } from '../../domain/types';
import { Icon } from '../../components/shared/Icon';

export interface WishlistPageProps {
  onNavigate: (path: string) => void;
}

export const WishlistPage: React.FC<WishlistPageProps> = ({ onNavigate }) => {
  const { items, removeFromWishlist, clearWishlist, isLoading } = useWishlist();
  const wishlist = items;
  const { addItem } = useCart();

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleMoveToCart = (product: Product) => {
    addItem(product);
    removeFromWishlist(product.id);
    setToastMessage(`Moved "${product.title}" to your cart`);
  };

  const handleMoveAllToCart = () => {
    if (wishlist.length === 0) return;
    wishlist.forEach((item: Product) => {
      addItem(item);
    });
    if (clearWishlist) clearWishlist();
    setToastMessage(`All ${wishlist.length} items moved to your cart`);
  };

  if (isLoading) {
    return (
      <div className="py-6 flex flex-col gap-6">
        <Skeleton height={60} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} height={260} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 pb-16 text-[#0E1B4D]">
      {toastMessage && (
        <Toast
          message={toastMessage}
          type="success"
          onClose={() => setToastMessage(null)}
        />
      )}

      {/* HEADER STRIP */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A1F]" />
            <h1 className="text-[24px] font-bold text-[#0E1B4D] tracking-tight">
              My Saved Wishlist
            </h1>
            <span className="text-[12px] font-bold px-2.5 py-0.5 rounded-full bg-orange-100 text-[#DA3700]">
              {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'}
            </span>
          </div>
          <p className="text-[14px] text-slate-500">
            Items saved from verified Ugandan sellers. In-stock items can be moved directly to your cart.
          </p>
        </div>

        {wishlist.length > 0 && (
          <div className="flex items-center gap-2.5 self-start sm:self-center">
            <button
              type="button"
              onClick={handleMoveAllToCart}
              className="touch-target px-4 py-2.5 rounded-xl bg-[#FF8A1F] hover:bg-[#DA3700] text-white text-[13px] font-bold shadow-sm transition-colors flex items-center gap-1.5"
            >
              <Icon name="shopping_cart" className="text-[18px]" />
              <span>Move All to Cart</span>
            </button>
            <button
              type="button"
              onClick={clearWishlist}
              className="touch-target px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-rose-50 hover:text-rose-600 text-slate-600 text-[13px] font-semibold transition-colors"
            >
              Clear
            </button>
          </div>
        )}
      </div>

      {/* WISHLIST ITEMS */}
      {wishlist.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 border border-slate-200/80 text-center">
          <EmptyState
            icon="favorite_border"
            title="Your Wishlist is Empty"
            description="Explore authentic electronics, fashion, food and home essentials and tap the heart icon to save items for later."
            actionLabel="Start Shopping"
            onAction={() => onNavigate('/categories')}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {wishlist.map((item: Product) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-4 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-3 group"
            >
              {/* Product Image & Remove Heart */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-100">
                <img
                  src={item.images[0] || '/placeholders/product-audio.svg'}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Stock badge */}
                <div className="absolute top-2.5 left-2.5">
                  {item.inStock ? (
                    <span className="px-2 py-0.5 rounded-md bg-emerald-500/90 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-xs">
                      In Stock
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded-md bg-rose-500/90 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-xs">
                      Out of Stock
                    </span>
                  )}
                </div>

                {/* Remove heart button */}
                <button
                  type="button"
                  aria-label={`Remove ${item.title} from wishlist`}
                  onClick={() => removeFromWishlist(item.id)}
                  className="touch-target absolute top-2.5 right-2.5 w-9 h-9 rounded-full bg-white/95 text-rose-500 hover:bg-rose-50 shadow-sm flex items-center justify-center transition-colors"
                >
                  <Icon name="favorite" className="text-[20px]" />
                </button>
              </div>

              {/* Title & Seller */}
              <div className="flex flex-col gap-1 min-w-0">
                <div className="flex items-center gap-1.5 text-[12px] text-slate-500">
                  <span className="truncate">{item.sellerName}</span>
                  <VerifiedBadge />
                </div>

                <h3
                  onClick={() => onNavigate(`/product-detail?id=${item.id}`)}
                  className="text-[14px] font-bold text-[#0E1B4D] line-clamp-2 hover:text-[#DA3700] transition-colors cursor-pointer"
                >
                  {item.title}
                </h3>

                <div className="flex items-center gap-2 mt-0.5">
                  <StarRating rating={item.rating} reviewCount={item.reviewCount} size="sm" />
                </div>
              </div>

              {/* Price & Move to Cart Button */}
              <div className="flex flex-col gap-2.5 pt-2 border-t border-slate-100 mt-auto">
                <div className="flex items-baseline justify-between">
                  <PriceUGX amount={item.price} size="md" className="font-extrabold text-[#0E1B4D]" />
                  {item.originalPrice && (
                    <span className="text-[12px] text-slate-400 line-through">
                      UGX {item.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  disabled={!item.inStock}
                  onClick={() => handleMoveToCart(item)}
                  className={`touch-target w-full py-2.5 rounded-xl font-bold text-[13px] flex items-center justify-center gap-1.5 transition-all shadow-xs ${
                    !item.inStock
                      ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      : 'bg-[#FF8A1F] hover:bg-[#DA3700] text-white active:scale-98'
                  }`}
                >
                  <Icon name="add_shopping_cart" className="text-[18px]" />
                  <span>{!item.inStock ? 'Out of Stock' : 'Move to Cart'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
