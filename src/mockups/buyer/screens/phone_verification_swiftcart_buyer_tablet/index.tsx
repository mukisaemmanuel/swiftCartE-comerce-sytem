// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/buyer/phone_verification_swiftcart_buyer_tablet/code.html
import React, { useState } from 'react';
import Icon from '../../../../components/shared/Icon';

export interface ScreenProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Screen: React.FC<ScreenProps> = (props) => {
  const onNavigate = props.onNavigate;
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-background font-body-md text-body-md text-on-surface antialiased min-h-screen flex items-center justify-center p-gutter relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base { html, body { margin: 0; padding: 0; } body { overscroll-behavior: none; } main > :first-child { margin-top: 0 !important; } main > :last-child { margin-bottom: 0 !important; } } ::-webkit-scrollbar { display: none; }
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <main className="w-full max-w-xl bg-surface-container-lowest rounded-xl shadow-[0_4px_24px_rgba(15,23,42,0.08)] p-space-xl"><div className="flex flex-col w-full">
<div className="flex flex-col items-center justify-center py-space-xl px-margin">

<div className="flex items-center justify-between w-full max-w-xl mb-space-lg">
<div className="flex items-center gap-space-xs">
<div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-on-primary shadow-sm">
<Icon name="local_shipping" className="text-[20px]" />
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm tracking-tight text-on-surface flex items-center gap-1">
            Swift<span className="text-primary-container">Cart</span>
</span>
</div>
</div>
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-on-surface">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Kampala Hub</span>
</div>
</div>

<div className="w-full max-w-xl mb-space-lg">
<div className="flex items-center justify-between mb-2">
<span className="font-label-md text-label-md text-primary font-bold">Step 2 of 3</span>
<span className="font-label-sm text-label-sm text-secondary">Phone Verification</span>
</div>
<div className="w-full grid grid-cols-3 gap-2">
<div className="h-1.5 rounded-full bg-primary-container"></div>
<div className="h-1.5 rounded-full bg-primary-container"></div>
<div className="h-1.5 rounded-full bg-surface-container-high"></div>
</div>
</div>

<div className="w-full max-w-xl bg-surface-container-lowest rounded-xl shadow-md p-space-xl relative overflow-hidden">

<div className="absolute -top-12 -right-12 w-48 h-48 bg-primary-fixed-dim/20 rounded-full blur-3xl pointer-events-none"></div>

<div className="flex flex-col items-center text-center">
<div className="relative mb-space-md">
<div className="w-16 h-16 rounded-2xl bg-surface-container-low flex items-center justify-center text-primary-container shadow-sm">
<Icon name="sms" className="text-[32px]" />
</div>
<span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-sm">
<Icon name="bolt" className="text-[14px]" />
</span>
</div>
<h1 className="font-headline-md text-headline-md text-on-surface mb-space-xs">
          Verify Your Phone Number
        </h1>
<p className="font-body-md text-body-md text-secondary max-w-md mx-auto">
          We sent a 6-digit verification code to
          <span className="font-semibold text-on-surface font-body-md">+256 701 892 411</span> via SMS. Enter it below to activate instant Kampala checkout.
        </p>
<button className="mt-2 inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-primary-container transition-colors py-1 px-2 rounded hover:bg-surface-container-low" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="edit" className="text-[16px]" />
<span>(Change Phone Number)</span>
</button>
</div>

<div className="mt-space-lg">
<label className="block font-label-sm text-label-sm uppercase tracking-wider text-secondary mb-space-xs text-center">
          Enter 6-Digit SMS PIN
        </label>
<div className="grid grid-cols-6 gap-2 sm:gap-3 max-w-md mx-auto" id="otp-container">
<div className="relative">
<input aria-label="OTP Digit 1" className="w-full aspect-square text-center font-price-display text-price-display text-on-surface bg-surface-container-low rounded-lg focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container focus:outline-none transition-all shadow-sm selection:bg-primary-fixed" inputMode="numeric" maxLength={1} type="text" value="8" />
</div>
<div className="relative">
<input aria-label="OTP Digit 2" className="w-full aspect-square text-center font-price-display text-price-display text-on-surface bg-surface-container-low rounded-lg focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container focus:outline-none transition-all shadow-sm selection:bg-primary-fixed" inputMode="numeric" maxLength={1} type="text" value="4" />
</div>
<div className="relative">
<input aria-label="OTP Digit 3" className="w-full aspect-square text-center font-price-display text-price-display text-on-surface bg-surface-container-low rounded-lg focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container focus:outline-none transition-all shadow-sm selection:bg-primary-fixed" inputMode="numeric" maxLength={1} type="text" value="2" />
</div>
<div className="relative">
<input aria-label="OTP Digit 4" className="w-full aspect-square text-center font-price-display text-price-display text-on-surface bg-surface-container-low rounded-lg focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container focus:outline-none transition-all shadow-sm selection:bg-primary-fixed" inputMode="numeric" maxLength={1} type="text" value="1" />
</div>
<div className="relative">
<input aria-label="OTP Digit 5" className="w-full aspect-square text-center font-price-display text-price-display text-on-surface bg-surface-container-low rounded-lg focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container focus:outline-none transition-all shadow-sm selection:bg-primary-fixed" inputMode="numeric" maxLength={1} type="text" value="9" />
</div>
<div className="relative">
<input aria-label="OTP Digit 6" className="w-full aspect-square text-center font-price-display text-price-display text-on-surface bg-surface-container-low rounded-lg focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container focus:outline-none transition-all shadow-sm selection:bg-primary-fixed" inputMode="numeric" maxLength={1} type="text" value="0" />
</div>
</div>
</div>

<div className="mt-space-md flex flex-col sm:flex-row items-center justify-between text-center gap-2 max-w-md mx-auto">
<div className="flex items-center gap-1.5 font-label-md text-label-md text-secondary">
<Icon name="timelapse" className="text-[18px]" />
<span>Resend code in <strong className="text-on-surface font-semibold font-body-md" id="timer-display">00:48</strong></span>
</div>
<button className="font-label-md text-label-md text-secondary cursor-not-allowed transition-colors" disabled={true} id="resend-btn" type="button" onClick={() => alertToast('Action triggered')}>
          Resend SMS Code
        </button>
</div>

<div className="mt-space-lg flex flex-col gap-space-sm max-w-md mx-auto">

<button className="w-full h-12 bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg rounded-lg shadow-sm flex items-center justify-center gap-2 transition-all transform active:scale-[0.99]" type="button" onClick={() => alertToast('Action triggered')}>
<span>Verify &amp; Continue</span>
<Icon name="arrow_forward" className="text-[18px]" />
</button>

<button className="w-full h-11 bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md rounded-lg flex items-center justify-center gap-2 transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<span className="w-5 h-5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center">
<Icon name="chat" className="text-[13px]" />
</span>
<span>Send Code via WhatsApp</span>
</button>
</div>

<div className="mt-space-lg p-space-md rounded-xl bg-surface-container-low flex items-start gap-space-sm text-left">
<div className="p-1 rounded bg-secondary-container text-on-secondary-container shrink-0 mt-0.5">
<Icon name="two_wheeler" className="text-[20px]" />
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Why verify your phone number?</span>
<p className="font-body-sm text-body-sm text-secondary mt-0.5 leading-snug">
            SwiftCart coordinates directly with Boda riders across Kampala and Entebbe. Your verified number generates the mandatory handover release PIN upon package arrival.
          </p>
</div>
</div>

<div className="mt-space-lg pt-space-md flex flex-wrap items-center justify-between text-secondary gap-2">
<div className="flex items-center gap-1.5">
<Icon name="verified_user" className="text-[16px] text-tertiary" />
<span className="font-label-sm text-label-sm">SwiftCart Uganda 256-bit Secure Gateway</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Bank of Uganda Compliant</span>
</div>
</div>

<div className="flex items-center justify-center gap-space-md mt-space-md text-secondary">
<a className="font-label-sm text-label-sm hover:text-primary transition-colors flex items-center gap-1" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}>
<Icon name="help" className="text-[14px]" />
        Need help receiving code?
      </a>
<span className="text-outline-variant">•</span>
<a className="font-label-sm text-label-sm hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
        Kampala Dispatch Center
      </a>
</div>
</div>
</div>
</main>
    </div>
  );
};

export default Screen;
