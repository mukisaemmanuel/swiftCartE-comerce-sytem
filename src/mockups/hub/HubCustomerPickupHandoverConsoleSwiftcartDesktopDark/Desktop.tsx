// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/hub/hub_customer_pickup_handover_console_swiftcart_desktop_dark/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface DesktopProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Desktop: React.FC<DesktopProps> = (props) => {
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
      
      <div className="pl-0"><main className="w-full pt-16 bg-surface min-h-screen px-gutter-desktop py-space-xl"><div className="flex flex-col w-full gap-space-lg">

<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md bg-surface-container p-space-lg rounded-xl shadow-md relative overflow-hidden">
<div className="absolute -right-12 -top-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="flex flex-col gap-space-xs z-10">
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<span className="inline-block w-2 h-2 rounded-full bg-emerald-escrow"></span>
<span>William Street Front Counter</span>
<span>•</span>
<span>Station Desk #01 &amp; #02</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Customer Pickup Counter &amp; Handover Station</h1>
<p className="font-body-md text-body-md text-on-surface-variant">6-Digit Delivery OTP &amp; Physical ID Handshake Ledger Control</p>
</div>

<div className="flex flex-wrap items-center gap-space-sm z-10">
<div className="flex items-center gap-space-xs px-space-md py-1.5 rounded-lg bg-surface-container-high">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-escrow opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-escrow"></span>
</span>
<span className="font-label-md text-label-md text-on-surface">Front Counter Online</span>
</div>
<div className="flex items-center gap-space-xs px-space-md py-1.5 rounded-lg bg-surface-container-high">
<Icon name="cell_tower" className="text-[16px] text-tertiary" />
<span className="font-label-md text-label-md text-on-surface">SMS Resend Rail Active</span>
</div>
<div className="flex items-center gap-space-xs px-space-md py-1.5 rounded-lg bg-surface-container-high">
<Icon name="badge" className="text-[16px] text-primary" />
<span className="font-label-md text-label-md text-on-surface">2 Pick Counters Staffed</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">

<div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between gap-space-md shadow-sm relative overflow-hidden group hover:bg-surface-container transition-all">
<div className="flex items-start justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Today Station Pickups</span>
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<Icon name="task_alt" className="text-[20px]" />
</div>
</div>
<div className="flex flex-col gap-space-xs">
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-on-surface">184</span>
<span className="font-label-md text-label-md text-tertiary font-bold">Completed</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span>88% daily allocated quota</span>
<span className="text-on-surface font-semibold">209 Total</span>
</div>
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden mt-1">
<div className="bg-gradient-to-r from-action-gradient-start to-action-gradient-end h-full rounded-full w-[88%]"></div>
</div>
</div>
</div>

<div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between gap-space-md shadow-sm relative overflow-hidden group hover:bg-surface-container transition-all">
<div className="flex items-start justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Awaiting Collection</span>
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
<Icon name="shelves" className="text-[20px]" />
</div>
</div>
<div className="flex flex-col gap-space-xs">
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-on-surface">42</span>
<span className="font-label-md text-label-md text-on-surface-variant">Parcels</span>
</div>
<span className="font-body-sm text-body-sm text-secondary font-medium">Ready in front shelving Bays P1-P4</span>
<div className="flex items-center gap-space-xs mt-1 text-on-surface-variant font-label-sm text-label-sm">
<span className="px-1.5 py-0.5 rounded bg-surface-container-high">P1: 12</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-high">P2: 15</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-high">P3: 9</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-high">P4: 6</span>
</div>
</div>
</div>

<div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between gap-space-md shadow-sm relative overflow-hidden group hover:bg-surface-container transition-all">
<div className="flex items-start justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Avg Counter Handover</span>
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-tertiary">
<Icon name="timer" className="text-[20px]" />
</div>
</div>
<div className="flex flex-col gap-space-xs">
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-tertiary">1.8</span>
<span className="font-headline-sm text-headline-sm text-tertiary">mins</span>
</div>
<div className="flex items-center gap-space-xs text-body-sm font-body-sm text-on-surface-variant">
<span className="text-tertiary font-bold flex items-center">
<Icon name="arrow_downward" className="text-[16px]" /> 28s
          </span>
<span>vs target (&lt;2.5 mins)</span>
</div>
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden mt-1">
<div className="bg-emerald-escrow h-full rounded-full w-[72%]"></div>
</div>
</div>
</div>

<div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between gap-space-md shadow-sm relative overflow-hidden group hover:bg-surface-container transition-all">
<div className="flex items-start justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Paid to seller Counter</span>
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-emerald-escrow">
<Icon name="payments" className="text-[20px]" />
</div>
</div>
<div className="flex flex-col gap-space-xs">
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold tracking-tight whitespace-nowrap">UGX 12,640,000</span>
</div>
<div className="flex items-center gap-space-xs text-body-sm font-body-sm text-emerald-escrow font-semibold">
<Icon name="bolt" className="text-[16px]" />
<span>Instant SMS disbursement triggered</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">41 merchant wallets credited</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">

<div className="lg:col-span-7 flex flex-col gap-space-md">

<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-sm shadow-sm">
<div className="flex items-center gap-space-sm bg-surface-container-lowest px-space-md py-3 rounded-lg border-0 focus-within:ring-2 focus-within:ring-primary-container">
<Icon name="search" className="text-primary text-[22px]" />
<input className="bg-transparent text-on-surface placeholder:text-on-surface-variant/60 font-body-md text-body-md w-full outline-none" placeholder="Enter 6-digit Delivery Code (e.g. 849-201), Phone Number (077...), or Tracking Waybill..." type="text" value="849-201" />
<button className="bg-surface-container-high hover:bg-surface-bright text-on-surface px-space-md py-1.5 rounded font-label-sm text-label-sm flex items-center gap-1 transition-colors">
<Icon name="qr_code_scanner" className="text-[16px]" />
<span>Scan Gun</span>
</button>
</div>

<div className="flex items-center justify-between gap-space-sm pt-space-xs">
<div className="flex flex-wrap items-center gap-space-xs">
<button className="px-space-md py-1.5 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md font-bold flex items-center gap-1.5 shadow-sm">
<span>Arrived at Counter</span>
<span className="w-5 h-5 rounded-full bg-on-primary-container/20 text-on-primary-container text-label-sm flex items-center justify-center font-extrabold">3</span>
</button>
<button className="px-space-md py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-md text-label-md flex items-center gap-1.5 transition-colors">
<span>Ready for Collection</span>
<span className="w-5 h-5 rounded-full bg-surface-container-highest text-on-surface text-label-sm flex items-center justify-center font-bold">39</span>
</button>
<button className="px-space-md py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-md text-label-md flex items-center gap-1.5 transition-colors">
<span className="text-amber-warning flex items-center gap-1">
<Icon name="timer" className="text-[14px]" />
                Expiring Today
              </span>
<span className="w-5 h-5 rounded-full bg-amber-warning/20 text-amber-warning text-label-sm flex items-center justify-center font-bold">8</span>
</button>
</div>
<button className="text-on-surface-variant hover:text-on-surface flex items-center gap-0.5 text-label-sm font-label-sm">
<Icon name="sort" className="text-[18px]" />
<span>FIFO</span>
</button>
</div>
</div>

<div className="flex flex-col gap-space-md">

<div className="bg-surface-container p-space-lg rounded-xl shadow-md flex flex-col gap-space-md relative overflow-hidden transition-all ring-2 ring-primary-container/80">
<div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-action-gradient-start to-action-gradient-end"></div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pl-space-xs">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary relative">
<Icon name="person" className="text-[28px]" />
<span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-escrow flex items-center justify-center">
<Icon name="check" className="text-surface-container-lowest text-[10px] font-bold" />
</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface">Grace Nakato</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-tertiary/15 text-tertiary font-bold uppercase tracking-wider">Present at Desk #01</span>
</div>
<div className="flex items-center gap-space-sm text-on-surface-variant font-body-sm text-body-sm">
<span className="font-mono text-on-surface">+256 701 ••• 582</span>
<span>•</span>
<span>2 Packages ready</span>
</div>
</div>
</div>
<div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">payment protected</span>
<span className="font-price-display text-price-display text-emerald-escrow whitespace-nowrap">UGX 325,000</span>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pl-space-xs">
<div className="bg-surface-container-lowest p-space-md rounded-lg flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="px-2 py-1 bg-surface-container-high rounded text-tertiary font-code-display text-[13px] font-extrabold">
                  BIN P2-08
                </div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">SoundCore Space One</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">#SC-98241</span>
</div>
</div>
<Icon name="inventory" className="text-emerald-escrow text-[18px]" />
</div>
<div className="bg-surface-container-lowest p-space-md rounded-lg flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="px-2 py-1 bg-surface-container-high rounded text-tertiary font-code-display text-[13px] font-extrabold">
                  BIN P2-09
                </div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">Anker PowerBank 20k mAh</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">#SC-98218</span>
</div>
</div>
<Icon name="inventory" className="text-emerald-escrow text-[18px]" />
</div>
</div>
<div className="flex items-center justify-between pt-space-xs pl-space-xs text-on-surface-variant font-label-sm text-label-sm">
<div className="flex items-center gap-space-xs text-emerald-escrow">
<Icon name="verified" className="text-[16px]" />
<span>Matched OTP input: 849-201</span>
</div>
<span className="text-primary font-bold uppercase tracking-wider flex items-center gap-1">
              Active Console Target
              <Icon name="arrow_forward" className="text-[16px]" />
</span>
</div>
</div>

<div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md hover:bg-surface-container transition-all">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface-variant">
<Icon name="person" className="text-[28px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface">Ronald Katende</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-bold">Staged Desk #02</span>
</div>
<div className="flex items-center gap-space-sm text-on-surface-variant font-body-sm text-body-sm">
<span className="font-mono text-on-surface">+256 701 ••• 419</span>
<span>•</span>
<span>1 Package</span>
</div>
</div>
</div>
<div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Payment Hold</span>
<span className="font-price-display text-price-display text-on-surface whitespace-nowrap">UGX 195,000</span>
</div>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-lg flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="px-2 py-1 bg-surface-container-high rounded text-secondary font-code-display text-[13px] font-bold">
                BIN P1-14
              </div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Oraimo Smart Watch ES-2</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">#SC-97904 • Code Ready via SMS</span>
</div>
</div>
<button className="px-space-md py-1 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-sm text-label-sm transition-colors">
              Load Console
            </button>
</div>
</div>

<div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md hover:bg-surface-container transition-all">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-amber-warning">
<Icon name="schedule" className="text-[28px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface">Sarah Nabirye</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-amber-warning/15 text-amber-warning font-bold flex items-center gap-1">
<Icon name="alarm" className="text-[12px]" />
                    Expires 18:00 EAT
                  </span>
</div>
<div className="flex items-center gap-space-sm text-on-surface-variant font-body-sm text-body-sm">
<span className="font-mono text-on-surface">+256 788 ••• 190</span>
<span>•</span>
<span>1 Package</span>
</div>
</div>
</div>
<div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Payment Hold</span>
<span className="font-price-display text-price-display text-on-surface whitespace-nowrap">UGX 95,000</span>
</div>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-lg flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="px-2 py-1 bg-surface-container-high rounded text-amber-warning font-code-display text-[13px] font-bold">
                BIN P3-02
              </div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Victoria Secret Body Mist &amp; Perfume Set</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">#SC-96841 • Final Day in Bay</span>
</div>
</div>
<button className="px-space-md py-1 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-sm text-label-sm transition-colors">
              Load Console
            </button>
</div>
</div>
</div>

<div className="flex items-center justify-between p-space-md rounded-xl bg-surface-container-low text-on-surface-variant font-body-sm text-body-sm">
<div className="flex items-center gap-space-xs">
<Icon name="check_circle" className="text-[18px] text-tertiary" />
<span>Station inventory synced with Kampala Main reserve 44 seconds ago.</span>
</div>
<button className="text-primary hover:underline font-label-sm text-label-sm uppercase font-bold">View Overdue (11)</button>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-space-md">
<div className="bg-surface-container p-space-lg rounded-xl shadow-xl flex flex-col gap-space-lg relative overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>

<div className="flex items-start justify-between pb-space-md border-b-0">
<div className="flex items-center gap-space-md">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-action-gradient-start to-action-gradient-end flex items-center justify-center text-on-primary-container shadow-md">
<span className="font-headline-md text-headline-md">GN</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Grace Nakato</h2>
<Icon name="verified" className="text-emerald-escrow text-[18px]" />
</div>
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold uppercase tracking-wider">Verified Buyer Tier (Level 3)</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">14 previous orders • 100% pickup rate</span>
</div>
</div>
<div className="flex flex-col items-end">
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-mono">DESK #01</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Ready for handoff</span>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Handover Manifest (2 Items)</span>
<span className="font-label-sm text-label-sm text-tertiary flex items-center gap-1 font-bold">
<Icon name="done_all" className="text-[16px]" /> All Barcodes Verified
            </span>
</div>

<div className="bg-surface-container-low p-space-md rounded-lg flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary flex-shrink-0">
<Icon name="headphones" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-label-md text-label-md text-on-surface truncate">SoundCore Space One</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container-highest text-tertiary font-mono text-[10px] font-bold">P2-08</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">#SC-98241 • Sealed Retail Box</span>
</div>
</div>
<div className="flex flex-col items-end flex-shrink-0">
<span className="font-label-md text-label-md text-on-surface font-bold whitespace-nowrap">UGX 180,000</span>
<span className="font-label-sm text-label-sm text-emerald-escrow flex items-center gap-0.5">
<Icon name="check_circle" className="text-[14px]" /> Scanned
              </span>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-lg flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary flex-shrink-0">
<Icon name="battery_charging_full" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-label-md text-label-md text-on-surface truncate">Anker PowerBank 20k mAh</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container-highest text-tertiary font-mono text-[10px] font-bold">P2-09</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">#SC-98218 • Anti-Tamper Sealed</span>
</div>
</div>
<div className="flex flex-col items-end flex-shrink-0">
<span className="font-label-md text-label-md text-on-surface font-bold whitespace-nowrap">UGX 145,000</span>
<span className="font-label-sm text-label-sm text-emerald-escrow flex items-center gap-0.5">
<Icon name="check_circle" className="text-[14px]" /> Scanned
              </span>
</div>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant flex items-center gap-1">
<Icon name="pin" className="text-[16px] text-primary" />
              Step 1: 6-Digit Delivery OTP Validation
            </span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold flex items-center gap-1">
<Icon name="shield" className="text-[14px]" /> LEDGER MATCH
            </span>
</div>

<div className="flex items-center justify-between gap-space-xs">
<div className="w-11 h-14 rounded-lg bg-surface-container-lowest flex items-center justify-center font-code-display text-[22px] font-extrabold text-tertiary shadow-inner">
              8
            </div>
<div className="w-11 h-14 rounded-lg bg-surface-container-lowest flex items-center justify-center font-code-display text-[22px] font-extrabold text-tertiary shadow-inner">
              4
            </div>
<div className="w-11 h-14 rounded-lg bg-surface-container-lowest flex items-center justify-center font-code-display text-[22px] font-extrabold text-tertiary shadow-inner">
              9
            </div>
<div className="w-2 h-0.5 bg-surface-container-highest"></div>
<div className="w-11 h-14 rounded-lg bg-surface-container-lowest flex items-center justify-center font-code-display text-[22px] font-extrabold text-tertiary shadow-inner">
              2
            </div>
<div className="w-11 h-14 rounded-lg bg-surface-container-lowest flex items-center justify-center font-code-display text-[22px] font-extrabold text-tertiary shadow-inner">
              0
            </div>
<div className="w-11 h-14 rounded-lg bg-surface-container-lowest flex items-center justify-center font-code-display text-[22px] font-extrabold text-tertiary shadow-inner">
              1
            </div>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-tertiary flex items-center gap-1">
<Icon name="check_circle" className="text-[16px]" /> Validated with Kampala Primary Node
            </span>
<button className="text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm uppercase underline">Resend SMS</button>
</div>

<div className="pt-space-xs flex flex-col gap-space-xs border-t-0">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant flex items-center gap-1">
<Icon name="fact_check" className="text-[16px] text-primary" />
              Step 2: Physical Handshake Check
            </span>
<label className="flex items-center gap-space-sm p-2 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors cursor-pointer">
<input checked={true} className="w-4 h-4 rounded bg-surface-container-lowest accent-primary cursor-pointer" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface select-none">Customer Physical ID / Mobile Number Checked</span>
</label>
<label className="flex items-center gap-space-sm p-2 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors cursor-pointer">
<input checked={true} className="w-4 h-4 rounded bg-surface-container-lowest accent-primary cursor-pointer" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface select-none">Parcel Tamper Tape Inspected in Customer Presence</span>
</label>
<label className="flex items-center gap-space-sm p-2 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors cursor-pointer">
<input checked={true} className="w-4 h-4 rounded bg-surface-container-lowest accent-primary cursor-pointer" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface select-none">Customer acknowledges outer packaging intact</span>
</label>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
<span>CUSTOMER SIGNATURE PREVIEW</span>
<button className="text-primary hover:underline">Clear / Redo</button>
</div>

<div className="h-20 bg-surface-container-lowest rounded-xl flex items-center justify-center relative p-space-md overflow-hidden">
<svg className="w-full h-full text-secondary opacity-90" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 300 60">
<path d="M 20 40 Q 60 10 90 35 T 140 25 T 180 45 Q 220 5 240 30 T 280 20"></path>
<path d="M 120 45 L 260 45" opacity="0.4" strokeDasharray="4 4" strokeWidth="1.5"></path>
</svg>
<span className="absolute bottom-1 right-3 font-code-display text-[10px] text-on-surface-variant">DIGITALLY CAPTURED @ 14:38:42</span>
</div>

<div className="flex items-center justify-between px-space-xs text-on-surface-variant font-body-sm text-body-sm">
<div className="flex items-center gap-space-xs">
<Icon name="support_agent" className="text-[16px] text-secondary" />
<span>Counter Agent: <strong className="text-on-surface font-semibold">Denis Ssenkumba</strong></span>
</div>
<span className="font-mono text-label-sm bg-surface-container-high px-1.5 py-0.5 rounded text-on-surface-variant">#SC-KLA-092</span>
</div>
</div>

<div className="flex flex-col gap-space-sm pt-space-xs">

<button className="w-full h-[54px] rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end hover:brightness-110 active:scale-[0.99] text-on-primary-container font-label-lg text-label-lg flex items-center justify-center gap-space-sm shadow-[0_4px_20px_rgba(218,55,0,0.35)] transition-all">
<Icon name="lock_open" className="text-[22px]" />
<span>Release Goods &amp; Confirm Seller Payout</span>
</button>

<div className="grid grid-cols-2 gap-space-sm">
<button className="h-[46px] rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-md text-label-md flex items-center justify-center gap-1.5 transition-colors">
<Icon name="receipt_long" className="text-[18px]" />
<span>Print Handover (4x6)</span>
</button>
<button className="h-[46px] rounded-lg bg-danger-penalty/10 hover:bg-danger-penalty/20 text-danger-penalty font-label-md text-label-md flex items-center justify-center gap-1.5 transition-colors">
<Icon name="cancel" className="text-[18px]" />
<span>Customer Rejected</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div></main></div>
    </div>
  );
};

export default Desktop;
