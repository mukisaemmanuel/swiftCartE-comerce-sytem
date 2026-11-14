// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/seller/overview_swiftcart_seller_dark/code.html
import React, { useState } from 'react';
import Icon from '../../../../components/shared/Icon';
import { useDashboardTheme } from '../../../../context/ThemeContext';

export interface ScreenProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Screen: React.FC<ScreenProps> = (props) => {
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
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/85 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.45)]"><div className="h-16 px-margin flex items-center justify-between"><div className="flex items-center gap-space-sm"><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col"><div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-escrow animate-pulse"></span><span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary">Live Ops • Kampala Central</span></div><h1 className="font-headline-sm text-headline-sm text-on-surface leading-tight tracking-tight">Manifest Runs</h1></div></div><div className="flex items-center gap-space-xs"><button className="w-11 h-11 flex items-center justify-center rounded-xl bg-surface-container-low text-on-surface-variant hover:text-on-surface" onClick={() => alertToast('Action triggered')}><Icon name="sync_alt" className="text-[20px]" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_2px_8px_rgba(255,181,161,0.25)]"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex flex-col relative w-full pt-16 pb-24 bg-surface min-h-screen"><div className="flex flex-col w-full pb-8 space-y-4">

<div className="px-margin pt-1">
<div className="bg-surface-container-low rounded-xl p-space-md shadow-md">
<div className="flex items-center justify-between gap-space-sm mb-3">
<div className="flex items-center gap-space-sm min-w-0">
<div className="relative flex-shrink-0">
<div className="w-12 h-12 rounded-xl bg-action-gradient-start/20 flex items-center justify-center text-primary-container font-headline-sm text-headline-sm font-extrabold tracking-wider">
              SC
            </div>
<span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-escrow flex items-center justify-center">
<Icon name="check" className="text-[11px] text-surface-container-lowest font-bold" />
</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5 truncate">
<h2 className="font-headline-sm text-headline-sm text-on-surface truncate">SoundCore Uganda</h2>
</div>
<div className="flex items-center gap-2 mt-0.5">
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 truncate">
<Icon name="storefront" className="text-[13px] text-primary" />
                Pioneer Mall #SLR-0412
              </span>
</div>
</div>
</div>

<button className="flex flex-col items-end gap-1 flex-shrink-0 focus:outline-none" id="storeToggleBtn" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary font-bold" id="storeStatusLabel">Store Open</span>
<div className="w-11 h-6 rounded-full bg-tertiary-container/40 p-0.5 flex items-center transition-colors duration-200" id="storeTogglePill">
<div className="w-5 h-5 rounded-full bg-tertiary shadow-sm transform translate-x-5 transition-transform duration-200" id="storeToggleKnob"></div>
</div>
</button>
</div>

<div className="flex items-center justify-between pt-2.5 bg-surface-container-lowest/60 rounded-lg px-3 py-2">
<div className="flex items-center gap-1.5">
<Icon name="star" className="text-mtn-yellow text-[16px]" />
<span className="font-label-md text-label-md text-on-surface font-bold">4.9</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">(420 verified reviews)</span>
</div>
<div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary">
<Icon name="verified" className="text-[14px]" />
<span className="font-label-sm text-label-sm font-semibold">Tier 1 Verified</span>
</div>
</div>
</div>
</div>

<div className="px-margin">
<div className="grid grid-cols-4 gap-2">
<button className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container active:scale-95 transition-all text-center" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/add-product-step-1-photos-seller'); }}>
<div className="w-10 h-10 rounded-xl bg-primary-container/20 text-primary-container flex items-center justify-center mb-1">
<Icon name="add_circle" className="text-[20px]" />
</div>
<span className="font-label-sm text-label-sm text-on-surface truncate w-full font-medium">Add Product</span>
</button>
<button className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container active:scale-95 transition-all text-center" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}>
<div className="w-10 h-10 rounded-xl bg-secondary-container/40 text-secondary flex items-center justify-center mb-1">
<Icon name="inventory_2" className="text-[20px]" />
</div>
<span className="font-label-sm text-label-sm text-on-surface truncate w-full font-medium">Orders</span>
</button>
<button className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container active:scale-95 transition-all text-center" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}>
<div className="w-10 h-10 rounded-xl bg-tertiary-container/30 text-tertiary flex items-center justify-center mb-1">
<Icon name="account_balance_wallet" className="text-[20px]" />
</div>
<span className="font-label-sm text-label-sm text-on-surface truncate w-full font-medium">Payout</span>
</button>
<button className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container active:scale-95 transition-all text-center" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}>
<div className="w-10 h-10 rounded-xl bg-surface-bright text-on-surface-variant flex items-center justify-center mb-1">
<Icon name="insights" className="text-[20px]" />
</div>
<span className="font-label-sm text-label-sm text-on-surface truncate w-full font-medium">Analytics</span>
</button>
</div>
</div>

<div className="px-margin space-y-2">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">Performance Snapshot</span>
<span className="font-label-sm text-label-sm text-tertiary flex items-center gap-1 font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow"></span>
        Auto-sync Active
      </span>
</div>
<div className="grid grid-cols-2 gap-2.5">

<div className="bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between shadow-sm relative overflow-hidden">
<div className="flex items-center justify-between mb-2">
<span className="font-body-sm text-body-sm text-on-surface-variant">Today's Sales</span>
<div className="w-7 h-7 rounded-lg bg-surface-bright flex items-center justify-center text-primary">
<Icon name="point_of_sale" className="text-[16px]" />
</div>
</div>
<div>
<div className="font-headline-sm text-headline-sm text-on-surface font-extrabold tracking-tight">
            UGX 1,420,000
          </div>
<div className="flex items-center gap-1 mt-1 text-tertiary font-label-sm text-label-sm">
<Icon name="trending_up" className="text-[14px]" />
<span>+18% vs yesterday</span>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between shadow-sm relative overflow-hidden">
<div className="flex items-center justify-between mb-2">
<span className="font-body-sm text-body-sm text-on-surface-variant">Escrow Balance</span>
<div className="w-7 h-7 rounded-lg bg-emerald-escrow/10 flex items-center justify-center text-emerald-escrow">
<Icon name="lock" className="text-[16px]" />
</div>
</div>
<div>
<div className="font-headline-sm text-headline-sm text-emerald-escrow font-extrabold tracking-tight">
            UGX 8,450,000
          </div>
<div className="flex items-center gap-1 mt-1 text-on-surface-variant font-label-sm text-label-sm">
<Icon name="check_circle" className="text-[13px] text-tertiary" />
<span>Withdrawal ready</span>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="font-body-sm text-body-sm text-on-surface-variant">Pending Orders</span>
<div className="w-7 h-7 rounded-lg bg-amber-warning/10 flex items-center justify-center text-amber-warning">
<Icon name="package_2" className="text-[16px]" />
</div>
</div>
<div>
<div className="font-headline-sm text-headline-sm text-on-surface font-extrabold">
            6
          </div>
<div className="text-amber-warning font-label-sm text-label-sm mt-1 flex items-center gap-1">
<Icon name="alarm" className="text-[13px]" />
<span>To pack &amp; dispatch</span>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="font-body-sm text-body-sm text-on-surface-variant">Active Catalog</span>
<div className="w-7 h-7 rounded-lg bg-surface-bright flex items-center justify-center text-secondary">
<Icon name="devices_other" className="text-[16px]" />
</div>
</div>
<div>
<div className="font-headline-sm text-headline-sm text-on-surface font-extrabold">
            34
          </div>
<div className="text-on-surface-variant font-label-sm text-label-sm mt-1 flex items-center gap-1">
<Icon name="signal_cellular_alt" className="text-[13px] text-tertiary" />
<span>Items online</span>
</div>
</div>
</div>
</div>
</div>

<div className="px-margin space-y-2.5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Action Required</h3>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-primary-container/20 text-primary-container font-bold">2 Urgent</span>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md shadow-sm space-y-3">
<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-container-dark-high flex items-center justify-center text-primary-container">
<Icon name="headphones" className="text-[18px]" />
</div>
<div>
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface font-bold">#SC-ORD-9488</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-mtn-yellow/20 text-mtn-yellow font-bold">MTN MoMo</span>
</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              Dennis Mukasa • <span className="font-mono text-on-surface-variant">07•• ••• 123</span>
</div>
</div>
</div>
<div className="text-right">
<span className="font-label-lg text-label-lg text-on-surface font-bold">UGX 248,500</span>
<div className="flex items-center justify-end gap-1 text-emerald-escrow font-label-sm text-label-sm">
<Icon name="verified_user" className="text-[12px]" />
<span>In Escrow</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest/80 rounded-lg p-2 flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface truncate">1x SoundCore Space One ANC (Jet Black)</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-amber-warning/15 text-amber-warning font-semibold flex-shrink-0 ml-2">
          Ready for Boda
        </span>
</div>

<div className="flex items-center justify-between gap-2 pt-1">
<div className="flex items-center gap-1.5 text-on-surface-variant font-label-sm text-label-sm">
<Icon name="moped" className="text-[16px] text-amber-warning" />
<span>Awaiting Courier</span>
</div>
<button className="h-10 px-4 rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-md text-label-md flex items-center gap-1.5 shadow-[0_4px_14px_rgba(218,55,0,0.35)] active:scale-95 transition-all" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}>
<Icon name="two_wheeler" className="text-[18px]" />
<span>Assign Rider</span>
</button>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md shadow-sm space-y-3">
<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-container-dark-high flex items-center justify-center text-secondary">
<Icon name="bolt" className="text-[18px]" />
</div>
<div>
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface font-bold">#SC-ORD-9402</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-airtel-red/20 text-error font-bold">Airtel Money</span>
</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              Sarah Namatovu • <span className="font-mono text-on-surface-variant">07•• ••• 449</span>
</div>
</div>
</div>
<div className="text-right">
<span className="font-label-lg text-label-lg text-on-surface font-bold">UGX 330,000</span>
<div className="flex items-center justify-end gap-1 text-emerald-escrow font-label-sm text-label-sm">
<Icon name="verified_user" className="text-[12px]" />
<span>In Escrow</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest/80 rounded-lg p-2 flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface truncate">2x Anker 65W GaN Fast Charger Pod</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-tertiary-container/30 text-tertiary font-semibold flex-shrink-0 ml-2">
          Packing Complete
        </span>
</div>

<div className="flex items-center justify-between gap-2 pt-1">
<div className="flex items-center gap-1.5 text-on-surface-variant font-label-sm text-label-sm">
<Icon name="check_box" className="text-[16px] text-tertiary" />
<span>Boxed • Hub Nakasero</span>
</div>
<button className="h-10 px-3.5 rounded-xl bg-container-dark-high hover:bg-surface-bright text-on-surface font-label-md text-label-md flex items-center gap-1.5 active:scale-95 transition-all" onClick={() => alertToast('Action triggered')}>
<Icon name="print" className="text-[18px]" />
<span>Print Label</span>
</button>
</div>
</div>
</div>

<div className="px-margin">
<div className="bg-surface-container-low rounded-xl p-space-md shadow-sm space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary">
<Icon name="schedule_send" className="text-[18px]" />
</div>
<div>
<span className="font-label-md text-label-md text-on-surface font-bold block">Next Auto-Payout</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Automated Daily Settlement</span>
</div>
</div>
<div className="px-2 py-0.5 rounded bg-tertiary/10 text-tertiary font-label-sm text-label-sm font-bold">
          Tomorrow 10:00 EAT
        </div>
</div>

<div className="bg-surface-container-lowest rounded-lg p-2.5 flex items-center justify-between">
<div className="flex items-center gap-2 min-w-0">
<div className="w-6 h-6 rounded-md bg-mtn-yellow text-container-dark-low font-bold flex items-center justify-center text-[10px]">
            MTN
          </div>
<div className="truncate">
<span className="font-label-md text-label-md text-on-surface font-bold block truncate">MTN Mobile Money Merchant</span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-mono">+256 772 ••• 819</span>
</div>
</div>
<div className="text-right flex-shrink-0">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Scheduled</span>
<span className="font-label-md text-label-md text-tertiary font-bold">UGX 8,450,000</span>
</div>
</div>

<div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm px-1">
<Icon name="shield" className="text-[14px] text-emerald-escrow" />
<span>Guaranteed via SwiftCart Escrow Settlement Protocol</span>
</div>
</div>
</div>
</div>
</main>
<nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_-6px_24px_rgba(0,0,0,0.60)]" data-active-classes="text-primary-container font-label-md"><div className="h-16 px-gutter flex items-center justify-around"><a aria-current="page" className="flex flex-col items-center justify-center w-16 h-12 text-primary-container font-label-md" data-path="manifest-runs" href="#" onClick={() => alertToast('Action triggered')}><Icon name="local_shipping" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight mt-0.5">Manifest</span></a><a className="flex flex-col items-center justify-center w-16 h-12 text-on-surface-variant hover:text-on-surface" data-path="hub-scanner" href="#" onClick={() => alertToast('Action triggered')}><Icon name="barcode_scanner" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight mt-0.5">Scanner</span></a><a className="flex flex-col items-center justify-center w-16 h-12 text-on-surface-variant hover:text-on-surface" data-path="escrow-ledger" href="#" onClick={() => alertToast('Action triggered')}><Icon name="verified_user" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight mt-0.5">Escrow</span></a><a className="flex flex-col items-center justify-center w-16 h-12 text-on-surface-variant hover:text-on-surface" data-path="fleet-dispatch" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}><Icon name="two_wheeler" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight mt-0.5">Fleet</span></a><a className="flex flex-col items-center justify-center w-16 h-12 text-on-surface-variant hover:text-on-surface" data-path="profile-ops" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><Icon name="manage_accounts" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight mt-0.5">Profile</span></a></div></nav>
    </div>
  );
};

export default Screen;
