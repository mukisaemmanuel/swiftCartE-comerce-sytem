// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/rider/rider_seller_pickup_delivery_detail_light/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface RiderSellerPickupDeliveryDetailLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const RiderSellerPickupDeliveryDetailLight: React.FC<RiderSellerPickupDeliveryDetailLightProps> = (props) => {
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
      
      <header className="fixed top-0 inset-x-0 z-50 bg-surface-container-lowest/95 backdrop-blur-xl pt-safe shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 px-margin flex items-center justify-between"><button type="button" className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 mr-2" aria-label="Toggle Theme" title="Toggle Theme" onClick={() => toggleTheme()}>{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}</button><div className="flex items-center gap-space-xs"><button aria-label="Go back" className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container-low transition-colors" type="button"><Icon name="chevron_left" className="text-[24px]" /></button><div className="flex items-center gap-space-xs pl-space-xs"><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/swiftcart-logo-white.png" /><div className="flex flex-col"><span className="font-label-sm text-label-sm uppercase tracking-wider text-primary">Uganda Ops</span><span className="font-headline-sm text-headline-sm leading-tight text-on-surface font-bold">Dispatch Detail</span></div></div></div><div className="flex items-center gap-space-sm"><div aria-label="User avatar" className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex flex-col relative w-full pt-16 pb-safe bg-surface min-h-screen"><div className="flex flex-col w-full pb-8">

<div className="bg-surface-container-high px-margin py-space-xs flex items-center justify-between text-on-surface">
<div className="flex items-center gap-space-xs">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-container opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
</span>
<span className="font-label-sm text-label-sm uppercase tracking-wide text-tertiary font-bold">Escrow Locked: UGX 340,000</span>
</div>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-secondary">
<Icon name="cell_tower" className="text-[13px] text-tertiary" />
<span className="tracking-wider">2G RELAY SYNC OK</span>
</div>
</div>
<div className="px-margin flex flex-col gap-space-md pt-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden flex items-center justify-center shrink-0">
<img className="w-full h-full object-cover" data-alt="Portrait photo of a young Ugandan motorcycle delivery rider Kizito Brian wearing an energetic orange helmet and swift delivery uniform with a warm confident smile, high daylight, Kampala city street background." src="/images/f959f4711ca487a2.webp" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface">Kizito Brian</span>
<Icon name="verified" className="text-primary-container text-[18px]" />
</div>
<span className="font-body-sm text-body-sm text-secondary">Bajaj Boxer UEF 842X • Nakasero Stage</span>
</div>
</div>
<span className="font-label-sm text-label-sm px-2 py-1 rounded bg-surface-container text-on-surface font-semibold tracking-wide">
          #TSK-4082
        </span>
</div>

<div className="grid grid-cols-3 gap-space-xs pt-space-xs">
<div className="bg-surface-container-low rounded-lg p-space-xs text-center flex flex-col items-center justify-center">
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Payout</span>
<span className="font-label-lg text-label-lg font-bold text-tertiary">UGX 6,500</span>
</div>
<div className="bg-surface-container-low rounded-lg p-space-xs text-center flex flex-col items-center justify-center">
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Distance</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface">2.4 km</span>
</div>
<div className="bg-surface-container-low rounded-lg p-space-xs text-center flex flex-col items-center justify-center">
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Corridor</span>
<span className="font-label-lg text-label-lg font-bold text-primary-container">Lugogo</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between pb-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Dispatch Timeline</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-bold">Step 3 of 5</span>
</div>
<div className="relative flex flex-col gap-3 pl-1">

<div className="absolute left-[11px] top-2 bottom-3 w-[2px] bg-secondary-container -z-0"></div>

<div className="relative z-10 flex items-center gap-space-sm">
<div className="w-6 h-6 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shrink-0">
<Icon name="check" className="text-[14px]" />
</div>
<div className="flex items-center justify-between flex-1 min-w-0">
<span className="font-body-sm text-body-sm text-secondary font-medium">1. Accept Task</span>
<span className="font-label-sm text-label-sm text-secondary">14:02</span>
</div>
</div>

<div className="relative z-10 flex items-center gap-space-sm">
<div className="w-6 h-6 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shrink-0">
<Icon name="check" className="text-[14px]" />
</div>
<div className="flex items-center justify-between flex-1 min-w-0">
<span className="font-body-sm text-body-sm text-secondary font-medium">2. Arrive at Seller Shop</span>
<span className="font-label-sm text-label-sm text-secondary">14:11</span>
</div>
</div>

<div className="relative z-10 flex items-start gap-space-sm">
<div className="relative flex items-center justify-center w-6 h-6 shrink-0 mt-0.5">
<span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-primary-container opacity-60"></span>
<span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-primary-container"></span>
</div>
<div className="flex flex-col flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg font-bold text-primary-container">3. Inspect &amp; Verify Package</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-primary-fixed text-on-primary-fixed-variant font-bold">Active</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">In progress at store counter</span>
</div>
</div>

<div className="relative z-10 flex items-center gap-space-sm">
<div className="w-6 h-6 rounded-full bg-surface-container text-secondary flex items-center justify-center shrink-0">
<Icon name="two_wheeler" className="text-[14px]" />
</div>
<div className="flex items-center justify-between flex-1 min-w-0">
<span className="font-body-sm text-body-sm text-secondary">4. En Route to Buyer</span>
<span className="font-label-sm text-label-sm text-secondary">Pending</span>
</div>
</div>

<div className="relative z-10 flex items-center gap-space-sm">
<div className="w-6 h-6 rounded-full bg-surface-container text-secondary flex items-center justify-center shrink-0">
<Icon name="lock" className="text-[14px]" />
</div>
<div className="flex items-center justify-between flex-1 min-w-0">
<span className="font-body-sm text-body-sm text-secondary">5. Buyer Handover &amp; Escrow Release</span>
<span className="font-label-sm text-label-sm text-secondary">OTP req.</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-start justify-between">
<div className="flex items-start gap-space-xs">
<div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary-container shrink-0 mt-0.5">
<Icon name="storefront" className="text-[20px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-1">
<span className="font-label-lg text-label-lg font-bold text-on-surface">SoundCore Uganda Official</span>
<Icon name="check_circle" className="text-[16px] text-tertiary" />
</div>
<span className="font-body-sm text-body-sm text-secondary">Pioneer Mall Stall G-14, Kampala Central</span>
</div>
</div>
<button aria-label="Call Merchant" className="w-9 h-9 rounded-full bg-surface-container-low text-primary-container flex items-center justify-center hover:bg-secondary-container transition-colors shrink-0" type="button">
<Icon name="phone_enabled" className="text-[20px]" />
</button>
</div>

<div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-on-surface truncate">SoundCore Space One ANC</span>
<span className="font-label-sm text-label-sm text-secondary font-mono">#SC-ORD-9488</span>
</div>
<div className="flex items-center justify-between pt-1">
<div className="flex items-center gap-1.5">
<Icon name="verified_user" className="text-[16px] text-tertiary font-bold" />
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">Tamper Seal: <span className="font-bold text-on-surface font-mono">#TS-88410</span></span>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-bold">VERIFIED</span>
</div>
</div>

<button className="w-full h-12 rounded-lg bg-primary-container text-on-primary flex items-center justify-center gap-space-xs font-label-lg text-label-lg font-bold shadow-sm active:scale-[0.98] transition-transform" type="button">
<Icon name="qr_code_scanner" className="text-[20px]" />
<span>Scan Merchant Counter QR Code</span>
</button>

<label className="flex items-start gap-space-sm p-space-xs cursor-pointer select-none">
<input checked={true} className="mt-0.5 h-5 w-5 rounded bg-surface-container accent-primary-container cursor-pointer" type="checkbox" />
<span className="font-body-sm text-body-sm text-secondary leading-snug">
          Merchant Staff Confirmed Handover <span className="font-semibold text-on-surface">(Clerk badge scanned: #CLK-Aisha-04)</span>
</span>
</label>
</div>

<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col">
<div className="relative w-full h-44 bg-surface-container">
<div className="w-full h-full bg-cover bg-center" data-location="Kampala Road to Forest Mall Lugogo, Uganda" style={{"backgroundImage":"url('/images/aef4df7e00730247.webp')"}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none"></div>

<div className="absolute top-space-xs left-space-xs bg-surface-container-lowest/95 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1.5">
<Icon name="navigation" className="text-[15px] text-primary-container" />
<span className="font-label-sm text-label-sm font-bold text-on-surface">Kampala Rd → Jinja Rd → Lugogo</span>
</div>
<div className="absolute bottom-space-xs right-space-xs bg-surface-container-lowest/95 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1.5">
<Icon name="speed" className="text-[15px] text-tertiary" />
<span className="font-label-sm text-label-sm font-bold text-on-surface">2.4 KM • Est. 8 mins</span>
</div>
</div>
<div className="p-space-md flex items-center justify-between">
<div className="flex items-start gap-space-xs">
<div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-fixed flex items-center justify-center shrink-0 mt-0.5">
<Icon name="location_on" className="text-[18px]" />
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Dennis M.</span>
<span className="font-body-sm text-body-sm text-secondary">Forest Mall / Lugogo Bypass</span>
</div>
</div>
<div className="flex flex-col items-end">
<span className="font-label-sm text-label-sm text-secondary">Protected Dial</span>
<span className="font-body-sm text-body-sm font-mono text-on-surface font-semibold">07••••••419</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="key" className="text-[20px] text-primary" />
<span className="font-label-lg text-label-lg font-bold text-on-surface">Buyer Handover Verification</span>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-secondary font-bold uppercase tracking-wider">Geofenced</span>
</div>
<p className="font-body-sm text-body-sm text-secondary leading-snug">
        Ask buyer for code upon physical delivery inspection at handover. Code releases escrow instantly.
      </p>

<div className="grid grid-cols-6 gap-2 py-space-xs">
<div className="h-12 rounded-lg bg-surface-container-low flex items-center justify-center">
<span className="font-headline-md text-headline-md font-bold text-outline-variant select-none">-</span>
</div>
<div className="h-12 rounded-lg bg-surface-container-low flex items-center justify-center">
<span className="font-headline-md text-headline-md font-bold text-outline-variant select-none">-</span>
</div>
<div className="h-12 rounded-lg bg-surface-container-low flex items-center justify-center">
<span className="font-headline-md text-headline-md font-bold text-outline-variant select-none">-</span>
</div>
<div className="h-12 rounded-lg bg-surface-container-low flex items-center justify-center">
<span className="font-headline-md text-headline-md font-bold text-outline-variant select-none">-</span>
</div>
<div className="h-12 rounded-lg bg-surface-container-low flex items-center justify-center">
<span className="font-headline-md text-headline-md font-bold text-outline-variant select-none">-</span>
</div>
<div className="h-12 rounded-lg bg-surface-container-low flex items-center justify-center">
<span className="font-headline-md text-headline-md font-bold text-outline-variant select-none">-</span>
</div>
</div>
<div className="flex items-center gap-space-xs bg-surface-container-low p-space-xs rounded-lg text-secondary">
<Icon name="info" className="text-[16px] text-primary shrink-0" />
<span className="font-label-sm text-label-sm">Keypad will activate upon arrival at Lugogo corridor geo-fence.</span>
</div>
</div>

<div className="flex flex-col gap-space-sm pt-space-xs">
<button className="w-full h-12 rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-space-xs shadow-md active:scale-[0.98] transition-transform" type="button">
<Icon name="inventory_2" className="text-[20px]" />
<span>Confirm Package Collected from Seller</span>
</button>
<button className="w-full py-2.5 flex items-center justify-center gap-1.5 font-label-md text-label-md font-bold text-error active:opacity-75 transition-opacity" type="button">
<Icon name="warning" className="text-[18px]" />
<span>Report Merchant Issue / Sealed Box Tampered</span>
</button>
</div>
</div>
</div></main>
    </div>
  );
};

export default RiderSellerPickupDeliveryDetailLight;
