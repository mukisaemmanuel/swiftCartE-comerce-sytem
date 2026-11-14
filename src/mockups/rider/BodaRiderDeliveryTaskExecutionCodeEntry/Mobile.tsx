// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/rider/boda_rider_delivery_task_execution_code_entry/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface BodaRiderDeliveryTaskExecutionCodeEntryProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const BodaRiderDeliveryTaskExecutionCodeEntry: React.FC<BodaRiderDeliveryTaskExecutionCodeEntryProps> = (props) => {
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
      
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 px-gutter flex items-center justify-between gap-space-xs"><div className="flex items-center gap-space-sm min-w-0 flex-1"><img alt="SwiftCart" className="h-8 w-auto object-contain flex-shrink-0" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col min-w-0"><div className="flex items-center gap-space-xs"><span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">SwiftCart Hub</span><span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-tertiary-container/20 text-tertiary font-label-sm text-[9px] font-bold"><span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse mr-1"></span>4G KLA</span></div><h1 className="font-headline-sm text-headline-sm text-on-surface truncate leading-tight">Boda Rider Delivery</h1></div></div><div className="flex items-center gap-space-xs flex-shrink-0"><button aria-label="Toggle Theme" className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface-variant hover:text-on-surface transition-colors" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-[22px]" /></button><button aria-label="Notifications" className="relative w-11 h-11 flex items-center justify-center rounded-full text-on-surface-variant hover:text-on-surface transition-colors"><Icon name="notifications" className="text-[22px]" /><span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary-container ring-2 ring-surface"></span></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-space-xs"><span className="font-label-sm text-label-sm font-bold text-on-primary">KB</span></div></div></div></header>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-20 bg-background"><div className="flex flex-col w-full px-gutter space-y-space-md pb-space-xl">

<div className="flex items-center justify-between bg-surface-container-low rounded-xl p-space-sm shadow-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center flex-shrink-0 text-primary-container font-headline-sm">
<Icon name="two_wheeler" className="text-[22px]" />
</div>
<div className="min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-label-md text-label-md text-on-surface truncate">Kizito Brian</span>
<span className="px-1.5 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm font-bold">UEF 842X</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Bajaj Boxer • Express Logistics</p>
</div>
</div>
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary-container/15 text-tertiary flex-shrink-0">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
<span className="font-label-sm text-label-sm">Offline Mode Ready</span>
</div>
</div>

<div className="bg-surface-container rounded-xl p-space-md shadow-sm space-y-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="px-2 py-0.5 rounded-lg bg-surface-container-highest font-label-md text-label-md text-on-surface font-bold">#SC-9941</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Nakawa Division, Kampala</span>
</div>
<div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-tertiary/15 text-tertiary font-label-sm text-label-sm font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-ping"></span>
<span className="">En Route to Buyer</span>
</div>
</div>

<div className="grid grid-cols-2 gap-space-sm pt-space-xs">
<div className="bg-surface-container-lowest rounded-lg p-space-sm flex items-center gap-space-sm shadow-sm">
<div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
<Icon name="near_me" className="text-[20px]" />
</div>
<div className="min-w-0">
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Distance</p>
<p className="font-label-lg text-label-lg text-on-surface font-bold truncate">1.2 km away</p>
</div>
</div>
<div className="bg-surface-container-lowest rounded-lg p-space-sm flex items-center gap-space-sm shadow-sm">
<div className="w-9 h-9 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center flex-shrink-0">
<Icon name="schedule" className="text-[20px]" />
</div>
<div className="min-w-0">
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">ETA Window</p>
<p className="font-label-lg text-label-lg text-on-surface font-bold truncate">~4 mins</p>
</div>
</div>
</div>

<div className="flex items-center justify-between pt-space-xs gap-space-sm">
<button className="flex-1 flex items-center justify-center gap-space-xs py-2 px-space-sm rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors font-label-md text-label-md active:scale-95">
<Icon name="phone_in_talk" className="text-[18px] text-tertiary" />
<span className="">Masked Hub Call</span>
</button>
<button className="flex-1 flex items-center justify-center gap-space-xs py-2 px-space-sm rounded-lg bg-surface-container-high text-error hover:bg-error-container transition-colors font-label-md text-label-md active:scale-95">
<Icon name="warning" className="text-[18px]" />
<span className="">Report Breakdown</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-md">
<div className="flex items-start justify-between gap-space-sm">
<div className="space-y-0.5 min-w-0">
<div className="flex items-center gap-space-xs">
<Icon name="person_pin" className="text-[18px] text-primary" />
<h2 className="font-headline-sm text-headline-sm text-on-surface truncate">Ronald K.</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Nakawa District Zone (Address Masked for Safety)</p>
</div>
<a aria-label="Relay Call to Buyer" className="w-11 h-11 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-md active:scale-95 transition-transform flex-shrink-0" href="tel:0700000492">
<Icon name="call" className="text-[20px]" />
</a>
</div>

<div className="flex items-center justify-between px-space-sm py-2 rounded-lg bg-surface-container-low text-on-surface-variant">
<div className="flex items-center gap-space-xs">
<Icon name="shield" className="text-[16px] text-tertiary" />
<span className="font-label-sm text-label-sm">Relay Protected Phone</span>
</div>
<span className="font-label-md text-label-md text-on-surface font-bold tracking-widest">07•• ••• 492</span>
</div>

<div className="p-space-sm rounded-xl bg-surface-container space-y-space-xs">
<div className="flex items-center justify-between text-on-surface">
<div className="flex items-center gap-space-xs">
<Icon name="inventory_2" className="text-[18px] text-primary" />
<span className="font-label-md text-label-md font-bold">Consignment Payload (2 Items)</span>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface-variant font-bold">Fragile</span>
</div>
<ul className="font-body-sm text-body-sm text-on-surface-variant list-disc list-inside space-y-0.5">
<li className="">1x SoundCore Space One ANC Headphones</li>
<li className="">1x Baseus 65W GaN Dual Fast Charger</li>
</ul>
<div className="flex items-center justify-between pt-space-xs">
<span className="font-body-sm text-body-sm text-on-surface-variant">Package Value</span>
<span className="font-label-lg text-label-lg font-extrabold text-on-surface">UGX 365,000</span>
</div>
</div>

<div className="flex items-center gap-space-sm p-space-sm rounded-lg bg-tertiary-container/15 text-on-tertiary-container">
<Icon name="check_circle" className="text-[22px] text-tertiary flex-shrink-0" />
<div className="min-w-0"><p className="font-label-md text-label-md font-bold text-tertiary">Prepaid via MTN MoMo</p><p className="font-body-sm text-body-sm text-on-surface-variant">DO NOT COLLECT CASH from customer Ronald K.</p></div>
</div>
</div>

<div className="bg-surface-container-high rounded-xl p-space-md shadow-md space-y-space-md">

<div className="space-y-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="encrypted" className="text-[22px] text-primary-container" />
<h3 className="font-headline-sm text-headline-sm text-on-surface font-extrabold">Delivery Release Code</h3>
</div>
<span className="px-2 py-0.5 rounded-full bg-primary-container/20 text-on-primary-container font-label-sm text-label-sm font-bold">Step 2 of 2</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Customer checks goods and provides their 6-digit delivery code. Payment is credited instantly upon entry.</p>
</div>

<div className="flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-surface-container-highest text-on-surface-variant">
<Icon name="info" className="text-[16px] text-primary-container" />
<span className="font-label-sm text-label-sm tracking-tight">NEVER guess or request code before physical goods handover.</span>
</div>

<div className="flex justify-between items-center gap-space-xs py-space-xs" id="otp-container">
<div className="w-12 h-14 rounded-xl bg-surface-container-lowest text-on-surface flex items-center justify-center font-headline-lg-mobile text-headline-lg-mobile font-black shadow-sm" id="slot-0">8</div>
<div className="w-12 h-14 rounded-xl bg-surface-container-lowest text-on-surface flex items-center justify-center font-headline-lg-mobile text-headline-lg-mobile font-black shadow-sm" id="slot-1">4</div>
<div className="w-12 h-14 rounded-xl bg-surface-container-lowest text-on-surface flex items-center justify-center font-headline-lg-mobile text-headline-lg-mobile font-black shadow-sm" id="slot-2">2</div>
<div className="w-12 h-14 rounded-xl bg-surface-container-highest text-primary-container flex items-center justify-center font-headline-lg-mobile text-headline-lg-mobile font-black shadow-inner relative" id="slot-3">
<span className="w-0.5 h-6 bg-primary-container animate-pulse"></span>
</div>
<div className="w-12 h-14 rounded-xl bg-surface-container-lowest text-on-surface-variant flex items-center justify-center font-headline-lg-mobile text-headline-lg-mobile font-black shadow-sm" id="slot-4">•</div>
<div className="w-12 h-14 rounded-xl bg-surface-container-lowest text-on-surface-variant flex items-center justify-center font-headline-lg-mobile text-headline-lg-mobile font-black shadow-sm" id="slot-5">•</div>
</div>

<div className="flex items-center justify-center gap-space-xs py-1 text-center" id="status-indicator">
<Icon name="sync" className="text-[16px] text-tertiary animate-spin" />
<span className="font-label-sm text-label-sm text-on-surface-variant" id="status-text">Entering customer 6-digit delivery code...</span>
</div>

<div className="grid grid-cols-3 gap-space-xs pt-space-xs">
<button className="keypad-btn h-14 rounded-xl bg-surface-container-lowest text-on-surface active:bg-primary-container active:text-on-primary font-headline-md text-headline-md font-bold shadow-sm transition-all flex items-center justify-center select-none" data-digit="1">1</button>
<button className="keypad-btn h-14 rounded-xl bg-surface-container-lowest text-on-surface active:bg-primary-container active:text-on-primary font-headline-md text-headline-md font-bold shadow-sm transition-all flex items-center justify-center select-none" data-digit="2">2</button>
<button className="keypad-btn h-14 rounded-xl bg-surface-container-lowest text-on-surface active:bg-primary-container active:text-on-primary font-headline-md text-headline-md font-bold shadow-sm transition-all flex items-center justify-center select-none" data-digit="3">3</button>
<button className="keypad-btn h-14 rounded-xl bg-surface-container-lowest text-on-surface active:bg-primary-container active:text-on-primary font-headline-md text-headline-md font-bold shadow-sm transition-all flex items-center justify-center select-none" data-digit="4">4</button>
<button className="keypad-btn h-14 rounded-xl bg-surface-container-lowest text-on-surface active:bg-primary-container active:text-on-primary font-headline-md text-headline-md font-bold shadow-sm transition-all flex items-center justify-center select-none" data-digit="5">5</button>
<button className="keypad-btn h-14 rounded-xl bg-surface-container-lowest text-on-surface active:bg-primary-container active:text-on-primary font-headline-md text-headline-md font-bold shadow-sm transition-all flex items-center justify-center select-none" data-digit="6">6</button>
<button className="keypad-btn h-14 rounded-xl bg-surface-container-lowest text-on-surface active:bg-primary-container active:text-on-primary font-headline-md text-headline-md font-bold shadow-sm transition-all flex items-center justify-center select-none" data-digit="7">7</button>
<button className="keypad-btn h-14 rounded-xl bg-surface-container-lowest text-on-surface active:bg-primary-container active:text-on-primary font-headline-md text-headline-md font-bold shadow-sm transition-all flex items-center justify-center select-none" data-digit="8">8</button>
<button className="keypad-btn h-14 rounded-xl bg-surface-container-lowest text-on-surface active:bg-primary-container active:text-on-primary font-headline-md text-headline-md font-bold shadow-sm transition-all flex items-center justify-center select-none" data-digit="9">9</button>
<button className="keypad-btn h-14 rounded-xl bg-surface-container-highest text-on-surface-variant active:bg-error-container active:text-on-error font-label-lg text-label-lg font-bold shadow-sm transition-all flex items-center justify-center select-none" id="clear-key">CLR</button>
<button className="keypad-btn h-14 rounded-xl bg-surface-container-lowest text-on-surface active:bg-primary-container active:text-on-primary font-headline-md text-headline-md font-bold shadow-sm transition-all flex items-center justify-center select-none" data-digit="0">0</button>
<button aria-label="Backspace" className="keypad-btn h-14 rounded-xl bg-surface-container-highest text-on-surface-variant active:bg-primary-container active:text-on-primary shadow-sm transition-all flex items-center justify-center select-none" id="backspace-key">
<Icon name="backspace" className="text-[24px]" />
</button>
</div>

<div className="pt-space-xs text-center">
<button className="w-full py-2.5 px-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-highest text-primary font-label-md text-label-md font-bold flex items-center justify-center gap-space-xs transition-colors shadow-sm active:scale-98" id="ussd-resend-btn">
<Icon name="sms" className="text-[18px]" />
<span className="">Buyer Forgot Code? Trigger USSD Push (*165#)</span>
</button>
</div>
</div>

<div className="space-y-space-xs pt-space-xs">
<button className="w-full min-h-[52px] py-3.5 px-space-md rounded-xl bg-primary-container text-on-primary shadow-lg font-label-lg text-label-lg font-extrabold flex flex-col items-center justify-center active:scale-98 transition-transform" id="submit-handover-btn"><span className="tracking-wide">Verify Code &amp; Complete Delivery</span><span className="font-label-sm text-label-sm text-on-primary/90 font-medium">UGX 8,500 Rider Fare Credited Instantly</span></button>
<button className="w-full py-2.5 px-space-md rounded-xl bg-transparent text-secondary hover:text-on-surface font-label-md text-label-md flex items-center justify-center gap-space-xs transition-colors"><Icon name="report_problem" className="text-[18px]" /><span className="">Report Delivery Issue / Damaged Item</span></button>
</div>
</div>
</main>
<nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/85 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.06)]" data-active-classes="text-primary font-bold"><div className="flex justify-around items-center h-16 px-space-xs"><a aria-current="page" className="flex flex-col items-center justify-center min-w-[48px] min-h-[48px] px-space-xs transition-colors text-primary font-bold" data-path="boda-rider-delivery" href="#"><Icon name="two_wheeler" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight mt-0.5">Rider</span></a><a className="flex flex-col items-center justify-center min-w-[48px] min-h-[48px] px-space-xs text-on-surface-variant transition-colors" data-path="hub-intake-sorting" href="#"><Icon name="warehouse" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight mt-0.5">Hub Intake</span></a><a className="flex flex-col items-center justify-center min-w-[48px] min-h-[48px] px-space-xs text-on-surface-variant transition-colors" data-path="seller-catalog" href="#"><Icon name="storefront" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight mt-0.5">Seller Store</span></a><a className="flex flex-col items-center justify-center min-w-[48px] min-h-[48px] px-space-xs text-on-surface-variant transition-colors" data-path="work-telematics" href="#"><Icon name="monitoring" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight mt-0.5">Telematics</span></a><a className="flex flex-col items-center justify-center min-w-[48px] min-h-[48px] px-space-xs text-on-surface-variant transition-colors" data-path="operations-profile" href="#"><Icon name="badge" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight mt-0.5">Operator</span></a></div></nav>
    </div>
  );
};

export default BodaRiderDeliveryTaskExecutionCodeEntry;
