// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/rider/deliveries_swiftcart_rider/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface DeliveriesSwiftcartRiderProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const DeliveriesSwiftcartRider: React.FC<DeliveriesSwiftcartRiderProps> = (props) => {
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
      
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-sm min-w-0"><img alt="SwiftCart" className="h-8 w-auto object-contain flex-shrink-0" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col min-w-0"><span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider truncate">SwiftCart Rider</span><h1 className="font-headline-sm text-headline-sm text-on-surface font-bold leading-none truncate">Deliveries</h1></div></div><div className="flex items-center gap-space-xs"><button aria-label="Toggle Online Status" className="min-h-[44px] px-space-md py-space-xs rounded-full bg-surface-container-high flex items-center gap-space-xs hover:bg-surface-container-highest transition-colors" type="button"><span className="h-3 w-3 rounded-full bg-tertiary-container shadow-[0_0_8px_rgba(0,165,114,0.6)] animate-pulse"></span><span className="font-label-md text-label-md text-on-surface font-bold">ONLINE</span></button><button aria-label="Notifications" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors relative" type="button"><Icon name="notifications" className="text-[24px]" /><span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-primary-container ring-2 ring-surface"></span></button><button aria-label="Toggle Dark/Light Mode" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" type="button" onClick={() => toggleTheme()}><Icon name="light_mode" className="text-[22px]" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0"><span className="font-label-md font-bold text-on-primary leading-none">KB</span></div></div></div></header>
<main className="flex-1 w-full bg-surface pt-16 pb-24 px-margin"><div className="flex flex-col w-full pb-6 space-y-space-md">

<div className="flex items-center gap-space-xs overflow-x-auto no-scrollbar py-space-xs -mx-margin px-margin">
<button className="flex items-center gap-1.5 px-space-md py-space-xs rounded-full bg-primary-container text-on-primary font-label-md text-label-md whitespace-nowrap shadow-sm" type="button">
<span className="">Assigned (1)</span>
<span className="w-1.5 h-1.5 rounded-full bg-on-primary"></span>
</button>
<button className="flex items-center gap-1.5 px-space-md py-space-xs rounded-full bg-surface-container-high text-on-surface-variant font-label-md text-label-md whitespace-nowrap" type="button">
<span className="">In Progress (1)</span>
</button>
<button className="flex items-center gap-1.5 px-space-md py-space-xs rounded-full bg-surface-container-high text-on-surface-variant font-label-md text-label-md whitespace-nowrap" type="button">
<span className="">Completed (14)</span>
</button>
<button className="flex items-center gap-1.5 px-space-md py-space-xs rounded-full bg-surface-container-high text-on-surface-variant font-label-md text-label-md whitespace-nowrap" type="button">
<span className="">Failed (0)</span>
</button>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm uppercase tracking-wider">Order</span>
<span className="font-headline-sm text-headline-sm font-bold text-on-surface">#SC-ORD-9281</span>
</div>
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant">
<span className="w-2 h-2 rounded-full bg-primary-container animate-ping"></span>
<span className="font-label-sm text-label-sm uppercase tracking-wide">Out for Delivery</span>
</div>
</div>

<div className="pt-1">
<div className="grid grid-cols-4 gap-1 relative">
<div className="flex flex-col items-center text-center">
<div className="w-7 h-7 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center shadow-sm">
<Icon name="check" className="text-[16px]" />
</div>
<span className="font-label-sm text-label-sm text-tertiary font-bold mt-1.5 line-clamp-1">Assigned</span>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-7 h-7 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center shadow-sm">
<Icon name="check" className="text-[16px]" />
</div>
<span className="font-label-sm text-label-sm text-tertiary font-bold mt-1.5 line-clamp-1">Picked Up</span>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-7 h-7 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-md relative">
<span className="w-2 h-2 rounded-full bg-surface-container-lowest animate-pulse"></span>
</div>
<span className="font-label-sm text-label-sm text-primary font-bold mt-1.5 line-clamp-1">In Transit</span>
</div>
<div className="flex flex-col items-center text-center opacity-45">
<div className="w-7 h-7 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center">
<Icon name="key" className="text-[16px]" />
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold mt-1.5 line-clamp-1">Delivered</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-md">

<div className="flex gap-space-sm items-start">
<div className="w-8 h-8 rounded-full bg-surface-container-high text-tertiary flex items-center justify-center flex-shrink-0 mt-0.5">
<Icon name="storefront" className="text-[18px]" />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">Pickup (Completed 14:15)</span>
<span className="inline-flex items-center gap-0.5 text-tertiary font-label-sm text-label-sm font-bold">
<Icon name="verified" className="text-[14px]" /> Verified
          </span>
</div>
<p className="font-label-lg text-label-lg font-bold text-on-surface truncate">SoundCore Uganda Official</p>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Pioneer Mall, Shop #14 Nakasero, Kampala</p>
</div>
</div>

<div className="bg-surface-container-low rounded-lg p-space-md space-y-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
<span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">Current Destination</span>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm font-semibold">1.4 km away</span>
</div>
<div>
<p className="font-headline-sm text-headline-sm font-bold text-on-surface">Dennis Mukasa</p>
<p className="font-body-md text-body-md text-on-surface font-semibold mt-0.5">Plot 14 Forest Mall, Level 2</p>
<p className="font-body-sm text-body-sm text-secondary">Lugogo Bypass, Nakawa Division, Kampala</p>
</div>

<div className="grid grid-cols-2 gap-space-xs pt-1">
<a className="h-11 rounded-lg bg-surface-container-highest text-on-surface flex items-center justify-center gap-1.5 font-label-lg text-label-lg active:scale-95 transition-transform" href="tel:+256702449812">
<Icon name="call" className="text-[20px] text-tertiary" />
<span className="">Call Buyer</span>
</a>
<a className="h-11 rounded-lg bg-surface-container-highest text-on-surface flex items-center justify-center gap-1.5 font-label-lg text-label-lg active:scale-95 transition-transform" href="#">
<Icon name="navigation" className="text-[20px] text-primary" />
<span className="">Maps Route</span>
</a>
</div>
</div>

<div className="relative rounded-lg overflow-hidden shadow-sm">
<div className="w-full h-36 bg-cover bg-center" data-location="Forest Mall, Lugogo Bypass, Kampala, Uganda" style={{"backgroundImage":"url('/images/f4833cf985d1f411.webp')"}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent flex items-end p-space-sm justify-between">
<div className="text-inverse-on-surface">
<p className="font-label-sm text-label-sm opacity-80">Estimated Transit</p>
<p className="font-label-lg text-label-lg font-bold">~6 mins • Light Traffic</p>
</div>
<span className="px-2 py-1 rounded bg-inverse-surface/90 text-inverse-on-surface font-label-sm text-label-sm flex items-center gap-1">
<Icon name="local_shipping" className="text-[14px]" /> Boda Rush
        </span>
</div>
</div>

<div className="bg-surface-container rounded-lg p-space-sm space-y-space-xs">
<div className="flex items-start gap-space-xs">
<img className="w-12 h-12 rounded object-cover flex-shrink-0" data-alt="Close-up commercial packaging of matte black SoundCore Space One wireless over-ear noise-cancelling headphones resting on safety bubble wrap in a logistics delivery hub." src="/images/d2ff2e86e5c21b85.webp" />
<div className="flex-1 min-w-0">
<p className="font-label-md text-label-md font-bold text-on-surface truncate">1x SoundCore Space One Wireless</p>
<p className="font-body-sm text-body-sm text-secondary truncate">Package ID: <span className="font-mono text-on-surface font-semibold">#SC-TB-4819</span></p>
<span className="inline-block mt-0.5 px-1.5 py-0.2 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm">Delivery Confirmed by Customer Code</span>
</div>
</div>
<div className="pt-2 flex items-center justify-between">
<div>
<span className="font-label-sm text-label-sm text-secondary">Fee Payout</span>
<p className="font-headline-sm text-headline-sm font-bold text-tertiary">UGX 6,500</p>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-secondary">Order Settlement</span>
<p className="font-label-md text-label-md font-bold text-on-surface flex items-center justify-end gap-1">
<Icon name="payments" className="text-[16px] text-tertiary" /> Prepaid MoMo (0 Cash)
          </p>
</div>
</div>
</div>
</div>

<div className="bg-inverse-surface text-inverse-on-surface rounded-xl p-space-md shadow-md space-y-space-md">
<div className="flex items-start gap-space-xs">
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center flex-shrink-0 mt-0.5">
<Icon name="shield_person" className="text-[18px]" />
</div>
<div>
<h2 className="font-label-lg text-label-lg font-bold">Customer 6-Digit Delivery Code</h2>
<p className="font-body-sm text-body-sm opacity-80 mt-0.5">Ask customer for the 6-digit delivery code from their order confirmation.</p>
</div>
</div>

<div className="space-y-space-xs">
<div className="grid grid-cols-6 gap-1.5">
<input className="h-13 py-3 text-center font-headline-md text-headline-md font-bold bg-surface/15 text-inverse-on-surface rounded-lg focus:outline-none" maxLength={1} readOnly={true} type="text" value="8" />
<input className="h-13 py-3 text-center font-headline-md text-headline-md font-bold bg-surface/15 text-inverse-on-surface rounded-lg focus:outline-none" maxLength={1} readOnly={true} type="text" value="4" />
<input className="h-13 py-3 text-center font-headline-md text-headline-md font-bold bg-surface/15 text-inverse-on-surface rounded-lg focus:outline-none" maxLength={1} readOnly={true} type="text" value="9" />
<input className="h-13 py-3 text-center font-headline-md text-headline-md font-bold bg-surface/15 text-inverse-on-surface rounded-lg focus:outline-none" maxLength={1} readOnly={true} type="text" value="2" />
<input className="h-13 py-3 text-center font-headline-md text-headline-md font-bold bg-surface/25 text-inverse-on-surface rounded-lg placeholder-surface-variant focus:outline-none focus:bg-primary-container focus:text-on-primary" id="otp-digit-5" maxLength={1} placeholder="•" type="tel" />
<input className="h-13 py-3 text-center font-headline-md text-headline-md font-bold bg-surface/25 text-inverse-on-surface rounded-lg placeholder-surface-variant focus:outline-none focus:bg-primary-container focus:text-on-primary" id="otp-digit-6" maxLength={1} placeholder="•" type="tel" />
</div>
<div className="flex items-center justify-between pt-1">
<span className="font-label-sm text-label-sm text-primary-fixed-dim font-bold flex items-center gap-1">
<Icon name="lock_clock" className="text-[14px]" /> 2 attempts left
        </span>
<button className="font-label-sm text-label-sm text-surface-variant hover:text-surface-bright underline active:opacity-75" id="btn-request-sms" type="button">Resend SMS to Dennis</button>
</div>
</div>

<div className="p-space-sm rounded-lg bg-surface/10 flex items-start gap-space-xs">
<Icon name="info" className="text-[18px] text-tertiary-fixed-dim flex-shrink-0 mt-0.5" />
<p className="font-body-sm text-body-sm opacity-90 leading-tight">Customer received this code via SMS and in their SwiftCart order details.</p>
</div>
</div>

<div className="space-y-space-xs pt-1">

<button className="w-full h-[52px] rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-space-xs shadow-md active:scale-98 transition-transform" id="btn-confirm-handover" type="button"><Icon name="task_alt" className="text-[20px]" /><span className="">Confirm Handover &amp; Complete Delivery</span></button>

<div className="grid grid-cols-2 gap-space-xs">
<button className="h-[52px] px-2 rounded-xl bg-surface-container-high text-on-surface font-label-md text-label-md font-bold flex items-center justify-center gap-1 text-center leading-tight active:scale-95 transition-transform" id="btn-trigger-failed" type="button">
<Icon name="cancel" className="text-[18px] text-error" />
<span className="">Failed Delivery</span>
</button>
<button className="h-[52px] px-2 rounded-xl bg-surface-container-high text-on-surface font-label-md text-label-md font-bold flex items-center justify-center gap-1 text-center leading-tight active:scale-95 transition-transform" id="btn-trigger-support" type="button">
<Icon name="support_agent" className="text-[18px] text-secondary" />
<span className="">Rider Support</span>
</button>
</div>
</div>

<div className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm hidden flex-col justify-end" id="failed-modal">
<div className="bg-surface rounded-t-2xl p-space-md space-y-space-md max-w-lg mx-auto w-full shadow-2xl">
<div className="flex items-center justify-between">
<div>
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Mark Delivery Unsuccessful</h3>
<p className="font-body-sm text-body-sm text-secondary">Select primary reason for dispatch audit</p>
</div>
<button className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center" id="btn-close-failed-modal" type="button">
<Icon name="close" className="text-[18px]" />
</button>
</div>
<div className="space-y-space-xs">
<label className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low cursor-pointer">
<span className="font-label-md text-label-md text-on-surface">Customer phone switched off / unanswered (3x calls)</span>
<input checked={true} className="w-4 h-4 text-primary" name="failed_reason" type="radio" />
</label>
<label className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low cursor-pointer">
<span className="font-label-md text-label-md text-on-surface">Customer rejected package (Seal questioned)</span>
<input className="w-4 h-4 text-primary" name="failed_reason" type="radio" />
</label>
<label className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low cursor-pointer">
<span className="font-label-md text-label-md text-on-surface">Wrong drop-off location / Inaccessible security gate</span>
<input className="w-4 h-4 text-primary" name="failed_reason" type="radio" />
</label>
</div>
<button className="w-full h-12 rounded-xl bg-error text-on-error font-label-lg text-label-lg font-bold flex items-center justify-center gap-1.5" id="btn-submit-failed" type="button">
<Icon name="assignment_late" className="text-[18px]" />
<span className="">Initiate Return to Merchant</span>
</button>
</div>
</div>


</div></main>
<nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-1px_12px_rgba(0,0,0,0.06)]" data-active-classes="text-primary-container bg-surface-container-high font-bold"><div className="flex items-center justify-around h-20 px-space-xs max-w-lg mx-auto"><a className="flex-1 flex flex-col items-center justify-center min-h-[48px] py-space-xs rounded-xl text-on-surface-variant hover:text-on-surface transition-all" data-path="overview" href="#"><Icon name="dashboard" className="text-[26px]" /><span className="font-label-md text-label-md mt-0.5">Overview</span></a><a aria-current="page" className="flex-1 flex flex-col items-center justify-center min-h-[48px] py-space-xs rounded-xl transition-all text-primary-container bg-surface-container-high font-bold" data-path="deliveries" href="#"><Icon name="package_2" className="text-[26px]" /><span className="font-label-md text-label-md mt-0.5">Deliveries</span></a><a className="flex-1 flex flex-col items-center justify-center min-h-[48px] py-space-xs rounded-xl text-on-surface-variant hover:text-on-surface transition-all" data-path="rider-map" href="#"><Icon name="location_on" className="text-[26px]" /><span className="font-label-md text-label-md mt-0.5">Map</span></a><a className="flex-1 flex flex-col items-center justify-center min-h-[48px] py-space-xs rounded-xl text-on-surface-variant hover:text-on-surface transition-all" data-path="earnings" href="#"><Icon name="account_balance_wallet" className="text-[26px]" /><span className="font-label-md text-label-md mt-0.5">Earnings</span></a><a className="flex-1 flex flex-col items-center justify-center min-h-[48px] py-space-xs rounded-xl text-on-surface-variant hover:text-on-surface transition-all" data-path="profile" href="#"><Icon name="person" className="text-[26px]" /><span className="font-label-md text-label-md mt-0.5">Profile</span></a></div></nav>
    </div>
  );
};

export default DeliveriesSwiftcartRider;
