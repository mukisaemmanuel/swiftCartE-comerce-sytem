// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/seller/returns_disputes_swiftcart_seller/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface MobileProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Mobile: React.FC<MobileProps> = (props) => {
  const onNavigate = props.onNavigate;
  
  const { theme, toggleTheme } = useDashboardTheme();
  const assetBase = '';
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className={`font-body-md text-body-md antialiased pt-safe pb-safe min-h-screen flex flex-col relative w-full overflow-x-hidden ${theme === 'dark' ? 'bg-[#0f172a] text-[#f9fafb]' : 'bg-[#f8fafc] text-[#0f172a]'}`}>
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-slate-900 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 inset-x-0 z-40 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-gutter flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-xs min-w-0"><button aria-label="Go back" className="w-12 h-12 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all shrink-0" onClick={() => alertToast('Action triggered')}><Icon name="arrow_back_ios_new" className="text-[24px]" /></button><img alt="swiftcart-logo-icon-only.png" className="h-8 w-auto object-contain shrink-0" src={`${assetBase}/images/73a64f43e1bfb68c.webp`} /><h1 className="font-headline-sm text-headline-sm font-bold text-on-surface truncate">Returns And Disputes</h1></div><div className="flex items-center gap-space-xs shrink-0"><button aria-label="Toggle Light and Dark Mode" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-[20px] dark:hidden" /><Icon name="light_mode" className="text-[20px] hidden dark:inline" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"><span className="font-label-sm text-label-sm font-bold text-on-primary">KG</span></div></div></div></header>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-safe bg-surface"><div className="flex flex-col w-full px-gutter py-space-sm gap-space-md text-on-surface">

<div className="w-full rounded-xl bg-surface-container-highest/60 p-space-sm flex items-start gap-space-sm shadow-sm backdrop-blur-sm">
<div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary mt-0.5">
<Icon name="verified_user" className="text-[18px]" />
</div>
<div className="flex-1 min-w-0"><div className="flex items-center gap-space-xs"><span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Payment Protection</span><span className="w-1 h-1 rounded-full bg-outline"></span><span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">SwiftCart Uganda</span></div><p className="font-body-sm text-body-sm text-on-surface mt-0.5">Payment Protection: <strong className="font-semibold text-primary">UGX 280,000</strong> for order #RT-309 is held safely by SwiftCart pending return verification.</p></div>
</div>

<div className="flex items-center gap-space-xs p-1 bg-surface-container rounded-xl overflow-x-auto select-none">
<button className="flex-1 min-w-[100px] py-2 px-space-xs rounded-lg bg-surface text-primary shadow-sm flex items-center justify-center gap-1.5 transition-all" id="tab-active" onClick={() => alertToast('Action triggered')}>
<span className="font-label-lg text-label-lg">Requests</span>
<span className="px-1.5 py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm leading-none">2</span>
</button>
<button className="flex-1 min-w-[100px] py-2 px-space-xs rounded-lg text-on-surface-variant flex items-center justify-center gap-1.5 hover:text-on-surface transition-all" id="tab-dispute" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}>
<span className="font-label-lg text-label-lg">In Dispute</span>
<span className="px-1.5 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm leading-none">1</span>
</button>
<button className="flex-1 min-w-[100px] py-2 px-space-xs rounded-lg text-on-surface-variant flex items-center justify-center gap-1.5 hover:text-on-surface transition-all" id="tab-resolved" onClick={() => alertToast('Action triggered')}>
<span className="font-label-lg text-label-lg">Resolved</span>
<span className="px-1.5 py-0.5 rounded-full bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm leading-none">14</span>
</button>
</div>

<div className="w-full bg-surface-container-lowest rounded-xl shadow-md p-space-md flex flex-col gap-space-md">

<div className="flex items-center justify-between gap-space-xs">
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface">Case #RT-309</span>
<span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">Urgent</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Order #SC-8921 • Kampala Central</span>
</div>
<div className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-error-container text-on-error-container shrink-0 animate-pulse">
<Icon name="hourglass_top" className="text-[16px]" />
<span className="font-label-sm text-label-sm font-bold">18h left</span>
</div>
</div>

<div className="flex gap-space-sm p-space-sm rounded-lg bg-surface-container-low items-center">
<img className="w-14 h-14 rounded-lg object-cover shrink-0" data-alt="SoundCore Space One active noise cancelling wireless headphones in matte black finish on a sleek studio surface with blue accent lighting." src={`${assetBase}/images/5c0e710f3b899718.webp`} />
<div className="flex-1 min-w-0">
<div className="font-label-lg text-label-lg text-on-surface truncate">SoundCore Space One ANC</div>
<div className="font-headline-sm text-headline-sm font-bold text-primary">UGX 280,000</div>
<div className="flex items-center gap-1 font-body-sm text-body-sm text-on-surface-variant text-[11px]">
<span className="">Buyer: Alex K.</span>
<span className="">•</span>
<span className="text-tertiary flex items-center"><Icon name="verified" className="text-[12px] mr-0.5" />Verified Buyer</span>
</div>
</div>
</div>

<div className="rounded-lg bg-surface-container p-space-sm flex flex-col gap-1">
<div className="flex items-center gap-1 text-on-surface-variant">
<Icon name="format_quote" className="text-[16px]" />
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Buyer Claim</span>
</div>
<p className="font-body-md text-body-md text-on-surface italic">"Left ear cup does not power on after unboxing. Original packaging intact."</p>
</div>

<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Buyer Evidence (3 Photos)</span>
<span className="font-label-sm text-label-sm text-primary">Tap to inspect</span>
</div>
<div className="grid grid-cols-3 gap-space-xs">
<div className="relative group rounded-lg overflow-hidden bg-surface-container aspect-square cursor-pointer">
<img className="w-full h-full object-cover" data-alt="Close-up macro shot of product warranty barcode sticker showing unbroken security hologram and intact factory seal on black packaging." src={`${assetBase}/images/5629b191cd25333c.webp`} />
<div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white opacity-90 group-hover:opacity-100 transition-opacity">
<Icon name="zoom_in" className="text-[20px]" />
</div>
<span className="absolute bottom-1 left-1 bg-surface-container-highest/90 text-on-surface text-[9px] px-1 rounded font-label-sm">Serial &amp; Label</span>
</div>
<div className="relative group rounded-lg overflow-hidden bg-surface-container aspect-square cursor-pointer">
<img className="w-full h-full object-cover" data-alt="Close up view of the black headphone charging port and LED power indicator remaining dark while plugged into official fast charging cable." src={`${assetBase}/images/6c203140e90099da.webp`} />
<div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white opacity-90 group-hover:opacity-100 transition-opacity">
<Icon name="zoom_in" className="text-[20px]" />
</div>
<span className="absolute bottom-1 left-1 bg-surface-container-highest/90 text-on-surface text-[9px] px-1 rounded font-label-sm">Power LED</span>
</div>
<div className="relative group rounded-lg overflow-hidden bg-surface-container aspect-square cursor-pointer">
<img className="w-full h-full object-cover" data-alt="Neatly arranged unboxing view showing black headphones, carrying pouch, aux wire, manual, and original retail box on a clean wooden table." src={`${assetBase}/images/5a31d76b78acf6f5.webp`} />
<div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white opacity-90 group-hover:opacity-100 transition-opacity">
<Icon name="zoom_in" className="text-[20px]" />
</div>
<span className="absolute bottom-1 left-1 bg-surface-container-highest/90 text-on-surface text-[9px] px-1 rounded font-label-sm">Accessories</span>
</div>
</div>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-high flex items-start gap-space-xs">
<div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5">
<Icon name="lock" className="text-[16px]" />
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-snug"><strong className="text-on-surface font-semibold">Payment Protection Active:</strong> UGX 280,000 is held safely by SwiftCart while support reviews the photos and claim.</p>
</div>

<div className="rounded-lg bg-surface-container-low p-space-sm flex flex-col gap-2">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Audit Chronology</span>
<div className="flex flex-col gap-2 pl-2">
<div className="flex items-start gap-2">
<span className="w-2 h-2 rounded-full bg-tertiary shrink-0 mt-1"></span>
<div className="flex-1">
<p className="font-body-sm text-body-sm text-on-surface">Delivery confirmed by SafeBoda</p>
<span className="text-[10px] text-on-surface-variant">Yesterday, 3:15 PM</span>
</div>
</div>
<div className="flex items-start gap-2">
<span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1"></span>
<div className="flex-1">
<p className="font-body-sm text-body-sm text-on-surface">Dispute submitted by buyer</p>
<span className="text-[10px] text-on-surface-variant">Yesterday, 6:30 PM</span>
</div>
</div>
<div className="flex items-start gap-2">
<span className="w-2 h-2 rounded-full bg-secondary shrink-0 mt-1"></span>
<div className="flex-1">
<p className="font-body-sm text-body-sm text-on-surface font-medium">Return Request Logged</p>
<span className="text-[10px] text-on-surface-variant">System • Yesterday, 6:31 PM</span>
</div>
</div>
<div className="flex items-start gap-2">
<span className="w-2 h-2 rounded-full bg-primary-container shrink-0 mt-1 animate-ping"></span>
<div className="flex-1">
<p className="font-body-sm text-body-sm text-primary font-bold">Awaiting Seller Decision</p>
<span className="text-[10px] text-on-surface-variant">Expires in 18 hours</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-2 pt-1">

<button className="w-full py-3 px-space-md rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-sm hover:opacity-95 active:scale-[0.98] transition-all" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}>
<Icon name="two_wheeler" className="text-[20px]" />
<span className="">Accept Return &amp; Authorize Boda Pickup</span>
</button>

<button className="w-full py-2.5 px-space-md rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg flex items-center justify-center gap-2 hover:bg-surface-container-high active:scale-[0.98] transition-all" onClick={() => alertToast('Action triggered')}>
<Icon name="swap_horizontal_circle" className="text-[18px]" />
<span className="">Offer Replacement Item (Direct Swap)</span>
</button>

<button className="w-full py-2.5 px-space-md rounded-xl bg-transparent text-error font-label-lg text-label-lg flex items-center justify-center gap-2 hover:bg-error-container/20 active:scale-[0.98] transition-all" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}><Icon name="assignment_turned_in" className="text-[18px]" /><span className="">Submit Dispute Response &amp; Photos</span></button>
</div>
</div>

<div className="w-full bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col gap-space-sm opacity-90 hover:opacity-100 transition-opacity">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Case #RT-298</span>
<span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Order #SC-8604</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-tertiary/15 text-tertiary font-label-sm text-label-sm flex items-center gap-1 font-bold">
<Icon name="check_circle" className="text-[14px]" />
        Resolved
      </span>
</div>
<div className="flex items-center gap-space-sm">
<img className="w-10 h-10 rounded-lg object-cover shrink-0" data-alt="Anker 65W GaN Fast Charger compact wall adapter plugged in beside a braided USB-C cable on office desk." src={`${assetBase}/images/203ceffe695822ac.webp`} />
<div className="flex-1 min-w-0">
<div className="font-body-md text-body-md font-semibold text-on-surface truncate">Anker 65W GaN Fast Charger</div>
<div className="font-body-sm text-body-sm text-tertiary font-bold">UGX 145,000 Payout Released</div>
</div>
</div>
<div className="p-2 rounded-lg bg-surface-container-low text-[12px] text-on-surface-variant flex items-center gap-2">
<Icon name="handshake" className="text-tertiary text-[16px] shrink-0" />
<span className="">Buyer withdrew claim after troubleshooting guidance. Payout cleared to merchant wallet.</span>
</div>
</div>

<div className="fixed inset-0 z-50 bg-on-background/70 backdrop-blur-sm hidden items-end sm:items-center justify-center p-0 sm:p-4" id="contest-modal">
<div className="w-full max-w-lg bg-surface-container-lowest rounded-t-2xl sm:rounded-2xl p-space-lg flex flex-col gap-space-md shadow-2xl animate-in slide-in-from-bottom duration-200">

<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs"><div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary"><Icon name="shield" className="text-[20px]" /></div><div><h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Seller Dispute Response</h3><p className="font-body-sm text-body-sm text-on-surface-variant">SwiftCart Uganda Support Review</p></div></div>
<button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container active:scale-95" onClick={() => alertToast('Action triggered')}>
<Icon name="close" className="text-[20px]" />
</button>
</div>

<div className="p-2.5 rounded-lg bg-surface-container text-body-sm text-on-surface-variant leading-relaxed">Please provide factual packaging details and testing proof. SwiftCart Uganda support will evaluate the response to decide on fund release, buyer return, or partial refund.</div>

<div className="flex flex-col gap-space-sm">
<label className="font-label-lg text-label-lg font-semibold text-on-surface flex items-center justify-between" htmlFor="contest-reason">
<span className="">Seller Defense Statement *</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-normal">Min 20 characters</span>
</label>
<textarea className="w-full p-space-sm rounded-xl bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/60 font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container resize-none" id="contest-reason" placeholder="Provide factual context (e.g., unit was pre-tested prior to dispatch, serial code mismatch, or improper customer usage)..." rows={3}></textarea>
</div>

<div className="flex flex-col gap-space-xs">
<span className="font-label-lg text-label-lg font-semibold text-on-surface">Packaging Proof / Serial Video *</span>
<div className="w-full p-4 rounded-xl bg-surface-container-low flex flex-col items-center justify-center gap-1.5 cursor-pointer hover:bg-surface-container transition-colors">
<Icon name="cloud_upload" className="text-primary text-[28px]" />
<span className="font-label-sm text-label-sm text-on-surface font-bold" id="upload-label">Upload CCTV Packaging Footage or Photo</span>
<span className="text-[11px] text-on-surface-variant">MP4, MOV, or JPG (Max 25MB)</span>
</div>
</div>

<div className="flex items-center gap-space-sm pt-2">
<button className="flex-1 py-3 rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg active:scale-98 transition-transform" onClick={() => alertToast('Action triggered')}>
          Cancel
        </button>
<button className="flex-1 py-3 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg shadow-md active:scale-98 transition-transform flex items-center justify-center gap-1" onClick={() => alertToast('Action triggered')}><Icon name="send" className="text-[18px]" /><span className="">Submit Response</span></button>
</div>
</div>
</div>

<div className="fixed bottom-6 left-4 right-4 z-50 pointer-events-none transition-all duration-300 opacity-0 transform translate-y-4 flex justify-center" id="desk-toast">
<div className="bg-inverse-surface text-inverse-on-surface px-4 py-2.5 rounded-full shadow-lg flex items-center gap-2 max-w-sm pointer-events-auto">
<Icon name="check_circle" className="text-tertiary-fixed text-[18px]" />
<span className="font-body-md text-body-md" id="toast-message">Action processed successfully</span>
</div>
</div>
</div>
</main>
    </div>
  );
};

export default Mobile;
