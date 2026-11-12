import React, { useState } from 'react';

export interface TermsPrivacyPageProps {
  onNavigate: (path: string) => void;
}

export const TermsPrivacyPage: React.FC<TermsPrivacyPageProps> = ({ onNavigate }) => {
  const [tab, setTab] = useState<'terms' | 'privacy'>('terms');

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
            Legal & Privacy Policies
          </h1>
          <p className="text-sm text-slate-500">
            Platform terms of service and personal data protection policy
          </p>
        </div>
      </div>

      {/* Prominent Disclaimer */}
      <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 sm:p-5 flex items-start gap-3 text-amber-900">
        <span className="material-symbols-rounded text-amber-600 text-2xl shrink-0">
          gavel
        </span>
        <div className="text-xs sm:text-sm">
          <strong className="font-extrabold block mb-0.5">
            Legal Notice: Draft document - to be reviewed by a lawyer before live launch
          </strong>
          This document represents the platform terms and privacy guidelines tailored for the Republic of Uganda. Official legal counsel will review and finalize clauses prior to public commercial operation.
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
        <button
          onClick={() => setTab('terms')}
          className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
            tab === 'terms'
              ? 'bg-[#0E1B4D] text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Terms of Service
        </button>
        <button
          onClick={() => setTab('privacy')}
          className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
            tab === 'privacy'
              ? 'bg-[#0E1B4D] text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Privacy Policy
        </button>
      </div>

      {/* Content Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6 text-sm text-slate-700 leading-relaxed">
        {tab === 'terms' ? (
          <>
            <div>
              <h2 className="text-lg font-bold text-[#0E1B4D] mb-2">1. SwiftCart Escrow Mechanism</h2>
              <p>
                All payments processed through SwiftCart (via Mobile Money or card) are automatically held in a segregated escrow holding account. Payout is not made to the seller until the buyer confirms physical receipt through the 6-digit delivery handover code.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0E1B4D] mb-2">2. Handover Code & Delivery Verification</h2>
              <p>
                Buyers receive a confidential 6-digit delivery code. Providing this code to the Boda delivery rider or station representative constitutes legal confirmation that the parcel was received and inspected in good condition. Buyers must never disclose this code before physical receipt.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0E1B4D] mb-2">3. 3-Day Return & Dispute Window</h2>
              <p>
                Buyers maintain the right to report defective, counterfeit, or misrepresented products within 3 calendar days of delivery. Upon opening a dispute, escrow disbursements are automatically frozen until mediation resolves the claim.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0E1B4D] mb-2">4. Merchant Responsibilities</h2>
              <p>
                Merchants agree to list only genuine, available inventory and dispatch packages within agreed SLAs. SwiftCart reserves the right to ban fraudulent vendors and refund affected buyers from escrow reserves.
              </p>
            </div>
          </>
        ) : (
          <>
            <div>
              <h2 className="text-lg font-bold text-[#0E1B4D] mb-2">1. Data Collection & Uganda Privacy Compliance</h2>
              <p>
                In compliance with the Data Protection and Privacy Act of Uganda, SwiftCart collects only the minimum personal information required to facilitate e-commerce orders, delivery routing, and escrow transactions.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0E1B4D] mb-2">2. How We Use Phone Numbers</h2>
              <p>
                Your phone number is utilized solely to send transactional SMS order updates, dispatch rider notifications, and process Mobile Money payments. We do not sell your contact details to third-party advertisers.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0E1B4D] mb-2">3. Financial Security</h2>
              <p>
                SwiftCart does not store your Mobile Money PIN or CVV credentials. All payment authorizations are executed directly on the telecom operator's secure USSD / payment gateway infrastructure.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TermsPrivacyPage;

