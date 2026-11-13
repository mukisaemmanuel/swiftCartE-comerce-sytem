// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/buyer/mtn_momo_ussd_pin_prompt_tablet/code.html
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
  const [, setDrawerOpen] = useState(false);
  const [, setModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-background font-body-md text-on-surface antialiased relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base { html, body { margin: 0; padding: 0; } body { overscroll-behavior: none; } main > :first-child { margin-top: 0 !important; } main > :last-child { margin-bottom: 0 !important; } } ::-webkit-scrollbar { display: none; }
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_2px_12px_rgba(15,23,42,0.06)]"><div className="h-28 max-w-6xl mx-auto px-4 flex flex-col justify-between py-2"><div className="flex items-center justify-between gap-3"><div className="flex items-center gap-3 shrink-0"><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><span className="font-headline-sm text-headline-sm font-bold text-on-surface tracking-tight hidden sm:inline">SwiftCart</span><button className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" onClick={() => alertToast('Action triggered')}><Icon name="location_on" className="text-primary text-[18px]" /><div className="flex flex-col text-left leading-none"><span className="font-label-sm text-label-sm text-secondary uppercase">Deliver to</span><span className="font-label-md text-label-md font-semibold text-on-surface truncate max-w-[110px]">Kampala Central</span></div><Icon name="expand_more" className="text-[16px]" /></button></div><div className="flex-1 max-w-lg mx-2"><div className="flex items-center h-10 rounded-lg bg-surface-container-low px-2 gap-2 focus-within:bg-surface-container-lowest focus-within:ring-2 focus-within:ring-primary-container transition-all"><button className="flex items-center gap-1 font-label-md text-label-md text-on-surface-variant shrink-0 pr-2" onClick={() => alertToast('Action triggered')}><span>All Goods</span><Icon name="arrow_drop_down" className="text-[16px]" /></button><div className="w-px h-5 bg-outline-variant"></div><input className="w-full bg-transparent font-body-sm text-body-sm text-on-surface placeholder:text-on-secondary-container focus:outline-none" placeholder="Search authentic products, brands, essentials..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} /><button className="h-8 px-3 rounded bg-primary-container text-on-primary flex items-center justify-center hover:opacity-95 transition-opacity" onClick={() => alertToast('Action triggered')}><Icon name="search" className="text-[18px]" /></button></div></div><div className="flex items-center gap-2.5 shrink-0"><div className="hidden md:flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container text-tertiary font-label-sm text-label-sm font-semibold"><Icon name="bolt" className="text-tertiary text-[15px]" /><span>Kampala Same-Day Dispatch</span></div><button className="relative p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}><Icon name="favorite" className="text-[22px]" /><span className="absolute top-1 right-1 h-4 min-w-[16px] px-1 bg-secondary text-on-secondary rounded-full font-label-sm text-label-sm flex items-center justify-center font-bold leading-none">4</span></button><button className="relative p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors" onClick={() => alertToast('Action triggered')}><Icon name="shopping_bag" className="text-[22px]" /><span className="absolute top-1 right-1 h-4 min-w-[16px] px-1 bg-primary text-on-primary rounded-full font-label-sm text-label-sm flex items-center justify-center font-bold leading-none">3</span></button><div className="flex items-center gap-2 pl-1"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div><span className="hidden lg:inline font-label-md text-label-md text-on-surface font-semibold">Sarah</span></div></div></div><nav className="flex items-center gap-1 overflow-x-auto py-1 scrollbar-none" data-active-classes="bg-primary-container text-on-primary font-bold rounded-md shadow-sm"><a className="px-3 py-1 font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-md whitespace-nowrap transition-colors" data-path="cart---multi-vendor-tablet" href="#" onClick={() => alertToast('Action triggered')}>Super Deals</a><a className="px-3 py-1 font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-md whitespace-nowrap transition-colors" data-path="pickup-station-chooser-tablet" href="#" onClick={() => alertToast('Action triggered')}>Phones &amp; Tablets</a><a className="px-3 py-1 font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-md whitespace-nowrap transition-colors" data-path="payment-methods-&-add-momo-tablet" href="#" onClick={() => alertToast('Action triggered')}>Electronics &amp; Audio</a><a aria-current="page" className="px-3 py-1 whitespace-nowrap transition-colors bg-primary-container text-on-primary font-bold rounded-md shadow-sm" data-path="mtn-momo-ussd-pin-prompt-tablet" href="#" onClick={() => alertToast('Action triggered')}>Fashion</a><a className="px-3 py-1 font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-md whitespace-nowrap transition-colors" data-path="home-&-living" href="#" onClick={() => alertToast('Action triggered')}>Home &amp; Living</a><a className="px-3 py-1 font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-md whitespace-nowrap transition-colors" data-path="groceries" href="#" onClick={() => alertToast('Action triggered')}>Groceries</a></nav></div></header><main className="w-full pt-28 bg-background min-h-screen"><div className="max-w-6xl mx-auto px-4 py-4"><div className="flex flex-col w-full relative">

<div className="w-full opacity-35 pointer-events-none select-none blur-[1px]">

<div className="flex items-center justify-between mb-6 px-2">
<div className="flex items-center gap-2">
<span className="w-7 h-7 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center font-label-sm text-label-sm">✓</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">1. Delivery</span>
</div>
<div className="h-0.5 w-16 bg-surface-container-highest"></div>
<div className="flex items-center gap-2">
<span className="w-7 h-7 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-sm text-label-sm">2</span>
<span className="font-label-md text-label-md text-primary font-bold">2. Payment</span>
</div>
<div className="h-0.5 w-16 bg-surface-container-highest"></div>
<div className="flex items-center gap-2">
<span className="w-7 h-7 rounded-full bg-surface-container text-secondary flex items-center justify-center font-label-sm text-label-sm">3</span>
<span className="font-label-md text-label-md text-secondary">3. Order Confirmation</span>
</div>
</div>

<div className="grid grid-cols-12 gap-5 mb-8">
<div className="col-span-7 flex flex-col gap-4">

<div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm">
<div className="flex items-center justify-between mb-3">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Delivery Destination</span>
<span className="text-tertiary font-label-sm text-label-sm font-semibold flex items-center gap-1">
<Icon name="electric_moped" className="text-[16px]" /> Kampala Boda Express
            </span>
</div>
<p className="font-headline-sm text-headline-sm text-on-surface font-bold">Acacia Mall Office Suite 4B</p>
<p className="font-body-md text-body-md text-on-surface-variant">Plot 14-18 Acacia Avenue, Kololo, Kampala</p>
<p className="font-body-sm text-body-sm text-secondary mt-1">Recipient: Dennis Mukasa (+256 772 ••• 456)</p>
</div>

<div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-3">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Items in Cart (2 Packages)</span>
<div className="flex items-center gap-3 py-2 bg-surface-container-low p-2 rounded-lg">
<img className="w-14 h-14 rounded-lg object-cover" data-alt="Sony WH-1000XM5 wireless noise cancelling headphones in matte black finish, product catalog photography studio lighting on clean background" src={`${assetBase}/images/dc34840ea1b436ee.webp`} />
<div className="flex-1">
<div className="inline-block px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm">Verified Merchant</div>
<p className="font-label-lg text-label-lg text-on-surface font-bold truncate">Sony WH-1000XM5 Wireless Headphones</p>
<p className="font-label-md text-label-md text-primary font-bold">UGX 345,000</p>
</div>
</div>
<div className="flex items-center gap-3 py-2 bg-surface-container-low p-2 rounded-lg">
<img className="w-14 h-14 rounded-lg object-cover" data-alt="Anker 65W GaN dual port fast wall charger with braided type-C cable, premium retail electronics photography on light surface" src={`${assetBase}/images/d95d0abf3539741d.webp`} />
<div className="flex-1">
<div className="inline-block px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm">Official Store</div>
<p className="font-label-lg text-label-lg text-on-surface font-bold truncate">Anker 65W GaN Fast Charger + Cable</p>
<p className="font-label-md text-label-md text-primary font-bold">UGX 43,500</p>
</div>
</div>
</div>
</div>

<div className="col-span-5 flex flex-col gap-4">
<div className="p-5 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-3">
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Order Summary</h3>
<div className="flex justify-between font-body-md text-body-md text-on-surface-variant">
<span>Subtotal (2 items)</span>
<span className="font-semibold text-on-surface">UGX 388,500</span>
</div>
<div className="flex justify-between font-body-md text-body-md text-on-surface-variant">
<span>Kololo Priority Delivery</span>
<span className="text-tertiary font-semibold">FREE (Promo)</span>
</div>
<div className="flex justify-between font-body-md text-body-md text-on-surface-variant">
<span>Escrow Protection Fee</span>
<span className="text-tertiary font-semibold">Waived</span>
</div>
<div className="my-1 h-px bg-surface-container"></div>
<div className="flex justify-between items-baseline">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Total Payable</span>
<span className="font-headline-md text-headline-md font-bold text-primary">UGX 388,500</span>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/40 backdrop-blur-sm">
<div className="w-full max-w-[480px] bg-surface-container-lowest rounded-2xl shadow-2xl overflow-hidden flex flex-col relative transform transition-all">

<div className="bg-[#FFCC00] px-4 py-2 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-black text-[#FFCC00] flex items-center justify-center font-bold text-[10px] tracking-tighter">
            MTN
          </div>
<span className="font-label-sm text-label-sm font-bold text-black tracking-tight">
            MTN Mobile Money Gateway • Bank of Uganda Regulated
          </span>
</div>
<div className="flex items-center gap-1 text-black/80 font-label-sm text-label-sm font-semibold">
<Icon name="lock" className="text-[14px]" /> 256-Bit SSL
        </div>
</div>

<button aria-label="Close dialog" className="absolute top-11 right-4 p-1.5 rounded-full text-secondary hover:text-on-surface hover:bg-surface-container transition-colors" onClick={() => { setDrawerOpen(false); setModalOpen(false); }}>
<Icon name="close" className="text-[20px]" />
</button>

<div className="p-6 pt-5 flex flex-col items-center text-center">

<div className="relative w-24 h-24 my-2 flex items-center justify-center">

<div className="absolute inset-0 rounded-full bg-primary-container/10 animate-ping opacity-75"></div>
<div className="absolute inset-2 rounded-full bg-[#FFCC00]/25 animate-pulse"></div>
<div className="relative w-16 h-16 rounded-2xl bg-surface-container flex flex-col items-center justify-center shadow-md">
<Icon name="smartphone" className="text-[#b02f00] text-[28px]" />
<span className="font-label-sm text-[9px] font-extrabold text-[#541200] leading-none mt-0.5 tracking-tight">*165# SENT</span>
</div>

<span className="absolute top-1 right-2 flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-tertiary"></span>
</span>
</div>

<h2 className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight mt-1">
          Authorize Payment on Your Phone
        </h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-sm mt-1 mb-4">
          We have sent an instant prompt to your MTN phone number:
        </p>

<div className="w-full bg-[#FFFBEB] rounded-xl p-4 text-left shadow-sm mb-4">
<div className="flex items-center justify-between pb-2 mb-2 bg-[#FEF3C7]/60 p-2 rounded-lg">
<div className="flex items-center gap-2">
<Icon name="sim_card" className="text-[#B45309] text-[20px]" />
<div>
<p className="font-label-sm text-label-sm text-secondary uppercase font-semibold">MTN Subscriber</p>
<p className="font-label-lg text-label-lg text-on-surface font-bold">+256 772 ••• 456 <span className="text-secondary font-medium">(Dennis M.)</span></p>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-[#15803D]/10 text-[#15803D] font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-[#15803D]"></span> Active
            </span>
</div>
<div className="grid grid-cols-2 gap-3 pt-1 text-left">
<div>
<span className="font-label-sm text-label-sm text-secondary block">Escrow Merchant</span>
<span className="font-label-md text-label-md font-bold text-on-surface flex items-center gap-1 truncate">
                SwiftCart Escrow Vault
              </span>
<span className="font-label-sm text-[10px] text-secondary">Reg #SC-PAY-9488</span>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-secondary block">Amount to Lock</span>
<span className="font-headline-sm text-headline-sm font-extrabold text-primary">UGX 388,500</span>
<span className="font-label-sm text-[10px] text-secondary">Ref: #ORD-9488</span>
</div>
</div>
</div>

<div className="w-full bg-surface-container-low rounded-xl p-3.5 mb-4 text-left">
<span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary block mb-2">
            Quick 3-Step Verification
          </span>
<div className="space-y-2">
<div className="flex items-start gap-2.5">
<span className="w-5 h-5 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
<p className="font-body-sm text-body-sm text-on-surface font-medium leading-tight">
                Check your phone screen for the <span className="font-bold">MTN MoMo pop-up</span> dialog.
              </p>
</div>
<div className="flex items-start gap-2.5">
<span className="w-5 h-5 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
<p className="font-body-sm text-body-sm text-on-surface font-medium leading-tight">
                Enter your <span className="font-bold text-primary">4-digit or 5-digit PIN</span> carefully.
              </p>
</div>
<div className="flex items-start gap-2.5">
<span className="w-5 h-5 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
<p className="font-body-sm text-body-sm text-on-surface font-medium leading-tight">
                Tap <span className="font-bold text-on-surface">"Send / OK"</span> to approve the escrow authorization.
              </p>
</div>
</div>
</div>

<div className="w-full flex items-center justify-between gap-2 p-2.5 rounded-lg bg-surface-container mb-4">

<div className="flex items-center gap-2">
<svg className="animate-spin h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
<path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path>
</svg>
<span className="font-label-sm text-label-sm font-semibold text-on-surface-variant truncate">
              Awaiting network approval...
            </span>
</div>

<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-lowest shadow-sm text-primary font-bold font-label-sm text-label-sm shrink-0">
<Icon name="timer" className="text-[15px] text-primary" />
<span id="countdown-timer">Expires in 01:45</span>
</div>
</div>

<div className="w-full flex flex-col gap-2.5">
<button className="w-full h-11 rounded-lg bg-surface-container-low text-secondary font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 hover:bg-surface-container transition-colors disabled:opacity-60 cursor-not-allowed" disabled={true} id="resend-btn" onClick={() => alertToast('Action triggered')}>
<Icon name="refresh" className="text-[18px]" />
<span>Resend USSD Prompt (in <span id="resend-countdown">28</span>s)</span>
</button>
<button className="w-full py-2 text-center font-label-md text-label-md text-primary font-semibold hover:underline flex items-center justify-center gap-1 transition-all" onClick={() => alertToast('Action triggered')}>
<Icon name="swap_horiz" className="text-[16px]" />
            Switch to Airtel Money or Visa / Mastercard
          </button>
</div>

<div className="mt-4 pt-3 flex items-start gap-2 text-left bg-surface-container-lowest">
<Icon name="verified_user" className="text-tertiary text-[18px] shrink-0 mt-0.5" />
<p className="font-body-sm text-[11px] leading-relaxed text-secondary">
<span className="font-semibold text-on-surface">100% Escrow Protection:</span> No funds leave your account until you enter your confidential PIN. Money remains safely locked in the SwiftCart Vault until Dennis inspects and verifies delivery.
          </p>
</div>
</div>
</div>
</div>
</div>
</div></main><footer className="w-full bg-surface-container-lowest mt-12 shadow-[0_-2px_12px_rgba(15,23,42,0.03)]"><div className="max-w-6xl mx-auto px-4 py-8"><div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-8"><div className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-container-low"><div className="h-10 w-10 rounded-lg bg-surface-container flex items-center justify-center text-primary"><Icon name="verified_user" className="text-[24px]" /></div><div><h4 className="font-label-lg text-label-lg text-on-surface font-bold">MTN &amp; Airtel MoMo Escrow</h4><p className="font-body-sm text-body-sm text-on-surface-variant">Funds released only after inspection</p></div></div><div className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-container-low"><div className="h-10 w-10 rounded-lg bg-surface-container flex items-center justify-center text-tertiary"><Icon name="two_wheeler" className="text-[24px]" /></div><div><h4 className="font-label-lg text-label-lg text-on-surface font-bold">1-Hour Kampala Boda Dispatch</h4><p className="font-body-sm text-body-sm text-on-surface-variant">Direct to home, office, or central pickup hub</p></div></div><div className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-container-low"><div className="h-10 w-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary"><Icon name="assignment_return" className="text-[24px]" /></div><div><h4 className="font-label-lg text-label-lg text-on-surface font-bold">7-Day Free Hub Returns</h4><p className="font-body-sm text-body-sm text-on-surface-variant">Hassle-free refunds across 42 pickup spots</p></div></div></div><div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4"><div className="flex flex-wrap gap-6 font-label-md text-label-md text-on-surface-variant"><a className="hover:text-on-surface transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Kampala Pickup Hubs</a><a className="hover:text-on-surface transition-colors" href="#" onClick={() => alertToast('Action triggered')}>MoMo Payment Guarantee</a><a className="hover:text-on-surface transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Uganda Merchant Portal</a><a className="hover:text-on-surface transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}>Help Center &amp; WhatsApp Support</a></div><p className="font-body-sm text-body-sm text-secondary">© 2025 SwiftCart Uganda Ltd. Registered under URA &amp; NITA-U. All rights reserved.</p></div></div></footer>
    </div>
  );
};

export default Tablet;
