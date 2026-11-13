// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/buyer/buyer_account_profile_tablet/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';

export interface TabletProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Tablet: React.FC<TabletProps> = (props) => {
  const onNavigate = props.onNavigate;
  const onAction = props.onAction;
  const assetBase = import.meta.env.VITE_ASSET_BASE ?? '';
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-background font-body-md text-on-surface antialiased min-h-screen flex flex-col relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-28 w-full px-gutter-desktop flex flex-col justify-between py-space-xs"><div className="flex items-center justify-between gap-space-md h-14"><div className="flex items-center gap-space-md shrink-0"><a className="flex items-center gap-space-xs min-h-[48px] px-space-xs" data-path="home" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><span className="font-headline-sm text-headline-sm text-on-surface tracking-tight hidden sm:inline-block">SwiftCart</span></a><div className="hidden md:flex items-center gap-space-xs px-space-sm py-space-xs rounded-lg bg-surface-container-lowest min-h-[48px] shadow-[0_1px_4px_rgba(0,0,0,0.04)]"><Icon name="location_on" className="text-primary text-[20px]" /><div className="flex flex-col text-left"><span className="font-label-sm text-label-sm text-secondary uppercase">Deliver to</span><span className="font-label-md text-label-md text-on-surface font-semibold truncate max-w-[120px]">Kampala Central</span></div><Icon name="expand_more" className="text-secondary text-[16px]" /></div></div><div className="flex-1 max-w-xl mx-space-xs hidden sm:flex items-center min-h-[48px] rounded-lg bg-surface-container-lowest px-space-xs shadow-[0_1px_4px_rgba(0,0,0,0.04)]"><select className="bg-transparent text-secondary font-label-md text-label-md pr-space-xs pl-space-xs py-space-xs border-0 focus:outline-none focus:ring-0 cursor-pointer"><option>All Categories</option><option>Phones &amp; Tablets</option><option>Electronics</option><option>Fashion</option><option>Groceries</option></select><div className="w-px h-6 bg-surface-container mx-space-xs"></div><input className="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-secondary focus:outline-none px-space-xs" placeholder="Search products, merchants, brands in Uganda..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} /><button aria-label="Search" className="w-10 h-10 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shrink-0 hover:bg-primary transition-colors" type="button" onClick={() => alertToast('Action triggered')}><Icon name="search" className="text-[20px]" /></button></div><div className="flex items-center gap-space-sm shrink-0"><div className="hidden lg:flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm min-h-[48px]"><Icon name="bolt" className="text-tertiary text-[18px]" /><span>Kampala Same-Day Dispatch</span></div><a aria-label="Wishlist" className="relative flex items-center justify-center min-w-[48px] min-h-[48px] rounded-lg text-secondary hover:text-on-surface transition-colors" data-path="wishlist" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}><Icon name="favorite" className="text-[24px]" /><span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm flex items-center justify-center">4</span></a><a aria-label="Shopping Cart" className="relative flex items-center justify-center min-w-[48px] min-h-[48px] rounded-lg text-secondary hover:text-on-surface transition-colors" data-path="cart" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><Icon name="shopping_cart" className="text-[24px]" /><span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm flex items-center justify-center">3</span></a><div className="flex items-center gap-space-xs pl-space-xs"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div><span className="hidden md:inline-block font-label-md text-label-md text-on-surface font-semibold">Sarah</span></div></div></div><nav className="flex items-center gap-space-lg overflow-x-auto h-12 border-0" data-active-classes="text-primary font-bold border-b-2 border-primary-container"><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface whitespace-nowrap min-h-[48px] flex items-center px-space-xs transition-colors" data-path="super-deals" href="#" onClick={() => alertToast('Action triggered')}>Super Deals</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface whitespace-nowrap min-h-[48px] flex items-center px-space-xs transition-colors" data-path="phones-and-tablets" href="#" onClick={() => alertToast('Action triggered')}>Phones &amp; Tablets</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface whitespace-nowrap min-h-[48px] flex items-center px-space-xs transition-colors" data-path="electronics-and-audio" href="#" onClick={() => alertToast('Action triggered')}>Electronics &amp; Audio</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface whitespace-nowrap min-h-[48px] flex items-center px-space-xs transition-colors" data-path="fashion" href="#" onClick={() => alertToast('Action triggered')}>Fashion</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface whitespace-nowrap min-h-[48px] flex items-center px-space-xs transition-colors" data-path="home-and-living" href="#" onClick={() => alertToast('Action triggered')}>Home &amp; Living</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface whitespace-nowrap min-h-[48px] flex items-center px-space-xs transition-colors" data-path="groceries" href="#" onClick={() => alertToast('Action triggered')}>Groceries</a></nav></div></header><main className="w-full pt-28 bg-background flex-1"><div className="flex flex-col w-full px-gutter md:px-margin-desktop py-space-md">

<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-xs pb-space-md">
<div>
<div className="flex items-center gap-space-xs">
<span className="font-label-md text-label-md text-secondary">Account Hub</span>
<Icon name="chevron_right" className="text-[14px] text-secondary" />
<span className="font-label-md text-label-md text-primary font-bold">Settings &amp; Security</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-space-xs">My Account</h1>
</div>
<div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md">
<span>Welcome back,</span>
<span className="font-bold text-on-surface">Sarah Namubiru</span>
<span className="inline-block w-2 h-2 rounded-full bg-tertiary"></span>
<span className="text-tertiary font-bold text-label-sm">Active Session</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-space-md items-start">

<aside className="md:col-span-4 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm relative overflow-hidden">
<div className="absolute -right-6 -top-6 w-24 h-24 bg-primary-container/10 rounded-full blur-xl pointer-events-none"></div>
<div className="flex items-center gap-space-md">
<div className="relative shrink-0">
<div className="w-16 h-16 rounded-full overflow-hidden shadow-sm bg-surface-container-high flex items-center justify-center">
<img className="w-full h-full object-cover" data-alt="Close up professional portrait of a smiling young Ugandan woman in Kampala wearing an elegant terracotta scarf, natural warm lighting and soft blurred studio background" src={`${assetBase}/images/9f6824f89b3d752c.webp`} />
</div>
<div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-tertiary flex items-center justify-center text-on-tertiary shadow-sm" title="MTN Verified Account">
<Icon name="verified" className="text-[14px]" />
</div>
</div>
<div className="flex flex-col min-w-0">
<span className="font-headline-sm text-headline-sm text-on-surface truncate">Sarah Namubiru</span>
<div className="flex items-center gap-1 mt-0.5">
<span className="font-label-sm text-label-sm text-secondary font-medium">+256 772 ••• 456</span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#FFCC00]/20 text-[#6B5300]">MTN MoMo</span>
</div>
<div className="flex items-center gap-1 text-secondary mt-1">
<Icon name="location_on" className="text-[14px]" />
<span className="font-body-sm text-body-sm truncate">Kampala, Kololo</span>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-lg p-space-sm flex items-center justify-between mt-space-xs">
<div className="flex items-center gap-space-xs">
<Icon name="military_tech" className="text-[#B45309] text-[20px]" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-bold">Gold Buyer</span>
<span className="font-body-sm text-[11px] text-secondary leading-none">2,450 SwiftPoints</span>
</div>
</div>
<span className="font-label-sm text-label-sm font-bold text-primary-container px-2 py-0.5 rounded-full bg-primary-container/10">Top 5%</span>
</div>
</div>

<nav className="bg-surface-container-lowest rounded-xl p-space-xs shadow-sm flex flex-col gap-1">

<button className="w-full flex items-center justify-between p-space-sm rounded-lg bg-primary-container/10 text-primary font-label-lg text-label-lg min-h-[48px] text-left transition-colors relative" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/account'); }}>
<div className="flex items-center gap-space-sm">
<Icon name="manage_accounts" className="text-[20px]" />
<span>Personal Profile &amp; Security</span>
</div>
<div className="w-1.5 h-6 bg-primary-container rounded-full"></div>
</button>

<a className="w-full flex items-center justify-between p-space-sm rounded-lg hover:bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg min-h-[48px] transition-colors" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/orders'); }}>
<div className="flex items-center gap-space-sm">
<Icon name="local_mall" className="text-[20px] text-secondary" />
<span>My Orders &amp; Invoices</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm font-bold">2 active</span>
</a>

<a className="w-full flex items-center justify-between p-space-sm rounded-lg hover:bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg min-h-[48px] transition-colors" data-path="addresses" href="#" onClick={() => alertToast('Action triggered')}>
<div className="flex items-center gap-space-sm">
<Icon name="pin_drop" className="text-[20px] text-secondary" />
<span>Delivery Addresses</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-secondary font-label-sm text-label-sm font-semibold">2 saved</span>
</a>

<a className="w-full flex items-center justify-between p-space-sm rounded-lg hover:bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg min-h-[48px] transition-colors" data-path="payments" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/account'); }}>
<div className="flex items-center gap-space-sm">
<Icon name="account_balance_wallet" className="text-[20px] text-secondary" />
<span>Payment Methods &amp; MoMo</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-secondary font-label-sm text-label-sm">MTN &amp; Airtel</span>
</a>

<a className="w-full flex items-center justify-between p-space-sm rounded-lg hover:bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg min-h-[48px] transition-colors" data-path="vouchers" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/vouchers'); }}>
<div className="flex items-center gap-space-sm">
<Icon name="confirmation_number" className="text-[20px] text-secondary" />
<span>Vouchers &amp; SwiftPoints</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-primary-container/15 text-primary-container font-label-sm text-label-sm font-bold">UGX 35k</span>
</a>

<a className="w-full flex items-center justify-between p-space-sm rounded-lg hover:bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg min-h-[48px] transition-colors" data-path="stores" href="#" onClick={() => alertToast('Action triggered')}>
<div className="flex items-center gap-space-sm">
<Icon name="storefront" className="text-[20px] text-secondary" />
<span>Followed Stores</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-secondary font-label-sm text-label-sm">4</span>
</a>

<a className="w-full flex items-center justify-between p-space-sm rounded-lg hover:bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg min-h-[48px] transition-colors" data-path="disputes" href="#" onClick={() => alertToast('Action triggered')}>
<div className="flex items-center gap-space-sm">
<Icon name="gavel" className="text-[20px] text-secondary" />
<span>Disputes &amp; Escrow Claims</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold">1 active</span>
</a>

<a className="w-full flex items-center justify-between p-space-sm rounded-lg hover:bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg min-h-[48px] transition-colors" data-path="support" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}>
<div className="flex items-center gap-space-sm">
<Icon name="chat" className="text-[20px] text-tertiary" />
<span>Help Centre &amp; WhatsApp</span>
</div>
<Icon name="open_in_new" className="text-[16px] text-secondary" />
</a>
<div className="h-px bg-surface-container my-1"></div>

<button className="w-full flex items-center gap-space-sm p-space-sm rounded-lg hover:bg-error-container/40 text-error font-label-lg text-label-lg min-h-[48px] transition-colors text-left" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="logout" className="text-[20px]" />
<span>Sign Out</span>
</button>
</nav>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center shrink-0">
<Icon name="shield_person" className="text-tertiary text-[22px]" />
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-bold">Kampala Escrow Protection</span>
<span className="font-body-sm text-[11px] text-secondary">Funds protected until you test delivery</span>
</div>
</div>
</aside>

<section className="md:col-span-8 flex flex-col gap-space-md">

<div className="relative bg-gradient-to-r from-primary-container via-[#E64A19] to-primary text-on-primary rounded-xl p-space-md shadow-md overflow-hidden">
<div className="absolute -right-8 -bottom-8 w-40 h-40 bg-on-primary/10 rounded-full blur-2xl pointer-events-none"></div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md relative z-10">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-on-primary/20 backdrop-blur-sm flex items-center justify-center shrink-0">
<Icon name="stars" className="text-[28px] text-on-primary" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm tracking-wider uppercase opacity-90">SwiftPoints Balance</span>
<span className="px-1.5 py-0.2 rounded bg-on-primary/25 text-[10px] font-bold">Gold Tier</span>
</div>
<div className="font-price-display text-price-display leading-tight tracking-tight mt-0.5">2,450 pts</div>
<span className="font-body-sm text-body-sm opacity-95">Value: <strong className="font-semibold">UGX 24,500</strong> usable at checkout</span>
</div>
</div>
<button className="self-start sm:self-auto min-h-[48px] px-space-md rounded-lg bg-surface-container-lowest text-primary-container font-label-lg text-label-lg font-bold shadow-sm hover:bg-surface-container-low transition-colors flex items-center gap-1.5 whitespace-nowrap" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/vouchers'); }}>
<span>Redeem Points for Vouchers</span>
<Icon name="arrow_forward" className="text-[18px]" />
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="badge" className="text-primary text-[22px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Personal Information</h2>
</div>
<span className="font-label-sm text-label-sm text-secondary">Tap field to edit</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">

<div className="flex flex-col gap-1">
<label className="font-label-md text-label-md text-secondary" htmlFor="fullNameInput">Full Name</label>
<div className="flex items-center min-h-[48px] px-space-sm rounded-lg bg-surface-container-low text-on-surface focus-within:ring-2 focus-within:ring-primary-container transition-all">
<Icon name="person" className="text-[20px] text-secondary mr-2" />
<input className="w-full bg-transparent font-body-md text-body-md text-on-surface focus:outline-none" id="fullNameInput" type="text" value="Sarah Namubiru" />
<Icon name="edit" className="text-[18px] text-secondary cursor-pointer hover:text-on-surface" />
</div>
</div>

<div className="flex flex-col gap-1">
<div className="flex items-center justify-between">
<label className="font-label-md text-label-md text-secondary" htmlFor="emailInput">Email Address</label>
<span className="inline-flex items-center gap-0.5 text-tertiary font-label-sm text-label-sm font-bold">
<Icon name="check_circle" className="text-[14px]" /> Verified
              </span>
</div>
<div className="flex items-center min-h-[48px] px-space-sm rounded-lg bg-surface-container-low text-on-surface">
<Icon name="mail" className="text-[20px] text-secondary mr-2" />
<input className="w-full bg-transparent font-body-md text-body-md text-on-surface focus:outline-none cursor-default" id="emailInput" readOnly={true} type="email" value="sarah.namubiru@gmail.com" />
</div>
</div>

<div className="flex flex-col gap-1">
<div className="flex items-center justify-between">
<label className="font-label-md text-label-md text-secondary" htmlFor="phoneInput">Phone Number</label>
<span className="text-[11px] font-bold text-[#855B00] bg-[#FFD700]/25 px-1.5 py-0.2 rounded">Linked to MTN MoMo</span>
</div>
<div className="flex items-center min-h-[48px] px-space-sm rounded-lg bg-surface-container-low text-on-surface">
<Icon name="call" className="text-[20px] text-[#855B00] mr-2" />
<input className="w-full bg-transparent font-body-md text-body-md text-on-surface focus:outline-none" id="phoneInput" type="tel" value="+256 772 123 456" />
<Icon name="verified" className="text-[18px] text-tertiary" />
</div>
</div>

<div className="flex flex-col gap-1">
<label className="font-label-md text-label-md text-secondary" htmlFor="prefLanguageSelect">Preferred Language</label>
<div className="flex items-center min-h-[48px] px-space-sm rounded-lg bg-surface-container-low text-on-surface">
<Icon name="translate" className="text-[20px] text-secondary mr-2" />
<select className="w-full bg-transparent font-body-md text-body-md text-on-surface focus:outline-none cursor-pointer" id="prefLanguageSelect">
<option selected={true} value="en">English (Uganda)</option>
<option value="lg">Luganda</option>
<option value="sw">Kiswahili</option>
</select>
<Icon name="expand_more" className="text-[18px] text-secondary pointer-events-none" />
</div>
</div>

<div className="sm:col-span-2 flex flex-col gap-1">
<label className="font-label-md text-label-md text-secondary" htmlFor="districtSelect">Default Delivery District</label>
<div className="flex items-center min-h-[48px] px-space-sm rounded-lg bg-surface-container-low text-on-surface">
<Icon name="near_me" className="text-[20px] text-primary-container mr-2" />
<select className="w-full bg-transparent font-body-md text-body-md text-on-surface focus:outline-none cursor-pointer" id="districtSelect">
<option selected={true}>Kampala Central (Nakasero &amp; Kololo) - 1 Hr Boda Eligible</option>
<option>Kampala - Bugolobi &amp; Mbuya</option>
<option>Kampala - Ntinda, Naguru &amp; Kiwatule</option>
<option>Wakiso - Entebbe &amp; Kajjansi</option>
<option>Wakiso - Nansana &amp; Kira</option>
<option>Mukono Town &amp; Seeta</option>
</select>
<Icon name="expand_more" className="text-[18px] text-secondary pointer-events-none" />
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-md">
<div className="flex items-center gap-space-xs">
<Icon name="security" className="text-primary text-[22px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Security &amp; Kampala Delivery Pin</h2>
</div>
<div className="flex flex-col gap-space-sm">

<div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low min-h-[56px] gap-space-sm">
<div className="flex items-start sm:items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-tertiary-container/15 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
<Icon name="phonelink_lock" className="text-tertiary text-[20px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-label-lg text-label-lg text-on-surface font-semibold">2-Factor Authentication</span>
<span className="px-2 py-0.2 rounded bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm font-bold">Enabled</span>
</div>
<span className="font-body-sm text-body-sm text-secondary">SMS OTP sent to +256 772 ••• 456 on login</span>
</div>
</div>
<button className="font-label-md text-label-md text-primary font-bold hover:underline shrink-0 min-h-[44px] px-2 flex items-center" type="button" onClick={() => alertToast('Action triggered')}>Configure</button>
</div>

<div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low min-h-[64px] gap-space-sm">
<div className="flex items-start sm:items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-primary-container/15 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
<Icon name="pin" className="text-primary-container text-[20px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-label-lg text-label-lg text-on-surface font-semibold">6-Digit Delivery Release Code</span>
<span className="px-1.5 py-0.2 rounded bg-primary-container/20 text-primary-container font-label-sm text-label-sm font-bold">Anti-Fraud</span>
</div>
<span className="font-body-sm text-body-sm text-secondary">Always require SMS + App PIN verification before boda handover</span>
</div>
</div>

<label className="relative inline-flex items-center cursor-pointer shrink-0 min-h-[48px] px-1">
<input checked={true} className="sr-only peer" id="bodaPinToggle" type="checkbox" />
<div className="w-12 h-7 bg-secondary-fixed peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[12px] after:left-[7px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="notifications_active" className="text-primary text-[22px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Notification Preferences</h2>
</div>
<span className="font-label-sm text-label-sm text-secondary">Real-time alerts</span>
</div>
<div className="flex flex-col gap-space-xs">

<div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low min-h-[48px] gap-space-sm">
<div className="flex items-center gap-space-sm">
<Icon name="two_wheeler" className="text-primary-container text-[20px]" />
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface font-semibold">Order Status &amp; Live Boda Tracking SMS</span>
<span className="font-body-sm text-body-sm text-secondary">Receive real-time runner coordinates &amp; arrival warnings</span>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer shrink-0 min-h-[48px] px-1">
<input checked={true} className="sr-only peer" type="checkbox" />
<div className="w-11 h-6 bg-secondary-fixed rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[14px] after:left-[6px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>

<div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low min-h-[48px] gap-space-sm">
<div className="flex items-center gap-space-sm">
<Icon name="chat" className="text-tertiary text-[20px]" />
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface font-semibold">WhatsApp Delivery Updates</span>
<span className="font-body-sm text-body-sm text-secondary">Dispatch slip, digital receipt, and direct driver contact</span>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer shrink-0 min-h-[48px] px-1">
<input checked={true} className="sr-only peer" type="checkbox" />
<div className="w-11 h-6 bg-secondary-fixed rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[14px] after:left-[6px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-tertiary"></div>
</label>
</div>

<div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low min-h-[48px] gap-space-sm">
<div className="flex items-center gap-space-sm">
<Icon name="local_offer" className="text-secondary text-[20px]" />
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface font-semibold">Flash Deals &amp; Kampala Promotions</span>
<span className="font-body-sm text-body-sm text-secondary">Weekend super sales and daily merchant price drops</span>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer shrink-0 min-h-[48px] px-1">
<input className="sr-only peer" type="checkbox" />
<div className="w-11 h-6 bg-secondary-fixed rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[14px] after:left-[6px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-md flex flex-col sm:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-xs text-secondary text-body-sm font-body-sm">
<Icon name="lock" className="text-[18px] text-tertiary" />
<span>Changes are protected by 256-bit MTN Escrow standard</span>
</div>
<div className="flex items-center gap-space-sm w-full sm:w-auto">
<button className="flex-1 sm:flex-none min-h-[48px] px-space-md rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container font-label-lg text-label-lg transition-colors font-semibold" type="button" onClick={() => alertToast('Action triggered')}>
            Discard Changes
          </button>
<button className="flex-1 sm:flex-none min-h-[48px] px-space-lg rounded-lg bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg transition-all shadow-md active:scale-95 flex items-center justify-center gap-space-xs font-bold" id="saveProfileBtn" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="save" className="text-[20px]" />
<span>Save Changes</span>
</button>
</div>
</div>
</section>
</div>

<div className="fixed bottom-6 right-6 z-50 bg-inverse-surface text-inverse-on-surface px-space-md py-space-sm rounded-xl shadow-xl flex items-center gap-space-sm transition-all transform translate-y-24 opacity-0 pointer-events-none" id="saveToast">
<Icon name="task_alt" className="text-tertiary-fixed text-[24px]" />
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold">Account Updated</span>
<span className="font-body-sm text-body-sm text-surface-variant">Profile &amp; security preferences saved successfully.</span>
</div>
</div>

</div></main><footer className="w-full bg-surface-container-low shadow-[0_-1px_6px_rgba(0,0,0,0.03)] mt-auto"><div className="w-full px-gutter-desktop py-space-lg"><div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pb-space-lg"><div className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-lowest shadow-[0_1px_4px_rgba(0,0,0,0.04)] min-h-[48px]"><div className="w-10 h-10 rounded-full bg-tertiary-container/20 flex items-center justify-center shrink-0"><Icon name="verified_user" className="text-tertiary text-[22px]" /></div><div className="flex flex-col"><span className="font-label-lg text-label-lg text-on-surface font-bold">MTN &amp; Airtel MoMo Escrow</span><span className="font-body-sm text-body-sm text-secondary">Funds secured until 100% item inspection</span></div></div><div className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-lowest shadow-[0_1px_4px_rgba(0,0,0,0.04)] min-h-[48px]"><div className="w-10 h-10 rounded-full bg-primary-container/15 flex items-center justify-center shrink-0"><Icon name="two_wheeler" className="text-primary-container text-[22px]" /></div><div className="flex flex-col"><span className="font-label-lg text-label-lg text-on-surface font-bold">1-Hour Kampala Boda Dispatch</span><span className="font-body-sm text-body-sm text-secondary">Express city hub runner direct to your doorstep</span></div></div><div className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-lowest shadow-[0_1px_4px_rgba(0,0,0,0.04)] min-h-[48px]"><div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center shrink-0"><Icon name="assignment_return" className="text-secondary text-[22px]" /></div><div className="flex flex-col"><span className="font-label-lg text-label-lg text-on-surface font-bold">7-Day Free Hub Returns</span><span className="font-body-sm text-body-sm text-secondary">Drop off at Oasis Mall, Acacia, or Village Mall</span></div></div></div><div className="flex flex-wrap items-center justify-between gap-space-md pt-space-md"><div className="flex flex-wrap items-center gap-space-md"><a className="font-label-md text-label-md text-secondary hover:text-on-surface min-h-[48px] flex items-center transition-colors" data-path="terms-of-service" href="#" onClick={() => alertToast('Action triggered')}>Terms of Service</a><a className="font-label-md text-label-md text-secondary hover:text-on-surface min-h-[48px] flex items-center transition-colors" data-path="privacy-policy" href="#" onClick={() => alertToast('Action triggered')}>Privacy Policy</a><a className="font-label-md text-label-md text-secondary hover:text-on-surface min-h-[48px] flex items-center transition-colors" data-path="buyer-protection" href="#" onClick={() => alertToast('Action triggered')}>Buyer Protection</a><a className="font-label-md text-label-md text-secondary hover:text-on-surface min-h-[48px] flex items-center transition-colors" data-path="hub-locations" href="#" onClick={() => alertToast('Action triggered')}>Hub Locations</a><a className="font-label-md text-label-md text-primary font-bold hover:text-on-surface min-h-[48px] flex items-center transition-colors" data-path="sell-on-swiftcart" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>Sell on SwiftCart</a></div><p className="font-body-sm text-body-sm text-secondary">© 2025 SwiftCart Uganda Ltd. All rights reserved.</p></div></div></footer>
    </div>
  );
};

export default Tablet;
