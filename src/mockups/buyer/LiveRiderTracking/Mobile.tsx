// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/buyer/live_rider_tracking_boda_map_swiftcart_uganda/code.html
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
    <div className="bg-surface font-body-md text-on-surface antialiased flex flex-col min-h-screen relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{width:100vw;margin:0;padding:0;}body{overscroll-behavior:none;}.pb-safe{padding-bottom:env(safe-area-inset-bottom,0px);}.pt-safe{padding-top:env(safe-area-inset-top,0px);}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}

    body {
      min-height: max(884px, 100dvh);
    }
  
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 px-margin flex items-center justify-between"><div className="flex items-center gap-space-sm"><button aria-label="Go Back" className="w-11 h-11 -ml-2 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors" type="button" onClick={() => alertToast('Action triggered')}><Icon name="arrow_back" className="text-[24px]" /></button><div className="flex flex-col"><h1 className="font-label-lg text-label-lg text-on-surface leading-tight">Live Rider Tracking</h1><span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span> Order Ref #ORD-8942</span></div></div><div className="flex items-center gap-space-xs"><button aria-label="Emergency and Support" className="min-w-[44px] min-h-[44px] px-space-xs rounded-full flex items-center justify-center text-error hover:bg-error-container/40 transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}><Icon name="emergency" className="text-[22px]" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header><main className="flex-1 flex flex-col relative w-full pt-16 bg-surface"><div className="flex flex-col w-full pb-safe">

<div className="relative w-full h-[320px] bg-surface-container-high overflow-hidden select-none">

<svg className="w-full h-full object-cover" viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg">

<rect fill="#E8E1DC" height="320" width="400"></rect>

<path d="M-20,40 L420,70 M-20,130 L420,150 M-20,220 L420,240 M-20,290 L420,310" stroke="#DFD9D3" strokeLinecap="round" strokeWidth="4"></path>
<path d="M60,-20 L90,340 M170,-20 L200,340 M280,-20 L310,340 M360,-20 L380,340" stroke="#DFD9D3" strokeLinecap="round" strokeWidth="4"></path>


<path d="M-10,210 C80,190 190,165 310,120 C360,100 410,90 430,85" stroke="#FFFFFF" strokeLinecap="round" strokeWidth="14"></path>
<path d="M-10,210 C80,190 190,165 310,120 C360,100 410,90 430,85" stroke="#F3EDE7" strokeLinecap="round" strokeWidth="10"></path>

<path d="M120,-10 C140,80 180,140 215,200 C240,240 270,330 280,340" stroke="#FFFFFF" strokeLinecap="round" strokeWidth="12"></path>
<path d="M120,-10 C140,80 180,140 215,200 C240,240 270,330 280,340" stroke="#F3EDE7" strokeLinecap="round" strokeWidth="8"></path>

<path d="M70,30 C130,50 160,80 130,130 C100,180 80,150 70,110" fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeWidth="8"></path>

<text fill="#907067" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="700" letter-spacing="1" x="50" y="210">KAMPALA ROAD</text>
<text fill="#907067" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="600" transform="rotate(32, 145, 65)" x="145" y="65">LUMUMBA AVE</text>
<text fill="#907067" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="600" x="320" y="105">JINJA RD</text>
<text fill="#907067" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="600" x="75" y="85">NAKASERO RD</text>

<path d="M80,205 C140,185 190,160 215,140 C235,120 220,90 205,75" fill="none" id="activeRoute" stroke="#DA3700" strokeDasharray="1 1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></path>

<rect fill="#505B90" height="22" opacity="0.15" rx="4" width="28" x="65" y="185"></rect>
<text fill="#505B90" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="700" x="45" y="222">Pioneer Mall</text>

<g transform="translate(78, 198)">
<circle fill="#505B90" r="7"></circle>
<circle fill="#FFFFFF" r="3.5"></circle>
</g>

<g transform="translate(205, 75)">
<ellipse cx="0" cy="18" fill="#000000" opacity="0.15" rx="8" ry="3"></ellipse>
<path d="M0,0 C-7,0 -12,5 -12,12 C-12,19 0,27 0,27 C0,27 12,19 12,12 C12,5 7,0 0,0 Z" fill="#006947"></path>
<circle cx="0" cy="10" fill="#FFFFFF" r="4.5"></circle>
</g>

<g transform="translate(165, 170)">

<circle fill="#DA3700" opacity="0.2" r="18">
<animate attributeName="r" dur="2s" repeatCount="indefinite" values="10;24;10"></animate>
<animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="0.35;0;0.35"></animate>
</circle>
<circle fill="#DA3700" opacity="0.4" r="12"></circle>
<circle fill="#DA3700" r="9"></circle>

<path d="M-4,-2 L0,-6 L4,-2 L1,-2 L1,5 L-1,5 L-1,-2 Z" fill="#FFFFFF" transform="rotate(45)"></path>
</g>
</svg>

<div className="absolute top-3 left-margin right-margin flex items-center justify-between pointer-events-none">
<div className="pointer-events-auto flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-surface-container-lowest shadow-md text-on-surface">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
<span className="font-label-sm text-label-sm text-on-surface">🚦 Low Traffic • Kampala Rd</span>
</div>
<div className="pointer-events-auto flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-md shadow-md text-on-surface-variant font-label-sm text-label-sm">
<Icon name="satellite_alt" className="text-[13px] text-tertiary" />
<span>GPS: 15s ago</span>
</div>
</div>

<div className="absolute right-margin bottom-4 flex flex-col gap-2">
<button aria-label="Re-center Live Rider" className="w-10 h-10 rounded-full bg-surface-container-lowest shadow-md flex items-center justify-center text-on-surface hover:bg-surface-container transition-transform active:scale-95" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="my_location" className="text-[20px] text-primary" />
</button>
<button aria-label="Toggle Traffic Layer" className="w-10 h-10 rounded-full bg-surface-container-lowest shadow-md flex items-center justify-center text-on-surface hover:bg-surface-container transition-transform active:scale-95" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="layers" className="text-[20px] text-secondary" />
</button>
<button aria-label="Compass Orientation" className="w-10 h-10 rounded-full bg-surface-container-lowest shadow-md flex items-center justify-center text-on-surface hover:bg-surface-container transition-transform active:scale-95" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="explore" className="text-[20px] text-primary" />
</button>
</div>

<div className="absolute left-margin bottom-4 pointer-events-none">
<div className="px-2.5 py-1 rounded-lg bg-surface-container-lowest/95 backdrop-blur-md shadow-sm flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold">To: Plot 14, Lumumba Ave</span>
</div>
</div>
</div>

<div className="flex flex-col px-margin gap-space-md -mt-3 relative z-10">

<div className="w-full rounded-xl bg-surface-container-lowest p-space-lg shadow-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">
<Icon name="bolt" className="text-[14px]" />
<span>Swift Express Boda • In Transit</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Arriving ~3:25 PM</span>
</div>
<div className="flex items-baseline justify-between mt-1">
<div>
<span className="font-headline-md text-headline-md text-on-surface tracking-tight">14 mins</span>
<span className="font-body-sm text-body-sm text-on-surface-variant block mt-0.5">Estimated arrival time</span>
</div>
<div className="text-right">
<span className="font-label-lg text-label-lg text-primary block">2.4 km</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">remaining to doorstep</span>
</div>
</div>

<div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden mt-1">
<div className="bg-primary h-full rounded-full w-[68%] transition-all duration-500"></div>
</div>
</div>

<div className="w-full rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-3">
<div className="relative">
<img className="w-13 h-13 rounded-full object-cover bg-surface-container" data-alt="A portrait photo of a smiling Ugandan motorcycle courier wearing an orange safety jacket and helmet in bright Kampala sunlight, warm lighting and friendly expression." src={`${assetBase}/images/b610222f4e353a6f.webp`} />
<span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center text-[12px] shadow-sm">
<Icon name="verified" className="text-[13px]" />
</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1">
<h2 className="font-label-lg text-label-lg text-on-surface truncate">Kizito Brian</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Bajaj Boxer 150 • <span className="font-label-md text-label-md text-on-surface font-bold">UEF 842X</span></p>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="flex items-center text-amber-600 font-label-sm text-label-sm font-bold">
<Icon name="star" className="text-[14px] text-amber-500 mr-0.5" />
                4.9
              </span>
<span className="text-on-surface-variant font-label-sm text-label-sm">• 840+ trips</span>
<span className="text-tertiary font-label-sm text-label-sm font-bold">• 99.2% Safe</span>
</div>
</div>
</div>

<div className="px-2 py-1 rounded bg-amber-50 text-amber-900 font-label-sm text-[10px] uppercase font-bold tracking-wider shrink-0">
          MTN Verified
        </div>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low flex items-start gap-2">
<Icon name="forum" className="text-[16px] text-secondary mt-0.5" />
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Latest message</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">3:12 PM</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate mt-0.5">"I picked up the parcel from Pioneer Mall. Now en route to Lumumba."</p>
</div>
</div>

<div className="grid grid-cols-2 gap-space-sm">
<a className="h-11 rounded-xl bg-surface-container-high hover:bg-surface-container-highest transition-colors flex items-center justify-center gap-2 text-on-surface font-label-lg text-label-lg active:scale-95" href="tel:+256772000123" onClick={() => alertToast('Action triggered')}>
<Icon name="call" className="text-[18px] text-tertiary" />
<span>Call (+256)</span>
</a>
<button className="relative h-11 rounded-xl bg-secondary text-on-secondary hover:opacity-95 transition-all flex items-center justify-center gap-2 font-label-lg text-label-lg active:scale-95 shadow-sm" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="chat" className="text-[18px]" />
<span>Chat in App</span>
<span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-on-primary font-label-sm text-[10px] flex items-center justify-center font-bold">1</span>
</button>
</div>
</div>

<div className="w-full rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col gap-space-md">

<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">
<Icon name="lock" className="text-[14px]" />
<span>Swift Escrow Protected</span>
</div>
<span className="font-label-md text-label-md text-on-surface font-bold">UGX 385,000</span>
</div>

<div className="flex items-center gap-3 py-1">
<img className="w-12 h-12 rounded-lg object-cover bg-surface-container shrink-0" data-alt="A sleek product photograph of SoundCore Space One Active Noise Cancelling Over-Ear Headphones in Midnight Black against a clean soft cream background." src={`${assetBase}/images/a0ea7eef84144aae.webp`} />
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">SoundCore Space One ANC Headphones</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Vendor: SoundCore Official • Pioneer Mall</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container flex flex-col items-center text-center">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Delivery Inspection Handover Code</span>
<div className="my-2.5 px-4 py-2 rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-center gap-2">
<span className="font-headline-md text-headline-md font-bold tracking-widest text-primary">7 4 9</span>
<span className="text-outline text-lg font-bold">•</span>
<span className="font-headline-md text-headline-md font-bold tracking-widest text-primary">2 0 6</span>
</div>

<div className="flex items-start gap-1.5 text-left bg-error-container/40 p-2.5 rounded-lg mt-1">
<Icon name="security_update_warning" className="text-[18px] text-error shrink-0 mt-0.5" />
<p className="font-body-sm text-[11px] text-on-error-container leading-tight">
<span className="font-bold">Security rule:</span> NEVER give this PIN by phone or WhatsApp. Only disclose in person AFTER you unbox and check your item with rider Kizito.
          </p>
</div>
</div>

<button className="w-full h-12 rounded-xl bg-surface-container-high hover:bg-surface-container-highest transition-colors flex items-center justify-center gap-2 font-label-lg text-label-lg text-on-surface active:scale-98" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="qr_code_2" className="text-[20px]" />
<span>Tap to Show QR for Rider Scanner</span>
</button>

<div className="hidden flex-col items-center p-4 rounded-xl bg-surface-container-lowest shadow-md animate-fade-in" id="qrModal">
<div className="p-3 bg-white rounded-lg shadow-sm">

<svg className="w-36 h-36" fill="#1E1B18" viewBox="0 0 100 100">
<rect fill="#1E1B18" height="30" width="30" x="0" y="0"></rect>
<rect fill="#FFFFFF" height="20" width="20" x="5" y="5"></rect>
<rect fill="#1E1B18" height="12" width="12" x="9" y="9"></rect>
<rect fill="#1E1B18" height="30" width="30" x="70" y="0"></rect>
<rect fill="#FFFFFF" height="20" width="20" x="75" y="5"></rect>
<rect fill="#1E1B18" height="12" width="12" x="79" y="9"></rect>
<rect fill="#1E1B18" height="30" width="30" x="0" y="70"></rect>
<rect fill="#FFFFFF" height="20" width="20" x="5" y="75"></rect>
<rect fill="#1E1B18" height="12" width="12" x="9" y="79"></rect>
<rect height="20" width="8" x="35" y="10"></rect>
<rect height="8" width="14" x="48" y="5"></rect>
<rect height="8" width="28" x="35" y="38"></rect>
<rect height="15" width="22" x="70" y="40"></rect>
<rect height="20" width="12" x="40" y="52"></rect>
<rect height="18" width="12" x="15" y="42"></rect>
<rect height="25" width="30" x="60" y="65"></rect>
<rect height="10" width="15" x="35" y="80"></rect>
</svg>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-2">Scan code to release escrow on parcel approval</span>
</div>
</div>

<div className="w-full rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<h3 className="font-label-lg text-label-lg text-on-surface">Delivery Journey</h3>
<span className="font-label-sm text-label-sm text-primary font-bold">Step 3 of 4</span>
</div>
<div className="flex flex-col gap-0 relative">

<div className="absolute left-3 top-3 bottom-3 w-0.5 bg-surface-container-highest"></div>

<div className="flex items-start gap-3 relative py-2">
<div className="w-6 h-6 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shrink-0 z-10">
<Icon name="check" className="text-[14px]" />
</div>
<div className="flex-1 flex items-baseline justify-between">
<div>
<p className="font-label-md text-label-md text-on-surface">Order Confirmed &amp; Escrow Funded</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Merchant received UGX 385,000 hold</p>
</div>
<span className="font-body-sm text-[11px] text-on-surface-variant shrink-0">2:40 PM</span>
</div>
</div>

<div className="flex items-start gap-3 relative py-2">
<div className="w-6 h-6 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shrink-0 z-10">
<Icon name="check" className="text-[14px]" />
</div>
<div className="flex-1 flex items-baseline justify-between">
<div>
<p className="font-label-md text-label-md text-on-surface">Vendor Packaged &amp; Tamper-Sealed</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">SoundCore Stall G-14, Pioneer Mall</p>
</div>
<span className="font-body-sm text-[11px] text-on-surface-variant shrink-0">3:05 PM</span>
</div>
</div>

<div className="flex items-start gap-3 relative py-2">
<div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 z-10 shadow-sm animate-pulse">
<Icon name="two_wheeler" className="text-[14px]" />
</div>
<div className="flex-1 flex items-baseline justify-between">
<div>
<p className="font-label-md text-label-md text-primary font-bold">Rider Picked Up &amp; On Route</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Cruising along Kampala Rd towards Lumumba</p>
</div>
<span className="font-label-sm text-label-sm text-primary font-bold shrink-0">3:12 PM</span>
</div>
</div>

<div className="flex items-start gap-3 relative py-2 opacity-65">
<div className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center shrink-0 z-10">
<Icon name="package_2" className="text-[14px]" />
</div>
<div className="flex-1 flex items-baseline justify-between">
<div>
<p className="font-label-md text-label-md text-on-surface">Unbox, Inspect &amp; Handover Code</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Plot 14, Lumumba Ave, Nakasero</p>
</div>
<span className="font-body-sm text-[11px] text-on-surface-variant shrink-0">~3:25 PM</span>
</div>
</div>
</div>
</div>

<div className="w-full flex flex-col gap-space-sm mb-4">
<div className="flex items-center gap-space-sm">

<button className="flex-1 h-12 rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-center gap-2 font-label-md text-label-md text-on-surface hover:bg-surface-container transition-colors active:scale-95" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="share" className="text-[18px] text-secondary" />
<span>Share Live Route</span>
</button>

<button className="flex-1 h-12 rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-center gap-2 font-label-md text-label-md text-error hover:bg-error-container/30 transition-colors active:scale-95" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}>
<Icon name="support_agent" className="text-[18px]" />
<span>Report Rider Issue</span>
</button>
</div>

<p className="text-center font-body-sm text-[11px] text-on-surface-variant">
        Protected by Kampala SwiftCart Guarantee • Instant Escrow Refund if parcel is unsealed or incorrect.
      </p>
</div>
</div>
</div></main>
    </div>
  );
};

export default Mobile;
