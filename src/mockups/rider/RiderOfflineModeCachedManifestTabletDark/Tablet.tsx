// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/rider/rider_offline_mode_cached_manifest_tablet_dark/code.html
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
      
      <div className="w-full max-w-[834px] min-h-screen flex flex-col bg-surface shadow-[0_20px_60px_rgba(0,0,0,0.85)] relative"><main className="w-full flex-1 pt-20 pb-20 bg-surface"><div className="flex flex-col w-full">
<div className="relative w-full bg-amber-warning text-surface-dark px-gutter-desktop py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-2 shadow-lg">
<div className="flex items-center gap-space-md">
<div className="w-9 h-9 rounded-full bg-surface-dark text-amber-warning flex items-center justify-center shrink-0 animate-pulse">
<Icon name="cloud_off" className="text-[20px]" />
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm uppercase tracking-wider text-surface-dark leading-none">Offline Mode Active</span>
<span className="w-1.5 h-1.5 rounded-full bg-surface-dark"></span>
<span className="font-label-md text-label-md text-surface-dark/90 font-bold">No Cellular Carrier Signal (MTN / Airtel 0 Bar Valley)</span>
</div>
<p className="font-body-sm text-body-sm text-surface-dark/90 mt-0.5 font-medium">
          Last sync 14 mins ago at Nakasero Hub. 4 Manifest deliveries cached in encrypted SQLite storage. Biometric hashes &amp; signatures armed.
        </p>
</div>
</div>
<div className="flex items-center gap-space-sm shrink-0 self-end md:self-auto">
<span className="px-space-sm py-1 rounded bg-surface-dark/15 font-code-display text-[11px] text-surface-dark font-bold tracking-widest uppercase">
        secure engine: Locked
      </span>
<span className="px-space-sm py-1 rounded bg-surface-dark text-amber-warning font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="database" className="text-[13px]" />
        4 Queued
      </span>
</div>
</div>
<div className="w-full px-gutter-desktop py-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-desktop">
<div className="md:col-span-5 flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface">Cached Manifest</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-tertiary font-code-display text-[12px] font-bold">4 / 4 LOCAL</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
            SQLite v3.44
          </span>
</div>
<div className="relative w-full">
<Icon name="search" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]" />
<input className="w-full pl-11 pr-4 py-3 bg-container-dark-low rounded-xl text-on-surface placeholder:text-on-surface-variant/60 font-body-md text-body-md focus:outline-none focus:bg-surface-container-high transition-colors" placeholder="Search Waybill # or Customer Name..." type="text" />
<Icon name="offline_bolt" className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50 text-[18px]" />
</div>
<div className="flex flex-col gap-space-sm">
<div className="relative p-space-md rounded-xl bg-container-dark-high shadow-md transition-all cursor-pointer">
<div className="absolute left-0 top-3 bottom-3 w-1.5 bg-primary-container rounded-r-full"></div>
<div className="flex items-start justify-between gap-2 pl-2">
<div>
<div className="flex items-center gap-1.5">
<span className="font-code-display text-[13px] font-bold text-primary tracking-wider">#SC-9952</span>
<span className="px-1.5 py-0.5 rounded bg-tertiary-container/30 text-tertiary font-label-sm text-[10px] font-bold uppercase">Ready Handover</span>
</div>
<h3 className="font-headline-sm text-[16px] text-on-surface mt-1">Sarah Namubiru</h3>
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm mt-0.5">
<Icon name="location_on" className="text-[15px] text-primary" />
<span>Acacia Mall Gate 2, Kisementi</span>
</div>
</div>
<div className="text-right">
<span className="font-label-sm text-[10px] text-on-surface-variant block uppercase tracking-wider">Payment Held</span>
<span className="font-price-display text-[17px] font-bold text-tertiary whitespace-nowrap">UGX 248,500</span>
</div>
</div>
<div className="mt-3 pt-2.5 pl-2 flex items-center justify-between text-on-surface-variant font-body-sm text-[11px] bg-surface-container-low/60 -mx-1 -mb-1 px-3 py-1.5 rounded-lg">
<span className="flex items-center gap-1 text-emerald-escrow">
<Icon name="verified" className="text-[14px]" />
                HMAC-SHA256 Stored
              </span>
<span className="font-label-sm text-primary">SELECTED FOR PROOF →</span>
</div>
</div>
<div className="p-space-md rounded-xl bg-container-dark-low hover:bg-surface-container-high/60 transition-all cursor-pointer">
<div className="flex items-start justify-between gap-2">
<div>
<div className="flex items-center gap-1.5">
<span className="font-code-display text-[13px] font-bold text-on-surface-variant tracking-wider">#SC-9955</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-[10px] uppercase">Cached</span>
</div>
<h3 className="font-headline-sm text-[15px] text-on-surface mt-1">Ronald Kato</h3>
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm mt-0.5">
<Icon name="location_on" className="text-[15px]" />
<span>Lugogo Bypass, UMA Showground</span>
</div>
</div>
<div className="text-right">
<span className="font-label-sm text-[10px] text-on-surface-variant block uppercase tracking-wider">Payment Held</span>
<span className="font-headline-sm text-[16px] text-on-surface whitespace-nowrap">UGX 115,000</span>
</div>
</div>
<div className="mt-2.5 flex items-center justify-between text-on-surface-variant font-body-sm text-[11px]">
<span className="flex items-center gap-1">
<Icon name="lock" className="text-[13px]" />
                Token: ••••••914
              </span>
<span>Stop 2 of 4</span>
</div>
</div>
<div className="p-space-md rounded-xl bg-container-dark-low hover:bg-surface-container-high/60 transition-all cursor-pointer">
<div className="flex items-start justify-between gap-2">
<div>
<div className="flex items-center gap-1.5">
<span className="font-code-display text-[13px] font-bold text-on-surface-variant tracking-wider">#SC-9958</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-[10px] uppercase">Cached</span>
</div>
<h3 className="font-headline-sm text-[15px] text-on-surface mt-1">Emmanuel B.</h3>
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm mt-0.5">
<Icon name="location_on" className="text-[15px]" />
<span>Ntinda Complex, Block B Flat 4</span>
</div>
</div>
<div className="text-right">
<span className="font-label-sm text-[10px] text-on-surface-variant block uppercase tracking-wider">Payment Held</span>
<span className="font-headline-sm text-[16px] text-on-surface whitespace-nowrap">UGX 65,000</span>
</div>
</div>
<div className="mt-2.5 flex items-center justify-between text-on-surface-variant font-body-sm text-[11px]">
<span className="flex items-center gap-1">
<Icon name="lock" className="text-[13px]" />
                Token: ••••••402
              </span>
<span>Stop 3 of 4</span>
</div>
</div>
<div className="p-space-md rounded-xl bg-container-dark-low hover:bg-surface-container-high/60 transition-all cursor-pointer">
<div className="flex items-start justify-between gap-2">
<div>
<div className="flex items-center gap-1.5">
<span className="font-code-display text-[13px] font-bold text-amber-warning tracking-wider">#SC-RET-309</span>
<span className="px-1.5 py-0.5 rounded bg-amber-warning/20 text-amber-warning font-label-sm text-[10px] font-bold uppercase">Pickup Return</span>
</div>
<h3 className="font-headline-sm text-[15px] text-on-surface mt-1">Victoria Tech Return</h3>
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm mt-0.5">
<Icon name="assignment_return" className="text-[15px]" />
<span>Kololo Prince Charles Drive</span>
</div>
</div>
<div className="text-right">
<span className="font-label-sm text-[10px] text-on-surface-variant block uppercase tracking-wider">Merchant Return</span>
<span className="font-headline-sm text-[15px] text-on-surface-variant">0 KG • Sealed</span>
</div>
</div>
<div className="mt-2.5 flex items-center justify-between text-on-surface-variant font-body-sm text-[11px]">
<span className="flex items-center gap-1 text-amber-warning">
<Icon name="inventory" className="text-[13px]" />
                Box Exchange Required
              </span>
<span>Stop 4 of 4</span>
</div>
</div>
</div>
<button className="w-full py-3.5 px-4 rounded-xl bg-container-dark-high hover:bg-surface-container-highest text-on-surface font-label-lg flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.98]" id="reconnect-btn">
<Icon name="sync" className="text-[20px] text-primary transition-transform" />
<span>Force Cellular Network Reconnect</span>
</button>
<div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between text-on-surface-variant font-label-sm text-[11px]">
<span className="flex items-center gap-1">
<Icon name="lock_clock" className="text-[14px] text-tertiary" />
            SQLite Key Derivation: PBKDF2-HMAC
          </span>
<span className="text-tertiary">38.4 KB Local Cache</span>
</div>
</div>
<div className="md:col-span-7 flex flex-col gap-space-md">
<div className="p-space-xl rounded-2xl bg-container-dark-low shadow-xl flex flex-col gap-space-lg relative overflow-hidden">
<div className="flex items-start justify-between gap-4">
<div>
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-primary-container/20 text-primary font-code-display text-[12px] font-bold">DISPATCH PROOF</span>
<span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider font-bold">HMAC Verified Local secure engine</span>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface mt-1">Sarah Namubiru (#SC-9952)</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Acacia Mall Gate 2 • Buyer Phone: <span className="font-code-display text-on-surface">07•• ••• 418</span>
</p>
</div>
<div className="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center shrink-0">
<Icon name="phonelink_lock" className="text-primary text-[28px]" />
</div>
</div>
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-2.5">
<div className="flex items-center justify-between">
<label className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wider flex items-center gap-1.5">
<Icon name="key" className="text-amber-warning text-[18px]" />
                Offline 6-Digit Delivery OTP Code
              </label>
<span className="font-label-sm text-[11px] text-tertiary">Matches Pre-cached Salt</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Customer gives the code generated on their phone/SMS without internet. Local SHA-256 match confirms identity.
            </p>
<div className="grid grid-cols-6 gap-2 mt-1">
<input className="otp-box w-full aspect-square text-center font-code-display text-[22px] font-bold bg-container-dark-high text-on-surface rounded-lg focus:outline-none focus:bg-surface-container-highest transition-colors" maxLength={1} type="text" value="7" />
<input className="otp-box w-full aspect-square text-center font-code-display text-[22px] font-bold bg-container-dark-high text-on-surface rounded-lg focus:outline-none focus:bg-surface-container-highest transition-colors" maxLength={1} type="text" value="3" />
<input className="otp-box w-full aspect-square text-center font-code-display text-[22px] font-bold bg-container-dark-high text-on-surface rounded-lg focus:outline-none focus:bg-surface-container-highest transition-colors" maxLength={1} type="text" value="9" />
<input className="otp-box w-full aspect-square text-center font-code-display text-[22px] font-bold bg-container-dark-high text-on-surface rounded-lg focus:outline-none focus:bg-surface-container-highest transition-colors" maxLength={1} type="text" value="1" />
<input className="otp-box w-full aspect-square text-center font-code-display text-[22px] font-bold bg-container-dark-high text-on-surface rounded-lg focus:outline-none focus:bg-surface-container-highest transition-colors" maxLength={1} type="text" value="8" />
<input className="otp-box w-full aspect-square text-center font-code-display text-[22px] font-bold bg-container-dark-high text-tertiary rounded-lg focus:outline-none focus:bg-surface-container-highest transition-colors" maxLength={1} type="text" value="4" />
</div>
<div className="flex items-center gap-1.5 text-tertiary font-label-sm text-label-sm mt-0.5">
<Icon name="check_circle" className="text-[15px]" />
<span>Digest matched: SHA256(739184 + device_salt) == 0x9f4a... VALID</span>
</div>
</div>
<div className="p-3.5 rounded-xl bg-surface-container-low flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<input checked={true} className="w-5 h-5 rounded bg-container-dark-high text-primary-container accent-primary-container cursor-pointer" id="seal-check" type="checkbox" />
<label className="font-body-md text-body-md text-on-surface cursor-pointer select-none" htmlFor="seal-check">
<span className="font-bold text-on-surface">Physical package seal Check:</span> Customer inspected green ribbon seal intact before opening.
              </label>
</div>
<span className="font-code-display text-[11px] text-tertiary font-bold shrink-0 bg-tertiary/10 px-2 py-1 rounded">SEAL #4419</span>
</div>
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<label className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wider flex items-center gap-1.5">
<Icon name="draw" className="text-primary text-[18px]" />
                Offline Customer Touch Signature
              </label>
<button className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface uppercase tracking-wider" id="clear-sig">
                Clear Pad
              </button>
</div>
<div className="relative w-full h-36 bg-surface-container-low rounded-xl overflow-hidden cursor-crosshair">
<canvas className="w-full h-full block" id="signature-pad"></canvas>
<div className="absolute bottom-2 left-3 pointer-events-none text-on-surface-variant/40 font-code-display text-[11px] select-none">
                SIGN ABOVE LINE • ENCRYPTED TO LOCAL STORE
              </div>
<div className="absolute top-2 right-3 pointer-events-none flex items-center gap-1 text-[11px] font-label-sm text-tertiary">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                Canvas Ready
              </div>
</div>
</div>
<div className="p-3.5 rounded-xl bg-surface-container-low grid grid-cols-2 sm:grid-cols-3 gap-3">
<div>
<span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-wider block">GNSS Satellites</span>
<div className="flex items-center gap-1 text-on-surface font-code-display text-[13px] font-bold mt-0.5">
<Icon name="satellite_alt" className="text-[15px] text-tertiary" />
<span>11 Satellites Lock</span>
</div>
</div>
<div>
<span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-wider block">Hardware GPS Stamp</span>
<div className="font-code-display text-[13px] font-bold text-on-surface mt-0.5">
                0.3341° N, 32.5891° E
              </div>
</div>
<div className="col-span-2 sm:col-span-1">
<span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-wider block">Hardware Time (UTC+3)</span>
<div className="font-code-display text-[13px] font-bold text-on-surface mt-0.5">
                14:48:22 EAT
              </div>
</div>
</div>
<div className="flex flex-col gap-2 pt-2">
<button className="w-full h-14 rounded-2xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-lg text-label-lg shadow-[0_4px_18px_rgba(218,55,0,0.35)] flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer" id="confirm-handover-btn">
<Icon name="check_circle" className="text-[22px]" />
<span>Confirm Offline Handover &amp; Save to Sync Queue</span>
</button>
<p className="font-body-sm text-[11px] text-center text-on-surface-variant/80 px-2 leading-relaxed">
<Icon name="lock" className="text-[12px] inline align-middle text-emerald-escrow" />
              Handover proof will automatically upload to SwiftCart central Payment Holds as soon as 3G/4G connectivity is restored.
            </p>
</div>
</div>
</div>
</div>
</div>
<div className="fixed inset-x-0 bottom-24 flex justify-center pointer-events-none opacity-0 translate-y-4 transition-all duration-300 z-40 px-4" id="toast-modal">
<div className="max-w-md w-full bg-surface-container-highest text-on-surface p-4 rounded-xl shadow-2xl flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-tertiary-container flex items-center justify-center shrink-0">
<Icon name="inventory_2" className="text-on-tertiary-container text-[18px]" />
</div>
<div className="flex-1">
<h4 className="font-label-lg text-label-lg text-on-surface">Stored Locally in Queue</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Signature &amp; GPS securely logged to SQLite. Ready for background ledger dispatch.</p>
</div>
</div>
</div>
</div>
</main></div>
    </div>
  );
};

export default Tablet;
