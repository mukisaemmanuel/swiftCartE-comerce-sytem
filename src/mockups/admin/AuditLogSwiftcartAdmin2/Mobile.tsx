// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/admin/audit_log_swiftcart_admin_2/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface AuditLogSwiftcartAdmin2Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const AuditLogSwiftcartAdmin2: React.FC<AuditLogSwiftcartAdmin2Props> = (props) => {
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
      
      <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-margin flex items-center justify-between"><button type="button" className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 mr-2" aria-label="Toggle Theme" title="Toggle Theme" onClick={() => toggleTheme()}>{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}</button><div className="flex items-center gap-space-sm"><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col"><span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Uganda Admin</span><h1 className="font-headline-sm text-headline-sm text-on-surface truncate leading-tight">Audit Log</h1></div></div><div className="flex items-center gap-space-xs"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div><div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-label-md text-label-md font-bold text-on-surface select-none">AD</div></div></div></header>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-20 bg-surface"><div className="flex flex-col w-full px-margin pb-space-xl gap-space-md">

<div className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs text-primary">
<Icon name="history_toggle_off" className="text-[20px]" />
<span className="font-label-md text-label-md uppercase tracking-wider font-bold">Activity Ledger</span>
</div>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm font-bold">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
        Live Feed
      </span>
</div>
<div>
<p className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">System Activity</p>
<p className="font-body-sm text-body-sm text-secondary">System activity &amp; administrative actions log</p>
</div>

<div className="grid grid-cols-3 gap-space-xs pt-space-xs">
<div className="bg-surface-container-low rounded-lg p-space-xs flex flex-col">
<span className="font-label-sm text-label-sm text-secondary">Actions Today</span>
<span className="font-headline-sm text-headline-sm text-on-surface">28</span>
</div>
<div className="bg-surface-container-low rounded-lg p-space-xs flex flex-col">
<span className="font-label-sm text-label-sm text-secondary">Flagged Holds</span>
<span className="font-headline-sm text-headline-sm text-error">3</span>
</div>
<div className="bg-surface-container-low rounded-lg p-space-xs flex flex-col">
<span className="font-label-sm text-label-sm text-secondary">Payouts Rel.</span>
<span className="font-headline-sm text-headline-sm text-tertiary">14</span>
</div>
</div>
</div>

<div className="relative w-full">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-secondary">
<Icon name="search" className="text-[20px]" />
</div>
<input className="w-full pl-10 pr-10 py-3 bg-surface-container-lowest text-on-surface font-body-sm text-body-sm rounded-xl shadow-sm placeholder:text-secondary/70 focus:outline-none focus:bg-surface-container-lowest" placeholder="Search by admin, action, or target ID..." type="text" />
<div className="absolute inset-y-0 right-0 pr-3 flex items-center text-secondary">
<Icon name="tune" className="text-[18px]" />
</div>
</div>

<div className="flex items-center gap-space-xs overflow-x-auto no-scrollbar py-0.5 -mx-margin px-margin">
<button className="shrink-0 px-3.5 py-1.5 rounded-full bg-on-surface text-surface-container-lowest font-label-md text-label-md shadow-sm">
      All Actions
    </button>
<button className="shrink-0 px-3.5 py-1.5 rounded-full bg-surface-container-lowest text-secondary hover:text-on-surface font-label-md text-label-md shadow-sm">
      Seller Status
    </button>
<button className="shrink-0 px-3.5 py-1.5 rounded-full bg-surface-container-lowest text-secondary hover:text-on-surface font-label-md text-label-md shadow-sm">
      Payouts
    </button>
<button className="shrink-0 px-3.5 py-1.5 rounded-full bg-surface-container-lowest text-secondary hover:text-on-surface font-label-md text-label-md shadow-sm">
      Disputes
    </button>
<button className="shrink-0 px-3.5 py-1.5 rounded-full bg-surface-container-lowest text-secondary hover:text-on-surface font-label-md text-label-md shadow-sm">
      Roles
    </button>
</div>

<div className="flex flex-col gap-space-sm">

<div className="flex items-center gap-space-xs px-1 pt-space-xs">
<Icon name="calendar_today" className="text-secondary text-[16px]" />
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Today</span>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm relative overflow-hidden">

<div className="absolute left-0 top-0 bottom-0 w-1 bg-error"></div>
<div className="flex items-start justify-between gap-space-xs">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold">
<Icon name="block" className="text-[14px]" />
            Froze Seller Listings &amp; Payouts
          </span>
</div>
<span className="font-label-sm text-label-sm text-secondary shrink-0 flex items-center gap-1">
<Icon name="schedule" className="text-[14px]" />
          14:32 EAT
        </span>
</div>

<div className="flex items-start gap-space-sm bg-surface-container-low rounded-lg p-space-xs">
<div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center shrink-0">
<Icon name="store" className="text-on-surface-variant text-[18px]" />
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between gap-space-xs">
<p className="font-label-lg text-label-lg text-on-surface truncate">Kampala Phone Hub</p>
<span className="font-label-sm text-label-sm text-secondary font-bold shrink-0">#SLR-0554</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
<span className="font-semibold text-error">Reason:</span> Suspected counterfeit accessories on order #SC-ORD-9281
          </p>
</div>
</div>

<div className="flex items-center justify-between pt-1">
<div className="flex items-center gap-space-xs">
<div className="w-7 h-7 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-label-sm text-label-sm font-bold shadow-sm">
            SK
          </div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface leading-tight">Admin Sarah K.</span>
<span className="font-body-sm text-[11px] text-secondary leading-none">Operations Desk</span>
</div>
</div>
<span className="inline-flex items-center text-secondary text-[11px] font-label-sm gap-0.5">
<Icon name="verified_user" className="text-[14px]" />
          Authorized
        </span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm relative overflow-hidden">

<div className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary"></div>
<div className="flex items-start justify-between gap-space-xs">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold">
<Icon name="check_circle" className="text-[14px]" />
            Reinstated Seller
          </span>
</div>
<span className="font-label-sm text-label-sm text-secondary shrink-0 flex items-center gap-1">
<Icon name="schedule" className="text-[14px]" />
          11:15 EAT
        </span>
</div>

<div className="flex items-start gap-space-sm bg-surface-container-low rounded-lg p-space-xs">
<div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center shrink-0">
<Icon name="domain_verification" className="text-tertiary text-[18px]" />
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between gap-space-xs">
<p className="font-label-lg text-label-lg text-on-surface truncate">Kikuubo Wholesalers Direct</p>
<span className="font-label-sm text-label-sm text-secondary font-bold shrink-0">#SLR-0891</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
<span className="font-semibold text-tertiary">Reason:</span> SLA compliance plan received and delayed orders cleared
          </p>
</div>
</div>

<div className="flex items-center justify-between pt-1">
<div className="flex items-center gap-space-xs">
<div className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold shadow-sm">
            PN
          </div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface leading-tight">Super Admin Patricia N.</span>
<span className="font-body-sm text-[11px] text-secondary leading-none">Executive Governance</span>
</div>
</div>
<span className="inline-flex items-center text-secondary text-[11px] font-label-sm gap-0.5">
<Icon name="security" className="text-[14px]" />
          High Level
        </span>
</div>
</div>

<div className="flex items-center gap-space-xs px-1 pt-space-xs">
<Icon name="calendar_today" className="text-secondary text-[16px]" />
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Yesterday</span>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm relative overflow-hidden">

<div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary"></div>
<div className="flex items-start justify-between gap-space-xs">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm font-bold">
<Icon name="payments" className="text-[14px]" />
            Approved Escrow Payout
          </span>
</div>
<span className="font-label-sm text-label-sm text-secondary shrink-0 flex items-center gap-1">
<Icon name="schedule" className="text-[14px]" />
          16:45 EAT
        </span>
</div>

<div className="flex items-start gap-space-sm bg-surface-container-low rounded-lg p-space-xs">
<div className="w-8 h-8 rounded-lg bg-secondary-fixed flex items-center justify-center shrink-0">
<Icon name="account_balance_wallet" className="text-on-secondary-fixed text-[18px]" />
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between gap-space-xs">
<p className="font-label-lg text-label-lg text-on-surface truncate">SoundCore Uganda</p>
<span className="font-label-sm text-label-sm text-secondary font-bold shrink-0">#SLR-0412</span>
</div>
<div className="mt-1 flex items-baseline gap-1">
<span className="font-label-sm text-label-sm text-secondary">Disbursed:</span>
<span className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold">UGX 14,250,000</span>
</div>
</div>
</div>

<div className="flex items-center justify-between pt-1">
<div className="flex items-center gap-space-xs">
<div className="w-7 h-7 rounded-full bg-secondary-fixed-dim text-on-secondary-fixed flex items-center justify-center font-label-sm text-label-sm font-bold shadow-sm">
            DO
          </div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface leading-tight">Admin David O.</span>
<span className="font-body-sm text-[11px] text-secondary leading-none">Finance &amp; Payouts</span>
</div>
</div>
<span className="inline-flex items-center text-secondary text-[11px] font-label-sm gap-0.5">
<Icon name="task_alt" className="text-[14px]" />
          Standard Approval
        </span>
</div>
</div>

<div className="flex items-center gap-space-xs px-1 pt-space-xs">
<Icon name="history" className="text-secondary text-[16px]" />
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Prior Logs</span>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm relative overflow-hidden">

<div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-container"></div>
<div className="flex items-start justify-between gap-space-xs">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-container font-label-sm text-label-sm font-bold">
<Icon name="warning" className="text-[14px]" />
            Suspended Seller
          </span>
</div>
<span className="font-label-sm text-label-sm text-secondary shrink-0 flex items-center gap-1">
<Icon name="event" className="text-[14px]" />
          14 Oct, 10:20 EAT
        </span>
</div>

<div className="flex items-start gap-space-sm bg-surface-container-low rounded-lg p-space-xs">
<div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center shrink-0">
<Icon name="storefront" className="text-primary-container text-[18px]" />
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between gap-space-xs">
<p className="font-label-lg text-label-lg text-on-surface truncate">Masaka Gadgets Store</p>
<span className="font-label-sm text-label-sm text-secondary font-bold shrink-0">#SLR-0922</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
<span className="font-semibold text-primary">Reason:</span> Excessive order cancellation rate (&gt;15%)
          </p>
</div>
</div>

<div className="flex items-center justify-between pt-1">
<div className="flex items-center gap-space-xs">
<div className="w-7 h-7 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-label-sm text-label-sm font-bold shadow-sm">
            SK
          </div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface leading-tight">Admin Sarah K.</span>
<span className="font-body-sm text-[11px] text-secondary leading-none">Operations Desk</span>
</div>
</div>
<span className="inline-flex items-center text-secondary text-[11px] font-label-sm gap-0.5">
<Icon name="report" className="text-[14px]" />
          Flag Triggered
        </span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm relative overflow-hidden">

<div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary-fixed-dim"></div>
<div className="flex items-start justify-between gap-space-xs">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm font-bold">
<Icon name="manage_accounts" className="text-[14px]" />
            Role Updated to Staff Admin
          </span>
</div>
<span className="font-label-sm text-label-sm text-secondary shrink-0 flex items-center gap-1">
<Icon name="event" className="text-[14px]" />
          12 Oct, 09:05 EAT
        </span>
</div>

<div className="flex items-start gap-space-sm bg-surface-container-low rounded-lg p-space-xs">
<div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center shrink-0">
<Icon name="person" className="text-secondary text-[18px]" />
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between gap-space-xs">
<p className="font-label-lg text-label-lg text-on-surface truncate">Isaac Kato</p>
<span className="font-label-sm text-label-sm text-secondary font-bold shrink-0">#USR-402</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            Privileges modified from Support Agent to Staff Admin role.
          </p>
</div>
</div>

<div className="flex items-center justify-between pt-1">
<div className="flex items-center gap-space-xs">
<div className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold shadow-sm">
            PN
          </div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface leading-tight">Super Admin Patricia N.</span>
<span className="font-body-sm text-[11px] text-secondary leading-none">Executive Governance</span>
</div>
</div>
<span className="inline-flex items-center text-secondary text-[11px] font-label-sm gap-0.5">
<Icon name="badge" className="text-[14px]" />
          Role Change
        </span>
</div>
</div>
</div>

<div className="w-full py-space-md flex flex-col items-center justify-center text-center gap-space-xs">
<div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-secondary">
<Icon name="done_all" className="text-[20px]" />
</div>
<span className="font-label-md text-label-md text-secondary">Audit trail synced &amp; up to date</span>
<span className="font-body-sm text-[11px] text-secondary/70">Displaying administrative actions within the 90-day retention cycle.</span>
</div>
</div></main>
<nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.05)]" data-active-classes="text-primary font-bold"><div className="flex justify-around items-center h-16 px-space-xs"><a className="flex flex-col items-center justify-center gap-space-xs min-w-[56px] min-h-[44px] text-secondary hover:text-on-surface transition-colors" data-path="sellers-directory" href="#"><Icon name="storefront" className="text-[22px]" /><span className="font-label-sm text-label-sm">Sellers</span></a><a aria-current="page" className="flex flex-col items-center justify-center gap-space-xs min-w-[56px] min-h-[44px] transition-colors text-primary font-bold" data-path="audit-log" href="#"><Icon name="receipt_long" className="text-[22px]" /><span className="font-label-sm text-label-sm">Audit</span></a><a className="flex flex-col items-center justify-center gap-space-xs min-w-[56px] min-h-[44px] text-secondary hover:text-on-surface transition-colors" data-path="danger-zone" href="#"><Icon name="security" className="text-[22px]" /><span className="font-label-sm text-label-sm">Governance</span></a></div></nav>
    </div>
  );
};

export default AuditLogSwiftcartAdmin2;
