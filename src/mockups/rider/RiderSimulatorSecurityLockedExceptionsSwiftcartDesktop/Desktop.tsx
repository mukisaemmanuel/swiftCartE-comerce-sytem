// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/rider/rider_simulator_security_locked_exceptions_swiftcart_desktop/code.html
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
      
      <div className="pl-0"><main className="w-full pt-16 bg-surface-dark min-h-screen"><div className="flex flex-col w-full p-gutter-desktop gap-space-xl">

<div className="w-full bg-surface-container-high rounded-xl p-space-md shadow-lg flex flex-wrap items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-lg bg-danger-penalty/15 flex items-center justify-center text-danger-penalty">
<Icon name="gshield" className="text-[24px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-sm">
<span className="font-headline-sm text-headline-sm text-on-surface">Security Incident #SEC-KLA-4402</span>
<span className="px-space-sm py-0.5 rounded-full bg-danger-penalty text-surface-dark font-label-sm text-label-sm uppercase tracking-wider">Deadbolt Locked</span>
<span className="px-space-sm py-0.5 rounded-full bg-amber-warning/20 text-amber-warning font-label-sm text-label-sm uppercase">2G Degraded Route</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Rider ID #BD-8841 (Kato Samuel) | Device: Tecno Camon 20 | William St. Corridor 04</span>
</div>
</div>
<div className="flex items-center gap-space-md">
<div className="flex flex-col items-end">
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Lockbox Electronic Solenoid</span>
<span className="font-label-md text-label-md text-danger-penalty flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-danger-penalty animate-ping"></span>
          ENGAGED • 0.00V REVERSE CURRENT
        </span>
</div>
<button className="px-space-lg py-space-sm bg-error-container text-on-error-container font-label-md text-label-md rounded-lg shadow-sm hover:brightness-110 active:scale-95 transition-transform flex items-center gap-space-xs">
<Icon name="emergency_home" className="text-[18px]" />
<span>Escalate to Fraud Desk</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-gutter-desktop items-start">

<div className="xl:col-span-5 flex flex-col items-center">
<div className="w-full max-w-[400px] bg-surface-container-lowest rounded-[44px] p-3 shadow-2xl relative">

<div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-surface-dark rounded-full flex items-center justify-center gap-2 z-30">
<div className="w-2.5 h-2.5 rounded-full bg-surface-container-highest"></div>
<div className="w-1.5 h-1.5 rounded-full bg-primary/20"></div>
</div>

<div className="w-full h-[760px] bg-surface-dark rounded-[36px] overflow-hidden flex flex-col justify-between relative shadow-inner">

<div className="w-full flex flex-col z-20">

<div className="w-full h-8 px-6 pt-2 flex items-center justify-between text-on-surface-variant text-[11px] font-mono">
<span>14:28</span>
<div className="flex items-center gap-1.5">
<span className="text-[10px] text-amber-warning font-bold">2.5G EDGE</span>
<Icon name="signal_cellular_alt_2_bar" className="text-[14px]" />
<Icon name="battery_3_bar" className="text-[14px]" />
</div>
</div>

<div className="w-full bg-amber-warning text-surface-dark px-space-md py-space-xs flex items-center justify-between shadow-md">
<div className="flex items-center gap-space-xs">
<Icon name="cloud_off" className="text-[16px]" />
<span className="font-label-sm text-label-sm">Offline: SQLite Cached. GPS Queueing.</span>
</div>
<span className="px-1.5 py-0.5 rounded bg-surface-dark/15 font-code-display text-[11px] font-bold">12 Q'D</span>
</div>
</div>

<div className="flex-1 p-space-md flex flex-col justify-between relative">

<div className="absolute inset-0 opacity-20 bg-cover bg-center" data-location="William Street, Kampala, Uganda" style={{}}></div>
<div className="absolute inset-0 bg-gradient-to-b from-surface-dark/90 via-surface-dark/95 to-surface-dark"></div>

<div className="relative z-10 flex-1 flex flex-col justify-between pt-space-md">

<div className="flex flex-col items-center text-center">
<div className="relative mb-space-md">
<div className="w-20 h-20 rounded-full bg-danger-penalty/20 flex items-center justify-center animate-pulse">
<div className="w-14 h-14 rounded-full bg-danger-penalty flex items-center justify-center text-on-primary-container shadow-lg">
<Icon name="lock" className="text-[32px]" />
</div>
</div>
<Icon name="warning" className="absolute -bottom-1 -right-1 bg-amber-warning text-surface-dark rounded-full p-1 text-[16px]" />
</div>
<div className="px-space-sm py-0.5 rounded-full bg-danger-penalty/15 text-danger-penalty font-label-sm text-label-sm uppercase font-bold tracking-widest mb-space-xs">
                  Hardware Cutoff Protocol
                </div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-extrabold tracking-tight">
                  Delivery PIN Locked<br />
<span className="text-danger-penalty text-[16px] font-semibold">(3 Failed Attempts)</span>
</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm px-space-xs text-center leading-relaxed">
                  Security Protocol Activated: 3 invalid delivery OTP attempts were entered for <span className="text-primary font-mono font-bold">Waybill #SC-98241</span>. Parcel lockbox is secured. Custody cannot be transferred without supervisor clearance.
                </p>
</div>

<div className="w-full bg-container-dark-high rounded-xl p-space-md shadow-md my-space-md flex flex-col gap-space-xs">
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span>Buyer Name:</span>
<span className="text-on-surface font-bold">Grace N. (07•• ••• 419)</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span>Declared Item:</span>
<span className="text-on-surface">Samsung Galaxy A54 5G (Sealed)</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span>Escrow Hold:</span>
<span className="text-tertiary-fixed font-bold font-price-display text-[16px] whitespace-nowrap">UGX 1,450,000</span>
</div>
<div className="flex items-center justify-between text-danger-penalty font-label-sm text-label-sm pt-space-xs">
<span>Lockbox Solenoid:</span>
<span className="uppercase font-bold tracking-wider">HARD LOCK • ZERO PERMIT</span>
</div>
</div>

<div className="flex flex-col gap-space-sm pb-space-sm">
<a className="w-full h-[52px] rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-lg text-label-lg shadow-lg flex items-center justify-center gap-space-sm hover:brightness-110 active:scale-98 transition-all" href="tel:+256800220800">
<Icon name="phone_in_talk" className="text-[20px]" />
<span>Call Central Dispatch</span>
</a>
<button className="w-full h-11 rounded-xl bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center justify-center gap-space-xs hover:bg-surface-variant active:scale-98 transition-colors">
<Icon name="undo" className="text-[18px]" />
<span>Return Parcel to William St Hub</span>
</button>
</div>
</div>
</div>

<div className="w-full h-4 pb-2 flex items-center justify-center">
<div className="w-32 h-1 bg-surface-container-highest rounded-full"></div>
</div>
</div>
</div>
<div className="mt-space-sm text-center">
<span className="font-label-sm text-label-sm text-on-surface-variant">Live Screen Mirroring • Low Bandwidth Mode (Websocket 114ms)</span>
</div>
</div>

<div className="xl:col-span-7 flex flex-col gap-gutter-desktop">

<div className="bg-surface-container-low rounded-xl p-space-lg shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<Icon name="security" className="text-danger-penalty text-[22px]" />
<span className="font-headline-sm text-headline-sm text-on-surface">Lockbox &amp; Threat Telemetry</span>
</div>
<span className="font-code-display text-[12px] text-on-surface-variant">NODE_ADDR: 0x88F9_SOLENOID</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
<div className="bg-container-dark-low rounded-lg p-space-md shadow-inner flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Failed OTP Attempts</span>
<span className="font-code-display text-[18px] text-danger-penalty font-bold tracking-wider">111111 • 000000 • 123456</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Rapid threshold tripped (&lt; 45s)</span>
</div>
<div className="bg-container-dark-low rounded-lg p-space-md shadow-inner flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">GPS Coordinates Pinpoint</span>
<span className="font-code-display text-[14px] text-primary font-mono font-bold">0.3276° N, 32.5891° E</span>
<span className="font-body-sm text-body-sm text-tertiary-fixed">Match Corridor 04 Radius (&lt;12m)</span>
</div>
<div className="bg-container-dark-low rounded-lg p-space-md shadow-inner flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Lockbox Electronic Solenoid</span>
<span className="font-label-lg text-label-lg text-danger-penalty font-bold">DEADBOLT ARMED</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Physical bypass blocked</span>
</div>
</div>

<div className="bg-container-dark-low rounded-lg p-space-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-bold">Incident Micro-Audit Trail</span>
<span className="font-label-sm text-label-sm text-tertiary-fixed">Cryptographically Stamped</span>
</div>
<div className="space-y-2 font-mono text-[11px]">
<div className="flex items-center justify-between text-on-surface-variant">
<span>[14:26:11 EAT] OTP Submission #1: "111111" (REJECTED - Hash Mismatch)</span>
<span className="text-danger-penalty">FAILED</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant">
<span>[14:26:38 EAT] OTP Submission #2: "000000" (REJECTED - Pattern Detected)</span>
<span className="text-danger-penalty">FAILED</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant">
<span>[14:27:02 EAT] OTP Submission #3: "123456" (REJECTED - Max Exceeded)</span>
<span className="text-danger-penalty">FAILED</span>
</div>
<div className="flex items-center justify-between text-on-surface bg-danger-penalty/10 p-1 rounded">
<span className="text-danger-penalty font-bold">[14:27:03 EAT] ACTION: Hardware Deadbolt Trip Broadcasted over BLE/GSM. Rider screen locked.</span>
<span className="text-danger-penalty font-bold">ENFORCED</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-lg shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<Icon name="badge" className="text-action-gradient-start text-[22px]" />
<span className="font-headline-sm text-headline-sm text-on-surface">Central Dispatch Identity Verification Workbench</span>
</div>
<span className="px-space-sm py-0.5 rounded-full bg-tertiary-container/30 text-tertiary-fixed font-label-sm text-label-sm uppercase font-bold whitespace-nowrap">Escrow Hold UGX 1.45M</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="bg-container-dark-low rounded-lg p-space-md flex flex-col justify-between gap-space-sm">
<div>
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-bold">National ID (NIN) KYC Match Tool</span>
<div className="flex items-center gap-space-md mt-space-sm">
<div className="w-16 h-16 rounded-lg overflow-hidden bg-surface-container-highest shrink-0 shadow-sm">
<img className="w-full h-full object-cover" data-alt="Official biometric portrait photo of Grace Nantongo, an East African Ugandan woman in her late 20s with neutral facial expression, clear studio light on dark background for national digital identity verification." src="/images/4a9488301162d6f1.webp" />
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Grace Nantongo</span>
<span className="font-code-display text-[12px] text-tertiary font-mono">NIN: CM950811082KLA</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Verified MTN Mobile Money KYC</span>
</div>
</div>
</div>

<div className="pt-space-xs flex items-center gap-space-sm">
<button className="flex-1 py-space-sm px-space-md bg-container-dark-high text-on-surface hover:bg-surface-container-highest rounded-lg font-label-md text-label-md flex items-center justify-center gap-space-xs transition-colors" id="callBtn">
<Icon name="phone_forwarded" className="text-action-gradient-start text-[18px]" />
<span id="callText">One-Click Dispatch Voice Relay</span>
</button>
</div>
</div>

<div className="bg-container-dark-low rounded-lg p-space-md flex flex-col justify-between gap-space-sm">
<div>
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-bold">Supervisor Emergency Unlock Console</span>
<div className="mt-space-sm flex flex-col gap-space-xs">
<label className="font-body-sm text-body-sm text-on-surface-variant">Mandatory Audit Justification:</label>
<select className="w-full bg-surface-container-high text-on-surface rounded-lg p-space-sm font-label-md text-label-md focus:outline-none focus:ring-0" id="unlockReason">
<option value="voice_verified">Verified with Customer Voice Handshake</option>
<option value="battery_died">Customer Phone Battery Depleted on Scene</option>
<option value="typo">Confirmed Typographical Error in App Delivery Code</option>
<option value="supervisor_escort">Physical Supervisor Corridor Escort Assigned</option>
</select>
</div>
</div>
<div className="flex items-center justify-between bg-surface-container-high/60 rounded-lg p-space-sm">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">One-Time Dynamic Unlock Code:</span>
<span className="font-code-display text-[20px] text-tertiary tracking-widest font-bold" id="generatedCode">849-204</span>
</div>
<button className="p-space-xs text-on-surface-variant hover:text-on-surface rounded-lg bg-container-dark-low transition-colors">
<Icon name="refresh" className="text-[18px]" />
</button>
</div>
</div>
</div>

<div className="bg-container-dark-low rounded-lg p-space-md flex flex-wrap items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<Icon name="sync_problem" className="text-amber-warning text-[24px]" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">SQLite Queue: 42 KB Pending Local Telemetry</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">SHA-256 Checksum: <span className="font-mono text-tertiary">9F8A...201E (Valid)</span> • 14 GPS Breadcrumbs Queued</span>
</div>
</div>
<div className="flex items-center gap-space-sm">
<span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded bg-container-dark-high text-on-surface-variant font-label-sm text-label-sm">
<span className="w-2 h-2 rounded-full bg-amber-warning animate-pulse"></span>
              Auto-Reconnect Polling (5s)
            </span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">
<button className="h-[52px] rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-lg text-label-lg shadow-lg flex items-center justify-center gap-space-sm hover:brightness-110 active:scale-98 transition-all" id="unlockBtn">
<Icon name="lock_open" className="text-[20px]" />
<span>Authorize Remote PIN Reset &amp; Unlock Deadbolt</span>
</button>
<button className="h-[52px] rounded-xl bg-surface-container-high text-error font-label-lg text-label-lg flex items-center justify-center gap-space-sm hover:bg-surface-variant active:scale-98 transition-colors">
<Icon name="assignment_return" className="text-[20px]" />
<span>Order Immediate Return to Station #04</span>
</button>
</div>
</div>
</div>
</div>

<div className="fixed bottom-6 right-6 max-w-md bg-container-dark-high text-on-surface p-space-md rounded-xl shadow-2xl flex items-center gap-space-md transform translate-y-32 transition-transform duration-200 z-50" id="actionToast">
<div className="w-8 h-8 rounded-full bg-emerald-escrow/20 text-emerald-escrow flex items-center justify-center shrink-0" id="toastIconContainer">
<Icon name="check_circle" className="text-[20px]" />
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold" id="toastTitle">Command Transmitted</span>
<span className="font-body-sm text-body-sm text-on-surface-variant" id="toastDesc">GSM payload pushed to Rider #BD-8841.</span>
</div>
</div>
</div>
</main></div>
    </div>
  );
};

export default Desktop;
