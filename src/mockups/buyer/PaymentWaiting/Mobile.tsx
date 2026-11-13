// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/buyer/checkout_one_flow_payment_waiting/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';

export interface MobileProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Mobile: React.FC<MobileProps> = (_props) => {
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
      <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-gutter flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-xs min-w-0"><button aria-label="Go Back" className="w-11 h-11 flex items-center justify-center text-on-surface hover:text-primary transition-colors -ml-2" onClick={() => alertToast('Action triggered')}><Icon name="arrow_back" className="text-[24px]" /></button><img alt="swiftcart-logo-final.png" className="h-7 w-auto object-contain flex-shrink-0" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><h1 className="font-headline-sm text-headline-sm text-on-surface font-bold truncate leading-tight ml-1">Checkout Flow</h1></div><div className="flex items-center gap-space-xs"><button aria-label="Quick Actions" className="w-11 h-11 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" type="button" onClick={() => alertToast('Action triggered')}><Icon name="more_vert" className="text-[22px]" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header><main className="flex-1 flex flex-col relative w-full pt-16 pb-safe bg-surface"><div className="flex flex-col w-full pb-8">

<div className="px-gutter pt-3 pb-2 flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight">Checkout</span>
<span className="bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm px-2 py-0.5 rounded-full uppercase tracking-wider font-extrabold">Instant Pay</span>
</div>
<div className="flex items-center gap-1.5 bg-surface-container px-2.5 py-1 rounded-full shadow-sm">
<Icon name="verified_user" className="text-[16px] text-tertiary" />
<span className="font-label-sm text-label-sm text-on-surface font-bold tracking-tight">Escrow Guaranteed</span>
</div>
</div>
<div className="px-gutter flex flex-col gap-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm relative overflow-hidden">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-start gap-space-sm min-w-0">
<div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center flex-shrink-0 text-on-surface">
<Icon name="location_on" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Dennis Mukasa</span>
<span className="font-body-sm text-body-sm text-secondary truncate">+256 701 ••• 819</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mt-0.5 line-clamp-2">
              Plot 14 Forest Mall, Lugogo Bypass, Nakawa Division, Kampala
            </p>
</div>
</div>
<button className="text-primary font-label-md text-label-md font-bold px-2 py-1 rounded-lg hover:bg-surface-container transition-colors flex-shrink-0" type="button" onClick={() => alertToast('Action triggered')}>
          Change
        </button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Fulfillment Channel</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold flex items-center gap-0.5">
<Icon name="bolt" className="text-[14px]" /> Fastest
        </span>
</div>
<div className="grid grid-cols-2 gap-space-sm p-1 bg-surface-container rounded-lg">

<button className="flex flex-col items-start p-2.5 rounded-lg bg-surface-container-lowest shadow-sm text-left transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<div className="flex items-center justify-between w-full">
<span className="font-label-md text-label-md font-bold text-on-surface">Express Boda</span>
<span className="font-label-sm text-label-sm font-bold text-primary">UGX 5,000</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-1">Direct to Door</span>
<span className="font-label-sm text-label-sm text-secondary font-medium mt-0.5">Tomorrow by 2 PM</span>
</button>

<button className="flex flex-col items-start p-2.5 rounded-lg text-left transition-all hover:bg-surface-container-lowest/60" type="button" onClick={() => alertToast('Action triggered')}>
<div className="flex items-center justify-between w-full">
<span className="font-label-md text-label-md font-bold text-secondary">Hub Pickup</span>
<span className="font-label-sm text-label-sm font-bold text-on-surface-variant">UGX 2,500</span>
</div>
<span className="font-body-sm text-body-sm text-secondary mt-1 line-clamp-1">William St / Ntinda</span>
<span className="font-label-sm text-label-sm text-secondary/80 font-medium mt-0.5">Hold up to 5 days</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Payment Method</span>
<span className="font-label-sm text-label-sm text-secondary">Instant Push Prompt</span>
</div>
<div className="flex flex-col gap-2">

<div className="p-3 rounded-xl bg-surface-container-low transition-all">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-8 h-8 rounded-full bg-[#FFCC00] text-[#000000] flex items-center justify-center font-black text-[11px] flex-shrink-0 shadow-sm">
                MoMo
              </div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md font-bold text-on-surface truncate">MTN Mobile Money</span>
<span className="font-body-sm text-body-sm text-secondary">Instant USSD prompt</span>
</div>
</div>
<div className="w-5 h-5 rounded-full bg-primary-container flex items-center justify-center text-on-primary">
<Icon name="check" className="text-[14px] font-bold" />
</div>
</div>

<div className="mt-3 pt-3 flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm font-semibold text-on-surface-variant">Registered MTN Number</label>
<div className="flex items-center bg-surface-container-lowest rounded-lg px-3 py-2 shadow-sm">
<span className="font-label-md text-label-md font-bold text-on-surface mr-2 flex items-center gap-1">
<span className="text-base">🇺🇬</span> +256
              </span>
<input className="bg-transparent font-label-md text-label-md font-bold text-on-surface w-full focus:outline-none" type="tel" value="772 458 819" />
<button className="text-primary font-label-sm text-label-sm font-bold flex-shrink-0 px-1 hover:underline" type="button" onClick={() => alertToast('Action triggered')}>
                Edit
              </button>
</div>
<p className="font-body-sm text-body-sm text-secondary flex items-center gap-1 mt-0.5">
<Icon name="check_circle" className="text-[14px] text-tertiary" />
              Prompt will trigger automatically on this device
            </p>
</div>
</div>

<div className="p-3 rounded-xl bg-surface-container-high/40 flex items-center justify-between opacity-80 hover:opacity-100 transition-opacity">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-8 h-8 rounded-full bg-[#E40000] text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0">
              airtel
            </div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md font-bold text-on-surface truncate">Airtel Money</span>
<span className="font-body-sm text-body-sm text-secondary truncate">+256 752 ••• •••</span>
</div>
</div>
<div className="w-5 h-5 rounded-full bg-surface-container flex items-center justify-center"></div>
</div>

<div className="p-3 rounded-xl bg-surface-container-high/40 flex items-center justify-between opacity-80 hover:opacity-100 transition-opacity">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-8 h-8 rounded-full bg-inverse-surface text-inverse-on-surface flex items-center justify-center flex-shrink-0">
<Icon name="credit_card" className="text-[16px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md font-bold text-on-surface truncate">Visa / Mastercard</span>
<span className="font-body-sm text-body-sm text-secondary">International or local bank card</span>
</div>
</div>
<div className="w-5 h-5 rounded-full bg-surface-container flex items-center justify-center"></div>
</div>

<div className="p-3 rounded-xl bg-surface-container-high/20 flex items-center justify-between opacity-50 cursor-not-allowed">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-8 h-8 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center flex-shrink-0">
<Icon name="payments" className="text-[16px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md font-semibold text-secondary truncate">Cash on Delivery</span>
<span className="font-body-sm text-body-sm text-secondary truncate">Escrow security requires instant settlement</span>
</div>
</div>
<Icon name="lock" className="text-secondary text-[18px]" />
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">

<div className="flex items-center justify-between pb-2">
<div className="flex items-center gap-1.5 min-w-0">
<Icon name="store" className="text-primary text-[18px]" />
<span className="font-label-md text-label-md font-bold text-on-surface truncate">SoundCore Uganda Official</span>
</div>
<div className="bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm px-2 py-0.5 rounded-full flex items-center gap-1 font-bold flex-shrink-0">
<Icon name="verified" className="text-[12px]" /> Verified
        </div>
</div>

<div className="flex items-center gap-space-sm p-2 rounded-lg bg-surface-container-low">
<img className="w-14 h-14 rounded-lg object-cover bg-surface-container flex-shrink-0" data-alt="High-fidelity black SoundCore Space One over-ear active noise cancelling headphones shot on clean minimalist studio gradient background, showcasing sleek modern matte texture and polished metallic accents" src={`${assetBase}/images/e03e15a4546f5725.webp`} />
<div className="flex flex-col min-w-0 flex-1">
<h2 className="font-label-md text-label-md font-bold text-on-surface line-clamp-1">SoundCore Space One ANC Headphones</h2>
<span className="font-body-sm text-body-sm text-secondary">Qty: 1 • Matte Obsidian</span>
<span className="font-label-md text-label-md font-extrabold text-on-surface mt-0.5">UGX 248,500</span>
</div>
</div>

<div className="flex flex-col gap-1.5 pt-1 text-on-surface">
<div className="flex justify-between font-body-md text-body-md">
<span className="text-secondary">Subtotal</span>
<span className="font-semibold text-on-surface">UGX 248,500</span>
</div>
<div className="flex justify-between font-body-md text-body-md">
<span className="text-secondary">Direct Boda Delivery</span>
<span className="font-semibold text-on-surface">UGX 5,000</span>
</div>
<div className="flex justify-between font-body-md text-body-md">
<span className="text-secondary flex items-center gap-1">
            Buyer Protection Escrow
            <Icon name="info" className="text-[14px] text-tertiary" />
</span>
<span className="font-bold text-tertiary uppercase text-label-sm font-label-sm">Free</span>
</div>
<div className="flex justify-between items-baseline pt-2 mt-1">
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Total Payable</span>
<span className="font-body-sm text-body-sm text-secondary">Taxes &amp; fees included</span>
</div>
<span className="font-headline-md text-headline-md font-extrabold text-primary-container tracking-tight">UGX 253,500</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-md flex flex-col gap-3 relative overflow-hidden">

<div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FFCC00] via-primary-container to-tertiary"></div>
<div className="flex items-start gap-space-sm mt-1">

<div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center">
<div className="absolute inset-0 rounded-full bg-primary-container/20 animate-ping opacity-75"></div>
<div className="relative w-10 h-10 rounded-full bg-[#FFCC00] flex items-center justify-center shadow-md">
<Icon name="phonelink_ring" className="text-[22px] text-[#000000] animate-pulse" />
</div>
</div>
<div className="flex flex-col min-w-0 flex-1">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg font-extrabold text-on-surface">Authorizing MoMo Push</span>
<span className="font-label-sm text-label-sm text-primary font-bold px-2 py-0.5 rounded bg-primary/10">Action Required</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mt-1 leading-snug">
            Check your phone for the <span className="font-bold text-on-surface">*165# prompt</span> and enter your MTN Mobile Money PIN to authorize <span className="font-bold text-on-surface">UGX 253,500</span>.
          </p>
</div>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low flex items-start gap-2">
<Icon name="security" className="text-tertiary text-[18px] flex-shrink-0 mt-0.5" />
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm font-bold text-on-surface">Anti-Duplicate Escrow Shield #TX-98421</span>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
            Funds remain safely locked in SwiftCart Escrow until delivery is verified. Refreshing this page will never charge you twice.
          </p>
</div>
</div>

<div className="flex items-center gap-space-sm pt-1">
<button className="flex-1 py-2.5 px-3 rounded-lg bg-surface-container font-label-md text-label-md font-bold text-on-surface hover:bg-surface-container-high transition-colors flex items-center justify-center gap-1.5 shadow-sm" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="refresh" className="text-[16px]" />
<span>Resend Prompt (<span id="momo-countdown">0:38</span>)</span>
</button>
<button className="py-2.5 px-3 rounded-lg font-label-md text-label-md font-bold text-secondary hover:text-on-surface transition-colors flex items-center justify-center" type="button" onClick={() => alertToast('Action triggered')}>
          Change Method
        </button>
</div>
</div>

<div className="pt-2">
<button className="w-full py-4 px-gutter rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg font-extrabold shadow-md hover:bg-on-primary-fixed-variant active:scale-[0.98] transition-all flex items-center justify-between" id="pay-btn" type="button" onClick={() => alertToast('Action triggered')}>
<span className="flex items-center gap-2">
<Icon name="lock" className="text-[20px]" />
          Authorize &amp; Pay Now
        </span>
<span className="font-label-lg text-label-lg tracking-tight bg-black/15 px-2.5 py-1 rounded-lg">UGX 253,500</span>
</button>
<div className="flex items-center justify-center gap-2 mt-3 text-secondary">
<Icon name="lock_clock" className="text-[14px] text-tertiary" />
<span className="font-body-sm text-body-sm">256-bit encrypted bank and telecom direct gateway</span>
</div>
</div>
</div>
</div>
</main>
    </div>
  );
};

export default Mobile;
