// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/admin/orders_oversight_detail_tablet/code.html
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
      
      <main className="w-full pt-35 bg-surface min-h-[calc(100vh-4rem)]"><div className="w-full px-margin-desktop py-space-lg"><div className="flex flex-col w-full">

<div className="flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-low px-space-lg py-space-sm rounded-xl mb-space-lg">
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-space-xs">
<span className="w-2.5 h-2.5 rounded-full bg-emerald-escrow animate-ping"></span>
<span className="font-label-md text-label-md text-on-surface">Telemetry Gateway: Kampala Hub East</span>
</div>
<div className="hidden sm:flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
<Icon name="satellite_alt" className="text-[14px] text-tertiary" />
<span>GPS Sat Lock: 14/16 Active</span>
</div>
</div>
<div className="flex items-center gap-space-md font-label-sm text-label-sm text-on-surface-variant">
<span>Auto-refresh: <strong>3s</strong></span>
<span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
<span className="text-primary font-semibold">Shift: Superadmin Namubiru</span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-100 gap-space-lg items-start">

<div className="lg:col-span-38 flex flex-col gap-space-md w-full">

<div className="bg-surface-container p-space-md rounded-xl flex flex-col gap-space-sm shadow-md">
<div className="relative w-full">
<Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]" />
<input className="w-full bg-surface-container-high text-on-surface pl-9 pr-8 py-2 rounded-lg font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-highest placeholder:text-outline" placeholder="Search Order #, Buyer, IMEI, Plate..." type="text" value="SC-ORD-9488" />
<button aria-label="Clear search" className="absolute right-2.5 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface" type="button">
<Icon name="cancel" className="text-[16px]" />
</button>
</div>

<div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
<button className="px-2.5 py-1 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm whitespace-nowrap">
            All <span className="ml-1 opacity-70">128</span>
</button>
<button className="px-2.5 py-1 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm whitespace-nowrap flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-danger-penalty"></span>
            Action Req. <span className="opacity-90 font-bold">8</span>
</button>
<button className="px-2.5 py-1 rounded-full bg-action-gradient-end text-on-primary-container font-label-sm text-label-sm whitespace-nowrap shadow-sm">
            In-Transit <span className="ml-1 opacity-80">42</span>
</button>
<button className="px-2.5 py-1 rounded-full bg-surface-container-high text-emerald-escrow font-label-sm text-label-sm whitespace-nowrap">
            payment protected <span className="ml-1 opacity-70">14</span>
</button>
<button className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm whitespace-nowrap">
            Settled <span className="ml-1 opacity-70">64</span>
</button>
</div>
</div>

<div className="flex flex-col gap-space-sm" id="orderStreamCards">

<div className="bg-surface-container-high rounded-xl p-space-md shadow-md cursor-pointer relative overflow-hidden transition-all duration-150 ring-2 ring-primary-container">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-action-gradient-start to-action-gradient-end"></div>
<div className="flex items-start justify-between gap-2 mb-1.5 pl-1">
<div className="flex items-center gap-1.5">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight">#SC-ORD-9488</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-lowest text-primary font-label-sm text-[10px]">ACTIVE</span>
</div>
<span className="font-price-display text-headline-sm text-tertiary whitespace-nowrap">UGX 235k</span>
</div>
<div className="pl-1 mb-2">
<p className="font-body-md text-body-md text-on-surface font-semibold truncate">SoundCore Space One ANC</p>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-0.5">
<Icon name="person" className="text-[14px] text-outline" />
<span>Dennis Mukasa</span>
<span className="text-outline">•</span>
<span className="text-secondary">Kololo Area</span>
</p>
</div>

<div className="bg-surface-container rounded-lg p-2 flex flex-col gap-1.5 text-on-surface-variant">
<div className="flex items-center justify-between text-label-sm font-label-sm">
<span className="flex items-center gap-1 text-on-surface font-medium">
<Icon name="two_wheeler" className="text-[14px] text-amber-warning" />
                Mukasa Brian (UEF 842X)
              </span>
<span className="text-tertiary font-bold flex items-center gap-0.5">
<Icon name="timer" className="text-[13px]" /> 14m ETA
              </span>
</div>
<div className="flex items-center justify-between pt-1 font-label-sm text-[10px]">
<span className="text-emerald-escrow flex items-center gap-1">
<Icon name="lock" className="text-[12px]" />
                Pesapal Settlement Account
              </span>
<span className="text-on-surface-variant">SoundCore Uganda</span>
</div>
</div>
</div>

<div className="bg-surface-container rounded-xl p-space-md shadow-sm hover:bg-surface-container-high transition-colors cursor-pointer relative overflow-hidden">
<div className="flex items-start justify-between gap-2 mb-1">
<div className="flex items-center gap-1.5">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight">#SC-ORD-9490</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-high text-amber-warning font-label-sm text-[10px]">STAGED</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface whitespace-nowrap">UGX 280k</span>
</div>
<div className="mb-2">
<p className="font-body-md text-body-md text-on-surface truncate">Liberty 4 NC Earbuds</p>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-0.5">
<Icon name="location_on" className="text-[14px] text-outline" />
<span>Patricia K. (Nakasero)</span>
</p>
</div>
<div className="bg-surface-container-low rounded-lg px-2.5 py-1.5 flex items-center justify-between text-label-sm font-label-sm">
<span className="text-amber-warning flex items-center gap-1">
<Icon name="warehouse" className="text-[14px]" />
              Pioneer Mall Bay 03
            </span>
<span className="text-outline">Awaiting Rider</span>
</div>
</div>

<div className="bg-surface-container rounded-xl p-space-md shadow-sm hover:bg-surface-container-high transition-colors cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-danger-penalty/10 rounded-full blur-xl pointer-events-none"></div>
<div className="flex items-start justify-between gap-2 mb-1">
<div className="flex items-center gap-1.5">
<span className="font-headline-sm text-headline-sm text-error font-bold tracking-tight">#SC-ORD-9492</span>
<span className="px-1.5 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-[10px] font-bold">ROUTE ANOMALY</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface whitespace-nowrap">UGX 140k</span>
</div>
<div className="mb-2">
<p className="font-body-md text-body-md text-on-surface truncate">Anker 65W GaN Charger</p>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-0.5">
<Icon name="person" className="text-[14px] text-outline" />
<span>David O. (Makerere Main)</span>
</p>
</div>
<div className="bg-error-container/40 text-on-error-container rounded-lg px-2.5 py-1.5 flex items-center gap-1.5 text-label-sm font-label-sm">
<Icon name="warning" className="text-[16px] text-danger-penalty" />
<span className="truncate">Entebbe Corridor (Expected: Clock Tower)</span>
</div>
</div>

<div className="bg-surface-container rounded-xl p-space-md shadow-sm opacity-85 hover:opacity-100 transition-opacity cursor-pointer">
<div className="flex items-start justify-between gap-2 mb-1">
<div className="flex items-center gap-1.5">
<span className="font-headline-sm text-headline-sm text-on-surface-variant font-medium tracking-tight">#SC-ORD-9485</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-tertiary font-label-sm text-[10px]">SETTLED</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface-variant whitespace-nowrap">UGX 315k</span>
</div>
<div className="mb-2">
<p className="font-body-md text-body-md text-on-surface truncate">SoundCore Motion+ 30W</p>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-0.5">
<span>Herbert Z.</span>
<span className="text-outline">•</span>
<span className="text-emerald-escrow font-semibold">OTP: #8921 Validated</span>
</p>
</div>
<div className="bg-surface-container-low rounded-lg px-2.5 py-1.5 flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
<span className="flex items-center gap-1 text-tertiary">
<Icon name="verified" className="text-[14px]" /> Paid to seller
            </span>
<span>13:58 EAT</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
<span className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
          Cluster Latency: 19ms
        </span>
<span>Showing 4 of 128 orders</span>
</div>
</div>

<div className="lg:col-span-62 flex flex-col gap-space-lg w-full">

<div className="bg-surface-container rounded-2xl p-space-lg shadow-xl flex flex-col gap-space-lg">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md pb-space-md">
<div className="flex flex-col">
<div className="flex items-center gap-space-sm flex-wrap">
<span className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">#SC-ORD-9488</span>
<span className="px-space-sm py-1 rounded-full bg-amber-warning/15 text-amber-warning font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="shield_lock" className="text-[14px]" />
                Payment Protected: UGX 388,500
              </span>
</div>
<div className="flex items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm mt-1">
<span className="flex items-center gap-1">
<Icon name="account_balance" className="text-[14px] text-tertiary" />
                Payment Hold Ref: <strong className="text-on-surface">#TX-998124</strong>
</span>
<span>•</span>
<span className="flex items-center gap-1">
<Icon name="schedule" className="text-[14px]" />
                Today, 14:22:08 EAT
              </span>
</div>
</div>

<div className="flex items-center gap-2 self-start sm:self-center">
<button className="px-3 py-2 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors font-label-md text-label-md flex items-center gap-1.5">
<Icon name="print" className="text-[16px]" />
<span>Waybill Slip</span>
</button>
<button className="px-3 py-2 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors font-label-md text-label-md flex items-center gap-1.5">
<Icon name="history" className="text-[16px]" />
<span>Audit Log</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="bg-surface-container-high rounded-xl p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-2">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-bold">Consignee (Buyer)</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container text-tertiary font-label-sm text-[10px] flex items-center gap-1">
<Icon name="security" className="text-[12px]" /> Masked Relay
                </span>
</div>
<p className="font-headline-sm text-headline-sm text-on-surface font-bold">Dennis Mukasa</p>
<div className="mt-1 flex items-center gap-2">
<span className="font-code-display text-body-lg text-primary font-bold tracking-wider">+256 772 ••• 814</span>
<button aria-label="Initiate proxy call" className="p-1 rounded bg-surface-container-highest text-on-surface hover:text-primary transition-colors" type="button">
<Icon name="call" className="text-[16px]" />
</button>
</div>
</div>
<div className="pt-3 mt-3 bg-surface-container/60 -mx-space-md -mb-space-md p-space-md rounded-b-xl flex items-start gap-2">
<Icon name="pin_drop" className="text-[16px] text-primary shrink-0 mt-0.5" />
<p className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
                Plot 14 Acacia Avenue, Lower Kololo Gate A (Behind Housing Finance Bank)
              </p>
</div>
</div>

<div className="bg-surface-container-high rounded-xl p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-2">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-bold">Originating Merchant</span>
<span className="px-1.5 py-0.5 rounded bg-emerald-escrow/20 text-emerald-escrow font-label-sm text-[10px] font-bold">KYC VERIFIED TIER-1</span>
</div>
<p className="font-headline-sm text-headline-sm text-on-surface font-bold">SoundCore Uganda Official</p>
<div className="mt-1 flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
<span>Tax ID: <strong className="text-on-surface font-mono">101-884-9023</strong></span>
<span>•</span>
<span className="text-tertiary">Pioneer Mall G-14</span>
</div>
</div>
<div className="pt-3 mt-3 bg-surface-container/60 -mx-space-md -mb-space-md p-space-md rounded-b-xl flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">Merchant Reserve:</span>
<span className="font-label-md text-label-md text-tertiary whitespace-nowrap">UGX 14.2M Held in Trust</span>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md flex flex-col gap-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-action-gradient-start flex items-center justify-center font-bold text-on-primary-container text-body-lg">
                MB
              </div>
<div>
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">Mukasa Brian</span>
<span className="px-1.5 py-0.5 rounded bg-amber-warning/20 text-amber-warning font-label-sm text-label-sm font-bold flex items-center gap-0.5">
<Icon name="star" className="text-[12px] fill-1" /> 4.9
                  </span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-[10px]">SafeBoda Direct Express</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  Plate: <strong className="text-on-surface">UEF 842X</strong> (Bajaj Boxer 150) • Orange Helmet #44
                </p>
</div>
</div>
<div className="flex items-center gap-2 self-end sm:self-center">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface hover:text-primary transition-colors font-label-sm text-label-sm flex items-center gap-1">
<Icon name="phone_in_talk" className="text-[14px]" />
                Call Masked
              </button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface hover:text-amber-warning transition-colors font-label-sm text-label-sm flex items-center gap-1">
<Icon name="cell_tower" className="text-[14px]" />
                Ping Node
              </button>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-surface-container-high p-space-sm rounded-lg text-center">
<div className="flex flex-col">
<span className="font-label-sm text-[10px] text-outline uppercase">Current Speed</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">34 km/h</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-[10px] text-outline uppercase">Active Vector</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">Kira Rd North</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-[10px] text-outline uppercase">Dropoff ETA</span>
<span className="font-headline-sm text-headline-sm text-tertiary font-bold">14 Mins</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-[10px] text-outline uppercase">Battery / Signal</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">88% • 4G</span>
</div>
</div>

<div className="relative w-full h-56 rounded-xl overflow-hidden shadow-inner">
<div className="w-full h-full bg-cover bg-center" data-location="Kampala, Uganda" style={{"backgroundImage":"url('/images/94f1cba4ff8606b5.webp')"}}></div>

<div className="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-surface-dark/20 to-transparent pointer-events-none"></div>
<div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse"></span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Live GPS Breadcrumb: 0.8km to Kololo Turnoff</span>
</div>

<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-on-surface font-label-sm text-label-sm bg-surface-container-lowest/90 backdrop-blur-md p-2.5 rounded-lg">
<span className="flex items-center gap-1.5 truncate">
<Icon name="navigation" className="text-action-gradient-start text-[16px]" />
<span>Pioneer Mall Central Hub ➔ Acacia Ave Gate A</span>
</span>
<span className="text-tertiary font-bold shrink-0">2.6 km remaining</span>
</div>
</div>
</div>

<div className="flex flex-col gap-2">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-bold">Secure Fulfillment Pipeline</span>
<div className="grid grid-cols-1 sm:grid-cols-4 gap-2">

<div className="bg-surface-container-high p-space-sm rounded-lg relative overflow-hidden flex flex-col justify-between">
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-[11px] text-tertiary font-bold">01. PAID</span>
<Icon name="check_circle" className="text-tertiary text-[14px]" />
</div>
<p className="font-body-sm text-body-sm text-on-surface font-semibold">MTN MoMo</p>
<p className="font-label-sm text-[10px] text-outline mt-0.5">14:22:10 EAT</p>
</div>

<div className="bg-surface-container-high p-space-sm rounded-lg relative overflow-hidden flex flex-col justify-between">
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-[11px] text-tertiary font-bold">02. PACKED</span>
<Icon name="check_circle" className="text-tertiary text-[14px]" />
</div>
<p className="font-body-sm text-body-sm text-on-surface font-semibold truncate">Seal #SC-TS-4091</p>
<p className="font-label-sm text-[10px] text-outline mt-0.5">14:36:44 EAT</p>
</div>

<div className="bg-surface-container-high p-space-sm rounded-lg relative overflow-hidden flex flex-col justify-between">
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-[11px] text-tertiary font-bold">03. INTAKE</span>
<Icon name="check_circle" className="text-tertiary text-[14px]" />
</div>
<p className="font-body-sm text-body-sm text-on-surface font-semibold">SafeBoda Scanned</p>
<p className="font-label-sm text-[10px] text-outline mt-0.5">14:48:02 EAT</p>
</div>

<div className="bg-primary-container/20 p-space-sm rounded-lg relative overflow-hidden flex flex-col justify-between ring-1 ring-primary-container">
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-[11px] text-primary font-bold">04. TRANSIT</span>
<span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
</div>
<p className="font-body-sm text-body-sm text-on-surface font-semibold">Out for Delivery</p>
<p className="font-label-sm text-[10px] text-primary mt-0.5">ETA: 15:15 EAT</p>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl flex flex-col gap-space-md shadow-lg">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="admin_panel_settings" className="text-action-gradient-start text-[20px]" />
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">Superadmin Intervention Controls</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Tier-4 Execution Engine</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">

<button className="px-space-md py-3 rounded-xl bg-danger-penalty/15 hover:bg-danger-penalty/25 text-danger-penalty transition-all flex flex-col items-center justify-center text-center gap-1">
<Icon name="pause_circle" className="text-[20px]" />
<span className="font-label-md text-label-md font-bold">Emergency Hold</span>
<span className="font-label-sm text-[10px] opacity-80">Stop handover &amp; freeze OTP</span>
</button>

<button className="px-space-md py-3 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface transition-all flex flex-col items-center justify-center text-center gap-1">
<Icon name="swap_horiz" className="text-[20px] text-amber-warning" />
<span className="font-label-md text-label-md font-bold">Reassign Courier</span>
<span className="font-label-sm text-[10px] text-on-surface-variant">Hand over to bay marshal</span>
</button>

<button className="px-space-md py-3 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface transition-all flex flex-col items-center justify-center text-center gap-1">
<Icon name="policy" className="text-[20px] text-tertiary" />
<span className="font-label-md text-label-md font-bold">Quarantine Order</span>
<span className="font-label-sm text-[10px] text-on-surface-variant">Payment risk screening</span>
</button>
</div>
</div>

<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-bold">Internal Audit Stream (Sealed Package Bag Ledger)</span>
<span className="font-label-sm text-label-sm text-tertiary flex items-center gap-1">
<Icon name="lock" className="text-[13px]" /> SHA-256 Chained
            </span>
</div>

<div className="flex flex-col gap-2">
<div className="bg-surface-container-high p-space-md rounded-xl flex items-start gap-space-sm">
<div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
<Icon name="shield" className="text-on-primary text-[14px]" />
</div>
<div className="flex flex-col flex-1">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold">Officer Namubiru (Superadmin)</span>
<span className="font-label-sm text-[10px] text-outline">14:38:12 EAT</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Package seal photo verified against merchant packing station camera feed. Serial match confirmed on package barcode #SC-TS-4091. No package anomalies reported.
                </p>
</div>
</div>
<div className="bg-surface-container-high p-space-md rounded-xl flex items-start gap-space-sm">
<div className="w-7 h-7 rounded-full bg-surface-container-highest flex items-center justify-center shrink-0 mt-0.5">
<Icon name="smart_toy" className="text-on-surface-variant text-[14px]" />
</div>
<div className="flex flex-col flex-1">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold">Automated Telemetry Sentinel</span>
<span className="font-label-sm text-[10px] text-outline">14:48:30 EAT</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  SafeBoda Bluetooth Handshake logged at Pioneer Mall Bay-3 Gate sensor. Courier verification latency: 420ms.
                </p>
</div>
</div>
</div>

<div className="mt-space-xs flex flex-col gap-2">
<div className="relative w-full">
<textarea className="w-full bg-surface-container-high text-on-surface px-space-md py-2 rounded-xl font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary-container resize-none" placeholder="Enter encrypted operational note or rider instruction..." rows={2}></textarea>
</div>
<div className="flex justify-end">
<button className="px-space-lg py-2.5 rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-md text-label-md font-bold shadow-md hover:opacity-95 active:scale-95 transition-all flex items-center gap-1.5">
<Icon name="enhanced_encryption" className="text-[16px]" />
                Add Verified Internal Note
              </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div></div></main>
<footer className="w-full bg-surface-container-low py-space-md mt-auto shadow-[0_-4px_16px_rgba(0,0,0,0.3)]"><div className="w-full px-margin-desktop flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface-variant font-body-sm text-body-sm"><span>© 2025 SwiftCart Uganda Ltd • Digital E-Commerce Platform Powered by Pesapal</span><div className="flex items-center gap-space-md font-label-sm text-label-sm"><span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-tertiary"></span>Latency: 28ms</span><span>Server Node: EBB-DC-04</span><span>Build v4.18.2-prod</span></div></div></footer>
    </div>
  );
};

export default Tablet;
