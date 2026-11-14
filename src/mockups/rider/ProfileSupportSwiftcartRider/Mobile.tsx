// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/rider/profile_support_swiftcart_rider/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface ProfileSupportSwiftcartRiderProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const ProfileSupportSwiftcartRider: React.FC<ProfileSupportSwiftcartRiderProps> = (props) => {
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
      
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-sm min-w-0"><img alt="SwiftCart" className="h-8 w-auto object-contain flex-shrink-0" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col min-w-0"><span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider truncate">SwiftCart Rider</span><h1 className="font-headline-sm text-headline-sm text-on-surface font-bold leading-none truncate">Profile</h1></div></div><div className="flex items-center gap-space-xs"><button aria-label="Toggle Online Status" className="min-h-[44px] px-space-md py-space-xs rounded-full bg-surface-container-high flex items-center gap-space-xs hover:bg-surface-container-highest transition-colors" type="button"><span className="h-3 w-3 rounded-full bg-tertiary-container shadow-[0_0_8px_rgba(0,165,114,0.6)] animate-pulse"></span><span className="font-label-md text-label-md text-on-surface font-bold">ONLINE</span></button><button aria-label="Notifications" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors relative" type="button"><Icon name="notifications" className="text-[24px]" /><span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-primary-container ring-2 ring-surface"></span></button><button aria-label="Toggle Dark/Light Mode" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" type="button" onClick={() => toggleTheme()}><Icon name="light_mode" className="text-[22px]" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex-1 w-full bg-surface pt-16 pb-24 px-margin"><div className="flex flex-col w-full gap-space-lg">

<section className="bg-surface-container-lowest rounded-xl shadow-md p-space-lg flex flex-col gap-space-md relative overflow-hidden">
<div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-primary-fixed-dim/20 pointer-events-none blur-2xl"></div>
<div className="flex items-start gap-space-md z-10">
<div className="relative shrink-0">
<img className="w-20 h-20 rounded-xl object-cover shadow-sm" data-alt="Close-up portrait of Kizito Brian, a cheerful professional Ugandan delivery rider in his late 20s wearing a clean matte black motorcycle helmet with visor up and a vibrant high-visibility SwiftCart branded orange safety vest, soft natural golden hour lighting in Kampala street background, highly crisp 8k photography, hyper-tactile, ultra-realistic." src="/images/2d56053bba3a1915.webp" />
<div className="absolute -bottom-1.5 -right-1.5 bg-tertiary-container text-on-tertiary px-1.5 py-0.5 rounded-full flex items-center shadow-sm">
<Icon name="verified" className="text-[14px]" />
</div>
</div>
<div className="flex flex-col min-w-0 flex-1">
<div className="flex items-center gap-space-xs flex-wrap">
<h2 className="font-headline-md text-headline-md text-on-surface font-extrabold truncate">Kizito Brian</h2>
</div>
<p className="font-label-md text-label-md text-on-surface-variant font-medium mt-0.5">#RDR-UG-4082 • Kampala Central Stage</p>
<div className="flex items-center gap-space-xs mt-space-xs flex-wrap">
<span className="inline-flex items-center gap-1 bg-surface-container-high px-2 py-0.5 rounded-full font-label-md text-label-md text-on-surface font-bold">
<Icon name="star" className="text-[16px] text-primary" />
            4.95
            <span className="font-body-sm text-body-sm text-secondary font-normal">(482)</span>
</span>
<span className="inline-flex items-center gap-1 bg-tertiary-fixed text-on-tertiary-fixed-variant px-2 py-0.5 rounded-full font-label-sm text-label-sm uppercase font-extrabold tracking-wide">
<Icon name="shield_with_heart" className="text-[14px]" />
            Top Tier Safe Rider
          </span>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md flex items-center justify-between gap-space-sm z-10">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0 text-on-surface">
<Icon name="two_wheeler" className="text-[24px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider truncate">Boda-Boda (Motorcycle)</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-black truncate">UEF 842X</span>
</div>
</div>
<span className="font-label-md text-label-md text-on-surface-variant bg-surface-container-highest px-2.5 py-1 rounded-lg shrink-0 font-semibold">
        Bajaj Boxer 150
      </span>
</div>
</section>

<section className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-extrabold flex items-center gap-1.5">
<Icon name="share_location" className="text-[16px] text-primary-container" />
        Operational Details
      </span>
<span className="inline-flex items-center gap-1.5 bg-tertiary-fixed text-on-tertiary-fixed px-2.5 py-0.5 rounded-full font-label-sm text-label-sm font-black">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
        Full-Time Active
      </span>
</div>
<div className="bg-surface-container rounded-xl p-space-md flex items-start gap-space-md">
<div className="w-9 h-9 rounded-lg bg-primary-fixed text-on-primary-fixed flex items-center justify-center shrink-0">
<Icon name="near_me" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<p className="font-label-sm text-label-sm text-secondary font-bold uppercase">Assigned Zone</p>
<p className="font-headline-sm text-headline-sm text-on-surface font-bold">Kampala Central</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Nakasero, Kololo, Lugogo, Kamwokya</p>
</div>
</div>
</section>

<section className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-extrabold flex items-center gap-1.5">
<Icon name="verified_user" className="text-[16px] text-tertiary" />
        Verification &amp; Compliance
      </span>
<span className="font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded font-bold">3 of 4 Valid</span>
</div>
<div className="flex flex-col gap-space-xs">

<div className="bg-surface-container-low rounded-xl p-space-md flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-md min-w-0">
<div className="w-8 h-8 rounded-lg bg-surface-container-highest text-on-surface-variant flex items-center justify-center shrink-0">
<Icon name="badge" className="text-[18px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">National ID (NIRA NIN)</span>
<span className="font-label-lg text-label-lg text-on-surface font-mono font-bold tracking-tight truncate">CM8902110294J</span>
</div>
</div>
<span className="inline-flex items-center gap-1 bg-tertiary-fixed text-on-tertiary-fixed-variant px-2 py-1 rounded-lg font-label-sm text-label-sm font-bold shrink-0">
<Icon name="check_circle" className="text-[14px]" />
          Verified
        </span>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-md min-w-0">
<div className="w-8 h-8 rounded-lg bg-surface-container-highest text-on-surface-variant flex items-center justify-center shrink-0">
<Icon name="sports_motorsports" className="text-[18px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Riding Permit (Class A)</span>
<span className="font-body-sm text-body-sm text-on-surface font-semibold truncate">Valid until 14 Nov 2026</span>
</div>
</div>
<span className="inline-flex items-center gap-1 bg-tertiary-fixed text-on-tertiary-fixed-variant px-2 py-1 rounded-lg font-label-sm text-label-sm font-bold shrink-0">
<Icon name="check_circle" className="text-[14px]" />
          Verified
        </span>
</div>

<button className="w-full text-left bg-error-container text-on-error-container rounded-xl p-space-md flex items-center justify-between gap-space-sm active:scale-[0.99] transition-transform" type="button">
<div className="flex items-center gap-space-md min-w-0">
<div className="w-8 h-8 rounded-lg bg-error text-on-error flex items-center justify-center shrink-0 shadow-sm">
<Icon name="warning" className="text-[18px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm font-extrabold uppercase tracking-wide">Third-Party Insurance</span>
<span className="font-body-sm text-body-sm font-bold truncate">Expiring in 18 days • Tap to Renew</span>
</div>
</div>
<div className="flex items-center gap-1 bg-surface-container-lowest text-error px-2.5 py-1.5 rounded-lg shadow-sm font-label-md text-label-md font-extrabold shrink-0">
<span>Renew</span>
<Icon name="chevron_right" className="text-[16px]" />
</div>
</button>

<div className="bg-surface-container-low rounded-xl p-space-md flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-md min-w-0">
<div className="w-8 h-8 rounded-lg bg-surface-container-highest text-on-surface-variant flex items-center justify-center shrink-0">
<Icon name="description" className="text-[18px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Stage Recommendation</span>
<span className="font-body-sm text-body-sm text-on-surface truncate">Nakasero Stage Chairman</span>
</div>
</div>
<span className="inline-flex items-center gap-1 bg-tertiary-fixed text-on-tertiary-fixed-variant px-2 py-1 rounded-lg font-label-sm text-label-sm font-bold shrink-0">
<Icon name="check_circle" className="text-[14px]" />
          Verified
        </span>
</div>
</div>
</section>

<section className="flex flex-col gap-space-sm">
<div className="px-space-xs">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-extrabold flex items-center gap-1.5">
<Icon name="headset_mic" className="text-[16px] text-primary" />
        Rider Support &amp; Emergency Desk
      </span>
</div>

<a className="w-full min-h-[58px] rounded-xl bg-inverse-surface text-inverse-on-surface px-space-lg py-space-md flex items-center justify-between shadow-md active:scale-[0.98] transition-all" href="tel:0800220800">
<div className="flex items-center gap-space-md min-w-0">
<div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0 shadow-sm">
<Icon name="call" className="text-[22px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-tertiary-fixed uppercase font-black tracking-wider">Toll-Free Hotline (Uganda)</span>
<span className="font-headline-sm text-headline-sm font-bold tracking-tight">0800 220 800</span>
</div>
</div>
<Icon name="arrow_forward" className="text-[24px] text-on-surface-variant" />
</a>

<a className="w-full min-h-[58px] rounded-xl bg-surface-container-lowest text-on-surface px-space-lg py-space-md flex items-center justify-between shadow-sm active:scale-[0.98] transition-all" href="https://wa.me/256700123456" rel="noopener noreferrer" target="_blank">
<div className="flex items-center gap-space-md min-w-0">
<div className="w-10 h-10 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center shrink-0 shadow-sm">
<Icon name="chat" className="text-[22px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">WhatsApp Dispatch Desk</span>
<span className="font-label-lg text-label-lg font-bold truncate">+256 700 123 456</span>
</div>
</div>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed-variant px-2.5 py-1 rounded-full font-bold">
        Online
      </span>
</a>

<button className="w-full min-h-[56px] rounded-xl bg-primary text-on-primary px-space-lg py-space-md flex items-center justify-between shadow-md active:scale-[0.98] transition-all" id="emergencyReportBtn" type="button">
<div className="flex items-center gap-space-md min-w-0">
<div className="w-10 h-10 rounded-full bg-on-primary text-primary flex items-center justify-center shrink-0">
<Icon name="emergency" className="text-[22px]" />
</div>
<div className="flex flex-col text-left min-w-0">
<span className="font-label-lg text-label-lg font-extrabold truncate">Report Issue / Emergency</span>
<span className="font-body-sm text-body-sm text-primary-fixed truncate">Accident • Mechanical breakdown • Fuel help</span>
</div>
</div>
<Icon name="chevron_right" className="text-[24px]" />
</button>
</section>

<section className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col gap-space-md">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-extrabold">Preferences &amp; System</span>

<div className="flex items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md min-w-0">
<div className="w-9 h-9 rounded-lg bg-surface-container-high text-on-surface flex items-center justify-center shrink-0">
<Icon name="notifications_active" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface font-bold">High-Fare Priority Alerts</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Instant audio chime for peak deliveries</span>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer shrink-0">
<input checked={true} className="sr-only peer" id="highFareToggle" type="checkbox" />
<div className="w-12 h-7 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>

<div className="flex items-center justify-between py-space-xs text-on-surface-variant">
<span className="font-body-sm text-body-sm font-medium">Build Version</span>
<span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded font-mono font-bold text-on-surface">v2.4.1 (UG-PROD)</span>
</div>

<button className="w-full min-h-[48px] rounded-xl bg-error-container text-on-error-container font-label-lg text-label-lg font-extrabold flex items-center justify-center gap-space-sm active:scale-[0.98] transition-transform mt-space-xs" id="signOutBtn" type="button">
<Icon name="logout" className="text-[20px]" />
      Sign Out of Rider Account
    </button>
</section>
</div>
</main>
<nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-1px_12px_rgba(0,0,0,0.06)]" data-active-classes="text-primary-container bg-surface-container-high font-bold"><div className="flex items-center justify-around h-20 px-space-xs max-w-lg mx-auto"><a className="flex-1 flex flex-col items-center justify-center min-h-[48px] py-space-xs rounded-xl text-on-surface-variant hover:text-on-surface transition-all" data-path="overview" href="#"><Icon name="dashboard" className="text-[26px]" /><span className="font-label-md text-label-md mt-0.5">Overview</span></a><a className="flex-1 flex flex-col items-center justify-center min-h-[48px] py-space-xs rounded-xl text-on-surface-variant hover:text-on-surface transition-all" data-path="deliveries" href="#"><Icon name="package_2" className="text-[26px]" /><span className="font-label-md text-label-md mt-0.5">Deliveries</span></a><a className="flex-1 flex flex-col items-center justify-center min-h-[48px] py-space-xs rounded-xl text-on-surface-variant hover:text-on-surface transition-all" data-path="rider-map" href="#"><Icon name="location_on" className="text-[26px]" /><span className="font-label-md text-label-md mt-0.5">Map</span></a><a className="flex-1 flex flex-col items-center justify-center min-h-[48px] py-space-xs rounded-xl text-on-surface-variant hover:text-on-surface transition-all" data-path="earnings" href="#"><Icon name="account_balance_wallet" className="text-[26px]" /><span className="font-label-md text-label-md mt-0.5">Earnings</span></a><a aria-current="page" className="flex-1 flex flex-col items-center justify-center min-h-[48px] py-space-xs rounded-xl transition-all text-primary-container bg-surface-container-high font-bold" data-path="profile" href="#"><Icon name="person" className="text-[26px]" /><span className="font-label-md text-label-md mt-0.5">Profile</span></a></div></nav>
    </div>
  );
};

export default ProfileSupportSwiftcartRider;
