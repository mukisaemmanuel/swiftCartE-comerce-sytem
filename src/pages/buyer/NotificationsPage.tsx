import React, { useState } from 'react';
import { useAccount } from '../../hooks/useAccount';
import { Icon } from '../../components/shared/Icon';

export interface NotificationsPageProps {
  onNavigate: (path: string) => void;
}

export const NotificationsPage: React.FC<NotificationsPageProps> = ({ onNavigate }) => {
  const { notifications, markNotificationRead, markAllNotificationsRead } = useAccount();
  const [filter, setFilter] = useState<'all' | 'order' | 'promo'>('all');

  const filtered = notifications.filter((n) => {
    if (filter === 'all') return true;
    return n.type === filter;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-10 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
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
              Notifications
            </h1>
            <p className="text-sm text-slate-500">
              Stay updated on your orders and store alerts
            </p>
          </div>
        </div>

        <button
          onClick={markAllNotificationsRead}
          className="text-xs font-bold text-[#FF8A1F] hover:underline px-2 py-1"
        >
          Mark all as read
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            filter === 'all'
              ? 'bg-[#0E1B4D] text-white'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('order')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            filter === 'order'
              ? 'bg-[#0E1B4D] text-white'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Orders & Escrow
        </button>
        <button
          onClick={() => setFilter('promo')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            filter === 'promo'
              ? 'bg-[#0E1B4D] text-white'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Promotions
        </button>
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {filtered.map((item) => (
          <div
            key={item.id}
            onClick={() => markNotificationRead(item.id)}
            className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
              item.read
                ? 'bg-white border-slate-200 opacity-80'
                : 'bg-white border-orange-200 ring-1 ring-orange-100 shadow-xs'
            }`}
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                item.type === 'order'
                  ? 'bg-blue-50 text-blue-600'
                  : 'bg-orange-50 text-[#FF8A1F]'
              }`}
            >
              <Icon
                name={item.type === 'order' ? 'local_shipping' : 'campaign'}
                className="text-xl"
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-bold text-sm text-[#0E1B4D] truncate">
                  {item.title}
                </h3>
                <span className="text-[11px] text-slate-400 shrink-0">
                  {item.timestamp}
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {item.message}
              </p>
            </div>

            {!item.read && (
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A1F] shrink-0 mt-2"></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsPage;

