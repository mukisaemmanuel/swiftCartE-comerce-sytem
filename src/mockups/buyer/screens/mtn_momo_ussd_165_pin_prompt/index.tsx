// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/buyer/mtn_momo_ussd_165_pin_prompt/code.html
import React, { useState } from 'react';
import Icon from '../../../../components/shared/Icon';

export interface ScreenProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Screen: React.FC<ScreenProps> = (_props) => {
  const assetBase = import.meta.env.VITE_ASSET_BASE ?? '';
  const [, setDrawerOpen] = useState(false);
  const [, setModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-surface text-on-surface antialiased flex flex-col min-h-screen selection:bg-primary-fixed selection:text-on-primary-fixed relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
    body {
      min-height: max(884px, 100dvh);
    }
  
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(14,27,77,0.04)] pt-safe"><div className="h-16 px-gutter flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-xs min-w-0"><button aria-label="Go back" className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-variant/40 active:scale-95 transition-transform flex-shrink-0" onClick={() => alertToast('Action triggered')}><Icon name="arrow_back" className="text-[24px]" /></button><img alt="swiftcart-logo-icon-only.png" className="h-7 w-auto object-contain flex-shrink-0 hidden xs:block" src={`${assetBase}/images/95ec767b02525811.webp`} /><div className="flex flex-col min-w-0"><h1 className="font-headline-sm text-headline-sm text-on-surface truncate leading-tight">Mobile Money Payment</h1><div className="inline-flex items-center gap-1 text-tertiary"><Icon name="verified_user" className="text-[13px]" /><span className="font-label-sm text-label-sm tracking-tight">Swift Escrow Protected</span></div></div></div><div className="flex items-center gap-space-xs flex-shrink-0"><div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-50 text-tertiary shadow-[0_1px_3px_rgba(0,105,71,0.1)]"><Icon name="lock" className="text-[15px]" /><span className="font-label-sm text-label-sm hidden sm:inline">Safe Checkout</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-[0_2px_8px_rgba(218,55,0,0.25)]"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header><main className="flex-1 flex flex-col relative w-full pt-16 bg-surface px-margin pb-safe"><div className="flex flex-col w-full relative">

<div className="flex flex-col gap-space-md w-full filter brightness-[0.82] select-none pointer-events-none pb-28">

<div className="w-full bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50">
<span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
<span className="font-label-sm text-label-sm text-amber-900 tracking-wide uppercase">Payment Session Active</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
<Icon name="timer" className="text-[15px]" />
<span id="bg-countdown">01:48</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary relative">
<svg className="w-12 h-12 -rotate-90" viewBox="0 0 48 48">
<circle cx="24" cy="24" fill="none" r="20" stroke="currentColor" strokeOpacity="0.2" strokeWidth="3.5"></circle>
<circle cx="24" cy="24" fill="none" r="20" stroke="currentColor" strokeDasharray="125" strokeDashoffset="35" strokeLinecap="round" strokeWidth="3.5"></circle>
</svg>
<Icon name="contactless" className="absolute text-[22px]" />
</div>
<div className="flex flex-col min-w-0">
<p className="font-headline-sm text-headline-sm text-on-surface leading-snug">Approving UGX 385,000</p>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Push sent to MTN +256 772 345 678</p>
</div>
</div>

<div className="bg-surface-container-low rounded-lg p-space-sm flex items-center gap-2 text-on-surface-variant">
<Icon name="cell_tower" className="text-[18px] text-tertiary" />
<span className="font-body-sm text-body-sm">USSD channel handshake initiated with MTN Uganda</span>
</div>
</div>

<div className="w-full bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex gap-3">
<img className="w-16 h-16 rounded-lg object-cover flex-shrink-0" data-alt="SoundCore Space One ANC Headphones premium matte black packaged in modern electronics retail staging with soft golden studio lighting reflecting Ugandan premium audio shop merchandise" src={`${assetBase}/images/9c5bcbd44ebf6462.webp`} />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-primary tracking-wide">ORDER #SWIFT-8942-KLA</span>
<h2 className="font-label-lg text-label-lg text-on-surface line-clamp-1">SoundCore Space One ANC Headphones</h2>
<div className="flex items-center gap-1 text-on-surface-variant mt-0.5">
<Icon name="store" className="text-[14px]" />
<span className="font-body-sm text-body-sm truncate">SoundCore Uganda (Pioneer Mall G-14)</span>
</div>
</div>
</div>
</div>
<div className="pt-space-sm mt-1 flex items-center justify-between">
<div className="flex flex-col">
<span className="font-body-sm text-body-sm text-on-surface-variant">Total Payable</span>
<span className="font-price-display text-price-display text-on-surface">UGX 385,000</span>
</div>
<div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-tertiary">
<Icon name="shield" className="text-[15px]" />
<span className="font-label-sm text-label-sm">Escrow Locked</span>
</div>
</div>
</div>

<div className="w-full bg-surface-container rounded-xl p-space-md flex items-start gap-3">
<Icon name="lock_clock" className="text-tertiary text-[20px] mt-0.5" />
<div className="flex flex-col gap-0.5">
<span className="font-label-md text-label-md text-on-surface">Swift Safe Escrow Protection</span>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Your payment will remain safeguarded until you inspect your headphones and hand over the 6-digit release code to the rider.</p>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 flex flex-col justify-center items-center px-4 bg-inverse-surface/65 backdrop-blur-[6px] transition-opacity duration-200" id="ussd-modal">

<div className="w-full max-w-[360px] bg-surface-container-lowest rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-[fadeIn_0.25s_ease-out]">

<div className="bg-[#FFCC00] text-black px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-black text-[#FFCC00] flex items-center justify-center font-headline-sm text-[12px] font-extrabold tracking-tighter">
            MTN
          </div>
<div className="flex flex-col">
<span className="font-label-md text-label-md tracking-tight leading-none text-black">Mobile Money (*165#)</span>
<span className="font-label-sm text-[10px] text-black/75 tracking-tight font-medium">Telecom Push Request • Live</span>
</div>
</div>
<div className="flex items-center gap-1 bg-black/10 px-2 py-0.5 rounded-full">
<Icon name="encrypted" className="text-[13px] text-black" />
<span className="font-label-sm text-[10px] text-black font-semibold uppercase">TLS-SIM</span>
</div>
</div>

<div className="p-space-lg flex flex-col gap-space-md bg-surface-container-lowest">

<div className="bg-surface-container-low rounded-xl p-3 flex flex-col gap-2">
<p className="font-body-md text-body-md text-on-surface font-semibold leading-relaxed">
            SwiftCart Escrow Deposit: Approve payment of UGX 385,000 to <span className="text-primary font-bold">SWIFTCART UGANDA</span> (Ref: ORD-8942)?
          </p>
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-1">
<span>Transaction Fee: <strong>UGX 0</strong></span>
<span>Tax (Excise): <strong>UGX 0</strong></span>
</div>
</div>
<p className="font-label-md text-label-md text-on-surface text-center">
          Enter your 5-digit MoMo PIN to authorize:
        </p>

<div className="flex justify-center items-center gap-3 py-1">
<div className="w-4 h-4 rounded-full bg-surface-variant transition-all" id="dot-1"></div>
<div className="w-4 h-4 rounded-full bg-surface-variant transition-all" id="dot-2"></div>
<div className="w-4 h-4 rounded-full bg-surface-variant transition-all" id="dot-3"></div>
<div className="w-4 h-4 rounded-full bg-surface-variant transition-all" id="dot-4"></div>
<div className="w-4 h-4 rounded-full bg-surface-variant transition-all" id="dot-5"></div>
</div>

<div className="grid grid-cols-3 gap-1.5 pt-1">
<button className="h-11 rounded-lg bg-surface-container hover:bg-surface-container-high active:scale-95 text-on-surface font-headline-sm text-headline-sm flex items-center justify-center transition-transform" type="button" onClick={() => alertToast('Action triggered')}>1</button>
<button className="h-11 rounded-lg bg-surface-container hover:bg-surface-container-high active:scale-95 text-on-surface font-headline-sm text-headline-sm flex items-center justify-center transition-transform" type="button" onClick={() => alertToast('Action triggered')}>2</button>
<button className="h-11 rounded-lg bg-surface-container hover:bg-surface-container-high active:scale-95 text-on-surface font-headline-sm text-headline-sm flex items-center justify-center transition-transform" type="button" onClick={() => alertToast('Action triggered')}>3</button>
<button className="h-11 rounded-lg bg-surface-container hover:bg-surface-container-high active:scale-95 text-on-surface font-headline-sm text-headline-sm flex items-center justify-center transition-transform" type="button" onClick={() => alertToast('Action triggered')}>4</button>
<button className="h-11 rounded-lg bg-surface-container hover:bg-surface-container-high active:scale-95 text-on-surface font-headline-sm text-headline-sm flex items-center justify-center transition-transform" type="button" onClick={() => alertToast('Action triggered')}>5</button>
<button className="h-11 rounded-lg bg-surface-container hover:bg-surface-container-high active:scale-95 text-on-surface font-headline-sm text-headline-sm flex items-center justify-center transition-transform" type="button" onClick={() => alertToast('Action triggered')}>6</button>
<button className="h-11 rounded-lg bg-surface-container hover:bg-surface-container-high active:scale-95 text-on-surface font-headline-sm text-headline-sm flex items-center justify-center transition-transform" type="button" onClick={() => alertToast('Action triggered')}>7</button>
<button className="h-11 rounded-lg bg-surface-container hover:bg-surface-container-high active:scale-95 text-on-surface font-headline-sm text-headline-sm flex items-center justify-center transition-transform" type="button" onClick={() => alertToast('Action triggered')}>8</button>
<button className="h-11 rounded-lg bg-surface-container hover:bg-surface-container-high active:scale-95 text-on-surface font-headline-sm text-headline-sm flex items-center justify-center transition-transform" type="button" onClick={() => alertToast('Action triggered')}>9</button>
<button className="h-11 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant font-label-md text-label-md flex items-center justify-center transition-transform" type="button" onClick={() => alertToast('Action triggered')}>CLR</button>
<button className="h-11 rounded-lg bg-surface-container hover:bg-surface-container-high active:scale-95 text-on-surface font-headline-sm text-headline-sm flex items-center justify-center transition-transform" type="button" onClick={() => alertToast('Action triggered')}>0</button>
<button className="h-11 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-headline-sm flex items-center justify-center transition-transform" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="backspace" className="text-[20px]" />
</button>
</div>

<div className="flex items-center justify-center gap-1.5 text-on-surface-variant">
<Icon name="lock" className="text-[14px] text-tertiary" />
<span className="font-label-sm text-label-sm">Secure MoMo Network Keypass</span>
</div>

<div className="flex items-center gap-2 pt-1">
<button className="w-1/2 h-11 rounded-xl bg-surface-container-high text-on-surface font-label-lg text-label-lg active:scale-95 transition-transform flex items-center justify-center" type="button" onClick={() => { setDrawerOpen(false); setModalOpen(false); }}>
            Cancel
          </button>
<button className="w-1/2 h-11 rounded-xl bg-[#FFCC00] text-black font-label-lg text-label-lg active:scale-95 transition-transform flex items-center justify-center gap-1.5 shadow-md" id="auth-btn" type="button" onClick={() => alertToast('Action triggered')}>
<span>Send</span>
<Icon name="arrow_forward" className="text-[18px]" />
</button>
</div>
</div>
</div>

<button className="hidden mt-4 px-4 py-2 rounded-full bg-surface-container-lowest text-on-surface shadow-xl flex items-center gap-2 active:scale-95 transition-transform" id="reopen-pill" onClick={() => alertToast('Action triggered')}>
<span className="w-2.5 h-2.5 rounded-full bg-[#FFCC00]"></span>
<span className="font-label-md text-label-md">Reopen MTN MoMo Prompt</span>
<Icon name="open_in_new" className="text-[16px]" />
</button>
</div>

<div className="fixed bottom-0 inset-x-0 z-40 bg-surface-container-lowest shadow-[0_-4px_24px_rgba(14,27,77,0.08)] px-margin pt-space-md pb-safe rounded-t-2xl max-w-lg mx-auto">
<div className="flex flex-col gap-space-sm">

<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="help" className="text-primary text-[20px]" />
<span className="font-label-md text-label-md text-on-surface">Didn't receive the prompt?</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Step 2 of 2</span>
</div>

<div className="grid grid-cols-2 gap-2">

<a className="flex flex-col p-2.5 bg-surface-container-low rounded-xl active:bg-surface-container transition-colors" href="tel:*165*4*4%23" onClick={() => alertToast('Action triggered')}>
<div className="flex items-center justify-between text-on-surface">
<span className="font-label-sm text-label-sm text-primary font-bold">Manual Approval</span>
<Icon name="call" className="text-[16px]" />
</div>
<span className="font-headline-sm text-[13px] text-on-surface mt-0.5">Dial *165*4*4#</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">Approve under 'My Approvals'</span>
</a>

<button className="flex flex-col p-2.5 bg-surface-container-low rounded-xl text-left active:bg-surface-container transition-colors" id="resend-btn" onClick={() => alertToast('Action triggered')}>
<div className="flex items-center justify-between text-on-surface">
<span className="font-label-sm text-label-sm text-secondary font-bold">Resend Push</span>
<Icon name="refresh" className="text-[16px]" />
</div>
<span className="font-headline-sm text-[13px] text-on-surface mt-0.5" id="resend-text">Push in 28s</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">Sends new prompt to phone</span>
</button>
</div>

<div className="flex items-center justify-between pt-1">
<button className="inline-flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface py-1" onClick={() => alertToast('Action triggered')}>
<Icon name="swap_horiz" className="text-[15px]" />
<span>Switch to Airtel Money or Card</span>
</button>
<div className="flex items-center gap-1 text-tertiary">
<Icon name="verified" className="text-[14px]" />
<span className="font-label-sm text-label-sm">Swift Escrow Protected</span>
</div>
</div>
</div>
</div>


</div></main>
    </div>
  );
};

export default Screen;
