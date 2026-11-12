import React from 'react';

export interface PaymentProtectionNoticeProps {
  className?: string;
  variant?: 'banner' | 'card';
}

export const PaymentProtectionNotice: React.FC<PaymentProtectionNoticeProps> = ({
  className = '',
  variant = 'card',
}) => {
  if (variant === 'banner') {
    return (
      <div
        className={`bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-xl px-4 py-3 flex items-center gap-3 text-sm font-medium ${className}`}
      >
        <span className="material-symbols-rounded text-emerald-600 shrink-0 text-xl">
          verified_user
        </span>
        <p className="leading-snug">
          Your payment is held safely by SwiftCart until you confirm delivery.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/80 rounded-2xl p-4 flex items-start gap-3 text-sm text-emerald-950 shadow-xs ${className}`}
    >
      <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
        <span className="material-symbols-rounded text-2xl">security</span>
      </div>
      <div>
        <h4 className="font-bold text-emerald-900 text-sm mb-0.5 flex items-center gap-1.5">
          <span>SwiftCart Escrow Protection</span>
          <span className="text-[10px] bg-emerald-200 text-emerald-800 font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider">
            Safe
          </span>
        </h4>
        <p className="text-emerald-800/90 text-xs sm:text-sm leading-relaxed">
          Your payment is held safely by SwiftCart until you confirm delivery. The merchant or rider is paid only after your inspection.
        </p>
      </div>
    </div>
  );
};

export default PaymentProtectionNotice;

