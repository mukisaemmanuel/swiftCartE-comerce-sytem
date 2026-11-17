// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/seller/seller_orders_master_detail_swiftcart_desktop/code.html
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
      
      <div className="pl-0 min-h-screen bg-surface-dark flex flex-col"><main className="relative pt-16 flex-1 w-full px-space-xl py-space-lg bg-surface-dark"><div className="flex flex-col w-full">

<div className="mb-space-md flex flex-wrap items-center justify-between gap-space-sm px-space-md py-space-xs rounded-lg bg-surface-container-low">
<div className="flex items-center gap-space-sm text-on-surface">
<div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm uppercase font-bold tracking-tight">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow animate-ping"></span>
        Payment Relay Live
      </div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Connected to Pesapal Regulatory Sandbox Node • Latency 18ms</span>
</div>
<div className="flex items-center gap-space-md font-label-sm text-label-sm text-on-surface-variant">
<span className="flex items-center gap-1"><Icon name="electric_moped" className="text-action-gradient-start text-[14px]" /> SafeBoda API: Operational</span>
<span className="text-surface-container-highest">/</span>
<span className="flex items-center gap-1"><Icon name="payments" className="text-mtn-yellow text-[14px]" /> MTN MoMo &amp; Airtel Payment: Synced</span>
</div>
</div>

<div className="flex flex-col gap-space-md mb-space-lg p-space-md rounded-xl bg-surface-container">
<div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md">

<div className="relative flex-1">
<Icon name="search" className="absolute left-3.5 top-3 text-on-surface-variant text-[20px]" />
<input className="w-full h-11 bg-surface-container-lowest rounded-lg pl-11 pr-4 font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-1 focus:ring-action-gradient-start" placeholder="Search by Order ID (#SC-...), Buyer name, Phone, or SafeBoda tracking" type="text" value="SC-98241" />
<span className="absolute right-3 top-2.5 px-1.5 py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant/70">⌘K</span>
</div>

<div className="flex flex-wrap items-center gap-space-sm">

<div className="flex items-center gap-2 h-11 px-3.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md">
<Icon name="calendar_today" className="text-on-surface-variant text-[18px]" />
<span>Today - Oct 24, 2025</span>
<Icon name="expand_more" className="text-on-surface-variant text-[16px]" />
</div>

<div className="flex items-center gap-2 h-11 px-3.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md">
<Icon name="store" className="text-emerald-escrow text-[18px]" />
<span>Nakasero Flagship Hub</span>
<Icon name="expand_more" className="text-on-surface-variant text-[16px]" />
</div>

<button className="flex items-center gap-2 h-11 px-4 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-all active:scale-95 shadow-sm" type="button">
<Icon name="file_download" className="text-[18px]" />
<span>Export Orders CSV</span>
</button>
</div>
</div>

<div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
<button className="px-3.5 py-2 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-md text-label-md whitespace-nowrap transition-colors flex items-center gap-2">
<span>All Orders</span>
<span className="px-1.5 py-0.5 rounded-full bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant">142</span>
</button>
<button className="px-3.5 py-2 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-md text-label-md whitespace-nowrap transition-colors flex items-center gap-2">
<span>Pending Dispatch</span>
<span className="px-1.5 py-0.5 rounded-full bg-action-gradient-end/20 text-action-gradient-start font-label-sm text-label-sm font-bold">6</span>
</button>
<button className="px-3.5 py-2 rounded-lg bg-action-gradient-start text-on-primary font-label-md text-label-md whitespace-nowrap flex items-center gap-2 shadow-sm font-bold">
<Icon name="two_wheeler" className="text-[16px]" />
<span>In Transit</span>
<span className="px-1.5 py-0.5 rounded-full bg-on-primary/20 text-on-primary font-label-sm text-label-sm">14</span>
</button>
<button className="px-3.5 py-2 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-md text-label-md whitespace-nowrap transition-colors flex items-center gap-2">
<span>Awaiting OTP Code</span>
<span className="px-1.5 py-0.5 rounded-full bg-amber-warning/20 text-amber-warning font-label-sm text-label-sm font-bold">8</span>
</button>
<button className="px-3.5 py-2 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-md text-label-md whitespace-nowrap transition-colors flex items-center gap-2">
<span>Delivered &amp; Released</span>
<span className="px-1.5 py-0.5 rounded-full bg-emerald-escrow/20 text-emerald-escrow font-label-sm text-label-sm font-bold">110</span>
</button>
<button className="px-3.5 py-2 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-md text-label-md whitespace-nowrap transition-colors flex items-center gap-2">
<span>Returns/Disputes</span>
<span className="px-1.5 py-0.5 rounded-full bg-danger-penalty/20 text-danger-penalty font-label-sm text-label-sm font-bold">4</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">

<div className="xl:col-span-7 flex flex-col gap-space-sm">
<div className="p-space-md rounded-xl bg-surface-container shadow-md">
<div className="flex items-center justify-between pb-space-sm mb-space-sm">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface">Live Kampala Manifest</span>
<span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm font-bold">SafeBoda Direct API</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant/70">Showing 6 of 14 Active Deliveries</span>
</div>

<div className="flex flex-col gap-2">

<div className="relative p-space-md rounded-xl bg-surface-container-high shadow-lg transition-all cursor-pointer group">
<div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-xl bg-action-gradient-start"></div>
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="px-2 py-1 rounded bg-action-gradient-end/20 text-action-gradient-start font-code-display text-body-sm font-bold tracking-wider">#SC-98241</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">14:22 EAT • 18m ago</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-action-gradient-start/15 text-action-gradient-start font-label-sm text-label-sm font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-action-gradient-start animate-ping"></span>
                    In Transit
                  </span>
</div>
<div className="text-right">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold whitespace-nowrap">UGX 380,000</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-1 font-body-sm text-body-sm">

<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant/60 font-bold">Customer</span>
<div className="flex items-center gap-1.5 text-on-surface font-medium truncate">
<Icon name="person" className="text-[16px] text-on-surface-variant" />
<span>Ronald M. (07•• ••• 419)</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<Icon name="near_me" className="text-[13px] text-action-gradient-start" />
                    Portbell Rd near MUBS, Nakawa
                  </span>
</div>

<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant/60 font-bold">Package</span>
<span className="text-on-surface font-medium truncate">1x SoundCore Space One ANC</span>
<span className="font-label-sm text-label-sm text-emerald-escrow flex items-center gap-1">
<Icon name="verified_user" className="text-[13px]" /> payment secured
                  </span>
</div>

<div className="flex flex-col md:items-end justify-center">
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface">
<Icon name="sports_motorsports" className="text-action-gradient-start text-[16px]" />
<span className="font-label-sm text-label-sm font-bold">Brian Kizito (UEF 842X)</span>
</div>
<span className="font-label-sm text-label-sm text-action-gradient-start font-bold mt-1">ETA: 14 mins left</span>
</div>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-all cursor-pointer">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="px-2 py-1 rounded bg-surface-container-highest text-on-surface font-code-display text-body-sm font-bold tracking-wider">#SC-98240</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">14:05 EAT • 35m ago</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-warning/15 text-amber-warning font-label-sm text-label-sm font-bold">
<Icon name="pin" className="text-[12px]" /> Awaiting OTP Code
                  </span>
</div>
<div className="text-right">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold whitespace-nowrap">UGX 195,000</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-1 font-body-sm text-body-sm">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant/60 font-bold">Customer</span>
<span className="text-on-surface font-medium truncate">Nantongo Grace (07•• ••• 882)</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Acacia Mall Offices, Kololo</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant/60 font-bold">Package</span>
<span className="text-on-surface font-medium truncate">1x Anker 65W GaN Fast Charger</span>
<span className="font-label-sm text-label-sm text-emerald-escrow flex items-center gap-1">
<Icon name="verified_user" className="text-[13px]" /> payment secured
                  </span>
</div>
<div className="flex flex-col md:items-end justify-center">
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface">
<Icon name="sports_motorsports" className="text-action-gradient-start text-[16px]" />
<span className="font-label-sm text-label-sm font-bold">Hamza Ssemwanga (UEX 119B)</span>
</div>
<span className="font-label-sm text-label-sm text-amber-warning font-bold mt-1">Rider At Customer Gate</span>
</div>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-all cursor-pointer">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="px-2 py-1 rounded bg-surface-container-highest text-on-surface font-code-display text-body-sm font-bold tracking-wider">#SC-98239</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">13:48 EAT • 52m ago</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm font-bold">
<Icon name="done_all" className="text-[12px]" /> Delivered &amp; Released
                  </span>
</div>
<div className="text-right">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold whitespace-nowrap">UGX 740,000</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-1 font-body-sm text-body-sm">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant/60 font-bold">Customer</span>
<span className="text-on-surface font-medium truncate">Mbabazi Denis (07•• ••• 301)</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Village Mall Residences, Bugolobi</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant/60 font-bold">Package</span>
<span className="text-on-surface font-medium truncate">2x SoundCore Flare 2 Speakers</span>
<span className="font-label-sm text-label-sm text-tertiary flex items-center gap-1">
<Icon name="payments" className="text-[13px]" /> MoMo Settled
                  </span>
</div>
<div className="flex flex-col md:items-end justify-center">
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface">
<Icon name="sports_motorsports" className="text-action-gradient-start text-[16px]" />
<span className="font-label-sm text-label-sm font-bold">Patrick Oloya (UEB 550Z)</span>
</div>
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold mt-1">OTP Verified @ 14:11</span>
</div>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-all cursor-pointer">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="px-2 py-1 rounded bg-surface-container-highest text-on-surface font-code-display text-body-sm font-bold tracking-wider">#SC-98238</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">13:15 EAT • 1h 25m ago</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-action-gradient-start/15 text-action-gradient-start font-label-sm text-label-sm font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-action-gradient-start animate-ping"></span>
                    In Transit
                  </span>
</div>
<div className="text-right">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold whitespace-nowrap">UGX 510,000</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-1 font-body-sm text-body-sm">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant/60 font-bold">Customer</span>
<span className="text-on-surface font-medium truncate">Ainebyoona Ivan (07•• ••• 994)</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Ministers Village, Ntinda</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant/60 font-bold">Package</span>
<span className="text-on-surface font-medium truncate">1x SoundCore Liberty 4 Pro</span>
<span className="font-label-sm text-label-sm text-emerald-escrow flex items-center gap-1">
<Icon name="verified_user" className="text-[13px]" /> payment secured
                  </span>
</div>
<div className="flex flex-col md:items-end justify-center">
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface">
<Icon name="sports_motorsports" className="text-action-gradient-start text-[16px]" />
<span className="font-label-sm text-label-sm font-bold">Simon Peter Kato (UFA 721A)</span>
</div>
<span className="font-label-sm text-label-sm text-action-gradient-start font-bold mt-1">ETA: 6 mins left</span>
</div>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-all cursor-pointer">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="px-2 py-1 rounded bg-surface-container-highest text-on-surface font-code-display text-body-sm font-bold tracking-wider">#SC-98237</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">12:50 EAT • 1h 50m ago</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-danger-penalty/15 text-danger-penalty font-label-sm text-label-sm font-bold">
<Icon name="warning" className="text-[12px]" /> Dispute Opened
                  </span>
</div>
<div className="text-right">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold whitespace-nowrap">UGX 125,000</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-1 font-body-sm text-body-sm">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant/60 font-bold">Customer</span>
<span className="text-on-surface font-medium truncate">Tumusiime Brenda (07•• ••• 110)</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Tank Hill Rd, Muyenga</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant/60 font-bold">Package</span>
<span className="text-on-surface font-medium truncate">1x Anker 20,000mAh PowerBank</span>
<span className="font-label-sm text-label-sm text-danger-penalty flex items-center gap-1">
<Icon name="lock_clock" className="text-[13px]" /> Payout Frozen
                  </span>
</div>
<div className="flex flex-col md:items-end justify-center">
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface">
<Icon name="sports_motorsports" className="text-action-gradient-start text-[16px]" />
<span className="font-label-sm text-label-sm font-bold">Godfrey Walusimbi (UER 902F)</span>
</div>
<span className="font-label-sm text-label-sm text-danger-penalty font-bold mt-1">Seal Tampered Claim</span>
</div>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-between pt-space-md mt-space-sm border-t border-surface-container-highest/40 font-body-sm text-body-sm text-on-surface-variant">
<span>Showing 1-5 of 14 Active Batches</span>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md disabled:opacity-40">Previous</button>
<span className="px-2 font-bold text-on-surface">1</span>
<button className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md">Next</button>
</div>
</div>
</div>
</div>

<div className="xl:col-span-5 flex flex-col gap-space-md">

<div className="p-space-md rounded-xl bg-surface-container shadow-xl flex flex-col gap-space-md">

<div className="flex items-start justify-between pb-space-sm border-b border-surface-container-highest/50">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-code-display text-price-display text-on-surface font-extrabold tracking-wider">#SC-98241</span>
<span className="px-2 py-0.5 rounded-full bg-action-gradient-start/15 text-action-gradient-start font-label-sm text-label-sm font-bold uppercase">SafeBoda Express</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Placed: Today, 14:04 EAT • Direct Payment ID: #ESC-UG-88192-KC</span>
</div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface transition-all active:scale-95 shadow-sm" title="Print Packing Slip" type="button">
<Icon name="receipt_long" className="text-[19px]" />
</button>
<button className="p-2 rounded-lg bg-surface-container-high hover:bg-surface-variant text-action-gradient-start transition-all active:scale-95 shadow-sm" title="Print Courier Barcode" type="button">
<Icon name="qr_code_scanner" className="text-[19px]" />
</button>
</div>
</div>

<div className="p-space-md rounded-xl bg-gradient-to-br from-surface-container-lowest to-surface-container-low border-l-4 border-emerald-escrow shadow-inner">
<div className="flex items-start gap-space-sm">
<div className="p-2 rounded-lg bg-emerald-escrow/10 text-emerald-escrow mt-0.5">
<Icon name="verified_user" className="text-[24px]" />
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface font-bold whitespace-nowrap">UGX 380,000 payment holding</span>
<span className="px-2 py-0.5 rounded bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm font-bold">Pesapal Sandbox</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Funds are secured and will release automatically when buyer <span className="text-on-surface font-bold">Ronald M.</span> inspects the package and delivers the cryptographically signed 6-digit OTP delivery token to SafeBoda courier <span className="text-on-surface font-bold">Brian Kizito</span>.
              </p>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="two_wheeler" className="text-action-gradient-start text-[20px]" />
<span className="font-headline-sm text-headline-sm text-on-surface">SafeBoda Dispatch Telemetry</span>
</div>
<span className="px-2 py-0.5 rounded bg-action-gradient-start/20 text-action-gradient-start font-label-sm text-label-sm font-bold animate-pulse">Live 5s GPS Ping</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-high flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-action-gradient-start/20 text-action-gradient-start font-bold flex items-center justify-center font-label-lg text-label-lg">
                BK
              </div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Brian Kizito</span>
<span className="px-1.5 py-0.2 rounded bg-amber-warning/20 text-amber-warning font-label-sm text-label-sm font-bold">4.92 ★</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Bajaj Boxer <span className="text-on-surface font-semibold">UEF 842X</span> • Shield Certified</span>
</div>
</div>
<a className="p-2 rounded-lg bg-surface-container hover:bg-surface-variant text-action-gradient-start transition-all" href="tel:+256752441902" title="Call Courier Masked Relay">
<Icon name="call" className="text-[20px]" />
</a>
</div>

<div className="flex flex-col gap-3 pt-1">
<div className="flex items-start gap-3">
<div className="flex flex-col items-center mt-1">
<span className="w-2.5 h-2.5 rounded-full bg-emerald-escrow"></span>
<div className="w-0.5 h-8 bg-surface-container-highest my-0.5"></div>
<span className="w-3 h-3 rounded-full bg-action-gradient-start animate-ping"></span>
<div className="w-0.5 h-8 bg-surface-container-highest my-0.5"></div>
<span className="w-2.5 h-2.5 rounded-full bg-outline-variant"></span>
</div>
<div className="flex-1 flex flex-col justify-between h-28 font-body-sm text-body-sm">

<div className="flex flex-col -mt-0.5">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-bold">Nakasero Central Hub</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold">Departed 14:12</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">SoundCore Official Flagship Store, Plot 14 Lumumba Ave</span>
</div>

<div className="flex items-center justify-between px-2 py-1 rounded bg-surface-container-high/60">
<span className="font-label-sm text-label-sm text-action-gradient-start font-bold flex items-center gap-1">
<Icon name="navigation" className="text-[14px]" /> Current: Lugogo Bypass Junction
                  </span>
<span className="font-label-sm text-label-sm text-on-surface font-bold">ETA: 14 mins</span>
</div>

<div className="flex flex-col">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-bold">Portbell Road near MUBS, Nakawa</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Delivery Target</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Ronald M. • Masked Relay 07•• ••• 419</span>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface">Order Items (1)</span>
<div className="p-3 rounded-xl bg-surface-container-lowest flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="w-14 h-14 rounded-lg bg-surface-container-high flex items-center justify-center overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="Matte black SoundCore Space One active noise cancelling over-ear headphones on dark reflective slate studio background with sharp copper lighting accent" src="/images/a90a2714368f4538.webp" />
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold leading-snug">SoundCore Space One ANC Headphones</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Color: Matte Black • SKU: <span className="font-code-display text-on-surface">SC-SP1-BLK</span></span>
<span className="font-label-sm text-label-sm text-tertiary">URSB Tax Compliant • 1 Year Warranty</span>
</div>
</div>
<div className="text-right flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant whitespace-nowrap">1 × UGX 380,000</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold whitespace-nowrap">UGX 380,000</span>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest flex flex-col gap-2 font-body-sm text-body-sm">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold mb-1">Financial Settlement Summary</span>
<div className="flex items-center justify-between text-on-surface-variant">
<span>Item Subtotal</span>
<span className="text-on-surface font-medium whitespace-nowrap">UGX 380,000</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant">
<div className="flex items-center gap-1">
<span>SafeBoda Subsidized Express Delivery</span>
<Icon name="help_outline" className="text-[14px] text-tertiary" />
</div>
<div className="flex items-center gap-2">
<span className="line-through text-on-surface-variant/60 font-body-sm text-body-sm whitespace-nowrap">UGX 3,500</span>
<span className="text-tertiary font-label-sm text-label-sm font-bold uppercase">Promo Free</span>
</div>
</div>
<div className="flex items-center justify-between text-on-surface-variant">
<div className="flex items-center gap-1">
<span>Platform Processing Fee (3.0%)</span>
<span className="font-label-sm text-label-sm text-on-surface-variant/70">URSB Sandbox</span>
</div>
<span className="text-danger-penalty font-medium whitespace-nowrap">- UGX 11,400</span>
</div>
<div className="my-1 border-t border-surface-container-highest/60"></div>
<div className="flex items-center justify-between text-on-surface">
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-extrabold">Net Merchant Payout</span>
<span className="font-label-sm text-label-sm text-emerald-escrow flex items-center gap-1">
<Icon name="bolt" className="text-[13px]" /> Automated Payout to MTN MoMo
              </span>
</div>
<div className="text-right">
<span className="font-price-display text-price-display text-emerald-escrow font-extrabold whitespace-nowrap">UGX 368,600</span>
<span className="block font-label-sm text-label-sm text-on-surface-variant">MTN MoMo: 0772 ••• 456</span>
</div>
</div>
</div>

<div className="flex flex-col gap-space-sm pt-2">

<button className="w-full h-12 rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end hover:opacity-95 text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-lg shadow-primary-container/20" type="button">
<Icon name="chat" className="text-[20px]" />
<span>Contact Buyer via Masked WhatsApp</span>
</button>

<div className="grid grid-cols-2 gap-space-sm">
<button className="h-11 rounded-xl bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md flex items-center justify-center gap-1.5 transition-all active:scale-95 shadow-sm" type="button">
<Icon name="swap_horiz" className="text-[17px] text-action-gradient-start" />
<span>Reassign Courier</span>
</button>
<button className="h-11 rounded-xl bg-danger-penalty/10 hover:bg-danger-penalty/20 text-danger-penalty font-label-md text-label-md flex items-center justify-center gap-1.5 transition-all active:scale-95 shadow-sm" type="button">
<Icon name="report_problem" className="text-[17px]" />
<span>Report Delivery Issue</span>
</button>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container flex items-center justify-between gap-space-md shadow-md">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-mtn-yellow/15 text-mtn-yellow">
<Icon name="pin" className="text-[22px]" />
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold leading-tight">6-Digit Blind Handshake OTP</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Rider inputs token provided in-person by Ronald M.</span>
</div>
</div>
<span className="px-2.5 py-1 rounded-md bg-surface-container-highest font-code-display text-body-sm font-bold text-on-surface-variant tracking-widest">
          ••••••
        </span>
</div>
</div>
</div>
</div>
</main></div>
    </div>
  );
};

export default Desktop;
