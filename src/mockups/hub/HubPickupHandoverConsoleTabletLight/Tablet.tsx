// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/hub/hub_pickup_handover_console_tablet_light/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface TabletProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Tablet: React.FC<TabletProps> = (props) => {
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
      
      <main className="w-full pt-32 pb-24 bg-surface min-h-screen"><div className="flex flex-col w-full">

<div className="w-full bg-surface-container-low px-space-md py-space-xs flex flex-wrap items-center justify-between gap-y-2 text-on-surface-variant shadow-sm -mt-2 mb-space-md rounded-xl">
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-space-xs">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary"></span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface">Sub-GHz Handheld RF Linked</span>
</div>
<span className="text-outline-variant">•</span>
<div className="flex items-center gap-space-xs">
<Icon name="bluetooth_connected" className="text-[15px] text-tertiary" />
<span className="font-label-sm text-label-sm">Peripherals (Scanner &amp; Scale) OK</span>
</div>
<span className="text-outline-variant">•</span>
<div className="flex items-center gap-space-xs">
<Icon name="alt_route" className="text-[15px] text-secondary" />
<span className="font-label-sm text-label-sm">Edge Node: Nakasero Relay (12ms)</span>
</div>
</div>
<div className="flex items-center gap-space-md ml-auto">
<div className="flex items-center gap-space-xs bg-surface-container-lowest px-2 py-0.5 rounded shadow-sm">
<Icon name="battery_charging_90" className="text-tertiary text-[16px]" />
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Tablet Battery 94%</span>
</div>
<div className="flex items-center gap-space-xs bg-surface-container-lowest px-2 py-0.5 rounded shadow-sm">
<Icon name="check_circle" className="text-tertiary text-[16px]" />
<span className="font-label-sm text-label-sm text-tertiary font-bold">STATION A LOCKED</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-lg">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col justify-between">
<div className="flex items-start justify-between">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Today's Handed Over</span>
<span className="bg-tertiary/10 text-tertiary p-1.5 rounded-full flex items-center justify-center">
<Icon name="verified" className="text-[18px]" />
</span>
</div>
<div className="mt-space-sm">
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-on-surface tracking-tight">84</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Parcels</span>
</div>
<div className="flex items-center gap-1.5 mt-1 bg-tertiary/10 px-2 py-0.5 rounded-full w-fit">
<Icon name="payments" className="text-tertiary text-[14px]" />
<span className="font-label-sm text-label-sm text-tertiary font-semibold whitespace-nowrap">UGX 18,450,000 released</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col justify-between">
<div className="flex items-start justify-between">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Pending Pickup</span>
<span className="bg-secondary/10 text-secondary p-1.5 rounded-full flex items-center justify-center">
<Icon name="front_hand" className="text-[18px]" />
</span>
</div>
<div className="mt-space-sm">
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-on-surface tracking-tight">19</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Parcels</span>
</div>
<div className="flex items-center gap-1.5 mt-1 bg-surface-container-high px-2 py-0.5 rounded-full w-fit">
<Icon name="storefront" className="text-secondary text-[14px]" />
<span className="font-label-sm text-label-sm text-secondary font-semibold">Ready for physical handover</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col justify-between">
<div className="flex items-start justify-between">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Overdue (&gt;48h SLA)</span>
<span className="bg-primary/10 text-primary p-1.5 rounded-full flex items-center justify-center">
<Icon name="alarm_on" className="text-[18px]" />
</span>
</div>
<div className="mt-space-sm">
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-primary tracking-tight">3</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Parcels</span>
</div>
<div className="flex items-center gap-1.5 mt-1 bg-primary/10 px-2 py-0.5 rounded-full w-fit">
<Icon name="ring_volume" className="text-primary text-[14px]" />
<span className="font-label-sm text-label-sm text-primary font-semibold">Automated call cycle active</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col justify-between">
<div className="flex items-start justify-between">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Hardware Status</span>
<span className="bg-tertiary/10 text-tertiary p-1.5 rounded-full flex items-center justify-center">
<Icon name="barcode_scanner" className="text-[18px]" />
</span>
</div>
<div className="mt-space-sm">
<div className="font-label-lg text-label-lg text-on-surface font-bold truncate">Zebra DS3678 Active</div>
<div className="flex items-center gap-1.5 mt-1 bg-tertiary/10 px-2 py-0.5 rounded-full w-fit">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
<span className="font-label-sm text-label-sm text-tertiary font-semibold">BT Gun Active (Station A)</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<div className="lg:col-span-4 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_2px_8px_rgba(14,27,77,0.04)]">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wide block mb-1" htmlFor="waybill-search">Continuous Scanner Input</label>
<div className="relative flex items-center">
<Icon name="barcode_scanner" className="absolute left-3 text-primary text-[20px]" />
<input className="w-full bg-surface-container pl-10 pr-24 py-2.5 rounded-xl font-label-md text-label-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-inner" id="waybill-search" placeholder="Scan waybill or customer phone..." type="text" value="SC-9952" />
<button className="absolute right-2 px-2.5 py-1 bg-primary text-on-primary font-label-sm text-label-sm rounded-lg flex items-center gap-1 shadow-sm active:scale-95 transition-transform">
<Icon name="qr_code_scanner" className="text-[14px]" />
<span>SCAN</span>
</button>
</div>

<div className="flex items-center gap-1.5 overflow-x-auto pt-3 pb-1">
<button className="bg-primary text-on-primary px-2.5 py-1 rounded-full font-label-sm text-label-sm whitespace-nowrap shadow-sm">All Ready (19)</button>
<button className="bg-surface-container hover:bg-surface-container-high text-on-surface px-2.5 py-1 rounded-full font-label-sm text-label-sm whitespace-nowrap transition-colors">Arrived Today (12)</button>
<button className="bg-surface-container hover:bg-surface-container-high text-on-surface px-2.5 py-1 rounded-full font-label-sm text-label-sm whitespace-nowrap transition-colors">Priority &gt;24h (5)</button>
<button className="bg-surface-container hover:bg-surface-container-high text-on-surface px-2.5 py-1 rounded-full font-label-sm text-label-sm whitespace-nowrap transition-colors">Staged Bay A (7)</button>
</div>
</div>

<div className="flex flex-col gap-space-xs">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_4px_14px_rgba(218,55,0,0.12)] border-l-4 border-l-primary relative">
<div className="flex items-start justify-between gap-space-sm mb-1.5">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-primary tracking-tight font-extrabold">#SC-9952</span>
<span className="bg-primary/10 text-primary font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Active Handover</span>
</div>
<span className="bg-surface-container-high text-on-surface font-label-sm text-label-sm px-2 py-0.5 rounded font-mono font-bold">BAY B4-02</span>
</div>
<div className="flex items-baseline justify-between mb-1">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Sarah Namubiru</span>
<span className="font-price-display text-price-display text-primary font-extrabold whitespace-nowrap">UGX 248,500</span>
</div>
<div className="font-body-sm text-body-sm text-on-surface-variant truncate mb-2 flex items-center gap-1">
<Icon name="headphones" className="text-[16px] text-tertiary" />
<span>SoundCore Space One ANC (Jet Black)</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-2 border-t border-surface-container-high">
<span className="flex items-center gap-1">
<Icon name="pin_drop" className="text-[14px] text-tertiary" />
<span>Acacia Mall Gate 2</span>
</span>
<span className="text-tertiary font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
<span>Customer Present</span>
</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_2px_8px_rgba(14,27,77,0.03)] hover:bg-surface-container-low cursor-pointer transition-all">
<div className="flex items-start justify-between gap-space-sm mb-1">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-on-surface font-bold">#SC-9960</span>
<span className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm px-1.5 py-0.5 rounded">Awaiting PIN</span>
</div>
<span className="bg-surface-container-high text-on-surface font-label-sm text-label-sm px-2 py-0.5 rounded font-mono font-bold">BAY A1-14</span>
</div>
<div className="flex items-baseline justify-between mb-1">
<span className="font-body-md text-body-md text-on-surface font-medium">David Opio</span>
<span className="font-label-lg text-label-lg text-on-surface font-bold whitespace-nowrap">UGX 115,000</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>In Hub Waiting Area</span>
<span className="text-secondary font-semibold">Arrived 14m ago</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_2px_8px_rgba(14,27,77,0.03)] hover:bg-surface-container-low cursor-pointer transition-all">
<div className="flex items-start justify-between gap-space-sm mb-1">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-on-surface font-bold">#SC-9964</span>
<span className="bg-secondary/10 text-secondary font-label-sm text-label-sm px-1.5 py-0.5 rounded">En Route Hub</span>
</div>
<span className="bg-surface-container-high text-on-surface font-label-sm text-label-sm px-2 py-0.5 rounded font-mono font-bold">BAY C2-09</span>
</div>
<div className="flex items-baseline justify-between mb-1">
<span className="font-body-md text-body-md text-on-surface font-medium">Brenda N.</span>
<span className="font-label-lg text-label-lg text-on-surface font-bold whitespace-nowrap">UGX 145,000</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>Awaiting Customer Arrival</span>
<span className="text-on-surface-variant font-mono">Boda Drop-off</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_2px_8px_rgba(14,27,77,0.03)] hover:bg-surface-container-low cursor-pointer transition-all">
<div className="flex items-start justify-between gap-space-sm mb-1">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-primary font-bold">#SC-9971</span>
<span className="bg-primary-container text-on-primary-container font-label-sm text-label-sm px-1.5 py-0.5 rounded font-bold">Dual-Auth Safe</span>
</div>
<span className="bg-error/10 text-error font-label-sm text-label-sm px-2 py-0.5 rounded font-mono font-bold">SAFE H-01</span>
</div>
<div className="flex items-baseline justify-between mb-1">
<span className="font-body-md text-body-md text-on-surface font-medium">Ronald Kato</span>
<span className="font-label-lg text-label-lg text-primary font-bold whitespace-nowrap">UGX 1,800,000</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>Apple iPad Pro M2 11"</span>
<span className="text-error font-semibold flex items-center gap-1">
<Icon name="lock" className="text-[13px]" /> Supervisor Pin
            </span>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md flex items-center justify-between gap-space-sm shadow-sm mt-space-xs">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center shadow-sm text-secondary">
<Icon name="local_shipping" className="text-[22px]" />
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">SafeBoda Linehaul LH-09</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Scheduled Hub Offload • 8 parcels</span>
</div>
</div>
<button className="bg-surface-container-lowest text-on-surface font-label-sm text-label-sm px-3 py-1.5 rounded-lg shadow-sm font-bold active:scale-95 transition-transform">
          Receive
        </button>
</div>
</div>

<div className="lg:col-span-8 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-[0_4px_20px_rgba(14,27,77,0.06)] flex flex-col gap-space-md">

<div className="flex flex-wrap items-center justify-between gap-space-md pb-space-sm border-b border-surface-container-high">
<div>
<div className="flex items-center gap-space-sm">
<h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">Waybill #SC-9952</h1>
<span className="bg-tertiary/10 text-tertiary font-label-sm text-label-sm px-2.5 py-1 rounded-full flex items-center gap-1 font-bold">
<Icon name="verified_user" className="text-[15px]" />
                Swift Escrow Protected
              </span>
</div>
<div className="flex items-center gap-space-sm mt-1 text-on-surface-variant font-body-sm text-body-sm">
<span>Origin Hub: Industrial Area #KLA-12</span>
<span>•</span>
<span className="text-on-surface font-semibold font-mono">Consignment Ref: C-8819-UG</span>
</div>
</div>

<div className="bg-surface-container-high px-space-md py-2 rounded-xl flex items-center gap-3">
<div className="flex flex-col text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Physical Location</span>
<span className="font-headline-sm text-headline-sm text-primary tracking-tight font-extrabold">SHELF B4-02</span>
</div>
<div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center">
<Icon name="shelves" className="text-[20px]" />
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md bg-surface-container-low rounded-xl p-space-md">

<div className="flex flex-col justify-between">
<div className="flex items-center gap-space-sm mb-space-xs">
<div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold font-headline-sm">
                SN
              </div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Sarah Namubiru</span>
<span className="bg-tertiary/15 text-tertiary font-label-sm text-label-sm px-1.5 py-0.5 rounded font-bold">MTN KYC OK</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant font-mono">+256 701 ••• 418</span>
</div>
</div>
<div className="text-on-surface-variant font-body-sm text-body-sm bg-surface-container-lowest p-2 rounded-lg mt-2">
<span className="font-semibold text-on-surface">Authorized Pickup Agent:</span> Self (Primary Buyer ID verified via National ID Nin #CM8902•••)
            </div>
</div>

<div className="flex flex-col justify-between bg-surface-container-lowest p-space-md rounded-xl">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Escrow Release Value</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold bg-tertiary/10 px-2 py-0.5 rounded">MoMo Escrow Locked</span>
</div>
<div className="my-1">
<span className="font-price-display text-price-display text-on-surface font-extrabold tracking-tight whitespace-nowrap">UGX 248,500</span>
<span className="font-body-sm text-body-sm text-on-surface-variant ml-1 font-mono">Net Vendor Payout</span>
</div>
<div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant pt-2 border-t border-surface-container-high">
<span>Item: SoundCore Space One</span>
<span className="text-tertiary font-semibold">Vendor: SoundTech Kampala</span>
</div>
</div>
</div>

<div className="flex items-center gap-space-md bg-surface-container-low p-space-md rounded-xl">
<div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 shadow-sm bg-surface-container-highest">
<img className="w-full h-full object-cover" data-alt="High quality studio photo of modern matte black over-ear wireless headphones packaging box sealed with tamper evident barcode sticker, clean light background." src="/images/636b8da7ddd158f2.webp" />
</div>
<div className="flex flex-col justify-center min-w-0">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface font-bold truncate">SoundCore by Anker Space One Wireless ANC</span>
<span className="bg-surface-container text-on-surface font-label-sm text-label-sm px-2 py-0.5 rounded">Qty: 1</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">SKU: SND-SPC1-BLK • Batch SN: 99482-UG-2024</span>
<div className="flex items-center gap-2 mt-1">
<span className="font-label-sm text-label-sm bg-primary/10 text-primary px-2 py-0.5 rounded font-semibold">Swift Express 1-Day</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Arrived 10:14 AM today</span>
</div>
</div>
</div>

<div className="flex flex-col gap-space-xs pt-space-xs">
<div className="flex items-center justify-between">
<div>
<span className="font-label-lg text-label-lg text-on-surface font-bold">1. Buyer Handover Security PIN</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Ask Sarah for the 6-digit SMS / App token generated at release notification.</p>
</div>
<button className="text-primary font-label-sm text-label-sm font-bold flex items-center gap-1 hover:underline">
<Icon name="sms" className="text-[16px]" />
              Resend SMS Code
            </button>
</div>

<div className="grid grid-cols-6 gap-space-sm my-2">
<div className="h-16 rounded-xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.06)] flex items-center justify-center font-headline-lg text-headline-lg text-on-surface ring-2 ring-primary">7</div>
<div className="h-16 rounded-xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.06)] flex items-center justify-center font-headline-lg text-headline-lg text-on-surface ring-2 ring-primary">3</div>
<div className="h-16 rounded-xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.06)] flex items-center justify-center font-headline-lg text-headline-lg text-on-surface ring-2 ring-primary">9</div>
<div className="h-16 rounded-xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.06)] flex items-center justify-center font-headline-lg text-headline-lg text-on-surface ring-2 ring-primary">1</div>
<div className="h-16 rounded-xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.06)] flex items-center justify-center font-headline-lg text-headline-lg text-on-surface ring-2 ring-primary">8</div>
<div className="h-16 rounded-xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.06)] flex items-center justify-center font-headline-lg text-headline-lg text-on-surface ring-2 ring-primary">4</div>
</div>

<div className="bg-tertiary/10 text-tertiary px-space-md py-2.5 rounded-xl flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="check_circle" className="text-[20px]" />
<span className="font-label-md text-label-md font-bold">Blind PIN Match Confirmed • Matches Escrow Secret Hash</span>
</div>
<span className="font-label-sm text-label-sm font-mono opacity-80">Cryptographic Proof: 18ms</span>
</div>
</div>

<div className="flex flex-col gap-space-xs pt-space-xs">
<span className="font-label-lg text-label-lg text-on-surface font-bold">2. Station Inspection Checklist</span>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm mt-1">
<label className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-container-low cursor-pointer">
<input checked={true} className="w-5 h-5 accent-tertiary rounded" type="checkbox" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-bold">Tamper Seal #SEAL-4419</span>
<span className="font-body-sm text-body-sm text-tertiary font-semibold">Intact &amp; Verified</span>
</div>
</label>
<label className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-container-low cursor-pointer">
<input checked={true} className="w-5 h-5 accent-tertiary rounded" type="checkbox" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-bold">Customer Physical Check</span>
<span className="font-body-sm text-body-sm text-tertiary font-semibold">Satisfied with condition</span>
</div>
</label>
<label className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-container-low cursor-pointer">
<input checked={true} className="w-5 h-5 accent-tertiary rounded" type="checkbox" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-bold">SKU &amp; Barcode Match</span>
<span className="font-body-sm text-body-sm text-tertiary font-semibold">Scanned by Zebra DS</span>
</div>
</label>
</div>
</div>

<div className="flex flex-col gap-space-xs pt-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface font-bold">3. Customer Acknowledgment Signature</span>
<span className="bg-tertiary/10 text-tertiary font-label-sm text-label-sm px-2 py-0.5 rounded font-bold">Captured</span>
</div>
<button className="text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm flex items-center gap-1">
<Icon name="restart_alt" className="text-[16px]" />
              Clear Signature
            </button>
</div>

<div className="w-full h-24 bg-surface-container-low rounded-xl relative flex items-center justify-center p-space-sm overflow-hidden">
<svg className="w-full h-full text-on-surface" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 500 80">
<path d="M 40 45 C 70 20, 90 70, 110 35 C 130 10, 140 50, 160 30 C 180 15, 190 60, 220 40 Q 250 20 280 45 T 340 30 C 370 20, 390 60, 420 35 C 440 20, 460 55, 480 30"></path>
<circle cx="112" cy="22" fill="currentColor" r="3"></circle>
</svg>
<div className="absolute bottom-2 right-3 font-label-sm text-label-sm text-on-surface-variant font-mono opacity-60">
              Captured via Stylus A • 10:42:19 EAT
            </div>
</div>
</div>

<div className="pt-space-sm flex flex-col sm:flex-row items-center gap-space-md">

<button className="w-full sm:flex-1 h-14 bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] text-on-primary font-label-lg text-label-lg rounded-xl shadow-[0_4px_14px_rgba(218,55,0,0.30)] flex items-center justify-center gap-2 active:scale-98 transition-all hover:brightness-105">
<Icon name="lock_open" className="text-[22px]" />
<span className="whitespace-nowrap">Confirm Handover &amp; Release Escrow (UGX 248,500)</span>
</button>
<div className="flex items-center gap-space-sm w-full sm:w-auto">
<button className="flex-1 sm:flex-initial h-14 px-space-md bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md rounded-xl flex items-center justify-center gap-1.5 transition-colors">
<Icon name="receipt_long" className="text-[18px]" />
<span>Print Slip</span>
</button>
<button className="flex-1 sm:flex-initial h-14 px-space-md bg-error/10 hover:bg-error/15 text-error font-label-md text-label-md rounded-xl flex items-center justify-center gap-1.5 transition-colors">
<Icon name="report_problem" className="text-[18px]" />
<span>Discrepancy</span>
</button>
</div>
</div>

<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm pt-space-xs border-t border-surface-container-high">
<div className="flex items-center gap-1">
<Icon name="shield" className="text-[14px]" />
<span>Agent Signature: William Ssebaggala (#UG-8820)</span>
</div>
<div className="font-mono text-label-sm text-label-sm">
            Core Sync: UG-OPS-04 (Kampala Main Ledger)
          </div>
</div>
</div>
</div>
</div>
</div></main>
<footer className="fixed bottom-0 left-0 right-0 z-50 bg-surface-container-lowest shadow-[0_-4px_20px_rgba(14,27,77,0.06)]"><nav className="w-full max-w-3xl mx-auto px-margin py-space-sm flex items-center justify-between gap-space-xs" data-active-classes="bg-primary-container text-on-primary-container rounded-xl shadow-[0_4px_14px_rgba(218,55,0,0.30)] font-label-lg"><a aria-current="page" className="flex-1 flex flex-col items-center justify-center py-2 px-1 transition-all bg-primary-container text-on-primary-container rounded-xl shadow-[0_4px_14px_rgba(218,55,0,0.30)] font-label-lg" data-path="pickup" href="#"><Icon name="qr_code_scanner" className="text-[24px]" /><span className="font-label-sm text-label-sm mt-1">Pickup</span></a><a className="flex-1 flex flex-col items-center justify-center py-2 px-1 text-on-surface-variant hover:text-on-surface transition-all" data-path="storage" href="#"><Icon name="inventory_2" className="text-[24px]" /><span className="font-label-sm text-label-sm mt-1">Storage</span></a><a className="flex-1 flex flex-col items-center justify-center py-2 px-1 text-on-surface-variant hover:text-on-surface transition-all" data-path="dispatch" href="#"><Icon name="local_shipping" className="text-[24px]" /><span className="font-label-sm text-label-sm mt-1">Dispatch</span></a><a className="flex-1 flex flex-col items-center justify-center py-2 px-1 text-on-surface-variant hover:text-on-surface transition-all" data-path="returns" href="#"><Icon name="assignment_return" className="text-[24px]" /><span className="font-label-sm text-label-sm mt-1">Returns</span></a><a className="flex-1 flex flex-col items-center justify-center py-2 px-1 text-on-surface-variant hover:text-on-surface transition-all" data-path="station-settings" href="#"><Icon name="tune" className="text-[24px]" /><span className="font-label-sm text-label-sm mt-1">More</span></a></nav></footer>
    </div>
  );
};

export default Tablet;
