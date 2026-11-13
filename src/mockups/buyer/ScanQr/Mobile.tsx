// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/buyer/scan_qr_handover_swiftcart_uganda/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';

export interface MobileProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Mobile: React.FC<MobileProps> = (props) => {
  const onNavigate = props.onNavigate;
  const [, setDrawerOpen] = useState(false);
  const [, setModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased flex flex-col min-h-screen relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{width:100vw;margin:0;padding:0;}body{overscroll-behavior:none;}.pb-safe{padding-bottom:env(safe-area-inset-bottom,0px);}.pt-safe{padding-top:env(safe-area-inset-top,0px);}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}

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
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 px-margin flex items-center justify-between"><div className="flex items-center gap-space-sm"><button aria-label="Go Back" className="w-11 h-11 -ml-2 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors" type="button" onClick={() => alertToast('Action triggered')}><Icon name="arrow_back" className="text-[24px]" /></button><div className="flex flex-col"><h1 className="font-label-lg text-label-lg text-on-surface leading-tight">Live Rider Tracking</h1><span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span> Order Ref #ORD-8942</span></div></div><div className="flex items-center gap-space-xs"><button aria-label="Emergency and Support" className="min-w-[44px] min-h-[44px] px-space-xs rounded-full flex items-center justify-center text-error hover:bg-error-container/40 transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}><Icon name="emergency" className="text-[22px]" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header><main className="flex-1 flex flex-col relative w-full pt-16 bg-surface"><div className="flex flex-col w-full relative">

<div className="relative w-full overflow-hidden opacity-40 blur-[1px] select-none pointer-events-none pb-20">
<div className="w-full h-56 bg-cover bg-center" data-location="Lumumba Avenue, Nakasero, Kampala, Uganda" style={{"backgroundImage":"url('/images/32ca0406d4c31298.webp')"}}></div>
<div className="p-margin flex flex-col gap-space-sm">
<div className="bg-surface-container p-space-md rounded-xl flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<Icon name="two_wheeler" className="text-primary text-[28px]" />
<div>
<p className="font-label-lg text-label-lg text-on-surface">Rider Kizito Brian has arrived</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Plot 14, Lumumba Ave • Bajaj Boxer UEF 842X</p>
</div>
</div>
<span className="font-label-sm text-label-sm px-2 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full">At Doorstep</span>
</div>
</div>
</div>

<div className="fixed inset-0 bg-inverse-surface/60 backdrop-blur-sm z-30 transition-opacity"></div>

<div className="fixed inset-x-0 bottom-0 z-40 max-w-md mx-auto bg-surface-container-lowest rounded-t-[28px] shadow-[0_-8px_32px_rgba(14,27,77,0.18)] max-h-[813px] flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-300">

<div className="pt-3 pb-2 px-margin flex flex-col items-center bg-surface-container-lowest shrink-0">
<div className="w-12 h-1.5 bg-surface-variant rounded-full mb-3 cursor-grab"></div>
<div className="w-full flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
<Icon name="qr_code_scanner" className="text-[20px]" />
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface leading-tight">Delivery Handover</h2>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="w-2 h-2 rounded-full bg-tertiary animate-ping"></span>
<span className="font-label-sm text-label-sm text-tertiary font-bold flex items-center gap-0.5">
<Icon name="verified_user" className="text-[14px]" /> Swift Escrow Protected
              </span>
</div>
</div>
</div>
<button aria-label="Minimize Handover Sheet" className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:bg-surface-variant transition-colors" type="button" onClick={() => { setDrawerOpen(false); setModalOpen(false); }}>
<Icon name="close" className="text-[20px]" />
</button>
</div>
</div>

<div className="overflow-y-auto px-margin pb-safe pt-1 flex flex-col gap-space-md">

<div className="bg-primary-fixed/40 p-space-md rounded-xl flex items-start gap-space-sm shadow-sm">
<Icon name="warning" className="text-primary text-[22px] shrink-0 mt-0.5" />
<div className="flex flex-col gap-0.5">
<span className="font-label-md text-label-md text-on-primary-fixed-variant">1. Unbox &amp; Inspect First</span>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Check the tamper-evident seal and confirm your <strong className="text-on-surface font-semibold">SoundCore Space One ANC</strong> powers on before sharing this QR code or 6-digit PIN with Rider Kizito.
          </p>
</div>
</div>

<div className="bg-surface-container p-1 rounded-xl flex items-center gap-1">
<button className="flex-1 py-2 px-3 rounded-lg font-label-md text-label-md transition-all flex items-center justify-center gap-1.5 bg-surface-container-lowest text-primary shadow-sm" id="tab-qr" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="qr_code_2" className="text-[18px]" />
          Show QR Code
        </button>
<button className="flex-1 py-2 px-3 rounded-lg font-label-md text-label-md transition-all flex items-center justify-center gap-1.5 text-on-surface-variant hover:text-on-surface" id="tab-pin" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="pin" className="text-[18px]" />
          Manual 6-Digit PIN
        </button>
</div>

<div className="flex flex-col items-center" id="view-qr">
<div className="relative bg-surface-container-lowest p-space-md rounded-2xl shadow-[0_4px_20px_rgba(14,27,77,0.08)] flex flex-col items-center">

<div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-primary-container rounded-tl"></div>
<div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-primary-container rounded-tr"></div>
<div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-primary-container rounded-bl"></div>
<div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-primary-container rounded-br"></div>

<div className="w-52 h-52 bg-surface-container-lowest p-2 rounded-xl flex items-center justify-center relative">
<svg className="w-full h-full text-on-surface" fill="currentColor" viewBox="0 0 140 140">

<rect fill="#1e1b18" height="36" rx="6" width="36" x="10" y="10"></rect>
<rect fill="#ffffff" height="24" rx="4" width="24" x="16" y="16"></rect>
<rect fill="#da3700" height="12" rx="2" width="12" x="22" y="22"></rect>

<rect fill="#1e1b18" height="36" rx="6" width="36" x="94" y="10"></rect>
<rect fill="#ffffff" height="24" rx="4" width="24" x="100" y="16"></rect>
<rect fill="#da3700" height="12" rx="2" width="12" x="106" y="22"></rect>

<rect fill="#1e1b18" height="36" rx="6" width="36" x="10" y="94"></rect>
<rect fill="#ffffff" height="24" rx="4" width="24" x="16" y="100"></rect>
<rect fill="#da3700" height="12" rx="2" width="12" x="22" y="106"></rect>

<rect height="8" rx="2" width="8" x="52" y="12"></rect>
<rect height="16" rx="2" width="8" x="66" y="12"></rect>
<rect height="8" rx="2" width="8" x="80" y="20"></rect>
<rect height="8" rx="2" width="8" x="52" y="26"></rect>
<rect height="8" rx="2" width="8" x="20" y="52"></rect>
<rect height="16" rx="2" width="8" x="34" y="52"></rect>
<rect height="8" rx="2" width="8" x="48" y="44"></rect>
<rect fill="#da3700" height="20" rx="3" width="20" x="60" y="52"></rect>
<rect height="8" rx="2" width="16" x="86" y="44"></rect>
<rect height="16" rx="2" width="8" x="108" y="52"></rect>
<rect height="8" rx="2" width="8" x="122" y="44"></rect>
<rect height="16" rx="2" width="8" x="52" y="80"></rect>
<rect height="8" rx="2" width="16" x="66" y="88"></rect>
<rect height="8" rx="2" width="8" x="88" y="80"></rect>
<rect height="14" rx="2" width="8" x="102" y="74"></rect>
<rect height="8" rx="2" width="14" x="116" y="88"></rect>
<rect height="8" rx="2" width="16" x="52" y="104"></rect>
<rect height="16" rx="2" width="8" x="74" y="104"></rect>
<rect height="8" rx="2" width="14" x="88" y="112"></rect>
<rect height="8" rx="2" width="8" x="110" y="104"></rect>
<rect height="14" rx="2" width="8" x="122" y="116"></rect>
</svg>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-10 h-10 rounded-full bg-surface-container-lowest shadow-md flex items-center justify-center">
<Icon name="bolt" className="text-primary text-[22px]" />
</div>
</div>
</div>

<p className="font-body-sm text-body-sm text-on-surface-variant mt-2 text-center">
            Hold screen toward <strong className="text-on-surface">Kizito</strong> to scan with SwiftRider
          </p>
<div className="mt-2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary-fixed/30 text-on-tertiary-fixed">
<Icon name="brightness_high" className="text-[16px] text-tertiary" />
<span className="font-label-sm text-label-sm">Display brightness automatically maximized</span>
</div>
</div>
</div>

<div className="hidden flex-col items-center" id="view-pin">
<div className="w-full bg-surface-container-lowest p-space-lg rounded-2xl shadow-[0_4px_20px_rgba(14,27,77,0.08)] flex flex-col items-center text-center">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Inspection Handover PIN</span>
<div className="my-3 py-3 px-6 bg-surface-container rounded-2xl flex items-center justify-center gap-3">
<span className="font-headline-lg text-headline-lg tracking-[0.25em] text-primary select-all">749206</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Give this one-time OTP code to Rider Kizito only after you have physically opened and checked your package.
          </p>
<div className="mt-4 flex items-center gap-2">
<button className="px-4 py-2 bg-surface-container-high rounded-full font-label-md text-label-md text-on-surface hover:bg-surface-variant flex items-center gap-1.5" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="content_copy" className="text-[16px]" /> Copy Code
            </button>
<span className="font-label-sm text-label-sm text-tertiary flex items-center gap-1 bg-tertiary-fixed/30 px-3 py-2 rounded-full">
<Icon name="lock_clock" className="text-[14px]" /> Valid for this handover
            </span>
</div>
</div>
</div>

<div className="bg-surface-container p-space-sm rounded-xl flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="pin" className="text-secondary text-[20px]" />
<span className="font-label-md text-label-md text-on-surface">Backup Code: <span className="font-bold tracking-wider text-primary">749 • 206</span></span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Active PIN
        </span>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface flex items-center gap-1.5">
<Icon name="checklist" className="text-tertiary text-[18px]" /> Unboxing Safety Checklist
          </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Tap to mark</span>
</div>
<div className="flex flex-col gap-1.5">
<label className="flex items-center gap-2.5 p-2 rounded-lg bg-surface-container-lowest cursor-pointer transition-colors hover:bg-surface-container">
<input checked={true} className="w-4 h-4 rounded text-primary focus:ring-0 accent-primary" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface">SwiftCart tamper-evident seal is undamaged</span>
</label>
<label className="flex items-center gap-2.5 p-2 rounded-lg bg-surface-container-lowest cursor-pointer transition-colors hover:bg-surface-container">
<input checked={true} className="w-4 h-4 rounded text-primary focus:ring-0 accent-primary" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface">SoundCore Space One (Midnight Black) matches order</span>
</label>
<label className="flex items-center gap-2.5 p-2 rounded-lg bg-surface-container-lowest cursor-pointer transition-colors hover:bg-surface-container">
<input className="w-4 h-4 rounded text-primary focus:ring-0 accent-primary" id="check-confirm" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface font-semibold">I have tested power &amp; am satisfied with condition</span>
</label>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed font-bold text-sm">
            KB
          </div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface">Kizito Brian</span>
<span className="font-label-sm text-label-sm bg-surface-container px-1.5 py-0.5 rounded text-on-surface-variant">⭐ 4.9 (1,240+)</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Bajaj Boxer 150 • UEF 842X</span>
</div>
</div>
<div className="text-right">
<span className="font-currency-code text-currency-code text-on-surface-variant block">ESCROW TOTAL</span>
<span className="font-price-display text-price-display text-primary leading-tight">UGX 385,000</span>
</div>
</div>

<div className="px-1 text-center">
<p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
          Scanning this QR code or handing over PIN <span className="font-semibold text-on-surface">749-206</span> instantly releases <span className="font-semibold text-on-surface">UGX 385,000</span> held in escrow to <span className="font-semibold text-on-surface">SoundCore Uganda Official</span>.
        </p>
</div>

<div className="flex flex-col gap-2 pt-1 pb-4">
<button className="w-full h-12 bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] text-on-primary rounded-2xl font-label-lg text-label-lg shadow-[0_4px_14px_rgba(218,55,0,0.30)] active:scale-[0.98] transition-transform flex items-center justify-center gap-2" id="btn-confirm" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="thumb_up" className="text-[20px]" />
          I Have Inspected &amp; Received Parcel
        </button>
<button className="w-full h-11 bg-surface-container rounded-2xl font-label-md text-label-md text-error hover:bg-error-container/40 active:scale-[0.99] transition-transform flex items-center justify-center gap-1.5" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="report_problem" className="text-[18px]" />
          Report Issue or Refuse Delivery
        </button>
</div>
</div>
</div>


</div></main>
    </div>
  );
};

export default Mobile;
