// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/admin/locked_dispatches_swiftcart_admin/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface LockedDispatchesSwiftcartAdminProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const LockedDispatchesSwiftcartAdmin: React.FC<LockedDispatchesSwiftcartAdminProps> = (props) => {
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
      
      <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><button type="button" className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 mr-2" aria-label="Toggle Theme" title="Toggle Theme" onClick={() => toggleTheme()}>{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}</button><div className="flex items-center gap-space-xs"><button className="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors active:scale-95 text-on-surface" type="button"><Icon name="arrow_back" className="text-[24px]" /></button><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/swiftcart-logo-icon.png" /><h1 className="font-headline-sm text-headline-sm text-on-surface tracking-tight truncate max-w-[170px]">Locked Dispatches</h1></div><div className="flex items-center gap-space-xs"><button className="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant" type="button"><Icon name="routine" className="text-[20px]" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-safe bg-surface"><div className="flex-1 w-full px-margin pt-space-md pb-space-lg"><div className="flex flex-col w-full pb-8 space-y-4">

<div className="rounded-xl bg-error-container text-on-error-container p-4 shadow-md relative overflow-hidden">
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-lg bg-error text-on-error flex items-center justify-center shrink-0 shadow-sm animate-pulse">
<Icon name="lock_clock" className="text-[24px]" />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-1">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-error font-bold">Protocol Alert Level 1</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-label-sm font-label-sm bg-surface-container-lowest text-on-error-container shadow-sm font-semibold">Live Guard</span>
</div>
<h2 className="font-headline-sm text-headline-sm leading-tight text-on-error-container mt-0.5">
          3 Dispatches Currently Locked
        </h2>
<p className="font-body-sm text-body-sm text-on-error-container opacity-90 mt-1">
          Escrow vaults and courier digital handover channels are suspended pending staff operational sign-off.
        </p>
</div>
</div>
</div>

<div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar -mx-margin px-margin">
<button className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md shadow-sm active:scale-95 transition-transform" type="button">
<Icon name="emergency" className="text-[16px]" />
<span>All Locked (3)</span>
</button>
<button className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md active:scale-95 transition-transform" type="button">
<Icon name="pin_invoke" className="text-[16px] text-primary" />
<span>OTP Failed (2)</span>
</button>
<button className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md active:scale-95 transition-transform" type="button">
<Icon name="wrong_location" className="text-[16px] text-tertiary" />
<span>Rider Deviation (1)</span>
</button>
<button className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container text-secondary font-label-md text-label-md active:scale-95 transition-transform" type="button">
<Icon name="task_alt" className="text-[16px]" />
<span>Resolved (29)</span>
</button>
</div>

<div className="rounded-xl bg-surface-container-lowest text-on-surface p-4 shadow-sm flex flex-col space-y-3 relative overflow-hidden">

<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-2 min-w-0">
<span className="w-2.5 h-2.5 rounded-full bg-error shrink-0 animate-ping"></span>
<div className="truncate">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight">#SC-9915</span>
<span className="block font-body-sm text-body-sm text-secondary truncate">Nakawa Division • Sector 4B</span>
</div>
</div>
<div className="text-right shrink-0">
<span className="font-label-sm text-label-sm text-secondary uppercase block">Consignment</span>
<span className="font-price-display text-price-display text-primary">UGX 520,000</span>
</div>
</div>

<div className="rounded-lg bg-error-container text-on-error-container p-2.5 flex items-start gap-2">
<Icon name="password" className="text-[20px] text-error shrink-0" />
<div className="min-w-0 flex-1">
<p className="font-label-md text-label-md font-bold leading-snug">
          3 Consecutive Failed Delivery Release Code Attempts
        </p>
<span className="font-label-sm text-label-sm text-error uppercase font-semibold">Handover Blocked • Vault Frozen</span>
</div>
</div>

<div className="rounded-lg bg-surface-container-low p-3 space-y-2">
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-secondary flex items-center gap-1">
<Icon name="smartphone" className="text-[16px]" /> Parcel Unit:
        </span>
<span className="font-label-md text-label-md text-on-surface font-semibold truncate max-w-[190px]">Samsung Galaxy A54 (128GB)</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-secondary flex items-center gap-1">
<Icon name="sports_motorsports" className="text-[16px]" /> Assigned Courier:
        </span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Okello John (ID #OK-419)</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-secondary flex items-center gap-1">
<Icon name="location_on" className="text-[16px]" /> Current Status:
        </span>
<span className="font-label-md text-label-md text-tertiary font-semibold flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-tertiary"></span> At Dropoff Point
        </span>
</div>
<p className="font-body-sm text-body-sm text-secondary bg-surface-container-lowest p-2 rounded-lg leading-relaxed">
<span className="font-bold text-on-surface">Telemetry Note:</span> Courier arrived 14:18. Customer provided 3 invalid 6-digit verification codes. Automated anti-theft escrow lock initiated.
      </p>
</div>

<div className="space-y-2 pt-1">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block font-semibold">
        Intervention Protocols
      </span>

<button className="w-full flex items-center justify-between p-3 rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm active:scale-[0.98] transition-transform" type="button">
<div className="flex items-center gap-2">
<Icon name="sms" className="text-[20px]" />
<span className="text-left font-bold">Unlock &amp; Send Carrier SMS PIN</span>
</div>
<Icon name="bolt" className="text-[18px]" />
</button>

<button className="w-full flex items-center justify-between p-3 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md active:scale-[0.98] transition-transform" type="button">
<div className="flex items-center gap-2">
<Icon name="warehouse" className="text-[20px] text-secondary" />
<span className="text-left">Reroute to Central William St Hub</span>
</div>
<Icon name="alt_route" className="text-[18px] text-secondary" />
</button>

<button className="w-full flex items-center justify-between p-2.5 rounded-lg bg-surface-container text-error font-label-md text-label-md active:scale-[0.98] transition-transform" type="button">
<div className="flex items-center gap-2">
<Icon name="gavel" className="text-[18px]" />
<span>Cancel &amp; Escalate to Dispute Desk</span>
</div>
<Icon name="expand_more" className="text-[18px]" />
</button>

<div className="hidden rounded-lg bg-surface-container-low p-3 space-y-2" id="dispute-box-9915">
<label className="font-label-sm text-label-sm text-on-surface font-semibold block" htmlFor="admin-note">Mandatory Incident Reason Note</label>
<textarea className="w-full rounded-lg bg-surface-container-lowest p-2 font-body-sm text-body-sm text-on-surface outline-none resize-none" id="admin-note" placeholder="Detail reason for manual dispute freeze..." rows={2}></textarea>
<button className="w-full py-2 bg-error text-on-error rounded-lg font-label-md text-label-md font-bold" type="button">
          Confirm Escalation Freeze
        </button>
</div>
</div>
</div>

<div className="rounded-xl bg-surface-container-lowest text-on-surface p-4 shadow-sm flex flex-col space-y-3 relative overflow-hidden">
<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-2 min-w-0">
<span className="w-2.5 h-2.5 rounded-full bg-error shrink-0"></span>
<div className="truncate">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight">#SC-9884</span>
<span className="block font-body-sm text-body-sm text-secondary truncate">Bwaise / Kawempe Corridor</span>
</div>
</div>
<div className="text-right shrink-0">
<span className="font-label-sm text-label-sm text-secondary uppercase block">Consignment</span>
<span className="font-price-display text-price-display text-primary">UGX 1,480,000</span>
</div>
</div>

<div className="rounded-lg bg-error-container text-on-error-container p-2.5 flex items-start gap-2">
<Icon name="gps_off" className="text-[20px] text-error shrink-0" />
<div className="min-w-0 flex-1">
<p className="font-label-md text-label-md font-bold leading-snug">
          Rider GPS Signal Lost for &gt;45 Mins
        </p>
<span className="font-label-sm text-label-sm text-error uppercase font-semibold">High-Value Cargo • Geofence Severed</span>
</div>
</div>

<div className="rounded-lg bg-surface-container-low p-3 space-y-2">
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-secondary flex items-center gap-1">
<Icon name="inventory_2" className="text-[16px]" /> Cargo Items:
        </span>
<span className="font-label-md text-label-md text-on-surface font-semibold truncate max-w-[200px]">Solar Inverter + Li-Ion Pack</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-secondary flex items-center gap-1">
<Icon name="badge" className="text-[16px]" /> Stage Association:
        </span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Bwaise Stage #4 Boda Union</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-secondary flex items-center gap-1">
<Icon name="history" className="text-[16px]" /> Last Ping:
        </span>
<span className="font-label-md text-label-md text-error font-semibold">47 mins ago • Nabweru Jct</span>
</div>
</div>

<div className="grid grid-cols-2 gap-2 pt-1">
<button className="flex flex-col items-center justify-center p-3 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md active:scale-95 transition-transform text-center space-y-1" type="button">
<Icon name="call" className="text-[22px] text-primary" />
<span className="font-bold leading-tight">Call Stage Chair</span>
<span className="text-label-sm font-label-sm text-secondary">Direct Dispatch Link</span>
</button>
<button className="flex flex-col items-center justify-center p-3 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md active:scale-95 transition-transform text-center space-y-1 shadow-sm" type="button">
<Icon name="notification_important" className="text-[22px]" />
<span className="font-bold leading-tight">Masked Phone Alert</span>
<span className="text-label-sm font-label-sm opacity-90">Override Silence State</span>
</button>
</div>
</div>

<div className="rounded-xl bg-surface-container-lowest text-on-surface p-4 shadow-sm flex flex-col space-y-3">
<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-2 min-w-0">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary-container shrink-0"></span>
<div className="truncate">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight">#SC-9760</span>
<span className="block font-body-sm text-body-sm text-secondary truncate">Entebbe Road • Kajjansi</span>
</div>
</div>
<div className="text-right shrink-0">
<span className="font-label-sm text-label-sm text-secondary uppercase block">Consignment</span>
<span className="font-price-display text-price-display text-on-surface">UGX 195,000</span>
</div>
</div>
<div className="rounded-lg bg-surface-container text-on-surface p-2.5 flex items-start gap-2">
<Icon name="navigation" className="text-[20px] text-primary shrink-0" />
<div className="min-w-0 flex-1">
<p className="font-label-md text-label-md font-bold leading-snug">
          Corridor Deviation: 3.4km off Authorized Route
        </p>
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Speed: 14 km/h • Moving South</span>
</div>
</div>
<div className="flex items-center justify-between pt-1">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
<Icon name="person" className="text-[16px]" />
</div>
<div className="leading-none">
<span className="font-label-md text-label-md font-bold block text-on-surface">Mugisha Dan</span>
<span className="font-label-sm text-label-sm text-secondary">Rider Tier: Standard</span>
</div>
</div>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md active:scale-95 transition-transform flex items-center gap-1" type="button">
<Icon name="near_me" className="text-[16px] text-tertiary" />
<span>Re-ping Route</span>
</button>
</div>
</div>

<div className="fixed bottom-6 left-4 right-4 bg-inverse-surface text-inverse-on-surface p-3 rounded-xl shadow-xl flex items-center justify-between gap-3 transform translate-y-32 opacity-0 transition-all duration-300 pointer-events-none z-50" id="action-toast">
<div className="flex items-center gap-2 min-w-0">
<Icon name="check_circle" className="text-tertiary-fixed-dim text-[20px]" />
<span className="font-label-md text-label-md truncate" id="toast-text">Protocol dispatched successfully.</span>
</div>
<span className="font-label-sm text-label-sm text-outline-variant shrink-0">Just now</span>
</div>
</div>
</div></main>
    </div>
  );
};

export default LockedDispatchesSwiftcartAdmin;
