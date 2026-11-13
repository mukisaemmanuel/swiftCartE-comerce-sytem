import React, { useState } from 'react';
import { useWishlist } from '../../hooks/useWishlist';
import { useCatalog } from '../../hooks/useCatalog';
import VerifiedBadge from '../../components/buyer/VerifiedBadge';
import StarRating from '../../components/buyer/StarRating';
import PriceUGX from '../../components/buyer/PriceUGX';
import Skeleton from '../../components/shared/Skeleton';
import EmptyState from '../../components/shared/EmptyState';
import type { Seller, Product } from '../../domain/types';
import { Icon } from '../../components/shared/Icon';

export interface FollowedStoresPageProps {
  onNavigate: (path: string) => void;
}

export const FollowedStoresPage: React.FC<FollowedStoresPageProps> = ({ onNavigate }) => {
  const { followedSellers, isSellerFollowed, toggleFollowSeller } = useWishlist();
  const { featuredSellers, products, isLoading } = useCatalog();

  const [activeFilter, setActiveFilter] = useState<'all' | 'official' | 'verified'>('all');
  const [dealAlertsEnabled, setDealAlertsEnabled] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Use followed sellers from wishlist hook, with fallback to featuredSellers if empty for rich browsing
  const followedList: Seller[] = followedSellers.length > 0
    ? followedSellers
    : featuredSellers.slice(0, 3);

  const filteredStores = followedList.filter((seller: Seller) => {
    if (activeFilter === 'official' && !seller.isOfficialStore) return false;
    if (activeFilter === 'verified' && !seller.isVerified) return false;
    if (
      searchQuery &&
      !seller.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !seller.location.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !seller.district.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  if (isLoading) {
    return (
      <div className="py-6 flex flex-col gap-4">
        <Skeleton height={60} />
        <Skeleton height={140} />
        <Skeleton height={140} />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 pb-16 text-[#0E1B4D]">
      {/* 1. HEADER & SEARCH STRIP */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DA3700]" />
            <h1 className="text-[24px] font-bold text-[#0E1B4D] tracking-tight">
              Followed Stores
            </h1>
            <span className="text-[12px] font-bold px-2.5 py-0.5 rounded-full bg-orange-100 text-[#DA3700]">
              {followedList.length}
            </span>
          </div>
          <p className="text-[14px] text-slate-500">
            Get instant deal updates, new arrivals, and restocks from your trusted Ugandan vendors.
          </p>
        </div>

        {/* Search inside followed stores */}
        <div className="relative w-full md:w-72">
          <Icon name="search" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search followed stores..."
            aria-label="Search followed stores"
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-[14px] focus:outline-none focus:border-[#FF8A1F] transition-colors"
          />
        </div>
      </div>

      {/* 2. DEAL ALERTS BANNER & FILTER CHIPS */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`touch-target px-4 py-2 rounded-xl text-[14px] font-semibold transition-all ${
              activeFilter === 'all'
                ? 'bg-[#0E1B4D] text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            All Stores ({followedList.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('official')}
            className={`touch-target px-4 py-2 rounded-xl text-[14px] font-semibold transition-all ${
              activeFilter === 'official'
                ? 'bg-[#0E1B4D] text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Official Stores ({followedList.filter((s: Seller) => s.isOfficialStore).length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('verified')}
            className={`touch-target px-4 py-2 rounded-xl text-[14px] font-semibold transition-all ${
              activeFilter === 'verified'
                ? 'bg-[#0E1B4D] text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Verified Stalls ({followedList.filter((s: Seller) => s.isVerified).length})
          </button>
        </div>

        {/* Instant Deal Alerts micro-toggle */}
        <div className="flex items-center justify-between sm:justify-end gap-3 bg-white px-4 py-2 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-2">
            <Icon name="notifications_active" className="text-orange-500 text-[20px]" />
            <span className="text-[13px] font-medium text-slate-700">Instant Deal Alerts</span>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={dealAlertsEnabled}
            aria-label="Toggle instant deal alerts"
            onClick={() => setDealAlertsEnabled(!dealAlertsEnabled)}
            className={`w-11 h-6 rounded-full transition-colors relative flex items-center p-0.5 ${
              dealAlertsEnabled ? 'bg-[#FF8A1F]' : 'bg-slate-200'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform ${
                dealAlertsEnabled ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </div>

      {/* 3. STORE CARDS LIST */}
      {filteredStores.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 border border-slate-200/80 text-center">
          <EmptyState
            icon="storefront"
            title={followedList.length === 0 ? 'No Followed Stores Yet' : 'No Stores Found'}
            description={
              followedList.length === 0
                ? 'Follow verified Ugandan merchants and official stores to receive flash sale notifications and fast local dispatch.'
                : 'No followed stores matched your search query or selected filter.'
            }
            actionLabel="Explore Marketplaces"
            onAction={() => onNavigate('/categories')}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filteredStores.map((seller: Seller) => {
            const isFollowed = isSellerFollowed(seller.id);
            const sellerProducts = products.filter((p: Product) => p.sellerId === seller.id).slice(0, 4);

            return (
              <div
                key={seller.id}
                className="bg-white rounded-3xl p-5 md:p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4"
              >
                {/* Store Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-slate-100 overflow-hidden border border-slate-200 flex-shrink-0">
                      <img
                        src={seller.logoUrl || seller.avatarUrl || '/placeholders/store-logo.svg'}
                        alt={seller.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h2
                          className="text-[17px] font-bold text-[#0E1B4D] hover:text-[#DA3700] transition-colors cursor-pointer"
                          onClick={() => onNavigate(`/store-page?sellerId=${seller.id}`)}
                        >
                          {seller.name}
                        </h2>
                        {seller.isOfficialStore ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold">
                            <Icon name="verified" className="text-[14px]" />
                            Official Store
                          </span>
                        ) : seller.isVerified ? (
                          <VerifiedBadge />
                        ) : null}
                      </div>

                      <div className="flex items-center gap-3 text-[13px] text-slate-500 mt-1 flex-wrap">
                        <span className="flex items-center gap-1">
                          <Icon name="location_on" className="text-[15px] text-[#DA3700]" />
                          {seller.location}, {seller.district}
                        </span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <StarRating rating={seller.rating} reviewCount={seller.reviewCount} size="sm" />
                        </div>
                        <span>•</span>
                        <span>{seller.followerCount.toLocaleString()} followers</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions: Follow toggle + Visit store */}
                  <div className="flex items-center gap-2.5 self-start sm:self-center">
                    <button
                      type="button"
                      onClick={() => toggleFollowSeller(seller.id)}
                      className={`touch-target px-4 py-2 rounded-xl text-[13px] font-bold flex items-center gap-1.5 transition-all ${
                        isFollowed
                          ? 'bg-slate-100 text-slate-700 hover:bg-rose-50 hover:text-rose-600'
                          : 'bg-[#FF8A1F] text-white hover:bg-[#DA3700]'
                      }`}
                    >
                      <Icon
                        name={isFollowed ? 'check' : 'person_add'}
                        className="text-[18px]"
                      />
                      <span>{isFollowed ? 'Following' : 'Follow'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onNavigate(`/store-page?sellerId=${seller.id}`)}
                      className="touch-target px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0E1B4D] text-[13px] font-bold flex items-center gap-1 transition-colors"
                    >
                      <span>Visit Store</span>
                      <Icon name="chevron_right" className="text-[16px]" />
                    </button>
                  </div>
                </div>

                {/* Top Products Horizontal Row */}
                {sellerProducts.length > 0 && (
                  <div className="border-t border-slate-100 pt-3">
                    <span className="text-[12px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Popular From This Store
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {sellerProducts.map((prod: Product) => (
                        <div
                          key={prod.id}
                          onClick={() => onNavigate(`/product-detail?id=${prod.id}`)}
                          className="group p-2.5 rounded-2xl bg-slate-50 hover:bg-orange-50/50 border border-slate-200/60 cursor-pointer transition-colors flex items-center gap-3"
                        >
                          <div className="w-12 h-12 rounded-xl bg-white overflow-hidden flex-shrink-0 border border-slate-200/80">
                            <img
                              src={prod.images[0] || '/placeholders/product-audio.svg'}
                              alt={prod.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <h3 className="text-[12px] font-semibold text-slate-800 truncate group-hover:text-[#DA3700] transition-colors">
                              {prod.title}
                            </h3>
                            <PriceUGX amount={prod.price} size="sm" className="font-bold text-[#0E1B4D]" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FollowedStoresPage;
