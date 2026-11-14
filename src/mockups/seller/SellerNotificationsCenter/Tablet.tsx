// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/seller/seller_notifications_center_tablet_light/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface TabletProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Tablet: React.FC<TabletProps> = (props) => {
  const onNavigate = props.onNavigate;
  
  const { theme, toggleTheme } = useDashboardTheme();
  void theme;
  void toggleTheme;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const assetBase = '';
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
      <aside className="fixed z-50 left-0 top-0 h-full w-[72px] bg-surface-container-lowest z-50 flex flex-col items-center py-4 shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-r border-surface-container-high"><div className="flex lg:hidden justify-end px-3 pt-2 pb-0"><button type="button" className="sidebar-close-btn p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface" aria-label="Close menu" onClick={() => setDrawerOpen(false)}><Icon name="close" className="text-[20px]" /></button></div><div className="flex flex-col items-center mb-6"><a className="group flex flex-col items-center justify-center p-1 rounded-xl hover:bg-surface-container transition-colors" data-path="overview" href="#" onClick={() => alertToast('Action triggered')}><img alt="SwiftCart" className="h-8 w-8 object-contain" src="/brand/logo-full.png" /><span className="font-label-sm text-label-sm text-primary font-bold mt-1 tracking-tighter">SWIFT</span></a></div><nav className="flex-1 w-full px-2 flex flex-col items-center gap-2" data-active-classes="bg-primary-container text-on-primary font-bold shadow-sm"><a className="w-12 h-12 flex items-center justify-center rounded-xl text-secondary hover:bg-surface-container hover:text-on-surface transition-all group" data-path="overview" href="#" title="Overview" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}><Icon name="dashboard" className="text-[22px]" /></a><a className="w-12 h-12 flex items-center justify-center rounded-xl text-secondary hover:bg-surface-container hover:text-on-surface transition-all group relative" data-path="orders" href="#" title="Orders" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><Icon name="local_shipping" className="text-[22px]" /></a><a className="w-12 h-12 flex items-center justify-center rounded-xl text-secondary hover:bg-surface-container hover:text-on-surface transition-all group" data-path="products" href="#" title="Products" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}><Icon name="inventory_2" className="text-[22px]" /></a><a className="w-12 h-12 flex items-center justify-center rounded-xl text-secondary hover:bg-surface-container hover:text-on-surface transition-all group" data-path="disputes-returns" href="#" title="Disputes & Returns" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}><Icon name="assignment_return" className="text-[22px]" /></a><a className="w-12 h-12 flex items-center justify-center rounded-xl text-secondary hover:bg-surface-container hover:text-on-surface transition-all group" data-path="wallet" href="#" title="Wallet & Escrow" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}><Icon name="account_balance_wallet" className="text-[22px]" /></a><a className="w-12 h-12 flex items-center justify-center rounded-xl text-secondary hover:bg-surface-container hover:text-on-surface transition-all group" data-path="analytics" href="#" title="Analytics" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}><Icon name="insights" className="text-[22px]" /></a><a aria-current="page" className="w-12 h-12 flex items-center justify-center rounded-xl transition-all group relative bg-primary-container text-on-primary font-bold shadow-sm" data-path="notifications" href="#" title="Notifications" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[22px]" /><span className="absolute top-2 right-2 w-4 h-4 bg-primary text-on-primary font-label-sm text-[9px] font-bold rounded-full flex items-center justify-center ring-2 ring-surface-container-lowest">4</span></a></nav><div className="w-full px-2 flex flex-col items-center gap-2 pt-2 border-t border-surface-container-high"><a className="w-12 h-12 flex items-center justify-center rounded-xl text-secondary hover:bg-surface-container hover:text-on-surface transition-all" data-path="settings" href="#" title="Settings" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><Icon name="settings" className="text-[22px]" /></a></div></aside>
<div className="pl-[72px]"><header className="fixed top-0 left-[72px] right-0 h-[60px] bg-surface-container-lowest z-40 flex items-center justify-between px-space-lg shadow-[0_1px_4px_rgba(0,0,0,0.03)] border-b border-surface-container-high"><div className="flex items-center gap-space-md"><button type="button" className="sidebar-hamburger-btn lg:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container mr-2" aria-label="Open menu" onClick={() => setDrawerOpen(true)}><Icon name="menu" className="text-[22px]" /></button><div className="flex items-center gap-space-xs px-space-sm py-1.5 bg-surface-container-low rounded-lg border border-surface-container cursor-pointer hover:bg-surface-container transition-colors"><Icon name="storefront" className="text-primary text-[18px]" /><div className="flex flex-col text-left"><span className="font-label-md text-label-md font-bold text-on-surface leading-tight">Victoria Tech Supplies</span><span className="font-label-sm text-label-sm text-secondary leading-none">Nakasero Bay Hub #UG-8820</span></div><Icon name="expand_more" className="text-secondary text-[16px] ml-1" /></div></div><div className="flex-1 max-w-sm mx-space-md"><div className="relative flex items-center w-full"><Icon name="search" className="absolute left-3 text-secondary text-[18px]" /><input className="w-full h-9 pl-9 pr-4 rounded-lg bg-surface font-body-sm text-body-sm text-on-surface placeholder:text-secondary border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary-container focus:bg-surface-container-lowest transition-all" placeholder="Search orders, SKUs, disputes..." type="text" /></div></div><div className="flex items-center gap-space-md"><div className="flex items-center p-0.5 bg-surface-container rounded-lg border border-surface-container-high"><button className="p-1 rounded-md bg-surface-container-lowest text-primary shadow-sm flex items-center justify-center" title="Light Mode Active" type="button" onClick={() => toggleTheme()}><Icon name="light_mode" className="text-[16px]" /></button><button className="p-1 rounded-md text-secondary hover:text-on-surface flex items-center justify-center" title="Dark Mode" type="button" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-[16px]" /></button></div><a className="relative p-1.5 text-secondary hover:text-on-surface rounded-lg hover:bg-surface-container transition-colors" data-path="notifications" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[20px]" /><span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full ring-2 ring-surface-container-lowest"></span></a><div className="flex items-center gap-space-xs pl-2 border-l border-surface-container-high"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary font-label-md text-label-md font-bold shadow-sm"><Icon name="person" className="text-on-primary text-[18px]" /></div><div className="hidden lg:flex flex-col text-left"><span className="font-label-md text-label-md font-bold text-on-surface">VT Admin</span><span className="font-label-sm text-label-sm text-tertiary font-semibold flex items-center gap-0.5"><span className="w-1.5 h-1.5 rounded-full bg-tertiary inline-block"></span>Verified</span></div></div></div></header><div className="fixed top-[60px] left-[72px] right-0 h-7 bg-surface-container-low border-b border-surface-container-high z-30 px-space-lg flex items-center justify-between text-on-secondary-container"><div className="flex items-center gap-space-xs font-label-sm text-label-sm overflow-hidden text-ellipsis whitespace-nowrap"><span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span><span className="font-semibold text-on-surface">Nakasero Mesh Relay Active</span><span className="text-outline">|</span><span>Last synced 12s ago via MTN MoMo Gateway</span><span className="text-outline">|</span><span className="text-tertiary font-semibold flex items-center gap-0.5"><Icon name="verified_user" className="text-[13px]" /> Escrow Enforced</span></div><div className="font-label-sm text-label-sm text-secondary font-mono tracking-wide">Hub Node UG-OPS-04</div></div><main className="w-full pt-[88px] min-h-screen bg-surface px-space-lg py-space-md"><div className="flex flex-col w-full pb-12">

<div className="w-full bg-surface-container-lowest rounded-xl shadow-sm p- space-md mb-space-md">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex flex-col sm:flex-row sm:items-center gap-space-sm">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface">Seller Notifications &amp; Alerts</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm uppercase tracking-wider">
            4 Actionable Items
          </span>
</div>
<div className="flex items-center gap-1.5 px-2.5 py-1 bg-surface-container-low rounded-md">
<Icon name="verified_user" className="text-tertiary text-[16px]" />
<span className="font-label-sm text-label-sm text-tertiary">Escrow Shielded</span>
</div>
</div>
<div className="flex items-center gap-space-sm flex-wrap">
<div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container rounded-lg">
<Icon name="timer" className="text-primary text-[18px]" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary">Dispatch Cut-off (14:30 EAT)</span>
<span className="font-label-md text-label-md text-primary font-bold">1h 14m remaining for today's Nakasero Hub</span>
</div>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-low rounded-lg">
<Icon name="speed" className="text-tertiary text-[18px]" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary">Store Velocity Score</span>
<span className="font-label-md text-label-md text-tertiary font-bold">99.4% On-Time SLA</span>
</div>
</div>
<button className="inline-flex items-center gap-1 px-3 py-2 bg-surface-container hover:bg-surface-container-high rounded-lg text-secondary hover:text-on-surface transition-colors font-label-md text-label-md" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="done_all" className="text-[16px]" />
<span>Mark All Read</span>
</button>
</div>
</div>
</div>

<div className="w-full flex items-center justify-between gap-space-sm overflow-x-auto pb-1 mb-space-md">
<div className="flex items-center gap-space-xs">
<button className="px-3.5 py-1.5 rounded-lg bg-on-surface text-surface font-label-md text-label-md shadow-sm whitespace-nowrap" type="button" onClick={() => alertToast('Action triggered')}>
        All Alerts (12)
      </button>
<button className="px-3.5 py-1.5 rounded-lg bg-surface-container-lowest text-secondary hover:text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors whitespace-nowrap shadow-sm flex items-center gap-1.5" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}>
<span>New Orders</span>
<span className="w-5 h-5 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm flex items-center justify-center font-bold">4</span>
</button>
<button className="px-3.5 py-1.5 rounded-lg bg-surface-container-lowest text-secondary hover:text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors whitespace-nowrap shadow-sm flex items-center gap-1.5" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}>
<span>Returns &amp; Disputes</span>
<span className="w-5 h-5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm flex items-center justify-center font-bold">2</span>
</button>
<button className="px-3.5 py-1.5 rounded-lg bg-surface-container-lowest text-secondary hover:text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors whitespace-nowrap shadow-sm" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}>
        Wallet &amp; Payouts (3)
      </button>
<button className="px-3.5 py-1.5 rounded-lg bg-surface-container-lowest text-secondary hover:text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors whitespace-nowrap shadow-sm" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}>
        KYC &amp; System (3)
      </button>
</div>
<div className="hidden sm:flex items-center gap-1 text-secondary font-label-sm text-label-sm shrink-0 px-2.5 py-1 bg-surface-container-low rounded-md">
<Icon name="sort" className="text-[16px]" />
<span className="font-semibold uppercase tracking-wider">Priority Sorted</span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start">

<div className="lg:col-span-7 flex flex-col gap-space-sm">

<div className="w-full bg-surface-container-lowest rounded-xl shadow-sm p-space-md transition-all hover:shadow-md relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-container"></div>
<div className="pl-2">
<div className="flex items-center justify-between gap-space-sm mb-1.5">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-bold uppercase tracking-wide">
                SLA URGENT
              </span>
<span className="font-label-lg text-label-lg font-bold text-on-surface">New Order Placed #SC-9952</span>
</div>
<span className="font-body-sm text-body-sm text-secondary">3 mins ago</span>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="font-price-display text-price-display text-on-surface">UGX 248,500</span>
<span className="inline-flex items-center gap-0.5 px-2 py-0.5 bg-surface-container text-tertiary font-label-sm text-label-sm rounded font-semibold">
<Icon name="shield" className="text-[13px]" />
              MoMo Escrow Secured
            </span>
</div>
<div className="flex items-center gap-space-sm p-2.5 bg-surface-container-low rounded-lg mb-space-sm">
<div className="w-12 h-12 rounded-lg bg-surface-container flex-shrink-0 overflow-hidden shadow-sm">
<img className="w-full h-full object-cover" data-alt="SoundCore Space One Wireless Noise Cancelling Over-Ear Headphones resting on a minimalist studio stand, natural soft daylight, subtle orange accent lighting, commercial product photograph" src={`${assetBase}/images/b186a7803c1724cb.webp`} />
</div>
<div className="flex flex-col min-w-0 flex-1">
<span className="font-label-md text-label-md text-on-surface font-bold truncate">SoundCore Space One ANC Headphones</span>
<div className="flex items-center gap-2 text-secondary font-body-sm text-body-sm">
<span>SKU: ANK-SC-992</span>
<span>•</span>
<span>Qty: 1</span>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pt-1">
<div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm">
<Icon name="two_wheeler" className="text-primary-container text-[18px]" />
<span>Pickup by <strong className="text-on-surface">2:00 PM EAT</strong> • Rider: <span className="text-on-surface font-semibold">Kizito Brian (En Route)</span></span>
</div>
<button className="px-3.5 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-on-primary-container transition-transform active:scale-95 shadow-sm inline-flex items-center justify-center gap-1.5 font-bold" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}>
<span>Pack Parcel &amp; Assign Rider</span>
<Icon name="arrow_forward" className="text-[16px]" />
</button>
</div>
</div>
</div>

<div className="w-full bg-surface-container-lowest rounded-xl shadow-sm p-space-md transition-all hover:shadow-md relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-tertiary-container"></div>
<div className="pl-2">
<div className="flex items-center justify-between gap-space-sm mb-1.5">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-surface-container text-tertiary font-label-sm text-label-sm font-bold uppercase tracking-wide">
                Direct Credit
              </span>
<span className="font-label-lg text-label-lg font-bold text-on-surface">MTN MoMo Payout Settled</span>
</div>
<span className="font-body-sm text-body-sm text-secondary">42 mins ago</span>
</div>
<div className="flex items-baseline gap-2 mb-2">
<span className="font-headline-md text-headline-md text-tertiary font-extrabold">+UGX 1,420,000</span>
<span className="font-body-sm text-body-sm text-secondary">Automatic Escrow Sweep</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-2.5 bg-surface-container-low rounded-lg mb-space-xs font-body-sm text-body-sm">
<div className="flex flex-col">
<span className="text-secondary font-label-sm text-label-sm">Destination Gateway</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">MTN Mobile Money +256 772 *** 910</span>
</div>
<div className="flex flex-col sm:items-end">
<span className="text-secondary font-label-sm text-label-sm">Transaction Reference</span>
<span className="font-mono text-label-md text-label-md text-on-surface font-bold">#PYO-88319</span>
</div>
</div>
<div className="flex justify-end pt-1">
<a className="text-primary hover:text-on-primary-fixed-variant font-label-md text-label-md font-semibold inline-flex items-center gap-1" href="#" onClick={() => alertToast('Action triggered')}>
<span>View Statement</span>
<Icon name="chevron_right" className="text-[16px]" />
</a>
</div>
</div>
</div>

<div className="w-full bg-surface-container-lowest rounded-xl shadow-sm p-space-md transition-all hover:shadow-md relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-error"></div>
<div className="pl-2">
<div className="flex items-center justify-between gap-space-sm mb-1.5">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-bold uppercase tracking-wide">
                21h left to respond
              </span>
<span className="font-label-lg text-label-lg font-bold text-on-surface">Return Request Initiated #RT-309</span>
</div>
<span className="font-body-sm text-body-sm text-secondary">2 hours ago</span>
</div>
<p className="font-body-md text-body-md text-secondary mb-2">
            Buyer claims package seal broken upon delivery. Escrow held until merchant triage complete.
          </p>
<div className="flex items-center justify-between p-2.5 bg-surface-container-low rounded-lg mb-space-sm">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Anker 65W GaN Wall Charger</span>
<span className="font-body-sm text-body-sm text-secondary">Dispute Hold: <strong className="text-error font-semibold">UGX 95,000</strong></span>
</div>
<div className="w-9 h-9 rounded bg-surface-container flex items-center justify-center">
<Icon name="process_chart" className="text-secondary text-[20px]" />
</div>
</div>
<div className="flex justify-end gap-2">
<button className="px-3.5 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}>
              Inspect Return
            </button>
</div>
</div>
</div>

<div className="w-full bg-surface-container-lowest rounded-xl shadow-sm p-space-md transition-all hover:shadow-md relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-surface-container-highest"></div>
<div className="pl-2">
<div className="flex items-center justify-between gap-space-sm mb-1.5">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-surface-container text-tertiary font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="verified" className="text-[13px]" />
                Verified Merchant
              </span>
<span className="font-label-lg text-label-lg font-bold text-on-surface">Tier 2 Verification Approved</span>
</div>
<span className="font-body-sm text-body-sm text-secondary">5 hours ago</span>
</div>
<p className="font-body-md text-body-md text-secondary mb-2">
            URA Tax Identification &amp; Kampala City Traders Association license validated. Your merchant daily transaction threshold is upgraded to UGX 50,000,000.
          </p>
<div className="flex justify-end">
<a className="text-primary hover:text-on-primary-fixed-variant font-label-md text-label-md font-semibold inline-flex items-center gap-1" href="#" onClick={() => alertToast('Action triggered')}>
<span>Check Badges</span>
<Icon name="chevron_right" className="text-[16px]" />
</a>
</div>
</div>
</div>

<div className="w-full bg-surface-container-low rounded-xl p-space-md">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<Icon name="insights" className="text-secondary text-[20px]" />
<span className="font-label-lg text-label-lg font-bold text-on-surface">Yesterday's Store Performance</span>
</div>
<span className="font-body-sm text-body-sm text-secondary">Automated Summary</span>
</div>
<div className="grid grid-cols-3 gap-2">
<div className="bg-surface-container-lowest p-2.5 rounded-lg shadow-sm">
<span className="font-label-sm text-label-sm text-secondary block">Completed Orders</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">18</span>
</div>
<div className="bg-surface-container-lowest p-2.5 rounded-lg shadow-sm">
<span className="font-label-sm text-label-sm text-secondary block">Gross GMV</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">UGX 4.28M</span>
</div>
<div className="bg-surface-container-lowest p-2.5 rounded-lg shadow-sm">
<span className="font-label-sm text-label-sm text-secondary block">Avg Boda Pickup</span>
<span className="font-headline-sm text-headline-sm text-tertiary font-bold">14m</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 sticky top-[96px] flex flex-col gap-space-sm">

<div className="w-full bg-surface-container-lowest rounded-xl shadow-md p-space-md overflow-hidden relative">

<div className="flex items-center justify-between pb-space-sm mb-space-sm border-b border-surface-container">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">Order #SC-9952</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-tertiary font-label-sm text-label-sm font-bold flex items-center gap-0.5">
<Icon name="lock" className="text-[13px]" />
                Escrow Locked
              </span>
</div>
<span className="font-body-sm text-body-sm text-secondary">Dispatch Triage • SafeBoda Express</span>
</div>
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary-container">
<Icon name="local_shipping" className="text-[24px]" />
</div>
</div>

<div className="mb-space-sm">
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">Recipient Details</span>
<span className="font-label-sm text-label-sm text-tertiary font-semibold flex items-center gap-0.5">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>Verified Buyer
            </span>
</div>
<div className="bg-surface-container-low p-2.5 rounded-lg flex flex-col gap-1">
<div className="flex justify-between items-center">
<span className="font-label-md text-label-md text-on-surface font-bold">Sarah Namubiru</span>
<span className="font-body-sm text-body-sm text-secondary font-mono">+256 701 *** 123 (Masked)</span>
</div>
<div className="flex items-start gap-1.5 text-secondary font-body-sm text-body-sm">
<Icon name="pin_drop" className="text-[16px] text-primary shrink-0 mt-0.5" />
<span className="text-on-surface font-medium leading-tight">Acacia Mall Service Gate Hub, Kisementi, Kololo, Kampala</span>
</div>
</div>
</div>

<div className="mb-space-sm">
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">Designated Courier</span>
<span className="font-label-sm text-label-sm text-primary font-bold">ETA 12 Mins</span>
</div>
<div className="bg-surface-container-low p-2.5 rounded-lg flex items-center gap- space-sm">
<div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Portrait photo of an African delivery rider wearing an orange branded helmet and high visibility jacket, smiling confidently against daylight Kampala street backdrop" src={`${assetBase}/images/65b2fe56b352b50e.webp`} />
</div>
<div className="flex flex-col min-w-0 flex-1">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface font-bold truncate">Kizito Brian</span>
<Icon name="verified" className="text-tertiary text-[15px]" />
</div>
<span className="font-body-sm text-body-sm text-secondary truncate">Bajaj Boxer • <strong className="text-on-surface font-mono">#UFE 219K</strong></span>
<span className="font-label-sm text-label-sm text-secondary">SafeBoda Nakasero Stage Verified</span>
</div>
<button className="w-8 h-8 rounded-lg bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface transition-colors" title="Call Courier Relay" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="call" className="text-[18px]" />
</button>
</div>
</div>

<div className="mb-space-sm p-3 bg-surface-container rounded-lg text-center">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-widest block mb-1">
            Blind OTP Handover Code (Courier Scan Only)
          </span>
<div className="flex items-center justify-center gap-2 mb-2">
<span className="px-3 py-1 bg-surface-container-lowest rounded-md font-mono font-extrabold text-headline-sm text-on-surface shadow-sm">
              749 • 921
            </span>
</div>
<div className="w-full h-9 bg-surface-container-lowest rounded flex items-center justify-center p-1 shadow-inner">

<svg className="w-full h-7 text-on-surface" preserveAspectRatio="none" viewBox="0 0 200 30">
<rect fill="currentColor" height="30" width="4" x="0" y="0"></rect>
<rect fill="currentColor" height="30" width="2" x="6" y="0"></rect>
<rect fill="currentColor" height="30" width="6" x="12" y="0"></rect>
<rect fill="currentColor" height="30" width="2" x="22" y="0"></rect>
<rect fill="currentColor" height="30" width="4" x="28" y="0"></rect>
<rect fill="currentColor" height="30" width="8" x="36" y="0"></rect>
<rect fill="currentColor" height="30" width="3" x="48" y="0"></rect>
<rect fill="currentColor" height="30" width="5" x="54" y="0"></rect>
<rect fill="currentColor" height="30" width="2" x="63" y="0"></rect>
<rect fill="currentColor" height="30" width="7" x="68" y="0"></rect>
<rect fill="currentColor" height="30" width="3" x="79" y="0"></rect>
<rect fill="currentColor" height="30" width="6" x="86" y="0"></rect>
<rect fill="currentColor" height="30" width="4" x="96" y="0"></rect>
<rect fill="currentColor" height="30" width="2" x="104" y="0"></rect>
<rect fill="currentColor" height="30" width="7" x="110" y="0"></rect>
<rect fill="currentColor" height="30" width="3" x="120" y="0"></rect>
<rect fill="currentColor" height="30" width="5" x="126" y="0"></rect>
<rect fill="currentColor" height="30" width="2" x="135" y="0"></rect>
<rect fill="currentColor" height="30" width="6" x="141" y="0"></rect>
<rect fill="currentColor" height="30" width="4" x="151" y="0"></rect>
<rect fill="currentColor" height="30" width="2" x="159" y="0"></rect>
<rect fill="currentColor" height="30" width="7" x="165" y="0"></rect>
<rect fill="currentColor" height="30" width="4" x="176" y="0"></rect>
<rect fill="currentColor" height="30" width="8" x="184" y="0"></rect>
<rect fill="currentColor" height="30" width="4" x="196" y="0"></rect>
</svg>
</div>
</div>

<div className="mb-space-md">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider block mb-1">
            Item Manifest Checklist
          </span>
<div className="space-y-1.5">
<label className="flex items-center gap-2 p-2 rounded bg-surface-container-low cursor-pointer">
<input checked={true} className="w-4 h-4 accent-primary-container rounded" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface flex-1">SoundCore Space One ANC (UGX 248,500)</span>
<Icon name="check_circle" className="text-tertiary text-[16px]" />
</label>
<label className="flex items-center gap-2 p-2 rounded bg-surface-container-low cursor-pointer">
<input checked={true} className="w-4 h-4 accent-primary-container rounded" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface flex-1">Warranty Hologram Seal Attached</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Passed QC</span>
</label>
</div>
</div>

<div className="flex flex-col gap-2">
<button className="w-full py-3 px-4 rounded-lg bg-primary-container hover:bg-on-primary-container text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98]" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}>
<Icon name="inventory" className="text-[20px]" />
<span>Confirm Packed &amp; Stage for Boda</span>
</button>
<button className="w-full py-2.5 px-4 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold flex items-center justify-center gap-2 transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="print" className="text-[18px]" />
<span>Print Waybill Slip &amp; Barcode</span>
</button>
</div>
<div className="mt-3 flex items-center justify-center gap-1.5 text-secondary font-label-sm text-label-sm text-center">
<Icon name="cell_tower" className="text-[14px]" />
<span>SMS Priority Relay will alert Sarah upon parcel custody transfer</span>
</div>
</div>

<div className="w-full bg-surface-container-low rounded-xl p-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse"></span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Mesh Relay Node UG-OPS-04</span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-mono">14ms latency</span>
</div>
</div>
</div>
</div></main></div>
    </div>
  );
};

export default Tablet;
