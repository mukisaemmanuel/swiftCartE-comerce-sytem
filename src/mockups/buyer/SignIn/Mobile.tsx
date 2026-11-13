// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/buyer/sign_in_swiftcart_buyer/code.html
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
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{width:100vw;margin:0;padding:0;}body{overscroll-behavior:none;}.pb-safe{padding-bottom:env(safe-area-inset-bottom,0px);}.pt-safe{padding-top:env(safe-area-inset-top,0px);}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 px-margin flex items-center justify-between"><div className="flex items-center gap-space-sm min-w-0"><button aria-label="Go back" className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container-high transition-colors -ml-space-xs" onClick={() => alertToast('Action triggered')}><Icon name="arrow_back" className="text-[24px]" /></button><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain shrink-0" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><div className="flex flex-col min-w-0 ml-space-xs"><span className="font-label-sm text-label-sm text-secondary tracking-wider uppercase truncate">SwiftCart Uganda</span><h1 className="font-headline-sm text-headline-sm text-on-surface truncate">Buyer Sign In</h1></div></div><div className="flex items-center gap-space-xs"><button aria-label="Page options" className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors" onClick={() => alertToast('Action triggered')}><Icon name="more_vert" className="text-[22px]" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header><main className="flex flex-col relative w-full pt-16 bg-surface min-h-screen"><div className="flex flex-col w-full px-margin pb-10">

<div className="flex flex-col items-center text-center pt-space-md pb-space-lg">
<div className="w-20 h-16 relative flex items-center justify-center mb-space-sm">
<img alt="SwiftCart Uganda" className="w-full h-full object-contain drop-shadow-sm" src={`${assetBase}/images/374a76e7fe80995a.webp`} />
</div>
<div className="inline-flex items-center gap-space-xs bg-secondary-container/60 px-space-md py-1 rounded-full mb-space-xs">
<Icon name="verified" className="text-[16px] text-tertiary" />
<span className="font-label-sm text-label-sm text-on-secondary-fixed uppercase tracking-wider">Uganda's Verified Marketplace</span>
</div>
<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-tight">Welcome Back</h2>
<p className="font-body-md text-body-md text-secondary mt-space-xs max-w-[320px]">
      Sign in to track orders, manage payments, and shop verified vendors across Uganda.
    </p>
</div>

<div className="w-full bg-surface-container-lowest rounded-xl shadow-sm p-space-lg mb-space-lg">
<form className="flex flex-col gap-space-md" id="signin-form" onSubmit={(e) => e.preventDefault()}>

<div className="flex items-center justify-between bg-surface-container-low p-1 rounded-lg">
<button className="flex-1 py-2 text-center rounded-md font-label-md text-label-md transition-all duration-200 bg-surface-container-lowest text-on-surface shadow-sm" id="tab-phone" type="button" onClick={() => alertToast('Action triggered')}>
          Phone Number
        </button>
<button className="flex-1 py-2 text-center rounded-md font-label-md text-label-md transition-all duration-200 text-secondary hover:text-on-surface" id="tab-email" type="button" onClick={() => alertToast('Action triggered')}>
          Email Address
        </button>
</div>

<div className="flex flex-col gap-1.5" id="phone-field-group">
<label className="font-label-md text-label-md text-on-surface flex items-center justify-between" htmlFor="phone-input">
<span>Mobile Number</span>
<span className="text-tertiary font-label-sm text-label-sm flex items-center gap-0.5">
<Icon name="bolt" className="text-[14px]" /> MTN &amp; Airtel Money Ready
          </span>
</label>
<div className="flex items-stretch bg-surface-container-low rounded-lg focus-within:bg-surface-container-lowest focus-within:shadow-sm transition-all h-12">

<div className="flex items-center gap-1.5 px-3 bg-surface-container rounded-l-lg shrink-0">

<svg className="w-5 h-3.5 rounded-sm shrink-0 shadow-sm" viewBox="0 0 640 480">
<path d="M0 0h640v80H0zM0 240h640v80H0z" fill="#000000"></path>
<path d="M0 80h640v80H0zM0 320h640v80H0z" fill="#ffd100"></path>
<path d="M0 160h640v80H0zM0 400h640v80H0z" fill="#d90000"></path>
<circle cx="320" cy="240" fill="#ffffff" r="60"></circle>
<circle cx="320" cy="240" fill="#000000" r="14"></circle>
</svg>
<span className="font-label-md text-label-md font-bold text-on-surface tracking-tight">+256</span>
<Icon name="expand_more" className="text-[18px] text-secondary" />
</div>
<input className="w-full bg-transparent px-3 text-on-surface font-body-lg text-body-lg placeholder:text-secondary/60 focus:outline-none" id="phone-input" inputMode="numeric" placeholder="772 123 456" type="tel" />
</div>
<p className="font-body-sm text-body-sm text-secondary px-1">Example: 772 000 000 or 750 000 000</p>
</div>

<div className="hidden flex flex-col gap-1.5" id="email-field-group">
<label className="font-label-md text-label-md text-on-surface" htmlFor="email-input">Email Address</label>
<div className="flex items-center bg-surface-container-low rounded-lg focus-within:bg-surface-container-lowest focus-within:shadow-sm transition-all h-12 px-3">
<Icon name="mail" className="text-[20px] text-secondary mr-2" />
<input className="w-full bg-transparent text-on-surface font-body-lg text-body-lg placeholder:text-secondary/60 focus:outline-none" id="email-input" placeholder="buyer@swiftcart.ug" type="email" />
</div>
</div>

<div className="flex flex-col gap-1.5 mt-1">
<div className="flex items-center justify-between">
<label className="font-label-md text-label-md text-on-surface" htmlFor="password-input">Password</label>
<a className="font-label-md text-label-md text-primary-container hover:text-primary transition-colors font-semibold" href="#" onClick={() => alertToast('Action triggered')}>
            Forgot Password?
          </a>
</div>
<div className="flex items-center bg-surface-container-low rounded-lg focus-within:bg-surface-container-lowest focus-within:shadow-sm transition-all h-12 px-3">
<Icon name="lock" className="text-[20px] text-secondary mr-2" />
<input className="w-full bg-transparent text-on-surface font-body-lg text-body-lg placeholder:text-secondary/60 focus:outline-none" id="password-input" placeholder="Enter your secret key" type="password" />
<button aria-label="Toggle password visibility" className="text-secondary hover:text-on-surface p-1 rounded-full transition-colors flex items-center justify-center" id="toggle-password" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="visibility" className="text-[20px]" />
</button>
</div>
</div>

<div className="flex items-center justify-between pt-1">
<label className="flex items-center gap-2.5 cursor-pointer select-none">
<input checked={true} className="w-5 h-5 accent-primary-container rounded cursor-pointer transition" type="checkbox" />
<span className="font-body-md text-body-md text-on-surface">Keep me signed in</span>
</label>
<span className="font-label-sm text-label-sm text-secondary bg-surface-container-high px-2 py-0.5 rounded">30 Days</span>
</div>

<button className="w-full h-12 mt-2 bg-primary-container hover:bg-primary text-on-primary rounded-lg font-label-lg text-label-lg shadow-md shadow-primary-container/20 flex items-center justify-center gap-2 active:scale-[0.99] transition-all cursor-pointer font-bold" type="submit" onClick={(e) => { e.preventDefault(); onNavigate?.('/sign-in'); }}>
<span>Sign In</span>
<Icon name="arrow_forward" className="text-[20px]" />
</button>
</form>
</div>

<div className="relative flex items-center justify-center mb-space-lg">
<div className="w-full h-[1px] bg-surface-variant"></div>
<span className="absolute bg-surface px-space-md font-label-sm text-label-sm text-secondary uppercase tracking-wider">
      Or continue with
    </span>
</div>

<div className="flex flex-col gap-space-sm mb-space-lg">

<button className="w-full h-12 bg-surface-container-lowest hover:bg-surface-container-low text-on-surface rounded-lg shadow-sm flex items-center justify-center gap-3 transition-colors active:scale-[0.99] cursor-pointer" type="button" onClick={() => alertToast('Action triggered')}>
<svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
<path d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.8 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.9C6.2 7.4 8.9 5 12 5z" fill="#EA4335"></path>
<path d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5.1 3.7-8.8z" fill="#4285F4"></path>
<path d="M5.3 14.7c-.2-.7-.4-1.5-.4-2.7s.1-2 .4-2.7L1.6 6.4C.6 8.3 0 10.1 0 12s.6 3.7 1.6 5.6l3.7-2.9z" fill="#FBBC05"></path>
<path d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.1 0-5.8-2.1-6.7-5.1L1.6 16.1C3.5 19.9 7.4 23 12 23z" fill="#34A853"></path>
</svg>
<span className="font-label-lg text-label-lg font-semibold">Continue with Google</span>
</button>

<button className="w-full h-12 bg-surface-container-lowest hover:bg-surface-container-low text-on-surface rounded-lg shadow-sm flex items-center justify-center gap-3 transition-colors active:scale-[0.99] cursor-pointer" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/sign-in'); }}>
<Icon name="sms" className="text-[22px] text-tertiary" />
<span className="font-label-lg text-label-lg font-semibold">Sign in with OTP / SMS Code</span>
</button>
</div>

<div className="flex justify-center mb-space-xl">
<a className="inline-flex items-center gap-1.5 px-space-lg py-2.5 rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-label-md text-label-md font-semibold" href="#" onClick={() => alertToast('Action triggered')}>
<Icon name="shopping_bag" className="text-[18px]" />
<span>Continue as Guest</span>
<Icon name="chevron_right" className="text-[16px]" />
</a>
</div>

<div className="flex flex-col items-center gap-space-sm text-center">
<p className="font-body-md text-body-md text-secondary">
      Don't have an account? 
      <a className="font-label-lg text-label-lg text-primary-container hover:text-primary font-bold ml-1 transition-colors underline underline-offset-4 decoration-primary-container/40" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/register'); }}>
        Register here
      </a>
</p>

<div className="flex items-center gap-space-xs text-secondary mt-space-xs">
<Icon name="shield" className="text-[15px] text-tertiary" />
<span className="font-label-sm text-label-sm">Uganda Data Protection Compliant • End-to-End Secure</span>
</div>
</div>
</div>
</main>
    </div>
  );
};

export default Mobile;
