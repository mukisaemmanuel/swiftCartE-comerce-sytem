import React, { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import PriceUGX from '../../components/buyer/PriceUGX';
import VerifiedBadge from '../../components/buyer/VerifiedBadge';
import EmptyState from '../../components/shared/EmptyState';
import Skeleton from '../../components/shared/Skeleton';
import Toast from '../../components/shared/Toast';
import { Icon } from '../../components/shared/Icon';

export interface CartPageProps {
  onNavigate: (path: string) => void;
}

export const CartPage: React.FC<CartPageProps> = ({ onNavigate }) => {
  const {
    cart,
    isLoading,
    updateQuantity,
    removeItem,
    saveForLater,
    moveToCart,
    applyVoucher,
    removeVoucher,
    clearCart,
  } = useCart();

  const [voucherCodeInput, setVoucherCodeInput] = useState('');
  const [voucherError, setVoucherError] = useState<string | null>(null);
  const [voucherSuccess, setVoucherSuccess] = useState<string | null>(null);
  const [isApplyingVoucher, setIsApplyingVoucher] = useState(false);
  const [checkoutNotice, setCheckoutNotice] = useState<string | null>(null);

  const activeItems = cart.items.filter((item) => !item.savedForLater);
  const savedItems = cart.items.filter((item) => item.savedForLater);

  const handleApplyVoucher = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!voucherCodeInput.trim()) return;

    try {
      setIsApplyingVoucher(true);
      setVoucherError(null);
      await applyVoucher(voucherCodeInput);
      setVoucherSuccess(`Coupon "${voucherCodeInput.toUpperCase()}" applied successfully!`);
      setVoucherCodeInput('');
    } catch (err: unknown) {
      setVoucherError(err instanceof Error ? err.message : 'Invalid coupon code');
    } finally {
      setIsApplyingVoucher(false);
    }
  };

  const handleCheckoutClick = () => {
    // Stage 1 STOP rule: Stop before checkout
    setCheckoutNotice(
      'Checkout, Escrow payments, and Boda delivery tracking unlock in Stage 2. Your cart is preserved!'
    );
  };

  if (isLoading) {
    return (
      <div className="py-6 flex flex-col gap-6">
        <Skeleton height={60} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Skeleton height={180} />
            <Skeleton height={180} />
          </div>
          <Skeleton height={280} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 pb-24 lg:pb-16 text-[#0E1B4D]">
      {checkoutNotice && (
        <Toast
          message={checkoutNotice}
          type="info"
          onClose={() => setCheckoutNotice(null)}
        />
      )}

      {/* 1. HEADER */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DA3700]" />
            <h1 className="text-[24px] font-bold text-[#0E1B4D] tracking-tight">
              Shopping Cart
            </h1>
            <span className="text-[12px] font-bold px-2.5 py-0.5 rounded-full bg-orange-100 text-[#DA3700]">
              {cart.totalQuantity} {cart.totalQuantity === 1 ? 'item' : 'items'}
            </span>
          </div>
          <p className="text-[14px] text-slate-500">
            Multi-vendor orders from Kampala, Wakiso and Entebbe are dispatched via express Boda riders.
          </p>
        </div>

        {activeItems.length > 0 && (
          <button
            type="button"
            onClick={clearCart}
            className="touch-target px-4 py-2 rounded-xl text-[13px] font-semibold text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors self-start sm:self-center flex items-center gap-1.5"
          >
            <Icon name="delete_sweep" className="text-[18px]" />
            <span>Clear Cart</span>
          </button>
        )}
      </div>

      {/* PAYMENT PROTECTION TRUST BANNER */}
      <div className="p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-200/70 flex items-center gap-2.5 text-emerald-800 text-[13px]">
        <Icon name="security" className="text-emerald-600 text-[20px] flex-shrink-0" />
        <span className="leading-snug font-medium">
          Your payment is held safely by SwiftCart until you confirm delivery.
        </span>
      </div>

      {activeItems.length === 0 && savedItems.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 border border-slate-200/80 text-center">
          <EmptyState
            icon="shopping_cart"
            title="Your Cart is Empty"
            description="Looks like you haven't added anything to your cart yet. Explore authentic products from verified Ugandan stores."
            actionLabel="Start Shopping"
            onAction={() => onNavigate('/categories')}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* LEFT 2 COLS: VENDOR GROUPS & SAVED FOR LATER */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {activeItems.length === 0 ? (
              <div className="bg-white rounded-3xl p-8 border border-slate-200/80 text-center">
                <p className="text-[15px] font-medium text-slate-600 mb-3">
                  All items in your cart are currently saved for later.
                </p>
                <button
                  type="button"
                  onClick={() => onNavigate('/')}
                  className="touch-target px-5 py-2.5 rounded-xl bg-[#FF8A1F] text-white text-[14px] font-bold"
                >
                  Browse Marketplace
                </button>
              </div>
            ) : (
              cart.sellerGroups.map((group) => (
                <div
                  key={group.sellerId}
                  className="bg-white rounded-3xl p-5 md:p-6 border border-slate-200/80 shadow-sm flex flex-col gap-4"
                >
                  {/* Vendor Group Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 gap-2">
                    <div className="flex items-center gap-2">
                      <Icon name="storefront" className="text-[22px] text-[#DA3700]" />
                      <h2
                        onClick={() => onNavigate(`/store-page?sellerId=${group.sellerId}`)}
                        className="text-[16px] font-bold text-[#0E1B4D] hover:text-[#DA3700] transition-colors cursor-pointer"
                      >
                        {group.sellerName}
                      </h2>
                      <VerifiedBadge />
                    </div>

                    <div className="flex items-center gap-2 text-[13px] text-slate-500">
                      <span>Store Subtotal:</span>
                      <PriceUGX amount={group.subtotal} size="sm" className="font-bold text-[#0E1B4D]" />
                    </div>
                  </div>

                  {/* Group Items */}
                  <div className="flex flex-col divide-y divide-slate-100">
                    {group.items.map((item) => (
                      <div key={item.id} className="py-4 first:pt-1 last:pb-1 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                        {/* Thumbnail */}
                        <div
                          onClick={() => onNavigate(`/product-detail?id=${item.productId}`)}
                          className="w-20 h-20 rounded-2xl bg-slate-100 overflow-hidden border border-slate-200 flex-shrink-0 cursor-pointer"
                        >
                          <img
                            src={item.productImage || '/placeholders/product-audio.svg'}
                            alt={item.productTitle}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0 flex flex-col gap-1">
                          <h3
                            onClick={() => onNavigate(`/product-detail?id=${item.productId}`)}
                            className="text-[14px] font-bold text-[#0E1B4D] line-clamp-2 hover:text-[#DA3700] transition-colors cursor-pointer"
                          >
                            {item.productTitle}
                          </h3>

                          {item.variantName && (
                            <span className="text-[12px] text-slate-500 font-medium">
                              Variant: <strong className="text-slate-700">{item.variantName}</strong>
                            </span>
                          )}

                          <div className="flex items-baseline gap-2 mt-1">
                            <PriceUGX amount={item.price} size="sm" className="font-bold text-[#DA3700]" />
                            <span className="text-[12px] text-slate-400">each</span>
                          </div>
                        </div>

                        {/* Quantity Stepper & Actions */}
                        <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-3">
                          {/* Stepper */}
                          <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 p-1">
                            <button
                              type="button"
                              aria-label="Decrease quantity"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="touch-target w-8 h-8 rounded-lg bg-white shadow-xs flex items-center justify-center text-slate-700 hover:text-slate-900 active:scale-95 transition-all"
                            >
                              <Icon name="remove" className="text-[16px]" />
                            </button>

                            <span className="w-10 text-center font-bold text-[14px] text-[#0E1B4D]">
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              aria-label="Increase quantity"
                              disabled={item.quantity >= item.maxStock}
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className={`touch-target w-8 h-8 rounded-lg bg-white shadow-xs flex items-center justify-center text-slate-700 hover:text-slate-900 active:scale-95 transition-all ${
                                item.quantity >= item.maxStock ? 'opacity-40 cursor-not-allowed' : ''
                              }`}
                            >
                              <Icon name="add" className="text-[16px]" />
                            </button>
                          </div>

                          {/* Quick Actions: Save for later & Remove */}
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => saveForLater(item.id)}
                              className="touch-target text-[12px] font-semibold text-slate-500 hover:text-[#0E1B4D] transition-colors"
                            >
                              Save for later
                            </button>
                            <span className="text-slate-300">•</span>
                            <button
                              type="button"
                              onClick={() => removeItem(item.id)}
                              className="touch-target text-[12px] font-semibold text-rose-500 hover:text-rose-700 transition-colors"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Boda Dispatch strip per seller */}
                  <div className="mt-2 bg-[#FFF8F2] border border-orange-200/60 rounded-2xl p-3.5 flex items-center justify-between text-[13px]">
                    <div className="flex items-center gap-2 text-slate-700">
                      <Icon name="two_wheeler" className="text-[#FF8A1F] text-[18px]" />
                      <span>Swift Express Boda Dispatch from {group.sellerName}</span>
                    </div>
                    <span className="font-bold text-[#0E1B4D]">UGX 5,000</span>
                  </div>
                </div>
              ))
            )}

            {/* SAVED FOR LATER SECTION */}
            {savedItems.length > 0 && (
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon name="bookmark" className="text-[20px] text-slate-400" />
                    <h2 className="text-[17px] font-bold text-[#0E1B4D]">
                      Saved For Later ({savedItems.length})
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {savedItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <img
                          src={item.productImage || '/placeholders/product-audio.svg'}
                          alt={item.productTitle}
                          className="w-14 h-14 rounded-xl object-cover bg-white border border-slate-200 flex-shrink-0"
                        />
                        <div className="flex flex-col min-w-0">
                          <h4 className="text-[13px] font-bold text-slate-800 truncate">
                            {item.productTitle}
                          </h4>
                          <PriceUGX amount={item.price} size="sm" className="font-bold text-[#0E1B4D]" />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1 items-end flex-shrink-0">
                        <button
                          type="button"
                          onClick={() => moveToCart(item.id)}
                          className="touch-target px-3 py-1.5 rounded-lg bg-[#FF8A1F] text-white text-[12px] font-bold hover:bg-[#DA3700] transition-colors"
                        >
                          Move to Cart
                        </button>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="touch-target text-[11px] font-semibold text-slate-400 hover:text-rose-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT COL: PROMO CODE & ORDER SUMMARY */}
          <div className="flex flex-col gap-6">
            {/* VOUCHER / PROMO CARD */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon name="sell" className="text-[#FF8A1F] text-[20px]" />
                  <h3 className="text-[16px] font-bold text-[#0E1B4D]">
                    Promo & Vouchers
                  </h3>
                </div>
                <span className="text-[12px] font-bold text-slate-400 uppercase tracking-wider">
                  Discounts
                </span>
              </div>

              {/* Applied Voucher */}
              {cart.appliedVoucher ? (
                <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Icon name="check_circle" className="text-emerald-600 text-[22px]" />
                    <div className="flex flex-col">
                      <span className="text-[14px] font-bold text-emerald-900 tracking-wider">
                        {cart.appliedVoucher.code}
                      </span>
                      <span className="text-[12px] text-emerald-700">
                        {cart.appliedVoucher.discountType === 'percentage'
                          ? `${cart.appliedVoucher.discountValue}% platform discount`
                          : `UGX ${cart.appliedVoucher.discountValue.toLocaleString()} off`}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={removeVoucher}
                    className="touch-target text-[12px] font-bold text-rose-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyVoucher} className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={voucherCodeInput}
                      onChange={(e) => setVoucherCodeInput(e.target.value)}
                      placeholder="Try SWIFT10 or FREESHIP"
                      aria-label="Voucher promo code"
                      className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-[14px] uppercase placeholder:normal-case focus:outline-none focus:border-[#FF8A1F] transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={isApplyingVoucher || !voucherCodeInput.trim()}
                      className="touch-target px-4 py-2.5 rounded-xl bg-[#0E1B4D] hover:bg-[#1a2c6d] text-white text-[13px] font-bold disabled:opacity-40 transition-colors"
                    >
                      {isApplyingVoucher ? 'Applying...' : 'Apply'}
                    </button>
                  </div>

                  {voucherError && (
                    <p className="text-[12px] text-rose-600 font-medium">{voucherError}</p>
                  )}
                  {voucherSuccess && (
                    <p className="text-[12px] text-emerald-600 font-medium">{voucherSuccess}</p>
                  )}

                  <div className="flex items-center gap-2 pt-1 text-[12px] text-slate-500">
                    <span>Available:</span>
                    <button
                      type="button"
                      onClick={() => setVoucherCodeInput('SWIFT10')}
                      className="font-bold text-[#DA3700] hover:underline"
                    >
                      SWIFT10 (10% off)
                    </button>
                    <span>•</span>
                    <button
                      type="button"
                      onClick={() => setVoucherCodeInput('FREESHIP')}
                      className="font-bold text-[#DA3700] hover:underline"
                    >
                      FREESHIP
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* ORDER SUMMARY CARD */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col gap-4">
              <h3 className="text-[18px] font-bold text-[#0E1B4D] pb-3 border-b border-slate-100">
                Order Summary
              </h3>

              <div className="flex flex-col gap-2.5 text-[14px]">
                <div className="flex items-center justify-between text-slate-600">
                  <span>Subtotal ({cart.totalQuantity} items)</span>
                  <PriceUGX amount={cart.subtotal} size="sm" className="font-semibold text-[#0E1B4D]" />
                </div>

                <div className="flex items-center justify-between text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <span>Boda Express Delivery</span>
                    {cart.sellerGroups.length > 1 && (
                      <span className="text-[11px] px-1.5 py-0.2 rounded-full bg-slate-100 text-slate-500 font-bold">
                        {cart.sellerGroups.length} vendors
                      </span>
                    )}
                  </div>
                  <PriceUGX
                    amount={cart.estimatedShipping}
                    size="sm"
                    className="font-semibold text-[#0E1B4D]"
                  />
                </div>

                {cart.discountAmount > 0 && (
                  <div className="flex items-center justify-between text-emerald-600 font-medium">
                    <span>Voucher Discount</span>
                    <span>-UGX {cart.discountAmount.toLocaleString()}</span>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-baseline justify-between">
                <div>
                  <span className="text-[16px] font-bold text-[#0E1B4D] block">Total Amount</span>
                  <span className="text-[12px] text-slate-400">Includes all local dispatch fees</span>
                </div>
                <PriceUGX amount={cart.total} size="xl" className="font-extrabold text-[#DA3700]" />
              </div>

              {/* PAYMENT PROTECTION COPY FROM BUILD-RULES.MD */}
              <div className="p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-200/70 flex items-start gap-2.5 text-emerald-800 text-[13px]">
                <Icon name="security" className="text-emerald-600 text-[20px] flex-shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Your payment is held safely by SwiftCart until you confirm delivery.
                </span>
              </div>

              {/* PROCEED TO CHECKOUT BUTTON */}
              <button
                type="button"
                disabled={activeItems.length === 0}
                onClick={handleCheckoutClick}
                className="touch-target w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] hover:opacity-95 text-white font-bold text-[15px] shadow-md shadow-orange-500/20 active:scale-98 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <span>Proceed to Checkout</span>
                <Icon name="arrow_forward" className="text-[20px]" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE STICKY BOTTOM SUMMARY BAR */}
      {activeItems.length > 0 && (
        <div className="lg:hidden fixed bottom-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-4 px-6 flex items-center justify-between shadow-lg">
          <div className="flex flex-col">
            <span className="text-[12px] text-slate-500 font-medium">Total ({cart.totalQuantity} items)</span>
            <PriceUGX amount={cart.total} size="lg" className="font-extrabold text-[#DA3700]" />
          </div>

          <button
            type="button"
            onClick={handleCheckoutClick}
            className="touch-target px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] text-white font-bold text-[14px] shadow-sm flex items-center gap-1.5 active:scale-95 transition-all"
          >
            <span>Checkout</span>
            <Icon name="arrow_forward" className="text-[18px]" />
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
