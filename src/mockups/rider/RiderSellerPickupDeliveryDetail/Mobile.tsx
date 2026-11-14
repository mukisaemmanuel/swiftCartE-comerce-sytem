// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/rider/rider_seller_pickup_delivery_detail/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface RiderSellerPickupDeliveryDetailProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const RiderSellerPickupDeliveryDetail: React.FC<RiderSellerPickupDeliveryDetailProps> = (props) => {
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
      
      <header className="fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl pt-safe shadow-[0_1px_8px_rgba(0,0,0,0.25)]"><div className="h-16 px-space-sm flex items-center justify-between gap-space-sm"><button type="button" className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 mr-2" aria-label="Toggle Theme" title="Toggle Theme" onClick={() => toggleTheme()}>{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}</button><div className="flex items-center gap-space-xs min-w-0"><button aria-label="Go back" className="w-11 h-11 flex items-center justify-center rounded-xl bg-surface-container-low text-on-surface hover:text-primary transition-colors flex-shrink-0"><Icon name="arrow_back_ios_new" className="text-[20px]" /></button><img alt="SwiftCart" className="h-7 w-auto object-contain flex-shrink-0" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col min-w-0 pl-1"><span className="font-label-sm text-label-sm text-primary uppercase tracking-widest truncate">SwiftCart Ops</span><h1 className="font-headline-sm text-headline-sm text-on-surface truncate tracking-tight">Rider Seller Pickup Confirmation</h1></div></div><div className="flex items-center gap-space-sm flex-shrink-0"><div className="flex items-center gap-1 px-space-sm py-1 rounded-full bg-emerald-escrow/10 text-emerald-escrow"><Icon name="verified_user" className="text-[16px]" /><span className="font-label-sm text-label-sm font-bold">SECURE</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex flex-col relative w-full pt-16 bg-surface pb-safe"><div className="flex flex-col w-full pb-8">

<div className="w-full bg-surface-container-high/90 px-margin py-space-xs flex items-center justify-between shadow-sm">
<div className="flex items-center gap-space-xs min-w-0">
<span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-escrow animate-ping"></span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold uppercase tracking-wider truncate">Escrow Locked: UGX 340,000</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant flex-shrink-0">
<Icon name="wifi_tethering" className="text-[16px] text-amber-warning" />
<span className="font-label-sm text-label-sm uppercase">2G Relay Sync OK</span>
</div>
</div>
<div className="px-margin flex flex-col gap-space-lg mt-space-md">

<section className="bg-surface-container-low rounded-xl p-space-md shadow-md flex flex-col gap-space-sm relative overflow-hidden">
<div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-action-gradient-start/10 blur-xl pointer-events-none"></div>
<div className="flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="relative w-12 h-12 rounded-xl bg-surface-container-highest overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="Close up warm operational portrait of a professional African delivery boda rider wearing an orange high-visibility reflective jacket and helmet in Kampala Uganda, natural outdoor dusk lighting with soft bokeh." src="/images/87ac33999eea78d6.webp" />
<span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-escrow"></span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-headline-sm text-headline-sm text-on-surface truncate">Kizito Brian</span>
<Icon name="verified" className="text-[18px] text-emerald-escrow" />
</div>
<div className="flex items-center gap-1.5 text-on-surface-variant">
<span className="font-body-sm text-body-sm text-primary font-bold tracking-wider">Bajaj Boxer UEF 842X</span>
<span className="text-outline text-[10px]">•</span>
<span className="font-body-sm text-body-sm truncate">Nakasero Stage</span>
</div>
</div>
</div>
<div className="flex flex-col items-end flex-shrink-0">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Task Ref</span>
<span className="font-label-lg text-label-lg text-action-gradient-start font-extrabold bg-surface-container-highest px-2 py-0.5 rounded-lg">#TSK-4082</span>
</div>
</div>

<div className="grid grid-cols-3 gap-space-xs pt-space-xs mt-space-xs bg-surface-container-highest/40 p-space-xs rounded-lg">
<div className="flex flex-col items-center justify-center p-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Payout</span>
<span className="font-label-lg text-label-lg text-tertiary font-bold">UGX 6,500</span>
</div>
<div className="flex flex-col items-center justify-center p-1 bg-surface-container/60 rounded-md">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Distance</span>
<span className="font-label-lg text-label-lg text-on-surface font-bold">2.4 km</span>
</div>
<div className="flex flex-col items-center justify-center p-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Corridor</span>
<span className="font-label-lg text-label-lg text-on-surface font-bold">Lugogo</span>
</div>
</div>
</section>

<section className="bg-surface-container-low rounded-xl p-space-md shadow-sm">
<div className="flex items-center justify-between mb-space-sm">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Dispatch Progress</h2>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-action-gradient-end/20 text-primary-fixed-dim font-bold">Step 3 of 5</span>
</div>
<div className="relative flex flex-col gap-3 pl-2">

<div className="absolute left-[19px] top-3 bottom-3 w-0.5 bg-surface-container-highest pointer-events-none"></div>

<div className="flex items-center gap-space-sm relative z-10">
<div className="w-6 h-6 rounded-full bg-emerald-escrow text-on-tertiary flex items-center justify-center shadow-sm">
<Icon name="check" className="text-[16px] font-bold" />
</div>
<div className="flex items-center justify-between flex-1 min-w-0">
<span className="font-body-md text-body-md text-on-surface-variant line-through truncate">Accept Task</span>
<span className="font-label-sm text-label-sm text-emerald-escrow">14:02</span>
</div>
</div>

<div className="flex items-center gap-space-sm relative z-10">
<div className="w-6 h-6 rounded-full bg-emerald-escrow text-on-tertiary flex items-center justify-center shadow-sm">
<Icon name="check" className="text-[16px] font-bold" />
</div>
<div className="flex items-center justify-between flex-1 min-w-0">
<span className="font-body-md text-body-md text-on-surface-variant line-through truncate">Arrive at Seller Shop</span>
<span className="font-label-sm text-label-sm text-emerald-escrow">14:11</span>
</div>
</div>

<div className="flex items-center gap-space-sm relative z-10 p-2 -ml-2 rounded-xl bg-surface-container-high shadow-md">
<div className="w-6 h-6 rounded-full bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-white flex items-center justify-center shadow-md animate-pulse">
<Icon name="inventory" className="text-[15px]" />
</div>
<div className="flex items-center justify-between flex-1 min-w-0">
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface font-extrabold truncate">Inspect &amp; Verify Package</span>
<span className="font-body-sm text-body-sm text-primary">In progress at store counter</span>
</div>
<span className="inline-block w-2.5 h-2.5 rounded-full bg-primary-fixed animate-ping flex-shrink-0"></span>
</div>
</div>

<div className="flex items-center gap-space-sm relative z-10 opacity-60">
<div className="w-6 h-6 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center">
<Icon name="two_wheeler" className="text-[14px]" />
</div>
<div className="flex items-center justify-between flex-1 min-w-0">
<span className="font-body-md text-body-md text-on-surface-variant truncate">En Route to Buyer</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Pending</span>
</div>
</div>

<div className="flex items-center gap-space-sm relative z-10 opacity-60">
<div className="w-6 h-6 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center">
<Icon name="key" className="text-[14px]" />
</div>
<div className="flex items-center justify-between flex-1 min-w-0">
<span className="font-body-md text-body-md text-on-surface-variant truncate">Buyer Handover &amp; Escrow Release</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">OTP</span>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-low rounded-xl p-space-md shadow-md flex flex-col gap-space-md">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-11 h-11 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary flex-shrink-0 shadow-inner">
<Icon name="storefront" className="text-[24px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-widest truncate">Authorized Merchant</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface truncate">SoundCore Uganda Official</h3>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Pioneer Mall Stall G-14, Kampala Central</span>
</div>
</div>
<button aria-label="Call Store Contact Proxy" className="w-10 h-10 rounded-xl bg-surface-container-high text-on-surface flex items-center justify-center active:scale-95 transition-transform flex-shrink-0" type="button">
<Icon name="call" className="text-[20px] text-tertiary" />
</button>
</div>

<div className="bg-surface-container p-space-md rounded-xl flex flex-col gap-space-sm">
<div className="flex items-center justify-between gap-space-xs">
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Order Item Ref</span>
<span className="font-label-lg text-label-lg text-on-surface font-extrabold truncate">SoundCore Space One ANC</span>
</div>
<span className="font-label-md text-label-md px-2.5 py-1 rounded-lg bg-surface-container-highest text-secondary font-mono tracking-wider flex-shrink-0">#SC-ORD-9488</span>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-high flex items-center justify-between gap-space-xs">
<div className="flex items-center gap-space-xs min-w-0">
<Icon name="security" className="text-[20px] text-emerald-escrow" />
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-emerald-escrow font-extrabold uppercase tracking-wide">Tamper Seal Intact</span>
<span className="font-label-md text-label-md font-mono text-on-surface tracking-wider truncate">#TS-88410</span>
</div>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-emerald-escrow/20 text-emerald-escrow font-bold">VERIFIED</span>
</div>
</div>

<div className="grid grid-cols-1 gap-space-sm">
<button className="h-12 w-full rounded-xl bg-surface-container-high text-on-surface flex items-center justify-center gap-space-sm active:scale-98 transition-all hover:bg-surface-bright shadow-sm" id="scan-qr-btn" type="button">
<Icon name="qr_code_scanner" className="text-[22px] text-action-gradient-start" />
<span className="font-label-lg text-label-lg font-bold">Scan Merchant Counter QR Code</span>
</button>

<div className="flex items-center gap-space-sm p-space-sm rounded-xl bg-surface-container cursor-pointer select-none transition-colors" id="staff-confirm-tile">
<div className="w-6 h-6 rounded-lg bg-surface-container-highest flex items-center justify-center text-white flex-shrink-0" id="signature-checkbox">
<Icon name="check" className="text-[16px] hidden" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface font-bold truncate">Merchant Staff Confirmed Handover</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Clerk badge scanned: #CLK-Aisha-04</span>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-low rounded-xl p-space-md shadow-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<Icon name="navigation" className="text-[20px] text-primary" />
<h3 className="font-headline-sm text-headline-sm text-on-surface">Route Preview</h3>
</div>
<div className="flex items-center gap-1 bg-surface-container-highest px-2 py-0.5 rounded-md">
<Icon name="schedule" className="text-[14px] text-amber-warning" />
<span className="font-label-md text-label-md text-on-surface font-bold">Est. 8 mins</span>
</div>
</div>

<div className="w-full h-36 bg-cover bg-center rounded-xl relative overflow-hidden flex items-end p-space-sm shadow-inner" data-location="Pioneer Mall to Forest Mall Lugogo Bypass Kampala Uganda" style={{"backgroundImage":"url('/images/1259f25e64356c98.webp')"}}>
<div className="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-surface-dark/30 to-transparent"></div>
<div className="relative z-10 flex items-center justify-between w-full">
<div className="flex items-center gap-space-xs text-white">
<Icon name="pin_drop" className="text-[18px] text-action-gradient-start" />
<span className="font-label-md text-label-md font-bold truncate">Kampala Road → Jinja Rd → Lugogo</span>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-highest/90 text-on-surface font-mono">2.4 KM</span>
</div>
</div>

<div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center flex-shrink-0">
<Icon name="person_pin_circle" className="text-[18px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Customer Destination Corridor</span>
<span className="font-label-lg text-label-lg text-on-surface font-extrabold truncate">Dennis M. • Forest Mall / Lugogo Bypass</span>
</div>
</div>
<div className="flex items-center gap-1 text-on-surface-variant flex-shrink-0 pl-1">
<span className="font-label-sm text-label-sm font-mono tracking-wider">07•• ••• 419</span>
</div>
</div>
</section>

<section className="bg-surface-container-low rounded-xl p-space-md shadow-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<Icon name="dialpad" className="text-[20px] text-tertiary" />
<h3 className="font-headline-sm text-headline-sm text-on-surface">Escrow Release Code</h3>
</div>
<div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-escrow/10 text-emerald-escrow">
<Icon name="lock" className="text-[14px]" />
<span className="font-label-sm text-label-sm font-bold uppercase tracking-wider">Buyer-Side OTP</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
        Ask buyer for code upon physical delivery inspection at handover. Code releases escrow instantly.
      </p>

<div className="grid grid-cols-6 gap-2 my-space-xs">
<div className="h-13 py-3 rounded-xl bg-surface-container flex items-center justify-center text-on-surface font-code-display text-code-display shadow-inner">
<span className="text-outline-variant font-bold">-</span>
</div>
<div className="h-13 py-3 rounded-xl bg-surface-container flex items-center justify-center text-on-surface font-code-display text-code-display shadow-inner">
<span className="text-outline-variant font-bold">-</span>
</div>
<div className="h-13 py-3 rounded-xl bg-surface-container flex items-center justify-center text-on-surface font-code-display text-code-display shadow-inner">
<span className="text-outline-variant font-bold">-</span>
</div>
<div className="h-13 py-3 rounded-xl bg-surface-container flex items-center justify-center text-on-surface font-code-display text-code-display shadow-inner">
<span className="text-outline-variant font-bold">-</span>
</div>
<div className="h-13 py-3 rounded-xl bg-surface-container flex items-center justify-center text-on-surface font-code-display text-code-display shadow-inner">
<span className="text-outline-variant font-bold">-</span>
</div>
<div className="h-13 py-3 rounded-xl bg-surface-container flex items-center justify-center text-on-surface font-code-display text-code-display shadow-inner">
<span className="text-outline-variant font-bold">-</span>
</div>
</div>
<div className="flex items-center gap-1.5 text-on-surface-variant/80">
<Icon name="info" className="text-[15px] text-outline" />
<span className="font-label-sm text-label-sm">Keypad will activate upon arrival at Lugogo corridor geo-fence.</span>
</div>
</section>

<section className="flex flex-col gap-space-sm pt-space-xs mb-2">

<button className="w-full h-[54px] rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-white flex items-center justify-center gap-space-sm font-label-lg text-label-lg tracking-wide uppercase shadow-[0_4px_18px_rgba(218,55,0,0.35)] active:scale-98 transition-transform" id="confirm-collected-btn" type="button">
<Icon name="inventory_2" className="text-[22px]" />
<span>Confirm Package Collected from Seller</span>
</button>

<button className="w-full h-11 rounded-xl bg-danger-penalty/10 text-danger-penalty flex items-center justify-center gap-space-xs font-label-md text-label-md active:bg-danger-penalty/20 transition-colors" id="report-issue-btn" type="button">
<Icon name="report_problem" className="text-[18px]" />
<span>Report Merchant Issue / Sealed Box Tampered</span>
</button>
</section>
</div>
</div>
</main>
    </div>
  );
};

export default RiderSellerPickupDeliveryDetail;
