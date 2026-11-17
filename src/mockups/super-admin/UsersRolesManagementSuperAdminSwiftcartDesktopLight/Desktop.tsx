// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/super-admin/users_roles_management_super_admin_swiftcart_desktop_light/code.html
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
      
      <div className="pl-0"><main className="relative pt-16 min-h-screen bg-background w-full px-space-lg py-space-lg"><div className="flex flex-col w-full relative">

<div className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant mb-space-sm">
<span>Admin Operations</span>
<Icon name="chevron_right" className="text-[16px] text-outline" />
<span>Governance</span>
<Icon name="chevron_right" className="text-[16px] text-outline" />
<span className="text-primary font-bold">Users &amp; Roles</span>
</div>

<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md mb-space-lg">
<div className="space-y-1">
<div className="flex items-center gap-space-sm flex-wrap">
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Staff Users &amp; Role Governance</h1>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase tracking-wider font-bold shadow-sm">
<Icon name="shield_person" className="text-[14px]" />
          Super Admin Privileges Active
        </span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
        Manage administrative access, enforce role-based access control (RBAC), and authorize privileged role escalations across SwiftCart Uganda.
      </p>
</div>
<div className="flex items-center gap-space-sm self-start lg:self-auto shrink-0">
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-container-lowest text-on-surface font-label-lg text-label-lg shadow-sm hover:bg-surface-container transition-all">
<Icon name="history_edu" className="text-[18px] text-secondary" />
        Export Staff Audit Ledger
      </button>
<button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-container text-on-primary-container font-label-lg text-label-lg shadow-[0_4px_14px_rgba(218,55,0,0.30)] hover:scale-[1.02] active:scale-[0.98] transition-transform">
<Icon name="person_add" className="text-[18px]" />
        + Invite New Staff Member
      </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-space-lg">

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Total Staff Accounts</span>
<div className="font-headline-md text-headline-md text-on-surface mt-1">28 Active Staff</div>
</div>
<div className="p-2.5 rounded-xl bg-surface-container text-secondary">
<Icon name="badge" className="text-[22px]" />
</div>
</div>
<div className="mt-4 pt-3 flex items-center gap-1.5 font-body-sm text-body-sm text-on-surface-variant">
<Icon name="domain" className="text-[16px] text-tertiary" />
        Admin HQ &amp; Kampala Hubs
      </div>
</div>

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Super Admins</span>
<div className="font-headline-md text-headline-md text-primary mt-1">3 Officers</div>
</div>
<div className="p-2.5 rounded-xl bg-primary-fixed text-primary">
<Icon name="admin_panel_settings" className="text-[22px]" />
</div>
</div>
<div className="mt-4 pt-3 flex items-center gap-1.5 font-body-sm text-body-sm text-on-surface-variant">
<Icon name="key" className="text-[16px] text-primary" />
        two-step admin consensus required for root
      </div>
</div>

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Pending Invitations</span>
<div className="font-headline-md text-headline-md text-on-surface mt-1">2 Pending</div>
</div>
<div className="p-2.5 rounded-xl bg-secondary-fixed text-on-secondary-fixed">
<Icon name="pending_actions" className="text-[22px]" />
</div>
</div>
<div className="mt-4 pt-3 flex items-center gap-1.5 font-body-sm text-body-sm text-on-surface-variant">
<Icon name="verified_user" className="text-[16px] text-secondary" />
        URSB &amp; Security clearance submitted
      </div>
</div>

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Security Health</span>
<div className="font-headline-md text-headline-md text-tertiary mt-1">100% 2FA Enforced</div>
</div>
<div className="p-2.5 rounded-xl bg-tertiary-container text-on-tertiary-container">
<Icon name="security" className="text-[22px]" />
</div>
</div>
<div className="mt-4 pt-3 flex items-center gap-1.5 font-body-sm text-body-sm text-on-surface-variant">
<Icon name="fingerprint" className="text-[16px] text-tertiary" />
        Two-Factor Authenticator / Two-Factor Authenticator biometric
      </div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">

<div className="p-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md bg-surface-container-low">
<div className="flex items-center gap-space-md w-full md:w-auto">
<div className="relative w-full md:w-80">
<Icon name="search" className="absolute left-3 top-2.5 text-on-surface-variant text-[18px]" />
<input className="w-full pl-9 pr-4 py-2 bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm rounded-lg outline-none focus:ring-2 focus:ring-primary-container" placeholder="Filter by name, ID or station..." type="text" />
</div>
<button className="px-3 py-2 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md flex items-center gap-1.5 shadow-xs hover:bg-surface-container">
<Icon name="tune" className="text-[18px]" />
          Filter Roles
        </button>
</div>
<div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm self-end md:self-auto">
<span>Showing <strong className="text-on-surface">5</strong> of 28 records</span>
<div className="h-4 w-px bg-surface-variant mx-1"></div>
<span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface font-bold">Kampala Sector</span>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-3 px-space-lg font-bold">Staff Member</th>
<th className="py-3 px-space-md font-bold">Current Role</th>
<th className="py-3 px-space-md font-bold">Assigned Station</th>
<th className="py-3 px-space-md font-bold">2FA Method</th>
<th className="py-3 px-space-md font-bold">Status</th>
<th className="py-3 px-space-lg font-bold text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-none text-on-surface font-body-md text-body-md">

<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-4 px-space-lg">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-headline-sm text-headline-sm font-bold">
                  KR
                </div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Kizito Ronald</span>
<Icon name="shield" className="text-primary text-[16px]" />
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">kizito.r@swiftcart.ug • <span className="font-bold text-on-surface">ADM-001</span></span>
</div>
</div>
</td>
<td className="py-4 px-space-md">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold">
<Icon name="military_tech" className="text-[13px]" />
                Super Admin
              </span>
</td>
<td className="py-4 px-space-md font-body-md text-body-md">
              Kampala HQ Nakasero
            </td>
<td className="py-4 px-space-md">
<div className="inline-flex items-center gap-1 text-tertiary font-label-md text-label-md">
<Icon name="token" className="text-[16px]" />
                Two-Factor Authenticator Hardware Key
              </div>
</td>
<td className="py-4 px-space-md">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span> Active
              </span>
</td>
<td className="py-4 px-space-lg text-right">
<button className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" title="Audit Profile">
<Icon name="manage_accounts" className="text-[20px]" />
</button>
</td>
</tr>

<tr className="bg-primary-fixed/20 hover:bg-primary-fixed/30 transition-colors">
<td className="py-4 px-space-lg">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-headline-sm text-headline-sm font-bold">
                  PN
                </div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Denis Mukasa</span>
<span className="px-1.5 py-0.2 rounded bg-primary-container text-on-primary-container font-label-sm text-[9px] uppercase tracking-wider font-extrabold">Escalation Pending</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">patricia.n@swiftcart.ug • <span className="font-bold text-on-surface">ADM-004</span></span>
</div>
</div>
</td>
<td className="py-4 px-space-md">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm font-bold">
<Icon name="gavel" className="text-[13px] text-secondary" />
                Lead dispute reviewers
              </span>
</td>
<td className="py-4 px-space-md font-body-md text-body-md">
              Nakasero Desk
            </td>
<td className="py-4 px-space-md">
<div className="inline-flex items-center gap-1 text-on-surface-variant font-label-md text-label-md">
<Icon name="smartphone" className="text-[16px] text-secondary" />
                App TOTP
              </div>
</td>
<td className="py-4 px-space-md">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span> Active
              </span>
</td>
<td className="py-4 px-space-lg text-right">
<button className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-primary-container text-on-primary-container font-label-sm text-label-sm font-bold shadow-xs">
                Modify Role
              </button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-4 px-space-lg">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-surface-container text-on-surface flex items-center justify-center font-headline-sm text-headline-sm font-bold">
                  SA
                </div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Sarah Auma</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">sarah.a@swiftcart.ug • <span className="font-bold text-on-surface">ADM-012</span></span>
</div>
</div>
</td>
<td className="py-4 px-space-md">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm font-bold">
<Icon name="payments" className="text-[13px] text-tertiary" />
                Financial Operations
              </span>
</td>
<td className="py-4 px-space-md font-body-md text-body-md">
              Pesapal Payments Desk
            </td>
<td className="py-4 px-space-md">
<div className="inline-flex items-center gap-1 text-tertiary font-label-md text-label-md">
<Icon name="token" className="text-[16px]" />
                Hardware Key
              </div>
</td>
<td className="py-4 px-space-md">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span> Active
              </span>
</td>
<td className="py-4 px-space-lg text-right">
<button className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" title="Settings">
<Icon name="more_vert" className="text-[20px]" />
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-4 px-space-lg">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-surface-container text-on-surface flex items-center justify-center font-headline-sm text-headline-sm font-bold">
                  DS
                </div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">David Ssemwogerere</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">david.s@swiftcart.ug • <span className="font-bold text-on-surface">ADM-018</span></span>
</div>
</div>
</td>
<td className="py-4 px-space-md">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm font-bold">
<Icon name="inventory_2" className="text-[13px] text-secondary" />
                Catalog Review Lead
              </span>
</td>
<td className="py-4 px-space-md font-body-md text-body-md">
              Nakasero
            </td>
<td className="py-4 px-space-md">
<div className="inline-flex items-center gap-1 text-on-surface-variant font-label-md text-label-md">
<Icon name="smartphone" className="text-[16px] text-secondary" />
                App TOTP
              </div>
</td>
<td className="py-4 px-space-md">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span> Active
              </span>
</td>
<td className="py-4 px-space-lg text-right">
<button className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" title="Settings">
<Icon name="more_vert" className="text-[20px]" />
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-4 px-space-lg">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-surface-container text-on-surface flex items-center justify-center font-headline-sm text-headline-sm font-bold">
                  BM
                </div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Brian Mukasa</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">brian.m@swiftcart.ug • <span className="font-bold text-on-surface">ADM-022</span></span>
</div>
</div>
</td>
<td className="py-4 px-space-md">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm font-bold">
<Icon name="local_shipping" className="text-[13px] text-secondary" />
                Hub Logistics Supervisor
              </span>
</td>
<td className="py-4 px-space-md font-body-md text-body-md">
              William St Hub #04
            </td>
<td className="py-4 px-space-md">
<div className="inline-flex items-center gap-1 text-on-surface-variant font-label-md text-label-md">
<Icon name="smartphone" className="text-[16px] text-secondary" />
                App TOTP
              </div>
</td>
<td className="py-4 px-space-md">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span> Active
              </span>
</td>
<td className="py-4 px-space-lg text-right">
<button className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" title="Settings">
<Icon name="more_vert" className="text-[20px]" />
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-space-lg py-3 bg-surface-container-low flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<div className="flex items-center gap-2">
<span>Rows per page: <strong>10</strong></span>
</div>
<div className="flex items-center gap-1">
<button className="p-1 rounded text-on-surface-variant disabled:opacity-40" disabled={true}>
<Icon name="chevron_left" className="text-[18px]" />
</button>
<span className="px-2.5 py-1 rounded-md bg-surface-container-lowest font-bold text-on-surface shadow-xs">1</span>
<button className="p-1 rounded text-on-surface-variant hover:bg-surface-container hover:text-on-surface">
<Icon name="chevron_right" className="text-[18px]" />
</button>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/50 backdrop-blur-sm" id="role-modal">
<div className="w-full max-w-2xl bg-surface-container-lowest rounded-xl shadow-[0_8px_24px_rgba(14,27,77,0.16)] flex flex-col max-h-[942px] overflow-y-auto animate-in fade-in zoom-in duration-200">

<div className="px-space-xl pt-space-lg pb-space-md flex items-start justify-between bg-surface-container-low">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-xl bg-error-container text-on-error-container flex items-center justify-center shrink-0">
<Icon name="security_update_warning" className="text-[24px]" />
</div>
<div className="flex flex-col">
<h2 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">Privileged Access Escalation</h2>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">High Security Clearance Action</span>
</div>
</div>
<button className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors">
<Icon name="close" className="text-[20px]" />
</button>
</div>

<div className="mx-space-xl mt-space-md p-space-md rounded-xl bg-error-container text-on-error-container flex items-start gap-space-sm">
<Icon name="warning" className="text-error text-[20px] shrink-0 mt-0.5" />
<div className="flex flex-col font-body-sm text-body-sm">
<strong className="font-label-md text-label-md text-on-error-container">High-Consequence Action:</strong>
<span>Promoting to Super Admin grants unrestricted access to Pesapal Secure Settlement payment accounts, live telecom API settlement nodes, and merchant blacklist execution.</span>
</div>
</div>

<div className="p-space-xl space-y-space-lg">

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md p-space-md rounded-xl bg-surface-container-low">
<div className="space-y-1">
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-bold">Target Staff Officer</span>
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Denis Mukasa</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm font-bold">ADM-004</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant block">Current: Lead dispute reviewers</span>
</div>
<div className="space-y-1">
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-bold">Target Escalation Role</span>
<div className="flex items-center gap-2 text-primary">
<Icon name="military_tech" className="text-[20px]" />
<span className="font-headline-sm text-headline-sm font-extrabold">Super Admin</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant block">Root consensus authority enabled</span>
</div>
</div>

<div className="space-y-2">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Privileges Being Granted:</span>
<div className="grid grid-cols-2 gap-2">
<div className="p-2.5 rounded-lg bg-surface-container flex items-center gap-2 font-body-sm text-body-sm text-on-surface">
<Icon name="power_settings_new" className="text-primary text-[18px]" />
<span>Emergency System platform pause</span>
</div>
<div className="p-2.5 rounded-lg bg-surface-container flex items-center gap-2 font-body-sm text-body-sm text-on-surface">
<Icon name="key" className="text-primary text-[18px]" />
<span>Telecom Gateway Token Refresh</span>
</div>
<div className="p-2.5 rounded-lg bg-surface-container flex items-center gap-2 font-body-sm text-body-sm text-on-surface">
<Icon name="account_balance_wallet" className="text-primary text-[18px]" />
<span>settlement pool Manual Override</span>
</div>
<div className="p-2.5 rounded-lg bg-surface-container flex items-center gap-2 font-body-sm text-body-sm text-on-surface">
<Icon name="tune" className="text-primary text-[18px]" />
<span>Platform Fee Schedule Edits</span>
</div>
</div>
</div>

<div className="space-y-1.5">
<label className="block font-label-md text-label-md text-on-surface font-bold">
            Step 1: verified platform Reason for Role Escalation <span className="text-primary">*</span>
</label>
<input className="w-full px-space-md py-2.5 bg-surface-container-low text-on-surface font-body-md text-body-md rounded-xl outline-none focus:ring-2 focus:ring-primary-container" type="text" value="Appointed Interim Operations Lead per Staff Assignment BR-2025-09" />
<span className="font-body-sm text-body-sm text-on-surface-variant">Logged in the immutable URSB compliance and governance audit trail.</span>
</div>

<div className="space-y-3 pt-2">
<div className="flex items-center justify-between">
<label className="block font-label-md text-label-md text-on-surface font-bold">
              Step 2: Dual Super Admin Consensus Protocol
            </label>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">two-step admin Required</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="space-y-1">
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold">Supervisory Master Password</span>
<div className="relative">
<input className="w-full px-space-md py-2.5 bg-surface-container-low text-on-surface font-body-md text-body-md rounded-xl outline-none focus:ring-2 focus:ring-primary-container" type="password" value="••••••••••••••••" />
<Icon name="visibility" className="absolute right-3 top-2.5 text-on-surface-variant text-[18px] cursor-pointer" />
</div>
</div>

<div className="space-y-1">
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold">Kizito Ronald (Two-Factor Authenticator / 6-digit OTP)</span>
<div className="relative">
<input className="w-full px-space-md py-2.5 bg-surface-container-low text-on-surface font-headline-sm text-headline-sm tracking-wider rounded-xl outline-none focus:ring-2 focus:ring-primary-container" maxLength={7} placeholder="e.g. 849 201" type="text" value="849 201" />
<Icon name="verified" className="absolute right-3 top-2.5 text-tertiary text-[20px]" />
</div>
</div>
</div>
<div className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container-low text-on-surface-variant font-body-sm text-body-sm">
<Icon name="check_circle" className="text-[16px] text-tertiary" />
<span>Secondary Super Admin (A. Kato - ADM-002) signed via automated push token.</span>
</div>
</div>
</div>

<div className="px-space-xl py-space-md bg-surface-container-low flex items-center justify-end gap-space-md">
<button className="px-5 py-2.5 rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg hover:bg-surface-container-high transition-colors">
          Cancel &amp; Dismiss
        </button>
<button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary-container text-on-primary-container font-label-lg text-label-lg shadow-[0_4px_14px_rgba(218,55,0,0.30)] hover:scale-[1.02] active:scale-[0.98] transition-transform">
<Icon name="verified_user" className="text-[18px]" />
          Authorize &amp; Commit Role Elevation
        </button>
</div>
</div>
</div>
</div></main></div>
    </div>
  );
};

export default Desktop;
