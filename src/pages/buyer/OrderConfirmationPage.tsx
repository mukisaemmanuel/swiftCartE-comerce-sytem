import React from 'react';
import { useOrders } from '../../hooks/useOrders';
import PaymentProtectionNotice from '../../components/shared/PaymentProtectionNotice';
import SafeImage from '../../components/shared/SafeImage';
import { Icon } from '../../components/shared/Icon';

export interface OrderConfirmationPageProps {
  onNavigate: (path: string) => void;
}

export const OrderConfirmationPage: React.FC<OrderConfirmationPageProps> = ({
  onNavigate,
}) => {
  const { orders } = useOrders();

  const searchParams = typeof window !== 'undefined'
    ? new URLSearchParams(window.location.search)
    : new URLSearchParams();

  const orderId = searchParams.get('orderId');
  const order = orders.find((o) => o.id === orderId) || orders[0];

  const handoverCode = order?.handoverCode || '482910';

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-8">
        {/* Success Header */}
        <div className="text-center space-y-3">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
            <Icon name="check_circle" className="text-3xl sm:text-4xl" />
          </div>
          <div>
            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Order Placed Successfully
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0E1B4D] mt-2">
              Thank You for Your Order!
            </h1>
            <p className="text-sm text-slate-500 mt-1 font-mono">
              Order Number: <span className="font-bold text-[#0E1B4D]">{order?.orderNumber || 'SWIFT-UG-8901'}</span>
            </p>
          </div>
        </div>

        {/* 6-Digit Delivery Handover Code Box (BUYER SIDE ONLY) */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-[#FF8A1F] rounded-2xl p-6 text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#DA3700] uppercase tracking-wider">
            <Icon name="pin" className="text-base" />
            <span>Your Delivery Handover Code</span>
          </div>

          <div className="flex items-center justify-center gap-2 sm:gap-3 py-2">
            {handoverCode.split('').map((digit, idx) => (
              <span
                key={idx}
                className="w-10 h-12 sm:w-12 sm:h-14 bg-white border border-orange-300 rounded-xl font-mono text-2xl sm:text-3xl font-black text-[#0E1B4D] flex items-center justify-center shadow-xs"
              >
                {digit}
              </span>
            ))}
          </div>

          <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
            <strong className="text-[#0E1B4D]">Important:</strong> Share this 6-digit code with the Boda rider or pickup agent <span className="underline font-bold">ONLY</span> when you have inspected and received your items. Giving this code authorizes the release of funds from SwiftCart Escrow.
          </p>
        </div>

        {/* Escrow Protection Notice */}
        <PaymentProtectionNotice variant="banner" />

        {/* Order Details Summary */}
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Delivery Method
            </span>
            <span className="text-sm font-bold text-[#0E1B4D] flex items-center gap-1.5">
              <Icon
                name={order?.deliveryType === 'boda' ? 'two_wheeler' : 'storefront'}
                className="text-base text-[#FF8A1F]"
              />
              <span>{order?.deliveryType === 'boda' ? 'Express Boda Delivery' : 'Pickup Station'}</span>
            </span>
          </div>

          {order?.deliveryAddress && (
            <div className="text-xs text-slate-600 space-y-0.5">
              <div className="font-bold text-[#0E1B4D]">
                {order.deliveryAddress.fullName} · {order.deliveryAddress.phoneNumber}
              </div>
              <div>{order.deliveryAddress.streetAddress}, {order.deliveryAddress.district}</div>
            </div>
          )}

          {/* Items Preview */}
          <div className="space-y-2 pt-2 border-t border-slate-200">
            {order?.items.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-xs sm:text-sm">
                <SafeImage
                  src={item.productImage}
                  alt={item.productTitle}
                  className="w-10 h-10 rounded-lg object-cover border border-slate-200 shrink-0"
                />
                <div className="flex-1 truncate">
                  <span className="font-semibold text-[#0E1B4D]">{item.productTitle}</span>
                  <span className="text-slate-400 ml-2">x{item.quantity}</span>
                </div>
                <div className="font-bold text-[#0E1B4D] shrink-0">
                  UGX {(item.price * item.quantity).toLocaleString()}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 pt-3 flex items-center justify-between text-base font-extrabold text-[#0E1B4D]">
            <span>Total Amount Paid</span>
            <span className="text-[#DA3700]">UGX {order?.total.toLocaleString() || '385,000'}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={() => onNavigate(`/my-orders-order-detail?id=${order?.id || 'order-1001'}`)}
            className="flex-1 py-4 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] text-white font-bold text-sm hover:opacity-95 shadow-md flex items-center justify-center gap-2 min-h-[48px]"
          >
            <Icon name="local_shipping" />
            <span>Track Order & Delivery</span>
          </button>
          <button
            onClick={() => onNavigate('/')}
            className="flex-1 py-4 rounded-xl border border-slate-200 text-[#0E1B4D] font-bold text-sm hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 min-h-[48px]"
          >
            <Icon name="storefront" />
            <span>Continue Shopping</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;

