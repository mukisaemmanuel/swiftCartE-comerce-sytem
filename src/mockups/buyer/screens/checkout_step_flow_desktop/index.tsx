// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/buyer/checkout_step_flow_desktop/code.html
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
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-surface text-on-surface font-body-md text-body-md antialiased selection:bg-primary-fixed selection:text-on-primary-fixed relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 left-0 right-0 z-50 shadow-[0_4px_20px_rgba(218,55,0,0.08)]"><div className="bg-primary-container text-on-primary px-margin"><div className="max-w-7xl mx-auto h-20 flex items-center justify-between gap-space-lg"><div className="flex items-center gap-space-md shrink-0"><a className="bg-white px-3 py-1.5 rounded-xl shadow-sm flex items-center gap-2.5 transition-transform hover:scale-[1.02]" data-path="marketplace" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><img alt="SwiftCart Logo" className="h-9 w-auto object-contain" src={`${assetBase}/images/35aa19b36e6443c5.webp`} /><div className="flex flex-col text-left leading-tight"><span className="font-headline-sm text-[20px] font-black tracking-tight text-[#da3700] leading-none">SwiftCart</span><div className="flex items-center gap-1 mt-0.5"><span className="text-[9px] font-extrabold tracking-wider uppercase text-[#161b2d]">Uganda Marketplace</span><span className="bg-[#00855b] text-white text-[8px] font-extrabold px-1 rounded">UG</span></div></div></a></div><div className="flex-1 max-w-2xl px-space-md hidden md:block"><div className="flex items-center bg-surface-container-lowest rounded-xl p-space-xs shadow-[0_2px_8px_rgba(14,27,77,0.08)]"><div className="relative flex items-center pl-space-sm pr-space-xs text-on-surface-variant"><span className="font-label-md text-label-md select-none text-on-surface whitespace-nowrap">All Categories</span><Icon name="expand_more" className="text-[18px] ml-space-xs text-on-surface-variant" /><div className="w-px h-5 bg-surface-container-highest ml-space-sm"></div></div><input className="w-full px-space-md py-space-xs text-on-surface placeholder:text-on-surface-variant/70 font-body-md text-body-md bg-transparent focus:outline-none" placeholder="Search 50,000+ genuine products in Uganda..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} /><button className="bg-primary hover:bg-primary-container text-on-primary px-space-lg py-space-sm rounded-lg flex items-center justify-center transition-colors shrink-0" type="button" onClick={() => alertToast('Action triggered')}><Icon name="search" className="text-[20px]" /></button></div></div><div className="flex items-center gap-space-lg shrink-0"><a className="flex items-center gap-space-xs text-on-primary/90 hover:text-on-primary transition-colors text-left" data-path="help-faq" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}><Icon name="help_outline" className="text-[20px]" /><span className="hidden xl:inline font-label-md text-label-md">Help &amp; FAQ</span></a><a className="flex items-center gap-space-xs text-on-primary/90 hover:text-on-primary transition-colors text-left" data-path="account" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/sign-in'); }}><Icon name="person" className="text-[22px]" /><div className="hidden lg:flex flex-col leading-tight"><span className="font-label-sm text-label-sm text-primary-fixed-dim">Hello, Sign In</span><span className="font-label-md text-label-md font-bold">Account</span></div></a><a className="relative flex items-center text-on-primary/90 hover:text-on-primary transition-colors" data-path="wishlist" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}><Icon name="favorite_border" className="text-[22px]" /><span className="absolute -top-1.5 -right-2 bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm w-4 h-4 rounded-full flex items-center justify-center font-bold">3</span></a><a className="flex items-center gap-space-sm bg-primary/40 hover:bg-primary/60 px-space-md py-space-xs rounded-xl text-on-primary transition-colors" data-path="cart" href="#" onClick={() => alertToast('Action triggered')}><div className="relative flex items-center"><Icon name="shopping_bag" className="text-[22px]" /><span className="absolute -top-1.5 -right-2 bg-surface text-primary font-label-sm text-label-sm w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span></div><div className="hidden sm:flex flex-col text-left leading-none"><span className="font-label-sm text-label-sm text-primary-fixed-dim">UGX</span><span className="font-label-md text-label-md font-bold">245,000</span></div></a><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></div><div className="bg-surface-container-lowest text-on-surface shadow-[0_2px_6px_rgba(14,27,77,0.04)] px-margin"><div className="max-w-7xl mx-auto h-12 flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-md overflow-x-auto py-space-xs"><button className="flex items-center gap-space-xs bg-surface-container hover:bg-surface-container-high px-space-md py-space-xs rounded-lg font-label-lg text-label-lg text-on-surface shrink-0 transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/categories'); }}><Icon name="grid_view" className="text-[18px]" /><span>All Categories</span><Icon name="expand_more" className="text-[16px]" /></button><nav className="flex items-center gap-space-xs shrink-0" data-active-classes="bg-surface-container-high text-primary font-bold rounded-lg"><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap" data-path="super-tech-week" href="#" onClick={() => alertToast('Action triggered')}>Super Tech Week</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap" data-path="official-brand-stores" href="#" onClick={() => alertToast('Action triggered')}>Official Brand Stores</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap" data-path="fresh-groceries" href="#" onClick={() => alertToast('Action triggered')}>Fresh Groceries</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap flex items-center gap-1" data-path="flash-deals" href="#" onClick={() => alertToast('Action triggered')}><Icon name="local_fire_department" className="text-primary text-[16px]" />Flash Deals</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap" data-path="wholesale-kikuubo" href="#" onClick={() => alertToast('Action triggered')}>Wholesale Kikuubo</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap flex items-center gap-1" data-path="safeboda-dispatch" href="#" onClick={() => alertToast('Action triggered')}><Icon name="bolt" className="text-tertiary text-[16px]" />Same-Day SafeBoda Dispatch</a></nav></div><div className="flex items-center gap-space-md shrink-0 hidden lg:flex"><a className="flex items-center gap-space-xs text-primary hover:text-primary-container font-label-md text-label-md transition-colors" data-path="vendor-onboarding" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><Icon name="storefront" className="text-[18px]" /><span>Sell on SwiftCart</span></a><div className="w-px h-4 bg-surface-container-highest"></div><div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm"><Icon name="location_on" className="text-primary text-[18px]" /><span>Kampala (Central)</span></div></div></div></div></header><main className="w-full pt-32 bg-surface min-h-[calc(100vh-28rem)]"><div className="flex flex-col w-full">
<div className="w-full max-w-7xl mx-auto px-margin pb-16">

<div className="py-space-lg mb-space-lg">
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_2px_12px_rgba(14,27,77,0.04)]">
<div className="flex items-center justify-between max-w-4xl mx-auto relative">

<div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-0.5 bg-surface-container-highest z-0"></div>
<div className="absolute left-6 w-2/3 top-1/2 -translate-y-1/2 h-0.5 bg-primary-container z-0"></div>

<div className="relative z-10 flex items-center gap-space-xs bg-surface-container-lowest px-space-xs cursor-pointer">
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-md text-label-md shadow-sm">
<Icon name="check" className="text-[18px]" />
</div>
<div className="hidden sm:flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Step 1</span>
<span className="font-label-md text-label-md font-bold text-on-surface">Delivery Address</span>
</div>
</div>

<div className="relative z-10 flex items-center gap-space-xs bg-surface-container-lowest px-space-xs cursor-pointer">
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-md text-label-md shadow-sm">
<Icon name="check" className="text-[18px]" />
</div>
<div className="hidden sm:flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Step 2</span>
<span className="font-label-md text-label-md font-bold text-on-surface">Fulfillment Speed</span>
</div>
</div>

<div className="relative z-10 flex items-center gap-space-xs bg-surface-container-lowest px-space-xs">
<div className="w-8 h-8 rounded-full bg-primary text-on-primary ring-4 ring-primary/20 flex items-center justify-center font-label-md text-label-md font-bold">
              3
            </div>
<div className="hidden sm:flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Step 3</span>
<span className="font-label-md text-label-md font-bold text-primary">Payment Method</span>
</div>
</div>

<div className="relative z-10 flex items-center gap-space-xs bg-surface-container-lowest px-space-xs opacity-60">
<div className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-label-md text-label-md font-bold">
              4
            </div>
<div className="hidden sm:flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Step 4</span>
<span className="font-label-md text-label-md font-bold text-on-surface-variant">Review &amp; Escrow</span>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">

<div className="lg:col-span-8 flex flex-col gap-space-xl">

<section className="bg-surface-container-lowest rounded-xl p-space-xl shadow-[0_2px_12px_rgba(14,27,77,0.04)]">
<div className="flex items-center justify-between mb-space-lg">
<div className="flex items-center gap-space-sm">
<span className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center font-label-md text-label-md font-bold">1</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Delivery Address in Uganda</h2>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-bold bg-tertiary-container/10 px-space-sm py-0.5 rounded-full flex items-center gap-1">
<Icon name="my_location" className="text-[14px]" /> Kampala Coverage Active
            </span>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mb-space-lg">

<label className="relative flex flex-col p-space-md rounded-xl bg-surface cursor-pointer shadow-sm ring-2 ring-primary transition-all">
<input checked={true} className="sr-only" name="delivery_address" type="radio" />
<div className="flex items-start justify-between gap-space-xs mb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
<span className="w-1.5 h-1.5 bg-on-primary rounded-full"></span>
</span>
<span className="font-label-lg text-label-lg text-on-surface font-bold">Home (Kololo)</span>
</div>
<span className="bg-primary-container text-on-primary text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">Default</span>
</div>
<p className="font-body-md text-body-md text-on-surface font-semibold">Ronald Mukasa</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                Plot 14 Philip Road, Near Acacia Mall Entrance B<br />
                Kololo, Kampala Central Division
              </p>
<div className="mt-space-sm pt-space-xs flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span className="flex items-center gap-1 font-semibold text-on-surface">
<Icon name="call" className="text-[16px] text-tertiary" /> +256 701 498 442
                </span>
<span className="text-primary font-label-sm text-label-sm hover:underline">Edit</span>
</div>
</label>

<label className="relative flex flex-col p-space-md rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface transition-all">
<input className="sr-only" name="delivery_address" type="radio" />
<div className="flex items-start justify-between gap-space-xs mb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="w-4 h-4 rounded-full bg-surface-container-highest flex items-center justify-center"></span>
<span className="font-label-lg text-label-lg text-on-surface font-bold">Office (Nakasero)</span>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface font-semibold">Ronald Mukasa (Work)</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                Lumumba Avenue, Commercial Plaza 3rd Floor, Suite 304<br />
                Nakasero Hill, Kampala
              </p>
<div className="mt-space-sm pt-space-xs flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span className="flex items-center gap-1">
<Icon name="call" className="text-[16px]" /> +256 772 345 678
                </span>
<span className="text-primary font-label-sm text-label-sm hover:underline">Edit</span>
</div>
</label>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md">
<button className="flex items-center gap-space-xs text-primary font-label-lg text-label-lg hover:text-primary-container transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="add_circle" className="text-[20px]" />
<span>+ Add New Ugandan Delivery Address / Boda Stage Landmark</span>
</button>
</div>
</section>

<section className="bg-surface-container-lowest rounded-xl p-space-xl shadow-[0_2px_12px_rgba(14,27,77,0.04)]">
<div className="flex items-center justify-between mb-space-lg">
<div className="flex items-center gap-space-sm">
<span className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center font-label-md text-label-md font-bold">2</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Delivery &amp; Fulfillment Speed</h2>
</div>
<span className="font-label-sm text-label-sm text-primary font-bold bg-primary-fixed px-space-sm py-0.5 rounded-full flex items-center gap-1 text-on-primary-fixed">
<Icon name="bolt" className="text-[14px]" /> SafeBoda Express
            </span>
</div>
<div className="flex flex-col gap-space-md mb-space-lg">

<label className="flex items-start gap-space-md p-space-md rounded-xl bg-surface cursor-pointer ring-2 ring-primary transition-all">
<input checked={true} className="mt-1" name="fulfillment_method" type="radio" />
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="bg-[#ff8a1f]/15 text-[#da3700] px-2 py-0.5 rounded font-label-sm text-label-sm font-black flex items-center gap-1">
<Icon name="two_wheeler" className="text-[14px]" /> SafeBoda Express
                    </span>
<span className="font-label-lg text-label-lg text-on-surface font-bold">Same-Day Direct Dispatch</span>
</div>
<span className="font-label-lg text-label-lg text-primary font-black">UGX 3,500</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Dedicated helmeted courier dispatched from merchant. Delivered in <span className="font-bold text-on-surface">45-60 minutes</span> to Kololo. Live GPS tracking shared via SMS &amp; App.
                </p>
<div className="mt-space-xs flex items-center gap-space-md text-tertiary font-label-sm text-label-sm font-semibold">
<span className="flex items-center gap-1"><Icon name="format_image_left" className="text-[14px]" /> Insured Cargo</span>
<span className="flex items-center gap-1"><Icon name="pin_drop" className="text-[14px]" /> Live GPS Link</span>
</div>
</div>
</label>

<label className="flex items-start gap-space-md p-space-md rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface transition-all">
<input className="mt-1" name="fulfillment_method" type="radio" />
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm px-2 py-0.5 rounded font-bold flex items-center gap-1">
<Icon name="store" className="text-[14px]" /> Self Pickup
                    </span>
<span className="font-label-lg text-label-lg text-on-surface font-bold">Nakasero Trade Tower Station #2</span>
</div>
<span className="font-label-lg text-label-lg text-tertiary font-black">FREE</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Ready for collection in 2 hours. Locker code sent to +256 701 498 442. Open Mon-Sat until 8:00 PM.
                </p>
</div>
</label>
</div>

<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md text-on-surface font-bold flex items-center gap-1">
<Icon name="edit_note" className="text-[16px] text-primary" />
              Special Instructions for SafeBoda Rider
            </label>
<div className="relative">
<input className="w-full bg-surface text-on-surface font-body-md text-body-md px-space-md py-space-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" placeholder="e.g. Call at gate, drop at reception, stage landmark..." type="text" value="Call when at the black security gate. Landmark: opposite TotalEnergies Acacia." />
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">The courier will receive these instructions alongside the geo-coordinates.</span>
</div>
</section>

<section className="bg-surface-container-lowest rounded-xl p-space-xl shadow-[0_2px_12px_rgba(14,27,77,0.04)]">
<div className="flex items-center justify-between mb-space-lg">
<div className="flex items-center gap-space-sm">
<span className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center font-label-md text-label-md font-bold">3</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Select Payment Method (MoMo &amp; Cards)</h2>
</div>
<span className="font-label-sm text-label-sm text-on-tertiary-container bg-tertiary-container px-space-sm py-0.5 rounded-full flex items-center gap-1 font-bold">
<Icon name="lock" className="text-[14px]" /> Funds Held in Escrow
            </span>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md mb-space-lg">

<label className="relative flex flex-col p-space-md rounded-xl bg-surface cursor-pointer ring-2 ring-primary shadow-sm transition-all">
<input checked={true} className="sr-only" name="payment_channel" type="radio" />
<div className="flex items-center justify-between mb-space-sm">
<div className="w-9 h-9 rounded-lg bg-[#ffcc00] flex items-center justify-center font-black text-[12px] text-black tracking-tighter shadow-sm">
                  MTN
                </div>
<span className="w-3.5 h-3.5 rounded-full bg-primary flex items-center justify-center">
<span className="w-1.5 h-1.5 bg-on-primary rounded-full"></span>
</span>
</div>
<span className="font-label-lg text-label-lg text-on-surface font-bold">MTN MoMo</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-tight">Instant *165# USSD prompt to phone</span>
<div className="mt-space-sm inline-block">
<span className="bg-[#ffcc00]/25 text-[#735100] text-[10px] font-extrabold px-1.5 py-0.5 rounded">Most Popular</span>
</div>
</label>

<label className="relative flex flex-col p-space-md rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface transition-all">
<input className="sr-only" name="payment_channel" type="radio" />
<div className="flex items-center justify-between mb-space-sm">
<div className="w-9 h-9 rounded-lg bg-[#e60000] flex items-center justify-center font-black text-[11px] text-white tracking-tighter shadow-sm">
                  airtel
                </div>
<span className="w-3.5 h-3.5 rounded-full bg-surface-container-highest"></span>
</div>
<span className="font-label-lg text-label-lg text-on-surface font-bold">Airtel Money</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-tight">Instant USSD prompt to phone</span>
<div className="mt-space-sm inline-block">
<span className="bg-surface-container-high text-on-surface-variant text-[10px] font-bold px-1.5 py-0.5 rounded">Instant</span>
</div>
</label>

<label className="relative flex flex-col p-space-md rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface transition-all">
<input className="sr-only" name="payment_channel" type="radio" />
<div className="flex items-center justify-between mb-space-sm">
<div className="flex items-center gap-1">
<div className="w-6 h-4 rounded bg-[#1a1f71] text-[7px] text-white font-extrabold flex items-center justify-center">VISA</div>
<div className="w-6 h-4 rounded bg-[#eb001b] text-[6px] text-white font-extrabold flex items-center justify-center">MC</div>
</div>
<span className="w-3.5 h-3.5 rounded-full bg-surface-container-highest"></span>
</div>
<span className="font-label-lg text-label-lg text-on-surface font-bold">Debit / Credit Card</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-tight">Visa &amp; Mastercard accepted</span>
<div className="mt-space-sm inline-block">
<span className="bg-surface-container-high text-on-surface-variant text-[10px] font-bold px-1.5 py-0.5 rounded">Bank Escrow</span>
</div>
</label>
</div>

<div className="bg-surface rounded-xl p-space-md">
<label className="font-label-md text-label-md text-on-surface font-bold block mb-space-xs">
              Enter Registered MTN Mobile Money Phone Number
            </label>
<div className="flex items-center bg-surface-container-lowest rounded-xl shadow-sm px-space-md py-space-xs focus-within:ring-2 focus-within:ring-primary">
<div className="flex items-center gap-space-xs text-on-surface font-label-lg text-label-lg pr-space-md">
<span className="text-[18px]">🇺🇬</span>
<span className="font-bold text-on-surface">+256</span>
<div className="w-px h-5 bg-surface-container-highest ml-space-xs"></div>
</div>
<input className="flex-1 bg-transparent py-space-xs font-headline-sm text-headline-sm font-bold text-on-surface focus:outline-none" placeholder="77X XXX XXX" type="tel" value="772 345 678" />
<div className="flex items-center gap-space-xs px-2 py-1 rounded bg-[#ffcc00]/20 text-black font-label-sm text-label-sm font-black">
<Icon name="verified" className="text-[16px] text-primary" />
<span>MTN Verified Subscriber</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
              A payment authorization prompt for <span className="font-bold text-on-surface">UGX 305,000</span> will pop up on this phone automatically. Enter your 5-digit MoMo PIN to authorize escrow lock.
            </p>
</div>
</section>
</div>

<div className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col gap-space-md">
<div className="bg-surface-container-lowest rounded-xl p-space-xl shadow-[0_4px_24px_rgba(14,27,77,0.06)]">
<div className="flex items-center justify-between pb-space-md mb-space-md bg-surface-container-low -mx-space-xl -mt-space-xl p-space-md rounded-t-xl">
<div className="flex items-center gap-space-xs">
<Icon name="shopping_cart_checkout" className="text-primary text-[22px]" />
<h3 className="font-label-lg text-label-lg text-on-surface font-bold">Order Review &amp; Vault</h3>
</div>
<span className="font-label-sm text-label-sm font-bold text-tertiary bg-tertiary/10 px-2 py-0.5 rounded-full flex items-center gap-1">
<Icon name="security" className="text-[12px]" /> Verified
            </span>
</div>

<div className="flex flex-col gap-space-md mb-space-lg">

<div className="flex items-center gap-space-md">
<img className="w-14 h-14 rounded-lg object-cover bg-surface-container shrink-0" data-alt="A brand new sealed Samsung Galaxy A54 smartphone resting on a minimalist clean wood display in Kampala shop showroom light, warm tones" src={`${assetBase}/images/4b1575531bfefdc2.webp`} />
<div className="flex-1 min-w-0">
<h4 className="font-label-md text-label-md font-bold text-on-surface truncate">Samsung Galaxy A54 5G (128GB)</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Qty: 1 • Color: Graphite</p>
<span className="font-label-md text-label-md font-bold text-primary">UGX 245,000</span>
</div>
</div>

<div className="flex items-center gap-space-md">
<img className="w-14 h-14 rounded-lg object-cover bg-surface-container shrink-0" data-alt="Sony WH-1000XM4 wireless noise cancelling headphones inside soft velvet carrying case in bright Kampala modern tech retail boutique studio lighting" src={`${assetBase}/images/692c2346a17b7d47.webp`} />
<div className="flex-1 min-w-0">
<h4 className="font-label-md text-label-md font-bold text-on-surface truncate">Sony Wireless ANC Headphones</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Qty: 1 • Matte Black</p>
<span className="font-label-md text-label-md font-bold text-primary">UGX 64,500</span>
</div>
</div>

<div className="flex items-center gap-space-md">
<img className="w-14 h-14 rounded-lg object-cover bg-surface-container shrink-0" data-alt="Braided USB Type C fast charging cable bundled neatly with leather strap against soft cream studio background high contrast tactile" src={`${assetBase}/images/d1c2b9add7a66c7a.webp`} />
<div className="flex-1 min-w-0">
<h4 className="font-label-md text-label-md font-bold text-on-surface truncate">Anker 65W Fast Charge Cable</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Qty: 1 • 2 Meters</p>
<span className="font-label-md text-label-md font-bold text-primary">UGX 12,000</span>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md flex flex-col gap-space-xs mb-space-lg">
<div className="flex items-center justify-between text-on-surface-variant font-body-md text-body-md">
<span>Items Subtotal</span>
<span className="font-semibold text-on-surface">UGX 321,500</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-body-md text-body-md">
<span className="flex items-center gap-1">
                SafeBoda Express Dispatch
                <Icon name="bolt" className="text-primary text-[14px]" />
</span>
<span className="font-semibold text-on-surface">UGX 3,500</span>
</div>
<div className="flex items-center justify-between text-tertiary font-body-md text-body-md font-semibold">
<span className="flex items-center gap-1">
<Icon name="local_offer" className="text-[16px]" />
                KAMPALA_TECH Coupon
              </span>
<span>- UGX 20,000</span>
</div>
<div className="pt-space-xs mt-space-xs flex items-baseline justify-between">
<div>
<span className="font-label-lg text-label-lg font-bold text-on-surface block">Total Due</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Includes VAT &amp; Escrow cover</span>
</div>
<div className="text-right">
<span className="font-currency-code text-currency-code text-primary mr-1">UGX</span>
<span className="font-price-display text-price-display text-primary">305,000</span>
</div>
</div>
</div>

<button className="w-full h-14 bg-gradient-to-r from-[#ff8a1f] to-[#da3700] hover:opacity-95 text-on-primary rounded-xl font-label-lg text-label-lg font-bold flex items-center justify-center gap-space-sm shadow-[0_4px_14px_rgba(218,55,0,0.30)] active:scale-[0.98] transition-transform cursor-pointer" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="lock" className="text-[20px]" />
<span>Authorize &amp; Pay UGX 305,000</span>
</button>

<div className="mt-space-lg p-space-md rounded-xl bg-tertiary-container/10 flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs text-tertiary font-label-md text-label-md font-bold">
<Icon name="verified_user" className="text-[18px]" />
<span>Zero-Fraud Escrow Guarantee</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Your money does <span className="font-bold text-on-surface">NOT</span> go directly to the merchant. SwiftCart securely locks funds in our bank-regulated escrow vault. The vendor receives payment only after you physically inspect the items at your doorstep and share your 6-digit release code with the courier.
            </p>
<div className="flex items-center justify-between pt-space-xs text-tertiary font-label-sm text-label-sm font-bold">
<span className="flex items-center gap-1">
<Icon name="published_with_changes" className="text-[14px]" /> Free 48-Hour Returns
              </span>
<span className="flex items-center gap-1">
<Icon name="headset_mic" className="text-[14px]" /> Kampala Support
              </span>
</div>
</div>

<div className="mt-space-md flex items-center justify-center gap-space-md text-on-surface-variant/70 text-[11px] font-semibold">
<span className="flex items-center gap-1"><Icon name="lock" className="text-[14px]" /> 256-Bit SSL</span>
<span>•</span>
<span>Bank of Uganda Regulated</span>
</div>
</div>
</div>
</div>
</div>
</div></main>
    </div>
  );
};

export default Screen;
