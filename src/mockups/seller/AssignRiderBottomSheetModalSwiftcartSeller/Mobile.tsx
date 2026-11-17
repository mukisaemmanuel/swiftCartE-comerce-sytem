// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/seller/assign_rider_bottom_sheet_modal_swiftcart_seller/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface AssignRiderBottomSheetModalSwiftcartSellerProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const AssignRiderBottomSheetModalSwiftcartSeller: React.FC<AssignRiderBottomSheetModalSwiftcartSellerProps> = (props) => {
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
      
      <div className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300" id="drawer-backdrop"></div>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-20 bg-surface"><div className="flex flex-col w-full relative min-h-full">

<div className="px-margin space-y-space-md opacity-40 pointer-events-none select-none blur-[0.5px]">
<div className="flex items-center justify-between pt-space-xs">
<div>
<p className="font-headline-sm text-headline-sm text-on-surface font-bold">Today's Orders</p>
<p className="font-body-sm text-body-sm text-secondary">Kikuubo Hub • 8 pending dispatches</p>
</div>
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface">
<Icon name="filter_list" className="text-[20px]" />
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low shadow-sm space-y-space-xs">
<div className="flex justify-between items-center">
<span className="font-label-md text-label-md font-bold text-primary">#SC-9940</span>
<span className="px-2 py-0.5 rounded-full bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm">Delivered</span>
</div>
<p className="font-label-lg text-label-lg text-on-surface font-bold">Harriet N. • Kololo</p>
<p className="font-body-sm text-body-sm text-secondary whitespace-nowrap">UGX 140,000 • Oraimo FreePods 4</p>
</div>
<div className="p-space-md rounded-xl bg-surface-container-highest shadow-sm space-y-space-xs">
<div className="flex justify-between items-center">
<span className="font-label-md text-label-md font-bold text-primary">#SC-9941</span>
<span className="px-2 py-0.5 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm">Needs Rider</span>
</div>
<p className="font-label-lg text-label-lg text-on-surface font-bold">Ronald K. • Nakawa</p>
<p className="font-body-sm text-body-sm text-secondary whitespace-nowrap">UGX 365,000 • payment secured</p>
</div>
</div>

<div className="fixed inset-0 z-40 bg-inverse-surface/65 backdrop-blur-[2px] transition-opacity"></div>

<div className="fixed inset-x-0 bottom-0 z-50 flex flex-col max-h-[813px] bg-surface-container-lowest rounded-t-[28px] shadow-[0_-8px_32px_rgba(15,23,42,0.18)] pb-safe overflow-hidden" id="rider-dispatch-sheet">

<div className="w-full pt-3 pb-1 flex justify-center items-center cursor-grab active:cursor-grabbing">
<div className="w-12 h-1.5 rounded-full bg-secondary-fixed-dim/70"></div>
</div>

<div className="px-margin pt-2 pb-space-sm flex items-start justify-between">
<div className="space-y-0.5">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse"></span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Immediate Dispatch</span>
</div>
<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-bold tracking-tight">Assign Dedicated Rider</h2>
<p className="font-body-sm text-body-sm text-on-secondary-container">
          Order <span className="font-bold text-on-surface">#SC-9941</span> • Ronald K. (Nakawa Division)
        </p>
</div>
<button aria-label="Dismiss sheet" className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-transform active:scale-95">
<Icon name="close" className="text-[20px]" />
</button>
</div>

<div className="flex-1 overflow-y-auto px-margin space-y-space-md py-space-xs">

<div className="p-space-sm rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<Icon name="verified_user" className="text-tertiary text-[18px]" />
<span className="font-label-md text-label-md font-bold text-on-surface whitespace-nowrap">UGX 365,000</span>
<span className="px-2 py-0.5 rounded bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm font-bold">payment protected</span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-semibold">2 Parcels</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
          Anker SoundCore Space One • GaN 65W Turbo Charger
        </p>
</div>

<div className="p-space-sm rounded-xl bg-surface-container flex gap-space-sm items-start">
<div className="w-7 h-7 rounded-lg bg-primary-container/15 text-primary flex items-center justify-center shrink-0 mt-0.5">
<Icon name="pin" className="text-[18px]" />
</div>
<div className="space-y-0.5">
<p className="font-label-sm text-label-sm font-bold text-on-surface uppercase tracking-wide">Handover Verification Rule</p>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Rider delivers parcel to buyer. Buyer holds the <strong className="text-on-surface">6-digit secure delivery code</strong>. Never share code before physical handover.
          </p>
</div>
</div>

<div className="space-y-space-xs">
<div className="flex items-center justify-between px-space-xs">
<span className="font-label-sm text-label-sm uppercase font-bold text-secondary tracking-wider">Available Couriers (3 Online)</span>
<span className="font-label-sm text-label-sm font-semibold text-tertiary flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary inline-block"></span> GPS Active
          </span>
</div>
<form className="space-y-2.5" id="rider-selection-form">

<label className="rider-card relative block p-space-sm rounded-xl bg-surface-container-high transition-all cursor-pointer shadow-sm select-none" data-rider="Kizito Brian">
<input checked={true} className="peer sr-only" name="courier_choice" type="radio" value="Kizito Brian" />
<div className="flex items-start gap-space-sm">
<div className="relative shrink-0">
<div className="w-12 h-12 rounded-xl bg-surface-variant flex items-center justify-center overflow-hidden">
<Icon name="sports_motorsports" className="text-[28px] text-on-surface-variant" />
</div>
<span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-tertiary-container flex items-center justify-center">
<Icon name="check" className="text-[11px] text-on-tertiary font-bold" />
</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<p className="font-label-lg text-label-lg font-bold text-on-surface truncate">Kizito Brian</p>
<div className="w-5 h-5 rounded-full flex items-center justify-center bg-primary text-on-primary">
<span className="w-2 h-2 rounded-full bg-white radio-indicator"></span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                  Bajaj Boxer • <span className="font-bold text-on-surface">UEF 842X</span>
</p>
<div className="flex flex-wrap items-center gap-1.5 mt-1.5">
<span className="px-2 py-0.5 rounded bg-tertiary/10 text-tertiary font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="location_on" className="text-[13px]" /> At Stage (Kikuubo)
                  </span>
<span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-bold">
                    4 mins away
                  </span>
</div>
<div className="flex items-center justify-between pt-2 mt-2 bg-surface/50 rounded-lg px-2 py-1">
<span className="font-label-sm text-label-sm text-secondary flex items-center gap-1">
<Icon name="local_shipping" className="text-[14px]" /> 0 Active Trips
                  </span>
<span className="font-label-sm text-label-sm text-primary font-bold flex items-center gap-1">
<Icon name="phone_in_talk" className="text-[14px]" /> Relay (+256 ••• ••38)
                  </span>
</div>
</div>
</div>
</label>

<label className="rider-card relative block p-space-sm rounded-xl bg-surface-container-low transition-all cursor-pointer shadow-sm select-none" data-rider="Musoke Dennis">
<input className="peer sr-only" name="courier_choice" type="radio" value="Musoke Dennis" />
<div className="flex items-start gap-space-sm">
<div className="relative shrink-0">
<div className="w-12 h-12 rounded-xl bg-surface-variant flex items-center justify-center overflow-hidden">
<Icon name="two_wheeler" className="text-[28px] text-on-surface-variant" />
</div>
<span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-tertiary-container"></span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<p className="font-label-lg text-label-lg font-bold text-on-surface truncate">Musoke Dennis</p>
<div className="w-5 h-5 rounded-full flex items-center justify-center bg-surface-container-highest text-transparent">
<span className="w-2 h-2 rounded-full bg-white radio-indicator hidden"></span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                  TVS Apache • <span className="font-bold text-on-surface">UEY 104M</span>
</p>
<div className="flex flex-wrap items-center gap-1.5 mt-1.5">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold flex items-center gap-1">
<Icon name="near_me" className="text-[13px]" /> Entebbe Road
                  </span>
<span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm font-semibold">
                    12 mins away
                  </span>
</div>
<div className="flex items-center justify-between pt-2 mt-2 bg-surface/50 rounded-lg px-2 py-1">
<span className="font-label-sm text-label-sm text-secondary flex items-center gap-1">
<Icon name="local_shipping" className="text-[14px]" /> 1 Drop Remaining
                  </span>
<span className="font-label-sm text-label-sm text-secondary font-semibold flex items-center gap-1">
<Icon name="phone_in_talk" className="text-[14px]" /> Relay (+256 ••• ••91)
                  </span>
</div>
</div>
</div>
</label>

<label className="rider-card relative block p-space-sm rounded-xl bg-surface-container-low transition-all cursor-pointer shadow-sm select-none" data-rider="Okello John">
<input className="peer sr-only" name="courier_choice" type="radio" value="Okello John" />
<div className="flex items-start gap-space-sm">
<div className="relative shrink-0">
<div className="w-12 h-12 rounded-xl bg-surface-variant flex items-center justify-center overflow-hidden">
<Icon name="two_wheeler" className="text-[28px] text-on-surface-variant" />
</div>
<span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-tertiary-container"></span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<p className="font-label-lg text-label-lg font-bold text-on-surface truncate">Okello John</p>
<div className="w-5 h-5 rounded-full flex items-center justify-center bg-surface-container-highest text-transparent">
<span className="w-2 h-2 rounded-full bg-white radio-indicator hidden"></span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                  Bajaj Boxer • <span className="font-bold text-on-surface">UFA 331Q</span>
</p>
<div className="flex flex-wrap items-center gap-1.5 mt-1.5">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold flex items-center gap-1">
<Icon name="mode_standby" className="text-[13px]" /> Idle in Kawempe
                  </span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                    22 mins away
                  </span>
</div>
<div className="flex items-center justify-between pt-2 mt-2 bg-surface/50 rounded-lg px-2 py-1">
<span className="font-label-sm text-label-sm text-secondary flex items-center gap-1">
<Icon name="local_shipping" className="text-[14px]" /> 0 Active Trips
                  </span>
<span className="font-label-sm text-label-sm text-secondary font-semibold flex items-center gap-1">
<Icon name="phone_in_talk" className="text-[14px]" /> Relay (+256 ••• ••14)
                  </span>
</div>
</div>
</div>
</label>
</form>
</div>
</div>

<div className="p-margin bg-surface-container-lowest shadow-[0_-4px_16px_rgba(15,23,42,0.06)] space-y-2">

<button className="w-full h-12 rounded-xl bg-gradient-to-r from-primary-container to-primary text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-md active:scale-[0.98] transition-all hover:brightness-105" id="dispatch-submit-btn">
<Icon name="electric_bolt" className="text-[20px]" />
<span id="dispatch-cta-text">Confirm &amp; Dispatch to Kizito Brian</span>
</button>

<button className="w-full h-11 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold flex items-center justify-center transition-all active:scale-[0.98]" type="button">
        Cancel
      </button>
</div>
</div>
</div>
</main>
    </div>
  );
};

export default AssignRiderBottomSheetModalSwiftcartSeller;
