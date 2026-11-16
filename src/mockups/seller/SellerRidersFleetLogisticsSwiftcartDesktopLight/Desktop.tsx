// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/seller/seller_riders_fleet_logistics_swiftcart_desktop_light/code.html
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
      
      <div className="pl-0 flex flex-col min-h-screen"><main className="w-full pt-16 bg-surface min-h-[calc(100vh-4rem)]"><div className="flex flex-col w-full">

<div className="p-space-xl space-y-space-xl max-w-[1600px] mx-auto w-full">

<section className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
<div className="space-y-1">
<div className="flex items-center gap-space-sm flex-wrap">
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Riders &amp; Dedicated Courier Fleet</h1>
<span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            Kampala Metro
          </span>
<span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
<Icon name="cell_tower" className="text-[14px] text-tertiary" />
            SafeBoda API v2.4 Live
          </span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">Real-time telemetry, stage assignments, and boda courier dispatch for Nakasero Flagship Hub.</p>
</div>

<div className="flex items-center gap-space-sm shrink-0">
<button className="h-12 px-space-lg rounded-xl bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-lg text-label-lg flex items-center gap-space-xs transition-all shadow-[0_2px_8px_rgba(14,27,77,0.04)]" type="button">
<Icon name="summarize" className="text-[18px] text-on-surface-variant" />
<span>Courier Performance Report</span>
</button>
<button className="h-12 px-space-lg rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] hover:opacity-95 text-on-primary font-label-lg text-label-lg flex items-center gap-space-xs transition-all shadow-[0_4px_14px_rgba(218,55,0,0.30)] active:scale-95" type="button">
<Icon name="sms" className="text-[20px]" />
<span>+ Invite Courier via SMS Link</span>
</button>
</div>
</section>

<section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04),0_1px_2px_rgba(14,27,77,0.02)] flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all">
<div className="flex items-start justify-between">
<div>
<p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Store Couriers</p>
<p className="font-headline-lg text-headline-lg text-on-surface mt-1">8</p>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
<Icon name="badge" className="text-[22px]" />
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span>100% Vetted • Dedicated SoundCore roster</span>
</div>
</div>

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04),0_1px_2px_rgba(14,27,77,0.02)] flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all">
<div className="flex items-start justify-between">
<div>
<p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">SafeBoda Direct</p>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-headline-lg text-headline-lg text-on-surface">5 Active</span>
<span className="font-body-md text-body-md text-on-surface-variant">/ 8 online</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-primary-container">
<Icon name="two_wheeler" className="text-[22px]" />
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span>Connected via SafeBoda Fleet API</span>
</div>
</div>

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04),0_1px_2px_rgba(14,27,77,0.02)] flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all">
<div className="flex items-start justify-between">
<div>
<p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Avg Pickup Time</p>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-headline-lg text-headline-lg text-on-surface">16 mins</span>
<span className="font-label-md text-label-md text-tertiary flex items-center font-bold">
<Icon name="arrow_downward" className="text-[14px]" /> 3m
              </span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
<Icon name="schedule" className="text-[22px]" />
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
<Icon name="check" className="text-tertiary text-[14px]" />
<span>Kampala Central corridor standard</span>
</div>
</div>

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04),0_1px_2px_rgba(14,27,77,0.02)] flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all">
<div className="flex items-start justify-between">
<div>
<p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Handover Rate</p>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-headline-lg text-headline-lg text-on-surface">99.1%</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed">Top Tier</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-tertiary">
<Icon name="verified_user" className="text-[22px]" />
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
<Icon name="qr_code_2" className="text-tertiary text-[14px]" />
<span>Blind QR verification code required</span>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">

<section className="lg:col-span-8 space-y-space-xl">

<div className="rounded-xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04)] overflow-hidden">

<div className="p-space-lg flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
<div>
<div className="flex items-center gap-space-sm">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Kampala Metro Stage Telemetry</h2>
<span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
                  Live SafeBoda GPS
                </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Nakasero Flagship Hub • Acacia Avenue • Kololo • Nakawa corridor</p>
</div>

<div className="flex items-center gap-1.5 bg-surface-container-low p-1 rounded-xl">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest font-label-md text-label-md text-on-surface shadow-[0_1px_2px_rgba(14,27,77,0.04)] transition-all" type="button">All Stages (4)</button>
<button className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-all" type="button">Idle Only (2)</button>
<button className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-all" type="button">En Route (2)</button>
<button aria-label="Expand Telemetry Screen" className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all" type="button">
<Icon name="fullscreen" className="text-[18px]" />
</button>
</div>
</div>

<div className="relative w-full h-80 bg-surface-container-high overflow-hidden" data-location="Kampala, Uganda" style={{}}>
<div className="absolute inset-0 bg-cover bg-center" data-alt="Stylized top-down interactive transit map of Kampala Uganda showing Nakasero, Kololo, and Acacia Avenue with soft sunlight road overlays, orange waypoints, and clean GPS tracking pins" style={{"backgroundImage":"url('/images/6a8cdfe93cfdeb6b.webp')"}}></div>

<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none"></div>


<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
<div className="px-space-sm py-1 rounded-full bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm shadow-lg flex items-center gap-1">
<Icon name="store" className="text-primary text-[14px]" />
<span>Nakasero Hub (Origin)</span>
</div>
<div className="w-4 h-4 rounded-full bg-primary-container ring-4 ring-surface-container-lowest shadow-md animate-pulse mt-0.5"></div>
</div>

<div className="absolute top-1/4 right-1/4 z-10 flex flex-col items-center">
<div className="px-space-sm py-0.5 rounded-full bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-md flex items-center gap-1">
<Icon name="two_wheeler" className="text-primary text-[13px]" />
<span>Brian K. (#412) • En Route</span>
</div>
<div className="w-3.5 h-3.5 rounded-full bg-primary ring-2 ring-surface-container-lowest shadow"></div>
</div>

<div className="absolute bottom-1/3 left-1/3 z-10 flex flex-col items-center">
<div className="px-space-sm py-0.5 rounded-full bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-md flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span>Ronald O. (#108) • 0.4 km</span>
</div>
<div className="w-3.5 h-3.5 rounded-full bg-tertiary ring-2 ring-surface-container-lowest shadow"></div>
</div>

<div className="absolute bottom-3 left-3 bg-surface-container-lowest/95 backdrop-blur-md px-space-md py-1.5 rounded-xl shadow-md flex items-center gap-space-md text-on-surface">
<div className="flex items-center gap-1.5">
<Icon name="navigation" className="text-tertiary text-[16px]" />
<span className="font-label-md text-label-md">Yusuf Lule Rd: Free Flow</span>
</div>
<span className="text-surface-container-highest">|</span>
<div className="flex items-center gap-1.5">
<Icon name="signal_cellular_alt" className="text-primary text-[16px]" />
<span className="font-body-sm text-body-sm text-on-surface-variant">4G Latency: 24ms</span>
</div>
</div>
<div className="absolute bottom-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md px- space-sm py-1 rounded-lg text-on-surface-variant font-label-sm text-label-sm">
              SafeBoda Telemetry Stream • 2s refresh
            </div>
</div>
</div>

<div className="flex items-center justify-between pt-space-xs">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Active Courier Roster</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Dedicated riders connected to Nakasero geo-fence &amp; dispatch terminal</p>
</div>
<span className="font-label-md text-label-md text-primary font-bold">4 Riders in Vicinity</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col justify-between space-y-space-md group hover:shadow-md transition-all">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-surface-container overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Portrait photo of professional Ugandan motorcycle courier Brian Kizito smiling in branded orange helmet and high-visibility courier jacket in Kampala" src="/images/1d5655cad080aeec.webp" />
</div>
<div>
<div className="flex items-center gap-1.5">
<h4 className="font-label-lg text-label-lg text-on-surface">Brian Kizito</h4>
<Icon name="verified" className="text-tertiary text-[16px]" />
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<Icon name="star" className="text-[#F59E0B] text-[15px]" />
<strong className="text-on-surface font-label-md">4.92</strong> • 28 trips today
                  </p>
</div>
</div>
<span className="px-space-xs py-1 rounded-lg bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold uppercase">
                #412
              </span>
</div>

<div className="bg-surface-container-low p-space-sm rounded-xl space-y-1">
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span className="flex items-center gap-1"><Icon name="two_wheeler" className="text-[15px]" /> Bajaj Boxer UEF 842X</span>
<span className="font-label-sm text-label-sm text-on-surface">Acacia / Nakasero Stage</span>
</div>
<div className="flex items-center justify-between pt-1 font-body-sm text-body-sm">
<span className="text-primary-container font-label-md flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                  Delivering Order #SC-98241
                </span>
<span className="text-on-surface-variant">Kololo Terrace (ETA 8m)</span>
</div>
</div>

<div className="flex items-center justify-between pt-space-xs">
<span className="font-label-sm text-label-sm px-2 py-1 rounded-full bg-surface-container text-on-surface-variant">In Transit</span>
<button className="text-primary font-label-md text-label-md flex items-center gap-1 hover:underline" type="button">
                Track GPS Live <Icon name="chevron_right" className="text-[16px]" />
</button>
</div>
</div>

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col justify-between space-y-space-md group hover:shadow-md transition-all">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-surface-container overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Portrait of Ugandan delivery rider Ronald Okello wearing orange logistics uniform and reflective vest in Kampala morning sun" src="/images/288d5a9fb901ef02.webp" />
</div>
<div>
<div className="flex items-center gap-1.5">
<h4 className="font-label-lg text-label-lg text-on-surface">Ronald Okello</h4>
<Icon name="verified" className="text-tertiary text-[16px]" />
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<Icon name="star" className="text-[#F59E0B] text-[15px]" />
<strong className="text-on-surface font-label-md">4.88</strong> • 19 trips today
                  </p>
</div>
</div>
<span className="px-space-xs py-1 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm font-bold uppercase">
                #108
              </span>
</div>

<div className="bg-surface-container-low p-space-sm rounded-xl space-y-1">
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span className="flex items-center gap-1"><Icon name="two_wheeler" className="text-[15px]" /> TVS HLX UET 319K</span>
<span className="font-label-sm text-label-sm text-on-surface">Kalerwe Stage</span>
</div>
<div className="flex items-center justify-between pt-1 font-body-sm text-body-sm">
<span className="text-tertiary font-label-md flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
                  Idle at Nakasero Hub
                </span>
<span className="text-on-surface-variant font-label-sm">0.4 km from showroom</span>
</div>
</div>

<div className="flex items-center justify-between pt-space-xs">
<span className="font-label-sm text-label-sm px-2 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-bold">Available Now</span>
<button className="h-9 px-space-md rounded-lg bg-primary-container text-on-primary font-label-md text-label-md flex items-center gap-1 hover:opacity-90 transition-all shadow-[0_2px_8px_rgba(218,55,0,0.25)]" type="button">
<Icon name="send" className="text-[16px]" />
<span>Dispatch to Order</span>
</button>
</div>
</div>

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col justify-between space-y-space-md group hover:shadow-md transition-all">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-surface-container overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Portrait of senior Kampala motorcycle dispatcher Moses Ssempa wearing clean protective riding gear with SafeBoda and SwiftCart emblems" src="/images/7f9a00eb737fbb17.webp" />
</div>
<div>
<div className="flex items-center gap-1.5">
<h4 className="font-label-lg text-label-lg text-on-surface">Moses Ssempa</h4>
<Icon name="verified" className="text-tertiary text-[16px]" />
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<Icon name="star" className="text-[#F59E0B] text-[15px]" />
<strong className="text-on-surface font-label-md">4.95</strong> • 24 trips today
                  </p>
</div>
</div>
<span className="px-space-xs py-1 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm font-bold uppercase">
                #554
              </span>
</div>

<div className="bg-surface-container-low p-space-sm rounded-xl space-y-1">
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span className="flex items-center gap-1"><Icon name="two_wheeler" className="text-[15px]" /> Bajaj Boxer UER 761M</span>
<span className="font-label-sm text-label-sm text-on-surface">Nakawa MUBS Stage</span>
</div>
<div className="flex items-center justify-between pt-1 font-body-sm text-body-sm">
<span className="text-secondary font-label-md flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
                  En Route to Store for Pickup
                </span>
<span className="text-on-surface-variant">Arriving in ~4 mins</span>
</div>
</div>

<div className="flex items-center justify-between pt-space-xs">
<span className="font-label-sm text-label-sm px-2 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-bold">Pickup Ready</span>
<button className="text-primary font-label-md text-label-md flex items-center gap-1 hover:underline" type="button">
                Order #SC-98236 <Icon name="open_in_new" className="text-[16px]" />
</button>
</div>
</div>

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col justify-between space-y-space-md group hover:shadow-md transition-all">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-surface-container overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Portrait photo of energetic young Ugandan express boda rider Patrick Kato in modern protective urban riding apparel against blurred Kampala city skyline" src="/images/79f310ede535b512.webp" />
</div>
<div>
<div className="flex items-center gap-1.5">
<h4 className="font-label-lg text-label-lg text-on-surface">Patrick Kato</h4>
<Icon name="verified" className="text-tertiary text-[16px]" />
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<Icon name="star" className="text-[#F59E0B] text-[15px]" />
<strong className="text-on-surface font-label-md">4.81</strong> • 16 trips today
                  </p>
</div>
</div>
<span className="px-space-xs py-1 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm font-bold uppercase">
                #220
              </span>
</div>

<div className="bg-surface-container-low p-space-sm rounded-xl space-y-1">
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span className="flex items-center gap-1"><Icon name="two_wheeler" className="text-[15px]" /> TVS Neo UEN 902L</span>
<span className="font-label-sm text-label-sm text-on-surface">Kololo Stage</span>
</div>
<div className="flex items-center justify-between pt-1 font-body-sm text-body-sm">
<span className="text-on-surface font-label-md flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-outline"></span>
                  Standby at Kololo
                </span>
<span className="text-on-surface-variant font-label-sm">1.2 km away</span>
</div>
</div>

<div className="flex items-center justify-between pt-space-xs">
<span className="font-label-sm text-label-sm px-2 py-1 rounded-full bg-surface-container text-on-surface-variant">Idle</span>
<button className="h-9 px-space-md rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-1 transition-all" type="button">
<span>Assign Next</span>
<Icon name="chevron_right" className="text-[16px]" />
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
