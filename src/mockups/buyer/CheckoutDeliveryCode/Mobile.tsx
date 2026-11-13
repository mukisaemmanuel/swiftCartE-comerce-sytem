// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/buyer/checkout_delivery_code_swiftcart/code.html
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
    <div className="bg-surface text-on-surface flex flex-col min-h-screen relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
    body {
      min-height: max(884px, 100dvh);
    }
  

    body {
      min-height: max(884px, 100dvh);
    }
  
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(14,27,77,0.04)] pt-safe"><div className="h-16 px-margin flex items-center justify-between"><div className="flex items-center"><button aria-label="Go back" className="w-11 h-11 flex items-center justify-center rounded-full text-on-secondary-fixed hover:bg-surface-container transition-colors" onClick={() => alertToast('Action triggered')}><Icon name="arrow_back_ios_new" className="text-[22px]" /></button></div><h1 className="font-headline-sm text-headline-sm text-on-secondary-fixed text-center flex-1">Checkout</h1><div className="flex items-center justify-end w-11"><button aria-label="Share" className="w-11 h-11 flex items-center justify-center rounded-full text-on-secondary-fixed hover:bg-surface-container transition-colors" onClick={() => alertToast('Action triggered')}><Icon name="share" className="text-[22px]" /></button></div></div></header><main className="flex flex-col relative w-full pt-16 bg-surface min-h-screen"><div className="flex flex-col w-full pb-safe">

<div className="flex flex-col px-margin pt-space-md space-y-space-md">

<div className="bg-surface-container-low rounded-xl p-space-md shadow-sm relative overflow-hidden">
<div className="flex items-start space-x-space-md relative z-10">
<div className="w-10 h-10 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center shrink-0 shadow-sm">
<Icon name="verified_user" className="text-[24px]" />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center space-x-space-xs">
<h2 className="font-label-lg text-label-lg text-on-surface">SwiftShield Guarantee</h2>
<span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm px-1.5 py-0.5 rounded-full uppercase tracking-wider">Your payment is held safely until you receive your order.</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-snug">
            Your payment is held safely until you receive your order. Money is only transferred to the seller after your delivery code is confirmed.
          </p>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md relative overflow-hidden text-center">
<div className="inline-flex items-center space-x-1.5 bg-primary-fixed text-on-primary-fixed font-label-md text-label-md px-2.5 py-1 rounded-full mb-space-sm">
<Icon name="vpn_key" className="text-[16px]" />
<span className="">Secure Handover Passcode</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-[280px] mx-auto mb-space-md">
        Give this 6-digit delivery code to your rider <strong className="text-on-surface font-semibold">ONLY</strong> when you have physically received and checked your items.
      </p>

<div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-space-md">
<div className="w-11 h-13 py-2 bg-surface-container rounded-lg flex flex-col items-center justify-center shadow-inner">
<span className="font-price-display text-price-display text-primary">8</span>
</div>
<div className="w-11 h-13 py-2 bg-surface-container rounded-lg flex flex-col items-center justify-center shadow-inner">
<span className="font-price-display text-price-display text-primary">9</span>
</div>
<div className="w-11 h-13 py-2 bg-surface-container rounded-lg flex flex-col items-center justify-center shadow-inner">
<span className="font-price-display text-price-display text-primary">2</span>
</div>
<div className="w-2.5 h-1 bg-outline-variant rounded-full mx-0.5"></div>
<div className="w-11 h-13 py-2 bg-surface-container rounded-lg flex flex-col items-center justify-center shadow-inner">
<span className="font-price-display text-price-display text-primary">1</span>
</div>
<div className="w-11 h-13 py-2 bg-surface-container rounded-lg flex flex-col items-center justify-center shadow-inner">
<span className="font-price-display text-price-display text-primary">4</span>
</div>
<div className="w-11 h-13 py-2 bg-surface-container rounded-lg flex flex-col items-center justify-center shadow-inner">
<span className="font-price-display text-price-display text-primary">0</span>
</div>
</div>
<div className="flex items-center justify-center space-x-1.5 text-on-secondary-fixed-variant font-label-sm text-label-sm">
<Icon name="lock_clock" className="text-[15px]" />
<span className="">Code activates upon dispatch</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-md">

<div className="flex items-start justify-between">
<div className="flex items-start space-x-space-md min-w-0">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0 mt-0.5">
<Icon name="location_on" className="text-[20px]" />
</div>
<div className="min-w-0">
<div className="flex items-center space-x-2">
<span className="font-label-md text-label-md text-on-surface truncate">Dennis Mukasa</span>
<span className="bg-surface-container-high text-on-secondary-container font-label-sm text-label-sm px-1.5 py-0.5 rounded">Home</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate mt-0.5">Plot 14 Acacia Avenue, Kololo, Kampala</p>
<p className="font-label-sm text-label-sm text-secondary mt-0.5">+256 772 ••• 814</p>
</div>
</div>
<button className="text-primary font-label-md text-label-md px-2 py-1 rounded hover:bg-surface-container-low transition-colors" onClick={() => alertToast('Action triggered')}>
          Change
        </button>
</div>

<div className="bg-surface-container-low rounded-lg p-space-sm flex items-center justify-between">
<div className="flex items-center space-x-space-md min-w-0">
<div className="w-9 h-9 rounded-lg bg-primary-fixed flex items-center justify-center text-primary-container shrink-0">
<Icon name="two_wheeler" className="text-[22px]" />
</div>
<div className="min-w-0">
<div className="flex items-center space-x-1.5">
<span className="font-label-md text-label-md text-on-surface">SafeBoda Express</span>
<Icon name="bolt" className="text-[14px] text-tertiary" />
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Delivers in 45 mins • Live tracking</p>
</div>
</div>
<span className="font-label-md text-label-md text-on-surface shrink-0">UGX 5,000</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-md">
<div className="flex items-center justify-between">
<h3 className="font-label-lg text-label-lg text-on-surface">Items in Package (2)</h3>
<span className="font-label-sm text-label-sm text-tertiary bg-surface-container-low px-2 py-0.5 rounded-full flex items-center space-x-1">
<Icon name="verified" className="text-[13px]" />
<span className="">Verified Merchant</span>
</span>
</div>

<div className="flex items-center space-x-space-md">
<div className="w-16 h-16 rounded-lg bg-surface-container overflow-hidden shrink-0 shadow-inner">
<img className="w-full h-full object-cover" data-alt="SoundCore Space One ANC Headphones in sleek obsidian matte finish resting on an acoustic sound stage with soft dramatic studio light and warm accents, high resolution product photography" src={`${assetBase}/images/4e0626b2ad1400d7.webp`} />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center space-x-1">
<span className="bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm px-1 rounded-sm">Official</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">SoundCore Audio</span>
</div>
<h4 className="font-label-md text-label-md text-on-surface truncate mt-0.5">SoundCore Space One ANC Headphones</h4>
<div className="flex items-center justify-between mt-1">
<span className="font-body-sm text-body-sm text-secondary">Qty: 1</span>
<span className="font-label-lg text-label-lg text-on-surface">UGX 385,000</span>
</div>
</div>
</div>

<div className="flex items-center space-x-space-md">
<div className="w-16 h-16 rounded-lg bg-surface-container overflow-hidden shrink-0 shadow-inner">
<img className="w-full h-full object-cover" data-alt="Compact premium Anker 65W GaN USB-C multi-port fast wall charger plug with metallic pins and subtle neon indicator ring glowing softly, sharp macro commercial photography" src={`${assetBase}/images/f76877b87734ffcc.webp`} />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center space-x-1">
<span className="bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm px-1 rounded-sm">Official</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Anker Direct</span>
</div>
<h4 className="font-label-md text-label-md text-on-surface truncate mt-0.5">Anker 65W GaN Charger</h4>
<div className="flex items-center justify-between mt-1">
<span className="font-body-sm text-body-sm text-secondary">Qty: 1</span>
<span className="font-label-lg text-label-lg text-on-surface">UGX 93,500</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
<div className="flex items-center justify-between mb-space-sm">
<h3 className="font-label-lg text-label-lg text-on-surface">Payment Method</h3>
<span className="text-tertiary flex items-center space-x-1 font-label-sm text-label-sm">
<Icon name="shield" className="text-[14px]" />
<span className="">Instant MoMo Prompt</span>
</span>
</div>
<div className="bg-surface-container-high rounded-xl p-space-md flex items-center justify-between">
<div className="flex items-center space-x-space-md min-w-0">

<div className="w-11 h-11 rounded-xl bg-[#FFCC00] text-[#0D1C2F] flex items-center justify-center font-price-display text-[15px] font-extrabold shadow-sm shrink-0">
            MoMo
          </div>
<div className="min-w-0">
<div className="flex items-center space-x-1.5">
<span className="font-label-lg text-label-lg text-on-surface">MTN Mobile Money</span>
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">0772 ••• 814</p>
</div>
</div>

<div className="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center shadow-sm shrink-0">
<Icon name="check" className="text-white text-[16px]" />
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-sm">
<div className="flex items-center justify-between font-body-md text-body-md text-on-surface-variant">
<span className="">Items Subtotal</span>
<span className="font-label-md text-label-md text-on-surface">UGX 478,500</span>
</div>
<div className="flex items-center justify-between font-body-md text-body-md text-on-surface-variant">
<span className="">Delivery Fee (SafeBoda)</span>
<span className="font-label-md text-label-md text-on-surface">UGX 5,000</span>
</div>
<div className="h-px bg-surface-container-high my-space-xs"></div>
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface">Total to Pay</span>
<span className="font-price-display text-price-display text-primary">UGX 483,500</span>
</div>
</div>

<div className="pt-space-xs pb-space-lg flex flex-col items-center space-y-space-md">
<button className="w-full h-13 py-3.5 bg-primary-container hover:bg-primary active:scale-[0.98] text-white font-label-lg text-label-lg rounded-xl shadow-lg flex items-center justify-center space-x-2 transition-all" id="payButton" onClick={() => alertToast('Action triggered')}>
<Icon name="lock" className="text-[20px]" />
<span className="">Confirm Order &amp; Pay UGX 483,500</span>
</button>

<div className="flex flex-col items-center space-y-1 text-center">
<div className="flex items-center space-x-1.5 text-on-surface-variant">
<Icon name="security" className="text-[16px] text-tertiary" />
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">SwiftCart Uganda</span>
</div>
<p className="font-body-sm text-[11px] text-secondary">
          Buyer protection active • 100% money back if items are not delivered as described
        </p>
</div>
</div>
</div>
</div>
</main>
    </div>
  );
};

export default Mobile;
