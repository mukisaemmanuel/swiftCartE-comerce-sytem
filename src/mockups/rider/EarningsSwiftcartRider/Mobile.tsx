// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/rider/earnings_swiftcart_rider/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface EarningsSwiftcartRiderProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const EarningsSwiftcartRider: React.FC<EarningsSwiftcartRiderProps> = (props) => {
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
      
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-sm min-w-0"><img alt="SwiftCart" className="h-8 w-auto object-contain flex-shrink-0" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col min-w-0"><span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider truncate">SwiftCart Rider</span><h1 className="font-headline-sm text-headline-sm text-on-surface font-bold leading-none truncate">Earnings</h1></div></div><div className="flex items-center gap-space-xs"><button aria-label="Toggle Online Status" className="min-h-[44px] px-space-md py-space-xs rounded-full bg-surface-container-high flex items-center gap-space-xs hover:bg-surface-container-highest transition-colors" type="button"><span className="h-3 w-3 rounded-full bg-tertiary-container shadow-[0_0_8px_rgba(0,165,114,0.6)] animate-pulse"></span><span className="font-label-md text-label-md text-on-surface font-bold">ONLINE</span></button><button aria-label="Notifications" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors relative" type="button"><Icon name="notifications" className="text-[24px]" /><span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-primary-container ring-2 ring-surface"></span></button><button aria-label="Toggle Dark/Light Mode" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" type="button" onClick={() => toggleTheme()}><Icon name="light_mode" className="text-[22px]" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex-1 w-full bg-surface pt-16 pb-24 px-margin"><div className="flex flex-col w-full gap-space-lg">

<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Financial Hub</span>
<h2 className="font-headline-md text-headline-md text-on-surface font-extrabold tracking-tight">Rider Earnings &amp; Wallet</h2>
</div>
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary shadow-sm flex-shrink-0">
<Icon name="payments" className="text-[22px]" />
</div>
</div>

<div className="flex items-center p-1 bg-surface-container-low rounded-xl gap-1">
<button className="period-tab flex-1 py-space-xs text-center rounded-lg font-label-md text-label-md text-secondary transition-all hover:text-on-surface" data-period="today" type="button">
        Today
      </button>
<button className="period-tab flex-1 py-space-xs text-center rounded-lg font-label-md text-label-md text-on-primary bg-primary shadow-sm font-bold transition-all" data-period="week" type="button">
        This Week
      </button>
<button className="period-tab flex-1 py-space-xs text-center rounded-lg font-label-md text-label-md text-secondary transition-all hover:text-on-surface" data-period="month" type="button">
        This Month
      </button>
</div>
</div>

<div className="relative overflow-hidden rounded-xl bg-inverse-surface text-inverse-on-surface p-space-lg shadow-xl flex flex-col gap-space-md">

<div className="absolute -top-12 -right-12 w-48 h-48 bg-primary-container/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute -bottom-10 -left-10 w-36 h-36 bg-tertiary-container/15 rounded-full blur-2xl pointer-events-none"></div>
<div className="flex items-start justify-between relative z-10">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-surface-variant font-semibold">Available for Instant Payout</span>
<div className="flex items-baseline gap-1.5 mt-0.5">
<span className="font-label-md text-label-md text-primary-fixed-dim font-bold">UGX</span>
<span className="font-headline-xl-mobile text-headline-xl-mobile font-extrabold tracking-tight text-inverse-on-surface">248,500</span>
</div>
</div>
<div className="px-space-sm py-1 bg-surface-container-highest/20 rounded-full flex items-center gap-1 backdrop-blur-sm">
<Icon name="verified" className="text-[14px] text-tertiary-fixed" />
<span className="font-label-sm text-label-sm text-inverse-on-surface font-bold">Verified</span>
</div>
</div>

<div className="flex items-center gap-2 relative z-10 flex-wrap">
<div className="flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-surface-container-lowest/10">
<Icon name="electric_moped" className="text-[15px] text-primary-fixed" />
<span className="font-label-md text-label-md font-bold text-inverse-on-surface">42 Trips Completed</span>
</div>
<div className="flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-tertiary-container/20">
<Icon name="trending_up" className="text-[14px] text-tertiary-fixed" />
<span className="font-label-md text-label-md font-bold text-tertiary-fixed">+18% vs last week</span>
</div>
</div>

<button className="relative z-10 w-full min-h-[48px] bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg font-bold rounded-xl shadow-md flex items-center justify-center gap-space-sm active:scale-[0.98] transition-all" id="withdrawBtn" type="button">
<Icon name="account_balance_wallet" className="text-[20px]" />
<span>Withdraw to MTN MoMo / Airtel Money</span>
<span className="bg-on-primary/20 text-on-primary font-label-sm text-label-sm px-1.5 py-0.5 rounded-full uppercase">0% Fee</span>
</button>
</div>

<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col gap-space-md">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-fixed flex items-center justify-center flex-shrink-0">
<Icon name="attach_money" className="text-[22px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">Cash-on-Delivery (COD) in Hand</span>
<div className="flex items-baseline gap-1">
<span className="font-label-sm text-label-sm text-secondary font-bold">UGX</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold leading-tight">45,000</span>
</div>
</div>
</div>
<span className="font-label-sm text-label-sm bg-surface-container-high text-secondary px-2 py-0.5 rounded-full font-bold flex-shrink-0">2 Orders</span>
</div>

<div className="flex flex-col gap-1.5">
<div className="flex justify-between items-center font-label-sm text-label-sm">
<span className="text-on-surface-variant font-medium">Safe Allowance Utilized</span>
<span className="text-primary font-bold">45% of UGX 100k Limit</span>
</div>
<div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
<div className="h-full bg-primary-container rounded-full" style={{"width":"45%"}}></div>
</div>
</div>

<div className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container-low text-on-surface">
<Icon name="warning" className="text-[18px] text-primary flex-shrink-0" />
<span className="font-body-sm text-body-sm text-secondary leading-snug">
        Hand-in required before reaching <strong className="text-on-surface font-bold">UGX 100,000</strong> to keep receiving cash orders.
      </span>
</div>
<button className="w-full min-h-[44px] bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md font-bold rounded-lg flex items-center justify-center gap-space-xs transition-colors" type="button">
<Icon name="store" className="text-[18px]" />
<span>Deposit COD via PayWay / Hub Kiosk</span>
</button>
</div>

<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Earnings Breakdown</h3>
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">Gross Matrix</span>
</div>
<div className="flex flex-col gap-2 mt-1">

<div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-surface-container-high text-on-surface flex items-center justify-center">
<Icon name="moped" className="text-[18px]" />
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Delivery Base Pay</span>
<span className="font-body-sm text-body-sm text-secondary">42 distance legs &amp; flag drops</span>
</div>
</div>
<span className="font-label-lg text-label-lg text-on-surface font-extrabold">UGX 185,000</span>
</div>

<div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-secondary-container text-on-secondary-fixed flex items-center justify-center">
<Icon name="thunderstorm" className="text-[18px]" />
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Peak / Rain Bonuses</span>
<span className="font-body-sm text-body-sm text-secondary">7 high-demand surges</span>
</div>
</div>
<span className="font-label-lg text-label-lg text-primary font-extrabold">+UGX 38,500</span>
</div>

<div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-tertiary-container/15 text-tertiary flex items-center justify-center">
<Icon name="favorite" className="text-[18px]" />
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Customer Tips</span>
<span className="font-body-sm text-body-sm text-tertiary font-bold">100% kept by rider</span>
</div>
</div>
<span className="font-label-lg text-label-lg text-tertiary font-extrabold">+UGX 25,000</span>
</div>

<div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-surface-container-high text-secondary flex items-center justify-center">
<Icon name="format_image_left" className="text-[18px]" />
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Deductions / Fines</span>
<span className="font-body-sm text-body-sm text-secondary">Zero penalty streak</span>
</div>
</div>
<span className="font-label-lg text-label-lg text-secondary font-extrabold">UGX 0</span>
</div>
</div>
</div>

<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Recent Paid Deliveries</h3>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-bold">Today</span>
</div>
<button className="font-label-md text-label-md text-primary font-bold hover:underline" type="button">See All</button>
</div>
<div className="flex flex-col gap-2">

<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center flex-shrink-0 mt-0.5">
<Icon name="storefront" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Forest Mall, Lugogo</span>
<div className="flex items-center gap-1.5 font-body-sm text-body-sm text-secondary mt-0.5">
<span>Today 14:10</span>
<span className="w-1 h-1 rounded-full bg-secondary"></span>
<span className="text-on-surface-variant font-medium">Prepaid MoMo</span>
</div>
<div className="inline-flex items-center gap-1 mt-1 text-tertiary">
<Icon name="favorite" className="text-[13px]" />
<span className="font-label-sm text-label-sm font-bold">+UGX 1,000 Tip</span>
</div>
</div>
</div>
<div className="flex flex-col items-end flex-shrink-0">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">UGX 6,500</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-tertiary-container/15 text-tertiary font-bold mt-1">Paid</span>
</div>
</div>

<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center flex-shrink-0 mt-0.5">
<Icon name="local_mall" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Acacia Mall, Kisementi</span>
<div className="flex items-center gap-1.5 font-body-sm text-body-sm text-secondary mt-0.5">
<span>Today 12:45</span>
<span className="w-1 h-1 rounded-full bg-secondary"></span>
<span className="text-on-surface-variant font-medium">Prepaid Airtel</span>
</div>
</div>
</div>
<div className="flex flex-col items-end flex-shrink-0">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">UGX 5,500</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-tertiary-container/15 text-tertiary font-bold mt-1">Paid</span>
</div>
</div>

<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-fixed flex items-center justify-center flex-shrink-0 mt-0.5">
<Icon name="thunderstorm" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Kikuubo Market to Kololo</span>
<div className="flex items-center gap-1.5 font-body-sm text-body-sm text-secondary mt-0.5">
<span>Today 11:20</span>
<span className="w-1 h-1 rounded-full bg-secondary"></span>
<span className="text-primary font-bold">Rain Peak</span>
</div>
</div>
</div>
<div className="flex flex-col items-end flex-shrink-0">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">UGX 8,000</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-tertiary-container/15 text-tertiary font-bold mt-1">Paid</span>
</div>
</div>

<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center flex-shrink-0 mt-0.5">
<Icon name="apartment" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Ntinda Complex</span>
<div className="flex items-center gap-1.5 font-body-sm text-body-sm text-secondary mt-0.5">
<span>Today 09:30</span>
<span className="w-1 h-1 rounded-full bg-secondary"></span>
<span className="text-on-surface-variant font-medium">Standard</span>
</div>
</div>
</div>
<div className="flex flex-col items-end flex-shrink-0">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">UGX 7,000</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-tertiary-container/15 text-tertiary font-bold mt-1">Paid</span>
</div>
</div>
</div>
</div>

<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col gap-space-sm mb-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<Icon name="history" className="text-primary text-[22px]" />
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Recent Payouts</h3>
</div>
<span className="font-label-sm text-label-sm text-secondary font-bold">Direct to Mobile</span>
</div>
<div className="flex flex-col gap-2 mt-1">

<div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-9 h-9 rounded-full bg-primary-fixed text-on-primary-fixed font-bold flex items-center justify-center flex-shrink-0 text-[11px]">
            MTN
          </div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface font-bold truncate">MTN MoMo (*812)</span>
<span className="font-body-sm text-body-sm text-secondary truncate">TxID #MOM-9921 • Yesterday 20:00</span>
</div>
</div>
<div className="flex flex-col items-end flex-shrink-0">
<span className="font-label-lg text-label-lg text-on-surface font-extrabold">UGX 180,000</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold flex items-center gap-0.5 mt-0.5">
<Icon name="check_circle" className="text-[13px]" />
            Completed
          </span>
</div>
</div>

<div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-9 h-9 rounded-full bg-error-container text-on-error-container font-bold flex items-center justify-center flex-shrink-0 text-[10px]">
            AIRTEL
          </div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface font-bold truncate">Airtel Money (*401)</span>
<span className="font-body-sm text-body-sm text-secondary truncate">TxID #ART-3304 • 3 days ago</span>
</div>
</div>
<div className="flex flex-col items-end flex-shrink-0">
<span className="font-label-lg text-label-lg text-on-surface font-extrabold">UGX 150,000</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold flex items-center gap-0.5 mt-0.5">
<Icon name="check_circle" className="text-[13px]" />
            Completed
          </span>
</div>
</div>
</div>
</div>
</div>
</main>
<nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-1px_12px_rgba(0,0,0,0.06)]" data-active-classes="text-primary-container bg-surface-container-high font-bold"><div className="flex items-center justify-around h-20 px-space-xs max-w-lg mx-auto"><a className="flex-1 flex flex-col items-center justify-center min-h-[48px] py-space-xs rounded-xl text-on-surface-variant hover:text-on-surface transition-all" data-path="overview" href="#"><Icon name="dashboard" className="text-[26px]" /><span className="font-label-md text-label-md mt-0.5">Overview</span></a><a className="flex-1 flex flex-col items-center justify-center min-h-[48px] py-space-xs rounded-xl text-on-surface-variant hover:text-on-surface transition-all" data-path="deliveries" href="#"><Icon name="package_2" className="text-[26px]" /><span className="font-label-md text-label-md mt-0.5">Deliveries</span></a><a className="flex-1 flex flex-col items-center justify-center min-h-[48px] py-space-xs rounded-xl text-on-surface-variant hover:text-on-surface transition-all" data-path="rider-map" href="#"><Icon name="location_on" className="text-[26px]" /><span className="font-label-md text-label-md mt-0.5">Map</span></a><a aria-current="page" className="flex-1 flex flex-col items-center justify-center min-h-[48px] py-space-xs rounded-xl transition-all text-primary-container bg-surface-container-high font-bold" data-path="earnings" href="#"><Icon name="account_balance_wallet" className="text-[26px]" /><span className="font-label-md text-label-md mt-0.5">Earnings</span></a><a className="flex-1 flex flex-col items-center justify-center min-h-[48px] py-space-xs rounded-xl text-on-surface-variant hover:text-on-surface transition-all" data-path="profile" href="#"><Icon name="person" className="text-[26px]" /><span className="font-label-md text-label-md mt-0.5">Profile</span></a></div></nav>
    </div>
  );
};

export default EarningsSwiftcartRider;
