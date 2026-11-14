// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/seller/seller_notifications_swiftcart/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface MobileProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Mobile: React.FC<MobileProps> = (props) => {
  const onNavigate = props.onNavigate;
  
  const { theme, toggleTheme } = useDashboardTheme();
  void theme;
  void toggleTheme;
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className={`font-body-md text-body-md antialiased pt-safe pb-safe min-h-screen flex flex-col relative w-full overflow-x-hidden ${theme === 'dark' ? 'bg-[#0f172a] text-[#f9fafb]' : 'bg-[#f8fafc] text-[#0f172a]'}`}>
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-slate-900 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setDrawerOpen(false)}
        />
      )}
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 px-margin flex items-center justify-between"><div className="flex items-center gap-space-sm min-w-0"><button aria-label="Go back" className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container-high transition-colors -ml-space-xs" onClick={() => alertToast('Action triggered')}><Icon name="arrow_back" className="text-[24px]" /></button><img alt="SwiftCart" className="h-8 w-auto object-contain shrink-0" src="/brand/logo-full.png" /><div className="flex flex-col min-w-0 ml-space-xs"><span className="font-label-sm text-label-sm text-secondary tracking-wider uppercase truncate">SwiftCart Uganda</span><h1 className="font-headline-sm text-headline-sm text-on-surface truncate">Seller Notifications</h1></div></div><div className="flex items-center gap-space-xs"><button aria-label="Page options" className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors" onClick={() => alertToast('Action triggered')}><Icon name="more_vert" className="text-[22px]" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex flex-col relative w-full pt-16 bg-surface min-h-screen"><div className="flex flex-col w-full pb-safe">

<div className="px-margin pt-space-md pb-space-sm bg-inverse-surface flex items-center justify-between">
<div className="flex items-center gap-space-sm min-w-0">
<div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-surface-container-highest/20 text-inverse-on-surface">
<Icon name="notifications_active" className="text-[20px] text-primary-container" />
<span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-primary-container ring-2 ring-inverse-surface animate-pulse"></span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-inverse-on-surface truncate">Seller Notifications</span>
<span className="bg-primary-container px-2 py-0.5 rounded-full font-label-sm text-label-sm text-on-primary font-bold shadow-sm">4 Unread</span>
</div>
<span className="font-body-sm text-body-sm text-secondary-fixed-dim truncate">Store ID: #UG-KLA-8820 • Nakasero Bay</span>
</div>
</div>
<button className="flex items-center gap-1 py-1.5 px-2.5 rounded-lg bg-inverse-surface text-secondary-fixed-dim hover:text-inverse-on-surface hover:bg-surface-variant/20 transition-all active:scale-95 shrink-0" id="markAllBtn" title="Mark all notifications as read" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}>
<Icon name="done_all" className="text-[18px]" />
<span className="font-label-md text-label-md">Mark all</span>
</button>
</div>

<div className="mx-margin mt-space-sm mb-space-xs p-2.5 rounded-lg bg-inverse-surface shadow-md flex items-center justify-between text-inverse-on-surface">
<div className="flex items-center gap-2 min-w-0">
<Icon name="speed" className="text-[18px] text-tertiary-fixed-dim shrink-0" />
<p className="font-body-sm text-body-sm text-secondary-fixed-dim truncate">Dispatch SLA window: <span className="font-label-md text-inverse-on-surface font-semibold">1h 14m remaining</span> for afternoon run</p>
</div>
<span className="font-label-sm text-label-sm bg-tertiary-container/30 text-tertiary-fixed px-2 py-0.5 rounded uppercase font-bold shrink-0 tracking-wide">Live SLA</span>
</div>

<div className="w-full overflow-x-auto py-space-sm px-margin flex items-center gap-space-xs no-scrollbar bg-inverse-surface/95 sticky top-16 z-30 shadow-sm backdrop-blur-md">
<button className="filter-chip active shrink-0 px-3 py-1.5 rounded-full font-label-md text-label-md bg-primary-container text-on-primary shadow-sm flex items-center gap-1.5 transition-all" onClick={() => alertToast('Action triggered')}>
<span>All</span>
<span className="bg-surface-container-lowest/20 px-1.5 py-0.2 rounded-full font-label-sm text-label-sm">12</span>
</button>
<button className="filter-chip shrink-0 px-3 py-1.5 rounded-full font-label-md text-label-md bg-surface-container-highest/20 text-secondary-fixed-dim hover:text-inverse-on-surface hover:bg-surface-container-highest/30 flex items-center gap-1.5 transition-all" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}>
<span>New Orders</span>
<span className="bg-primary-container text-on-primary px-1.5 py-0.2 rounded-full font-label-sm text-label-sm">4</span>
</button>
<button className="filter-chip shrink-0 px-3 py-1.5 rounded-full font-label-md text-label-md bg-surface-container-highest/20 text-secondary-fixed-dim hover:text-inverse-on-surface hover:bg-surface-container-highest/30 flex items-center gap-1.5 transition-all" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}>
<span>Returns &amp; Disputes</span>
<span className="bg-surface-variant/30 text-inverse-on-surface px-1.5 py-0.2 rounded-full font-label-sm text-label-sm">2</span>
</button>
<button className="filter-chip shrink-0 px-3 py-1.5 rounded-full font-label-md text-label-md bg-surface-container-highest/20 text-secondary-fixed-dim hover:text-inverse-on-surface hover:bg-surface-container-highest/30 flex items-center gap-1.5 transition-all" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}>
<span>Payouts</span>
<span className="bg-surface-variant/30 text-inverse-on-surface px-1.5 py-0.2 rounded-full font-label-sm text-label-sm">3</span>
</button>
<button className="filter-chip shrink-0 px-3 py-1.5 rounded-full font-label-md text-label-md bg-surface-container-highest/20 text-secondary-fixed-dim hover:text-inverse-on-surface hover:bg-surface-container-highest/30 flex items-center gap-1.5 transition-all" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}>
<span>KYC &amp; Account</span>
<span className="bg-surface-variant/30 text-inverse-on-surface px-1.5 py-0.2 rounded-full font-label-sm text-label-sm">3</span>
</button>
</div>

<div className="px-margin pt-space-sm pb-space-xl flex flex-col gap-space-sm bg-inverse-surface min-h-[calc(100vh-14rem)]">

<div className="notification-card unread group relative rounded-xl bg-surface-container-highest/15 p-space-md shadow-md transition-all active:scale-[0.99] hover:bg-surface-container-highest/25">
<div className="flex items-start gap-space-md">
<div className="relative shrink-0">
<div className="w-11 h-11 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary-container shadow-inner">
<Icon name="package_2" className="text-[24px]" />
</div>
<span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary-container ring-2 ring-inverse-surface unread-dot"></span>
</div>
<div className="flex flex-col flex-1 min-w-0">
<div className="flex items-center justify-between gap-space-xs">
<div className="flex items-center gap-1.5 min-w-0">
<span className="font-label-lg text-label-lg font-bold text-inverse-on-surface truncate">New Order Placed</span>
<span className="bg-primary-container/20 text-primary-container font-label-sm text-label-sm px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">Urgent SLA</span>
</div>
<span className="font-body-sm text-body-sm text-secondary-fixed-dim whitespace-nowrap shrink-0">5m ago</span>
</div>
<p className="font-body-md text-body-md text-inverse-on-surface mt-1 leading-snug">
            New Order <span className="font-bold text-primary-container">#SC-9952</span> received for <span className="font-semibold text-inverse-on-surface">SoundCore Space One ANC</span> (<span className="font-bold text-inverse-on-surface">UGX 248,500</span>). Pack parcel and assign a Boda rider before <span className="text-primary-container font-bold underline underline-offset-2">2:00 PM</span>.
          </p>

<div className="flex items-center gap-space-sm mt-space-md pt-space-xs">
<button className="flex-1 py-2 px-3 rounded-lg bg-primary-container hover:bg-on-primary-fixed-variant text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}>
<Icon name="receipt_long" className="text-[18px]" />
<span>View Order</span>
</button>
<button className="py-2 px-3 rounded-lg bg-surface-container-highest/30 hover:bg-surface-container-highest/40 text-inverse-on-surface font-label-lg text-label-lg flex items-center justify-center gap-1 transition-all active:scale-95" title="Print Shipping Waybill" onClick={() => alertToast('Action triggered')}>
<Icon name="print" className="text-[18px]" />
</button>
</div>
</div>
</div>
</div>

<div className="notification-card unread relative rounded-xl bg-surface-container-highest/15 p-space-md shadow-md transition-all active:scale-[0.99] hover:bg-surface-container-highest/25">
<div className="flex items-start gap-space-md">
<div className="relative shrink-0">
<div className="w-11 h-11 rounded-xl bg-tertiary-container/20 flex items-center justify-center text-tertiary-fixed-dim shadow-inner">
<Icon name="account_balance_wallet" className="text-[24px]" />
</div>
<span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-tertiary-container ring-2 ring-inverse-surface unread-dot"></span>
</div>
<div className="flex flex-col flex-1 min-w-0">
<div className="flex items-center justify-between gap-space-xs">
<div className="flex items-center gap-1.5 min-w-0">
<span className="font-label-lg text-label-lg font-bold text-inverse-on-surface truncate">Payout Transferred to Wallet</span>
<span className="bg-tertiary-container/20 text-tertiary-fixed font-label-sm text-label-sm px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">Settled</span>
</div>
<span className="font-body-sm text-body-sm text-secondary-fixed-dim whitespace-nowrap shrink-0">1h ago</span>
</div>
<p className="font-body-md text-body-md text-inverse-on-surface mt-1 leading-snug">
<span className="font-bold text-tertiary-fixed-dim">UGX 1,420,000</span> has been transferred to your <span className="font-semibold text-inverse-on-surface">MTN Mobile Money</span> wallet (<span className="font-mono text-secondary-fixed-dim">+256 772 ***910</span>). Reference: <span className="font-mono font-semibold text-inverse-on-surface">PYO-88319</span>.
          </p>

<div className="flex items-center gap-2 mt-2 px-2.5 py-1.5 rounded-lg bg-surface-container-highest/20 text-secondary-fixed-dim text-body-sm font-body-sm">
<Icon name="verified_user" className="text-[16px] text-tertiary-fixed-dim" />
<span className="truncate">Instant Settlement • Zero ledger fees</span>
</div>
<div className="flex items-center gap-space-sm mt-space-md pt-space-xs">
<button className="flex-1 py-2 px-3 rounded-lg bg-surface-container-highest/30 hover:bg-surface-container-highest/40 text-inverse-on-surface font-label-lg text-label-lg font-bold flex items-center justify-center gap-1.5 transition-all active:scale-95" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}>
<Icon name="account_balance" className="text-[18px]" />
<span>View Statement</span>
</button>
</div>
</div>
</div>
</div>

<div className="notification-card unread relative rounded-xl bg-surface-container-highest/15 p-space-md shadow-md transition-all active:scale-[0.99] hover:bg-surface-container-highest/25">
<div className="flex items-start gap-space-md">
<div className="relative shrink-0">
<div className="w-11 h-11 rounded-xl bg-secondary-container/20 flex items-center justify-center text-primary-fixed-dim shadow-inner">
<Icon name="assignment_return" className="text-[24px]" />
</div>
<span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary-container ring-2 ring-inverse-surface unread-dot"></span>
</div>
<div className="flex flex-col flex-1 min-w-0">
<div className="flex items-center justify-between gap-space-xs">
<div className="flex items-center gap-1.5 min-w-0">
<span className="font-label-lg text-label-lg font-bold text-inverse-on-surface truncate">Return Request Initiated</span>
<span className="bg-primary-container/20 text-primary-fixed-dim font-label-sm text-label-sm px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">Action Req</span>
</div>
<span className="font-body-sm text-body-sm text-secondary-fixed-dim whitespace-nowrap shrink-0">3h ago</span>
</div>
<p className="font-body-md text-body-md text-inverse-on-surface mt-1 leading-snug">
            Customer logged a return request for Order <span className="font-bold text-inverse-on-surface">#RT-309</span> (<span className="font-semibold text-inverse-on-surface">Anker 65W Charger</span>). Reason: <span className="italic text-primary-fixed-dim">"Wrong cable type in box"</span>. Review evidence and respond within 24h.
          </p>
<div className="flex items-center gap-space-sm mt-space-md pt-space-xs">
<button className="flex-1 py-2 px-3 rounded-lg bg-primary-container hover:bg-on-primary-fixed-variant text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}>
<Icon name="find_in_page" className="text-[18px]" />
<span>Inspect Return</span>
</button>
<button className="py-2 px-3 rounded-lg bg-surface-container-highest/30 hover:bg-surface-container-highest/40 text-inverse-on-surface font-label-lg text-label-lg flex items-center justify-center gap-1 transition-all active:scale-95" title="Dispute Case" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}>
<Icon name="gavel" className="text-[18px]" />
</button>
</div>
</div>
</div>
</div>

<div className="notification-card unread relative rounded-xl bg-surface-container-highest/15 p-space-md shadow-md transition-all active:scale-[0.99] hover:bg-surface-container-highest/25">
<div className="flex items-start gap-space-md">
<div className="relative shrink-0">
<div className="w-11 h-11 rounded-xl bg-secondary-container/20 flex items-center justify-center text-secondary-fixed shadow-inner">
<Icon name="verified" className="text-[24px]" />
</div>
<span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-secondary-container ring-2 ring-inverse-surface unread-dot"></span>
</div>
<div className="flex flex-col flex-1 min-w-0">
<div className="flex items-center justify-between gap-space-xs">
<div className="flex items-center gap-1.5 min-w-0">
<span className="font-label-lg text-label-lg font-bold text-inverse-on-surface truncate">KYC Verification Verified</span>
<span className="bg-secondary-container/20 text-secondary-fixed font-label-sm text-label-sm px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">Tier 2 Active</span>
</div>
<span className="font-body-sm text-body-sm text-secondary-fixed-dim whitespace-nowrap shrink-0">Yesterday</span>
</div>
<p className="font-body-md text-body-md text-inverse-on-surface mt-1 leading-snug">
            Your Business Registration and National ID have been verified. Your merchant status is now <span className="font-bold text-secondary-fixed">"Verified Seller"</span> with standard 24h payout cycles.
          </p>
<div className="flex items-center gap-space-sm mt-space-md pt-space-xs">
<button className="flex-1 py-2 px-3 rounded-lg bg-surface-container-highest/30 hover:bg-surface-container-highest/40 text-inverse-on-surface font-label-lg text-label-lg font-bold flex items-center justify-center gap-1.5 transition-all active:scale-95" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}>
<Icon name="badge" className="text-[18px]" />
<span>Check KYC</span>
</button>
</div>
</div>
</div>
</div>

<div className="notification-card relative rounded-xl bg-surface-container-highest/10 opacity-80 hover:opacity-100 p-space-md shadow-sm transition-all active:scale-[0.99] hover:bg-surface-container-highest/15">
<div className="flex items-start gap-space-md">
<div className="shrink-0">
<div className="w-11 h-11 rounded-xl bg-surface-container-highest/20 flex items-center justify-center text-secondary-fixed-dim shadow-inner">
<Icon name="trending_up" className="text-[24px]" />
</div>
</div>
<div className="flex flex-col flex-1 min-w-0">
<div className="flex items-center justify-between gap-space-xs">
<div className="flex items-center gap-1.5 min-w-0">
<span className="font-label-lg text-label-lg font-semibold text-inverse-on-surface truncate">Daily Sales Summary</span>
<span className="bg-surface-container-highest/20 text-secondary-fixed-dim font-label-sm text-label-sm px-1.5 py-0.5 rounded font-bold uppercase">Report</span>
</div>
<span className="font-body-sm text-body-sm text-secondary-fixed-dim whitespace-nowrap shrink-0">1d ago</span>
</div>
<p className="font-body-md text-body-md text-secondary-fixed-dim mt-1 leading-snug">
            Yesterday's store performance: <span className="font-semibold text-inverse-on-surface">18 completed orders</span>, <span className="font-bold text-inverse-on-surface">UGX 4,280,000</span> total revenue, zero dispatch cancellations.
          </p>

<div className="grid grid-cols-2 gap-space-xs mt-3 p-2 rounded-lg bg-surface-container-highest/15">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary-fixed-dim uppercase">Fulfillment</span>
<span className="font-headline-sm text-headline-sm font-bold text-tertiary-fixed-dim">100%</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary-fixed-dim uppercase">Avg Order</span>
<span className="font-headline-sm text-headline-sm font-bold text-inverse-on-surface">UGX 237,777</span>
</div>
</div>
<div className="flex items-center gap-space-sm mt-space-md pt-space-xs">
<button className="flex-1 py-2 px-3 rounded-lg bg-surface-container-highest/20 hover:bg-surface-container-highest/30 text-inverse-on-surface font-label-lg text-label-lg font-semibold flex items-center justify-center gap-1.5 transition-all active:scale-95" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}>
<Icon name="analytics" className="text-[18px]" />
<span>View Analytics</span>
</button>
</div>
</div>
</div>
</div>

<div className="notification-card relative rounded-xl bg-surface-container-highest/10 opacity-80 hover:opacity-100 p-space-md shadow-sm transition-all active:scale-[0.99] hover:bg-surface-container-highest/15">
<div className="flex items-start gap-space-md">
<div className="shrink-0">
<div className="w-11 h-11 rounded-xl bg-surface-container-highest/20 flex items-center justify-center text-secondary-fixed-dim shadow-inner">
<Icon name="two_wheeler" className="text-[24px]" />
</div>
</div>
<div className="flex flex-col flex-1 min-w-0">
<div className="flex items-center justify-between gap-space-xs">
<div className="flex items-center gap-1.5 min-w-0">
<span className="font-label-lg text-label-lg font-semibold text-inverse-on-surface truncate">Rider Picked Up Parcel</span>
<span className="bg-surface-container-highest/20 text-secondary-fixed-dim font-label-sm text-label-sm px-1.5 py-0.5 rounded font-bold uppercase">Transit</span>
</div>
<span className="font-body-sm text-body-sm text-secondary-fixed-dim whitespace-nowrap shrink-0">2d ago</span>
</div>
<p className="font-body-md text-body-md text-secondary-fixed-dim mt-1 leading-snug">
            Rider <span className="font-semibold text-inverse-on-surface">Kizito Brian</span> (+256 701 441***) has picked up Order <span className="font-bold text-inverse-on-surface">#SC-9941</span> from your store staging bay.
          </p>
<div className="flex items-center gap-space-sm mt-space-md pt-space-xs">
<button className="flex-1 py-2 px-3 rounded-lg bg-surface-container-highest/20 hover:bg-surface-container-highest/30 text-inverse-on-surface font-label-lg text-label-lg font-semibold flex items-center justify-center gap-1.5 transition-all active:scale-95" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}>
<Icon name="location_on" className="text-[18px]" />
<span>Track Delivery</span>
</button>
</div>
</div>
</div>
</div>

<div className="py-space-md flex flex-col items-center justify-center text-center gap-1 text-secondary-fixed-dim">
<div className="w-9 h-9 rounded-full bg-surface-container-highest/20 flex items-center justify-center text-secondary-fixed-dim mb-1">
<Icon name="inventory_2" className="text-[20px]" />
</div>
<p className="font-label-md text-label-md text-inverse-on-surface">You're all caught up with operations!</p>
<p className="font-body-sm text-body-sm text-secondary-fixed-dim">Archived records older than 30 days are saved to Seller Cloud.</p>
</div>
</div>
</div>
</main>
    </div>
  );
};

export default Mobile;
