// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/super-admin/platform_settings_swiftcart_super_admin/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface PlatformSettingsSwiftcartSuperAdminProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const PlatformSettingsSwiftcartSuperAdmin: React.FC<PlatformSettingsSwiftcartSuperAdminProps> = (props) => {
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
      
      <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><button type="button" className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 mr-2" aria-label="Toggle Theme" title="Toggle Theme" onClick={() => toggleTheme()}>{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}</button><div className="flex items-center gap-space-xs"><button className="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors active:scale-95 text-on-surface" type="button"><Icon name="arrow_back" className="text-[24px]" /></button><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/swiftcart-logo-icon.png" /><h1 className="font-headline-sm text-headline-sm text-on-surface tracking-tight truncate max-w-[170px]">Platform Settings   Swiftcart Admin</h1></div><div className="flex items-center gap-space-xs"><button className="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant" title="Toggle theme" type="button"><Icon name="routine" className="text-[20px]" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm text-on-primary font-bold text-label-sm ring-2 ring-primary-fixed">SA</div></div></div></header>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-safe bg-surface"><div className="flex flex-col w-full px-margin pb-space-xl space-y-space-md">

<div className="flex items-center gap-space-xs text-on-surface-variant pt-space-xs">
<Icon name="admin_panel_settings" className="text-[16px] text-primary" />
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Governance</span>
<Icon name="chevron_right" className="text-[12px] opacity-60" />
<span className="font-label-sm text-label-sm text-on-surface font-bold">Platform Settings</span>

</div>

<div className="bg-surface-container-low rounded-xl p-space-md shadow-sm space-y-space-xs"><div className="flex items-center justify-between"><div className="flex items-center gap-space-xs"><span className="relative flex h-2.5 w-2.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-fixed-dim opacity-75"></span><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-tertiary"></span></span><span className="font-label-md text-label-md tracking-wider uppercase text-on-surface">Payment Gateway Mode: Live Production</span></div><span className="px-2 py-0.5 rounded bg-tertiary-container text-on-tertiary font-label-sm text-label-sm">Active</span></div><div className="p-space-sm rounded-lg bg-surface-container flex items-start gap-space-xs"><Icon name="verified_user" className="text-tertiary text-[20px] shrink-0 mt-0.5" /><div><p className="font-label-md text-label-md text-on-surface">Payment Integrations</p><p className="font-body-sm text-body-sm text-secondary mt-0.5">MTN Mobile Money &amp; Airtel Money API v2.1 Active (99.98% SLA)</p></div></div></div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
<div className="flex items-start justify-between gap-space-md">
<div className="flex-1">
<div className="flex items-center gap-space-xs">
<Icon name="power_settings_new" className="text-primary text-[20px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Global Maintenance Mode</h2>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-1">
          Enabling takes down buyer app and pauses rider dispatches. Hub sorting and active escrow releases continue uninterrupted.
        </p>
</div>

<button aria-checked="false" className="relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full bg-secondary-fixed-dim transition-colors duration-200 ease-in-out focus:outline-none" id="maintenanceToggle" role="switch">
<span className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-on-primary shadow-md ring-0 transition duration-200 ease-in-out translate-x-1 mt-1" id="maintenanceThumb"></span>
</button>
</div>
<div className="hidden mt-space-sm p-space-xs bg-error-container text-on-error-container rounded-lg font-label-sm text-label-sm flex items-center gap-2" id="maintenanceAlert">
<Icon name="warning" className="text-[16px]" />
<span className="">Caution: Maintenance scheduled. Automatic push dispatch alert armed.</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-sm">
<div className="flex items-center justify-between">
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Category Commission Matrix</h2>
<p className="font-label-sm text-label-sm text-secondary">Super Admin Override &amp; Take Rates</p>
</div>
<Icon name="tune" className="text-secondary" />
</div>

<div className="space-y-space-xs">

<div className="p-space-xs rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="min-w-0 pr-2">
<div className="flex items-center gap-1.5">
<p className="font-label-lg text-label-lg text-on-surface truncate">Electronics &amp; Audio</p>
<span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">-1.0%</span>
</div>
<p className="font-body-sm text-body-sm text-secondary truncate">Was 9.0% • Updated by Super Admin</p>
</div>
<div className="flex items-center gap-space-xs shrink-0">
<span className="font-price-display text-price-display text-primary">8.0%</span>
<button className="px-space-xs py-1 rounded bg-secondary-container text-on-secondary-fixed text-label-sm font-label-sm active:scale-95 transition-transform">
            Edit
          </button>
</div>
</div>

<div className="p-space-xs rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="min-w-0 pr-2">
<div className="flex items-center gap-1.5">
<p className="font-label-lg text-label-lg text-on-surface truncate">Mobile Phones &amp; Tablets</p>
<span className="px-1.5 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm">Subsidized</span>
</div>
<p className="font-body-sm text-body-sm text-secondary truncate">Standard national quota applied</p>
</div>
<div className="flex items-center gap-space-xs shrink-0">
<span className="font-price-display text-price-display text-on-surface">5.0%</span>
<button className="px-space-xs py-1 rounded bg-secondary-container text-on-secondary-fixed text-label-sm font-label-sm active:scale-95 transition-transform">
            Edit
          </button>
</div>
</div>

<div className="p-space-xs rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="min-w-0 pr-2">
<p className="font-label-lg text-label-lg text-on-surface truncate">Fashion &amp; Apparel</p>
<p className="font-body-sm text-body-sm text-secondary truncate">Tier A merchant volume base</p>
</div>
<div className="flex items-center gap-space-xs shrink-0">
<span className="font-price-display text-price-display text-on-surface">12.0%</span>
<button className="px-space-xs py-1 rounded bg-secondary-container text-on-secondary-fixed text-label-sm font-label-sm active:scale-95 transition-transform">
            Edit
          </button>
</div>
</div>

<div className="p-space-xs rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="min-w-0 pr-2">
<p className="font-label-lg text-label-lg text-on-surface truncate">Beauty &amp; Personal Care</p>
<p className="font-body-sm text-body-sm text-secondary truncate">Standard margin tier</p>
</div>
<div className="flex items-center gap-space-xs shrink-0">
<span className="font-price-display text-price-display text-on-surface">10.0%</span>
<button className="px-space-xs py-1 rounded bg-secondary-container text-on-secondary-fixed text-label-sm font-label-sm active:scale-95 transition-transform">
            Edit
          </button>
</div>
</div>

<div className="p-space-xs rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="min-w-0 pr-2">
<p className="font-label-lg text-label-lg text-on-surface truncate">Supermarket &amp; Groceries</p>
<p className="font-body-sm text-body-sm text-secondary truncate">High velocity perishable track</p>
</div>
<div className="flex items-center gap-space-xs shrink-0">
<span className="font-price-display text-price-display text-on-surface">4.5%</span>
<button className="px-space-xs py-1 rounded bg-secondary-container text-on-secondary-fixed text-label-sm font-label-sm active:scale-95 transition-transform">
            Edit
          </button>
</div>
</div>
</div>

<div className="p-space-xs rounded-lg bg-secondary-container/40 text-on-secondary-container flex items-start gap-space-xs">
<Icon name="info" className="text-secondary text-[18px] shrink-0 mt-0.5" />
<p className="font-body-sm text-body-sm">
<strong>Scheduled Adjustments:</strong> Effective date selector with automated 14-day merchant notice broadcast compliant with Uganda E-Commerce guidelines.
      </p>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-sm">
<div className="flex items-center justify-between">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Delivery &amp; Dispatch Rules</h2>
<Icon name="local_shipping" className="text-secondary" />
</div>
<div className="space-y-space-xs">
<div className="p-space-xs rounded-lg bg-surface-container-low flex items-center justify-between">
<div>
<span className="font-label-md text-label-md text-on-surface">Kampala Central Base Fee</span>
<p className="font-body-sm text-body-sm text-secondary">Base + UGX 800/km beyond 5km</p>
</div>
<span className="font-label-lg text-label-lg font-bold text-on-surface">UGX 3,500</span>
</div>
<div className="p-space-xs rounded-lg bg-surface-container-low flex items-center justify-between">
<div>
<span className="font-label-md text-label-md text-on-surface">Entebbe Corridor Surcharge</span>
<p className="font-body-sm text-body-sm text-secondary">Express highway route tariff</p>
</div>
<span className="font-label-lg text-label-lg font-bold text-on-surface">UGX 6,000</span>
</div>
<div className="p-space-xs rounded-lg bg-surface-container-low flex items-center justify-between">
<div>
<span className="font-label-md text-label-md text-on-surface">Max Failed Delivery OTP Attempts</span>
<p className="font-body-sm text-body-sm text-secondary">Triggers instant dispatch security lock</p>
</div>
<span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-md text-label-md font-bold">3 Attempts</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-sm"><div className="flex items-center justify-between"><h2 className="font-headline-sm text-headline-sm text-on-surface">Escrow &amp; Payout Controls</h2><Icon name="account_balance" className="text-secondary" /></div><div className="grid grid-cols-1 gap-space-xs"><div className="p-space-xs rounded-lg bg-surface-container-low"><div className="flex justify-between items-center"><span className="font-label-md text-label-md text-on-surface">Mandatory Escrow Hold Period</span><span className="font-label-lg text-label-lg font-bold text-primary">48 Hours</span></div><p className="font-body-sm text-body-sm text-secondary mt-0.5">Escrow Hold Period: 48 Hours. Money is held safely until buyer confirms receipt of items.</p></div><div className="p-space-xs rounded-lg bg-surface-container-low"><div className="flex justify-between items-center"><span className="font-label-md text-label-md text-on-surface">Automated Daily Payout Batch</span><span className="font-label-lg text-label-lg font-bold text-on-surface">18:00 EAT</span></div><p className="font-body-sm text-body-sm text-secondary mt-0.5">Automated daily payout batch at 18:00 EAT via Mobile Money.</p></div><div className="p-space-xs rounded-lg bg-surface-container-low"><div className="flex justify-between items-center"><span className="font-label-md text-label-md text-on-surface">Minimum MoMo Payout Threshold</span><span className="font-label-lg text-label-lg font-bold text-on-surface">UGX 50,000</span></div><p className="font-body-sm text-body-sm text-secondary mt-0.5">Protects micro-merchant wallet balance against excessive fees.</p></div></div></div>

<div className="p-space-md rounded-xl bg-inverse-surface text-inverse-on-surface space-y-space-xs shadow-md"><div className="flex items-center gap-space-xs text-primary-fixed"><Icon name="verified" className="text-[20px]" /><h3 className="font-label-lg text-label-lg tracking-wide uppercase">Audit Trail Active</h3></div><p className="font-body-sm text-body-sm text-inverse-on-surface/80">All commission and rule adjustments are logged with admin ID and timestamp in the platform audit log.</p><div className="flex items-center justify-between pt-space-xs text-inverse-on-surface/60 font-label-sm text-label-sm"><span className="">Status: System Audit Logging Active</span><span className="flex items-center gap-1 text-tertiary-fixed"><span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed"></span> Validated</span></div></div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-md space-y-space-md"><div className="p-space-sm rounded-lg bg-error-container text-on-error-container flex items-center gap-space-sm"><Icon name="warning" className="text-error text-[28px]" /><div><h3 className="font-headline-sm text-headline-sm leading-tight text-on-error-container">Platform Danger Zone</h3><p className="font-body-sm text-body-sm opacity-90">Administrative actions affecting checkout routing and active cache layers.</p></div></div><div className="space-y-space-sm"><button className="w-full py-space-sm px-space-md rounded-lg bg-error text-on-error font-label-lg text-label-lg flex items-center justify-center gap-space-xs shadow active:scale-95 transition-transform" type="button"><Icon name="pause_circle" className="text-[20px]" /><span className="">Pause Checkout (Maintenance Mode)</span></button><button className="w-full py-space-sm px-space-md rounded-lg bg-surface-container-high text-on-surface font-label-lg text-label-lg flex items-center justify-center gap-space-xs active:scale-95 transition-transform" type="button"><Icon name="restart_alt" className="text-[20px]" /><span className="">Reset API Gateway Cache</span></button></div></div>

<div className="fixed bottom-6 left-4 right-4 bg-on-surface text-surface rounded-xl p-space-sm shadow-xl flex items-center gap-space-xs transform translate-y-24 opacity-0 pointer-events-none transition-all duration-300 z-50" id="toastNotification">
<Icon name="check_circle" className="text-tertiary-fixed text-[20px]" />
<span className="font-body-md text-body-md" id="toastMessage">Action triggered successfully</span>
</div>
<footer className="pt-space-sm pb-space-md text-center text-secondary font-label-sm text-label-sm">SwiftCart Uganda</footer></div>
</main>
    </div>
  );
};

export default PlatformSettingsSwiftcartSuperAdmin;
