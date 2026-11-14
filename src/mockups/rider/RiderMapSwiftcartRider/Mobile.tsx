// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/rider/rider_map_swiftcart_rider/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface RiderMapSwiftcartRiderProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const RiderMapSwiftcartRider: React.FC<RiderMapSwiftcartRiderProps> = (props) => {
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
      
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-sm min-w-0"><img alt="SwiftCart" className="h-8 w-auto object-contain flex-shrink-0" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col min-w-0"><span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider truncate">SwiftCart Rider</span><h1 className="font-headline-sm text-headline-sm text-on-surface font-bold leading-none truncate">Rider Map</h1></div></div><div className="flex items-center gap-space-xs"><button aria-label="Toggle Online Status" className="min-h-[44px] px-space-md py-space-xs rounded-full bg-surface-container-high flex items-center gap-space-xs hover:bg-surface-container-highest transition-colors" type="button"><span className="h-3 w-3 rounded-full bg-tertiary-container shadow-[0_0_8px_rgba(0,165,114,0.6)] animate-pulse"></span><span className="font-label-md text-label-md text-on-surface font-bold">ONLINE</span></button><button aria-label="Notifications" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors relative" type="button"><Icon name="notifications" className="text-[24px]" /><span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-primary-container ring-2 ring-surface"></span></button><button aria-label="Toggle Dark/Light Mode" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" type="button" onClick={() => toggleTheme()}><Icon name="light_mode" className="text-[22px]" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0"><span className="font-label-md text-label-md text-on-primary font-bold">KB</span></div></div></div></header>
<main className="flex-1 w-full bg-surface pt-16 pb-24 px-margin"><div className="flex flex-col w-full relative">

<div className="z-20 w-full mb-space-sm">
<div className="bg-inverse-surface/95 backdrop-blur-md rounded-xl p-space-sm flex items-center gap-space-sm shadow-md">
<div className="w-8 h-8 rounded-lg bg-primary-container/20 flex items-center justify-center flex-shrink-0 text-primary-container">
<Icon name="security" className="text-[20px]" />
</div>
<div className="min-w-0 flex-1">
<p className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary-fixed font-bold">LIVE GPS ACTIVE</p>
<p className="font-body-sm text-body-sm text-inverse-on-surface truncate">Live GPS shared with Customer &amp; SwiftCart Support</p>
</div>
<div className="flex items-center gap-1 flex-shrink-0 bg-inverse-surface px-space-xs py-0.5 rounded-full">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-ping"></span>
<span className="font-label-sm text-label-sm text-tertiary-fixed font-bold">4G+</span>
</div>
</div>
</div>

<div className="z-20 w-full mb-space-sm">
<div className="bg-inverse-surface text-inverse-on-surface rounded-xl p-space-md shadow-xl flex items-center justify-between">
<div className="flex items-center gap-space-md min-w-0">
<div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-container/30">
<Icon name="turn_right" className="text-[32px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-headline-lg-mobile text-headline-lg-mobile text-primary-fixed font-extrabold tracking-tight">350m</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-highest/20 text-tertiary-fixed uppercase font-bold">Then Straight</span>
</div>
<p className="font-headline-sm text-headline-sm text-inverse-on-surface font-bold truncate">Turn Right onto Jinja Rd</p>
</div>
</div>
<button aria-label="Recenter map" className="w-11 h-11 rounded-full bg-surface-container-high/20 hover:bg-surface-container-high/40 flex items-center justify-center text-inverse-on-surface flex-shrink-0 transition-colors" id="recenterBtn" type="button">
<Icon name="navigation" className="text-[24px]" />
</button>
</div>
</div>

<div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-inverse-surface" style={{"height":"380px"}}>

<div className="absolute inset-0 w-full h-full opacity-35 bg-cover bg-center" data-location="Yusuf Lule Road to Jinja Road, Kampala, Uganda" style={{"backgroundImage":"url('/images/de8faff35bfa9e26.webp')"}}></div>

<div className="absolute inset-0 pointer-events-none">
<svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 360 400" xmlns="http://www.w3.org/2000/svg">

<g opacity="0.45" stroke="#3f465c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8">

<path d="M 40,30 L 110,130 L 150,220 L 180,380"></path>

<path d="M 20,180 L 120,200 L 220,190 L 340,160"></path>

<path d="M 220,190 L 260,260 L 310,320"></path>

<path d="M 110,130 L 290,110" strokeWidth="4"></path>
<path d="M 150,220 L 320,240" strokeWidth="4"></path>
<path d="M 80,310 L 260,310" strokeWidth="3"></path>
</g>

<text fill="#bec6e0" font-family="Plus Jakarta Sans" font-size="10" font-weight="700" letter-spacing="1" x="50" y="90">YUSUF LULE RD</text>
<text fill="#bec6e0" font-family="Plus Jakarta Sans" font-size="10" font-weight="700" letter-spacing="1" x="180" y="175">JINJA RD (A109)</text>
<text fill="#bec6e0" font-family="Plus Jakarta Sans" font-size="9" font-weight="600" x="250" y="290">LUGOGO BYPASS</text>

<path d="M 125,198 L 195,193" opacity="0.85" stroke="#ba1a1a" strokeLinecap="round" strokeWidth="7"></path>

<path d="M 85,90 L 115,140 L 135,195 L 210,190 L 255,255 L 295,305" fill="none" opacity="0.35" stroke="#ff5722" strokeLinecap="round" strokeLinejoin="round" strokeWidth="9"></path>

<path d="M 85,90 L 115,140 L 135,195 L 210,190 L 255,255 L 295,305" fill="none" id="activeRoute" stroke="#4edea3" strokeDasharray="8 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path>

<circle className="animate-ping" cx="210" cy="190" fill="#ff5722" fillOpacity="0.25" r="14"></circle>
<circle cx="210" cy="190" fill="#ff5722" r="5"></circle>
</svg>
</div>

<div className="absolute top-[80px] left-[70px] -translate-x-1/2 -translate-y-full flex flex-col items-center pointer-events-none group">
<div className="bg-tertiary text-on-tertiary px-space-xs py-0.5 rounded shadow-lg flex items-center gap-1 font-label-sm text-label-sm font-bold whitespace-nowrap mb-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed"></span>
        PICKUP DONE
      </div>
<div className="w-7 h-7 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shadow-md">
<Icon name="storefront" className="text-[16px]" />
</div>
</div>

<div className="absolute top-[175px] left-[135px] -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-700" id="bodaMarker">
<div className="relative flex items-center justify-center">

<div className="absolute -top-6 w-14 h-14 bg-gradient-to-t from-primary-container/40 to-transparent rounded-full rotate-45 pointer-events-none"></div>
<div className="w-11 h-11 rounded-full bg-inverse-surface border-0 shadow-2xl flex items-center justify-center ring-4 ring-primary-container">
<Icon name="two_wheeler" className="text-primary-container text-[24px]" />
</div>
<div className="absolute -bottom-5 bg-inverse-surface/90 px-1.5 py-0.5 rounded text-on-tertiary-fixed-variant font-label-sm text-label-sm font-bold tracking-tight text-white whitespace-nowrap">
          YOU (38 km/h)
        </div>
</div>
</div>

<div className="absolute top-[305px] left-[295px] -translate-x-1/2 -translate-y-full flex flex-col items-center pointer-events-none">
<div className="bg-primary text-on-primary px-space-xs py-0.5 rounded shadow-lg flex items-center gap-1 font-label-sm text-label-sm font-bold whitespace-nowrap mb-1">
<Icon name="flag" className="text-[12px]" />
        DROP-OFF PIN
      </div>
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-lg ring-2 ring-surface">
<Icon name="location_on" className="text-[18px]" />
</div>
</div>

<div className="absolute right-space-sm bottom-space-sm flex flex-col gap-space-xs z-10">
<button aria-label="Toggle Traffic Layer" className="w-11 h-11 rounded-xl bg-inverse-surface/90 backdrop-blur-md text-tertiary-fixed flex items-center justify-center shadow-lg hover:bg-inverse-surface transition-colors" type="button">
<Icon name="traffic" className="text-[22px]" />
</button>
<button aria-label="Zoom In" className="w-11 h-11 rounded-xl bg-inverse-surface/90 backdrop-blur-md text-inverse-on-surface flex items-center justify-center shadow-lg hover:bg-inverse-surface transition-colors" type="button">
<Icon name="add" className="text-[22px]" />
</button>
<button aria-label="Zoom Out" className="w-11 h-11 rounded-xl bg-inverse-surface/90 backdrop-blur-md text-inverse-on-surface flex items-center justify-center shadow-lg hover:bg-inverse-surface transition-colors" type="button">
<Icon name="remove" className="text-[22px]" />
</button>
</div>

<div className="absolute top-space-sm left-space-sm z-10 bg-inverse-surface/85 backdrop-blur-md rounded-lg px-2 py-1 flex items-center gap-1.5 shadow">
<Icon name="explore" className="text-primary-container text-[18px]" />
<span className="font-label-sm text-label-sm text-inverse-on-surface font-extrabold">E 072°</span>
</div>
</div>

<div className="z-20 w-full mt-space-sm space-y-space-sm">

<div className="bg-surface-container-high rounded-xl p-space-sm flex items-center justify-between gap-space-xs overflow-x-auto shadow-sm">
<div className="flex items-center gap-space-xs flex-shrink-0">
<Icon name="route" className="text-[20px] text-primary" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold">Distance</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface">3.2 km</span>
</div>
</div>
<div className="h-6 w-px bg-outline-variant/60 flex-shrink-0"></div>
<div className="flex items-center gap-space-xs flex-shrink-0">
<Icon name="timer" className="text-[20px] text-tertiary" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold">ETA</span>
<span className="font-label-lg text-label-lg font-bold text-tertiary">7m <span className="font-label-sm text-label-sm text-secondary font-normal">(14:38)</span></span>
</div>
</div>
<div className="h-6 w-px bg-outline-variant/60 flex-shrink-0"></div>
<div className="flex items-center gap-space-xs flex-shrink-0">
<Icon name="speed" className="text-[20px] text-error" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold">Traffic</span>
<span className="font-label-sm text-label-sm font-bold text-error truncate max-w-[100px]">Mod @ Oasis Mall</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-md space-y-space-sm">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-fixed flex items-center justify-center font-headline-sm text-headline-sm font-bold flex-shrink-0">
            DM
          </div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Dennis Mukasa</span>
<span className="bg-tertiary-container/15 text-tertiary-container px-1.5 py-0.5 rounded font-label-sm text-label-sm font-bold">Paid Online</span>
</div>
<p className="font-body-sm text-body-sm text-secondary truncate">Forest Mall, Block B, 2nd Floor, Lugogo Bypass</p>
<p className="font-label-sm text-label-sm text-primary font-bold">Package: SoundCore Anker Boom 2 Plus (Fragile)</p>
</div>
</div>
<button aria-label="Customer instructions" className="w-9 h-9 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center flex-shrink-0 hover:bg-surface-container-high transition-colors" type="button">
<Icon name="info" className="text-[20px]" />
</button>
</div>

<button className="w-full h-[52px] rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg font-extrabold flex items-center justify-center gap-space-sm shadow-lg shadow-primary-container/25 active:scale-[0.98] transition-transform" id="launchNavigationBtn" type="button">
<Icon name="near_me" className="text-[24px]" />
<span className="">START NAVIGATION (MAPS / WAZE)</span>
</button>

<div className="grid grid-cols-2 gap-space-sm pt-space-xs">
<a className="h-12 px-space-sm rounded-xl bg-surface-container-high hover:bg-surface-container-highest flex items-center justify-center gap-space-xs text-on-surface active:scale-[0.98] transition-all" href="tel:+256702000123">
<Icon name="call" className="text-[20px] text-tertiary" />
<span className="font-label-md text-label-md font-bold truncate">Call Customer Dennis</span>
</a>
<a className="h-12 px-space-sm rounded-xl bg-surface-container-high hover:bg-surface-container-highest flex items-center justify-center gap-space-xs text-on-surface active:scale-[0.98] transition-all" href="tel:+256772111890">
<Icon name="store" className="text-[20px] text-primary" />
<span className="font-label-md text-label-md font-bold truncate">Call SoundCore Hub</span>
</a>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm items-end justify-center p-margin" id="navModal">
<div className="w-full max-w-md bg-surface-container-lowest rounded-2xl p-space-lg shadow-2xl space-y-space-md">
<div className="flex items-center justify-between">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Choose External GPS</h3>
<button className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant" id="closeNavModal" type="button">
<Icon name="close" className="text-[20px]" />
</button>
</div>
<p className="font-body-sm text-body-sm text-secondary">
        Direct routing from Pioneer Mall to Forest Mall via Jinja Rd corridor.
      </p>
<div className="space-y-space-xs">
<button className="w-full h-12 rounded-xl bg-surface-container hover:bg-surface-container-high px-space-md flex items-center justify-between text-on-surface transition-colors" type="button">
<div className="flex items-center gap-space-sm">
<Icon name="map" className="text-primary-container text-[24px]" />
<span className="font-label-lg text-label-lg font-bold">Google Maps Live</span>
</div>
<Icon name="open_in_new" className="text-[20px] text-secondary" />
</button>
<button className="w-full h-12 rounded-xl bg-surface-container hover:bg-surface-container-high px-space-md flex items-center justify-between text-on-surface transition-colors" type="button">
<div className="flex items-center gap-space-sm">
<Icon name="alt_route" className="text-tertiary-container text-[24px]" />
<span className="font-label-lg text-label-lg font-bold">Waze Navigation</span>
</div>
<Icon name="open_in_new" className="text-[20px] text-secondary" />
</button>
</div>
<div className="pt-space-xs">
<button className="w-full h-11 rounded-xl bg-surface-container-highest text-on-surface font-label-md text-label-md font-bold" id="dismissModalBtn" type="button">
          Stay on SwiftCart Map
        </button>
</div>
</div>
</div>
</div>
</main>
<nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-1px_12px_rgba(0,0,0,0.06)]" data-active-classes="text-primary-container bg-surface-container-high font-bold"><div className="flex items-center justify-around h-20 px-space-xs max-w-lg mx-auto"><a className="flex-1 flex flex-col items-center justify-center min-h-[48px] py-space-xs rounded-xl text-on-surface-variant hover:text-on-surface transition-all" data-path="overview" href="#"><Icon name="dashboard" className="text-[26px]" /><span className="font-label-md text-label-md mt-0.5">Overview</span></a><a className="flex-1 flex flex-col items-center justify-center min-h-[48px] py-space-xs rounded-xl text-on-surface-variant hover:text-on-surface transition-all" data-path="deliveries" href="#"><Icon name="package_2" className="text-[26px]" /><span className="font-label-md text-label-md mt-0.5">Deliveries</span></a><a aria-current="page" className="flex-1 flex flex-col items-center justify-center min-h-[48px] py-space-xs rounded-xl transition-all text-primary-container bg-surface-container-high font-bold" data-path="rider-map" href="#"><Icon name="location_on" className="text-[26px]" /><span className="font-label-md text-label-md mt-0.5">Map</span></a><a className="flex-1 flex flex-col items-center justify-center min-h-[48px] py-space-xs rounded-xl text-on-surface-variant hover:text-on-surface transition-all" data-path="earnings" href="#"><Icon name="account_balance_wallet" className="text-[26px]" /><span className="font-label-md text-label-md mt-0.5">Earnings</span></a><a className="flex-1 flex flex-col items-center justify-center min-h-[48px] py-space-xs rounded-xl text-on-surface-variant hover:text-on-surface transition-all" data-path="profile" href="#"><Icon name="person" className="text-[26px]" /><span className="font-label-md text-label-md mt-0.5">Profile</span></a></div></nav>
    </div>
  );
};

export default RiderMapSwiftcartRider;
