import React, { useState } from 'react';
import { useStorefrontHome } from '../../hooks/useCatalog';
import ProductCard from '../../components/buyer/ProductCard';
import VerifiedBadge from '../../components/buyer/VerifiedBadge';
import Skeleton from '../../components/shared/Skeleton';
import EmptyState from '../../components/shared/EmptyState';
import { useCart } from '../../hooks/useCart';

export interface HomePageProps {
  onNavigate: (path: string) => void;
}

const BANNERS = [
  {
    id: 1,
    image: '/placeholders/banner-1.svg',
    title: 'Up to 40% Off Tech',
    subtitle: 'Fast 2-hour Boda Delivery Across Kampala',
    link: '/search-experience?category=electronics',
  },
  {
    id: 2,
    image: '/placeholders/banner-2.svg',
    title: 'Nakasero Flagship Sale',
    subtitle: 'Verified Ugandan Merchants • Payment Held in Safe Escrow',
    link: '/store-page-soundcore-official-1',
  },
  {
    id: 3,
    image: '/placeholders/banner-3.svg',
    title: 'Nationwide Hub Pickups',
    subtitle: 'Collect at Posta Uganda & Jinja/Entebbe Stations',
    link: '/pickup-station-chooser',
  },
];

const FAQS = [
  {
    q: 'How does payment protection work on SwiftCart?',
    a: 'Your payment is held safely by SwiftCart until you confirm delivery. When your package arrives, you inspect it and share your 6-digit delivery code with the rider to release funds to the merchant.',
  },
  {
    q: 'How fast is boda delivery in Kampala?',
    a: 'Orders from verified merchants within Kampala Central, Nakasero, Kololo, and surrounding divisions are dispatched within 2 hours. Delivery takes between 45 minutes and 3 hours.',
  },
  {
    q: 'Can I pick up my order from a station?',
    a: 'Yes! We have official pickup stations at Posta Uganda Kampala Road, Entebbe Victoria Mall, Jinja Post Office, and Nansana Town for a reduced delivery fee.',
  },
  {
    q: 'What payment methods are supported in Uganda?',
    a: 'We accept MTN Mobile Money, Airtel Money, Visa, and Mastercard in Ugandan Shillings (UGX) with zero conversion fees.',
  },
];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const {
    featuredProducts,
    trendingDeals,
    featuredSellers,
    categories,
    isLoading,
    error,
    refresh,
  } = useStorefrontHome();

  const { addItem } = useCart();
  const [currentBanner, setCurrentBanner] = useState(0);
  const [activeTab, setActiveTab] = useState('all');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredFeatured =
    activeTab === 'all'
      ? featuredProducts
      : featuredProducts.filter((p) => p.categoryId === activeTab);

  if (error) {
    return (
      <div className="py-12">
        <EmptyState
          icon="error"
          title="Could not load storefront"
          description={error}
          actionLabel="Try Again"
          onAction={refresh}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 pb-12">
      {/* 1. HERO BANNER SLIDER (Dots only, no arrows per build rules; padding and wrap for 360px, 390px, 430px) */}
      <section className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-sm min-h-[170px] sm:min-h-[220px] md:min-h-[260px] bg-slate-900">
        {BANNERS.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-500 cursor-pointer overflow-hidden ${
              index === currentBanner ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
            onClick={() => onNavigate(banner.link)}
          >
            {/* Background graphic */}
            <img
              src={banner.image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

            {/* Banner text with explicit left/right padding and wrapping */}
            <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-8 py-5 sm:py-8 max-w-[85%] sm:max-w-xl text-left">
              <span className="text-[10px] sm:text-[12px] font-extrabold tracking-wider text-orange-400 uppercase mb-1">
                Kampala Super Deals
              </span>
              <h2 className="text-[18px] sm:text-[26px] md:text-[34px] font-extrabold text-white leading-tight break-words">
                {banner.title}
              </h2>
              <p className="text-[12px] sm:text-[14px] text-white/90 line-clamp-2 mt-1 sm:mt-1.5 leading-snug">
                {banner.subtitle}
              </p>
              <div className="mt-2.5 sm:mt-3">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-white/20 backdrop-blur-xs text-white text-[11px] sm:text-[12px] font-bold">
                  Shop Now
                  <span className="material-symbols-rounded text-[14px]">arrow_forward</span>
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Dots Navigation (NO arrows per specification) */}
        <div className="absolute bottom-2.5 left-0 right-0 z-20 flex items-center justify-center gap-2">
          {BANNERS.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentBanner(index)}
              className={`h-2.5 rounded-full transition-all touch-target min-w-[24px] min-h-[24px] flex items-center justify-center`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentBanner ? 'true' : 'false'}
            >
              <span
                className={`block h-2 rounded-full transition-all ${
                  index === currentBanner ? 'w-8 bg-[#FF8A1F]' : 'w-2 bg-white/60 hover:bg-white'
                }`}
              />
            </button>
          ))}
        </div>
      </section>

      {/* 2. PAYMENT PROTECTION CALLOUT BANNER */}
      <section className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[#0E1B4D]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
            <span className="material-symbols-rounded text-[24px]">verified_user</span>
          </div>
          <div>
            <h4 className="font-bold text-[15px] leading-tight text-emerald-950">
              SwiftCart Safe Escrow
            </h4>
            <p className="text-[14px] text-emerald-800 leading-snug">
              Your payment is held safely by SwiftCart until you confirm delivery.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[13px] font-bold text-emerald-800 shrink-0">
          <span className="px-2.5 py-1 rounded-lg bg-white/80 border border-emerald-300">
            MTN MoMo
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-white/80 border border-emerald-300">
            Airtel Money
          </span>
        </div>
      </section>

      {/* 3. CIRCULAR CATEGORY ROW */}
      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-[20px] font-extrabold text-[#0E1B4D] tracking-tight">
            Explore Categories
          </h2>
          <button
            type="button"
            onClick={() => onNavigate('/categories')}
            className="text-[14px] font-bold text-[#DA3700] hover:underline"
          >
            View All
          </button>
        </div>

        <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-none">
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex flex-col items-center gap-2 shrink-0 w-20">
                  <Skeleton variant="circular" width={64} height={64} />
                  <Skeleton variant="text" width={50} height={12} />
                </div>
              ))
            : categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => onNavigate(`/search-experience?category=${cat.id}`)}
                  className="flex flex-col items-center gap-2 shrink-0 group focus:outline-none"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-orange-50 border border-orange-200/70 p-1 flex items-center justify-center overflow-hidden group-hover:scale-105 group-hover:border-[#FF8A1F] transition-all shadow-sm">
                    <img
                      src={cat.imageUrl || '/placeholders/phones.svg'}
                      alt={cat.name}
                      className="w-full h-full object-cover rounded-full"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[13px] sm:text-[14px] font-semibold text-[#0E1B4D] text-center max-w-[80px] line-clamp-1 group-hover:text-[#DA3700]">
                    {cat.name}
                  </span>
                </button>
              ))}
        </div>
      </section>

      {/* 4. TRENDING DEALS ROW */}
      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-rounded text-[#ED1C24] text-[24px]">
              local_fire_department
            </span>
            <h2 className="text-[20px] font-extrabold text-[#0E1B4D] tracking-tight">
              Trending Kampala Deals
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('/search-experience?deals=true')}
            className="text-[14px] font-bold text-[#DA3700] hover:underline"
          >
            See All Deals
          </button>
        </div>

        <div className="flex items-stretch gap-4 overflow-x-auto pb-3 pt-1 scrollbar-none">
          {isLoading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="w-64 shrink-0">
                  <Skeleton height={260} />
                </div>
              ))
            : trendingDeals.map((prod) => (
                <div key={prod.id} className="w-60 sm:w-64 shrink-0 flex">
                  <ProductCard
                    id={prod.id}
                    title={prod.title}
                    price={prod.price}
                    originalPrice={prod.originalPrice}
                    imageUrl={prod.images[0]}
                    rating={prod.rating}
                    reviewCount={prod.reviewCount}
                    storeName={prod.sellerName}
                    isStoreVerified={prod.isSellerVerified}
                    inStock={prod.inStock}
                    onClick={() => onNavigate(`/product-detail-soundcore-space-one-2?id=${prod.id}`)}
                    onAddToCart={() => {
                      addItem({
                        productId: prod.id,
                        productTitle: prod.title,
                        productImage: prod.images[0] || '/placeholders/headphones.svg',
                        sellerId: prod.sellerId,
                        sellerName: prod.sellerName,
                        price: prod.price,
                        quantity: 1,
                        maxStock: 20,
                      });
                    }}
                    className="w-full"
                  />
                </div>
              ))}
        </div>
      </section>

      {/* 5. FEATURED VENDORS ROW */}
      <section className="flex flex-col gap-4 p-5 rounded-3xl bg-slate-100/80 border border-slate-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[20px] font-extrabold text-[#0E1B4D] tracking-tight">
              Featured Ugandan Vendors
            </h2>
            <p className="text-[14px] text-slate-500">
              Verified local shops in Kampala, Wakiso, Jinja &amp; Entebbe
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('/followed-stores-1')}
            className="text-[14px] font-bold text-[#DA3700] hover:underline"
          >
            Browse Stores
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {featuredSellers.slice(0, 3).map((seller) => (
            <div
              key={seller.id}
              onClick={() => onNavigate(`/store-page-soundcore-official-1?seller=${seller.id}`)}
              className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-orange-100 p-0.5 border border-orange-200 overflow-hidden shrink-0">
                  <img
                    src={seller.avatarUrl || '/placeholders/avatar.svg'}
                    alt={seller.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-[15px] text-[#0E1B4D] truncate">
                      {seller.name}
                    </h4>
                  </div>
                  <span className="text-[13px] text-slate-500 truncate">
                    {seller.location}
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <VerifiedBadge size="sm" />
                    <span className="text-[12px] font-bold text-amber-600">
                      ★ {seller.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate(`/store-page-soundcore-official-1?seller=${seller.id}`);
                }}
                className="touch-target px-3 py-1.5 rounded-xl border border-orange-500 text-[#DA3700] hover:bg-orange-50 text-[13px] font-bold shrink-0 transition-colors"
              >
                Visit
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FEATURED PRODUCTS GRID WITH TABS */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h2 className="text-[20px] font-extrabold text-[#0E1B4D] tracking-tight">
            Recommended Products
          </h2>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`touch-target px-3.5 py-1.5 rounded-xl text-[14px] font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-[#FF8A1F] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              All Items
            </button>
            {categories.slice(0, 4).map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`touch-target px-3.5 py-1.5 rounded-xl text-[14px] font-bold transition-all whitespace-nowrap ${
                  activeTab === cat.id
                    ? 'bg-[#FF8A1F] text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="aspect-[3/4]">
                  <Skeleton height="100%" />
                </div>
              ))
            : filteredFeatured.map((prod) => (
                <ProductCard
                  key={prod.id}
                  id={prod.id}
                  title={prod.title}
                  price={prod.price}
                  originalPrice={prod.originalPrice}
                  imageUrl={prod.images[0]}
                  rating={prod.rating}
                  reviewCount={prod.reviewCount}
                  storeName={prod.sellerName}
                  isStoreVerified={prod.isSellerVerified}
                  inStock={prod.inStock}
                  onClick={() => onNavigate(`/product-detail-soundcore-space-one-2?id=${prod.id}`)}
                  onAddToCart={() => {
                    addItem({
                      productId: prod.id,
                      productTitle: prod.title,
                      productImage: prod.images[0] || '/placeholders/headphones.svg',
                      sellerId: prod.sellerId,
                      sellerName: prod.sellerName,
                      price: prod.price,
                      quantity: 1,
                      maxStock: 20,
                    });
                  }}
                />
              ))}
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col gap-4">
        <h3 className="text-[18px] font-extrabold text-[#0E1B4D] tracking-tight">
          Frequently Asked Questions
        </h3>
        <div className="divide-y divide-slate-100">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className="py-3">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left font-bold text-[15px] text-[#0E1B4D] hover:text-[#DA3700] transition-colors py-1"
                >
                  <span>{faq.q}</span>
                  <span className="material-symbols-rounded text-[20px] text-slate-400">
                    {isOpen ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
                {isOpen && (
                  <p className="mt-2 text-[14px] text-slate-600 leading-relaxed pr-6 animate-fadeIn">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
