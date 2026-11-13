// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/buyer/account_swiftcart_uganda/code.html
import React, { useState } from 'react';
import Icon from '../../../../components/shared/Icon';

export interface ScreenProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Screen: React.FC<ScreenProps> = (props) => {
  const onNavigate = props.onNavigate;
  const onAction = props.onAction;
  const assetBase = import.meta.env.VITE_ASSET_BASE ?? '';
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface flex flex-col antialiased selection:bg-primary-fixed selection:text-on-primary-fixed relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{width:100vw;margin:0;padding:0;}body{overscroll-behavior:none;}.pb-safe{padding-bottom:env(safe-area-inset-bottom,0px);}.pt-safe{padding-top:env(safe-area-inset-top,0px);}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}

    body {
      min-height: max(884px, 100dvh);
    }
  
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 px-margin flex items-center justify-between"><div className="flex items-center gap-space-sm"><div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF8A1F] to-primary-container flex items-center justify-center text-on-primary shadow-[0_4px_14px_rgba(218,55,0,0.30)]"><Icon name="local_mall" className="text-[20px]" /></div><div className="flex flex-col"><span className="font-label-sm text-label-sm uppercase tracking-wider text-primary">SwiftCart UG</span><h1 className="font-headline-sm text-headline-sm text-on-surface tracking-tight leading-none">Account</h1></div></div><div className="flex items-center gap-space-sm"><button aria-label="Notifications" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" onClick={() => alertToast('Action triggered')}><Icon name="notifications" className="text-[24px]" /></button><img alt="Profile" className="w-8 h-8 rounded-full object-cover" src={`${assetBase}/images/a0089007abbe614b.webp`} /></div></div></header><main className="flex flex-col relative w-full pt-16 pb-24 bg-surface min-h-screen"><div className="flex flex-col w-full pb-8">

<div className="fixed top-20 left-4 right-4 z-50 transform -translate-y-24 opacity-0 transition-all duration-300 pointer-events-none" id="toastNotification">
<div className="bg-inverse-surface text-inverse-on-surface px-space-lg py-space-md rounded-xl shadow-xl flex items-center justify-between mx-auto max-w-sm">
<div className="flex items-center gap-space-sm">
<Icon name="check_circle" className="text-tertiary-fixed text-[20px]" />
<span className="font-body-sm text-body-sm font-medium" id="toastMessage">Profile preference synced</span>
</div>
<span className="font-label-sm text-label-sm text-surface-variant uppercase tracking-wider">SwiftSync</span>
</div>
</div>
<div className="px-margin flex flex-col gap-space-md pt-space-sm">

<div className="flex items-center justify-between py-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface">My Account</span>
<span className="px-space-xs py-0.5 rounded-full bg-tertiary-container/10 text-tertiary font-label-sm text-label-sm">UG Premier</span>
</div>
<div className="flex items-center gap-space-xs">
<button aria-label="Account Settings" className="w-11 h-11 rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-center text-on-surface hover:text-primary-container active:scale-95 transition-all" id="btnSettings" onClick={(e) => { e.preventDefault(); onNavigate?.('/account'); }}>
<Icon name="settings" className="text-[22px]" />
</button>
<button aria-label="Notification Center" className="relative w-11 h-11 rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-center text-on-surface hover:text-primary-container active:scale-95 transition-all" id="btnAlerts" onClick={() => alertToast('Action triggered')}>
<Icon name="notifications_active" className="text-[22px]" />
<span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-primary-container ring-2 ring-surface-container-lowest"></span>
</button>
</div>
</div>

<div className="relative bg-surface-container-lowest rounded-xl p-space-lg shadow-sm overflow-hidden">

<div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-gradient-to-br from-primary-fixed to-secondary-fixed opacity-40 blur-2xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col gap-space-md">
<div className="flex items-start justify-between gap-space-md">
<div className="flex items-center gap-space-md min-w-0">
<div className="relative flex-shrink-0">
<img className="w-16 h-16 rounded-full object-cover shadow-sm ring-2 ring-primary-container/20" data-alt="A warm professional photographic portrait of Joshua Kato Mukasa, a 28-year-old Ugandan young professional smiling gently outdoors in Kampala sunshine, warm earthy tones, cinematic lighting, sharp detail, navy collared shirt." src={`${assetBase}/images/04b2c271120e7203.webp`} />
<span className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shadow-sm" title="Verified Ugandan Identity">
<Icon name="verified" className="text-[13px]" />
</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<h2 className="font-label-lg text-label-lg text-on-surface truncate">Joshua Kato Mukasa</h2>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">+256 772 345 678</span>
<div className="flex items-center gap-1.5 mt-1">
<Icon name="location_on" className="text-[14px] text-primary" />
<span className="font-label-sm text-label-sm text-on-surface-variant truncate">Kampala Central (Nakawa)</span>
</div>
</div>
</div>
<button className="flex-shrink-0 px-space-md py-space-xs rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface text-label-sm font-label-sm flex items-center gap-1 active:scale-95 transition-all" id="editProfileBtn" onClick={() => alertToast('Action triggered')}>
<Icon name="edit" className="text-[14px]" />
<span>Edit</span>
</button>
</div>

<div className="bg-surface-container-low rounded-lg px-space-md py-space-sm flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="gshield" className="text-tertiary text-[18px]" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-tertiary">Verified Buyer • Escrow Guarded</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] leading-tight">Funds held safely until parcel inspected</span>
</div>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant">Tier 2</span>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-space-xs">

<button className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col text-left active:scale-[0.98] transition-transform" onClick={(e) => { e.preventDefault(); onNavigate?.('/vouchers'); }}>
<div className="flex items-center justify-between w-full mb-1">
<Icon name="sell" className="text-[18px] text-primary-container" />
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Vouchers</span>
<span className="font-label-lg text-label-lg text-on-surface mt-0.5">3 Active</span>
<span className="font-body-sm text-body-sm text-tertiary text-[11px] font-semibold mt-0.5 truncate">UGX 35k off</span>
</button>

<button className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col text-left active:scale-[0.98] transition-transform" onClick={() => alertToast('Action triggered')}>
<div className="flex items-center justify-between w-full mb-1">
<Icon name="stars" className="text-[18px] text-[#FF8A1F]" />
<span className="font-label-sm text-label-sm text-on-surface-variant">Lvl 3</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Swift Points</span>
<span className="font-label-lg text-label-lg text-on-surface mt-0.5">420 pts</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] mt-0.5">≈ UGX 4,200</span>
</button>

<button className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col text-left active:scale-[0.98] transition-transform" onClick={(e) => { e.preventDefault(); onNavigate?.('/orders'); }}>
<div className="flex items-center justify-between w-full mb-1">
<Icon name="lock" className="text-[18px] text-tertiary" />
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Escrow</span>
<span className="font-label-lg text-label-lg text-on-surface mt-0.5">2 Orders</span>
<span className="font-body-sm text-body-sm text-tertiary text-[11px] font-semibold mt-0.5">Safe release</span>
</button>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg text-on-surface">My Orders</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">14 total</span>
</div>
<a className="font-label-sm text-label-sm text-primary-container flex items-center hover:underline" href="#all-orders" onClick={() => alertToast('Action triggered')}>
<span>View All</span>
<Icon name="chevron_right" className="text-[16px]" />
</a>
</div>

<div className="grid grid-cols-5 gap-1 pt-1">

<a className="flex flex-col items-center gap-1 group text-center" href="#to-pay" onClick={(e) => { e.preventDefault(); onNavigate?.('/account'); }}>
<div className="relative w-11 h-11 rounded-xl bg-surface-container-low group-hover:bg-primary-fixed flex items-center justify-center text-on-surface group-hover:text-primary transition-colors">
<Icon name="account_balance_wallet" className="text-[20px]" />
<span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm flex items-center justify-center shadow-sm">1</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">To Pay</span>
</a>

<a className="flex flex-col items-center gap-1 group text-center" href="#to-ship" onClick={() => alertToast('Action triggered')}>
<div className="relative w-11 h-11 rounded-xl bg-surface-container-low group-hover:bg-primary-fixed flex items-center justify-center text-on-surface group-hover:text-primary transition-colors">
<Icon name="inventory_2" className="text-[20px]" />
<span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm flex items-center justify-center shadow-sm">2</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">To Ship</span>
</a>

<a className="flex flex-col items-center gap-1 group text-center" href="#shipped" onClick={() => alertToast('Action triggered')}>
<div className="relative w-11 h-11 rounded-xl bg-primary-fixed/60 flex items-center justify-center text-primary-container shadow-sm ring-1 ring-primary-container/20">
<Icon name="moped" className="text-[20px]" />
<span className="absolute -top-1.5 -right-1.5 px-1 rounded-full bg-tertiary text-on-tertiary font-label-sm text-label-sm flex items-center justify-center shadow-sm">1</span>
</div>
<div className="flex flex-col items-center">
<span className="font-label-sm text-label-sm text-primary font-bold leading-tight">On boda</span>
</div>
</a>

<a className="flex flex-col items-center gap-1 group text-center" href="#to-review" onClick={() => alertToast('Action triggered')}>
<div className="relative w-11 h-11 rounded-xl bg-surface-container-low group-hover:bg-primary-fixed flex items-center justify-center text-on-surface group-hover:text-primary transition-colors">
<Icon name="rate_review" className="text-[20px]" />
<span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm flex items-center justify-center shadow-sm">3</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">To Review</span>
</a>

<a className="flex flex-col items-center gap-1 group text-center" href="#returns" onClick={() => alertToast('Action triggered')}>
<div className="relative w-11 h-11 rounded-xl bg-surface-container-low group-hover:bg-primary-fixed flex items-center justify-center text-on-surface group-hover:text-primary transition-colors">
<Icon name="assignment_return" className="text-[20px]" />
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">Refunds</span>
</a>
</div>

<div className="mt-space-xs rounded-xl bg-surface-container-low p-space-md flex items-center justify-between">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary-container flex-shrink-0 shadow-sm">
<Icon name="local_shipping" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1">
<span className="font-label-sm text-label-sm text-primary uppercase font-bold">Swift Express Dispatch</span>
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-ping"></span>
</div>
<p className="font-body-sm text-body-sm text-on-surface truncate">SoundCore Life Q30 is en-route with rider Medi K.</p>
</div>
</div>
<button className="px-space-md py-1.5 rounded-lg bg-gradient-to-r from-[#FF8A1F] to-primary-container text-on-primary font-label-sm text-label-sm flex-shrink-0 shadow-sm active:scale-95 transition-all" onClick={(e) => { e.preventDefault(); onNavigate?.('/order-tracking'); }}>
          Track
        </button>
</div>
</div>


<div className="flex flex-col gap-1.5">
<span className="px-space-xs font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Shopping Activity</span>
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">

<a className="h-14 px-space-lg flex items-center justify-between hover:bg-surface-container-low transition-colors" href="#order-history" onClick={(e) => { e.preventDefault(); onNavigate?.('/order-tracking'); }}>
<div className="flex items-center gap-space-md min-w-0">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant">
<Icon name="receipt_long" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-body-md text-body-md font-semibold text-on-surface">Order History &amp; Receipts</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Track past shipments and escrow releases</span>
</div>
</div>
<Icon name="chevron_right" className="text-on-surface-variant text-[20px]" />
</a>
<div className="h-px bg-surface-variant/40 mx-space-lg"></div>

<a className="h-14 px-space-lg flex items-center justify-between hover:bg-surface-container-low transition-colors" href="#wishlist" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}>
<div className="flex items-center gap-space-md min-w-0">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary-container">
<Icon name="favorite" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-body-md text-body-md font-semibold text-on-surface">Wishlist &amp; Saved Items</span>
<span className="px-1.5 py-0.2 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">2 Price Drops</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">8 items bookmarked for next pay day</span>
</div>
</div>
<Icon name="chevron_right" className="text-on-surface-variant text-[20px]" />
</a>
<div className="h-px bg-surface-variant/40 mx-space-lg"></div>

<a className="h-14 px-space-lg flex items-center justify-between hover:bg-surface-container-low transition-colors" href="#stores" onClick={() => alertToast('Action triggered')}>
<div className="flex items-center gap-space-md min-w-0">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant">
<Icon name="storefront" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-body-md text-body-md font-semibold text-on-surface">Followed Stores</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">SoundCore Official, Defacto, Anker UG</span>
</div>
</div>
<Icon name="chevron_right" className="text-on-surface-variant text-[20px]" />
</a>
<div className="h-px bg-surface-variant/40 mx-space-lg"></div>

<a className="h-14 px-space-lg flex items-center justify-between hover:bg-surface-container-low transition-colors" href="#promos" onClick={(e) => { e.preventDefault(); onNavigate?.('/vouchers'); }}>
<div className="flex items-center gap-space-md min-w-0">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary-container">
<Icon name="local_activity" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-body-md text-body-md font-semibold text-on-surface">Vouchers &amp; Platform Promos</span>
<span className="px-1.5 py-0.2 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">UGX 15k active</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Valid across electronics &amp; groceries</span>
</div>
</div>
<Icon name="chevron_right" className="text-on-surface-variant text-[20px]" />
</a>
<div className="h-px bg-surface-variant/40 mx-space-lg"></div>

<a className="h-14 px-space-lg flex items-center justify-between hover:bg-surface-container-low transition-colors" href="#messages" onClick={() => alertToast('Action triggered')}>
<div className="flex items-center gap-space-md min-w-0">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant">
<Icon name="chat" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-body-md text-body-md font-semibold text-on-surface">Messages &amp; Seller Chats</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">SoundCore: “Hello Joshua, parcel dispatched...”</span>
</div>
</div>
<div className="flex items-center gap-space-xs">
<span className="w-5 h-5 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm flex items-center justify-center">2</span>
<Icon name="chevron_right" className="text-on-surface-variant text-[20px]" />
</div>
</a>
</div>
</div>

<div className="flex flex-col gap-1.5">
<span className="px-space-xs font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Preferences &amp; Settings</span>
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">

<a className="h-14 px-space-lg flex items-center justify-between hover:bg-surface-container-low transition-colors" href="#addresses" onClick={() => alertToast('Action triggered')}>
<div className="flex items-center gap-space-md min-w-0">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant">
<Icon name="pin_drop" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-body-md text-body-md font-semibold text-on-surface">Delivery Addresses</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">Default</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Plot 14 Kira Rd, Nakawa, Kampala</span>
</div>
</div>
<Icon name="chevron_right" className="text-on-surface-variant text-[20px]" />
</a>
<div className="h-px bg-surface-variant/40 mx-space-lg"></div>

<a className="h-14 px-space-lg flex items-center justify-between hover:bg-surface-container-low transition-colors" href="#payment-methods" onClick={() => alertToast('Action triggered')}>
<div className="flex items-center gap-space-md min-w-0">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary-container">
<Icon name="payments" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-body-md text-body-md font-semibold text-on-surface">Payment Methods</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">MTN MoMo (+256 772...), Airtel, Visa</span>
</div>
</div>
<div className="flex items-center gap-1">
<span className="w-2.5 h-2.5 rounded-full bg-primary-container" title="MTN Linked"></span>
<Icon name="chevron_right" className="text-on-surface-variant text-[20px]" />
</div>
</a>
<div className="h-px bg-surface-variant/40 mx-space-lg"></div>

<div className="h-14 px-space-lg flex items-center justify-between">
<div className="flex items-center gap-space-md min-w-0">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant">
<Icon name="sms" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-body-md text-body-md font-semibold text-on-surface">Instant SMS &amp; App Alerts</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">OTP, Boda dispatch, escrow payouts</span>
</div>
</div>

<label className="relative inline-flex items-center cursor-pointer">
<input checked={true} className="sr-only peer" id="smsToggle" type="checkbox" />
<div className="w-11 h-6 bg-surface-variant rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-surface-container-lowest after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>
<div className="h-px bg-surface-variant/40 mx-space-lg"></div>

<button className="h-14 px-space-lg flex items-center justify-between text-left hover:bg-surface-container-low transition-colors w-full" id="regionBtn" onClick={() => alertToast('Action triggered')}>
<div className="flex items-center gap-space-md min-w-0">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant">
<Icon name="translate" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-body-md text-body-md font-semibold text-on-surface">Language &amp; Trade Hub</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">English • Kampala Central Hub</span>
</div>
</div>
<Icon name="tune" className="text-on-surface-variant text-[20px]" />
</button>
</div>
</div>

<div className="flex flex-col gap-1.5">
<span className="px-space-xs font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Merchant &amp; Trust Support</span>
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">

<a className="h-14 px-space-lg flex items-center justify-between hover:bg-surface-container-low transition-colors" href="https://wa.me/256700000000" target="_blank" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}>
<div className="flex items-center gap-space-md min-w-0">
<div className="w-8 h-8 rounded-lg bg-tertiary-fixed/40 flex items-center justify-center text-tertiary">
<Icon name="support_agent" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-body-md text-body-md font-semibold text-on-surface">Help Centre &amp; WhatsApp Desk</span>
<span className="px-1.5 py-0.2 rounded-full bg-tertiary text-on-tertiary font-label-sm text-label-sm">24/7 Live</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Escrow dispute &amp; instant boda check</span>
</div>
</div>
<Icon name="open_in_new" className="text-on-surface-variant text-[20px]" />
</a>
<div className="h-px bg-surface-variant/40 mx-space-lg"></div>

<a className="h-14 px-space-lg flex items-center justify-between hover:bg-surface-container-low transition-colors" href="#sell" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<div className="flex items-center gap-space-md min-w-0">
<div className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center text-primary-container">
<Icon name="campaign" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-body-md text-body-md font-semibold text-on-surface">Become a Verified Seller</span>
<span className="px-1.5 py-0.2 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm">Earn with SwiftCart</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Zero registration fee for Kampala traders</span>
</div>
</div>
<Icon name="arrow_forward" className="text-on-surface-variant text-[20px]" />
</a>
<div className="h-px bg-surface-variant/40 mx-space-lg"></div>

<a className="h-14 px-space-lg flex items-center justify-between hover:bg-surface-container-low transition-colors" href="#about" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<div className="flex items-center gap-space-md min-w-0">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant">
<Icon name="corporate_fare" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-body-md text-body-md font-semibold text-on-surface">About SwiftCart Uganda</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Regulated Escrow, Kampala Logistics Hub</span>
</div>
</div>
<Icon name="chevron_right" className="text-on-surface-variant text-[20px]" />
</a>
<div className="h-px bg-surface-variant/40 mx-space-lg"></div>

<a className="h-14 px-space-lg flex items-center justify-between hover:bg-surface-container-low transition-colors" href="#terms" onClick={() => alertToast('Action triggered')}>
<div className="flex items-center gap-space-md min-w-0">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant">
<Icon name="shield" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-body-md text-body-md font-semibold text-on-surface">Terms &amp; Escrow Protection Policy</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Consumer protection laws of Uganda</span>
</div>
</div>
<Icon name="chevron_right" className="text-on-surface-variant text-[20px]" />
</a>
</div>
</div>

<div className="pt-space-xs flex flex-col gap-space-sm">
<button className="h-12 w-full rounded-xl bg-surface-container-lowest text-error font-label-lg text-label-lg flex items-center justify-center gap-space-xs shadow-sm hover:bg-error-container/20 active:scale-[0.99] transition-all" id="logoutBtn" onClick={(e) => { e.preventDefault(); onNavigate?.('/account'); }}>
<Icon name="logout" className="text-[20px]" />
<span>Log Out of Account</span>
</button>
<div className="flex items-center justify-center gap-1.5 text-on-surface-variant">
<Icon name="lock_clock" className="text-[14px]" />
<span className="font-body-sm text-body-sm text-[11px]">SwiftCart UG App v4.8.2 • Nakawa HQ, Kampala</span>
</div>
</div>
</div>
</div>
</main><nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/85 backdrop-blur-xl shadow-[0_-4px_20px_rgba(14,27,77,0.06)]" data-active-classes="text-primary-container font-semibold"><div className="flex justify-around items-center h-16 px-space-xs"><a className="flex flex-col items-center justify-center w-16 h-12 text-on-surface-variant transition-colors" data-path="home" href="#" onClick={() => alertToast('Action triggered')}><Icon name="storefront" className="text-[24px]" /><span className="font-label-sm text-label-sm mt-space-xs">Home</span></a><a className="flex flex-col items-center justify-center w-16 h-12 text-on-surface-variant transition-colors" data-path="categories" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/categories'); }}><Icon name="grid_view" className="text-[24px]" /><span className="font-label-sm text-label-sm mt-space-xs">Categories</span></a><a className="relative flex flex-col items-center justify-center w-16 h-12 text-on-surface-variant transition-colors" data-path="cart" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><Icon name="shopping_bag" className="text-[24px]" /><span className="font-label-sm text-label-sm mt-space-xs">Cart</span></a><a className="flex flex-col items-center justify-center w-16 h-12 text-on-surface-variant transition-colors" data-path="wishlist" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}><Icon name="favorite" className="text-[24px]" /><span className="font-label-sm text-label-sm mt-space-xs">Wishlist</span></a><a aria-current="page" className="relative flex flex-col items-center justify-center w-16 h-12 transition-colors text-primary-container font-semibold" data-path="account" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/account'); }}><Icon name="person" className="text-[24px]" /><span className="font-label-sm text-label-sm mt-space-xs">Account</span><span className="absolute top-1 right-3 w-2 h-2 rounded-full bg-primary-container"></span></a></div></nav>
    </div>
  );
};

export default Screen;
