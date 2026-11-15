// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/admin/audit_log_security_ledger_swiftcart_desktop_dark/code.html
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
      
      <div className="pl-72"><main className="w-full pt-16 bg-surface-dark min-h-screen"><div className="flex flex-col w-full">
<div className="p-space-lg lg:p-margin-desktop flex flex-col gap-space-lg max-w-[1720px] mx-auto w-full">

<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md bg-container-dark-low p-space-md lg:p-space-lg rounded-xl shadow-lg">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-body-sm text-body-sm text-outline">Admin Operations</span>
<span className="font-label-sm text-label-sm text-outline-variant">/</span>
<span className="font-body-sm text-body-sm text-outline">Security &amp; Compliance</span>
<span className="font-label-sm text-label-sm text-outline-variant">/</span>
<span className="font-label-md text-label-md text-on-surface">Audit Log &amp; Security Ledger</span>
</div>
<div className="flex items-center gap-space-sm mt-1 flex-wrap">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-escrow/10 text-emerald-escrow">
<span className="h-2 w-2 rounded-full bg-emerald-escrow animate-pulse"></span>
<span className="font-label-sm text-label-sm tracking-wider uppercase">UG-LEDGER: IMMUTABLE SYNCHRONIZED</span>
</div>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-secondary">
<Icon name="lock_reset" className="text-[14px]" />
            SHA-256 Hash Chain Verified
          </span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-surface-container font-label-sm text-label-sm text-outline">
<Icon name="hub" className="text-[14px]" />
            Block Index: #891,442
          </span>
</div>
</div>
<div className="flex items-center gap-space-sm flex-wrap">
<button className="h-10 px-4 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-md text-label-md transition-all flex items-center gap-2 shadow-sm active:scale-95" id="verifyMerkleBtn">
<Icon name="verified" className="text-secondary text-[18px]" />
<span>Verify Merkle Proofs</span>
</button>
<button className="h-10 px-4 rounded-lg bg-gradient-to-r from-action-gradient-start to-action-gradient-end hover:opacity-95 text-white font-label-md text-label-md transition-all flex items-center gap-2 shadow-md shadow-primary-container/20 active:scale-95" id="exportCsvBtn">
<Icon name="file_download" className="text-[18px]" />
<span>Export Forensic CSV</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">

<div className="bg-container-dark-low rounded-xl p-space-md flex flex-col justify-between shadow-md relative overflow-hidden group">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Total Audited Events (24h)</span>
<span className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">14,892</span>
</div>
<div className="w-10 h-10 rounded-lg bg-secondary-container/40 flex items-center justify-center text-secondary">
<Icon name="database" className="text-[22px]" />
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-emerald-escrow">
<Icon name="trending_up" className="text-[15px]" />
            +8.4% vs avg
          </span>
<span className="font-body-sm text-body-sm text-outline">100% cryptographic capture</span>
</div>
<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary/40 via-secondary to-transparent"></div>
</div>

<div className="bg-container-dark-low rounded-xl p-space-md flex flex-col justify-between shadow-md relative overflow-hidden group">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">High-Consequence Privileged</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-headline-lg text-headline-lg text-amber-warning tracking-tight">7</span>
<span className="font-label-md text-label-md text-on-surface-variant">Critical Ops</span>
</div>
</div>
<div className="w-10 h-10 rounded-lg bg-amber-warning/10 flex items-center justify-center text-amber-warning">
<Icon name="key" className="text-[22px]" />
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">3 Role • 2 Escrow • 2 Root</span>
<span className="font-label-sm text-label-sm text-tertiary">All 2FA Confirmed</span>
</div>
<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-warning/40 via-amber-warning to-transparent"></div>
</div>

<div className="bg-container-dark-low rounded-xl p-space-md flex flex-col justify-between shadow-md relative overflow-hidden group">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Node Integrity &amp; Latency</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-headline-lg text-headline-lg text-tertiary-fixed tracking-tight">99.99%</span>
<span className="font-label-md text-label-md text-emerald-escrow">Uptime</span>
</div>
</div>
<div className="w-10 h-10 rounded-lg bg-emerald-escrow/10 flex items-center justify-center text-emerald-escrow">
<Icon name="security" className="text-[22px]" />
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between">
<span className="font-body-sm text-body-sm text-outline">Stanbic Anchor synced</span>
<span className="font-label-sm text-label-sm text-secondary-fixed">2m ago</span>
</div>
<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-tertiary/40 via-emerald-escrow to-transparent"></div>
</div>

<div className="bg-container-dark-low rounded-xl p-space-md flex flex-col justify-between shadow-md relative overflow-hidden group">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Security Anomaly Score</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-headline-lg text-headline-lg text-on-surface tracking-tight">0</span>
<span className="font-label-md text-label-md text-emerald-escrow">Active Breaches</span>
</div>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-emerald-escrow">
<Icon name="verified_user" className="text-[22px]" />
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between">
<span className="font-body-sm text-body-sm text-outline">Enclave chassis sealed</span>
<span className="font-label-sm text-label-sm text-tertiary">0 Tamper Alerts</span>
</div>
<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-container/40 via-action-gradient-start to-transparent"></div>
</div>
</div>

<div className="bg-container-dark-low p-space-md rounded-xl shadow-md flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-space-md">
<div className="relative flex-1">
<Icon name="manage_search" className="absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[19px]" />
<input className="w-full h-11 pl-10 pr-4 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm placeholder:text-outline-variant focus:outline-none focus:ring-1 focus:ring-primary transition-all" id="ledgerSearchInput" placeholder="Filter by hash (0x...), officer name, staff ID, IP, or order ref..." type="text" />
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-2 flex-wrap items-center">

<div className="relative">
<select className="w-full h-11 appearance-none bg-surface-container-low text-on-surface font-label-md text-label-md pl-3 pr-8 rounded-lg cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary">
<option>Category: All</option>
<option>Privileged Escalation</option>
<option>Escrow &amp; Funds</option>
<option>KYC &amp; Onboarding</option>
<option>Platform Settings</option>
<option>Dispatch &amp; Riders</option>
</select>
<Icon name="arrow_drop_down" className="absolute right-2.5 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[18px]" />
</div>

<div className="relative">
<select className="w-full h-11 appearance-none bg-surface-container-low text-on-surface font-label-md text-label-md pl-3 pr-8 rounded-lg cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary">
<option>Severity: All</option>
<option>Critical Only</option>
<option>High Warning</option>
<option>Medium Audit</option>
<option>Standard Info</option>
</select>
<Icon name="arrow_drop_down" className="absolute right-2.5 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[18px]" />
</div>

<div className="relative">
<select className="w-full h-11 appearance-none bg-surface-container-low text-on-surface font-label-md text-label-md pl-3 pr-8 rounded-lg cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary">
<option>Actor: All Officers</option>
<option>Kizito Ronald (ADM-001)</option>
<option>Patricia Namubiru (ADM-004)</option>
<option>Sarah Auma (ADM-012)</option>
<option>Brian Mukasa (ADM-022)</option>
<option>Automated Enclave Daemon</option>
</select>
<Icon name="arrow_drop_down" className="absolute right-2.5 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[18px]" />
</div>

<div className="relative">
<select className="w-full h-11 appearance-none bg-surface-container-low text-on-surface font-label-md text-label-md pl-3 pr-8 rounded-lg cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary">
<option>Today: Oct 24 (EAT)</option>
<option>Last 24 Hours</option>
<option>Last 7 Days</option>
<option>Custom Window...</option>
</select>
<Icon name="calendar_today" className="absolute right-2.5 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[18px]" />
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<div className="lg:col-span-7 bg-container-dark-low rounded-xl p-space-md lg:p-space-lg flex flex-col gap-space-md shadow-lg">

<div className="flex items-center justify-between pb-space-xs flex-wrap gap-2">
<div className="flex items-center gap-1.5 p-1 rounded-lg bg-surface-container-low overflow-x-auto max-w-full">
<button className="px-3 py-1.5 rounded-md bg-primary-container text-on-primary-container font-label-sm text-label-sm shadow-sm transition-all whitespace-nowrap">
              All Logs (14,892)
            </button>
<button className="px-3 py-1.5 rounded-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-sm text-label-sm transition-all whitespace-nowrap">
              Privileged (7)
            </button>
<button className="px-3 py-1.5 rounded-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-sm text-label-sm transition-all whitespace-nowrap">
              Financial &amp; Escrow (412)
            </button>
<button className="px-3 py-1.5 rounded-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-sm text-label-sm transition-all whitespace-nowrap">
              Auth &amp; 2FA (1,290)
            </button>
</div>
<div className="flex items-center gap-1 font-body-sm text-body-sm text-outline">
<Icon name="bolt" className="text-[16px] text-tertiary" />
<span>Real-time Stream: Active</span>
</div>
</div>

<div className="flex flex-col gap-2.5" id="auditItemsContainer">

<div className="audit-item active p-space-md rounded-xl bg-surface-container-high ring-1 ring-primary/40 flex flex-col gap-space-xs cursor-pointer hover:bg-surface-bright transition-all shadow-md relative" data-id="LOG-88491-UG">
<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded font-label-sm text-label-sm bg-danger-penalty/20 text-danger-penalty uppercase font-bold tracking-wider">CRITICAL</span>
<span className="font-code-display text-[15px] font-bold text-on-surface">SUPER_ADMIN_ROLE_ELEVATION</span>
</div>
<span className="font-label-sm text-label-sm text-outline whitespace-nowrap">14:18:22 EAT</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-body-sm font-body-sm text-on-surface-variant mt-1">
<div>Actor: <strong className="text-on-surface">Kizito Ronald</strong> <span className="text-outline font-label-sm text-label-sm">(ADM-001)</span></div>
<div>Target: <strong className="text-secondary">Patricia Namubiru</strong> <span className="text-outline font-label-sm text-label-sm">(ADM-004)</span></div>
</div>
<div className="flex items-center justify-between pt-2 mt-1 text-label-sm font-label-sm flex-wrap gap-2">
<div className="flex items-center gap-2 font-mono text-outline">
<Icon name="fingerprint" className="text-[15px] text-tertiary" />
<span>0x8f4c3a2899d...91b0</span>
</div>
<div className="flex items-center gap-1 text-emerald-escrow">
<Icon name="how_to_reg" className="text-[16px]" />
<span>Dual-Sig: Approved (Consensus 2/2)</span>
</div>
</div>
<div className="absolute left-0 top-3 bottom-3 w-1 bg-action-gradient-start rounded-r"></div>
</div>

<div className="audit-item p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col gap-space-xs cursor-pointer shadow-sm" data-id="LOG-88490-UG">
<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded font-label-sm text-label-sm bg-amber-warning/20 text-amber-warning uppercase font-bold tracking-wider">HIGH</span>
<span className="font-code-display text-[15px] font-bold text-on-surface">ESCROW_MANUAL_DISBURSEMENT_OVERRIDE</span>
</div>
<span className="font-label-sm text-label-sm text-outline whitespace-nowrap">13:45:10 EAT</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-body-sm font-body-sm text-on-surface-variant mt-1">
<div>Actor: <strong className="text-on-surface">Sarah Auma</strong> <span className="text-outline font-label-sm text-label-sm">(ADM-012)</span></div>
<div>Target: <span className="text-emerald-escrow font-semibold">Order #SC-98241</span> (SoundCore UG)</div>
</div>
<div className="flex items-center justify-between pt-2 mt-1 text-label-sm font-label-sm flex-wrap gap-2">
<div className="flex items-center gap-2 font-mono text-outline">
<Icon name="tag" className="text-[15px]" />
<span>0x3a7ef41098b...44c1</span>
</div>
<div className="text-secondary font-normal">
                Reason: NIRA doorstep match confirmed
              </div>
</div>
</div>

<div className="audit-item p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col gap-space-xs cursor-pointer shadow-sm" data-id="LOG-88489-UG">
<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded font-label-sm text-label-sm bg-danger-penalty/15 text-danger-penalty uppercase font-bold tracking-wider">HIGH</span>
<span className="font-code-display text-[15px] font-bold text-on-surface">MERCHANT_STOREFRONT_FREEZE</span>
</div>
<span className="font-label-sm text-label-sm text-outline whitespace-nowrap">12:30:04 EAT</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-body-sm font-body-sm text-on-surface-variant mt-1">
<div>Actor: <strong className="text-on-surface">Kizito Ronald</strong> <span className="text-outline font-label-sm text-label-sm">(ADM-001)</span></div>
<div>Target: <span className="text-on-surface font-semibold">Kampala Phone Hub</span> <span className="text-outline font-mono">(SC-UG-8821)</span></div>
</div>
<div className="flex items-center justify-between pt-2 mt-1 text-label-sm font-label-sm flex-wrap gap-2">
<div className="flex items-center gap-2 font-mono text-outline">
<Icon name="tag" className="text-[15px]" />
<span>0x1b9df2379aa...28fe</span>
</div>
<div className="text-danger-penalty font-semibold">
                Duration: Indefinite / Counterfeit Investigation
              </div>
</div>
</div>

<div className="audit-item p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col gap-space-xs cursor-pointer shadow-sm" data-id="LOG-88488-UG">
<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded font-label-sm text-label-sm bg-surface-variant text-secondary uppercase font-bold tracking-wider">MEDIUM</span>
<span className="font-code-display text-[15px] font-bold text-on-surface">COMMISSION_RATE_SCHEDULE_UPDATE</span>
</div>
<span className="font-label-sm text-label-sm text-outline whitespace-nowrap">11:15:40 EAT</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-body-sm font-body-sm text-on-surface-variant mt-1">
<div>Actor: <strong className="text-on-surface">Sarah Auma</strong> <span className="text-outline font-label-sm text-label-sm">(ADM-012)</span></div>
<div>Target: <span className="text-on-surface">Consumer Electronics &gt; Audio</span> <strong className="text-tertiary">(7.5%)</strong></div>
</div>
<div className="flex items-center justify-between pt-2 mt-1 text-label-sm font-label-sm flex-wrap gap-2">
<div className="flex items-center gap-2 font-mono text-outline">
<Icon name="tag" className="text-[15px]" />
<span>0x5c8a149b110...009a</span>
</div>
<div className="text-outline">
                Standard Commission Revision
              </div>
</div>
</div>

<div className="audit-item p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col gap-space-xs cursor-pointer shadow-sm" data-id="LOG-88487-UG">
<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded font-label-sm text-label-sm bg-surface-variant text-secondary uppercase font-bold tracking-wider">MEDIUM</span>
<span className="font-code-display text-[15px] font-bold text-on-surface">EMERGENCY_DISPATCH_PIN_OVERRIDE</span>
</div>
<span className="font-label-sm text-label-sm text-outline whitespace-nowrap">10:04:18 EAT</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-body-sm font-body-sm text-on-surface-variant mt-1">
<div>Actor: <strong className="text-on-surface">Brian Mukasa</strong> <span className="text-outline font-label-sm text-label-sm">(ADM-022)</span></div>
<div>Target: Docket <strong className="text-on-surface">#EXC-98235</strong> (SafeBoda #UG-882)</div>
</div>
<div className="flex items-center justify-between pt-2 mt-1 text-label-sm font-label-sm flex-wrap gap-2">
<div className="flex items-center gap-2 font-mono text-outline">
<Icon name="tag" className="text-[15px]" />
<span>0x991f884ba33...772b</span>
</div>
<div className="text-secondary font-normal">
                Field Override (Buyer SMS gateway delay)
              </div>
</div>
</div>

<div className="audit-item p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col gap-space-xs cursor-pointer shadow-sm" data-id="LOG-88486-UG">
<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded font-label-sm text-label-sm bg-secondary-container/40 text-secondary uppercase font-bold tracking-wider">INFO</span>
<span className="font-code-display text-[15px] font-bold text-on-surface">SESSION_ROOT_KEY_ATTESTATION</span>
</div>
<span className="font-label-sm text-label-sm text-outline whitespace-nowrap">09:00:00 EAT</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-body-sm font-body-sm text-on-surface-variant mt-1">
<div>Actor: <strong className="text-tertiary">System Cron / Enclave Daemon</strong></div>
<div>Target: Hardware Security Module #01 (HSM-KLA)</div>
</div>
<div className="flex items-center justify-between pt-2 mt-1 text-label-sm font-label-sm flex-wrap gap-2">
<div className="flex items-center gap-2 font-mono text-outline">
<Icon name="verified" className="text-[15px]" />
<span>0x224a1005ca7...bf12</span>
</div>
<div className="text-emerald-escrow font-semibold">
                Valid Root Checksum
              </div>
</div>
</div>
</div>

<div className="flex items-center justify-between pt-space-sm text-body-sm font-body-sm text-outline">
<span>Showing 1-6 of 14,892 verified transactions</span>
<div className="flex items-center gap-1">
<button className="h-8 w-8 rounded bg-surface-container flex items-center justify-center hover:bg-surface-container-high transition-colors" disabled={true}>
<Icon name="chevron_left" className="text-[16px]" />
</button>
<span className="px-2 font-label-sm text-label-sm text-on-surface">Page 1 of 2,482</span>
<button className="h-8 w-8 rounded bg-surface-container flex items-center justify-center hover:bg-surface-container-high transition-colors">
<Icon name="chevron_right" className="text-[16px]" />
</button>
</div>
</div>
</div>

<div className="lg:col-span-5 bg-container-dark-low rounded-xl p-space-md lg:p-space-lg flex flex-col gap-space-md shadow-xl sticky top-20">

<div className="flex items-start justify-between gap-3 pb-space-sm bg-surface-container/30 -m-space-md -mt-space-md p-space-md rounded-t-xl">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Forensic Audit Dossier</span>
<span className="h-1.5 w-1.5 rounded-full bg-emerald-escrow"></span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface tracking-tight mt-0.5">#LOG-88491-UG</span>
</div>
<div className="flex flex-col items-end gap-1">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm">
<Icon name="verified" className="text-[14px]" />
              CRYPTOGRAPHICALLY VALID
            </span>
<span className="font-label-sm text-label-sm text-outline">Block Depth: 18 Confirmations</span>
</div>
</div>

<div className="flex flex-col gap-space-sm bg-surface-container-low p-space-md rounded-lg">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline flex items-center gap-1.5">
<Icon name="shield" className="text-[16px] text-action-gradient-start" />
            Origin Security Context
          </span>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-body-sm font-body-sm pt-1">
<div>
<div className="text-outline text-label-sm font-label-sm">Action Type</div>
<div className="text-on-surface font-semibold">Super Admin Elevation</div>
</div>
<div>
<div className="text-outline text-label-sm font-label-sm">Origin IP &amp; Geolocation</div>
<div className="text-on-surface font-semibold">196.12.140.22 <span className="text-outline font-normal">(Kololo NOC)</span></div>
</div>
<div>
<div className="text-outline text-label-sm font-label-sm">Hardware Token Proof</div>
<div className="text-emerald-escrow font-semibold flex items-center gap-1">
<Icon name="fingerprint" className="text-[14px]" />
                YubiKey 5C NFC Verified
              </div>
</div>
<div>
<div className="text-outline text-label-sm font-label-sm">Browser &amp; OS Enclave</div>
<div className="text-on-surface font-semibold">Firefox 131.0 on macOS</div>
</div>
</div>
<div className="mt-1 pt-2 bg-surface-dark/40 p-2 rounded flex items-center justify-between text-body-sm font-body-sm">
<div className="flex items-center gap-2">
<Icon name="vpn_key" className="text-tertiary text-[16px]" />
<span className="text-outline font-mono text-[11px]">sess_live_99a8b417c802</span>
</div>
<span className="font-label-sm text-label-sm text-secondary bg-secondary-container/50 px-2 py-0.5 rounded">TLS 1.3 Strict Mutual Auth</span>
</div>
</div>

<div className="flex flex-col gap-space-sm bg-surface-container-low p-space-md rounded-lg">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline flex items-center gap-1.5">
<Icon name="group" className="text-[16px] text-tertiary" />
              Dual-Consensus Authorization Chain
            </span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold">2 of 2 Required Signatures</span>
</div>

<div className="p-2.5 rounded bg-surface-container flex items-start gap-3">
<div className="h-7 w-7 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-label-sm font-label-sm shrink-0 mt-0.5">
              1
            </div>
<div className="flex flex-col flex-1 min-w-0">
<div className="flex items-center justify-between gap-1">
<span className="font-label-md text-label-md text-on-surface truncate">Kizito Ronald (Lead Super Admin)</span>
<span className="font-label-sm text-label-sm text-emerald-escrow">Initiated</span>
</div>
<span className="font-body-sm text-body-sm text-outline">Verified with Master Cryptographic Password + Biometrics</span>
</div>
</div>

<div className="p-2.5 rounded bg-surface-container flex items-start gap-3">
<div className="h-7 w-7 rounded-full bg-emerald-escrow/20 text-emerald-escrow flex items-center justify-center font-bold text-label-sm font-label-sm shrink-0 mt-0.5">
              2
            </div>
<div className="flex flex-col flex-1 min-w-0">
<div className="flex items-center justify-between gap-1">
<span className="font-label-md text-label-md text-on-surface truncate">A. Kato (Secondary Super Admin ADM-002)</span>
<span className="font-label-sm text-label-sm text-emerald-escrow">Co-Signed</span>
</div>
<span className="font-body-sm text-body-sm text-outline">Hardware Token Push Authorized at 14:18:19 EAT</span>
</div>
</div>
<div className="p-2.5 rounded bg-surface-dark/70 text-body-sm font-body-sm text-on-surface-variant flex items-start gap-2">
<Icon name="gavel" className="text-amber-warning text-[18px] shrink-0 mt-0.5" />
<span>Governance Note: <strong className="text-on-surface">Appointed Interim Chief Compliance Officer</strong> per Board Resolution BR-2025-09 (Uganda NPS Directive §4).</span>
</div>
</div>

<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline flex items-center gap-1.5">
<Icon name="terminal" className="text-[16px] text-secondary" />
              Signed Cryptographic Payload &amp; Merkle Leaf
            </span>
<button className="font-label-sm text-label-sm text-primary hover:text-primary-fixed transition-colors flex items-center gap-1" id="copyJsonBtn">
<Icon name="content_copy" className="text-[14px]" />
<span>Copy JSON</span>
</button>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-lg overflow-x-auto text-[11px] font-mono leading-relaxed text-secondary-fixed shadow-inner max-h-48 scrollbar-thin">
<pre className="m-0 text-secondary">&#123;
  <span className="text-outline">"ledger_index"</span>: <span className="text-tertiary">891442</span>,
  <span className="text-outline">"event_id"</span>: <span className="text-primary">"LOG-88491-UG"</span>,
  <span className="text-outline">"prev_block_hash"</span>: <span className="text-on-surface">"0x992b11df98c8112004..."</span>,
  <span className="text-outline">"current_hash"</span>: <span className="text-emerald-escrow">"0x8f4c3a2899d00921bf3a...91b0"</span>,
  <span className="text-outline">"merkle_root"</span>: <span className="text-on-surface">"0xef4118cc92098b1088c..."</span>,
  <span className="text-outline">"signature_r"</span>: <span className="text-on-surface-variant">"0x4a7e9102c98...91"</span>,
  <span className="text-outline">"signature_s"</span>: <span className="text-on-surface-variant">"0x11fa890bc02...04"</span>,
  <span className="text-outline">"public_key_fingerprint"</span>: <span className="text-secondary">"ED25519:UG_KLA_ADM_001_NOC"</span>,
  <span className="text-outline">"timestamp_unix"</span>: <span className="text-tertiary">1729772302</span>,
  <span className="text-outline">"stanbic_reconcile_ref"</span>: <span className="text-amber-warning">"STB-TX-2025-UG-99824"</span>
&#125;</pre>
</div>
</div>

<div className="flex flex-col gap-2 pt-1">
<button className="w-full h-11 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-md text-label-md transition-all flex items-center justify-center gap-2 active:scale-95">
<Icon name="picture_as_pdf" className="text-action-gradient-start text-[18px]" />
<span>Download Cryptographic Certificate (PDF)</span>
</button>
<button className="w-full h-10 rounded-lg bg-surface-container hover:bg-surface-container-high text-secondary font-label-md text-label-md transition-all flex items-center justify-center gap-2 active:scale-95">
<Icon name="account_balance" className="text-[17px]" />
<span>Re-Verify Block Against Stanbic Trust Anchor</span>
</button>
</div>
</div>
</div>

<div className="bg-container-dark-low p-space-md lg:p-space-lg rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md shadow-md mt-space-xs">
<div className="flex items-start gap-3">
<div className="p-2 rounded-lg bg-tertiary-container/30 text-tertiary shrink-0 mt-0.5">
<Icon name="policy" className="text-[22px]" />
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Legal Compliance &amp; Regulatory Attestation</span>
<p className="font-body-sm text-body-sm text-outline mt-0.5 leading-normal max-w-4xl">
            All audit logs are immutably signed pursuant to the <strong className="text-on-surface">Uganda Electronic Transactions Act (2011) §18</strong> and <strong className="text-on-surface">Bank of Uganda National Payment Systems (NPS) Regulatory Ledger Standards</strong>. Zero-knowledge cryptographic rollups are committed to offsite cold storage nodes every 10 minutes.
          </p>
</div>
</div>
<div className="flex items-center gap-space-sm shrink-0 self-end md:self-center">
<div className="flex flex-col text-right">
<span className="font-label-sm text-label-sm text-outline">Next Consensus Rollup</span>
<span className="font-label-md text-label-md text-tertiary">03m : 42s</span>
</div>
<div className="h-9 w-9 rounded-lg bg-surface-container-high flex items-center justify-center text-tertiary">
<Icon name="autorenew" className="text-[20px] animate-spin" />
</div>
</div>
</div>
</div>
</div>
</main></div>
    </div>
  );
};

export default Desktop;
