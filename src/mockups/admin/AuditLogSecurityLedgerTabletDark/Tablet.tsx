// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/admin/audit_log_security_ledger_tablet_dark/code.html
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

<div className="w-full bg-surface-container-high px-4 py-2 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
<span className="font-code-display text-label-sm text-tertiary tracking-wider uppercase">Ledger Stream Synchronized</span>
<span className="text-on-surface-variant font-body-sm text-body-sm hidden sm:inline">•</span>
<span className="text-on-surface-variant font-code-display text-label-sm hidden sm:inline">Block height #1,084,291</span>
</div>
<div className="flex items-center gap-3">
<span className="font-code-display text-label-sm text-on-surface-variant uppercase">SHA-256 HMAC Active</span>
<Icon name="lock" className="text-[16px] text-tertiary" />
</div>
</div>
<div className="p-4 md:p-6 flex flex-col gap-6 max-w-full">

<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-action-gradient-end/20 text-action-gradient-start font-label-sm text-label-sm uppercase tracking-wider">Security Root</span>
<span className="text-on-surface-variant font-code-display text-label-sm">LEDGER-NODE: UG-SEC-01</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Immutable Operational Audit Ledger</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Real-time chronological log of administrative overrides, role changes, and payment transactions</p>
</div>

<div className="flex items-center gap-2.5 self-start sm:self-auto">
<button className="h-10 px-3.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-2 transition-all" id="liveStreamToggle">
<Icon name="sensors" className="text-tertiary text-[18px]" />
<span>Live Tail (1s)</span>
</button>
<button className="h-10 px-4 rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-md text-label-md flex items-center gap-2 shadow-lg shadow-action-gradient-end/25 active:scale-95 transition-all">
<Icon name="verified" className="text-[18px]" />
<span>Sign Epoch</span>
</button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
<div className="p-3.5 rounded-xl bg-container-dark-low flex flex-col gap-1.5 shadow-sm">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Cloud Cluster Relay</span>
<Icon name="dns" className="text-[16px] text-tertiary" />
</div>
<div className="font-label-lg text-label-lg text-on-surface truncate">AWS AF-SOUTH-1</div>
<div className="font-code-display text-label-sm text-on-surface-variant truncate">Cape Town • DO FRA1 Relay</div>
</div>
<div className="p-3.5 rounded-xl bg-container-dark-low flex flex-col gap-1.5 shadow-sm">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Total Events (24h)</span>
<Icon name="database" className="text-[16px] text-secondary" />
</div>
<div className="font-price-display text-price-display text-on-surface leading-none">1,842</div>
<div className="font-body-sm text-body-sm text-tertiary flex items-center gap-1">
<Icon name="trending_up" className="text-[14px]" />
<span>+14.2% ops velocity</span>
</div>
</div>
<div className="p-3.5 rounded-xl bg-container-dark-low flex flex-col gap-1.5 shadow-sm">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Critical Overrides</span>
<Icon name="warning" className="text-[16px] text-amber-warning" />
</div>
<div className="font-price-display text-price-display text-amber-warning leading-none">6 <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">flagged</span></div>
<div className="font-code-display text-label-sm text-on-surface-variant">4 PIN • 2 Role Elevations</div>
</div>
<div className="p-3.5 rounded-xl bg-container-dark-low flex flex-col gap-1.5 shadow-sm">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Ledger Cryptography</span>
<Icon name="gavel" className="text-[16px] text-emerald-escrow" />
</div>
<div className="font-label-lg text-label-lg text-emerald-escrow flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
<span>Ledger Signed</span>
</div>
<div className="font-code-display text-label-sm text-on-surface-variant truncate">Uganda ETA Cap 73 Valid</div>
</div>
</div>

<div className="p-3 rounded-xl bg-surface-container-high flex flex-wrap gap-2.5 items-center justify-between">
<div className="flex flex-wrap items-center gap-2">

<div className="relative">
<select className="appearance-none h-9 pl-3 pr-8 rounded-lg bg-surface-container-low text-on-surface font-label-md text-label-md focus:outline-none focus:bg-surface-container cursor-pointer transition-colors">
<option>Action Type: All (1,842)</option>
<option selected={true}>Role Elevation (2)</option>
<option>Payment Release (41)</option>
<option>Commission Edit (9)</option>
<option>Dispatch Override (14)</option>
<option>Merchant Freeze (1)</option>
</select>
<Icon name="expand_more" className="absolute right-2 top-2.5 pointer-events-none text-[16px] text-on-surface-variant" />
</div>

<div className="relative">
<select className="appearance-none h-9 pl-3 pr-8 rounded-lg bg-surface-container-low text-on-surface font-label-md text-label-md focus:outline-none focus:bg-surface-container cursor-pointer transition-colors">
<option>Staff: All Operators</option>
<option selected={true}>Sarah Namatovu (Super Admin)</option>
<option>Michael Sserwadda (Admin)</option>
<option>Dennis Mukasa (Payment Lead)</option>
<option>Denis Mukasa (Dispatch)</option>
<option>Grace Akello (Catalog Ops)</option>
</select>
<Icon name="expand_more" className="absolute right-2 top-2.5 pointer-events-none text-[16px] text-on-surface-variant" />
</div>

<div className="flex items-center bg-surface-container-low rounded-lg p-0.5">
<button className="h-8 px-3 rounded-md bg-surface-container font-label-sm text-label-sm text-on-surface font-bold">Today</button>
<button className="h-8 px-3 rounded-md font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors">Last 7 Days</button>
<button className="h-8 px-3 rounded-md font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors">Oct 2024</button>
</div>
</div>

<div className="flex items-center gap-2 w-full sm:w-auto">
<div className="relative flex-1 sm:w-48">
<input className="w-full h-9 pl-7 pr-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-on-surface-variant font-code-display text-body-sm focus:outline-none focus:bg-surface-container transition-colors" placeholder="Filter hash / PIN..." type="text" />
<Icon name="fingerprint" className="absolute left-2 top-2 text-[15px] text-on-surface-variant" />
</div>
<button className="w-9 h-9 rounded-lg bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors" title="Clear filters">
<Icon name="filter_alt_off" className="text-[18px]" />
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">

<div className="md:col-span-5 flex flex-col gap-3">
<div className="flex items-center justify-between px-1">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Chronological Stream</span>
<span className="font-code-display text-label-sm text-tertiary">Real-time Feed</span>
</div>
<div className="flex flex-col gap-2.5" id="auditFeedContainer">

<div className="event-card active-card cursor-pointer p-3.5 rounded-xl bg-container-dark-high relative overflow-hidden transition-all shadow-md" data-event-id="EV-99412">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-action-gradient-start to-action-gradient-end"></div>
<div className="flex items-start justify-between gap-2 pl-2">
<div className="flex flex-col gap-1 min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-code-display text-label-sm text-primary font-bold">#EV-99412</span>
<span className="px-1.5 py-0.2 rounded bg-amber-warning/15 text-amber-warning font-label-sm text-label-sm uppercase">Role Elevation</span>
<span className="text-on-surface-variant font-body-sm text-body-sm">12m ago</span>
</div>
<div className="font-label-md text-label-md text-on-surface font-bold leading-snug line-clamp-1">Michael Sserwadda elevated to Super Admin</div>
<div className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">Actor: Sarah Namatovu • Auth: SMS OTP</div>
</div>
<div className="flex flex-col items-end gap-1 flex-shrink-0">
<Icon name="verified_user" className="text-[18px] text-tertiary" />
<span className="font-code-display text-label-sm text-tertiary font-bold">VERIFIED</span>
</div>
</div>
</div>

<div className="event-card cursor-pointer p-3.5 rounded-xl bg-container-dark-low hover:bg-surface-container transition-all shadow-sm" data-event-id="EV-99411">
<div className="flex items-start justify-between gap-2">
<div className="flex flex-col gap-1 min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-code-display text-label-sm text-on-surface-variant">#EV-99411</span>
<span className="px-1.5 py-0.2 rounded bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm uppercase">Payment Release</span>
<span className="text-on-surface-variant font-body-sm text-body-sm">34m ago</span>
</div>
<div className="font-label-md text-label-md text-on-surface font-semibold leading-snug line-clamp-1">17:00 MoMo Payout Sweep Authorized</div>
<div className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1 whitespace-nowrap">Actor: Dennis Mukasa • UGX 12,400,000</div>
</div>
<div className="flex flex-col items-end gap-1 flex-shrink-0">
<span className="font-price-display text-label-sm text-emerald-escrow font-bold whitespace-nowrap">UGX 12.4M</span>
<span className="font-code-display text-label-sm text-on-surface-variant">18 Merch</span>
</div>
</div>
</div>

<div className="event-card cursor-pointer p-3.5 rounded-xl bg-container-dark-low hover:bg-surface-container transition-all shadow-sm" data-event-id="EV-99410">
<div className="flex items-start justify-between gap-2">
<div className="flex flex-col gap-1 min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-code-display text-label-sm text-on-surface-variant">#EV-99410</span>
<span className="px-1.5 py-0.2 rounded bg-secondary-container/50 text-secondary-fixed font-label-sm text-label-sm uppercase">Catalog Approval</span>
<span className="text-on-surface-variant font-body-sm text-body-sm">1h ago</span>
</div>
<div className="font-label-md text-label-md text-on-surface font-semibold leading-snug line-clamp-1">Approved SKU SC-SP01-BLK</div>
<div className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">Actor: Grace Akello • Invoice Checked</div>
</div>
<div className="flex flex-col items-end gap-1 flex-shrink-0">
<Icon name="inventory" className="text-[18px] text-secondary" />
<span className="font-code-display text-label-sm text-on-surface-variant">INV-8492</span>
</div>
</div>
</div>

<div className="event-card cursor-pointer p-3.5 rounded-xl bg-container-dark-low hover:bg-surface-container transition-all shadow-sm" data-event-id="EV-99409">
<div className="flex items-start justify-between gap-2">
<div className="flex flex-col gap-1 min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-code-display text-label-sm text-on-surface-variant">#EV-99409</span>
<span className="px-1.5 py-0.2 rounded bg-primary-container/20 text-primary font-label-sm text-label-sm uppercase">Dispatch Override</span>
<span className="text-on-surface-variant font-body-sm text-body-sm">1h 45m ago</span>
</div>
<div className="font-label-md text-label-md text-on-surface font-semibold leading-snug line-clamp-1">Cleared PIN lockout: Order #SC-9488</div>
<div className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">Actor: Michael Sserwadda • Acacia Mall Hub</div>
</div>
<div className="flex flex-col items-end gap-1 flex-shrink-0">
<Icon name="pin" className="text-[18px] text-primary" />
<span className="font-code-display text-label-sm text-on-surface-variant">RESET</span>
</div>
</div>
</div>

<div className="event-card cursor-pointer p-3.5 rounded-xl bg-container-dark-low hover:bg-surface-container transition-all shadow-sm" data-event-id="EV-99408">
<div className="flex items-start justify-between gap-2">
<div className="flex flex-col gap-1 min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-code-display text-label-sm text-on-surface-variant">#EV-99408</span>
<span className="px-1.5 py-0.2 rounded bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm uppercase">Commission Matrix</span>
<span className="text-on-surface-variant font-body-sm text-body-sm">3h ago</span>
</div>
<div className="font-label-md text-label-md text-on-surface font-semibold leading-snug line-clamp-1">Smart Phones Take Rate → 2.8%</div>
<div className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">Actor: Sarah Namatovu • Prior: 3.2%</div>
</div>
<div className="flex flex-col items-end gap-1 flex-shrink-0">
<span className="font-code-display text-label-md text-tertiary font-bold">2.8%</span>
<span className="font-code-display text-label-sm text-on-surface-variant">MATRIX-UG</span>
</div>
</div>
</div>
</div>

<div className="p-2.5 rounded-xl bg-container-dark-low flex items-center justify-between text-on-surface-variant mt-1">
<span className="font-code-display text-label-sm">Displaying 1–5 of 1,842</span>
<div className="flex items-center gap-1.5">
<button className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center hover:text-on-surface disabled:opacity-40" disabled={true}>
<Icon name="chevron_left" className="text-[16px]" />
</button>
<span className="font-code-display text-label-sm px-2 text-on-surface">Page 1</span>
<button className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center hover:text-on-surface">
<Icon name="chevron_right" className="text-[16px]" />
</button>
</div>
</div>
</div>

<div className="md:col-span-7 flex flex-col gap-4">

<div className="rounded-2xl bg-container-dark-high p-5 flex flex-col gap-5 shadow-xl relative overflow-hidden">

<div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-action-gradient-start/10 blur-3xl pointer-events-none"></div>

<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 bg-surface-container-high/40 p-4 rounded-xl">
<div className="flex flex-col gap-1.5 min-w-0">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-amber-warning"></span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-amber-warning font-bold">CRITICAL SECURITY EVENT</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-code-display text-label-sm">#EV-99412</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">Role Elevation Ceremony</h2>
<div className="flex items-center gap-2 text-on-surface-variant font-code-display text-label-sm">
<Icon name="schedule" className="text-[15px]" />
<span>24 Oct 2024, 19:42:15 EAT</span>
<span>•</span>
<span className="text-tertiary">Committed</span>
</div>
</div>

<div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Record Checksum</span>
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-dark font-code-display text-label-sm text-on-surface" title="sha256:7f4d291e0a82bcf651039841da923891">
<span>sha256:7f4d...b891</span>
<button className="hover:text-primary transition-colors" title="Copy Hash">
<Icon name="content_copy" className="text-[14px]" />
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">

<div className="p-4 rounded-xl bg-surface-container flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-bold">Initiating Actor</span>
<Icon name="security" className="text-primary text-[18px]" />
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center font-bold text-primary text-label-lg">
                  SN
                </div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Sarah Namatovu</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Super Admin #SA-01</span>
</div>
</div>
<div className="flex flex-col gap-1.5 pt-2 bg-surface-container-high/60 p-2.5 rounded-lg text-on-surface-variant font-code-display text-label-sm">
<div className="flex items-center justify-between">
<span>Client IP:</span>
<span className="text-on-surface font-medium">102.134.18.92</span>
</div>
<div className="flex items-center justify-between">
<span>ISP / Location:</span>
<span className="text-on-surface font-medium truncate max-w-[150px]">Liquid Tel • Kampala</span>
</div>
<div className="flex items-center justify-between">
<span>User Agent:</span>
<span className="text-on-surface font-medium truncate max-w-[150px]">Chrome 129 / TabletOS</span>
</div>
</div>
</div>

<div className="p-4 rounded-xl bg-surface-container flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider font-bold">Target Subject</span>
<Icon name="badge" className="text-tertiary text-[18px]" />
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center font-bold text-secondary-fixed text-label-lg">
                  MS
                </div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Michael Sserwadda</span>
<span className="font-code-display text-label-sm text-on-surface-variant truncate">m.sserwadda@swiftcart.ug</span>
</div>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-high/60 flex items-center justify-between gap-2">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Prior Role</span>
<span className="font-label-sm text-label-sm text-on-surface">Admin (Disputes)</span>
</div>
<Icon name="arrow_forward" className="text-action-gradient-start text-[18px]" />
<div className="flex flex-col text-right">
<span className="font-label-sm text-label-sm text-action-gradient-start uppercase font-bold">Elevated</span>
<span className="font-label-sm text-label-sm text-on-surface font-bold">Super Admin</span>
</div>
</div>
</div>
</div>

<div className="p-4 rounded-xl bg-surface-container flex flex-col gap-3">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Operational Justification &amp; Verification</span>
<div className="p-3 rounded-lg bg-surface-dark font-body-md text-body-md text-on-surface">
              “Temporary handover during executive leave. Designated primary incident commander for Kampala node and weekend payment clearance sweeps.”
            </div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">

<div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-surface-container-high/60">
<div className="w-8 h-8 rounded-lg bg-emerald-escrow/20 flex items-center justify-center text-emerald-escrow flex-shrink-0">
<Icon name="phonelink_lock" className="text-[18px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface font-bold">Authorization Proof</span>
<span className="font-code-display text-label-sm text-on-surface-variant truncate">6-Digit SMS via +256 701 ••• 882</span>
</div>
</div>

<div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-surface-container-high/60">
<div className="w-8 h-8 rounded-lg bg-secondary-container/40 flex items-center justify-center text-secondary flex-shrink-0">
<Icon name="policy" className="text-[18px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface font-bold">Compliance Reference</span>
<span className="font-code-display text-label-sm text-on-surface-variant truncate">Uganda ETA Cap 73 § 19</span>
</div>
</div>
</div>
</div>

<div className="p-4 rounded-xl bg-surface-container flex flex-col gap-2.5">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Security Privileges Granted</span>
<span className="font-label-sm text-label-sm text-tertiary">Expires: 31 Oct 2024 (7 Days)</span>
</div>
<div className="grid grid-cols-3 gap-2">
<div className="p-2.5 rounded-lg bg-surface-container-high text-center flex flex-col gap-1">
<Icon name="account_balance_wallet" className="text-primary text-[18px] mx-auto" />
<span className="font-label-sm text-label-sm text-on-surface font-bold">Payment Disburse</span>
<span className="font-code-display text-label-sm text-on-surface-variant whitespace-nowrap">UGX 50M limit</span>
</div>
<div className="p-2.5 rounded-lg bg-surface-container-high text-center flex flex-col gap-1">
<Icon name="lock_reset" className="text-amber-warning text-[18px] mx-auto" />
<span className="font-label-sm text-label-sm text-on-surface font-bold">PIN Resets</span>
<span className="font-code-display text-label-sm text-on-surface-variant">Fleet &amp; Hub</span>
</div>
<div className="p-2.5 rounded-lg bg-surface-container-high text-center flex flex-col gap-1">
<Icon name="block" className="text-tertiary text-[18px] mx-auto" />
<span className="font-label-sm text-label-sm text-on-surface font-bold">Merchant Freeze</span>
<span className="font-code-display text-label-sm text-on-surface-variant">Kampala Matrix</span>
</div>
</div>
</div>

<div className="p-3 rounded-xl bg-surface-dark flex items-center justify-between flex-wrap gap-2">
<div className="flex items-center gap-2">
<Icon name="verified" className="text-emerald-escrow text-[18px]" />
<span className="font-code-display text-label-sm text-on-surface">Storage State: <strong className="text-emerald-escrow">PERSISTED &amp; ANCHORED</strong></span>
</div>
<div className="font-code-display text-label-sm text-on-surface-variant whitespace-nowrap">
              Tx: 0x9f1a...4801 • Gas: 0.00 UGX
            </div>
</div>

<div className="flex flex-wrap items-center justify-between gap-3 pt-2">
<div className="flex items-center gap-2 flex-wrap">

<button className="h-11 px-4 rounded-xl bg-surface-container hover:bg-surface-container-highest text-on-surface font-label-md text-label-md flex items-center gap-2 transition-all active:scale-95" id="exportJsonBtn">
<Icon name="data_object" className="text-[18px]" />
<span>Export Forensic Log (JSON)</span>
</button>

<button className="h-11 px-4 rounded-xl bg-surface-container hover:bg-surface-container-highest text-on-surface font-label-md text-label-md flex items-center gap-2 transition-all active:scale-95">
<Icon name="print" className="text-[18px]" />
<span>Print Certificate</span>
</button>
</div>

<button className="h-11 px-4 rounded-xl bg-danger-penalty/15 hover:bg-danger-penalty/25 text-danger-penalty font-label-md text-label-md flex items-center gap-2 transition-all active:scale-95" id="flagReviewBtn">
<Icon name="flag" className="text-[18px]" />
<span>Flag Event for Review</span>
</button>
</div>
</div>

<div className="rounded-xl bg-container-dark-low p-4 flex flex-col gap-3 shadow-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="history" className="text-secondary text-[18px]" />
<span className="font-label-md text-label-md text-on-surface font-bold">Historical Order Log: Michael Sserwadda</span>
</div>
<span className="font-code-display text-label-sm text-on-surface-variant">Total Lifetime Overrides: 24</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
<div className="p-2.5 rounded-lg bg-surface-container flex flex-col gap-0.5">
<span className="font-code-display text-label-sm text-on-surface-variant">18 Oct 2024</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold">PIN Lockout Reset #SC-8921</span>
<span className="font-body-sm text-body-sm text-tertiary">Verified by Customer OTP</span>
</div>
<div className="p-2.5 rounded-lg bg-surface-container flex flex-col gap-0.5">
<span className="font-code-display text-label-sm text-on-surface-variant">04 Oct 2024</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Boda Dispute Force-Release</span>
<span className="font-body-sm text-body-sm text-amber-warning whitespace-nowrap">UGX 45,000 Hold</span>
</div>
<div className="p-2.5 rounded-lg bg-surface-container flex flex-col gap-0.5">
<span className="font-code-display text-label-sm text-on-surface-variant">12 Sep 2024</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Super Admin Clearance (Temp)</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Expired 15 Sep 2024</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main></div>
    </div>
  );
};

export default Tablet;
