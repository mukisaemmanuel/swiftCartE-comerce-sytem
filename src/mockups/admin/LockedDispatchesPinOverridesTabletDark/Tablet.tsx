// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/admin/locked_dispatches_pin_overrides_tablet_dark/code.html
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
      
      <div className="pl-[72px]"><main className="w-full pt-16 bg-surface-dark min-h-screen"><div className="flex flex-col w-full">

<section className="w-full px-4 sm:px-6 pt-5 pb-4 bg-surface-container-lowest">
<div className="flex flex-col gap-3">

<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<span className="text-tertiary">ESCROW PROTOCOL</span>
<span>/</span>
<span>DISPATCH ENFORCEMENT</span>
<span>/</span>
<span className="text-primary font-bold">LOCKED OVERRIDES</span>
</div>
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-danger-penalty/15 text-danger-penalty font-label-sm text-label-sm font-bold uppercase tracking-wider">
<span className="w-2 h-2 rounded-full bg-danger-penalty animate-pulse"></span>
          Level-2 Root Clearance
        </div>
</div>

<div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
<div>
<h1 className="font-headline-md text-headline-md sm:font-headline-lg sm:text-headline-lg text-on-surface tracking-tight leading-tight">
            Locked Dispatches &amp; PIN Overrides
          </h1>
<p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
            Security lockout clearing for failed courier-buyer handovers &amp; fraud isolation.
          </p>
</div>
<div className="flex items-center gap-2 self-start md:self-auto">
<span className="font-code-display text-label-md text-on-surface-variant px-3 py-1.5 rounded-lg bg-surface-container-low font-bold">
            NODE // KLA-CENTRAL-04
          </span>
</div>
</div>
</div>
</section>

<section className="w-full px-4 sm:px-6 py-2.5 bg-danger-penalty/10">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2.5 min-w-0">
<Icon name="emergency_home" className="text-danger-penalty text-[20px] shrink-0" />
<p className="font-label-md text-label-md text-on-surface truncate">
<span className="text-danger-penalty font-bold uppercase">Active Lockouts (4 Orders)</span>
<span className="text-on-surface-variant mx-1.5">•</span>
<span>2 couriers currently idling on-site with customers outside secure perimeter</span>
</p>
</div>
<div className="flex items-center gap-2 shrink-0">
<span className="w-2 h-2 rounded-full bg-amber-warning animate-ping"></span>
<span className="font-code-display text-label-sm text-amber-warning font-bold hidden sm:inline">LIVE TELEMETRY STREAM</span>
</div>
</div>
</section>

<section className="w-full px-4 sm:px-6 py-4">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-3">

<div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col justify-between shadow-sm">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wide">Today Handovers</span>
<Icon name="verified" className="text-[18px]" />
</div>
<div className="mt-2 flex items-baseline gap-2">
<span className="font-price-display text-price-display text-on-surface font-extrabold tracking-tight">1,420</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">+18.4%</span>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded-full mt-2.5 overflow-hidden">
<div className="bg-tertiary h-full rounded-full" style={{"width":"82%"}}></div>
</div>
</div>

<div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col justify-between shadow-sm">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wide">Lockout Rate</span>
<Icon name="warning" className="text-[18px] text-amber-warning" />
</div>
<div className="mt-2 flex items-baseline gap-2">
<span className="font-price-display text-price-display text-on-surface font-extrabold tracking-tight">0.28%</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Safe (&lt;0.5%)</span>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded-full mt-2.5 overflow-hidden">
<div className="bg-amber-warning h-full rounded-full" style={{"width":"28%"}}></div>
</div>
</div>

<div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col justify-between shadow-sm">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wide">Avg Unlock SLA</span>
<Icon name="timer" className="text-[18px] text-tertiary" />
</div>
<div className="mt-2 flex items-baseline gap-2">
<span className="font-price-display text-price-display text-on-surface font-extrabold tracking-tight">4m 12s</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">-48s</span>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded-full mt-2.5 overflow-hidden">
<div className="bg-tertiary h-full rounded-full" style={{"width":"64%"}}></div>
</div>
</div>

<div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col justify-between shadow-sm">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wide">Admin Bypasses</span>
<Icon name="key" className="text-[18px] text-primary" />
</div>
<div className="mt-2 flex items-baseline gap-2">
<span className="font-price-display text-price-display text-primary font-extrabold tracking-tight">9</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Ledger Logged</span>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded-full mt-2.5 overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{"width":"45%"}}></div>
</div>
</div>
</div>
</section>

<main className="w-full px-4 sm:px-6 pb-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">

<div className="lg:col-span-5 flex flex-col gap-3">

<div className="flex items-center justify-between px-1">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface">Queue</span>
<span className="px-2 py-0.5 rounded-full bg-danger-penalty/20 text-danger-penalty font-label-sm text-label-sm font-bold">4 PENDING</span>
</div>
<div className="flex items-center gap-1">
<button className="px-2 py-1 rounded-lg bg-surface-container-low text-on-surface-variant text-label-sm font-label-sm hover:text-on-surface" type="button">
              Urgency
            </button>
<button className="w-7 h-7 rounded-lg bg-surface-container-low text-on-surface-variant flex items-center justify-center hover:text-on-surface" type="button">
<Icon name="filter_list" className="text-[16px]" />
</button>
</div>
</div>

<div className="p-3.5 rounded-2xl bg-surface-container-high shadow-md relative overflow-hidden transition-all cursor-pointer">

<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-action-gradient-start to-action-gradient-end"></div>
<div className="flex flex-col gap-2.5 pl-1.5">

<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2 min-w-0">
<span className="font-code-display text-label-lg text-primary font-extrabold tracking-wider">#SC-9488</span>
<span className="px-1.5 py-0.5 rounded bg-danger-penalty text-on-error font-label-sm text-label-sm font-extrabold tracking-wider uppercase animate-pulse">
                  CRITICAL
                </span>
</div>
<span className="font-code-display text-label-sm text-amber-warning font-bold flex items-center gap-1 shrink-0">
<Icon name="lock_clock" className="text-[14px]" />
                6m ago
              </span>
</div>

<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Kato Brian</span>
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm mt-0.5">
<Icon name="two_wheeler" className="text-[14px] text-tertiary" />
<span className="font-medium text-on-surface">#UFE 219K</span>
<span>• Acacia Mall Gate 2</span>
</div>
</div>

<div className="p-2 rounded-xl bg-surface-container-low flex items-center justify-between gap-2">
<div className="flex items-center gap-1.5 min-w-0">
<Icon name="password" className="text-danger-penalty text-[16px] shrink-0" />
<span className="font-label-sm text-label-sm text-danger-penalty font-bold truncate">PIN Mismatch (3 attempts failed)</span>
</div>
<span className="font-price-display text-label-sm text-on-surface font-bold shrink-0 whitespace-nowrap">UGX 248,500</span>
</div>

<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span className="flex items-center gap-1 truncate">
<Icon name="person" className="text-[14px]" />
                Sarah Namubiru
              </span>
<span className="text-tertiary font-bold shrink-0">Courier On-Site</span>
</div>
</div>
</div>

<div className="p-3.5 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all cursor-pointer">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-code-display text-label-lg text-on-surface font-bold">#SC-9462</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                  ESCROW HELD
                </span>
</div>
<span className="font-code-display text-label-sm text-on-surface-variant">18m ago</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Okello Denis (#UFD 412M)</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Lugogo Bypass • Total Energies Depot</span>
</div>
<div className="flex items-center justify-between pt-1 text-on-surface-variant font-label-sm text-label-sm">
<span className="text-amber-warning flex items-center gap-1">
<Icon name="battery_alert" className="text-[14px]" />
                Buyer Phone Battery Depleted
              </span>
<span className="font-bold text-on-surface whitespace-nowrap">UGX 89,000</span>
</div>
</div>
</div>

<div className="p-3.5 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all cursor-pointer">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-code-display text-label-lg text-on-surface font-bold">#SC-9411</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                  RELATIVE HANDOVER
                </span>
</div>
<span className="font-code-display text-label-sm text-on-surface-variant">34m ago</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Ssemwogerere John</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Ntinda Complex Floor 2</span>
</div>
<div className="flex items-center justify-between pt-1 text-on-surface-variant font-label-sm text-label-sm">
<span className="text-on-surface-variant flex items-center gap-1">
<Icon name="group" className="text-[14px]" />
                Third-Party Receiver (Sister)
              </span>
<span className="font-bold text-on-surface whitespace-nowrap">UGX 415,000</span>
</div>
</div>
</div>

<div className="p-3.5 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all cursor-pointer">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-code-display text-label-lg text-on-surface font-bold">#SC-9390</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                  TELCO LAG
                </span>
</div>
<span className="font-code-display text-label-sm text-on-surface-variant">52m ago</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Mugisha Ronald</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Nakawa Market Agro-Gate C</span>
</div>
<div className="flex items-center justify-between pt-1 text-on-surface-variant font-label-sm text-label-sm">
<span className="text-on-surface-variant flex items-center gap-1">
<Icon name="signal_disconnected" className="text-[14px]" />
                MTN MoMo SMS Token Congestion
              </span>
<span className="font-bold text-on-surface whitespace-nowrap">UGX 54,000</span>
</div>
</div>
</div>

<div className="p-3 rounded-xl bg-surface-container-lowest text-on-surface-variant text-body-sm flex items-center gap-2.5">
<Icon name="security" className="text-tertiary text-[18px] shrink-0" />
<span>Courier apps auto-lock GPS breadcrumbs after 3 bad entries to prevent collusion theft.</span>
</div>
</div>

<div className="lg:col-span-7 flex flex-col gap-4">

<div className="p-4 sm:p-5 rounded-2xl bg-surface-container-high shadow-lg">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary shrink-0">
<Icon name="lock_reset" className="text-[28px]" />
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface tracking-tight">Active Resolution: #SC-9488</span>
<span className="px-2 py-0.5 rounded bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="lock" className="text-[12px]" />
                    ESCROW CUSTODY
                  </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  Courier app frozen at destination node. Overriding unlocks both courier and merchant payouts.
                </p>
</div>
</div>
<div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center">
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Escrow Hold</span>
<span className="font-price-display text-price-display text-on-surface font-extrabold text-tertiary whitespace-nowrap">
                UGX 248,500
              </span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3">

<div className="p-3 rounded-xl bg-surface-container flex flex-col gap-2">
<div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">
<span>SKU &amp; Merchant</span>
<span className="text-tertiary">Verified Merchant</span>
</div>
<div className="flex items-start gap-3">
<div className="w-14 h-14 rounded-lg bg-surface-container-highest shrink-0 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="High quality close up studio photograph of matte black SoundCore Space One active noise cancelling wireless headphones with velvet earcups resting on slate dark surface under dramatic rim lighting, product commercial photography, sleek tech styling." src="/images/edeb18b76bc5443f.webp" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface font-bold truncate">SoundCore Space One ANC</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Victoria Tech Supplies (Kampala)</span>
<span className="font-code-display text-label-sm text-primary font-semibold mt-0.5">BARCODE // VTS-8842-UG</span>
</div>
</div>
</div>

<div className="p-3 rounded-xl bg-surface-container flex flex-col gap-2">
<div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">
<span>Buyer Authorization</span>
<span className="text-primary font-bold">Masked Relay</span>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-md text-label-md text-on-surface font-bold">Sarah Namubiru</span>
<div className="flex items-center justify-between">
<span className="font-code-display text-label-md text-on-surface-variant font-bold">+256 701 ••• 123</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">AIRTEL 4G</span>
</div>
<div className="flex items-center gap-1.5 text-tertiary font-label-sm text-label-sm mt-0.5">
<Icon name="check_circle" className="text-[14px]" />
<span>Registered KYC verified with MTN/Airtel switch</span>
</div>
</div>
</div>
</div>
</div>

<div className="p-4 rounded-2xl bg-surface-container-low shadow-sm flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="two_wheeler" className="text-primary text-[20px]" />
<span className="font-label-lg text-label-lg text-on-surface font-bold">Courier Real-Time Telemetry</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-tertiary/15 text-tertiary font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
              INSIDE GEOFENCE (8m ACCURACY)
            </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<div className="p-3 rounded-xl bg-surface-container flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Rider Profile</span>
<span className="font-label-md text-label-md text-on-surface font-bold mt-1">Kato Brian</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Boda Reg: UFE 219K</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold mt-1">4.92 ★ (1,140 Deliveries)</span>
</div>
<div className="p-3 rounded-xl bg-surface-container flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">GPS Coordinates</span>
<span className="font-code-display text-label-md text-on-surface font-bold mt-1">0.3341° N, 32.5891° E</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Acacia Mall, Gate 2 Taxi Drop</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold mt-1">Satellite Lock Fixed</span>
</div>
<div className="p-3 rounded-xl bg-surface-container flex flex-col justify-between">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Courier Terminal State</span>
<span className="font-label-md text-label-md text-danger-penalty font-bold mt-1 block">LOCKED (PIN FAIL)</span>
</div>
<button className="w-full py-1.5 px-2 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-bold flex items-center justify-center gap-1 transition-colors" type="button">
<Icon name="call" className="text-[16px]" />
                Call Courier Direct
              </button>
</div>
</div>
</div>

<div className="p-4 sm:p-5 rounded-2xl bg-surface-container-low shadow-sm flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="fingerprint" className="text-amber-warning text-[20px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Security Validation Protocol</h2>
</div>
<span className="font-code-display text-label-sm text-on-surface-variant">AUDIT-ID // SEC-842-OV</span>
</div>

<div className="p-3.5 rounded-xl bg-surface-container flex flex-col gap-3">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">
              Entered Tokens vs. Master Database Release PIN
            </span>
<div className="grid grid-cols-1 sm:grid-cols-4 gap-2">

<div className="p-2.5 rounded-lg bg-surface-container-lowest flex flex-col items-center">
<span className="font-label-sm text-label-sm text-danger-penalty font-bold">Attempt #1 (Failed)</span>
<span className="font-code-display text-label-lg text-danger-penalty font-extrabold mt-1 tracking-widest line-through">
                  842-180
                </span>
<span className="font-body-sm text-label-sm text-on-surface-variant mt-0.5">14:02:11</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-lowest flex flex-col items-center">
<span className="font-label-sm text-label-sm text-danger-penalty font-bold">Attempt #2 (Failed)</span>
<span className="font-code-display text-label-lg text-danger-penalty font-extrabold mt-1 tracking-widest line-through">
                  842-199
                </span>
<span className="font-body-sm text-label-sm text-on-surface-variant mt-0.5">14:03:04</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-lowest flex flex-col items-center">
<span className="font-label-sm text-label-sm text-danger-penalty font-bold">Attempt #3 (LOCKOUT)</span>
<span className="font-code-display text-label-lg text-danger-penalty font-extrabold mt-1 tracking-widest line-through">
                  842-100
                </span>
<span className="font-body-sm text-label-sm text-on-surface-variant mt-0.5">14:04:22</span>
</div>

<div className="p-2.5 rounded-lg bg-tertiary-container/30 flex flex-col items-center">
<span className="font-label-sm text-label-sm text-tertiary font-bold flex items-center gap-1">
<Icon name="lock_open" className="text-[14px]" />
                  Correct Master Token
                </span>
<span className="font-code-display text-label-lg text-tertiary font-extrabold mt-1 tracking-widest">
                  842-190
                </span>
<span className="font-label-sm text-label-sm text-tertiary font-bold mt-0.5">Typo: 180 vs 190</span>
</div>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-lowest flex items-start gap-2.5">
<Icon name="task_alt" className="text-tertiary text-[18px] shrink-0 mt-0.5" />
<p className="font-body-sm text-body-sm text-on-surface">
<strong className="text-tertiary font-bold">Forensic Match:</strong> The customer transposed the 5th digit twice (<code className="font-code-display text-primary">8</code> instead of <code className="font-code-display text-primary">9</code>, then wild guesses). Statistical fraud probability &lt; 0.04%.
              </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<div className="p-3 rounded-xl bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-lg bg-tertiary-container/40 flex items-center justify-center text-tertiary shrink-0">
<Icon name="phone_in_talk" className="text-[18px]" />
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Admin Outbound Call</span>
<span className="font-body-sm text-body-sm text-tertiary">Verified Sarah Namubiru</span>
</div>
</div>
<Icon name="check_circle" className="text-tertiary text-[20px]" />
</div>
<div className="p-3 rounded-xl bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-lg bg-tertiary-container/40 flex items-center justify-center text-tertiary shrink-0">
<Icon name="domain_verification" className="text-[18px]" />
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Address Verification</span>
<span className="font-body-sm text-body-sm text-tertiary">Acacia Gate 2 Confirmed</span>
</div>
</div>
<Icon name="check_circle" className="text-tertiary text-[20px]" />
</div>
</div>
</div>

<div className="p-4 sm:p-5 rounded-2xl bg-surface-container-high shadow-xl flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="admin_panel_settings" className="text-primary text-[22px]" />
<h3 className="font-headline-sm text-headline-sm text-on-surface">Dispatch Override Authorization</h3>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
              SUPERADMIN AUDITED
            </span>
</div>

<div className="flex flex-col gap-3">

<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface font-bold flex items-center gap-1.5">
<span>Mandatory Override Reason Classification</span>
<span className="text-danger-penalty">*</span>
</label>
<div className="relative">
<select className="w-full h-11 px-3 bg-surface-container rounded-xl text-on-surface font-body-md text-body-md appearance-none focus:outline-none focus:bg-surface-container-highest transition-colors">
<option selected={true}>Verified Customer Typo (Handover Confirmed)</option>
<option>Customer Phone Depleted - Physical National ID Inspected</option>
<option>Emergency Dispatch Reassignment</option>
<option>Network Carrier SMS Failure - Voice Authorized</option>
<option>Hub Logistics Override (Pre-cleared)</option>
</select>
<Icon name="expand_more" className="absolute right-3 top-3 text-on-surface-variant pointer-events-none text-[20px]" />
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface font-bold flex items-center gap-1.5">
<span>Admin Clearance Notes &amp; Dispatcher Sign-off</span>
<span className="text-danger-penalty">*</span>
</label>
<textarea className="w-full p-3 bg-surface-container rounded-xl text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-highest transition-colors resize-none leading-relaxed" rows={2}>Spoke directly with Sarah Namubiru on call. Confirmed she mistyped 190 as 180 twice while in rush outside Acacia Mall. Package intact, rider Kato Brian confirmed on location.</textarea>
</div>
</div>

<div className="flex flex-col gap-2.5 pt-2">

<button className="w-full h-[52px] rounded-2xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-lg hover:opacity-95 active:scale-[0.99] transition-all" type="button">
<Icon name="lock_open" className="text-[22px]" />
              Authorize Immediate Code Override &amp; Release Escrow
            </button>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
<button className="h-12 px-3 rounded-xl bg-danger-penalty/15 text-danger-penalty font-label-md text-label-md font-bold flex items-center justify-center gap-2 hover:bg-danger-penalty/25 transition-colors" type="button">
<Icon name="cancel" className="text-[18px]" />
                Abort Delivery &amp; Return to Hub
              </button>
<button className="h-12 px-3 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md font-bold flex items-center justify-center gap-2 hover:bg-surface-container-highest transition-colors" type="button">
<Icon name="record_voice_over" className="text-[18px]" />
                Initiate 3-Way Conference
              </button>
</div>
</div>

<div className="flex items-center gap-2 pt-1 text-on-surface-variant font-label-sm text-label-sm">
<Icon name="history_edu" className="text-[16px] text-tertiary" />
<span>Cryptographic audit entry will be recorded under SuperAdmin UID #ADM-0042 in Uganda Ledger.</span>
</div>
</div>
</div>
</div>
</main>
</div></main></div>
    </div>
  );
};

export default Tablet;
