// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/buyer/phone_verification_buyer_auth_swiftcart/code.html
import React, { useState } from 'react';
import Icon from '../../../../components/shared/Icon';

export interface ScreenProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Screen: React.FC<ScreenProps> = (props) => {
  const onNavigate = props.onNavigate;
  const assetBase = import.meta.env.VITE_ASSET_BASE ?? '';
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased flex flex-col min-h-screen selection:bg-primary-container selection:text-on-primary-container relative w-full overflow-x-hidden">
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
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 px-gutter flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-xs"><button aria-label="Go back" className="min-w-[44px] min-h-[44px] flex items-center justify-center text-on-surface hover:text-primary transition-colors" onClick={() => alertToast('Action triggered')}><Icon name="arrow_back_ios_new" className="text-[24px]" /></button><img alt="swiftcart-logo-final.png" className="h-7 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><h1 className="font-headline-sm text-headline-sm text-on-surface truncate">Buyer Auth</h1></div><div className="flex items-center gap-space-xs"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header><main className="flex-1 flex flex-col relative w-full pt-16 bg-surface pb-safe"><div className="flex flex-col w-full px-gutter pb-space-xl">

<div className="relative pt-space-md pb-space-sm flex flex-col items-center text-center">

<div className="absolute -top-6 w-48 h-48 bg-primary-fixed/50 rounded-full blur-3xl pointer-events-none -z-10"></div>

<div className="relative w-16 h-16 rounded-2xl bg-surface-container-lowest shadow-md flex items-center justify-center mb-space-sm group">
<div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary to-primary-container flex items-center justify-center text-on-primary shadow-sm transform transition-transform active:scale-95">
<svg className="w-7 h-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" viewBox="0 0 24 24">

<path d="M2 3h3l2.4 11.2a2 2 0 0 0 2 1.8h8.8a2 2 0 0 0 2-1.6L22 7H7"></path>
<circle cx="9" cy="20" fill="currentColor" r="1.5"></circle>
<circle cx="18" cy="20" fill="currentColor" r="1.5"></circle>

<path d="M11 7c2-3 5.5-2.5 7-1-1 3-3.5 5-7 5.5" strokeWidth="2"></path>
<path d="M14 4.5l3-2" strokeWidth="1.8"></path>
</svg>
</div>

<span className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded-full bg-tertiary text-on-tertiary font-label-sm text-label-sm shadow-sm flex items-center gap-0.5">
<Icon name="bolt" className="text-[10px]" /> UG
      </span>
</div>
<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-tight">Welcome to SwiftCart</h2>
<p className="font-body-md text-body-md text-secondary mt-space-xs max-w-xs leading-snug">
      Uganda's trusted multi-vendor marketplace with escrow protection
    </p>
</div>

<div className="mt-space-sm p-1 rounded-xl bg-surface-container flex items-center shadow-inner relative">
<button className="flex-1 py-2 text-center rounded-lg font-label-lg text-label-lg text-secondary transition-all duration-200" id="tab-signin" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/sign-in'); }}>
      Sign In
    </button>
<button className="flex-1 py-2 text-center rounded-lg font-label-lg text-label-lg bg-surface-container-lowest text-primary-container shadow-sm font-bold transition-all duration-200" id="tab-register" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/register'); }}>
      Register
    </button>
</div>

<div className="mt-space-md flex flex-col gap-space-md bg-surface-container-lowest p-space-md rounded-xl shadow-sm">

<div className="flex items-center justify-between pb-1">
<div className="flex items-center gap-1.5">
<Icon name="verified_user" className="text-tertiary text-[18px]" />
<span className="font-label-md text-label-md text-tertiary uppercase tracking-wider">Buyer Security Tier 1</span>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-bold">
        UGX Enabled
      </span>
</div>

<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface-variant flex items-center justify-between">
<span>Full Legal Name</span>
<span className="font-body-sm text-body-sm text-secondary">For Delivery KYC</span>
</label>
<div className="relative flex items-center">
<Icon name="badge" className="absolute left-3.5 text-secondary text-[20px]" />
<input className="w-full pl-11 pr-4 py-3 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:shadow-md transition-all outline-none" placeholder="Enter full name" type="text" value="Dennis Mukasa" />
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface-variant">Email Address</label>
<div className="relative flex items-center">
<Icon name="alternate_email" className="absolute left-3.5 text-secondary text-[20px]" />
<input className="w-full pl-11 pr-4 py-3 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:shadow-md transition-all outline-none" placeholder="e.g. yourname@mail.com" type="email" value="dennis.m@example.com" />
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface-variant flex items-center justify-between">
<span>MTN / Airtel Mobile Number</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold flex items-center gap-0.5">
<Icon name="payments" className="text-[13px]" /> Free Escrow SMS
        </span>
</label>
<div className="flex items-center gap-2">

<div className="flex items-center gap-1.5 px-3 py-3 rounded-lg bg-surface-container-low shrink-0 select-none">

<div className="w-5 h-3.5 rounded-sm overflow-hidden flex flex-col shadow-xs">
<div className="h-1/3 bg-black"></div>
<div className="h-1/3 bg-amber-400"></div>
<div className="h-1/3 bg-red-600"></div>
</div>
<span className="font-label-lg text-label-lg text-on-surface font-bold">+256</span>
<Icon name="expand_more" className="text-secondary text-[16px]" />
</div>

<div className="relative flex-1">
<input className="w-full px-3.5 py-3 rounded-lg bg-surface-container-low text-on-surface font-price-display text-headline-sm focus:bg-surface-container-lowest focus:shadow-md transition-all outline-none" placeholder="772 458 819" type="tel" value="772 458 819" />
</div>
</div>
<p className="font-body-sm text-body-sm text-secondary flex items-center gap-1 mt-0.5">
<Icon name="info" className="text-[14px] text-primary" />
        We will send a 6-digit verification code via SMS
      </p>
</div>

<div className="mt-space-xs p-space-md rounded-xl bg-surface-container-low/70 flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<Icon name="sms" className="text-primary text-[18px]" />
<span className="font-label-md text-label-md text-on-surface font-bold">SMS Verification Code</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-semibold px-2 py-0.5 rounded bg-tertiary-fixed/30">
          Sent
        </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
        Enter 6-digit SMS code sent to <span className="font-label-md text-label-md text-on-surface font-bold">+256 772 ••• 819</span>
</p>

<div className="grid grid-cols-6 gap-2 my-1">

<div className="h-12 rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-center font-price-display text-headline-md text-on-surface">
          5
        </div>

<div className="h-12 rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-center font-price-display text-headline-md text-on-surface">
          8
        </div>

<div className="h-12 rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-center font-price-display text-headline-md text-on-surface">
          2
        </div>

<div className="h-12 rounded-lg bg-surface-container-lowest shadow-md flex items-center justify-center relative bg-gradient-to-b from-primary-fixed/20 to-transparent">
<div className="w-0.5 h-6 bg-primary-container animate-pulse rounded-full"></div>
</div>

<div className="h-12 rounded-lg bg-surface-container-lowest/60 flex items-center justify-center font-price-display text-headline-md text-secondary">
<span className="w-2 h-2 rounded-full bg-surface-container-highest"></span>
</div>

<div className="h-12 rounded-lg bg-surface-container-lowest/60 flex items-center justify-center font-price-display text-headline-md text-secondary">
<span className="w-2 h-2 rounded-full bg-surface-container-highest"></span>
</div>
</div>

<div className="flex items-center justify-between pt-1">
<div className="flex items-center gap-1 font-label-md text-label-md text-secondary">
<Icon name="schedule" className="text-[16px] animate-spin text-primary" />
<span>Resend Code in (<span className="font-bold text-on-surface" id="countdown">0:45</span>)</span>
</div>
<button className="font-label-md text-label-md text-primary font-bold hover:underline transition-all" type="button" onClick={() => alertToast('Action triggered')}>
          Change Phone Number
        </button>
</div>
</div>

<button className="w-full mt-space-xs py-3.5 px-4 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg shadow-md hover:shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer" id="verify-button" type="button" onClick={() => alertToast('Action triggered')}>
<span className="font-bold tracking-wide">Verify &amp; Continue</span>
<Icon name="arrow_forward" className="text-[20px] group-hover:translate-x-0.5 transition-transform" />
</button>
</div>

<div className="mt-space-md flex flex-col gap-space-sm items-center">

<div className="relative w-full flex items-center justify-center my-1">
<div className="w-full h-px bg-surface-container-highest"></div>
<span className="absolute px-3 bg-surface text-secondary font-label-sm text-label-sm uppercase tracking-wider">
        or continue with
      </span>
</div>

<button className="w-full py-3 px-4 rounded-xl bg-surface-container-lowest hover:bg-surface-container-low shadow-sm active:scale-[0.99] transition-all flex items-center justify-center gap-3 cursor-pointer" type="button" onClick={() => alertToast('Action triggered')}>

<svg className="w-5 h-5" viewBox="0 0 24 24">
<path d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.15z" fill="#4285F4"></path>
<path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.76-2.1-6.7-4.94H1.31v3.15C3.33 21.36 7.38 24 12 24z" fill="#34A853"></path>
<path d="M5.3 14.26c-.24-.72-.38-1.49-.38-2.26s.14-1.54.38-2.26V6.59H1.31C.48 8.24 0 10.07 0 12s.48 3.76 1.31 5.41l3.99-3.15z" fill="#FBBC05"></path>
<path d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.38 0 3.33 2.64 1.31 6.59l3.99 3.15c.94-2.84 3.58-4.99 6.7-4.99z" fill="#EA4335"></path>
</svg>
<span className="font-label-lg text-label-lg text-on-surface">Continue with Google</span>
</button>

<button className="py-2 px-4 rounded-lg text-secondary hover:text-on-surface font-label-md text-label-md transition-colors flex items-center gap-1.5" type="button" onClick={() => alertToast('Action triggered')}>
<span>Browse Marketplace as Guest</span>
<Icon name="storefront" className="text-[16px]" />
</button>
</div>

<div className="mt-space-md p-3.5 rounded-xl bg-gradient-to-r from-surface-container-low via-surface-container to-surface-container-low shadow-sm flex items-start gap-3">
<div className="w-9 h-9 rounded-lg bg-tertiary-fixed flex items-center justify-center shrink-0 text-on-tertiary-fixed shadow-xs">
<Icon name="shield_with_heart" className="text-[20px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface font-bold">100% Escrow Protected</span>
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
<span className="font-label-sm text-label-sm text-tertiary font-semibold">Bank &amp; Telco Level</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-snug">
        Payments held safely in SwiftCart escrow until you inspect and confirm receipt of your delivery in Kampala or upcountry.
      </p>
</div>
</div>

<p className="mt-space-md text-center font-body-sm text-body-sm text-secondary leading-relaxed px-space-sm">
    By signing in, you agree to SwiftCart's 
    <a className="text-primary font-label-md hover:underline" href="#" onClick={() => alertToast('Action triggered')}>Terms of Service</a> 
    and 
    <a className="text-primary font-label-md hover:underline" href="#" onClick={() => alertToast('Action triggered')}>Privacy Policy</a>.
  </p>
</div>
</main>
    </div>
  );
};

export default Screen;
