// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/rider/rider_offline_mode_cached_manifest_tablet_light/code.html
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
      
      <main className="w-full pt-20 pb-24 bg-surface min-h-[calc(100vh-5rem)]"><div className="max-w-[834px] mx-auto px-space-lg py-space-md"><div className="flex flex-col w-full gap-space-lg">

<div className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-lg shadow-sm">
<div className="absolute -right-8 -top-8 w-44 h-44 rounded-full bg-primary/5 pointer-events-none blur-2xl"></div>
<div className="relative flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-start gap-space-md min-w-0">
<div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center flex-shrink-0 shadow-md">
<Icon name="cloud_off" className="text-[22px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="font-label-lg text-label-lg text-primary tracking-tight">OFFLINE MODE ACTIVE</span>
<span className="text-on-surface-variant font-label-sm text-label-sm">•</span>
<span className="font-label-md text-label-md text-on-surface font-semibold truncate">No Cellular Carrier Signal (MTN / Airtel 0 Bar Valley)</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            Last sync 14 mins ago at Nakasero Hub. 4 Manifest deliveries cached in encrypted SQLite storage. Biometric hashes &amp; signatures armed.
          </p>
</div>
</div>
<div className="flex items-center gap-space-xs flex-shrink-0 self-start md:self-center">
<div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm">
<Icon name="lock" className="text-primary text-[14px]" />
<span className="tracking-wide">ENCLAVE: LOCKED</span>
</div>
<div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
<span className="font-bold">4 Queued</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<div className="lg:col-span-5 flex flex-col gap-space-md">

<div className="flex items-center justify-between px-space-xs">
<div className="flex items-center gap-space-xs">
<Icon name="database" className="text-primary text-[20px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Cached Manifest</h2>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">4/4 LOCAL • SQLite v3.44</span>
</div>

<div className="relative bg-surface-container-lowest rounded-xl shadow-sm">
<Icon name="search" className="absolute left-3 top-3 text-on-surface-variant text-[20px]" />
<input className="w-full h-11 pl-10 pr-3 rounded-xl bg-transparent font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant outline-none" placeholder="Search waybill # or customer name..." type="text" />
</div>

<div className="flex flex-col gap-space-sm" id="manifestRoster">

<div className="relative bg-surface-container-lowest rounded-xl p-space-md shadow-md cursor-pointer transition-all">
<div className="absolute left-0 top-3 bottom-3 w-1 bg-primary rounded-r"></div>
<div className="flex items-start justify-between gap-space-xs pl-2">
<div>
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg text-on-surface">#SC-9952</span>
<span className="px-1.5 py-0.5 rounded bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm">Ready Handover</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">Sarah Namubiru</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-0.5">
<Icon name="location_on" className="text-[14px] text-primary" />
                Acacia Mall Gate 2, Kisementi
              </p>
</div>
<div className="text-right flex-shrink-0">
<span className="font-label-sm text-label-sm text-on-surface-variant block uppercase">Escrow Held</span>
<span className="font-price-display text-price-display text-primary font-bold whitespace-nowrap">UGX 248.5K</span>
</div>
</div>
<div className="mt-space-md pt-space-xs pl-2 flex items-center justify-between bg-surface-container-low rounded-lg p-2">
<div className="flex items-center gap-1 text-tertiary">
<Icon name="verified_user" className="text-[15px]" />
<span className="font-label-sm text-label-sm">HMAC-SHA256 Stored</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Salt: 0x9F4A88</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow cursor-pointer opacity-90 hover:opacity-100">
<div className="flex items-start justify-between gap-space-xs">
<div>
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg text-on-surface">#SC-9955</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Cached</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">Ronald Kato</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-0.5">
<Icon name="location_on" className="text-[14px]" />
                Lugogo Bypass, UMA Showground
              </p>
</div>
<div className="text-right flex-shrink-0">
<span className="font-label-sm text-label-sm text-on-surface-variant block uppercase">Escrow Held</span>
<span className="font-headline-sm text-headline-sm text-on-surface whitespace-nowrap">UGX 115K</span>
</div>
</div>
<div className="mt-2.5 flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm">Package: Gadget Accessories (0.8 kg)</span>
<span className="font-label-sm text-label-sm">Token Loaded</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow cursor-pointer opacity-90 hover:opacity-100">
<div className="flex items-start justify-between gap-space-xs">
<div>
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg text-on-surface">#SC-9958</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Cached</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">Emmanuel B.</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-0.5">
<Icon name="location_on" className="text-[14px]" />
                Ntinda Complex, Block B Flat 4
              </p>
</div>
<div className="text-right flex-shrink-0">
<span className="font-label-sm text-label-sm text-on-surface-variant block uppercase">Escrow Held</span>
<span className="font-headline-sm text-headline-sm text-on-surface whitespace-nowrap">UGX 65K</span>
</div>
</div>
<div className="mt-2.5 flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm">Package: Organic Groceries (3.2 kg)</span>
<span className="font-label-sm text-label-sm">Token Loaded</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow cursor-pointer opacity-90 hover:opacity-100">
<div className="flex items-start justify-between gap-space-xs">
<div>
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg text-secondary">#SC-RET-309</span>
<span className="px-1.5 py-0.5 rounded bg-secondary-container/30 text-on-secondary-container font-label-sm text-label-sm">Pickup Return</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">Victoria Tech Return</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-0.5">
<Icon name="location_on" className="text-[14px]" />
                Kololo, Prince Charles Drive
              </p>
</div>
<div className="text-right flex-shrink-0">
<span className="font-label-sm text-label-sm text-on-surface-variant block uppercase">Merchant Return</span>
<span className="font-headline-sm text-headline-sm text-on-surface">0 KG Sealed</span>
</div>
</div>
<div className="mt-2.5 flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm">RMA #VT-8819</span>
<span className="font-label-sm text-label-sm text-tertiary">Pre-approved</span>
</div>
</div>
</div>

<div className="flex flex-col gap-space-xs mt-space-xs">
<button className="w-full h-12 rounded-xl bg-surface-container-lowest text-on-surface font-label-lg text-label-lg flex items-center justify-center gap-space-xs shadow-sm hover:bg-surface-container-low transition-colors" id="reconnectBtn">
<Icon name="sync" className="text-primary text-[20px]" />
<span id="reconnectLabel">Force Cellular Network Reconnect</span>
</button>
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-1 text-on-surface-variant">
<Icon name="fingerprint" className="text-[16px]" />
<span className="font-label-sm text-label-sm">PBKDF2-HMAC Key Derivation</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">38.4 KB Local Cache</span>
</div>
</div>
</div>

<div className="lg:col-span-7 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md relative overflow-hidden">
<div className="flex items-center justify-between flex-wrap gap-space-xs">
<div>
<div className="flex items-center gap-space-xs">
<span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm uppercase font-bold tracking-wider">Dispatch Proof</span>
<span className="font-label-sm text-label-sm text-tertiary flex items-center gap-0.5">
<Icon name="format_image_left" className="text-[14px]" />
                HMAC VERIFIED LOCAL ENCLAVE
              </span>
</div>
<h1 className="font-headline-md text-headline-md text-on-surface mt-1">Sarah Namubiru <span className="text-on-surface-variant font-label-lg text-label-lg">(#SC-9952)</span></h1>
<p className="font-body-md text-body-md text-on-surface-variant mt-0.5">Acacia Mall Gate 2, Kampala Central • Buyer Phone: 07•• ••• 418</p>
</div>
<div className="px-3 py-1.5 rounded-xl bg-surface-container-low flex flex-col items-end">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Escrow Locked</span>
<span className="font-headline-sm text-headline-sm text-tertiary whitespace-nowrap">UGX 248,500</span>
</div>
</div>

<div className="mt-space-lg p-space-md rounded-xl bg-surface-container-low">
<div className="flex items-center justify-between mb-space-xs">
<div className="flex items-center gap-1.5">
<Icon name="dialpad" className="text-primary text-[18px]" />
<span className="font-label-lg text-label-lg text-on-surface">Offline 6-Digit Delivery OTP Code</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Customer SMS / In-App Offline Seed</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
            Customer provides the cryptographic handover token displayed on their phone. Verified locally against pre-synced salted SHA-256 digest.
          </p>

<div className="grid grid-cols-6 gap-2 sm:gap-3 max-w-md mx-auto">
<div className="h-12 rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-center font-headline-sm text-headline-sm text-on-surface">7</div>
<div className="h-12 rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-center font-headline-sm text-headline-sm text-on-surface">3</div>
<div className="h-12 rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-center font-headline-sm text-headline-sm text-on-surface">9</div>
<div className="h-12 rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-center font-headline-sm text-headline-sm text-on-surface">1</div>
<div className="h-12 rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-center font-headline-sm text-headline-sm text-on-surface">8</div>
<div className="h-12 rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-center font-headline-sm text-headline-sm text-on-surface">4</div>
</div>

<div className="mt-space-md p-2.5 rounded-lg bg-surface-container-lowest flex items-center justify-between shadow-sm">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center flex-shrink-0">
<Icon name="check" className="text-[15px]" />
</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-tertiary font-bold">Digest Matched &amp; Validated</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono truncate max-w-[280px] sm:max-w-md">SHA256(739184 + device_salt) == 0x9f4a88... VALID</span>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-tertiary-container/10 text-tertiary font-label-sm text-label-sm font-semibold">100% MATCH</span>
</div>
</div>

<div className="mt-space-md p-space-md rounded-xl bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-md">
<div className="w-9 h-9 rounded-lg bg-tertiary/10 text-tertiary flex items-center justify-center flex-shrink-0">
<Icon name="verified" className="text-[20px]" />
</div>
<div>
<span className="font-label-md text-label-md text-on-surface block">Physical Tamper Ribbon Intact</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Customer inspected green ribbon seal intact before opening (Seal #4419)</span>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
<input checked={true} className="sr-only peer" type="checkbox" />
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-tertiary"></div>
</label>
</div>

<div className="mt-space-md">
<div className="flex items-center justify-between mb-space-xs">
<div className="flex items-center gap-1.5">
<Icon name="draw" className="text-primary text-[18px]" />
<span className="font-label-lg text-label-lg text-on-surface">Offline Customer Touch Signature</span>
</div>
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-tertiary flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-tertiary"></span> Canvas Ready
              </span>
<button className="px-2 py-1 rounded bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm hover:text-on-surface" id="clearSigBtn">Clear</button>
</div>
</div>

<div className="relative w-full h-36 rounded-xl bg-surface-container-low overflow-hidden flex items-center justify-center">

<div className="absolute inset-x-6 bottom-8 h-px bg-outline-variant/50"></div>
<span className="absolute left-6 bottom-2 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Sign above this line (Sarah Namubiru)</span>

<svg className="absolute inset-0 w-full h-full p-4 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 500 130">
<path className="opacity-90" d="M40 85 C65 25, 80 20, 95 85 C105 110, 115 40, 130 75 C145 95, 160 55, 175 80 C185 95, 205 65, 230 70 C250 75, 260 90, 290 85 M280 65 L360 65 M340 50 L350 85 M380 85 C400 80, 410 70, 420 85" stroke="#1e1b18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
</svg>
</div>
</div>

<div className="mt-space-md grid grid-cols-2 sm:grid-cols-4 gap-2">
<div className="p-2 rounded-lg bg-surface-container-low">
<span className="font-label-sm text-label-sm text-on-surface-variant block">GNSS Constellation</span>
<span className="font-label-md text-label-md text-on-surface flex items-center gap-1">
<Icon name="satellite_alt" className="text-[14px] text-tertiary" />
              11 Sats Locked
            </span>
</div>
<div className="p-2 rounded-lg bg-surface-container-low">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Hardware Lat/Long</span>
<span className="font-label-md text-label-md text-on-surface font-mono">0.3341° N</span>
</div>
<div className="p-2 rounded-lg bg-surface-container-low">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Longitude East</span>
<span className="font-label-md text-label-md text-on-surface font-mono">32.5891° E</span>
</div>
<div className="p-2 rounded-lg bg-surface-container-low">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Hardware Timestamp</span>
<span className="font-label-md text-label-md text-on-surface font-mono">14:48:22 EAT</span>
</div>
</div>

<div className="mt-space-lg flex flex-col gap-space-xs">
<button className="w-full h-14 rounded-xl bg-gradient-to-r from-primary-container to-primary text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-space-sm shadow-[0_4px_16px_rgba(218,55,0,0.30)] hover:brightness-105 active:scale-[0.99] transition-all" id="confirmHandoverBtn">
<Icon name="task_alt" className="text-[24px]" />
<span>CONFIRM OFFLINE HANDOVER &amp; SAVE TO SYNC QUEUE</span>
</button>
<div className="flex items-center justify-center gap-1.5 text-center mt-1 text-on-surface-variant">
<Icon name="history_toggle_off" className="text-[16px] text-tertiary" />
<p className="font-body-sm text-body-sm">
              Handover proof will automatically upload to SwiftCart central escrow ledger as soon as 3G/4G connectivity is restored.
            </p>
</div>
</div>
</div>

<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<Icon name="help_center" className="text-primary text-[20px]" />
<div>
<span className="font-label-md text-label-md text-on-surface block">Customer unable to find offline OTP?</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Direct them to dial USSD *284*44# to retrieve their encrypted delivery token without mobile data.</span>
</div>
</div>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors flex-shrink-0">
          USSD Guide
        </button>
</div>
</div>
</div>

<div className="fixed bottom-24 right-6 bg-surface-container-highest text-on-surface px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 transition-opacity duration-300 opacity-0 pointer-events-none z-50" id="statusToast">
<Icon name="check_circle" className="text-primary text-[20px]" />
<span className="font-label-md text-label-md" id="toastMsg">Proof stored securely in offline enclave</span>
</div>
</div>
</div></main>
    </div>
  );
};

export default Tablet;
