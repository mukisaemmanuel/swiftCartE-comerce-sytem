import React, { useState } from 'react';
import { useSellerDiscounts } from '../../hooks/useSeller';
import { Icon } from '../../components/shared/Icon';
import SheetDialog from '../../components/shared/SheetDialog';
import Skeleton from '../../components/shared/Skeleton';

export interface SellerDiscountsPageProps {
  onNavigate?: (path: string) => void;
}

export const SellerDiscountsPage: React.FC<SellerDiscountsPageProps> = () => {
  const { discounts, isLoading, createDiscount, toggleStatus } = useSellerDiscounts();

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [code, setCode] = useState('');
  const [type, setType] = useState<'percentage' | 'fixed'>('percentage');
  const [value, setValue] = useState<number>(10);
  const [minSpend, setMinSpend] = useState<number>(50000);
  const [daysValid, setDaysValid] = useState<number>(7);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;

    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(startDate.getDate() + daysValid);

    await createDiscount({
      code: code.toUpperCase().trim(),
      description: `${type === 'percentage' ? `${value}% off` : `UGX ${value.toLocaleString()} off`} discount promo`,
      discountType: type,
      discountValue: value,
      minSpend,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      status: 'active',
    });

    setIsCreateModalOpen(false);
    setCode('');
    setValue(10);
  };

  if (isLoading) {
    return (
      <div className="space-y-6 animate-pulse">
        <Skeleton height={60} />
        <Skeleton height={300} />
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--d-text-primary)]">
            Discounts & Marketing Campaigns
          </h1>
          <p className="text-[14px] text-[var(--d-text-secondary)] mt-0.5">
            Create store coupons, flash sales, and buyer promotional vouchers to increase sales.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIsCreateModalOpen(true)}
          className="touch-target px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] hover:opacity-95 text-white font-bold text-[14px] flex items-center gap-2 shadow-lg shadow-orange-500/20 transition-all cursor-pointer"
        >
          <Icon name="add" className="text-lg" />
          <span>Create Coupon Code</span>
        </button>
      </div>

      {/* Campaign Summary Banners */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-900/40 to-indigo-900/30 border border-purple-500/30 space-y-3">
          <div className="flex items-center gap-2 text-purple-300 font-bold text-sm">
            <Icon name="bolt" className="text-xl text-yellow-400" />
            <span>Flash Sale Boosters</span>
          </div>
          <p className="text-xs text-[var(--d-text-secondary)] leading-relaxed">
            Boost catalog traffic during peak weekend shopping hours in Kampala. Items with active discounts feature a special badge on the buyer marketplace homepage.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-gradient-to-br from-orange-900/40 to-amber-900/30 border border-orange-500/30 space-y-3">
          <div className="flex items-center gap-2 text-orange-300 font-bold text-sm">
            <Icon name="campaign" className="text-xl text-orange-400" />
            <span>Store Follower Vouchers</span>
          </div>
          <p className="text-xs text-[var(--d-text-secondary)] leading-relaxed">
            Reward your 380+ store followers with exclusive limited-time voucher codes sent directly to their notifications inbox.
          </p>
        </div>
      </div>

      {/* Active Discounts List */}
      <div className="bg-[var(--d-surface)] rounded-2xl border border-[var(--d-border)] p-6 space-y-4 shadow-sm">
        <h2 className="text-lg font-bold text-[var(--d-text-primary)]">Active Promo Codes</h2>

        <div className="divide-y divide-[var(--d-border)]">
          {discounts.map((d) => (
            <div key={d.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-[#FF8A1F] flex items-center justify-center font-black text-lg">
                  <Icon name="local_offer" className="text-xl" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-black text-base text-[var(--d-text-primary)] tracking-wider">
                      {d.code}
                    </span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                        d.status === 'active'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : 'bg-gray-500/10 text-gray-400 border border-gray-500/20'
                      }`}
                    >
                      {d.status}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--d-text-secondary)] mt-0.5">
                    {d.discountType === 'percentage' ? `${d.discountValue}% Off` : `UGX ${d.discountValue.toLocaleString()} Off`} • Min spend: UGX {(d.minSpend || 0).toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs">
                <div className="text-right">
                  <p className="font-bold text-[var(--d-text-primary)]">{d.usedCount} used</p>
                  <p className="text-[11px] text-[var(--d-text-secondary)]">
                    Expires: {new Date(d.endDate).toLocaleDateString()}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => toggleStatus(d.id, d.status === 'active' ? 'expired' : 'active')}
                  className={`touch-target px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    d.status === 'active'
                      ? 'bg-rose-500/10 text-rose-400 border border-rose-500/30 hover:bg-rose-500/20'
                      : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20'
                  }`}
                >
                  {d.status === 'active' ? 'Deactivate' : 'Activate'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Create Modal */}
      <SheetDialog
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title="Create New Discount Coupon"
      >
        <form onSubmit={handleCreate} className="space-y-4">
          <div>
            <label htmlFor="coupon-code" className="block text-xs font-bold text-[var(--d-text-secondary)] mb-1">
              Coupon Code (e.g. KAMPALA10)
            </label>
            <input
              id="coupon-code"
              type="text"
              required
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              placeholder="e.g. NAKASERO15"
              className="w-full p-2.5 rounded-xl bg-[var(--d-surface)] border border-[var(--d-border)] text-sm font-bold uppercase tracking-wider text-[var(--d-text-primary)] focus:outline-none focus:border-[#FF8A1F]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="disc-type" className="block text-xs font-bold text-[var(--d-text-secondary)] mb-1">
                Discount Type
              </label>
              <select
                id="disc-type"
                value={type}
                onChange={(e) => setType(e.target.value as 'percentage' | 'fixed')}
                className="w-full p-2.5 rounded-xl bg-[var(--d-surface)] border border-[var(--d-border)] text-xs text-[var(--d-text-primary)]"
              >
                <option value="percentage">Percentage (%)</option>
                <option value="fixed">Fixed Amount (UGX)</option>
              </select>
            </div>

            <div>
              <label htmlFor="disc-value" className="block text-xs font-bold text-[var(--d-text-secondary)] mb-1">
                Discount Value {type === 'percentage' ? '(%)' : '(UGX)'}
              </label>
              <input
                id="disc-value"
                type="number"
                required
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                className="w-full p-2.5 rounded-xl bg-[var(--d-surface)] border border-[var(--d-border)] text-xs text-[var(--d-text-primary)]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="min-spend" className="block text-xs font-bold text-[var(--d-text-secondary)] mb-1">
                Minimum Order (UGX)
              </label>
              <input
                id="min-spend"
                type="number"
                value={minSpend}
                onChange={(e) => setMinSpend(Number(e.target.value))}
                className="w-full p-2.5 rounded-xl bg-[var(--d-surface)] border border-[var(--d-border)] text-xs text-[var(--d-text-primary)]"
              />
            </div>

            <div>
              <label htmlFor="validity-days" className="block text-xs font-bold text-[var(--d-text-secondary)] mb-1">
                Valid For (Days)
              </label>
              <input
                id="validity-days"
                type="number"
                value={daysValid}
                onChange={(e) => setDaysValid(Number(e.target.value))}
                className="w-full p-2.5 rounded-xl bg-[var(--d-surface)] border border-[var(--d-border)] text-xs text-[var(--d-text-primary)]"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setIsCreateModalOpen(false)}
              className="touch-target px-4 py-2 rounded-xl text-xs font-bold text-[var(--d-text-secondary)]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="touch-target px-5 py-2 rounded-xl bg-[#FF8A1F] hover:bg-[#E0720A] text-white font-bold text-xs cursor-pointer"
            >
              Save Coupon
            </button>
          </div>
        </form>
      </SheetDialog>
    </div>
  );
};

export default SellerDiscountsPage;
