import React, { useState } from 'react';
import { useSellerWallet } from '../../hooks/useSeller';
import { Icon } from '../../components/shared/Icon';
import ConfirmDialog from '../../components/shared/ConfirmDialog';
import SheetDialog from '../../components/shared/SheetDialog';
import Skeleton from '../../components/shared/Skeleton';

export interface SellerWalletPageProps {
  onNavigate?: (path: string) => void;
}

export const SellerWalletPage: React.FC<SellerWalletPageProps> = () => {
  const { wallet, transactions, isLoading, requestPayout } = useSellerWallet();

  const [activeTypeFilter, setActiveTypeFilter] = useState<string>('ALL');
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);

  // Withdraw Form State
  const [network, setNetwork] = useState<'mtn_momo' | 'airtel_money'>('mtn_momo');
  const [phone, setPhone] = useState('+256 772 123456');
  const [withdrawAmount, setWithdrawAmount] = useState<number>(500000);
  const [withdrawError, setWithdrawError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const availableBalance = wallet?.availableBalance || 0;

  const handleOpenWithdraw = () => {
    setWithdrawError(null);
    setWithdrawAmount(Math.min(availableBalance, 500000));
    setIsWithdrawModalOpen(true);
  };

  const handleValidateAndProceed = (e: React.FormEvent) => {
    e.preventDefault();
    setWithdrawError(null);

    if (withdrawAmount <= 0) {
      setWithdrawError('Withdrawal amount must be greater than UGX 0.');
      return;
    }

    if (withdrawAmount > availableBalance) {
      setWithdrawError(
        `Withdrawal amount (UGX ${withdrawAmount.toLocaleString()}) cannot exceed your available wallet balance (UGX ${availableBalance.toLocaleString()}).`
      );
      return;
    }

    // Pass gate: open final confirmation dialog
    setIsWithdrawModalOpen(false);
    setIsConfirmDialogOpen(true);
  };

  const handleExecuteWithdrawal = async () => {
    setIsSubmitting(true);
    await requestPayout(withdrawAmount, network, phone);
    setIsSubmitting(false);
    setIsConfirmDialogOpen(false);
  };

  const filteredTransactions = transactions.filter((tx) => {
    if (activeTypeFilter === 'ALL') return true;
    return tx.type === activeTypeFilter;
  });

  if (isLoading) {
    return (
      <div className="space-y-6 animate-pulse">
        <Skeleton height={120} />
        <Skeleton height={400} />
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--d-text-primary)]">
            Store Wallet & Payouts
          </h1>
          <p className="text-[14px] text-[var(--d-text-secondary)] mt-0.5">
            Transparent escrow releases, commission breakdown, and automated Mobile Money disbursements.
          </p>
        </div>
        <button
          type="button"
          onClick={handleOpenWithdraw}
          disabled={availableBalance <= 0}
          className="touch-target px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] hover:opacity-95 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-[14px] flex items-center gap-2 shadow-lg shadow-orange-500/20 transition-all cursor-pointer"
        >
          <Icon name="payments" className="text-lg" />
          <span>Withdraw to Mobile Money</span>
        </button>
      </div>

      {/* KPI Cards: 3 Balances */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Available */}
        <div className="bg-[var(--d-surface)] rounded-2xl p-5 border border-[var(--d-border)] shadow-sm space-y-3">
          <div className="flex items-center justify-between text-[var(--d-text-secondary)]">
            <span className="text-[13px] font-bold uppercase tracking-wider">Available Balance</span>
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
              <Icon name="account_balance_wallet" className="text-xl" />
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">
              UGX {availableBalance.toLocaleString()}
            </div>
            <p className="text-xs text-[var(--d-text-secondary)] mt-1">
              Ready for instant disbursement to MoMo
            </p>
          </div>
        </div>

        {/* In Escrow */}
        <div className="bg-[var(--d-surface)] rounded-2xl p-5 border border-[var(--d-border)] shadow-sm space-y-3">
          <div className="flex items-center justify-between text-[var(--d-text-secondary)]">
            <span className="text-[13px] font-bold uppercase tracking-wider">Held in Escrow</span>
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
              <Icon name="lock" className="text-xl" />
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-purple-400">
              UGX {(wallet?.inEscrowBalance || 0).toLocaleString()}
            </div>
            <p className="text-xs text-[var(--d-text-secondary)] mt-1">
              Protected until delivery confirmation
            </p>
          </div>
        </div>

        {/* Paid Out */}
        <div className="bg-[var(--d-surface)] rounded-2xl p-5 border border-[var(--d-border)] shadow-sm space-y-3">
          <div className="flex items-center justify-between text-[var(--d-text-secondary)]">
            <span className="text-[13px] font-bold uppercase tracking-wider">Total Paid Out</span>
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
              <Icon name="check_circle" className="text-xl" />
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-[var(--d-text-primary)]">
              UGX {(wallet?.totalPaidOut || 0).toLocaleString()}
            </div>
            <p className="text-xs text-[var(--d-text-secondary)] mt-1">
              Lifetime successful disbursements
            </p>
          </div>
        </div>
      </div>

      {/* Escrow Mechanism Explainer Card */}
      <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300 flex items-start gap-3">
        <Icon name="verified_user" className="text-xl shrink-0 mt-0.5 text-blue-400" />
        <div className="space-y-1">
          <p className="font-bold text-sm text-blue-200">How Escrow Protection Works on SwiftCart</p>
          <p className="leading-relaxed">
            When a customer places an order, payment is securely deposited into escrow. Once your assigned dispatch rider delivers the package and the buyer confirms receipt via delivery OTP, the escrow funds (minus the marketplace commission) are instantly credited to your <strong>Available Balance</strong>.
          </p>
        </div>
      </div>

      {/* Transactions Section */}
      <div className="bg-[var(--d-surface)] rounded-2xl border border-[var(--d-border)] p-6 space-y-5 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--d-border)] pb-4">
          <h2 className="text-lg font-bold text-[var(--d-text-primary)] flex items-center gap-2">
            <Icon name="receipt_long" className="text-xl text-[#FF8A1F]" />
            <span>Transaction History</span>
          </h2>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {[
              { key: 'ALL', label: 'All' },
              { key: 'sale', label: 'Sales' },
              { key: 'payout', label: 'Payouts' },
              { key: 'refund', label: 'Refunds' },
              { key: 'fee', label: 'Fees' },
            ].map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setActiveTypeFilter(f.key)}
                className={`touch-target px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTypeFilter === f.key
                    ? 'bg-[#FF8A1F] text-white'
                    : 'text-[var(--d-text-secondary)] hover:text-[var(--d-text-primary)] hover:bg-[var(--d-surface-container)]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="divide-y divide-[var(--d-border)]">
          {filteredTransactions.map((tx) => {
            const isPositive = tx.amount > 0;
            return (
              <div key={tx.id} className="py-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${
                      tx.type === 'sale'
                        ? 'bg-emerald-500/10 text-emerald-400'
                        : tx.type === 'payout'
                        ? 'bg-blue-500/10 text-blue-400'
                        : tx.type === 'refund'
                        ? 'bg-rose-500/10 text-rose-400'
                        : 'bg-purple-500/10 text-purple-400'
                    }`}
                  >
                    <Icon
                      name={
                        tx.type === 'sale'
                          ? 'arrow_downward'
                          : tx.type === 'payout'
                          ? 'arrow_upward'
                          : tx.type === 'refund'
                          ? 'replay'
                          : 'percent'
                      }
                      className="text-base"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[var(--d-text-primary)]">{tx.description}</p>
                    <p className="text-xs text-[var(--d-text-secondary)] mt-0.5">
                      {new Date(tx.createdAt).toLocaleString()}
                      {tx.orderNumber && ` • Order ${tx.orderNumber}`}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span
                    className={`font-black text-sm ${
                      isPositive ? 'text-emerald-400' : 'text-[var(--d-text-primary)]'
                    }`}
                  >
                    {isPositive ? '+' : ''}UGX {Math.abs(tx.amount).toLocaleString()}
                  </span>
                  <p className="text-[10px] text-[var(--d-text-secondary)] uppercase font-semibold mt-0.5">
                    {tx.status}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Withdraw Modal */}
      <SheetDialog
        isOpen={isWithdrawModalOpen}
        onClose={() => setIsWithdrawModalOpen(false)}
        title="Withdraw Funds to Mobile Money"
      >
        <form onSubmit={handleValidateAndProceed} className="space-y-4">
          <div className="p-3.5 rounded-xl bg-[var(--d-surface-container)] border border-[var(--d-border)] flex items-center justify-between text-xs">
            <span className="text-[var(--d-text-secondary)]">Available to withdraw:</span>
            <strong className="text-sm text-emerald-400 font-black">
              UGX {availableBalance.toLocaleString()}
            </strong>
          </div>

          {withdrawError && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-400 font-semibold">
              {withdrawError}
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-[var(--d-text-secondary)] mb-2">
              Select Mobile Network
            </label>
            <div className="grid grid-cols-2 gap-3">
              <label
                className={`p-3 rounded-xl border flex items-center gap-2 cursor-pointer transition-all ${
                  network === 'mtn_momo'
                    ? 'border-[#FF8A1F] bg-[#FF8A1F]/10 text-[var(--d-text-primary)]'
                    : 'border-[var(--d-border)] text-[var(--d-text-secondary)]'
                }`}
              >
                <input
                  type="radio"
                  name="network"
                  checked={network === 'mtn_momo'}
                  onChange={() => setNetwork('mtn_momo')}
                  className="accent-[#FF8A1F]"
                />
                <span className="text-xs font-bold">MTN Mobile Money</span>
              </label>

              <label
                className={`p-3 rounded-xl border flex items-center gap-2 cursor-pointer transition-all ${
                  network === 'airtel_money'
                    ? 'border-[#FF8A1F] bg-[#FF8A1F]/10 text-[var(--d-text-primary)]'
                    : 'border-[var(--d-border)] text-[var(--d-text-secondary)]'
                }`}
              >
                <input
                  type="radio"
                  name="network"
                  checked={network === 'airtel_money'}
                  onChange={() => setNetwork('airtel_money')}
                  className="accent-[#FF8A1F]"
                />
                <span className="text-xs font-bold">Airtel Money</span>
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="momo-phone" className="block text-xs font-bold text-[var(--d-text-secondary)] mb-1">
              Registered Phone Number
            </label>
            <input
              id="momo-phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-[var(--d-surface)] border border-[var(--d-border)] text-xs text-[var(--d-text-primary)] focus:outline-none focus:border-[#FF8A1F]"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label htmlFor="momo-amount" className="text-xs font-bold text-[var(--d-text-secondary)]">
                Amount (UGX)
              </label>
              <button
                type="button"
                onClick={() => setWithdrawAmount(availableBalance)}
                className="text-xs text-[#FF8A1F] hover:underline font-bold"
              >
                Withdraw Max
              </button>
            </div>
            <input
              id="momo-amount"
              type="number"
              required
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(Number(e.target.value))}
              className="w-full p-2.5 rounded-xl bg-[var(--d-surface)] border border-[var(--d-border)] text-sm font-bold text-[var(--d-text-primary)] focus:outline-none focus:border-[#FF8A1F]"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setIsWithdrawModalOpen(false)}
              className="touch-target px-4 py-2 rounded-xl text-xs font-bold text-[var(--d-text-secondary)]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="touch-target px-5 py-2 rounded-xl bg-[#FF8A1F] hover:bg-[#E0720A] text-white font-bold text-xs cursor-pointer"
            >
              Review Withdrawal
            </button>
          </div>
        </form>
      </SheetDialog>

      {/* Confirmation Dialog */}
      <ConfirmDialog
        isOpen={isConfirmDialogOpen}
        onCancel={() => setIsConfirmDialogOpen(false)}
        onConfirm={handleExecuteWithdrawal}
        title="Confirm Mobile Money Payout"
        message={`Are you sure you want to withdraw UGX ${withdrawAmount.toLocaleString()} to ${phone} via ${
          network === 'mtn_momo' ? 'MTN MoMo' : 'Airtel Money'
        }? Funds will be deducted from your available balance immediately.`}
        actionLabel={isSubmitting ? 'Processing...' : 'Confirm Withdrawal'}
        requiresReason={false}
      />
    </div>
  );
};

export default SellerWalletPage;
