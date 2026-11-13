// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/buyer/sign_in_register_swiftcart_tablet/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';

export interface TabletProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Tablet: React.FC<TabletProps> = (props) => {
  const onNavigate = props.onNavigate;
  const assetBase = import.meta.env.VITE_ASSET_BASE ?? '';
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-background font-body-md text-body-md text-on-surface antialiased min-h-screen relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <main className="w-full min-h-screen bg-background flex flex-col items-center justify-center p-margin"><div className="flex flex-col w-full max-w-[834px] mx-auto min-h-[1050px] shadow-2xl rounded-xl overflow-hidden bg-surface-container-lowest my-auto">
<div className="grid grid-cols-1 md:grid-cols-12 w-full min-h-[1050px]">

<div className="md:col-span-5 relative flex flex-col justify-between p-8 bg-gradient-to-br from-[#DA3700] via-primary-container to-primary text-on-primary overflow-hidden">

<div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
<div className="absolute -left-20 bottom-24 w-72 h-72 rounded-full bg-black/10 blur-3xl pointer-events-none"></div>

<div className="relative z-10 flex flex-col items-start gap-6">
<div className="flex items-center gap-3 bg-surface-container-lowest/15 backdrop-blur-md px-3.5 py-2 rounded-lg shadow-sm">
<img alt="SwiftCart Logo" className="h-10 w-auto object-contain filter drop-shadow-sm brightness-110" src={`${assetBase}/images/82d25e0c4713d6b2.webp`} />
</div>
<div className="space-y-2 mt-4">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-lowest/20 backdrop-blur-sm text-on-primary text-label-sm font-label-sm uppercase tracking-wider">
<Icon name="shield" className="text-sm" />
            Kampala Protected Escrow
          </div>
<h2 className="font-headline-lg text-headline-lg text-on-primary tracking-tight leading-tight">
            Buy Safely with SwiftCart Escrow.
          </h2>
<p className="font-body-md text-body-md text-on-primary/90">
            Uganda's fastest consumer marketplace with 100% money-back guarantee.
          </p>
</div>

<div className="space-y-4 mt-6 w-full">
<div className="flex items-start gap-3 bg-surface-container-lowest/10 backdrop-blur-sm p-3.5 rounded-lg shadow-sm">
<div className="w-8 h-8 rounded-full bg-surface-container-lowest/20 flex items-center justify-center shrink-0 mt-0.5">
<Icon name="lock" className="text-base text-on-primary" />
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-primary">Secure MoMo Vault</span>
<span className="font-body-sm text-body-sm text-on-primary/85 leading-snug">Funds held safely in escrow until you inspect delivery.</span>
</div>
</div>
<div className="flex items-start gap-3 bg-surface-container-lowest/10 backdrop-blur-sm p-3.5 rounded-lg shadow-sm">
<div className="w-8 h-8 rounded-full bg-surface-container-lowest/20 flex items-center justify-center shrink-0 mt-0.5">
<Icon name="two_wheeler" className="text-base text-on-primary" />
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-primary">Live Boda Tracking</span>
<span className="font-body-sm text-body-sm text-on-primary/85 leading-snug">Sub-30 minute live GPS dispatch across Kampala &amp; Entebbe.</span>
</div>
</div>
<div className="flex items-start gap-3 bg-surface-container-lowest/10 backdrop-blur-sm p-3.5 rounded-lg shadow-sm">
<div className="w-8 h-8 rounded-full bg-surface-container-lowest/20 flex items-center justify-center shrink-0 mt-0.5">
<Icon name="replay" className="text-base text-on-primary" />
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-primary">48h Instant Refund</span>
<span className="font-body-sm text-body-sm text-on-primary/85 leading-snug">Item mismatch? Immediate wallet reversal, no delays.</span>
</div>
</div>
</div>
</div>

<div className="relative z-10 mt-8 pt-4">
<div className="p-4 rounded-xl bg-surface-container-lowest/15 backdrop-blur-md shadow-md text-on-primary space-y-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1 text-amber-300">
<Icon name="star" className="text-base" />
<Icon name="star" className="text-base" />
<Icon name="star" className="text-base" />
<Icon name="star" className="text-base" />
<Icon name="star" className="text-base" />
</div>
<span className="font-label-sm text-label-sm bg-surface-container-lowest/30 px-2 py-0.5 rounded text-on-primary">Verified Buyer</span>
</div>
<p className="font-body-sm text-body-sm italic text-on-primary/95 leading-snug">
            "Ordered an iPhone from downtown Kampala. Inspected the seal at Acacia Mall before releasing funds from MoMo. SwiftCart is unmatched."
          </p>
<div className="flex items-center gap-2 pt-1">
<div className="w-6 h-6 rounded-full bg-surface-container-lowest text-primary font-bold text-xs flex items-center justify-center font-label-sm">
              DK
            </div>
<span className="font-label-sm text-label-sm font-semibold">David K. • Kololo</span>
</div>
</div>
</div>
</div>

<div className="md:col-span-7 flex flex-col justify-between p-8 md:p-10 bg-surface-container-lowest text-on-surface">
<div>

<div className="flex items-center justify-between border-none pb-4">
<div className="inline-flex p-1 bg-surface-container rounded-lg">
<button className="px-5 py-2 rounded-md font-label-lg text-label-lg bg-surface-container-lowest text-on-surface shadow-sm font-bold transition-all" id="tab-signin" onClick={(e) => { e.preventDefault(); onNavigate?.('/sign-in'); }}>
              Sign In
            </button>
<button className="px-5 py-2 rounded-md font-label-lg text-label-lg text-secondary hover:text-on-surface transition-all" id="tab-signup" onClick={(e) => { e.preventDefault(); onNavigate?.('/register'); }}>
              Create Account
            </button>
</div>
<a className="text-primary hover:text-on-primary-container font-label-sm text-label-sm flex items-center gap-1 group" href="javascript:void(0)" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}>
<span>Help Center</span>
<Icon name="help_outline" className="text-sm group-hover:translate-x-0.5 transition-transform" />
</a>
</div>

<div className="mt-4 mb-6">
<h1 className="font-headline-md text-headline-md text-on-surface font-extrabold tracking-tight">
            Welcome to SwiftCart
          </h1>
<p className="font-body-md text-body-md text-secondary mt-1">
            Sign in with your Ugandan phone number or verified credentials.
          </p>
</div>

<form className="space-y-4" onSubmit={(e) => e.preventDefault()}>

<div>
<label className="block font-label-md text-label-md text-on-surface font-semibold mb-1.5">
              Ugandan Mobile Number
            </label>
<div className="flex items-stretch rounded-lg bg-surface-container-low shadow-sm focus-within:ring-2 focus-within:ring-primary-container overflow-hidden">

<div className="flex items-center gap-1.5 px-3 bg-surface-container text-on-surface font-label-md text-label-md shrink-0">
<span className="text-base select-none">🇺🇬</span>
<span className="font-bold">+256</span>
<Icon name="arrow_drop_down" className="text-sm text-secondary" />
</div>

<input className="w-full h-[48px] px-3.5 bg-transparent font-body-md text-body-md text-on-surface placeholder:text-secondary/60 focus:outline-none" placeholder="772 123 456 / 701 ..." required={true} type="tel" />
</div>
<div className="flex justify-between items-center mt-1 px-1">
<span className="font-body-sm text-body-sm text-secondary">Supports MTN MoMo &amp; Airtel Money</span>
<button className="font-label-sm text-label-sm text-primary hover:underline" id="toggle-method" type="button" onClick={() => alertToast('Action triggered')}>Use email instead</button>
</div>
</div>

<div className="space-y-1.5">
<div className="flex items-center justify-between">
<label className="font-label-md text-label-md text-on-surface font-semibold">
                Security Verification
              </label>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-secondary" id="auth-mode-label">SMS OTP</span>
<button className="w-8 h-4 rounded-full bg-primary-container p-0.5 flex items-center justify-end transition-colors cursor-pointer" id="mode-toggle-btn" type="button" onClick={() => alertToast('Action triggered')}>
<div className="w-3 h-3 bg-surface-container-lowest rounded-full shadow-sm"></div>
</button>
</div>
</div>

<div className="relative flex items-center rounded-lg bg-surface-container-low shadow-sm focus-within:ring-2 focus-within:ring-primary-container overflow-hidden">
<input className="w-full h-[48px] px-3.5 bg-transparent font-body-md text-body-md text-on-surface placeholder:text-secondary/60 focus:outline-none pr-10" id="password-field" placeholder="Enter account PIN or password" type="password" />
<button className="absolute right-3 text-secondary hover:text-on-surface flex items-center" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="visibility" className="text-lg" />
</button>
</div>
</div>

<div className="flex items-center justify-between pt-1">
<label className="flex items-center gap-2 cursor-pointer select-none">
<input checked={true} className="w-4 h-4 rounded accent-primary-container focus:ring-0 cursor-pointer" type="checkbox" />
<span className="font-body-sm text-body-sm text-secondary">Remember on this tablet</span>
</label>
<a className="font-label-md text-label-md text-primary font-semibold hover:underline" href="javascript:void(0)" onClick={() => alertToast('Action triggered')}>
              Forgot PIN?
            </a>
</div>

<button className="w-full h-[50px] mt-2 rounded-lg bg-primary-container hover:bg-primary active:scale-[0.99] text-on-primary font-headline-sm text-headline-sm flex items-center justify-center gap-2 shadow-md transition-all font-bold tracking-tight" type="submit" onClick={(e) => { e.preventDefault(); onNavigate?.('/sign-in'); }}>
<span>Sign In &amp; Verify</span>
<Icon name="arrow_forward" className="text-xl" />
</button>
</form>

<div className="relative my-6 text-center">
<div className="absolute inset-0 flex items-center">
<div className="w-full h-[1px] bg-surface-container-high"></div>
</div>
<span className="relative px-3 bg-surface-container-lowest font-label-sm text-label-sm uppercase tracking-wider text-secondary">
            Or quick connect with
          </span>
</div>

<div className="grid grid-cols-2 gap-3">

<button className="flex items-center justify-center gap-2.5 h-[48px] px-3 rounded-lg bg-amber-400 hover:bg-amber-500 active:scale-[0.99] text-slate-900 font-label-md text-label-md font-bold shadow-sm transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<span className="w-6 h-6 rounded-full bg-slate-900 text-amber-400 font-extrabold flex items-center justify-center text-[10px] leading-none shrink-0">
              MoMo
            </span>
<span className="truncate">MTN MoMo ID</span>
</button>

<button className="flex items-center justify-center gap-2.5 h-[48px] px-3 rounded-lg bg-surface-container-low hover:bg-surface-container active:scale-[0.99] text-on-surface font-label-md text-label-md font-semibold shadow-sm transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
<path d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z" fill="#4285F4"></path>
<path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z" fill="#34A853"></path>
<path d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z" fill="#FBBC05"></path>
<path d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" fill="#EA4335"></path>
</svg>
<span className="truncate">Google</span>
</button>
</div>
</div>

<div className="mt-8 pt-4 border-none space-y-3">
<div className="text-center">
<a className="inline-flex items-center gap-1 text-primary hover:text-on-primary-container font-label-md text-label-md font-bold py-1" href="javascript:void(0)" onClick={() => alertToast('Action triggered')}>
<span>Skip and continue as Guest</span>
<Icon name="east" className="text-sm" />
</a>
</div>
<div className="p-3 bg-surface-container rounded-lg text-center">
<p className="font-body-sm text-body-sm text-secondary leading-relaxed text-[11px]">
            By continuing, you agree to SwiftCart's <a className="underline text-on-surface" href="javascript:void(0)" onClick={() => alertToast('Action triggered')}>Terms of Service</a> &amp; <a className="underline text-on-surface" href="javascript:void(0)" onClick={() => alertToast('Action triggered')}>Escrow Protection Policy</a>. All transactions are securely cleared via Bank of Uganda compliant payment rails.
          </p>
</div>
</div>
</div>
</div>
</div>
</main>
    </div>
  );
};

export default Tablet;
