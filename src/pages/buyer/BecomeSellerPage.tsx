import React, { useState } from 'react';
import { useAccount } from '../../hooks/useAccount';

export interface BecomeSellerPageProps {
  onNavigate: (path: string) => void;
}

const CATEGORIES = [
  'Phones & Tablets',
  'Electronics & Audio',
  'Computers & Laptops',
  'Groceries & Fresh Food',
  'Fashion & Apparel',
  'Health & Beauty',
  'Home & Kitchen',
];

const UGANDAN_DISTRICTS = ['Kampala', 'Wakiso', 'Mukono', 'Entebbe', 'Jinja', 'Mbarara', 'Gulu'];

export const BecomeSellerPage: React.FC<BecomeSellerPageProps> = ({ onNavigate }) => {
  const { submitSellerApplication } = useAccount();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form Data
  const [storeName, setStoreName] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [district, setDistrict] = useState(UGANDAN_DISTRICTS[0]);
  const [physicalAddress, setPhysicalAddress] = useState('');

  const [contactName, setContactName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('+256 ');
  const [email, setEmail] = useState('');
  const [nationalIdNumber, setNationalIdNumber] = useState('');

  const [payoutMethod, setPayoutMethod] = useState<'mtn_momo' | 'airtel_money' | 'bank'>('mtn_momo');
  const [payoutAccount, setPayoutAccount] = useState('');
  const [accountHolderName, setAccountHolderName] = useState('');

  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleNext = () => {
    setErrorMsg(null);
    if (step === 1) {
      if (!storeName.trim() || !physicalAddress.trim()) {
        setErrorMsg('Please enter your store name and physical shop location.');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!contactName.trim() || !phoneNumber.trim() || !nationalIdNumber.trim()) {
        setErrorMsg('Please fill in your contact name, phone, and National ID (NIN).');
        return;
      }
      setStep(3);
    } else if (step === 3) {
      if (!payoutAccount.trim() || !accountHolderName.trim()) {
        setErrorMsg('Please provide your payout account details for escrow payouts.');
        return;
      }
      setStep(4);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeTerms) {
      setErrorMsg('Please accept the SwiftCart Merchant Terms.');
      return;
    }
    setIsSubmitting(true);
    try {
      await submitSellerApplication({
        storeName,
        category,
        contactName,
        email: email || 'seller@swiftcart.ug',
        phoneNumber,
        district,
        physicalAddress,
        nationalIdNumber,
        payoutMethod,
        payoutAccount,
        accountHolderName,
        status: 'UNDER_REVIEW',
        submittedAt: new Date().toISOString(),
      });
      onNavigate('/seller-application-status');
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Submission failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 md:py-10 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => (step > 1 ? setStep((step - 1) as 1 | 2 | 3) : onNavigate('/account'))}
          className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors"
          aria-label="Back"
        >
          <span className="material-symbols-rounded">arrow_back</span>
        </button>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0E1B4D]">
            Become a SwiftCart Seller
          </h1>
          <p className="text-sm text-slate-500">
            Open your store, reach verified buyers across Uganda, and enjoy protected escrow payouts
          </p>
        </div>
      </div>

      {/* 4-Step Indicator */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
        <div className="grid grid-cols-4 gap-2 text-center text-xs">
          {[
            { num: 1, label: 'Store Info' },
            { num: 2, label: 'Verification' },
            { num: 3, label: 'Payouts' },
            { num: 4, label: 'Review' },
          ].map((s) => {
            const isCurrent = step === s.num;
            const isDone = step > s.num;
            return (
              <div key={s.num} className="space-y-1">
                <div
                  className={`w-8 h-8 rounded-full font-bold flex items-center justify-center mx-auto transition-colors text-xs ${
                    isCurrent
                      ? 'bg-[#FF8A1F] text-white shadow-xs'
                      : isDone
                      ? 'bg-emerald-500 text-white'
                      : 'bg-slate-100 text-slate-400'
                  }`}
                >
                  {isDone ? '✓' : s.num}
                </div>
                <div
                  className={`font-semibold hidden sm:block ${
                    isCurrent ? 'text-[#0E1B4D]' : 'text-slate-400'
                  }`}
                >
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {errorMsg && (
        <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
          {errorMsg}
        </div>
      )}

      {/* Step Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs">
        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-[#0E1B4D]">Step 1: Store Profile</h2>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Store / Business Name *
              </label>
              <input
                type="text"
                required
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                placeholder="e.g. Pearl Tech Solutions"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF8A1F]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Primary Category *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:border-[#FF8A1F]"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  District / City *
                </label>
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:border-[#FF8A1F]"
                >
                  {UGANDAN_DISTRICTS.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Physical Shop Location / Pickup Address *
              </label>
              <input
                type="text"
                required
                value={physicalAddress}
                onChange={(e) => setPhysicalAddress(e.target.value)}
                placeholder="e.g. Shop 12, Pioneer Mall, Kampala Road"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF8A1F]"
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-[#0E1B4D]">Step 2: Merchant Verification</h2>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Authorized Contact Person Full Name *
              </label>
              <input
                type="text"
                required
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="e.g. Emmanuel Mukisa"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF8A1F]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Ugandan Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+256 772 000000"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF8A1F]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="merchant@swiftcart.ug"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF8A1F]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                National Identification Number (NIN) *
              </label>
              <input
                type="text"
                required
                value={nationalIdNumber}
                onChange={(e) => setNationalIdNumber(e.target.value)}
                placeholder="e.g. CM98021102A1BC"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF8A1F]"
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-[#0E1B4D]">Step 3: Payout Account (Escrow Disbursement)</h2>
            <p className="text-xs text-slate-500">
              When orders are completed and buyers provide their handover code, escrow funds will be disbursed to this account.
            </p>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">
                Payout Channel *
              </label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPayoutMethod('mtn_momo')}
                  className={`p-3 rounded-xl border-2 font-bold text-xs flex flex-col items-center gap-1 ${
                    payoutMethod === 'mtn_momo'
                      ? 'border-[#FF8A1F] bg-amber-50 text-slate-900'
                      : 'border-slate-200'
                  }`}
                >
                  <span className="w-6 h-6 rounded-full bg-amber-400 font-black text-slate-900 flex items-center justify-center text-[10px]">
                    M
                  </span>
                  <span>MTN MoMo</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPayoutMethod('airtel_money')}
                  className={`p-3 rounded-xl border-2 font-bold text-xs flex flex-col items-center gap-1 ${
                    payoutMethod === 'airtel_money'
                      ? 'border-[#FF8A1F] bg-red-50 text-slate-900'
                      : 'border-slate-200'
                  }`}
                >
                  <span className="w-6 h-6 rounded-full bg-red-600 font-black text-white flex items-center justify-center text-[10px]">
                    A
                  </span>
                  <span>Airtel Money</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPayoutMethod('bank')}
                  className={`p-3 rounded-xl border-2 font-bold text-xs flex flex-col items-center gap-1 ${
                    payoutMethod === 'bank'
                      ? 'border-[#FF8A1F] bg-blue-50 text-slate-900'
                      : 'border-slate-200'
                  }`}
                >
                  <span className="material-symbols-rounded text-lg text-[#0E1B4D]">
                    account_balance
                  </span>
                  <span>Bank Payout</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {payoutMethod === 'bank' ? 'Bank Account Number *' : 'Mobile Money Number *'}
              </label>
              <input
                type="text"
                required
                value={payoutAccount}
                onChange={(e) => setPayoutAccount(e.target.value)}
                placeholder={payoutMethod === 'bank' ? 'e.g. Account 9030012345678' : '+256 7XX XXXXXX'}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF8A1F]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Account Holder Legal Name *
              </label>
              <input
                type="text"
                required
                value={accountHolderName}
                onChange={(e) => setAccountHolderName(e.target.value)}
                placeholder="Must match your identification"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF8A1F]"
              />
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-5">
            <h2 className="text-lg font-bold text-[#0E1B4D]">Step 4: Review & Submit Application</h2>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Store Name:</span>
                <span className="font-bold text-[#0E1B4D]">{storeName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Category & Location:</span>
                <span className="font-bold text-[#0E1B4D]">{category} · {district}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Contact Person:</span>
                <span className="font-bold text-[#0E1B4D]">{contactName} ({phoneNumber})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">National ID (NIN):</span>
                <span className="font-bold text-[#0E1B4D]">{nationalIdNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Payout Method:</span>
                <span className="font-bold text-[#0E1B4D] uppercase">{payoutMethod} ({payoutAccount})</span>
              </div>
            </div>

            <label className="flex items-start gap-2 pt-2 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mt-1 rounded border-slate-300 text-[#FF8A1F] focus:ring-orange-400 w-4 h-4"
              />
              <span className="text-xs text-slate-600">
                I confirm that all provided details and identity credentials are true, and I agree to the SwiftCart Merchant Escrow Agreement.
              </span>
            </label>
          </div>
        )}

        {/* Form Controls */}
        <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep((step - 1) as 1 | 2 | 3)}
              className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 min-h-[44px]"
            >
              Back
            </button>
          ) : (
            <div></div>
          )}

          {step < 4 ? (
            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-2.5 rounded-xl bg-[#0E1B4D] text-white font-bold text-xs hover:bg-slate-800 transition-colors flex items-center gap-1.5 min-h-[44px]"
            >
              <span>Next Step</span>
              <span className="material-symbols-rounded text-base">arrow_forward</span>
            </button>
          ) : (
            <button
              type="button"
              disabled={isSubmitting}
              onClick={handleSubmit}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] text-white font-bold text-sm hover:opacity-95 shadow-md flex items-center gap-2 min-h-[48px]"
            >
              <span className="material-symbols-rounded">send</span>
              <span>{isSubmitting ? 'Submitting...' : 'Submit Application'}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BecomeSellerPage;
