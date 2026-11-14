// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/hub/hub_intake_sorting_station_swiftcart_work_hub/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface HubIntakeSortingStationSwiftcartWorkHubProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubIntakeSortingStationSwiftcartWorkHub: React.FC<HubIntakeSortingStationSwiftcartWorkHubProps> = (props) => {
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
      
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 px-gutter flex items-center justify-between gap-space-xs"><div className="flex items-center gap-space-sm min-w-0 flex-1"><img alt="SwiftCart" className="h-8 w-auto object-contain flex-shrink-0" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col min-w-0"><div className="flex items-center gap-space-xs"><span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">SwiftCart Hub</span><span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-tertiary-container/20 text-tertiary font-label-sm text-[9px] font-bold"><span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse mr-1"></span>4G KLA</span></div><h1 className="font-headline-sm text-headline-sm text-on-surface truncate leading-tight">Hub Intake Sorting</h1></div></div><div className="flex items-center gap-space-xs flex-shrink-0"><button aria-label="Toggle Theme" className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface-variant hover:text-on-surface transition-colors" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-[22px]" /></button><button aria-label="Notifications" className="relative w-11 h-11 flex items-center justify-center rounded-full text-on-surface-variant hover:text-on-surface transition-colors"><Icon name="notifications" className="text-[22px]" /><span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary-container ring-2 ring-surface"></span></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-space-xs"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-20 bg-background"><div className="flex flex-col w-full">

<div className="px-gutter pt-space-xs pb-space-sm">
<div className="bg-surface-container rounded-xl p-space-sm shadow-sm flex items-center justify-between">
<div className="flex items-center gap-space-xs min-w-0">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary animate-ping flex-shrink-0"></span>
<div className="min-w-0">
<p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold truncate">William St. Central • Station #4</p>
<p className="font-headline-sm text-headline-sm text-on-surface font-extrabold truncate">Line A Intake Dock</p>
</div>
</div>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-bold flex-shrink-0">
<Icon name="print" className="text-[16px]" />
        BT Print On
      </span>
</div>

<div className="mt-space-xs bg-tertiary-container/15 rounded-lg px-space-sm py-1.5 flex items-center justify-between">
<div className="flex items-center gap-space-xs min-w-0">
<Icon name="sync" className="text-tertiary text-[18px] animate-spin" />
<p className="font-label-sm text-label-sm text-on-tertiary-container font-semibold truncate">Central Relay Sync Active • 14 cached offline</p>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-bold flex-shrink-0">99.8% OK</span>
</div>
</div>

<div className="px-gutter pb-space-md grid grid-cols-3 gap-space-xs">
<div className="bg-surface-container rounded-xl p-space-sm flex flex-col justify-between shadow-sm">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm font-bold uppercase">Scanned</span>
<Icon name="check_circle" className="text-[16px] text-tertiary" />
</div>
<p className="font-price-display text-price-display text-on-surface font-extrabold mt-1">184</p>
<span className="font-body-sm text-body-sm text-tertiary font-semibold">+18/hr pace</span>
</div>
<div className="bg-surface-container rounded-xl p-space-sm flex flex-col justify-between shadow-sm">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm font-bold uppercase">Pending</span>
<Icon name="pending_actions" className="text-[16px] text-primary" />
</div>
<p className="font-price-display text-price-display text-on-surface font-extrabold mt-1">14</p>
<span className="font-body-sm text-body-sm text-primary font-semibold">Bin sorting</span>
</div>
<div className="bg-surface-container rounded-xl p-space-sm flex flex-col justify-between shadow-sm">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm font-bold uppercase">Flagged</span>
<Icon name="gpp_maybe" className="text-[16px] text-error" />
</div>
<p className="font-price-display text-price-display text-error font-extrabold mt-1">3</p>
<span className="font-body-sm text-body-sm text-error font-semibold">Seal escrows</span>
</div>
</div>

<div className="px-gutter pb-space-md">
<div className="relative overflow-hidden bg-inverse-surface rounded-xl p-space-sm text-inverse-on-surface shadow-md" id="scannerSection">
<div className="flex items-center justify-between mb-space-xs">
<div className="flex items-center gap-space-xs">
<Icon name="qr_code_scanner" className="text-primary-container text-[20px]" />
<span className="font-label-md text-label-md font-bold tracking-wide">LASER OPTIC SCANNER</span>
</div>
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-inverse-surface text-inverse-on-surface text-[10px] font-bold">READY (AUTO-LOCK)</span>
</div>

<div className="relative w-full h-32 bg-inverse-surface/80 rounded-lg overflow-hidden flex flex-col items-center justify-center cursor-pointer transition-transform active:scale-[0.99]" id="viewfinderTrigger">
<div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/20 pointer-events-none"></div>

<div className="w-48 h-20 relative flex items-center justify-center">
<div className="absolute inset-0 border-2 border-primary-container/80 rounded-md"></div>
<div className="w-full h-0.5 bg-primary-container shadow-[0_0_8px_#ff5722] animate-pulse"></div>
<span className="font-label-sm text-label-sm text-inverse-on-surface bg-inverse-surface/90 px-2 py-0.5 rounded absolute -bottom-3">PARCEL BARCODE / QR</span>
</div>
<p className="font-label-md text-label-md text-inverse-on-surface font-semibold mt-4 flex items-center gap-1">
<Icon name="touch_app" className="text-[16px]" /> Tap to toggle high-res optic beam
        </p>
</div>

<div className="mt-space-xs flex items-center justify-between text-[11px] font-medium text-surface-variant">
<span>Recent: SC-9940-KLA (Stored)</span>
<button className="text-primary-container font-bold flex items-center gap-0.5" id="manualInputBtn">
<Icon name="keyboard" className="text-[14px]" /> Manual Waybill
        </button>
</div>
</div>
</div>

<div className="px-gutter pb-space-md">
<div className="bg-surface-container rounded-xl p-space-md shadow-md">

<div className="flex items-start justify-between gap-space-xs">
<div>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm font-bold uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-surface-container-lowest animate-ping"></span> Active Intake Scan
          </span>
<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-extrabold mt-1">#SC-9941-KLA</h2>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold block">INTAKE TIME</span>
<span className="font-label-md text-label-md text-on-surface font-extrabold">14:26:08 EAT</span>
</div>
</div>

<div className="mt-space-sm grid grid-cols-2 gap-space-xs">
<div className="bg-surface-container-low rounded-lg p-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold block">Origin Merchant</span>
<p className="font-label-md text-label-md text-on-surface font-bold truncate mt-0.5">Kikuubo Sound Hub</p>
<span className="inline-flex items-center gap-1 mt-1 text-[11px] font-bold text-tertiary">
<Icon name="verified" className="text-[14px]" /> Verified Tier-2
          </span>
</div>
<div className="bg-surface-container-low rounded-lg p-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold block">Assigned Bin Zone</span>
<p className="font-label-md text-label-md text-primary font-extrabold truncate mt-0.5">Nakawa • Kyambogo</p>
<span className="inline-flex items-center px-1.5 py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm font-black mt-1">
            BIN #NW-04
          </span>
</div>
</div>

<div className="mt-space-xs bg-surface-container-low rounded-lg p-space-xs flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="scale" className="text-secondary text-[22px]" />
<div>
<p className="font-label-md text-label-md text-on-surface font-bold">0.85 kg • Standard Polybag</p>
<p className="font-body-sm text-body-sm text-on-surface-variant font-medium">Volumetric: 22 x 15 x 6 cm</p>
</div>
</div>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-tertiary/10 text-tertiary font-label-sm text-label-sm font-bold">
<Icon name="balance" className="text-[14px]" /> Calibrated
        </span>
</div>

<div className="mt-space-xs bg-surface-container-low rounded-lg p-space-xs flex items-center justify-between gap-space-xs">
<div className="flex items-center gap-space-xs min-w-0">
<img className="w-12 h-12 rounded-lg object-cover flex-shrink-0" data-alt="Close-up macro photograph of a heavy-duty security tamper-evident polymer seal bearing barcode UG-SEAL-8891 securely affixed onto a bright orange swiftcart shipping satchel in an industrial hub with crisp warehouse lighting" src="/images/250fc77d9ef2cba8.webp" />
<div className="min-w-0">
<span className="font-label-sm text-label-sm text-tertiary font-bold flex items-center gap-1">
<Icon name="lock" className="text-[16px]" /> Seal Intact
            </span>
<p className="font-body-sm text-body-sm text-on-surface font-semibold truncate">UG-SEAL-8891</p>
</div>
</div>
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-bold flex-shrink-0 hover:bg-surface-dim" id="inspectSealBtn">
          Audit Photo
        </button>
</div>

<div className="mt-space-md flex flex-col gap-space-xs">

<button className="w-full h-12 bg-primary-container text-on-primary rounded-xl font-label-lg text-label-lg font-bold flex items-center justify-center gap-space-xs shadow-md active:scale-[0.98] transition-transform" id="routeBtn">
<Icon name="move_to_inbox" className="text-[20px]" />
          Route to Nakawa Stage (Bin NW-04)
        </button>

<button className="w-full h-11 bg-surface-container-highest text-on-surface rounded-xl font-label-md text-label-md font-bold flex items-center justify-between px-space-sm active:scale-[0.99] transition-transform" id="assignRiderBtn">
<div className="flex items-center gap-space-xs">
<Icon name="two_wheeler" className="text-secondary text-[20px]" />
<span className="truncate">Assign Boda: Brian Kizito (UEF 842X)</span>
</div>
<Icon name="chevron_right" className="text-secondary text-[18px]" />
</button>

<div className="grid grid-cols-2 gap-space-xs">
<button className="h-10 bg-error-container text-on-error-container rounded-xl font-label-sm text-label-sm font-bold flex items-center justify-center gap-1 active:scale-[0.98]" id="flagTamperBtn">
<Icon name="flag" className="text-[18px]" />
            Flag Seal / Inspect
          </button>
<button className="h-10 bg-surface-container-highest text-on-surface rounded-xl font-label-sm text-label-sm font-bold flex items-center justify-center gap-1 active:scale-[0.98]" id="printTagBtn">
<Icon name="receipt_long" className="text-[18px]" />
            Print Bag Sticker
          </button>
</div>
</div>
</div>
</div>

<div className="px-gutter pb-space-sm flex items-center justify-between">
<div className="flex items-center gap-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-extrabold">Dock Sorting Queue</h3>
<span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-extrabold">18</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Swipe to re-stage</span>
</div>

<div className="px-gutter pb-space-sm flex gap-space-xs overflow-x-auto no-scrollbar">
<button className="filter-chip px-3 py-1.5 rounded-full bg-on-surface text-surface font-label-sm text-label-sm font-bold whitespace-nowrap active:scale-95" data-filter="all">All Parcels (18)</button>
<button className="filter-chip px-3 py-1.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm font-bold whitespace-nowrap active:scale-95" data-filter="nakawa">Nakawa (5)</button>
<button className="filter-chip px-3 py-1.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm font-bold whitespace-nowrap active:scale-95" data-filter="entebbe">Entebbe Rd (4)</button>
<button className="filter-chip px-3 py-1.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm font-bold whitespace-nowrap active:scale-95" data-filter="local">Kikuubo Hub (6)</button>
<button className="filter-chip px-3 py-1.5 rounded-full bg-error-container/60 text-on-error-container font-label-sm text-label-sm font-bold whitespace-nowrap active:scale-95" data-filter="flagged">Flagged (3)</button>
</div>

<div className="px-gutter pb-space-lg flex flex-col gap-space-xs">

<div className="manifest-card bg-surface-container rounded-xl p-space-sm shadow-sm flex items-center justify-between gap-space-xs active:bg-surface-container-high transition-colors">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center flex-shrink-0">
<Icon name="inventory_2" className="text-primary text-[22px]" />
</div>
<div className="min-w-0">
<div className="flex items-center gap-1.5">
<p className="font-label-md text-label-md text-on-surface font-extrabold truncate">#SC-9942-KLA</p>
<span className="px-1.5 py-0.2 rounded bg-tertiary/10 text-tertiary font-label-sm text-[10px] font-bold">BIN NW-02</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Ssenyonga Electronics • Kyambogo Mall</p>
<span className="font-label-sm text-[10px] text-on-surface-variant font-medium">14:24 EAT • 1.2 kg Box</span>
</div>
</div>
<div className="flex flex-col items-end gap-1 flex-shrink-0">
<button className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface active:bg-primary-container active:text-on-primary">
<Icon name="alt_route" className="text-[18px]" />
</button>
<span className="font-label-sm text-[9px] text-tertiary font-bold uppercase">Ready</span>
</div>
</div>

<div className="manifest-card bg-surface-container rounded-xl p-space-sm shadow-sm flex items-center justify-between gap-space-xs active:bg-surface-container-high transition-colors">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center flex-shrink-0">
<Icon name="devices_other" className="text-tertiary text-[22px]" />
</div>
<div className="min-w-0">
<div className="flex items-center gap-1.5">
<p className="font-label-md text-label-md text-on-surface font-extrabold truncate">#SC-9938-KLA</p>
<span className="px-1.5 py-0.2 rounded bg-secondary-container text-on-secondary-container font-label-sm text-[10px] font-bold">BIN EB-01</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Nalubega Beauty Wholesalers • Entebbe</p>
<span className="font-label-sm text-[10px] text-on-surface-variant font-medium">14:18 EAT • 0.4 kg Pouch</span>
</div>
</div>
<div className="flex flex-col items-end gap-1 flex-shrink-0">
<button className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface active:bg-primary-container active:text-on-primary">
<Icon name="alt_route" className="text-[18px]" />
</button>
<span className="font-label-sm text-[9px] text-on-surface-variant font-bold uppercase">Queued</span>
</div>
</div>

<div className="manifest-card bg-error-container/30 rounded-xl p-space-sm shadow-sm flex items-center justify-between gap-space-xs">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-lg bg-error-container flex items-center justify-center flex-shrink-0">
<Icon name="warning" className="text-error text-[22px]" />
</div>
<div className="min-w-0">
<div className="flex items-center gap-1.5">
<p className="font-label-md text-label-md text-error font-extrabold truncate">#SC-9929-KLA</p>
<span className="px-1.5 py-0.2 rounded bg-error text-on-error font-label-sm text-[10px] font-bold">HOLD</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">William St. Depot • Seal Torn</p>
<span className="font-label-sm text-[10px] text-error font-bold">Awaiting Merchant Rep</span>
</div>
</div>
<div className="flex flex-col items-end gap-1 flex-shrink-0">
<button className="w-8 h-8 rounded-full bg-error text-on-error flex items-center justify-center">
<Icon name="fact_check" className="text-[18px]" />
</button>
<span className="font-label-sm text-[9px] text-error font-bold uppercase">Audit</span>
</div>
</div>
</div>

<div className="px-gutter pb-space-xl">
<div className="bg-surface-container-low rounded-xl p-space-md shadow-sm">
<div className="flex items-center gap-space-xs text-primary mb-1.5">
<Icon name="shield" className="text-[20px]" />
<h4 className="font-label-md text-label-md font-bold uppercase tracking-wider">Zero-Trust Buyer Protection</h4>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
        Station operators are strictly restricted from viewing buyer phone numbers or delivery PINs. Secure verification OTPs are created only during physical recipient handover by Boda riders.
      </p>
<div className="mt-space-sm flex items-center justify-between text-[11px] font-semibold text-secondary">
<span>Station UUID: 884-KLA-ST04</span>
<span className="flex items-center gap-1 text-tertiary">
<span className="w-2 h-2 rounded-full bg-tertiary"></span> Encrypted Feed
        </span>
</div>
</div>
</div>

<div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 pointer-events-none transition-all duration-300 opacity-0 transform translate-y-4" id="toastNotification">
<div className="px-4 py-2 bg-on-surface text-surface rounded-full shadow-xl flex items-center gap-2 font-label-sm text-label-sm font-bold">
<Icon name="verified" className="text-[18px] text-tertiary" />
<span id="toastMessage">Package binned to Nakawa NW-04</span>
</div>
</div>
</div>
</main>
<nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/85 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.06)]" data-active-classes="text-primary font-bold"><div className="flex justify-around items-center h-16 px-space-xs"><a className="flex flex-col items-center justify-center min-w-[48px] min-h-[48px] px-space-xs text-on-surface-variant transition-colors" data-path="boda-rider-delivery" href="#"><Icon name="two_wheeler" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight mt-0.5">Rider</span></a><a aria-current="page" className="flex flex-col items-center justify-center min-w-[48px] min-h-[48px] px-space-xs transition-colors text-primary font-bold" data-path="hub-intake-sorting" href="#"><Icon name="warehouse" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight mt-0.5">Hub Intake</span></a><a className="flex flex-col items-center justify-center min-w-[48px] min-h-[48px] px-space-xs text-on-surface-variant transition-colors" data-path="seller-catalog" href="#"><Icon name="storefront" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight mt-0.5">Seller Store</span></a><a className="flex flex-col items-center justify-center min-w-[48px] min-h-[48px] px-space-xs text-on-surface-variant transition-colors" data-path="work-telematics" href="#"><Icon name="monitoring" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight mt-0.5">Telematics</span></a><a className="flex flex-col items-center justify-center min-w-[48px] min-h-[48px] px-space-xs text-on-surface-variant transition-colors" data-path="operations-profile" href="#"><Icon name="badge" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight mt-0.5">Operator</span></a></div></nav>
    </div>
  );
};

export default HubIntakeSortingStationSwiftcartWorkHub;
