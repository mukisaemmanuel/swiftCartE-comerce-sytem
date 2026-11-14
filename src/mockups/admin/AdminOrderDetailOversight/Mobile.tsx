// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/admin/admin_order_detail_oversight/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface AdminOrderDetailOversightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const AdminOrderDetailOversight: React.FC<AdminOrderDetailOversightProps> = (props) => {
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
      
      <header className="fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl pt-safe shadow-[0_1px_8px_rgba(0,0,0,0.25)]"><div className="h-16 px-space-sm flex items-center justify-between gap-space-sm"><button type="button" className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 mr-2" aria-label="Toggle Theme" title="Toggle Theme" onClick={() => toggleTheme()}>{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}</button><div className="flex items-center gap-space-xs min-w-0"><button aria-label="Go back" className="w-11 h-11 flex items-center justify-center rounded-xl bg-surface-container-low text-on-surface hover:text-primary transition-colors flex-shrink-0"><Icon name="arrow_back_ios_new" className="text-[20px]" /></button><img alt="SwiftCart" className="h-7 w-auto object-contain flex-shrink-0" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col min-w-0 pl-1"><span className="font-label-sm text-label-sm text-primary uppercase tracking-widest truncate">SwiftCart Ops</span><h1 className="font-headline-sm text-headline-sm text-on-surface truncate tracking-tight">Admin Order Detail</h1></div></div><div className="flex items-center gap-space-sm flex-shrink-0"><div className="flex items-center gap-1 px-space-sm py-1 rounded-full bg-emerald-escrow/10 text-emerald-escrow"><Icon name="verified_user" className="text-[16px]" /><span className="font-label-sm text-label-sm font-bold">SECURE</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex flex-col relative w-full pt-16 bg-surface pb-safe"><div className="flex flex-col w-full pb-10 space-y-4 px-margin">

<div className="w-full bg-surface-container-high text-on-surface rounded-xl p-space-sm flex items-center justify-between shadow-sm">
<div className="flex items-center space-x-2">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-escrow opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-escrow"></span>
</span>
<span className="font-label-sm text-label-sm text-emerald-escrow uppercase tracking-wider">Telematics Active</span>
<span className="text-on-surface-variant font-body-sm text-body-sm">• Kampala Central Corridor</span>
</div>
<div className="flex items-center space-x-1 bg-surface-container-low px-2 py-0.5 rounded-full">
<Icon name="sync" className="text-[13px] text-primary" />
<span className="font-label-sm text-label-sm text-primary">0.4s sync</span>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md flex items-center justify-between shadow-md">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-headline-sm text-headline-sm shadow-inner">
        SK
      </div>
<div className="flex flex-col">
<div className="flex items-center space-x-1.5">
<span className="font-label-lg text-label-lg text-on-surface">Sarah K.</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-primary-container/20 text-primary-fixed-dim">ADM-104</span>
</div>
<div className="flex items-center space-x-1 text-on-surface-variant">
<Icon name="shield_person" className="text-[14px] text-amber-warning" />
<span className="font-label-sm text-label-sm">Level 2 Oversight Privilege</span>
</div>
</div>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-outline uppercase block">Order Target</span>
<span className="font-headline-sm text-headline-sm text-primary-fixed">#SC-9488</span>
</div>
</div>

<div className="bg-gradient-to-r from-emerald-escrow/20 via-surface-container-low to-emerald-escrow/10 rounded-xl p-space-md shadow-lg flex flex-col space-y-2">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<div className="w-7 h-7 rounded-lg bg-emerald-escrow/20 flex items-center justify-center text-emerald-escrow">
<Icon name="lock" className="text-[18px]" />
</div>
<div>
<span className="font-label-lg text-label-lg text-emerald-escrow tracking-wide uppercase">In Transit • Escrow Vault Protected</span>
<span className="block font-body-sm text-body-sm text-on-surface-variant">Cryptographic Buyer Code Handover Required</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-emerald-escrow text-on-tertiary font-label-sm text-label-sm">LOCKED</span>
</div>
<div className="bg-surface-container-lowest/80 rounded-lg p-space-sm flex items-center justify-between">
<span className="font-body-md text-body-md text-on-surface-variant">Total Vault Collateral</span>
<span className="font-price-display text-price-display text-emerald-escrow">UGX 253,500</span>
</div>
</div>

<div className="flex flex-col space-y-2.5">
<div className="flex items-center justify-between px-1">
<span className="font-label-md text-label-md text-outline uppercase tracking-wider">Operational Entities Dossier</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">3 Verified Parties</span>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md shadow-sm space-y-2.5">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 rounded-lg bg-surface-container-high text-primary flex items-center justify-center">
<Icon name="person" className="text-[18px]" />
</div>
<div>
<span className="font-label-lg text-label-lg text-on-surface">Dennis M.</span>
<span className="block font-body-sm text-body-sm text-on-surface-variant">Buyer (Account Tier 1)</span>
</div>
</div>
<div className="flex items-center space-x-1 bg-emerald-escrow/10 text-emerald-escrow px-2 py-0.5 rounded-full">
<Icon name="verified" className="text-[13px]" />
<span className="font-label-sm text-label-sm">KYC Approved</span>
</div>
</div>
<div className="grid grid-cols-2 gap-space-xs pt-1">
<div className="bg-surface-container rounded-lg p-space-xs px-space-sm">
<span className="font-label-sm text-label-sm text-outline block">Destination Geo</span>
<span className="font-body-md text-body-md text-on-surface font-medium truncate block">Nakasero / Lugogo Hub</span>
</div>
<div className="bg-surface-container rounded-lg p-space-xs px-space-sm flex flex-col justify-center">
<span className="font-label-sm text-label-sm text-outline block">Masked Comms Relay</span>
<div className="flex items-center justify-between">
<span className="font-body-md text-body-md text-secondary font-medium tracking-wide">07••••••123</span>
<button className="w-6 h-6 rounded-md bg-secondary/10 text-secondary flex items-center justify-center" title="Proxy Call Relay">
<Icon name="call" className="text-[14px]" />
</button>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md shadow-sm space-y-2.5">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 rounded-lg bg-surface-container-high text-action-gradient-start flex items-center justify-center">
<Icon name="storefront" className="text-[18px]" />
</div>
<div>
<div className="flex items-center space-x-1.5">
<span className="font-label-lg text-label-lg text-on-surface">SoundCore Uganda Official</span>
<span className="font-label-sm text-label-sm text-primary-fixed-dim">#SLR-0412</span>
</div>
<span className="block font-body-sm text-body-sm text-on-surface-variant">Pioneer Mall, Kampala CBD</span>
</div>
</div>
<div className="flex items-center space-x-1 bg-emerald-escrow/10 text-emerald-escrow px-2 py-0.5 rounded-full">
<Icon name="verified" className="text-[13px]" />
<span className="font-label-sm text-label-sm">Merchant</span>
</div>
</div>
<div className="bg-surface-container rounded-lg p-space-sm flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">Escrow Payable Holdback</span>
<span className="font-body-lg text-body-lg text-on-surface font-bold">UGX 248,500</span>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md shadow-sm space-y-2.5">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 rounded-lg bg-surface-container-high text-amber-warning flex items-center justify-center">
<Icon name="two_wheeler" className="text-[18px]" />
</div>
<div>
<div className="flex items-center space-x-1.5">
<span className="font-label-lg text-label-lg text-on-surface">Kizito Brian</span>
<span className="font-label-sm text-label-sm text-amber-warning">#RDR-UG-4082</span>
</div>
<span className="block font-body-sm text-body-sm text-on-surface-variant">Nakasero Stage Squad</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm">Active En Route</span>
</div>
<div className="grid grid-cols-2 gap-space-xs">
<div className="bg-surface-container rounded-lg p-space-xs px-space-sm">
<span className="font-label-sm text-label-sm text-outline block">Fleet Hardware</span>
<span className="font-body-md text-body-md text-on-surface font-medium truncate block">Bajaj Boxer • UEF 842X</span>
</div>
<div className="bg-surface-container rounded-lg p-space-xs px-space-sm">
<span className="font-label-sm text-label-sm text-outline block">Transit Liability</span>
<span className="font-body-md text-body-md text-emerald-escrow font-medium block">Underwritten 100%</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md shadow-sm space-y-2">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-outline uppercase tracking-wider">Courier GPS Track</span>
<span className="font-label-sm text-label-sm text-emerald-escrow flex items-center space-x-1">
<Icon name="satellite_alt" className="text-[12px]" />
<span>Acacia Mall Node</span>
</span>
</div>
<div className="w-full h-32 bg-surface-container-high rounded-lg relative overflow-hidden flex items-end p-2.5 shadow-inner" data-location="Acacia Mall, Kampala, Uganda" style={{"backgroundImage":"url('/images/03aaea9b7a847e91.webp')"}}>
<div className="bg-surface-dark/85 backdrop-blur-md rounded-lg p-2 w-full flex items-center justify-between">
<div className="flex items-center space-x-2">
<Icon name="near_me" className="text-action-gradient-start text-[18px]" />
<span className="font-body-sm text-body-sm text-on-surface font-semibold truncate">Acacia Ave Corridor (Speed: 28 km/h)</span>
</div>
<span className="font-label-sm text-label-sm text-primary-fixed-dim">ETA 8m</span>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md shadow-sm space-y-3">
<div className="flex items-center justify-between pb-1">
<div className="flex items-center space-x-2">
<Icon name="payments" className="text-mtn-yellow text-[20px]" />
<span className="font-headline-sm text-headline-sm text-on-surface">Payment Rail Breakdown</span>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-mtn-yellow/15 text-mtn-yellow font-bold">MTN MoMo Escrow</span>
</div>
<div className="bg-surface-container rounded-lg p-space-sm space-y-2">
<div className="flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">Channel Settlement Ref</span>
<span className="font-code-display text-label-md text-secondary tracking-normal">#TXN-884920</span>
</div>
<div className="flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">Escrow Total Ingested</span>
<span className="font-body-md text-body-md text-on-surface font-bold">UGX 253,500</span>
</div>
<div className="flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">Platform Fee (5%)</span>
<span className="font-body-md text-body-md text-error font-medium">- UGX 12,425</span>
</div>
<div className="flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">Boda Logistics Disburse</span>
<span className="font-body-md text-body-md text-on-surface font-medium">- UGX 5,000</span>
</div>
<div className="h-px bg-surface-container-highest my-1"></div>
<div className="flex items-center justify-between pt-0.5">
<div>
<span className="font-label-md text-label-md text-emerald-escrow block font-bold">Net Merchant Payable</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Disburses on OTP match</span>
</div>
<span className="font-price-display text-price-display text-emerald-escrow">UGX 236,075</span>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md shadow-sm space-y-3">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-outline uppercase tracking-wider">Dispatch Telemetry Timeline</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">EAT (UTC+3)</span>
</div>
<div className="relative pl-6 space-y-3.5 before:content-[''] before:absolute before:left-2.5 before:top-1.5 before:bottom-1.5 before:w-0.5 before:bg-surface-container-highest">

<div className="relative flex items-start space-x-3">
<span className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-emerald-escrow"></span>
<div className="flex-1 bg-surface-container p-space-xs px-space-sm rounded-lg">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold">14:24</span>
<span className="font-label-sm text-label-sm text-outline">Device ID: APP-AND-09</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface block mt-0.5">Order placed by buyer Dennis M. via SwiftCart Client</span>
</div>
</div>

<div className="relative flex items-start space-x-3">
<span className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-emerald-escrow"></span>
<div className="flex-1 bg-surface-container p-space-xs px-space-sm rounded-lg">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold">14:25</span>
<span className="font-label-sm text-label-sm text-mtn-yellow font-bold">MTN Webhook OK</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface block mt-0.5">MoMo payment cleared into SwiftCart Escrow Vault directly</span>
</div>
</div>

<div className="relative flex items-start space-x-3">
<span className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-emerald-escrow"></span>
<div className="flex-1 bg-surface-container p-space-xs px-space-sm rounded-lg">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold">15:10</span>
<span className="font-label-sm text-label-sm text-outline">NFC Handshake</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface block mt-0.5">Package handed to courier Kizito Brian at Pioneer Mall</span>
</div>
</div>

<div className="relative flex items-start space-x-3">
<span className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-action-gradient-start ring-2 ring-primary-container/40"></span>
<div className="flex-1 bg-surface-container-high p-space-xs px-space-sm rounded-lg">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-primary font-bold">15:28</span>
<span className="font-label-sm text-label-sm text-primary-fixed-dim">LIVE RADAR</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface block mt-0.5">In transit near Acacia Mall corridor heading toward destination</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md shadow-sm space-y-2">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<Icon name="notifications_active" className="text-primary text-[20px]" />
<span className="font-label-lg text-label-lg text-on-surface">Auto-Dispatch Notifications</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked={true} className="sr-only peer" id="notify-toggle" type="checkbox" />
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-escrow"></div>
</label>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant block">Push alerts will trigger to Sarah K. (#ADM-104) upon courier OTP clearance or geofence deviation.</span>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md shadow-sm space-y-3">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-outline uppercase tracking-wider">Internal Administrative Ledger</span>
<span className="font-label-sm text-label-sm text-secondary">Encrypted Audit Logs</span>
</div>

<div className="space-y-2" id="notes-list">
<div className="bg-surface-container rounded-lg p-space-xs px-space-sm text-left">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-primary-fixed-dim">Sarah K. (Ops Staff)</span>
<span className="font-label-sm text-label-sm text-outline">15:15</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface mt-0.5">Boda driver confirmed high-value packaging sealed with tamper evident tape.</p>
</div>
</div>

<div className="space-y-2 pt-1">
<textarea className="w-full bg-surface-container-high rounded-xl p-space-sm font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none shadow-inner resize-none" id="admin-note-input" placeholder="Record operational observations, geofence notes..." rows={2}></textarea>
<button className="w-full h-11 rounded-xl bg-surface-container-highest hover:bg-surface-bright text-on-surface font-label-md text-label-md flex items-center justify-center space-x-1 transition-colors" id="add-note-btn">
<Icon name="edit_note" className="text-[16px]" />
<span>Add Internal Note</span>
</button>
</div>
<div className="h-px bg-surface-container my-2"></div>

<span className="font-label-md text-label-md text-outline uppercase tracking-wider block">Admin Interventions</span>
<div className="grid grid-cols-1 gap-2">

<button className="h-12 rounded-xl bg-amber-warning/15 hover:bg-amber-warning/25 text-amber-warning font-label-md text-label-md flex items-center justify-between px-space-md transition-all active:scale-[0.99]" id="btn-flag-review">
<div className="flex items-center space-x-2">
<Icon name="policy" className="text-[18px]" />
<span>Flag for Compliance Review</span>
</div>
<Icon name="chevron_right" className="text-[16px]" />
</button>

<button className="h-12 rounded-xl bg-surface-container-high hover:bg-surface-bright text-secondary font-label-md text-label-md flex items-center justify-between px-space-md transition-all active:scale-[0.99]" id="btn-reassign">
<div className="flex items-center space-x-2">
<Icon name="swap_driving_apps_wheel" className="text-[18px]" />
<span>Reassign Boda Courier</span>
</div>
<Icon name="arrow_forward" className="text-[16px]" />
</button>

<button className="h-12 rounded-xl bg-error-container/40 hover:bg-error-container/60 text-error font-label-md text-label-md flex items-center justify-between px-space-md transition-all active:scale-[0.99]" id="btn-dispatch-hold">
<div className="flex items-center space-x-2">
<Icon name="gavel" className="text-[18px]" />
<span>Emergency Dispatch Hold</span>
</div>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-error/20 text-error font-bold uppercase">HALT VAULT</span>
</button>
</div>
</div>

<div className="hidden fixed bottom-6 inset-x-6 z-50 bg-surface-container-highest p-space-sm rounded-xl shadow-2xl flex items-center justify-between transition-all" id="action-toast">
<div className="flex items-center space-x-2">
<Icon name="info" className="text-primary text-[20px]" />
<span className="font-label-md text-label-md text-on-surface" id="toast-msg">Action registered in ledger</span>
</div>
<span className="font-label-sm text-label-sm text-outline">SECURE</span>
</div>
</div>
</main>
    </div>
  );
};

export default AdminOrderDetailOversight;
