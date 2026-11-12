import React, { useState } from 'react';
import type { RouteDefinition } from '../../routes/types';

export interface RoutePlaceholderProps {
  route: RouteDefinition;
  onNavigate?: (path: string) => void;
  siblingRoutes?: RouteDefinition[];
}

export const RoutePlaceholder: React.FC<RoutePlaceholderProps> = ({
  route,
  onNavigate,
  siblingRoutes = [],
}) => {
  const [activeTab, setActiveTab] = useState<'info' | 'siblings'>('info');

  const { mobile, tablet, desktop, all } = route.designFiles;

  const roleColors: Record<string, { bg: string; text: string; border: string }> = {
    buyer: { bg: 'bg-orange-500/10', text: 'text-[#FF8A1F]', border: 'border-orange-500/30' },
    seller: { bg: 'bg-emerald-500/10', text: 'text-emerald-500', border: 'border-emerald-500/30' },
    admin: { bg: 'bg-blue-500/10', text: 'text-blue-500', border: 'border-blue-500/30' },
    'super-admin': { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30' },
    rider: { bg: 'bg-amber-500/10', text: 'text-amber-500', border: 'border-amber-500/30' },
    hub: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/30' },
  };

  const currentRoleStyle = roleColors[route.role] || roleColors.buyer;

  return (
    <div data-testid="route-placeholder" className="flex flex-col gap-6 max-w-5xl mx-auto py-2">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-[var(--d-surface)] border border-[var(--d-border)] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2.5">
            <span
              className={`px-3 py-1 rounded-full text-[12px] font-bold uppercase tracking-wider border ${currentRoleStyle.bg} ${currentRoleStyle.text} ${currentRoleStyle.border}`}
            >
              {route.role}
            </span>
            <span className="text-[14px] text-[var(--d-text-muted)] font-mono">
              {route.path}
            </span>
          </div>

          <h1 className="text-[24px] sm:text-[28px] font-extrabold text-[var(--d-text-primary)] tracking-tight">
            {route.name}
          </h1>
          <p className="text-[14px] text-[var(--d-text-secondary)]">
            Stage 0 Interactive Route Placeholder • Design reference links mapped below
          </p>
        </div>

        {/* Quick Tabs */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('info')}
            className={`touch-target px-4 py-2 rounded-xl text-[14px] font-bold transition-all ${
              activeTab === 'info'
                ? 'bg-[#FF8A1F] text-white shadow-sm'
                : 'bg-[var(--d-surface-container)] text-[var(--d-text-secondary)] hover:text-[var(--d-text-primary)]'
            }`}
          >
            Design Paths ({all.length})
          </button>
          {siblingRoutes.length > 0 && (
            <button
              type="button"
              onClick={() => setActiveTab('siblings')}
              className={`touch-target px-4 py-2 rounded-xl text-[14px] font-bold transition-all ${
                activeTab === 'siblings'
                  ? 'bg-[#FF8A1F] text-white shadow-sm'
                  : 'bg-[var(--d-surface-container)] text-[var(--d-text-secondary)] hover:text-[var(--d-text-primary)]'
              }`}
            >
              All {route.role} Screens ({siblingRoutes.length})
            </button>
          )}
        </div>
      </div>

      {activeTab === 'info' && (
        <div className="flex flex-col gap-6">
          {/* Design Files Breakdown by Breakpoint */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Mobile Design */}
            <div className="p-5 rounded-2xl bg-[var(--d-surface)] border border-[var(--d-border)] flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[var(--d-text-primary)] font-bold">
                  <span className="material-symbols-rounded text-[20px] text-[#FF8A1F]">
                    smartphone
                  </span>
                  <span>Mobile Mockup</span>
                </div>
                {mobile ? (
                  <span className="px-2 py-0.5 rounded text-[12px] font-bold bg-emerald-500/10 text-emerald-500">
                    Available
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded text-[12px] font-bold bg-amber-500/10 text-amber-500">
                    Derived
                  </span>
                )}
              </div>
              <div className="p-3 rounded-xl bg-[var(--d-surface-container)] font-mono text-[13px] text-[var(--d-text-muted)] break-all select-all">
                {mobile || '(Derived from desktop/tablet per docs/MISSING-PAGES.md)'}
              </div>
            </div>

            {/* Tablet Design */}
            <div className="p-5 rounded-2xl bg-[var(--d-surface)] border border-[var(--d-border)] flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[var(--d-text-primary)] font-bold">
                  <span className="material-symbols-rounded text-[20px] text-[#FF8A1F]">
                    tablet
                  </span>
                  <span>Tablet Mockup</span>
                </div>
                {tablet ? (
                  <span className="px-2 py-0.5 rounded text-[12px] font-bold bg-emerald-500/10 text-emerald-500">
                    Available
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded text-[12px] font-bold bg-amber-500/10 text-amber-500">
                    Derived
                  </span>
                )}
              </div>
              <div className="p-3 rounded-xl bg-[var(--d-surface-container)] font-mono text-[13px] text-[var(--d-text-muted)] break-all select-all">
                {tablet || '(Derived from desktop/mobile per docs/MISSING-PAGES.md)'}
              </div>
            </div>

            {/* Desktop Design */}
            <div className="p-5 rounded-2xl bg-[var(--d-surface)] border border-[var(--d-border)] flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[var(--d-text-primary)] font-bold">
                  <span className="material-symbols-rounded text-[20px] text-[#FF8A1F]">
                    desktop_windows
                  </span>
                  <span>Desktop Mockup</span>
                </div>
                {desktop ? (
                  <span className="px-2 py-0.5 rounded text-[12px] font-bold bg-emerald-500/10 text-emerald-500">
                    Available
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded text-[12px] font-bold bg-amber-500/10 text-amber-500">
                    Derived
                  </span>
                )}
              </div>
              <div className="p-3 rounded-xl bg-[var(--d-surface-container)] font-mono text-[13px] text-[var(--d-text-muted)] break-all select-all">
                {desktop || '(Derived from tablet/mobile per docs/MISSING-PAGES.md)'}
              </div>
            </div>
          </div>

          {/* All Associated Design Files in Repository */}
          <div className="p-5 rounded-2xl bg-[var(--d-surface)] border border-[var(--d-border)] flex flex-col gap-3">
            <h3 className="text-[16px] font-bold text-[var(--d-text-primary)]">
              All Mapped Mockup Directories in design/ ({all.length})
            </h3>
            <ul className="space-y-2">
              {all.map((folderPath, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between p-3 rounded-xl bg-[var(--d-surface-container)] font-mono text-[13px] text-[var(--d-text-secondary)]"
                >
                  <span className="truncate mr-4 select-all">{folderPath}</span>
                  <span className="text-[12px] px-2 py-0.5 rounded bg-[var(--d-surface-container-high)] text-[var(--d-text-muted)] shrink-0">
                    code.html + screen.png
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Sibling Routes Directory */}
      {activeTab === 'siblings' && (
        <div className="p-5 rounded-2xl bg-[var(--d-surface)] border border-[var(--d-border)] flex flex-col gap-4">
          <h3 className="text-[16px] font-bold text-[var(--d-text-primary)]">
            Explore All {route.role} Screens ({siblingRoutes.length})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {siblingRoutes.map((sibling) => {
              const isCurrent = sibling.path === route.path;
              return (
                <button
                  key={sibling.path}
                  type="button"
                  onClick={() => onNavigate?.(sibling.path)}
                  className={`touch-target p-3.5 rounded-xl border text-left transition-all flex flex-col gap-1 ${
                    isCurrent
                      ? 'border-[#FF8A1F] bg-[#FF8A1F]/10'
                      : 'border-[var(--d-border)] bg-[var(--d-surface-container)] hover:border-[var(--d-border-strong)]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[14px] text-[var(--d-text-primary)]">
                      {sibling.name}
                    </span>
                    <span className="text-[12px] font-mono text-[var(--d-text-muted)]">
                      {sibling.path}
                    </span>
                  </div>
                  <span className="text-[12px] text-[var(--d-text-secondary)]">
                    {sibling.designFiles.all.length} mockup folder(s)
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default RoutePlaceholder;

