import React from 'react';
import { useOrders } from '../../hooks/useOrders';
import StaticMapPlaceholder from '../../components/shared/StaticMapPlaceholder';
import PaymentProtectionNotice from '../../components/shared/PaymentProtectionNotice';
import { Icon } from '../../components/shared/Icon';

export interface OrderTrackingPageProps {
  onNavigate: (path: string) => void;
}

export const OrderTrackingPage: React.FC<OrderTrackingPageProps> = ({ onNavigate }) => {
  const { orders } = useOrders();

  const searchParams = typeof window !== 'undefined'
    ? new URLSearchParams(window.location.search)
    : new URLSearchParams();

  const orderId = searchParams.get('id') || (orders[1]?.id ?? 'order-1003');
  const order = orders.find((o) => o.id === orderId) || orders[1] || orders[0];

  const rider = order?.rider || {
    name: 'Kato Denis',
    phone: '+256 782 554433',
    bikePlate: 'UFB 214K',
    rating: 4.9,
    avatarUrl: '/placeholders/avatar.svg',
  };

  const handoverCode = order?.handoverCode || '518294';

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-10 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate(`/my-orders-order-detail?id=${order?.id}`)}
            className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors"
            aria-label="Back"
          >
            <Icon name="arrow_back" />
          </button>
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-[#0E1B4D]">
              Live Order Tracking
            </h1>
            <p className="text-xs text-slate-500 font-mono">
              {order?.orderNumber || 'SWIFT-UG-9140'} · Express Boda
            </p>
          </div>
        </div>

        <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>In Transit</span>
        </span>
      </div>

      {/* 6-Digit Handover Code Banner (BUYER ONLY) */}
      <div className="bg-[#0E1B4D] text-white rounded-3xl p-5 sm:p-6 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1 mb-1">
            <Icon name="key" className="text-sm" />
            <span>Delivery Verification Code</span>
          </span>
          <h3 className="text-base sm:text-lg font-bold">
            Share with rider upon receiving goods
          </h3>
          <p className="text-xs text-slate-300 mt-0.5">
            Do not reveal this PIN over phone or WhatsApp before physical delivery.
          </p>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 px-4 py-2 rounded-2xl backdrop-blur-xs border border-white/20">
          {handoverCode.split('').map((digit, i) => (
            <span
              key={i}
              className="w-8 h-10 sm:w-10 sm:h-12 bg-white text-[#0E1B4D] font-mono font-black text-xl sm:text-2xl rounded-lg flex items-center justify-center shadow-sm"
            >
              {digit}
            </span>
          ))}
        </div>
      </div>

      {/* Map Display */}
      <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-xs space-y-4">
        <h2 className="text-sm font-bold text-[#0E1B4D] flex items-center gap-1.5">
          <Icon name="two_wheeler" className="text-[#FF8A1F]" />
          <span>Boda Rider GPS Route (Kampala Central)</span>
        </h2>
        <StaticMapPlaceholder
          riderLocation={`${rider.name} (${rider.bikePlate})`}
          destination={order?.deliveryAddress?.streetAddress || 'Lumumba Avenue, Nakasero'}
          height="h-64 sm:h-80"
        />
      </div>

      {/* Rider Information Card */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="w-14 h-14 rounded-2xl bg-orange-100 border border-orange-200 flex items-center justify-center text-[#FF8A1F] font-bold text-xl shrink-0">
            <Icon name="sports_motorsports" className="text-3xl" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-extrabold text-[#0E1B4D]">
                {rider.name}
              </h3>
              <span className="bg-slate-100 text-[#0E1B4D] text-xs font-bold px-2 py-0.5 rounded-md font-mono border border-slate-200">
                {rider.bikePlate}
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1">
              <Icon name="star" className="text-sm text-amber-500 fill-current" />
              <span className="font-bold text-slate-700">{rider.rating} Rating</span>
              <span className="text-slate-300">·</span>
              <span>SwiftCart Verified Rider</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <a
            href={`tel:${rider.phone.replace(/\s+/g, '')}`}
            className="flex-1 sm:flex-initial px-5 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs sm:text-sm hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 shadow-xs min-h-[44px]"
          >
            <Icon name="call" className="text-lg" />
            <span>Call Rider</span>
          </a>

          <button
            onClick={() => onNavigate(`/scan-qr-handover?id=${order?.id}`)}
            className="px-4 py-3 rounded-xl border border-slate-200 text-[#0E1B4D] font-bold text-xs sm:text-sm hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5 min-h-[44px]"
          >
            <Icon name="qr_code" className="text-lg" />
            <span className="hidden sm:inline">Show QR</span>
          </button>
        </div>
      </div>

      {/* Escrow Banner */}
      <PaymentProtectionNotice />
    </div>
  );
};

export default OrderTrackingPage;

