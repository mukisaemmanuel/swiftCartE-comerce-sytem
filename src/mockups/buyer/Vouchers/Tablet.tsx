// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/buyer/delivery_addresses_vouchers_tablet/code.html
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-28 w-full px-gutter-desktop flex flex-col justify-between py-space-xs"><div className="flex items-center justify-between gap-space-md h-14"><div className="flex items-center gap-space-md shrink-0"><a className="flex items-center gap-space-xs min-h-[48px] px-space-xs" data-path="home" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><span className="font-headline-sm text-headline-sm text-on-surface tracking-tight hidden sm:inline-block">SwiftCart</span></a><div className="hidden md:flex items-center gap-space-xs px-space-sm py-space-xs rounded-lg bg-surface-container-lowest min-h-[48px] shadow-[0_1px_4px_rgba(0,0,0,0.04)]"><Icon name="location_on" className="text-primary text-[20px]" /><div className="flex flex-col text-left"><span className="font-label-sm text-label-sm text-secondary uppercase">Deliver to</span><span className="font-label-md text-label-md text-on-surface font-semibold truncate max-w-[120px]">Kampala Central</span></div><Icon name="expand_more" className="text-secondary text-[16px]" /></div></div><div className="flex-1 max-w-xl mx-space-xs hidden sm:flex items-center min-h-[48px] rounded-lg bg-surface-container-lowest px-space-xs shadow-[0_1px_4px_rgba(0,0,0,0.04)]"><select className="bg-transparent text-secondary font-label-md text-label-md pr-space-xs pl-space-xs py-space-xs border-0 focus:outline-none focus:ring-0 cursor-pointer"><option>All Categories</option><option>Phones &amp; Tablets</option><option>Electronics</option><option>Fashion</option><option>Groceries</option></select><div className="w-px h-6 bg-surface-container mx-space-xs"></div><input className="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-secondary focus:outline-none px-space-xs" placeholder="Search products, merchants, brands in Uganda..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} /><button aria-label="Search" className="w-10 h-10 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shrink-0 hover:bg-primary transition-colors" type="button" onClick={() => alertToast('Action triggered')}><Icon name="search" className="text-[20px]" /></button></div><div className="flex items-center gap-space-sm shrink-0"><div className="hidden lg:flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm min-h-[48px]"><Icon name="bolt" className="text-tertiary text-[18px]" /><span>Kampala Same-Day Dispatch</span></div><a aria-label="Wishlist" className="relative flex items-center justify-center min-w-[48px] min-h-[48px] rounded-lg text-secondary hover:text-on-surface transition-colors" data-path="wishlist" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}><Icon name="favorite" className="text-[24px]" /><span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm flex items-center justify-center">4</span></a><a aria-label="Shopping Cart" className="relative flex items-center justify-center min-w-[48px] min-h-[48px] rounded-lg text-secondary hover:text-on-surface transition-colors" data-path="cart" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><Icon name="shopping_cart" className="text-[24px]" /><span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm flex items-center justify-center">3</span></a><div className="flex items-center gap-space-xs pl-space-xs"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div><span className="hidden md:inline-block font-label-md text-label-md text-on-surface font-semibold">Sarah</span></div></div></div><nav className="flex items-center gap-space-lg overflow-x-auto h-12 border-0" data-active-classes="text-primary font-bold border-b-2 border-primary-container"><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface whitespace-nowrap min-h-[48px] flex items-center px-space-xs transition-colors" data-path="super-deals" href="#" onClick={() => alertToast('Action triggered')}>Super Deals</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface whitespace-nowrap min-h-[48px] flex items-center px-space-xs transition-colors" data-path="phones-and-tablets" href="#" onClick={() => alertToast('Action triggered')}>Phones &amp; Tablets</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface whitespace-nowrap min-h-[48px] flex items-center px-space-xs transition-colors" data-path="electronics-and-audio" href="#" onClick={() => alertToast('Action triggered')}>Electronics &amp; Audio</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface whitespace-nowrap min-h-[48px] flex items-center px-space-xs transition-colors" data-path="fashion" href="#" onClick={() => alertToast('Action triggered')}>Fashion</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface whitespace-nowrap min-h-[48px] flex items-center px-space-xs transition-colors" data-path="home-and-living" href="#" onClick={() => alertToast('Action triggered')}>Home &amp; Living</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface whitespace-nowrap min-h-[48px] flex items-center px-space-xs transition-colors" data-path="groceries" href="#" onClick={() => alertToast('Action triggered')}>Groceries</a></nav></div></header><main className="w-full pt-28 bg-background flex-1"><div className="flex flex-col w-full">
<div className="w-full max-w-6xl mx-auto px-margin md:px-margin-desktop py-space-md">

<div className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-lg shadow-sm mb-space-lg">
<div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-primary-container/10 blur-2xl pointer-events-none"></div>
<div className="absolute right-24 top-2 w-24 h-24 rounded-full bg-tertiary-container/10 blur-xl pointer-events-none"></div>
<div className="relative flex flex-col md:flex-row md:items-center justify-between gap-space-sm z-10">
<div>
<div className="flex items-center gap-space-xs mb-1">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-highest text-secondary font-label-sm text-label-sm uppercase tracking-wide">
<Icon name="verified" className="text-[14px] text-primary" />
              Account Settings
            </span>
<span className="text-secondary font-body-sm text-body-sm">•</span>
<span className="font-label-sm text-label-sm text-tertiary font-semibold flex items-center gap-1">
<Icon name="bolt" className="text-[14px]" />
              Kampala Live Network
            </span>
</div>
<h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">Addresses &amp; Saved Vouchers</h1>
<p className="font-body-md text-body-md text-secondary mt-0.5">Manage your Kampala delivery locations and promotional savings</p>
</div>
<div className="flex items-center gap-space-sm self-start md:self-auto bg-surface-container-lowest px-space-md py-space-xs rounded-lg shadow-sm">
<div className="w-8 h-8 rounded-full bg-primary-container/15 flex items-center justify-center text-primary-container">
<Icon name="account_balance_wallet" className="text-[18px]" />
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase">SwiftPoints Balance</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">2,450 <span className="font-label-sm text-label-sm text-tertiary font-bold">PTS</span></span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<section className="lg:col-span-7 flex flex-col gap-space-md">

<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-xs">
<div className="w-7 h-7 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface">
<Icon name="location_on" className="text-[18px]" />
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Delivery Addresses</h2>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm">3 Saved</span>
</div>
<button className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm hover:bg-primary transition-all active:scale-[0.98]" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="add_location_alt" className="text-[18px]" />
<span>+ Add New Address</span>
</button>
</div>

<div className="relative bg-surface-container-lowest rounded-xl p-space-md shadow-md transition-shadow hover:shadow-lg">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-container rounded-l-xl"></div>
<div className="pl-space-xs flex flex-col gap-space-sm">

<div className="flex items-start justify-between gap-space-xs">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="px-2 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm font-extrabold uppercase tracking-wider">DEFAULT</span>
<span className="font-label-lg text-label-lg text-on-surface font-bold">Sarah Namubiru</span>
<span className="text-secondary font-body-sm text-body-sm">•</span>
<span className="font-body-md text-body-md text-secondary font-medium">+256 772 123 456</span>
</div>
<span className="inline-flex items-center gap-0.5 text-tertiary bg-tertiary-container/15 px-2 py-0.5 rounded-full font-label-sm text-label-sm shrink-0">
<Icon name="bolt" className="text-[14px]" />
                1-Hour Boda
              </span>
</div>

<div className="space-y-1">
<div className="flex items-start gap-1.5 text-on-surface font-label-lg text-label-lg">
<Icon name="home_pin" className="text-primary text-[18px] shrink-0 mt-0.5" />
<span>Plot 14 Acacia Avenue, Kololo <span className="text-secondary font-normal font-body-md text-body-md">(Opposite Acacia Mall Main Gate)</span></span>
</div>
<div className="flex items-center gap-2 pl-6">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold">Kampala Central</span>
<span className="font-body-sm text-body-sm text-secondary">Zone A Express Dispatch</span>
</div>
</div>

<div className="rounded-lg bg-surface-container-low p-space-sm flex items-start gap-space-xs">
<Icon name="sports_motorsports" className="text-secondary text-[18px] shrink-0 mt-0.5" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-tight">Rider Instructions</span>
<p className="font-body-sm text-body-sm text-on-surface">Leave with receptionist (Sylvia) at front desk if away. Security gate open 24/7.</p>
</div>
</div>

<div className="flex items-center justify-between pt-space-xs">
<div className="flex items-center gap-1.5 text-tertiary font-label-sm text-label-sm">
<Icon name="check_circle" className="text-[16px]" />
<span>Eligible for 1-Hour Boda Express Courier Delivery</span>
</div>

<div className="flex items-center gap-space-sm">
<button className="font-label-md text-label-md text-on-surface hover:text-primary font-bold transition-colors" type="button" onClick={() => alertToast('Action triggered')}>Edit</button>
<span className="text-surface-container-highest">•</span>
<button className="font-label-md text-label-md text-error hover:text-error/80 transition-colors" type="button" onClick={() => alertToast('Action triggered')}>Delete</button>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow">
<div className="flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-xs">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-secondary font-label-sm text-label-sm font-bold uppercase tracking-wider flex items-center gap-1">
<Icon name="apartment" className="text-[12px]" /> Work
                </span>
<span className="font-label-lg text-label-lg text-on-surface font-bold">Sarah Namubiru</span>
<span className="text-secondary font-body-sm text-body-sm">•</span>
<span className="font-body-md text-body-md text-secondary font-medium">+256 701 987 654</span>
</div>
<span className="inline-flex items-center gap-0.5 text-secondary bg-surface-container-high px-2 py-0.5 rounded-full font-label-sm text-label-sm shrink-0">
                Same-Day Hub
              </span>
</div>
<div className="space-y-1">
<div className="flex items-start gap-1.5 text-on-surface font-label-lg text-label-lg">
<Icon name="domain" className="text-secondary text-[18px] shrink-0 mt-0.5" />
<span>William Street Arcade, Level 3, Suite 4B</span>
</div>
<div className="flex items-center gap-2 pl-6">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">Kampala CBD</span>
<span className="font-body-sm text-body-sm text-secondary">Commercial District Hub</span>
</div>
</div>

<div className="flex items-center justify-between pt-space-xs mt-1">
<button className="inline-flex items-center gap-1 font-label-md text-label-md text-primary font-bold hover:underline" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="radio_button_unchecked" className="text-[16px]" />
                Set as Default
              </button>
<div className="flex items-center gap-space-sm">
<button className="font-label-md text-label-md text-on-surface hover:text-primary font-bold transition-colors" type="button" onClick={() => alertToast('Action triggered')}>Edit</button>
<span className="text-surface-container-highest">•</span>
<button className="font-label-md text-label-md text-error hover:text-error/80 transition-colors" type="button" onClick={() => alertToast('Action triggered')}>Delete</button>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow">
<div className="flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-xs">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-secondary font-label-sm text-label-sm font-bold uppercase tracking-wider flex items-center gap-1">
<Icon name="cottage" className="text-[12px]" /> Home
                </span>
<span className="font-label-lg text-label-lg text-on-surface font-bold">Dennis Mukasa</span>
<span className="text-secondary font-body-sm text-body-sm">•</span>
<span className="font-body-md text-body-md text-secondary font-medium">+256 782 555 123</span>
</div>
<span className="inline-flex items-center gap-0.5 text-secondary bg-surface-container-high px-2 py-0.5 rounded-full font-label-sm text-label-sm shrink-0">
                Standard Next-Day
              </span>
</div>
<div className="space-y-1">
<div className="flex items-start gap-1.5 text-on-surface font-label-lg text-label-lg">
<Icon name="location_on" className="text-secondary text-[18px] shrink-0 mt-0.5" />
<span>Entebbe Road near Lubowa Quality Supermarket</span>
</div>
<div className="flex items-center gap-2 pl-6">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">Wakiso &amp; Entebbe Corridor</span>
<span className="font-body-sm text-body-sm text-secondary">Route 3 Courier Drop</span>
</div>
</div>

<div className="flex items-center justify-between pt-space-xs mt-1">
<button className="inline-flex items-center gap-1 font-label-md text-label-md text-primary font-bold hover:underline" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="radio_button_unchecked" className="text-[16px]" />
                Set as Default
              </button>
<div className="flex items-center gap-space-sm">
<button className="font-label-md text-label-md text-on-surface hover:text-primary font-bold transition-colors" type="button" onClick={() => alertToast('Action triggered')}>Edit</button>
<span className="text-surface-container-highest">•</span>
<button className="font-label-md text-label-md text-error hover:text-error/80 transition-colors" type="button" onClick={() => alertToast('Action triggered')}>Delete</button>
</div>
</div>
</div>
</div>

<div className="rounded-xl bg-surface-container-low p-space-md flex items-center justify-between gap-space-md shadow-sm">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-primary-container/15 flex items-center justify-center text-primary-container shrink-0">
<Icon name="two_wheeler" className="text-[20px]" />
</div>
<div>
<div className="font-label-lg text-label-lg text-on-surface font-bold">Kampala City Boda Coverage</div>
<div className="font-body-sm text-body-sm text-secondary">Kololo, Nakasero, Kamwokya, CBD receive expedited delivery within 60 mins.</div>
</div>
</div>
<a className="px-space-md py-space-xs rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-container-highest transition-colors whitespace-nowrap shadow-sm" data-path="hub-locations" href="#" onClick={() => alertToast('Action triggered')}>
            View Hubs
          </a>
</div>
</section>

<section className="lg:col-span-5 flex flex-col gap-space-md">

<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-xs">
<div className="w-7 h-7 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface">
<Icon name="confirmation_number" className="text-[18px]" />
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Available Vouchers</h2>
</div>
<span className="text-tertiary font-label-md text-label-md font-bold flex items-center gap-1">
<Icon name="savings" className="text-[16px]" />
            UGX 70,000 Total Max Savings
          </span>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-sm shadow-sm">
<form className="flex items-center gap-space-xs" onSubmit={(e) => e.preventDefault()}>
<div className="relative flex-1">
<Icon name="local_activity" className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-[20px]" />
<input className="w-full bg-surface-container-low rounded-lg pl-10 pr-space-sm py-2.5 font-body-md text-body-md text-on-surface placeholder:text-secondary focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container transition-all" placeholder="Enter coupon code (e.g. KAMPALA10)" type="text" />
</div>
<button className="px-space-lg py-2.5 rounded-lg bg-inverse-surface text-inverse-on-surface font-label-lg text-label-lg hover:bg-on-surface transition-colors active:scale-95 shadow-sm" type="submit" onClick={() => alertToast('Action triggered')}>
              Apply
            </button>
</form>
</div>

<div className="flex flex-col gap-space-sm">

<div className="relative bg-surface-container-lowest rounded-xl shadow-md overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-2 bg-primary-container"></div>
<div className="flex">

<div className="flex-1 p-space-md pr-space-lg pl-space-lg">
<div className="flex items-center justify-between mb-1">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-primary font-extrabold tracking-tight">KAMPALAFIRST</span>
<button className="text-secondary hover:text-on-surface" title="Copy code" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="content_copy" className="text-[16px]" />
</button>
</div>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm font-bold">
<Icon name="check" className="text-[12px]" />
                    Applied to Cart
                  </span>
</div>
<div className="font-headline-md text-headline-md text-on-surface font-extrabold my-0.5">
                  UGX 15,000 <span className="text-primary font-headline-sm text-headline-sm font-bold">OFF</span>
</div>
<div className="flex flex-col gap-0.5 mt-2 pt-2 bg-surface-container-low/60 rounded p-2">
<div className="font-body-sm text-body-sm text-on-surface flex items-center gap-1.5">
<Icon name="shopping_bag" className="text-[14px] text-secondary" />
<span>On orders above <strong className="font-semibold">UGX 100,000</strong></span>
</div>
<div className="font-body-sm text-body-sm text-secondary flex items-center gap-1.5">
<Icon name="event" className="text-[14px]" />
<span>Valid till 28 Feb 2025</span>
</div>
</div>
</div>

<div className="relative w-28 bg-surface-container-low flex flex-col items-center justify-center p-space-sm text-center">

<div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-background"></div>
<div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-background"></div>
<Icon name="task_alt" className="text-tertiary text-[24px] mb-1" />
<span className="font-label-sm text-label-sm text-tertiary font-bold uppercase tracking-wide">ACTIVE</span>
<span className="font-label-sm text-label-sm text-secondary mt-1">In Checkout</span>
</div>
</div>
</div>

<div className="relative bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
<div className="flex">
<div className="flex-1 p-space-md pr-space-lg pl-space-md">
<div className="flex items-center justify-between mb-1">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold tracking-tight">BODAEXPRESS</span>
<button className="text-secondary hover:text-on-surface" title="Copy code" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="content_copy" className="text-[16px]" />
</button>
</div>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm font-semibold">
                    3 uses left
                  </span>
</div>
<div className="font-headline-md text-headline-md text-on-surface font-extrabold my-0.5 flex items-baseline gap-2">
                  FREE Delivery
                  <span className="font-label-md text-label-md text-tertiary font-bold">(Save UGX 5,000)</span>
</div>
<div className="flex flex-col gap-0.5 mt-2 pt-2 bg-surface-container-low/60 rounded p-2">
<div className="font-body-sm text-body-sm text-on-surface flex items-center gap-1.5">
<Icon name="pin_drop" className="text-[14px] text-secondary" />
<span>Valid for <strong className="font-semibold">Kampala Central &amp; Nakasero</strong></span>
</div>
<div className="font-body-sm text-body-sm text-secondary flex items-center gap-1.5">
<Icon name="schedule" className="text-[14px]" />
<span>No minimum cart spend</span>
</div>
</div>
</div>

<div className="relative w-28 bg-surface-container-low flex flex-col items-center justify-center p-space-sm text-center">
<div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-background"></div>
<div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-background"></div>
<button className="w-full py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-bold shadow-sm hover:bg-primary transition-all active:scale-95" type="button" onClick={() => alertToast('Action triggered')}>
                  Apply
                </button>
<span className="font-label-sm text-label-sm text-secondary mt-1">Tap to add</span>
</div>
</div>
</div>

<div className="relative bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
<div className="flex">
<div className="flex-1 p-space-md pr-space-lg pl-space-md">
<div className="flex items-center justify-between mb-1">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold tracking-tight">TECHWEEK20</span>
<button className="text-secondary hover:text-on-surface" title="Copy code" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="content_copy" className="text-[16px]" />
</button>
</div>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold">
                    Electronics Deal
                  </span>
</div>
<div className="font-headline-md text-headline-md text-on-surface font-extrabold my-0.5">
                  10% OFF <span className="font-headline-sm text-headline-sm text-secondary font-normal">Audio &amp; Electronics</span>
</div>
<div className="flex flex-col gap-0.5 mt-2 pt-2 bg-surface-container-low/60 rounded p-2">
<div className="font-body-sm text-body-sm text-on-surface flex items-center gap-1.5">
<Icon name="verified" className="text-[14px] text-secondary" />
<span>Max discount <strong className="font-semibold">UGX 50,000</strong> • SoundCore &amp; Anker</span>
</div>
<div className="font-body-sm text-body-sm text-secondary flex items-center gap-1.5">
<Icon name="info" className="text-[14px]" />
<span>Verified official stores only</span>
</div>
</div>
</div>

<div className="relative w-28 bg-surface-container-low flex flex-col items-center justify-center p-space-sm text-center">
<div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-background"></div>
<div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-background"></div>
<button className="w-full py-2 rounded-lg bg-inverse-surface text-inverse-on-surface font-label-md text-label-md font-bold shadow-sm hover:bg-on-surface transition-all active:scale-95" type="button" onClick={() => alertToast('Action triggered')}>
                  Apply
                </button>
<span className="font-label-sm text-label-sm text-secondary mt-1">Tap to add</span>
</div>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-highest p-space-md shadow-sm">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center shrink-0 shadow-md">
<Icon name="stars" className="text-[26px]" />
</div>
<div className="flex-1">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface font-extrabold">Instant Points Redemption</span>
<span className="px-1.5 py-0.5 rounded bg-tertiary-container text-on-tertiary font-label-sm text-label-sm font-bold">1:10 RATE</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-0.5">
                Convert <strong className="text-on-surface font-semibold">1,000 SwiftPoints</strong> into a direct <strong className="text-primary font-semibold">UGX 10,000</strong> voucher.
              </p>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary">Available balance</span>
<span className="font-label-lg text-label-lg text-on-surface font-bold">2,450 SwiftPoints (UGX 24,500 value)</span>
</div>
<button className="px-space-md py-space-xs rounded-lg bg-surface-container-lowest text-on-surface font-label-lg text-label-lg font-bold hover:bg-white transition-colors shadow-sm active:scale-95" type="button" onClick={() => alertToast('Action triggered')}>
              Convert Now
            </button>
</div>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center gap-space-xs">
<Icon name="verified_user" className="text-secondary text-[18px]" />
<span className="font-body-sm text-body-sm text-secondary">
            Promotional discounts automatically recalculate with MTN &amp; Airtel MoMo escrow checkout.
          </span>
</div>
</section>
</div>
</div>
</div></main><footer className="w-full bg-surface-container-low shadow-[0_-1px_6px_rgba(0,0,0,0.03)] mt-auto"><div className="w-full px-gutter-desktop py-space-lg"><div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pb-space-lg"><div className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-lowest shadow-[0_1px_4px_rgba(0,0,0,0.04)] min-h-[48px]"><div className="w-10 h-10 rounded-full bg-tertiary-container/20 flex items-center justify-center shrink-0"><Icon name="verified_user" className="text-tertiary text-[22px]" /></div><div className="flex flex-col"><span className="font-label-lg text-label-lg text-on-surface font-bold">MTN &amp; Airtel MoMo Escrow</span><span className="font-body-sm text-body-sm text-secondary">Funds secured until 100% item inspection</span></div></div><div className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-lowest shadow-[0_1px_4px_rgba(0,0,0,0.04)] min-h-[48px]"><div className="w-10 h-10 rounded-full bg-primary-container/15 flex items-center justify-center shrink-0"><Icon name="two_wheeler" className="text-primary-container text-[22px]" /></div><div className="flex flex-col"><span className="font-label-lg text-label-lg text-on-surface font-bold">1-Hour Kampala Boda Dispatch</span><span className="font-body-sm text-body-sm text-secondary">Express city hub runner direct to your doorstep</span></div></div><div className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-lowest shadow-[0_1px_4px_rgba(0,0,0,0.04)] min-h-[48px]"><div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center shrink-0"><Icon name="assignment_return" className="text-secondary text-[22px]" /></div><div className="flex flex-col"><span className="font-label-lg text-label-lg text-on-surface font-bold">7-Day Free Hub Returns</span><span className="font-body-sm text-body-sm text-secondary">Drop off at Oasis Mall, Acacia, or Village Mall</span></div></div></div><div className="flex flex-wrap items-center justify-between gap-space-md pt-space-md"><div className="flex flex-wrap items-center gap-space-md"><a className="font-label-md text-label-md text-secondary hover:text-on-surface min-h-[48px] flex items-center transition-colors" data-path="terms-of-service" href="#" onClick={() => alertToast('Action triggered')}>Terms of Service</a><a className="font-label-md text-label-md text-secondary hover:text-on-surface min-h-[48px] flex items-center transition-colors" data-path="privacy-policy" href="#" onClick={() => alertToast('Action triggered')}>Privacy Policy</a><a className="font-label-md text-label-md text-secondary hover:text-on-surface min-h-[48px] flex items-center transition-colors" data-path="buyer-protection" href="#" onClick={() => alertToast('Action triggered')}>Buyer Protection</a><a className="font-label-md text-label-md text-secondary hover:text-on-surface min-h-[48px] flex items-center transition-colors" data-path="hub-locations" href="#" onClick={() => alertToast('Action triggered')}>Hub Locations</a><a className="font-label-md text-label-md text-primary font-bold hover:text-on-surface min-h-[48px] flex items-center transition-colors" data-path="sell-on-swiftcart" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>Sell on SwiftCart</a></div><p className="font-body-sm text-body-sm text-secondary">© 2025 SwiftCart Uganda Ltd. All rights reserved.</p></div></div></footer>
    </div>
  );
};

export default Tablet;
