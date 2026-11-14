// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/super-admin/overview_swiftcart_super_admin_dark/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface OverviewSwiftcartSuperAdminDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const OverviewSwiftcartSuperAdminDark: React.FC<OverviewSwiftcartSuperAdminDarkProps> = (props) => {
  const onNavigate = props.onNavigate;
  const onAction = props.onAction;
  void onNavigate;
  void onAction;
  void Icon;
  const { theme, toggleTheme } = useDashboardTheme();
  void theme;
  void toggleTheme;
  

  return (
    <div className="relative w-full overflow-x-hidden min-h-screen">
      
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/85 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.45)]"><div className="h-16 px-margin flex items-center justify-between"><button type="button" className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 mr-2" aria-label="Toggle Theme" title="Toggle Theme" onClick={() => toggleTheme()}>{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}</button><div className="flex items-center gap-space-sm"><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col"><div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-escrow animate-pulse"></span><span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary">Live Ops • Kampala Central</span></div><h1 className="font-headline-sm text-headline-sm text-on-surface leading-tight tracking-tight">Escrow Ledger</h1></div></div><div className="flex items-center gap-space-xs"><button className="w-11 h-11 flex items-center justify-center rounded-xl bg-surface-container-low text-on-surface-variant hover:text-on-surface"><Icon name="sync_alt" className="text-[20px]" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_2px_8px_rgba(255,181,161,0.25)]"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex flex-col relative w-full pt-16 pb-24 bg-surface min-h-screen"><div className="flex flex-col w-full px-margin pb-space-xl gap-space-lg">

<div className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-md shadow-md">
<div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-primary-container/10 blur-2xl pointer-events-none"></div>
<div className="flex items-center justify-between relative z-10">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center shrink-0 shadow-inner">
<span className="font-headline-sm text-headline-sm text-primary">PN</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-on-surface truncate">Patricia Namubiru</span>
<span className="px-1.5 py-0.5 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm shrink-0">#SADM-01</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Executive Platform Governance</span>
</div>
</div>
<div className="flex items-center gap-1.5 shrink-0 px-2 py-1 rounded-full bg-tertiary-container/20 text-tertiary">
<span className="w-2 h-2 rounded-full bg-tertiary animate-ping"></span>
<span className="font-label-sm text-label-sm uppercase tracking-wide">Secure</span>
</div>
</div>
</div>

<div className="rounded-xl bg-surface-container p-space-md shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-8 h-8 rounded-lg bg-tertiary/10 text-tertiary flex items-center justify-center shrink-0">
<Icon name="hub" className="text-[18px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">Kampala Central &amp; Regional Hubs</span>
<span className="font-body-sm text-body-sm text-tertiary flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
            100% Operational • 6 Nodes Online
          </span>
</div>
</div>
<button className="px-2.5 py-1 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm shrink-0 active:scale-95 transition-transform">
        Sync Nodes
      </button>
</div>
</div>

<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between px-1">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">30-Day Platform Liquidity</span>
<span className="font-label-sm text-label-sm text-primary">Live Rolling</span>
</div>

<div className="rounded-xl bg-surface-container-low p-space-md shadow-md relative overflow-hidden">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-body-sm text-body-sm text-on-surface-variant">Platform Gross Volume (GMV)</span>
<div className="flex items-baseline gap-1 mt-0.5">
<span className="font-label-sm text-label-sm text-on-surface-variant">UGX</span>
<span className="font-price-display text-price-display text-on-surface tracking-tight">1,842,500,000</span>
</div>
</div>
<div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<Icon name="payments" className="text-[20px]" />
</div>
</div>

<div className="mt-3 w-full h-8 flex items-end gap-1">
<div className="flex-1 bg-surface-container-highest rounded-t h-[40%]"></div>
<div className="flex-1 bg-surface-container-highest rounded-t h-[55%]"></div>
<div className="flex-1 bg-surface-container-highest rounded-t h-[48%]"></div>
<div className="flex-1 bg-surface-container-highest rounded-t h-[70%]"></div>
<div className="flex-1 bg-surface-container-highest rounded-t h-[62%]"></div>
<div className="flex-1 bg-surface-container-highest rounded-t h-[80%]"></div>
<div className="flex-1 bg-primary rounded-t h-[95%] shadow-[0_0_8px_rgba(255,181,161,0.4)]"></div>
</div>
<div className="flex justify-between items-center mt-2 pt-2 text-on-surface-variant">
<span className="font-body-sm text-body-sm">Paced vs Prev Mo.</span>
<span className="font-label-md text-label-md text-tertiary flex items-center gap-0.5">
<Icon name="trending_up" className="text-[16px]" /> +14.2%
        </span>
</div>
</div>

<div className="grid grid-cols-2 gap-space-sm">

<div className="rounded-xl bg-surface-container-low p-space-md flex flex-col justify-between shadow-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Net Take (5.0%)</span>
<span className="w-6 h-6 rounded-md bg-primary-container/20 text-primary flex items-center justify-center">
<Icon name="pie_chart" className="text-[14px]" />
</span>
</div>
<div className="mt-2">
<div className="font-label-sm text-label-sm text-on-surface-variant">UGX</div>
<div className="font-headline-sm text-headline-sm text-on-surface leading-snug">92,125,000</div>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1.5 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Commission
        </span>
</div>

<div className="rounded-xl bg-surface-container-low p-space-md flex flex-col justify-between shadow-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Escrow Custody</span>
<span className="w-6 h-6 rounded-md bg-emerald-escrow/20 text-emerald-escrow flex items-center justify-center">
<Icon name="lock" className="text-[14px]" />
</span>
</div>
<div className="mt-2">
<div className="font-label-sm text-label-sm text-on-surface-variant">UGX</div>
<div className="font-headline-sm text-headline-sm text-emerald-escrow leading-snug">245,000,000</div>
</div>
<span className="font-body-sm text-body-sm text-tertiary mt-1.5 flex items-center gap-1">
<Icon name="verified" className="text-[14px]" /> Protected
        </span>
</div>
</div>
</div>

<div className="rounded-xl bg-surface-container-low p-space-md shadow-sm">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-2">
<Icon name="storefront" className="text-primary text-[20px]" />
<span className="font-label-lg text-label-lg text-on-surface">Seller Registry Health</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface">156 <span className="font-body-sm text-body-sm text-on-surface-variant">Total</span></span>
</div>

<div className="w-full h-2 rounded-full bg-surface-container-highest flex overflow-hidden my-space-sm gap-0.5">
<div className="h-full bg-tertiary" style={{"width":"82%"}} title="Active"></div>
<div className="h-full bg-amber-warning" style={{"width":"4%"}} title="Frozen"></div>
<div className="h-full bg-danger-penalty" style={{"width":"14%"}} title="Suspended"></div>
</div>

<div className="grid grid-cols-3 gap-2 pt-1 text-center">
<div className="bg-surface-container rounded-lg p-1.5">
<span className="font-body-sm text-body-sm text-on-surface-variant block">Active</span>
<span className="font-label-lg text-label-lg text-tertiary">142</span>
</div>
<div className="bg-surface-container rounded-lg p-1.5">
<span className="font-body-sm text-body-sm text-on-surface-variant block">Frozen</span>
<span className="font-label-lg text-label-lg text-amber-warning">3</span>
</div>
<div className="bg-surface-container rounded-lg p-1.5">
<span className="font-body-sm text-body-sm text-on-surface-variant block">Suspended</span>
<span className="font-label-lg text-label-lg text-danger-penalty">11</span>
</div>
</div>
</div>

<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between px-1">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Priority Escalations</span>
<span className="w-2 h-2 rounded-full bg-danger-penalty animate-pulse"></span>
</div>

<div className="rounded-xl bg-surface-container-low p-space-md shadow-md flex flex-col gap-space-sm relative">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-danger-penalty"></span>
<span className="font-label-md text-label-md text-danger-penalty uppercase">High-Value Dispute</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Escalated 24m ago</span>
</div>
<div className="flex items-center gap-space-sm bg-surface-container p-space-sm rounded-lg">
<div className="w-12 h-12 rounded bg-surface-container-highest shrink-0 overflow-hidden flex items-center justify-center">
<img className="w-full h-full object-cover" data-alt="Rugged solar power inverter with digital voltage readouts in clean dark industrial framing." src="/images/ec57368d7321ef75.webp" />
</div>
<div className="flex flex-col min-w-0 flex-1">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-primary">#SC-ORD-99405</span>
<span className="font-label-md text-label-md text-on-surface">UGX 1,850,000</span>
</div>
<span className="font-body-md text-body-md text-on-surface font-semibold truncate">Solar Inverter 3KVA Complete Unit</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Buyer Claims: Defective Internal Inverter Board</span>
</div>
</div>

<button className="w-full h-12 rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-lg text-label-lg shadow-[0_4px_18px_rgba(218,55,0,0.35)] flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
<Icon name="assignment_late" className="text-[20px]" />
        Review Dispute Dossier
      </button>
</div>

<div className="rounded-xl bg-surface-container-low p-space-md shadow-sm flex items-center justify-between">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-xl bg-amber-warning/15 text-amber-warning flex items-center justify-center shrink-0">
<Icon name="admin_panel_settings" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">Role Modification Queue</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">1 staff promotion pending verification</span>
</div>
</div>
<button className="h-9 px-3 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm shrink-0 active:scale-95 transition-transform">
        Audit
      </button>
</div>
</div>

<div className="rounded-xl bg-surface-container-low p-space-sm flex flex-col gap-1 shadow-sm">
<a className="flex items-center justify-between p-space-sm rounded-lg hover:bg-surface-container transition-colors" href="#">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-secondary-container/30 text-secondary flex items-center justify-center">
<Icon name="badge" className="text-[18px]" />
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Role &amp; Access Management</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Permissions, Rider badges, Dispatch rules</span>
</div>
</div>
<Icon name="chevron_right" className="text-on-surface-variant text-[20px]" />
</a>
<a className="flex items-center justify-between p-space-sm rounded-lg hover:bg-surface-container transition-colors" href="#">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-secondary-container/30 text-secondary flex items-center justify-center">
<Icon name="receipt_long" className="text-[18px]" />
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Full Platform Audit Ledger</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Immutable system activity records</span>
</div>
</div>
<Icon name="chevron_right" className="text-on-surface-variant text-[20px]" />
</a>
<a className="flex items-center justify-between p-space-sm rounded-lg hover:bg-surface-container transition-colors" href="#">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-secondary-container/30 text-secondary flex items-center justify-center">
<Icon name="tune" className="text-[18px]" />
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Platform Governance Parameters</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Escrow release windows, fee tiers</span>
</div>
</div>
<Icon name="chevron_right" className="text-on-surface-variant text-[20px]" />
</a>
</div>

<div className="rounded-xl bg-surface-container-low p-space-md shadow-lg flex flex-col gap-space-md">
<div className="flex items-center gap-2">
<Icon name="security" className="text-danger-penalty text-[20px]" />
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-danger-penalty">High-Authority Controls</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Restricted to Patricia Namubiru (#SADM-01)</span>
</div>
</div>

<div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container">
<div className="flex flex-col min-w-0 pr-2">
<span className="font-label-md text-label-md text-on-surface">Maintenance Hold</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Halts customer checkout platform-wide</span>
<span className="font-label-sm text-label-sm text-tertiary mt-0.5" id="maintenance-status-label">Currently Inactive</span>
</div>
<label className="relative inline-flex items-center cursor-pointer shrink-0">
<input className="sr-only peer" id="maintenance-toggle" type="checkbox" />
<div className="w-12 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-danger-penalty"></div>
</label>
</div>

<div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container">
<div className="flex flex-col min-w-0 pr-2">
<span className="font-label-md text-label-md text-on-surface">Emergency Access Freeze</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Instant session termination for compromised entities</span>
</div>
<button className="h-10 px-3 rounded-lg bg-danger-penalty/15 text-danger-penalty font-label-md text-label-md shrink-0 flex items-center gap-1 active:scale-95 transition-transform" id="freeze-trigger-btn">
<Icon name="lock_clock" className="text-[16px]" />
        Freeze Access
      </button>
</div>
</div>
</div>
</main>
<nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_-6px_24px_rgba(0,0,0,0.60)]" data-active-classes="text-primary-container font-label-md"><div className="h-16 px-gutter flex items-center justify-around"><a className="flex flex-col items-center justify-center w-16 h-12 text-on-surface-variant hover:text-on-surface" data-path="manifest-runs" href="#"><Icon name="local_shipping" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight mt-0.5">Manifest</span></a><a className="flex flex-col items-center justify-center w-16 h-12 text-on-surface-variant hover:text-on-surface" data-path="hub-scanner" href="#"><Icon name="barcode_scanner" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight mt-0.5">Scanner</span></a><a aria-current="page" className="flex flex-col items-center justify-center w-16 h-12 text-primary-container font-label-md" data-path="escrow-ledger" href="#"><Icon name="verified_user" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight mt-0.5">Escrow</span></a><a className="flex flex-col items-center justify-center w-16 h-12 text-on-surface-variant hover:text-on-surface" data-path="fleet-dispatch" href="#"><Icon name="two_wheeler" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight mt-0.5">Fleet</span></a><a className="flex flex-col items-center justify-center w-16 h-12 text-on-surface-variant hover:text-on-surface" data-path="profile-ops" href="#"><Icon name="manage_accounts" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight mt-0.5">Profile</span></a></div></nav>
    </div>
  );
};

export default OverviewSwiftcartSuperAdminDark;
