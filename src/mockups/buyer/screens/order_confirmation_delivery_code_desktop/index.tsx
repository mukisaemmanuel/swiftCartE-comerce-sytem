// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/buyer/order_confirmation_delivery_code_desktop/code.html
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
    <div className="bg-background font-body-md text-on-surface antialiased min-h-screen flex flex-col relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 left-0 w-full z-50 bg-surface/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(14,27,77,0.06)]"><div className="bg-surface-container-high/60 border-b border-surface-variant/40"><div className="max-w-7xl mx-auto px-6 h-8 flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant"><div className="flex items-center gap-4"><span>Kampala Rapid Delivery: Central &amp; Greater Wakiso</span><span className="inline-block w-1 h-1 rounded-full bg-outline-variant"></span><span className="text-tertiary flex items-center gap-1 font-bold"><Icon name="verified_user" className="text-[14px]" />Swift Escrow Protected</span></div><div className="flex items-center gap-6"><a className="text-primary hover:text-on-surface transition-colors font-bold" data-path="sell-on-swiftcart" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>Sell on SwiftCart</a><a className="text-on-surface-variant hover:text-on-surface transition-colors" data-path="help-faq" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}>Help &amp; FAQ</a><span className="text-on-surface-variant font-medium">Uganda (UGX)</span></div></div></div><div className="max-w-7xl mx-auto px-6 h-18 py-3 flex items-center gap-6 justify-between"><div className="flex items-center gap-3 shrink-0"><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/ecfbfc472ab6b281.webp`} /><span className="font-headline-sm text-headline-sm font-extrabold tracking-tight text-primary">SwiftCart</span></div><div className="flex-1 max-w-2xl mx-4"><div className="flex items-center h-11 bg-surface-container-lowest rounded-xl shadow-[0_1px_4px_rgba(14,27,77,0.04)] p-1"><div className="h-full px-3 flex items-center gap-1 text-on-surface font-label-md text-label-md shrink-0 cursor-pointer hover:bg-surface-container-low rounded-lg transition-colors"><span>All Categories</span><Icon name="arrow_drop_down" className="text-[16px] text-on-surface-variant" /></div><div className="w-[1px] h-5 bg-surface-variant shrink-0"></div><div className="flex-1 flex items-center px-3 gap-2"><Icon name="search" className="text-outline text-[18px]" /><input className="w-full bg-transparent border-none text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none" placeholder="Search products, safe electronic vendors, fresh produce..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} /></div><button className="h-9 px-5 bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md rounded-lg transition-colors flex items-center gap-1.5 shrink-0" onClick={() => alertToast('Action triggered')}><span>Search</span></button></div></div><div className="flex items-center gap-4 shrink-0"><a className="flex items-center gap-1.5 px-3 py-2 text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" data-path="help-faq" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}><Icon name="support_agent" className="text-[20px]" /><span>Support</span></a><a className="flex items-center gap-1.5 px-3 py-2 text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" data-path="wishlist" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}><Icon name="favorite" className="text-[20px]" /><span>Wishlist</span></a><a className="flex items-center gap-2.5 px-3.5 py-1.5 bg-surface-container-high hover:bg-surface-variant rounded-xl transition-all" data-path="cart" href="#" onClick={() => alertToast('Action triggered')}><Icon name="shopping_bag" className="text-primary text-[20px]" /><div className="flex flex-col text-left"><span className="font-label-sm text-label-sm text-on-surface-variant">UGX 0</span><span className="font-label-md text-label-md text-on-surface font-bold">0 Items</span></div></a><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div><div className="bg-surface border-t border-surface-variant/40"><div className="max-w-7xl mx-auto px-6 h-11 flex items-center justify-between"><div className="flex items-center gap-2 text-on-surface font-label-md text-label-md cursor-pointer shrink-0"><Icon name="location_on" className="text-[18px] text-primary" /><span>Deliver to:</span><span className="font-bold text-on-surface">Kampala Central, Nakasero</span><Icon name="keyboard_arrow_down" className="text-[16px] text-outline" /></div><nav className="flex items-center gap-7 overflow-x-auto py-1" data-active-classes="text-primary font-bold"><a aria-current="page" className="transition-colors shrink-0 text-primary font-bold" data-path="home" href="#" onClick={() => alertToast('Action triggered')}>Home</a><a className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors shrink-0" data-path="categories" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/categories'); }}>All Categories</a><a className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors shrink-0" data-path="flash-deals" href="#" onClick={() => alertToast('Action triggered')}>Flash Deals</a><a className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors shrink-0" data-path="official-brand-stores" href="#" onClick={() => alertToast('Action triggered')}>Official Brand Stores</a><a className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors shrink-0" data-path="safeboda-delivery" href="#" onClick={() => alertToast('Action triggered')}>Same-Day SafeBoda</a><a className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors shrink-0" data-path="sell-on-swiftcart" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>Sell on SwiftCart</a></nav></div></div></header><main className="w-full pt-35 bg-background flex-1"><div className="flex flex-col w-full">

<div className="relative w-full overflow-hidden">
<div className="absolute -top-32 left-1/4 w-[600px] h-[350px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute top-20 right-10 w-[450px] h-[300px] bg-tertiary/5 rounded-full blur-3xl pointer-events-none"></div>

<div className="max-w-7xl mx-auto px-6 py-10 w-full">

<div className="flex flex-wrap items-center justify-between gap-4 mb-8">
<div className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
<a className="hover:text-primary transition-colors" data-path="home" href="#" onClick={() => alertToast('Action triggered')}>Marketplace</a>
<Icon name="chevron_right" className="text-[14px]" />
<a className="hover:text-primary transition-colors" data-path="cart" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>Cart</a>
<Icon name="chevron_right" className="text-[14px]" />
<span className="text-on-surface font-bold">Order Confirmation</span>
</div>
<div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-container-lowest shadow-sm">
<span className="inline-block w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse"></span>
<span className="font-label-md text-label-md text-tertiary font-bold tracking-wide uppercase">MoMo Transaction Approved</span>
<span className="text-surface-variant">•</span>
<span className="font-currency-code text-currency-code text-on-surface-variant">TXN-UG-8821037</span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-8 flex flex-col gap-6">

<div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm flex flex-col gap-6">
<div className="flex items-start gap-5">
<div className="w-14 h-14 rounded-2xl bg-tertiary/10 flex items-center justify-center shrink-0">
<Icon name="check_circle" className="text-tertiary text-[34px]" />
</div>
<div className="flex flex-col gap-1.5">
<div className="flex flex-wrap items-center gap-3">
<h1 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">Payment Authorized!</h1>
<span className="px-3 py-1 rounded-full bg-tertiary/10 text-tertiary font-label-md text-label-md font-bold flex items-center gap-1">
<Icon name="lock" className="text-[16px]" /> Escrow Vault Locked
                  </span>
</div>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  Order <span className="font-bold text-on-surface">#SC-UG-99482</span> has been confirmed. MTN MoMo payment of <span className="font-bold text-on-surface font-headline-sm text-headline-sm">UGX 232,000</span> is securely held in the SwiftCart Escrow Vault.
                </p>
<div className="flex items-center gap-2 mt-1 text-on-surface-variant font-body-sm text-body-sm">
<Icon name="schedule" className="text-outline text-[16px]" />
<span>Initiated today at 14:28 EAT • SafeBoda Express courier dispatched to SoundCore Acacia Mall</span>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-7 shadow-md flex flex-col gap-5">
<div className="flex flex-wrap items-center justify-between gap-3">
<div className="flex items-center gap-2">
<div className="w-2.5 h-6 bg-primary rounded-full"></div>
<span className="font-label-lg text-label-lg text-on-surface uppercase tracking-wider font-extrabold">Your 6-Digit Delivery Code</span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1 bg-surface-container-lowest rounded-full shadow-sm text-on-surface-variant font-label-sm text-label-sm">
<Icon name="sms" className="text-tertiary text-[14px]" />
<span>SMS sent to +256 772 345 678</span>
</div>
</div>

<div className="flex items-center justify-between gap-2 sm:gap-3 py-2">
<div className="flex-1 max-w-[80px] h-20 bg-surface-container-lowest rounded-xl flex items-center justify-center shadow-md">
<span className="font-headline-lg text-headline-lg font-extrabold text-on-surface tracking-normal">8</span>
</div>
<div className="flex-1 max-w-[80px] h-20 bg-surface-container-lowest rounded-xl flex items-center justify-center shadow-md">
<span className="font-headline-lg text-headline-lg font-extrabold text-on-surface tracking-normal">4</span>
</div>
<div className="flex-1 max-w-[80px] h-20 bg-surface-container-lowest rounded-xl flex items-center justify-center shadow-md">
<span className="font-headline-lg text-headline-lg font-extrabold text-on-surface tracking-normal">9</span>
</div>
<div className="flex-1 max-w-[80px] h-20 bg-surface-container-lowest rounded-xl flex items-center justify-center shadow-md">
<span className="font-headline-lg text-headline-lg font-extrabold text-on-surface tracking-normal">2</span>
</div>
<div className="flex-1 max-w-[80px] h-20 bg-surface-container-lowest rounded-xl flex items-center justify-center shadow-md">
<span className="font-headline-lg text-headline-lg font-extrabold text-on-surface tracking-normal">1</span>
</div>
<div className="flex-1 max-w-[80px] h-20 bg-surface-container-lowest rounded-xl flex items-center justify-center shadow-md">
<span className="font-headline-lg text-headline-lg font-extrabold text-on-surface tracking-normal">6</span>
</div>
</div>

<div className="bg-error-container/20 rounded-xl p-4 flex items-start gap-3.5">
<Icon name="gpp_maybe" className="text-error text-[22px] shrink-0 mt-0.5" />
<div className="flex flex-col gap-1">
<span className="font-label-md text-label-md text-error font-bold uppercase tracking-wide">Critical Escrow Security Rule</span>
<p className="font-body-sm text-body-sm text-on-surface leading-normal">
<span className="font-bold">DO NOT share this code with anyone over phone or WhatsApp.</span> Only share this 6-digit code with the SafeBoda rider in person <span className="underline font-bold decoration-error">AFTER</span> you open, inspect, and verify your item. Code submission instantly finalizes merchant payout.
                  </p>
</div>
</div>

<div className="flex flex-wrap items-center justify-between gap-4 pt-2">
<button className="h-10 px-4 rounded-lg bg-surface-container-lowest hover:bg-surface-container-high transition-colors font-label-md text-label-md text-on-surface flex items-center gap-2 shadow-sm" id="copyCodeBtn" onClick={() => alertToast('Action triggered')}>
<Icon name="content_copy" className="text-[18px]" />
<span id="copyBtnLabel">Copy 6-Digit Code</span>
</button>
<div className="flex items-center gap-4 text-on-surface-variant font-label-md text-label-md">
<button className="flex items-center gap-1.5 hover:text-primary transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="refresh" className="text-[18px]" />
<span>Resend SMS</span>
</button>
<span className="text-surface-variant">|</span>
<button className="flex items-center gap-1.5 hover:text-primary transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="share" className="text-[18px]" />
<span>Send to Family Member</span>
</button>
</div>
</div>
</div>

<div className="flex flex-col gap-5 pt-3">
<div className="flex items-center justify-between">
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Fulfillment &amp; Escrow Timeline</h2>
<span className="font-label-sm text-label-sm text-tertiary bg-tertiary/10 px-3 py-1 rounded-full font-bold">SafeBoda Priority Courier</span>
</div>

<div className="relative flex flex-col gap-6 pl-2">

<div className="absolute left-6 top-5 bottom-8 w-0.5 bg-surface-container-high"></div>

<div className="relative flex items-start gap-4">
<div className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-md text-label-md font-bold shadow-md ring-4 ring-primary/20 shrink-0 z-10">
<Icon name="inventory_2" className="text-[18px]" />
</div>
<div className="flex-1 bg-surface-container-low rounded-xl p-4 shadow-sm">
<div className="flex items-center justify-between gap-2 mb-1">
<span className="font-label-lg text-label-lg text-on-surface font-bold">1. Merchant Pack &amp; Dispatch</span>
<span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-bold">In Progress</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                      SoundCore Verified Official Hub at Acacia Mall (Kisementi) is packaging with tamper-evident SwiftCart holographic seal.
                    </p>
</div>
</div>

<div className="relative flex items-start gap-4">
<div className="w-9 h-9 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-label-md text-label-md font-bold shrink-0 z-10">
<Icon name="two_wheeler" className="text-[18px]" />
</div>
<div className="flex-1 bg-surface-container-lowest rounded-xl p-4 shadow-sm">
<div className="flex items-center justify-between gap-2 mb-1">
<span className="font-label-lg text-label-lg text-on-surface font-bold">2. SafeBoda Express Pickup &amp; Live Tracking</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Est. 15:10 EAT</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                      Assigned SafeBoda courier will pick up parcel, verify sealed barcode, and provide live GPS telemetry across Lugogo bypass.
                    </p>
</div>
</div>

<div className="relative flex items-start gap-4">
<div className="w-9 h-9 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-label-md text-label-md font-bold shrink-0 z-10">
<Icon name="pin" className="text-[18px]" />
</div>
<div className="flex-1 bg-surface-container-lowest rounded-xl p-4 shadow-sm">
<div className="flex items-center justify-between gap-2 mb-1">
<span className="font-label-lg text-label-lg text-on-surface font-bold">3. Handover, Inspection &amp; 6-Digit Code Exchange</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">At Your Doorstep</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                      Inspect packaging and test headphones. Only read the 6-digit code <span className="font-bold text-on-surface font-currency-code text-currency-code">[849216]</span> when completely satisfied.
                    </p>
</div>
</div>

<div className="relative flex items-start gap-4">
<div className="w-9 h-9 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-label-md text-label-md font-bold shrink-0 z-10">
<Icon name="lock_open" className="text-[18px]" />
</div>
<div className="flex-1 bg-surface-container-lowest rounded-xl p-4 shadow-sm">
<div className="flex items-center justify-between gap-2 mb-1">
<span className="font-label-lg text-label-lg text-on-surface font-bold">4. Automatic Escrow Release to Seller</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Fintech Clearing</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                      SafeBoda rider inputs code to confirm drop-off. The locked funds (UGX 232,000) clear to the SoundCore vendor wallet.
                    </p>
</div>
</div>
</div>
</div>

<div className="flex flex-wrap items-center gap-4 pt-6 mt-2 bg-surface-container-low rounded-xl p-5">
<button className="flex-1 min-w-[240px] h-13 px-6 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-xl font-label-lg text-label-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 transform active:scale-95" onClick={(e) => { e.preventDefault(); onNavigate?.('/order-tracking'); }}>
<Icon name="near_me" className="text-[20px]" />
<span>Track Live SafeBoda Delivery</span>
</button>
<button className="h-13 px-6 bg-surface-container-lowest text-on-surface hover:bg-surface-container-high rounded-xl font-label-lg text-label-lg transition-colors flex items-center justify-center gap-2 shadow-sm" onClick={() => alertToast('Action triggered')}>
<Icon name="receipt_long" className="text-[20px]" />
<span>View Order Details &amp; Receipt</span>
</button>
<a className="h-13 px-5 text-on-surface-variant hover:text-primary rounded-xl font-label-lg text-label-lg transition-colors flex items-center justify-center gap-1.5" data-path="home" href="#" onClick={() => alertToast('Action triggered')}>
<span>Return to Marketplace</span>
<Icon name="arrow_forward" className="text-[18px]" />
</a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">SafeBoda Average Transit</span>
<Icon name="bolt" className="text-primary text-[20px]" />
</div>
<span className="font-headline-sm text-headline-sm font-extrabold text-on-surface">38 Mins</span>
<div className="flex items-center gap-1.5 text-tertiary font-label-sm text-label-sm font-semibold">
<Icon name="trending_down" className="text-[16px]" />
<span>12% faster than regular bodas</span>
</div>
</div>
<div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">Escrow Vault Retention</span>
<Icon name="verified" className="text-tertiary text-[20px]" />
</div>
<span className="font-headline-sm text-headline-sm font-extrabold text-on-surface">UGX 232,000</span>
<div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
<span>Protected until code input</span>
</div>
</div>
<div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">Swift Loyalty Earned</span>
<Icon name="stars" className="text-secondary text-[20px]" />
</div>
<span className="font-headline-sm text-headline-sm font-extrabold text-on-surface">+2,400 Pts</span>
<div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
<span>Redeemable on next order</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-6">

<div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col gap-4">
<div className="flex items-center justify-between">
<h3 className="font-label-lg text-label-lg text-on-surface uppercase tracking-wide font-extrabold">Delivery Destination</h3>
<span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="flash_on" className="text-[14px]" /> Express
              </span>
</div>

<div className="w-full h-36 bg-cover bg-center rounded-xl relative overflow-hidden shadow-inner flex items-end p-3" data-location="Kololo Philip Road Kampala Uganda" style={{"backgroundImage":"url('/images/9646a64904fadaac.webp')"}}>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="relative z-10 flex items-center gap-2 text-surface-bright font-label-md text-label-md">
<Icon name="pin_drop" className="text-primary text-[20px]" />
<span className="font-bold">Kololo Heights • Kampala</span>
</div>
</div>
<div className="flex flex-col gap-1.5 pt-1">
<div className="flex items-start gap-2.5">
<Icon name="home" className="text-outline text-[20px] shrink-0 mt-0.5" />
<div className="flex flex-col">
<span className="font-body-lg text-body-lg text-on-surface font-bold">Destination: Residence</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Plot 14 Philip Road, Kololo, Kampala</span>
<span className="font-label-sm text-label-sm text-outline mt-0.5">Special note: Gate 2B behind the avocado tree</span>
</div>
</div>
</div>
<div className="bg-surface-container-low rounded-xl p-3.5 flex items-center gap-3">
<Icon name="alarm" className="text-primary text-[24px]" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Estimated Arrival Window</span>
<span className="font-body-sm text-body-sm text-primary font-semibold">Today, 3:45 PM – 4:15 PM</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col gap-4">
<div className="flex items-center justify-between">
<h3 className="font-label-lg text-label-lg text-on-surface uppercase tracking-wide font-extrabold">Order Summary (1 Item)</h3>
<span className="font-currency-code text-currency-code text-on-surface-variant font-bold">#SC-UG-99482</span>
</div>

<div className="flex gap-4 items-center py-2">
<div className="w-20 h-20 rounded-xl overflow-hidden bg-surface-container-high shrink-0 shadow-sm relative">
<img className="w-full h-full object-cover" data-alt="SoundCore Space One ANC Wireless Over-Ear Headphones in Matte Black with premium packaging and sound isolation earcups on a sleek neutral studio pedestal, crisp studio lighting" src={`${assetBase}/images/cce16d69887139e1.webp`} />
</div>
<div className="flex flex-col flex-1 min-w-0">
<span className="font-label-sm text-label-sm text-tertiary font-bold uppercase tracking-wider">Official Brand Store</span>
<h4 className="font-body-md text-body-md text-on-surface font-bold truncate">SoundCore Space One ANC Wireless</h4>
<span className="font-body-sm text-body-sm text-on-surface-variant">Color: Matte Black • Qty: 1</span>
<div className="flex items-center justify-between mt-1">
<span className="font-price-display text-price-display text-on-surface font-extrabold">UGX 232,000</span>
<span className="line-through font-body-sm text-body-sm text-outline">UGX 248,500</span>
</div>
</div>
</div>

<div className="flex flex-col gap-2.5 pt-3 bg-surface-container-low rounded-xl p-4">
<div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant">
<span>Subtotal</span>
<span>UGX 248,500</span>
</div>
<div className="flex justify-between font-body-sm text-body-sm text-tertiary">
<span>Flash Deal Discount</span>
<span>- UGX 26,500</span>
</div>
<div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant">
<span>SafeBoda Express Dispatch</span>
<span>UGX 10,000</span>
</div>
<div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant">
<span>Swift Escrow Custody Fee</span>
<span className="font-semibold text-tertiary">FREE</span>
</div>
<div className="h-px bg-surface-container-highest my-1"></div>
<div className="flex justify-between items-center font-headline-sm text-headline-sm font-bold text-on-surface">
<span>Total Paid</span>
<span className="text-primary font-extrabold">UGX 232,000</span>
</div>
<div className="flex items-center gap-2 mt-1">
<div className="w-4 h-4 rounded-full bg-[#FFCC00] flex items-center justify-center text-[9px] font-extrabold text-black">M</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Charged via MTN MoMo (*165#)</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center shrink-0">
<Icon name="policy" className="text-[22px]" />
</div>
<div className="flex flex-col">
<h3 className="font-label-lg text-label-lg text-on-surface font-extrabold">Swift Escrow Protection</h3>
<span className="font-label-sm text-label-sm text-tertiary font-bold">100% Fund Safety Guarantee</span>
</div>
</div>
<ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
<li className="flex items-start gap-2.5">
<Icon name="check" className="text-tertiary text-[18px] shrink-0" />
<span><strong className="text-on-surface">48-Hour Return Window:</strong> Even after exchanging the code, you hold 48 hours to initiate replacement if authentic defects are found.</span>
</li>
<li className="flex items-start gap-2.5">
<Icon name="check" className="text-tertiary text-[18px] shrink-0" />
<span><strong className="text-on-surface">Zero Leakage Guarantee:</strong> Money stays locked in our regulated escrow ledger under Bank of Uganda retail guidelines.</span>
</li>
<li className="flex items-start gap-2.5">
<Icon name="check" className="text-tertiary text-[18px] shrink-0" />
<span><strong className="text-on-surface">Immediate Dispute Hold:</strong> Issue an escrow block with one click if wrong size, color, or open seals are received.</span>
</li>
</ul>
<div className="pt-2 flex items-center justify-between bg-surface-container-high/50 p-3.5 rounded-xl">
<div className="flex items-center gap-2 text-on-surface font-label-md text-label-md">
<Icon name="support_agent" className="text-outline text-[18px]" />
<span>Dispute Toll-Free:</span>
</div>
<a className="font-headline-sm text-headline-sm font-extrabold text-primary hover:underline" href="tel:0800220800" onClick={() => alertToast('Action triggered')}>0800 220 800</a>
</div>
</div>

<div className="bg-surface-container-high/40 rounded-xl p-5 flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center shrink-0 shadow-sm text-primary">
<Icon name="shield_person" className="text-[26px]" />
</div>
<div className="flex flex-col gap-0.5">
<span className="font-label-md text-label-md text-on-surface font-bold">SafeBoda Helmet ID Verification</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Match rider jacket #SB-2041 before taking the parcel. Never pay extra cash tip requests.
              </p>
</div>
</div>
</div>
</div>

<div className="mt-12 bg-surface-container-lowest rounded-xl p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-2xl bg-secondary-container/30 text-secondary flex items-center justify-center shrink-0">
<Icon name="storefront" className="text-[30px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">SoundCore Official Uganda</span>
<Icon name="verified" className="text-tertiary text-[18px]" />
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              Acacia Mall, Level 1 Shop 14B • 4.9 Rating (1,420+ Kampala Deliveries)
            </p>
</div>
</div>
<div className="flex items-center gap-4">
<button className="h-11 px-5 rounded-xl bg-surface-container-high hover:bg-surface-container-highest transition-colors font-label-md text-label-md text-on-surface flex items-center gap-2" onClick={() => alertToast('Action triggered')}>
<Icon name="chat" className="text-[18px]" />
<span>Direct Vendor WhatsApp</span>
</button>
<button className="h-11 px-5 rounded-xl bg-surface-container-high hover:bg-surface-container-highest transition-colors font-label-md text-label-md text-on-surface flex items-center gap-2" onClick={() => alertToast('Action triggered')}>
<Icon name="download" className="text-[18px]" />
<span>Tax Invoice (PDF)</span>
</button>
</div>
</div>
</div>
</div>


</div></main><footer className="w-full bg-[#0c1322] text-white pt-10 pb-8 mt-12 border-t border-slate-800 font-body-sm text-body-sm"><div className="max-w-7xl mx-auto px-6"><div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-10 border-b border-slate-800"><div className="flex items-center gap-3.5"><div className="w-11 h-11 rounded-xl bg-tertiary/20 text-tertiary flex items-center justify-center shrink-0"><Icon name="verified_user" className="text-[24px]" /></div><div className="flex flex-col"><span className="font-label-md text-label-md font-bold text-white">100% Escrow Protection</span><span className="text-slate-400 font-body-sm text-body-sm">Funds safe until you inspect</span></div></div><div className="flex items-center gap-3.5"><div className="w-11 h-11 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0"><Icon name="two_wheeler" className="text-[24px]" /></div><div className="flex flex-col"><span className="font-label-md text-label-md font-bold text-white">45-Min SafeBoda City Hub</span><span className="text-slate-400 font-body-sm text-body-sm">Live courier GPS tracking</span></div></div><div className="flex items-center gap-3.5"><div className="w-11 h-11 rounded-xl bg-[#FFCC00]/20 text-[#FFCC00] flex items-center justify-center shrink-0"><Icon name="payments" className="text-[24px]" /></div><div className="flex flex-col"><span className="font-label-md text-label-md font-bold text-white">Zero MoMo Fees</span><span className="text-slate-400 font-body-sm text-body-sm">Instant MTN &amp; Airtel checkout</span></div></div><div className="flex items-center gap-3.5"><div className="w-11 h-11 rounded-xl bg-secondary/20 text-secondary-container flex items-center justify-center shrink-0"><Icon name="shield" className="text-[24px]" /></div><div className="flex flex-col"><span className="font-label-md text-label-md font-bold text-white">URSB Certified Stores</span><span className="text-slate-400 font-body-sm text-body-sm">Kampala verified vendors</span></div></div></div><div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-10 border-b border-slate-800"><div className="space-y-4"><div className="flex items-center gap-2"><img alt="swiftcart-logo-final.png" className="h-7 w-auto object-contain" src={`${assetBase}/images/5b99427efcba69e4.webp`} /><span className="font-headline-sm text-headline-sm text-white font-bold">SwiftCart</span></div><p className="text-slate-300 font-body-sm text-body-sm leading-relaxed">Uganda's premier commerce marketplace. High-trust escrow releases, real-time SafeBoda dispatch, and verified local merchant hubs across Kampala, Entebbe, and Jinja.</p><div className="flex flex-col gap-2 pt-1 text-slate-300 text-body-sm"><div className="flex items-center gap-2"><Icon name="call" className="text-primary text-[18px]" /><span>Toll-Free Hotline: <a className="text-white font-bold hover:underline" href="tel:+256800220800" onClick={() => alertToast('Action triggered')}>+256 800 220 800</a></span></div><div className="flex items-center gap-2"><Icon name="chat" className="text-tertiary text-[18px]" /><span>WhatsApp Concierge: <a className="text-white font-bold hover:underline" href="https://wa.me/256701498442" onClick={() => alertToast('Action triggered')}>+256 701 498 442</a></span></div><div className="flex items-start gap-2"><Icon name="location_on" className="text-outline text-[18px] shrink-0 mt-0.5" /><span>Plot 18 Lumumba Ave, Nakasero &amp; Acacia Mall Shop 14B</span></div></div></div><div><h4 className="font-label-lg text-label-lg text-white font-bold mb-4">Top Categories</h4><ul className="space-y-2.5 text-slate-300 font-body-sm text-body-sm"><li><a className="hover:text-primary transition-colors" data-path="category-phones" href="#" onClick={() => alertToast('Action triggered')}>Smartphones &amp; Tablets</a></li><li><a className="hover:text-primary transition-colors" data-path="category-audio" href="#" onClick={() => alertToast('Action triggered')}>Audio &amp; Headphones</a></li><li><a className="hover:text-primary transition-colors" data-path="category-kikuubo" href="#" onClick={() => alertToast('Action triggered')}>Kikuubo Wholesale Sacks</a></li><li><a className="hover:text-primary transition-colors" data-path="category-kitenge" href="#" onClick={() => alertToast('Action triggered')}>Kitenge Tailored Fashion</a></li><li><a className="hover:text-primary transition-colors" data-path="category-organics" href="#" onClick={() => alertToast('Action triggered')}>Nilotica Shea &amp; Organics</a></li><li><a className="hover:text-primary transition-colors" data-path="category-boda-spares" href="#" onClick={() => alertToast('Action triggered')}>Motorcycle &amp; Boda Spares</a></li></ul></div><div><h4 className="font-label-lg text-label-lg text-white font-bold mb-4">Buyer Protection</h4><ul className="space-y-2.5 text-slate-300 font-body-sm text-body-sm"><li><a className="hover:text-primary transition-colors" data-path="how-escrow-works" href="#" onClick={() => alertToast('Action triggered')}>How Escrow Protection Works</a></li><li><a className="hover:text-primary transition-colors" data-path="returns-refunds" href="#" onClick={() => alertToast('Action triggered')}>Returns &amp; 15-Minute Refunds</a></li><li><a className="hover:text-primary transition-colors" data-path="safeboda-rates" href="#" onClick={() => alertToast('Action triggered')}>SafeBoda Dispatch Rates</a></li><li><a className="hover:text-primary transition-colors" data-path="vendor-verification" href="#" onClick={() => alertToast('Action triggered')}>Vendor Verification Process</a></li><li><a className="hover:text-primary transition-colors" data-path="report-counterfeit" href="#" onClick={() => alertToast('Action triggered')}>Report Counterfeit Product</a></li><li><a className="hover:text-primary transition-colors" data-path="dispute-board" href="#" onClick={() => alertToast('Action triggered')}>Dispute Resolution Board</a></li></ul></div><div><h4 className="font-label-lg text-label-lg text-white font-bold mb-4">Verified Payment Rails</h4><p className="text-slate-300 font-body-sm text-body-sm mb-3">Direct real-time checkout powered by authorized Ugandan telecommunication systems.</p><div className="flex flex-wrap gap-2 mb-4"><span className="px-2.5 py-1 bg-slate-800/80 rounded border border-slate-700 text-[11px] font-bold text-white">MTN MoMo (*165#)</span><span className="px-2.5 py-1 bg-slate-800/80 rounded border border-slate-700 text-[11px] font-bold text-white">Airtel Money (*185#)</span><span className="px-2.5 py-1 bg-slate-800/80 rounded border border-slate-700 text-[11px] font-bold text-white">Visa</span><span className="px-2.5 py-1 bg-slate-800/80 rounded border border-slate-700 text-[11px] font-bold text-white">Mastercard</span><span className="px-2.5 py-1 bg-slate-800/80 rounded border border-slate-700 text-[11px] font-bold text-white">Cash on Delivery (Swift Hub)</span></div><div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800 flex items-center gap-3"><Icon name="account_balance" className="text-tertiary text-[24px]" /><div className="flex flex-col"><span className="font-label-sm text-label-sm font-bold text-white">Audited Escrow Trust Account</span><span className="text-[11px] text-slate-400">Custody guaranteed under Bank of Uganda guidelines</span></div></div></div></div><div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-label-sm text-label-sm text-slate-400"><div className="flex items-center gap-6"><span>© 2025 SwiftCart Uganda Ltd. Registered under Uganda Registration Services Bureau (URSB) &amp; Uganda Revenue Authority. All prices in UGX with 0 decimals.</span></div><div className="flex items-center gap-6"><a className="hover:text-white transition-colors" data-path="privacy-policy" href="#" onClick={() => alertToast('Action triggered')}>Privacy Policy</a><a className="hover:text-white transition-colors" data-path="terms-of-escrow" href="#" onClick={() => alertToast('Action triggered')}>Terms of Escrow</a><a className="hover:text-white transition-colors" data-path="merchant-code-of-conduct" href="#" onClick={() => alertToast('Action triggered')}>Merchant Code of Conduct</a></div></div></div></footer>
    </div>
  );
};

export default Screen;
