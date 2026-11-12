import React, { useState } from 'react';
import { useAccount } from '../../hooks/useAccount';

export interface VouchersPageProps {
  onNavigate: (path: string) => void;
}

export const VouchersPage: React.FC<VouchersPageProps> = ({ onNavigate }) => {
  const { vouchers } = useAccount();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(code);
    }
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-10 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => onNavigate('/account')}
          className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors"
          aria-label="Back"
        >
          <span className="material-symbols-rounded">arrow_back</span>
        </button>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0E1B4D]">
            Vouchers & Discounts
          </h1>
          <p className="text-sm text-slate-500">
            Apply valid coupon codes at checkout to save on your orders
          </p>
        </div>
      </div>

      {/* Vouchers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {vouchers.map((voucher) => (
          <div
            key={voucher.code}
            className="bg-white rounded-3xl p-5 border-2 border-dashed border-orange-200 hover:border-[#FF8A1F] transition-all shadow-xs flex flex-col justify-between space-y-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="bg-orange-100 text-[#DA3700] text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {voucher.discountType === 'percentage'
                    ? `${voucher.discountValue}% OFF`
                    : `UGX ${voucher.discountValue.toLocaleString()} OFF`}
                </span>
                <h3 className="font-mono text-xl font-black text-[#0E1B4D] mt-2">
                  {voucher.code}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Valid until {new Date(voucher.expiryDate).toLocaleDateString()}
                </p>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF8A1F] flex items-center justify-center shrink-0">
                <span className="material-symbols-rounded text-2xl">
                  confirmation_number
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1">
              {voucher.minOrderAmount && (
                <div>
                  Min Spend: <strong>UGX {voucher.minOrderAmount.toLocaleString()}</strong>
                </div>
              )}
              {voucher.maxDiscount && (
                <div>
                  Max Discount: <strong>UGX {voucher.maxDiscount.toLocaleString()}</strong>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 pt-1">
              <button
                type="button"
                onClick={() => handleCopy(voucher.code)}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 text-[#0E1B4D] font-bold text-xs hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5"
              >
                <span className="material-symbols-rounded text-base">
                  {copiedCode === voucher.code ? 'check' : 'content_copy'}
                </span>
                <span>{copiedCode === voucher.code ? 'Copied!' : 'Copy Code'}</span>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/cart')}
                className="flex-1 py-2.5 rounded-xl bg-[#0E1B4D] text-white font-bold text-xs hover:bg-slate-800 transition-colors flex items-center justify-center gap-1"
              >
                <span>Use in Cart</span>
                <span className="material-symbols-rounded text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VouchersPage;

