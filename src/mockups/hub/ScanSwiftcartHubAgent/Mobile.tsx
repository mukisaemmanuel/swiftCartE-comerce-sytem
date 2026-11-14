// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/hub/scan_swiftcart_hub_agent/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface ScanSwiftcartHubAgentProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const ScanSwiftcartHubAgent: React.FC<ScanSwiftcartHubAgentProps> = (props) => {
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
      
      <header className="fixed top-0 inset-x-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.06)] pt-safe"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-sm min-w-0 flex-1"><img alt="SwiftCart" className="h-8 w-auto object-contain flex-shrink-0" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col min-w-0"><div className="flex items-center gap-1.5"><span className="font-label-md text-label-md text-on-surface font-bold truncate">William St Hub</span><span className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm flex-shrink-0"><span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>Online</span></div><span className="font-label-sm text-label-sm text-secondary truncate">Kampala Central • Scan</span></div></div><div className="flex items-center gap-space-xs flex-shrink-0"><button aria-label="Notifications" className="w-11 h-11 flex items-center justify-center relative rounded-full hover:bg-surface-container text-on-surface-variant"><Icon name="notifications" className="text-[22px]" /><span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary-container ring-2 ring-surface"></span></button><button aria-label="Toggle Theme" className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-surface-container text-on-surface-variant" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-[20px]" /></button><div className="flex items-center gap-1.5 pl-1"><div className="flex flex-col text-right hidden xs:flex"><span className="font-label-sm text-label-sm text-on-surface font-bold leading-tight">Kato I.</span><span className="font-label-sm text-label-sm text-secondary font-mono leading-tight">#HUB-402</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></div></header>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-28 bg-surface"><div className="flex flex-col w-full relative">

<div className="relative w-full overflow-hidden bg-inverse-surface rounded-b-2xl shadow-xl min-h-[520px]">

<div className="absolute inset-0 bg-cover bg-center opacity-40 scale-105 filter contrast-125" data-alt="First-person POV through a smartphone camera aiming at organized warehouse shelves stacked with brown corrugated cardboard parcels, barcoded delivery stickers, shipping tape, and ambient warm warehouse warehouse lighting, slightly defocused high-velocity logistics setting" style={{"backgroundImage":"url('/images/1eb5d0c72e7ad61d.webp')"}}>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-inverse-surface/90 via-transparent to-inverse-surface/95 pointer-events-none"></div>

<div className="relative z-10 px-margin pt-space-sm flex flex-col gap-space-sm">

<div className="flex items-center justify-between gap-space-xs">
<button className="flex items-center gap-space-xs px-3 py-1.5 rounded-full bg-surface-container-lowest/15 backdrop-blur-md text-surface active:bg-surface-container-lowest/25 transition-all" id="mode-btn">
<span className="w-2 h-2 rounded-full bg-tertiary-container animate-ping"></span>
<span className="font-label-md text-label-md font-bold tracking-tight text-surface">Auto-Detect Mode</span>
<Icon name="expand_more" className="text-[18px] text-surface-variant" />
</button>
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-container/20 backdrop-blur-md">
<Icon name="radar" className="text-primary-container text-[16px] animate-pulse" />
<span className="font-label-sm text-label-sm font-bold text-primary-fixed uppercase tracking-wider">HUD V2.4 Active</span>
</div>
</div>

<div className="flex items-center justify-end gap-space-sm">
<button aria-label="Toggle Flashlight" className="w-10 h-10 rounded-full bg-surface-container-lowest/15 backdrop-blur-md flex items-center justify-center text-surface active:scale-95 transition-all" id="torch-toggle">
<Icon name="flashlight_on" className="text-[20px]" />
</button>
<button aria-label="Toggle Haptic Sound" className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center active:scale-95 transition-all shadow-md" id="haptic-toggle">
<Icon name="volume_up" className="text-[20px]" />
</button>
<button aria-label="Switch Camera Lens" className="w-10 h-10 rounded-full bg-surface-container-lowest/15 backdrop-blur-md flex items-center justify-center text-surface active:scale-95 transition-all" id="lens-toggle">
<Icon name="photo_camera" className="text-[20px]" />
</button>
</div>
</div>

<div className="relative z-10 my-4 flex flex-col items-center justify-center px-6">
<div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">

<div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 rounded-tl-xl border-primary-container"></div>
<div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 rounded-tr-xl border-primary-container"></div>
<div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 rounded-bl-xl border-primary-container"></div>
<div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 rounded-br-xl border-primary-container"></div>

<div className="absolute inset-x-3 h-0.5 bg-gradient-to-r from-transparent via-primary-container to-transparent shadow-[0_0_12px_#ff5722] animate-[bounce_2s_infinite]"></div>

<div className="w-full h-full rounded-lg bg-primary-container/5 backdrop-blur-[1px] flex flex-col items-center justify-between p-4">

<div className="w-full flex justify-between items-center text-primary-fixed-dim/70 font-mono text-[10px]">
<span>1D: CODE-128</span>
<span>2D: MATRIX/QR</span>
</div>

<div className="relative flex items-center justify-center opacity-60">
<Icon name="filter_center_focus" className="text-primary-container text-[48px]" />
</div>

<div className="px-2.5 py-0.5 rounded-full bg-inverse-surface/80 text-primary-fixed text-[11px] font-mono tracking-tight flex items-center gap-1">
<Icon name="sync" className="text-[13px] text-tertiary-container" />
<span>Align parcel barcode</span>
</div>
</div>
</div>

<p className="font-label-sm text-label-sm text-surface-variant/80 mt-3 text-center">
        Hold steady 10–25 cm from packaging surface
      </p>
</div>

<div className="relative z-10 px-margin pb-space-lg">
<div className="p-1.5 rounded-xl bg-surface-container-lowest/15 backdrop-blur-md flex items-center gap-space-xs shadow-lg">
<Icon name="keyboard" className="text-surface-variant ml-2 text-[20px]" />
<input className="flex-1 bg-transparent text-surface placeholder:text-surface-variant/70 font-body-sm text-body-sm px-1 py-2 focus:outline-none" id="manual-awb-input" placeholder="Type 10-digit AWB or Order #..." type="text" />
<button className="px-3.5 py-2 rounded-lg bg-primary-container text-on-primary font-label-sm text-label-sm font-bold flex items-center gap-1 active:scale-95 transition-transform" id="manual-lookup-btn">
<span>Lookup</span>
<Icon name="arrow_forward" className="text-[16px]" />
</button>
</div>
</div>
</div>

<div className="px-margin -mt-4 relative z-20 flex flex-col gap-space-sm pb-6">

<div className="w-full rounded-2xl bg-surface-container-lowest shadow-xl p-space-md flex flex-col gap-space-sm transition-all duration-300">

<div className="flex items-start justify-between gap-space-xs">
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5 flex-wrap">
<span className="px-2 py-0.5 rounded-md bg-inverse-surface text-surface-bright font-mono font-bold text-[11px]">
              #SC-ORD-9281
            </span>
<span className="px-2 py-0.5 rounded-md bg-secondary-container text-on-secondary-fixed font-mono font-bold text-[11px]">
              AWB: SWIFT-UG-99412
            </span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-mono mt-0.5">Scanned just now • 0.18s lock</span>
</div>
<span className="px-2 py-1 rounded-full bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm font-bold flex items-center gap-1 flex-shrink-0">
<Icon name="check_circle" className="text-[14px]" />
          OTC Ready
        </span>
</div>

<div className="flex items-center gap-space-md p-space-sm rounded-xl bg-surface-container-low">
<div className="w-14 h-14 rounded-lg overflow-hidden bg-surface-variant flex-shrink-0 shadow-sm relative">
<img className="w-full h-full object-cover" data-alt="Modern premium matte black wireless over-ear noise-cancelling headphones sitting cleanly packaged inside an eco-friendly retail presentation carton with security seal ribbons" src="/images/59bfac3d3f7a69e1.webp" />
<span className="absolute bottom-0 right-0 w-4 h-4 rounded-tl-md bg-error flex items-center justify-center">
<Icon name="lock" className="text-white text-[10px]" />
</span>
</div>
<div className="flex flex-col min-w-0 flex-1">
<div className="flex items-center gap-1">
<span className="px-1.5 py-0.5 rounded bg-error/10 text-error font-label-sm text-[10px] font-bold">FRAGILE</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-[10px] font-bold">HIGH-VALUE</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface truncate font-bold mt-0.5 leading-tight">
            SoundCore Space One ANC
          </h3>
<p className="font-body-sm text-body-sm text-secondary truncate">
            Retail Package • Black Edition • 1 Unit
          </p>
</div>
</div>

<div className="grid grid-cols-2 gap-space-xs">
<div className="p-2.5 rounded-xl bg-surface-container-high/60 flex flex-col justify-between">
<span className="font-label-sm text-label-sm text-secondary flex items-center gap-1">
<Icon name="shelves" className="text-[14px]" />
            Warehouse Slot
          </span>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-headline-md text-headline-md font-bold text-on-surface">Bin B-04</span>
<span className="font-label-sm text-label-sm text-primary font-bold">Zone 2</span>
</div>
</div>
<div className="p-2.5 rounded-xl bg-surface-container-high/60 flex flex-col justify-between">
<span className="font-label-sm text-label-sm text-secondary flex items-center gap-1">
<Icon name="account_circle" className="text-[14px]" />
            Consignee
          </span>
<div className="flex flex-col mt-1">
<span className="font-label-md text-label-md font-bold text-on-surface truncate">Dennis Mukasa</span>
<span className="font-label-sm text-label-sm text-secondary font-mono">+256 701 ••• •••</span>
</div>
</div>
</div>

<div className="flex items-center gap-2 p-2 rounded-lg bg-surface-container-lowest shadow-sm">
<div className="w-6 h-6 rounded-full bg-tertiary-container/20 flex items-center justify-center flex-shrink-0">
<Icon name="verified" className="text-tertiary text-[14px]" />
</div>
<div className="flex-1 min-w-0">
<p className="font-label-sm text-label-sm text-on-surface font-semibold truncate">
            Level-2 Hologram Foil Tamper Seal Intact
          </p>
<p className="font-label-sm text-[10px] text-tertiary font-mono">Digital Signature ID: #HLG-9941-KLA</p>
</div>
<Icon name="verified_user" className="text-tertiary text-[18px]" />
</div>

<div className="flex flex-col gap-2 pt-1">
<button className="w-full h-12 rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary-container/25 active:scale-[0.98] transition-transform" id="handover-btn">
<span>Proceed to Customer Handover</span>
<Icon name="arrow_forward" className="text-[20px]" />
</button>
<div className="grid grid-cols-2 gap-space-xs">
<button className="h-10 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 active:bg-surface-variant transition-colors">
<Icon name="move_up" className="text-[18px]" />
<span>Relocate Shelf</span>
</button>
<button className="h-10 rounded-xl bg-surface-container text-error font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 active:bg-error-container/40 transition-colors">
<Icon name="flag" className="text-[18px]" />
<span>Flag Issue</span>
</button>
</div>
</div>
</div>

<div className="w-full py-2 px-3 rounded-xl bg-surface-container-low flex items-center justify-between text-secondary">
<div className="flex items-center gap-2">
<Icon name="barcode_reader" className="text-[18px] text-primary" />
<span className="font-label-sm text-label-sm font-semibold text-on-surface">Today's Shift Intake: 142 Parcels</span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-mono">99.4% Accuracy</span>
</div>
</div>
</div>
</main>
<nav className="fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface/95 backdrop-blur-xl shadow-[0_-4px_16px_rgba(0,0,0,0.06)]" data-active-classes="text-primary-container font-bold"><div className="flex justify-between items-center h-20 px-space-xs relative"><a className="flex-1 flex flex-col items-center justify-center h-full min-w-[48px] min-h-[48px] text-secondary hover:text-on-surface transition-colors" data-path="overview" href="#"><Icon name="dashboard" className="text-[24px]" /><span className="font-label-sm text-label-sm tracking-tight">Overview</span></a><a className="flex-1 flex flex-col items-center justify-center h-full min-w-[48px] min-h-[48px] text-secondary hover:text-on-surface transition-colors" data-path="intake" href="#"><Icon name="move_to_inbox" className="text-[24px]" /><span className="font-label-sm text-label-sm tracking-tight">Intake</span></a><div className="relative flex-1 flex flex-col items-center justify-center"><a aria-current="page" className="absolute -top-6 w-14 h-14 rounded-full bg-primary-container flex items-center justify-center shadow-lg shadow-primary-container/40 ring-4 ring-surface active:scale-95 transition-transform text-primary-container font-bold" data-path="scan" href="#"><Icon name="qr_code_scanner" className="text-[28px]" /></a><span className="font-label-sm text-label-sm text-secondary pt-8 tracking-tight">Scan</span></div><a className="flex-1 flex flex-col items-center justify-center h-full min-w-[48px] min-h-[48px] text-secondary hover:text-on-surface transition-colors" data-path="pickup" href="#"><Icon name="front_hand" className="text-[24px]" /><span className="font-label-sm text-label-sm tracking-tight">Pickup</span></a><a className="flex-1 flex flex-col items-center justify-center h-full min-w-[48px] min-h-[48px] text-secondary hover:text-on-surface transition-colors" data-path="more" href="#"><Icon name="widgets" className="text-[24px]" /><span className="font-label-sm text-label-sm tracking-tight">More</span></a></div></nav>
    </div>
  );
};

export default ScanSwiftcartHubAgent;
