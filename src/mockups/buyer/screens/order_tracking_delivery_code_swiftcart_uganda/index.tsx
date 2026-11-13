// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/buyer/order_tracking_delivery_code_swiftcart_uganda/code.html
import React, { useState } from 'react';
import Icon from '../../../../components/shared/Icon';

export interface ScreenProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Screen: React.FC<ScreenProps> = (props) => {
  const onNavigate = props.onNavigate;
  const assetBase = import.meta.env.VITE_ASSET_BASE ?? '';
  const [, setDrawerOpen] = useState(false);
  const [, setModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface flex flex-col antialiased selection:bg-primary-fixed selection:text-on-primary-fixed relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{width:100vw;margin:0;padding:0;}body{overscroll-behavior:none;}.pb-safe{padding-bottom:env(safe-area-inset-bottom,0px);}.pt-safe{padding-top:env(safe-area-inset-top,0px);}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 px-space-sm flex items-center justify-between"><button aria-label="Go back" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all" onClick={() => alertToast('Action triggered')}><Icon name="arrow_back" className="text-[24px]" /></button><h1 className="font-headline-sm text-headline-sm text-on-surface tracking-tight text-center flex-1">Track Order</h1><div className="flex items-center justify-end w-11"><button aria-label="Customer Support" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}><Icon name="support_agent" className="text-[22px]" /></button></div></div></header><main className="flex flex-col relative w-full pt-16 bg-surface min-h-screen pb-safe"><div className="flex flex-col w-full px-space-lg pb-12 gap-space-lg">

<div className="flex items-center justify-between pt-space-xs"><div className="flex items-center gap-space-xs"><span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span><span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">Order In Transit</span></div><div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary/10 text-tertiary"><Icon name="verified_user" className="text-[15px]" /><span className="font-label-sm text-label-sm font-bold">SwiftCart Escrow Protected</span></div></div>

<div className="relative overflow-hidden rounded-2xl bg-surface-container-lowest shadow-md p-space-lg flex flex-col gap-space-md"><div className="absolute -right-10 -bottom-10 w-36 h-36 rounded-full bg-primary-fixed/30 pointer-events-none blur-2xl"></div><div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-primary-container to-primary-fixed"></div><div className="flex items-start justify-between"><div className="flex items-center gap-2"><div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center"><Icon name="shield_lock" className="text-[22px]" /></div><div><span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">One-Time Handover Pass</span><span className="font-label-lg text-label-lg text-on-surface font-bold">Inspection Delivery Code</span></div></div><button className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors active:scale-95" id="copyCodeBtn" onClick={() => alertToast('Action triggered')}><Icon name="content_copy" className="text-[15px]" /><span className="font-label-sm text-label-sm font-bold">Copy</span></button></div><div className="py-space-md px-space-sm rounded-xl bg-surface-container-low flex flex-col items-center justify-center shadow-inner gap-2"><span className="font-label-sm text-label-sm text-on-surface-variant font-bold tracking-widest uppercase">6-Digit Handover Code</span><div className="flex items-center justify-center gap-1.5" id="codeBoxes"><span className="font-headline-md text-headline-md font-black tracking-widest text-primary font-mono bg-surface-container-lowest w-11 h-12 flex items-center justify-center rounded-lg shadow-sm code-digit">•</span><span className="font-headline-md text-headline-md font-black tracking-widest text-primary font-mono bg-surface-container-lowest w-11 h-12 flex items-center justify-center rounded-lg shadow-sm code-digit">•</span><span className="font-headline-md text-headline-md font-black tracking-widest text-primary font-mono bg-surface-container-lowest w-11 h-12 flex items-center justify-center rounded-lg shadow-sm code-digit">•</span><span className="font-headline-md text-headline-md font-black tracking-widest text-primary font-mono bg-surface-container-lowest w-11 h-12 flex items-center justify-center rounded-lg shadow-sm code-digit">•</span><span className="font-headline-md text-headline-md font-black tracking-widest text-primary font-mono bg-surface-container-lowest w-11 h-12 flex items-center justify-center rounded-lg shadow-sm code-digit">•</span><span className="font-headline-md text-headline-md font-black tracking-widest text-primary font-mono bg-surface-container-lowest w-11 h-12 flex items-center justify-center rounded-lg shadow-sm code-digit">•</span></div><button className="mt-1 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-on-primary font-label-md text-label-md font-bold shadow-sm active:scale-95 transition-all" id="revealCodeBtn" onClick={() => alertToast('Action triggered')}><Icon name="visibility" className="text-[18px]" /><span className="">Reveal code</span></button></div><div className="flex gap-2.5 p-3 rounded-xl bg-error-container/40 text-on-error-container"><Icon name="gpp_maybe" className="text-[20px] text-error shrink-0" /><p className="font-body-sm text-body-sm leading-tight text-on-surface font-medium"><strong className="text-error font-bold">Notice:</strong> Give this code to the rider only at handover after you inspect your goods.</p></div><div className="flex items-center gap-2 pt-1"><Icon name="lock" className="text-[18px] text-tertiary shrink-0" /><p className="font-body-sm text-body-sm text-on-surface-variant leading-snug"><strong className="text-on-surface font-semibold">Escrow Protected:</strong> your money is held by SwiftCart until you confirm delivery.</p></div></div>

<div className="rounded-2xl bg-surface-container-lowest shadow-sm p-space-lg flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="two_wheeler" className="text-primary text-[20px]" />
<span className="font-label-lg text-label-lg text-on-surface font-bold">Assigned Dispatch Courier</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-bold animate-pulse">En Route</span>
</div>

<div className="flex items-center gap-3">
<div className="relative">
<img className="w-14 h-14 rounded-full object-cover shadow-sm" data-alt="Close up warm portrait of a friendly Ugandan male motorcycle delivery rider wearing an official orange Swift Express branded helmet and reflective courier jacket, Kampala sunny background bokeh." src={`${assetBase}/images/e084900b86672de9.webp`} />
<span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shadow-sm">
<Icon name="check" className="text-[10px]" />
</span>
</div>
<div className="flex flex-col min-w-0 flex-1">
<div className="flex items-center gap-1.5">
<h2 className="font-headline-sm text-headline-sm text-on-surface truncate text-base">Sula Ssemwogerere</h2>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Swift Express Boda ID: #UG-4412</span>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="px-1.5 py-0.5 rounded bg-surface-container-high font-mono font-bold text-label-sm text-on-surface">UFL 389K</span>
<span className="text-on-surface-variant text-body-sm">• Bajaj Boxer Red</span>
</div>
</div>
</div>

<div className="p-3 rounded-xl bg-surface-container-low flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<Icon name="near_me" className="text-primary text-[18px]" />
<span className="font-label-md text-label-md text-on-surface font-semibold">Lugogo Bypass heading to Nakawa</span>
</div>
<span className="font-label-sm text-label-sm text-primary font-bold">~12 Mins Away</span>
</div>

<div className="w-full h-28 bg-cover bg-center rounded-lg shadow-inner relative overflow-hidden flex items-end p-2.5" data-location="Lugogo Bypass, Kampala, Uganda" style={{"backgroundImage":"url('/images/a12639b9e862fb29.webp')"}}>
<div className="bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-lg shadow-sm flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span className="font-body-sm text-body-sm text-on-surface font-semibold">Live GPS Active</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-space-sm pt-1">
<a className="h-11 rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high transition-transform active:scale-95 flex items-center justify-center gap-2 font-label-md text-label-md" href="tel:+256701000000" onClick={() => alertToast('Action triggered')}>
<Icon name="call" className="text-[18px] text-tertiary" />
        Call Rider
      </a>
<a className="h-11 rounded-xl bg-tertiary text-on-tertiary shadow-sm transition-transform active:scale-95 flex items-center justify-center gap-2 font-label-md text-label-md" href="https://wa.me/256701000000" onClick={() => alertToast('Action triggered')}>
<Icon name="chat" className="text-[18px]" />
        WhatsApp / Chat
      </a>
</div>
</div>

<div className="rounded-2xl bg-surface-container-lowest shadow-sm p-space-lg flex flex-col gap-space-md"><div className="flex items-center justify-between"><h2 className="font-headline-sm text-headline-sm text-on-surface text-base">Tracking Timeline</h2><span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Order #SW-98421</span></div><div className="relative flex flex-col gap-4 pl-3"><div className="flex items-start gap-3 relative"><div className="w-6 h-6 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shrink-0 z-10"><Icon name="check" className="text-[14px]" /></div><div className="flex-1 -mt-0.5"><div className="flex items-center justify-between"><span className="font-label-md text-label-md text-on-surface font-bold">Order placed</span><span className="font-body-sm text-body-sm text-on-surface-variant">10:00 AM</span></div><span className="font-body-sm text-body-sm text-on-surface-variant block">Order confirmed by customer</span></div></div><div className="flex items-start gap-3 relative"><div className="w-6 h-6 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shrink-0 z-10"><Icon name="check" className="text-[14px]" /></div><div className="flex-1 -mt-0.5"><div className="flex items-center justify-between"><span className="font-label-md text-label-md text-on-surface font-bold">Payment held in escrow</span><span className="font-body-sm text-body-sm text-on-surface-variant">10:15 AM</span></div><span className="font-body-sm text-body-sm text-on-surface-variant block">Funds securely deposited in SwiftCart escrow</span></div></div><div className="flex items-start gap-3 relative"><div className="w-6 h-6 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shrink-0 z-10"><Icon name="check" className="text-[14px]" /></div><div className="flex-1 -mt-0.5"><div className="flex items-center justify-between"><span className="font-label-md text-label-md text-on-surface font-bold">Seller preparing</span><span className="font-body-sm text-body-sm text-on-surface-variant">11:30 AM</span></div><span className="font-body-sm text-body-sm text-on-surface-variant block">Items packed and sealed in tamper-evident bag</span></div></div><div className="flex items-start gap-3 relative"><div className="w-6 h-6 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shrink-0 z-10"><Icon name="check" className="text-[14px]" /></div><div className="flex-1 -mt-0.5"><div className="flex items-center justify-between"><span className="font-label-md text-label-md text-on-surface font-bold">Ready for pickup or Shipped</span><span className="font-body-sm text-body-sm text-on-surface-variant">12:45 PM</span></div><span className="font-body-sm text-body-sm text-on-surface-variant block">Handed over to Swift Express courier</span></div></div><div className="flex items-start gap-3 relative"><div className="w-6 h-6 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shrink-0 z-10"><Icon name="check" className="text-[14px]" /></div><div className="flex-1 -mt-0.5"><div className="flex items-center justify-between"><span className="font-label-md text-label-md text-on-surface font-bold">In transit</span><span className="font-body-sm text-body-sm text-on-surface-variant">1:15 PM</span></div><span className="font-body-sm text-body-sm text-on-surface-variant block">Dispatched along Nakawa delivery corridor</span></div></div><div className="flex items-start gap-3 relative"><div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 z-10 ring-4 ring-primary-fixed"><Icon name="sync" className="text-[14px] animate-spin" /></div><div className="flex-1 -mt-0.5"><div className="flex items-center justify-between"><span className="font-label-md text-label-md text-primary font-extrabold">Out for delivery</span><span className="font-label-sm text-label-sm font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary">Active Now</span></div><span className="font-body-sm text-body-sm text-on-surface font-semibold block">Boda rider nearby • Est. 2:15 PM</span></div></div><div className="flex items-start gap-3 relative opacity-60"><div className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center shrink-0 z-10"><Icon name="pending" className="text-[14px]" /></div><div className="flex-1 -mt-0.5"><div className="flex items-center justify-between"><span className="font-label-md text-label-md text-on-surface font-semibold">Delivered (enter 6-digit code)</span><span className="font-body-sm text-body-sm text-on-surface-variant">Pending</span></div><span className="font-body-sm text-body-sm text-on-surface-variant block">Verify delivery and enter code to release payment</span></div></div></div></div>

<div className="rounded-2xl bg-surface-container-lowest shadow-sm p-space-lg flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="location_on" className="text-primary text-[20px]" />
<h2 className="font-label-lg text-label-lg text-on-surface font-bold">Delivery Destination</h2>
</div>
<span className="font-label-sm text-label-sm text-secondary font-bold">Doorstep</span>
</div>
<div className="flex flex-col bg-surface-container-low p-space-md rounded-xl gap-1">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-bold">Joshua Kato</span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-mono">+256 772 345 678</span>
</div>
<p className="font-body-md text-body-md text-on-surface leading-tight mt-0.5">
        Plot 14, Kira Road, Nakawa Division, Kampala
      </p>
<div className="flex items-center gap-1.5 mt-1 text-primary">
<Icon name="info" className="text-[16px]" />
<span className="font-body-sm text-body-sm font-semibold">Landmark: Near Kira Road Police Post gate</span>
</div>
</div>
</div>

<div className="rounded-2xl bg-surface-container-lowest shadow-sm p-space-lg flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<h2 className="font-headline-sm text-headline-sm text-on-surface text-base">Order Items (2)</h2>
<span className="font-label-sm text-label-sm text-on-surface-variant">Order #SW-98421</span>
</div>

<div className="flex flex-col gap-space-sm pb-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface font-bold">SoundCore Uganda Official</span>
<span className="px-1.5 py-0.2 rounded-full bg-tertiary/10 text-tertiary font-label-sm text-label-sm font-bold flex items-center gap-0.5">
<Icon name="verified" className="text-[12px]" /> Verified
          </span>
</div>
<button className="font-label-sm text-label-sm text-primary font-bold hover:underline" onClick={() => alertToast('Action triggered')}>Message</button>
</div>
<div className="flex items-center gap-3 bg-surface-container-low p-2.5 rounded-xl">
<img className="w-16 h-16 rounded-lg object-cover shrink-0" data-alt="Sleek premium SoundCore Space One matte black over-ear wireless noise cancelling headphones sitting on a warm studio pedestal with crisp dramatic lighting." src={`${assetBase}/images/41a04b8dc49f748a.webp`} />
<div className="flex flex-col min-w-0 flex-1">
<span className="font-label-md text-label-md text-on-surface font-bold truncate">SoundCore Space One ANC Headphones</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Qty: 1 • Jet Black Edition</span>
<span className="font-label-md text-label-md text-secondary font-bold mt-1">UGX 265,000</span>
</div>
</div>
</div>

<div className="flex flex-col gap-space-sm pb-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface font-bold">Kikuubo Tech World</span>
<span className="px-1.5 py-0.2 rounded-full bg-tertiary/10 text-tertiary font-label-sm text-label-sm font-bold flex items-center gap-0.5">
<Icon name="verified" className="text-[12px]" /> Verified
          </span>
</div>
<button className="font-label-sm text-label-sm text-primary font-bold hover:underline" onClick={() => alertToast('Action triggered')}>Message</button>
</div>
<div className="flex items-center gap-3 bg-surface-container-low p-2.5 rounded-xl">
<img className="w-16 h-16 rounded-lg object-cover shrink-0" data-alt="High capacity textured Oraimo 20000mAh portable power bank in dark grey finish with LED battery display showing 100 percent, studio setting." src={`${assetBase}/images/40d5707df0ebbfce.webp`} />
<div className="flex flex-col min-w-0 flex-1">
<span className="font-label-md text-label-md text-on-surface font-bold truncate">Oraimo 20,000mAh Power Bank 22.5W</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Qty: 1 • Ultra Fast Charge</span>
<span className="font-label-md text-label-md text-secondary font-bold mt-1">UGX 65,000</span>
</div>
</div>
</div>

<div className="flex flex-col gap-1.5 pt-2 bg-surface-container-low p-space-md rounded-xl">
<div className="flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant">
<span className="">Items Subtotal</span>
<span className="font-medium text-on-surface">UGX 330,000</span>
</div>
<div className="flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant">
<span className="">Swift Express Doorstep Boda</span>
<span className="font-medium text-on-surface">UGX 8,500</span>
</div>
<div className="flex items-center justify-between font-label-lg text-label-lg text-on-surface font-bold pt-1.5">
<span className="">Total Escrow Amount</span>
<span className="text-primary font-headline-sm text-headline-sm">UGX 338,500</span>
</div>
<div className="flex items-center gap-1.5 mt-1 text-on-surface-variant font-body-sm text-body-sm"><span className="w-2 h-2 rounded-full bg-tertiary"></span><span className="">Settled via <strong className="text-on-surface">Mobile Money</strong> (+256 772•••678)</span></div>
</div>
</div>

<div className="flex flex-col gap-space-sm pt-2">

<button className="w-full h-12 rounded-2xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-md hover:opacity-95 active:scale-98 transition-all flex items-center justify-center gap-2" id="releaseEscrowBtn" onClick={() => alertToast('Action triggered')}>
<Icon name="lock_open" className="text-[20px]" />
<span className="">Confirm Delivery &amp; Release Escrow</span>
</button>

<div className="grid grid-cols-2 gap-space-sm">
<button className="h-11 rounded-xl bg-surface-container-lowest text-on-surface font-label-md text-label-md font-bold shadow-sm hover:bg-surface-container active:scale-95 transition-all flex items-center justify-center gap-1.5" onClick={() => alertToast('Action triggered')}>
<Icon name="assignment_return" className="text-[18px] text-error" />
<span className="">Return / Refund</span>
</button>
<button className="h-11 rounded-xl bg-surface-container-lowest text-on-surface font-label-md text-label-md font-bold shadow-sm hover:bg-surface-container active:scale-95 transition-all flex items-center justify-center gap-1.5" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}>
<Icon name="report_problem" className="text-[18px] text-primary" />
<span className="">Dispute / Help</span>
</button>
</div>

<div className="flex items-center justify-between px-2 pt-2">
<button className="flex items-center gap-1 font-label-md text-label-md text-secondary font-bold hover:underline" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}>
<Icon name="support_agent" className="text-[18px]" />
        Chat with Sellers
      </button>
<button className="flex items-center gap-1 font-label-md text-label-md text-on-surface-variant font-medium hover:text-on-surface" onClick={() => alertToast('Action triggered')}>
<Icon name="receipt_long" className="text-[18px]" />
        Official VAT Invoice (PDF)
      </button>
</div>
</div>

<div className="fixed bottom-6 left-4 right-4 bg-inverse-surface text-inverse-on-surface px-4 py-3 rounded-xl shadow-xl flex items-center justify-between opacity-0 pointer-events-none transition-all duration-300 z-50" id="toastNotification">
<div className="flex items-center gap-2">
<Icon name="check_circle" className="text-tertiary-fixed text-[20px]" />
<span className="font-body-sm text-body-sm font-semibold" id="toastMsg">Delivery Code copied to clipboard!</span>
</div>
<button className="text-inverse-on-surface/80 hover:text-inverse-on-surface" onClick={() => { setDrawerOpen(false); setModalOpen(false); }}>
<Icon name="close" className="text-[18px]" />
</button>
</div>
</div>
</main>
    </div>
  );
};

export default Screen;
