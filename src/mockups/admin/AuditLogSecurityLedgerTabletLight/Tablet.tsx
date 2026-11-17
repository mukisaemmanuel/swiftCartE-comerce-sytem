// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/admin/audit_log_security_ledger_tablet_light/code.html
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
      
      <div className="w-full"><main className="relative pt-16 bg-surface min-h-screen"><div className="flex flex-col w-full">



<div className="p-space-lg lg:p-space-xl flex flex-col gap-space-lg">

<div className="flex flex-col md:flex-row md:items-start justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<span>Security &amp; Governance</span>
<span>/</span>
<span className="text-primary font-bold">Statutory Ledger</span>
</div>
<h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">Audit Log &amp; Security Governance Ledger</h1>
<p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1.5 flex-wrap">
<Icon name="gavel" className="text-[16px] text-tertiary" />
          Statutory Electronic Records • Compliant with Uganda Computer Misuse Act (2022) &amp; Electronic Transactions Act (2011)
        </p>
</div>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm">
<div className="flex items-center gap-space-xs px-space-md py-space-sm bg-surface-container-lowest rounded-xl shadow-sm">
<Icon name="verified" className="text-tertiary text-[18px]" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Ledger Head</span>
<span className="font-label-md text-label-md text-on-surface font-mono">Block #891,442 • 7f8c...9a2e</span>
</div>
</div>
<button className="flex items-center justify-center gap-space-xs px-space-md py-space-sm bg-primary-container text-on-primary-container font-label-lg text-label-lg rounded-xl shadow-sm hover:opacity-95 transition-all active:scale-[0.98]">
<Icon name="lock_reset" className="text-[18px]" />
<span>Export Vault (JSON/PDF)</span>
</button>
</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-space-md">

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Privileged Actions (24h)</span>
<Icon name="admin_panel_settings" className="text-primary text-[20px]" />
</div>
<div className="mt-space-sm flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-on-surface">64</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">+12% vs yesterday</span>
</div>
<div className="w-full bg-surface-container h-1 rounded-full mt-space-sm overflow-hidden">
<div className="bg-primary h-full w-[68%] rounded-full"></div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Security Anomalies</span>
<Icon name="shield_with_heart" className="text-tertiary text-[20px]" />
</div>
<div className="mt-space-sm flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-tertiary">0</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Threat Level 0</span>
</div>
<div className="w-full bg-surface-container h-1 rounded-full mt-space-sm overflow-hidden">
<div className="bg-tertiary h-full w-full rounded-full"></div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Hardware MFA Enforcement</span>
<Icon name="key" className="text-secondary text-[20px]" />
</div>
<div className="mt-space-sm flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-on-surface">100%</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">YubiKey / FIDO2</span>
</div>
<div className="w-full bg-surface-container h-1 rounded-full mt-space-sm overflow-hidden">
<div className="bg-secondary h-full w-full rounded-full"></div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Bank of Uganda Statutory</span>
<Icon name="account_balance" className="text-tertiary text-[20px]" />
</div>
<div className="mt-space-sm flex items-baseline gap-space-xs">
<span className="font-label-lg text-label-lg text-tertiary bg-surface-container px-2 py-0.5 rounded-full flex items-center gap-1 font-bold">
<span className="h-2 w-2 rounded-full bg-tertiary"></span>
            In Compliance
          </span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-space-sm">Signed Act: NPS-UG-2020</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg items-start">

<div className="md:col-span-5 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center gap-space-xs bg-surface-container-low px-space-md py-space-sm rounded-xl text-on-surface">
<Icon name="search" className="text-on-surface-variant text-[20px]" />
<input className="bg-transparent border-0 outline-none w-full font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant" placeholder="Search Actor, Docket, IP, Hash..." type="text" />
<Icon name="tune" className="text-on-surface-variant text-[18px]" />
</div>

<div className="flex items-center gap-space-xs overflow-x-auto pb-1 scrollbar-none">
<button className="px-space-sm py-1 bg-primary text-on-primary rounded-full font-label-sm text-label-sm whitespace-nowrap shadow-sm">All Logs (64)</button>
<button className="px-space-sm py-1 bg-surface-container-low text-on-surface-variant hover:bg-surface-container rounded-full font-label-sm text-label-sm whitespace-nowrap transition-colors">Escrow (28)</button>
<button className="px-space-sm py-1 bg-surface-container-low text-on-surface-variant hover:bg-surface-container rounded-full font-label-sm text-label-sm whitespace-nowrap transition-colors">Role Elevate (4)</button>
<button className="px-space-sm py-1 bg-surface-container-low text-on-surface-variant hover:bg-surface-container rounded-full font-label-sm text-label-sm whitespace-nowrap transition-colors">Overrides (12)</button>
<button className="px-space-sm py-1 bg-surface-container-low text-on-surface-variant hover:bg-surface-container rounded-full font-label-sm text-label-sm whitespace-nowrap transition-colors">Config (8)</button>
</div>
</div>

<div className="flex flex-col gap-space-sm">

<div className="audit-stream-card cursor-pointer bg-surface-container-lowest p-space-md rounded-xl shadow-md ring-2 ring-primary transition-all flex flex-col gap-space-xs relative">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="px-space-xs py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold uppercase">Log #891,442</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">14:18:22 EAT</span>
</div>
<span className="flex items-center gap-1 font-label-sm text-label-sm text-tertiary bg-surface-container px-2 py-0.5 rounded-full font-bold">
<Icon name="nfc" className="text-[14px]" />
                YubiKey Signed
              </span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface leading-tight">Escrow Adjudication Ruling Executed</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Actor: <strong className="text-on-surface">Officer Patricia Namubiru</strong> (Super Admin #KLA-8842-SA)</span>
</div>
<div className="p-space-xs bg-surface-container-low rounded-lg flex items-center justify-between text-body-sm text-on-surface">
<span className="truncate">Docket #DSP-104 (Sarah N. vs Victoria Tech)</span>
<span className="font-label-md text-label-md text-primary font-bold whitespace-nowrap">UGX 380,000 Reversal</span>
</div>
<div className="flex items-center justify-between pt-1">
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">Merkle Root: 90bdfa338...</span>
<Icon name="arrow_forward" className="text-primary text-[18px]" />
</div>
</div>

<div className="audit-stream-card cursor-pointer bg-surface-container-low hover:bg-surface-container p-space-md rounded-xl transition-all flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-bold uppercase">Log #891,441</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">14:05:10 EAT</span>
</div>
<span className="flex items-center gap-1 font-label-sm text-label-sm text-secondary bg-secondary-fixed text-on-secondary-fixed px-2 py-0.5 rounded-full font-bold">
<Icon name="pin" className="text-[14px]" />
                PIN Override
              </span>
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Remote Dispatch PIN Override</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Actor: Patricia Namubiru • Target: Order #SC-9488</span>
</div>
<div className="text-body-sm text-on-surface-variant">
              Courier Kizito Brian (Nakasero Cluster) manual token bypass verified.
            </div>
</div>

<div className="audit-stream-card cursor-pointer bg-surface-container-low hover:bg-surface-container p-space-md rounded-xl transition-all flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-bold uppercase">Log #891,438</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">12:44:00 EAT</span>
</div>
<span className="flex items-center gap-1 font-label-sm text-label-sm text-tertiary bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded-full font-bold">
<Icon name="check_circle" className="text-[14px]" />
                Catalog Approved
              </span>
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Product Moderation Approved</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Actor: David Mukasa (Catalog Lead)</span>
</div>
<div className="text-body-sm text-on-surface-variant">
              SKU #SC-UG-90214 marked compliant for direct-dispatch inventory.
            </div>
</div>

<div className="audit-stream-card cursor-pointer bg-surface-container-low hover:bg-surface-container p-space-md rounded-xl transition-all flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-bold uppercase">Log #891,435</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">10:15:30 EAT</span>
</div>
<span className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-full font-bold">
<Icon name="lock" className="text-[14px]" />
                Custody Lock
              </span>
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Shift Custody Docket Locked</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Actor: William Ssebaggala (Hub Lead) • Bay #UG-8820</span>
</div>
</div>

<div className="audit-stream-card cursor-pointer bg-surface-container-low hover:bg-surface-container p-space-md rounded-xl transition-all flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-bold uppercase">Log #891,429</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">08:30:15 EAT</span>
</div>
<span className="flex items-center gap-1 font-label-sm text-label-sm text-tertiary bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded-full font-bold">
<Icon name="sync" className="text-[14px]" />
                Auto Routine
              </span>
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Daily MoMo Liquidity Reconciliation</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Actor: System Engine • Target: MTN &amp; Airtel Aggregator</span>
</div>
</div>
</div>
</div>

<div className="md:col-span-7 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-sm border-b border-surface-container">
<div className="flex items-center gap-space-xs">
<Icon name="policy" className="text-primary text-[28px]" />
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Forensic Audit Record Inspector</h2>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider" id="inspector-block-badge">Inspection for Block Entry #891,442</span>
</div>
</div>
<div className="flex items-center gap-space-xs">
<span className="px-space-sm py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="verified_user" className="text-[14px]" />
                Seal Intact
              </span>
</div>
</div>

<div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Hardware Authenticated Session Metadata</span>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-space-md gap-y-space-sm text-body-sm">
<div>
<span className="text-on-surface-variant block font-label-sm text-label-sm">Block Index:</span>
<span className="font-mono text-on-surface font-bold">#891,442 (Height UG-2024-Q4)</span>
</div>
<div>
<span className="text-on-surface-variant block font-label-sm text-label-sm">Timestamp:</span>
<span className="text-on-surface font-medium">2024-10-24 14:18:22 EAT (11:18:22 UTC)</span>
</div>
<div>
<span className="text-on-surface-variant block font-label-sm text-label-sm">Origin Node:</span>
<span className="text-on-surface font-medium">Kampala Central Hub (#UG-HQ-KLA)</span>
</div>
<div>
<span className="text-on-surface-variant block font-label-sm text-label-sm">Actor Identity:</span>
<span className="text-on-surface font-bold">Patricia Namubiru (Level 4 Super Admin)</span>
</div>
<div>
<span className="text-on-surface-variant block font-label-sm text-label-sm">Hardware Token:</span>
<span className="font-mono text-tertiary font-bold">YubiKey 5C NFC (#YK-UG-491) - Matched</span>
</div>
<div>
<span className="text-on-surface-variant block font-label-sm text-label-sm">Client IP &amp; Interface:</span>
<span className="font-mono text-on-surface">197.239.4.18 (KCCA Fibre Node)</span>
</div>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Adjudication Ruling Payload</span>
<div className="bg-surface-container-highest/60 p-space-md rounded-xl flex flex-col gap-space-sm">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">Operation Type</span>
<div className="font-headline-sm text-headline-sm text-on-surface font-mono">ESCROW_RELEASE_RULING_REVERSAL</div>
</div>
<span className="px-space-sm py-1 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-bold uppercase">100% Refund</span>
</div>
<div className="flex flex-col gap-1 text-body-sm text-on-surface">
<span className="font-bold text-on-surface-variant">Statutory Findings &amp; Evidence:</span>
<p className="bg-surface-container-lowest p-space-sm rounded-lg text-on-surface">
                  Non-OEM Counterfeit Cable substitution verified by Nakasero Forensic Station. Serial discrepancy matches Docket #DSP-104 inspection protocol photos.
                </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-xs">
<div className="bg-surface-container-lowest p-space-sm rounded-lg flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Disbursed Capital</span>
<span className="font-price-display text-price-display text-primary whitespace-nowrap">UGX 380,000</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Via MTN MoMo API</span>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded-lg flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Beneficiary MSISDN</span>
<span className="font-label-lg text-label-lg text-on-surface mt-1 font-mono">+256 772 ••• 109</span>
<span className="font-body-sm text-body-sm text-tertiary font-bold">Instant Credit Sync</span>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded-lg flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Merchant Penalty</span>
<span className="font-label-lg text-label-lg text-error mt-1 font-bold">Formal Warning</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">0% capital penalty (1st)</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Cryptographic Chain Attestation</span>
<Icon name="lock" className="text-[16px] text-tertiary" />
</div>
<div className="flex flex-col gap-2 font-mono text-body-sm">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 bg-surface-container-lowest p-space-xs rounded-lg px-2">
<span className="text-on-surface-variant font-label-sm text-label-sm">Previous Block Hash:</span>
<span className="text-on-surface text-label-sm break-all font-bold">4e9b812a884ef19a8234bb4c0021e901a0172e7c01</span>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 bg-surface-container-lowest p-space-xs rounded-lg px-2">
<span className="text-on-surface-variant font-label-sm text-label-sm">Current Block Hash:</span>
<span className="text-primary text-label-sm break-all font-bold">7f8c0019e34bc1023a887b41982dc504eaf89a2e</span>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 bg-surface-container-lowest p-space-xs rounded-lg px-2">
<span className="text-on-surface-variant font-label-sm text-label-sm">Merkle Root:</span>
<span className="text-tertiary text-label-sm break-all font-bold">90bdfa338c29188a12399eef11082aa371011a2</span>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-space-sm pt-space-xs">
<button className="flex-1 flex items-center justify-center gap-space-xs px-space-md py-space-sm bg-primary-container text-on-primary-container font-label-lg text-label-lg rounded-xl shadow-md hover:opacity-95 transition-all active:scale-[0.98]">
<Icon name="picture_as_pdf" className="text-[20px]" />
<span>Download Witness Certificate (PDF)</span>
</button>
<button className="flex items-center justify-center gap-space-xs px-space-md py-space-sm bg-surface-container text-on-surface hover:bg-surface-container-high font-label-lg text-label-lg rounded-xl transition-all active:scale-[0.98]">
<Icon name="flag" className="text-[20px]" />
<span>Flag for PwC / BOU Audit</span>
</button>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex items-center gap-space-md">
<Icon name="verified" className="text-secondary text-[24px]" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Tamper-Proof Audit Trail</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Each record is cryptographically signed using secp256k1 curves anchored across MTN and Airtel node aggregators.</span>
</div>
</div>
</div>
</div>
</div>
</div></main></div>
    </div>
  );
};

export default Tablet;
