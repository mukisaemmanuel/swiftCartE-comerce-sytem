// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/admin/riders_couriers_swiftcart_admin/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface RidersCouriersSwiftcartAdminProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const RidersCouriersSwiftcartAdmin: React.FC<RidersCouriersSwiftcartAdminProps> = (props) => {
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
      
      <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><button type="button" className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 mr-2" aria-label="Toggle Theme" title="Toggle Theme" onClick={() => toggleTheme()}>{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}</button><div className="flex items-center gap-space-xs"><button className="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors active:scale-95 text-on-surface" type="button"><Icon name="arrow_back" className="text-[24px]" /></button><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/swiftcart-logo-icon.png" /><h1 className="font-headline-sm text-headline-sm text-on-surface tracking-tight truncate max-w-[170px]">Riders (Couriers)</h1></div><div className="flex items-center gap-space-xs"><button className="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant" type="button"><Icon name="routine" className="text-[20px]" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-safe bg-surface"><div className="flex-1 w-full px-margin pt-space-md pb-space-lg"><div className="flex flex-col w-full gap-space-md">

<section className="w-full bg-surface-container rounded-xl p-space-md shadow-sm">
<div className="flex items-center justify-between mb-space-sm">
<div className="flex items-center gap-space-xs">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-tertiary"></span>
</span>
<span className="font-label-md text-label-md text-on-surface">Kampala Fleet Hub</span>
</div>
<span className="font-label-sm text-label-sm text-secondary bg-surface-container-high px-2 py-0.5 rounded-full">Telemetry: 1.2s ping</span>
</div>

<div className="grid grid-cols-2 gap-space-xs">
<div className="bg-surface-container-lowest p-space-sm rounded-lg flex items-center gap-space-sm shadow-sm">
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<Icon name="two_wheeler" className="text-[18px]" />
</div>
<div className="min-w-0">
<p className="font-price-display text-price-display text-on-surface leading-tight">86</p>
<p className="font-label-sm text-label-sm text-secondary truncate">Registered Riders</p>
</div>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded-lg flex items-center gap-space-sm shadow-sm">
<div className="w-8 h-8 rounded-lg bg-tertiary-container/20 flex items-center justify-center text-tertiary">
<Icon name="sensors" className="text-[18px]" />
</div>
<div className="min-w-0">
<p className="font-price-display text-price-display text-tertiary leading-tight">54</p>
<p className="font-label-sm text-label-sm text-secondary truncate">Live Online</p>
</div>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded-lg flex items-center gap-space-sm shadow-sm">
<div className="w-8 h-8 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary">
<Icon name="electric_moped" className="text-[18px]" />
</div>
<div className="min-w-0">
<p className="font-price-display text-price-display text-primary leading-tight">18</p>
<p className="font-label-sm text-label-sm text-secondary truncate">Active Deliveries</p>
</div>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded-lg flex items-center gap-space-sm shadow-sm">
<div className="w-8 h-8 rounded-lg bg-tertiary-fixed-dim/40 flex items-center justify-center text-tertiary">
<Icon name="verified" className="text-[18px]" />
</div>
<div className="min-w-0">
<p className="font-price-display text-price-display text-on-surface leading-tight">99.1%</p>
<p className="font-label-sm text-label-sm text-secondary truncate">Fleet Success</p>
</div>
</div>
</div>
</section>

<div className="w-full overflow-x-auto -mx-margin px-margin scrollbar-none">
<div className="flex items-center gap-space-xs w-max py-0.5">
<button className="rider-filter px-3 py-1.5 rounded-full bg-inverse-surface text-inverse-on-surface font-label-md text-label-md shadow-sm active:scale-95 transition-transform flex items-center gap-1.5" type="button">
<span>All</span>
<span className="bg-surface/20 text-inverse-on-surface px-1.5 py-0.2 rounded-full font-label-sm text-label-sm">86</span>
</button>
<button className="rider-filter px-3 py-1.5 rounded-full bg-surface-container-low text-on-surface font-label-md text-label-md active:scale-95 transition-transform flex items-center gap-1.5 hover:bg-surface-container" type="button">
<span>Online</span>
<span className="bg-tertiary/15 text-tertiary px-1.5 py-0.2 rounded-full font-label-sm text-label-sm">54</span>
</button>
<button className="rider-filter px-3 py-1.5 rounded-full bg-surface-container-low text-on-surface font-label-md text-label-md active:scale-95 transition-transform flex items-center gap-1.5 hover:bg-surface-container" type="button">
<span>On Delivery</span>
<span className="bg-primary/15 text-primary px-1.5 py-0.2 rounded-full font-label-sm text-label-sm">18</span>
</button>
<button className="rider-filter px-3 py-1.5 rounded-full bg-surface-container-low text-on-surface font-label-md text-label-md active:scale-95 transition-transform flex items-center gap-1.5 hover:bg-surface-container" type="button">
<span>Offline</span>
<span className="bg-secondary-container text-on-secondary-container px-1.5 py-0.2 rounded-full font-label-sm text-label-sm">14</span>
</button>
<button className="rider-filter px-3 py-1.5 rounded-full bg-error-container text-on-error-container font-label-md text-label-md active:scale-95 transition-transform flex items-center gap-1.5 hover:opacity-90" type="button">
<Icon name="warning" className="text-[14px]" />
<span>Flagged</span>
<span className="bg-error text-on-error px-1.5 py-0.2 rounded-full font-label-sm text-label-sm">2</span>
</button>
</div>
</div>

<article className="w-full bg-surface-container-lowest rounded-xl shadow-md overflow-hidden flex flex-col">

<div className="p-space-md bg-gradient-to-r from-surface-container-high to-surface-container flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<div className="relative">
<img className="w-13 h-13 rounded-full object-cover shadow-sm" data-alt="Close up portrait photograph of an African male courier named Brian wearing an orange professional motorcycle courier vest and safety helmet smiling confidently outdoors in daylight with soft natural bokeh" src="/images/89f9a9f94768a4ef.webp" />
<span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-tertiary rounded-full ring-2 ring-surface-container-lowest"></span>
</div>
<div>
<div className="flex items-center gap-1.5">
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold leading-tight">Kizito Brian</h2>
<Icon name="verified" className="text-[16px] text-tertiary" />
</div>
<p className="font-label-md text-label-md text-secondary">Boda Courier <span className="font-bold text-on-surface">#BOD-229</span></p>
</div>
</div>
<div className="flex flex-col items-end">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
            Trip En Route
          </span>
<span className="font-label-sm text-label-sm text-secondary mt-1">Order #SC-9941</span>
</div>
</div>

<div className="flex flex-wrap items-center gap-space-xs text-on-surface">
<div className="flex items-center gap-1 bg-surface-container-lowest/80 backdrop-blur-sm px-2.5 py-1 rounded-lg">
<Icon name="moped" className="text-[16px] text-primary" />
<span className="font-label-sm text-label-sm font-semibold">Bajaj Boxer • UEF 842X</span>
</div>
<div className="flex items-center gap-1 bg-surface-container-lowest/80 backdrop-blur-sm px-2.5 py-1 rounded-lg">
<Icon name="location_on" className="text-[16px] text-secondary" />
<span className="font-label-sm text-label-sm text-secondary truncate max-w-[170px]">Stage: William Street Central</span>
</div>
</div>
</div>

<div className="p-space-md flex flex-col gap-space-md">

<div className="grid grid-cols-4 gap-space-xs bg-surface-container-low p-space-sm rounded-lg text-center">
<div>
<p className="font-price-display text-[18px] leading-tight text-on-surface">412</p>
<p className="font-label-sm text-[10px] text-secondary uppercase tracking-tight">Trips</p>
</div>
<div>
<p className="font-price-display text-[18px] leading-tight text-tertiary">99.5%</p>
<p className="font-label-sm text-[10px] text-secondary uppercase tracking-tight">OTP Pass</p>
</div>
<div>
<p className="font-price-display text-[18px] leading-tight text-on-surface">28m</p>
<p className="font-label-sm text-[10px] text-secondary uppercase tracking-tight">Avg Time</p>
</div>
<div>
<div className="flex items-center justify-center gap-0.5">
<span className="font-price-display text-[18px] leading-tight text-on-surface">4.9</span>
<Icon name="star" className="text-[14px] text-amber-500" />
</div>
<p className="font-label-sm text-[10px] text-secondary uppercase tracking-tight">Rating</p>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-sm flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<Icon name="local_shipping" className="text-[18px] text-primary" />
<span className="font-label-md text-label-md font-bold text-on-surface">Active Job #SC-9941</span>
</div>
<span className="font-label-sm text-label-sm bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">Priority Air Express</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface mt-1">
<span className="text-secondary">Parcel</span>
<span className="font-semibold text-on-surface">SoundCore Space Q45 Headphones</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface">
<span className="text-secondary">Destination</span>
<span className="font-semibold text-on-surface truncate max-w-[200px]">Ronald K. (Nakawa MUBS Gate 2)</span>
</div>
<div className="flex items-center justify-between bg-surface-container-lowest p-2 rounded-lg mt-1">
<div className="flex items-center gap-1.5 text-tertiary font-label-sm text-label-sm">
<Icon name="lock" className="text-[16px]" />
<span>Masked Relay Active (PIN required)</span>
</div>
<span className="font-label-sm text-label-sm font-mono text-secondary">+256 70 •••• 92</span>
</div>
</div>

<div className="flex flex-col gap-1.5">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">Verified Credentials</span>
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between py-1 px-2 rounded-lg bg-surface-container">
<div className="flex items-center gap-2">
<Icon name="check_circle" className="text-[16px] text-tertiary" />
<span className="font-label-sm text-label-sm text-on-surface">Uganda Driving Permit (Class A)</span>
</div>
<span className="font-label-sm text-label-sm text-secondary">Exp: Oct 2026</span>
</div>
<div className="flex items-center justify-between py-1 px-2 rounded-lg bg-surface-container">
<div className="flex items-center gap-2">
<Icon name="check_circle" className="text-[16px] text-tertiary" />
<span className="font-label-sm text-label-sm text-on-surface">Stage Chairman Letter (Wm St)</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-semibold">Endorsed</span>
</div>
<div className="flex items-center justify-between py-1 px-2 rounded-lg bg-surface-container">
<div className="flex items-center gap-2">
<Icon name="fingerprint" className="text-[16px] text-tertiary" />
<span className="font-label-sm text-label-sm text-on-surface">NIRA Biometric Identity Pass</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface font-mono">CF89••••••14K</span>
</div>
</div>
</div>

<div className="rounded-xl overflow-hidden shadow-sm relative">
<div className="w-full h-32 bg-cover bg-center" data-location="Kampala Road, Kampala, Uganda" style={{}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent flex items-end justify-between p-2.5">
<div className="flex items-center gap-1.5 text-inverse-on-surface">
<Icon name="near_me" className="text-[16px] text-tertiary-fixed" />
<span className="font-label-sm text-label-sm font-semibold">Speed: 34 km/h • Jinja Rd Flyover</span>
</div>
<span className="font-label-sm text-label-sm bg-inverse-surface/90 text-inverse-on-surface px-2 py-0.5 rounded backdrop-blur-sm">ETA: 7 mins</span>
</div>
</div>

<div className="grid grid-cols-3 gap-space-xs pt-1">
<button className="flex flex-col items-center justify-center p-2 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-variant transition-colors active:scale-95" type="button">
<Icon name="navigation" className="text-[20px] text-primary" />
<span className="font-label-sm text-label-sm mt-0.5">Telematics</span>
</button>
<button className="flex flex-col items-center justify-center p-2 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-variant transition-colors active:scale-95" type="button">
<Icon name="phone_in_talk" className="text-[20px] text-on-surface" />
<span className="font-label-sm text-label-sm mt-0.5">Masked Call</span>
</button>
<button className="flex flex-col items-center justify-center p-2 rounded-lg bg-error-container text-on-error-container hover:opacity-90 transition-opacity active:scale-95" type="button">
<Icon name="gavel" className="text-[20px] text-error" />
<span className="font-label-sm text-label-sm mt-0.5">Suspend</span>
</button>
</div>
</div>
</article>

<article className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-sm">
<div className="relative">
<img className="w-11 h-11 rounded-full object-cover" data-alt="Portrait photography of an East African male courier wearing a warm navy fleece pullover and leather motorcycle gloves outdoors in Kawempe Kampala" src="/images/280da2a75a0b3de2.webp" />
<span className="absolute bottom-0 right-0 w-3 h-3 bg-tertiary rounded-full ring-2 ring-surface-container-lowest"></span>
</div>
<div>
<div className="flex items-center gap-1.5">
<h3 className="font-label-lg text-label-lg font-bold text-on-surface">Okello John</h3>
<span className="font-label-sm text-label-sm text-secondary">#BOD-104</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">TVS Apache • UEX 319P</p>
</div>
</div>
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
        Idle • Kawempe
      </span>
</div>

<div className="flex items-center justify-between bg-surface-container-low px-space-md py-space-xs rounded-lg">
<div>
<span className="font-label-sm text-label-sm text-secondary">Completed</span>
<p className="font-label-lg text-label-lg font-bold text-on-surface">248 trips</p>
</div>
<div>
<span className="font-label-sm text-label-sm text-secondary">Success Rate</span>
<p className="font-label-lg text-label-lg font-bold text-tertiary">98.8%</p>
</div>
<div>
<span className="font-label-sm text-label-sm text-secondary">Proximity</span>
<p className="font-label-lg text-label-lg font-bold text-on-surface">1.4 km</p>
</div>
<button className="h-9 px-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-sm active:scale-95 transition-transform flex items-center gap-1" type="button">
<span>Dispatch</span>
</button>
</div>
</article>

<article className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm border-0">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-sm">
<div className="relative">
<img className="w-11 h-11 rounded-full object-cover grayscale opacity-75" data-alt="Headshot of a serious African delivery driver against neutral urban background with ambient overcast lighting" src="/images/6b14f9ac98060608.webp" />
<span className="absolute bottom-0 right-0 w-3 h-3 bg-error rounded-full ring-2 ring-surface-container-lowest"></span>
</div>
<div>
<div className="flex items-center gap-1.5">
<h3 className="font-label-lg text-label-lg font-bold text-on-surface line-through decoration-error">Muwonge Farouk</h3>
<span className="font-label-sm text-label-sm text-secondary">#BOD-082</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Yamaha Crux • UDR 512L</p>
</div>
</div>
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold">
<Icon name="block" className="text-[13px]" />
        Suspended
      </span>
</div>

<div className="bg-error-container/40 p-space-sm rounded-lg flex items-start gap-space-xs">
<Icon name="shield_with_heart" className="text-error text-[18px] shrink-0 mt-0.5" />
<div>
<p className="font-label-md text-label-md font-bold text-on-error-container">Critical Integrity Breach</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Failed 3 tamper-evident bag QR scans during transit in Ntinda. Account frozen pending hub inventory audit.</p>
</div>
</div>
<div className="flex items-center justify-between pt-1">
<span className="font-label-sm text-label-sm text-secondary">Locked on 24 Feb, 14:10</span>
<button className="font-label-md text-label-md text-primary font-bold hover:underline flex items-center gap-0.5" type="button">
<span>Audit Evidence</span>
<Icon name="chevron_right" className="text-[16px]" />
</button>
</div>
</article>

<div className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm hidden flex items-end justify-center p-margin" id="suspendModal">
<div className="w-full max-w-[390px] bg-surface-container-lowest rounded-xl p-space-md shadow-2xl flex flex-col gap-space-md mb-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-error">
<Icon name="gavel" className="text-[24px]" />
<h3 className="font-headline-sm text-headline-sm text-on-surface">Suspend Courier</h3>
</div>
<button className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface" type="button">
<Icon name="close" className="text-[18px]" />
</button>
</div>
<p className="font-body-md text-body-md text-secondary">
        Immediate halt of order assignment and active wallet hold for <span className="font-bold text-on-surface">Kizito Brian (#BOD-229)</span>. Select primary violation code:
      </p>

<form className="flex flex-col gap-space-xs" id="suspendForm" onSubmit={(e) => e.preventDefault()}>
<label className="flex items-center justify-between p- space-sm p-3 rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer transition-colors">
<div className="flex items-center gap-2.5">
<input checked={true} className="accent-primary w-4 h-4" name="reason" type="radio" value="tamper" />
<div>
<p className="font-label-md text-label-md font-semibold text-on-surface">Tamper Seal Violation</p>
<p className="font-label-sm text-label-sm text-secondary">Package seal broken or missing tag</p>
</div>
</div>
<Icon name="warning" className="text-[18px] text-error" />
</label>
<label className="flex items-center justify-between p-3 rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer transition-colors">
<div className="flex items-center gap-2.5">
<input className="accent-primary w-4 h-4" name="reason" type="radio" value="driving" />
<div>
<p className="font-label-md text-label-md font-semibold text-on-surface">Reckless Driving Incident</p>
<p className="font-label-sm text-label-sm text-secondary">Customer report / Speed telemetry alert</p>
</div>
</div>
<Icon name="speed" className="text-[18px] text-secondary" />
</label>
<label className="flex items-center justify-between p-3 rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer transition-colors">
<div className="flex items-center gap-2.5">
<input className="accent-primary w-4 h-4" name="reason" type="radio" value="otp" />
<div>
<p className="font-label-md text-label-md font-semibold text-on-surface">Failure to Verify Handover OTP</p>
<p className="font-label-sm text-label-sm text-secondary">Handed package without masked code</p>
</div>
</div>
<Icon name="pin" className="text-[18px] text-secondary" />
</label>
<div className="grid grid-cols-2 gap-space-sm mt-space-sm">
<button className="w-full py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-variant transition-colors" type="button">
            Cancel
          </button>
<button className="w-full py-2.5 rounded-lg bg-error text-on-error font-label-md text-label-md shadow-md active:scale-95 transition-transform font-bold" type="submit">
            Confirm Freeze
          </button>
</div>
</form>
</div>
</div>
</div></div></main>
    </div>
  );
};

export default RidersCouriersSwiftcartAdmin;
