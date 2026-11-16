// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/admin/locked_dispatches_pin_overrides_swiftcart_desktop_light/code.html
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
      
      <div className="pl-0"><main className="relative pt-16 bg-surface min-h-screen px-space-xl py-space-lg"><div className="flex flex-col w-full space-y-space-lg">

<div className="flex flex-col gap-space-sm">
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
<span className="hover:text-primary transition-colors cursor-pointer">Admin Operations</span>
<Icon name="chevron_right" className="text-[14px]" />
<span className="text-primary font-bold">Locked Dispatches &amp; PIN Overrides</span>
<Icon name="chevron_right" className="text-[14px]" />
<span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm">Escrow Deadlock Protocol v2.4</span>
</div>
<div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md">
<div>
<div className="flex items-center gap-space-sm">
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Locked Dispatches &amp; Supervisory PIN Overrides</h1>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold uppercase animate-pulse">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span> Active Deadlocks
          </span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-4xl mt-1">
          Emergency resolution console for deadlocked orders where 6-digit delivery code verification has failed, buyer phone is unreachable, or tamper seals are disputed at customer doorstep.
        </p>
</div>

<div className="flex items-center gap-space-sm shrink-0">
<button className="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded-xl bg-surface-container-lowest text-on-surface shadow-[0_2px_8px_rgba(14,27,77,0.04)] hover:bg-surface-container-high transition-all font-label-lg text-label-lg" type="button">
<Icon name="menu_book" className="text-[18px] text-primary" />
<span>Emergency Handover Protocol Guide</span>
</button>
<button className="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded-xl bg-surface-container-lowest text-on-surface shadow-[0_2px_8px_rgba(14,27,77,0.04)] hover:bg-surface-container-high transition-all font-label-lg text-label-lg" type="button">
<Icon name="download" className="text-[18px] text-secondary" />
<span>Export Exceptions Audit Log</span>
</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-space-md">
<div className="flex flex-wrap items-center gap-space-xs">
<button className="px-space-md py-1.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm shadow-[0_2px_6px_rgba(174,42,0,0.25)] flex items-center gap-1.5 transition-transform active:scale-95">
<span>All Exceptions</span>
<span className="px-1.5 py-0.2 bg-on-primary/20 rounded-full font-bold">6</span>
</button>
<button className="px-space-md py-1.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm hover:bg-surface-container-highest transition-colors flex items-center gap-1.5">
<span>Buyer Phone Dead / Unreachable</span>
<span className="px-1.5 py-0.2 bg-surface-container text-on-surface-variant rounded-full font-bold">3</span>
</button>
<button className="px-space-md py-1.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm hover:bg-surface-container-highest transition-colors flex items-center gap-1.5">
<span>Wrong Code Entered 3x</span>
<span className="px-1.5 py-0.2 bg-surface-container text-on-surface-variant rounded-full font-bold">2</span>
</button>
<button className="px-space-md py-1.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm hover:bg-surface-container-highest transition-colors flex items-center gap-1.5">
<span>Tamper Seal Disputed</span>
<span className="px-1.5 py-0.2 bg-surface-container text-on-surface-variant rounded-full font-bold">1</span>
</button>
</div>
<div className="relative w-full md:w-80 shrink-0">
<Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" />
<input className="w-full h-9 pl-9 pr-3 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest transition-all" placeholder="Search order ref, courier ID, buyer name..." type="text" />
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] relative overflow-hidden flex flex-col justify-between">
<div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/5 rounded-full blur-xl pointer-events-none"></div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Currently Locked Dispatches</span>
<div className="w-8 h-8 rounded-lg bg-primary-fixed text-on-primary-fixed flex items-center justify-center">
<Icon name="lock" className="text-[18px]" />
</div>
</div>
<div className="mt-space-md">
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-primary leading-none">6</span>
<span className="font-label-lg text-label-lg text-on-surface">Orders</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-error shrink-0"></span>
<span className="whitespace-nowrap">UGX 2,420,000 escrow frozen at doorstep</span>
</p>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between font-label-sm text-label-sm text-error">
<span>+2 within last 30 mins</span>
<Icon name="priority_high" className="text-[16px]" />
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] relative overflow-hidden flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Avg Lock Resolution Time</span>
<div className="w-8 h-8 rounded-lg bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center">
<Icon name="timer" className="text-[18px]" />
</div>
</div>
<div className="mt-space-md">
<div className="flex items-baseline gap-1.5">
<span className="font-headline-lg text-headline-lg text-on-surface leading-none">14.2</span>
<span className="font-label-lg text-label-lg text-on-surface-variant">Minutes</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary shrink-0"></span>
<span>Target &lt; 20 min before return protocol</span>
</p>
</div>
<div className="mt-space-sm pt-space-xs">
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full w-[71%]"></div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] relative overflow-hidden flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Handover Overrides Today</span>
<div className="w-8 h-8 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center">
<Icon name="verified_user" className="text-[18px]" />
</div>
</div>
<div className="mt-space-md">
<div className="flex items-baseline gap-1.5">
<span className="font-headline-lg text-headline-lg text-tertiary leading-none">18</span>
<span className="font-label-lg text-label-lg text-on-surface">Authorized</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5">
          All cryptographically logged to Super Admin audit ledger
        </p>
</div>
<div className="mt-space-sm pt-space-xs flex items-center gap-1 text-tertiary font-label-sm text-label-sm">
<Icon name="check_circle" className="text-[16px]" />
<span>100% Identity Sign-Off Verified</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] relative overflow-hidden flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Return to Hub Triggered</span>
<div className="w-8 h-8 rounded-lg bg-surface-container-highest text-on-surface flex items-center justify-center">
<Icon name="u_turn_left" className="text-[18px]" />
</div>
</div>
<div className="mt-space-md">
<div className="flex items-baseline gap-1.5">
<span className="font-headline-lg text-headline-lg text-on-surface leading-none">2</span>
<span className="font-label-lg text-label-lg text-on-surface-variant">Orders</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5">
          Tamper inspection scheduled at Nakasero Hub
        </p>
</div>
<div className="mt-space-sm pt-space-xs flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
<Icon name="inventory_2" className="text-[16px]" />
<span>Chain of custody locked</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<div className="lg:col-span-5 flex flex-col gap-space-md">
<div className="flex items-center justify-between px-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface">Doorstep Exceptions</span>
<span className="px-2 py-0.5 rounded-full bg-error text-on-error font-label-sm text-label-sm font-bold">4 Live In Queue</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<Icon name="sync" className="text-[14px] text-tertiary" /> Live Polling
        </span>
</div>

<div className="space-y-space-sm">

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-[0_4px_16px_rgba(218,55,0,0.12)] bg-gradient-to-r from-primary-fixed/20 via-surface-container-lowest to-surface-container-lowest relative cursor-pointer transition-all hover:scale-[1.01]">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="lock" className="text-[12px]" />
<span>Code Locked 3x</span>
</span>
<span className="font-label-sm text-label-sm text-primary font-bold">#SC-98235</span>
</div>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-error font-bold px-2 py-0.5 rounded bg-error/10">
<Icon name="hourglass_top" className="text-[14px]" />
<span>14 mins idle</span>
</div>
</div>
<div className="mt-space-sm">
<h3 className="font-headline-sm text-headline-sm text-on-surface leading-snug">Nike Air Force 1 '07 All White</h3>
<div className="flex items-center gap-2 mt-0.5">
<span className="font-label-lg text-label-lg text-on-surface font-extrabold whitespace-nowrap">UGX 120,000</span>
<span className="text-on-surface-variant text-[11px]">• Escrow Active</span>
</div>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container-low p-space-sm rounded-lg space-y-1">
<div className="flex items-center justify-between text-[13px]">
<span className="text-on-surface-variant flex items-center gap-1">
<Icon name="person" className="text-[15px] text-secondary" /> Buyer:
              </span>
<span className="font-bold text-on-surface">Denis Mukasa (Bugolobi Flats)</span>
</div>
<div className="flex items-center justify-between text-[13px]">
<span className="text-on-surface-variant flex items-center gap-1">
<Icon name="two_wheeler" className="text-[15px] text-primary" /> Courier:
              </span>
<span className="text-on-surface">Brian K. (SafeBoda #UG-882)</span>
</div>
<div className="flex items-center gap-1 text-[11px] text-error font-semibold pt-0.5">
<Icon name="phonelink_erase" className="text-[13px]" />
<span>Buyer phone dead at doorstep • Awaiting Supervisor PIN</span>
</div>
</div>
<div className="mt-space-sm flex items-center justify-between pt-1">
<span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider flex items-center gap-1">
              Active Docket In Workbench
              <Icon name="arrow_forward" className="text-[16px]" />
</span>
<span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] hover:bg-surface-container-low transition-all cursor-pointer">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">
                Proxy Handover
              </span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold">#SC-98229</span>
</div>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant px-2 py-0.5 rounded bg-surface-container">
<Icon name="schedule" className="text-[14px]" />
<span>9 mins wait</span>
</div>
</div>
<div className="mt-space-sm">
<h3 className="font-label-lg text-label-lg text-on-surface">Samsung 23L Solo Microwave</h3>
<div className="flex items-center gap-2 mt-0.5">
<span className="font-label-md text-label-md text-on-surface font-bold whitespace-nowrap">UGX 420,000</span>
<span className="text-on-surface-variant text-[11px]">• MTN MoMo Paid</span>
</div>
</div>
<div className="mt-space-sm text-[12px] text-on-surface-variant space-y-0.5">
<div><strong className="text-on-surface">Recipient:</strong> Sibling receiving, customer on flight</div>
<div><strong className="text-on-surface">Location:</strong> Ntinda Ministers Village (Denis O.)</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] hover:bg-surface-container-low transition-all cursor-pointer">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="shield" className="text-[12px] text-error" />
<span>Seal Scratched</span>
</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold">#SC-98224</span>
</div>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant px-2 py-0.5 rounded bg-surface-container">
<Icon name="schedule" className="text-[14px]" />
<span>6 mins wait</span>
</div>
</div>
<div className="mt-space-sm">
<h3 className="font-label-lg text-label-lg text-on-surface">Anker SoundCore Life Q20i</h3>
<div className="flex items-center gap-2 mt-0.5">
<span className="font-label-md text-label-md text-on-surface font-bold whitespace-nowrap">UGX 195,000</span>
<span className="text-on-surface-variant text-[11px]">• Airtel Money Paid</span>
</div>
</div>
<div className="mt-space-sm text-[12px] text-on-surface-variant space-y-0.5">
<div><strong className="text-on-surface">Dispute:</strong> Outer polybag tear at Makerere Main Gate</div>
<div><strong className="text-on-surface">Courier:</strong> Ronald T. awaiting physical check approval</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] hover:bg-surface-container-low transition-all cursor-pointer">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-bold">
                Network Dropped
              </span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold">#SC-98218</span>
</div>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-error font-bold px-2 py-0.5 rounded bg-error/10">
<Icon name="warning" className="text-[14px]" />
<span>18 mins idle</span>
</div>
</div>
<div className="mt-space-sm">
<h3 className="font-label-lg text-label-lg text-on-surface">Oraimo Watch 4 Plus BT Calling</h3>
<div className="flex items-center gap-2 mt-0.5">
<span className="font-label-md text-label-md text-on-surface font-bold whitespace-nowrap">UGX 115,000</span>
<span className="text-on-surface-variant text-[11px]">• Escrow Protected</span>
</div>
</div>
<div className="mt-space-sm text-[12px] text-on-surface-variant space-y-0.5">
<div><strong className="text-on-surface">Courier:</strong> Patrick M. at Entebbe Road Shell</div>
<div><strong className="text-on-surface">Action:</strong> 2 mins left before automatic abort rule</div>
</div>
</div>
</div>

<div className="bg-surface-container p-space-md rounded-xl flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<Icon name="support_agent" className="text-primary text-[24px]" />
<div>
<div className="font-label-md text-label-md text-on-surface font-bold">Courier Operations Direct Line</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">+256 800 220 330 (Kampala Central Dispatch)</div>
</div>
</div>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-primary font-label-sm text-label-sm font-bold hover:bg-primary hover:text-on-primary transition-all" type="button">
          Patch In
        </button>
</div>
</div>

<div className="lg:col-span-7 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest rounded-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] overflow-hidden">

<div className="bg-surface-container-high px-space-lg py-space-md flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="w-3 h-3 rounded-full bg-error"></span>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface leading-tight">Exception Docket #EXC-98235</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Linked to SwiftCart Master Order #SC-98235</span>
</div>
</div>
<div className="flex items-center gap-2">
<span className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="lock_clock" className="text-[14px] text-tertiary" />
<span>Vault Cleared Escrow</span>
</span>
<span className="px-2 py-1 rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold">
              Level 3 Supervisor Clearance
            </span>
</div>
</div>
<div className="p-space-lg space-y-space-lg">

<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">

<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider flex items-center gap-1">
<Icon name="person" className="text-[14px]" /> Buyer On Scene
                </span>
<h4 className="font-label-lg text-label-lg text-on-surface mt-1 font-bold">Denis Mukasa</h4>
<div className="font-body-sm text-body-sm text-on-surface-variant font-mono mt-0.5">+256 701 ••• 882</div>
<div className="font-body-sm text-body-sm text-on-surface mt-2 flex items-start gap-1">
<Icon name="location_on" className="text-[14px] text-on-surface-variant shrink-0 mt-0.5" />
<span className="line-clamp-2">Block 4, Flat 12, Bugolobi Flats, Kampala</span>
</div>
</div>
<div className="mt-space-sm pt-space-xs flex items-center gap-1 text-[11px] text-tertiary font-bold">
<Icon name="verified" className="text-[14px]" /> 14 prior verified deliveries
              </div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider flex items-center gap-1">
<Icon name="moped" className="text-[14px]" /> Active Courier
                </span>
<h4 className="font-label-lg text-label-lg text-on-surface mt-1 font-bold">Brian Kizito</h4>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">SafeBoda #UG-882 (Plate UEF 842X)</div>
<div className="font-body-sm text-body-sm text-on-surface mt-2 flex items-center gap-1">
<Icon name="near_me" className="text-[14px] text-tertiary" />
<span className="font-bold text-tertiary">GPS match (11m radius)</span>
</div>
</div>
<div className="mt-space-sm pt-space-xs flex items-center gap-1 text-[11px] text-on-surface-variant font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Heartbeat timestamp 42s ago
              </div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider flex items-center gap-1">
<Icon name="account_balance" className="text-[14px]" /> Escrow Deposit
                </span>
<div className="font-headline-sm text-headline-sm text-on-surface mt-1 font-extrabold whitespace-nowrap">UGX 120,000</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Nike Air Force 1 '07 (Size 42)</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-2 text-[11px]">
                  Vendor: Kikuubo Sneaker Shop (#VEN-409)
                </div>
</div>
<div className="mt-space-sm pt-space-xs flex items-center gap-1 text-[11px] text-tertiary font-bold">
<Icon name="security" className="text-[14px]" /> Bank of Uganda Escrow Tier
              </div>
</div>
</div>

<div className="bg-error-container/20 p-space-md rounded-xl flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-error font-bold flex items-center gap-1.5">
<Icon name="gpp_maybe" className="text-[18px]" /> Incident Root Cause &amp; Telemetry
              </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Triggered at 15:42:19 EAT</span>
</div>
<p className="font-body-md text-body-md text-on-surface">
              Customer entered mismatched 6-digit delivery code 3 consecutive times. Buyer's smartphone subsequently shut down due to depleted battery. Customer is physically present at the registered coordinates with physical national ID matching the order recipient name.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface font-bold uppercase tracking-wider flex items-center gap-1">
<Icon name="photo_camera" className="text-[16px] text-primary" /> Courier Upload: Doorstep Proof
                </span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Live NIRA Check</span>
</div>
<div className="relative rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(14,27,77,0.04)] aspect-video bg-surface-container group">
<img className="w-full h-full object-cover" data-alt="Clear high quality photo of a young Ugandan customer in Bugolobi Kampala holding an authentic Ugandan National Identification Card with NIN CM88019482 clearly visible beside a sealed orange and white SwiftCart security tamper-evident courier bag. Sunlight reflects off the intact serial holographic seal SWIFT-BAG-88190." src="/images/03b62ee25ddcf74a.webp" />
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-space-sm text-white">
<div className="font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="check_circle" className="text-[14px] text-tertiary" />
<span>NIN: CM88019482 • Polybag Seal #SWIFT-BAG-88190 Intact</span>
</div>
<span className="text-[10px] text-white/80">Captured via Courier App v4.1 • Exif geo-tagged Bugolobi Kampala</span>
</div>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface font-bold uppercase tracking-wider flex items-center gap-1">
<Icon name="explore" className="text-[16px] text-secondary" /> Doorstep Proximity Check
                </span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">0.3198° N, 32.6174° E</span>
</div>
<div className="relative rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(14,27,77,0.04)] aspect-video bg-surface-container" data-location="Bugolobi Flats, Kampala, Uganda" style={{"backgroundImage":"url('/images/dd9d0688d12a3b89.webp')"}}>
<div className="absolute top-2 left-2 px-2 py-1 rounded bg-surface/90 backdrop-blur text-on-surface font-label-sm text-label-sm font-bold flex items-center gap-1 shadow-sm">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
<span>Courier Inside Geofence (11m from unit)</span>
</div>
<div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-inverse-surface/80 text-inverse-on-surface font-label-sm text-label-sm">
                  Bugolobi Sector 4
                </div>
</div>
</div>
</div>

<div className="bg-surface-container-high/60 p-space-lg rounded-xl space-y-space-md">
<div className="flex items-center justify-between">
<h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
<Icon name="admin_panel_settings" className="text-primary text-[22px]" />
<span>Supervisory Resolution Deck</span>
</h3>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Super Admin Token Active</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="space-y-1.5">
<label className="block font-label-md text-label-md text-on-surface font-bold">
                  Supervisory Master Override PIN
                </label>
<div className="relative">
<input className="w-full h-12 px-space-md rounded-xl bg-surface-container-lowest text-on-surface font-headline-sm text-headline-sm tracking-[0.5em] text-center focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" maxLength={6} placeholder="······" type="password" value="••••••" />
<Icon name="fingerprint" className="absolute right-3 top-1/2 -translate-y-1/2 text-tertiary text-[20px]" />
</div>
<span className="block font-body-sm text-body-sm text-on-surface-variant text-[11px]">
                  Requires active FIDO2 biometric or 6-digit cryptographic hardware token
                </span>
</div>

<div className="space-y-1.5">
<label className="block font-label-md text-label-md text-on-surface font-bold">
                  Mandatory Audit Reason (BOU &amp; NIRA Requirement)
                </label>
<div className="relative">
<select className="w-full h-12 px-space-md pr-10 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary shadow-sm">
<option selected={true}>Customer Phone Battery Dead / Identity Verified In Person via National ID Card (NIRA)</option>
<option>Telecom SMS Gateway Outage (Network Failure)</option>
<option>Authorized Physical Proxy Handover (Next of Kin Verified)</option>
<option>Disputed Tamper Seal Re-Inspected &amp; Cleared by Customer</option>
</select>
<Icon name="arrow_drop_down" className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[20px]" />
</div>
<span className="block font-body-sm text-body-sm text-on-surface-variant text-[11px]">
                  Logged permanently under supervisor certificate Kizito Ronald
                </span>
</div>
</div>

<div className="space-y-1.5">
<label className="block font-label-md text-label-md text-on-surface font-bold">
                Internal Case Notes &amp; Identity Cross-Reference
              </label>
<textarea className="w-full p-space-md rounded-xl bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm resize-none" rows={2}>Recipient Denis Mukasa verified via NIRA NIN CM88019482. Physical box and security seal SWIFT-BAG-88190 pristine. Override authorized by Kizito Ronald (Super Admin).</textarea>
</div>

<div className="pt-space-xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-space-md">
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm">

<button className="h-12 px-space-lg rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] text-on-primary font-label-lg text-label-lg shadow-[0_4px_14px_rgba(218,55,0,0.30)] hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-space-xs font-bold" type="button">
<Icon name="key" className="text-[20px]" />
<span>Authorize Supervisory PIN Override &amp; Release Escrow</span>
</button>

<button className="h-12 px-space-md rounded-xl bg-surface-container-highest text-on-surface font-label-lg text-label-lg hover:bg-error-container hover:text-on-error-container transition-all flex items-center justify-center gap-space-xs" type="button">
<Icon name="keyboard_return" className="text-[18px]" />
<span>Abort &amp; Return to Nakasero Hub</span>
</button>
</div>

<button className="h-12 px-space-md rounded-xl bg-surface-container-lowest text-secondary font-label-md text-label-md hover:bg-surface-container transition-all flex items-center justify-center gap-1.5" type="button">
<Icon name="call" className="text-[18px]" />
<span>Call Alternate Phone</span>
</button>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex items-start gap-space-sm text-[12px] text-on-surface-variant">
<Icon name="verified_user" className="text-secondary text-[20px] shrink-0 mt-0.5" />
<div className="space-y-0.5">
<span className="font-bold text-on-surface">Legal &amp; Regulatory Escrow Notice:</span>
<p className="whitespace-nowrap">
                Action will be permanently recorded on immutable audit ledger under Officer Kizito Ronald (ID: ADM-04). Escrow of UGX 120,000 will settle to Kikuubo Sneaker Shop within normal 18:00 EAT clearing cycle upon PIN issuance. National Identification Registry cross-reference CM88019482 archived for 7 years under Ugandan Electronic Transactions Act 2011.
              </p>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex items-center justify-between gap-space-md">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-8 h-8 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shrink-0">
<Icon name="history_toggle_off" className="text-[18px]" />
</div>
<div className="truncate">
<div className="font-label-sm text-label-sm text-on-surface font-bold truncate">Prior Override: Order #SC-98188 Released at Kololo Hill</div>
<div className="font-body-sm text-body-sm text-on-surface-variant text-[11px] truncate whitespace-nowrap">Cleared by Supervisor Ronald K. via MTN OTP fallback • Escrow UGX 85,000</div>
</div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant shrink-0">11 mins ago</span>
</div>
</div>
</div>
</div>
</main></div>
    </div>
  );
};

export default Desktop;
