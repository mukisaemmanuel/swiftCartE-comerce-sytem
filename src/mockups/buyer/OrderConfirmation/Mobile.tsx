// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/buyer/order_confirmation_delivery_code/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';

export interface MobileProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Mobile: React.FC<MobileProps> = (props) => {
  const onNavigate = props.onNavigate;
  const assetBase = import.meta.env.VITE_ASSET_BASE ?? '';
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface flex flex-col min-h-screen relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{width:100%;margin:0;padding:0;}body{overscroll-behavior:none;}.pb-safe{padding-bottom:env(safe-area-inset-bottom,0px);}.pt-safe{padding-top:env(safe-area-inset-top,0px);}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}

    body {
      min-height: max(884px, 100dvh);
    }
  
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-gutter flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-xs min-w-0"><button aria-label="Go Back" className="w-11 h-11 flex items-center justify-center text-on-surface hover:text-primary transition-colors -ml-2" onClick={() => alertToast('Action triggered')}><Icon name="arrow_back" className="text-[24px]" /></button><img alt="swiftcart-logo-final.png" className="h-7 w-auto object-contain flex-shrink-0" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><h1 className="font-headline-sm text-headline-sm text-on-surface font-bold truncate leading-tight ml-1">Order Confirmation</h1></div><div className="flex items-center gap-space-xs"><button aria-label="Quick Actions" className="w-11 h-11 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" type="button" onClick={() => alertToast('Action triggered')}><Icon name="more_vert" className="text-[22px]" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header><main className="flex-1 flex flex-col relative w-full pt-16 pb-safe bg-surface"><div className="flex flex-col w-full px-margin pb-space-xl">

<div className="relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-md p-space-lg text-center mt-space-md mb-space-md flex flex-col items-center">

<div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-fixed/40 rounded-full blur-xl pointer-events-none"></div>
<div className="absolute -bottom-8 -left-8 w-28 h-28 bg-tertiary-fixed/30 rounded-full blur-xl pointer-events-none"></div>

<div className="absolute top-4 right-8 text-primary animate-pulse">
<Icon name="auto_awesome" className="text-[20px]" />
</div>
<div className="absolute top-8 left-7 text-primary-container opacity-80">
<Icon name="arrow_back_ios_new" className="text-[16px]" />
</div>
<div className="absolute bottom-4 right-12 text-tertiary opacity-70">
<Icon name="verified" className="text-[18px]" />
</div>

<div className="relative mb-space-sm flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-tertiary-container/20 flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center shadow-md">
<Icon name="check" className="text-on-tertiary text-[28px] font-bold" />
</div>
</div>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface font-extrabold tracking-tight">Order Placed Successfully!</h2>
<p className="font-body-md text-body-md text-secondary font-medium mt-1">Order #SC-ORD-9488 • Paid via MTN Mobile Money (UGX 253,500)</p>
<div className="mt-space-xs inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
<Icon name="schedule" className="text-[13px] text-tertiary" />
<span>Today, 14:24 EAT</span>
</div>
</div>

<div className="rounded-xl bg-surface-container-lowest shadow-md p-space-lg mb-space-md flex flex-col">

<div className="flex items-center justify-between pb-space-sm">
<div className="flex items-center gap-1.5">
<div className="w-6 h-6 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
<Icon name="encrypted" className="text-[15px]" />
</div>
<span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">Your Confidential Delivery Code</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary bg-tertiary-fixed/30 px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-ping"></span> Active Escrow
      </span>
</div>

<div className="py-space-md">
<div className="grid grid-cols-6 gap-2 sm:gap-3" id="otp-container">
<div className="h-14 rounded-lg bg-surface-container-high flex items-center justify-center shadow-sm">
<span className="font-price-display text-price-display text-on-surface font-black">8</span>
</div>
<div className="h-14 rounded-lg bg-surface-container-high flex items-center justify-center shadow-sm">
<span className="font-price-display text-price-display text-on-surface font-black">4</span>
</div>
<div className="h-14 rounded-lg bg-surface-container-high flex items-center justify-center shadow-sm">
<span className="font-price-display text-price-display text-on-surface font-black">1</span>
</div>
<div className="h-14 rounded-lg bg-surface-container-high flex items-center justify-center shadow-sm">
<span className="font-price-display text-price-display text-on-surface font-black">9</span>
</div>
<div className="h-14 rounded-lg bg-surface-container-high flex items-center justify-center shadow-sm">
<span className="font-price-display text-price-display text-on-surface font-black">0</span>
</div>
<div className="h-14 rounded-lg bg-surface-container-high flex items-center justify-center shadow-sm">
<span className="font-price-display text-price-display text-on-surface font-black">2</span>
</div>
</div>
</div>

<div className="flex items-center gap-space-sm pt-space-xs pb-space-sm">
<button className="flex-1 h-11 bg-surface-container-high hover:bg-surface-container-highest active:scale-[0.98] transition-all rounded-lg flex items-center justify-center gap-2 text-on-surface font-label-lg text-label-lg" id="copy-btn" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="content_copy" className="text-[18px] text-primary" />
<span id="copy-text">Copy Code (841902)</span>
</button>
<button aria-label="Show QR Code" className="h-11 px-4 bg-secondary-container hover:bg-surface-variant active:scale-[0.98] transition-all rounded-lg flex items-center justify-center gap-1.5 text-on-secondary-fixed font-label-lg text-label-lg" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="qr_code_2" className="text-[18px]" />
<span>QR Scan</span>
</button>
</div>

<div className="hidden flex-col items-center justify-center p-space-md my-space-sm rounded-lg bg-surface-container-low text-center" id="qr-drawer">
<div className="p-3 bg-surface-container-lowest rounded-xl shadow-sm mb-space-xs">

<svg className="w-32 h-32 text-on-surface" fill="currentColor" viewBox="0 0 100 100">
<rect fill="none" height="24" rx="2" stroke="currentColor" strokeWidth="4" width="24" x="10" y="10"></rect>
<rect fill="currentColor" height="12" rx="1" width="12" x="16" y="16"></rect>
<rect fill="none" height="24" rx="2" stroke="currentColor" strokeWidth="4" width="24" x="66" y="10"></rect>
<rect fill="currentColor" height="12" rx="1" width="12" x="72" y="16"></rect>
<rect fill="none" height="24" rx="2" stroke="currentColor" strokeWidth="4" width="24" x="10" y="66"></rect>
<rect fill="currentColor" height="12" rx="1" width="12" x="16" y="72"></rect>

<rect height="6" width="6" x="42" y="14"></rect>
<rect height="6" width="6" x="52" y="14"></rect>
<rect height="10" width="6" x="42" y="24"></rect>
<rect height="6" width="6" x="14" y="44"></rect>
<rect height="6" width="8" x="24" y="44"></rect>
<rect height="14" width="6" x="36" y="44"></rect>
<rect height="6" width="6" x="50" y="40"></rect>
<rect height="6" width="14" x="60" y="44"></rect>
<rect height="6" width="6" x="80" y="44"></rect>
<rect height="6" width="16" x="50" y="54"></rect>
<rect height="6" width="12" x="74" y="54"></rect>
<rect height="18" width="6" x="44" y="68"></rect>
<rect height="6" width="10" x="56" y="68"></rect>
<rect height="6" width="14" x="72" y="68"></rect>
<rect height="6" width="6" x="56" y="80"></rect>
<rect height="6" width="18" x="68" y="80"></rect>
</svg>
</div>
<p className="font-label-md text-label-md text-on-surface font-semibold">SwiftCart Fast-Scan PIN</p>
<p className="font-body-sm text-body-sm text-secondary">Present to rider app during door-step inspection</p>
</div>

<div className="mt-space-xs rounded-lg bg-surface-container p-space-sm flex gap-2.5 items-start">
<Icon name="warning" className="text-primary text-[20px] flex-shrink-0 mt-0.5" />
<div className="flex flex-col">
<p className="font-label-md text-label-md text-on-surface font-bold leading-snug">
          Keep this code secret.
        </p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-relaxed">
          Share ONLY with the boda rider when you physically inspect and receive your package at handover.
        </p>
</div>
</div>
<div className="mt-space-sm pt-space-xs flex items-start gap-2">
<Icon name="shield_with_heart" className="text-tertiary text-[18px] flex-shrink-0 mt-0.5" />
<p className="font-body-sm text-body-sm text-secondary leading-snug">
        Your <span className="font-semibold text-on-surface">UGX 253,500</span> payment is safely locked in <span className="font-semibold text-tertiary">SwiftCart Escrow</span>. The seller is only paid after you provide this 6-digit code to the rider.
      </p>
</div>
</div>

<div className="rounded-xl bg-surface-container-lowest shadow-md p-space-lg mb-space-md">
<div className="flex items-center justify-between mb-space-sm">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-secondary-container flex items-center justify-center text-on-secondary-fixed">
<Icon name="local_shipping" className="text-[20px]" />
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Delivery Expectation</h3>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-primary-fixed text-primary font-bold">Boda Express</span>
</div>

<div className="rounded-lg bg-surface-container-low p-space-sm mb-space-sm flex items-center justify-between">
<div className="flex items-center gap-2.5">
<Icon name="event_available" className="text-primary text-[22px]" />
<div>
<p className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Estimated Handover</p>
<p className="font-label-lg text-label-lg text-on-surface font-bold">Tomorrow, Oct 17 between 1:00 PM – 3:00 PM</p>
</div>
</div>
</div>

<div className="relative pl-6 space-y-4 my-space-md">

<div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-surface-container-highest"></div>

<div className="relative flex items-start gap-3">
<div className="absolute -left-6 top-0.5 w-5 h-5 rounded-full bg-tertiary flex items-center justify-center ring-4 ring-surface-container-lowest">
<Icon name="check" className="text-on-tertiary text-[12px] font-bold" />
</div>
<div>
<p className="font-label-md text-label-md text-on-surface font-bold">Payment Verified via MTN MoMo</p>
<p className="font-body-sm text-body-sm text-secondary">Funds safely held in SwiftCart Vault • Today, 14:24</p>
</div>
</div>

<div className="relative flex items-start gap-3">
<div className="absolute -left-6 top-0.5 w-5 h-5 rounded-full bg-primary-container flex items-center justify-center ring-4 ring-surface-container-lowest animate-pulse">
<Icon name="inventory_2" className="text-on-primary text-[12px] font-bold" />
</div>
<div>
<p className="font-label-md text-label-md text-primary-container font-bold">Order Sent to Merchant</p>
<p className="font-body-sm text-body-sm text-on-surface-variant font-medium">SoundCore Uganda Official • Packing in progress</p>
</div>
</div>

<div className="relative flex items-start gap-3 opacity-60">
<div className="absolute -left-6 top-0.5 w-5 h-5 rounded-full bg-surface-container-highest flex items-center justify-center ring-4 ring-surface-container-lowest">
<Icon name="two_wheeler" className="text-secondary text-[12px]" />
</div>
<div>
<p className="font-label-md text-label-md text-on-surface font-semibold">SwiftCart Rider Dispatch</p>
<p className="font-body-sm text-body-sm text-secondary">Kampala Express Hub assignation</p>
</div>
</div>
</div>

<div className="mt-space-sm pt-space-sm flex items-start gap-2.5 bg-surface-container-high/60 rounded-lg p-space-sm">
<Icon name="location_on" className="text-on-surface text-[20px] flex-shrink-0 mt-0.5" />
<div className="flex-1 min-w-0">
<p className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">Destination Address</p>
<p className="font-body-md text-body-md text-on-surface font-semibold leading-tight mt-0.5">Plot 14 Forest Mall, Lugogo Bypass</p>
<p className="font-body-sm text-body-sm text-secondary">Nakawa Division, Kampala, Uganda</p>
</div>
</div>
</div>

<div className="rounded-xl bg-surface-container-lowest shadow-md mb-space-md overflow-hidden">
<button aria-expanded="true" className="w-full p-space-lg flex items-center justify-between text-left active:bg-surface-container-low transition-colors" id="summary-toggle-btn" type="button" onClick={() => alertToast('Action triggered')}>
<div className="flex items-center gap-2">
<Icon name="receipt_long" className="text-secondary text-[20px]" />
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Order Summary</h3>
<p className="font-body-sm text-body-sm text-secondary">1 Item from SoundCore Uganda</p>
</div>
</div>
<Icon name="expand_less" className="text-secondary transition-transform duration-200" />
</button>
<div className="px-space-lg pb-space-lg flex flex-col" id="order-summary-content">

<div className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-md bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm mb-space-sm w-fit font-bold">
<Icon name="storefront" className="text-[14px]" />
<span>SoundCore Uganda Official</span>
<Icon name="verified" className="text-tertiary text-[14px]" />
</div>

<div className="flex gap-space-sm items-center py-space-xs">
<img className="w-16 h-16 rounded-lg object-cover bg-surface-container flex-shrink-0" data-alt="Matte jet black Soundcore Space One over-ear active noise cancelling headphones with premium padded earcups and silver accents on clean soft studio background" src={`${assetBase}/images/6c9015b0873da02e.webp`} />
<div className="flex-1 min-w-0">
<h4 className="font-label-lg text-label-lg text-on-surface font-bold truncate">SoundCore Space One ANC Headphones</h4>
<p className="font-body-sm text-body-sm text-secondary">Jet Black • Qty: 1</p>
<p className="font-label-md text-label-md text-on-surface font-extrabold mt-0.5">UGX 248,500</p>
</div>
</div>

<div className="mt-space-md pt-space-sm space-y-1.5 bg-surface-container-low rounded-lg p-space-sm">
<div className="flex justify-between font-body-sm text-body-sm text-secondary">
<span>Items Subtotal</span>
<span>UGX 248,500</span>
</div>
<div className="flex justify-between font-body-sm text-body-sm text-secondary">
<span>SwiftCart Boda Delivery Fee</span>
<span>UGX 5,000</span>
</div>
<div className="flex justify-between font-body-sm text-body-sm text-tertiary font-medium">
<span>Escrow Buyer Protection Guarantee</span>
<span className="font-bold">FREE</span>
</div>
<div className="flex justify-between items-center pt-space-xs font-label-lg text-label-lg text-on-surface font-extrabold">
<span>Total Paid (MTN MoMo)</span>
<span className="font-headline-sm text-headline-sm text-primary">UGX 253,500</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-space-sm mt-space-xs">
<button className="w-full h-12 bg-primary-container hover:bg-primary active:scale-[0.98] transition-all rounded-lg text-on-primary font-label-lg text-label-lg font-bold shadow-md flex items-center justify-center gap-2" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/order-tracking'); }}>
<Icon name="navigation" className="text-[20px]" />
<span>Track Order in Real-Time</span>
</button>
<div className="flex gap-space-sm">
<button className="flex-1 h-11 bg-surface-container-high hover:bg-surface-container-highest active:scale-[0.98] transition-all rounded-lg text-on-surface font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="shopping_bag" className="text-[18px]" />
<span>Continue Shopping</span>
</button>
<button className="flex-1 h-11 bg-surface-container-high hover:bg-surface-container-highest active:scale-[0.98] transition-all rounded-lg text-on-surface font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="download" className="text-[18px]" />
<span>View Invoice</span>
</button>
</div>
</div>

<div className="mt-space-lg text-center p-space-sm flex flex-col items-center justify-center">
<div className="flex items-center gap-1.5 text-secondary font-body-sm text-body-sm">
<Icon name="support_agent" className="text-[16px] text-tertiary" />
<span>Questions about your delivery?</span>
</div>
<button className="mt-1 font-label-md text-label-md text-primary font-bold hover:underline flex items-center gap-1" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<span>Chat with SwiftCart Support 24/7</span>
<Icon name="arrow_forward" className="text-[14px]" />
</button>
</div>
</div>
</main>
    </div>
  );
};

export default Mobile;
