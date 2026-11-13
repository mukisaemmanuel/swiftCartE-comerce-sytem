// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/buyer/sign_in_register_swiftcart_uganda/code.html
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
    <div className="bg-surface font-body-md text-body-md text-on-surface flex flex-col antialiased selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{width:100vw;margin:0;padding:0;}body{overscroll-behavior:none;}.pb-safe{padding-bottom:env(safe-area-inset-bottom,0px);}.pt-safe{padding-top:env(safe-area-inset-top,0px);}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <main className="flex flex-col relative w-full pt-safe pb-safe bg-surface min-h-screen"><div className="flex flex-col w-full">
<div className="w-full max-w-[420px] mx-auto px-margin pb-space-xl flex flex-col gap-space-lg">

<div className="flex items-center justify-between pt-space-sm">
<button aria-label="Back to marketplace" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface active:scale-95 transition-transform shadow-sm" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="arrow_back" className="text-[20px]" />
</button>
<div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary-container/15 text-tertiary font-label-md text-label-md">
<Icon name="verified_user" className="text-[16px]" />
<span className="">Escrow Protected</span>
</div>
</div>

<div className="flex flex-col items-center text-center gap-space-xs mt-1">
<div className="h-14 flex items-center justify-center"><img src={`${assetBase}/images/dc3f9b3619e5e158.webp`} alt="SwiftCart Uganda Logo" className="h-12 object-contain mx-auto" /></div>
<p className="font-label-lg text-label-lg text-secondary tracking-wide uppercase">
        Uganda's Most Trusted Marketplace
      </p>
<div className="flex items-center gap-2 mt-1">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
<Icon name="bolt" className="text-[13px] text-tertiary" />
          Instant MoMo Checkout
        </span>

</div>
</div>

<div className="w-full bg-surface-container-lowest rounded-xl shadow-md p-space-lg flex flex-col gap-space-lg">

<div className="w-full bg-surface-container p-1 rounded-xl flex items-center gap-1 relative" id="authTabsContainer">
<button className="flex-1 py-2 text-center rounded-lg font-label-lg text-label-lg text-on-surface bg-surface-container-lowest shadow-sm transition-all duration-200" id="tabSignIn" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/sign-in'); }}>
          Sign In
        </button>
<button className="flex-1 py-2 text-center rounded-lg font-label-lg text-label-lg text-secondary transition-all duration-200" id="tabRegister" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/register'); }}>
          Create Account
        </button>
</div>

<div className="flex items-start gap-2.5 p-3 rounded-lg bg-surface-container-low text-on-surface-variant">
<Icon name="sms" className="text-[18px] text-primary-container shrink-0 mt-0.5" />
<p className="font-body-sm text-body-sm leading-snug">Instant 6-digit OTP sent via secure SMS to your mobile line</p>
</div>

<div className="flex flex-col gap-space-md" id="phoneStep">
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface flex justify-between items-center">
<span className="">Mobile Phone Number</span>
<span className="text-tertiary font-label-sm text-label-sm flex items-center gap-0.5">
<Icon name="bolt" className="text-[14px]" /> No Password Needed
            </span>
</label>
<div className="flex items-center h-12 rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden px-3 gap-2 focus-within:ring-2 focus-within:ring-primary-container transition-all">

<div className="flex items-center gap-1.5 shrink-0 pr-2">
<span aria-label="Uganda Flag" className="text-[18px]">🇺🇬</span>
<span className="font-headline-sm text-headline-sm text-on-secondary-fixed tracking-tight">+256</span>
<div className="h-5 w-px bg-surface-variant ml-1"></div>
</div>
<input className="w-full bg-transparent font-headline-sm text-headline-sm text-on-surface placeholder:text-outline/60 focus:outline-none tracking-wide" id="phoneInput" placeholder="772 345 678" type="tel" value="772 345 678" />
<Icon name="check_circle" className="text-[20px] text-tertiary shrink-0" />
</div>
</div>

<div className="flex items-center justify-between px-1">
<div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span className="">Network: MTN Uganda (MoMo Ready)</span>
</div>
<button className="font-label-md text-label-md text-primary-container hover:underline" type="button" onClick={() => alertToast('Action triggered')}>
            Use email instead
          </button>
</div>

<button className="w-full h-12 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] text-on-primary font-label-lg text-label-lg tracking-wide shadow-md active:scale-[0.98] transition-all flex items-center justify-center gap-2" id="sendOtpBtn" type="button" onClick={() => alertToast('Action triggered')}>
<span className="">Send Verification Code</span>
<Icon name="arrow_forward" className="text-[18px]" />
</button>
</div>

<div className="flex flex-col gap-space-md pt-2" id="otpStep">
<div className="flex flex-col gap-1 text-center">
<div className="flex items-center justify-center gap-1.5 font-label-md text-label-md text-on-surface">
<Icon name="lock_reset" className="text-[16px] text-tertiary" />
<span className="">Enter 6-digit verification code</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Sent to <span className="font-bold text-on-secondary-fixed">+256 772 345 678</span> via SMS</p>
</div>

<div className="flex items-center justify-between gap-1.5 max-w-[320px] mx-auto w-full" id="otpContainer">
<input className="w-11 h-12 rounded-lg bg-surface-container text-center font-headline-md text-headline-md text-on-secondary-fixed focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container outline-none transition-all" maxLength={1} type="text" value="4" />
<input className="w-11 h-12 rounded-lg bg-surface-container text-center font-headline-md text-headline-md text-on-secondary-fixed focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container outline-none transition-all" maxLength={1} type="text" value="8" />
<input className="w-11 h-12 rounded-lg bg-surface-container text-center font-headline-md text-headline-md text-on-secondary-fixed focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container outline-none transition-all" maxLength={1} type="text" value="2" />
<input className="w-11 h-12 rounded-lg bg-surface-container text-center font-headline-md text-headline-md text-on-secondary-fixed focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container outline-none transition-all" maxLength={1} type="text" value="9" />
<input className="w-11 h-12 rounded-lg bg-surface-container text-center font-headline-md text-headline-md text-on-secondary-fixed focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container outline-none transition-all" maxLength={1} type="text" value="1" />
<input className="w-11 h-12 rounded-lg bg-surface-container-lowest text-center font-headline-md text-headline-md text-primary-container focus:ring-2 focus:ring-primary-container outline-none transition-all" maxLength={1} placeholder="•" type="text" />
</div>

<div className="flex items-center justify-between px-2 font-label-md text-label-md">
<span className="text-on-surface-variant flex items-center gap-1">
<Icon name="schedule" className="text-[16px]" />
            Resend code in <strong className="text-primary-container font-bold" id="countdownText">42s</strong>
</span>
<button className="text-secondary hover:underline" type="button" onClick={() => alertToast('Action triggered')}>
            Edit number
          </button>
</div>

<button className="w-full h-12 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] text-on-primary font-label-lg text-label-lg tracking-wide shadow-md active:scale-[0.98] transition-all flex items-center justify-center gap-2" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/sign-in'); }}>
<Icon name="task_alt" className="text-[20px]" />
<span className="">Verify &amp; Sign In</span>
</button>
</div>

<div className="flex items-center gap-3 my-1">
<div className="flex-1 h-px bg-surface-variant"></div>
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Or continue with</span>
<div className="flex-1 h-px bg-surface-variant"></div>
</div>

<div className="flex flex-col gap-2.5">

<button className="w-full h-12 rounded-xl bg-surface-container-low hover:bg-surface-container flex items-center justify-center gap-3 font-label-lg text-label-lg text-on-surface active:scale-[0.99] transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
<path d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z" fill="#4285F4"></path>
<path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24Z" fill="#34A853"></path>
<path d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15Z" fill="#FBBC05"></path>
<path d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98Z" fill="#EA4335"></path>
</svg>
<span className="">Continue with Google</span>
</button>


</div>

<div className="flex flex-col items-center pt-1">
<button className="w-full py-2.5 rounded-xl bg-surface-container text-on-secondary-fixed font-label-lg text-label-lg flex items-center justify-center gap-1.5 active:scale-95 transition-transform" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/account'); }}>
<Icon name="shopping_bag" className="text-[18px]" />
<span className="">Continue as Guest (Shop without account)</span>
</button>
<p className="font-body-sm text-body-sm text-outline mt-1.5 text-center">
          You can save cart items and checkout anytime later
        </p>
</div>
</div>

<div className="rounded-xl bg-surface-container-low p-space-md flex items-center gap-3"><div className="w-10 h-10 rounded-lg bg-tertiary-container/15 text-tertiary shrink-0 flex items-center justify-center"><Icon name="verified_user" className="text-[22px]" /></div><div className="flex flex-col min-w-0 text-left"><span className="font-label-md text-label-md text-on-surface">Escrow Protected</span><span className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Escrow Protected: your money is held by SwiftCart until you confirm delivery. Payments are processed by our secure payment partner.</span></div></div>

<div className="flex flex-col items-center text-center gap-1 px-4">
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
        By continuing, you agree to SwiftCart Uganda's
        <a className="text-primary underline font-medium" href="#" onClick={() => alertToast('Action triggered')}>Terms of Service</a>
        and
        <a className="text-primary underline font-medium" href="#" onClick={() => alertToast('Action triggered')}>Privacy Policy</a>.
      </p>
<div className="flex items-center gap-2 mt-2 text-outline font-label-sm text-label-sm">
<span className="">KAMPALA, UGANDA</span>
<span className="">•</span>
<span className="">MTN MoMo &amp; AIRTEL MONEY INTEGRATED</span>
</div>
</div>
</div>

</div></main>
    </div>
  );
};

export default Mobile;
