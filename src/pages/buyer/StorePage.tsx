import React, { useState } from 'react';
import { useSeller } from '../../hooks/useCatalog';
import { useWishlist } from '../../hooks/useWishlist';
import ProductCard from '../../components/buyer/ProductCard';
import VerifiedBadge from '../../components/buyer/VerifiedBadge';
import Skeleton from '../../components/shared/Skeleton';
import EmptyState from '../../components/shared/EmptyState';
import { useCart } from '../../hooks/useCart';

export interface StorePageProps {
  sellerId?: string;
  onNavigate: (path: string) => void;
}

export const StorePage: React.FC<StorePageProps> = ({
  sellerId = 'seller-soundcore',
  onNavigate,
}) => {
  const { seller, products, isLoading } = useSeller(sellerId);
  const { isSellerFollowed, toggleFollowSeller } = useWishlist();
  const { addItem } = useCart();

  const [activeTab, setActiveTab] = useState<'products' | 'about'>('products');
  const [storeSearch, setStoreSearch] = useState('');

  if (isLoading) {
    return (
      <div className="py-6 flex flex-col gap-6">
        <Skeleton height={200} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} height={220} />
          ))}
        </div>
      </div>
    );
  }

  if (!seller) {
    return (
      <div className="py-12 bg-white rounded-3xl border border-slate-200">
        <EmptyState
          icon="store"
          title="Store Not Found"
          description="The store you requested does not exist or is under review."
          actionLabel="Return Home"
          onAction={() => onNavigate('/')}
        />
      </div>
    );
  }

  const isFollowed = isSellerFollowed(seller.id);

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(storeSearch.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-6 pb-12 text-[#0E1B4D]">
      {/* 1. STORE HERO BANNER */}
      <div className="relative w-full rounded-3xl overflow-hidden shadow-sm aspect-[21/6] min-h-[140px] max-h-[240px] bg-slate-900">
        <img
          src={seller.bannerUrl || '/placeholders/store-banner.svg'}
          alt={seller.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>

      {/* 2. STORE HEADER & META BAR */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 -mt-10 sm:-mt-14 relative z-10 mx-2 sm:mx-6">
        <div className="flex items-center gap-4 min-w-0">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white p-1 border-2 border-orange-200 shadow-md shrink-0 overflow-hidden">
            <img
              src={seller.avatarUrl || '/placeholders/avatar.svg'}
              alt={seller.name}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-[20px] sm:text-[24px] font-extrabold text-[#0E1B4D] truncate">
                {seller.name}
              </h1>
              {seller.isVerified && <VerifiedBadge />}
            </div>

            <p className="text-[13px] sm:text-[14px] text-slate-500 flex items-center gap-1.5 mt-0.5">
              <span className="material-symbols-rounded text-[16px] text-slate-400">
                location_on
              </span>
              <span>{seller.location}</span>
            </p>

            <div className="flex items-center gap-3 text-[13px] text-slate-600 mt-2 flex-wrap">
              <span className="font-bold text-amber-600 flex items-center gap-1">
                ★ {seller.rating.toFixed(1)} ({seller.reviewCount} reviews)
              </span>
              <span className="text-slate-300">•</span>
              <span>
                <strong>{seller.followerCount.toLocaleString()}</strong> followers
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-emerald-600 font-semibold flex items-center gap-1">
                <span className="material-symbols-rounded text-[16px]">bolt</span>
                Dispatches in ~{seller.dispatchSpeedHours || 2}h
              </span>
            </div>
          </div>
        </div>

        {/* Action Button: Follow */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button
            type="button"
            onClick={() => toggleFollowSeller(seller.id)}
            className={`touch-target flex-1 md:flex-initial px-6 py-2.5 rounded-xl text-[14px] font-bold border transition-all flex items-center justify-center gap-1.5 ${
              isFollowed
                ? 'bg-slate-100 border-slate-300 text-slate-600 hover:bg-slate-200'
                : 'bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] text-white shadow-sm hover:opacity-95'
            }`}
          >
            <span className="material-symbols-rounded text-[18px]">
              {isFollowed ? 'check' : 'favorite'}
            </span>
            <span>{isFollowed ? 'Following' : 'Follow Store'}</span>
          </button>
        </div>
      </div>

      {/* 3. STORE TABS & SEARCH */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-2">
        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={() => setActiveTab('products')}
            className={`text-[15px] font-bold pb-2 relative transition-colors ${
              activeTab === 'products' ? 'text-[#DA3700]' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Store Products ({products.length})
            {activeTab === 'products' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#DA3700]" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('about')}
            className={`text-[15px] font-bold pb-2 relative transition-colors ${
              activeTab === 'about' ? 'text-[#DA3700]' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            About Merchant
            {activeTab === 'about' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#DA3700]" />
            )}
          </button>
        </div>

        {activeTab === 'products' && (
          <div className="relative w-full sm:w-64">
            <span className="material-symbols-rounded absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">
              search
            </span>
            <input
              type="text"
              value={storeSearch}
              onChange={(e) => setStoreSearch(e.target.value)}
              placeholder="Search in store..."
              className="w-full h-10 pl-9 pr-3 rounded-xl bg-white border border-slate-200 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#FF8A1F]"
            />
          </div>
        )}
      </div>

      {/* 4. CONTENT */}
      {activeTab === 'products' ? (
        filteredProducts.length === 0 ? (
          <div className="py-12 bg-white rounded-3xl border border-slate-200">
            <EmptyState
              icon="inventory_2"
              title="No Items Found"
              description="No products in this store matched your search query."
              actionLabel="Clear Search"
              onAction={() => setStoreSearch('')}
            />
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                id={prod.id}
                title={prod.title}
                price={prod.price}
                originalPrice={prod.originalPrice}
                imageUrl={prod.images[0]}
                rating={prod.rating}
                reviewCount={prod.reviewCount}
                storeName={seller.name}
                isStoreVerified={seller.isVerified}
                inStock={prod.inStock}
                onClick={() => onNavigate(`/product-detail-soundcore-space-one-2?id=${prod.id}`)}
                onAddToCart={() => {
                  addItem({
                    productId: prod.id,
                    productTitle: prod.title,
                    productImage: prod.images[0] || '/placeholders/headphones.svg',
                    sellerId: seller.id,
                    sellerName: seller.name,
                    price: prod.price,
                    quantity: 1,
                    maxStock: 20,
                  });
                }}
              />
            ))}
          </div>
        )
      ) : (
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col gap-4 max-w-3xl">
          <h3 className="text-[18px] font-extrabold text-[#0E1B4D]">Merchant Information</h3>
          <p className="text-[14px] text-slate-600 leading-relaxed">
            {seller.bio ||
              'Authorized Ugandan retailer committed to authentic electronics, fast boda dispatch, and comprehensive customer service.'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-[14px]">
            <div>
              <span className="text-slate-400 block text-[12px] font-semibold">Store Address</span>
              <strong className="text-[#0E1B4D]">{seller.location}</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[12px] font-semibold">District</span>
              <strong className="text-[#0E1B4D]">{seller.district}, Uganda</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[12px] font-semibold">Member Since</span>
              <strong className="text-[#0E1B4D]">
                {new Date(seller.joinedDate).toLocaleDateString('en-GB', {
                  year: 'numeric',
                  month: 'long',
                })}
              </strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[12px] font-semibold">Escrow Protection</span>
              <strong className="text-emerald-600">SwiftCart Escrow Active</strong>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StorePage;
