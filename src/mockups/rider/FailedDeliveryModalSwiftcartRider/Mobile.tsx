// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/rider/failed_delivery_modal_swiftcart_rider/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface FailedDeliveryModalSwiftcartRiderProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const FailedDeliveryModalSwiftcartRider: React.FC<FailedDeliveryModalSwiftcartRiderProps> = (props) => {
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
      
      <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><button type="button" className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 mr-2" aria-label="Toggle Theme" title="Toggle Theme" onClick={() => toggleTheme()}>{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}</button><div className="flex items-center gap-space-xs min-w-0"><button aria-label="Go back or close" className="w-11 h-11 -ml-1 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container transition-colors"><Icon name="arrow_back" className="text-[22px]" /></button><img alt="SwiftCart" className="h-8 w-auto object-contain flex-shrink-0" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col min-w-0 pl-1"><span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">SwiftCart Hub</span><h1 className="font-headline-sm text-headline-sm text-on-surface truncate leading-tight">Failed Delivery</h1></div></div><div className="flex items-center gap-space-xs flex-shrink-0"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-safe bg-surface"><div className="flex flex-col w-full px-margin pb-space-xl">

<div className="w-full flex flex-col bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden mt-space-sm">

<div className="w-full flex items-center justify-center pt-space-md pb-space-xs">
<div className="w-12 h-1.5 rounded-full bg-secondary-container"></div>
</div>

<div className="px-gutter pt-space-xs pb-space-sm flex flex-col">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-1.5 bg-error-container text-on-error-container px-2 py-0.5 rounded-full font-label-sm text-label-sm uppercase tracking-wider">
<Icon name="warning" className="text-[14px]" />
<span>Delivery Exception</span>
</div>
<span className="font-label-md text-label-md text-secondary">Step 1 of 2</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface mt-space-xs">Report Failed Delivery</h2>
<p className="font-body-sm text-body-sm text-secondary truncate mt-0.5">
        Order #SC-ORD-9281 • SoundCore Space One Wireless
      </p>

<div className="mt-space-sm flex items-center gap-space-xs bg-surface-container-low px-space-sm py-1.5 rounded-lg text-on-surface">
<Icon name="location_on" className="text-primary text-[18px]" />
<div className="flex flex-col min-w-0 flex-1">
<span className="font-label-sm text-label-sm text-on-surface truncate font-semibold">Dennis Mukasa</span>
<span className="font-body-sm text-body-sm text-secondary truncate">Plot 14 Forest Mall, Lugogo Bypass</span>
</div>
</div>
</div>

<div className="mx-gutter mt-space-xs mb-space-md bg-surface-container p-space-sm rounded-lg flex items-start gap-space-sm">
<div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center flex-shrink-0 text-primary">
<Icon name="timer" className="text-[20px]" />
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Dispatch Protocol Verification</span>
<p className="font-body-sm text-body-sm text-secondary mt-0.5 leading-snug">
          Ensure you have attempted calling the buyer at least twice and waited at least 10 minutes at the drop-off location before declaring a failed delivery.
        </p>
</div>
</div>

<div className="mx-gutter mb-space-md flex flex-col bg-surface-container-low p-space-sm rounded-xl">
<div className="flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs min-w-0">
<div className="w-9 h-9 rounded-full bg-primary-fixed flex items-center justify-center text-primary flex-shrink-0">
<Icon name="phone_missed" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">Dennis Mukasa (+256 701 498 221)</span>
<span className="font-label-sm text-label-sm text-error flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-error animate-pulse"></span>
              Last called 6 mins ago • Unanswered
            </span>
</div>
</div>
<button className="h-10 px-3.5 bg-primary text-on-primary rounded-lg font-label-md text-label-md flex items-center gap-1 shadow-sm active:scale-95 transition-transform flex-shrink-0" type="button">
<Icon name="call" className="text-[18px]" />
<span>Redial</span>
</button>
</div>
</div>

<div className="px-gutter mb-space-md flex flex-col">
<div className="flex items-center justify-between mb-space-xs">
<label className="font-label-lg text-label-lg text-on-surface">Select Primary Reason</label>
<span className="font-label-sm text-label-sm text-error uppercase font-bold tracking-wider">Required</span>
</div>
<div className="flex flex-col gap-space-xs" id="failure-reasons-group">

<label className="reason-card flex items-center justify-between p-space-sm rounded-lg bg-surface-container cursor-pointer transition-colors shadow-sm">
<div className="flex items-center gap-space-sm">
<div className="w-5 h-5 rounded-full bg-primary-container flex items-center justify-center text-on-primary">
<Icon name="check" className="text-[14px]" />
</div>
<span className="font-label-md text-label-md text-on-surface">Buyer unreachable / phone switched off</span>
</div>
<input checked={true} className="sr-only" name="reason" type="radio" value="unreachable" />
</label>

<label className="reason-card flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low cursor-pointer transition-colors">
<div className="flex items-center gap-space-sm">
<div className="w-5 h-5 rounded-full bg-surface-container-high flex items-center justify-center text-transparent">
<Icon name="check" className="text-[14px]" />
</div>
<span className="font-label-md text-label-md text-on-surface">Buyer not at location &amp; no proxy available</span>
</div>
<input className="sr-only" name="reason" type="radio" value="not_at_location" />
</label>

<label className="reason-card flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low cursor-pointer transition-colors">
<div className="flex items-center gap-space-sm">
<div className="w-5 h-5 rounded-full bg-surface-container-high flex items-center justify-center text-transparent">
<Icon name="check" className="text-[14px]" />
</div>
<span className="font-label-md text-label-md text-on-surface">Buyer refused delivery / rejected item</span>
</div>
<input className="sr-only" name="reason" type="radio" value="rejected" />
</label>

<label className="reason-card flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low cursor-pointer transition-colors">
<div className="flex items-center gap-space-sm">
<div className="w-5 h-5 rounded-full bg-surface-container-high flex items-center justify-center text-transparent">
<Icon name="check" className="text-[14px]" />
</div>
<span className="font-label-md text-label-md text-on-surface">Incorrect or non-existent address / zone unreachable</span>
</div>
<input className="sr-only" name="reason" type="radio" value="incorrect_address" />
</label>

<label className="reason-card flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low cursor-pointer transition-colors">
<div className="flex items-center gap-space-sm">
<div className="w-5 h-5 rounded-full bg-surface-container-high flex items-center justify-center text-transparent">
<Icon name="check" className="text-[14px]" />
</div>
<span className="font-label-md text-label-md text-on-surface">Buyer cannot provide 6-digit delivery code</span>
</div>
<input className="sr-only" name="reason" type="radio" value="missing_otp" />
</label>

<label className="reason-card flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low cursor-pointer transition-colors">
<div className="flex items-center gap-space-sm">
<div className="w-5 h-5 rounded-full bg-surface-container-high flex items-center justify-center text-transparent">
<Icon name="check" className="text-[14px]" />
</div>
<span className="font-label-md text-label-md text-on-surface">Security refused access / gate locked</span>
</div>
<input className="sr-only" name="reason" type="radio" value="security_refusal" />
</label>
</div>
</div>

<div className="px-gutter mb-space-md flex flex-col">
<div className="flex items-center justify-between mb-space-xs">
<label className="font-label-lg text-label-lg text-on-surface">Arrival &amp; Gate Photo Proof</label>
<span className="font-label-sm text-label-sm text-secondary">GPS tagged</span>
</div>
<div className="flex items-center gap-space-sm bg-surface-container-low p-space-sm rounded-xl">
<div className="w-16 h-16 rounded-lg bg-surface-container-highest flex flex-col items-center justify-center text-secondary relative overflow-hidden flex-shrink-0">
<Icon name="photo_camera" className="text-[26px]" />
<span className="font-label-sm text-label-sm text-secondary">Optional</span>
</div>
<div className="flex flex-col flex-1 min-w-0">
<p className="font-body-sm text-body-sm text-secondary leading-snug">
            Attach photo of drop-off gate/reception as proof of arrival for swift supervisor audit.
          </p>
<div className="flex items-center gap-space-xs mt-space-xs">
<button className="h-9 px-3 bg-surface-container-high text-on-surface rounded-lg font-label-md text-label-md flex items-center gap-1 active:scale-95 transition-transform" type="button">
<Icon name="add_a_photo" className="text-[18px]" />
<span>Add Photo Proof</span>
</button>
</div>
</div>
</div>
</div>

<div className="px-gutter mb-space-md flex flex-col">
<div className="flex items-center justify-between mb-space-xs">
<label className="font-label-lg text-label-lg text-on-surface" htmlFor="rider-notes">Rider Incident Notes</label>
<span className="font-label-sm text-label-sm text-secondary" id="notes-counter">0/150</span>
</div>
<div className="w-full bg-surface-container-low rounded-xl p-space-sm focus-within:bg-surface-container-lowest focus-within:shadow-md transition-all">
<textarea className="w-full bg-transparent resize-none font-body-md text-body-md text-on-surface placeholder:text-secondary outline-none" id="rider-notes" maxLength={150} placeholder="Provide specific details for dispatch supervisor (e.g. Waited at reception for 15 mins, security guard confirmed recipient left office)..." rows={3}></textarea>
</div>
</div>

<div className="mx-gutter mb-space-lg bg-primary-fixed text-on-primary-fixed-variant p-space-sm rounded-xl flex items-start gap-space-sm shadow-sm">
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center flex-shrink-0 mt-0.5">
<Icon name="assignment_return" className="text-[18px]" />
</div>
<div className="flex flex-col text-on-surface">
<div className="flex items-center gap-1 font-label-md text-label-md font-bold">
<span>Return Protocol #RT-HUB-04</span>
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
<span className="text-primary">Strict SLA</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-snug">
          Package must be returned to <strong>William St Central Hub Station</strong> or Merchant within <strong>4 hours</strong>. Do not keep package overnight.
        </p>
</div>
</div>

<div className="px-gutter pb-space-lg flex flex-col gap-space-sm">

<button className="w-full h-14 min-h-[52px] bg-primary-container text-on-primary rounded-xl font-label-lg text-label-lg flex items-center justify-center gap-space-xs shadow-md active:scale-[0.98] transition-all" id="confirm-failed-btn" type="button">
<Icon name="assignment_late" className="text-[20px]" />
<span>Confirm Failed Delivery &amp; Route to Hub</span>
</button>

<button className="w-full h-12 bg-surface-container-high text-on-surface rounded-xl font-label-lg text-label-lg flex items-center justify-center gap-space-xs active:bg-surface-container-highest transition-colors" type="button">
<Icon name="keyboard_backspace" className="text-[20px]" />
<span>Cancel &amp; Continue Delivery Attempt</span>
</button>
</div>
</div>
</div>
</main>
    </div>
  );
};

export default FailedDeliveryModalSwiftcartRider;
