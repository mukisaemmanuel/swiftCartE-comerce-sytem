// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/admin/overview_swiftcart_admin_dark/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface OverviewSwiftcartAdminDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const OverviewSwiftcartAdminDark: React.FC<OverviewSwiftcartAdminDarkProps> = (props) => {
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
<main className="flex flex-col relative w-full pt-16 pb-24 bg-surface min-h-screen"><div className="flex flex-col w-full pb-8">

<div className="mx-margin mb-space-md flex items-center justify-between px-space-md py-space-xs rounded-xl bg-surface-container-low shadow-sm">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-emerald-escrow animate-ping"></span>
<span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider">Telecom Node Synchronized</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
<Icon name="wifi_tethering" className="text-[14px] text-emerald-escrow" />
<span>0.8ms Core Ping</span>
</div>
</div>

<section className="px-margin mb-space-lg">
<div className="bg-surface-container-low p-space-md rounded-xl flex items-center justify-between shadow-md">
<div className="flex items-center gap-space-md min-w-0">
<div className="relative flex-shrink-0">
<div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary-container font-headline-sm text-headline-sm flex items-center justify-center shadow-[0_2px_10px_rgba(218,55,0,0.35)]">
            SK
          </div>
<span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-escrow rounded-full ring-2 ring-surface-container-low"></span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5 flex-wrap">
<span className="font-headline-sm text-headline-sm text-on-surface truncate">Sarah K.</span>
<span className="px-1.5 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm">#ADM-104</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Operations Desk • Level 2 Clearance</span>
</div>
</div>
<button className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-on-surface active:scale-95 transition-transform flex-shrink-0">
<Icon name="tune" className="text-[20px]" />
</button>
</div>
</section>

<section className="px-margin mb-space-lg">
<div className="bg-surface-container-low p-space-md rounded-xl shadow-md">
<div className="flex items-center justify-between mb-space-sm">
<div className="flex items-center gap-space-xs">
<Icon name="query_stats" className="text-primary text-[18px]" />
<span className="font-label-md text-label-md text-on-surface">Escrow Inflow vs Boda Load</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary">Real-Time (Kampala)</span>
</div>

<div className="w-full h-14 flex items-end gap-1.5 pt-2">
<div className="flex-1 bg-surface-container-high rounded-t-sm h-6"></div>
<div className="flex-1 bg-surface-container-high rounded-t-sm h-8"></div>
<div className="flex-1 bg-surface-container-high rounded-t-sm h-7"></div>
<div className="flex-1 bg-primary-container/40 rounded-t-sm h-10"></div>
<div className="flex-1 bg-primary-container rounded-t-sm h-12 shadow-[0_0_8px_rgba(218,55,0,0.4)]"></div>
<div className="flex-1 bg-tertiary-container rounded-t-sm h-9"></div>
<div className="flex-1 bg-tertiary-container/80 rounded-t-sm h-11"></div>
<div className="flex-1 bg-surface-container-high rounded-t-sm h-8"></div>
<div className="flex-1 bg-primary-container/60 rounded-t-sm h-10"></div>
<div className="flex-1 bg-surface-container-high rounded-t-sm h-5"></div>
</div>
<div className="flex items-center justify-between mt-2 pt-2 text-on-surface-variant font-label-sm text-label-sm">
<span>06:00 Hub Opening</span>
<span className="text-tertiary font-label-md text-label-md">Peak Settlement Rate</span>
<span>18:00 Courier Shift</span>
</div>
</div>
</section>

<section className="px-margin mb-space-lg">
<div className="flex items-center justify-between mb-space-sm">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Platform Pulse</h2>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Live Escrow Engine</span>
</div>
<div className="grid grid-cols-2 gap-gutter">

<div className="col-span-2 bg-surface-container-low p-space-md rounded-xl shadow-md relative overflow-hidden">
<div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-emerald-escrow/10 pointer-events-none blur-xl"></div>
<div className="flex items-center justify-between mb-space-xs">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-emerald-escrow"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Platform Vault</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm flex items-center gap-1">
<Icon name="lock" className="text-[13px]" />
            Secured
          </span>
</div>
<div className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-tight mb-0.5">
          UGX 198,420,000
        </div>
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span>412 in-flight transactions locked</span>
<span className="text-emerald-escrow font-label-sm text-label-sm">100% Mobile Money Backed</span>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div>
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-amber-warning mb-space-sm">
<Icon name="verified_user" className="text-[18px]" />
</div>
<span className="font-headline-sm text-headline-sm text-on-surface block">8</span>
<span className="font-label-md text-label-md text-on-surface-variant mt-0.5 block leading-tight">Seller KYC Pending</span>
</div>
<div className="mt-space-sm pt-space-xs flex items-center gap-1 text-amber-warning font-label-sm text-label-sm">
<Icon name="timer" className="text-[14px]" />
<span>Awaiting review</span>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div>
<div className="w-8 h-8 rounded-lg bg-error-container/30 flex items-center justify-center text-error mb-space-sm">
<Icon name="gavel" className="text-[18px]" />
</div>
<span className="font-headline-sm text-headline-sm text-error block">3</span>
<span className="font-label-md text-label-md text-on-surface-variant mt-0.5 block leading-tight">Open Disputes</span>
</div>
<div className="mt-space-sm pt-space-xs flex items-center gap-1 text-error font-label-sm text-label-sm">
<Icon name="warning" className="text-[14px]" />
<span>Under arbitration</span>
</div>
</div>

<div className="col-span-2 bg-surface-container-low p-space-md rounded-xl shadow-sm flex items-center justify-between">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center shadow-sm">
<Icon name="two_wheeler" className="text-[20px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-headline-sm text-headline-sm text-on-surface">84 Riders Active</span>
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Central Division, Nakawa &amp; Makindye circuits</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-tertiary px-2 py-1 rounded bg-tertiary-container/20">98% In Flight</span>
</div>
</div>
</section>

<section className="px-margin mb-space-lg">
<div className="flex items-center justify-between mb-space-sm">
<div className="flex items-center gap-2">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Priority Actions</h2>
<span className="w-5 h-5 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm flex items-center justify-center">3</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Live Dispatch Interventions</span>
</div>
<div className="flex flex-col gap-space-md">

<div className="bg-surface-container-low p-space-md rounded-xl shadow-md transition-all">
<div className="flex items-start justify-between gap-space-sm mb-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<Icon name="storefront" className="text-[20px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-on-surface">Kampala Phone Hub</span>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-high px-1 rounded">#SLR-0554</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Pioneer Mall • Shop UG-12</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-amber-warning/15 text-amber-warning font-label-sm text-label-sm">KYC Gate</span>
</div>
<div className="bg-surface-container-high/60 rounded-lg p-2.5 mb-space-md flex items-center gap-2 text-on-surface">
<Icon name="description" className="text-[18px] text-tertiary" />
<span className="font-body-sm text-body-sm text-on-surface-variant">Documents: <strong className="text-on-surface font-label-md text-label-md">URA TIN Certificate &amp; National ID</strong></span>
</div>
<div className="grid grid-cols-2 gap-gutter">
<button className="h-11 rounded-xl bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center justify-center gap-1 active:scale-95 transition-transform">
<Icon name="visibility" className="text-[18px]" />
<span>Review KYC</span>
</button>
<button className="h-11 rounded-xl bg-gradient-to-br from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-md text-label-md flex items-center justify-center gap-1 shadow-[0_4px_14px_rgba(218,55,0,0.35)] active:scale-95 transition-transform">
<Icon name="check_circle" className="text-[18px]" />
<span>Approve</span>
</button>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl shadow-md">
<div className="flex items-start justify-between gap-space-sm mb-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-lg bg-danger-penalty/15 flex items-center justify-center text-danger-penalty">
<Icon name="hourglass_disabled" className="text-[20px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-on-surface">Order #SC-ORD-9104</span>
<span className="px-1.5 py-0.2 rounded bg-danger-penalty/20 text-danger-penalty font-label-sm text-label-sm font-bold">48H OVERDUE</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Buyer: Brian Ssewankambo • 07•• ••• 418</span>
</div>
</div>
</div>
<div className="flex items-center justify-between bg-surface-container-high/60 rounded-lg p-2.5 mb-space-md">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Escrow Held</span>
<span className="font-price-display text-price-display text-on-surface">UGX 1,150,000</span>
</div>
<span className="text-danger-penalty font-label-sm text-label-sm bg-danger-penalty/10 px-2 py-1 rounded">Seller Unresponsive</span>
</div>
<button className="w-full h-11 rounded-xl bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-surface-variant active:scale-98 transition-transform">
<Icon name="phone_in_talk" className="text-[18px] text-primary" />
<span>Contact Seller (Proxy Direct)</span>
</button>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl shadow-md relative overflow-hidden">
<div className="flex items-start justify-between gap-space-sm mb-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-lg bg-emerald-escrow/15 flex items-center justify-center text-emerald-escrow">
<Icon name="payments" className="text-[20px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-on-surface">Payout Batch #PO-882</span>
<span className="font-label-sm text-label-sm text-tertiary bg-surface-container-high px-1 rounded">28 Sellers</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">MTN &amp; Airtel Mobile Money Rails</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm">Ops Sign-off</span>
</div>
<div className="flex items-center justify-between mb-space-md px-1">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Disbursement Gross Total</span>
<span className="font-price-display text-price-display text-emerald-escrow">UGX 34,250,000</span>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant">Automated Audit</span>
<div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm justify-end">
<Icon name="check" className="text-[14px]" />
<span>All Cleared</span>
</div>
</div>
</div>
<button className="w-full h-12 rounded-xl bg-gradient-to-br from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(218,55,0,0.35)] active:scale-98 transition-transform">
<Icon name="send" className="text-[20px]" />
<span>Approve Payouts (Authorize Release)</span>
</button>
</div>
</div>
</section>

<section className="px-margin mb-space-lg">
<h2 className="font-headline-sm text-headline-sm text-on-surface mb-space-sm">Operations Shortcuts</h2>
<div className="grid grid-cols-2 gap-gutter">

<a className="bg-surface-container-low p-space-md rounded-xl flex items-center gap-space-sm shadow-sm hover:bg-surface-container active:scale-95 transition-all" href="#">
<div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary flex-shrink-0">
<Icon name="store" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">Sellers</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Directory • 624</span>
</div>
</a>

<a className="bg-surface-container-low p-space-md rounded-xl flex items-center gap-space-sm shadow-sm hover:bg-surface-container active:scale-95 transition-all" href="#">
<div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-tertiary flex-shrink-0">
<Icon name="motorcycle" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">Rider Fleet</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Live Telemetry</span>
</div>
</a>

<a className="bg-surface-container-low p-space-md rounded-xl flex items-center gap-space-sm shadow-sm hover:bg-surface-container active:scale-95 transition-all" href="#">
<div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary flex-shrink-0">
<Icon name="package_2" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">Order Flow</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Dispatch SLA</span>
</div>
</a>

<a className="bg-surface-container-low p-space-md rounded-xl flex items-center gap-space-sm shadow-sm hover:bg-surface-container active:scale-95 transition-all" href="#">
<div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-amber-warning flex-shrink-0">
<Icon name="receipt_long" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">Audit Log</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Immutable Trails</span>
</div>
</a>
</div>
</section>

<section className="px-margin mb-space-sm">
<div className="bg-surface-container-low p-space-md rounded-xl shadow-sm">
<div className="flex items-center justify-between mb-space-sm pb-space-xs">
<span className="font-label-md text-label-md text-on-surface">Recent Ops Heartbeat</span>
<span className="font-label-sm text-label-sm text-tertiary">Real-time Stream</span>
</div>
<div className="space-y-space-sm font-body-sm text-body-sm">
<div className="flex items-center justify-between">
<span className="text-on-surface-variant truncate">Auto-Escrow release #TX-48192 (Airtel)</span>
<span className="text-emerald-escrow font-label-sm text-label-sm flex-shrink-0">+UGX 420,000</span>
</div>
<div className="flex items-center justify-between">
<span className="text-on-surface-variant truncate">Boda #BD-349 reached Ntinda Hub</span>
<span className="text-on-surface-variant font-label-sm text-label-sm flex-shrink-0">2m ago</span>
</div>
<div className="flex items-center justify-between">
<span className="text-on-surface-variant truncate">KYC rejected for Seller #SLR-0553 (Unclear TIN)</span>
<span className="text-error font-label-sm text-label-sm flex-shrink-0">Admin JW</span>
</div>
</div>
</div>
</section>
</div>
</main>
<nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_-6px_24px_rgba(0,0,0,0.60)]" data-active-classes="text-primary-container font-label-md"><div className="h-16 px-gutter flex items-center justify-around"><a className="flex flex-col items-center justify-center w-16 h-12 text-on-surface-variant hover:text-on-surface" data-path="manifest-runs" href="#"><Icon name="local_shipping" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight mt-0.5">Manifest</span></a><a className="flex flex-col items-center justify-center w-16 h-12 text-on-surface-variant hover:text-on-surface" data-path="hub-scanner" href="#"><Icon name="barcode_scanner" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight mt-0.5">Scanner</span></a><a aria-current="page" className="flex flex-col items-center justify-center w-16 h-12 text-primary-container font-label-md" data-path="escrow-ledger" href="#"><Icon name="verified_user" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight mt-0.5">Escrow</span></a><a className="flex flex-col items-center justify-center w-16 h-12 text-on-surface-variant hover:text-on-surface" data-path="fleet-dispatch" href="#"><Icon name="two_wheeler" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight mt-0.5">Fleet</span></a><a className="flex flex-col items-center justify-center w-16 h-12 text-on-surface-variant hover:text-on-surface" data-path="profile-ops" href="#"><Icon name="manage_accounts" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight mt-0.5">Profile</span></a></div></nav>
    </div>
  );
};

export default OverviewSwiftcartAdminDark;
