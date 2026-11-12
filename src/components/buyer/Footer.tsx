import React from 'react';
import Logo from '../brand/Logo';

export interface FooterProps {
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="hidden lg:block bg-[#0E1B4D] text-slate-300 border-t border-slate-800 pt-12 pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand & Promise */}
          <div className="flex flex-col gap-4">
            <Logo variant="white" height={36} />
            <p className="text-[14px] text-slate-400 leading-relaxed">
              Uganda's trusted online shopping destination. Fast boda deliveries in Kampala and nationwide hub pickups.
            </p>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[14px]">
              <span className="font-semibold text-emerald-400 block mb-1">
                Payment Protection
              </span>
              <span className="text-slate-300">
                Your payment is held safely by SwiftCart until you confirm delivery.
              </span>
            </div>
          </div>

          {/* Column 2: Customer Service */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[15px] font-bold text-white uppercase tracking-wider">
              Customer Support
            </h4>
            <ul className="space-y-2 text-[14px]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.('/help')}
                  className="hover:text-white transition-colors"
                >
                  Help Centre
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.('/track-order')}
                  className="hover:text-white transition-colors"
                >
                  Track Order
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.('/returns')}
                  className="hover:text-white transition-colors"
                >
                  Returns &amp; Refunds
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.('/disputes')}
                  className="hover:text-white transition-colors"
                >
                  SwiftCart Support
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: About SwiftCart */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[15px] font-bold text-white uppercase tracking-wider">
              SwiftCart Uganda
            </h4>
            <ul className="space-y-2 text-[14px]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.('/about')}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.('/seller/apply')}
                  className="hover:text-white transition-colors"
                >
                  Become a Seller
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.('/terms')}
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.('/privacy')}
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Ugandan Payment Methods */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[15px] font-bold text-white uppercase tracking-wider">
              Payment Methods
            </h4>
            <p className="text-[14px] text-slate-400">
              Safe checkout with Ugandan mobile money and cards.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-3 py-1.5 rounded-lg bg-[#FFCC00] text-black font-bold text-[14px] shadow-sm">
                MTN MoMo
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#ED1C24] text-white font-bold text-[14px] shadow-sm">
                Airtel Money
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-blue-700 text-white font-bold text-[14px] shadow-sm">
                Visa
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-red-600 text-white font-bold text-[14px] shadow-sm">
                Mastercard
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 text-center text-[14px] text-slate-500">
          <p>© {new Date().getFullYear()} SwiftCart Uganda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

