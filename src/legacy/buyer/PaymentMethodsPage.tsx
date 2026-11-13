import React, { useState } from 'react';
import { useAccount } from '../../hooks/useAccount';
import PaymentProtectionNotice from '../../components/shared/PaymentProtectionNotice';
import { Icon } from '../../components/shared/Icon';

export interface PaymentMethodsPageProps {
  onNavigate: (path: string) => void;
}

export const PaymentMethodsPage: React.FC<PaymentMethodsPageProps> = ({ onNavigate }) => {
  const {
    paymentMethods,
    addPaymentMethod,
    deletePaymentMethod,
    setDefaultPaymentMethod,
  } = useAccount();

  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [networkType, setNetworkType] = useState<'mtn_momo' | 'airtel_money'>('mtn_momo');
  const [phoneNumber, setPhoneNumber] = useState('+256 ');
  const [accountName, setAccountName] = useState('');
  const [isDefault, setIsDefault] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim() || !accountName.trim()) {
      setErrorMsg('Please enter both phone number and registered account name.');
      return;
    }
    setErrorMsg(null);
    try {
      await addPaymentMethod({
        type: networkType,
        phoneNumber: phoneNumber.trim(),
        accountName: accountName.trim(),
        isDefault,
      });
      setIsSheetOpen(false);
      setPhoneNumber('+256 ');
      setAccountName('');
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Failed to add payment method');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-10">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('/account')}
            className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors"
            aria-label="Back"
          >
            <Icon name="arrow_back" />
          </button>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0E1B4D]">
              Payment Methods
            </h1>
            <p className="text-sm text-slate-500">
              Manage your Mobile Money and card payment options
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsSheetOpen(true)}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] text-white font-bold text-sm hover:opacity-95 transition-opacity flex items-center gap-1.5 shadow-xs shrink-0 min-h-[44px]"
        >
          <Icon name="add" className="text-lg" />
          <span>Add Mobile Money</span>
        </button>
      </div>

      <div className="space-y-6">
        {/* Protection Banner */}
        <PaymentProtectionNotice variant="banner" />

        {/* Saved Methods List */}
        <div className="space-y-4">
          {paymentMethods.map((pm) => {
            const isMTN = pm.type === 'mtn_momo';
            const isAirtel = pm.type === 'airtel_money';

            return (
              <div
                key={pm.id}
                className={`p-5 rounded-2xl bg-white border-2 transition-all flex items-start justify-between gap-4 ${
                  pm.isDefault
                    ? 'border-[#FF8A1F] shadow-xs'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-sm shrink-0 ${
                      isMTN
                        ? 'bg-amber-400 text-slate-900'
                        : isAirtel
                        ? 'bg-red-600 text-white'
                        : 'bg-[#0E1B4D] text-white'
                    }`}
                  >
                    {isMTN ? 'MTN' : isAirtel ? 'AIR' : 'VISA'}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-base text-[#0E1B4D]">
                        {isMTN
                          ? 'MTN MoMo'
                          : isAirtel
                          ? 'Airtel Money'
                          : `${pm.cardBrand || 'Card'} ending in ${pm.cardLast4}`}
                      </h3>
                      {pm.isDefault && (
                        <span className="bg-orange-100 text-[#DA3700] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                          Default
                        </span>
                      )}
                    </div>
                    {pm.phoneNumber && (
                      <p className="text-sm text-slate-600 mt-0.5 font-medium">
                        {pm.phoneNumber}
                      </p>
                    )}
                    {pm.accountName && (
                      <p className="text-xs text-slate-400 mt-0.5">
                        Account: {pm.accountName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {!pm.isDefault && (
                    <button
                      onClick={() => setDefaultPaymentMethod(pm.id)}
                      className="text-xs font-bold text-[#FF8A1F] hover:underline px-2 py-1"
                    >
                      Set Default
                    </button>
                  )}
                  <button
                    onClick={() => deletePaymentMethod(pm.id)}
                    className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    aria-label="Delete method"
                  >
                    <Icon name="delete" className="text-lg" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add Mobile Money Sheet / Modal */}
      {isSheetOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="bg-white rounded-t-3xl sm:rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-in slide-in-from-bottom duration-200">
            <button
              onClick={() => setIsSheetOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200"
              aria-label="Close"
            >
              <Icon name="close" className="text-lg" />
            </button>

            <h2 className="text-xl font-extrabold text-[#0E1B4D] mb-2">
              Add Mobile Money Account
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              Connect your Ugandan MTN or Airtel line for seamless escrow checkouts
            </p>

            {errorMsg && (
              <div className="p-3 mb-4 rounded-xl bg-red-50 text-red-700 text-xs font-medium">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleAddSubmit} className="space-y-4">
              {/* Network Radio */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Select Mobile Network
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setNetworkType('mtn_momo')}
                    className={`p-3.5 rounded-xl border-2 font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                      networkType === 'mtn_momo'
                        ? 'border-[#FF8A1F] bg-amber-50 text-slate-900'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className="w-5 h-5 rounded-full bg-amber-400 text-[10px] font-black flex items-center justify-center">
                      M
                    </span>
                    <span>MTN MoMo</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setNetworkType('airtel_money')}
                    className={`p-3.5 rounded-xl border-2 font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                      networkType === 'airtel_money'
                        ? 'border-[#FF8A1F] bg-red-50 text-slate-900'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className="w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-black flex items-center justify-center">
                      A
                    </span>
                    <span>Airtel Money</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Mobile Money Phone Number *
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
                  Registered Account Holder Name *
                </label>
                <input
                  type="text"
                  required
                  value={accountName}
                  onChange={(e) => setAccountName(e.target.value)}
                  placeholder="e.g. Emmanuel Mukisa"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF8A1F]"
                />
              </div>

              <label className="flex items-center gap-2 pt-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isDefault}
                  onChange={(e) => setIsDefault(e.target.checked)}
                  className="rounded border-slate-300 text-[#FF8A1F] focus:ring-orange-400 w-4 h-4"
                />
                <span className="text-xs font-semibold text-slate-700">
                  Set as default payment method
                </span>
              </label>

              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsSheetOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] text-white font-bold text-sm hover:opacity-95 shadow-md"
                >
                  Save Account
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentMethodsPage;
