// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/admin/audit_log_security_ledger_swiftcart_desktop_light/code.html
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
      
      <div className="pl-0"><main className="w-full pt-16 bg-background min-h-screen"><div className="flex flex-col w-full">
<div className="px-space-xl py-space-lg space-y-space-lg max-w-[1720px] mx-auto w-full">

<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="space-y-space-xs">
<div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
<span>Admin Operations</span>
<Icon name="chevron_right" className="text-[14px] text-outline" />
<span>Security &amp; Compliance</span>
<Icon name="chevron_right" className="text-[14px] text-outline" />
<span className="text-primary font-label-md text-label-md">Audit Log &amp; Security Ledger</span>
</div>
<div className="flex flex-wrap items-center gap-space-md">
<h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">Security Ledger &amp; Forensic Audit</h1>
<div className="flex items-center gap-space-xs px-space-sm py-1 bg-surface-container-lowest rounded-full shadow-sm">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
<span className="font-label-sm text-label-sm text-on-surface">Ledger Engine: Live Synced (12ms latency)</span>
</div>
<div className="flex items-center gap-1 px-space-sm py-1 bg-tertiary-container/10 text-tertiary rounded-full font-label-sm text-label-sm">
<Icon name="verified_user" className="text-[14px]" />
<span>BOU NPS Compliant (Act 2020)</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-sm flex-wrap">
<button className="px-space-md h-10 bg-surface-container-lowest text-on-surface hover:bg-surface-container rounded-xl font-label-md text-label-md flex items-center gap-2 transition-all shadow-sm active:scale-95" id="btnVerifyMerkle">
<Icon name="token" className="text-[18px] text-primary" />
<span>Verify Merkle Proofs</span>
</button>
<button className="px-space-lg h-10 bg-primary-container text-on-primary-container hover:opacity-95 rounded-xl font-label-md text-label-md flex items-center gap-2 transition-all shadow-[0_4px_14px_rgba(218,55,0,0.25)] active:scale-95">
<Icon name="download_for_offline" className="text-[18px]" />
<span>Export Forensic CSV</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-sm transition-transform hover:-translate-y-0.5">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Total Audited Events (24h)</span>
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<Icon name="receipt_long" className="text-[18px]" />
</div>
</div>
<div className="space-y-1">
<div className="font-headline-sm text-headline-sm text-on-surface tracking-tight">14,892 Logs</div>
<div className="flex items-center gap-1.5 font-label-sm text-label-sm text-tertiary">
<Icon name="arrow_upward" className="text-[14px]" />
<span>+8.4% vs avg</span>
<span className="text-on-surface-variant font-body-sm text-body-sm">• 100% cryptographic capture</span>
</div>
</div>
<div className="w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
<div className="bg-tertiary h-1.5 rounded-full" style={{"width":"100%"}}></div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-sm transition-transform hover:-translate-y-0.5">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Privileged Operations</span>
<div className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
<Icon name="shield_person" className="text-[18px]" />
</div>
</div>
<div className="space-y-1">
<div className="font-headline-sm text-headline-sm text-primary tracking-tight">7 Critical Actions</div>
<div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<span>3 Roles • 2 Escrows • 2 Root Rotations</span>
</div>
</div>
<div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm">
<Icon name="lock" className="text-[14px]" />
<span>100% Dual-Key 2FA Confirmed</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-sm transition-transform hover:-translate-y-0.5">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Node Integrity &amp; Latency</span>
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-tertiary">
<Icon name="dns" className="text-[18px]" />
</div>
</div>
<div className="space-y-1">
<div className="font-headline-sm text-headline-sm text-on-surface tracking-tight">99.99% Ledger Uptime</div>
<div className="flex items-center gap-1 font-body-sm text-body-sm text-on-surface-variant">
<Icon name="sync" className="text-[14px] text-tertiary" />
<span>Stanbic Trust Anchor reconciled 2m ago</span>
</div>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-1">
<span>Latency: 12ms</span>
<span className="text-tertiary">Uganda IXP (KLA)</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-sm transition-transform hover:-translate-y-0.5">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Security Anomaly Score</span>
<div className="w-8 h-8 rounded-lg bg-tertiary-container/10 flex items-center justify-center text-tertiary">
<Icon name="verified" className="text-[18px]" />
</div>
</div>
<div className="space-y-1">
<div className="font-headline-sm text-headline-sm text-tertiary tracking-tight">0 Breaches Detected</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">
            Enclave chassis sealed • Zero tamper alerts
          </div>
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm pt-1">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span>NTRU-Prime Quantum Safe Layer</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-md">
<div className="grid grid-cols-1 md:grid-cols-12 gap-space-md">

<div className="md:col-span-4 relative">
<Icon name="search" className="absolute left-space-md top-1/2 -translate-y-1/2 text-outline text-[20px]" />
<input className="w-full h-11 pl-10 pr-space-md bg-surface-container-low rounded-xl text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-inner" id="auditSearchInput" placeholder="Filter by hash, officer name, staff ID, IP, or order ref..." type="text" />
</div>

<div className="md:col-span-2">
<select className="w-full h-11 px-space-md bg-surface-container-low rounded-xl text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary appearance-none cursor-pointer" id="categoryFilter">
<option value="ALL">All Categories</option>
<option value="PRIVILEGED">Privileged Escalation</option>
<option value="ESCROW">Escrow &amp; Funds</option>
<option value="KYC">KYC &amp; Onboarding</option>
<option value="SETTINGS">Platform Settings</option>
<option value="DISPATCH">Dispatch &amp; Riders</option>
</select>
</div>

<div className="md:col-span-2">
<select className="w-full h-11 px-space-md bg-surface-container-low rounded-xl text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary appearance-none cursor-pointer" id="severityFilter">
<option value="ALL">All Severities</option>
<option value="CRITICAL">Critical</option>
<option value="HIGH">High</option>
<option value="MEDIUM">Medium</option>
<option value="INFO">Standard Audit (Info)</option>
</select>
</div>

<div className="md:col-span-2">
<select className="w-full h-11 px-space-md bg-surface-container-low rounded-xl text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary appearance-none cursor-pointer">
<option>All Staff Officers</option>
<option>Kizito Ronald (ADM-001)</option>
<option>Patricia Namubiru (ADM-004)</option>
<option>Sarah Auma (ADM-012)</option>
<option>Brian Mukasa (ADM-022)</option>
<option>System Cron / Enclave</option>
</select>
</div>

<div className="md:col-span-2 flex items-center gap-space-xs">
<div className="w-full h-11 px-space-md bg-surface-container-low rounded-xl flex items-center justify-between text-on-surface font-body-sm text-body-sm cursor-pointer hover:bg-surface-container">
<span className="flex items-center gap-1.5 truncate">
<Icon name="calendar_today" className="text-[16px] text-outline" />
<span>Today, 24 Oct</span>
</span>
<Icon name="expand_more" className="text-[16px] text-outline" />
</div>
<button className="w-11 h-11 flex-shrink-0 bg-surface-container-low hover:bg-surface-container text-outline hover:text-on-surface rounded-xl flex items-center justify-center transition-colors" title="Reset Filters">
<Icon name="refresh" className="text-[20px]" />
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<div className="lg:col-span-5 flex flex-col space-y-space-md">

<div className="flex items-center gap-space-xs p-1 bg-surface-container-lowest rounded-xl shadow-sm overflow-x-auto">
<button className="audit-tab px-space-md py-1.5 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md whitespace-nowrap shadow-sm">
            All Logs <span className="ml-1 opacity-80 text-label-sm">14.8k</span>
</button>
<button className="audit-tab px-space-md py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-label-md text-label-md whitespace-nowrap">
            Privileged <span className="ml-1 bg-primary-fixed text-on-primary-fixed px-1.5 py-0.2 rounded-full text-label-sm">7</span>
</button>
<button className="audit-tab px-space-md py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-label-md text-label-md whitespace-nowrap">
            Escrow &amp; Funds <span className="ml-1 text-label-sm opacity-70">412</span>
</button>
<button className="audit-tab px-space-md py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-label-md text-label-md whitespace-nowrap">
            Auth &amp; 2FA <span className="ml-1 text-label-sm opacity-70">1.2k</span>
</button>
</div>

<div className="space-y-space-sm" id="logStreamList">

<div className="audit-card active bg-surface-container-lowest p-space-md rounded-xl shadow-md transition-all cursor-pointer relative overflow-hidden ring-2 ring-primary" data-log-id="LOG-88491-UG">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary"></div>
<div className="pl-2 space-y-space-xs">
<div className="flex items-center justify-between">
<span className="bg-error-container text-on-error-container font-label-sm text-label-sm px-space-sm py-0.5 rounded-full flex items-center gap-1 font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                  CRITICAL
                </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">14:18:22 EAT</span>
</div>
<div>
<h4 className="font-label-lg text-label-lg text-on-surface">SUPER_ADMIN_ROLE_ELEVATION</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Actor: <strong className="text-on-surface">Kizito Ronald (ADM-001)</strong>
</p>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                  Target: <span className="text-primary font-medium">Patricia Namubiru (ADM-004)</span>
</p>
</div>
<div className="flex items-center justify-between pt-1 text-on-surface-variant">
<div className="flex items-center gap-1 font-currency-code text-currency-code font-mono bg-surface-container px-2 py-0.5 rounded">
<Icon name="key" className="text-[12px] text-tertiary" />
<span>0x8f4c...91b0</span>
</div>
<span className="bg-tertiary-container/10 text-tertiary font-label-sm text-label-sm px-2 py-0.5 rounded-full flex items-center gap-0.5">
<Icon name="done_all" className="text-[12px]" /> Dual-Sig Approved (2/2)
                </span>
</div>
</div>
</div>

<div className="audit-card bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer relative overflow-hidden" data-log-id="LOG-88490-UG">
<div className="pl-2 space-y-space-xs">
<div className="flex items-center justify-between">
<span className="bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm px-space-sm py-0.5 rounded-full flex items-center gap-1 font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  HIGH
                </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">13:45:10 EAT</span>
</div>
<div>
<h4 className="font-label-lg text-label-lg text-on-surface">ESCROW_MANUAL_DISBURSEMENT_OVERRIDE</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Actor: <strong className="text-on-surface">Sarah Auma (ADM-012)</strong>
</p>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                  Target: <span className="text-secondary font-medium">Order #SC-98241 (SoundCore UG)</span>
</p>
</div>
<div className="flex items-center justify-between pt-1 text-on-surface-variant">
<div className="flex items-center gap-1 font-currency-code text-currency-code font-mono bg-surface-container px-2 py-0.5 rounded">
<Icon name="key" className="text-[12px] text-outline" />
<span>0x3a7e...44c1</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant italic text-[11px] truncate max-w-[180px]">
                  NIRA doorstep match confirmed
                </span>
</div>
</div>
</div>

<div className="audit-card bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer relative overflow-hidden" data-log-id="LOG-88489-UG">
<div className="pl-2 space-y-space-xs">
<div className="flex items-center justify-between">
<span className="bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm px-space-sm py-0.5 rounded-full flex items-center gap-1 font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  HIGH
                </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">12:30:04 EAT</span>
</div>
<div>
<h4 className="font-label-lg text-label-lg text-on-surface">MERCHANT_STOREFRONT_FREEZE</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Actor: <strong className="text-on-surface">Kizito Ronald (ADM-001)</strong>
</p>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                  Target: <span className="text-on-surface font-medium">Kampala Phone Hub (SC-UG-8821)</span>
</p>
</div>
<div className="flex items-center justify-between pt-1 text-on-surface-variant">
<div className="flex items-center gap-1 font-currency-code text-currency-code font-mono bg-surface-container px-2 py-0.5 rounded">
<Icon name="key" className="text-[12px] text-outline" />
<span>0x1b9d...28fe</span>
</div>
<span className="text-error font-label-sm text-label-sm flex items-center gap-0.5">
<Icon name="warning" className="text-[14px]" /> Anti-Counterfeit Hold
                </span>
</div>
</div>
</div>

<div className="audit-card bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer relative overflow-hidden" data-log-id="LOG-88488-UG">
<div className="pl-2 space-y-space-xs">
<div className="flex items-center justify-between">
<span className="bg-secondary-container text-on-secondary-container font-label-sm text-label-sm px-space-sm py-0.5 rounded-full flex items-center gap-1 font-bold">
                  MEDIUM
                </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">11:15:40 EAT</span>
</div>
<div>
<h4 className="font-label-lg text-label-lg text-on-surface">COMMISSION_RATE_SCHEDULE_UPDATE</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Actor: <strong className="text-on-surface">Sarah Auma (ADM-012)</strong>
</p>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                  Target: Consumer Electronics &gt; Audio (Adjusted to 7.5%)
                </p>
</div>
<div className="flex items-center justify-between pt-1 text-on-surface-variant">
<div className="flex items-center gap-1 font-currency-code text-currency-code font-mono bg-surface-container px-2 py-0.5 rounded">
<Icon name="key" className="text-[12px] text-outline" />
<span>0x5c8a...009a</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Policy: Standard Rev</span>
</div>
</div>
</div>

<div className="audit-card bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer relative overflow-hidden" data-log-id="LOG-88487-UG">
<div className="pl-2 space-y-space-xs">
<div className="flex items-center justify-between">
<span className="bg-secondary-container text-on-secondary-container font-label-sm text-label-sm px-space-sm py-0.5 rounded-full flex items-center gap-1 font-bold">
                  MEDIUM
                </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">10:04:18 EAT</span>
</div>
<div>
<h4 className="font-label-lg text-label-lg text-on-surface">EMERGENCY_DISPATCH_PIN_OVERRIDE</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Actor: <strong className="text-on-surface">Brian Mukasa (ADM-022)</strong>
</p>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                  Target: Docket #EXC-98235 (SafeBoda #UG-882)
                </p>
</div>
<div className="flex items-center justify-between pt-1 text-on-surface-variant">
<div className="flex items-center gap-1 font-currency-code text-currency-code font-mono bg-surface-container px-2 py-0.5 rounded">
<Icon name="key" className="text-[12px] text-outline" />
<span>0x991f...772b</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">GPS Handshake Fallback</span>
</div>
</div>
</div>

<div className="audit-card bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer relative overflow-hidden" data-log-id="LOG-88486-UG">
<div className="pl-2 space-y-space-xs">
<div className="flex items-center justify-between">
<span className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm px-space-sm py-0.5 rounded-full flex items-center gap-1 font-bold">
                  INFO / HSM
                </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">09:00:00 EAT</span>
</div>
<div>
<h4 className="font-label-lg text-label-lg text-on-surface">SESSION_ROOT_KEY_ATTESTATION</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Actor: <strong className="text-on-surface">System Cron / Enclave Daemon</strong>
</p>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                  Target: Hardware Security Module #01 (Kololo DC)
                </p>
</div>
<div className="flex items-center justify-between pt-1 text-on-surface-variant">
<div className="flex items-center gap-1 font-currency-code text-currency-code font-mono bg-surface-container px-2 py-0.5 rounded">
<Icon name="lock" className="text-[12px] text-tertiary" />
<span>0x224a...bf12</span>
</div>
<span className="text-tertiary font-label-sm text-label-sm flex items-center gap-0.5">
<Icon name="check" className="text-[14px]" /> Auto-Attested
                </span>
</div>
</div>
</div>
</div>

<div className="p-space-sm flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span>Displaying 6 of 14,892 committed events</span>
<div className="flex items-center gap-1">
<button className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center hover:bg-surface-container text-on-surface shadow-sm">
<Icon name="chevron_left" className="text-[18px]" />
</button>
<span className="px-2 font-label-sm text-label-sm">Page 1 / 2,482</span>
<button className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center hover:bg-surface-container text-on-surface shadow-sm">
<Icon name="chevron_right" className="text-[18px]" />
</button>
</div>
</div>
</div>

<div className="lg:col-span-7 bg-surface-container-lowest rounded-xl shadow-md p-space-xl space-y-space-lg">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-md bg-surface-container-low/50 -mx-space-xl -mt-space-xl p-space-xl rounded-t-xl">
<div className="space-y-space-xs">
<div className="flex items-center gap-space-sm">
<span className="font-headline-sm text-headline-sm text-on-surface">Forensic Dossier: #LOG-88491-UG</span>
<span className="bg-tertiary-container/10 text-tertiary font-label-sm text-label-sm px-space-sm py-0.5 rounded-full flex items-center gap-1 font-bold">
<Icon name="shield" className="text-[14px]" />
                CRYPTOGRAPHICALLY VALID
              </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Committed to Ledger Block #891,442 • Merkle Root: <span className="font-mono text-on-surface font-medium">0x4a99fc...003e</span>
</p>
</div>
<div className="flex items-center gap-space-xs">
<span className="text-tertiary flex items-center gap-1 font-label-sm text-label-sm px-space-sm py-1 bg-surface-container-lowest rounded-lg shadow-sm">
<Icon name="verified" className="text-[16px]" /> Proof Verified
            </span>
</div>
</div>

<div className="space-y-space-sm">
<div className="flex items-center justify-between">
<h3 className="font-label-lg text-label-lg text-on-surface flex items-center gap-2">
<Icon name="fingerprint" className="text-primary text-[20px]" />
<span>Event Context &amp; Environment Metadata</span>
</h3>
<span className="font-label-sm text-label-sm text-outline">SEC-LEVEL: A1</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm bg-surface-container-low p-space-md rounded-xl">
<div className="space-y-1">
<span className="font-label-sm text-label-sm text-on-surface-variant">Action Type &amp; Scope</span>
<div className="font-label-md text-label-md text-on-surface">Role Elevation &gt; SUPER_ADMIN</div>
</div>
<div className="space-y-1">
<span className="font-label-sm text-label-sm text-on-surface-variant">Origin IP &amp; Geolocation</span>
<div className="font-label-md text-label-md text-on-surface flex items-center gap-1">
<span>196.12.140.22</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">(Kampala Central, Kololo NOC)</span>
</div>
</div>
<div className="space-y-1">
<span className="font-label-sm text-label-sm text-on-surface-variant">Device &amp; Hardware Key</span>
<div className="font-label-md text-label-md text-on-surface flex items-center gap-1 truncate">
<span>Firefox 131.0 on macOS</span>
<span className="bg-surface-container-lowest text-tertiary px-1.5 py-0.5 rounded text-[11px] font-bold">YubiKey 5C NFC</span>
</div>
</div>
<div className="space-y-1">
<span className="font-label-sm text-label-sm text-on-surface-variant">Session Security Protocol</span>
<div className="font-label-md text-label-md text-on-surface truncate">
<span className="font-mono text-[12px]">sess_live_99a8b417c</span>
<span className="text-tertiary ml-1 text-label-sm">• TLS 1.3 Strict Mutual Auth</span>
</div>
</div>
</div>
</div>

<div className="space-y-space-sm">
<h3 className="font-label-lg text-label-lg text-on-surface flex items-center gap-2">
<Icon name="group_add" className="text-primary text-[20px]" />
<span>Multi-Signature Consensus &amp; Governance Evidence</span>
</h3>
<div className="space-y-space-sm">

<div className="bg-surface-container-low p-space-md rounded-xl flex items-start justify-between gap-space-md">
<div className="flex items-start gap-space-sm">
<div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary font-label-md text-label-md mt-0.5">
                  KR
                </div>
<div className="space-y-0.5">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface">Kizito Ronald (Lead Super Admin)</span>
<span className="bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm px-2 py-0.2 rounded-full">Primary Authorizer</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                    Staff ID: ADM-001 • Signature method: Master Credential Vault + Biometric Touch ID
                  </p>
<p className="font-body-sm text-body-sm text-tertiary flex items-center gap-1 text-[11px]">
<Icon name="check_circle" className="text-[13px]" /> Attested: 24 Oct 2025 at 14:18:02 EAT
                  </p>
</div>
</div>
<Icon name="verified" className="text-tertiary text-[20px]" />
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex items-start justify-between gap-space-md">
<div className="flex items-start gap-space-sm">
<div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-on-secondary font-label-md text-label-md mt-0.5">
                  AK
                </div>
<div className="space-y-0.5">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface">Arthur Kato (Secondary Super Admin)</span>
<span className="bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm px-2 py-0.2 rounded-full">Consensus Co-Signer</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                    Staff ID: ADM-002 • Signed via FIDO2 Hardware Token (NFC Key #9810-UG)
                  </p>
<p className="font-body-sm text-body-sm text-tertiary flex items-center gap-1 text-[11px]">
<Icon name="check_circle" className="text-[13px]" /> Attested: 24 Oct 2025 at 14:18:19 EAT
                  </p>
</div>
</div>
<Icon name="verified" className="text-tertiary text-[20px]" />
</div>
</div>

<div className="p-space-md bg-surface-container rounded-xl flex items-start gap-space-sm text-on-surface-variant">
<Icon name="gavel" className="text-primary text-[18px] mt-0.5" />
<div className="text-body-sm font-body-sm">
<span className="font-label-md text-label-md text-on-surface">Legal Governance Justification:</span>
              "Appointed Interim Chief Compliance Officer per Board Resolution BR-2025-09 (Uganda Data Protection &amp; Privacy Compliance Mandate)."
            </div>
</div>
</div>

<div className="space-y-space-sm">
<div className="flex items-center justify-between">
<h3 className="font-label-lg text-label-lg text-on-surface flex items-center gap-2">
<Icon name="terminal" className="text-primary text-[20px]" />
<span>Signed Ledger Block &amp; Cryptographic Attestation</span>
</h3>
<button className="flex items-center gap-1 px-space-sm py-1 bg-surface-container-low hover:bg-surface-container rounded-lg text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-colors" id="copyPayloadBtn">
<Icon name="content_copy" className="text-[14px]" />
<span>Copy JSON Payload</span>
</button>
</div>
<div className="relative bg-inverse-surface text-inverse-on-surface rounded-xl p-space-md overflow-x-auto font-mono text-body-sm shadow-inner">
<pre className="leading-relaxed"><code id="rawPayloadCode">&#123;
  <span className="text-primary-fixed-dim">"ledger_index"</span>: 891442,
  <span className="text-primary-fixed-dim">"block_timestamp_eat"</span>: <span className="text-secondary-fixed">"2025-10-24T14:18:22+03:00"</span>,
  <span className="text-primary-fixed-dim">"prev_block_hash"</span>: <span className="text-secondary-fixed">"0x9e120aa7f39841cb029a8bb76209e81b671a5c6d31"</span>,
  <span className="text-primary-fixed-dim">"current_hash"</span>: <span className="text-secondary-fixed">"0x8f4c339a0e671bc994017f8a329efba91b0002cd"</span>,
  <span className="text-primary-fixed-dim">"event"</span>: &#123;
    <span className="text-primary-fixed-dim">"type"</span>: <span className="text-secondary-fixed">"SUPER_ADMIN_ROLE_ELEVATION"</span>,
    <span className="text-primary-fixed-dim">"origin_actor"</span>: <span className="text-secondary-fixed">"Kizito Ronald (ADM-001)"</span>,
    <span className="text-primary-fixed-dim">"grantee"</span>: <span className="text-secondary-fixed">"Patricia Namubiru (ADM-004)"</span>,
    <span className="text-primary-fixed-dim">"quorum"</span>: <span className="text-secondary-fixed">"2/2_REQUIRING_BOARD_MINUTES_REF"</span>
  &#125;,
  <span className="text-primary-fixed-dim">"ecdsa_signature_r"</span>: <span className="text-secondary-fixed">"0x4b78fa9e01...77a1"</span>,
  <span className="text-primary-fixed-dim">"ecdsa_signature_s"</span>: <span className="text-secondary-fixed">"0x902f1a6b82...02cc"</span>,
  <span className="text-primary-fixed-dim">"hsm_root_key_fingerprint"</span>: <span className="text-secondary-fixed">"SHA256:UgCart-HSM-KLA-1"</span>,
  <span className="text-primary-fixed-dim">"stanbic_reconciliation_ref"</span>: <span className="text-secondary-fixed">"STAN-UG-REC-20251024-88914"</span>
&#125;</code></pre>
</div>
</div>

<div className="flex flex-wrap items-center justify-between gap-space-md pt-space-sm">
<div className="flex items-center gap-space-sm flex-wrap">
<button className="px-space-md h-10 bg-surface-container-low hover:bg-surface-container text-on-surface rounded-xl font-label-md text-label-md flex items-center gap-1.5 transition-colors">
<Icon name="picture_as_pdf" className="text-[18px] text-primary" />
<span>Download Certificate (PDF)</span>
</button>
<button className="px-space-md h-10 bg-surface-container-low hover:bg-surface-container text-on-surface rounded-xl font-label-md text-label-md flex items-center gap-1.5 transition-colors" id="reverifyBtn">
<Icon name="security_update_good" className="text-[18px] text-tertiary" />
<span>Re-Verify Against Stanbic Anchor</span>
</button>
</div>
<div className="text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span>Immutable WORM Storage: Active</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-md">
<div className="flex items-start gap-space-md">
<div className="w-10 h-10 rounded-xl bg-tertiary-container/10 flex items-center justify-center text-tertiary flex-shrink-0 mt-0.5">
<Icon name="account_balance" className="text-[24px]" />
</div>
<div className="space-y-1">
<h4 className="font-label-lg text-label-lg text-on-surface">Legal Admissibility &amp; Cryptographic Immutability Guarantee</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-4xl">
            All audit logs are cryptographically sealed pursuant to the <strong className="text-on-surface">Uganda Electronic Transactions Act (2011) §18</strong> and the <strong className="text-on-surface">Bank of Uganda National Payment Systems (NPS) Regulatory Ledger Standards</strong>. Zero-knowledge rollup hashes are immutably anchored every 10 minutes to Stanbic Bank Uganda’s Institutional Trust Anchor.
          </p>
</div>
</div>
<div className="flex items-center gap-space-md flex-shrink-0">
<div className="text-right hidden sm:block">
<div className="font-label-md text-label-md text-on-surface">Bank of Uganda NPS-04</div>
<div className="font-label-sm text-label-sm text-tertiary">Compliance Audited • 2025</div>
</div>
<Icon name="shield" className="text-[36px] text-tertiary" />
</div>
</div>
</div>
</div>
</main></div>
    </div>
  );
};

export default Desktop;
