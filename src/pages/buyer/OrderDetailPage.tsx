import React from 'react';
import { useOrders } from '../../hooks/useOrders';
import PaymentProtectionNotice from '../../components/shared/PaymentProtectionNotice';
import StaticMapPlaceholder from '../../components/shared/StaticMapPlaceholder';
import SafeImage from '../../components/shared/SafeImage';

export interface OrderDetailPageProps {
  onNavigate: (path: string) => void;
}

export const OrderDetailPage: React.FC<OrderDetailPageProps> = ({ onNavigate }) => {
  const { orders } = useOrders();

  const searchParams = typeof window !== 'undefined'
    ? new URLSearchParams(window.location.search)
    : new URLSearchParams();

  const orderId = searchParams.get('id') || (orders[0]?.id ?? 'order-1001');
  const order = orders.find((o) => o.id === orderId) || orders[0];

  const handoverCode = order?.handoverCode || '482910';

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-10 space-y-6">
      {/* Top Bar Navigation */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('/my-orders')}
            className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors"
            aria-label="Back to Orders"
          >
            <span className="material-symbols-rounded">arrow_back</span>
          </button>
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-[#0E1B4D]">
              Order {order?.orderNumber || 'SWIFT-UG-2024'}
            </h1>
            <p className="text-xs text-slate-500">
              Placed on {order ? new Date(order.createdAt).toLocaleDateString() : 'Recent'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {order?.status === 'OUT_FOR_DELIVERY' && (
            <button
              onClick={() => onNavigate(`/order-tracking-delivery-code?id=${order.id}`)}
              className="px-4 py-2 rounded-xl bg-[#0E1B4D] text-white font-bold text-xs hover:bg-slate-800 transition-colors flex items-center gap-1 min-h-[40px]"
            >
              <span className="material-symbols-rounded text-base">near_me</span>
              <span>Live Boda Map</span>
            </button>
          )}
        </div>
      </div>

      {/* 6-Digit Handover Code Card (BUYER SIDE ONLY) */}
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-[#FF8A1F] rounded-2xl p-5 sm:p-6 text-center space-y-2 shadow-xs">
        <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#DA3700] uppercase tracking-wider">
          <span className="material-symbols-rounded text-base">verified</span>
          <span>Delivery Handover Code</span>
        </div>
        <div className="flex items-center justify-center gap-2 py-1">
          {handoverCode.split('').map((char, i) => (
            <span
              key={i}
              className="w-10 h-12 sm:w-12 sm:h-14 bg-white border border-orange-300 rounded-xl font-mono text-2xl sm:text-3xl font-black text-[#0E1B4D] flex items-center justify-center shadow-xs"
            >
              {char}
            </span>
          ))}
        </div>
        <p className="text-xs text-slate-600 max-w-md mx-auto">
          Provide this code to the courier <strong>ONLY</strong> when you have confirmed and received the delivery.
        </p>
      </div>

      {/* Grid: Timeline and Items */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Real Status Timeline */}
        <div className="lg:col-span-7 space-y-6">
          {/* Order Progress Timeline */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <h2 className="text-base font-bold text-[#0E1B4D] mb-4 flex items-center gap-2">
              <span className="material-symbols-rounded text-[#FF8A1F]">timeline</span>
              <span>Order Journey</span>
            </h2>

            <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
              {order?.timeline && order.timeline.length > 0 ? (
                order.timeline.map((event, idx) => (
                  <div key={idx} className="relative group">
                    <span className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white ring-2 ring-emerald-200 flex items-center justify-center text-white text-[10px]">
                      ✓
                    </span>
                    <div className="flex items-baseline justify-between gap-2">
                      <h4 className="font-bold text-sm text-[#0E1B4D]">{event.title}</h4>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {event.timestamp}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-0.5">{event.description}</p>
                    <span className="inline-block mt-1 font-mono text-[10px] text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                      STATUS: {event.status}
                    </span>
                  </div>
                ))
              ) : (
                <div className="relative">
                  <span className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs">
                    ✓
                  </span>
                  <h4 className="font-bold text-sm text-[#0E1B4D]">Order Placed</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Order confirmed and awaiting delivery dispatch.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Static Tracking Map Graphic */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <h2 className="text-base font-bold text-[#0E1B4D] mb-3 flex items-center gap-2">
              <span className="material-symbols-rounded text-[#FF8A1F]">location_on</span>
              <span>Delivery Routing (Kampala)</span>
            </h2>
            <StaticMapPlaceholder
              riderLocation={order?.rider?.name ? `${order.rider.name} · Nakasero` : 'Courier en route'}
              destination={order?.deliveryAddress?.streetAddress || 'Kampala GPO'}
              height="h-48 sm:h-56"
            />
          </div>

          {/* Escrow Protection */}
          <PaymentProtectionNotice />
        </div>

        {/* Right Column: Order Items & Actions */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4">
            <h3 className="font-bold text-base text-[#0E1B4D]">
              Items ({order?.items.length || 0})
            </h3>

            <div className="space-y-3 divide-y divide-slate-100">
              {order?.items.map((item, idx) => (
                <div key={idx} className="pt-3 first:pt-0 flex gap-3 text-sm">
                  <SafeImage
                    src={item.productImage}
                    alt={item.productTitle}
                    className="w-14 h-14 rounded-xl object-cover border border-slate-100 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-[#0E1B4D] text-xs sm:text-sm line-clamp-2">
                      {item.productTitle}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Seller: {item.sellerName} · Qty: {item.quantity}
                    </p>
                    <p className="text-xs font-bold text-[#0E1B4D] mt-1">
                      UGX {(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Price breakdown */}
            <div className="border-t border-slate-100 pt-3 space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span>UGX {order?.subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Shipping Fee</span>
                <span>UGX {order?.shippingFee.toLocaleString()}</span>
              </div>
              <div className="border-t border-slate-200 pt-2 flex justify-between font-extrabold text-base text-[#0E1B4D]">
                <span>Total</span>
                <span className="text-[#DA3700]">UGX {order?.total.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Delivery Details */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-2 text-xs sm:text-sm">
            <h3 className="font-bold text-slate-900 mb-1">Delivery Destination</h3>
            {order?.deliveryAddress ? (
              <div className="text-slate-600 space-y-0.5">
                <div className="font-bold text-[#0E1B4D]">
                  {order.deliveryAddress.fullName} ({order.deliveryAddress.phoneNumber})
                </div>
                <div>{order.deliveryAddress.streetAddress}, {order.deliveryAddress.district}</div>
              </div>
            ) : order?.pickupStation ? (
              <div className="text-slate-600 space-y-0.5">
                <div className="font-bold text-[#0E1B4D]">{order.pickupStation.name}</div>
                <div>{order.pickupStation.address}</div>
              </div>
            ) : null}
          </div>

          {/* Action Buttons for Buyer */}
          <div className="space-y-2">
            <button
              onClick={() => onNavigate(`/escrow-dispute-return-request?orderId=${order?.id || 'order-1001'}`)}
              className="w-full py-3 rounded-xl border border-slate-200 text-[#0E1B4D] font-bold text-xs sm:text-sm hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5 min-h-[44px]"
            >
              <span className="material-symbols-rounded text-base">assignment_return</span>
              <span>Request Return / Refund</span>
            </button>

            <button
              onClick={() => onNavigate(`/dispute-evidence-form?orderId=${order?.id || 'order-1001'}`)}
              className="w-full py-3 rounded-xl border border-red-200 text-red-600 font-bold text-xs sm:text-sm hover:bg-red-50 transition-colors flex items-center justify-center gap-1.5 min-h-[44px]"
            >
              <span className="material-symbols-rounded text-base">gavel</span>
              <span>Open Escrow Dispute</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailPage;

