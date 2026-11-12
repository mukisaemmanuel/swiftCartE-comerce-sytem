import React from 'react';
import Logo from '../brand/Logo';
import { useDashboardTheme } from '../../context/ThemeContext';
import OfflineBanner from '../shared/OfflineBanner';

export type FieldRole = 'rider' | 'hub';

export interface FieldTab {
  label: string;
  icon: string;
  path: string;
  badge?: string | number;
}

export const FIELD_TABS: Record<FieldRole, FieldTab[]> = {
  rider: [
    { label: 'Overview', icon: 'grid_view', path: '/rider' },
    { label: 'Deliveries', icon: 'local_shipping', path: '/rider/deliveries' },
    { label: 'Map', icon: 'map', path: '/rider/map' },
    { label: 'Earnings', icon: 'payments', path: '/rider/earnings' },
    { label: 'Profile', icon: 'person', path: '/rider/profile' },
  ],
  hub: [
    { label: 'Overview', icon: 'grid_view', path: '/hub' },
    { label: 'Intake', icon: 'move_to_inbox', path: '/hub/intake' },
    { label: 'Scan', icon: 'qr_code_scanner', path: '/hub/scan' },
    { label: 'Pickup', icon: 'package_2', path: '/hub/pickup' },
    { label: 'More', icon: 'more_horiz', path: '/hub/more' },
  ],
};

export interface FieldShellProps {
  role: FieldRole;
  currentPath: string;
  onNavigate: (path: string) => void;
  title?: string;
  isOnline?: boolean;
  onToggleOnline?: () => void;
  children: React.ReactNode;
}

export const FieldShell: React.FC<FieldShellProps> = ({
  role,
  currentPath,
  onNavigate,
  title,
  isOnline = true,
  onToggleOnline,
  children,
}) => {
  const { theme, toggleTheme } = useDashboardTheme();
  const tabs = FIELD_TABS[role];
  const activeTab = tabs.find((t) => t.path === currentPath);
  const displayTitle = title || activeTab?.label || 'Overview';

  return (
    <div className="min-h-screen bg-[var(--d-bg)] text-[var(--d-text-primary)] flex flex-col pb-20 md:pb-24">
      {/* Offline Alert Banner */}
      <OfflineBanner />

      {/* Top Header */}
      <header className="sticky top-0 z-30 h-16 bg-[var(--d-header-bg)] border-b border-[var(--d-border)] px-4 sm:px-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Logo
            variant={theme === 'dark' ? 'icon-white' : 'icon'}
            height={32}
          />
          <div>
            <h1 className="text-[17px] sm:text-[19px] font-bold tracking-tight text-[var(--d-text-primary)]">
              {displayTitle}
            </h1>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF8A1F]">
              {role === 'rider' ? 'SwiftCart Boda Rider' : 'Kampala Hub Agent'}
            </span>
          </div>
        </div>

        {/* Status indicator & Theme Toggle */}
        <div className="flex items-center gap-2">
          {onToggleOnline && (
            <button
              type="button"
              onClick={onToggleOnline}
              className={`touch-target px-3 py-1.5 rounded-full text-[13px] font-bold border flex items-center gap-1.5 transition-all ${
                isOnline
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                  : 'bg-slate-500/10 text-slate-400 border-slate-500/30'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isOnline ? 'bg-emerald-500 animate-pulse' : 'bg-slate-500'
                }`}
              />
              <span>{isOnline ? 'Active' : 'Off Duty'}</span>
            </button>
          )}

          {/* ONE Sun/Moon Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="touch-target p-2 rounded-xl text-[var(--d-text-secondary)] hover:text-[var(--d-text-primary)] hover:bg-[var(--d-surface-container)] transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <span className="material-symbols-rounded text-[22px]">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
        </div>
      </header>

      {/* Main Content Area: Responsive 2-column or single-column on tablet/desktop */}
      <main className="flex-1 w-full max-w-4xl mx-auto p-4 sm:p-6">
        {children}
      </main>

      {/* Bottom Tab Bar (Accessible touch target 48px min) */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-40 bg-[var(--d-surface)] border-t border-[var(--d-border)] px-2 py-1 safe-area-pb shadow-2xl"
        aria-label={`${role === 'rider' ? 'Rider' : 'Hub'} navigation`}
      >
        <div className="max-w-2xl mx-auto flex items-center justify-around">
          {tabs.map((tab) => {
            const isActive = currentPath === tab.path;

            return (
              <button
                key={tab.path}
                type="button"
                onClick={() => onNavigate(tab.path)}
                className={`touch-target flex flex-col items-center justify-center flex-1 py-1 transition-colors min-h-[48px] relative ${
                  isActive
                    ? 'text-[#FF8A1F] font-bold'
                    : 'text-[var(--d-text-muted)] hover:text-[var(--d-text-primary)]'
                }`}
                aria-label={tab.label}
                aria-current={isActive ? 'page' : undefined}
              >
                <div className="relative flex items-center justify-center">
                  <span
                    className={`material-symbols-rounded text-[24px] ${
                      isActive ? 'font-bold' : ''
                    }`}
                    aria-hidden="true"
                  >
                    {tab.icon}
                  </span>

                  {tab.badge && (
                    <span className="absolute -top-1 -right-2 px-1.5 py-0.2 rounded-full text-[11px] font-bold bg-[#ED1C24] text-white min-w-[18px] text-center">
                      {tab.badge}
                    </span>
                  )}
                </div>
                <span className="text-[12px] leading-tight mt-0.5">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default FieldShell;

