// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/super-admin/overview_swiftcart_super_admin/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface OverviewSwiftcartSuperAdminProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const OverviewSwiftcartSuperAdmin: React.FC<OverviewSwiftcartSuperAdminProps> = (props) => {
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
      
      <div className="fixed inset-0 bg-inverse-surface/60 backdrop-blur-sm z-50 opacity-0 pointer-events-none transition-opacity duration-300" id="drawer-backdrop"></div>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-24 bg-surface"><div className="flex flex-col w-full">
<div className="flex flex-col gap-space-md px-margin pb-space-xl">

<section className="bg-inverse-surface rounded-xl p-space-md shadow-md text-inverse-on-surface"><div className="flex items-center justify-between gap-space-xs mb-space-sm"><div className="flex items-center gap-space-xs"><span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-wider font-bold shadow-sm"><Icon name="dns" className="text-[13px]" />Server: kampala-prod-01</span><span className="px-2 py-0.5 rounded-full bg-surface-container-highest/20 text-inverse-on-surface font-label-sm text-label-sm tracking-tight">Cloud Platform • Healthy</span></div><div className="flex items-center gap-1.5"><span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-fixed opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary-fixed"></span></span><span className="font-label-sm text-label-sm text-tertiary-fixed font-bold tracking-wider uppercase">Online</span></div></div><div className="flex items-end justify-between pt-space-xs"><div className="flex flex-col"><span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider">Kampala Central (EAT)</span><span className="font-headline-sm text-headline-sm text-inverse-on-surface font-extrabold tracking-tight" id="live-eat-clock">09:04:06 EAT</span></div><div className="flex items-center gap-1 px-space-sm py-1 rounded-lg bg-surface-container-highest/15"><Icon name="check_circle" className="text-tertiary-fixed-dim text-[16px]" /><span className="font-label-sm text-label-sm text-surface-container-highest">All Systems Operational</span></div></div></section>

<section className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<div className="w-8 h-8 rounded-lg bg-tertiary-container/20 flex items-center justify-center text-tertiary">
<Icon name="vital_signs" className="text-[20px]" />
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">System Infrastructure</h2>
<p className="font-body-sm text-body-sm text-secondary">Real-Time Core Telemetry</p>
</div>
</div>
<span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-tertiary/10 text-tertiary font-label-sm text-label-sm font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
          Operational
        </span>
</div>

<div className="grid grid-cols-2 gap-space-sm">

<div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col justify-between">
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider truncate">MTN &amp; Airtel MoMo</span>
<Icon name="account_balance_wallet" className="text-tertiary text-[16px]" />
</div>
<div className="flex items-baseline gap-1">
<span className="font-label-lg text-label-lg font-extrabold text-on-surface">99.98%</span>
<span className="font-label-sm text-label-sm text-tertiary">Live</span>
</div>
<span className="font-body-sm text-body-sm text-secondary truncate">0.3s avg latency</span>
</div>

<div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col justify-between">
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider truncate">SMS &amp; OTP Rails</span>
<Icon name="sms" className="text-tertiary text-[16px]" />
</div>
<div className="flex items-baseline gap-1">
<span className="font-label-lg text-label-lg font-extrabold text-on-surface">99.4%</span>
<span className="font-label-sm text-label-sm text-secondary">Delivered</span>
</div>
<span className="font-body-sm text-body-sm text-secondary truncate">1.8s OTP latency</span>
</div>

<div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col justify-between">
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider truncate">Errors (24h)</span>
<Icon name="bug_report" className="text-primary text-[16px]" />
</div>
<div className="flex items-baseline gap-1">
<span className="font-label-lg text-label-lg font-extrabold text-on-surface">14 Handled</span>
</div>
<span className="font-body-sm text-body-sm text-tertiary font-semibold truncate">0 Fatal Unhandled</span>
</div>

<div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col justify-between">
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider truncate">Pipeline Queues</span>
<Icon name="pending_actions" className="text-primary-container text-[16px]" />
</div>
<div className="flex items-baseline gap-1">
<span className="font-label-lg text-label-lg font-extrabold text-primary-container">26 Total</span>
</div>
<span className="font-body-sm text-body-sm text-secondary truncate">12 P • 7 K • 3 L • 4 D</span>
</div>
</div>
</section>

<section className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Platform Velocity</h3>
<span className="font-label-sm text-label-sm text-primary font-bold">24H Live View</span>
</div>

<div className="flex gap-space-sm overflow-x-auto pb-1 -mx-margin px-margin no-scrollbar">

<div className="min-w-[240px] bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">Gross Merchandise Value</span>
<span className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center">
<Icon name="payments" className="text-[16px]" />
</span>
</div>
<div className="my-space-xs">
<span className="font-label-sm text-label-sm text-secondary block whitespace-nowrap">UGX</span>
<span className="font-price-display text-price-display text-on-surface font-extrabold tracking-tight">42,850,000</span>
</div>
<div className="flex items-center gap-1">
<Icon name="trending_up" className="text-tertiary text-[14px]" />
<span className="font-label-sm text-label-sm text-tertiary font-bold">+14.2%</span>
<span className="font-body-sm text-body-sm text-secondary">vs yesterday</span>
</div>
</div>

<div className="min-w-[240px] bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">Net Take-Rate Rev</span>
<span className="w-7 h-7 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center">
<Icon name="percent" className="text-[16px]" />
</span>
</div>
<div className="my-space-xs">
<span className="font-label-sm text-label-sm text-secondary block whitespace-nowrap">UGX</span>
<span className="font-price-display text-price-display text-primary font-extrabold tracking-tight">3,428,000</span>
</div>
<div className="flex items-center gap-1">
<span className="inline-flex px-1.5 py-0.5 rounded bg-tertiary/15 text-tertiary font-label-sm text-label-sm font-bold">8.2%</span>
<span className="font-body-sm text-body-sm text-secondary">blended commission</span>
</div>
</div>

<div className="min-w-[240px] bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">Escrow Liquidity</span>
<span className="w-7 h-7 rounded-full bg-secondary-container text-on-secondary-fixed-variant flex items-center justify-center">
<Icon name="lock" className="text-[16px]" />
</span>
</div>
<div className="my-space-xs">
<span className="font-label-sm text-label-sm text-secondary block">Stanbic Custody</span>
<span className="font-price-display text-price-display text-on-surface font-extrabold tracking-tight">384.5M</span>
</div>
<div className="flex items-center gap-1 text-secondary">
<Icon name="account_balance" className="text-[14px]" />
<span className="font-body-sm text-body-sm">Fully Backed &amp; Ringfenced</span>
</div>
</div>

<div className="min-w-[240px] bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">Orders &amp; Courier Fleet</span>
<span className="w-7 h-7 rounded-full bg-primary-container/10 text-primary-container flex items-center justify-center">
<Icon name="two_wheeler" className="text-[16px]" />
</span>
</div>
<div className="my-space-xs">
<span className="font-price-display text-price-display text-on-surface font-extrabold tracking-tight">318 Orders</span>
<span className="font-body-sm text-body-sm text-primary block font-semibold">42 in dispatch right now</span>
</div>
<div className="flex items-center justify-between font-label-sm text-label-sm text-secondary">
<span className="">54 Bodas Online</span>
<span className="">4 Hubs Active</span>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Urgent Superadmin Triage</h3>
<span className="w-5 h-5 rounded-full bg-error-container text-on-error-container flex items-center justify-center font-label-sm text-label-sm font-bold">4</span>
</div>
<span className="font-body-sm text-body-sm text-secondary">Sort: Urgency</span>
</div>
<div className="flex flex-col gap-space-sm"><div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-xs active:scale-[0.99] transition-transform cursor-pointer"><div className="flex items-start justify-between gap-space-sm"><div className="flex items-center gap-space-xs"><span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-extrabold uppercase">Customer Dispute</span><span className="font-label-sm text-label-sm text-secondary">#RT-309</span></div><span className="inline-flex items-center text-error font-label-sm text-label-sm font-bold"><Icon name="timer" className="text-[14px] mr-0.5" />4h 18m left</span></div><div className="flex items-center justify-between mt-1"><div><p className="font-label-lg text-label-lg text-on-surface font-bold">Sony ANC WH-1000XM5</p><p className="font-body-sm text-body-sm text-secondary whitespace-nowrap">Disputed Claim: Counterfeit packaging • UGX 280,000</p></div><button className="px-3 py-1.5 rounded-lg bg-primary-container text-on-primary font-label-sm text-label-sm font-bold shadow-sm active:scale-95" type="button">Review Dispute</button></div></div><div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-xs active:scale-[0.99] transition-transform cursor-pointer"><div className="flex items-start justify-between gap-space-sm"><div className="flex items-center gap-space-xs"><span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-secondary-fixed-variant font-label-sm text-label-sm font-extrabold uppercase">Dispatch Stalled</span><span className="font-label-sm text-label-sm text-secondary">Nakawa Corridor</span></div><span className="font-label-sm text-label-sm text-primary font-bold">Delivery Issue</span></div><div className="flex items-center justify-between mt-1"><div><p className="font-label-lg text-label-lg text-on-surface font-bold">3 Handover Deadlocks</p><p className="font-body-sm text-body-sm text-secondary">Customer inaccessible • Courier idle &gt; 25 mins</p></div><button className="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold active:scale-95" type="button">Override</button></div></div><div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-xs active:scale-[0.99] transition-transform cursor-pointer"><div className="flex items-start justify-between gap-space-sm"><div className="flex items-center gap-space-xs"><span className="px-2 py-0.5 rounded bg-tertiary-container/30 text-on-tertiary-container font-label-sm text-label-sm font-extrabold uppercase">Payout Queue</span><span className="font-label-sm text-label-sm text-secondary">12 Merchants</span></div><span className="font-label-sm text-label-sm text-tertiary font-bold">Sign-Off Req.</span></div><div className="flex items-center justify-between mt-1"><div><p className="font-label-lg text-label-lg text-on-surface font-bold whitespace-nowrap">UGX 18,420,000 Payouts</p><p className="font-body-sm text-body-sm text-secondary">Automated fraud checks passed • Ready for payout</p></div><button className="px-3 py-1.5 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm font-bold shadow-sm active:scale-95" type="button">Approve Batch</button></div></div><div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-xs active:scale-[0.99] transition-transform cursor-pointer"><div className="flex items-start justify-between gap-space-sm"><div className="flex items-center gap-space-xs"><span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-extrabold uppercase">Seller Verification</span><span className="font-label-sm text-label-sm text-secondary">Wholesale</span></div><span className="font-label-sm text-label-sm text-secondary font-bold">Verified Merchant</span></div><div className="flex items-center justify-between mt-1"><div><p className="font-label-lg text-label-lg text-on-surface font-bold">Ssenyonga Electronics</p><p className="font-body-sm text-body-sm text-secondary whitespace-nowrap">UGX 50,000,000 inventory cap request • TIN: 1004829104</p></div><button className="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold active:scale-95" type="button">Review</button></div></div></div>
</section>

<section className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm"><div className="flex items-center justify-between"><div className="flex items-center gap-space-xs"><Icon name="manage_history" className="text-primary text-[20px]" /><h3 className="font-headline-sm text-headline-sm text-on-surface">Activity Log</h3></div><span className="font-label-sm text-label-sm text-secondary">Recent Actions</span></div><div className="flex flex-col gap-space-sm mt-1"><div className="flex items-start gap-space-sm"><div className="w-7 h-7 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 text-secondary mt-0.5"><Icon name="security" className="text-[15px]" /></div><div className="flex flex-col flex-1 min-w-0"><div className="flex items-baseline justify-between gap-1"><span className="font-label-sm text-label-sm text-on-surface font-bold truncate">SuperAdmin updated commission fee</span><span className="font-label-sm text-label-sm text-secondary shrink-0">12m ago</span></div><span className="font-body-sm text-body-sm text-secondary">Consumer Electronics category rate changed by 0.5%</span></div></div><div className="flex items-start gap-space-sm"><div className="w-7 h-7 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 text-secondary mt-0.5"><Icon name="person_remove" className="text-[15px]" /></div><div className="flex flex-col flex-1 min-w-0"><div className="flex items-baseline justify-between gap-1"><span className="font-label-sm text-label-sm text-on-surface font-bold truncate">Seller Account Suspended: Kisekka Spares Hub</span><span className="font-label-sm text-label-sm text-secondary shrink-0">43m ago</span></div><span className="font-body-sm text-body-sm text-secondary">Flagged for multiple duplicate IMEI counterfeit listings</span></div></div><div className="flex items-start gap-space-sm"><div className="w-7 h-7 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 text-secondary mt-0.5"><Icon name="payments" className="text-[15px]" /></div><div className="flex flex-col flex-1 min-w-0"><div className="flex items-baseline justify-between gap-1"><span className="font-label-sm text-label-sm text-on-surface font-bold truncate">Daily Payout Batch Approved</span><span className="font-label-sm text-label-sm text-secondary shrink-0">1h 14m ago</span></div><span className="font-body-sm text-body-sm text-secondary whitespace-nowrap">UGX 142,000,000 settlements matched and cleared</span></div></div></div></section>

<section className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-md ring-1 ring-error/20"><div className="flex items-center gap-space-xs"><div className="w-8 h-8 rounded-lg bg-error-container text-on-error-container flex items-center justify-center shadow-sm"><Icon name="warning" className="text-[20px]" /></div><div><h3 className="font-headline-sm text-headline-sm text-error font-extrabold tracking-tight">Danger Zone</h3><p className="font-body-sm text-body-sm text-secondary">Sensitive platform administration actions</p></div></div><div className="flex flex-col gap-space-md"><div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-space-xs"><div className="flex items-center justify-between"><div className="flex items-center gap-2"><Icon name="construction" className="text-primary text-[20px]" /><span className="font-label-lg text-label-lg font-bold text-on-surface">Storewide Maintenance Mode</span></div><button className="px-3 py-1.5 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm font-bold shadow-sm active:scale-95 transition-transform" type="button">Enable Maintenance Mode</button></div><p className="font-body-sm text-body-sm text-secondary">Pauses buyer checkout while keeping admin and seller dashboards active.</p></div><div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-space-xs"><div className="flex items-center gap-2"><Icon name="person_off" className="text-error text-[20px]" /><span className="font-label-lg text-label-lg font-bold text-on-surface">Suspend a User</span></div><p className="font-body-sm text-body-sm text-secondary">Requires a verified reason and approval code sent to Super Admin.</p><div className="flex items-center gap-2 mt-1"><input className="flex-1 px-3 py-2 rounded-lg bg-surface-container-lowest border border-outline-variant text-on-surface font-body-sm text-body-sm" placeholder="Enter User ID or Email address" type="text" /><button className="px-3 py-2 rounded-lg bg-error text-on-error font-label-sm text-label-sm font-bold shadow-sm active:scale-95 shrink-0" type="button">Suspend User</button></div></div></div><div className="pt-2 text-center"><span className="font-label-sm text-label-sm text-secondary font-semibold">SwiftCart Uganda</span></div></section>
</div>


</div></main>
    </div>
  );
};

export default OverviewSwiftcartSuperAdmin;
