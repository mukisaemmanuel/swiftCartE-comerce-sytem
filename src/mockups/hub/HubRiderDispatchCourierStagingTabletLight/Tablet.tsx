// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/hub/hub_rider_dispatch_courier_staging_tablet_light/code.html
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

<div className="w-full max-w-[1240px] mx-auto px-margin py-space-sm space-y-space-md">

<div className="w-full bg-surface-container-lowest rounded-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] px-space-md py-space-xs flex flex-wrap items-center justify-between gap-y-2 text-on-surface">
<div className="flex items-center gap-space-sm flex-wrap">
<div className="flex items-center gap-1.5 bg-surface-container-low px-2 py-0.5 rounded-full text-tertiary font-label-sm">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
<span className="tracking-wide">LOCAL SQLITE SYNC ACTIVE</span>
</div>
<span className="font-body-sm text-on-surface-variant">•</span>
<span className="font-body-sm text-on-surface-variant font-label-md text-on-surface">0 Retries Pending</span>
<span className="font-body-sm text-on-surface-variant">•</span>
<div className="flex items-center gap-1 text-tertiary">
<Icon name="verified_user" className="text-[15px]" />
<span className="font-label-sm tracking-tight text-on-surface">Verified Handover Enabled</span>
</div>
</div>
<div className="flex items-center gap-space-sm">
<span className="flex items-center gap-1 font-label-sm px-2 py-0.5 rounded-full bg-surface-container text-on-surface">
<Icon name="bluetooth_searching" className="text-[14px] text-primary" />
          BLE Beacon Bay #01: <strong className="text-tertiary">100% Signal (0.8m)</strong>
</span>
<span className="font-label-sm text-outline tracking-wider uppercase">HUB #UG-8820 DOCK</span>
</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-sm uppercase tracking-wider text-on-surface-variant">Couriers On Standby</span>
<div className="flex items-baseline gap-1.5">
<span className="font-headline-lg text-headline-lg text-on-surface">14</span>
<span className="font-label-md text-on-surface-variant">Riders</span>
</div>
<div className="flex items-center gap-1 text-tertiary font-label-sm pt-0.5">
<Icon name="two_wheeler" className="text-[14px]" />
<span>SafeBoda Yard Gate 1</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-primary">
<Icon name="moped" className="text-[22px]" />
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-sm uppercase tracking-wider text-on-surface-variant">Staged Bags Ready</span>
<div className="flex items-baseline gap-1.5">
<span className="font-headline-lg text-headline-lg text-primary">8</span>
<span className="font-label-md text-on-surface-variant">Bags</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-label-sm pt-0.5">
<Icon name="inventory" className="text-[14px] text-tertiary" />
<span>42 Assigned Parcels</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-primary">
<Icon name="shopping_bag" className="text-[22px]" />
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-sm uppercase tracking-wider text-on-surface-variant">Active Runs In Transit</span>
<div className="flex items-baseline gap-1.5">
<span className="font-headline-lg text-headline-lg text-on-surface">18</span>
<span className="font-label-md text-tertiary font-bold">+3 en route</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-label-sm pt-0.5">
<Icon name="alt_route" className="text-[14px] text-secondary" />
<span>74.2% vel. Central Grid</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-secondary">
<Icon name="route" className="text-[22px]" />
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-sm uppercase tracking-wider text-on-surface-variant">Avg Staging to Departure</span>
<div className="flex items-baseline gap-1.5">
<span className="font-headline-lg text-headline-lg text-on-surface">6m 40s</span>
</div>
<div className="flex items-center gap-1 text-tertiary font-label-sm pt-0.5">
<Icon name="speed" className="text-[14px]" />
<span>Target &lt;10m (98.4% SLA)</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-tertiary">
<Icon name="timer" className="text-[22px]" />
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">

<div className="lg:col-span-4 flex flex-col gap-space-sm">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_2px_8px_rgba(14,27,77,0.04)] space-y-space-sm">

<div className="p-1 bg-surface-container rounded-lg flex items-center gap-1">
<button className="flex-1 py-1.5 text-center font-label-md text-label-md rounded-md bg-surface-container-lowest text-on-surface shadow-sm transition-all flex items-center justify-center gap-1">
<span>Staged Bags</span>
<span className="px-1.5 py-0.2 rounded-full bg-primary text-on-primary font-label-sm">8</span>
</button>
<button className="flex-1 py-1.5 text-center font-label-md text-label-md rounded-md text-on-surface-variant hover:text-on-surface transition-all flex items-center justify-center gap-1">
<span>Available Couriers</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container-highest text-on-surface font-label-sm">14</span>
</button>
</div>

<div className="relative">
<Icon name="search" className="absolute left-3 top-3 text-[18px] text-outline" />
<input className="w-full h-11 pl-9 pr-3 rounded-lg bg-surface-container-low text-on-surface font-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest shadow-[inset_0_1px_2px_rgba(14,27,77,0.06)]" placeholder="Filter bags, corridor, rider..." type="text" value="Kololo" />
</div>
</div>

<div className="space-y-space-sm">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_4px_14px_rgba(218,55,0,0.12)] bg-gradient-to-r from-primary-fixed/20 to-transparent cursor-pointer transition-all">
<div className="flex items-start justify-between">
<div>
<div className="flex items-center gap-1.5">
<span className="font-headline-sm text-headline-sm text-on-surface">#BAG-KLA-04</span>
<span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-sm px-2 py-0.5 rounded-full flex items-center gap-0.5">
<Icon name="check_circle" className="text-[12px]" />
                    Bay 1 Ready
                  </span>
</div>
<h4 className="font-label-lg text-label-lg text-primary pt-0.5">Kololo &amp; Kisementi Corridor</h4>
</div>
<span className="px-2 py-1 rounded bg-surface-container text-on-surface font-label-md">6 Orders</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2 line-clamp-1">
              Acacia Mall • Golf Course • Wampewo Ave
            </p>
<div className="mt-3 pt-2.5 bg-surface-container-low rounded-lg p-2 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-label-md">KB</div>
<div>
<span className="font-label-md text-label-md text-on-surface block leading-tight">Kizito Brian</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Bajaj Boxer • #UFE 219K</span>
</div>
</div>
<Icon name="chevron_right" className="text-primary text-[20px]" />
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_2px_8px_rgba(14,27,77,0.04)] hover:bg-surface-container-low transition-all cursor-pointer">
<div className="flex items-start justify-between">
<div>
<div className="flex items-center gap-1.5">
<span className="font-headline-sm text-headline-sm text-on-surface">#BAG-KLA-09</span>
<span className="bg-secondary-container text-on-secondary-container font-label-sm px-2 py-0.5 rounded-full">Packing</span>
</div>
<h4 className="font-label-lg text-label-lg text-on-surface pt-0.5">Ntinda &amp; Nakawa Corridor</h4>
</div>
<span className="px-2 py-1 rounded bg-surface-container text-on-surface font-label-md">5 Orders</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2 line-clamp-1">
              Capital Shoppers • Ministers Village • Spear House
            </p>
<div className="mt-3 pt-2 flex items-center justify-between text-on-surface-variant">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface-container flex items-center justify-center font-label-sm">KP</div>
<span className="font-label-md text-on-surface">Kato Paul (Standby)</span>
</div>
<span className="font-label-sm text-outline">Bay 3</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_2px_8px_rgba(14,27,77,0.04)] hover:bg-surface-container-low transition-all cursor-pointer">
<div className="flex items-start justify-between">
<div>
<div className="flex items-center gap-1.5">
<span className="font-headline-sm text-headline-sm text-on-surface">#BAG-KLA-14</span>
<span className="bg-error-container text-on-error-container font-label-sm px-2 py-0.5 rounded-full">No Rider</span>
</div>
<h4 className="font-label-lg text-label-lg text-on-surface pt-0.5">Downtown &amp; Kikuubo Express</h4>
</div>
<span className="px-2 py-1 rounded bg-surface-container text-on-surface font-label-md">8 Orders</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2 line-clamp-1">
              Mukwano Arcade • Qualicel • Ben Kiwanuka St
            </p>
<div className="mt-3 pt-2 flex items-center justify-between">
<span className="font-label-sm text-error flex items-center gap-1">
<Icon name="warning" className="text-[14px]" /> Needs Assignment
              </span>
<button className="px-3 py-1 bg-surface-container-high hover:bg-primary hover:text-on-primary rounded text-on-surface font-label-sm transition-all">
                Assign
              </button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_2px_8px_rgba(14,27,77,0.04)] hover:bg-surface-container-low transition-all cursor-pointer">
<div className="flex items-start justify-between">
<div>
<div className="flex items-center gap-1.5">
<span className="font-headline-sm text-headline-sm text-on-surface">#BAG-KLA-18</span>
<span className="bg-surface-container-high text-on-surface font-label-sm px-2 py-0.5 rounded-full">Staged</span>
</div>
<h4 className="font-label-lg text-label-lg text-on-surface pt-0.5">Bugolobi Village Corridor</h4>
</div>
<span className="px-2 py-1 rounded bg-surface-container text-on-surface font-label-md">4 Orders</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2 line-clamp-1">
              Village Mall • Bandali Rise • Spring Rd
            </p>
<div className="mt-3 pt-2 flex items-center justify-between text-on-surface-variant">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface-container flex items-center justify-center font-label-sm">MR</div>
<span className="font-label-md text-on-surface">Mugisha Ronald</span>
</div>
<span className="font-label-sm text-outline">Bay 4</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-8 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-[0_2px_8px_rgba(14,27,77,0.04)] space-y-space-md">
<div className="flex flex-wrap items-start justify-between gap-y-2">
<div>
<div className="flex items-center gap-2 flex-wrap">
<h2 className="font-headline-md text-headline-md text-on-surface">Courier Bag #BAG-KLA-04</h2>
<span className="px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm uppercase flex items-center gap-1">
<Icon name="verified" className="text-[14px]" />
                  Ready For Scan Out
                </span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm">Bay 1 Staging</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mt-1 flex items-center gap-1.5 flex-wrap">
<span className="font-label-md text-primary">Route Corridor:</span>
<span>Nakasero Central → Kololo Terrace → Acacia Mall</span>
<span>•</span>
<span className="font-label-md text-on-surface">Est. Route Time: 42 mins</span>
</p>
</div>
<div className="flex items-center gap-2">
<button className="w-9 h-9 rounded-lg bg-surface-container-low text-on-surface flex items-center justify-center hover:bg-surface-container transition-all">
<Icon name="print" className="text-[20px]" />
</button>
<button className="w-9 h-9 rounded-lg bg-surface-container-low text-on-surface flex items-center justify-center hover:bg-surface-container transition-all">
<Icon name="more_vert" className="text-[20px]" />
</button>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md flex flex-wrap items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="relative">
<img className="w-14 h-14 rounded-xl object-cover shadow-sm" data-alt="Professional portrait photograph of a Ugandan motorcycle courier driver in bright morning daylight, smiling warmly wearing an orange polo and safety jacket, clean background." src="/images/7ed2011dd38d2a7c.webp" />
<span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-tertiary border-2 border-surface-container-lowest"></span>
</div>
<div>
<div className="flex items-center gap-2">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Kizito Brian</h3>
<span className="font-label-sm px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed">SafeBoda #SB-0824</span>
<div className="flex items-center text-amber-500 font-label-md text-label-md">
<Icon name="star" className="text-[16px]" />
<span>4.92</span>
<span className="text-on-surface-variant font-body-sm ml-0.5">(1,420 trips)</span>
</div>
</div>
<div className="flex items-center gap-space-md text-on-surface-variant font-body-sm mt-1">
<span className="flex items-center gap-1">
<Icon name="sports_motorsports" className="text-[16px]" />
                    Bajaj Boxer 125cc (#UFE 219K)
                  </span>
<span>•</span>
<span className="flex items-center gap-1">
<Icon name="call" className="text-[16px]" />
                    +256 701 ••• 442
                  </span>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<div className="text-right">
<span className="font-label-sm text-on-surface-variant block uppercase">Checked In At</span>
<span className="font-label-md text-on-surface">11:18 AM • Loading Bay 1</span>
</div>
<button className="px-3 py-2 bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md rounded-lg shadow-sm transition-all ml-2">
                Reassign Rider
              </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">

<div className="bg-surface-container-lowest rounded-xl p-space-md bg-gradient-to-br from-tertiary-fixed/15 to-transparent flex items-center justify-between">
<div className="space-y-0.5">
<div className="flex items-center gap-1 text-tertiary font-label-sm">
<Icon name="lock" className="text-[16px]" />
<span>TAMPER EVIDENT SEAL TAG</span>
</div>
<div className="font-headline-sm text-headline-sm text-on-surface tracking-tight">#ZIP-KLA-88402</div>
<span className="font-body-sm text-tertiary font-label-md block">Scanned &amp; Locked at 11:22 AM</span>
</div>
<div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed">
<Icon name="qr_code_2" className="text-[20px]" />
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md bg-gradient-to-br from-surface-container-high to-transparent flex items-center justify-between">
<div className="space-y-0.5">
<div className="flex items-center gap-1 text-on-surface-variant font-label-sm">
<Icon name="scale" className="text-[16px]" />
<span>GROSS BAG WEIGHT</span>
</div>
<div className="flex items-baseline gap-1.5">
<span className="font-headline-sm text-headline-sm text-on-surface">4.8 kg</span>
<span className="font-body-sm text-on-surface-variant">/ 15.0 kg Max limit</span>
</div>
<span className="font-body-sm text-tertiary font-label-md block">Within Payload Spec (32% Cap)</span>
</div>
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface">
<Icon name="fitness_center" className="text-[20px]" />
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-[0_2px_8px_rgba(14,27,77,0.04)] space-y-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Manifest Inventory</h3>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm">6 Parcels</span>
</div>
<div className="flex items-center gap-space-sm">
<span className="font-label-sm text-on-surface-variant">Total Payment Value:</span>
<span className="font-price-display text-price-display text-primary whitespace-nowrap">UGX 1,420,000</span>
</div>
</div>

<div className="space-y-space-xs">

<div className="p-space-sm bg-surface-container-low rounded-xl flex items-center justify-between hover:bg-surface-container transition-colors">
<div className="flex items-center gap-space-md">
<span className="font-label-md text-outline">01</span>
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="Commercial studio product shot of SoundCore Space One ANC over-ear wireless headphones in jet black on bright neutral reflective floor with ambient studio lights." src="/images/246f63d3d7c8920a.webp" />
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface">SoundCore Space One ANC</span>
<span className="font-label-sm px-1.5 py-0.2 rounded bg-tertiary-fixed text-on-tertiary-fixed">High Value Payment</span>
</div>
<span className="font-body-sm text-on-surface-variant">#SC-9952 • Sarah Namubiru • Acacia Mall Store #4A</span>
</div>
</div>
<div className="text-right">
<span className="font-label-lg text-label-lg text-on-surface block whitespace-nowrap">UGX 248,500</span>
<span className="font-label-sm text-tertiary font-bold flex items-center justify-end gap-0.5">
<Icon name="check_circle" className="text-[13px]" /> Staged
                </span>
</div>
</div>

<div className="p-space-sm bg-surface-container-low rounded-xl flex items-center justify-between hover:bg-surface-container transition-colors">
<div className="flex items-center gap-space-md">
<span className="font-label-md text-outline">02</span>
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="Packaged electronics audio gear box on clean white background with tamper evident seal tape and shipping barcodes clearly visible." src="/images/c521a58a4b8ec958.webp" />
</div>
<div>
<span className="font-label-lg text-label-lg text-on-surface">SoundCore ANC Pro Studio</span>
<span className="font-body-sm text-on-surface-variant block">#SC-9948 • David Mukasa • Kololo Terrace Plot 12</span>
</div>
</div>
<div className="text-right">
<span className="font-label-lg text-label-lg text-on-surface block whitespace-nowrap">UGX 310,000</span>
<span className="font-label-sm text-tertiary font-bold flex items-center justify-end gap-0.5">
<Icon name="check_circle" className="text-[13px]" /> Staged
                </span>
</div>
</div>

<div className="p-space-sm bg-surface-container-low rounded-xl flex items-center justify-between hover:bg-surface-container transition-colors">
<div className="flex items-center gap-space-md">
<span className="font-label-md text-outline">03</span>
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest overflow-hidden flex-shrink-0 flex items-center justify-center text-primary">
<Icon name="bolt" className="text-[20px]" />
</div>
<div>
<span className="font-label-lg text-label-lg text-on-surface">Anker 65W GaN Fast Charger</span>
<span className="font-body-sm text-on-surface-variant block">#SC-9941 • Arthur Kato • Lugogo Bypass Office Pk</span>
</div>
</div>
<div className="text-right">
<span className="font-label-lg text-label-lg text-on-surface block whitespace-nowrap">UGX 115,000</span>
<span className="font-label-sm text-tertiary font-bold flex items-center justify-end gap-0.5">
<Icon name="check_circle" className="text-[13px]" /> Staged
                </span>
</div>
</div>

<div className="p-space-sm bg-surface-container-low rounded-xl flex items-center justify-between hover:bg-surface-container transition-colors">
<div className="flex items-center gap-space-md">
<span className="font-label-md text-outline">04</span>
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest overflow-hidden flex-shrink-0 flex items-center justify-center text-secondary">
<Icon name="headphones" className="text-[20px]" />
</div>
<div>
<span className="font-label-lg text-label-lg text-on-surface">Oraimo FreePods 4 Wireless</span>
<span className="font-body-sm text-on-surface-variant block">#SC-9935 • Florence Achen • Wampewo Crescent #8</span>
</div>
</div>
<div className="text-right">
<span className="font-label-lg text-label-lg text-on-surface block whitespace-nowrap">UGX 145,000</span>
<span className="font-label-sm text-tertiary font-bold flex items-center justify-end gap-0.5">
<Icon name="check_circle" className="text-[13px]" /> Staged
                </span>
</div>
</div>

<div className="p-space-sm bg-surface-container-low rounded-xl flex items-center justify-between hover:bg-surface-container transition-colors">
<div className="flex items-center gap-space-md">
<span className="font-label-md text-outline">05</span>
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest overflow-hidden flex-shrink-0 flex items-center justify-center text-tertiary">
<Icon name="speaker" className="text-[20px]" />
</div>
<div>
<span className="font-label-lg text-label-lg text-on-surface">JBL Flip 6 Bluetooth Speaker</span>
<span className="font-body-sm text-on-surface-variant block">#SC-9920 • Moses Byaruhanga • Prince Charles Dr</span>
</div>
</div>
<div className="text-right">
<span className="font-label-lg text-label-lg text-on-surface block whitespace-nowrap">UGX 320,000</span>
<span className="font-label-sm text-tertiary font-bold flex items-center justify-end gap-0.5">
<Icon name="check_circle" className="text-[13px]" /> Staged
                </span>
</div>
</div>

<div className="p-space-sm bg-surface-container-low rounded-xl flex items-center justify-between hover:bg-surface-container transition-colors">
<div className="flex items-center gap-space-md">
<span className="font-label-md text-outline">06</span>
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest overflow-hidden flex-shrink-0 flex items-center justify-center text-outline">
<Icon name="cable" className="text-[20px]" />
</div>
<div>
<span className="font-label-lg text-label-lg text-on-surface">USB-C 100W Braided Cable 2M</span>
<span className="font-body-sm text-on-surface-variant block">#SC-9918 • Ritah Kembabazi • Kisementi Arcades</span>
</div>
</div>
<div className="text-right">
<span className="font-label-lg text-label-lg text-on-surface block whitespace-nowrap">UGX 45,000</span>
<span className="font-label-sm text-tertiary font-bold flex items-center justify-end gap-0.5">
<Icon name="check_circle" className="text-[13px]" /> Staged
                </span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_2px_8px_rgba(14,27,77,0.04)] space-y-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="near_me" className="text-primary text-[20px]" />
<span className="font-label-lg text-label-lg text-on-surface">Nakasero → Kololo Run #108</span>
<span className="font-body-sm text-on-surface-variant">• 6 Stop Sequence Optimized (5.8 km Total)</span>
</div>
<span className="font-label-sm text-tertiary">Traffic Level: Moderate (Lugogo Open)</span>
</div>

<div className="relative w-full h-24 rounded-lg bg-surface-container-low overflow-hidden">
<div className="w-full h-full bg-cover bg-center opacity-40" data-location="Kololo, Kampala, Uganda" style={{}}></div>

<div className="absolute inset-0 flex items-center justify-between px-space-xl">
<div className="flex items-center gap-2 bg-surface-container-lowest/90 backdrop-blur-sm px-2.5 py-1.5 rounded-lg shadow-sm">
<span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>
<div>
<span className="font-label-sm text-on-surface uppercase block">Start</span>
<span className="font-body-sm text-on-surface font-bold">Nakasero Bay</span>
</div>
</div>

<div className="flex-1 mx-4">
<svg className="w-full h-6" fill="none" viewBox="0 0 300 24">
<path d="M0 12 H70 L90 4 H160 L180 20 H250 L270 12 H300" stroke="#ae2a00" strokeDasharray="4 4" strokeLinecap="round" strokeWidth="2.5"></path>
<circle cx="80" cy="8" fill="#006947" r="4"></circle>
<circle cx="170" cy="16" fill="#006947" r="4"></circle>
<circle cx="260" cy="12" fill="#006947" r="4"></circle>
</svg>
</div>
<div className="flex items-center gap-2 bg-surface-container-lowest/90 backdrop-blur-sm px-2.5 py-1.5 rounded-lg shadow-sm">
<Icon name="flag" className="text-tertiary text-[18px]" />
<div>
<span className="font-label-sm text-on-surface uppercase block">Drop 06</span>
<span className="font-body-sm text-on-surface font-bold">Acacia Mall</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_4px_20px_rgba(14,27,77,0.06)] flex flex-wrap items-center justify-between gap-space-md sticky bottom-20 z-10">
<div className="flex items-center gap-space-sm">
<button className="px-space-md py-3 rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high transition-all font-label-md flex items-center gap-1.5">
<Icon name="rule" className="text-[18px]" />
<span>Report Weight Mismatch</span>
</button>
<button className="px-space-md py-3 rounded-xl bg-surface-container text-error hover:bg-error-container transition-all font-label-md flex items-center gap-1.5">
<Icon name="cancel" className="text-[18px]" />
<span>De-stage Bag</span>
</button>
</div>
<div className="flex items-center gap-space-sm flex-1 sm:flex-initial justify-end">
<button className="px-space-lg py-3 rounded-xl bg-surface-container-lowest border border-outline-variant text-on-surface hover:bg-surface-container transition-all font-label-lg flex items-center gap-2 shadow-sm">
<Icon name="print" className="text-[20px]" />
<span>Print Manifest Slip</span>
</button>
<button className="flex-1 sm:flex-initial px-space-xl py-3 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] hover:opacity-95 active:scale-[0.98] text-white font-label-lg flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(218,55,0,0.30)] transition-all" id="dispatch-cta-btn">
<Icon name="barcode_scanner" className="text-[22px]" />
<span>CONFIRM SCAN OUT TO RIDER</span>
</button>
</div>
</div>
</div>
</div>
</div>

</div></main>
<footer className="fixed bottom-0 left-0 right-0 z-50 bg-surface-container-lowest shadow-[0_-4px_20px_rgba(14,27,77,0.06)]"><nav className="w-full max-w-3xl mx-auto px-margin py-space-sm flex items-center justify-between gap-space-xs" data-active-classes="bg-primary-container text-on-primary-container rounded-xl shadow-[0_4px_14px_rgba(218,55,0,0.30)] font-label-lg"><a className="flex-1 flex flex-col items-center justify-center py-2 px-1 text-on-surface-variant hover:text-on-surface transition-all" data-path="pickup" href="#"><Icon name="qr_code_scanner" className="text-[24px]" /><span className="font-label-sm text-label-sm mt-1">Pickup</span></a><a className="flex-1 flex flex-col items-center justify-center py-2 px-1 text-on-surface-variant hover:text-on-surface transition-all" data-path="storage" href="#"><Icon name="inventory_2" className="text-[24px]" /><span className="font-label-sm text-label-sm mt-1">Storage</span></a><a aria-current="page" className="flex-1 flex flex-col items-center justify-center py-2 px-1 transition-all bg-primary-container text-on-primary-container rounded-xl shadow-[0_4px_14px_rgba(218,55,0,0.30)] font-label-lg" data-path="dispatch" href="#"><Icon name="local_shipping" className="text-[24px]" /><span className="font-label-sm text-label-sm mt-1">Dispatch</span></a><a className="flex-1 flex flex-col items-center justify-center py-2 px-1 text-on-surface-variant hover:text-on-surface transition-all" data-path="returns" href="#"><Icon name="assignment_return" className="text-[24px]" /><span className="font-label-sm text-label-sm mt-1">Returns</span></a><a className="flex-1 flex flex-col items-center justify-center py-2 px-1 text-on-surface-variant hover:text-on-surface transition-all" data-path="station-settings" href="#"><Icon name="tune" className="text-[24px]" /><span className="font-label-sm text-label-sm mt-1">More</span></a></nav></footer>
    </div>
  );
};

export default Tablet;
