import React from 'react';
import { Icon } from '../../components/shared/Icon';

export interface SplashPageProps {
  onNavigate: (path: string) => void;
}

export const SplashPage: React.FC<SplashPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-8 sm:py-16">
      <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200 shadow-2xl max-w-lg w-full text-center space-y-8">
        {/* Brand Hero */}
        <div className="space-y-4">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#FF8A1F] to-[#DA3700] text-white flex items-center justify-center mx-auto shadow-xl">
            <Icon name="shopping_cart" className="text-4xl" />
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#0E1B4D] tracking-tight">
              Swift<span className="text-[#FF8A1F]">Cart</span>
            </h1>
            <p className="text-sm font-semibold text-slate-500 mt-1">
              Uganda's Trusted Multi-Vendor Marketplace
            </p>
          </div>
        </div>

        {/* 3 Core Value Pillars */}
        <div className="space-y-4 text-left">
          <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-100 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#FF8A1F] text-white flex items-center justify-center shrink-0">
              <Icon name="security" className="text-xl" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-[#0E1B4D]">Escrow Payment Protection</h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Your payment is held safely until you inspect and confirm your package with a 6-digit code.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
              <Icon name="two_wheeler" className="text-xl" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-[#0E1B4D]">Express Boda & Station Hubs</h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Doorstep delivery within 1-3 hours in Kampala, or pick up from local hubs across Uganda.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <Icon name="verified" className="text-xl" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-[#0E1B4D]">Verified Ugandan Merchants</h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Direct access to top electronic, fashion, and grocery sellers in Nakasero, Kampala Road, and Entebbe.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="space-y-3 pt-2">
          <button
            onClick={() => onNavigate('/')}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] text-white font-bold text-base hover:opacity-95 shadow-lg transition-opacity flex items-center justify-center gap-2 min-h-[48px]"
          >
            <span>Start Shopping Now</span>
            <Icon name="arrow_forward" className="text-lg" />
          </button>

          <button
            onClick={() => onNavigate('/sign-in-buyer')}
            className="w-full py-3.5 rounded-2xl border border-slate-200 text-[#0E1B4D] font-bold text-sm hover:bg-slate-50 transition-colors min-h-[48px]"
          >
            Sign In to Existing Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default SplashPage;

