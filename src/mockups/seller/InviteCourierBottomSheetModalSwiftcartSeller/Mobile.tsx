// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/seller/invite_courier_bottom_sheet_modal_swiftcart_seller/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface InviteCourierBottomSheetModalSwiftcartSellerProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const InviteCourierBottomSheetModalSwiftcartSeller: React.FC<InviteCourierBottomSheetModalSwiftcartSellerProps> = (props) => {
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
<main className="flex-1 flex flex-col relative w-full pt-16 pb-20 bg-surface"><div className="flex flex-col w-full relative">

<div className="w-full px-margin py-space-sm space-y-space-md opacity-40 blur-[1px] pointer-events-none select-none">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface">Store Fleet</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">4 active couriers on standby</span>
</div>
<div className="px-space-md py-1.5 rounded-full bg-tertiary-container text-on-tertiary font-label-sm text-label-sm uppercase font-bold flex items-center gap-1">
<Icon name="bolt" className="text-[14px]" />
        Instant Dispatch
      </div>
</div>

<div className="space-y-space-sm">
<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-11 h-11 rounded-full bg-surface-container-high overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Portrait photo of a friendly Ugandan boda boda rider named Mugisha Moses smiling in high visibility orange courier jacket on Kampala street daylight" src="/images/09c98e74039399a5.webp" />
</div>
<div>
<div className="font-label-lg text-label-lg text-on-surface font-bold">Mugisha Moses</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">UEX 884L • Kikuubo Stage</div>
</div>
</div>
<span className="px-2 py-1 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold">Available</span>
</div>
<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-11 h-11 rounded-full bg-surface-container-high overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Headshot of Ugandan motorcycle delivery courier Ssenyonga Brian wearing a DOT certified dark helmet propped up with Kampala city skyline background" src="/images/69d18bf1b8d20334.webp" />
</div>
<div>
<div className="font-label-lg text-label-lg text-on-surface font-bold">Ssenyonga Brian</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">UED 120Q • Nakasero Hill</div>
</div>
</div>
<span className="px-2 py-1 rounded bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-bold">In Transit</span>
</div>
</div>
</div>

<div className="fixed inset-0 z-40 bg-inverse-surface/60 backdrop-blur-[3px] transition-opacity duration-300 flex flex-col justify-end">

<section className="w-full max-h-[777px] bg-surface-container-lowest rounded-t-[28px] shadow-[0_-8px_32px_rgba(13,28,47,0.18)] flex flex-col overflow-hidden animate-[slideUp_0.3s_cubic-bezier(0.16,1,0.3,1)]">

<div className="w-full pt-3 pb-1 flex justify-center items-center cursor-grab active:cursor-grabbing">
<div className="w-10 h-1.5 rounded-full bg-secondary-fixed-dim"></div>
</div>

<div className="px-gutter pt-2 pb-space-sm flex items-start justify-between gap-space-sm">
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<div className="w-6 h-6 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
<Icon name="two_wheeler" className="text-[16px]" />
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-extrabold tracking-tight">Invite Dedicated Courier</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-snug">
            Add trusted boda boda rider to your store fleet for instant order dispatches
          </p>
</div>
<button aria-label="Close invite modal" className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high active:scale-90 transition-all shrink-0">
<Icon name="close" className="text-[20px]" />
</button>
</div>

<form className="flex-1 overflow-y-auto px-gutter pb-space-lg space-y-space-md" onSubmit={(e) => e.preventDefault()}>

<div className="space-y-1">
<label className="font-label-md text-label-md text-on-surface font-bold flex items-center justify-between" htmlFor="courier-name">
<span>Courier Full Name</span>
<span className="font-label-sm text-label-sm text-secondary font-normal">Official National ID name</span>
</label>
<div className="relative flex items-center">
<Icon name="badge" className="absolute left-3.5  text-secondary text-[20px] pointer-events-none" />
<input className="w-full h-12 pl-11 pr-4 bg-surface-container-low rounded-xl text-on-surface font-body-md text-body-md placeholder:text-secondary focus:bg-surface-container-lowest focus:outline-none focus:shadow-[0_0_0_2px_#ff5722] transition-all" id="courier-name" placeholder="e.g. Kasirye Emmanuel" type="text" value="Kasirye Emmanuel" />
</div>
</div>

<div className="space-y-1">
<div className="flex items-center justify-between">
<label className="font-label-md text-label-md text-on-surface font-bold" htmlFor="courier-phone">Ugandan Mobile Number</label>
<div className="px-2 py-0.5 rounded-full bg-surface-container text-on-secondary-container font-label-sm text-label-sm font-bold flex items-center gap-1 transition-all" id="momo-badge">
<span className="w-2 h-2 rounded-full bg-tertiary-container inline-block"></span>
<span id="network-label">MTN MoMo Verified</span>
</div>
</div>
<div className="relative flex items-center">

<div className="absolute left-2.5 flex items-center gap-1.5 px-2 py-1 rounded-lg bg-surface-container text-on-surface pointer-events-none">
<span className="text-[14px]">🇺🇬</span>
<span className="font-label-md text-label-md font-bold">+256</span>
</div>
<input className="w-full h-12 pl-24 pr-11 bg-surface-container-low rounded-xl text-on-surface font-body-md text-body-md placeholder:text-secondary tracking-wide focus:bg-surface-container-lowest focus:outline-none focus:shadow-[0_0_0_2px_#ff5722] transition-all" id="courier-phone" placeholder="7•• ••• •••" type="tel" value="772 409 812" />
<div className="absolute right-3 text-tertiary flex items-center" title="Valid mobile number">
<Icon name="check_circle" className="text-[20px]" />
</div>
</div>
<div className="flex items-center gap-2 pt-0.5">
<span className="font-label-sm text-label-sm text-on-secondary-container">Supports instant daily cashout via:</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container text-on-surface font-label-sm text-label-sm font-bold">MTN Mobile Money</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container text-on-surface font-label-sm text-label-sm font-bold">Airtel Money</span>
</div>
</div>

<div className="space-y-1">
<label className="font-label-md text-label-md text-on-surface font-bold flex items-center justify-between" htmlFor="plate-number">
<span>Motorcycle Plate Number</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold tracking-tight">URA Validated Format</span>
</label>
<div className="relative flex items-center">

<div className="absolute left-2.5 flex items-center gap-1 px-2 py-1 rounded bg-[#ffd700]/25 text-[#735300] font-label-sm text-label-sm font-black">
<span>UG</span>
</div>
<input className="w-full h-12 pl-14 pr-4 bg-surface-container-low rounded-xl text-on-surface font-headline-sm text-headline-sm uppercase font-extrabold tracking-widest placeholder:text-secondary focus:bg-surface-container-lowest focus:outline-none focus:shadow-[0_0_0_2px_#ff5722] transition-all" id="plate-number" maxLength={8} placeholder="e.g. UEG 419P" type="text" value="UEG 419P" />
<div className="absolute right-3 w-6 h-6 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant">
<Icon name="sports_motorsports" className="text-[16px]" />
</div>
</div>
</div>

<div className="space-y-1.5">
<label className="font-label-md text-label-md text-on-surface font-bold flex items-center justify-between" htmlFor="boda-stage">
<span>Primary Operating Boda Stage</span>
<span className="font-label-sm text-label-sm text-secondary font-normal">Base location</span>
</label>
<div className="relative flex items-center">
<Icon name="location_on" className="absolute left-3.5  text-secondary text-[20px] pointer-events-none" />
<input className="w-full h-12 pl-11 pr-9 bg-surface-container-low rounded-xl text-on-surface font-body-md text-body-md placeholder:text-secondary focus:bg-surface-container-lowest focus:outline-none focus:shadow-[0_0_0_2px_#ff5722] transition-all" id="boda-stage" placeholder="Select or enter stage" type="text" value="Kikuubo Commercial Stage" />
<Icon name="expand_more" className="absolute right-3  text-secondary text-[18px] pointer-events-none" />
</div>

<div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-0.5 no-scrollbar">
<button className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm whitespace-nowrap active:scale-95 transition-transform hover:bg-surface-container-high" type="button">
              ⚡ Kikuubo Commercial Stage
            </button>
<button className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm whitespace-nowrap active:scale-95 transition-transform hover:bg-surface-container-high" type="button">
              Nakawa Market Stage
            </button>
<button className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm whitespace-nowrap active:scale-95 transition-transform hover:bg-surface-container-high" type="button">
              Entebbe Taxi Park
            </button>
</div>
</div>

<div className="p-space-md rounded-2xl bg-surface-container-low space-y-space-sm">
<span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary">Dispatch Compliance Terms</span>

<label className="flex items-start gap-space-sm cursor-pointer select-none">
<input checked={true} className="sr-only peer" id="terms-escrow" type="checkbox" />
<div className="w-5 h-5 mt-0.5 rounded bg-surface-container-high peer-checked:bg-primary-container peer-checked:text-on-primary flex items-center justify-center text-transparent transition-all shrink-0">
<Icon name="check" className="text-[16px] font-black" />
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold leading-tight">
                Rider agrees to SwiftCart escrow delivery code verification protocol
              </span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] leading-tight mt-0.5">
                Funds released instantly upon customer 4-digit PIN hand-off confirmation.
              </span>
</div>
</label>

<label className="flex items-start gap-space-sm cursor-pointer select-none">
<input checked={true} className="sr-only peer" id="terms-relay" type="checkbox" />
<div className="w-5 h-5 mt-0.5 rounded bg-surface-container-high peer-checked:bg-primary-container peer-checked:text-on-primary flex items-center justify-center text-transparent transition-all shrink-0">
<Icon name="check" className="text-[16px] font-black" />
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold leading-tight">
                Direct call relay privacy protection active
              </span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] leading-tight mt-0.5">
                Merchant and customer direct numbers masked for in-transit communication.
              </span>
</div>
</label>
</div>

<div className="pt-space-xs space-y-2">
<button className="w-full h-12 rounded-xl bg-primary-container hover:bg-[#ea4a17] active:scale-[0.98] text-on-primary font-label-lg text-label-lg font-bold shadow-md shadow-primary-container/20 flex items-center justify-center gap-2 transition-all" id="send-invite-btn" type="button">
<Icon name="sms" className="text-[20px]" />
<span>Send SMS Fleet Invite</span>
</button>

<div className="flex items-center justify-center gap-1.5 px-space-xs text-center">
<Icon name="verified_user" className="text-[16px] text-tertiary" />
<p className="font-label-sm text-label-sm text-on-secondary-container">
              Rider receives download link and store pairing code via SMS. Zero registration fee.
            </p>
</div>
</div>
</form>
</section>
</div>
</div>
</main>
    </div>
  );
};

export default InviteCourierBottomSheetModalSwiftcartSeller;
