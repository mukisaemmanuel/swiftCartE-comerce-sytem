import React, { useState } from 'react';
import { useSellerNotifications } from '../../hooks/useSeller';
import { Icon } from '../../components/shared/Icon';
import Skeleton from '../../components/shared/Skeleton';

export interface SellerNotificationsPageProps {
  onNavigate: (path: string) => void;
}

export const SellerNotificationsPage: React.FC<SellerNotificationsPageProps> = ({ onNavigate }) => {
  const { notifications, isLoading, markAsRead, markAllAsRead } = useSellerNotifications();
  const [filterType, setFilterType] = useState<string>('ALL');

  const filtered = notifications.filter((n) => {
    if (filterType === 'ALL') return true;
    return n.type === filterType;
  });

  if (isLoading) {
    return (
      <div className="space-y-4 animate-pulse">
        <Skeleton height={50} />
        <Skeleton height={250} />
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-12 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--d-text-primary)]">
            Merchant Notifications
          </h1>
          <p className="text-[14px] text-[var(--d-text-secondary)] mt-0.5">
            Operational alerts, customer order updates, escrow releases, and system notices.
          </p>
        </div>
        <button
          type="button"
          onClick={() => markAllAsRead()}
          className="touch-target px-4 py-2 rounded-xl bg-[var(--d-surface-container)] hover:bg-[var(--d-surface-container-high)] text-xs font-bold text-[var(--d-text-primary)] border border-[var(--d-border)] cursor-pointer self-start sm:self-auto"
        >
          Mark All as Read
        </button>
      </div>

      {/* Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar border-b border-[var(--d-border)] pb-3">
        {[
          { key: 'ALL', label: 'All Alerts' },
          { key: 'order', label: 'Orders' },
          { key: 'return', label: 'Returns' },
          { key: 'wallet', label: 'Wallet & Escrow' },
          { key: 'system', label: 'System' },
        ].map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilterType(f.key)}
            className={`touch-target px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filterType === f.key
                ? 'bg-[#FF8A1F] text-white'
                : 'text-[var(--d-text-secondary)] hover:text-[var(--d-text-primary)] hover:bg-[var(--d-surface-container)]'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Notifications List */}
      <div className="bg-[var(--d-surface)] rounded-2xl border border-[var(--d-border)] divide-y divide-[var(--d-border)] shadow-sm">
        {filtered.length === 0 ? (
          <div className="p-12 text-center text-[var(--d-text-secondary)] space-y-2">
            <Icon name="notifications_off" className="text-4xl mx-auto" />
            <p className="font-bold text-sm text-[var(--d-text-primary)]">No notifications</p>
            <p className="text-xs">You are all caught up with your store notifications.</p>
          </div>
        ) : (
          filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => markAsRead(item.id)}
              className={`p-4 sm:p-5 flex items-start justify-between gap-4 transition-colors cursor-pointer ${
                item.isRead ? 'hover:bg-[var(--d-surface-container)]' : 'bg-[#FF8A1F]/5 hover:bg-[#FF8A1F]/10'
              }`}
            >
              <div className="flex items-start gap-3.5">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-base ${
                    item.type === 'order'
                      ? 'bg-blue-500/10 text-blue-400'
                      : item.type === 'return'
                      ? 'bg-rose-500/10 text-rose-400'
                      : item.type === 'wallet'
                      ? 'bg-emerald-500/10 text-emerald-400'
                      : 'bg-purple-500/10 text-purple-400'
                  }`}
                >
                  <Icon
                    name={
                      item.type === 'order'
                        ? 'receipt_long'
                        : item.type === 'return'
                        ? 'assignment_return'
                        : item.type === 'wallet'
                        ? 'account_balance_wallet'
                        : 'info'
                    }
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-sm text-[var(--d-text-primary)]">{item.title}</h3>
                    {!item.isRead && (
                      <span className="w-2 h-2 rounded-full bg-[#FF8A1F] shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-[var(--d-text-secondary)] mt-0.5 leading-relaxed">
                    {item.message}
                  </p>
                  <p className="text-[11px] text-[var(--d-text-secondary)] mt-1.5">
                    {new Date(item.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>

              {item.actionUrl && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    markAsRead(item.id);
                    onNavigate(item.actionUrl!);
                  }}
                  className="touch-target px-3 py-1.5 rounded-lg bg-[var(--d-surface-container)] hover:bg-[var(--d-surface-container-high)] text-xs font-bold text-[#FF8A1F] border border-[var(--d-border)] shrink-0 cursor-pointer"
                >
                  View Details →
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SellerNotificationsPage;
