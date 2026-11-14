// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/rider/overview_swiftcart_rider_dark/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface OverviewSwiftcartRiderDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const OverviewSwiftcartRiderDark: React.FC<OverviewSwiftcartRiderDarkProps> = (props) => {
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
      
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/85 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.45)]"><div className="h-16 px-margin flex items-center justify-between"><button type="button" className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 mr-2" aria-label="Toggle Theme" title="Toggle Theme" onClick={() => toggleTheme()}>{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}</button><div className="flex items-center gap-space-sm"><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col"><div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-escrow animate-pulse"></span><span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary">Live Ops • Overview • Kampala Central</span></div><h1 className="font-headline-sm text-headline-sm text-on-surface leading-tight tracking-tight">Fleet Dispatch</h1></div></div><div className="flex items-center gap-space-xs"><button className="w-11 h-11 flex items-center justify-center rounded-xl bg-surface-container-low text-on-surface-variant hover:text-on-surface"><Icon name="sync_alt" className="text-[20px]" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_2px_8px_rgba(255,181,161,0.25)]"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex flex-col relative w-full pt-16 pb-24 bg-surface min-h-screen"><div className="flex flex-col w-full px-margin pb-space-xl space-y-space-md">

<div className="w-full flex items-center justify-between bg-surface-container-low px-space-md py-space-xs rounded-xl shadow-sm">
<div className="flex items-center gap-space-xs">
<span className="w-2.5 h-2.5 rounded-full bg-emerald-escrow animate-ping"></span>
<span className="w-2.5 h-2.5 rounded-full bg-emerald-escrow -ml-3"></span>
<span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider">GPS &amp; Telematics Synced</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
<Icon name="battery_charging_full" className="text-[14px]" />
<span>92%</span>
<span className="mx-1">•</span>
<Icon name="signal_cellular_alt" className="text-[14px]" />
<span>4G Kampala</span>
</div>
</div>

<section className="bg-surface-container-low rounded-xl p-space-md shadow-md flex items-center justify-between">
<div className="flex items-center gap-space-sm min-w-0">
<div className="relative w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container font-headline-sm text-headline-sm shadow-inner flex-shrink-0">
        KB
        <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-tertiary rounded-full border-0"></span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5 truncate">
<span className="font-headline-sm text-headline-sm text-on-surface truncate">Kizito Brian</span>
<span className="bg-surface-container-high px-1.5 py-0.5 rounded text-on-surface-variant font-label-sm text-label-sm">#RDR-UG-4082</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm truncate">
<span>Bajaj Boxer UEF 842X</span>
<span>•</span>
<div className="flex items-center gap-0.5 text-amber-warning">
<Icon name="star" className="text-[14px]" />
<span className="font-label-sm text-label-sm text-on-surface">4.95</span>
<span className="text-on-surface-variant text-label-sm font-label-sm">(1,420)</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col items-end flex-shrink-0 pl-space-xs">
<label className="relative inline-flex items-center cursor-pointer select-none">
<input checked={true} className="sr-only peer" id="duty-toggle" type="checkbox" />
<div className="w-12 h-7 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-on-primary-container after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-tertiary-container shadow-inner"></div>
</label>
<span className="font-label-sm text-label-sm text-tertiary mt-1 font-bold">ONLINE</span>
</div>
</section>

<section className="grid grid-cols-2 gap-space-sm w-full">

<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between shadow-sm relative overflow-hidden">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Today's Earnings</span>
<Icon name="payments" className="text-[18px] text-tertiary" />
</div>
<div className="my-space-xs">
<span className="font-headline-md text-headline-md text-tertiary font-extrabold tracking-tight">UGX 82,500</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
<span>Instant Payout Ready</span>
</div>
<div className="absolute -right-4 -bottom-4 w-16 h-16 bg-tertiary/5 rounded-full pointer-events-none"></div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between shadow-sm">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Completed</span>
<Icon name="two_wheeler" className="text-[18px] text-secondary" />
</div>
<div className="my-space-xs flex items-baseline gap-1">
<span className="font-headline-md text-headline-md text-on-surface font-extrabold">11</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Trips</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
<Icon name="trending_up" className="text-[13px] text-emerald-escrow" />
<span>Target: 14 today</span>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between shadow-sm col-span-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<Icon name="shield_lock" className="text-[18px] text-amber-warning" />
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">In-Hand Courier Escrow</span>
</div>
<span className="bg-secondary-container/60 text-secondary font-label-sm text-label-sm px-2 py-0.5 rounded-full">Boxer Bag #04</span>
</div>
<div className="flex items-baseline justify-between mt-space-xs mb-1">
<span className="font-price-display text-price-display text-on-surface tracking-tight">UGX 1,410,000</span>
<span className="text-tertiary font-label-md text-label-md bg-on-tertiary px-2 py-0.5 rounded">1 Item Active</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
        Custody liability covered under SwiftCart Transit Shield Guarantee.
      </p>
</div>
</section>

<section className="bg-surface-container-low rounded-xl p-space-md shadow-xl flex flex-col space-y-space-md">

<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm animate-pulse">
          IN ROUTE
        </span>
<span className="font-code-display text-code-display text-on-surface-variant text-[14px]">#SC-ORD-9281</span>
</div>
<div className="flex items-center gap-1 bg-surface-container-high px-2 py-0.5 rounded text-tertiary font-label-sm text-label-sm">
<Icon name="lock" className="text-[14px]" />
<span>Escrow Locked</span>
</div>
</div>

<div className="bg-surface-container rounded-xl p-space-md flex flex-col space-y-space-md">

<div className="flex items-start gap-space-sm">
<div className="flex flex-col items-center flex-shrink-0">
<div className="w-6 h-6 rounded-full bg-secondary-container text-secondary flex items-center justify-center">
<Icon name="storefront" className="text-[14px]" />
</div>
<div className="w-0.5 h-7 bg-surface-container-high my-1"></div>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Pickup Completed</span>
<span className="font-label-lg text-label-lg text-on-surface truncate">SoundCore Uganda Official</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Pioneer Mall Stall G-14, Central</span>
</div>
</div>

<div className="flex items-start gap-space-sm">
<div className="flex flex-col items-center flex-shrink-0">
<div className="w-6 h-6 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shadow-[0_0_10px_rgba(218,55,0,0.5)]">
<Icon name="sports_motorsports" className="text-[14px]" />
</div>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-primary uppercase font-bold">Delivery Destination</span>
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface truncate">Dennis Mukasa</span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-mono">07•• ••• 419</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Plot 14 Forest Mall, Lugogo Bypass</span>
</div>
</div>
</div>

<div className="flex items-center justify-between bg-surface-container-high/60 px-space-md py-space-xs rounded-xl">
<div className="flex items-center gap-2 min-w-0">
<Icon name="headphones" className="text-[18px] text-primary" />
<span className="font-body-md text-body-md text-on-surface truncate">SoundCore Space One ANC (Jet Black)</span>
</div>
<span className="font-label-md text-label-md text-tertiary flex-shrink-0">UGX 440,000</span>
</div>

<div className="w-full h-32 rounded-xl bg-surface-container bg-cover bg-center relative overflow-hidden shadow-inner" data-location="Forest Mall, Lugogo Bypass, Kampala, Uganda" style={{"backgroundImage":"url('/images/27895dd622ebce7d.webp')"}}>
<div className="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-surface-dark/20 to-transparent flex items-end p-space-sm justify-between">
<div className="flex items-center gap-1.5 text-on-surface bg-surface-container-low/90 backdrop-blur-md px-2.5 py-1 rounded-lg">
<Icon name="navigation" className="text-[16px] text-primary" />
<span className="font-label-sm text-label-sm">2.4 km remaining (6 mins)</span>
</div>
<button aria-label="Open Navigation" className="bg-primary text-on-primary p-1.5 rounded-lg flex items-center justify-center shadow-lg active:scale-95 transition-transform" type="button">
<Icon name="turn_right" className="text-[18px]" />
</button>
</div>
</div>

<div className="bg-surface-container p-space-md rounded-xl flex flex-col items-center space-y-space-sm">
<div className="w-full flex items-center justify-between">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider flex items-center gap-1" htmlFor="otp-1">
<Icon name="dialpad" className="text-[15px] text-tertiary" />
          Customer 6-Digit Handover Code
        </label>
<span className="font-label-sm text-label-sm text-on-surface-variant">Ask Dennis Mukasa</span>
</div>

<div className="flex items-center justify-center gap-2 w-full pt-1" id="otp-container">
<input className="otp-box w-11 h-14 bg-surface-container-high text-on-surface font-code-display text-code-display text-center rounded-xl focus:bg-surface-variant focus:outline-none focus:ring-0 select-none shadow-inner" id="otp-1" inputMode="numeric" maxLength={1} pattern="[0-9]*" placeholder="-" type="text" />
<input className="otp-box w-11 h-14 bg-surface-container-high text-on-surface font-code-display text-code-display text-center rounded-xl focus:bg-surface-variant focus:outline-none focus:ring-0 select-none shadow-inner" inputMode="numeric" maxLength={1} pattern="[0-9]*" placeholder="-" type="text" />
<input className="otp-box w-11 h-14 bg-surface-container-high text-on-surface font-code-display text-code-display text-center rounded-xl focus:bg-surface-variant focus:outline-none focus:ring-0 select-none shadow-inner" inputMode="numeric" maxLength={1} pattern="[0-9]*" placeholder="-" type="text" />
<input className="otp-box w-11 h-14 bg-surface-container-high text-on-surface font-code-display text-code-display text-center rounded-xl focus:bg-surface-variant focus:outline-none focus:ring-0 select-none shadow-inner" inputMode="numeric" maxLength={1} pattern="[0-9]*" placeholder="-" type="text" />
<input className="otp-box w-11 h-14 bg-surface-container-high text-on-surface font-code-display text-code-display text-center rounded-xl focus:bg-surface-variant focus:outline-none focus:ring-0 select-none shadow-inner" inputMode="numeric" maxLength={1} pattern="[0-9]*" placeholder="-" type="text" />
<input className="otp-box w-11 h-14 bg-surface-container-high text-on-surface font-code-display text-code-display text-center rounded-xl focus:bg-surface-variant focus:outline-none focus:ring-0 select-none shadow-inner" inputMode="numeric" maxLength={1} pattern="[0-9]*" placeholder="-" type="text" />
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant text-center pt-1">
        Entering valid OTP instantly credits your wallet and completes the run.
      </p>
</div>

<button className="w-full h-[52px] bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-lg text-label-lg rounded-xl shadow-[0_4px_18px_rgba(218,55,0,0.35)] active:scale-[0.98] transition-all flex items-center justify-center gap-2" id="release-btn" type="button">
<Icon name="check_circle" className="text-[20px]" />
      Enter Customer Code &amp; Release Escrow
    </button>

<div className="grid grid-cols-2 gap-space-sm pt-1">
<a className="h-12 bg-surface-container-high text-on-surface font-label-md text-label-md rounded-xl flex items-center justify-center gap-2 active:bg-surface-variant transition-colors shadow-sm" href="tel:0700000000">
<Icon name="call" className="text-[18px] text-tertiary" />
        Call Customer
      </a>
<button className="h-12 bg-surface-container-high text-on-surface font-label-md text-label-md rounded-xl flex items-center justify-center gap-2 active:bg-surface-variant transition-colors shadow-sm" type="button">
<Icon name="directions" className="text-[18px] text-primary" />
        Navigate Map
      </button>
</div>
</section>

<section className="space-y-space-xs">
<div className="px-space-xs">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Rider Shortcuts</h2>
</div>
<div className="grid grid-cols-2 gap-space-sm">

<a className="bg-surface-container-low p-space-md rounded-xl flex items-center gap-space-sm active:bg-surface-container shadow-sm transition-colors" href="#">
<div className="w-10 h-10 rounded-xl bg-secondary-container/50 text-secondary flex items-center justify-center flex-shrink-0">
<Icon name="map" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">Route Map</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Lugogo corridor</span>
</div>
</a>

<a className="bg-surface-container-low p-space-md rounded-xl flex items-center gap-space-sm active:bg-surface-container shadow-sm transition-colors" href="#">
<div className="w-10 h-10 rounded-xl bg-tertiary-container/40 text-tertiary flex items-center justify-center flex-shrink-0">
<Icon name="account_balance_wallet" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">Earnings History</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">UGX 412,000 wk</span>
</div>
</a>

<a className="bg-surface-container-low p-space-md rounded-xl flex items-center gap-space-sm active:bg-surface-container shadow-sm transition-colors" href="#">
<div className="w-10 h-10 rounded-xl bg-surface-container-high text-primary flex items-center justify-center flex-shrink-0">
<Icon name="inventory_2" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">Bag Manifest</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">1 Active Item</span>
</div>
</a>

<a className="bg-surface-container-low p-space-md rounded-xl flex items-center gap-space-sm active:bg-surface-container shadow-sm transition-colors" href="#">
<div className="w-10 h-10 rounded-xl bg-error-container/30 text-error flex items-center justify-center flex-shrink-0">
<Icon name="support_agent" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">Support Dispatch</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Direct line</span>
</div>
</a>
</div>
</section>


</div></main>
<nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_-6px_24px_rgba(0,0,0,0.60)]" data-active-classes="text-primary-container font-label-md"><div className="h-16 px-gutter flex items-center justify-around"><a className="flex flex-col items-center justify-center w-16 h-12 text-on-surface-variant hover:text-on-surface" data-path="manifest-runs" href="#"><Icon name="local_shipping" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight mt-0.5">Manifest</span></a><a className="flex flex-col items-center justify-center w-16 h-12 text-on-surface-variant hover:text-on-surface" data-path="hub-scanner" href="#"><Icon name="barcode_scanner" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight mt-0.5">Scanner</span></a><a className="flex flex-col items-center justify-center w-16 h-12 text-on-surface-variant hover:text-on-surface" data-path="escrow-ledger" href="#"><Icon name="verified_user" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight mt-0.5">Escrow</span></a><a aria-current="page" className="flex flex-col items-center justify-center w-16 h-12 text-primary-container font-label-md" data-path="fleet-dispatch" href="#"><Icon name="two_wheeler" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight mt-0.5">Fleet</span></a><a className="flex flex-col items-center justify-center w-16 h-12 text-on-surface-variant hover:text-on-surface" data-path="profile-ops" href="#"><Icon name="manage_accounts" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight mt-0.5">Profile</span></a></div></nav>
    </div>
  );
};

export default OverviewSwiftcartRiderDark;
