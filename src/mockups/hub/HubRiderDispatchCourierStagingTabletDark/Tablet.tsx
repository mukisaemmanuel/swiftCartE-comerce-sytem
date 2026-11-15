// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/hub/hub_rider_dispatch_courier_staging_tablet_dark/code.html
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
      
      <main className="w-full pt-20 pb-24 bg-surface min-h-screen"><div className="flex flex-col w-full">

<div className="w-full bg-surface-container-low px-margin-desktop py-space-xs flex items-center justify-between shadow-sm">
<div className="flex items-center gap-space-sm">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
</span>
<span className="font-label-sm text-label-sm text-tertiary tracking-wider uppercase">Local SQLite Sync Active</span>
<span className="text-on-surface-variant font-label-sm text-label-sm opacity-60">•</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Queue: 0 pending retries | Cryptographic Handover Enabled</span>
</div>
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-space-xs text-amber-warning font-label-sm text-label-sm">
<Icon name="sensors" className="text-[16px]" />
<span>BLE Beacon Bay #01 Sync: 100%</span>
</div>
</div>
</div>
<div className="w-full px-margin-desktop py-space-lg flex flex-col gap-space-lg max-w-[1400px] mx-auto">

<div className="grid grid-cols-4 gap-space-md w-full">

<div className="bg-surface-container-low p-space-md rounded-xl flex items-center justify-between shadow-md relative overflow-hidden group">
<div className="flex flex-col gap-space-xs z-10">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Couriers on Standby</span>
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-on-surface">14</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Riders</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">SafeBoda Yard Gate 1</span>
</div>
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-tertiary">
<Icon name="two_wheeler" className="text-[28px]" />
</div>
<div className="absolute -right-4 -bottom-4 w-20 h-20 bg-tertiary/5 rounded-full pointer-events-none"></div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex items-center justify-between shadow-md relative overflow-hidden group">
<div className="flex flex-col gap-space-xs z-10">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Staged Bags Ready</span>
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-primary">8</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Bags</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">42 Assigned Parcels</span>
</div>
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
<Icon name="inventory_2" className="text-[28px]" />
</div>
<div className="absolute -right-4 -bottom-4 w-20 h-20 bg-primary/5 rounded-full pointer-events-none"></div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex items-center justify-between shadow-md relative overflow-hidden group">
<div className="flex flex-col gap-space-xs z-10">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Active Runs in Transit</span>
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-on-surface">18</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold">74.2% vel.</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Kampala Central Grid</span>
</div>
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
<Icon name="electric_moped" className="text-[28px]" />
</div>
<div className="absolute -right-4 -bottom-4 w-20 h-20 bg-secondary/5 rounded-full pointer-events-none"></div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex items-center justify-between shadow-md relative overflow-hidden group">
<div className="flex flex-col gap-space-xs z-10">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Avg Staging to Departure</span>
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-emerald-escrow">6m 40s</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Target: &lt;10m (98.4% SLA)</span>
</div>
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-emerald-escrow">
<Icon name="speed" className="text-[28px]" />
</div>
<div className="absolute -right-4 -bottom-4 w-20 h-20 bg-emerald-escrow/5 rounded-full pointer-events-none"></div>
</div>
</div>

<div className="grid grid-cols-12 gap-space-lg items-start">

<div className="col-span-4 flex flex-col gap-space-md">

<div className="bg-surface-container-low p-1 rounded-xl flex items-center gap-1 shadow-sm">
<button className="flex-1 py-space-sm px-space-md rounded-lg font-label-md text-label-md text-on-primary bg-primary shadow-sm flex items-center justify-center gap-space-xs transition-all" id="tabBags">
<Icon name="shopping_bag" className="text-[18px]" />
<span>Staged Bags (8)</span>
</button>
<button className="flex-1 py-space-sm px-space-md rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface flex items-center justify-center gap-space-xs transition-all" id="tabCouriers">
<Icon name="sports_motorsports" className="text-[18px]" />
<span>Available Couriers (14)</span>
</button>
</div>

<div className="bg-surface-container-low px-space-md py-space-sm rounded-xl flex items-center gap-space-sm">
<Icon name="search" className="text-on-surface-variant text-[20px]" />
<input className="bg-transparent border-0 outline-none text-on-surface font-body-sm text-body-sm w-full placeholder:text-on-surface-variant/50" placeholder="Filter bags, corridor, or rider..." type="text" />
<span className="px-space-xs py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">⌘K</span>
</div>

<div className="flex flex-col gap-space-sm">

<div className="bg-surface-container-high rounded-xl p-space-md flex flex-col gap-space-sm shadow-md cursor-pointer transition-all relative overflow-hidden" style={{"boxShadow":"inset 4px 0 0 0 #da3700"}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="px-2 py-0.5 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm">#BAG-KLA-04</span>
<span className="font-label-sm text-label-sm text-emerald-escrow flex items-center gap-0.5">
<Icon name="check_circle" className="text-[14px]" />
                  Ready for Scan Out
                </span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">6 Orders</span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface">Kololo &amp; Kisementi Corridor</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Acacia Mall • Golf Course • Wampewo Ave</span>
</div>
<div className="bg-surface-container p-space-xs rounded-lg flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-7 h-7 rounded-full bg-secondary-container flex items-center justify-center font-label-sm text-label-sm text-secondary">
                  KB
                </div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface">Kizito Brian</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Bajaj Boxer • #UFE 219K</span>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-emerald-escrow/20 text-emerald-escrow font-label-sm text-label-sm font-bold">Bay 1 Ready</span>
</div>
</div>

<div className="bg-surface-container-low hover:bg-surface-container rounded-xl p-space-md flex flex-col gap-space-sm shadow-sm cursor-pointer transition-all">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">#BAG-KLA-09</span>
<span className="font-label-sm text-label-sm text-amber-warning flex items-center gap-0.5">
<Icon name="progress_activity" className="text-[14px]" />
                  Packing in Progress
                </span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">5 Orders</span>
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Ntinda &amp; Nakawa Corridor</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Ntinda Complex • Naguru Skyz • Spear Motors</span>
</div>
<div className="bg-surface-container-lowest p-space-xs rounded-lg flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-7 h-7 rounded-full bg-surface-container-high flex items-center justify-center font-label-sm text-label-sm text-on-surface">
                  KP
                </div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface">Kato Paul</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">TVS HLX • #UEX 881B</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">In Staging Bay 3</span>
</div>
</div>

<div className="bg-surface-container-low hover:bg-surface-container rounded-xl p-space-md flex flex-col gap-space-sm shadow-sm cursor-pointer transition-all">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">#BAG-KLA-14</span>
<span className="font-label-sm text-label-sm text-danger-penalty flex items-center gap-0.5">
<Icon name="warning" className="text-[14px]" />
                  Unassigned Rider
                </span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">8 Orders</span>
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Downtown &amp; Kikuubo Express</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Ben Kiwanuka • Mini Price • Owino Hub</span>
</div>
<div className="bg-error-container/20 p-space-xs rounded-lg flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<Icon name="person_off" className="text-danger-penalty text-[18px]" />
<span className="font-label-sm text-label-sm text-error">Awaiting SafeBoda Dispatch</span>
</div>
<button className="px-2 py-1 rounded bg-action-gradient-end text-on-primary-container font-label-sm text-label-sm">Assign</button>
</div>
</div>

<div className="bg-surface-container-low hover:bg-surface-container rounded-xl p-space-md flex flex-col gap-space-sm shadow-sm cursor-pointer transition-all">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">#BAG-KLA-18</span>
<span className="font-label-sm text-label-sm text-emerald-escrow flex items-center gap-0.5">
<Icon name="check_circle" className="text-[14px]" />
                  Ready
                </span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">4 Orders</span>
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Bugolobi Village Corridor</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Spring Road • Bandali Rise • Village Mall</span>
</div>
<div className="bg-surface-container-lowest p-space-xs rounded-lg flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-7 h-7 rounded-full bg-surface-container-high flex items-center justify-center font-label-sm text-label-sm text-on-surface">
                  MR
                </div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface">Mugisha Ronald</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Bajaj Boxer • #UER 919T</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-tertiary">Verified QR</span>
</div>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex items-center justify-between shadow-sm">
<div className="flex items-center gap-space-sm">
<Icon name="motorcycle" className="text-tertiary text-[24px]" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">14 Verified Riders in Yard</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Fast dispatch turnaround active</span>
</div>
</div>
<button className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors">
            View Pool
          </button>
</div>
</div>

<div className="col-span-8 flex flex-col gap-space-md">

<div className="bg-surface-container-low rounded-xl p-space-lg shadow-xl flex flex-col gap-space-lg relative overflow-hidden">

<div className="flex items-start justify-between pb-space-md bg-surface-container-lowest/40 -mx-space-lg -mt-space-lg p-space-lg">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-sm">
<span className="font-headline-lg text-headline-lg text-on-surface">Courier Bag #BAG-KLA-04</span>
<span className="px-2.5 py-1 rounded-full bg-emerald-escrow/15 text-emerald-escrow font-label-md text-label-md flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
                  Ready For Scan Out
                </span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                  Bay 1 Staging
                </span>
</div>
<div className="flex items-center gap-space-sm text-on-surface-variant font-body-md text-body-md">
<Icon name="route" className="text-[18px] text-primary" />
<span>Route Corridor: <strong className="text-on-surface">Nakasero Central → Kololo Terrace → Acacia Mall</strong></span>
<span>•</span>
<span className="text-tertiary">Est. Route Time: 42 mins</span>
</div>
</div>

<div className="flex items-center gap-space-xs">
<button className="p-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors flex items-center justify-center" title="Print Manifest Slip">
<Icon name="print" className="text-[20px]" />
</button>
<button className="p-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors flex items-center justify-center" title="More Bag Options">
<Icon name="more_vert" className="text-[20px]" />
</button>
</div>
</div>

<div className="bg-surface-container rounded-xl p-space-md flex items-center justify-between shadow-sm">
<div className="flex items-center gap-space-md">
<div className="relative">
<img className="w-14 h-14 rounded-xl object-cover" data-alt="Close-up portrait of a Ugandan professional boda boda rider named Kizito wearing a clean hi-vis orange vest and motorcycle helmet, warm smile, dusk warehouse backdrop, high resolution cinematic lighting" src="/images/ccfe7c4be6a3ed4b.webp" />
<span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-escrow flex items-center justify-center text-[10px] text-surface font-bold">✓</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-sm">
<span className="font-headline-sm text-headline-sm text-on-surface">Kizito Brian</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-secondary font-label-sm text-label-sm">SafeBoda #SB-0824</span>
<span className="flex items-center gap-0.5 text-mtn-yellow font-label-sm text-label-sm">
<Icon name="star" className="text-[16px] text-mtn-yellow" />
                    4.92 (1,420 trips)
                  </span>
</div>
<div className="flex items-center gap-space-md mt-1 font-body-sm text-body-sm text-on-surface-variant">
<span className="flex items-center gap-1">
<Icon name="call" className="text-[16px]" />
                    +256 701 ••• 442
                  </span>
<span>•</span>
<span className="flex items-center gap-1">
<Icon name="two_wheeler" className="text-[16px]" />
                    Bajaj Boxer 125cc (<strong className="text-on-surface">UFE 219K</strong>)
                  </span>
<span>•</span>
<span className="text-emerald-escrow font-medium">Checked in: Loading Bay 1</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-sm">
<button className="px-3 py-2 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-sm text-label-sm flex items-center gap-1 transition-all">
<Icon name="swap_horiz" className="text-[16px]" />
                Reassign Rider
              </button>
</div>
</div>

<div className="grid grid-cols-2 gap-space-md">
<div className="bg-surface-container-high p-space-md rounded-xl flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-emerald-escrow/10 text-emerald-escrow flex items-center justify-center">
<Icon name="lock" className="text-[24px]" />
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Tamper Evident Seal Tag</span>
<span className="font-code-display text-code-display text-emerald-escrow">#ZIP-KLA-88402</span>
</div>
</div>
<span className="px-2.5 py-1 rounded bg-emerald-escrow/20 text-emerald-escrow font-label-sm text-label-sm flex items-center gap-1">
<Icon name="verified" className="text-[14px]" /> Scanned &amp; Locked
              </span>
</div>
<div className="bg-surface-container-high p-space-md rounded-xl flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
<Icon name="scale" className="text-[24px]" />
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Gross Bag Weight</span>
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface">4.8 kg</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">/ 15.0 kg Max limit</span>
</div>
</div>
</div>
<div className="flex flex-col items-end">
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold">Within Payload Spec</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Safe motorcycle balance</span>
</div>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between py-space-xs">
<div className="flex items-center gap-space-sm">
<span className="font-headline-sm text-headline-sm text-on-surface">Manifest Inventory</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant">6 Parcels</span>
</div>
<div className="flex items-center gap-space-md">
<span className="font-body-sm text-body-sm text-on-surface-variant">Total Escrow Value: <strong className="font-price-display text-price-display text-primary whitespace-nowrap">UGX 1,420,000</strong></span>
<button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm flex items-center gap-1 transition-colors">
<Icon name="add" className="text-[16px]" /> Add Item
                </button>
</div>
</div>

<div className="flex flex-col gap-space-xs">

<div className="bg-surface-container hover:bg-surface-container-high p-space-sm rounded-lg flex items-center justify-between transition-colors">
<div className="flex items-center gap-space-md">
<span className="font-code-display text-code-display text-primary font-bold">01</span>
<div className="flex flex-col">
<div className="flex items-center gap-space-sm">
<span className="font-label-md text-label-md text-on-surface">#SC-9952: SoundCore Space One ANC</span>
<span className="px-2 py-0.2 rounded bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm">High Value Escrow</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Recipient: Sarah Namubiru • Acacia Mall Level 2 (Shop 41) • 07•• ••• 819</span>
</div>
</div>
<div className="flex items-center gap-space-lg">
<span className="font-label-lg text-label-lg text-on-surface whitespace-nowrap">UGX 248,500</span>
<span className="px-2 py-0.5 rounded bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm flex items-center gap-1">
<Icon name="check" className="text-[14px]" /> Staged
                  </span>
</div>
</div>

<div className="bg-surface-container hover:bg-surface-container-high p-space-sm rounded-lg flex items-center justify-between transition-colors">
<div className="flex items-center gap-space-md">
<span className="font-code-display text-code-display text-primary font-bold">02</span>
<div className="flex flex-col">
<div className="flex items-center gap-space-sm">
<span className="font-label-md text-label-md text-on-surface">#SC-9948: SoundCore ANC Pro Studio</span>
<span className="px-2 py-0.2 rounded bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm">High Value Escrow</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Recipient: David Mukasa • Kololo Terrace Plot 12B • 07•• ••• 110</span>
</div>
</div>
<div className="flex items-center gap-space-lg">
<span className="font-label-lg text-label-lg text-on-surface whitespace-nowrap">UGX 310,000</span>
<span className="px-2 py-0.5 rounded bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm flex items-center gap-1">
<Icon name="check" className="text-[14px]" /> Staged
                  </span>
</div>
</div>

<div className="bg-surface-container hover:bg-surface-container-high p-space-sm rounded-lg flex items-center justify-between transition-colors">
<div className="flex items-center gap-space-md">
<span className="font-code-display text-code-display text-primary font-bold">03</span>
<div className="flex flex-col">
<div className="flex items-center gap-space-sm">
<span className="font-label-md text-label-md text-on-surface">#SC-9941: Anker 65W GaN Fast Charger</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Recipient: Arthur Kato • Lugogo Bypass Media Plaza • 07•• ••• 493</span>
</div>
</div>
<div className="flex items-center gap-space-lg">
<span className="font-label-lg text-label-lg text-on-surface whitespace-nowrap">UGX 115,000</span>
<span className="px-2 py-0.5 rounded bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm flex items-center gap-1">
<Icon name="check" className="text-[14px]" /> Staged
                  </span>
</div>
</div>

<div className="bg-surface-container hover:bg-surface-container-high p-space-sm rounded-lg flex items-center justify-between transition-colors">
<div className="flex items-center gap-space-md">
<span className="font-code-display text-code-display text-primary font-bold">04</span>
<div className="flex flex-col">
<div className="flex items-center gap-space-sm">
<span className="font-label-md text-label-md text-on-surface">#SC-9935: Oraimo FreePods 4 Wireless</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Recipient: Florence Achen • Wampewo Crescent 4th Gate • 07•• ••• 202</span>
</div>
</div>
<div className="flex items-center gap-space-lg">
<span className="font-label-lg text-label-lg text-on-surface whitespace-nowrap">UGX 145,000</span>
<span className="px-2 py-0.5 rounded bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm flex items-center gap-1">
<Icon name="check" className="text-[14px]" /> Staged
                  </span>
</div>
</div>

<div className="bg-surface-container hover:bg-surface-container-high p-space-sm rounded-lg flex items-center justify-between transition-colors">
<div className="flex items-center gap-space-md">
<span className="font-code-display text-code-display text-primary font-bold">05</span>
<div className="flex flex-col">
<div className="flex items-center gap-space-sm">
<span className="font-label-md text-label-md text-on-surface">#SC-9920: JBL Flip 6 Bluetooth Speaker</span>
<span className="px-2 py-0.2 rounded bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm">High Value Escrow</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Recipient: Moses Byaruhanga • Prince Charles Drive • 07•• ••• 551</span>
</div>
</div>
<div className="flex items-center gap-space-lg">
<span className="font-label-lg text-label-lg text-on-surface whitespace-nowrap">UGX 320,000</span>
<span className="px-2 py-0.5 rounded bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm flex items-center gap-1">
<Icon name="check" className="text-[14px]" /> Staged
                  </span>
</div>
</div>

<div className="bg-surface-container hover:bg-surface-container-high p-space-sm rounded-lg flex items-center justify-between transition-colors">
<div className="flex items-center gap-space-md">
<span className="font-code-display text-code-display text-primary font-bold">06</span>
<div className="flex flex-col">
<div className="flex items-center gap-space-sm">
<span className="font-label-md text-label-md text-on-surface">#SC-9918: USB-C 100W Braided Cable 2M</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Recipient: Ritah Kembabazi • Kisementi Shopping Arcades • 07•• ••• 778</span>
</div>
</div>
<div className="flex items-center gap-space-lg">
<span className="font-label-lg text-label-lg text-on-surface whitespace-nowrap">UGX 45,000</span>
<span className="px-2 py-0.5 rounded bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm flex items-center gap-1">
<Icon name="check" className="text-[14px]" /> Staged
                  </span>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-space-sm pt-space-md bg-surface-container-high/30 -mx-space-lg -mb-space-lg p-space-lg rounded-b-xl">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<Icon name="verified_user" className="text-emerald-escrow text-[22px]" />
<span className="font-body-sm text-body-sm text-on-surface">Cryptographic Escrow Custody ready for transfer to Rider Kizito Brian</span>
</div>
<div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
<span>Handover protocol: <strong className="text-tertiary">RFID/NFC + QR Seal</strong></span>
</div>
</div>

<button className="w-full h-14 rounded-2xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-lg text-label-lg flex items-center justify-center gap-space-md shadow-[0_4px_24px_rgba(218,55,0,0.45)] hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer" id="btnScanHandover">
<Icon name="qr_code_scanner" className="text-[26px]" />
<span>Scan Courier Badge &amp; Handover Bag #BAG-KLA-04</span>
<span className="px-2 py-0.5 rounded bg-black/20 text-on-primary-container font-label-sm text-label-sm uppercase">Tap Here</span>
</button>

<div className="flex items-center justify-between pt-space-xs">
<button className="text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm flex items-center gap-1 py-1">
<Icon name="receipt_long" className="text-[16px]" />
                Print Courier Manifest Slip
              </button>
<div className="flex items-center gap-space-md">
<button className="text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm flex items-center gap-1 py-1">
<Icon name="warning" className="text-[16px]" />
                  Report Weight Mismatch
                </button>
<button className="text-danger-penalty font-label-sm text-label-sm flex items-center gap-1 py-1 hover:underline">
<Icon name="cancel" className="text-[16px]" />
                  De-stage Bag
                </button>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md shadow-md flex items-center justify-between gap-space-lg">
<div className="flex flex-col gap-space-xs max-w-sm">
<span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">Corridor Telematics</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Nakasero → Kololo Run #108</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">All 6 parcels are sequenced geographically to minimize left-turns on Yusuf Lule Road.</p>
</div>
<div className="w-80 h-24 bg-cover bg-center rounded-lg shadow-inner relative overflow-hidden flex items-end p-2" data-location="Kololo, Kampala, Uganda" style={{"backgroundImage":"url('/images/55ae675f011cef3f.webp')"}}>
<div className="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-surface-dark/30 to-transparent"></div>
<div className="relative z-10 flex items-center justify-between w-full">
<span className="font-label-sm text-label-sm text-tertiary flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-tertiary"></span> 6 Stop Sequence Optimized
              </span>
<span className="font-code-display text-[12px] text-on-surface">5.8 km Total</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 bg-surface-dark/80 backdrop-blur-md hidden flex items-center justify-center p-space-md" id="handoverModal">
<div className="bg-surface-container-high rounded-2xl max-w-md w-full p-space-xl flex flex-col gap-space-lg shadow-2xl relative">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center">
<Icon name="qr_code_scanner" className="text-[24px]" />
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface">Rider Handover Scan</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Courier Bag #BAG-KLA-04</span>
</div>
</div>
<button className="text-on-surface-variant hover:text-on-surface" id="closeModal">
<Icon name="close" className="text-[22px]" />
</button>
</div>
<div className="flex flex-col items-center justify-center p-space-lg bg-surface-container rounded-xl gap-space-md">
<div className="w-32 h-32 rounded-xl bg-surface-dark flex items-center justify-center relative overflow-hidden">
<Icon name="contactless" className="text-primary text-[56px] animate-pulse" />
<div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-bounce"></div>
</div>
<span className="font-label-md text-label-md text-on-surface text-center">Tap SafeBoda NFC Badge or Scan Rider QR ID</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-center">Awaiting Kizito Brian (Bajaj Boxer #UFE 219K)</span>
</div>
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between font-body-sm text-body-sm">
<span className="text-on-surface-variant">Tamper Seal Check:</span>
<span className="text-emerald-escrow font-bold">#ZIP-KLA-88402 (Valid)</span>
</div>
<div className="flex items-center justify-between font-body-sm text-body-sm">
<span className="text-on-surface-variant">Escrow Handover:</span>
<span className="text-on-surface whitespace-nowrap">UGX 1,420,000 (6 Parcels)</span>
</div>
</div>
<div className="flex items-center gap-space-sm">
<button className="flex-1 h-12 rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-md text-label-md flex items-center justify-center gap-2" id="simulateSuccessBtn">
<Icon name="check" className="text-[20px]" />
          Confirm Handover
        </button>
<button className="px-space-lg h-12 rounded-xl bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md" id="cancelModalBtn">
          Cancel
        </button>
</div>
</div>
</div>

</div></main>
<footer className="fixed bottom-0 left-0 right-0 z-50 bg-surface-container-low/95 backdrop-blur-xl shadow-[0_-4px_16px_rgba(0,0,0,0.45)]"><div className="w-full h-20 px-margin-desktop flex items-center justify-around"><nav className="flex items-center justify-between w-full max-w-4xl mx-auto gap-space-sm" data-active-classes="bg-primary-container text-on-primary-container font-label-lg"><a className="flex-1 flex flex-col items-center justify-center h-14 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all gap-1" data-path="pickup" href="#"><Icon name="qr_code_scanner" className="text-[22px]" /><span className="font-label-sm text-label-sm uppercase tracking-wide">Pickup</span></a><a className="flex-1 flex flex-col items-center justify-center h-14 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all gap-1" data-path="storage" href="#"><Icon name="inventory_2" className="text-[22px]" /><span className="font-label-sm text-label-sm uppercase tracking-wide">Storage</span></a><a aria-current="page" className="flex-1 flex flex-col items-center justify-center h-14 rounded-xl transition-all gap-1 bg-primary-container text-on-primary-container font-label-lg" data-path="dispatch" href="#"><Icon name="local_shipping" className="text-[22px]" /><span className="font-label-sm text-label-sm uppercase tracking-wide">Dispatch</span></a><a className="flex-1 flex flex-col items-center justify-center h-14 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all gap-1" data-path="returns" href="#"><Icon name="assignment_return" className="text-[22px]" /><span className="font-label-sm text-label-sm uppercase tracking-wide">Returns</span></a><a className="flex-1 flex flex-col items-center justify-center h-14 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all gap-1" data-path="more" href="#"><Icon name="tune" className="text-[22px]" /><span className="font-label-sm text-label-sm uppercase tracking-wide">More</span></a></nav></div></footer>
    </div>
  );
};

export default Tablet;
