// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/super-admin/users_roles_management_super_admin_swiftcart_desktop_dark/code.html
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
      
      <div className="pl-72"><main className="w-full pt-16 px-gutter-desktop pb-margin-desktop bg-surface-dark min-h-screen"><div className="flex flex-col w-full">

<div className="relative w-full overflow-hidden">
<div className="absolute -top-32 right-1/4 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute top-20 -left-20 w-80 h-80 bg-tertiary-container/10 rounded-full blur-3xl pointer-events-none"></div>

<div className="flex flex-col gap-space-sm pt-space-md mb-space-lg">
<div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
<span>Admin Operations</span>
<Icon name="chevron_right" className="text-base" />
<span>Governance</span>
<Icon name="chevron_right" className="text-base" />
<span className="text-primary font-bold">Users &amp; Roles</span>
</div>

<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex flex-col gap-1">
<div className="flex flex-wrap items-center gap-space-md">
<h1 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
              Staff Users &amp; Role Governance
            </h1>
<div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-escrow/15 text-emerald-escrow">
<span className="w-2 h-2 rounded-full bg-emerald-escrow animate-ping"></span>
<span className="font-label-sm text-label-sm font-bold uppercase tracking-wide">Super Admin Privileges Active</span>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
            Manage administrative access, enforce role-based access control (RBAC), and authorize privileged role escalations across SwiftCart Uganda.
          </p>
</div>

<div className="flex items-center gap-space-md shrink-0">
<button className="h-11 px-space-md rounded-xl bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md flex items-center gap-2 shadow-sm transition-all duration-150 active:scale-95" type="button">
<Icon name="download" className="text-base text-primary" />
<span>Export Staff Audit Ledger</span>
</button>
<button className="h-11 px-space-lg rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end hover:opacity-95 text-on-primary-container font-label-lg text-label-lg flex items-center gap-2 shadow-[0_4px_18px_rgba(218,55,0,0.35)] transition-all duration-150 active:scale-95" type="button">
<Icon name="person_add" className="text-lg" />
<span>+ Invite New Staff Member</span>
</button>
</div>
</div>
</div>

<div className="mb-space-lg bg-surface-container-low px-space-md py-space-sm rounded-xl flex flex-wrap items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-2 text-tertiary">
<Icon name="verified_user" className="text-base" />
<span className="font-label-md text-label-md">FIDO2 Multi-Tenant Keyring Synchronized</span>
</div>
<span className="text-on-surface-variant font-label-sm text-label-sm hidden sm:inline">•</span>
<span className="font-body-sm text-body-sm text-on-surface-variant hidden sm:inline">Bank of Uganda Statutory Dual-Approval Policy: <strong className="text-on-surface font-semibold">Active Enforced</strong></span>
</div>
<div className="flex items-center gap-space-sm text-on-surface-variant font-code-display text-label-sm">
<span>SESSION HASH:</span>
<span className="px-2 py-0.5 rounded bg-surface-container font-bold text-primary">UG-ROOT-99042-KLA</span>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md mb-space-xl">

<div className="bg-surface-container-low p-space-lg rounded-xl shadow-md flex flex-col justify-between relative overflow-hidden group hover:bg-surface-container transition-colors">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Total Staff Accounts</span>
<span className="font-headline-lg text-headline-lg text-on-surface font-black mt-1">28</span>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
<Icon name="group" className="text-xl" />
</div>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container/50 -mx-space-lg -mb-space-lg px-space-lg pb-space-md flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface font-medium">Admin HQ &amp; Kampala Hubs</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold">+3 this mo</span>
</div>
</div>

<div className="bg-surface-container-low p-space-lg rounded-xl shadow-md flex flex-col justify-between relative overflow-hidden group hover:bg-surface-container transition-colors">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Super Admins</span>
<span className="font-headline-lg text-headline-lg text-primary font-black mt-1">3 <span className="font-headline-sm text-headline-sm text-on-surface-variant">Officers</span></span>
</div>
<div className="w-10 h-10 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary">
<Icon name="key" className="text-xl" />
</div>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container/50 -mx-space-lg -mb-space-lg px-space-lg pb-space-md flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">Dual-key consensus required</span>
<span className="px-1.5 py-0.5 rounded bg-surface-variant text-on-surface font-label-sm text-label-sm font-bold">Strict 2/3</span>
</div>
</div>

<div className="bg-surface-container-low p-space-lg rounded-xl shadow-md flex flex-col justify-between relative overflow-hidden group hover:bg-surface-container transition-colors">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Pending Invitations</span>
<span className="font-headline-lg text-headline-lg text-amber-warning font-black mt-1">2 <span className="font-headline-sm text-headline-sm text-on-surface-variant">Pending</span></span>
</div>
<div className="w-10 h-10 rounded-xl bg-amber-warning/15 flex items-center justify-center text-amber-warning">
<Icon name="hourglass_top" className="text-xl" />
</div>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container/50 -mx-space-lg -mb-space-lg px-space-lg pb-space-md flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">URSB &amp; Security Clearance</span>
<span className="font-label-sm text-label-sm text-amber-warning font-bold">Reviewing</span>
</div>
</div>

<div className="bg-surface-container-low p-space-lg rounded-xl shadow-md flex flex-col justify-between relative overflow-hidden group hover:bg-surface-container transition-colors">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Security Health</span>
<span className="font-headline-lg text-headline-lg text-tertiary font-black mt-1">100%</span>
</div>
<div className="w-10 h-10 rounded-xl bg-tertiary-container/20 flex items-center justify-center text-tertiary">
<Icon name="lock_open_right" className="text-xl" />
</div>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container/50 -mx-space-lg -mb-space-lg px-space-lg pb-space-md flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">Hardware key or FIDO2 biometric</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Enforced</span>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl shadow-md overflow-hidden flex flex-col mb-space-xl">

<div className="p-space-md bg-surface-container flex flex-wrap items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md flex-1 min-w-[280px]">
<div className="relative w-full max-w-md">
<Icon name="search" className="absolute left-3 top-2.5 text-on-surface-variant text-[18px]" />
<input className="w-full bg-surface-container-high text-on-surface font-body-sm text-body-sm pl-9 pr-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary placeholder-on-surface-variant" placeholder="Filter staff by name, ADM-ID, or branch..." type="text" value="" />
</div>
<button className="px-3 py-2 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md flex items-center gap-1.5 transition-colors" type="button">
<Icon name="filter_list" className="text-base" />
<span>Role: All Roles</span>
</button>
<button className="px-3 py-2 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md flex items-center gap-1.5 transition-colors" type="button">
<Icon name="location_on" className="text-base" />
<span>Hub: All Locations</span>
</button>
</div>
<div className="flex items-center gap-space-sm text-on-surface-variant font-label-sm text-label-sm">
<span>Showing <strong className="text-on-surface">5</strong> of 28 Records</span>
<span className="text-surface-variant">|</span>
<button className="hover:text-on-surface flex items-center gap-1" type="button">
<Icon name="refresh" className="text-base" />
<span>Sync</span>
</button>
</div>
</div>

<div className="w-full overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-space-md px-space-lg">Staff Member</th>
<th className="py-space-md px-space-lg">Current Role</th>
<th className="py-space-md px-space-lg">Assigned Station</th>
<th className="py-space-md px-space-lg">2FA Method</th>
<th className="py-space-md px-space-lg">Status</th>
<th className="py-space-md px-space-lg text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-transparent font-body-sm text-body-sm">

<tr className="hover:bg-surface-container/60 transition-colors">
<td className="py-space-md px-space-lg">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-headline-sm text-headline-sm text-on-primary font-bold shrink-0">
                    KR
                  </div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Kizito Ronald</span>
<span className="px-1.5 py-0.5 rounded bg-primary-container/20 text-primary font-code-display text-label-sm font-bold">ADM-001</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">kizito.ronald@swiftcart.ug</span>
</div>
</div>
</td>
<td className="py-space-md px-space-lg">
<span className="px-2.5 py-1 rounded-md bg-primary-container text-on-primary-container font-label-md text-label-md font-bold inline-flex items-center gap-1.5 shadow-sm">
<Icon name="shield_person" className="text-sm" />
                  Super Admin
                </span>
</td>
<td className="py-space-md px-space-lg">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Kampala HQ Nakasero</span>
<span className="text-on-surface-variant font-body-sm text-body-sm">Floor 4 Executive Hub</span>
</div>
</td>
<td className="py-space-md px-space-lg">
<div className="inline-flex items-center gap-1.5 text-tertiary">
<Icon name="usb" className="text-base" />
<span className="font-label-md text-label-md">FIDO2 Hardware Key</span>
</div>
</td>
<td className="py-space-md px-space-lg">
<span className="inline-flex items-center gap-1.5 text-emerald-escrow font-label-md text-label-md">
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
                  Active
                </span>
</td>
<td className="py-space-md px-space-lg text-right">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface-variant font-label-md text-label-md transition-colors" disabled={true} type="button">
                  Root Lock
                </button>
</td>
</tr>

<tr className="bg-primary/5 hover:bg-primary/10 transition-colors">
<td className="py-space-md px-space-lg">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center font-headline-sm text-headline-sm text-on-secondary-container font-bold shrink-0">
                    PN
                  </div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Patricia Namubiru</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-code-display text-label-sm font-bold">ADM-004</span>
<span className="px-1.5 py-0.5 rounded bg-amber-warning/20 text-amber-warning font-label-sm text-label-sm uppercase font-bold">Escalation Queued</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">patricia.n@swiftcart.ug</span>
</div>
</div>
</td>
<td className="py-space-md px-space-lg">
<span className="px-2.5 py-1 rounded-md bg-secondary-container/60 text-secondary-fixed font-label-md text-label-md font-semibold inline-flex items-center gap-1">
<Icon name="gavel" className="text-sm" />
                  Lead Arbitration Officer
                </span>
</td>
<td className="py-space-md px-space-lg">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Nakasero Desk</span>
<span className="text-on-surface-variant font-body-sm text-body-sm">Dispute &amp; Fraud Bureau</span>
</div>
</td>
<td className="py-space-md px-space-lg">
<div className="inline-flex items-center gap-1.5 text-on-surface-variant">
<Icon name="phonelink_lock" className="text-base" />
<span className="font-label-md text-label-md">App TOTP</span>
</div>
</td>
<td className="py-space-md px-space-lg">
<span className="inline-flex items-center gap-1.5 text-emerald-escrow font-label-md text-label-md">
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
                  Active
                </span>
</td>
<td className="py-space-md px-space-lg text-right">
<button className="px-3.5 py-1.5 rounded-lg bg-primary-container text-on-primary-container hover:opacity-90 font-label-md text-label-md font-bold shadow-[0_2px_10px_rgba(218,55,0,0.3)] transition-all" type="button">
                  Change Role
                </button>
</td>
</tr>

<tr className="hover:bg-surface-container/60 transition-colors">
<td className="py-space-md px-space-lg">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-headline-sm text-headline-sm text-primary font-bold shrink-0">
                    SA
                  </div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Sarah Auma</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-code-display text-label-sm font-bold">ADM-012</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">sarah.auma@swiftcart.ug</span>
</div>
</div>
</td>
<td className="py-space-md px-space-lg">
<span className="px-2.5 py-1 rounded-md bg-surface-container text-on-surface font-label-md text-label-md font-semibold inline-flex items-center gap-1">
<Icon name="account_balance_wallet" className="text-sm" />
                  Financial Operations
                </span>
</td>
<td className="py-space-md px-space-lg">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Stanbic Escrow Desk</span>
<span className="text-on-surface-variant font-body-sm text-body-sm">Crested Towers Level 8</span>
</div>
</td>
<td className="py-space-md px-space-lg">
<div className="inline-flex items-center gap-1.5 text-tertiary">
<Icon name="usb" className="text-base" />
<span className="font-label-md text-label-md">Hardware Key</span>
</div>
</td>
<td className="py-space-md px-space-lg">
<span className="inline-flex items-center gap-1.5 text-emerald-escrow font-label-md text-label-md">
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
                  Active
                </span>
</td>
<td className="py-space-md px-space-lg text-right">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-colors" type="button">
                  Change Role
                </button>
</td>
</tr>

<tr className="hover:bg-surface-container/60 transition-colors">
<td className="py-space-md px-space-lg">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-headline-sm text-headline-sm text-secondary-fixed font-bold shrink-0">
                    DS
                  </div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">David Ssemwogerere</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-code-display text-label-sm font-bold">ADM-018</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">david.s@swiftcart.ug</span>
</div>
</div>
</td>
<td className="py-space-md px-space-lg">
<span className="px-2.5 py-1 rounded-md bg-surface-container text-on-surface font-label-md text-label-md font-semibold inline-flex items-center gap-1">
<Icon name="inventory_2" className="text-sm" />
                  Catalog Review Lead
                </span>
</td>
<td className="py-space-md px-space-lg">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Nakasero</span>
<span className="text-on-surface-variant font-body-sm text-body-sm">Content Integrity Unit</span>
</div>
</td>
<td className="py-space-md px-space-lg">
<div className="inline-flex items-center gap-1.5 text-on-surface-variant">
<Icon name="phonelink_lock" className="text-base" />
<span className="font-label-md text-label-md">App TOTP</span>
</div>
</td>
<td className="py-space-md px-space-lg">
<span className="inline-flex items-center gap-1.5 text-emerald-escrow font-label-md text-label-md">
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
                  Active
                </span>
</td>
<td className="py-space-md px-space-lg text-right">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-colors" type="button">
                  Change Role
                </button>
</td>
</tr>

<tr className="hover:bg-surface-container/60 transition-colors">
<td className="py-space-md px-space-lg">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-headline-sm text-headline-sm text-tertiary-fixed font-bold shrink-0">
                    BM
                  </div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Brian Mukasa</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-code-display text-label-sm font-bold">ADM-022</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">brian.m@swiftcart.ug</span>
</div>
</div>
</td>
<td className="py-space-md px-space-lg">
<span className="px-2.5 py-1 rounded-md bg-surface-container text-on-surface font-label-md text-label-md font-semibold inline-flex items-center gap-1">
<Icon name="local_shipping" className="text-sm" />
                  Hub Logistics Supervisor
                </span>
</td>
<td className="py-space-md px-space-lg">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">William St Hub #04</span>
<span className="text-on-surface-variant font-body-sm text-body-sm">Central Boda Fleet Base</span>
</div>
</td>
<td className="py-space-md px-space-lg">
<div className="inline-flex items-center gap-1.5 text-on-surface-variant">
<Icon name="phonelink_lock" className="text-base" />
<span className="font-label-md text-label-md">App TOTP</span>
</div>
</td>
<td className="py-space-md px-space-lg">
<span className="inline-flex items-center gap-1.5 text-emerald-escrow font-label-md text-label-md">
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
                  Active
                </span>
</td>
<td className="py-space-md px-space-lg text-right">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-colors" type="button">
                  Change Role
                </button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="p-space-md bg-surface-container flex items-center justify-between font-label-md text-label-md text-on-surface-variant">
<span className="font-body-sm text-body-sm">System enforces strict zero-trust permission revoke upon session timeout (30m).</span>
<div className="flex items-center gap-2">
<button className="px-3 py-1 rounded bg-surface-container-high text-on-surface-variant disabled:opacity-50" disabled={true} type="button">Previous</button>
<span className="px-2 font-bold text-on-surface">Page 1 of 6</span>
<button className="px-3 py-1 rounded bg-surface-container-high text-on-surface hover:bg-surface-variant" type="button">Next</button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 flex items-center justify-center p-space-md bg-surface-dark/80 backdrop-blur-md">
<div className="w-full max-w-2xl bg-surface-container-low rounded-2xl shadow-[0_24px_64px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col max-h-[942px]">

<div className="p-space-lg bg-surface-container flex items-start justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary shrink-0">
<Icon name="admin_panel_settings" className="text-2xl" />
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">Privileged Access Escalation</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Change Role to Super Admin
            </h2>
</div>
</div>
<button className="w-8 h-8 rounded-lg bg-surface-container-high hover:bg-surface-variant flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors" type="button">
<Icon name="close" className="text-base" />
</button>
</div>

<div className="p-space-lg overflow-y-auto flex flex-col gap-space-lg">

<div className="p-space-md bg-surface-container rounded-xl flex flex-wrap items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center font-headline-sm text-headline-sm text-on-secondary-container font-bold">
              PN
            </div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Patricia Namubiru</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-code-display text-label-sm font-bold">ADM-004</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Current: <strong className="text-on-surface">Lead Arbitration Officer</strong></span>
</div>
</div>
<div className="flex items-center gap-2 font-label-md text-label-md">
<span className="text-on-surface-variant">Proposed:</span>
<span className="px-3 py-1 rounded bg-primary-container text-on-primary-container font-bold flex items-center gap-1 shadow-sm">
<Icon name="shield" className="text-sm" />
              Super Admin
            </span>
</div>
</div>

<div className="p-space-md rounded-xl bg-danger-penalty/15 flex items-start gap-space-md">
<Icon name="warning" className="text-danger-penalty text-xl shrink-0 mt-0.5" />
<div className="flex flex-col gap-1">
<span className="font-label-md text-label-md text-danger-penalty font-bold uppercase tracking-wide">High-Consequence Action</span>
<p className="font-body-sm text-body-sm text-on-surface">
              Promoting to Super Admin grants unrestricted access to Bank of Uganda statutory escrow accounts, Emergency Killswitch, Root Key Rotation, and Fee Schedules.
            </p>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<label className="font-label-md text-label-md text-on-surface font-bold flex items-center gap-1">
<span>Step 1: Mandatory Reason for Role Change</span>
<span className="text-primary">*</span>
</label>
<span className="font-label-sm text-label-sm text-on-surface-variant">Governance Audit Record</span>
</div>
<textarea className="w-full bg-surface-container text-on-surface font-body-md text-body-md p-space-md rounded-xl focus:outline-none focus:ring-1 focus:ring-primary placeholder-on-surface-variant resize-none" placeholder="Provide governance rationale or board minutes reference..." rows={2}>Appointed Interim Chief Compliance Officer per Board Resolution BR-2025-09</textarea>
<span className="font-body-sm text-body-sm text-on-surface-variant">This statement is immutably written to the cryptographic audit trail UG-CENTRAL-LEDGER.</span>
</div>

<div className="p-space-md bg-surface-container rounded-xl flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="verified" className="text-primary text-base" />
<span className="font-label-md text-label-md text-on-surface font-bold">Step 2: Dual-Approval Multi-Sig Requirement</span>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-high text-primary font-bold">Consensus 2/2</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="p-space-sm bg-surface-container-low rounded-lg flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold text-xs">
                KR
              </div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-bold">Kizito Ronald (Primary)</span>
<span className="font-body-sm text-body-sm text-tertiary flex items-center gap-1">
<Icon name="check_circle" className="text-xs" />
                  Identity Verified
                </span>
</div>
</div>

<div className="p-space-sm bg-surface-container-low rounded-lg flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center text-on-surface font-bold text-xs">
                2nd
              </div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-bold">Secondary Super Admin</span>
<span className="font-body-sm text-body-sm text-amber-warning flex items-center gap-1">
<Icon name="pending" className="text-xs" />
                  Hardware Token Required
                </span>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
<div className="flex flex-col gap-1">
<label className="font-label-sm text-label-sm text-on-surface-variant font-bold">Supervisory Master Password</label>
<div className="relative flex items-center">
<Icon name="password" className="absolute left-3 text-on-surface-variant text-[18px]" />
<input className="w-full bg-surface-container-high text-on-surface font-body-sm text-body-sm pl-9 pr-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary" type="password" value="••••••••••••••••" />
</div>
</div>
<div className="flex flex-col gap-1">
<label className="font-label-sm text-label-sm text-on-surface-variant font-bold">6-Digit Hardware OTP (FIDO2)</label>
<div className="relative flex items-center">
<Icon name="dialpad" className="absolute left-3 text-on-surface-variant text-[18px]" />
<input className="w-full bg-surface-container-high text-on-surface font-code-display text-body-md tracking-widest pl-9 pr-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary text-primary font-bold" maxLength={6} type="text" value="782 914" />
</div>
</div>
</div>
</div>
</div>

<div className="p-space-lg bg-surface-container flex flex-wrap items-center justify-between gap-space-md">
<div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
<Icon name="policy" className="text-base" />
<span>Zero-knowledge audit ticket will be broadcast.</span>
</div>
<div className="flex items-center gap-space-md">
<button className="h-12 px-space-lg rounded-xl bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-all active:scale-95" type="button">
            Cancel &amp; Dismiss
          </button>
<button className="h-12 px-space-lg rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end hover:opacity-95 text-on-primary-container font-label-lg text-label-lg font-bold flex items-center gap-2 shadow-[0_4px_18px_rgba(218,55,0,0.35)] transition-all active:scale-95" type="button">
<Icon name="shield" className="text-lg" />
<span>Authorize &amp; Commit Role Elevation</span>
</button>
</div>
</div>
</div>
</div>
</div></main></div>
    </div>
  );
};

export default Desktop;
