// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/hub/hub_storage_aging_matrix_swiftcart_desktop_dark/code.html
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
<div className="p-space-lg lg:p-margin-desktop flex flex-col gap-space-lg w-full max-w-[1600px] mx-auto">

<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-space-sm">
<span className="inline-flex items-center gap-1.5 px-space-xs py-0.5 rounded bg-surface-container-high text-primary font-label-sm uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow animate-ping"></span>
            Telemetry Active
          </span>
<span className="text-on-surface-variant font-label-sm tracking-widest uppercase">Bay Sensor Feed: KLA-HUB-04-WLM</span>
</div>
<h1 className="text-headline-md lg:text-headline-lg font-headline-lg text-on-surface tracking-tight">Storage &amp; Aging Matrix</h1>
<p className="text-body-sm font-body-sm text-on-surface-variant">Real-time bin occupancy, spatial thermal map, and SLA aging governance across 1,500 physical racking cells.</p>
</div>

<div className="flex flex-wrap items-center gap-space-sm">
<button className="flex items-center gap-space-xs px-space-md h-[46px] rounded-xl bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-md transition-all" id="exportCsvBtn">
<Icon name="download" className="text-[18px]" />
<span>Export Inventory CSV</span>
</button>
<button className="flex items-center gap-space-xs px-space-md h-[46px] rounded-xl bg-surface-container-high hover:bg-surface-bright text-danger-penalty font-label-md transition-all" id="bulkRtoBtn">
<Icon name="assignment_return" className="text-[18px] text-danger-penalty" />
<span>Transfer 6 to RTO Bay</span>
</button>
<button className="flex items-center gap-space-xs px-space-lg h-[46px] rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-white font-label-md shadow-[0_4px_18px_rgba(218,55,0,0.35)] hover:brightness-110 active:scale-95 transition-all" id="bulkSmsTrigger">
<Icon name="cell_tower" className="text-[18px]" />
<span>Send 14 Bulk Alerts</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between shadow-sm relative overflow-hidden group">
<div className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary/5 rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
<div className="flex items-start justify-between">
<span className="font-label-sm uppercase tracking-wider text-on-surface-variant">Total Slot Pool</span>
<Icon name="shelves" className="text-on-surface-variant text-[20px]" />
</div>
<div className="mt-space-md flex flex-col">
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-on-surface tracking-tight">1,500</span>
<span className="font-label-sm text-on-surface-variant">physical bins</span>
</div>
<div className="flex items-center justify-between text-body-sm text-on-surface-variant mt-1">
<span>Floor Density</span>
<span className="text-tertiary font-label-md">Nominal (4 Bays)</span>
</div>
</div>
<div className="w-full bg-surface-container-highest h-1.5 rounded-full mt-space-sm overflow-hidden">
<div className="bg-secondary h-full rounded-full w-full"></div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between shadow-sm relative overflow-hidden group">
<div className="absolute -right-6 -bottom-6 w-24 h-24 bg-tertiary/5 rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
<div className="flex items-start justify-between">
<span className="font-label-sm uppercase tracking-wider text-on-surface-variant">Occupied Slots</span>
<Icon name="inventory_2" className="text-tertiary text-[20px]" />
</div>
<div className="mt-space-md flex flex-col">
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-on-surface tracking-tight">1,170</span>
<span className="font-label-md px-1.5 py-0.5 rounded bg-tertiary-container/30 text-tertiary-fixed font-bold">78% Full</span>
</div>
<div className="flex items-center justify-between text-body-sm text-on-surface-variant mt-1">
<span>Buffer Space</span>
<span className="text-on-surface font-label-md">330 Free Bins</span>
</div>
</div>
<div className="w-full bg-surface-container-highest h-1.5 rounded-full mt-space-sm overflow-hidden">
<div className="bg-tertiary h-full rounded-full transition-all duration-1000" style={{"width":"78%"}}></div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between shadow-sm relative overflow-hidden group">
<div className="absolute -right-6 -bottom-6 w-24 h-24 bg-amber-warning/10 rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
<div className="flex items-start justify-between">
<span className="font-label-sm uppercase tracking-wider text-amber-warning">Hub SLA Breach (&gt;48h)</span>
<Icon name="pixel_4_4xl_4a_5_5a_5g" className="text-amber-warning text-[20px]" />
</div>
<div className="mt-space-md flex flex-col">
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-amber-warning tracking-tight">14</span>
<span className="font-label-sm text-amber-warning/80">parcels stalled</span>
</div>
<div className="flex items-center justify-between text-body-sm text-on-surface-variant mt-1">
<span>Protocol Action</span>
<span className="text-on-surface font-label-md">Immediate Phone Outreach</span>
</div>
</div>
<div className="w-full bg-surface-container-highest h-1.5 rounded-full mt-space-sm overflow-hidden">
<div className="bg-amber-warning h-full rounded-full" style={{"width":"22%"}}></div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between shadow-sm relative overflow-hidden group">
<div className="absolute -right-6 -bottom-6 w-24 h-24 bg-danger-penalty/10 rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
<div className="flex items-start justify-between">
<span className="font-label-sm uppercase tracking-wider text-danger-penalty">Expired / RTO Gate (&gt;72h)</span>
<Icon name="assignment_late" className="text-danger-penalty text-[20px]" />
</div>
<div className="mt-space-md flex flex-col">
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-danger-penalty tracking-tight">6</span>
<span className="font-label-sm text-danger-penalty/80">forfeited holding</span>
</div>
<div className="flex items-center justify-between text-body-sm text-on-surface-variant mt-1">
<span>Settlement Shield</span>
<span className="text-emerald-escrow font-label-md">Payment Safe Hold</span>
</div>
</div>
<div className="w-full bg-surface-container-highest h-1.5 rounded-full mt-space-sm overflow-hidden">
<div className="bg-danger-penalty h-full rounded-full" style={{"width":"12%"}}></div>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-space-sm bg-surface-container-low p-1.5 rounded-xl">
<div className="flex items-center gap-1 overflow-x-auto">
<button className="zone-tab-btn active px-space-md py-2 rounded-lg font-label-md transition-all bg-primary-container text-on-primary-container whitespace-nowrap" data-zone="all">
          All Storage Zones <span className="ml-1 opacity-75 font-body-sm">(1,500)</span>
</button>
<button className="zone-tab-btn px-space-md py-2 rounded-lg font-label-md transition-all text-on-surface-variant hover:text-on-surface hover:bg-surface-container whitespace-nowrap" data-zone="A">
          Zone A: High-Priority / Next-Day <span className="ml-1 opacity-75 font-body-sm">(420)</span>
</button>
<button className="zone-tab-btn px-space-md py-2 rounded-lg font-label-md transition-all text-on-surface-variant hover:text-on-surface hover:bg-surface-container whitespace-nowrap" data-zone="B">
          Zone B: Standard E-Commerce <span className="ml-1 opacity-75 font-body-sm">(600)</span>
</button>
<button className="zone-tab-btn px-space-md py-2 rounded-lg font-label-md transition-all text-on-surface-variant hover:text-on-surface hover:bg-surface-container whitespace-nowrap" data-zone="C">
          Zone C: Bulky Goods <span className="ml-1 opacity-75 font-body-sm">(180)</span>
</button>
<button className="zone-tab-btn px-space-md py-2 rounded-lg font-label-md transition-all text-on-surface-variant hover:text-on-surface hover:bg-surface-container whitespace-nowrap" data-zone="D">
          Zone D: Transit Hold <span className="ml-1 opacity-75 font-body-sm">(300)</span>
</button>
</div>
<div className="flex items-center gap-space-xs px-space-sm py-1 bg-surface-container rounded-lg self-end sm:self-auto">
<Icon name="tune" className="text-[16px] text-tertiary" />
<span className="font-label-sm text-on-surface uppercase tracking-wider">Thermal Heatmap Live</span>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-md items-start">

<div className="xl:col-span-8 p-space-lg rounded-xl bg-surface-container-low flex flex-col gap-space-md shadow-md">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<Icon name="grid_view" className="text-primary text-[22px]" />
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface">Physical Racking Schematic • Level G1</span>
<span className="font-body-sm text-on-surface-variant">Tap or hover any bin cell to trigger optical package inspector</span>
</div>
</div>

<div className="flex flex-wrap items-center gap-3 text-label-sm">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded bg-emerald-escrow"></span>
<span className="text-on-surface">&lt;12h Fresh</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded bg-mtn-yellow"></span>
<span className="text-on-surface">12-24h SLA</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded bg-action-gradient-start"></span>
<span className="text-on-surface">24-48h Warn</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded bg-danger-penalty animate-pulse"></span>
<span className="text-on-surface">&gt;48h Critical</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded bg-surface-container-highest"></span>
<span className="text-on-surface-variant">Vacant</span>
</div>
</div>
</div>

<div className="flex flex-col gap-space-md overflow-x-auto pb-2">

<div className="flex flex-col gap-1.5 bg-surface-container p-space-md rounded-lg" data-zone-group="A">
<div className="flex items-center justify-between text-label-sm text-primary uppercase font-bold tracking-wider">
<span>Bay A • High Velocity Air Express (Racks A1 - A6)</span>
<span className="text-on-surface-variant font-body-sm">420 Capacity • 92% Density</span>
</div>
<div className="grid grid-cols-6 sm:grid-cols-12 md:grid-cols-18 lg:grid-cols-24 gap-1.5 py-1">

<button className="bin-node w-full aspect-square rounded bg-emerald-escrow/90 hover:ring-2 hover:ring-white transition-all" data-age="2h" data-bin="Rack A1-01" data-dest="Kololo" data-sku="#SC-98311" data-status="Fresh"></button>
<button className="bin-node w-full aspect-square rounded bg-emerald-escrow/90 hover:ring-2 hover:ring-white transition-all" data-age="4h" data-bin="Rack A1-02" data-dest="Nakasero" data-sku="#SC-98312" data-status="Fresh"></button>
<button className="bin-node w-full aspect-square rounded bg-mtn-yellow hover:ring-2 hover:ring-white transition-all" data-age="14h" data-bin="Rack A1-03" data-dest="Bugolobi" data-sku="#SC-98104" data-status="Warning"></button>
<button className="bin-node w-full aspect-square rounded bg-emerald-escrow/90 hover:ring-2 hover:ring-white transition-all" data-age="3h" data-bin="Rack A1-04" data-dest="Muyenga" data-sku="#SC-98322" data-status="Fresh"></button>
<button className="bin-node w-full aspect-square rounded bg-surface-container-highest hover:ring-2 hover:ring-white transition-all" data-age="0h" data-bin="Rack A1-05" data-dest="N/A" data-sku="Empty" data-status="Vacant"></button>
<button className="bin-node w-full aspect-square rounded bg-emerald-escrow/90 hover:ring-2 hover:ring-white transition-all" data-age="5h" data-bin="Rack A1-06" data-dest="Ntinda" data-sku="#SC-98340" data-status="Fresh"></button>
<button className="bin-node w-full aspect-square rounded bg-action-gradient-start hover:ring-2 hover:ring-white transition-all" data-age="29h" data-bin="Rack A2-01" data-dest="Kisaasi" data-sku="#SC-97992" data-status="Warning 24h+"></button>
<button className="bin-node w-full aspect-square rounded bg-emerald-escrow/90 hover:ring-2 hover:ring-white transition-all" data-age="1h" data-bin="Rack A2-02" data-dest="Kamwokya" data-sku="#SC-98381" data-status="Fresh"></button>
<button className="bin-node w-full aspect-square rounded bg-surface-container-highest hover:ring-2 hover:ring-white transition-all" data-age="0h" data-bin="Rack A2-03" data-dest="N/A" data-sku="Empty" data-status="Vacant"></button>
<button className="bin-node w-full aspect-square rounded bg-mtn-yellow hover:ring-2 hover:ring-white transition-all" data-age="18h" data-bin="Rack A2-04" data-dest="Bukoto" data-sku="#SC-98055" data-status="Warning"></button>
<button className="bin-node w-full aspect-square rounded bg-emerald-escrow/90 hover:ring-2 hover:ring-white transition-all" data-age="2h" data-bin="Rack A2-05" data-dest="Naguru" data-sku="#SC-98399" data-status="Fresh"></button>

<button className="bin-node w-full aspect-square rounded bg-emerald-escrow ring-2 ring-primary ring-offset-2 ring-offset-surface-dark scale-110 shadow-lg transition-all" data-age="3h" data-bin="Rack A2-14" data-dest="Station Pickup Desk" data-sku="#SC-98241" data-status="Fresh" data-time="Arrived 3h ago • Scheduled 14:00 Dispatch"></button>
<button className="bin-node w-full aspect-square rounded bg-emerald-escrow/90 hover:ring-2 hover:ring-white transition-all" data-age="1h" data-bin="Rack A3-01" data-dest="Mbuya" data-sku="#SC-98402" data-status="Fresh"></button>
<button className="bin-node w-full aspect-square rounded bg-danger-penalty animate-pulse hover:ring-2 hover:ring-white transition-all" data-age="49h" data-bin="Rack A3-09" data-dest="Doorstep Boda" data-sku="#SC-97712" data-status="Critical Alert" data-time="Wrong Address Protocol Active"></button>
<button className="bin-node w-full aspect-square rounded bg-emerald-escrow/90 hover:ring-2 hover:ring-white transition-all" data-age="4h" data-bin="Rack A3-10" data-dest="Luzira" data-sku="#SC-98410" data-status="Fresh"></button>
<button className="bin-node w-full aspect-square rounded bg-emerald-escrow/90 hover:ring-2 hover:ring-white transition-all" data-age="5h" data-bin="Rack A3-11" data-dest="Mutungo" data-sku="#SC-98411" data-status="Fresh"></button>
<button className="bin-node w-full aspect-square rounded bg-surface-container-highest hover:ring-2 hover:ring-white transition-all" data-age="0h" data-bin="Rack A4-01" data-dest="N/A" data-sku="Empty" data-status="Vacant"></button>
<button className="bin-node w-full aspect-square rounded bg-mtn-yellow hover:ring-2 hover:ring-white transition-all" data-age="16h" data-bin="Rack A4-02" data-dest="Kansanga" data-sku="#SC-98120" data-status="Warning"></button>
<button className="bin-node w-full aspect-square rounded bg-emerald-escrow/90 hover:ring-2 hover:ring-white transition-all" data-age="2h" data-bin="Rack A4-03" data-dest="Ggaba" data-sku="#SC-98418" data-status="Fresh"></button>
<button className="bin-node w-full aspect-square rounded bg-action-gradient-start hover:ring-2 hover:ring-white transition-all" data-age="34h" data-bin="Rack A5-01" data-dest="Kabalagala" data-sku="#SC-97940" data-status="Warning 24h+"></button>
<button className="bin-node w-full aspect-square rounded bg-emerald-escrow/90 hover:ring-2 hover:ring-white transition-all" data-age="6h" data-bin="Rack A5-02" data-dest="Nsambya" data-sku="#SC-98425" data-status="Fresh"></button>
<button className="bin-node w-full aspect-square rounded bg-emerald-escrow/90 hover:ring-2 hover:ring-white transition-all" data-age="1h" data-bin="Rack A6-01" data-dest="Makindye" data-sku="#SC-98429" data-status="Fresh"></button>
<button className="bin-node w-full aspect-square rounded bg-emerald-escrow/90 hover:ring-2 hover:ring-white transition-all" data-age="3h" data-bin="Rack A6-02" data-dest="Kibuye" data-sku="#SC-98433" data-status="Fresh"></button>
<button className="bin-node w-full aspect-square rounded bg-surface-container-highest hover:ring-2 hover:ring-white transition-all" data-age="0h" data-bin="Rack A6-03" data-dest="N/A" data-sku="Empty" data-status="Vacant"></button>
</div>
</div>

<div className="flex flex-col gap-1.5 bg-surface-container p-space-md rounded-lg" data-zone-group="B">
<div className="flex items-center justify-between text-label-sm text-secondary uppercase font-bold tracking-wider">
<span>Bay B • Standard Retail E-Commerce (Racks B1 - B10)</span>
<span className="text-on-surface-variant font-body-sm">600 Capacity • 81% Density</span>
</div>
<div className="grid grid-cols-6 sm:grid-cols-12 md:grid-cols-18 lg:grid-cols-24 gap-1.5 py-1">
<button className="bin-node w-full aspect-square rounded bg-emerald-escrow/90 hover:ring-2 hover:ring-white transition-all" data-age="8h" data-bin="Rack B1-01" data-dest="Wandegeya" data-sku="#SC-98200" data-status="Fresh"></button>
<button className="bin-node w-full aspect-square rounded bg-mtn-yellow hover:ring-2 hover:ring-white transition-all" data-age="21h" data-bin="Rack B1-02" data-dest="Makerere" data-sku="#SC-98001" data-status="Warning"></button>
<button className="bin-node w-full aspect-square rounded bg-surface-container-highest hover:ring-2 hover:ring-white transition-all" data-age="0h" data-bin="Rack B1-03" data-dest="N/A" data-sku="Empty" data-status="Vacant"></button>
<button className="bin-node w-full aspect-square rounded bg-emerald-escrow/90 hover:ring-2 hover:ring-white transition-all" data-age="9h" data-bin="Rack B2-01" data-dest="Mulago" data-sku="#SC-98205" data-status="Fresh"></button>
<button className="bin-node w-full aspect-square rounded bg-action-gradient-start hover:ring-2 hover:ring-white transition-all" data-age="38h" data-bin="Rack B3-01" data-dest="Kalerwe" data-sku="#SC-97880" data-status="Warning 24h+"></button>
<button className="bin-node w-full aspect-square rounded bg-emerald-escrow/90 hover:ring-2 hover:ring-white transition-all" data-age="7h" data-bin="Rack B3-02" data-dest="Bwaise" data-sku="#SC-98219" data-status="Fresh"></button>
<button className="bin-node w-full aspect-square rounded bg-surface-container-highest hover:ring-2 hover:ring-white transition-all" data-age="0h" data-bin="Rack B4-01" data-dest="N/A" data-sku="Empty" data-status="Vacant"></button>

<button className="bin-node w-full aspect-square rounded bg-danger-penalty animate-pulse ring-1 ring-white hover:ring-2 hover:ring-white transition-all" data-age="52h" data-bin="Rack B4-12" data-dest="Station Pickup Desk" data-sku="#SC-97640" data-status="Red Overdue" data-time="Recipient unreachable on 3 attempts"></button>
<button className="bin-node w-full aspect-square rounded bg-emerald-escrow/90 hover:ring-2 hover:ring-white transition-all" data-age="5h" data-bin="Rack B5-01" data-dest="Kawempe" data-sku="#SC-98224" data-status="Fresh"></button>
<button className="bin-node w-full aspect-square rounded bg-mtn-yellow hover:ring-2 hover:ring-white transition-all" data-age="17h" data-bin="Rack B6-01" data-dest="Kanyanya" data-sku="#SC-98114" data-status="Warning"></button>
<button className="bin-node w-full aspect-square rounded bg-emerald-escrow/90 hover:ring-2 hover:ring-white transition-all" data-age="4h" data-bin="Rack B7-01" data-dest="Komamboga" data-sku="#SC-98230" data-status="Fresh"></button>
<button className="bin-node w-full aspect-square rounded bg-emerald-escrow/90 hover:ring-2 hover:ring-white transition-all" data-age="6h" data-bin="Rack B7-02" data-dest="Mpererwe" data-sku="#SC-98232" data-status="Fresh"></button>
<button className="bin-node w-full aspect-square rounded bg-surface-container-highest hover:ring-2 hover:ring-white transition-all" data-age="0h" data-bin="Rack B8-01" data-dest="N/A" data-sku="Empty" data-status="Vacant"></button>
<button className="bin-node w-full aspect-square rounded bg-action-gradient-start hover:ring-2 hover:ring-white transition-all" data-age="41h" data-bin="Rack B8-02" data-dest="Kitezi" data-sku="#SC-97810" data-status="Warning 24h+"></button>
<button className="bin-node w-full aspect-square rounded bg-emerald-escrow/90 hover:ring-2 hover:ring-white transition-all" data-age="3h" data-bin="Rack B9-01" data-dest="Namuwongo" data-sku="#SC-98244" data-status="Fresh"></button>
<button className="bin-node w-full aspect-square rounded bg-surface-container-highest hover:ring-2 hover:ring-white transition-all" data-age="0h" data-bin="Rack B9-02" data-dest="N/A" data-sku="Empty" data-status="Vacant"></button>
<button className="bin-node w-full aspect-square rounded bg-mtn-yellow hover:ring-2 hover:ring-white transition-all" data-age="19h" data-bin="Rack B10-01" data-dest="Kisugu" data-sku="#SC-98110" data-status="Warning"></button>
<button className="bin-node w-full aspect-square rounded bg-emerald-escrow/90 hover:ring-2 hover:ring-white transition-all" data-age="2h" data-bin="Rack B10-02" data-dest="Wabigalo" data-sku="#SC-98255" data-status="Fresh"></button>
<button className="bin-node w-full aspect-square rounded bg-emerald-escrow/90 hover:ring-2 hover:ring-white transition-all" data-age="5h" data-bin="Rack B10-03" data-dest="Nsambya Gogonya" data-sku="#SC-98258" data-status="Fresh"></button>
<button className="bin-node w-full aspect-square rounded bg-surface-container-highest hover:ring-2 hover:ring-white transition-all" data-age="0h" data-bin="Rack B10-04" data-dest="N/A" data-sku="Empty" data-status="Vacant"></button>
<button className="bin-node w-full aspect-square rounded bg-emerald-escrow/90 hover:ring-2 hover:ring-white transition-all" data-age="1h" data-bin="Rack B10-05" data-dest="Kibuli" data-sku="#SC-98260" data-status="Fresh"></button>
<button className="bin-node w-full aspect-square rounded bg-emerald-escrow/90 hover:ring-2 hover:ring-white transition-all" data-age="2h" data-bin="Rack B10-06" data-dest="Old Kampala" data-sku="#SC-98262" data-status="Fresh"></button>
<button className="bin-node w-full aspect-square rounded bg-emerald-escrow/90 hover:ring-2 hover:ring-white transition-all" data-age="3h" data-bin="Rack B10-07" data-dest="Namirembe" data-sku="#SC-98263" data-status="Fresh"></button>
<button className="bin-node w-full aspect-square rounded bg-surface-container-highest hover:ring-2 hover:ring-white transition-all" data-age="0h" data-bin="Rack B10-08" data-dest="N/A" data-sku="Empty" data-status="Vacant"></button>
</div>
</div>

<div className="flex flex-col gap-1.5 bg-surface-container p-space-md rounded-lg" data-zone-group="C">
<div className="flex items-center justify-between text-label-sm text-tertiary uppercase font-bold tracking-wider">
<span>Bay C • Oversized &amp; Pallet Freight (Racks C1 - C4)</span>
<span className="text-on-surface-variant font-body-sm">180 Capacity • 64% Density</span>
</div>
<div className="grid grid-cols-6 sm:grid-cols-12 md:grid-cols-18 lg:grid-cols-24 gap-1.5 py-1">
<button className="bin-node w-full aspect-square rounded bg-emerald-escrow/90 hover:ring-2 hover:ring-white transition-all" data-age="10h" data-bin="Rack C1-01" data-dest="Rubaga" data-sku="#SC-98188" data-status="Fresh"></button>

<button className="bin-node w-full aspect-square rounded bg-danger-penalty ring-2 ring-danger-penalty ring-offset-1 ring-offset-surface-dark animate-pulse hover:ring-2 hover:ring-white transition-all" data-age="74h" data-bin="Rack C1-02" data-dest="Doorstep Boda" data-sku="#SC-97108" data-status="Critical RTO" data-time="Cancellation Confirmed by Seller"></button>
<button className="bin-node w-full aspect-square rounded bg-surface-container-highest hover:ring-2 hover:ring-white transition-all" data-age="0h" data-bin="Rack C1-03" data-dest="N/A" data-sku="Empty" data-status="Vacant"></button>
<button className="bin-node w-full aspect-square rounded bg-mtn-yellow hover:ring-2 hover:ring-white transition-all" data-age="22h" data-bin="Rack C2-01" data-dest="Mengo" data-sku="#SC-98089" data-status="Warning"></button>
<button className="bin-node w-full aspect-square rounded bg-emerald-escrow/90 hover:ring-2 hover:ring-white transition-all" data-age="7h" data-bin="Rack C2-02" data-dest="Nateete" data-sku="#SC-98288" data-status="Fresh"></button>
<button className="bin-node w-full aspect-square rounded bg-surface-container-highest hover:ring-2 hover:ring-white transition-all" data-age="0h" data-bin="Rack C3-01" data-dest="N/A" data-sku="Empty" data-status="Vacant"></button>
<button className="bin-node w-full aspect-square rounded bg-action-gradient-start hover:ring-2 hover:ring-white transition-all" data-age="36h" data-bin="Rack C3-02" data-dest="Busega" data-sku="#SC-97914" data-status="Warning 24h+"></button>
<button className="bin-node w-full aspect-square rounded bg-emerald-escrow/90 hover:ring-2 hover:ring-white transition-all" data-age="4h" data-bin="Rack C4-01" data-dest="Lungujja" data-sku="#SC-98299" data-status="Fresh"></button>
<button className="bin-node w-full aspect-square rounded bg-surface-container-highest hover:ring-2 hover:ring-white transition-all" data-age="0h" data-bin="Rack C4-02" data-dest="N/A" data-sku="Empty" data-status="Vacant"></button>
<button className="bin-node w-full aspect-square rounded bg-emerald-escrow/90 hover:ring-2 hover:ring-white transition-all" data-age="6h" data-bin="Rack C4-03" data-dest="Mutundwe" data-sku="#SC-98305" data-status="Fresh"></button>
<button className="bin-node w-full aspect-square rounded bg-emerald-escrow/90 hover:ring-2 hover:ring-white transition-all" data-age="3h" data-bin="Rack C4-04" data-dest="Kasubi" data-sku="#SC-98319" data-status="Fresh"></button>
<button className="bin-node w-full aspect-square rounded bg-surface-container-highest hover:ring-2 hover:ring-white transition-all" data-age="0h" data-bin="Rack C4-05" data-dest="N/A" data-sku="Empty" data-status="Vacant"></button>
</div>
</div>
</div>
</div>

<div className="xl:col-span-4 p-space-lg rounded-xl bg-surface-container-low flex flex-col gap-space-md shadow-md">
<div className="flex items-center justify-between pb-space-sm">
<div className="flex items-center gap-space-xs">
<Icon name="filter_center_focus" className="text-primary text-[20px]" />
<span className="font-headline-sm text-headline-sm text-on-surface">Bin Cell Inspector</span>
</div>
<span className="px-space-xs py-1 rounded bg-primary-container text-on-primary-container font-code-display text-label-md" id="inspectSlotPill">
            Rack A2-14
          </span>
</div>

<div className="flex flex-col gap-space-md" id="inspectorContent">

<div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-on-surface-variant uppercase">Tracking Number</span>
<span className="font-label-sm px-2 py-0.5 rounded bg-emerald-escrow/15 text-emerald-escrow flex items-center gap-1 font-bold">
<Icon name="verified_user" className="text-[14px]" /> holds active
              </span>
</div>
<div className="flex items-baseline justify-between">
<span className="font-code-display text-price-display text-primary tracking-wider" id="inspectSku">#SC-98241</span>
<span className="font-label-sm text-tertiary">Fresh Storage (&lt;12h)</span>
</div>
<div className="flex items-center justify-between text-body-sm text-on-surface-variant">
<span>Item Category:</span>
<span className="text-on-surface font-label-md">Electronics • Smartphone</span>
</div>
<div className="flex items-center justify-between text-body-sm text-on-surface-variant">
<span>Declared Ledger Value:</span>
<span className="text-on-surface font-label-md text-emerald-escrow whitespace-nowrap">UGX 640,000</span>
</div>
</div>

<div className="grid grid-cols-2 gap-space-sm">
<div className="p-space-sm rounded-lg bg-surface-container flex flex-col">
<span className="font-label-sm text-on-surface-variant">Check-In Time</span>
<span className="font-label-md text-on-surface mt-1">11:38 AM EAT</span>
<span className="font-body-sm text-tertiary">3h in holding</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container flex flex-col">
<span className="font-label-sm text-on-surface-variant">Discharge SLA</span>
<span className="font-label-md text-on-surface mt-1">14:00 EAT Run</span>
<span className="font-body-sm text-primary">Next Route Wave</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-space-xs">
<span className="font-label-sm uppercase tracking-wider text-on-surface-variant">Buyer Lockup • Station Pickup</span>
<div className="flex items-center justify-between mt-1">
<span className="font-label-md text-on-surface font-bold">Grace Nakato</span>
<span className="font-code-display text-body-sm text-secondary tracking-widest">07•• ••• 582</span>
</div>
<div className="flex items-center gap-space-xs text-body-sm text-on-surface-variant mt-1">
<Icon name="pin_drop" className="text-[16px] text-tertiary" />
<span>William St Hub Desk #02 Pick Slot</span>
</div>
</div>

<div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container text-body-sm">
<div className="flex items-center gap-2 text-on-surface-variant">
<Icon name="straighten" className="text-[18px]" />
<span>24 × 16 × 8 cm • 0.65 kg</span>
</div>
<span className="font-label-sm text-tertiary font-bold">Barcode Scanned OK</span>
</div>

<div className="flex flex-col gap-space-xs pt-space-xs">
<button className="w-full h-11 rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-white font-label-md shadow-sm hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-space-xs">
<Icon name="qr_code_scanner" className="text-[18px]" />
<span>Re-Scan Package Barcode</span>
</button>
<button className="w-full h-11 rounded-xl bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-md transition-all flex items-center justify-center gap-space-xs">
<Icon name="open_in_new" className="text-[18px]" />
<span>Relocate to Different Bin</span>
</button>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-space-md p-space-lg rounded-xl bg-surface-container-low shadow-md">

<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-space-xs">
<Icon name="warning" className="text-amber-warning text-[22px]" />
<span className="font-headline-sm text-headline-sm text-on-surface">Aging Exceptions &amp; Resolution Hub</span>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant">Real-time isolation of stalled inventory exceeding operational thresholds. Payment safeguards apply.</p>
</div>

<div className="flex flex-wrap items-center gap-1.5 p-1 bg-surface-container rounded-xl">
<button className="bracket-tab px-space-md py-1.5 rounded-lg font-label-sm text-on-surface-variant hover:text-on-surface transition-all" data-bracket="fresh">
            &lt; 24 Hours <span className="ml-1 opacity-70">(890)</span>
</button>
<button className="bracket-tab px-space-md py-1.5 rounded-lg font-label-sm text-on-surface-variant hover:text-on-surface transition-all" data-bracket="warning">
            24 - 48 Hours <span className="ml-1 opacity-70">(266)</span>
</button>
<button className="bracket-tab active px-space-md py-1.5 rounded-lg font-label-sm bg-primary-container text-on-primary-container transition-all flex items-center gap-1 font-bold" data-bracket="alert">
<span className="w-1.5 h-1.5 rounded-full bg-amber-warning animate-ping"></span>
            &gt; 48 Hours <span className="ml-1">(14 - Alert)</span>
</button>
<button className="bracket-tab px-space-md py-1.5 rounded-lg font-label-sm text-danger-penalty hover:bg-surface-container-high transition-all font-bold" data-bracket="rto">
            &gt; 72 Hours <span className="ml-1">(6 - Return to Seller)</span>
</button>
</div>
</div>

<div className="overflow-x-auto rounded-xl bg-surface-container">
<table className="w-full text-left border-collapse min-w-[1000px]">
<thead>
<tr className="bg-surface-container-high text-on-surface-variant font-label-sm uppercase tracking-wider">
<th className="py-space-md px-space-md">Bin Location</th>
<th className="py-space-md px-space-md">Tracking ID</th>
<th className="py-space-md px-space-md">Recipient (Masked)</th>
<th className="py-space-md px-space-md">Mode</th>
<th className="py-space-md px-space-md">Time In Hub</th>
<th className="py-space-md px-space-md">Aging Status</th>
<th className="py-space-md px-space-md">SLA Health / Blocker</th>
<th className="py-space-md px-space-md text-right">Action Trigger</th>
</tr>
</thead>
<tbody className="divide-y-0 text-body-md font-body-md text-on-surface">

<tr className="hover:bg-surface-bright/40 transition-colors bg-surface-container">
<td className="py-space-md px-space-md font-code-display font-bold text-primary">
                Rack B4-12
              </td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-code-display text-on-surface font-bold">#SC-97640</span>
<span className="font-label-sm text-emerald-escrow flex items-center gap-0.5">
<Icon name="verified_user" className="text-[12px]" /> UGX 185,000
                  </span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-on-surface font-bold">Ronald Katende</span>
<span className="font-body-sm text-secondary font-code-display">+256 701 ••• 419</span>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-sm">
<Icon name="storefront" className="text-[14px]" /> Station Pickup
                </span>
</td>
<td className="py-space-md px-space-md font-headline-sm text-danger-penalty font-bold">
                52 hrs
              </td>
<td className="py-space-md px-space-md">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-danger-penalty/15 text-danger-penalty font-label-sm font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-danger-penalty"></span> Overdue Warning
                </span>
</td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-1.5 text-body-sm text-on-surface-variant">
<Icon name="phone_missed" className="text-amber-warning text-[18px]" />
<span>Customer Not Answering (3 Calls)</span>
</div>
</td>
<td className="py-space-md px-space-md text-right">
<div className="flex items-center justify-end gap-space-xs">
<button className="px-space-sm h-9 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-sm transition-all flex items-center gap-1">
<Icon name="sms" className="text-[16px] text-primary" />
<span>SMS Alert</span>
</button>
<button className="px-space-sm h-9 rounded-lg bg-primary-container text-on-primary-container font-label-sm transition-all flex items-center gap-1 shadow-sm hover:brightness-110">
<Icon name="support_agent" className="text-[16px]" />
<span>Escalate Support</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-bright/40 transition-colors bg-surface-container-low/60">
<td className="py-space-md px-space-md font-code-display font-bold text-primary">
                Rack A3-09
              </td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-code-display text-on-surface font-bold">#SC-97712</span>
<span className="font-label-sm text-emerald-escrow flex items-center gap-0.5">
<Icon name="verified_user" className="text-[12px]" /> UGX 420,000
                  </span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-on-surface font-bold">Brenda Achieng</span>
<span className="font-body-sm text-secondary font-code-display">+256 772 ••• 881</span>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-sm">
<Icon name="two_wheeler" className="text-[14px]" /> Doorstep Boda
                </span>
</td>
<td className="py-space-md px-space-md font-headline-sm text-danger-penalty font-bold">
                49 hrs
              </td>
<td className="py-space-md px-space-md">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-danger-penalty/15 text-danger-penalty font-label-sm font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-danger-penalty"></span> Overdue Red
                </span>
</td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-1.5 text-body-sm text-on-surface-variant">
<Icon name="wrong_location" className="text-danger-penalty text-[18px]" />
<span>Wrong Address Provided</span>
</div>
</td>
<td className="py-space-md px-space-md text-right">
<div className="flex items-center justify-end gap-space-xs">
<button className="px-space-sm h-9 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-sm transition-all flex items-center gap-1">
<Icon name="call" className="text-[16px] text-tertiary" />
<span>Call Masked</span>
</button>
<button className="px-space-sm h-9 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-sm transition-all flex items-center gap-1">
<Icon name="edit_location" className="text-[16px]" />
<span>Update Address</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-bright/40 transition-colors bg-danger-penalty/5">
<td className="py-space-md px-space-md font-code-display font-bold text-danger-penalty">
                Rack C1-02
              </td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-code-display text-on-surface font-bold">#SC-97108</span>
<span className="font-label-sm text-emerald-escrow flex items-center gap-0.5">
<Icon name="verified_user" className="text-[12px]" /> UGX 1,200,000
                  </span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-on-surface font-bold">Kato Emmanuel</span>
<span className="font-body-sm text-secondary font-code-display">+256 754 ••• 203</span>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-sm">
<Icon name="two_wheeler" className="text-[14px]" /> Doorstep Boda
                </span>
</td>
<td className="py-space-md px-space-md font-headline-sm text-danger-penalty font-bold">
                74 hrs
              </td>
<td className="py-space-md px-space-md">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-danger-penalty text-white font-label-sm font-bold">
<Icon name="assignment_return" className="text-[14px]" /> Critical RTO
                </span>
</td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-1.5 text-body-sm text-danger-penalty font-medium">
<Icon name="cancel" className="text-[18px]" />
<span>Customer Cancelled • Reversal Approved</span>
</div>
</td>
<td className="py-space-md px-space-md text-right">
<div className="flex items-center justify-end">
<button className="px-space-md h-9 rounded-lg bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-white font-label-sm transition-all flex items-center gap-1 shadow-[0_2px_12px_rgba(218,55,0,0.3)] hover:brightness-110 active:scale-95">
<Icon name="move_to_inbox" className="text-[16px]" />
<span>Initiate Return to Seller</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-bright/40 transition-colors bg-surface-container">
<td className="py-space-md px-space-md font-code-display font-bold text-primary">
                Rack B8-02
              </td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-code-display text-on-surface font-bold">#SC-97810</span>
<span className="font-label-sm text-emerald-escrow flex items-center gap-0.5">
<Icon name="verified_user" className="text-[12px]" /> UGX 95,000
                  </span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-on-surface font-bold">Sarah Nabirye</span>
<span className="font-body-sm text-secondary font-code-display">+256 788 ••• 190</span>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-sm">
<Icon name="storefront" className="text-[14px]" /> Station Pickup
                </span>
</td>
<td className="py-space-md px-space-md font-headline-sm text-amber-warning font-bold">
                41 hrs
              </td>
<td className="py-space-md px-space-md">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-warning/15 text-amber-warning font-label-sm font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-amber-warning"></span> Warning 48h SLA
                </span>
</td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-1.5 text-body-sm text-on-surface-variant">
<Icon name="schedule" className="text-amber-warning text-[18px]" />
<span>Pickup Window Expiring Today 18:00</span>
</div>
</td>
<td className="py-space-md px-space-md text-right">
<div className="flex items-center justify-end gap-space-xs">
<button className="px-space-sm h-9 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-sm transition-all flex items-center gap-1">
<Icon name="sms" className="text-[16px] text-primary" />
<span>Send SMS Reminder</span>
</button>
<button className="px-space-sm h-9 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-sm transition-all flex items-center gap-1">
<Icon name="flag" className="text-[16px]" />
<span>Flag Slot</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-space-md pt-space-sm bg-surface-container-low">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-full bg-emerald-escrow/10 flex items-center justify-center text-emerald-escrow">
<Icon name="verified" className="text-[18px]" />
</div>
<div className="flex flex-col">
<span className="font-label-md text-on-surface">Payment Integrity Governance</span>
<span className="font-body-sm text-on-surface-variant">All 14 aging parcels have locked ledger funds. No seller disbursement released pending delivery or RTO scan.</span>
</div>
</div>
<div className="flex items-center gap-space-sm justify-end">
<button className="px-space-md h-11 rounded-xl bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-md transition-all flex items-center gap-space-xs" id="batchSmsBottom">
<Icon name="textsms" className="text-[18px] text-primary" />
<span>Send Bulk SMS to Aging Pickups</span>
</button>
<button className="px-space-lg h-11 rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-white font-label-md shadow-[0_4px_18px_rgba(218,55,0,0.35)] hover:brightness-110 active:scale-95 transition-all flex items-center gap-space-xs" id="batchRtoBottom">
<Icon name="move_item" className="text-[18px]" />
<span>Transfer 6 Expired Packages to RTO Bay</span>
</button>
</div>
</div>
</div>
</div>
</div>
</main></div>
    </div>
  );
};

export default Desktop;
