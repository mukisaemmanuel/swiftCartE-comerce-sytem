// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/hub/more_swiftcart_hub_agent/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface MoreSwiftcartHubAgentProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const MoreSwiftcartHubAgent: React.FC<MoreSwiftcartHubAgentProps> = (props) => {
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
      
      <header className="fixed top-0 inset-x-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.06)] pt-safe"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-sm min-w-0 flex-1"><img alt="SwiftCart" className="h-8 w-auto object-contain flex-shrink-0" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col min-w-0"><div className="flex items-center gap-1.5"><span className="font-label-md text-label-md text-on-surface font-bold truncate">William St Hub</span><span className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm flex-shrink-0"><span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>Online</span></div><span className="font-label-sm text-label-sm text-secondary truncate">Kampala Central • More</span></div></div><div className="flex items-center gap-space-xs flex-shrink-0"><button aria-label="Notifications" className="w-11 h-11 flex items-center justify-center relative rounded-full hover:bg-surface-container text-on-surface-variant"><Icon name="notifications" className="text-[22px]" /><span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary-container ring-2 ring-surface"></span></button><button aria-label="Toggle Theme" className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-surface-container text-on-surface-variant" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-[20px]" /></button><div className="flex items-center gap-1.5 pl-1"><div className="flex flex-col text-right hidden xs:flex"><span className="font-label-sm text-label-sm text-on-surface font-bold leading-tight">Kato I.</span><span className="font-label-sm text-label-sm text-secondary font-mono leading-tight">#HUB-402</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></div></header>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-28 bg-surface"><div className="flex flex-col w-full px-margin space-y-space-md">

<div className="relative overflow-hidden rounded-xl bg-surface-container-high p-space-md shadow-sm">

<div className="absolute -right-12 -top-12 w-36 h-36 bg-primary-container/10 rounded-full blur-2xl pointer-events-none"></div>
<div className="flex items-start justify-between gap-space-sm relative z-10">
<div className="flex gap-space-sm items-center min-w-0">
<div className="relative flex-shrink-0">
<img className="w-12 h-12 rounded-xl object-cover shadow-sm" data-alt="Portrait photo of a professional African male operations lead Isaac Kato in a modern dark uniform with subtle vibrant orange lanyard, confident warm expression, high operational fidelity retail warehouse background in soft focus" src="/images/71bf43fc2602a7f3.webp" />
<span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-tertiary-container flex items-center justify-center ring-2 ring-surface-container-high">
<Icon name="bolt" className="text-[10px] text-on-tertiary" />
</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5 flex-wrap">
<span className="font-headline-sm text-headline-sm text-on-surface truncate">Isaac Kato</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-secondary font-label-sm text-label-sm font-mono">#AG-402</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Senior Hub Operations Lead</span>
</div>
</div>
<button aria-label="Agent badge details" className="w-9 h-9 rounded-lg bg-surface-container hover:bg-surface-variant flex items-center justify-center text-on-surface-variant transition-colors flex-shrink-0">
<Icon name="badge" className="text-[20px]" />
</button>
</div>

<div className="mt-space-md pt-space-sm flex flex-col gap-2 relative z-10">
<div className="flex items-center justify-between text-label-sm font-label-sm text-secondary">
<span className="flex items-center gap-1.5 truncate">
<Icon name="warehouse" className="text-[15px] text-primary-container" />
          William St Central Hub (Station #04)
        </span>
<span className="text-on-surface-variant font-medium">Day Shift • 08:00 - 17:00</span>
</div>
<div className="flex items-center justify-between gap-2 p-2 rounded-lg bg-surface-container-lowest/80 backdrop-blur-sm">
<div className="flex items-center gap-2 min-w-0">
<span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold truncate">Kampala Rail: Stanbic &amp; MoMo Online</span>
</div>
<div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm font-bold flex-shrink-0">
<Icon name="check_circle" className="text-[14px]" />
<span>99.9% Latency</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-2">
<div className="bg-surface-container-low p-2.5 rounded-xl flex flex-col items-center justify-center text-center">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Dock Intake</span>
<span className="font-price-display text-price-display text-on-surface mt-0.5">84</span>
<span className="font-label-sm text-label-sm text-tertiary mt-0.5 font-bold">+12/hr</span>
</div>
<div className="bg-surface-container-low p-2.5 rounded-xl flex flex-col items-center justify-center text-center">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Outbound</span>
<span className="font-price-display text-price-display text-primary-container mt-0.5">18</span>
<span className="font-label-sm text-label-sm text-primary font-bold">3 ready</span>
</div>
<div className="bg-surface-container-low p-2.5 rounded-xl flex flex-col items-center justify-center text-center">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Bay Holds</span>
<span className="font-price-display text-price-display text-on-surface mt-0.5">14</span>
<span className="font-label-sm text-label-sm text-outline font-bold">RTO sweep</span>
</div>
</div>

<div className="flex flex-col space-y-1.5">
<div className="flex items-center justify-between px-1">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Outbound &amp; Dispatch Operations</span>
<span className="font-label-sm text-label-sm text-primary-container font-semibold">Priority 1</span>
</div>
<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col">

<a className="group p-space-md flex items-center justify-between gap-space-sm hover:bg-surface-container-low active:bg-surface-container transition-colors" href="#">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-lg bg-primary-container/10 text-primary-container flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
<Icon name="two_wheeler" className="text-[22px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Rider Dispatch &amp; Bag Handover</span>
<span className="px-2 py-0.5 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm font-bold flex-shrink-0">3 Bags Ready</span>
</div>
<span className="font-body-sm text-body-sm text-secondary truncate">18 parcels ready to leave • Assign boda riders, verify bag seals</span>
</div>
</div>
<Icon name="chevron_right" className="text-[20px] text-secondary group-hover:translate-x-0.5 transition-transform" />
</a>
<div className="h-[1px] bg-surface-container/60 mx-4"></div>

<a className="group p-space-md flex items-center justify-between gap-space-sm hover:bg-surface-container-low active:bg-surface-container transition-colors" href="#">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-lg bg-surface-container text-on-surface flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
<Icon name="local_shipping" className="text-[22px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Line-Haul Transit Manifest</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed-variant font-label-sm text-label-sm font-bold flex-shrink-0">Dock Bay 2</span>
</div>
<span className="font-body-sm text-body-sm text-secondary truncate">Inter-hub cargo transfer (Jinja, Mbarara, Gulu) • Create &amp; seal manifest</span>
</div>
</div>
<Icon name="chevron_right" className="text-[20px] text-secondary group-hover:translate-x-0.5 transition-transform" />
</a>
<div className="h-[1px] bg-surface-container/60 mx-4"></div>

<a className="group p-space-md flex items-center justify-between gap-space-sm hover:bg-surface-container-low active:bg-surface-container transition-colors" href="#">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-lg bg-error-container/40 text-error flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
<Icon name="assignment_return" className="text-[22px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Returns &amp; RTO Management</span>
<span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold flex-shrink-0">14 Pending</span>
</div>
<span className="font-body-sm text-body-sm text-secondary truncate">Damaged items, customer rejections • Intake &amp; return to seller</span>
</div>
</div>
<Icon name="chevron_right" className="text-[20px] text-secondary group-hover:translate-x-0.5 transition-transform" />
</a>
</div>
</div>

<div className="flex flex-col space-y-1.5">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold px-1">Station Audit &amp; Inventory</span>
<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col">

<a className="group p-space-md flex items-center justify-between gap-space-sm hover:bg-surface-container-low active:bg-surface-container transition-colors" href="#">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-lg bg-surface-container text-on-surface flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
<Icon name="shelves" className="text-[22px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Bin &amp; Shelf Location Audit</span>
<span className="font-body-sm text-body-sm text-secondary truncate">Physical barcode sweep of shelves A through D</span>
</div>
</div>
<Icon name="chevron_right" className="text-[20px] text-secondary group-hover:translate-x-0.5 transition-transform" />
</a>
<div className="h-[1px] bg-surface-container/60 mx-4"></div>

<a className="group p-space-md flex items-center justify-between gap-space-sm hover:bg-surface-container-low active:bg-surface-container transition-colors" href="#">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-lg bg-surface-container text-on-surface flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
<Icon name="history_edu" className="text-[22px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Delivery &amp; Handover History</span>
<span className="font-body-sm text-body-sm text-secondary truncate">Searchable log of all 248 handovers this week</span>
</div>
</div>
<Icon name="chevron_right" className="text-[20px] text-secondary group-hover:translate-x-0.5 transition-transform" />
</a>
<div className="h-[1px] bg-surface-container/60 mx-4"></div>

<a className="group p-space-md flex items-center justify-between gap-space-sm hover:bg-surface-container-low active:bg-surface-container transition-colors" href="#">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-lg bg-tertiary-container/10 text-tertiary flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
<Icon name="print" className="text-[22px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Hardware Peripherals</span>
<span className="w-1.5 h-1.5 rounded-full bg-tertiary-container"></span>
</div>
<span className="font-body-sm text-body-sm text-secondary truncate">Bluetooth scanner #SC-SCAN-02 Connected • Battery 88%</span>
</div>
</div>
<div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm font-semibold">
<Icon name="battery_5_bar" className="text-[16px]" />
<span>88%</span>
</div>
</a>
</div>
</div>

<div className="flex flex-col space-y-1.5">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold px-1">Agent Support &amp; Governance</span>
<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col">

<a className="group p-space-md flex items-center justify-between gap-space-sm hover:bg-surface-container-low active:bg-surface-container transition-colors" href="#">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-lg bg-surface-container text-on-surface flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
<Icon name="policy" className="text-[22px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Hub SOP &amp; Compliance Guidelines</span>
<span className="font-body-sm text-body-sm text-secondary truncate">Bank of Uganda NPS §44 &amp; UNBS tamper seal protocols</span>
</div>
</div>
<Icon name="chevron_right" className="text-[20px] text-secondary group-hover:translate-x-0.5 transition-transform" />
</a>
<div className="h-[1px] bg-surface-container/60 mx-4"></div>

<a className="group p-space-md flex items-center justify-between gap-space-sm hover:bg-surface-container-low active:bg-surface-container transition-colors" href="#">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-lg bg-surface-container text-on-surface flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
<Icon name="support_agent" className="text-[22px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Help Centre &amp; Dispatch Hotline</span>
<span className="font-body-sm text-body-sm text-secondary truncate">Call 0800 220 800 or WhatsApp Hub Dispatch Desk</span>
</div>
</div>
<Icon name="call" className="text-[20px] text-secondary group-hover:translate-x-0.5 transition-transform" />
</a>
<div className="h-[1px] bg-surface-container/60 mx-4"></div>

<div className="p-space-md flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-lg bg-surface-container text-on-surface flex items-center justify-center flex-shrink-0">
<Icon name="light_mode" className="text-[22px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Outdoor High-Glare Mode</span>
<span className="font-body-sm text-body-sm text-secondary truncate">Enhanced contrast for open loading bays</span>
</div>
</div>

<button aria-pressed="false" className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full bg-secondary-fixed-dim transition-colors duration-200 ease-in-out focus:outline-none" id="glare-toggle" type="button">
<span className="sr-only">Toggle high contrast</span>
<span className="translate-x-0.5 inline-block h-5 w-5 transform rounded-full bg-surface shadow ring-0 transition duration-200 ease-in-out mt-0.5" id="glare-toggle-circle"></span>
</button>
</div>
</div>
</div>

<div className="pt-space-sm flex flex-col space-y-space-sm">
<button className="w-full h-12 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-md shadow-primary-container/20 active:scale-[0.98] transition-transform" type="button">
<Icon name="assignment_turned_in" className="text-[20px]" />
<span>End Shift &amp; Handover Station Docket</span>
</button>
<button className="w-full h-11 rounded-xl bg-surface-container hover:bg-error-container/30 text-error font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 transition-colors active:scale-[0.98]" type="button">
<Icon name="logout" className="text-[18px]" />
<span>Sign Out of Hub Account</span>
</button>
</div>

<div className="py-space-sm text-center flex flex-col items-center space-y-1">
<div className="flex items-center gap-1.5 text-secondary">
<Icon name="terminal" className="text-[14px]" />
<span className="font-label-sm text-label-sm font-mono tracking-tight">SwiftCart Work Hub v2.4.1 (UG-PROD-STATION-04)</span>
</div>
<span className="font-label-sm text-label-sm text-secondary/70">Encrypted terminal handshake ID: 0x9AF2 • Kampala Node</span>
</div>
</div>
</main>
<nav className="fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface/95 backdrop-blur-xl shadow-[0_-4px_16px_rgba(0,0,0,0.06)]" data-active-classes="text-primary-container font-bold"><div className="flex justify-between items-center h-20 px-space-xs relative"><a className="flex-1 flex flex-col items-center justify-center h-full min-w-[48px] min-h-[48px] text-secondary hover:text-on-surface transition-colors" data-path="overview" href="#"><Icon name="dashboard" className="text-[24px]" /><span className="font-label-sm text-label-sm tracking-tight">Overview</span></a><a className="flex-1 flex flex-col items-center justify-center h-full min-w-[48px] min-h-[48px] text-secondary hover:text-on-surface transition-colors" data-path="intake" href="#"><Icon name="move_to_inbox" className="text-[24px]" /><span className="font-label-sm text-label-sm tracking-tight">Intake</span></a><div className="relative flex-1 flex flex-col items-center justify-center"><a className="absolute -top-6 w-14 h-14 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-lg shadow-primary-container/40 ring-4 ring-surface active:scale-95 transition-transform" data-path="scan" href="#"><Icon name="qr_code_scanner" className="text-[28px]" /></a><span className="font-label-sm text-label-sm text-secondary pt-8 tracking-tight">Scan</span></div><a className="flex-1 flex flex-col items-center justify-center h-full min-w-[48px] min-h-[48px] text-secondary hover:text-on-surface transition-colors" data-path="pickup" href="#"><Icon name="front_hand" className="text-[24px]" /><span className="font-label-sm text-label-sm tracking-tight">Pickup</span></a><a aria-current="page" className="flex-1 flex flex-col items-center justify-center h-full min-w-[48px] min-h-[48px] transition-colors text-primary-container font-bold" data-path="more" href="#"><Icon name="widgets" className="text-[24px]" /><span className="font-label-sm text-label-sm tracking-tight">More</span></a></div></nav>
    </div>
  );
};

export default MoreSwiftcartHubAgent;
