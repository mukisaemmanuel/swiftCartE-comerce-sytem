import React from 'react';
import { useOrders } from '../../hooks/useOrders';

export interface ScanQrHandoverPageProps {
  onNavigate: (path: string) => void;
}

export const ScanQrHandoverPage: React.FC<ScanQrHandoverPageProps> = ({ onNavigate }) => {
  const { orders } = useOrders();

  const searchParams = typeof window !== 'undefined'
    ? new URLSearchParams(window.location.search)
    : new URLSearchParams();

  const orderId = searchParams.get('id') || (orders[1]?.id ?? 'order-1003');
  const order = orders.find((o) => o.id === orderId) || orders[1] || orders[0];

  const handoverCode = order?.handoverCode || '518294';

  return (
    <div className="max-w-md mx-auto px-4 py-8 sm:py-16 text-center">
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <button
            onClick={() => onNavigate(`/order-tracking-delivery-code?id=${order?.id}`)}
            className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-100"
            aria-label="Back"
          >
            <span className="material-symbols-rounded">arrow_back</span>
          </button>
          <span className="font-mono text-xs font-bold text-slate-500">
            {order?.orderNumber || 'SWIFT-UG-2024-9140'}
          </span>
        </div>

        <div>
          <span className="bg-orange-100 text-[#DA3700] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Handover Verification
          </span>
          <h1 className="text-xl sm:text-2xl font-extrabold text-[#0E1B4D] mt-2">
            Scan to Confirm Delivery
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Present this QR code or 6-digit PIN to the Boda rider or pickup agent upon inspection.
          </p>
        </div>

        {/* Mock QR Code SVG */}
        <div className="w-56 h-56 mx-auto bg-white p-4 rounded-3xl border-2 border-[#0E1B4D] shadow-md flex items-center justify-center">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* QR Pattern Representation */}
            <rect width="100" height="100" fill="white" />
            {/* Top-left corner box */}
            <rect x="5" y="5" width="28" height="28" fill="#0E1B4D" rx="4" />
            <rect x="9" y="9" width="20" height="20" fill="white" rx="2" />
            <rect x="13" y="13" width="12" height="12" fill="#0E1B4D" rx="1" />

            {/* Top-right corner box */}
            <rect x="67" y="5" width="28" height="28" fill="#0E1B4D" rx="4" />
            <rect x="71" y="9" width="20" height="20" fill="white" rx="2" />
            <rect x="75" y="13" width="12" height="12" fill="#0E1B4D" rx="1" />

            {/* Bottom-left corner box */}
            <rect x="5" y="67" width="28" height="28" fill="#0E1B4D" rx="4" />
            <rect x="9" y="71" width="20" height="20" fill="white" rx="2" />
            <rect x="13" y="75" width="12" height="12" fill="#0E1B4D" rx="1" />

            {/* Data blocks */}
            <rect x="38" y="10" width="8" height="8" fill="#FF8A1F" />
            <rect x="50" y="14" width="6" height="12" fill="#0E1B4D" />
            <rect x="38" y="24" width="18" height="6" fill="#0E1B4D" />

            <rect x="12" y="38" width="14" height="6" fill="#0E1B4D" />
            <rect x="30" y="42" width="16" height="16" fill="#0E1B4D" />
            <rect x="52" y="38" width="10" height="10" fill="#FF8A1F" />
            <rect x="68" y="44" width="22" height="6" fill="#0E1B4D" />

            <rect x="38" y="68" width="8" height="16" fill="#0E1B4D" />
            <rect x="52" y="62" width="16" height="14" fill="#0E1B4D" />
            <rect x="74" y="66" width="16" height="18" fill="#0E1B4D" />
            <rect x="42" y="88" width="20" height="6" fill="#FF8A1F" />
          </svg>
        </div>

        {/* 6-Digit Delivery PIN display */}
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
            Numeric Handover PIN
          </div>
          <div className="flex items-center justify-center gap-2">
            {handoverCode.split('').map((digit, i) => (
              <span
                key={i}
                className="w-9 h-11 bg-white border border-slate-300 rounded-lg font-mono font-black text-xl text-[#0E1B4D] flex items-center justify-center shadow-xs"
              >
                {digit}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={() => onNavigate(`/my-orders-order-detail?id=${order?.id}`)}
          className="w-full py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-colors"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default ScanQrHandoverPage;

