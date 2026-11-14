// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/super-admin/danger_zone_role_change_swiftcart_super_admin/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface DangerZoneRoleChangeSwiftcartSuperAdminProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const DangerZoneRoleChangeSwiftcartSuperAdmin: React.FC<DangerZoneRoleChangeSwiftcartSuperAdminProps> = (props) => {
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
      
      <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-space-sm flex items-center justify-between"><button type="button" className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 mr-2" aria-label="Toggle Theme" title="Toggle Theme" onClick={() => toggleTheme()}>{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}</button><div className="flex items-center gap-space-xs"><button aria-label="Go back" className="min-w-[44px] min-h-[44px] flex items-center justify-center text-on-surface hover:text-primary transition-colors"><Icon name="arrow_back" className="text-[24px]" /></button><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/swiftcart-logo-icon.png" /><h1 className="font-headline-sm text-headline-sm text-on-surface truncate ml-space-xs leading-tight">Danger Zone</h1></div><div className="flex items-center gap-space-xs mr-space-sm"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div><div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-label-md text-label-md font-bold text-on-surface select-none">AD</div></div></div></header>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-safe bg-surface"><div className="flex flex-col w-full px-margin pb-space-xl space-y-space-lg">

<div className="flex items-center justify-between pt-space-xs">
<div>
<p className="font-body-sm text-body-sm text-secondary">System maintenance &amp; role management</p>
<div className="flex items-center gap-space-xs mt-0.5">
<span className="inline-block w-2 h-2 rounded-full bg-tertiary"></span>
<span className="font-label-sm text-label-sm text-tertiary">SwiftCart Platform • East Africa Hub</span>
</div>
</div>
<div className="bg-surface-container px-space-sm py-1 rounded-full flex items-center gap-1 shadow-sm">
<Icon name="shield" className="text-[16px] text-on-surface-variant" />
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Level 3 Clearance</span>
</div>
</div>

<section className="flex flex-col space-y-space-md">
<div className="flex items-center justify-between">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Role Management</h2>
<span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wide">Audit Log Active</span>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-md">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center font-headline-sm text-headline-sm text-on-secondary-fixed font-bold shadow-inner">
            IK
          </div>
<div>
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Isaac Kato</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-mono">#USR-402</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Senior Hub Agent • Kampala Central Depot</p>
</div>
</div>
</div>
<div className="bg-surface-container-low rounded-lg p-space-sm flex items-center justify-between">
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block">Current Assigned Role</span>
<span className="font-label-lg text-label-lg text-on-surface font-semibold flex items-center gap-1">
<Icon name="badge" className="text-[18px] text-tertiary" />
            Hub Operations Staff
          </span>
</div>
<span className="font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded-full font-bold">Active</span>
</div>

<div className="space-y-1.5">
<label className="font-label-md text-label-md text-on-surface block font-semibold" htmlFor="role-select">Assign Target Role</label>
<div className="relative">
<select className="w-full bg-surface-container-low text-on-surface font-label-lg text-label-lg rounded-lg py-3 px-space-md appearance-none shadow-sm focus:outline-none focus:bg-surface-container-lowest transition-colors" id="role-select">
<option value="hub">Hub Operations Staff (Current)</option>
<option value="admin">Admin Staff</option>
<option value="finance">Finance Staff</option>
<option selected={true} value="super">Super Admin (Full Platform Control)</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-space-md text-secondary">
<Icon name="expand_more" className="text-[20px]" />
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-md space-y-space-md">
<div className="flex items-center gap-space-sm pb-space-xs bg-surface-container-low -mx-space-md -mt-space-md p-space-md rounded-t-xl">
<div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
<Icon name="verified_user" className="text-[20px]" />
</div>
<div>
<h3 className="font-label-lg text-label-lg font-bold text-on-surface">Assign Super Admin Permissions</h3>
<p className="font-body-sm text-body-sm text-secondary">Elevation requires audit reasoning and 2FA</p>
</div>
</div>

<div className="space-y-1.5">
<div className="flex justify-between items-center">
<label className="font-label-md text-label-md font-semibold text-on-surface" htmlFor="reason-input">Step 1: Justification &amp; Purpose</label>
<span className="font-label-sm text-label-sm text-primary font-bold">Required</span>
</div>
<textarea className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md rounded-lg p-space-sm focus:outline-none focus:bg-surface-container-lowest shadow-inner resize-none" id="reason-input" placeholder="Provide a reason for administrative elevation..." rows={2}>Covering lead operations during system expansion</textarea>
<p className="font-body-sm text-body-sm text-secondary flex items-center gap-1">
<Icon name="info" className="text-[14px]" />
          Logged in platform audit trails under Super Admin authority.
        </p>
</div>

<div className="space-y-space-xs pt-space-xs">
<div className="flex justify-between items-center">
<label className="font-label-md text-label-md font-semibold text-on-surface">Step 2: 2-Factor Verification Code</label>
<button className="font-label-sm text-label-sm text-primary font-bold hover:underline" type="button">Resend SMS</button>
</div>
<p className="font-body-sm text-body-sm text-secondary">
          Sent to verified mobile: <span className="font-mono font-semibold text-on-surface">+256 772 ••• 819</span>
</p>

<div className="grid grid-cols-6 gap-space-xs pt-1.5" id="otp-container">
<input className="otp-input w-full h-12 text-center font-headline-md text-headline-md rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:bg-surface-container-highest transition-all" inputMode="numeric" maxLength={1} type="text" value="4" />
<input className="otp-input w-full h-12 text-center font-headline-md text-headline-md rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:bg-surface-container-highest transition-all" inputMode="numeric" maxLength={1} type="text" value="9" />
<input className="otp-input w-full h-12 text-center font-headline-md text-headline-md rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:bg-surface-container-highest transition-all" inputMode="numeric" maxLength={1} placeholder="•" type="text" />
<input className="otp-input w-full h-12 text-center font-headline-md text-headline-md rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:bg-surface-container-highest transition-all" inputMode="numeric" maxLength={1} placeholder="•" type="text" />
<input className="otp-input w-full h-12 text-center font-headline-md text-headline-md rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:bg-surface-container-highest transition-all" inputMode="numeric" maxLength={1} placeholder="•" type="text" />
<input className="otp-input w-full h-12 text-center font-headline-md text-headline-md rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:bg-surface-container-highest transition-all" inputMode="numeric" maxLength={1} placeholder="•" type="text" />
</div>
</div>

<div className="pt-space-xs">
<button className="w-full min-h-[48px] bg-primary text-on-primary font-label-lg text-label-lg rounded-xl flex items-center justify-center gap-space-xs shadow-md active:scale-[0.98] transition-transform" id="confirm-role-btn" type="button">
<Icon name="admin_panel_settings" className="text-[20px]" />
          Confirm Role Update
        </button>
<p className="font-body-sm text-body-sm text-center text-secondary mt-2">
          Effective immediately across all Uganda hub terminals.
        </p>
</div>
</div>
</section>

<section className="flex flex-col space-y-space-md pt-space-xs">

<div className="bg-error-container/30 rounded-xl p-space-md space-y-space-lg shadow-sm">

<div className="flex items-center gap-space-xs">
<div className="w-8 h-8 rounded-full bg-error flex items-center justify-center text-on-error shadow-sm">
<Icon name="warning" className="text-[20px]" />
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-error-container font-bold">Danger Zone - High-Impact Actions</h2>
<p className="font-body-sm text-body-sm text-on-error-container/80">Immediate platform-wide consequences</p>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-sm">
<div className="flex items-start justify-between gap-space-xs">
<div>
<h3 className="font-label-lg text-label-lg font-bold text-on-surface">Storewide Maintenance Mode</h3>
<p className="font-body-sm text-body-sm text-secondary mt-0.5 leading-relaxed">
              Pauses checkout for buyers while preserving active seller dashboards. Used during scheduled updates.
            </p>
</div>
<div className="shrink-0 bg-tertiary-fixed px-2 py-0.5 rounded-full flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
<span className="font-label-sm text-label-sm font-bold text-on-tertiary-fixed">Inactive</span>
</div>
</div>
<div className="bg-surface-container-low rounded-lg p-space-xs px-space-sm flex items-center gap-1.5">
<Icon name="gavel" className="text-[16px] text-primary" />
<span className="font-body-sm text-body-sm text-secondary">Requires admin confirmation before activating.</span>
</div>
<button className="w-full min-h-[44px] bg-primary-container text-on-primary font-label-lg text-label-lg rounded-lg flex items-center justify-center gap-space-xs shadow-sm active:scale-[0.98] transition-transform" id="maintenance-btn" type="button">
<Icon name="pause_circle" className="text-[18px]" />
          Pause Checkout (Maintenance Mode)
        </button>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-sm">
<div>
<h3 className="font-label-lg text-label-lg font-bold text-on-surface">Suspend Platform User</h3>
<p className="font-body-sm text-body-sm text-secondary mt-0.5">
            Immediately revokes staff or seller portal access and halts all pending UGX balance payouts.
          </p>
</div>
<div className="space-y-space-xs pt-1">
<div className="relative">
<Icon name="person_search" className="absolute left-3 top-3 text-[20px] text-secondary" />
<input className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md rounded-lg py-2.5 pl-10 pr-space-md focus:outline-none focus:bg-surface-container-highest shadow-inner" id="suspend-query" placeholder="Type User ID (e.g. #USR-108) or Email..." type="text" />
</div>
<button className="w-full min-h-[44px] bg-surface-container-lowest text-error font-label-lg text-label-lg rounded-lg flex items-center justify-center gap-space-xs shadow-sm hover:bg-error-container active:scale-[0.98] transition-all" id="suspend-btn" type="button">
<Icon name="block" className="text-[18px]" />
            Suspend User
          </button>
</div>
</div>

<div className="flex items-center gap-2 pt-space-xs">
<Icon name="lock_clock" className="text-[18px] text-on-error-container/70" />
<span className="font-label-sm text-label-sm text-on-error-container/70">All high-impact events are cryptographically recorded in the central Kampala ledger.</span>
</div>
</div>
</section>
</div>
</main>
    </div>
  );
};

export default DangerZoneRoleChangeSwiftcartSuperAdmin;
