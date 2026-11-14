// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/buyer/forgot_password_swiftcart_buyer/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';

export interface ForgotPasswordSwiftcartBuyerProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const ForgotPasswordSwiftcartBuyer: React.FC<ForgotPasswordSwiftcartBuyerProps> = (props) => {
  const onNavigate = props.onNavigate;
  const onAction = props.onAction;
  void onNavigate;
  void onAction;
  void Icon;
  
  

  return (
    <div className="relative w-full overflow-x-hidden min-h-screen">
      
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 px-margin flex items-center justify-between"><div className="flex items-center gap-space-sm min-w-0"><button aria-label="Go back" className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container-high transition-colors -ml-space-xs"><Icon name="arrow_back" className="text-[24px]" /></button><img alt="SwiftCart" className="h-8 w-auto object-contain shrink-0" src="/brand/logo-full.png" /><div className="flex flex-col min-w-0 ml-space-xs"><span className="font-label-sm text-label-sm text-secondary tracking-wider uppercase truncate">SwiftCart Uganda</span><h1 className="font-headline-sm text-headline-sm text-on-surface truncate">Buyer Forgot Password</h1></div></div><div className="flex items-center gap-space-xs"><button aria-label="Page options" className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors"><Icon name="more_vert" className="text-[22px]" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex flex-col relative w-full pt-16 bg-surface min-h-screen"><div className="flex flex-col w-full px-margin pb-space-xl">

<div className="w-full flex items-center justify-between pt-space-md pb-space-lg">
<div className="flex items-center gap-space-xs flex-1">
<div className="h-1.5 rounded-full flex-1 bg-primary-container transition-all duration-300" id="step-pill-1"></div>
<div className="h-1.5 rounded-full flex-1 bg-surface-container-highest transition-all duration-300" id="step-pill-2"></div>
<div className="h-1.5 rounded-full flex-1 bg-surface-container-highest transition-all duration-300" id="step-pill-3"></div>
</div>
<span className="font-label-sm text-label-sm text-secondary ml-space-md uppercase tracking-wider shrink-0" id="step-counter-label">Step 1 of 3</span>
</div>

<div className="flex flex-col gap-space-xs mb-space-lg">
<div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary mb-space-xs shadow-sm">
<Icon name="lock_reset" className="text-[26px]" />
</div>
<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface" id="view-title">Reset Password</h2>
<p className="font-body-md text-body-md text-secondary" id="view-subtitle">
      Enter your registered phone number or email to receive a 6-digit SMS verification code.
    </p>
</div>

<div className="flex items-start gap-space-sm p-space-md rounded-xl bg-surface-container-low mb-space-lg">
<Icon name="shield_lock" className="text-primary text-[20px] shrink-0 mt-0.5" />
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
      Codes expire in <strong className="text-on-surface font-label-md">10 minutes</strong>. For security, never share your SMS code with anyone, including SwiftCart staff.
    </p>
</div>

<section className="flex flex-col gap-space-md transition-opacity duration-300" id="stage-contact">
<div className="flex p-1 rounded-xl bg-surface-container gap-1">
<button className="flex-1 py-2 rounded-lg font-label-md text-label-md bg-surface-container-lowest text-on-surface shadow-sm transition-all text-center flex items-center justify-center gap-1.5" id="toggle-phone-btn" type="button">
<Icon name="phone_iphone" className="text-[18px]" /> Phone (SMS)
      </button>
<button className="flex-1 py-2 rounded-lg font-label-md text-label-md text-secondary hover:text-on-surface transition-all text-center flex items-center justify-center gap-1.5" id="toggle-email-btn" type="button">
<Icon name="mail" className="text-[18px]" /> Email Address
      </button>
</div>

<div className="flex flex-col gap-1.5" id="phone-input-wrap">
<label className="font-label-md text-label-md text-on-surface" htmlFor="phone-number">Registered Mobile Number</label>
<div className="flex items-center rounded-xl bg-surface-container-low px-space-md h-12 shadow-sm focus-within:bg-surface-container-lowest focus-within:shadow-md transition-all">
<div className="flex items-center gap-1 pr-space-sm mr-space-sm bg-surface-container py-1 px-2 rounded-lg shrink-0">
<span className="font-label-sm text-label-sm text-on-surface font-bold">UG</span>
<span className="font-label-md text-label-md text-on-surface">+256</span>
</div>
<input className="w-full bg-transparent border-0 outline-none font-body-lg text-body-lg text-on-surface placeholder:text-secondary focus:ring-0 p-0" id="phone-number" inputMode="tel" placeholder="772 123 456" type="tel" value="701 892 411" />
<Icon name="check_circle" className="text-tertiary text-[20px] shrink-0" />
</div>
<p className="font-body-sm text-body-sm text-secondary">We will deliver a 6-digit one-time PIN via instant SMS gateway.</p>
</div>

<div className="hidden flex flex-col gap-1.5" id="email-input-wrap">
<label className="font-label-md text-label-md text-on-surface" htmlFor="email-address">Registered Email Address</label>
<div className="flex items-center rounded-xl bg-surface-container-low px-space-md h-12 shadow-sm focus-within:bg-surface-container-lowest focus-within:shadow-md transition-all">
<Icon name="alternate_email" className="text-secondary text-[20px] mr-space-sm" />
<input className="w-full bg-transparent border-0 outline-none font-body-lg text-body-lg text-on-surface placeholder:text-secondary focus:ring-0 p-0" id="email-address" inputMode="email" placeholder="name@domain.com" type="email" />
</div>
</div>
<button className="w-full mt-space-sm h-12 rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-space-sm shadow-md active:scale-[0.98] transition-all hover:opacity-95" id="send-code-btn" type="button">
<span>Send 6-Digit Code</span>
<Icon name="arrow_forward" className="text-[20px]" />
</button>
</section>

<section className="hidden flex flex-col gap-space-lg transition-opacity duration-300" id="stage-otp">

<div className="flex items-center justify-between p-space-sm px-space-md rounded-xl bg-surface-container-low">
<div className="flex items-center gap-space-xs min-w-0">
<Icon name="sms" className="text-primary text-[20px] shrink-0" />
<span className="font-body-sm text-body-sm text-secondary truncate">Sent to <strong className="text-on-surface">+256 701 *** 411</strong></span>
</div>
<button className="font-label-md text-label-md text-primary font-semibold hover:underline shrink-0" type="button">Edit</button>
</div>

<div className="flex flex-col gap-space-xs items-center">
<label className="font-label-md text-label-md text-on-surface self-start">Enter Verification Code</label>
<div className="flex items-center justify-between w-full gap-2">
<input className="otp-box w-12 h-14 rounded-xl bg-surface-container-low text-center font-headline-md text-headline-md text-on-surface focus:bg-surface-container-lowest focus:shadow-md outline-none transition-all" inputMode="numeric" maxLength={1} pattern="[0-9]*" type="text" value="4" />
<input className="otp-box w-12 h-14 rounded-xl bg-surface-container-low text-center font-headline-md text-headline-md text-on-surface focus:bg-surface-container-lowest focus:shadow-md outline-none transition-all" inputMode="numeric" maxLength={1} pattern="[0-9]*" type="text" value="9" />
<input className="otp-box w-12 h-14 rounded-xl bg-surface-container-low text-center font-headline-md text-headline-md text-on-surface focus:bg-surface-container-lowest focus:shadow-md outline-none transition-all" inputMode="numeric" maxLength={1} pattern="[0-9]*" type="text" value="1" />
<input className="otp-box w-12 h-14 rounded-xl bg-surface-container-low text-center font-headline-md text-headline-md text-primary focus:bg-surface-container-lowest focus:shadow-md outline-none transition-all placeholder:text-secondary-fixed-dim" inputMode="numeric" maxLength={1} pattern="[0-9]*" placeholder="•" type="text" />
<input className="otp-box w-12 h-14 rounded-xl bg-surface-container-low text-center font-headline-md text-headline-md text-primary focus:bg-surface-container-lowest focus:shadow-md outline-none transition-all placeholder:text-secondary-fixed-dim" inputMode="numeric" maxLength={1} pattern="[0-9]*" placeholder="•" type="text" />
<input className="otp-box w-12 h-14 rounded-xl bg-surface-container-low text-center font-headline-md text-headline-md text-primary focus:bg-surface-container-lowest focus:shadow-md outline-none transition-all placeholder:text-secondary-fixed-dim" inputMode="numeric" maxLength={1} pattern="[0-9]*" placeholder="•" type="text" />
</div>
</div>

<div className="flex items-center justify-between p-space-md rounded-xl bg-surface-container">
<div className="flex items-center gap-2">
<Icon name="timer" className="text-secondary text-[20px]" />
<span className="font-body-sm text-body-sm text-secondary" id="timer-text">Resend SMS in <strong className="text-on-surface font-label-md" id="timer-seconds">00:42</strong></span>
</div>
<button className="font-label-md text-label-md text-secondary opacity-50 cursor-not-allowed transition-all font-semibold flex items-center gap-1" disabled={true} id="resend-action-btn" type="button">
<Icon name="sync" className="text-[16px]" /> Resend
      </button>
</div>
<button className="w-full h-12 rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-space-sm shadow-md active:scale-[0.98] transition-all hover:opacity-95" type="button">
<span>Verify &amp; Continue</span>
<Icon name="check" className="text-[20px]" />
</button>
</section>

<section className="hidden flex flex-col gap-space-md transition-opacity duration-300" id="stage-newpass">
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface" htmlFor="new-pass">New Password</label>
<div className="flex items-center rounded-xl bg-surface-container-low px-space-md h-12 shadow-sm focus-within:bg-surface-container-lowest focus-within:shadow-md transition-all">
<Icon name="key" className="text-secondary text-[20px] mr-space-sm" />
<input className="w-full bg-transparent border-0 outline-none font-body-md text-body-md text-on-surface placeholder:text-secondary focus:ring-0 p-0" id="new-pass" placeholder="Enter strong new password" type="password" value="SwiftCamp2024!" />
<button className="p-1 text-secondary hover:text-on-surface" type="button">
<Icon name="visibility" className="text-[20px]" />
</button>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Password Health</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold" id="strength-label">Strong</span>
</div>
<div className="w-full h-1.5 rounded-full bg-surface-container flex gap-1 overflow-hidden">
<div className="h-full flex-1 bg-tertiary-container transition-all" id="bar-1"></div>
<div className="h-full flex-1 bg-tertiary-container transition-all" id="bar-2"></div>
<div className="h-full flex-1 bg-tertiary-container transition-all" id="bar-3"></div>
<div className="h-full flex-1 bg-tertiary-container transition-all" id="bar-4"></div>
</div>
<div className="grid grid-cols-2 gap-y-1.5 gap-x-2 pt-1">
<div className="flex items-center gap-1.5 font-label-sm text-label-sm text-tertiary" id="req-len">
<Icon name="check_circle" className="text-[16px]" />
<span>8+ Characters</span>
</div>
<div className="flex items-center gap-1.5 font-label-sm text-label-sm text-tertiary" id="req-num">
<Icon name="check_circle" className="text-[16px]" />
<span>Number included</span>
</div>
<div className="flex items-center gap-1.5 font-label-sm text-label-sm text-tertiary" id="req-case">
<Icon name="check_circle" className="text-[16px]" />
<span>Upper &amp; lowercase</span>
</div>
<div className="flex items-center gap-1.5 font-label-sm text-label-sm text-tertiary" id="req-sym">
<Icon name="check_circle" className="text-[16px]" />
<span>Special symbol (!@#)</span>
</div>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface" htmlFor="confirm-pass">Confirm New Password</label>
<div className="flex items-center rounded-xl bg-surface-container-low px-space-md h-12 shadow-sm focus-within:bg-surface-container-lowest focus-within:shadow-md transition-all">
<Icon name="lock_reset" className="text-secondary text-[20px] mr-space-sm" />
<input className="w-full bg-transparent border-0 outline-none font-body-md text-body-md text-on-surface placeholder:text-secondary focus:ring-0 p-0" id="confirm-pass" placeholder="Re-type new password" type="password" value="SwiftCamp2024!" />
<button className="p-1 text-secondary hover:text-on-surface" type="button">
<Icon name="visibility" className="text-[20px]" />
</button>
</div>
</div>

<div className="flex items-center gap-space-sm p-space-sm rounded-xl bg-surface-container-low cursor-pointer">
<div className="w-5 h-5 rounded bg-primary-container flex items-center justify-center text-on-primary shrink-0 transition-colors" id="device-checkbox">
<Icon name="check" className="text-[16px]" />
</div>
<span className="font-body-sm text-body-sm text-on-surface leading-tight select-none">Sign out of all other browsers, phones, and tablets for security.</span>
</div>

<button className="w-full mt-space-sm h-12 rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-space-sm shadow-md active:scale-[0.98] transition-all hover:opacity-95" type="button">
<span>Reset Password &amp; Sign In</span>
<Icon name="login" className="text-[20px]" />
</button>
</section>

<div className="hidden flex-col items-center justify-center p-space-lg rounded-xl bg-surface-container-lowest shadow-xl text-center gap-space-sm animate-bounce" id="success-banner">
<div className="w-14 h-14 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-container shadow-sm">
<Icon name="task_alt" className="text-[32px]" />
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Password Updated!</h3>
<p className="font-body-sm text-body-sm text-secondary">Your credentials have been securely refreshed. Redirecting to your SwiftCart dashboard...</p>
</div>

<div className="flex flex-col items-center gap-space-sm mt-space-xl pt-space-md">
<a className="flex items-center gap-1 font-label-lg text-label-lg text-secondary hover:text-on-surface transition-colors py-2 px-space-md rounded-lg active:bg-surface-container" href="javascript:history.back()">
<Icon name="arrow_back" className="text-[18px]" />
<span>Back to Sign In</span>
</a>

<div className="flex items-center gap-1 text-secondary opacity-60">
<Icon name="lock" className="text-[14px]" />
<span className="font-label-sm text-label-sm uppercase tracking-wider">SwiftCart Kampala 256-bit SSL Gateway</span>
</div>
</div>
</div>
</main>
    </div>
  );
};

export default ForgotPasswordSwiftcartBuyer;
