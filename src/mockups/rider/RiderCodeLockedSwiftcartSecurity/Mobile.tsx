// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/rider/rider_code_locked_swiftcart_security/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface RiderCodeLockedSwiftcartSecurityProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const RiderCodeLockedSwiftcartSecurity: React.FC<RiderCodeLockedSwiftcartSecurityProps> = (props) => {
  const onNavigate = props.onNavigate;
  const onAction = props.onAction;
  void onNavigate;
  void onAction;
  void Icon;
  const { theme, toggleTheme } = useDashboardTheme();
  void theme;
  void toggleTheme;
  

  return (
    <div className="relative w-full overflow-x-hidden min-h-screen">
      
      <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><button type="button" className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 mr-2" aria-label="Toggle Theme" title="Toggle Theme" onClick={() => toggleTheme()}>{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}</button><div className="flex items-center gap-space-xs min-w-0"><button aria-label="Go back or close" className="w-11 h-11 -ml-1 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container transition-colors"><Icon name="arrow_back" className="text-[22px]" /></button><img alt="SwiftCart" className="h-8 w-auto object-contain flex-shrink-0" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col min-w-0 pl-1"><span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">SwiftCart Hub</span><h1 className="font-headline-sm text-headline-sm text-on-surface truncate leading-tight">Security Lockout</h1></div></div><div className="flex items-center gap-space-xs flex-shrink-0"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-safe bg-surface"><div className="flex flex-col w-full pb-8">

<div className="px-gutter pt-space-md">
<div className="bg-error-container rounded-xl p-space-md shadow-md flex items-start gap-space-md">
<div className="w-12 h-12 rounded-lg bg-error flex items-center justify-center flex-shrink-0 shadow-sm">
<Icon name="gpp_bad" className="text-on-error text-[28px]" />
</div>
<div className="flex flex-col min-w-0 flex-1">
<div className="flex items-center gap-space-xs">
<span className="bg-error text-on-error font-label-sm text-label-sm px-2 py-0.5 rounded-full uppercase tracking-wider">Protocol Violation</span>
<span className="font-label-sm text-label-sm text-on-error-container ml-auto font-bold">ATTEMPTS: 3/3</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-error-container leading-tight mt-1">DELIVERY CODE LOCKED</h2>
<p className="font-body-sm text-body-sm text-on-error-container opacity-90 mt-0.5">Security lock engaged after 3 consecutive invalid code attempts.</p>
</div>
</div>
</div>

<div className="px-gutter pt-space-sm">
<div className="bg-surface-container rounded-xl p-space-md shadow-sm">
<div className="flex items-center gap-space-xs mb-1">
<Icon name="shield_with_heart" className="text-primary text-[20px]" />
<span className="font-label-lg text-label-lg text-on-surface">Escrow &amp; Asset Protection Guard</span>
</div>
<p className="font-body-sm text-body-sm text-secondary leading-snug">
        Automated freeze triggered to protect buyer escrow funds of <span className="font-headline-sm text-headline-sm text-on-surface">UGX 248,500</span> and merchant inventory against unauthorized physical handover.
      </p>
<div className="mt-space-sm flex items-center gap-2 bg-surface-container-lowest rounded-lg p-2 shadow-sm">
<Icon name="verified_user" className="text-tertiary-container text-[18px]" />
<span className="font-label-sm text-label-sm text-on-surface">Payout locked until cryptographic or dispatch verification completes.</span>
</div>
</div>
</div>

<div className="px-gutter pt-space-sm">
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-md">
<div className="flex items-center justify-between pb-space-xs">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Incident Dossier</span>
<span className="bg-surface-container text-on-surface font-label-sm text-label-sm px-2 py-0.5 rounded">ID: #INC-88219</span>
</div>
<div className="grid grid-cols-2 gap-space-sm mt-space-xs">
<div className="bg-surface-container-low rounded-lg p-2.5">
<span className="font-label-sm text-label-sm text-secondary block">Order Tracking</span>
<span className="font-headline-sm text-headline-sm text-primary">#SC-ORD-9281</span>
</div>
<div className="bg-surface-container-low rounded-lg p-2.5">
<span className="font-label-sm text-label-sm text-secondary block">Lock Timestamp</span>
<span className="font-label-lg text-label-lg text-on-surface">14:48:12 EAT</span>
</div>
</div>
<div className="mt-space-xs bg-surface-container-low rounded-lg p-2.5 space-y-1.5">
<div className="flex items-center justify-between text-body-sm">
<span className="font-label-md text-label-md text-secondary">Package:</span>
<span className="font-label-lg text-label-lg text-on-surface truncate text-right">SoundCore Space One</span>
</div>
<div className="flex items-center justify-between text-body-sm">
<span className="font-label-md text-label-md text-secondary">Security Seal:</span>
<span className="font-label-sm text-label-sm bg-tertiary-container text-on-tertiary px-1.5 py-0.5 rounded font-bold">#SC-TB-4819 INTACT</span>
</div>
<div className="flex items-center justify-between text-body-sm">
<span className="font-label-md text-label-md text-secondary">Buyer Name:</span>
<span className="font-label-lg text-label-lg text-on-surface">Dennis Mukasa</span>
</div>
<div className="flex items-center justify-between text-body-sm">
<span className="font-label-md text-label-md text-secondary">Drop Location:</span>
<span className="font-body-sm text-body-sm text-on-surface font-semibold text-right truncate">Lugogo Forest Mall</span>
</div>
<div className="flex items-center justify-between text-body-sm">
<span className="font-label-md text-label-md text-secondary">Dispatched Node:</span>
<span className="font-body-sm text-body-sm text-secondary truncate">Kampala Central Boda Rail</span>
</div>
</div>
</div>
</div>

<div className="px-gutter pt-space-sm">
<div className="bg-surface-container rounded-xl p-space-md shadow-sm">
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs flex items-center gap-1.5">
<Icon name="checklist" className="text-primary text-[22px]" />
        Mandatory Protocol Checklist
      </h3>
<div className="space-y-space-xs">
<div className="flex items-start gap-space-sm bg-surface-container-lowest p- space-sm rounded-lg shadow-sm">
<div className="w-6 h-6 rounded-full bg-error text-on-error flex items-center justify-center font-label-md text-label-md flex-shrink-0 mt-0.5">1</div>
<div className="min-w-0">
<span className="font-label-lg text-label-lg text-error block">HALT HANDOVER IMMEDIATELY</span>
<p className="font-body-sm text-body-sm text-secondary leading-snug">Do NOT hand the package to buyer or third party without dynamic app unlock confirmation.</p>
</div>
</div>
<div className="flex items-start gap-space-sm bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
<div className="w-6 h-6 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-md text-label-md flex-shrink-0 mt-0.5">2</div>
<div className="min-w-0">
<span className="font-label-lg text-label-lg text-on-surface block">Stow Sealed Bag Securely</span>
<p className="font-body-sm text-body-sm text-secondary leading-snug">Place item back into top courier lock-box. Verify tamper seal remains uncompromised.</p>
</div>
</div>
<div className="flex items-start gap-space-sm bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
<div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-md text-label-md flex-shrink-0 mt-0.5">3</div>
<div className="min-w-0">
<span className="font-label-lg text-label-lg text-on-surface block">Contact SwiftCart Dispatch</span>
<p className="font-body-sm text-body-sm text-secondary leading-snug">Dispatch will authenticate the buyer on recorded lines or release a Super Admin OTP override.</p>
</div>
</div>
</div>
</div>
</div>

<div className="px-gutter pt-space-md space-y-space-xs">

<a className="w-full min-h-[54px] bg-primary text-on-primary rounded-xl px-gutter flex items-center justify-center gap-space-sm shadow-md active:scale-[0.98] transition-transform" href="tel:0800220800">
<Icon name="call" className="text-[24px]" />
<span className="font-label-lg text-label-lg tracking-wide">Call Dispatch Operations (0800 220 800)</span>
</a>

<a className="w-full min-h-[50px] bg-surface-container-highest text-on-surface rounded-xl px-gutter flex items-center justify-center gap-space-sm shadow-sm active:bg-surface-dim transition-colors" href="https://wa.me/256700123456?text=URGENT%20Escrow%20Lock%20Order%20SC-ORD-9281" rel="noopener noreferrer" target="_blank">
<Icon name="chat" className="text-tertiary text-[22px]" />
<span className="font-label-lg text-label-lg">WhatsApp Dispatch Support Desk</span>
</a>

<button className="w-full min-h-[46px] bg-surface-container-low text-on-surface rounded-xl px-gutter flex items-center justify-center gap-space-xs active:bg-surface-container transition-colors" id="resend-link-btn">
<Icon name="send_to_mobile" className="text-primary text-[20px]" />
<span className="font-label-md text-label-md">SMS Buyer New Re-Verification Link</span>
</button>
</div>

<div className="px-gutter pt-space-md">
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
<button className="w-full p-space-md flex items-center justify-between text-left active:bg-surface-container-low transition-colors">
<div className="flex items-center gap-space-xs">
<Icon name="admin_panel_settings" className="text-secondary text-[20px]" />
<span className="font-label-lg text-label-lg text-on-surface">Supervisor Emergency Override Token</span>
</div>
<Icon name="expand_more" className="text-secondary transition-transform duration-200" />
</button>
<div className="hidden px-space-md pb-space-md pt-0" id="accordion-body">
<div className="bg-surface-container-low p-space-sm rounded-lg mb-space-sm">
<p className="font-body-sm text-body-sm text-secondary">
            Authorized for Regional Hub Leads or Tier-3 Dispatchers only. All override attempts log rider geolocation and operator ID.
          </p>
</div>
<div className="flex gap-2 mb-space-sm">
<input className="flex-1 min-h-[44px] bg-surface rounded-lg px-3 text-center font-headline-sm text-headline-sm tracking-widest text-on-surface outline-none focus:bg-surface-container-lowest" id="override-token-input" inputMode="numeric" maxLength={6} placeholder="000000" type="text" />
<button className="min-h-[44px] px-space-md bg-secondary text-on-secondary rounded-lg font-label-md text-label-md active:bg-on-surface transition-colors flex items-center justify-center">
            Unlock
          </button>
</div>
<div className="hidden font-label-sm text-label-sm text-error" id="token-feedback"></div>
</div>
</div>
</div>

<div className="px-gutter pt-space-md pb-space-md text-center">
<button className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary underline underline-offset-4 active:opacity-75">
<Icon name="keyboard_return" className="text-[16px]" />
      Initiate Return to William St Hub if Buyer Leaves
    </button>
<p className="font-body-sm text-body-sm text-secondary mt-1">Order will be tagged as Unclaimed Security Hold (No rider rating penalty).</p>
</div>
</div>
</main>
    </div>
  );
};

export default RiderCodeLockedSwiftcartSecurity;
