// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/buyer/order_delivered_completed/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';

export interface MobileProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Mobile: React.FC<MobileProps> = (_props) => {
  const assetBase = import.meta.env.VITE_ASSET_BASE ?? '';
  const [, setDrawerOpen] = useState(false);
  const [, setModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased flex flex-col min-h-screen relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base { html, body { width: 100%; margin: 0; padding: 0; min-height: 100%; } .pb-safe { padding-bottom: env(safe-area-inset-bottom, 0px); } .pt-safe { padding-top: env(safe-area-inset-top, 0px); } main > :first-child { margin-top: 0 !important; } main > :last-child { margin-bottom: 0 !important; } } ::-webkit-scrollbar { display: none; }

    body {
      min-height: max(884px, 100dvh);
    }
  
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl pt-safe shadow-[0_1px_8px_rgba(14,27,77,0.04)]"><div className="h-16 px-space-md flex items-center justify-between"><div className="flex items-center gap-space-xs min-w-0"><button className="w-11 h-11 flex items-center justify-center text-on-surface hover:text-primary rounded-full transition-transform active:scale-95" onClick={() => { setDrawerOpen(false); setModalOpen(false); }}><Icon name="close" className="text-[24px]" /></button><img alt="swiftcart-logo-icon-only.png" className="h-8 w-auto object-contain flex-shrink-0 ml-1" src={`${assetBase}/images/95ec767b02525811.webp`} /><div className="flex flex-col min-w-0 ml-1"><span className="font-label-sm text-label-sm text-primary uppercase tracking-wide">SwiftCart Uganda</span><h1 className="font-headline-sm text-headline-sm text-on-surface truncate">Order Delivered &amp; Completed</h1></div></div><div className="flex items-center gap-space-xs flex-shrink-0"><a className="w-11 h-11 flex items-center justify-center text-on-surface hover:text-primary rounded-full transition-colors" data-path="explore-marketplace" href="#" onClick={() => alertToast('Action triggered')}><Icon name="home" className="text-[22px]" /></a><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header><main className="flex-1 w-full bg-surface pt-16 pb-safe px-margin flex flex-col"><div className="flex flex-col w-full pb-8 space-y-4">

<div className="relative overflow-hidden rounded-xl bg-gradient-to-b from-surface-container-low to-surface-container p-space-lg text-center shadow-sm">

<div className="absolute -top-3 left-4 text-tertiary-fixed-dim select-none opacity-80 pointer-events-none">
<svg fill="currentColor" height="32" viewBox="0 0 24 24" width="32"><path d="M12 2L14.39 8.26L21 9.27L16.5 14.14L17.77 21L12 17.77L6.23 21L7.5 14.14L3 9.27L9.61 8.26L12 2Z"></path></svg>
</div>
<div className="absolute top-6 right-5 text-primary select-none opacity-70 pointer-events-none">
<svg fill="currentColor" height="24" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="5"></circle></svg>
</div>
<div className="absolute bottom-3 left-10 text-secondary-container select-none opacity-90 pointer-events-none">
<svg fill="currentColor" height="18" viewBox="0 0 24 24" width="18"><polygon points="12,2 15,22 2,12"></polygon></svg>
</div>
<div className="absolute bottom-6 right-8 text-tertiary select-none opacity-60 pointer-events-none">
<svg fill="currentColor" height="20" viewBox="0 0 24 24" width="20"><path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z"></path></svg>
</div>

<div className="relative mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-tertiary-container shadow-md">
<div className="absolute inset-0 rounded-full bg-tertiary animate-ping opacity-20"></div>
<Icon name="verified_user" className="text-[44px] text-on-tertiary-container" />
</div>

<div className="inline-flex items-center gap-1.5 rounded-full bg-tertiary/10 px-3 py-1 mb-2">
<span className="h-2 w-2 rounded-full bg-tertiary animate-pulse"></span>
<span className="font-label-md text-label-md text-tertiary uppercase tracking-wider">Verified Handover</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Order Delivered &amp; Escrow Released!</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1.5 px-2">
      Handover verified by Rider <strong className="text-on-surface">Kizito Brian</strong> via secure 6-digit code. Funds of <strong className="text-tertiary">UGX 385,000</strong> have been instantly disbursed to SoundCore Uganda Official.
    </p>

<div className="mt-3 flex items-center justify-center gap-1.5 font-label-md text-label-md text-outline">
<Icon name="location_on" className="text-[16px]" />
<span>Completed Today at 3:28 PM • Nakasero, Kampala</span>
</div>
</div>

<div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm space-y-3.5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="account_balance_wallet" className="text-tertiary text-[22px]" />
<h3 className="font-headline-sm text-label-lg text-on-surface">Escrow Disbursement Receipt</h3>
</div>
<span className="rounded-full bg-surface-container-high px-2.5 py-0.5 font-label-sm text-label-sm text-on-surface-variant">Txn: ESC-99214-UG</span>
</div>

<div className="flex items-center gap-3 rounded-lg bg-surface-container-low p-2.5">
<img className="h-14 w-14 rounded-lg object-cover flex-shrink-0" data-alt="High-end SoundCore Space One active noise cancelling wireless over-ear headphones in sleek midnight black with metallic bronze acoustic ring hinges, studio warm dramatic ambient lighting, soft shadows" src={`${assetBase}/images/e191ea790a9563a2.webp`} />
<div className="flex-1 min-w-0">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Product Delivered</span>
<p className="font-label-lg text-label-lg text-on-surface truncate">SoundCore Space One ANC Headphones</p>
<span className="font-body-sm text-body-sm text-on-surface-variant">Midnight Black • 1x Unit</span>
</div>
</div>

<div className="space-y-2 pt-1 font-body-md text-body-md">
<div className="flex justify-between items-center text-on-surface-variant">
<span>Order Reference</span>
<span className="font-label-md text-label-md text-on-surface">#ORD-8942</span>
</div>
<div className="flex justify-between items-center text-on-surface-variant">
<span>Payout Recipient</span>
<span className="font-label-md text-label-md text-on-surface">SoundCore Uganda Official</span>
</div>
<div className="flex justify-between items-center text-on-surface-variant">
<span>Disbursement Channel</span>
<div className="flex items-center gap-1 font-label-md text-label-md text-on-surface">
<span className="h-2 w-2 rounded-full bg-[#FFCC00]"></span>
<span>MTN MoMo Merchant Wallet</span>
</div>
</div>
<div className="flex justify-between items-center text-on-surface-variant">
<span>Buyer Handover Code</span>
<span className="rounded bg-surface-container-high px-2 py-0.5 font-currency-code text-currency-code text-on-surface">749 • 206 <span className="text-tertiary ml-1 font-label-sm">✓ Validated</span></span>
</div>
<div className="flex justify-between items-center pt-2">
<span className="font-label-lg text-label-lg text-on-surface">Disbursed Amount</span>
<div className="text-right">
<span className="font-price-display text-price-display text-primary">UGX 385,000</span>
<span className="block font-label-sm text-label-sm text-tertiary">0% Fee • Instant Clearing</span>
</div>
</div>
</div>

<div className="flex items-start gap-2.5 rounded-lg bg-surface-container p-2.5">
<Icon name="shield" className="text-tertiary text-[20px] flex-shrink-0 mt-0.5" />
<p className="font-body-sm text-body-sm text-on-surface-variant">
<strong>SwiftCart 48-Hour Guarantee:</strong> Zero transaction fee billed to buyer. If you discover internal manufacturing defects, protection remains active for 48 hours to request mediation.
      </p>
</div>
</div>

<div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm space-y-4">
<div className="flex items-center gap-3">
<img className="h-14 w-14 rounded-full object-cover shadow-sm" data-alt="Warm friendly portrait of Ugandan motorcycle dispatch rider Kizito Brian wearing an official high-visibility branded courier jacket and helmet in bright Kampala sunlight with city boulevard backdrop, joyful and professional" src={`${assetBase}/images/a8407aea96882c7e.webp`} />
<div className="flex-1 min-w-0">
<div className="flex items-center gap-1.5">
<h3 className="font-headline-sm text-label-lg text-on-surface truncate">Kizito Brian</h3>
<span className="rounded-full bg-secondary-fixed px-2 py-0.5 font-label-sm text-label-sm text-on-secondary-fixed">Express Rider</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Bajaj Boxer 150 • <strong className="text-on-surface">UEF 842X</strong></p>
<p className="font-label-sm text-label-sm text-outline">Kampala Central Boda Stage</p>
</div>
</div>

<div className="rounded-lg bg-surface-container-low p-3 text-center space-y-2">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface">How was Kizito's delivery?</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Super Fast &amp; Polite!</span>
</div>

<div className="flex justify-center items-center gap-2 py-1" id="rider-stars">
<button className="text-[#F59E0B] hover:scale-110 active:scale-95 transition-transform" data-star="1" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="star" className="text-[32px]" />
</button>
<button className="text-[#F59E0B] hover:scale-110 active:scale-95 transition-transform" data-star="2" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="star" className="text-[32px]" />
</button>
<button className="text-[#F59E0B] hover:scale-110 active:scale-95 transition-transform" data-star="3" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="star" className="text-[32px]" />
</button>
<button className="text-[#F59E0B] hover:scale-110 active:scale-95 transition-transform" data-star="4" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="star" className="text-[32px]" />
</button>
<button className="text-[#F59E0B] hover:scale-110 active:scale-95 transition-transform" data-star="5" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="star" className="text-[32px]" />
</button>
</div>

<div className="flex flex-wrap gap-1.5 justify-center pt-1" id="praise-tags">
<button className="praise-chip rounded-full bg-primary-container px-3 py-1 font-label-sm text-label-sm text-on-primary-container transition-all" type="button" onClick={() => alertToast('Action triggered')}>✓ On Time</button>
<button className="praise-chip rounded-full bg-surface-container-highest px-3 py-1 font-label-sm text-label-sm text-on-surface-variant hover:bg-primary-fixed transition-all" type="button" onClick={() => alertToast('Action triggered')}>Careful with Parcel</button>
<button className="praise-chip rounded-full bg-surface-container-highest px-3 py-1 font-label-sm text-label-sm text-on-surface-variant hover:bg-primary-fixed transition-all" type="button" onClick={() => alertToast('Action triggered')}>Polite &amp; Respectful</button>
<button className="praise-chip rounded-full bg-surface-container-highest px-3 py-1 font-label-sm text-label-sm text-on-surface-variant hover:bg-primary-fixed transition-all" type="button" onClick={() => alertToast('Action triggered')}>Great Communication</button>
</div>
</div>

<div className="space-y-2.5">
<div className="flex items-center justify-between">
<label className="font-label-md text-label-md text-on-surface">Add a tip for Kizito?</label>
<span className="font-label-sm text-label-sm text-tertiary">100% goes to rider</span>
</div>
<div className="grid grid-cols-4 gap-2" id="tip-chips">
<button className="tip-btn rounded-xl bg-surface-container-high py-2.5 px-2 text-center font-label-md text-label-md text-on-surface hover:bg-primary-fixed transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
          UGX 1,000
        </button>
<button className="tip-btn rounded-xl bg-primary text-on-primary py-2.5 px-2 text-center font-label-md text-label-md shadow-sm transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
          UGX 2,000
        </button>
<button className="tip-btn rounded-xl bg-surface-container-high py-2.5 px-2 text-center font-label-md text-label-md text-on-surface hover:bg-primary-fixed transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
          UGX 5,000
        </button>
<button className="tip-btn rounded-xl bg-surface-container-high py-2.5 px-2 text-center font-label-md text-label-md text-on-surface hover:bg-primary-fixed transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
          Custom
        </button>
</div>
<div className="flex items-center gap-2 rounded-lg bg-surface-container-low px-3 py-2">
<Icon name="check_circle" className="text-[18px] text-tertiary" />
<p className="font-body-sm text-body-sm text-on-surface-variant">Dispatched straight to Kizito's MTN MoMo (0772•••842). Zero fee.</p>
</div>
<button className="w-full h-11 rounded-xl bg-secondary text-on-secondary font-label-md text-label-md flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-sm" id="send-tip-btn" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="volunteer_activism" className="text-[18px]" />
        Send UGX 2,000 Tip via Mobile Money
      </button>
</div>
</div>

<div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
<div className="flex items-start justify-between gap-3">
<div className="flex-1">
<span className="rounded-full bg-primary-fixed px-2 py-0.5 font-label-sm text-label-sm text-on-primary-fixed">+50 SwiftPoints</span>
<h4 className="font-label-lg text-label-lg text-on-surface mt-1.5">Rate your SoundCore Space One</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Help fellow shoppers in Kampala find authentic gear.</p>
<div className="flex items-center gap-1 mt-2">
<Icon name="star" className="text-[20px] text-surface-variant hover:text-[#F59E0B] cursor-pointer" />
<Icon name="star" className="text-[20px] text-surface-variant hover:text-[#F59E0B] cursor-pointer" />
<Icon name="star" className="text-[20px] text-surface-variant hover:text-[#F59E0B] cursor-pointer" />
<Icon name="star" className="text-[20px] text-surface-variant hover:text-[#F59E0B] cursor-pointer" />
<Icon name="star" className="text-[20px] text-surface-variant hover:text-[#F59E0B] cursor-pointer" />
</div>
</div>
<button className="rounded-xl bg-surface-container px-3 py-2 font-label-md text-label-md text-primary hover:bg-surface-container-high transition-colors self-center flex-shrink-0" type="button" onClick={() => alertToast('Action triggered')}>
        Write Review
      </button>
</div>
</div>

<div className="space-y-2.5 pt-2">

<button className="w-full h-12 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(218,55,0,0.30)] active:scale-[0.98] transition-transform" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="download" className="text-[20px]" />
      Download Delivery Receipt (PDF)
    </button>

<button className="w-full h-12 rounded-xl bg-surface-container-lowest text-on-surface font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-sm hover:bg-surface-container-low active:scale-[0.98] transition-transform" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="storefront" className="text-[20px]" />
      Back to Home &amp; Shop More
    </button>
</div>

<div className="text-center px-4 pt-1">
<p className="font-body-sm text-body-sm text-outline">
      Have an issue with this delivered item? <a className="text-primary underline font-label-md" href="#" onClick={() => alertToast('Action triggered')}>Report within 48h</a> to freeze escrow payout or request a swift return.
    </p>
</div>
</div>
</main>
    </div>
  );
};

export default Mobile;
