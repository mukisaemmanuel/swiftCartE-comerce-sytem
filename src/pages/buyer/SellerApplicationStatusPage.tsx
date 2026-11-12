import React from 'react';
import { useAccount } from '../../hooks/useAccount';

export interface SellerApplicationStatusPageProps {
  onNavigate: (path: string) => void;
}

export const SellerApplicationStatusPage: React.FC<SellerApplicationStatusPageProps> = ({
  onNavigate,
}) => {
  const { sellerApplication } = useAccount();

  const app = sellerApplication || {
    id: 'app-901',
    storeName: 'Pearl Tech Solutions',
    category: 'Phones & Tablets',
    contactName: 'Mukisa Emmanuel',
    phoneNumber: '+256 772 123456',
    status: 'UNDER_REVIEW',
    submittedAt: '2024-11-12T10:00:00Z',
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:py-16 text-center">
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-8">
        {/* Status Graphic */}
        <div className="space-y-3">
          <div className="w-20 h-20 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto shadow-md">
            <span className="material-symbols-rounded text-4xl animate-pulse">
              hourglass_top
            </span>
          </div>
          <span className="bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Application Under Review
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0E1B4D]">
            We're Reviewing Your Store
          </h1>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            Thank you for applying to sell on SwiftCart! Our merchant onboarding team is verifying your business and national identification.
          </p>
        </div>

        {/* Application Details Summary */}
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-left text-xs sm:text-sm space-y-2.5">
          <div className="flex justify-between text-slate-600">
            <span>Reference ID</span>
            <span className="font-mono font-bold text-[#0E1B4D]">{app.id || 'APP-901'}</span>
          </div>
          <div className="flex justify-between text-slate-600">
            <span>Store Name</span>
            <span className="font-bold text-[#0E1B4D]">{app.storeName}</span>
          </div>
          <div className="flex justify-between text-slate-600">
            <span>Primary Category</span>
            <span className="font-bold text-[#0E1B4D]">{app.category}</span>
          </div>
          <div className="flex justify-between text-slate-600">
            <span>Contact Phone</span>
            <span className="font-bold text-[#0E1B4D]">{app.phoneNumber}</span>
          </div>
          <div className="flex justify-between text-slate-600">
            <span>Expected SLA</span>
            <span className="font-bold text-emerald-700">24 - 48 Business Hours</span>
          </div>
        </div>

        {/* Next Steps Card */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 text-left flex items-start gap-3 text-blue-900 text-xs sm:text-sm">
          <span className="material-symbols-rounded text-blue-600 text-xl shrink-0 mt-0.5">
            info
          </span>
          <div>
            <strong className="block font-bold mb-0.5">What happens next?</strong>
            Our Kampala merchant team will call or SMS your registered phone to confirm your shop inventory and provide your merchant dashboard login credentials.
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => onNavigate('/account')}
            className="flex-1 py-3.5 rounded-xl border border-slate-200 text-[#0E1B4D] font-bold text-xs sm:text-sm hover:bg-slate-50 min-h-[48px]"
          >
            Back to Account
          </button>
          <button
            onClick={() => onNavigate('/')}
            className="flex-1 py-3.5 rounded-xl bg-[#0E1B4D] text-white font-bold text-xs sm:text-sm hover:bg-slate-800 transition-colors min-h-[48px]"
          >
            Explore Marketplace
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellerApplicationStatusPage;

