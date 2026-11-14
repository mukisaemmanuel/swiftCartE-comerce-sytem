// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/hub/intake_swiftcart_hub_agent/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface IntakeSwiftcartHubAgentProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const IntakeSwiftcartHubAgent: React.FC<IntakeSwiftcartHubAgentProps> = (props) => {
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
      
      <header className="fixed top-0 inset-x-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.06)] pt-safe"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-sm min-w-0 flex-1"><img alt="SwiftCart" className="h-8 w-auto object-contain flex-shrink-0" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col min-w-0"><div className="flex items-center gap-1.5"><span className="font-label-md text-label-md text-on-surface font-bold truncate">William St Hub</span><span className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm flex-shrink-0"><span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>Online</span></div><span className="font-label-sm text-label-sm text-secondary truncate">Kampala Central • Intake</span></div></div><div className="flex items-center gap-space-xs flex-shrink-0"><button aria-label="Notifications" className="w-11 h-11 flex items-center justify-center relative rounded-full hover:bg-surface-container text-on-surface-variant"><Icon name="notifications" className="text-[22px]" /><span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary-container ring-2 ring-surface"></span></button><button aria-label="Toggle Theme" className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-surface-container text-on-surface-variant" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-[20px]" /></button><div className="flex items-center gap-1.5 pl-1"><div className="flex flex-col text-right hidden xs:flex"><span className="font-label-sm text-label-sm text-on-surface font-bold leading-tight">Kato I.</span><span className="font-label-sm text-label-sm text-secondary font-mono leading-tight">#HUB-402</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></div></header>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-28 bg-surface"><div className="flex flex-col w-full space-y-space-md px-margin pb-space-xl">

<section className="w-full bg-surface-container-low rounded-xl p-space-md shadow-sm">
<div className="flex items-center justify-between gap-space-xs mb-space-xs">
<div className="flex items-center gap-space-xs min-w-0">
<span className="flex h-2.5 w-2.5 rounded-full bg-tertiary-container animate-ping"></span>
<span className="font-label-md text-label-md text-on-surface font-bold truncate">Active Inbound Stream • Dock Gate 2</span>
</div>
<button aria-label="Toggle haptic feedback" className="flex items-center gap-1 px-2 py-1 rounded-full bg-surface-container-highest text-secondary text-label-sm font-label-sm transition-all active:scale-95" id="hapticToggleBtn">
<Icon name="volume_up" className="text-[14px] text-tertiary" />
<span className="font-bold text-on-surface" id="hapticStatusText">Beep ON</span>
</button>
</div>

<div className="flex items-baseline justify-between text-secondary mb-1">
<div className="flex items-baseline gap-1.5">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold font-mono">68</span>
<span className="font-body-sm text-body-sm text-secondary">/ 184 Scanned &amp; Shelved</span>
</div>
<span className="font-label-md text-label-md font-bold text-primary-container">37% Shift Complete</span>
</div>
<div className="w-full h-2.5 bg-surface-container-highest rounded-full overflow-hidden p-0.5">
<div className="h-full bg-gradient-to-r from-primary to-primary-container rounded-full transition-all duration-500" style={{"width":"37%"}}></div>
</div>
</section>

<section className="w-full bg-surface-container-lowest rounded-xl p-space-sm shadow-md">
<form className="flex items-center gap-space-xs" id="intakeQuickForm" onSubmit={(e) => e.preventDefault()}>
<div className="relative flex-1 flex items-center min-w-0">
<Icon name="barcode_scanner" className="absolute left-3 text-secondary text-[20px]" />
<input className="w-full pl-10 pr-3 py-2.5 bg-surface-container-low rounded-lg font-body-md text-body-md text-on-surface placeholder:text-secondary placeholder:text-label-md focus:outline-none focus:bg-surface-container transition-colors" id="awbInput" placeholder="Scan AWB / Order # (e.g. SC-ORD-9421)" type="text" value="SC-ORD-9488" />
</div>
<button className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-lg bg-surface-container text-on-surface active:scale-95 transition-transform" title="Open Camera Scanner" type="button">
<Icon name="photo_camera" className="text-[22px]" />
</button>
<button className="px-space-md h-11 flex-shrink-0 rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-md shadow-primary-container/20 active:scale-95 transition-transform flex items-center gap-1" type="submit">
<span>Receive</span>
</button>
</form>
</section>

<div className="hidden w-full bg-tertiary-container/15 rounded-xl p-space-md shadow-sm transition-all animate-bounce" id="receiptToast">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center flex-shrink-0">
<Icon name="check_circle" className="text-[18px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-tertiary font-bold truncate">Parcel #SC-ORD-9488 Staged at BIN B-08</span>
<span className="font-body-sm text-body-sm text-secondary">Customer notified via automated SMS dispatch.</span>
</div>
</div>
</div>

<section className="w-full bg-surface-container-lowest rounded-xl shadow-md overflow-hidden">

<div className="bg-surface-container px-space-md py-space-sm flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
<span className="font-label-md text-label-md font-bold text-on-surface">Current Processing Target</span>
</div>
<span className="px-2 py-0.5 rounded-md bg-secondary-container text-on-secondary-fixed font-mono font-bold text-label-sm">BAY 02 • INTAKE</span>
</div>
<div className="p-space-md space-y-space-md">

<div className="flex gap-space-sm items-start">
<div className="w-16 h-16 rounded-xl bg-surface-container flex-shrink-0 overflow-hidden relative">
<img className="w-full h-full object-cover" data-alt="Anker 24K GaN high capacity powerbank retail package with safety seal sticker intact in warehouse inspection station studio lighting" src="/images/d2e446996b4fbbfe.webp" />
</div>
<div className="flex-1 min-w-0 flex flex-col">
<div className="flex items-center justify-between gap-1">
<span className="font-label-sm text-label-sm font-mono text-primary-container font-extrabold truncate">#SC-ORD-9488</span>
<span className="px-1.5 py-0.5 rounded bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm font-bold flex-shrink-0">Priority Inbound</span>
</div>
<span className="font-label-lg text-label-lg text-on-surface font-bold leading-snug truncate">Anker PowerCore 24K GaN</span>
<div className="flex items-center gap-1 text-secondary mt-0.5">
<Icon name="storefront" className="text-[14px]" />
<span className="font-body-sm text-body-sm truncate">Anker Direct UG • Pioneer Mall</span>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-lg p-space-sm flex items-center justify-between">
<div className="flex items-center gap-space-xs min-w-0">
<div className="w-7 h-7 rounded-full bg-surface-variant flex items-center justify-center flex-shrink-0">
<Icon name="two_wheeler" className="text-[16px] text-on-surface-variant" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface font-bold truncate">SafeBoda #RDR-3312 • Kizito Brian</span>
<span className="font-label-sm text-label-sm text-secondary">Gate Delivery: Just Now</span>
</div>
</div>
<span className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm font-bold flex-shrink-0">
<Icon name="verified" className="text-[14px]" />
          Verified
        </span>
</div>

<div className="space-y-space-xs">
<div className="flex items-center justify-between">
<label className="font-label-md text-label-md font-bold text-on-surface">Mandatory Condition Protocol</label>
<span className="font-label-sm text-label-sm text-primary font-bold">Audit Required</span>
</div>
<div className="grid grid-cols-2 gap-space-xs p-1 bg-surface-container rounded-lg">
<button className="py-2.5 px-space-xs rounded-md font-label-sm text-label-sm font-bold flex items-center justify-center gap-1.5 transition-all bg-surface-container-lowest text-tertiary shadow-sm" id="toggleConditionOk" type="button">
<Icon name="verified" className="text-[18px]" />
<span>Condition OK (Intact)</span>
</button>
<button className="py-2.5 px-space-xs rounded-md font-label-sm text-label-sm font-bold flex items-center justify-center gap-1.5 transition-all text-secondary" id="toggleConditionDamaged" type="button">
<Icon name="warning" className="text-[18px]" />
<span>Damaged / Tampered</span>
</button>
</div>

<div className="hidden pt-space-xs space-y-space-xs" id="damageReportDrawer">
<div className="p-space-sm bg-error-container/20 rounded-lg space-y-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm font-bold text-error">Damage Evidence Mandatory</span>
<button className="flex items-center gap-1 text-primary-container font-label-sm text-label-sm font-bold" type="button">
<Icon name="add_a_photo" className="text-[16px]" />
                Take Photo
              </button>
</div>
<textarea className="w-full p-2 bg-surface-container-lowest rounded font-body-sm text-body-sm text-on-surface placeholder:text-secondary focus:outline-none" placeholder="Record broken tamper seal, dented corner, or carton crush severity..." rows={2}></textarea>
</div>
</div>
</div>

<div className="space-y-space-xs pt-1">
<label className="font-label-md text-label-md font-bold text-on-surface flex items-center justify-between">
<span>Storage Assignment</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Smart Allocation</span>
</label>
<div className="bg-surface-container-low rounded-xl p-space-sm space-y-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-9 h-9 rounded-lg bg-primary-container/15 text-primary-container flex items-center justify-center">
<Icon name="shelves" className="text-[20px]" />
</div>
<div>
<div className="flex items-center gap-1.5">
<span className="font-headline-sm text-headline-sm font-mono font-extrabold text-on-surface">BIN B-08</span>
<span className="px-1.5 py-0.2 rounded bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm font-bold">Recommended</span>
</div>
<span className="font-body-sm text-body-sm text-secondary">Small Electronics Bay • 4 slots available</span>
</div>
</div>

<button className="px-2.5 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm font-bold flex items-center gap-1" type="button">
<span>Change</span>
<Icon name="expand_more" className="text-[14px]" />
</button>
</div>

<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container text-on-surface">
<div className="flex items-center gap-2">
<Icon name="qr_code_2" className="text-secondary text-[20px]" />
<span className="font-body-sm text-body-sm text-secondary">Shelf QR Verification</span>
</div>
<span className="flex items-center gap-1 font-label-sm text-label-sm font-bold text-tertiary">
<Icon name="check" className="text-[14px]" />
              Matched B-08
            </span>
</div>
</div>
</div>

<button className="w-full py-3.5 px-space-md rounded-xl bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg font-extrabold shadow-lg shadow-primary-container/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2" id="confirmReceiptBtn" type="button">
<Icon name="check_circle" className="text-[20px]" />
<span>Confirm Receipt &amp; Print Shelf Tag</span>
</button>
</div>
</section>

<section className="w-full space-y-space-sm pt-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface">Expected Inbound</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-secondary font-label-sm text-label-sm font-bold">116 Units</span>
</div>
<button className="text-primary-container font-label-sm text-label-sm font-bold flex items-center gap-0.5">
<span>Refresh Queue</span>
<Icon name="sync" className="text-[14px]" />
</button>
</div>

<div className="flex items-center gap-1.5 overflow-x-auto pb-1">
<button className="px-3 py-1.5 rounded-full bg-on-surface text-surface-container-lowest font-label-sm text-label-sm font-bold flex-shrink-0 flex items-center gap-1">
<span>All Inbound</span>
<span className="opacity-70">(116)</span>
</button>
<button className="px-3 py-1.5 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm font-bold flex-shrink-0 flex items-center gap-1 hover:text-on-surface">
<Icon name="two_wheeler" className="text-[14px]" />
<span>Boda Drops</span>
<span className="opacity-70">(82)</span>
</button>
<button className="px-3 py-1.5 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm font-bold flex-shrink-0 flex items-center gap-1 hover:text-on-surface">
<Icon name="local_shipping" className="text-[14px]" />
<span>Linehaul Trucks</span>
<span className="opacity-70">(34)</span>
</button>
</div>

<div className="space-y-space-xs">

<div className="bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex items-center justify-between gap-space-sm active:bg-surface-container-low transition-colors cursor-pointer">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-12 h-12 rounded-lg bg-surface-container flex-shrink-0 overflow-hidden relative">
<img className="w-full h-full object-cover" data-alt="Modern high spec Android smartphone box packaging Tecno Camon 30 Pro against dark slate warehouse intake background" src="/images/d8cb76e8da2adfcf.webp" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-sm text-label-sm font-mono font-bold text-on-surface truncate">#SC-ORD-9512</span>
<span className="px-1 py-0.2 rounded bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm font-bold flex-shrink-0">Boda Drop</span>
</div>
<span className="font-label-md text-label-md font-bold text-on-surface truncate">Tecno Camon 30 Pro 5G</span>
<span className="font-body-sm text-body-sm text-secondary truncate">Kampala Phone Hub</span>
</div>
</div>
<div className="flex flex-col items-end flex-shrink-0">
<span className="font-label-sm text-label-sm font-bold text-primary-container flex items-center gap-0.5">
<Icon name="schedule" className="text-[14px]" />
            8m ETA
          </span>
<span className="font-label-sm text-label-sm text-secondary">In Transit</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex items-center justify-between gap-space-sm active:bg-surface-container-low transition-colors cursor-pointer">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-12 h-12 rounded-lg bg-surface-container flex-shrink-0 overflow-hidden relative">
<img className="w-full h-full object-cover" data-alt="Large portable Bluetooth speaker retail box Oraimo Boom Box 40W on inventory receiving bench" src="/images/3fa1ec252027f1c7.webp" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-sm text-label-sm font-mono font-bold text-on-surface truncate">#SC-ORD-9519</span>
<span className="px-1 py-0.2 rounded bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm font-bold flex-shrink-0">Boda Drop</span>
</div>
<span className="font-label-md text-label-md font-bold text-on-surface truncate">Oraimo Boom Box 40W</span>
<span className="font-body-sm text-body-sm text-secondary truncate">Kikuubo Tech UG</span>
</div>
</div>
<div className="flex flex-col items-end flex-shrink-0">
<span className="font-label-sm text-label-sm font-bold text-secondary flex items-center gap-0.5">
<Icon name="schedule" className="text-[14px]" />
            14m ETA
          </span>
<span className="font-label-sm text-label-sm text-secondary">Dispatched</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex items-center justify-between gap-space-sm active:bg-surface-container-low transition-colors cursor-pointer">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-12 h-12 rounded-lg bg-surface-container flex-shrink-0 overflow-hidden relative">
<img className="w-full h-full object-cover" data-alt="Wireless noise cancelling earbuds packaging Soundcore ANC Pro box sealed with authenticity holographic seal" src="/images/f1daecab605beb90.webp" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-sm text-label-sm font-mono font-bold text-on-surface truncate">#SC-ORD-9490</span>
<span className="px-1 py-0.2 rounded bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm font-bold flex-shrink-0">Dock Gate 2</span>
</div>
<span className="font-label-md text-label-md font-bold text-on-surface truncate">SoundCore ANC Pro Headset</span>
<span className="font-body-sm text-body-sm text-secondary truncate">SoundCore Official Hub</span>
</div>
</div>
<div className="flex flex-col items-end flex-shrink-0">
<span className="px-2 py-0.5 rounded-full bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
            Staged
          </span>
<span className="font-label-sm text-label-sm text-secondary">Gate 2 Unload</span>
</div>
</div>
</div>
</section>
</div>
</main>
<nav className="fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface/95 backdrop-blur-xl shadow-[0_-4px_16px_rgba(0,0,0,0.06)]" data-active-classes="text-primary-container font-bold"><div className="flex justify-between items-center h-20 px-space-xs relative"><a className="flex-1 flex flex-col items-center justify-center h-full min-w-[48px] min-h-[48px] text-secondary hover:text-on-surface transition-colors" data-path="overview" href="#"><Icon name="dashboard" className="text-[24px]" /><span className="font-label-sm text-label-sm tracking-tight">Overview</span></a><a aria-current="page" className="flex-1 flex flex-col items-center justify-center h-full min-w-[48px] min-h-[48px] transition-colors text-primary-container font-bold" data-path="intake" href="#"><Icon name="move_to_inbox" className="text-[24px]" /><span className="font-label-sm text-label-sm tracking-tight">Intake</span></a><div className="relative flex-1 flex flex-col items-center justify-center"><a className="absolute -top-6 w-14 h-14 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-lg shadow-primary-container/40 ring-4 ring-surface active:scale-95 transition-transform" data-path="scan" href="#"><Icon name="qr_code_scanner" className="text-[28px]" /></a><span className="font-label-sm text-label-sm text-secondary pt-8 tracking-tight">Scan</span></div><a className="flex-1 flex flex-col items-center justify-center h-full min-w-[48px] min-h-[48px] text-secondary hover:text-on-surface transition-colors" data-path="pickup" href="#"><Icon name="front_hand" className="text-[24px]" /><span className="font-label-sm text-label-sm tracking-tight">Pickup</span></a><a className="flex-1 flex flex-col items-center justify-center h-full min-w-[48px] min-h-[48px] text-secondary hover:text-on-surface transition-colors" data-path="more" href="#"><Icon name="widgets" className="text-[24px]" /><span className="font-label-sm text-label-sm tracking-tight">More</span></a></div></nav>
    </div>
  );
};

export default IntakeSwiftcartHubAgent;
