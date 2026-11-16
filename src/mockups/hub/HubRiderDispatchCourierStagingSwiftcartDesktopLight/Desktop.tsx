// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/hub/hub_rider_dispatch_courier_staging_swiftcart_desktop_light/code.html
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
      
      <div className="pl-0 min-h-screen flex flex-col"><main className="w-full pt-16 bg-surface flex-1"><div className="flex flex-col w-full">

<div className="w-full bg-surface-container px-space-xl py-space-xs flex items-center justify-between border-b border-surface-container-highest">
<div className="flex items-center gap-space-sm">
<span className="inline-flex w-2 h-2 rounded-full bg-emerald-escrow animate-ping"></span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold uppercase tracking-wider">Fast Lane Staging Terminal • Protocol v4.8</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">| Synchronized with Kampala Core Ledger</span>
</div>
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-space-xs">
<Icon name="lock" className="text-[15px] text-emerald-escrow" />
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Escrow Lock Engine 100% Active</span>
</div>
<span className="font-code-display text-label-sm text-primary font-bold">PORT: 8092-STG</span>
</div>
</div>
<div className="p-space-xl flex flex-col gap-space-lg">

<section className="grid grid-cols-2 lg:grid-cols-5 gap-space-md">

<div className="p-space-md rounded-xl bg-surface-container-lowest border border-surface-container-highest shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all">
<div className="absolute -right-2 -bottom-2 text-surface-container-high/40 group-hover:text-primary/10 transition-colors pointer-events-none">
<Icon name="shopping_bag" className="text-[72px]" />
</div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Active Staged Bags</span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-escrow/10 text-emerald-escrow">Ready</span>
</div>
<div className="mt-2 flex items-baseline gap-space-xs">
<span className="font-price-display text-price-display text-on-surface font-extrabold tracking-tight">18</span>
<span className="font-label-md text-label-md text-emerald-escrow font-bold">Bags Ready</span>
</div>
<div className="mt-1 flex items-center gap-1">
<div className="h-1.5 flex-1 rounded-full bg-surface-container-high overflow-hidden">
<div className="h-full bg-emerald-escrow rounded-full w-[78%]"></div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">78% cap</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest border border-surface-container-highest shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all">
<div className="absolute -right-2 -bottom-2 text-surface-container-high/40 group-hover:text-secondary/10 transition-colors pointer-events-none">
<Icon name="sports_motorsports" className="text-[72px]" />
</div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">SafeBoda Couriers</span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-secondary-fixed text-on-secondary-fixed font-bold">Active</span>
</div>
<div className="mt-2 flex items-baseline gap-space-xs">
<span className="font-price-display text-price-display text-on-surface font-extrabold tracking-tight">24</span>
<span className="font-label-md text-label-md text-secondary font-bold">In Queue</span>
</div>
<div className="mt-1 flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">Bays 1-4 full</span>
<span className="font-label-sm text-label-sm text-mtn-yellow font-bold">9 Gold Tier</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest border border-surface-container-highest shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all">
<div className="absolute -right-2 -bottom-2 text-surface-container-high/40 group-hover:text-amber-warning/10 transition-colors pointer-events-none">
<Icon name="timer" className="text-[72px]" />
</div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Avg Handover SLA</span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-escrow/10 text-emerald-escrow">Optimal</span>
</div>
<div className="mt-2 flex items-baseline gap-space-xs">
<span className="font-price-display text-price-display text-emerald-escrow font-extrabold tracking-tight">3.8</span>
<span className="font-label-md text-label-md text-on-surface font-bold">mins / bag</span>
</div>
<div className="mt-1 flex items-center gap-1">
<Icon name="trending_down" className="text-emerald-escrow text-[14px]" />
<span className="font-body-sm text-body-sm text-on-surface-variant">0.4m faster than target</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest border border-surface-container-highest shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all">
<div className="absolute -right-2 -bottom-2 text-surface-container-high/40 group-hover:text-primary/10 transition-colors pointer-events-none">
<Icon name="inventory_2" className="text-[72px]" />
</div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Staged Volume</span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-surface-container-high text-on-surface-variant">Live</span>
</div>
<div className="mt-2 flex items-baseline gap-space-xs">
<span className="font-price-display text-price-display text-on-surface font-extrabold tracking-tight">284</span>
<span className="font-label-md text-label-md text-on-surface-variant font-medium">Parcels</span>
</div>
<div className="mt-1 flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">Escrow Protected</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold whitespace-nowrap">UGX 19.4M</span>
</div>
</div>

<div className="col-span-2 lg:col-span-1 p-space-md rounded-xl bg-surface-container-lowest border border-surface-container-highest shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all">
<div className="absolute -right-2 -bottom-2 text-surface-container-high/40 group-hover:text-primary-container/20 transition-colors pointer-events-none">
<Icon name="outbox" className="text-[72px]" />
</div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Outbound Velocity</span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-primary-fixed text-primary font-bold">Last 60m</span>
</div>
<div className="mt-2 flex items-baseline gap-space-xs">
<span className="font-price-display text-price-display text-primary font-extrabold tracking-tight">112</span>
<span className="font-label-md text-label-md text-on-surface font-bold">Dispatched</span>
</div>
<div className="mt-1 flex items-center gap-1 text-primary">
<Icon name="bolt" className="text-[14px]" />
<span className="font-body-sm text-body-sm text-on-surface-variant">14 boda sorties launched</span>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<section className="lg:col-span-5 flex flex-col gap-space-md">
<div className="bg-surface-container-lowest rounded-xl p-space-lg border border-surface-container-highest shadow-sm flex flex-col gap-space-md">

<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-sm">
<span className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<Icon name="two_wheeler" className="text-[20px]" />
</span>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold leading-tight">SafeBoda Couriers</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Staging Check-in &amp; Priority Call Bay</p>
</div>
</div>
<span className="px-space-sm py-1 rounded-full bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow"></span>
              24 ACTIVE
            </span>
</div>

<div className="relative">
<Icon name="search" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[20px]" />
<input className="w-full bg-surface-container-low border border-surface-container-highest rounded-lg pl-10 pr-10 py-2.5 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:bg-surface-container-lowest focus:border-primary transition-colors" placeholder="Search rider name, phone (07••), or boda plate (UEF 842X)..." type="text" />
<Icon name="filter_list" className="absolute right-3.5 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface cursor-pointer text-[18px]" />
</div>

<div className="flex flex-col gap-space-sm max-h-[460px] overflow-y-auto pr-1">

<div className="p-space-md rounded-xl bg-surface-container-low border border-primary/40 shadow-sm relative overflow-hidden transition-all cursor-pointer">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-container"></div>
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-sm">
<div className="relative">
<div className="w-11 h-11 rounded-full bg-surface-container-high border border-surface-container-highest flex items-center justify-center font-headline-sm text-headline-sm text-primary font-black shadow-inner">
                      BK
                    </div>
<span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-escrow flex items-center justify-center">
<Icon name="check" className="text-[10px] text-on-primary font-black" />
</span>
</div>
<div>
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">Brian Kizito</span>
<span className="px-1.5 py-0.5 rounded bg-amber-warning/15 text-mtn-yellow font-label-sm text-label-sm font-bold flex items-center gap-0.5">
<Icon name="workspace_premium" className="text-[12px]" />
                        GOLD
                      </span>
</div>
<div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant mt-0.5">
<span className="font-code-display text-label-sm text-primary font-bold">#RC-8821</span>
<span>•</span>
<span className="font-label-sm text-label-sm text-on-surface font-extrabold tracking-wider bg-surface-container-high px-1 rounded">UEF 842X</span>
<span>•</span>
<span className="text-emerald-escrow font-bold">Rating 4.96 ★</span>
</div>
</div>
</div>
<div className="flex flex-col items-end">
<span className="px-space-xs py-1 rounded bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm font-black flex items-center gap-1">
<Icon name="location_on" className="text-[13px]" />
                    BAY 2 READY
                  </span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Stage: William St #04</span>
</div>
</div>

<div className="mt-space-md pt-space-xs flex items-center justify-between bg-surface-container-lowest border border-surface-container-highest p-space-xs rounded-lg">
<div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
<Icon name="verified_user" className="text-[16px] text-emerald-escrow" />
<span>Masked Phone: <span className="font-code-display text-label-sm text-on-surface font-bold">07•• ••• 712</span></span>
</div>
<span className="font-label-sm text-label-sm text-primary font-extrabold uppercase">Ready for Handover</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest border border-surface-container-highest hover:bg-surface-container-low shadow-sm transition-all cursor-pointer">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center font-label-lg text-label-lg text-secondary font-bold">
                    DO
                  </div>
<div>
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Denis Otim</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-bold">SILVER</span>
</div>
<div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant mt-0.5">
<span className="font-code-display text-label-sm text-on-surface font-semibold">#RC-7910</span>
<span>•</span>
<span className="font-label-sm text-label-sm text-on-surface tracking-wider bg-surface-container-high px-1 rounded">UER 310B</span>
</div>
</div>
</div>
<div className="flex flex-col items-end">
<span className="px-space-xs py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold">
                    Standby Bay 1
                  </span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Nakawa Hub Boda</span>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest border border-surface-container-highest hover:bg-surface-container-low shadow-sm transition-all cursor-pointer">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-amber-warning/20 flex items-center justify-center font-label-lg text-label-lg text-mtn-yellow font-bold">
                    MG
                  </div>
<div>
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Musisi Godfrey</span>
<span className="px-1.5 py-0.5 rounded bg-amber-warning/15 text-mtn-yellow font-label-sm text-label-sm font-bold">GOLD</span>
</div>
<div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant mt-0.5">
<span className="font-code-display text-label-sm text-on-surface font-semibold">#RC-4491</span>
<span>•</span>
<span className="font-label-sm text-label-sm text-on-surface tracking-wider bg-surface-container-high px-1 rounded">UEX 902M</span>
</div>
</div>
</div>
<div className="flex flex-col items-end">
<span className="px-space-xs py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold">
                    Bay 4 Inbound
                  </span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Nakasero Stage</span>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest border border-surface-container-highest hover:bg-surface-container-low shadow-sm transition-all cursor-pointer">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-label-lg text-label-lg text-on-surface-variant font-bold">
                    CM
                  </div>
<div>
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Charles Mukasa</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">BRONZE</span>
</div>
<div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant mt-0.5">
<span className="font-code-display text-label-sm text-on-surface font-semibold">#RC-6120</span>
<span>•</span>
<span className="font-label-sm text-label-sm text-on-surface tracking-wider bg-surface-container-high px-1 rounded">UEE 114K</span>
</div>
</div>
</div>
<div className="flex flex-col items-end">
<span className="px-space-xs py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold">
                    Bay 3 Arriving
                  </span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Acacia Mall Stage</span>
</div>
</div>
</div>
</div>

<div className="pt-space-xs flex flex-col gap-space-sm">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Gatekeeper Physical Verifications</span>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-xs">
<button className="h-12 px-space-xs rounded-lg bg-surface-container-low border border-surface-container-highest hover:bg-surface-container active:scale-[0.98] transition-all flex flex-col items-center justify-center gap-0.5 text-center group">
<Icon name="campaign" className="text-[18px] text-primary group-hover:scale-110 transition-transform" />
<span className="font-label-sm text-label-sm text-on-surface font-semibold leading-none">Call to Counter</span>
</button>
<button className="h-12 px-space-xs rounded-lg bg-surface-container-low border border-surface-container-highest hover:bg-surface-container active:scale-[0.98] transition-all flex flex-col items-center justify-center gap-0.5 text-center group">
<Icon name="security" className="text-[18px] text-emerald-escrow group-hover:scale-110 transition-transform" />
<span className="font-label-sm text-label-sm text-on-surface font-semibold leading-none">Verify PSV &amp; Box</span>
</button>
<button className="h-12 px-space-xs rounded-lg bg-surface-container-low border border-surface-container-highest hover:bg-surface-container active:scale-[0.98] transition-all flex flex-col items-center justify-center gap-0.5 text-center group">
<Icon name="badge" className="text-[18px] text-secondary group-hover:scale-110 transition-transform" />
<span className="font-label-sm text-label-sm text-on-surface font-semibold leading-none">Scan Digital ID</span>
</button>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low border border-surface-container-highest flex items-center justify-between">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-lg bg-surface-container-high overflow-hidden relative">
<img className="w-full h-full object-cover" data-alt="Close up photograph of a heavy duty secure bright orange courier lockbox strapped securely onto a Kampala motorcycle boda rear rack, illuminated under warehouse staging floodlights with high contrast metal latches and reflective safety tape." src="/images/bab7f736df3a59d1.webp" />
</div>
<div>
<span className="font-label-md text-label-md text-on-surface font-bold">Lockbox Serial: #BX-04-209</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Tamper seal clamp intact • Weather seal valid</p>
</div>
</div>
<Icon name="check_circle" className="text-emerald-escrow text-[22px]" />
</div>
</div>
</section>

<section className="lg:col-span-7 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-lg border border-surface-container-highest shadow-sm flex flex-col gap-space-md relative overflow-hidden">
<div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center text-on-primary shadow-sm">
<Icon name="backpack" className="text-[24px]" />
</div>
<div>
<div className="flex items-center gap-space-sm">
<h3 className="font-headline-md text-headline-md text-on-surface font-extrabold tracking-tight">BAG-KLA-0428</h3>
<span className="px-2 py-0.5 rounded-full bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm font-extrabold uppercase">
                    SEALED &amp; STAGED
                  </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-0.5">
<Icon name="route" className="text-[15px] text-primary" />
                  Route Corridor: <span className="text-on-surface font-bold">Nakasero — Kololo — Acacia Priority Belt</span>
</p>
</div>
</div>
<div className="flex flex-col sm:items-end">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Assigned SafeBoda</span>
<span className="font-label-lg text-label-lg text-primary font-bold">Brian Kizito (UEF 842X)</span>
<span className="font-code-display text-label-sm text-emerald-escrow font-bold">Bay #2 Handover Counter</span>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm bg-surface-container-low border border-surface-container-highest p-space-md rounded-xl">

<div className="flex flex-col gap-1">
<div className="flex justify-between items-center">
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-bold">Volume Load</span>
<span className="font-label-md text-label-md text-on-surface font-extrabold">8 / 10 Parcels</span>
</div>
<div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
<div className="h-full bg-primary-container rounded-full w-[80%]"></div>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">80% payload (Optimized for boda box)</span>
</div>

<div className="flex flex-col justify-center sm:pl-space-sm sm:border-l sm:border-surface-container-highest">
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-bold">Total Bag Escrow</span>
<span className="font-price-display text-headline-sm text-emerald-escrow font-black whitespace-nowrap">UGX 1,420,000</span>
<div className="flex items-center gap-1 text-emerald-escrow font-body-sm text-body-sm font-semibold">
<Icon name="lock" className="text-[13px]" />
<span>Ledger Confirmed</span>
</div>
</div>

<div className="flex flex-col justify-center sm:pl-space-sm sm:border-l sm:border-surface-container-highest">
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-bold">Tamper Seal Tag</span>
<span className="font-code-display text-label-lg text-primary font-bold">#TS-884920</span>
<span className="font-body-sm text-body-sm text-emerald-escrow flex items-center gap-1 font-semibold">
<Icon name="verified" className="text-[14px]" />
                Verified &amp; Barcode Logged
              </span>
</div>
</div>

<div className="flex flex-col gap-space-xs mt-space-xs">
<div className="flex items-center justify-between">
<h4 className="font-label-lg text-label-lg text-on-surface font-bold flex items-center gap-space-xs">
<Icon name="view_list" className="text-[18px] text-primary" />
                Courier Bag Itemized Manifest (5 Featured / 8 Total)
              </h4>
<span className="font-body-sm text-body-sm text-on-surface-variant">All OTP Handshake Enforced</span>
</div>
<div className="overflow-x-auto rounded-xl bg-surface-container-lowest border border-surface-container-highest shadow-sm">
<table className="w-full text-left font-body-sm text-body-sm border-collapse">
<thead>
<tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider border-b border-surface-container-highest">
<th className="py-2.5 px-space-md">Waybill</th>
<th className="py-2.5 px-space-sm">Description</th>
<th className="py-2.5 px-space-sm">Destination Drop-Off</th>
<th className="py-2.5 px-space-sm">Escrow Value</th>
<th className="py-2.5 px-space-md text-right">Delivery Rule</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-highest font-body-md text-body-md">

<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-2.5 px-space-md font-code-display text-label-sm text-primary font-bold">SC-98241</td>
<td className="py-2.5 px-space-sm font-label-md text-label-md text-on-surface font-semibold">SoundCore Space One</td>
<td className="py-2.5 px-space-sm text-on-surface-variant">Kololo Terrace Flat 4B</td>
<td className="py-2.5 px-space-sm font-label-md text-label-md text-on-surface font-extrabold whitespace-nowrap">UGX 180,000</td>
<td className="py-2.5 px-space-md text-right">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm font-bold">
<Icon name="password" className="text-[12px]" />
                        6-Digit OTP
                      </span>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-2.5 px-space-md font-code-display text-label-sm text-primary font-bold">SC-98218</td>
<td className="py-2.5 px-space-sm font-label-md text-label-md text-on-surface font-semibold">Anker PowerBank 20k</td>
<td className="py-2.5 px-space-sm text-on-surface-variant">Acacia Mall Apt 2</td>
<td className="py-2.5 px-space-sm font-label-md text-label-md text-on-surface font-extrabold whitespace-nowrap">UGX 145,000</td>
<td className="py-2.5 px-space-md text-right">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm font-bold">
<Icon name="password" className="text-[12px]" />
                        6-Digit OTP
                      </span>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-2.5 px-space-md font-code-display text-label-sm text-primary font-bold">SC-98199</td>
<td className="py-2.5 px-space-sm font-label-md text-label-md text-on-surface font-semibold">Apple USB-C Cable</td>
<td className="py-2.5 px-space-sm text-on-surface-variant">Yusuf Lule Rd Offices</td>
<td className="py-2.5 px-space-sm font-label-md text-label-md text-on-surface font-extrabold whitespace-nowrap">UGX 65,000</td>
<td className="py-2.5 px-space-md text-right">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm font-bold">
<Icon name="password" className="text-[12px]" />
                        6-Digit OTP
                      </span>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-2.5 px-space-md font-code-display text-label-sm text-primary font-bold">SC-98144</td>
<td className="py-2.5 px-space-sm font-label-md text-label-md text-on-surface font-semibold">Samsung Galaxy Buds</td>
<td className="py-2.5 px-space-sm text-on-surface-variant">John Babiiha Ave</td>
<td className="py-2.5 px-space-sm font-label-md text-label-md text-on-surface font-extrabold whitespace-nowrap">UGX 320,000</td>
<td className="py-2.5 px-space-md text-right">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm font-bold">
<Icon name="password" className="text-[12px]" />
                        6-Digit OTP
                      </span>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-2.5 px-space-md font-code-display text-label-sm text-primary font-bold">SC-98102</td>
<td className="py-2.5 px-space-sm font-label-md text-label-md text-on-surface font-semibold">Oraimo Smart Watch</td>
<td className="py-2.5 px-space-sm text-on-surface-variant">Kololo Rise Gate 11</td>
<td className="py-2.5 px-space-sm font-label-md text-label-md text-on-surface font-extrabold whitespace-nowrap">UGX 195,000</td>
<td className="py-2.5 px-space-md text-right">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm font-bold">
<Icon name="password" className="text-[12px]" />
                        6-Digit OTP
                      </span>
</td>
</tr>
</tbody>
</table>
</div>
<div className="flex items-center justify-between px-space-xs font-body-sm text-body-sm text-on-surface-variant">
<span>Showing priority sequence. 3 additional smaller accessories packed in sub-compartment.</span>
<span className="font-label-sm text-label-sm text-primary font-bold cursor-pointer hover:underline">View All 8 Waybills</span>
</div>
</div>

<div className="mt-space-sm p-space-lg rounded-xl bg-surface-container-low border border-surface-container-highest shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-sm">
<span className="w-8 h-8 rounded-lg bg-emerald-escrow/15 text-emerald-escrow flex items-center justify-center">
<Icon name="fingerprint" className="text-[20px]" />
</span>
<div>
<h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">2-Factor Handover Custody Transfer</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Both parties must cryptographically clear before dispatch release</p>
</div>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-emerald-escrow/10 text-emerald-escrow font-extrabold">STAGE 04 DUAL SIGN</span>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">

<div className="p-space-md rounded-lg bg-surface-container-lowest border border-surface-container-highest flex items-center justify-between shadow-sm">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-emerald-escrow/15 text-emerald-escrow flex items-center justify-center">
<Icon name="qr_code_2" className="text-[22px]" />
</div>
<div>
<span className="font-label-md text-label-md text-on-surface font-bold">Rider App Handshake</span>
<p className="font-body-sm text-body-sm text-emerald-escrow font-semibold">Brian Kizito Validated (App v3.2)</p>
</div>
</div>
<Icon name="check_circle" className="text-emerald-escrow text-[22px]" />
</div>

<div className="p-space-md rounded-lg bg-surface-container-lowest border border-surface-container-highest flex items-center justify-between shadow-sm">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-primary-fixed text-primary flex items-center justify-center">
<Icon name="pin" className="text-[22px]" />
</div>
<div>
<span className="font-label-md text-label-md text-on-surface font-bold">Hub Supervisor PIN</span>
<p className="font-body-sm text-body-sm text-on-surface-variant font-medium">Brian Mukasa (#SUP-004)</p>
</div>
</div>
<div className="flex items-center gap-1">
<span className="w-2.5 h-2.5 rounded-full bg-emerald-escrow"></span>
<span className="w-2.5 h-2.5 rounded-full bg-emerald-escrow"></span>
<span className="w-2.5 h-2.5 rounded-full bg-emerald-escrow"></span>
<span className="w-2.5 h-2.5 rounded-full bg-emerald-escrow"></span>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm pt-space-xs">
<button className="w-full sm:w-auto h-12 px-space-lg rounded-xl bg-surface-container border border-surface-container-highest hover:bg-surface-container-high text-on-surface active:scale-[0.98] transition-all flex items-center justify-center gap-space-sm font-label-lg text-label-lg font-bold">
<Icon name="print" className="text-[20px] text-outline" />
<span>Print Courier Manifest Docket</span>
</button>
<button className="w-full sm:flex-1 h-[52px] px-space-xl rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg font-bold active:scale-[0.98] transition-all shadow-md flex items-center justify-center gap-space-sm hover:brightness-105">
<Icon name="lock_clock" className="text-[22px]" />
<span>Seal Bag &amp; Authorize Courier Dispatch</span>
<Icon name="arrow_forward" className="text-[18px]" />
</button>
</div>
</div>
</div>
</section>
</div>
</div>

</div></main></div>
    </div>
  );
};

export default Desktop;
