// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/buyer/phone_verification_swiftcart_desktop_2/code.html
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
    <div className="bg-surface font-body-md text-on-surface min-h-screen flex items-center justify-center p-space-md relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <main className="w-full max-w-md mx-auto"><div className="flex flex-col w-full">
<div className="relative w-full max-w-xl mx-auto my-4 sm:my-8 px-4 sm:px-0">
<div className="absolute -top-16 -left-16 w-56 h-56 bg-primary-fixed rounded-full blur-3xl opacity-40 pointer-events-none"></div>
<div className="absolute -bottom-16 -right-16 w-60 h-60 bg-secondary-fixed rounded-full blur-3xl opacity-30 pointer-events-none"></div>
<div className="relative bg-surface-container-lowest rounded-xl shadow-xl p-6 sm:p-10 flex flex-col items-center">
<div className="flex flex-col items-center mb-6">
<img alt="SwiftCart Uganda" className="h-12 w-auto object-contain mb-4" src={`${assetBase}/images/4c31fe8abebfec6f.webp`} />
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-tertiary font-label-md text-label-md">
<Icon name="verified_user" className="text-base" />
<span>Two-Factor Account Authentication</span>
</div>
</div>
<div className="text-center max-w-md mb-8">
<h1 className="font-headline-md text-headline-md text-on-surface mb-2">
          Verify Your Mobile Number
        </h1>
<p className="font-body-md text-body-md text-on-surface-variant">
          We sent a 6-digit verification code via SMS to
          <span className="font-bold text-on-surface inline-flex items-center gap-1">
            +256 772 345 678
          </span>
<button className="text-primary hover:underline font-label-md text-label-md ml-1 inline-flex items-center" type="button" onClick={() => alertToast('Action triggered')}>
            (Change phone number)
          </button>
</p>
</div>
<div className="w-full flex flex-col items-center mb-8">
<div className="flex items-center justify-center gap-2 sm:gap-3 w-full max-w-sm mb-4" id="otp-container">
<input className="otp-box w-11 h-14 sm:w-12 sm:h-16 text-center font-headline-md text-headline-md bg-surface-container-low text-on-surface rounded-lg transition-all outline-none focus:bg-surface-container-lowest focus:shadow-md" inputMode="numeric" maxLength={1} pattern="[0-9]*" type="text" value="5" />
<input className="otp-box w-11 h-14 sm:w-12 sm:h-16 text-center font-headline-md text-headline-md bg-surface-container-low text-on-surface rounded-lg transition-all outline-none focus:bg-surface-container-lowest focus:shadow-md" inputMode="numeric" maxLength={1} pattern="[0-9]*" type="text" value="8" />
<input className="otp-box w-11 h-14 sm:w-12 sm:h-16 text-center font-headline-md text-headline-md bg-surface-container-low text-on-surface rounded-lg transition-all outline-none focus:bg-surface-container-lowest focus:shadow-md" inputMode="numeric" maxLength={1} pattern="[0-9]*" type="text" value="2" />
<input className="otp-box w-11 h-14 sm:w-12 sm:h-16 text-center font-headline-md text-headline-md bg-surface-container-low text-on-surface rounded-lg transition-all outline-none focus:bg-surface-container-lowest focus:shadow-md" inputMode="numeric" maxLength={1} pattern="[0-9]*" type="text" value="9" />
<input className="otp-box w-11 h-14 sm:w-12 sm:h-16 text-center font-headline-md text-headline-md bg-surface-container-low text-on-surface rounded-lg transition-all outline-none focus:bg-surface-container-lowest focus:shadow-md" inputMode="numeric" maxLength={1} pattern="[0-9]*" type="text" value="1" />
<input className="otp-box w-11 h-14 sm:w-12 sm:h-16 text-center font-headline-md text-headline-md bg-surface-container-low text-on-surface rounded-lg transition-all outline-none focus:bg-surface-container-lowest focus:shadow-md" inputMode="numeric" maxLength={1} pattern="[0-9]*" type="text" value="4" />
</div>
<div className="flex items-center gap-1.5 text-on-surface-variant font-label-md text-label-md">
<Icon name="timer" className="text-base" />
<span>Code expires in <span className="font-bold text-on-surface" id="countdown">01:48</span></span>
</div>
</div>
<div className="w-full space-y-4 mb-6">
<button className="w-full h-12 bg-primary-container hover:opacity-95 text-on-primary-container font-label-lg text-label-lg rounded-xl shadow-lg transition-transform active:scale-[0.98] flex items-center justify-center gap-2" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<span>Verify &amp; Continue to SwiftCart</span>
<Icon name="arrow_forward" className="text-lg" />
</button>
<div className="p-3.5 rounded-lg bg-surface-container-low flex items-start gap-3">
<Icon name="signal_cellular_alt" className="text-primary text-xl flex-shrink-0 mt-0.5" />
<div className="font-body-sm text-body-sm text-on-surface-variant">
<span className="font-bold text-on-surface">Network delay on MTN or Airtel?</span>
<button className="text-primary hover:underline font-bold block sm:inline sm:ml-1 text-left" type="button" onClick={() => alertToast('Action triggered')}>
              Click here for instant WhatsApp delivery.
            </button>
</div>
</div>
</div>
<div className="w-full flex flex-col items-center gap-3 pt-2 pb-6">
<div className="flex flex-wrap items-center justify-center gap-2 font-label-md text-label-md text-on-surface-variant text-center">
<span>Didn't receive the SMS?</span>
<button className="text-on-surface font-bold hover:underline" disabled={true} type="button" onClick={() => alertToast('Action triggered')}>
            Resend Code in <span id="resend-countdown">45s</span>
</button>
</div>
<div className="flex items-center gap-2 text-on-secondary-container">
<Icon name="call" className="text-base" />
<button className="font-label-md text-label-md hover:underline font-bold" type="button" onClick={() => alertToast('Action triggered')}>
            Receive code via WhatsApp voice call
          </button>
</div>
</div>
<div className="w-full pt-6 bg-surface-container rounded-lg p-4 flex items-start gap-3">
<Icon name="security" className="text-tertiary text-xl flex-shrink-0" />
<div className="space-y-1">
<div className="font-label-sm text-label-sm uppercase tracking-wide text-tertiary">Swift Escrow Protected</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            SwiftCart protects your account with carrier-grade two-factor authentication to ensure safe payments and delivery code security.
          </p>
</div>
</div>
<div className="mt-6 flex items-center justify-center">
<button className="inline-flex items-center gap-1.5 text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/sign-in'); }}>
<Icon name="arrow_back" className="text-base" />
<span>Back to sign in</span>
</button>
</div>
</div>
</div>
</div>
</main>
    </div>
  );
};

export default Screen;
