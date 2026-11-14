// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/seller/store_profile_swiftcart_seller/code.html
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
      <header className="fixed top-0 inset-x-0 z-40 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-gutter flex items-center justify-between gap-space-xs"><div className="flex items-center gap-space-xs"><button aria-label="Open seller menu" className="w-12 h-12 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all" id="drawer-trigger" onClick={() => alertToast('Action triggered')}><Icon name="menu" className="text-[24px]" /></button><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/swiftcart-logo-icon.png" /><span className="font-label-lg text-label-lg font-bold text-on-surface truncate hidden min-[360px]:inline">SwiftCart Seller</span></div><div className="flex items-center gap-space-xs"><button aria-label="Quick Search" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all" onClick={() => alertToast('Action triggered')}><Icon name="search" className="text-[22px]" /></button><button aria-label="Notifications" className="relative w-11 h-11 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[22px]" /><span className="absolute top-2 right-2 min-w-[16px] h-4 px-1 rounded-full bg-primary-container text-on-primary font-label-sm text-[10px] leading-tight flex items-center justify-center font-bold">3</span></button><button aria-label="Toggle Light and Dark Mode" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-[20px] dark:hidden" /><Icon name="light_mode" className="text-[20px] hidden dark:inline" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-space-xs shrink-0"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<div className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300" id="drawer-backdrop"></div>
<aside className="fixed top-0 bottom-0 left-0 z-50 w-[310px] max-w-[85vw] bg-surface-container-lowest text-on-surface shadow-[0_16px_36px_-6px_rgba(15,23,42,0.18)] -translate-x-full flex flex-col pt-safe pb-safe overflow-hidden" id="seller-drawer"><div className="p-gutter flex items-start justify-between bg-surface-container-low"><div className="flex items-center gap-space-sm"><img alt="SwiftCart" className="h-9 w-auto object-contain" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col"><span className="font-label-lg text-label-lg font-bold text-on-surface leading-tight">Kikuubo Sound &amp; Gadgets Hub</span><div className="flex items-center gap-1 mt-0.5"><span className="w-2 h-2 rounded-full bg-tertiary-container inline-block"></span><span className="font-label-sm text-label-sm text-tertiary font-bold tracking-tight uppercase">Verified Seller</span><span className="font-label-sm text-label-sm text-on-secondary-container font-semibold ml-1">• UGX</span></div></div></div><button aria-label="Close Menu" className="w-11 h-11 -mr-2 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container active:scale-95" onClick={() => alertToast('Action triggered')}><Icon name="close" className="text-[22px]" /></button></div><div className="flex-1 overflow-y-auto px-gutter py-space-md space-y-space-md"><div className="space-y-space-xs"><span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary px-space-xs">Operations</span><nav className="space-y-1" data-active-classes="bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold shadow-md"><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="overview" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}><Icon name="grid_view" className="text-[20px]" /><span>Overview</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><Icon name="local_mall" className="text-[20px]" /><span>Orders</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="riders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}><Icon name="two_wheeler" className="text-[20px]" /><span>Riders</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="returns-and-disputes" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}><Icon name="assignment_return" className="text-[20px]" /><span>Returns &amp; Disputes</span></a></nav></div><div className="space-y-space-xs"><span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary px-space-xs">Catalog</span><nav className="space-y-1" data-active-classes="bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold shadow-md"><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="products" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}><Icon name="inventory_2" className="text-[20px]" /><span>Products</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="discounts-and-ads" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}><Icon name="campaign" className="text-[20px]" /><span>Discounts &amp; Ads</span></a></nav></div><div className="space-y-space-xs"><span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary px-space-xs">Financials</span><nav className="space-y-1" data-active-classes="bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold shadow-md"><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="wallet-and-payouts" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}><Icon name="account_balance_wallet" className="text-[20px]" /><span>Wallet &amp; Payouts</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="analytics" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}><Icon name="monitoring" className="text-[20px]" /><span>Analytics</span></a></nav></div><div className="space-y-space-xs"><span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary px-space-xs">Store</span><nav className="space-y-1" data-active-classes="bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold shadow-md"><a aria-current="page" className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg transition-colors bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold shadow-md" data-path="store-profile" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><Icon name="storefront" className="text-[20px]" /><span>Store Profile</span></a></nav></div></div><div className="p-gutter bg-surface-container-low space-y-space-xs"><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" data-path="help-and-support" href="#" onClick={() => alertToast('Action triggered')}><Icon name="support_agent" className="text-[20px]" /><span>Help &amp; Support</span></a><button className="w-full flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-error hover:bg-error-container/20 font-label-md text-label-md transition-colors" onClick={() => alertToast('Action triggered')}><Icon name="logout" className="text-[20px]" /><span>Log Out</span></button></div></aside>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-20 bg-surface"><div className="flex flex-col w-full pb-8">

<div className="relative w-full">

<div className="relative w-full h-44 overflow-hidden bg-surface-container-low">
<div className="w-full h-full bg-cover bg-center" data-alt="An energetic Ugandan electronics market showroom in Kampala with warm ambient studio lighting, neatly stacked audio gear, premium headphone boxes, and glowing neon retail display shelves in vivid deep navy and burnt amber hues." style={{"backgroundImage":"url('/images/7a36852cccaa2f96.webp')"}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>

<button aria-label="Update Store Cover Banner" className="absolute top-3 right-3 h-9 px-3 rounded-full bg-inverse-surface/75 text-inverse-on-surface backdrop-blur-md flex items-center gap-1.5 shadow-md active:scale-95 transition-transform" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}>
<Icon name="photo_camera" className="text-[18px]" />
<span className="font-label-sm text-label-sm">Edit Cover</span>
</button>
</div>

<div className="px-gutter -mt-11 flex flex-col relative z-10">
<div className="flex items-end justify-between">
<div className="relative">
<div className="w-20 h-20 rounded-xl bg-surface-container-lowest shadow-md p-1 flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover rounded-lg" data-alt="Modern professional brand emblem for Kikuubo Sound & Gadgets Hub featuring stylized geometric soundwave bars combined with an electric copper lightning bolt inside a clean minimal tech seal." src={`${assetBase}/images/7f8af0b466b70ff2.webp`} />
</div>
<button aria-label="Change Store Avatar" className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-md active:scale-90 transition-transform" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}>
<Icon name="add_a_photo" className="text-[16px]" />
</button>
</div>
<div className="flex items-center gap-2 mb-1">
<span className="px-2.5 py-1 rounded-full bg-tertiary/15 text-tertiary font-label-sm text-label-sm flex items-center gap-1 font-bold">
<Icon name="verified" className="text-[14px]" />
            Verified Store
          </span>
<button className="h-8 px-3 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-sm text-label-sm flex items-center gap-1" onClick={() => alertToast('Action triggered')}>
<Icon name="visibility" className="text-[16px]" />
<span>View Public</span>
</button>
</div>
</div>

<div className="mt-3">
<div className="flex items-center gap-1.5 flex-wrap">
<h1 className="font-headline-sm text-headline-sm text-on-surface font-extrabold tracking-tight">Kikuubo Sound &amp; Gadgets Hub</h1>
</div>
<div className="flex items-center gap-2 mt-0.5 text-on-surface-variant font-label-sm text-label-sm">
<span className="font-semibold text-primary">#VND-8821</span>
<span>•</span>
<span>Kampala City Center</span>
<span>•</span>
<span className="flex items-center text-tertiary gap-0.5 font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
            Open Now
          </span>
</div>
</div>
</div>
</div>
<div className="px-gutter mt-4 space-y-4">

<div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm flex flex-col gap-3.5">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2 text-on-surface">
<Icon name="storefront" className="text-[20px] text-primary" />
<span className="font-label-lg text-label-lg font-bold">Store Profile</span>
</div>
<button className="text-primary font-label-md text-label-md font-semibold flex items-center gap-0.5 hover:underline" onClick={() => alertToast('Action triggered')}>
<span>Edit</span>
<Icon name="edit" className="text-[16px]" />
</button>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
        Specialized in premium audio, certified GaN chargers &amp; mobile accessories. Authentic warranty backed. Direct wholesale importer serving Uganda and East Africa.
      </p>
<div className="bg-surface-container-low rounded-lg p-3 space-y-2.5">

<div className="flex items-start gap-2.5">
<Icon name="schedule" className="text-[18px] text-secondary mt-0.5" />
<div className="flex flex-col text-on-surface">
<span className="font-label-md text-label-md font-bold">Business Hours</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Mon – Sat: 8:00 AM – 7:00 PM (EAT)</span>
<span className="font-label-sm text-label-sm text-on-secondary-container">Sundays: Bulk Order Dispatch Only</span>
</div>
</div>

<div className="flex items-start gap-2.5 pt-1">
<Icon name="location_on" className="text-[18px] text-primary mt-0.5" />
<div className="flex flex-col text-on-surface flex-1 min-w-0">
<span className="font-label-md text-label-md font-bold">Physical Pickup Location</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Shop B-14, Equatorial Commercial Mall, Kikuubo Lane, Kampala Central</span>
<div className="mt-2.5 rounded-lg overflow-hidden shadow-sm relative h-28 w-full">
<div className="w-full h-full bg-cover bg-center" data-location="Equatorial Commercial Mall, Kikuubo Lane, Kampala, Uganda" style={{"backgroundImage":"url('/images/b09e073ff3f3cd86.webp')"}}></div>
<div className="absolute inset-0 bg-inverse-surface/10 pointer-events-none"></div>
<a className="absolute bottom-2 right-2 px-2.5 py-1 rounded bg-surface-container-lowest/90 text-on-surface font-label-sm text-label-sm flex items-center gap-1 shadow backdrop-blur-sm" href="https://maps.google.com" target="_blank" onClick={() => alertToast('Action triggered')}>
<Icon name="directions" className="text-[14px] text-primary" />
<span>Get Directions</span>
</a>
</div>
</div>
</div>
</div>

<div className="pt-1">
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider block mb-2">Connected Channels</span>
<div className="grid grid-cols-3 gap-2">
<a className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface text-center" href="tel:+256772000000" onClick={() => alertToast('Action triggered')}>
<Icon name="chat" className="text-[18px] text-tertiary" />
<span className="font-label-sm text-label-sm font-semibold truncate">WhatsApp</span>
</a>
<a className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface text-center" href="mailto:orders@kikuubosound.ug" onClick={() => alertToast('Action triggered')}>
<Icon name="mail" className="text-[18px] text-primary" />
<span className="font-label-sm text-label-sm font-semibold truncate">Email</span>
</a>
<a className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface text-center" href="https://x.com" target="_blank" onClick={() => alertToast('Action triggered')}>
<Icon name="alternate_email" className="text-[18px] text-secondary" />
<span className="font-label-sm text-label-sm font-semibold truncate">Twitter/X</span>
</a>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-tertiary/15 text-tertiary flex items-center justify-center">
<Icon name="shield" className="text-[20px]" />
</div>
<div>
<h2 className="font-label-lg text-label-lg font-bold text-on-surface">KYC &amp; Legal Compliance</h2>
<p className="font-label-sm text-label-sm text-secondary">Verified Merchant Registration</p>
</div>
</div>
<span className="px-2.5 py-1 rounded-full bg-tertiary text-on-tertiary font-label-sm text-label-sm font-bold shadow-sm">
          Tier 2 Active
        </span>
</div>

<div className="bg-gradient-to-r from-tertiary-container/20 to-surface-container-low rounded-lg p-3 flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Daily MoMo Withdrawal Cap</span>
<span className="font-headline-sm text-headline-sm text-tertiary font-extrabold tracking-tight">UGX 20,000,000</span>
</div>
<div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center shadow-sm">
<Icon name="payments" className="text-tertiary text-[22px]" />
</div>
</div>

<div className="space-y-2">
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">Verified Legal Records</span>

<div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low">
<div className="flex items-center gap-2.5 min-w-0">
<div className="w-7 h-7 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shrink-0">
<Icon name="check" className="text-[16px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md font-bold text-on-surface truncate">URSB Business Registration</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Cert #B-99214X • Validated</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-semibold shrink-0">Compliant</span>
</div>

<div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low">
<div className="flex items-center gap-2.5 min-w-0">
<div className="w-7 h-7 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shrink-0">
<Icon name="check" className="text-[16px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md font-bold text-on-surface truncate">Uganda Revenue Authority TIN</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">TIN: 1009482110 • Active Withholding</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-semibold shrink-0">Compliant</span>
</div>

<div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low">
<div className="flex items-center gap-2.5 min-w-0">
<div className="w-7 h-7 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shrink-0">
<Icon name="check" className="text-[16px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md font-bold text-on-surface truncate">Director National ID (NIRA)</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">NIN: CM88102840•••• • Biometrics Passed</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-semibold shrink-0">Compliant</span>
</div>
</div>

<div className="p-3 rounded-lg bg-secondary-container/40 flex flex-col gap-2.5">
<div className="flex items-start gap-2">
<Icon name="upgrade" className="text-[20px] text-primary mt-0.5" />
<div>
<span className="font-label-md text-label-md font-bold text-on-surface">Tier 3 Corporate Merchant Upgrade</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              Unlock unlimited daily SwiftCart settlement limits, bank escrow integration, and priority cross-border transit logistics.
            </p>
</div>
</div>
<button className="w-full h-10 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-bold flex items-center justify-center gap-2 shadow-sm active:scale-98 transition-transform" id="upgrade-trigger-btn" onClick={() => alertToast('Action triggered')}>
<Icon name="cloud_upload" className="text-[18px]" />
<span>Submit Tier 3 Corporate Dossier</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm flex flex-col gap-3.5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-on-surface">
<Icon name="account_balance_wallet" className="text-[20px] text-primary" />
<h2 className="font-label-lg text-label-lg font-bold">Payout Accounts</h2>
</div>
<button className="font-label-sm text-label-sm text-primary font-bold flex items-center gap-1 hover:underline" onClick={() => alertToast('Action triggered')}>
<Icon name="add" className="text-[16px]" />
<span>Add Account</span>
</button>
</div>
<div className="space-y-2.5">

<div className="p-3 rounded-lg bg-surface-container-low flex flex-col gap-2">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-700 flex items-center justify-center font-extrabold text-[12px] shrink-0">
                MTN
              </div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md font-bold text-on-surface">MTN Mobile Money</span>
<span className="px-1.5 py-0.5 rounded bg-tertiary-container/30 text-on-tertiary-container font-label-sm text-[10px] font-bold">Default</span>
</div>
<span className="font-body-md text-body-md text-on-surface font-semibold">+256 772 ••• 419</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Reg Name: Kikuubo Gadgets Ltd</span>
</div>
</div>
<div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm font-bold">
<Icon name="check_circle" className="text-[16px]" />
<span>Active</span>
</div>
</div>
<div className="flex items-center justify-end gap-3 pt-1 border-t-0">
<button className="font-label-sm text-label-sm text-primary font-semibold" onClick={() => alertToast('Action triggered')}>Test Small Transfer</button>
<span className="text-secondary">•</span>
<button className="font-label-sm text-label-sm text-secondary font-semibold" onClick={() => alertToast('Action triggered')}>Manage</button>
</div>
</div>

<div className="p-3 rounded-lg bg-surface-container-low flex flex-col gap-2">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-red-500/15 text-red-600 flex items-center justify-center font-extrabold text-[12px] shrink-0">
                AIRTEL
              </div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md font-bold text-on-surface">Airtel Money</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container text-secondary font-label-sm text-[10px] font-medium">Backup</span>
</div>
<span className="font-body-md text-body-md text-on-surface font-semibold">+256 701 ••• 882</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Reg Name: Kikuubo Gadgets Ltd</span>
</div>
</div>
<div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm font-bold">
<Icon name="verified" className="text-[16px]" />
<span>Verified</span>
</div>
</div>
<div className="flex items-center justify-end gap-3 pt-1 border-t-0">
<button className="font-label-sm text-label-sm text-primary font-semibold" onClick={() => alertToast('Action triggered')}>Make Default</button>
<span className="text-secondary">•</span>
<button className="font-label-sm text-label-sm text-secondary font-semibold" onClick={() => alertToast('Action triggered')}>Manage</button>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm flex flex-col gap-3.5">
<div className="flex items-center gap-2 text-on-surface">
<Icon name="notifications_active" className="text-[20px] text-primary" />
<h2 className="font-label-lg text-label-lg font-bold">Operational Notifications</h2>
</div>
<div className="space-y-3">

<div className="flex items-center justify-between">
<div className="flex flex-col pr-3">
<span className="font-label-md text-label-md font-bold text-on-surface">Instant SMS Order Alerts</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Real-time SMS ping when a customer places an order</span>
</div>
<button aria-checked="true" className="w-12 h-6 rounded-full bg-primary-container relative p-0.5 transition-colors focus:outline-none shrink-0" role="switch" onClick={() => alertToast('Action triggered')}>
<div className="w-5 h-5 rounded-full bg-on-primary shadow-sm transform translate-x-6 transition-transform"></div>
</button>
</div>

<div className="flex items-center justify-between">
<div className="flex flex-col pr-3">
<span className="font-label-md text-label-md font-bold text-on-surface">WhatsApp Dispatch Bot</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Receive boda boda courier arrival codes and delivery pins</span>
</div>
<button aria-checked="true" className="w-12 h-6 rounded-full bg-primary-container relative p-0.5 transition-colors focus:outline-none shrink-0" role="switch" onClick={() => alertToast('Action triggered')}>
<div className="w-5 h-5 rounded-full bg-on-primary shadow-sm transform translate-x-6 transition-transform"></div>
</button>
</div>

<div className="flex items-center justify-between">
<div className="flex flex-col pr-3">
<span className="font-label-md text-label-md font-bold text-on-surface">Daily Financial Statements</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Consolidated 11:59 PM PDF breakdown emailed automatically</span>
</div>
<button aria-checked="true" className="w-12 h-6 rounded-full bg-primary-container relative p-0.5 transition-colors focus:outline-none shrink-0" role="switch" onClick={() => alertToast('Action triggered')}>
<div className="w-5 h-5 rounded-full bg-on-primary shadow-sm transform translate-x-6 transition-transform"></div>
</button>
</div>
</div>
</div>

<div className="pt-2 flex flex-col gap-2">
<button className="w-full h-12 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-md active:scale-98 transition-transform" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}>
<Icon name="save" className="text-[20px]" />
<span>Save Profile Configuration</span>
</button>
<div className="flex items-center justify-between px-2 pt-2 text-on-surface-variant font-label-sm text-label-sm">
<span>KYC Encryption: 256-bit SSL</span>
<span>URA Compliant Gateway 2025</span>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300 flex items-end justify-center" id="upgrade-modal">
<div className="w-full max-w-lg bg-surface-container-lowest rounded-t-2xl p-5 shadow-2xl flex flex-col gap-4 max-h-[751px] overflow-y-auto">
<div className="flex items-center justify-between pb-2">
<div className="flex items-center gap-2">
<Icon name="verified_user" className="text-[22px] text-primary" />
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Tier 3 Corporate Dossier</h3>
</div>
<button className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface" onClick={() => alertToast('Action triggered')}>
<Icon name="close" className="text-[18px]" />
</button>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
        Upload certified commercial documents to elevate daily payouts up to UGX 150,000,000. Verified within 24 business hours by SwiftCart Compliance team.
      </p>
<div className="space-y-3">

<div className="p-3 rounded-xl bg-surface-container-low flex flex-col gap-1.5">
<span className="font-label-md text-label-md font-bold text-on-surface">1. Memorandum &amp; Articles of Association</span>
<div className="flex items-center justify-between py-2 px-3 rounded-lg bg-surface-container text-on-surface-variant">
<span className="font-label-sm text-label-sm truncate">Select scanned PDF document...</span>
<button className="px-2.5 py-1 rounded bg-primary-container text-on-primary font-label-sm text-label-sm font-semibold" onClick={() => alertToast('Action triggered')}>Browse</button>
</div>
</div>

<div className="p-3 rounded-xl bg-surface-container-low flex flex-col gap-1.5">
<span className="font-label-md text-label-md font-bold text-on-surface">2. Official 6-Month Commercial Bank Statement</span>
<div className="flex items-center justify-between py-2 px-3 rounded-lg bg-surface-container text-on-surface-variant">
<span className="font-label-sm text-label-sm truncate">Stanbic / Centenary / Absa Uganda...</span>
<button className="px-2.5 py-1 rounded bg-primary-container text-on-primary font-label-sm text-label-sm font-semibold" onClick={() => alertToast('Action triggered')}>Browse</button>
</div>
</div>

<div className="p-3 rounded-xl bg-surface-container-low flex flex-col gap-1.5">
<span className="font-label-md text-label-md font-bold text-on-surface">3. Current Year KCCA Trading License</span>
<div className="flex items-center justify-between py-2 px-3 rounded-lg bg-surface-container text-on-surface-variant">
<span className="font-label-sm text-label-sm truncate">Upload PDF or High-Res JPG...</span>
<button className="px-2.5 py-1 rounded bg-primary-container text-on-primary font-label-sm text-label-sm font-semibold" onClick={() => alertToast('Action triggered')}>Browse</button>
</div>
</div>
</div>
<div className="pt-2 flex flex-col gap-2">
<button className="w-full h-11 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-bold flex items-center justify-center gap-2 shadow active:scale-98 transition-transform" onClick={() => alertToast('Action triggered')}>
<Icon name="send" className="text-[20px]" />
<span>Submit for Expedited Approval</span>
</button>
<button className="w-full h-10 rounded-lg text-secondary font-label-md text-label-md font-semibold text-center hover:bg-surface-container transition-colors" onClick={() => alertToast('Action triggered')}>
          Save as Draft &amp; Close
        </button>
</div>
</div>
</div>

<div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-inverse-surface text-inverse-on-surface font-label-md text-label-md shadow-xl opacity-0 pointer-events-none transition-all duration-300 flex items-center gap-2" id="toast-pill">
<Icon name="check_circle" className="text-[18px] text-tertiary-fixed" />
<span id="toast-text">Update saved</span>
</div>
</div>
</main>
<nav className="fixed bottom-0 inset-x-0 z-40 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.06)]" data-active-classes="text-primary font-bold"><div className="flex justify-around items-center h-16 px-space-xs"><a className="flex flex-col items-center justify-center gap-0.5 w-16 h-14 text-on-surface-variant hover:text-on-surface transition-colors" data-path="overview" href="#" onClick={() => alertToast('Action triggered')}><Icon name="grid_view" className="text-[22px]" /><span className="font-label-sm text-label-sm">Home</span></a><a className="flex flex-col items-center justify-center gap-0.5 w-16 h-14 text-on-surface-variant hover:text-on-surface transition-colors" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><Icon name="local_mall" className="text-[22px]" /><span className="font-label-sm text-label-sm">Orders</span></a><a className="flex flex-col items-center justify-center gap-0.5 w-16 h-14 text-on-surface-variant hover:text-on-surface transition-colors" data-path="products" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}><Icon name="inventory_2" className="text-[22px]" /><span className="font-label-sm text-label-sm">Catalog</span></a><a className="flex flex-col items-center justify-center gap-0.5 w-16 h-14 text-on-surface-variant hover:text-on-surface transition-colors" data-path="wallet-and-payouts" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}><Icon name="account_balance_wallet" className="text-[22px]" /><span className="font-label-sm text-label-sm">Payouts</span></a><a aria-current="page" className="flex flex-col items-center justify-center gap-0.5 w-16 h-14 transition-colors text-primary font-bold" data-path="store-profile" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><Icon name="storefront" className="text-[22px]" /><span className="font-label-sm text-label-sm">Store</span></a></div></nav>
    </div>
  );
};

export default Mobile;
