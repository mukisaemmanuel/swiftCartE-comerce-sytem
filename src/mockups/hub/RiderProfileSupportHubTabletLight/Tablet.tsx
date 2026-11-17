// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/hub/rider_profile_support_hub_tablet_light/code.html
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
      
      <main className="w-full pt-20 pb-24 bg-surface min-h-[calc(100vh-5rem)]"><div className="max-w-[834px] mx-auto px-space-lg py-space-md"><div className="flex flex-col w-full gap-space-lg pb-10">

<div className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-md shadow-sm">
<div className="flex flex-wrap items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md min-w-0">
<div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-tertiary-container/15 text-tertiary flex-shrink-0">
<Icon name="hub" className="text-[22px]" />
<span className="absolute -top-1 -right-1 flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-tertiary"></span>
</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-headline-sm text-headline-sm text-on-surface truncate">Nakasero Corridor Fast-Dispatch</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>Live Telemetric Sync
            </span>
</div>
<div className="flex items-center gap-space-md text-on-surface-variant font-label-md text-label-md mt-0.5">
<span className="flex items-center gap-1">
<Icon name="schedule" className="text-[16px] text-primary" />
              Active Shift: <strong className="text-on-surface font-bold">06h 42m</strong>
</span>
<span>•</span>
<span className="flex items-center gap-1">
<Icon name="speed" className="text-[16px] text-tertiary" />
              Telemetry Sync: 100% (Sub-50ms)
            </span>
</div>
</div>
</div>

<div className="flex items-center gap-space-md bg-surface-container-lowest px-space-md py-2 rounded-xl shadow-sm">
<div className="flex flex-col text-right">
<span className="font-label-md text-label-md text-on-surface flex items-center justify-end gap-1">
<Icon name="volume_up" className="text-[16px] text-primary" /> Loud Street Mode
          </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Amp 108dB sirens</span>
</div>
<button className="w-12 h-6 rounded-full bg-primary-container p-0.5 transition-colors relative flex items-center" id="streetModeToggle">
<span className="w-5 h-5 rounded-full bg-surface-container-lowest shadow-md transform translate-x-6 transition-transform" id="streetModeKnob"></span>
</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col md:flex-row gap-space-lg items-start md:items-center justify-between">
<div className="flex items-start gap-space-lg min-w-0">
<div className="relative flex-shrink-0">
<div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-primary to-primary-container text-on-primary flex items-center justify-center font-headline-lg text-headline-lg tracking-wider shadow-md">
          KB
        </div>
<div className="absolute -bottom-2 -right-1 bg-surface-container-lowest p-1 rounded-full shadow-sm">
<Icon name="verified" className="text-tertiary text-[20px]" />
</div>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-sm flex-wrap">
<h1 className="font-headline-md text-headline-md text-on-surface tracking-tight truncate whitespace-nowrap">Kizito Brian</h1>
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm uppercase tracking-wide">
<Icon name="military_tech" className="text-[14px]" /> Master Courier
          </span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
            NIN: CM890123456789A
          </span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 mt-2 text-on-surface-variant font-body-sm text-body-sm">
<div className="flex items-center gap-1.5">
<Icon name="call" className="text-[16px] text-outline" />
<span className="font-label-md text-label-md text-on-surface">+256 701 ••• 442</span>
<span className="text-on-surface-variant">(Airtel MoMo VIP)</span>
</div>
<div className="flex items-center gap-1.5">
<Icon name="two_wheeler" className="text-[16px] text-outline" />
<span className="text-on-surface font-semibold">Bajaj Boxer 125cc</span>
<span className="bg-surface-container px-1.5 py-0.25 rounded font-mono font-bold text-on-surface">UFE 219K</span>
</div>
<div className="flex items-center gap-1.5 sm:col-span-2">
<Icon name="location_on" className="text-[16px] text-tertiary" />
<span>Stage Assignment:</span>
<span className="text-on-surface font-semibold">Nakasero Bay Stage #04</span>
<span className="px-1.5 py-0.25 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-bold">Verified Member</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-space-sm w-full md:w-auto flex-shrink-0">
<div className="bg-surface-container-low p-space-md rounded-xl text-center min-w-[100px]">
<div className="flex items-center justify-center gap-0.5 text-primary">
<Icon name="star" className="text-[18px]" />
<span className="font-price-display text-price-display text-on-surface">4.92</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block mt-0.5">Rating (30d)</span>
</div>
<div className="bg-surface-container-low p-space-md rounded-xl text-center min-w-[100px]">
<span className="font-price-display text-price-display text-on-surface block">1,420</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block mt-0.5">Runs Done</span>
</div>
<div className="bg-surface-container-low p-space-md rounded-xl text-center min-w-[100px]">
<span className="font-price-display text-price-display text-tertiary block">99.4%</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block mt-0.5">OTP On-Time</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg items-start">

<div className="flex flex-col gap-space-lg w-full">

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<Icon name="verified_user" className="text-tertiary text-[24px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Regulatory &amp; Operating Permits</h2>
</div>
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-container/10 text-tertiary font-label-sm text-label-sm font-bold">
            All 3 Cleared
          </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Regulatory compliance validated with Kampala Capital City Authority (KCCA) &amp; Traffic Directorate.
        </p>

<div className="flex flex-col gap-space-sm pt-1">

<div className="flex items-start justify-between p-space-md bg-surface-container-low rounded-xl">
<div className="flex items-start gap-space-sm">
<Icon name="badge" className="text-tertiary text-[20px] mt-0.5" />
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Driving Permit (Class A Motorcycle)</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Uganda Security Track • Lic #UG-KLA-99218</span>
<span className="font-label-sm text-label-sm text-tertiary mt-0.5 font-bold">Verified valid through Nov 2026</span>
</div>
</div>
<Icon name="check_circle" className="text-tertiary text-[20px]" />
</div>

<div className="flex items-start justify-between p-space-md bg-surface-container-low rounded-xl">
<div className="flex items-start gap-space-sm">
<Icon name="health_and_safety" className="text-tertiary text-[20px] mt-0.5" />
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Third Party &amp; Commercial Transit Insurance</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Jubilee Allianz Insurance UG • Pol #JAI-C-44210</span>
<span className="font-label-sm text-label-sm text-tertiary mt-0.5 font-bold">Verified valid through March 2025</span>
</div>
</div>
<Icon name="check_circle" className="text-tertiary text-[20px]" />
</div>

<div className="flex items-start justify-between p-space-md bg-surface-container-low rounded-xl">
<div className="flex items-start gap-space-sm">
<Icon name="gavel" className="text-tertiary text-[20px] mt-0.5" />
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Stage Certificate &amp; Security Clearance</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Kampala Boda Association • Nakasero Division</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Endorsed by Chairman Ssebaggala William</span>
</div>
</div>
<Icon name="check_circle" className="text-tertiary text-[20px]" />
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<Icon name="inventory_2" className="text-primary text-[24px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Courier Hardware &amp; Safety Audit</h2>
</div>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
            Gate-Check: 07:15 Today
          </span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col items-center text-center">
<div className="w-10 h-10 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center mb-2">
<Icon name="arrow_left" className="text-[22px]" />
</div>
<span className="font-label-md text-label-md text-on-surface">Reflex XL Jacket</span>
<span className="font-body-sm text-body-sm text-tertiary font-bold mt-0.5">High-Vis Passed</span>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col items-center text-center">
<div className="w-10 h-10 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center mb-2">
<Icon name="deployed_code" className="text-[22px]" />
</div>
<span className="font-label-md text-label-md text-on-surface">Cargo Box #TB-09</span>
<span className="font-body-sm text-body-sm text-tertiary font-bold mt-0.5">Insulated &amp; Sealed</span>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col items-center text-center">
<div className="w-10 h-10 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center mb-2">
<Icon name="sports_motorsports" className="text-[22px]" />
</div>
<span className="font-label-md text-label-md text-on-surface">Dual-Visor Helmet</span>
<span className="font-body-sm text-body-sm text-tertiary font-bold mt-0.5">DOT Certified</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center gap-space-sm">
<Icon name="tune" className="text-secondary text-[24px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Terminal &amp; Dispatch Field Settings</h2>
</div>
<div className="flex flex-col gap-space-md">

<div className="flex items-center justify-between p-space-md bg-surface-container-low rounded-xl">
<div className="flex flex-col pr-space-md">
<span className="font-label-lg text-label-lg text-on-surface">High-Decibel Street Dispatch Alert</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Overrides device media volume during heavy traffic jam</span>
</div>
<button className="w-12 h-6 rounded-full bg-primary-container p-0.5 transition-colors relative flex items-center flex-shrink-0">
<span className="w-5 h-5 rounded-full bg-surface-container-lowest shadow-md transform translate-x-6 transition-transform"></span>
</button>
</div>

<div className="flex items-center justify-between p-space-md bg-surface-container-low rounded-xl">
<div className="flex flex-col pr-space-md">
<span className="font-label-lg text-label-lg text-on-surface">Auto-Assign Nakasero Express Corridor</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Instant push acceptance within 2.5km of Nakasero Bay</span>
</div>
<button className="w-12 h-6 rounded-full bg-primary-container p-0.5 transition-colors relative flex items-center flex-shrink-0">
<span className="w-5 h-5 rounded-full bg-surface-container-lowest shadow-md transform translate-x-6 transition-transform"></span>
</button>
</div>

<div className="p-space-md bg-surface-container-low rounded-xl flex items-center justify-between">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface">
<Icon name="offline_bolt" className="text-[22px]" />
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Offline Parcel &amp; Map reserve</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">24 Kampala corridors cached offline (142 MB)</span>
</div>
</div>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest font-label-md text-label-md text-primary shadow-sm hover:bg-surface-container transition-colors">
              Purge &amp; Refresh
            </button>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-space-lg w-full">

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<Icon name="crisis_alert" className="text-error text-[24px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Field Emergency &amp; Support Desks</h2>
</div>
<span className="font-label-sm text-label-sm text-error bg-error-container/40 px-2 py-0.5 rounded font-bold uppercase">Priority Channels</span>
</div>

<div className="p-space-md rounded-xl bg-error-container/20 flex flex-col sm:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-error text-on-error flex items-center justify-center flex-shrink-0 shadow-md">
<Icon name="emergency" className="text-[28px]" />
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-error-container">SafeBoda Rapid Response</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Medical, road hazard &amp; anti-theft squad</span>
</div>
</div>
<button className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-error text-on-error font-label-lg text-label-lg shadow-md hover:bg-error/90 active:scale-95 transition-all flex items-center justify-center gap-1.5 flex-shrink-0">
<Icon name="call" className="text-[18px]" /> SOS CALL
          </button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between">
<div>
<div className="flex items-center gap-1.5 text-primary mb-1">
<Icon name="support_agent" className="text-[18px]" />
<span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">SwiftOps Command</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface block">+256 800 220 800</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Toll-free rider escalation desk</span>
</div>
<a className="mt-3 inline-flex items-center justify-center gap-1 py-1.5 px-3 rounded-lg bg-surface-container-lowest font-label-md text-label-md text-on-surface shadow-sm hover:bg-surface-container transition-colors" href="tel:+256800220800">
<Icon name="call" className="text-[16px]" /> Direct Dial
            </a>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between">
<div>
<div className="flex items-center gap-1.5 text-secondary mb-1">
<Icon name="person_pin_circle" className="text-[18px]" />
<span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">Nakasero Stage Master</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface block">William Ssebaggala</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Boda Stage #04 Chief Coordinator</span>
</div>
<a className="mt-3 inline-flex items-center justify-center gap-1 py-1.5 px-3 rounded-lg bg-surface-container-lowest font-label-md text-label-md text-on-surface shadow-sm hover:bg-surface-container transition-colors" href="tel:+256772990112">
<Icon name="chat" className="text-[16px]" /> WhatsApp / Call
            </a>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<Icon name="report_problem" className="text-primary-container text-[24px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Escalations &amp; Incident Dispatch</h2>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Instant Automated Log</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Tap to trigger instant automated operational actions without holding up in telephone queues.
        </p>
<div className="flex flex-col gap-space-sm">

<button className="w-full text-left p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex items-center justify-between group">
<div className="flex items-center gap-space-md">
<div className="w-9 h-9 rounded-lg bg-surface-container-highest text-primary flex items-center justify-center flex-shrink-0">
<Icon name="phone_missed" className="text-[20px]" />
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface group-hover:text-primary transition-colors">Buyer Unreachable / Dead Phone</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Triggers automated 10-minute Grace Countdown &amp; SMS ping</span>
</div>
</div>
<Icon name="arrow_forward" className="text-outline group-hover:translate-x-1 transition-transform" />
</button>

<button className="w-full text-left p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex items-center justify-between group">
<div className="flex items-center gap-space-md">
<div className="w-9 h-9 rounded-lg bg-surface-container-highest text-primary flex items-center justify-center flex-shrink-0">
<Icon name="build" className="text-[20px]" />
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface group-hover:text-primary transition-colors">Boda Mechanical Breakdown</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Reroutes active delivery to nearest stage standby courier</span>
</div>
</div>
<Icon name="arrow_forward" className="text-outline group-hover:translate-x-1 transition-transform" />
</button>

<button className="w-full text-left p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex items-center justify-between group">
<div className="flex items-center gap-space-md">
<div className="w-9 h-9 rounded-lg bg-surface-container-highest text-primary flex items-center justify-center flex-shrink-0">
<Icon name="broken_image" className="text-[20px]" />
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface group-hover:text-primary transition-colors">Pre-Delivery Package Damage / Leaking</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Freezes buyer payment &amp; opens instant photographic claim</span>
</div>
</div>
<Icon name="arrow_forward" className="text-outline group-hover:translate-x-1 transition-transform" />
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center gap-space-sm">
<Icon name="menu_book" className="text-tertiary text-[24px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Payment Protocols &amp; Field Guide</h2>
</div>
<div className="flex flex-col gap-space-xs">

<div className="rounded-xl bg-surface-container-low overflow-hidden">
<button className="w-full p-space-md flex items-center justify-between text-left">
<span className="font-label-md text-label-md text-on-surface flex items-center gap-2">
<Icon name="lock_clock" className="text-tertiary text-[18px]" />
                How SwiftCart Protection Protects Your Rider Fee
              </span>
<Icon name="expand_more" className="text-outline transition-transform" />
</button>
<div className="hidden px-space-md pb-space-md font-body-sm text-body-sm text-on-surface-variant" id="acc1-content">
              Delivery payouts are held in secured payment backed by Pesapal &amp; released instantly to your Airtel/MTN wallet the moment the 4-digit buyer OTP is entered at destination.
            </div>
</div>

<div className="rounded-xl bg-surface-container-low overflow-hidden">
<button className="w-full p-space-md flex items-center justify-between text-left">
<span className="font-label-md text-label-md text-on-surface flex items-center gap-2">
<Icon name="verified" className="text-primary text-[18px]" />
                Cash-On-Delivery (COD) vs Payment Flow
              </span>
<Icon name="expand_more" className="text-outline transition-transform" />
</button>
<div className="hidden px-space-md pb-space-md font-body-sm text-body-sm text-on-surface-variant" id="acc2-content">
              Never collect paper cash unless the job order card explicitly highlights "Authorized Merchant Cash Collection". All standard SwiftCart orders are 100% cashless.
            </div>
</div>
</div>
</div>

<div className="pt-2">
<button className="w-full py-3.5 px-space-lg rounded-xl bg-surface-container-highest hover:bg-error/10 text-on-surface hover:text-error font-label-lg text-label-lg transition-all flex items-center justify-center gap-2 shadow-sm active:scale-[0.99]">
<Icon name="power_settings_new" className="text-[20px]" />
          Sign Out &amp; Close Shift (Terminal #UFE219K)
        </button>
</div>
</div>
</div>

<div className="fixed bottom-24 right-6 max-w-sm bg-inverse-surface text-inverse-on-surface px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 transform translate-y-32 opacity-0 transition-all z-50 pointer-events-none" id="toastNotification">
<Icon name="check_circle" className="text-tertiary-fixed text-[24px]" />
<span className="font-body-md text-body-md" id="toastMsg">Action updated successfully</span>
</div>

<div className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm hidden items-center justify-center p-4" id="sosModal">
<div className="bg-surface-container-lowest max-w-md w-full rounded-2xl p-space-lg shadow-2xl flex flex-col gap-space-md">
<div className="w-14 h-14 rounded-2xl bg-error/10 text-error flex items-center justify-center mx-auto">
<Icon name="crisis_alert" className="text-[36px]" />
</div>
<div className="text-center">
<h3 className="font-headline-md text-headline-md text-on-surface">Confirm SafeBoda SOS</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">
          This initiates an immediate emergency dispatch broadcast of your live GPS coordinates (UFE 219K) to the Quick Reaction Unit.
        </p>
</div>
<div className="flex flex-col gap-2 mt-2">
<a className="w-full py-3 rounded-xl bg-error text-on-error font-label-lg text-label-lg text-center shadow-md" href="tel:999">
          CALL EMERGENCY SQUAD
        </a>
<button className="w-full py-2.5 rounded-xl bg-surface-container-low font-label-md text-label-md text-on-surface">
          Cancel &amp; Stand Down
        </button>
</div>
</div>
</div>
</div>
</div></main>
    </div>
  );
};

export default Tablet;
