// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/super-admin/users_roles_with_role_change_tablet_dark/code.html
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
      
      <div className="pl-[72px]"><main className="relative pt-16 bg-surface min-h-screen"><div className="w-full p-5 sm:p-6 max-w-[834px] mx-auto"><div className="flex flex-col w-full relative pb-12">
<div className="flex flex-col gap-1 mb-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2.5">
<span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-surface-container-high text-primary">
<Icon name="admin_panel_settings" className="text-[20px]" />
</span>
<div>
<h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">Staff Governance &amp; RBAC</h1>
<p className="font-body-sm text-body-sm text-on-surface-variant">Kampala Central Node • Authorized Operator Hierarchy</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="px-2.5 py-1 rounded-full bg-surface-container-high text-tertiary font-label-sm text-label-sm flex items-center gap-1.5 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow animate-ping"></span>
          Policy Synced • UG-SEC-2025
        </span>
<button className="h-9 px-3.5 rounded-xl bg-surface-container-high text-on-surface hover:bg-surface-bright font-label-md text-label-md flex items-center gap-1.5 shadow-sm transition-transform active:scale-95" type="button">
<Icon name="person_add" className="text-[18px]" />
<span>Invite Staff</span>
</button>
</div>
</div>
</div>
<section className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
<div className="p-3.5 rounded-xl bg-surface-container-low shadow-md relative overflow-hidden">
<div className="flex items-center justify-between text-on-surface-variant mb-1">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Total Staff</span>
<Icon name="badge" className="text-[18px] text-primary" />
</div>
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">38</span>
<span className="font-label-sm text-label-sm text-tertiary flex items-center">
<Icon name="trending_up" className="text-[14px]" /> 100% active
        </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant/80 mt-0.5 truncate">Across 3 Hubs • Kampala Cluster</p>
</div>
<div className="p-3.5 rounded-xl bg-surface-container-low shadow-md">
<div className="flex items-center justify-between text-on-surface-variant mb-1">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Role Matrix</span>
<Icon name="shield" className="text-[18px] text-secondary" />
</div>
<div className="font-headline-md text-headline-md text-on-surface tracking-tight flex items-baseline gap-1">
<span>5</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Tiers</span>
</div>
<div className="flex items-center gap-1.5 mt-1 font-label-sm text-label-sm text-on-surface-variant truncate">
<span className="text-primary font-bold">2 SA</span> •
        <span className="text-on-surface">8 Adm</span> •
        <span className="text-on-surface-variant">16 Hub</span> •
        <span className="text-on-surface-variant">4 Fin</span>
</div>
</div>
<div className="p-3.5 rounded-xl bg-surface-container-low shadow-md">
<div className="flex items-center justify-between text-on-surface-variant mb-1">
<span className="font-label-sm text-label-sm uppercase tracking-wider">2FA Compliance</span>
<Icon name="verified_user" className="text-[18px] text-emerald-escrow" />
</div>
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-emerald-escrow font-extrabold tracking-tight">100%</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Enforced</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant/80 mt-0.5 flex items-center gap-1 truncate">
<Icon name="check_circle" className="text-[14px] text-emerald-escrow" />
        UCC Telematics Policy Strict
      </p>
</div>
<div className="p-3.5 rounded-xl bg-surface-container-low shadow-md">
<div className="flex items-center justify-between text-on-surface-variant mb-1">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Role Reassignments</span>
<Icon name="published_with_changes" className="text-[18px] text-amber-warning" />
</div>
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-amber-warning font-extrabold tracking-tight">2</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">This Week</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant/80 mt-0.5 truncate">Last: Dispute Team Rebalance</p>
</div>
</section>
<div className="flex flex-col gap-3 p-3 rounded-xl bg-surface-container-low shadow-md mb-5">
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
<div className="relative flex-1">
<Icon name="search" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" />
<input className="w-full h-11 pl-10 pr-4 rounded-xl bg-surface-container text-on-surface placeholder:text-on-surface-variant/50 font-body-sm text-body-sm focus:outline-none focus:bg-surface-bright shadow-inner" placeholder="Search staff by name, @swiftcart.ug, or phone (+256)..." type="text" value="Michael Sserwadda" />
</div>
<div className="flex items-center gap-2 shrink-0 overflow-x-auto pb-1 sm:pb-0">
<div className="relative">
<select className="h-11 pl-3 pr-8 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md appearance-none focus:outline-none focus:bg-surface-bright cursor-pointer shadow-inner">
<option>All Roles (5)</option>
<option>Super Admin</option>
<option selected={true}>Admin</option>
<option>Hub Agent</option>
<option>Finance</option>
<option>Support</option>
</select>
<Icon name="expand_more" className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant text-[18px]" />
</div>
<div className="relative">
<select className="h-11 pl-3 pr-8 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md appearance-none focus:outline-none focus:bg-surface-bright cursor-pointer shadow-inner">
<option selected={true}>Status: Active</option>
<option>Status: Suspended</option>
<option>Status: Revoked</option>
</select>
<Icon name="expand_more" className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant text-[18px]" />
</div>
<button className="h-11 w-11 rounded-xl bg-surface-container hover:bg-surface-bright text-on-surface-variant flex items-center justify-center shrink-0 shadow-inner" title="Filter columns" type="button">
<Icon name="filter_list" className="text-[20px]" />
</button>
</div>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-1 px-1">
<div className="flex items-center gap-1.5">
<span>Active Filters:</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface-container-high text-on-surface">
          Role: Admin
          <Icon name="close" className="text-[14px] cursor-pointer hover:text-primary" />
</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface-container-high text-on-surface">
          Query: "Michael"
          <Icon name="close" className="text-[14px] cursor-pointer hover:text-primary" />
</span>
</div>
<button className="text-primary hover:underline font-label-sm text-label-sm">Reset filters</button>
</div>
</div>
<section className="flex flex-col gap-2.5 mb-6">
<div className="flex items-center justify-between px-2 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
<span>Operational Staff Directory (6 Matching)</span>
<span className="hidden sm:inline whitespace-nowrap">Audit trail recorded • UGX Payment Authorization Key Required</span>
</div>
<div className="p-3.5 rounded-xl bg-surface-container-low shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors hover:bg-surface-container">
<div className="flex items-center gap-3 min-w-0">
<div className="w-10 h-10 rounded-full bg-primary-container/20 text-primary flex items-center justify-center font-label-lg text-label-lg shrink-0">
          SN
        </div>
<div className="min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-lg text-label-lg text-on-surface font-semibold truncate">Sarah Namatovu</span>
<span className="px-2 py-0.5 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm">Super Admin</span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow"></span> Active
            </span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm truncate mt-0.5">
<span className="truncate">s.namatovu@swiftcart.ug</span>
<span>•</span>
<span className="truncate">Kampala Central Ops</span>
<span>•</span>
<span className="text-on-surface-variant/70">4m ago</span>
</div>
</div>
</div>
<div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
<span className="px-2 py-1 rounded-lg bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<Icon name="lock" className="text-[14px] text-emerald-escrow" /> Full Override
        </span>
<button className="p-2 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface" title="View Audit Trail">
<Icon name="history" className="text-[18px]" />
</button>
</div>
</div>
<div className="p-3.5 rounded-xl bg-surface-container-high ring-1 ring-primary/40 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-action-gradient-start to-action-gradient-end"></div>
<div className="flex items-center gap-3 min-w-0 pl-1">
<div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-label-lg text-label-lg shrink-0">
          MS
        </div>
<div className="min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-lg text-label-lg text-on-surface font-semibold truncate">Michael Sserwadda</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">Admin • Disputes Lead</span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow"></span> Active
            </span>
<span className="px-1.5 py-0.2 rounded bg-primary-container/20 text-primary font-label-sm text-label-sm">Role Editing</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm truncate mt-0.5">
<span className="truncate">m.sserwadda@swiftcart.ug</span>
<span>•</span>
<span className="truncate">Nakasero Hub</span>
<span>•</span>
<span className="text-on-surface-variant/70">12m ago</span>
</div>
</div>
</div>
<div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
<button className="h-9 px-3 rounded-lg bg-surface-bright text-primary font-label-md text-label-md flex items-center gap-1.5 shadow-sm">
<Icon name="edit" className="text-[16px]" />
<span>Modify Role</span>
</button>
</div>
</div>
<div className="p-3.5 rounded-xl bg-surface-container-low shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors hover:bg-surface-container">
<div className="flex items-center gap-3 min-w-0">
<div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-label-lg text-label-lg shrink-0">
          PN
        </div>
<div className="min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-lg text-label-lg text-on-surface font-semibold truncate">Denis Mukasa</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">Admin • dispute reviewers</span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow"></span> Active
            </span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm truncate mt-0.5">
<span className="truncate">p.namubiru@swiftcart.ug</span>
<span>•</span>
<span className="truncate">Nakasero Hub</span>
<span>•</span>
<span className="text-on-surface-variant/70">1h ago</span>
</div>
</div>
</div>
<div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
<button className="h-8 px-2.5 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-sm text-label-sm">
          Change Role
        </button>
<button className="p-2 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface" title="Access Permissions">
<Icon name="more_vert" className="text-[18px]" />
</button>
</div>
</div>
<div className="p-3.5 rounded-xl bg-surface-container-low shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors hover:bg-surface-container">
<div className="flex items-center gap-3 min-w-0">
<div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-label-lg text-label-lg shrink-0">
          WS
        </div>
<div className="min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-lg text-label-lg text-on-surface font-semibold truncate">William Ssebaggala</span>
<span className="px-2 py-0.5 rounded-full bg-surface-variant text-on-surface font-label-sm text-label-sm">Hub Agent • Intake Desk</span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow"></span> Active
            </span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm truncate mt-0.5">
<span className="truncate">w.ssebaggala@swiftcart.ug</span>
<span>•</span>
<span className="truncate">Nakasero Bay Hub</span>
<span>•</span>
<span className="text-on-surface-variant/70">Barcoding Manifest #841</span>
</div>
</div>
</div>
<div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
<button className="h-8 px-2.5 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-sm text-label-sm">
          Change Role
        </button>
<button className="p-2 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface" title="Access Permissions">
<Icon name="more_vert" className="text-[18px]" />
</button>
</div>
</div>
<div className="p-3.5 rounded-xl bg-surface-container-low shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors hover:bg-surface-container">
<div className="flex items-center gap-3 min-w-0">
<div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-label-lg text-label-lg shrink-0">
          DM
        </div>
<div className="min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-lg text-label-lg text-on-surface font-semibold truncate">Dennis Mukasa</span>
<span className="px-2 py-0.5 rounded-full bg-surface-variant text-tertiary font-label-sm text-label-sm">Finance • Payout Queue</span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow"></span> Active
            </span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm truncate mt-0.5">
<span className="truncate">d.mukasa@swiftcart.ug</span>
<span>•</span>
<span className="truncate">Head Office</span>
<span>•</span>
<span className="text-on-surface-variant/70">MTN/Airtel Settlement Batch</span>
</div>
</div>
</div>
<div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
<button className="h-8 px-2.5 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-sm text-label-sm">
          Change Role
        </button>
<button className="p-2 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface" title="Access Permissions">
<Icon name="more_vert" className="text-[18px]" />
</button>
</div>
</div>
<div className="p-3.5 rounded-xl bg-surface-container-low shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors hover:bg-surface-container">
<div className="flex items-center gap-3 min-w-0">
<div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-label-lg text-label-lg shrink-0">
          GA
        </div>
<div className="min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-lg text-label-lg text-on-surface font-semibold truncate">Grace Akello</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">Admin • Catalog Moderation</span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow"></span> Active
            </span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm truncate mt-0.5">
<span className="truncate">g.akello@swiftcart.ug</span>
<span>•</span>
<span className="truncate">Remote (Gulu Hub Liaison)</span>
<span>•</span>
<span className="text-on-surface-variant/70">34m ago</span>
</div>
</div>
</div>
<div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
<button className="h-8 px-2.5 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-sm text-label-sm">
          Change Role
        </button>
<button className="p-2 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface" title="Access Permissions">
<Icon name="more_vert" className="text-[18px]" />
</button>
</div>
</div>
</section>
<div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-surface-dark/80 backdrop-blur-md" id="role-modal">
<div className="w-full max-w-[620px] max-h-[942px] overflow-y-auto rounded-2xl bg-surface-container-low shadow-2xl p-5 sm:p-7 flex flex-col gap-5">
<div className="flex items-start justify-between gap-3">
<div className="flex items-center gap-3">
<div className="w-11 h-11 rounded-xl bg-action-gradient-start/15 text-action-gradient-start flex items-center justify-center shrink-0">
<Icon name="manage_accounts" className="text-[24px]" />
</div>
<div>
<div className="flex items-center gap-2">
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Change Staff Role</h2>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm">Elevation</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Target Subject: <span className="text-on-surface font-semibold">Michael Sserwadda</span> (m.sserwadda@swiftcart.ug)</p>
</div>
</div>
<button className="p-2 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button">
<Icon name="close" className="text-[20px]" />
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-xl bg-surface-container shadow-inner">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block mb-1">Current Assigned Role</span>
<div className="flex items-center gap-2 text-on-surface font-label-md text-label-md">
<Icon name="gavel" className="text-[18px] text-secondary" />
<span>Admin (Disputes Lead)</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant/70 block mt-0.5">Dispute Desk access only</span>
</div>
<div>
<label className="font-label-sm text-label-sm text-primary uppercase tracking-wider block mb-1" htmlFor="new-role-select">New Role Target</label>
<div className="relative">
<select className="w-full h-10 pl-3 pr-8 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md appearance-none focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" id="new-role-select">
<option selected={true} value="super_admin">Super Admin</option>
<option value="admin">Admin</option>
<option value="hub_agent">Hub Agent</option>
<option value="finance">Finance</option>
<option value="support">Support</option>
</select>
<Icon name="expand_more" className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant text-[18px]" />
</div>
</div>
</div>
<div className="p-3.5 rounded-xl bg-surface-container/60 flex flex-col gap-2">
<div className="flex items-center gap-2 text-amber-warning font-label-sm text-label-sm uppercase tracking-wide">
<Icon name="security_update_warning" className="text-[16px]" />
<span>Permission Scope Elevation Summary</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
          Grants access to platform settings, fee matrix configuration, staff role assignments, and manual payment overrides.
        </p>
<div className="flex items-center gap-4 pt-1 font-label-sm text-label-sm text-on-surface-variant">
<span className="flex items-center gap-1 text-tertiary">
<Icon name="check" className="text-[14px]" /> Node Routing Controls
          </span>
<span className="flex items-center gap-1 text-tertiary">
<Icon name="check" className="text-[14px]" /> Payment Re-allocation
          </span>
<span className="flex items-center gap-1 text-tertiary">
<Icon name="check" className="text-[14px]" /> Staff Revocation
          </span>
</div>
</div>
<div className="flex flex-col gap-4">
<div>
<label className="flex items-center justify-between font-label-sm text-label-sm text-on-surface mb-1.5" htmlFor="justification-field">
<span>Mandatory Operational Justification <span className="text-primary">*</span></span>
<span className="text-on-surface-variant font-normal">Recorded to Audit Ledger</span>
</label>
<textarea className="w-full p-3 rounded-xl bg-surface-container text-on-surface placeholder:text-on-surface-variant/50 font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-inner resize-none" id="justification-field" placeholder="Describe operational justification... e.g. Temporary handover during annual executive leave" rows={2}>Temporary handover during executive leave. Designated primary incident commander for Kampala node.</textarea>
</div>
<div>
<div className="flex items-center justify-between mb-1.5">
<label className="font-label-sm text-label-sm text-on-surface" htmlFor="pin-input-1">
              Super Admin Security PIN / 6-Digit OTP <span className="text-primary">*</span>
</label>
<span className="font-label-sm text-label-sm text-on-surface-variant">Sent to +256 701 ••• 882</span>
</div>
<div className="flex items-center gap-2 sm:gap-3">
<input className="w-11 h-12 text-center rounded-xl bg-surface-container text-on-surface font-headline-sm text-headline-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-inner" id="pin-input-1" maxLength={1} type="password" value="7" />
<input className="w-11 h-12 text-center rounded-xl bg-surface-container text-on-surface font-headline-sm text-headline-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-inner" maxLength={1} type="password" value="3" />
<input className="w-11 h-12 text-center rounded-xl bg-surface-container text-on-surface font-headline-sm text-headline-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-inner" maxLength={1} type="password" value="9" />
<input className="w-11 h-12 text-center rounded-xl bg-surface-container text-on-surface font-headline-sm text-headline-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-inner" maxLength={1} type="password" value="2" />
<input className="w-11 h-12 text-center rounded-xl bg-surface-container text-on-surface font-headline-sm text-headline-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-inner" maxLength={1} placeholder="•" type="password" />
<input className="w-11 h-12 text-center rounded-xl bg-surface-container text-on-surface font-headline-sm text-headline-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-inner" maxLength={1} placeholder="•" type="password" />
<button className="ml-auto text-primary font-label-sm text-label-sm hover:underline shrink-0" type="button">Resend Code</button>
</div>
</div>
<label className="flex items-start gap-3 p-3 rounded-xl bg-surface-container/40 cursor-pointer hover:bg-surface-container/70 transition-colors">
<input checked={true} className="mt-0.5 rounded bg-surface-container-high text-primary-container focus:ring-0 focus:ring-offset-0 w-4 h-4 accent-action-gradient-end" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface leading-tight select-none">
            I confirm this role elevation complies with SwiftCart internal HR policy and Uganda Electronic Transactions Act (Cap 73).
          </span>
</label>
</div>
<div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-3 pt-2">
<button className="w-full sm:w-auto h-12 px-5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg transition-transform active:scale-98" type="button">
          Cancel
        </button>
<button className="w-full sm:w-auto h-12 px-6 rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-white font-label-lg text-label-lg shadow-lg hover:opacity-95 transition-transform active:scale-98 flex items-center justify-center gap-2" type="button">
<Icon name="verified_user" className="text-[18px]" />
<span>Confirm &amp; Apply Role Change</span>
</button>
</div>
</div>
</div>
</div></div></main></div>
    </div>
  );
};

export default Tablet;
