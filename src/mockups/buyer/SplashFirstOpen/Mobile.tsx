// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/buyer/splash_first_open_swiftcart_uganda/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';

export interface MobileProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Mobile: React.FC<MobileProps> = (props) => {
  const onNavigate = props.onNavigate;
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased pt-safe pb-safe min-h-screen flex flex-col relative w-full overflow-x-hidden">
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
      <main className="flex flex-col relative w-full flex-1 bg-surface"><div className="flex flex-col w-full pb-8 px-4 overflow-hidden">

<div className="flex flex-col items-center justify-center pt-8 pb-6 relative text-center">

<div className="absolute -top-10 w-64 h-64 bg-primary-fixed opacity-40 rounded-full blur-3xl pointer-events-none"></div>

<div className="relative z-10 w-24 h-24 mb-4 flex items-center justify-center shadow-lg rounded-full bg-surface-container-lowest">
<svg className="w-16 h-16" fill="none" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">

<path d="M18 26H24L31 52H57L63 32H28" stroke="#AE2A00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.5"></path>

<circle cx="33" cy="61" fill="#DA3700" r="5"></circle>
<circle cx="55" cy="61" fill="#DA3700" r="5"></circle>
<circle cx="33" cy="61" fill="#FFFFFF" r="2"></circle>
<circle cx="55" cy="61" fill="#FFFFFF" r="2"></circle>

<path d="M38 32C42 22 52 14 66 12C63 20 57 26 50 28C57 28 64 26 69 22C66 31 58 37 46 38L38 32Z" fill="url(#swiftOrangeGrad)"></path>
<path d="M47 21C49 16 55 11 63 9C60 14 56 18 51 20L47 21Z" fill="#FF8A1F"></path>

<path d="M30 18L37 24" stroke="#DA3700" strokeLinecap="round" strokeWidth="3"></path>
<path d="M22 22L29 27" stroke="#FF8A1F" strokeLinecap="round" strokeWidth="2.5"></path>
<defs>
<linearGradient gradientUnits="userSpaceOnUse" id="swiftOrangeGrad" x1="38" x2="69" y1="12" y2="38">
<stop stopColor="#FF8A1F"></stop>
<stop offset="1" stopColor="#DA3700"></stop>
</linearGradient>
</defs>
</svg>
</div>

<div className="relative z-10 flex flex-col items-center">
<div className="flex items-center space-x-1">
<h1 className="font-headline-lg text-headline-lg tracking-tight text-on-surface">Swift<span className="text-primary-container">Cart</span></h1>

</div>
<p className="font-label-md text-label-md text-on-surface-variant mt-1.5 flex items-center gap-1"><span className="">Your Most Trusted Marketplace</span><Icon name="verified" className="text-[15px] text-tertiary" /></p>
</div>
</div>

<div className="w-full bg-surface-container-lowest rounded-xl p-4 shadow-md flex flex-col gap-4 relative z-10">
<div className="flex items-center justify-between">
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Welcome! Owanika?</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Tailoring verified stores &amp; fast dispatch near you</p>
</div>
<span className="p-2 rounded-full bg-surface-container text-primary-container">
<Icon name="storefront" className="text-[20px]" />
</span>
</div>

<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface-variant flex items-center justify-between">
<span className="">Delivery District</span>
<span className="font-label-sm text-label-sm text-tertiary flex items-center gap-0.5">
<Icon name="bolt" className="text-[13px]" /> Live Dispatch Hubs
        </span>
</label>

<div className="bg-surface-container-low hover:bg-surface-container rounded-lg p-3 cursor-pointer transition-colors shadow-sm flex items-center justify-between" id="districtTrigger">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-primary-container shadow-xs">
<Icon name="location_on" className="text-[18px]" />
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Delivering to</span>
<span className="font-label-lg text-label-lg text-on-surface" id="selectedDistrictDisplay">Kampala Central</span>
</div>
</div>
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="font-label-sm text-label-sm px-1.5 py-0.5 bg-surface-container-high rounded text-on-surface">Change</span>
<Icon name="expand_more" className="text-[18px] transition-transform duration-200" />
</div>
</div>

<div className="hidden flex-col gap-1 bg-surface-container-lowest p-2 rounded-lg shadow-lg mt-1 max-h-44 overflow-y-auto" id="districtList">
<button className="district-option w-full text-left px-3 py-2 rounded font-body-md text-body-md flex items-center justify-between bg-primary-fixed/40 text-on-primary-fixed" type="button" onClick={() => alertToast('Action triggered')}>
<span className="">Kampala Central</span>
<Icon name="check_circle" className="text-[18px] text-primary-container" />
</button>
<button className="district-option w-full text-left px-3 py-2 rounded font-body-md text-body-md flex items-center justify-between hover:bg-surface-container text-on-surface" type="button" onClick={() => alertToast('Action triggered')}>
<span className="">Nakawa Division</span>
<Icon name="check_circle" className="text-[18px] hidden text-primary-container" />
</button>
<button className="district-option w-full text-left px-3 py-2 rounded font-body-md text-body-md flex items-center justify-between hover:bg-surface-container text-on-surface" type="button" onClick={() => alertToast('Action triggered')}>
<span className="">Wakiso / Kira</span>
<Icon name="check_circle" className="text-[18px] hidden text-primary-container" />
</button>
<button className="district-option w-full text-left px-3 py-2 rounded font-body-md text-body-md flex items-center justify-between hover:bg-surface-container text-on-surface" type="button" onClick={() => alertToast('Action triggered')}>
<span className="">Entebbe Municipality</span>
<Icon name="check_circle" className="text-[18px] hidden text-primary-container" />
</button>
<button className="district-option w-full text-left px-3 py-2 rounded font-body-md text-body-md flex items-center justify-between hover:bg-surface-container text-on-surface" type="button" onClick={() => alertToast('Action triggered')}>
<span className="">Jinja City</span>
<Icon name="check_circle" className="text-[18px] hidden text-primary-container" />
</button>
<button className="district-option w-full text-left px-3 py-2 rounded font-body-md text-body-md flex items-center justify-between hover:bg-surface-container text-on-surface" type="button" onClick={() => alertToast('Action triggered')}>
<span className="">Mbarara City</span>
<Icon name="check_circle" className="text-[18px] hidden text-primary-container" />
</button>
<button className="district-option w-full text-left px-3 py-2 rounded font-body-md text-body-md flex items-center justify-between hover:bg-surface-container text-on-surface" type="button" onClick={() => alertToast('Action triggered')}>
<span className="">Gulu City</span>
<Icon name="check_circle" className="text-[18px] hidden text-primary-container" />
</button>
</div>
</div>



<div className="flex flex-col gap-2 pt-1">
<div className="flex items-center gap-2.5 p-2 rounded-lg bg-surface-container-low/70">
<div className="w-7 h-7 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary shrink-0 shadow-xs">
<Icon name="verified_user" className="text-[16px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">Swift Escrow Protected</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">MoMo &amp; Cash held safely until item inspection</span>
</div>
</div>
<div className="flex items-center gap-2.5 p-2 rounded-lg bg-surface-container-low/70">
<div className="w-7 h-7 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container shrink-0 shadow-xs">
<Icon name="electric_bolt" className="text-[16px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">Swift Express 24hr Delivery</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Boda express dispatch across Kampala &amp; Wakiso</span>
</div>
</div>
<div className="flex items-center gap-2.5 p-2 rounded-lg bg-surface-container-low/70">
<div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center text-on-secondary shrink-0 shadow-xs">
<Icon name="contactless" className="text-[16px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">Seamless Mobile Money</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Direct zero-fee prompt on MTN MoMo &amp; Airtel Money</span>
</div>
</div>
</div>
</div>

<div className="w-full flex flex-col items-center gap-3 pt-6 relative z-10">

<div className="flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full shadow-xs">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
<span className="font-label-sm text-label-sm text-on-surface">Browse as Guest is Active</span>
<span className="text-on-surface-variant font-label-sm text-label-sm">• No setup required</span>
</div>

<button className="w-full h-[52px] rounded-xl font-label-lg text-label-lg text-on-primary shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-[0.98]" style={{"background":"linear-gradient(135deg, #FF8A1F, #DA3700)","boxShadow":"0px 4px 14px rgba(218, 55, 0, 0.35)"}} type="button" onClick={() => alertToast('Action triggered')}>
<span id="ctaText" className="">Continue to Marketplace</span>
<Icon name="arrow_forward" className="text-[20px]" />
</button>

<div className="flex items-center justify-center gap-1.5 pt-1">
<span className="font-body-md text-body-md text-on-surface-variant">Already have an account?</span>
<button className="font-label-md text-label-md text-primary font-bold hover:underline" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/sign-in'); }}>
        Sign In
      </button>
</div>
</div>
</div>
</main>
    </div>
  );
};

export default Mobile;
