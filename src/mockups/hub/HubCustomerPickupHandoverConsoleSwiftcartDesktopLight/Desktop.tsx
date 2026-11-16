// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/hub/hub_customer_pickup_handover_console_swiftcart_desktop_light/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface DesktopProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Desktop: React.FC<DesktopProps> = (props) => {
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
      
      <div className="pl-0 min-h-screen flex flex-col"><main className="w-full pt-16 bg-surface flex-1"><div className="flex flex-col w-full p-space-lg gap-space-lg">



<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Today Station Pickups</span>
<Icon name="task_alt" className="text-primary text-[20px]" />
</div>
<div>
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-on-surface">184</span>
<span className="font-body-md text-body-md text-on-surface-variant">/ 209 Target</span>
</div>
<div className="mt-space-xs flex items-center justify-between gap-space-sm">
<div className="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
<div className="bg-primary h-2 rounded-full" style={{"width":"88%"}}></div>
</div>
<span className="font-label-sm text-label-sm text-primary font-bold">88%</span>
</div>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Completed daily allocated quota</span>
</div>

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Awaiting Collection</span>
<Icon name="shelves" className="text-secondary text-[20px]" />
</div>
<div>
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-on-surface">42</span>
<span className="font-body-md text-body-md text-on-surface-variant">Parcels Staged</span>
</div>
<div className="mt-space-xs grid grid-cols-4 gap-1 text-center">
<div className="bg-surface-container-low p-1 rounded"><span className="font-label-sm text-label-sm block text-on-surface-variant">P1</span><span className="font-label-md text-label-md font-bold text-on-surface">12</span></div>
<div className="bg-surface-container-low p-1 rounded"><span className="font-label-sm text-label-sm block text-on-surface-variant">P2</span><span className="font-label-md text-label-md font-bold text-on-surface">15</span></div>
<div className="bg-surface-container-low p-1 rounded"><span className="font-label-sm text-label-sm block text-on-surface-variant">P3</span><span className="font-label-md text-label-md font-bold text-on-surface">9</span></div>
<div className="bg-surface-container-low p-1 rounded"><span className="font-label-sm text-label-sm block text-on-surface-variant">P4</span><span className="font-label-md text-label-md font-bold text-on-surface">6</span></div>
</div>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Ready in front shelving Bays P1-P4</span>
</div>

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Avg Counter Handover</span>
<Icon name="timer" className="text-tertiary text-[20px]" />
</div>
<div>
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-on-surface">1.8</span>
<span className="font-body-md text-body-md text-on-surface">mins</span>
</div>
<div className="mt-space-xs flex items-center gap-space-xs text-tertiary">
<Icon name="arrow_downward" className="text-[16px]" />
<span className="font-label-md text-label-md font-bold">-28s vs target (&lt;2.5 mins)</span>
</div>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Rapid queue turnaround at William St</span>
</div>

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Escrow Released Counter</span>
<Icon name="lock_open" className="text-tertiary text-[20px]" />
</div>
<div>
<div className="flex items-baseline gap-1">
<span className="font-currency-code text-currency-code text-tertiary font-bold whitespace-nowrap">UGX</span>
<span className="font-headline-md text-headline-md text-on-surface font-extrabold">12,640,000</span>
</div>
<span className="font-body-sm text-body-sm text-tertiary font-medium block mt-space-xs">Instant SMS disbursement triggered</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">41 merchant settlement wallets credited</span>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<section className="lg:col-span-5 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm">
<label className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-wider font-bold">Customer Handshake Search</label>
<div className="flex items-center gap-space-xs">
<div className="relative flex-1">
<Icon name="dialpad" className="absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]" />
<input className="w-full pl-10 pr-3 py-2 bg-surface-container-low rounded-lg font-code-display text-body-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container" placeholder="Enter OTP or Waybill..." type="text" value="849-201" />
</div>
<button className="px-space-md py-2 bg-primary-container text-on-primary rounded-lg font-label-md text-label-md flex items-center gap-1 shadow-sm hover:opacity-95 transition-all" type="button">
<Icon name="barcode_scanner" className="text-[18px]" />
<span>Scan Gun</span>
</button>
</div>
</div>

<div className="flex items-center gap-1 p-1 bg-surface-container-high rounded-xl">
<button className="flex-1 py-1.5 px-space-sm bg-surface-container-lowest text-primary rounded-lg font-label-md text-label-md shadow-sm text-center font-bold flex items-center justify-center gap-1" type="button">
<span>Arrived at Counter</span>
<span className="px-1.5 py-0.2 rounded-full bg-primary-fixed text-primary font-bold text-[10px]">3</span>
</button>
<button className="flex-1 py-1.5 px-space-sm text-on-surface-variant hover:text-on-surface rounded-lg font-label-md text-label-md text-center transition-colors" type="button">
<span>Ready (39)</span>
</button>
<button className="flex-1 py-1.5 px-space-sm text-on-surface-variant hover:text-on-surface rounded-lg font-label-md text-label-md text-center transition-colors flex items-center justify-center gap-1" type="button">
<span>Expiring (8)</span>
<span className="w-2 h-2 rounded-full bg-error"></span>
</button>
</div>

<div className="flex flex-col gap-space-sm">

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-md flex flex-col gap-space-sm relative overflow-hidden bg-gradient-to-r from-primary/5 via-transparent to-transparent">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary"></div>
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-lg text-label-lg font-bold">GN</div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">Grace Nakato</span>
<span className="px-1.5 py-0.5 rounded bg-primary-fixed text-primary font-label-sm text-label-sm font-bold">Desk #01</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">+256 701 ••• 582</span>
</div>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant block uppercase font-bold">Escrow Locked</span>
<span className="font-price-display text-price-display text-on-surface font-extrabold text-[16px] whitespace-nowrap">UGX 325,000</span>
</div>
</div>

<div className="flex flex-col gap-1.5 pt-1">
<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low">
<div className="flex items-center gap-space-xs">
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-bold">BIN P2-08</span>
<span className="font-body-sm text-body-sm text-on-surface font-semibold truncate max-w-[190px]">SoundCore Space One</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-code-display">#SC-98241</span>
</div>
<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low">
<div className="flex items-center gap-space-xs">
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-bold">BIN P2-09</span>
<span className="font-body-sm text-body-sm text-on-surface font-semibold truncate max-w-[190px]">Anker PowerBank 20k</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-code-display">#SC-98218</span>
</div>
</div>
<div className="flex items-center justify-between pt-1">
<div className="flex items-center gap-1 text-primary">
<Icon name="check_circle" className="text-[16px]" />
<span className="font-label-sm text-label-sm font-bold">Matched OTP: 849-201</span>
</div>
<span className="font-label-sm text-label-sm uppercase font-bold px-2 py-0.5 bg-primary-container text-on-primary rounded">Active Target</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-label-lg text-label-lg font-bold">RK</div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">Ronald Katende</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-bold">Desk #02</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">+256 701 ••• 419</span>
</div>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant block uppercase font-bold">Escrow Hold</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold text-[15px] whitespace-nowrap">UGX 195,000</span>
</div>
</div>
<div className="p-2 rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-bold">BIN P1-14</span>
<span className="font-body-sm text-body-sm text-on-surface font-semibold truncate max-w-[210px]">Oraimo Smart Watch ES-2</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Code Sent</span>
</div>
<div className="flex items-center justify-between pt-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">1 Package ready in Bay</span>
<button className="px-space-md py-1 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-container-highest transition-colors" type="button">Load Console</button>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-error-container text-on-error-container flex items-center justify-center font-label-lg text-label-lg font-bold">SN</div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">Sarah Nabirye</span>
<span className="px-1.5 py-0.5 rounded bg-error/10 text-error font-label-sm text-label-sm font-bold">Exp 18:00 EAT</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">+256 788 ••• 190</span>
</div>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant block uppercase font-bold">Escrow Hold</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold text-[15px] whitespace-nowrap">UGX 95,000</span>
</div>
</div>
<div className="p-2 rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-bold">BIN P3-02</span>
<span className="font-body-sm text-body-sm text-on-surface font-semibold truncate max-w-[210px]">Victoria Secret Body Mist</span>
</div>
<span className="font-label-sm text-label-sm text-error font-bold">Final Day</span>
</div>
<div className="flex items-center justify-between pt-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">FIFO Auto-Flag Active</span>
<button className="px-space-md py-1 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-container-highest transition-colors" type="button">Load Console</button>
</div>
</div>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-xs text-on-surface-variant">
<Icon name="cloud_done" className="text-[16px] text-tertiary" />
<span className="font-body-sm text-body-sm">Inventory synced with Kampala Vault 44s ago</span>
</div>
<a className="font-label-sm text-label-sm text-primary font-bold hover:underline" href="#">View Overdue (11)</a>
</div>
</section>

<section className="lg:col-span-7 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-14 h-14 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-headline-md text-headline-md font-extrabold shadow-sm">GN</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">Grace Nakato</span>
<span className="px-2 py-0.5 rounded-full bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm font-bold flex items-center gap-0.5">
<Icon name="verified" className="text-[14px]" /> Verified Buyer Tier 3
              </span>
</div>
<div className="flex items-center gap-space-md mt-0.5 text-on-surface-variant">
<span className="font-body-sm text-body-sm">14 previous pickups (100% success)</span>
<span className="w-1 h-1 rounded-full bg-outline-variant"></span>
<span className="font-body-sm text-body-sm text-tertiary font-semibold">National ID: CM980 •••• 91X</span>
</div>
</div>
</div>
<div className="px-space-md py-1.5 rounded-xl bg-surface-container-low flex flex-col items-end">
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-bold">Assigned Counter</span>
<span className="font-label-lg text-label-lg text-primary font-extrabold">DESK #01 READY</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="inventory_2" className="text-primary text-[20px]" />
<span className="font-label-lg text-label-lg text-on-surface uppercase font-bold">Physical Parcels for Handshake (2 Items)</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-bold px-2 py-0.5 bg-emerald-escrow/10 rounded">All 2 Barcodes Scanned</span>
</div>
<div className="flex flex-col gap-space-xs">

<div className="p-space-md rounded-lg bg-surface-container-low flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary font-bold shadow-xs">
<Icon name="headphones" className="text-[24px]" />
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">SoundCore Space One (Noise Cancelling)</span>
<div className="flex items-center gap-space-sm text-on-surface-variant">
<span className="font-label-sm text-label-sm font-code-display bg-surface-container-high px-1.5 py-0.5 rounded">BIN P2-08</span>
<span className="font-body-sm text-body-sm">Waybill #SC-98241</span>
<span className="w-1 h-1 rounded-full bg-outline-variant"></span>
<span className="font-body-sm text-body-sm text-tertiary font-medium">Sealed Retail Box</span>
</div>
</div>
</div>
<div className="flex items-center sm:flex-col items-end justify-between w-full sm:w-auto">
<span className="font-price-display text-price-display text-on-surface font-extrabold text-[16px] whitespace-nowrap">UGX 180,000</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold flex items-center gap-0.5">
<Icon name="check" className="text-[14px]" /> Verified
              </span>
</div>
</div>

<div className="p-space-md rounded-lg bg-surface-container-low flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary font-bold shadow-xs">
<Icon name="battery_charging_full" className="text-[24px]" />
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Anker PowerCore 20k mAh USB-C</span>
<div className="flex items-center gap-space-sm text-on-surface-variant">
<span className="font-label-sm text-label-sm font-code-display bg-surface-container-high px-1.5 py-0.5 rounded">BIN P2-09</span>
<span className="font-body-sm text-body-sm">Waybill #SC-98218</span>
<span className="w-1 h-1 rounded-full bg-outline-variant"></span>
<span className="font-body-sm text-body-sm text-tertiary font-medium">Anti-Tamper Tape OK</span>
</div>
</div>
</div>
<div className="flex items-center sm:flex-col items-end justify-between w-full sm:w-auto">
<span className="font-price-display text-price-display text-on-surface font-extrabold text-[16px] whitespace-nowrap">UGX 145,000</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold flex items-center gap-0.5">
<Icon name="check" className="text-[14px]" /> Verified
              </span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="w-6 h-6 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm flex items-center justify-center font-bold">1</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Customer Delivery OTP Authorization</span>
</div>
<button className="font-label-md text-label-md text-primary font-bold hover:underline flex items-center gap-1" type="button">
<Icon name="outgoing_mail" className="text-[16px]" />
<span>Resend SMS Code</span>
</button>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Customer must supply the 6-digit cryptographic PIN delivered via SMS or SwiftCart App.</p>

<div className="flex items-center justify-center gap-space-sm py-space-sm">
<div className="w-12 h-14 rounded-xl bg-surface-container-low flex items-center justify-center font-headline-lg text-headline-lg text-on-surface font-extrabold shadow-inner">8</div>
<div className="w-12 h-14 rounded-xl bg-surface-container-low flex items-center justify-center font-headline-lg text-headline-lg text-on-surface font-extrabold shadow-inner">4</div>
<div className="w-12 h-14 rounded-xl bg-surface-container-low flex items-center justify-center font-headline-lg text-headline-lg text-on-surface font-extrabold shadow-inner">9</div>
<span className="font-headline-lg text-headline-lg text-outline-variant font-bold mx-1">-</span>
<div className="w-12 h-14 rounded-xl bg-surface-container-low flex items-center justify-center font-headline-lg text-headline-lg text-on-surface font-extrabold shadow-inner">2</div>
<div className="w-12 h-14 rounded-xl bg-surface-container-low flex items-center justify-center font-headline-lg text-headline-lg text-on-surface font-extrabold shadow-inner">0</div>
<div className="w-12 h-14 rounded-xl bg-surface-container-low flex items-center justify-center font-headline-lg text-headline-lg text-on-surface font-extrabold shadow-inner">1</div>
</div>
<div className="p-space-sm rounded-lg bg-emerald-escrow/10 text-emerald-escrow flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="format_image_left" className="text-[20px]" />
<span className="font-label-md text-label-md font-bold">Ledger Match Verified with Central Kampala Settlement Node</span>
</div>
<span className="font-body-sm text-body-sm font-semibold">Latency 118ms</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="w-6 h-6 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm flex items-center justify-center font-bold">2</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Physical ID &amp; Parcel Integrity Verification</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Compliance mandatory</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm">
<label className="flex items-center gap-space-xs p-space-sm rounded-lg bg-surface-container-low cursor-pointer">
<input checked={true} className="w-4 h-4 text-primary rounded focus:ring-0 cursor-pointer" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface font-medium leading-tight">Customer Physical ID Checked</span>
</label>
<label className="flex items-center gap-space-xs p-space-sm rounded-lg bg-surface-container-low cursor-pointer">
<input checked={true} className="w-4 h-4 text-primary rounded focus:ring-0 cursor-pointer" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface font-medium leading-tight">Tamper Tape Inspected</span>
</label>
<label className="flex items-center gap-space-xs p-space-sm rounded-lg bg-surface-container-low cursor-pointer">
<input checked={true} className="w-4 h-4 text-primary rounded focus:ring-0 cursor-pointer" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface font-medium leading-tight">Outer Packaging Intact</span>
</label>
</div>

<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">Customer Touchscreen Signature</span>
<button className="font-label-sm text-label-sm text-outline hover:text-on-surface" type="button">Clear / Redo</button>
</div>
<div className="w-full h-24 rounded-xl bg-surface-container-low flex flex-col justify-between p-space-sm relative overflow-hidden">

<svg className="w-full h-12 text-primary" fill="none" preserveAspectRatio="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 500 80">
<path d="M10,40 Q 60,10 110,45 T 210,35 T 310,55 T 410,25 T 490,40" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<div className="flex items-center justify-between text-on-surface-variant z-10">
<span className="font-body-sm text-body-sm">Digitally captured on Desk #01 Stylus Pad</span>
<span className="font-label-sm text-label-sm font-code-display">14:38:42 EAT</span>
</div>
</div>
</div>
</div>

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
<div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant">
<Icon name="badge" className="text-[20px]" />
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">Counter Agent</span>
<span className="font-label-md text-label-md text-on-surface font-bold">Denis Ssenkumba (#SC-KLA-092)</span>
</div>
</div>
<div className="flex items-center gap-space-xs">
<button className="px-space-md py-2.5 rounded-xl bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center gap-1" type="button">
<Icon name="print" className="text-[18px]" />
<span>Print Handover (4x6)</span>
</button>
<button className="px-space-md py-2.5 rounded-xl bg-surface-container-low text-error font-label-md text-label-md hover:bg-error-container transition-colors flex items-center gap-1" type="button">
<Icon name="cancel" className="text-[18px]" />
<span>Customer Rejected</span>
</button>
</div>
</div>

<button className="w-full py-4 rounded-xl bg-primary-container text-on-primary font-headline-sm text-headline-sm shadow-md hover:shadow-lg hover:opacity-95 transition-all flex items-center justify-center gap-space-sm active:scale-[0.99]" type="button">
<Icon name="lock_open" className="text-[24px]" />
<span className="whitespace-nowrap">Release Goods &amp; Confirm Escrow Disbursement (UGX 325,000)</span>
</button>
</div>
</section>
</div>
</div></main></div>
    </div>
  );
};

export default Desktop;
