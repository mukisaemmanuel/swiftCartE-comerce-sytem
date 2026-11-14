// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/hub/courier_bag_qr_scan_confirmation_modal_swiftcart_work_hub/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface CourierBagQrScanConfirmationModalSwiftcartWorkHubProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const CourierBagQrScanConfirmationModalSwiftcartWorkHub: React.FC<CourierBagQrScanConfirmationModalSwiftcartWorkHubProps> = (props) => {
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
      
      <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-space-sm flex items-center justify-between gap-space-xs"><button type="button" className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 mr-2" aria-label="Toggle Theme" title="Toggle Theme" onClick={() => toggleTheme()}>{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}</button><div className="flex items-center min-w-0 gap-space-xs"><button aria-label="Go back" className="w-11 h-11 flex items-center justify-center rounded-lg text-on-surface hover:bg-surface-container active:bg-surface-container-high transition-colors" type="button"><Icon name="arrow_back" className="text-[24px]" /></button><img alt="SwiftCart" className="h-8 w-auto object-contain flex-shrink-0" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col min-w-0"><span className="font-label-sm text-label-sm font-bold text-secondary uppercase tracking-wider truncate">William St Central</span><h1 className="font-label-lg text-label-lg font-bold text-on-surface truncate">High Velocity Scan</h1></div></div><div className="flex items-center gap-space-xs flex-shrink-0"><button aria-label="Scanner Light" className="w-11 h-11 flex items-center justify-center rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container" type="button"><Icon name="flash_on" className="text-[20px]" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-sm"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex-1 flex flex-col w-full bg-surface pt-16"><div className="flex flex-col w-full relative">

<div className="fixed inset-0 bg-inverse-surface/60 backdrop-blur-sm z-30 pointer-events-none transition-opacity duration-300"></div>

<div className="relative z-40 flex flex-col w-full max-w-xl mx-auto pb-safe">

<div className="bg-surface-container-lowest rounded-t-3xl shadow-2xl flex flex-col overflow-hidden">

<div className="pt-3 pb-3 px-space-lg flex flex-col items-center bg-surface-container-low">
<div className="w-12 h-1 rounded-full bg-outline-variant mb-3"></div>
<div className="w-full flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="lock_person" className="text-primary text-[24px]" />
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface">Courier Bag QR Scan &amp; Tamper Lock</span>
<span className="font-body-sm text-body-sm text-secondary">Dispatch Handover Verification Protocol</span>
</div>
</div>
<button aria-label="Dismiss Modal" className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-variant transition-colors" type="button">
<Icon name="close" className="text-[20px]" />
</button>
</div>
</div>

<div className="p-space-lg flex flex-col gap-space-md">

<div className="bg-surface-container-low rounded-xl p-space-md flex flex-col gap-space-xs shadow-sm">
<div className="flex items-center justify-between gap-space-xs">
<div className="flex items-center gap-space-xs">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse"></span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Staged at Bay 4 • Staging Lane B</span>
</div>
<span className="font-label-sm text-label-sm font-bold px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed uppercase">
              #BAG-UG-2025-044
            </span>
</div>

<div className="flex items-center justify-between pt-1">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-11 h-11 rounded-full bg-surface-variant flex items-center justify-center text-primary font-headline-sm font-bold flex-shrink-0">
                KB
              </div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Kizito Brian</span>
<Icon name="verified" className="text-tertiary text-[18px]" />
</div>
<span className="font-body-sm text-body-sm text-secondary truncate">Bajaj Boxer • <span className="font-semibold text-on-surface">UEF 842X</span></span>
</div>
</div>
<div className="flex flex-col items-end flex-shrink-0 pl-2">
<span className="font-label-sm text-label-sm text-secondary font-medium">Assigned Route</span>
<span className="font-label-md text-label-md font-bold text-primary px-2 py-0.5 rounded-lg bg-surface-container-high">
                Route 08 (Central East)
              </span>
</div>
</div>
</div>

<div className="flex items-center justify-between p-space-sm px-space-md rounded-xl bg-surface-container-high/60">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-8 h-8 rounded-lg bg-tertiary flex items-center justify-center text-on-tertiary flex-shrink-0">
<Icon name="qr_code_2" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1">
<span className="font-label-md text-label-md font-bold text-on-surface">1. Sack Master QR Code</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold bg-tertiary-fixed px-1.5 rounded">Scanned &amp; Locked</span>
</div>
<span className="font-body-sm text-body-sm text-secondary font-mono tracking-tight truncate">SWIFT-BAG-KLA-RT08-044</span>
</div>
</div>
<Icon name="check_circle" className="text-tertiary text-[22px]" />
</div>

<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md font-bold text-on-surface">2. Tamper Foil Bolt Seal Barcode</span>
<span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
</div>
<span className="font-label-sm text-label-sm font-semibold text-primary">Awaiting Optical Lock</span>
</div>

<div className="relative w-full h-44 rounded-2xl bg-on-background overflow-hidden flex flex-col items-center justify-center shadow-inner">

<div className="absolute inset-0 bg-cover bg-center opacity-40" data-alt="Close-up industrial scanner camera feed focusing on a metallic red security bolt seal with printed barcode and serial code, high tech warehouse sorting background, soft ambient factory lighting." style={{"backgroundImage":"url('/images/1158a8a9d05b91c5.webp')"}}></div>

<div className="absolute inset-4 rounded-xl pointer-events-none flex flex-col justify-between p-2">
<div className="flex justify-between w-full">
<div className="w-6 h-6 border-l-2 border-t-2 border-primary-container"></div>
<div className="w-6 h-6 border-r-2 border-t-2 border-primary-container"></div>
</div>
<div className="flex justify-between w-full">
<div className="w-6 h-6 border-l-2 border-b-2 border-primary-container"></div>
<div className="w-6 h-6 border-r-2 border-b-2 border-primary-container"></div>
</div>
</div>

<div className="absolute w-5/6 h-0.5 bg-gradient-to-r from-transparent via-primary-container to-transparent shadow-[0_0_12px_#ff5722] animate-pulse"></div>

<div className="relative z-10 px-4 py-2.5 rounded-lg bg-inverse-surface/85 backdrop-blur-md flex flex-col items-center gap-1 shadow-lg">
<div className="flex items-center gap-1">
<Icon name="barcode_scanner" className="text-primary-container text-[18px]" />
<span className="font-label-sm text-label-sm font-bold text-inverse-on-surface uppercase tracking-wider">Detected Target</span>
</div>
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm font-mono font-extrabold text-surface-bright tracking-wider">#SEAL-UG-994182</span>
<span className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed animate-pulse"></span>
</div>
</div>
<span className="absolute bottom-2 text-center font-label-sm text-label-sm text-surface-variant/90 tracking-tight z-10">
              Center barcode in frame • 1D Laser auto-locks on focus
            </span>
</div>

<div className="mt-1 flex items-center gap-space-xs">
<div className="flex-1 flex items-center bg-surface-container rounded-lg px-3 py-2 text-on-surface focus-within:bg-surface-container-highest transition-colors">
<Icon name="dialpad" className="text-outline text-[18px] mr-2" />
<input className="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-secondary focus:outline-none" placeholder="Enter 10-digit Seal Serial #" type="text" value="SEAL-UG-994182" />
</div>
<button className="px-3.5 py-2 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md font-bold hover:bg-surface-variant transition-colors flex items-center gap-1" type="button">
<Icon name="sync" className="text-[16px]" />
              Sync
            </button>
</div>
</div>

<div className="bg-surface-container-low rounded-2xl p-space-md flex flex-col gap-space-sm shadow-sm">
<div className="flex items-center justify-between pb-1">
<span className="font-label-md text-label-md font-bold text-on-surface flex items-center gap-1.5">
<Icon name="inventory_2" className="text-secondary text-[18px]" />
              Bag Contents Manifest
            </span>
<span className="font-label-sm text-label-sm font-bold text-tertiary bg-tertiary-fixed/60 px-2 py-0.5 rounded-md">
              18/20 Slots (90% Packed)
            </span>
</div>
<div className="grid grid-cols-2 gap-space-xs">

<div className="bg-surface-container-lowest p-space-sm rounded-xl flex flex-col">
<span className="font-label-sm text-label-sm text-secondary">Total Escrow Value</span>
<span className="font-price-display text-price-display font-black text-on-surface tracking-tight mt-0.5">UGX 3.42M</span>
<span className="font-body-sm text-body-sm text-tertiary font-semibold flex items-center gap-0.5 mt-0.5">
<Icon name="shield" className="text-[14px]" /> Insured Transit
              </span>
</div>

<div className="bg-surface-container-lowest p-space-sm rounded-xl flex flex-col justify-between">
<div>
<span className="font-label-sm text-label-sm text-secondary">High-Value Items</span>
<span className="font-label-lg text-label-lg font-bold text-primary block mt-0.5">3 Flagged Parcels</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant truncate">Samsung A54, Anker, SoundCore</span>
</div>
</div>

<div className="flex flex-wrap gap-1.5 pt-1">
<span className="px-2 py-1 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1">
<Icon name="headphones" className="text-[14px] text-primary" />
              SoundCore Space One
            </span>
<span className="px-2 py-1 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1">
<Icon name="smartphone" className="text-[14px] text-primary" />
              Galaxy A54 5G
            </span>
<span className="px-2 py-1 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1">
<Icon name="bolt" className="text-[14px] text-primary" />
              Anker 65W GaN
            </span>
<span className="px-2 py-1 rounded-md bg-surface-container-high text-secondary font-label-sm text-label-sm font-semibold">
              +15 General Cargo
            </span>
</div>
</div>

<div className="p-space-sm rounded-xl bg-error-container/40 flex items-start gap-space-xs">
<Icon name="gpp_maybe" className="text-error text-[20px] flex-shrink-0 mt-0.5" />
<p className="font-body-sm text-body-sm text-on-error-container leading-snug">
<strong className="font-bold">Tamper Warning:</strong> Once seal barcode is bound, breaking the physical foil seal before customer geofence unlocks an automated fraud freeze and dispatches rider telemetry alerts.
          </p>
</div>

<div className="flex flex-col gap-space-xs pt-1">

<button className="w-full h-14 rounded-xl bg-primary-container hover:bg-primary active:scale-[0.98] transition-all text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary-container/25" id="bind-seal-btn" type="button">
<Icon name="lock" className="text-[22px]" />
<span>Bind Tamper Seal &amp; Release for Courier Handover</span>
</button>

<button className="w-full h-11 rounded-xl bg-transparent hover:bg-surface-container text-secondary font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 transition-colors" type="button">
<Icon name="undo" className="text-[18px]" />
            Cancel Scan &amp; Unpack Bag
          </button>
</div>
</div>
</div>
</div>


</div></main>
    </div>
  );
};

export default CourierBagQrScanConfirmationModalSwiftcartWorkHub;
