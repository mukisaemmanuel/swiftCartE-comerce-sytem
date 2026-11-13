import React, { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { useAccount } from '../../hooks/useAccount';
import { useOrders } from '../../hooks/useOrders';
import PaymentProtectionNotice from '../../components/shared/PaymentProtectionNotice';
import SafeImage from '../../components/shared/SafeImage';
import { Icon } from '../../components/shared/Icon';

export interface CheckoutPageProps {
  onNavigate: (path: string) => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({ onNavigate }) => {
  const { cart, clearCart, applyVoucher } = useCart();
  const { addresses } = useAccount();
  const { createOrder } = useOrders();

  const [deliveryType, setDeliveryType] = useState<'boda' | 'pickup'>('boda');
  const [selectedAddressId, setSelectedAddressId] = useState<string>(
    addresses[0]?.id || ''
  );
  const [selectedPaymentType, setSelectedPaymentType] = useState<
    'mtn_momo' | 'airtel_money' | 'card'
  >('mtn_momo');
  const [momoPhone, setMomoPhone] = useState('+256 772 123456');
  const [voucherCodeInput, setVoucherCodeInput] = useState('');
  const [voucherError, setVoucherError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [idempotencyKey] = useState(() => `checkout-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`);

  const activeAddress =
    addresses.find((a) => a.id === selectedAddressId) || addresses[0];

  const shippingFee = deliveryType === 'boda' ? 5000 : 3500;
  const grandTotal = cart.subtotal + shippingFee - cart.discountAmount;

  const handleApplyVoucher = async () => {
    if (!voucherCodeInput.trim()) return;
    setVoucherError(null);
    try {
      await applyVoucher(voucherCodeInput.trim());
    } catch {
      setVoucherError('Invalid coupon or minimum order requirement not met.');
    }
  };

  const handlePlaceOrder = async () => {
    if (cart.items.length === 0) {
      onNavigate('/cart');
      return;
    }
    setIsSubmitting(true);
    try {
      const orderItems = cart.items.map((item) => ({
        productId: item.productId,
        productTitle: item.productTitle,
        productImage: item.productImage,
        variantName: item.variantName,
        price: item.price,
        quantity: item.quantity,
        sellerId: item.sellerId,
        sellerName: item.sellerName,
      }));

      const newOrder = await createOrder({
        items: orderItems,
        subtotal: cart.subtotal,
        shippingFee,
        total: grandTotal,
        deliveryType,
        deliveryAddress: deliveryType === 'boda' ? activeAddress : undefined,
        idempotencyKey,
      });

      // Clear the cart
      await clearCart();

      // If mobile money, forward to waiting screen; otherwise to confirmation
      if (selectedPaymentType === 'mtn_momo' || selectedPaymentType === 'airtel_money') {
        onNavigate(`/checkout-one-flow-payment-waiting?orderId=${newOrder.id}&phone=${encodeURIComponent(momoPhone)}&amount=${grandTotal}&key=${idempotencyKey}`);
      } else {
        onNavigate(`/order-confirmation-delivery-code?orderId=${newOrder.id}`);
      }
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : 'Failed to place order');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 md:py-10">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => onNavigate('/cart')}
          className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors"
          aria-label="Back to Cart"
        >
          <Icon name="arrow_back" />
        </button>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0E1B4D]">
            Checkout
          </h1>
          <p className="text-sm text-slate-500">
            Complete your order with protected payment
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Form Steps */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Delivery Method */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <h2 className="text-base font-bold text-[#0E1B4D] mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#FF8A1F] text-white text-xs font-bold flex items-center justify-center">
                1
              </span>
              <span>Delivery Method</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <button
                type="button"
                onClick={() => setDeliveryType('boda')}
                className={`p-4 rounded-xl border-2 text-left transition-all flex flex-col justify-between ${
                  deliveryType === 'boda'
                    ? 'border-[#FF8A1F] bg-orange-50/50'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon name="two_wheeler" className="text-2xl text-[#FF8A1F]" />
                  <span className="font-extrabold text-sm text-[#0E1B4D]">
                    UGX 5,000
                  </span>
                </div>
                <div>
                  <div className="font-bold text-sm text-[#0E1B4D]">Express Boda</div>
                  <div className="text-xs text-slate-500">Doorstep delivery within 1-3 hours</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setDeliveryType('pickup')}
                className={`p-4 rounded-xl border-2 text-left transition-all flex flex-col justify-between ${
                  deliveryType === 'pickup'
                    ? 'border-[#FF8A1F] bg-orange-50/50'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon name="storefront" className="text-2xl text-[#0E1B4D]" />
                  <span className="font-extrabold text-sm text-[#0E1B4D]">
                    UGX 3,500
                  </span>
                </div>
                <div>
                  <div className="font-bold text-sm text-[#0E1B4D]">Pickup Station</div>
                  <div className="text-xs text-slate-500">Collect from Kampala GPO or regional hub</div>
                </div>
              </button>
            </div>

            {deliveryType === 'boda' ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Delivery Address
                  </span>
                  <button
                    onClick={() => onNavigate('/delivery-addresses')}
                    className="text-xs font-bold text-[#FF8A1F] hover:underline"
                  >
                    Manage Addresses
                  </button>
                </div>
                {addresses.length > 1 && (
                  <select
                    value={selectedAddressId}
                    onChange={(e) => setSelectedAddressId(e.target.value)}
                    className="w-full text-xs font-semibold p-2 border border-slate-200 rounded-lg bg-white"
                  >
                    {addresses.map((a) => (
                      <option key={a.id} value={a.id}>
                        {a.fullName} - {a.streetAddress}, {a.district} {a.isDefault ? '(Default)' : ''}
                      </option>
                    ))}
                  </select>
                )}
                {activeAddress ? (
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm">
                    <div className="font-bold text-[#0E1B4D]">
                      {activeAddress.fullName} · {activeAddress.phoneNumber}
                    </div>
                    <div className="text-slate-600 mt-0.5">
                      {activeAddress.streetAddress}, {activeAddress.district}
                    </div>
                    {activeAddress.landmark && (
                      <div className="text-xs text-slate-400 mt-1">
                        Landmark: {activeAddress.landmark}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => onNavigate('/delivery-addresses')}
                    className="w-full py-3 px-4 border border-dashed border-[#FF8A1F] text-[#FF8A1F] font-bold text-sm rounded-xl hover:bg-orange-50 transition-colors"
                  >
                    + Add Delivery Address
                  </button>
                )}
              </div>
            ) : (
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-sm">
                <div>
                  <div className="font-bold text-[#0E1B4D]">Kampala GPO Station Hub</div>
                  <div className="text-xs text-slate-500">Plot 35 Kampala Road · Mon-Sat 8AM-7PM</div>
                </div>
                <button
                  onClick={() => onNavigate('/pickup-station-chooser')}
                  className="text-xs font-bold text-[#FF8A1F] hover:underline shrink-0 ml-3"
                >
                  Change Station
                </button>
              </div>
            )}
          </div>

          {/* Step 2: Payment Method */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <h2 className="text-base font-bold text-[#0E1B4D] mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#FF8A1F] text-white text-xs font-bold flex items-center justify-center">
                2
              </span>
              <span>Payment Option</span>
            </h2>

            <div className="space-y-3 mb-4">
              <label
                className={`flex items-center gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedPaymentType === 'mtn_momo'
                    ? 'border-[#FF8A1F] bg-amber-50/40'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={selectedPaymentType === 'mtn_momo'}
                  onChange={() => setSelectedPaymentType('mtn_momo')}
                  className="text-[#FF8A1F] focus:ring-orange-400 w-4 h-4"
                />
                <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-900 font-black text-xs flex items-center justify-center shrink-0">
                  MTN
                </div>
                <div className="flex-1">
                  <div className="font-bold text-sm text-[#0E1B4D]">MTN MoMo</div>
                  <div className="text-xs text-slate-500">You will get a prompt on your phone to approve the payment.</div>
                </div>
              </label>

              <label
                className={`flex items-center gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedPaymentType === 'airtel_money'
                    ? 'border-[#FF8A1F] bg-red-50/40'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={selectedPaymentType === 'airtel_money'}
                  onChange={() => setSelectedPaymentType('airtel_money')}
                  className="text-[#FF8A1F] focus:ring-orange-400 w-4 h-4"
                />
                <div className="w-8 h-8 rounded-lg bg-red-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                  AIR
                </div>
                <div className="flex-1">
                  <div className="font-bold text-sm text-[#0E1B4D]">Airtel Money</div>
                  <div className="text-xs text-slate-500">You will get a prompt on your phone to approve the payment.</div>
                </div>
              </label>

              <label
                className={`flex items-center gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedPaymentType === 'card'
                    ? 'border-[#FF8A1F] bg-blue-50/40'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={selectedPaymentType === 'card'}
                  onChange={() => setSelectedPaymentType('card')}
                  className="text-[#FF8A1F] focus:ring-orange-400 w-4 h-4"
                />
                <div className="w-8 h-8 rounded-lg bg-[#0E1B4D] text-white flex items-center justify-center shrink-0">
                  <Icon name="credit_card" className="text-lg" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-sm text-[#0E1B4D]">Visa / Mastercard</div>
                  <div className="text-xs text-slate-500">Protected debit or credit card</div>
                </div>
              </label>
            </div>

            {(selectedPaymentType === 'mtn_momo' || selectedPaymentType === 'airtel_money') && (
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <label className="block text-xs font-bold text-slate-700">
                  Mobile Money Number
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-500">
                    UG
                  </span>
                  <input
                    type="tel"
                    value={momoPhone}
                    onChange={(e) => setMomoPhone(e.target.value)}
                    placeholder="+256 772 000000"
                    className="w-full pl-12 pr-4 py-2.5 rounded-lg border border-slate-300 text-sm font-semibold focus:outline-none focus:border-[#FF8A1F]"
                  />
                </div>
                <p className="text-[11px] text-slate-500">
                  You will receive a USSD prompt on this phone to enter your PIN.
                </p>
              </div>
            )}
          </div>

          {/* Payment Protection Notice */}
          <PaymentProtectionNotice />
        </div>

        {/* Right Column: Order Summary Grouped by Seller */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <h2 className="text-base font-bold text-[#0E1B4D] mb-4">
              Order Summary ({cart.totalQuantity} items)
            </h2>

            {/* Seller Grouping */}
            <div className="space-y-4 divide-y divide-slate-100 mb-6">
              {cart.sellerGroups.map((group) => (
                <div key={group.sellerId} className="pt-3 first:pt-0">
                  <div className="flex items-center gap-2 mb-2 text-xs font-bold text-slate-600">
                    <Icon name="storefront" className="text-sm text-[#FF8A1F]" />
                    <span>{group.sellerName}</span>
                  </div>
                  <div className="space-y-2.5">
                    {group.items.map((item) => (
                      <div key={item.id} className="flex gap-3 text-sm">
                        <SafeImage
                          src={item.productImage}
                          alt={item.productTitle}
                          className="w-12 h-12 rounded-lg object-cover shrink-0 border border-slate-100"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-[#0E1B4D] line-clamp-1 text-xs sm:text-sm">
                            {item.productTitle}
                          </p>
                          <p className="text-xs text-slate-400">
                            Qty: {item.quantity} · {item.variantName || 'Standard'}
                          </p>
                        </div>
                        <div className="text-right text-xs sm:text-sm font-bold text-[#0E1B4D] shrink-0">
                          UGX {(item.price * item.quantity).toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Coupon / Voucher Field */}
            <div className="border-t border-slate-100 pt-4 mb-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Voucher code (e.g. SWIFT10)"
                  value={voucherCodeInput}
                  onChange={(e) => setVoucherCodeInput(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium uppercase placeholder:normal-case focus:outline-none focus:border-[#FF8A1F]"
                />
                <button
                  type="button"
                  onClick={handleApplyVoucher}
                  className="px-4 py-2 bg-slate-900 text-white font-bold text-xs sm:text-sm rounded-xl hover:bg-slate-800 transition-colors"
                >
                  Apply
                </button>
              </div>
              {voucherError && (
                <p className="text-xs text-red-600 mt-1">{voucherError}</p>
              )}
              {cart.appliedVoucher && (
                <p className="text-xs text-emerald-600 font-bold mt-1">
                  Coupon applied: {cart.appliedVoucher.code}
                </p>
              )}
            </div>

            {/* Financial Breakdown */}
            <div className="border-t border-slate-100 pt-3 space-y-2 text-sm">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span className="font-medium">UGX {cart.subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Delivery ({deliveryType === 'boda' ? 'Express Boda' : 'Pickup'})</span>
                <span className="font-medium">UGX {shippingFee.toLocaleString()}</span>
              </div>
              {cart.discountAmount > 0 && (
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>Voucher Discount</span>
                  <span>- UGX {cart.discountAmount.toLocaleString()}</span>
                </div>
              )}
              <div className="border-t border-slate-200 pt-2 flex justify-between text-base font-extrabold text-[#0E1B4D]">
                <span>Total to Pay</span>
                <span className="text-[#DA3700]">
                  UGX {grandTotal.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              disabled={isSubmitting || cart.items.length === 0}
              onClick={handlePlaceOrder}
              className="mt-6 w-full py-4 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] text-white font-bold text-base hover:opacity-95 transition-opacity shadow-md flex items-center justify-center gap-2 disabled:opacity-50 min-h-[48px]"
            >
              <Icon name="lock" />
              <span>
                {isSubmitting
                  ? 'Processing Order...'
                  : `Place Order · UGX ${grandTotal.toLocaleString()}`}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
