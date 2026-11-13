import React, { useState } from 'react';
import { useSellerAnalytics } from '../../hooks/useSeller';
import { Icon } from '../../components/shared/Icon';
import Skeleton from '../../components/shared/Skeleton';

export interface SellerAnalyticsPageProps {
  onNavigate?: (path: string) => void;
}

export const SellerAnalyticsPage: React.FC<SellerAnalyticsPageProps> = () => {
  const { analytics, isLoading } = useSellerAnalytics();
  const [dateRange, setDateRange] = useState<'7d' | '30d' | 'month' | 'year'>('30d');

  if (isLoading) {
    return (
      <div className="space-y-6 animate-pulse">
        <Skeleton height={50} />
        <Skeleton height={300} />
      </div>
    );
  }

  const weekly = analytics?.weeklyRevenue || [];
  const maxDaily = Math.max(...(weekly.map((d) => d.amount) || [1]));

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--d-text-primary)]">
            Store Performance & Analytics
          </h1>
          <p className="text-[14px] text-[var(--d-text-secondary)] mt-0.5">
            Track revenue trends, order fulfillment velocity, and customer return rates.
          </p>
        </div>

        {/* Date range chips */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[var(--d-surface-container)] border border-[var(--d-border)] self-start sm:self-auto">
          {[
            { key: '7d', label: '7 Days' },
            { key: '30d', label: '30 Days' },
            { key: 'month', label: 'This Month' },
            { key: 'year', label: 'This Year' },
          ].map((r) => (
            <button
              key={r.key}
              type="button"
              onClick={() => setDateRange(r.key as '7d' | '30d' | 'month' | 'year')}
              className={`touch-target px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                dateRange === r.key
                  ? 'bg-[#FF8A1F] text-white shadow-sm'
                  : 'text-[var(--d-text-secondary)] hover:text-[var(--d-text-primary)]'
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[var(--d-surface)] rounded-2xl p-5 border border-[var(--d-border)] shadow-sm space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--d-text-secondary)]">
            Today's Sales
          </span>
          <div className="text-2xl font-black text-[var(--d-text-primary)]">
            UGX {(analytics?.todaySales || 0).toLocaleString()}
          </div>
          <p className="text-xs text-emerald-400 font-bold flex items-center gap-1">
            <Icon name="trending_up" className="text-sm" />
            <span>+{analytics?.todaySalesGrowthPercent || 0}% vs yesterday</span>
          </p>
        </div>

        <div className="bg-[var(--d-surface)] rounded-2xl p-5 border border-[var(--d-border)] shadow-sm space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--d-text-secondary)]">
            Today's Orders
          </span>
          <div className="text-2xl font-black text-[var(--d-text-primary)]">
            {analytics?.todayOrdersCount || 0}
          </div>
          <p className="text-xs text-[var(--d-text-secondary)]">
            {analytics?.ordersToProcessCount || 0} need fulfillment
          </p>
        </div>

        <div className="bg-[var(--d-surface)] rounded-2xl p-5 border border-[var(--d-border)] shadow-sm space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--d-text-secondary)]">
            Orders to Process
          </span>
          <div className="text-2xl font-black text-[var(--d-text-primary)]">
            {analytics?.ordersToProcessCount || 0}
          </div>
          <p className="text-xs text-amber-400 font-bold">Action required</p>
        </div>

        <div className="bg-[var(--d-surface)] rounded-2xl p-5 border border-[var(--d-border)] shadow-sm space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--d-text-secondary)]">
            Customer Return Rate
          </span>
          <div className="text-2xl font-black text-emerald-400">
            {analytics?.returnRatePercent || 0}%
          </div>
          <p className="text-xs text-[var(--d-text-secondary)]">
            Marketplace benchmark: &lt; 4.0%
          </p>
        </div>
      </div>

      {/* Return Rate Plain-Language Caption Box */}
      <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 flex items-start gap-3">
        <Icon name="verified" className="text-xl shrink-0 mt-0.5 text-emerald-400" />
        <div className="space-y-1">
          <p className="font-bold text-sm text-emerald-200">Excellent Quality & Fulfillment Score</p>
          <p className="leading-relaxed">
            Your return rate of <strong>{analytics?.returnRatePercent}%</strong> is well below the marketplace average of 4.0%. Low dispute rates earn your store the <strong>Verified Merchant badge</strong>, prioritizing your items in buyer search results.
          </p>
        </div>
      </div>

      {/* Daily Sales Chart Simulation */}
      <div className="bg-[var(--d-surface)] rounded-2xl border border-[var(--d-border)] p-6 space-y-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-[var(--d-text-primary)]">Revenue Trend (Last 7 Days)</h2>
          <span className="text-xs text-[var(--d-text-secondary)]">Daily Revenue in UGX</span>
        </div>

        <div className="h-48 flex items-end justify-between gap-2 sm:gap-4 pt-6 border-b border-[var(--d-border)]">
          {weekly.map((d, i) => {
            const heightPct = Math.max(12, Math.round((d.amount / maxDaily) * 100));
            return (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                <div className="text-[10px] text-[var(--d-text-secondary)] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  UGX {(d.amount / 1000).toFixed(0)}k
                </div>
                <div
                  className="w-full max-w-[48px] bg-gradient-to-t from-[#FF8A1F] to-[#FFB067] rounded-t-lg transition-all group-hover:brightness-110"
                  style={{ height: `${heightPct}%` }}
                />
                <span className="text-[11px] font-semibold text-[var(--d-text-secondary)] mt-1">
                  {d.date.slice(5)}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Top Products Table */}
      <div className="bg-[var(--d-surface)] rounded-2xl border border-[var(--d-border)] p-6 space-y-4 shadow-sm">
        <h2 className="text-lg font-bold text-[var(--d-text-primary)]">Top Performing Products</h2>
        <div className="divide-y divide-[var(--d-border)]">
          {analytics?.topSellingProducts.map((p, idx) => (
            <div key={idx} className="py-3 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[var(--d-surface-container)] font-extrabold text-[var(--d-text-secondary)] flex items-center justify-center">
                  {idx + 1}
                </span>
                <div>
                  <p className="font-bold text-sm text-[var(--d-text-primary)]">{p.productTitle}</p>
                  <p className="text-[11px] text-[var(--d-text-secondary)] mt-0.5">
                    {p.salesCount} units delivered
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-black text-sm text-[var(--d-text-primary)]">
                  UGX {p.revenue.toLocaleString()}
                </p>
                <p className="text-[10px] text-emerald-400 font-bold mt-0.5">Top Earner</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SellerAnalyticsPage;
