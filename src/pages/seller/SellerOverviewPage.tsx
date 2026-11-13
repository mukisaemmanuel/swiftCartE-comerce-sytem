import React from 'react';
import { useSellerAnalytics, useSellerOrders, useSellerWallet } from '../../hooks/useSeller';
import { Icon } from '../../components/shared/Icon';
import StatusChip from '../../components/shared/StatusChip';
import Skeleton from '../../components/shared/Skeleton';

export interface SellerOverviewPageProps {
  onNavigate: (path: string) => void;
}

export const SellerOverviewPage: React.FC<SellerOverviewPageProps> = ({ onNavigate }) => {
  const { analytics, isLoading: isAnalyticsLoading } = useSellerAnalytics();
  const { orders, isLoading: isOrdersLoading } = useSellerOrders();
  const { wallet, isLoading: isWalletLoading } = useSellerWallet();

  const isLoading = isAnalyticsLoading || isOrdersLoading || isWalletLoading;

  if (isLoading) {
    return (
      <div className="space-y-6 animate-pulse">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Skeleton height={110} />
          <Skeleton height={110} />
          <Skeleton height={110} />
          <Skeleton height={110} />
        </div>
        <Skeleton height={200} />
        <Skeleton height={300} />
      </div>
    );
  }

  const attentionItems = [
    {
      id: 'att-1',
      title: '2 orders need packing',
      desc: 'Orders SWIFT-UG-8901 and SWIFT-UG-9140 are confirmed by buyers',
      action: () => onNavigate('/seller/orders'),
      actionLabel: 'Pack Orders',
      icon: 'inventory_2',
      color: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    },
    {
      id: 'att-2',
      title: '1 customer return requested',
      desc: 'Order SWIFT-UG-7822 reported loose audio jack - action required within 24h',
      action: () => onNavigate('/seller/returns'),
      actionLabel: 'Review Return',
      icon: 'assignment_return',
      color: 'text-rose-400 bg-rose-400/10 border-rose-400/20',
    },
    {
      id: 'att-3',
      title: 'Low stock alert: Soundcore Life Q20',
      desc: 'Only 3 units remaining in Nakasero store',
      action: () => onNavigate('/seller/products'),
      actionLabel: 'Restock',
      icon: 'warning',
      color: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
    },
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* 1. Header with greeting and quick add button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--d-text-primary)]">
            Store Overview
          </h1>
          <p className="text-[14px] text-[var(--d-text-secondary)] mt-0.5">
            Real-time store performance, fulfillment queue and escrow wallet.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onNavigate('/seller/add-product-step-1-photos-seller')}
            className="touch-target px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] hover:opacity-95 text-white font-bold text-[14px] flex items-center gap-2 shadow-lg shadow-orange-500/20 transition-all cursor-pointer"
          >
            <Icon name="add" className="text-lg" />
            <span>Add Product</span>
          </button>
        </div>
      </div>

      {/* 2. Top KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* KPI 1: Today's Sales */}
        <div className="bg-[var(--d-surface)] rounded-2xl p-5 border border-[var(--d-border)] shadow-sm space-y-3">
          <div className="flex items-center justify-between text-[var(--d-text-secondary)]">
            <span className="text-[13px] font-bold uppercase tracking-wider">Today's Sales</span>
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
              <Icon name="payments" className="text-xl" />
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[var(--d-text-primary)]">
              UGX {(analytics?.todaySales || 0).toLocaleString()}
            </div>
            <div className="flex items-center gap-1.5 mt-1.5 text-[13px] text-emerald-400 font-bold">
              <Icon name="trending_up" className="text-sm" />
              <span>+{analytics?.todaySalesGrowthPercent || 0}% vs yesterday</span>
            </div>
          </div>
        </div>

        {/* KPI 2: Orders to Process */}
        <div className="bg-[var(--d-surface)] rounded-2xl p-5 border border-[var(--d-border)] shadow-sm space-y-3">
          <div className="flex items-center justify-between text-[var(--d-text-secondary)]">
            <span className="text-[13px] font-bold uppercase tracking-wider">Orders to Process</span>
            <div className="p-2 rounded-xl bg-orange-500/10 text-orange-400">
              <Icon name="receipt_long" className="text-xl" />
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[var(--d-text-primary)]">
              {analytics?.ordersToProcessCount || 0}
            </div>
            <p className="text-[13px] text-[var(--d-text-secondary)] mt-1.5">
              Requires merchant fulfillment
            </p>
          </div>
        </div>

        {/* KPI 3: Available Balance */}
        <div className="bg-[var(--d-surface)] rounded-2xl p-5 border border-[var(--d-border)] shadow-sm space-y-3">
          <div className="flex items-center justify-between text-[var(--d-text-secondary)]">
            <span className="text-[13px] font-bold uppercase tracking-wider">Available Wallet</span>
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
              <Icon name="account_balance_wallet" className="text-xl" />
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[var(--d-text-primary)]">
              UGX {(wallet?.availableBalance || 0).toLocaleString()}
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/seller/wallet')}
              className="text-[13px] text-[#FF8A1F] hover:underline font-bold mt-1.5 flex items-center gap-1 cursor-pointer"
            >
              <span>Withdraw to MoMo</span>
              <Icon name="arrow_forward" className="text-xs" />
            </button>
          </div>
        </div>

        {/* KPI 4: In Escrow */}
        <div className="bg-[var(--d-surface)] rounded-2xl p-5 border border-[var(--d-border)] shadow-sm space-y-3">
          <div className="flex items-center justify-between text-[var(--d-text-secondary)]">
            <span className="text-[13px] font-bold uppercase tracking-wider">Held in Escrow</span>
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
              <Icon name="lock" className="text-xl" />
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[var(--d-text-primary)]">
              UGX {(wallet?.inEscrowBalance || 0).toLocaleString()}
            </div>
            <p className="text-[13px] text-[var(--d-text-secondary)] mt-1.5">
              Released upon delivery confirmation
            </p>
          </div>
        </div>
      </div>

      {/* 3. Needs Your Attention Queue */}
      <section className="bg-[var(--d-surface)] rounded-2xl p-6 border border-[var(--d-border)] shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-[var(--d-text-primary)] flex items-center gap-2">
            <Icon name="notifications" className="text-xl text-[#FF8A1F]" />
            <span>Needs Your Attention</span>
          </h2>
          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20">
            {attentionItems.length} Action Items
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {attentionItems.map((item) => (
            <div
              key={item.id}
              className={`p-4 rounded-xl border flex flex-col justify-between gap-3 ${item.color}`}
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 font-bold text-[14px]">
                  <Icon name={item.icon} className="text-base" />
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-[var(--d-text-secondary)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <button
                type="button"
                onClick={item.action}
                className="self-start touch-target px-3 py-1.5 rounded-lg bg-[var(--d-surface-container)] hover:bg-[var(--d-surface-container-high)] text-[var(--d-text-primary)] font-bold text-xs transition-colors cursor-pointer"
              >
                {item.actionLabel}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Quick Actions Row */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <button
          type="button"
          onClick={() => onNavigate('/seller/orders')}
          className="p-4 rounded-2xl bg-[var(--d-surface)] hover:bg-[var(--d-surface-container)] border border-[var(--d-border)] transition-all flex flex-col items-center justify-center gap-2 text-center group cursor-pointer"
        >
          <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-[#FF8A1F] flex items-center justify-center group-hover:scale-110 transition-transform">
            <Icon name="local_shipping" className="text-2xl" />
          </div>
          <span className="font-bold text-[14px] text-[var(--d-text-primary)]">Manage Orders</span>
        </button>

        <button
          type="button"
          onClick={() => onNavigate('/seller/products')}
          className="p-4 rounded-2xl bg-[var(--d-surface)] hover:bg-[var(--d-surface-container)] border border-[var(--d-border)] transition-all flex flex-col items-center justify-center gap-2 text-center group cursor-pointer"
        >
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Icon name="inventory_2" className="text-2xl" />
          </div>
          <span className="font-bold text-[14px] text-[var(--d-text-primary)]">Manage Catalog</span>
        </button>

        <button
          type="button"
          onClick={() => onNavigate('/seller/riders')}
          className="p-4 rounded-2xl bg-[var(--d-surface)] hover:bg-[var(--d-surface-container)] border border-[var(--d-border)] transition-all flex flex-col items-center justify-center gap-2 text-center group cursor-pointer"
        >
          <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Icon name="two_wheeler" className="text-2xl" />
          </div>
          <span className="font-bold text-[14px] text-[var(--d-text-primary)]">Courier Riders</span>
        </button>

        <button
          type="button"
          onClick={() => onNavigate('/seller/analytics')}
          className="p-4 rounded-2xl bg-[var(--d-surface)] hover:bg-[var(--d-surface-container)] border border-[var(--d-border)] transition-all flex flex-col items-center justify-center gap-2 text-center group cursor-pointer"
        >
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Icon name="analytics" className="text-2xl" />
          </div>
          <span className="font-bold text-[14px] text-[var(--d-text-primary)]">Analytics</span>
        </button>
      </section>

      {/* 5. Recent Orders */}
      <section className="bg-[var(--d-surface)] rounded-2xl p-6 border border-[var(--d-border)] shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-[var(--d-text-primary)]">Recent Store Orders</h2>
            <p className="text-xs text-[var(--d-text-secondary)]">
              Buyer privacy enforced: customer first name and district only.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('/seller/orders')}
            className="text-[14px] text-[#FF8A1F] hover:underline font-bold cursor-pointer"
          >
            View All ({orders.length})
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-[14px]">
            <thead>
              <tr className="border-b border-[var(--d-border)] text-xs text-[var(--d-text-secondary)] uppercase">
                <th className="py-3 px-4">Order #</th>
                <th className="py-3 px-4">Customer</th>
                <th className="py-3 px-4">Destination</th>
                <th className="py-3 px-4">Items</th>
                <th className="py-3 px-4">Total</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--d-border)]/50">
              {orders.slice(0, 5).map((order) => (
                <tr key={order.id} className="hover:bg-[var(--d-surface-container)]/50 transition-colors">
                  <td className="py-3.5 px-4 font-mono font-bold text-[var(--d-text-primary)]">
                    {order.orderNumber}
                  </td>
                  <td className="py-3.5 px-4 font-medium text-[var(--d-text-primary)]">
                    {order.buyerFirstName}
                  </td>
                  <td className="py-3.5 px-4 text-[var(--d-text-secondary)]">
                    {order.buyerDistrict}
                  </td>
                  <td className="py-3.5 px-4 text-[var(--d-text-secondary)]">
                    {order.items.length} item{order.items.length > 1 ? 's' : ''}
                  </td>
                  <td className="py-3.5 px-4 font-extrabold text-[#FF8A1F]">
                    UGX {order.total.toLocaleString()}
                  </td>
                  <td className="py-3.5 px-4">
                    <StatusChip status={order.status} />
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      type="button"
                      onClick={() => onNavigate(`/seller/orders?id=${order.id}`)}
                      className="px-3 py-1.5 rounded-lg bg-[var(--d-surface-container)] hover:bg-[var(--d-surface-container-high)] text-[var(--d-text-primary)] font-bold text-xs transition-colors cursor-pointer"
                    >
                      Process
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default SellerOverviewPage;

