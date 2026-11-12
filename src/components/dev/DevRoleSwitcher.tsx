import React, { useState } from 'react';
import type { UserRole } from '../../routes/types';

export interface DevRoleSwitcherProps {
  currentRole: UserRole;
  onRoleChange: (newRole: UserRole) => void;
}

export const DevRoleSwitcher: React.FC<DevRoleSwitcherProps> = ({
  currentRole,
  onRoleChange,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Strictly guard: Never show in production
  if (!import.meta.env.DEV) {
    return null;
  }

  const roles: { id: UserRole; label: string; icon: string; defaultPath: string }[] = [
    { id: 'buyer', label: 'Buyer', icon: 'shopping_bag', defaultPath: '/' },
    { id: 'seller', label: 'Seller', icon: 'storefront', defaultPath: '/seller' },
    { id: 'admin', label: 'Admin', icon: 'admin_panel_settings', defaultPath: '/admin' },
    { id: 'super-admin', label: 'Super Admin', icon: 'security', defaultPath: '/super-admin' },
    { id: 'rider', label: 'Rider', icon: 'two_wheeler', defaultPath: '/rider' },
    { id: 'hub', label: 'Hub Agent', icon: 'warehouse', defaultPath: '/hub' },
  ];

  return (
    <aside
      className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2"
      aria-label="Development Role Switcher"
    >
      {isExpanded && (
        <div className="p-3 rounded-2xl bg-slate-900/95 text-white border border-slate-700 shadow-2xl backdrop-blur-md flex flex-col gap-2 min-w-[200px] animate-fadeIn">
          <div className="flex items-center justify-between px-2 pb-1 border-b border-slate-800 text-[11px] font-bold text-amber-400 uppercase tracking-wider">
            <span>Dev Role Switcher</span>
            <span>Local DEV</span>
          </div>

          <div className="space-y-1">
            {roles.map((r) => {
              const isSelected = currentRole === r.id;
              return (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => {
                    onRoleChange(r.id);
                    setIsExpanded(false);
                  }}
                  className={`touch-target w-full flex items-center justify-between px-3 py-2 rounded-xl text-[13px] font-bold transition-all ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] text-white'
                      : 'hover:bg-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-rounded text-[18px]">
                      {r.icon}
                    </span>
                    <span>{r.label}</span>
                  </div>
                  {isSelected && (
                    <span className="material-symbols-rounded text-[16px]">check</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Floating Pill Toggle */}
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="touch-target px-3.5 py-2 rounded-full bg-slate-900/90 hover:bg-slate-900 text-amber-400 border border-amber-400/40 shadow-xl flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-wider backdrop-blur-md transition-transform hover:scale-105"
        title="Toggle DEV Role Switcher"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
        <span>ROLE: {currentRole}</span>
        <span className="material-symbols-rounded text-[16px]">
          {isExpanded ? 'expand_more' : 'tune'}
        </span>
      </button>
    </aside>
  );
};

export default DevRoleSwitcher;
