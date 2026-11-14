// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/rider/overview_swiftcart_rider/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface OverviewSwiftcartRiderProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const OverviewSwiftcartRider: React.FC<OverviewSwiftcartRiderProps> = (props) => {
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
      
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-sm min-w-0"><img alt="SwiftCart" className="h-8 w-auto object-contain flex-shrink-0" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col min-w-0"><span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider truncate">SwiftCart Rider • Fleet Dispatch</span><h1 className="font-headline-sm text-headline-sm text-on-surface font-bold leading-none truncate">Overview</h1></div></div><div className="flex items-center gap-space-xs"><button aria-label="Toggle Online Status" className="min-h-[44px] px-space-md py-space-xs rounded-full bg-surface-container-high flex items-center gap-space-xs hover:bg-surface-container-highest transition-colors" type="button"><span className="h-3 w-3 rounded-full bg-tertiary-container shadow-[0_0_8px_rgba(0,165,114,0.6)] animate-pulse"></span><span className="font-label-md text-label-md text-on-surface font-bold">ONLINE</span></button><button aria-label="Notifications" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors relative" type="button"><Icon name="notifications" className="text-[24px]" /><span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-primary-container ring-2 ring-surface"></span></button><button aria-label="Toggle Dark/Light Mode" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" type="button" onClick={() => toggleTheme()}><Icon name="light_mode" className="text-[22px]" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0"><span className="font-label-md text-label-md font-bold text-on-primary leading-none">KB</span></div></div></div></header>
<main className="flex-1 w-full bg-surface pt-16 pb-24 px-margin"><div className="flex flex-col w-full gap-space-md">

<section className="bg-inverse-surface text-inverse-on-surface rounded-xl p-space-md shadow-md">
<div className="flex items-center justify-between gap-space-sm mb-space-sm">
<div className="flex items-center gap-space-xs min-w-0">
<span className="relative flex h-3 w-3 flex-shrink-0">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-fixed opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-tertiary-fixed"></span>
</span>
<span className="font-label-sm text-label-sm text-tertiary-fixed tracking-wider uppercase">GPS Connected</span>
</div>
<span className="font-label-sm text-label-sm text-surface-variant bg-surface-container/20 px-space-xs py-0.5 rounded-full">4G • 98% Acc.</span>
</div>
<div className="flex items-center justify-between gap-space-md">
<div className="min-w-0 flex-1">
<h2 className="font-headline-sm text-headline-sm text-surface-container-lowest font-bold leading-tight">
          YOU ARE ONLINE
        </h2>
<p className="font-label-md text-label-md text-tertiary-fixed font-semibold tracking-wide mt-0.5">
          READY FOR ORDERS
        </p>
<div className="flex items-center gap-1 mt-space-xs text-surface-dim">
<Icon name="near_me" className="text-[16px] text-tertiary-fixed" />
<span className="font-body-sm text-body-sm truncate">Kampala Central (Nakawa / Nakasero)</span>
</div>
</div>

<button aria-label="Online status switch" className="w-16 h-9 rounded-full bg-tertiary-container p-1 flex items-center justify-end transition-all shadow-inner focus:outline-none flex-shrink-0" id="rider-toggle-btn" type="button">
<span className="w-7 h-7 rounded-full bg-surface-container-lowest shadow-md flex items-center justify-center transition-transform" id="rider-toggle-knob">
<Icon name="power_settings_new" className="text-[16px] text-tertiary-container" />
</span>
</button>
</div>
</section>

<section className="bg-surface-container-lowest rounded-xl p-space-md shadow-md relative overflow-hidden">

<div className="absolute top-0 left-0 right-0 h-1.5 bg-primary-container animate-pulse"></div>
<div className="flex items-center justify-between gap-space-xs pt-1 mb-space-sm">
<span className="bg-primary-fixed text-on-primary-fixed-variant px-space-xs py-0.5 rounded font-label-sm text-label-sm font-bold uppercase tracking-wider flex items-center gap-1">
<Icon name="local_shipping" className="text-[14px]" />
        Active Delivery
      </span>
<span className="font-label-md text-label-md text-primary font-bold">#SC-ORD-9281</span>
</div>

<div className="space-y-space-xs mb-space-sm">
<div className="flex items-start gap-space-sm">
<div className="w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center flex-shrink-0 mt-0.5">
<Icon name="storefront" className="text-primary text-[14px]" />
</div>
<div className="min-w-0 flex-1">
<p className="font-label-sm text-label-sm text-secondary uppercase">Pickup Point</p>
<p className="font-label-lg text-label-lg text-on-surface truncate font-bold">SoundCore Official</p>
<p className="font-body-sm text-body-sm text-secondary truncate">Pioneer Mall, Ground Floor, Shop #14</p>
</div>
</div>
<div className="ml-3 h-3 w-0.5 bg-surface-variant"></div>
<div className="flex items-start gap-space-sm">
<div className="w-6 h-6 rounded-full bg-primary-fixed flex items-center justify-center flex-shrink-0 mt-0.5">
<Icon name="home_pin" className="text-primary text-[14px]" />
</div>
<div className="min-w-0 flex-1">
<p className="font-label-sm text-label-sm text-secondary uppercase">Drop-off Destination</p>
<p className="font-label-lg text-label-lg text-on-surface truncate font-bold">Lugogo Bypass, Forest Mall</p>
<p className="font-body-sm text-body-sm text-secondary truncate">Block B • 2nd Floor, Office 204</p>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-lg p-space-sm flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-xs min-w-0">
<Icon name="navigation" className="text-primary-container text-[18px]" />
<span className="font-label-md text-label-md text-on-surface font-semibold truncate">En Route to Customer</span>
</div>
<span className="bg-tertiary-fixed text-on-tertiary-container px-space-sm py-0.5 rounded-full font-label-md text-label-md font-bold whitespace-nowrap">
        ETA 8 mins
      </span>
</div>

<button className="w-full min-h-[52px] py-space-sm px-space-md rounded-lg bg-primary-container hover:bg-primary active:scale-[0.98] text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-space-xs transition-all shadow-md" type="button">
<span className="">Continue Active Job</span>
<Icon name="arrow_forward" className="text-[20px]" />
</button>
</section>

<section className="bg-inverse-surface text-inverse-on-surface rounded-xl p-space-md shadow-lg relative">
<div className="flex items-center justify-between gap-space-xs mb-space-sm">
<div className="flex items-center gap-space-xs">
<span className="h-2.5 w-2.5 rounded-full bg-primary-container animate-ping"></span>
<h3 className="font-label-lg text-label-lg text-primary-fixed-dim uppercase tracking-wider font-extrabold">New Delivery Offer</h3>
</div>

<div className="flex items-center gap-1 bg-surface-container/20 px-space-sm py-0.5 rounded-full">
<Icon name="timer" className="text-[16px] text-primary-container animate-spin" />
<span className="font-label-md text-label-md text-surface-container-lowest font-bold tabular-nums" id="offer-timer">00:16s remaining</span>
</div>
</div>

<div className="bg-surface-container/10 rounded-lg p-space-sm mb-space-md flex items-center justify-between">
<div>
<p className="font-label-sm text-label-sm text-surface-dim uppercase">Guaranteed Rider Payout</p>
<p className="font-price-display text-price-display text-surface-container-lowest font-extrabold leading-none mt-1">
          UGX 7,500
        </p>
<p className="font-body-sm text-body-sm text-tertiary-fixed mt-1 flex items-center gap-1 font-semibold">
<Icon name="thunderstorm" className="text-[14px]" />
          Includes UGX 1,500 Peak Rain Bonus
        </p>
</div>
<div className="text-right">
<span className="inline-block bg-tertiary-container/30 text-tertiary-fixed px-space-xs py-1 rounded text-right font-label-sm text-label-sm font-bold">
          3.8 km Total
        </span>
<p className="font-label-sm text-label-sm text-surface-dim mt-1.5">Prepaid MTN MoMo</p>
</div>
</div>

<div className="space-y-space-xs mb-space-md">
<div className="flex items-start gap-space-sm">
<Icon name="store" className="text-surface-variant text-[18px] mt-0.5" />
<div className="min-w-0 flex-1">
<p className="font-label-sm text-label-sm text-surface-dim">Pickup (1.1 km away)</p>
<p className="font-label-md text-label-md text-surface-container-lowest font-bold truncate">Kikuubo Wholesalers Direct</p>
<p className="font-body-sm text-body-sm text-surface-dim truncate">Kikuubo Arcade, Shop 04, Nakasero</p>
</div>
</div>
<div className="flex items-start gap-space-sm">
<Icon name="location_on" className="text-primary-container text-[18px] mt-0.5" />
<div className="min-w-0 flex-1">
<p className="font-label-sm text-label-sm text-surface-dim">Drop-off (2.7 km leg)</p>
<p className="font-label-md text-label-md text-surface-container-lowest font-bold truncate">Bukoto Street, Kamwokya</p>
<p className="font-body-sm text-body-sm text-surface-dim truncate">Near Acacia Mall Entrance</p>
</div>
</div>
</div>

<div className="bg-surface-container/10 rounded p-space-xs mb-space-md flex items-center gap-space-xs">
<Icon name="check_circle" className="text-[16px] text-tertiary-fixed" />
<span className="font-body-sm text-body-sm text-surface-bright font-medium">MTN MoMo Settled • Zero Cash Collection</span>
</div>

<div className="grid grid-cols-2 gap-space-sm">
<button className="min-h-[48px] px-space-sm py-space-sm rounded-lg bg-surface-container/20 hover:bg-surface-container/30 active:scale-[0.98] text-surface-bright font-label-lg text-label-lg font-bold flex items-center justify-center transition-all" type="button">
        Decline
      </button>
<button className="min-h-[48px] px-space-sm py-space-sm rounded-lg bg-primary-container hover:bg-primary active:scale-[0.98] text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-1 shadow-md transition-all truncate" type="button">
<span className="">Accept (7,500)</span>
</button>
</div>
</section>

<section className="space-y-space-xs">
<div className="flex items-center justify-between px-space-xs">
<h3 className="font-label-lg text-label-lg text-on-surface font-bold uppercase tracking-wider">Today's Shift</h3>
<span className="font-label-md text-label-md text-secondary">Updated 1 min ago</span>
</div>
<div className="grid grid-cols-2 gap-space-sm">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between min-h-[124px]">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold">Deliveries</span>
<span className="w-7 h-7 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface">
<Icon name="package_2" className="text-[18px]" />
</span>
</div>
<div className="mt-space-xs">
<p className="font-headline-md text-headline-md text-on-surface font-extrabold leading-none">14 Orders</p>
<span className="inline-flex items-center gap-0.5 font-label-sm text-label-sm text-tertiary-container font-bold mt-1">
<Icon name="trending_up" className="text-[12px]" />
            +3 vs yesterday
          </span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between min-h-[124px]">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold">Earnings</span>
<span className="w-7 h-7 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
<Icon name="payments" className="text-[18px]" />
</span>
</div>
<div className="mt-space-xs">
<p className="font-headline-md text-headline-md text-on-surface font-extrabold leading-none">68.5k</p>
<p className="font-label-sm text-label-sm text-secondary font-medium mt-1 truncate">
            Goal: UGX 110,000
          </p>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between min-h-[124px]">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold">In-Flight</span>
<span className="w-7 h-7 rounded-lg bg-tertiary-fixed flex items-center justify-center text-on-tertiary-container">
<Icon name="two_wheeler" className="text-[18px]" />
</span>
</div>
<div className="mt-space-xs">
<p className="font-headline-md text-headline-md text-on-surface font-extrabold leading-none">1 Active</p>
<span className="inline-block font-label-sm text-label-sm text-primary font-semibold mt-1 truncate">
            To Lugogo Forest Mall
          </span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between min-h-[124px]">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold">Rating</span>
<span className="w-7 h-7 rounded-lg bg-surface-container-high flex items-center justify-center text-primary-container">
<Icon name="star" className="text-[18px]" />
</span>
</div>
<div className="mt-space-xs">
<p className="font-headline-md text-headline-md text-on-surface font-extrabold leading-none">98.5%</p>
<span className="inline-flex items-center gap-0.5 font-label-sm text-label-sm text-secondary font-bold mt-1">
            Top Tier Rider
          </span>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-low rounded-xl p-space-sm flex items-center justify-between gap-space-sm mb-space-xs">
<div className="flex items-center gap-space-xs min-w-0">
<Icon name="bolt" className="text-[20px] text-tertiary" />
<p className="font-body-sm text-body-sm text-on-surface truncate">
        High demand around <span className="font-bold">Acacia Mall &amp; Kololo</span> (+15% surge)
      </p>
</div>
<button className="font-label-sm text-label-sm text-primary font-bold uppercase whitespace-nowrap hover:underline" type="button">
      View Map
    </button>
</section>
</div>
</main>
<nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-1px_12px_rgba(0,0,0,0.06)]" data-active-classes="text-primary-container bg-surface-container-high font-bold"><div className="flex items-center justify-around h-20 px-space-xs max-w-lg mx-auto"><a aria-current="page" className="flex-1 flex flex-col items-center justify-center min-h-[48px] py-space-xs rounded-xl transition-all text-primary-container bg-surface-container-high font-bold" data-path="overview" href="#"><Icon name="dashboard" className="text-[26px]" /><span className="font-label-md text-label-md mt-0.5">Overview</span></a><a className="flex-1 flex flex-col items-center justify-center min-h-[48px] py-space-xs rounded-xl text-on-surface-variant hover:text-on-surface transition-all" data-path="deliveries" href="#"><Icon name="package_2" className="text-[26px]" /><span className="font-label-md text-label-md mt-0.5">Deliveries</span></a><a className="flex-1 flex flex-col items-center justify-center min-h-[48px] py-space-xs rounded-xl text-on-surface-variant hover:text-on-surface transition-all" data-path="rider-map" href="#"><Icon name="location_on" className="text-[26px]" /><span className="font-label-md text-label-md mt-0.5">Map</span></a><a className="flex-1 flex flex-col items-center justify-center min-h-[48px] py-space-xs rounded-xl text-on-surface-variant hover:text-on-surface transition-all" data-path="earnings" href="#"><Icon name="account_balance_wallet" className="text-[26px]" /><span className="font-label-md text-label-md mt-0.5">Earnings</span></a><a className="flex-1 flex flex-col items-center justify-center min-h-[48px] py-space-xs rounded-xl text-on-surface-variant hover:text-on-surface transition-all" data-path="profile" href="#"><Icon name="person" className="text-[26px]" /><span className="font-label-md text-label-md mt-0.5">Profile</span></a></div></nav>
    </div>
  );
};

export default OverviewSwiftcartRider;
