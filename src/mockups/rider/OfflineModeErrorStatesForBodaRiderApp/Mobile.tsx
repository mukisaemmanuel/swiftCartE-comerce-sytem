// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/rider/offline_mode_error_states_for_boda_rider_app/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface OfflineModeErrorStatesForBodaRiderAppProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const OfflineModeErrorStatesForBodaRiderApp: React.FC<OfflineModeErrorStatesForBodaRiderAppProps> = (props) => {
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
      
      <header className="fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl pt-safe shadow-[0_1px_8px_rgba(14,27,77,0.04)]"><div className="h-16 px-margin flex items-center justify-between"><button type="button" className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 mr-2" aria-label="Toggle Theme" title="Toggle Theme" onClick={() => toggleTheme()}>{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}</button><div className="flex items-center gap-space-sm"><button aria-label="Go back" className="min-w-[44px] min-h-[44px] -ml-2 flex items-center justify-center text-on-surface hover:text-primary transition-colors"><Icon name="arrow_back" className="text-[24px]" /></button><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col"><span className="font-label-sm text-primary tracking-wide uppercase">SwiftCart Ops</span><h1 className="font-headline-sm text-on-surface tracking-tight leading-none truncate max-w-[170px]">Boda Offline Error</h1></div></div><div className="flex items-center gap-space-xs"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex flex-col relative w-full pt-16 pb-safe bg-surface min-h-screen"><div className="flex flex-col w-full pb-28">

<section className="sticky top-0 z-40 bg-surface-container-high/95 backdrop-blur-md px-margin py-3 shadow-md">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-error"></span>
</span>
<span className="font-label-lg text-error uppercase tracking-wider">No Cellular Connection • Offline Mode Active</span>
</div>
<button className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-lowest text-on-surface shadow-sm active:scale-95 transition-transform" id="retry-btn">
<Icon name="sync" className="text-[16px] text-primary transition-transform" />
<span className="font-label-sm text-primary">Retry</span>
</button>
</div>
<p className="font-body-sm text-on-surface-variant leading-tight">
        Using cached manifests &amp; offline cryptographic OTP. Telemetry queued (<span className="font-label-sm text-on-surface">4 events</span>). Next sync probe in <span className="font-label-sm text-primary" id="sync-timer">42s</span>.
      </p>
</div>
</section>
<div className="px-margin flex flex-col gap-4 mt-3">

<div className="flex items-center justify-between bg-surface-container-lowest p-3 rounded-xl shadow-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
<Icon name="two_wheeler" className="text-[20px]" />
</div>
<div>
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-on-surface">Kizito Brian</span>
<span className="px-1.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm">Bajaj UEF 842X</span>
</div>
<p className="font-body-sm text-on-surface-variant">Lugogo Bypass • Return Escort</p>
</div>
</div>
<div className="flex flex-col items-end">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm">
<Icon name="satellite_alt" className="text-[12px]" /> GPS Lock
        </span>
<span className="font-label-sm text-on-surface-variant mt-0.5">Satellites: 9/12</span>
</div>
</div>

<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col gap-3">
<div className="flex items-start justify-between">
<div>
<div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm uppercase">
<Icon name="assignment_return" className="text-[14px]" />
            Reverse Delivery #RET-4819
          </div>
<h2 className="font-headline-sm text-on-surface mt-1">Pioneer Mall G-14</h2>
<p className="font-body-sm text-on-surface-variant">SoundCore Uganda • Central Kampala</p>
</div>
<div className="text-right">
<span className="font-price-display text-primary leading-none">2.4</span>
<span className="font-label-sm text-on-surface block uppercase">KM Left</span>
</div>
</div>

<div className="relative w-full h-44 rounded-xl overflow-hidden bg-surface-container-high flex flex-col justify-end p-3">
<svg className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 176">

<rect fill="#f3ede7" height="176" width="360"></rect>
<path d="M-10 40 Q 90 60 180 30 T 370 70" stroke="#dfd9d3" strokeLinecap="round" strokeWidth="12"></path>
<path d="M40 -10 Q 60 80 120 180" stroke="#dfd9d3" strokeLinecap="round" strokeWidth="8"></path>
<path d="M220 -10 L 260 186" stroke="#dfd9d3" strokeLinecap="round" strokeWidth="7"></path>
<path d="M110 176 L 370 20" stroke="#dfd9d3" strokeLinecap="round" strokeWidth="14"></path>

<path className="animate-pulse" d="M 45 130 C 110 115, 140 85, 190 75 S 270 45, 305 35" id="route-path" stroke="#da3700" strokeDasharray="6 4" strokeLinecap="round" strokeWidth="5"></path>

<circle cx="45" cy="130" fill="#505b90" r="8"></circle>
<circle cx="45" cy="130" fill="#ffffff" r="4"></circle>

<circle cx="305" cy="35" fill="#00855b" r="9"></circle>
<circle cx="305" cy="35" fill="#ffffff" r="4"></circle>
</svg>

<div className="relative z-10 bg-surface-container-lowest/90 backdrop-blur-md p-2 rounded-lg flex items-center justify-between shadow-sm">
<div className="flex items-center gap-2">
<Icon name="navigation" className="text-[18px] text-primary" />
<div className="flex flex-col">
<span className="font-label-sm text-on-surface">Cached Route: Lugogo → Yusuf Lule → Kampala Rd</span>
<span className="font-body-sm text-on-surface-variant">Map cached at 4:02 PM • Device satellite lock active</span>
</div>
</div>
<Icon name="cloud_done" className="text-tertiary text-[20px]" />
</div>
</div>
<div className="flex items-center gap-2 bg-surface-container-low px-3 py-2 rounded-lg">
<Icon name="check_circle" className="text-[18px] text-tertiary" />
<span className="font-body-sm text-on-surface">Turn-by-turn guidance continuing without active cellular carrier.</span>
</div>
</section>

<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="offline_pin" className="text-primary text-[22px]" />
<h3 className="font-label-lg text-on-surface">Verify Handover Offline</h3>
</div>
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm">
          SHA-256 Vault
        </span>
</div>
<p className="font-body-sm text-on-surface-variant">
        Request the Merchant / Customer 4-digit token. Validated locally via pre-loaded manifest seeds.
      </p>

<div className="flex justify-between items-center gap-2 my-1">
<div className="w-14 h-14 rounded-xl bg-surface-container-low flex items-center justify-center font-headline-md text-on-surface shadow-inner">
          8
        </div>
<div className="w-14 h-14 rounded-xl bg-surface-container-low flex items-center justify-center font-headline-md text-on-surface shadow-inner">
          4
        </div>
<div className="w-14 h-14 rounded-xl bg-surface-container-low flex items-center justify-center font-headline-md text-on-surface shadow-inner">
          9
        </div>
<div className="w-14 h-14 rounded-xl bg-surface-container-low flex items-center justify-center font-headline-md text-on-surface shadow-inner">
          2
        </div>
</div>

<div className="bg-surface-container-low p-2.5 rounded-lg flex items-start gap-2">
<Icon name="verified_user" className="text-[18px] text-tertiary mt-0.5" />
<div className="flex flex-col">
<span className="font-label-sm text-tertiary">Cryptographic Key Match: Valid (SoundCore Return Auth)</span>
<p className="font-body-sm text-on-surface-variant">
            Zero-network token confirmed. Signature receipt will automatically dispatch once MTN/Airtel reconnects.
          </p>
</div>
</div>
</section>

<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="inventory_2" className="text-secondary text-[20px]" />
<h3 className="font-label-lg text-on-surface">Local Encrypted Queue (4 Items)</h3>
</div>
<span className="font-label-sm px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant">
          Auto-Pushed
        </span>
</div>
<div className="flex flex-col gap-2">

<div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low">
<div className="flex items-center gap-2.5 min-w-0">
<Icon name="photo_camera" className="text-primary text-[20px]" />
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-on-surface truncate">Buyer Tamper Seal Photo</span>
<span className="font-body-sm text-on-surface-variant truncate">RET-4819_seal.jpg • 1.2 MB</span>
</div>
</div>
<span className="font-label-sm text-error uppercase shrink-0 flex items-center gap-1">
<Icon name="schedule" className="text-[14px]" /> Queued
          </span>
</div>

<div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low">
<div className="flex items-center gap-2.5 min-w-0">
<Icon name="draw" className="text-primary text-[20px]" />
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-on-surface truncate">Alex Kato Doorstep Sig</span>
<span className="font-body-sm text-on-surface-variant truncate">sig_8492.dat • SHA-256 Sign</span>
</div>
</div>
<span className="font-label-sm text-tertiary uppercase shrink-0 flex items-center gap-1">
<Icon name="lock" className="text-[14px]" /> Encrypted
          </span>
</div>

<div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low">
<div className="flex items-center gap-2.5 min-w-0">
<Icon name="near_me" className="text-primary text-[20px]" />
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-on-surface truncate">GPS Waypoint Telemetry</span>
<span className="font-body-sm text-on-surface-variant truncate">Lugogo_JinjaRd_KM2.1 (8 pts)</span>
</div>
</div>
<span className="font-label-sm text-secondary uppercase shrink-0 flex items-center gap-1">
<Icon name="database" className="text-[14px]" /> Logged
          </span>
</div>

<div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low">
<div className="flex items-center gap-2.5 min-w-0">
<Icon name="barcode_scanner" className="text-primary text-[20px]" />
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-on-surface truncate">Bag Seal Barcode Scan</span>
<span className="font-body-sm text-on-surface-variant truncate">RET-4819-UG-PIONEER</span>
</div>
</div>
<span className="font-label-sm text-tertiary uppercase shrink-0 flex items-center gap-1">
<Icon name="check" className="text-[14px]" /> Verified
          </span>
</div>
</div>
</section>

<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col gap-3">
<div className="flex items-center gap-2">
<Icon name="cell_tower" className="text-error text-[20px]" />
<h3 className="font-label-lg text-on-surface">Network Diagnostics &amp; Lugogo Corridor Fallbacks</h3>
</div>

<div className="grid grid-cols-2 gap-2">
<div className="p-2.5 rounded-xl bg-surface-container-low flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-sm text-on-surface">SIM 1: MTN</span>
<Icon name="signal_cellular_nodata" className="text-[16px] text-error" />
</div>
<span className="font-label-sm text-error">Searching...</span>
<span className="font-body-sm text-on-surface-variant">Jinja Rd Cell Down</span>
</div>
<div className="p-2.5 rounded-xl bg-surface-container-low flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-sm text-on-surface">SIM 2: Airtel</span>
<Icon name="signal_cellular_1_bar" className="text-[16px] text-secondary" />
</div>
<span className="font-label-sm text-secondary">2G Edge Available</span>
<button className="mt-1 px-2 py-1 rounded bg-surface-container-highest text-on-surface font-label-sm active:scale-95 text-left">
            Switch Carrier
          </button>
</div>
</div>

<div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface">
<Icon name="dialpad" className="text-[18px]" />
</div>
<div className="flex flex-col">
<span className="font-label-sm text-on-surface">USSD Emergency Signal</span>
<span className="font-body-sm text-on-surface-variant">Push return token via GSM voice channel</span>
</div>
</div>
<a className="px-3 py-1.5 rounded-lg bg-surface-container-highest text-primary font-label-sm active:scale-95" href="tel:*165*88%23">
          *165*88#
        </a>
</div>

<a className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low active:bg-surface-container-high transition-colors" href="tel:+256800220800">
<div className="flex items-center gap-2">
<Icon name="phone_in_talk" className="text-tertiary text-[20px]" />
<div className="flex flex-col">
<span className="font-label-sm text-on-surface">SwiftOps Dispatch Radio Hotline</span>
<span className="font-body-sm text-on-surface-variant">+256 800 220 800 (Toll-Free)</span>
</div>
</div>
<Icon name="arrow_forward" className="text-on-surface-variant text-[18px]" />
</a>
</section>
</div>

<div className="fixed bottom-0 inset-x-0 bg-surface/90 backdrop-blur-xl p-margin z-50 shadow-[0_-4px_20px_rgba(14,27,77,0.06)]">
<div className="flex flex-col gap-2 max-w-lg mx-auto">
<div className="flex items-center justify-center gap-1.5">
<Icon name="sync_saved_locally" className="text-tertiary text-[14px]" />
<span className="font-body-sm text-on-surface-variant">
          Delivery proof will auto-upload when corridor connection restores.
        </span>
</div>
<button className="w-full h-12 rounded-xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-label-lg shadow-lg flex items-center justify-center gap-2 active:scale-[0.98] transition-transform" id="complete-handover-btn">
<Icon name="storefront" className="text-[20px]" />
<span>Proceed with Offline Store Handover</span>
</button>
</div>
</div>
</div>
</main>
    </div>
  );
};

export default OfflineModeErrorStatesForBodaRiderApp;
