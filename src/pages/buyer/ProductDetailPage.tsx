import React, { useState } from 'react';
import { useProduct } from '../../hooks/useCatalog';
import { useWishlist } from '../../hooks/useWishlist';
import { useCart } from '../../hooks/useCart';
import PriceUGX from '../../components/buyer/PriceUGX';
import StarRating from '../../components/buyer/StarRating';
import VerifiedBadge from '../../components/buyer/VerifiedBadge';
import Skeleton from '../../components/shared/Skeleton';
import EmptyState from '../../components/shared/EmptyState';
import SheetDialog from '../../components/shared/SheetDialog';
import { MOCK_PICKUP_STATIONS } from '../../data/mockData';

export interface ProductDetailPageProps {
  productId?: string;
  onNavigate: (path: string) => void;
}

const DISTRICT_ESTIMATES: Record<string, { time: string; fee: number; method: string }> = {
  Kampala: { time: '45 mins - 2 hours', fee: 5000, method: 'Express Boda Delivery' },
  Wakiso: { time: '2 - 4 hours', fee: 6500, method: 'Boda / Courier' },
  Mukono: { time: '3 - 5 hours', fee: 7500, method: 'Express Courier' },
  Entebbe: { time: '3 - 6 hours', fee: 8000, method: 'Express Courier' },
  Jinja: { time: 'Next Day Dispatch', fee: 10000, method: 'Regional Hub Transit' },
};

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  productId = 'prod-soundcore-space-one',
  onNavigate,
}) => {
  const { product, seller, reviews, isLoading } = useProduct(productId);
  const { isInWishlist, toggleWishlist, isSellerFollowed, toggleFollowSeller } = useWishlist();
  const { addItem } = useCart();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedDistrict, setSelectedDistrict] = useState('Kampala');
  const [deliveryMode, setDeliveryMode] = useState<'boda' | 'pickup'>('boda');
  const [selectedStationId, setSelectedStationId] = useState(MOCK_PICKUP_STATIONS[0].id);
  const [isStationModalOpen, setIsStationModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'specs' | 'reviews'>('specs');
  const [addedToast, setAddedToast] = useState(false);

  if (isLoading) {
    return (
      <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Skeleton height={400} />
        <div className="flex flex-col gap-4">
          <Skeleton height={32} width="80%" />
          <Skeleton height={24} width="40%" />
          <Skeleton height={48} width="50%" />
          <Skeleton height={150} />
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="py-12 bg-white rounded-3xl border border-slate-200">
        <EmptyState
          icon="inventory_2"
          title="Product Not Found"
          description="The item you are looking for is currently unavailable or has moved."
          actionLabel="Explore Marketplace"
          onAction={() => onNavigate('/')}
        />
      </div>
    );
  }

  const selectedVariant =
    product.variants?.find((v) => v.id === selectedVariantId) || product.variants?.[0];
  const activePrice = selectedVariant ? selectedVariant.price : product.price;
  const activeOriginalPrice = selectedVariant
    ? selectedVariant.originalPrice
    : product.originalPrice;

  const inWishlist = isInWishlist(product.id);
  const sellerFollowed = seller ? isSellerFollowed(seller.id) : false;

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      productTitle: product.title,
      productImage: product.images[0] || '/placeholders/headphones.svg',
      variantId: selectedVariant?.id,
      variantName: selectedVariant?.name,
      sellerId: product.sellerId,
      sellerName: product.sellerName,
      price: activePrice,
      quantity,
      maxStock: selectedVariant?.stock || 20,
    });
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 3000);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    onNavigate('/cart');
  };

  const selectedStation =
    MOCK_PICKUP_STATIONS.find((s) => s.id === selectedStationId) || MOCK_PICKUP_STATIONS[0];

  const estimate = DISTRICT_ESTIMATES[selectedDistrict] || DISTRICT_ESTIMATES.Kampala;

  return (
    <div className="flex flex-col gap-8 pb-24 md:pb-12 text-[#0E1B4D]">
      {/* Toast Notification */}
      {addedToast && (
        <div
          className="fixed top-20 right-4 z-50 p-4 rounded-2xl bg-[#0E1B4D] text-white shadow-2xl flex items-center gap-3 border border-orange-500/50 animate-slideIn"
          role="status"
        >
          <span className="material-symbols-rounded text-emerald-400">check_circle</span>
          <div>
            <div className="font-bold text-[14px]">Added to Cart</div>
            <div className="text-[12px] text-slate-300">
              {quantity}x {product.title.slice(0, 30)}...
            </div>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('/cart')}
            className="ml-2 px-3 py-1 rounded-lg bg-[#FF8A1F] text-white font-bold text-[12px]"
          >
            View Cart
          </button>
        </div>
      )}

      {/* Breadcrumb Header */}
      <nav className="flex items-center gap-2 text-[13px] text-slate-500 overflow-x-auto whitespace-nowrap">
        <button type="button" onClick={() => onNavigate('/')} className="hover:text-[#DA3700]">
          Home
        </button>
        <span>/</span>
        <button
          type="button"
          onClick={() => onNavigate(`/categories`)}
          className="hover:text-[#DA3700]"
        >
          {product.categoryName}
        </button>
        <span>/</span>
        <span className="text-[#0E1B4D] font-medium truncate max-w-xs">{product.title}</span>
      </nav>

      {/* Main 2-Column Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: Gallery (5 cols on lg) */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <div className="relative aspect-square w-full rounded-3xl bg-white border border-slate-200/90 shadow-sm overflow-hidden flex items-center justify-center p-4">
            <img
              src={product.images[selectedImageIndex] || product.images[0]}
              alt={product.title}
              className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
            />
            {/* Wishlist Floating Button */}
            <button
              type="button"
              onClick={() => toggleWishlist(product.id)}
              className="touch-target absolute top-4 right-4 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md shadow-md flex items-center justify-center text-slate-400 hover:text-rose-500 transition-colors"
              aria-label={inWishlist ? 'Remove from wishlist' : 'Save to wishlist'}
            >
              <span
                className={`material-symbols-rounded text-[24px] ${
                  inWishlist ? 'text-rose-500 fill-current font-bold' : ''
                }`}
              >
                favorite
              </span>
            </button>
          </div>

          {/* Thumbnails Row */}
          {product.images.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-1">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`w-16 h-16 rounded-2xl bg-white p-1 border-2 transition-all shrink-0 overflow-hidden ${
                    selectedImageIndex === idx ? 'border-[#FF8A1F] shadow-sm' : 'border-slate-200'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          )}

          {/* Seller Card (Nakasero store information) */}
          {seller && (
            <div className="p-4 rounded-3xl bg-white border border-slate-200 shadow-sm flex items-center justify-between gap-3 mt-2">
              <div
                onClick={() => onNavigate(`/store-page-soundcore-official-1?seller=${seller.id}`)}
                className="flex items-center gap-3 cursor-pointer min-w-0"
              >
                <div className="w-12 h-12 rounded-2xl bg-orange-100 p-0.5 border border-orange-200 shrink-0">
                  <img
                    src={seller.avatarUrl || '/placeholders/avatar.svg'}
                    alt={seller.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-[14px] text-[#0E1B4D] truncate">
                      {seller.name}
                    </h4>
                  </div>
                  <span className="text-[12px] text-slate-500 truncate">{seller.location}</span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <VerifiedBadge size="sm" />
                    <span className="text-[12px] font-bold text-amber-600">
                      ★ {seller.rating.toFixed(1)} ({seller.reviewCount})
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => toggleFollowSeller(seller.id)}
                className={`touch-target px-3 py-1.5 rounded-xl text-[13px] font-bold border transition-colors shrink-0 ${
                  sellerFollowed
                    ? 'bg-slate-100 border-slate-300 text-slate-600'
                    : 'bg-orange-50 border-orange-500 text-[#DA3700] hover:bg-orange-100'
                }`}
              >
                {sellerFollowed ? 'Following' : '+ Follow'}
              </button>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: Details & Purchase Options (7 cols on lg) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Header Title & Rating */}
          <div className="flex flex-col gap-2">
            <h1 className="text-[22px] sm:text-[26px] font-extrabold text-[#0E1B4D] leading-snug tracking-tight">
              {product.title}
            </h1>

            <div className="flex items-center gap-3 flex-wrap">
              <StarRating rating={product.rating} reviewCount={product.reviewCount} />
              <span className="text-slate-300">|</span>
              <span className="text-[13px] font-semibold text-emerald-600 flex items-center gap-1">
                <span className="material-symbols-rounded text-[16px]">check_circle</span>
                In Stock &amp; Ready for Delivery
              </span>
            </div>
          </div>

          {/* Pricing Box */}
          <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-200/80 flex items-baseline justify-between gap-4">
            <div className="flex flex-col">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#FF8A1F]">
                Kampala Verified Price
              </span>
              <PriceUGX amount={activePrice} originalAmount={activeOriginalPrice} />
            </div>

            {activeOriginalPrice && (
              <span className="px-3 py-1 rounded-full bg-[#ED1C24] text-white font-bold text-[13px] shadow-sm">
                Save {Math.round(((activeOriginalPrice - activePrice) / activeOriginalPrice) * 100)}%
              </span>
            )}
          </div>

          {/* Variants Selector */}
          {product.variants && product.variants.length > 0 && (
            <div className="flex flex-col gap-2.5">
              <label className="text-[14px] font-bold text-[#0E1B4D]">
                Select Variant / Color:
              </label>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => {
                  const isSelected = (selectedVariantId || product.variants![0].id) === v.id;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedVariantId(v.id)}
                      className={`touch-target px-4 py-2 rounded-xl text-[14px] font-bold border transition-all flex items-center gap-2 ${
                        isSelected
                          ? 'border-[#FF8A1F] bg-orange-500 text-white shadow-sm'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <span>{v.name}</span>
                      <span className="text-[12px] opacity-80 font-normal">
                        ({v.stock} left)
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Delivery & Station Fulfillment Selector */}
          <div className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-extrabold text-[16px] text-[#0E1B4D] flex items-center gap-2">
                <span className="material-symbols-rounded text-[#FF8A1F]">local_shipping</span>
                Fulfillment in Uganda
              </h3>
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setDeliveryMode('boda')}
                  className={`px-3 py-1 rounded-lg text-[13px] font-bold transition-colors ${
                    deliveryMode === 'boda'
                      ? 'bg-white text-[#0E1B4D] shadow-xs'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Boda Delivery
                </button>
                <button
                  type="button"
                  onClick={() => setDeliveryMode('pickup')}
                  className={`px-3 py-1 rounded-lg text-[13px] font-bold transition-colors ${
                    deliveryMode === 'pickup'
                      ? 'bg-white text-[#0E1B4D] shadow-xs'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Pickup Station
                </button>
              </div>
            </div>

            {deliveryMode === 'boda' ? (
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-[14px] text-slate-600">Choose District:</span>
                  <select
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    className="h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-[14px] font-bold text-[#0E1B4D] focus:outline-none focus:ring-2 focus:ring-[#FF8A1F]"
                  >
                    {Object.keys(DISTRICT_ESTIMATES).map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-center justify-between text-[14px]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-rounded text-emerald-600">schedule</span>
                    <span>
                      Est. Arrival: <strong>{estimate.time}</strong>
                    </span>
                  </div>
                  <span className="font-bold text-[#FF8A1F]">
                    UGX {estimate.fee.toLocaleString()}
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-bold text-[14px] text-[#0E1B4D]">
                      {selectedStation.name}
                    </span>
                    <span className="text-[12px] text-slate-500">{selectedStation.address}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsStationModalOpen(true)}
                    className="text-[13px] font-bold text-[#DA3700] hover:underline"
                  >
                    Change Hub
                  </button>
                </div>
                <div className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200/60 flex items-center justify-between text-[14px]">
                  <span className="text-emerald-800 font-medium">Reduced Pickup Fee</span>
                  <span className="font-bold text-emerald-700">
                    UGX {selectedStation.fee.toLocaleString()}
                  </span>
                </div>
              </div>
            )}

            {/* Payment Protection Trust Notice */}
            <div className="pt-2 border-t border-slate-100 flex items-center gap-2.5 text-[13px] text-slate-600">
              <span className="material-symbols-rounded text-emerald-600 text-[20px] shrink-0">
                shield
              </span>
              <span>
                Your payment is held safely by SwiftCart until you confirm delivery with the 6-digit handover code.
              </span>
            </div>
          </div>

          {/* Desktop Quantity & Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Quantity Stepper */}
            <div className="flex items-center border border-slate-200 rounded-xl bg-white p-1">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="touch-target w-10 h-10 rounded-lg hover:bg-slate-100 text-[#0E1B4D] font-bold flex items-center justify-center"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="w-12 text-center font-bold text-[15px]">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="touch-target w-10 h-10 rounded-lg hover:bg-slate-100 text-[#0E1B4D] font-bold flex items-center justify-center"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              type="button"
              onClick={handleAddToCart}
              className="touch-target flex-1 h-12 rounded-xl bg-orange-100 hover:bg-orange-200 text-[#DA3700] font-bold text-[15px] transition-colors flex items-center justify-center gap-2 border border-orange-300"
            >
              <span className="material-symbols-rounded text-[20px]">add_shopping_cart</span>
              <span>Add to Cart</span>
            </button>

            {/* Buy Now Button */}
            <button
              type="button"
              onClick={handleBuyNow}
              className="touch-target flex-1 h-12 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] hover:opacity-95 text-white font-bold text-[15px] shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Buy Now</span>
            </button>
          </div>

          {/* Tabs: Specs & Reviews */}
          <div className="border-t border-slate-200 pt-4 flex flex-col gap-4">
            <div className="flex items-center gap-4 border-b border-slate-200 pb-2">
              <button
                type="button"
                onClick={() => setActiveTab('specs')}
                className={`font-bold text-[15px] pb-2 relative transition-colors ${
                  activeTab === 'specs' ? 'text-[#DA3700]' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Specifications
                {activeTab === 'specs' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#DA3700]" />
                )}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('reviews')}
                className={`font-bold text-[15px] pb-2 relative transition-colors ${
                  activeTab === 'reviews' ? 'text-[#DA3700]' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Reviews ({reviews.length})
                {activeTab === 'reviews' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#DA3700]" />
                )}
              </button>
            </div>

            {activeTab === 'specs' ? (
              <div className="flex flex-col gap-4 text-[14px]">
                <p className="leading-relaxed text-slate-600">{product.description}</p>
                {product.specifications && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {Object.entries(product.specifications).map(([key, val]) => (
                      <div
                        key={key}
                        className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex flex-col"
                      >
                        <span className="text-[12px] text-slate-400 font-semibold">{key}</span>
                        <span className="font-bold text-[#0E1B4D]">{val}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {reviews.length === 0 ? (
                  <p className="text-[14px] text-slate-500">No reviews yet for this product.</p>
                ) : (
                  reviews.map((rev) => (
                    <div
                      key={rev.id}
                      className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col gap-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[14px]">{rev.userName}</span>
                        <span className="text-[12px] text-slate-400">{rev.date}</span>
                      </div>
                      <StarRating rating={rev.rating} size="sm" showScore={false} />
                      <p className="text-[14px] text-slate-600 leading-relaxed">{rev.comment}</p>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE STICKY BUY BAR (Fixed at bottom on small screens) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200/90 p-3 shadow-2xl flex items-center justify-between gap-3 safe-area-pb">
        <div className="flex flex-col min-w-0">
          <span className="text-[11px] font-bold text-slate-400 uppercase">Total</span>
          <PriceUGX amount={activePrice * quantity} />
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleAddToCart}
            className="touch-target px-4 py-2.5 rounded-xl bg-orange-100 text-[#DA3700] font-bold text-[14px] border border-orange-300"
          >
            Add
          </button>
          <button
            type="button"
            onClick={handleBuyNow}
            className="touch-target px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] text-white font-bold text-[14px] shadow-md"
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* Station Chooser Modal */}
      <SheetDialog
        isOpen={isStationModalOpen}
        onClose={() => setIsStationModalOpen(false)}
        title="Select Official Pickup Hub"
        description="Pick up from convenient hubs across Kampala, Entebbe, Wakiso & Jinja"
      >
        <div className="flex flex-col gap-3 py-2">
          {MOCK_PICKUP_STATIONS.map((station) => {
            const isSelected = selectedStationId === station.id;
            return (
              <div
                key={station.id}
                onClick={() => {
                  setSelectedStationId(station.id);
                  setIsStationModalOpen(false);
                }}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                  isSelected
                    ? 'border-[#FF8A1F] bg-orange-50/70 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[14px] text-[#0E1B4D]">{station.name}</span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-slate-100 text-slate-600">
                      {station.district}
                    </span>
                  </div>
                  <span className="text-[13px] text-slate-500 mt-0.5">{station.address}</span>
                  <span className="text-[12px] text-emerald-600 font-semibold mt-1">
                    {station.operatingHours}
                  </span>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-bold text-[14px] text-[#FF8A1F] block">
                    UGX {station.fee.toLocaleString()}
                  </span>
                  <span className="text-[11px] text-slate-400">Station Fee</span>
                </div>
              </div>
            );
          })}
        </div>
      </SheetDialog>
    </div>
  );
};

export default ProductDetailPage;
