// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/super-admin/audit_log_swiftcart_super_admin/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface AuditLogSwiftcartSuperAdminProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const AuditLogSwiftcartSuperAdmin: React.FC<AuditLogSwiftcartSuperAdminProps> = (props) => {
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
      
      <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><button type="button" className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 mr-2" aria-label="Toggle Theme" title="Toggle Theme" onClick={() => toggleTheme()}>{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}</button><div className="flex items-center gap-space-xs"><button className="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors active:scale-95 text-on-surface" type="button"><Icon name="arrow_back" className="text-[24px]" /></button><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/swiftcart-logo-icon.png" /><h1 className="font-headline-sm text-headline-sm text-on-surface tracking-tight truncate max-w-[170px]">Audit Log   Swiftcart Admin</h1></div><div className="flex items-center gap-space-xs"><button className="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant" title="Toggle theme" type="button"><Icon name="routine" className="text-[20px]" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm text-on-primary font-bold text-label-sm ring-2 ring-primary-fixed">SA</div></div></div></header>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-safe bg-surface"><div className="flex flex-col w-full">

<div className="w-full bg-inverse-surface text-inverse-on-surface px-margin py-space-sm flex items-center justify-between gap-space-xs shadow-sm">
<div className="flex items-center gap-space-xs min-w-0">
<Icon name="verified_user" className="text-[16px] text-tertiary-fixed shrink-0" />
<p className="font-label-sm text-label-sm tracking-wide uppercase truncate text-inverse-on-surface">
        Immutable Security Audit Trail • Read Only • Root Ledger UG-KLA-01
      </p>
</div>
<span className="inline-flex items-center px-space-xs py-[2px] rounded bg-tertiary/30 text-tertiary-fixed font-label-sm text-[9px] uppercase tracking-wider shrink-0">
      Live Sync
    </span>
</div>

<div className="px-margin pt-space-md">
<div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex items-start gap-space-sm"><div className="w-8 h-8 rounded-lg bg-tertiary-container/20 flex items-center justify-center shrink-0 text-tertiary"><Icon name="shield_lock" className="text-[20px]" /></div><div className="min-w-0 flex-1"><div className="flex items-center gap-space-xs mb-[2px]"><span className="font-label-md text-label-md text-on-surface">Platform Activity Trail</span><span className="w-1.5 h-1.5 rounded-full bg-tertiary shrink-0"></span></div><p className="font-body-sm text-body-sm text-secondary leading-snug">Every administrative override, commission change, and user status change is logged with timestamp and Admin ID.</p></div></div>
</div>

<div className="px-margin pt-space-md pb-space-xs flex flex-col gap-space-sm">
<div className="flex items-center justify-between gap-space-sm">

<button className="group flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-primary-container text-on-primary transition-all active:scale-95 shadow-sm" id="sa-toggle" type="button">
<Icon name="verified" className="text-[18px]" />
<span className="font-label-md text-label-md font-semibold">Super Admin Actions Only</span>
<span className="w-2 h-2 rounded-full bg-surface-container-lowest animate-pulse ml-0.5"></span>
</button>

<button className="flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-highest text-on-surface hover:bg-surface-container-high transition-colors active:scale-95" type="button">
<Icon name="download" className="text-[18px] text-primary" />
<span className="font-label-md text-label-md font-semibold">Export</span>
<Icon name="expand_more" className="text-[16px] text-secondary" />
</button>
</div>

<div className="hidden flex-col gap-space-xs p-space-sm bg-surface-container rounded-xl shadow-md transition-all" id="export-dropdown">
<div className="flex items-center justify-between pb-space-xs px-space-xs">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Cryptographic Export Options</span>
<span className="font-label-sm text-label-sm text-tertiary flex items-center gap-[2px]">
<Icon name="lock" className="text-[12px]" /> Hardware Sign
        </span>
</div>
<div className="grid grid-cols-2 gap-space-xs">
<button className="flex flex-col p-space-sm rounded-lg bg-surface-container-lowest hover:bg-surface-bright text-left active:scale-98 transition-transform" type="button">
<div className="flex items-center gap-space-xs text-primary mb-1">
<Icon name="data_object" className="text-[18px]" />
<span className="font-label-md text-label-md font-bold text-on-surface">CSV / JSON Hash</span>
</div>
<span className="font-body-sm text-[11px] text-secondary">SHA-256 manifest chained</span>
</button>
<button className="flex flex-col p-space-sm rounded-lg bg-surface-container-lowest hover:bg-surface-bright text-left active:scale-98 transition-transform" type="button">
<div className="flex items-center gap-space-xs text-primary mb-1">
<Icon name="picture_as_pdf" className="text-[18px]" />
<span className="font-label-md text-label-md font-bold text-on-surface">Signed PDF</span>
</div>
<span className="font-body-sm text-[11px] text-secondary">BOU compliance stamped</span>
</button>
</div>
</div>
</div>

<div className="px-margin pt-space-sm flex flex-col gap-space-sm">

<div className="relative w-full">
<div className="absolute inset-y-0 left-0 pl-space-md flex items-center pointer-events-none text-secondary">
<Icon name="search" className="text-[20px]" />
</div>
<input className="w-full h-11 pl-10 pr-space-md rounded-xl bg-surface-container-low text-on-surface placeholder:text-secondary font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest focus:shadow-md transition-all" placeholder="Filter by Staff, User, Hash, or Event Type..." type="text" />
<div className="absolute inset-y-0 right-0 pr-space-xs flex items-center">
<button className="w-8 h-8 rounded-lg flex items-center justify-center text-secondary hover:text-on-surface">
<Icon name="tune" className="text-[18px]" />
</button>
</div>
</div>

<div className="flex items-center gap-space-xs overflow-x-auto pb-space-xs -mx-margin px-margin no-scrollbar">
<button className="whitespace-nowrap px-space-md py-1.5 rounded-full bg-on-secondary-fixed text-surface-container-lowest font-label-md text-label-md font-semibold shrink-0 shadow-sm" type="button">
        All Events (142)
      </button>
<button className="whitespace-nowrap px-space-md py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md text-label-md font-semibold shrink-0 flex items-center gap-1" type="button">
<Icon name="shield" className="text-[14px]" />
        Super Admin Only (18)
      </button>
<button className="whitespace-nowrap px-space-md py-1.5 rounded-full bg-surface-container-low text-secondary font-label-md text-label-md shrink-0 hover:bg-surface-container-high transition-colors" type="button">
        Role Changes (6)
      </button>
<button className="whitespace-nowrap px-space-md py-1.5 rounded-full bg-surface-container-low text-secondary font-label-md text-label-md shrink-0 hover:bg-surface-container-high transition-colors" type="button">
        Commission Overrides (3)
      </button>
<button className="whitespace-nowrap px-space-md py-1.5 rounded-full bg-surface-container-low text-secondary font-label-md text-label-md shrink-0 hover:bg-surface-container-high transition-colors" type="button">
        Payout Authorizations (24)
      </button>
<button className="whitespace-nowrap px-space-md py-1.5 rounded-full bg-surface-container-low text-secondary font-label-md text-label-md shrink-0 hover:bg-surface-container-high transition-colors" type="button">
        Dispatch Unlocks (12)
      </button>
<button className="whitespace-nowrap px-space-md py-1.5 rounded-full bg-surface-container-low text-error font-label-md text-label-md shrink-0 hover:bg-error-container transition-colors" type="button">
        Emergency Actions (2)
      </button>
</div>
</div>

<div className="px-margin pt-space-md flex flex-col gap-space-md">

<article className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-container"></div>

<div className="flex items-start justify-between gap-space-xs pl-1">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-on-secondary-fixed text-surface-container-lowest font-label-sm text-label-sm font-bold tracking-wide">
<Icon name="key" className="text-[13px] text-tertiary-fixed" />
            SUPER ADMIN ACTION
          </span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
            10:14:02 AM EAT
          </span>
</div>
<Icon name="verified" className="text-[18px] text-tertiary shrink-0" />
</div>

<div className="pl-1">
<h2 className="font-headline-sm text-headline-sm text-on-surface tracking-tight flex items-center gap-space-xs">
          ROLE_ELEVATION_AUTHORIZED
        </h2>
<div className="mt-1 flex items-center gap-space-xs flex-wrap font-body-md text-body-md text-on-surface">
<span className="font-semibold text-primary">Patricia Namubiru</span>
<Icon name="trending_flat" className="text-[16px] text-secondary" />
<span className="px-2 py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm font-bold text-on-surface">
            Admin (Operations Lead)
          </span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-0.5">
          Elevated from <span className="line-through">Ops Specialist</span> by Superadmin Controller (#SA-01)
        </p>
</div>

<div className="pl-1">
<div className="rounded-lg bg-surface-container-low p-space-sm font-mono text-body-sm text-on-surface flex flex-col gap-1">
<div className="flex items-center justify-between text-secondary font-label-sm text-[10px] pb-1"><span className="">DIFF RECORD #891440-A</span><span className="text-tertiary">VERIFIED</span></div>
<p className="font-body-sm text-[11px] leading-relaxed break-all text-on-surface-variant">
<span className="text-error font-semibold">- role_before: "ops_specialist"</span><br />
<span className="text-tertiary font-semibold">+ role_after: "admin_ops_lead"</span><br />
<span className="text-primary font-semibold">+ permissions: ["payout_approve", "kyc_approve"]</span>
</p>
</div>
</div>

<div className="pl-1 pt-1 flex flex-wrap items-center justify-between gap-space-xs text-secondary font-label-sm text-label-sm"><span className="flex items-center gap-1"><Icon name="sms" className="text-[14px] text-tertiary" />2FA Confirmed via SMS</span><span className="font-mono text-body-sm text-[11px]">Admin #SA-01</span></div>
</article>

<article className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary"></div>

<div className="flex items-start justify-between gap-space-xs pl-1">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold tracking-wide">
<Icon name="percent" className="text-[13px]" />
            COMMISSION OVERRIDE
          </span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
            09:40:15 AM EAT
          </span>
</div>
<Icon name="verified" className="text-[18px] text-tertiary shrink-0" />
</div>

<div className="pl-1">
<h2 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">
          CATEGORY_RATE_UPDATED
        </h2>
<p className="font-body-md text-body-md text-on-surface font-semibold mt-1">
          Consumer Electronics &amp; Audio
        </p>
</div>

<div className="pl-1">
<div className="rounded-lg bg-surface-container-low p-space-sm flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<span className="font-body-sm text-body-sm text-secondary">Commission Delta</span>
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-secondary line-through">9.0%</span>
<Icon name="arrow_forward" className="text-[14px] text-primary" />
<span className="font-price-display text-[18px] text-primary font-bold">8.0%</span>
</div>
</div>
<div className="flex items-center justify-between text-secondary font-body-sm text-body-sm">
<span className="">Effective Schedule</span>
<span className="font-semibold text-on-surface font-label-md text-label-md">2024-11-01 00:00 EAT</span>
</div>
<div className="pt-1.5 flex items-start gap-1.5">
<Icon name="policy" className="text-[15px] text-primary shrink-0 mt-0.5" />
<p className="font-body-sm text-body-sm text-on-surface-variant italic">
              "Quarter 4 Holiday Merchant Stimulus Initiative"
            </p>
</div>
</div>
</div>

<div className="pl-1 pt-0.5 flex items-center justify-between text-secondary font-label-sm text-label-sm"><span className="">Actor: <strong className="text-on-surface">Super Admin</strong></span><span className="font-mono text-body-sm text-[11px] text-tertiary">Approved</span></div>
</article>

<article className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary"></div>

<div className="flex items-start justify-between gap-space-xs pl-1">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold tracking-wide">
<Icon name="lock_open" className="text-[13px]" />
            SECURITY UNLOCK
          </span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
            Yesterday 16:20 EAT
          </span>
</div>
<Icon name="verified" className="text-[18px] text-tertiary shrink-0" />
</div>

<div className="pl-1"><span className="">Authorized: Superadmin Override • Order #SC-9915</span><span className="text-tertiary font-medium">Resolved</span></div>

<div className="pl-1 pt-0.5 flex items-center justify-between text-secondary font-label-sm text-label-sm">
<span className="">Authorized: Superadmin Override</span>
<span className="text-tertiary font-medium">BOU Case ID: #DIS-294</span>
</div>
</article>

<article className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-tertiary-container"></div>

<div className="flex items-start justify-between gap-space-xs pl-1">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-tertiary/15 text-tertiary font-label-sm text-label-sm font-bold tracking-wide">
<Icon name="account_balance" className="text-[13px]" />
            ESCROW BATCH CLEARED
          </span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
            Yesterday 14:10 EAT
          </span>
</div>
<Icon name="verified" className="text-[18px] text-tertiary shrink-0" />
</div>

<div className="pl-1"><span className="">Provider: MTN MoMo Batch #882 • Verified by Super Admin</span><span className="font-mono text-body-sm text-[11px] text-tertiary">Cleared</span></div>

<div className="pl-1 pt-0.5 flex items-center justify-between text-secondary font-label-sm text-label-sm">
<span className="">Custodian: StandChart Escrow UG</span>
<span className="font-mono text-body-sm text-[11px] text-tertiary">TxID: 0x91da...66ea</span>
</div>
</article>
</div>

<div className="px-margin pt-space-lg">
<div className="p-space-md rounded-xl bg-surface-container-high flex flex-col gap-space-xs"><div className="flex items-center justify-between"><div className="flex items-center gap-space-xs"><span className="w-2.5 h-2.5 rounded-full bg-tertiary"></span><span className="font-label-md text-label-md font-bold text-on-surface">Audit Logging Operational</span></div><span className="font-mono text-body-sm text-[11px] text-secondary">Response time: 28ms</span></div><p className="font-body-sm text-body-sm text-secondary leading-snug">Status: Stable • All administrative overrides and ledger events are indexed and queryable in real time.</p></div>
</div>

<div className="px-margin pt-space-md pb-space-xl">
<div className="p-space-md rounded-xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-space-sm shadow-sm"><div className="flex items-center gap-space-xs text-primary"><Icon name="download" className="text-[22px]" /><span className="font-headline-sm text-headline-sm text-on-surface">Export Audit Log</span></div><p className="font-body-md text-body-md text-secondary leading-snug">Download CSV or JSON report of all administrative actions for offline review.</p><button className="w-full h-12 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-space-xs shadow-md active:scale-98 transition-transform mt-1" type="button"><Icon name="file_download" className="text-[20px]" />Export Audit Log (CSV/JSON)</button></div>
</div>

<div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none transition-all duration-300 opacity-0 translate-y-4" id="sa-toast">
<div className="px-space-md py-space-sm rounded-full bg-inverse-surface text-inverse-on-surface font-label-md text-label-md shadow-xl flex items-center gap-2">
<Icon name="verified" className="text-tertiary-fixed text-[18px]" />
<span id="toast-message" className="">Action processed</span>
</div>
</div>
</div>
<footer className="w-full py-space-md text-center text-secondary font-label-sm text-label-sm border-t border-surface-container-high bg-surface"><span className="">SwiftCart Uganda</span></footer></main>
    </div>
  );
};

export default AuditLogSwiftcartSuperAdmin;
