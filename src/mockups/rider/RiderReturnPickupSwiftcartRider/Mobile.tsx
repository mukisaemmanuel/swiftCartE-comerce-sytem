// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/rider/rider_return_pickup_swiftcart_rider/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface RiderReturnPickupSwiftcartRiderProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const RiderReturnPickupSwiftcartRider: React.FC<RiderReturnPickupSwiftcartRiderProps> = (props) => {
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
      
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 px-gutter flex items-center justify-between gap-space-sm"><button type="button" className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 mr-2" aria-label="Toggle Theme" title="Toggle Theme" onClick={() => toggleTheme()}>{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}</button><div className="flex items-center gap-space-xs min-w-0 flex-1"><button aria-label="Go Back" className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface hover:text-primary transition-colors shrink-0"><Icon name="arrow_back" className="text-[22px]" /></button><img alt="SwiftCart" className="h-7 w-auto object-contain shrink-0" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col min-w-0 ml-1"><div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-tertiary inline-block"></span><span className="font-label-sm text-label-sm text-tertiary font-bold">Online</span></div><h1 className="font-headline-sm text-headline-sm text-on-surface truncate">Return Pickup Task</h1></div></div><div className="flex items-center gap-space-xs shrink-0"><div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed font-label-md font-bold shrink-0">KB</div></div></div></header>
<main className="flex flex-col relative w-full pt-16 bg-surface min-h-screen"><div className="flex flex-col w-full pb-32">
<section className="px-margin pt-space-md">
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
<div className="flex items-center justify-between pb-space-sm border-b border-surface-container-high/60">
<div className="flex items-center gap-space-sm">
<div className="w-11 h-11 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed-variant font-headline-sm text-[16px] font-bold shrink-0">
          DM
        </div>
<div>
<div className="flex items-center gap-1.5">
<h2 className="font-headline-sm text-[16px] text-on-surface font-bold">Dennis Mukasa</h2>
<span className="bg-secondary-fixed text-on-secondary-fixed-variant px-1.5 py-0.5 rounded font-label-sm text-label-sm">Customer</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">+256 701 442 819</p>
</div>
</div>
<a aria-label="Call Dennis Mukasa" className="w-10 h-10 rounded-full bg-primary-fixed/40 flex items-center justify-center text-primary active:scale-95 transition-transform" href="tel:+256701442819">
<Icon name="call" className="text-[20px]" />
</a>
</div>
<div className="pt-space-sm space-y-space-xs">
<div className="flex items-start gap-2">
<Icon name="location_on" className="text-primary text-[18px] shrink-0 mt-0.5" />
<p className="font-body-md text-body-md text-on-surface font-medium">Plot 14 Forest Mall, Lugogo Bypass, Kampala</p>
</div>
<div className="flex items-center justify-between bg-surface-container-low p-space-sm rounded-lg mt-space-xs">
<div>
<p className="font-label-sm text-label-sm text-on-surface-variant">Order #SC-ORD-9281</p>
<p className="font-label-md text-label-md text-on-surface font-semibold">SoundCore Space One ANC</p>
</div>
<div className="text-right">
<p className="font-label-sm text-label-sm text-on-surface-variant">Value</p>
<p className="font-headline-sm text-[15px] font-bold text-primary">UGX 248,500</p>
</div>
</div>
</div>
</div>
</section>

<section className="px-margin pt-space-md">
<h3 className="font-label-lg text-label-lg text-on-surface mb-space-xs flex items-center gap-1.5">
<Icon name="checklist" className="text-primary text-[20px]" />
<span>Pickup Verification</span>
</h3>
<div className="space-y-space-sm">

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-start gap-space-sm">
<label className="flex items-start gap-space-sm cursor-pointer w-full">
<input checked={true} className="w-5 h-5 mt-0.5 rounded text-primary focus:ring-primary accent-primary shrink-0" type="checkbox" />
<div className="flex-1 min-w-0">
<p className="font-label-md text-label-md text-on-surface font-semibold">Step 1: Confirm item matches order</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">SoundCore Space One ANC headphones verified against customer app invoice.</p>
</div>
</label>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
<p className="font-label-md text-label-md text-on-surface font-semibold mb-space-xs">Step 2: Check item condition</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">Inspect physical condition of the package and unit:</p>
<div className="grid grid-cols-3 gap-space-xs">
<button className="py-2 px-2 rounded-lg font-label-md text-label-md font-semibold bg-tertiary-container text-on-tertiary-container flex items-center justify-center gap-1 shadow-sm" type="button">
<Icon name="check_circle" className="text-[16px]" />
<span>Intact</span>
</button>
<button className="py-2 px-2 rounded-lg font-label-md text-label-md font-medium bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest transition-colors flex items-center justify-center gap-1" type="button">
<span>Minor Wear</span>
</button>
<button className="py-2 px-2 rounded-lg font-label-md text-label-md font-medium bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest transition-colors flex items-center justify-center gap-1" type="button">
<span>Damaged</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
<div className="flex items-center justify-between mb-space-xs">
<p className="font-label-md text-label-md text-on-surface font-semibold">Step 3: Take photo of returned item</p>
<span className="font-label-sm text-label-sm text-tertiary font-bold bg-on-tertiary-container px-2 py-0.5 rounded-full">2 Photos Ready</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">Capture clear pictures showing the item and accessories.</p>
<div className="grid grid-cols-2 gap-space-sm">

<div className="relative h-28 rounded-lg overflow-hidden bg-surface-container-high">
<img className="w-full h-full object-cover" data-alt="Returned SoundCore headphone box in good condition" src="/images/d7ad4321f81f5acc.webp" />
<div className="absolute bottom-1 left-1 bg-inverse-surface/85 px-1.5 py-0.5 rounded text-[10px] text-inverse-on-surface font-medium">Item Box</div>
</div>

<div className="relative h-28 rounded-lg overflow-hidden bg-surface-container-high border-2 border-dashed border-outline-variant flex flex-col items-center justify-center text-center p-2">
<Icon name="add_a_photo" className="text-primary text-[24px]" />
<span className="font-label-sm text-label-sm text-primary font-bold mt-1">Retake / Add Photo</span>
</div>
</div>
</div>
</div>
</section>

<section className="px-margin pt-space-md">
<div className="bg-surface-container-low rounded-xl p-space-md shadow-sm">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-start gap-space-sm">
<div className="w-9 h-9 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shrink-0">
<Icon name="store" className="text-[18px]" />
</div>
<div>
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">Drop-off Destination</span>
<h4 className="font-label-lg text-label-lg text-on-surface mt-0.5">SoundCore Uganda Official</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Pioneer Mall • Stall G-14 (Kampala Rd)</p>
<p className="font-label-sm text-label-sm text-secondary mt-1 flex items-center gap-1">
<Icon name="alt_route" className="text-[14px]" />
<span>Alt: Drop at William St Hub</span>
</p>
</div>
</div>
<div className="text-right shrink-0">
<span className="inline-block px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-bold">
          14 mins
        </span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">2.4 km</p>
</div>
</div>
</div>
</section>

<div className="fixed bottom-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-md px-margin py-space-md shadow-[0_-4px_20px_rgba(14,27,77,0.06)] pb-safe">
<div className="flex flex-col gap-space-xs max-w-md mx-auto">
<button className="w-full h-12 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(218,55,0,0.30)] active:scale-[0.98] transition-transform" id="dispatchConfirmBtn">
<Icon name="check_circle" className="text-[20px]" />
<span>Confirm Return Collected</span>
</button>
<button className="w-full py-1 text-center font-label-md text-label-md text-on-surface-variant hover:text-error transition-colors flex items-center justify-center gap-1" id="issueReportBtn">
<Icon name="warning" className="text-[16px]" />
<span>Customer Unavailable / Issue</span>
</button>
</div>
</div></div>
</main>
    </div>
  );
};

export default RiderReturnPickupSwiftcartRider;
