// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/hub/hub_pickup_handover_console_tablet_dark/code.html
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
      
      <main className="w-full pt-20 pb-24 bg-surface min-h-screen"><div className="flex flex-col w-full">

<div className="w-full bg-surface-container-high px-margin-desktop py-space-xs flex items-center justify-between shadow-sm">
<div className="flex items-center gap-space-md">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-escrow opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-escrow"></span>
</span>
<span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider">Station A Hardware Bus: Sub-GHz Handheld &amp; BT Peripherals Online</span>
</div>
<div className="flex items-center gap-space-lg text-on-surface-variant font-label-sm text-label-sm">
<span className="flex items-center gap-space-xs"><Icon name="battery_charging_full" className="text-[15px] text-tertiary" /> Tablet Battery: 94%</span>
<span className="flex items-center gap-space-xs"><Icon name="wifi" className="text-[15px] text-primary" /> Sub-Node Nakasero: 12ms</span>
</div>
</div>
<div className="w-full px-margin-desktop py-space-lg flex flex-col gap-space-lg">

<section className="grid grid-cols-1 md:grid-cols-4 gap-space-md w-full">

<div className="bg-surface-container-low rounded-xl p-space-md flex items-center justify-between shadow-sm">
<div className="flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm uppercase tracking-wide text-on-surface-variant">Today's Handed Over</span>
<div className="flex items-baseline gap-space-xs">
<span className="font-price-display text-price-display text-on-surface">84</span>
<span className="font-label-md text-label-md text-tertiary">Parcels</span>
</div>
<span className="font-body-sm text-body-sm text-tertiary flex items-center gap-0.5">
<Icon name="lock_open" className="text-[14px]" /> UGX 18,450,000 released
          </span>
</div>
<div className="w-11 h-11 rounded-lg bg-surface-container flex items-center justify-center">
<Icon name="task_alt" className="text-tertiary text-[24px]" />
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md flex items-center justify-between shadow-sm">
<div className="flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm uppercase tracking-wide text-on-surface-variant">Pending Customer Pickup</span>
<div className="flex items-baseline gap-space-xs">
<span className="font-price-display text-price-display text-on-surface">19</span>
<span className="font-label-md text-label-md text-primary">Parcels</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Ready for physical handover</span>
</div>
<div className="w-11 h-11 rounded-lg bg-surface-container flex items-center justify-center">
<Icon name="front_hand" className="text-primary text-[24px]" />
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md flex items-center justify-between shadow-sm">
<div className="flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm uppercase tracking-wide text-amber-warning">Overdue (&gt;48h SLA)</span>
<div className="flex items-baseline gap-space-xs">
<span className="font-price-display text-price-display text-amber-warning">3</span>
<span className="font-label-md text-label-md text-on-surface-variant">Parcels</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-0.5">
<Icon name="ring_volume" className="text-[14px] text-amber-warning" /> Automated call cycle active
          </span>
</div>
<div className="w-11 h-11 rounded-lg bg-surface-container flex items-center justify-center">
<Icon name="warning" className="text-amber-warning text-[24px]" />
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md flex items-center justify-between shadow-sm">
<div className="flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm uppercase tracking-wide text-on-surface-variant">Hardware Status</span>
<span className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-1.5">
            Zebra DS3678
            <span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
</span>
<span className="font-body-sm text-body-sm text-emerald-escrow flex items-center gap-1">
<Icon name="bluetooth_connected" className="text-[14px]" /> BT Gun Active (Station A)
          </span>
</div>
<div className="w-11 h-11 rounded-lg bg-surface-container flex items-center justify-center">
<Icon name="barcode_scanner" className="text-on-surface text-[24px]" />
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg w-full items-start">



<section className="lg:col-span-7 flex flex-col gap-space-md">

<div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col gap-space-md shadow-sm">
<div className="flex items-start justify-between flex-wrap gap-space-sm">
<div className="flex flex-col">
<div className="flex items-center gap-space-sm">
<span className="font-headline-md text-headline-md text-on-surface tracking-tight">Waybill #SC-9952</span>
<span className="px-2.5 py-0.5 rounded-full bg-emerald-escrow/20 text-emerald-escrow font-label-sm text-label-sm flex items-center gap-1 font-bold">
<Icon name="lock" className="text-[14px]" /> ESCROW FUNDED
                </span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Staged in Bay B4 • Bin Slot 02 • Linehaul Inbound at 09:15 EAT (SafeBoda #UG-KLA-492)
              </span>
</div>

<div className="px-space-md py-space-xs rounded-lg bg-surface-container-highest text-center flex flex-col justify-center shadow-inner">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Warehouse Bin</span>
<span className="font-headline-sm text-headline-sm text-primary font-extrabold tracking-wider">BAY B4-02</span>
</div>
</div>

<div className="bg-surface-container rounded-lg p-space-md flex items-center justify-between flex-wrap gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary shadow-sm">
<Icon name="verified" className="text-[24px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface">Sarah Namubiru</span>
<span className="px-1.5 py-0.5 rounded bg-mtn-yellow/20 text-mtn-yellow font-label-sm text-label-sm">MTN MoMo KYC OK</span>
</div>
<span className="font-code-display text-[14px] text-on-surface-variant tracking-wider">
                  +256 701 ••• 418 <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">(Masked Security Routing)</span>
</span>
</div>
</div>
<div className="flex flex-col items-end">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Release Value</span>
<span className="font-price-display text-price-display text-emerald-escrow font-extrabold whitespace-nowrap">UGX 248,500</span>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col gap-space-md shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<Icon name="pin" className="text-[20px]" />
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-[16px] text-on-surface">Buyer 6-Digit Handover PIN</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Customer reads OTP from SMS or SwiftCart App</span>
</div>
</div>
<span className="font-label-sm text-label-sm px-2.5 py-1 rounded bg-tertiary-container/30 text-tertiary font-bold flex items-center gap-1">
<Icon name="vpn_key" className="text-[14px]" /> Cryptographic Match
            </span>
</div>

<div className="flex items-center justify-between max-w-md mx-auto w-full gap-2 my-1">
<div className="w-12 h-14 rounded-lg bg-surface-container-high flex items-center justify-center font-headline-lg text-headline-lg text-tertiary shadow-inner">7</div>
<div className="w-12 h-14 rounded-lg bg-surface-container-high flex items-center justify-center font-headline-lg text-headline-lg text-tertiary shadow-inner">3</div>
<div className="w-12 h-14 rounded-lg bg-surface-container-high flex items-center justify-center font-headline-lg text-headline-lg text-tertiary shadow-inner">9</div>
<div className="w-12 h-14 rounded-lg bg-surface-container-high flex items-center justify-center font-headline-lg text-headline-lg text-tertiary shadow-inner">1</div>
<div className="w-12 h-14 rounded-lg bg-surface-container-high flex items-center justify-center font-headline-lg text-headline-lg text-tertiary shadow-inner">8</div>
<div className="w-12 h-14 rounded-lg bg-surface-container-high flex items-center justify-center font-headline-lg text-headline-lg text-tertiary shadow-inner">4</div>
</div>

<div className="bg-tertiary-container/20 rounded-lg p-space-sm flex items-center justify-between text-tertiary px-space-md">
<div className="flex items-center gap-2">
<Icon name="check_circle" className="text-[20px]" />
<span className="font-label-md text-label-md">Blind PIN Match Confirmed • Matches Escrow Secret Hash SHA256: 0x9f88...</span>
</div>
<span className="font-label-sm text-label-sm font-mono text-tertiary/80">LATENCY 18ms</span>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col gap-space-sm shadow-sm">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Physical Package Verification</span>
<div className="space-y-2 mt-1">

<label className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer transition-colors">
<div className="flex items-center gap-space-md">
<input checked={true} className="w-5 h-5 rounded accent-emerald-escrow cursor-pointer" type="checkbox" />
<span className="font-body-md text-body-md text-on-surface">Tamper Security Ribbon #SEAL-4419 intact &amp; verified</span>
</div>
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold px-2 py-0.5 rounded bg-emerald-escrow/10">PASSED</span>
</label>

<label className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer transition-colors">
<div className="flex items-center gap-space-md">
<input checked={true} className="w-5 h-5 rounded accent-emerald-escrow cursor-pointer" type="checkbox" />
<span className="font-body-md text-body-md text-on-surface">Customer physical inspection completed without packaging tear</span>
</div>
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold px-2 py-0.5 rounded bg-emerald-escrow/10">PASSED</span>
</label>

<label className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer transition-colors">
<div className="flex items-center gap-space-md">
<input checked={true} className="w-5 h-5 rounded accent-emerald-escrow cursor-pointer" type="checkbox" />
<span className="font-body-md text-body-md text-on-surface">Serial &amp; SKU matches manifest (SoundCore Space One ANC - Jet Black)</span>
</div>
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold px-2 py-0.5 rounded bg-emerald-escrow/10">PASSED</span>
</label>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col gap-space-sm shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="draw" className="text-[18px] text-primary" />
<span className="font-headline-sm text-[16px] text-on-surface">Customer Digital Signature</span>
</div>
<button className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary px-2.5 py-1 rounded bg-surface-container" id="clear-sig">
              Clear Signature
            </button>
</div>
<div className="relative w-full h-32 bg-surface-container rounded-lg overflow-hidden flex items-center justify-center shadow-inner cursor-crosshair">

<svg className="w-full h-full p-4" fill="none" stroke="currentColor" viewBox="0 0 500 120">
<path className="opacity-90" d="M 40 85 Q 80 20 120 70 T 180 50 T 230 90 T 310 30 Q 360 110 420 60" stroke="#ffb5a1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
<path className="opacity-80" d="M 120 70 Q 140 100 160 85" stroke="#ffb5a1" strokeLinecap="round" strokeWidth="2.5"></path>
</svg>
<div className="absolute bottom-2 left-4 text-on-surface-variant/60 font-body-sm text-[11px] pointer-events-none">
              Sign above with finger or tablet stylus
            </div>
<div className="absolute top-2 right-4 flex items-center gap-1 font-label-sm text-[10px] text-emerald-escrow bg-emerald-escrow/10 px-2 py-0.5 rounded">
<Icon name="done_all" className="text-[12px]" /> Captured
            </div>
</div>
</div>

<div className="flex flex-col gap-space-sm pt-2">

<button className="w-full h-14 rounded-2xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-white font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-[0_4px_18px_rgba(218,55,0,0.35)] hover:brightness-110 active:scale-[0.99] transition-all" id="btn-release">
<Icon name="verified" className="text-[24px]" />
<span className="whitespace-nowrap">Confirm Handover &amp; Release Escrow (UGX 248,500)</span>
</button>

<div className="grid grid-cols-2 gap-space-md w-full">
<button className="h-12 rounded-xl bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-surface-container-highest transition-colors">
<Icon name="receipt_long" className="text-[18px]" />
<span>Print Handover Slip</span>
</button>
<button className="h-12 rounded-xl bg-error-container/20 text-error font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-error-container/30 transition-colors">
<Icon name="report_problem" className="text-[18px]" />
<span>Discrepancy / Return</span>
</button>
</div>
</div>

<div className="p-space-md rounded-lg bg-surface-container-lowest flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<div className="flex items-center gap-space-sm">
<Icon name="fingerprint" className="text-primary text-[16px]" />
<span>Auth Agent: William Ssebaggala (#UG-8820)</span>
</div>
<div className="flex items-center gap-space-md">
<span>Core Sync: UG-OPS-04 (Kampala)</span>
<span className="text-tertiary flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow"></span> Encrypted 256-bit
            </span>
</div>
</div>
</section>
</div>
</div>
</div>
</main>
<footer className="fixed bottom-0 left-0 right-0 z-50 bg-surface-container-low/95 backdrop-blur-xl shadow-[0_-4px_16px_rgba(0,0,0,0.45)]"><div className="w-full h-20 px-margin-desktop flex items-center justify-around"><nav className="flex items-center justify-between w-full max-w-4xl mx-auto gap-space-sm" data-active-classes="bg-primary-container text-on-primary-container font-label-lg"><a aria-current="page" className="flex-1 flex flex-col items-center justify-center h-14 rounded-xl transition-all gap-1 bg-primary-container text-on-primary-container font-label-lg" data-path="pickup" href="#"><Icon name="qr_code_scanner" className="text-[22px]" /><span className="font-label-sm text-label-sm uppercase tracking-wide">Pickup</span></a><a className="flex-1 flex flex-col items-center justify-center h-14 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all gap-1" data-path="storage" href="#"><Icon name="inventory_2" className="text-[22px]" /><span className="font-label-sm text-label-sm uppercase tracking-wide">Storage</span></a><a className="flex-1 flex flex-col items-center justify-center h-14 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all gap-1" data-path="dispatch" href="#"><Icon name="local_shipping" className="text-[22px]" /><span className="font-label-sm text-label-sm uppercase tracking-wide">Dispatch</span></a><a className="flex-1 flex flex-col items-center justify-center h-14 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all gap-1" data-path="returns" href="#"><Icon name="assignment_return" className="text-[22px]" /><span className="font-label-sm text-label-sm uppercase tracking-wide">Returns</span></a><a className="flex-1 flex flex-col items-center justify-center h-14 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all gap-1" data-path="more" href="#"><Icon name="tune" className="text-[22px]" /><span className="font-label-sm text-label-sm uppercase tracking-wide">More</span></a></nav></div></footer>
    </div>
  );
};

export default Tablet;
