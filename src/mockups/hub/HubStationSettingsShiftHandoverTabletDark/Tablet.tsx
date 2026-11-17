// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/hub/hub_station_settings_shift_handover_tablet_dark/code.html
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

<div className="px-margin-desktop py-space-xs bg-surface-container flex items-center justify-between shadow-sm">
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-space-xs px-space-sm py-0.5 rounded-full bg-emerald-escrow/10 text-emerald-escrow">
<Icon name="cloud_done" className="text-[15px]" />
<span className="font-label-sm text-label-sm uppercase tracking-wider">Mesh Node Synchronized</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">42ms to Core Ledger Node • Last local SQLite push: 34s ago</span>
</div>
<div className="flex items-center gap-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Local Queue:</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-high text-on-surface font-code-display text-[11px]">0 PENDING DOCKETS</span>
</div>
</div>

<section className="px-margin-desktop py-space-md">
<div className="bg-surface-container-low rounded-xl p-space-md shadow-md flex flex-wrap lg:flex-nowrap items-center justify-between gap-space-md">

<div className="flex items-center gap-space-md min-w-[240px]">
<div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary shadow-inner">
<Icon name="warehouse" className="text-[26px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface truncate">Nakasero Central Bay</span>
<span className="px-space-xs py-0.5 rounded bg-primary-container text-on-primary-container font-label-sm text-label-sm uppercase">#UG-8820</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Gate Station A • Primary Cross-Dock &amp; Ingestion Point</span>
</div>
</div>

<div className="flex items-center gap-space-md bg-surface-container px-space-md py-space-sm rounded-lg">
<div className="w-2.5 h-2.5 rounded-full bg-amber-warning animate-pulse"></div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-label-md text-label-md text-on-surface">Morning Shift Cycle</span>
<span className="text-on-surface-variant font-label-sm text-label-sm">• 06:00 - 15:00 EAT</span>
</div>
<span className="font-body-sm text-body-sm text-primary">William Ssebaggala <span className="text-on-surface-variant font-label-sm text-label-sm">(#STAFF-882)</span></span>
</div>
</div>

<div className="flex items-center gap-space-lg bg-surface-container px-space-md py-space-sm rounded-lg">
<div className="flex items-center gap-space-xs">
<Icon name="print" className="text-emerald-escrow text-[18px]" />
<Icon name="barcode_scanner" className="text-emerald-escrow text-[18px]" />
<Icon name="scale" className="text-emerald-escrow text-[18px]" />
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-emerald-escrow">3/3 Hardware Online</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">BT BLE + USB Serial</span>
</div>
</div>

<div className="flex items-center gap-space-sm bg-surface-container px-space-md py-space-sm rounded-lg">
<Icon name="cell_tower" className="text-mtn-yellow text-[20px]" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">MTN Uganda Relays</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">LTE 4G Mesh • Encrypted</span>
</div>
</div>
</div>
</section>

<section className="px-margin-desktop pb-space-xl">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">



<main className="lg:col-span-8 flex flex-col gap-space-md w-full">

<div className="bg-surface-container-low rounded-xl p-space-lg shadow-xl relative">

<div className="flex flex-col md:flex-row md:items-center justify-between pb-space-md gap-space-md">
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-headline-md text-headline-md text-on-surface">Shift holding Handover</span>
<span className="px-space-sm py-0.5 rounded-full bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm uppercase flex items-center gap-1">
<Icon name="verified_user" className="text-[13px]" /> Payment Sealed
                </span>
</div>
<span className="font-body-md text-body-md text-on-surface-variant mt-0.5">Formal ledger transfer for morning operational cycle (24 Oct 2024)</span>
</div>
<div className="flex items-center gap-space-sm bg-surface-container px-space-md py-space-sm rounded-lg shrink-0">
<div className="flex flex-col text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Docket Code</span>
<span className="font-code-display text-code-display text-primary tracking-normal">DOC-8820-M</span>
</div>
<Icon name="qr_code_2" className="text-primary text-[28px]" />
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter bg-surface-container p-space-md rounded-xl my-space-sm">

<div className="flex items-center gap-space-md">
<div className="relative">
<img className="w-14 h-14 rounded-xl object-cover bg-surface-container-high" data-alt="Close-up portrait of Ugandan male logistics agent in branded orange and dark navy work uniform looking confident under warehouse lighting" src="/images/c606dd01dd6ea788.webp" />
<span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-surface-dark flex items-center justify-center">
<Icon name="logout" className="text-amber-warning text-[14px]" />
</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Outgoing Lead Agent</span>
<span className="font-label-lg text-label-lg text-on-surface truncate">William Ssebaggala</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Badge: <span className="font-code-display text-[12px]">UG-STAFF-882</span></span>
</div>
</div>

<div className="flex items-center gap-space-md">
<div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-surface-container-high text-primary shrink-0 -ml-6 mr-2 shadow">
<Icon name="arrow_forward" className="text-[18px]" />
</div>
<div className="relative">
<img className="w-14 h-14 rounded-xl object-cover bg-surface-container-high" data-alt="Portrait of Ugandan female operations supervisor wearing logistics high-visibility vest in smart modern transit hub in Kampala" src="/images/1437de1419a621de.webp" />
<span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-surface-dark flex items-center justify-center">
<Icon name="login" className="text-emerald-escrow text-[14px]" />
</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Incoming Lead Agent</span>
<span className="font-label-lg text-label-lg text-on-surface truncate">Grace Akello</span>
<span className="font-body-sm text-body-sm text-primary">Afternoon Commander <span className="text-on-surface-variant font-code-display text-[12px]">(#STAFF-890)</span></span>
</div>
</div>
</div>

<div className="mt-space-md">
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-lg text-label-lg text-on-surface uppercase tracking-wide flex items-center gap-space-xs">
<Icon name="inventory" className="text-primary text-[18px]" />
                holding &amp; Physical Reconciliation
              </span>
<span className="font-label-sm text-label-sm text-emerald-escrow flex items-center gap-1">
<Icon name="check_circle" className="text-[14px]" /> 4 of 4 Verified
              </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm">

<div className="bg-surface-container p-space-md rounded-xl flex items-start gap-space-md">
<div className="w-8 h-8 rounded-lg bg-emerald-escrow/20 text-emerald-escrow flex items-center justify-center shrink-0 mt-0.5">
<Icon name="shelves" className="text-[20px]" />
</div>
<div className="flex flex-col flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface">Physical Storage Shelves</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-code-display">142 / 142 PKG</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">142 verified on active physical bins. Zero discrepancies, zero untracked items.</span>
</div>
</div>

<div className="bg-surface-container p-space-md rounded-xl flex items-start gap-space-md">
<div className="w-8 h-8 rounded-lg bg-emerald-escrow/20 text-emerald-escrow flex items-center justify-center shrink-0 mt-0.5">
<Icon name="local_mall" className="text-[20px]" />
</div>
<div className="flex flex-col flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface">Courier Bag Seal Audit</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-code-display">8 OUT / 4 IN</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">8 tamper-sealed outbound boda bags dispatched; 4 linehaul manifests checked.</span>
</div>
</div>

<div className="bg-surface-container p-space-md rounded-xl flex items-start gap-space-md">
<div className="w-8 h-8 rounded-lg bg-emerald-escrow/20 text-emerald-escrow flex items-center justify-center shrink-0 mt-0.5">
<Icon name="lock" className="text-[20px]" />
</div>
<div className="flex flex-col flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface">High-Value Quarantine Cage</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-code-display">4 SEALED</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Cage Q-02 verified with double mechanical seal #UG-C-9912.</span>
</div>
</div>

<div className="bg-surface-container p-space-md rounded-xl flex items-start gap-space-md">
<div className="w-8 h-8 rounded-lg bg-emerald-escrow/20 text-emerald-escrow flex items-center justify-center shrink-0 mt-0.5">
<Icon name="dock" className="text-[20px]" />
</div>
<div className="flex flex-col flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface">Hardware Dock Return</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-code-display">SLOT 01-A</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Zebra Scanner Gun #04 returned at 94% battery charge.</span>
</div>
</div>
</div>
</div>

<div className="mt-space-md bg-surface-container p-space-md rounded-xl">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest text-mtn-yellow flex items-center justify-center shrink-0">
<Icon name="payments" className="text-[24px]" />
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Over-The-Counter Cash &amp; MoMo Drawer</span>
<div className="flex items-center gap-space-sm">
<span className="font-price-display text-price-display text-on-surface whitespace-nowrap">UGX 0</span>
<span className="px-space-xs py-0.5 rounded bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm uppercase">100% Cashless Enforced</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-md bg-surface-container-lowest px-space-md py-space-sm rounded-lg">
<div className="flex flex-col text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant">MTN / Airtel Payment Sync</span>
<span className="font-label-md text-label-md text-emerald-escrow whitespace-nowrap">UGX 8,420,500 Locked</span>
</div>
<Icon name="account_balance_wallet" className="text-emerald-escrow text-[22px]" />
</div>
</div>
</div>

<div className="mt-space-md bg-surface-container-high rounded-xl p-space-md shadow-inner">
<div className="flex items-center justify-between mb-space-sm">
<div className="flex items-center gap-space-xs">
<Icon name="passkey" className="text-primary text-[20px]" />
<span className="font-label-lg text-label-lg text-on-surface">Incoming Agent Mutual Authorization</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">two-step admin Handover Protocol</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-space-md items-center">

<div className="md:col-span-6 flex flex-col gap-space-xs">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase">Incoming Custodian</label>
<div className="flex items-center justify-between px-space-md py-space-sm bg-surface-container-lowest rounded-lg cursor-pointer">
<div className="flex items-center gap-space-sm">
<span className="w-2.5 h-2.5 rounded-full bg-emerald-escrow"></span>
<span className="font-label-md text-label-md text-on-surface">Grace Akello (Afternoon Lead)</span>
</div>
<Icon name="expand_more" className="text-on-surface-variant text-[18px]" />
</div>
</div>

<div className="md:col-span-6 flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase">Grace's 6-Digit Staff PIN</label>
<span className="font-label-sm text-label-sm text-primary">Keypad Active</span>
</div>
<div className="flex items-center justify-between gap-space-xs bg-surface-container-lowest p-space-xs rounded-lg">
<div className="w-10 h-10 rounded bg-surface-container-highest flex items-center justify-center font-code-display text-[20px] text-on-surface font-extrabold">•</div>
<div className="w-10 h-10 rounded bg-surface-container-highest flex items-center justify-center font-code-display text-[20px] text-on-surface font-extrabold">•</div>
<div className="w-10 h-10 rounded bg-surface-container-highest flex items-center justify-center font-code-display text-[20px] text-on-surface font-extrabold">•</div>
<div className="w-10 h-10 rounded bg-surface-container-highest flex items-center justify-center font-code-display text-[20px] text-on-surface font-extrabold">•</div>
<div className="w-10 h-10 rounded bg-surface-container-highest flex items-center justify-center font-code-display text-[20px] text-on-surface font-extrabold">•</div>
<div className="w-10 h-10 rounded bg-surface-container-highest flex items-center justify-center font-code-display text-[20px] text-on-surface font-extrabold text-primary animate-pulse">|</div>
</div>
</div>
</div>

<label className="mt-space-md flex items-start gap-space-sm cursor-pointer select-none">
<input checked={true} className="mt-1 w-5 h-5 rounded bg-surface-container-highest accent-primary-container text-on-primary-container cursor-pointer" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface">
                Both agents confirm that physical parcel counts, courier transit bags, and high-value quarantine seals precisely match digital system inventory logs.
              </span>
</label>
</div>

<div className="mt-space-lg flex flex-col gap-space-sm">
<button className="w-full h-[54px] rounded-2xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-lg text-label-lg flex items-center justify-center gap-space-sm shadow-[0_4px_18px_rgba(218,55,0,0.35)] active:scale-[0.98] transition-all" id="handoverButton">
<Icon name="lock_reset" className="text-[22px]" />
<span>Execute Shift Handover &amp; Lock Morning Docket</span>
</button>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm mt-space-xs">
<button className="h-12 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center gap-space-xs hover:bg-surface-container-high transition-all">
<Icon name="receipt_long" className="text-[18px]" />
<span>Print Physical Slip</span>
</button>
<button className="h-12 rounded-xl bg-surface-container text-amber-warning font-label-md text-label-md flex items-center justify-center gap-space-xs hover:bg-surface-container-high transition-all">
<Icon name="report_problem" className="text-[18px]" />
<span>Log Discrepancy</span>
</button>
<button className="h-12 rounded-xl bg-danger-penalty/10 text-danger-penalty font-label-md text-label-md flex items-center justify-center gap-space-xs hover:bg-danger-penalty/20 transition-all">
<Icon name="power_settings_new" className="text-[18px]" />
<span>Exit Terminal</span>
</button>
</div>
</div>

<div className="mt-space-lg pt-space-sm flex flex-col sm:flex-row items-center justify-between gap-space-xs text-on-surface-variant">
<div className="flex items-center gap-space-xs">
<Icon name="gavel" className="text-[14px]" />
<span className="font-body-sm text-body-sm">Certified under SwiftCart Central Logistics Operations Code §14 (Uganda)</span>
</div>
<span className="font-label-sm text-label-sm font-code-display text-on-surface-variant">SHA-256: 9F8B2C481A</span>
</div>
</div>
</main>
</div>
</section>


</div></main>
<footer className="fixed bottom-0 left-0 right-0 z-50 bg-surface-container-low/95 backdrop-blur-xl shadow-[0_-4px_16px_rgba(0,0,0,0.45)]"><div className="w-full h-20 px-margin-desktop flex items-center justify-around"><nav className="flex items-center justify-between w-full max-w-4xl mx-auto gap-space-sm" data-active-classes="bg-primary-container text-on-primary-container font-label-lg"><a className="flex-1 flex flex-col items-center justify-center h-14 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all gap-1" data-path="pickup" href="#"><Icon name="qr_code_scanner" className="text-[22px]" /><span className="font-label-sm text-label-sm uppercase tracking-wide">Pickup</span></a><a className="flex-1 flex flex-col items-center justify-center h-14 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all gap-1" data-path="storage" href="#"><Icon name="inventory_2" className="text-[22px]" /><span className="font-label-sm text-label-sm uppercase tracking-wide">Storage</span></a><a className="flex-1 flex flex-col items-center justify-center h-14 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all gap-1" data-path="dispatch" href="#"><Icon name="local_shipping" className="text-[22px]" /><span className="font-label-sm text-label-sm uppercase tracking-wide">Dispatch</span></a><a className="flex-1 flex flex-col items-center justify-center h-14 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all gap-1" data-path="returns" href="#"><Icon name="assignment_return" className="text-[22px]" /><span className="font-label-sm text-label-sm uppercase tracking-wide">Returns</span></a><a aria-current="page" className="flex-1 flex flex-col items-center justify-center h-14 rounded-xl transition-all gap-1 bg-primary-container text-on-primary-container font-label-lg" data-path="more" href="#"><Icon name="tune" className="text-[22px]" /><span className="font-label-sm text-label-sm uppercase tracking-wide">More</span></a></nav></div></footer>
    </div>
  );
};

export default Tablet;
