// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/admin/admin_order_detail_oversight_light/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface AdminOrderDetailOversightLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const AdminOrderDetailOversightLight: React.FC<AdminOrderDetailOversightLightProps> = (props) => {
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
      
      <header className="fixed top-0 inset-x-0 z-50 bg-surface-container-lowest/95 backdrop-blur-xl pt-safe shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 px-margin flex items-center justify-between"><button type="button" className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 mr-2" aria-label="Toggle Theme" title="Toggle Theme" onClick={() => toggleTheme()}>{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}</button><div className="flex items-center gap-space-xs"><button aria-label="Go back" className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container-low transition-colors" type="button"><Icon name="chevron_left" className="text-[24px]" /></button><div className="flex items-center gap-space-xs pl-space-xs"><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/swiftcart-logo-white.png" /><div className="flex flex-col"><span className="font-label-sm text-label-sm uppercase tracking-wider text-primary">Uganda Ops</span><span className="font-headline-sm text-headline-sm leading-tight text-on-surface font-bold">Merchant Compliance</span></div></div></div><div className="flex items-center gap-space-sm"><div aria-label="User avatar" className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex flex-col relative w-full pt-16 pb-safe bg-surface min-h-screen"><div className="flex flex-col w-full px-margin pb-space-xl space-y-space-md">

<div className="flex items-center justify-between px-space-md py-space-xs bg-surface-container-lowest rounded-xl shadow-sm">
<div className="flex items-center gap-space-xs">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-container opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-tertiary"></span>
</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface">Telematics Active</span>
<span className="text-secondary font-body-sm text-[11px]">• Kampala Central Corridor</span>
</div>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-tertiary font-bold bg-tertiary-fixed/30 px-2 py-0.5 rounded-full">
<Icon name="sync" className="text-[14px]" />
<span>0.4s</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-sm">
<div className="flex items-start justify-between">
<div className="space-y-0.5">
<div className="flex items-center gap-1.5">
<span className="font-label-sm text-label-sm uppercase bg-surface-container text-on-surface px-2 py-0.5 rounded">Level 2 Ops</span>
<span className="font-body-sm text-body-sm text-secondary">Sarah K. (ADM-104)</span>
</div>
<div className="flex items-baseline gap-2 pt-1">
<span className="font-label-sm text-label-sm text-secondary uppercase">Order Target</span>
<span className="font-headline-md text-headline-md text-on-surface font-extrabold tracking-tight">#SC-9488</span>
</div>
</div>
<div className="flex flex-col items-end">
<span className="font-label-sm text-label-sm text-secondary">Priority Routing</span>
<span className="font-label-md text-label-md text-primary font-bold flex items-center gap-1">
<Icon name="bolt" className="text-[16px]" /> Flash Express
        </span>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md flex items-center justify-between shadow-sm">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-xl bg-tertiary-container/20 flex items-center justify-center text-tertiary">
<Icon name="lock" className="text-[22px]" />
</div>
<div>
<div className="flex items-center gap-1.5">
<span className="font-label-sm text-label-sm text-tertiary font-extrabold uppercase tracking-wide">In Transit • Escrow Vault</span>
<span className="bg-tertiary text-on-tertiary font-label-sm text-[9px] px-1.5 py-0.2 rounded-full uppercase">Locked</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Secured MTN MoMo Node Gateway</p>
</div>
</div>
<div className="text-right">
<div className="font-label-sm text-label-sm text-secondary uppercase">Vault Collateral</div>
<div className="font-label-lg text-label-lg font-extrabold text-on-surface">UGX 253,500</div>
</div>
</div>
</div>

<div className="space-y-space-xs">
<div className="flex items-center justify-between px-1">
<span className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wider flex items-center gap-1">
<Icon name="groups_3" className="text-[16px] text-primary" />
        Operational Entities (3 Parties)
      </span>
<span className="font-label-sm text-label-sm text-tertiary font-semibold flex items-center gap-0.5">
<Icon name="verified_user" className="text-[14px]" /> Tri-Party Verified
      </span>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-xs">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-fixed font-bold text-label-md">
            DM
          </div>
<div>
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Dennis M.</span>
<span className="bg-surface-container-high text-on-surface font-label-sm text-label-sm px-1.5 py-0.5 rounded">Tier 1 KYC</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Nakasero / Lugogo Hub Destination</p>
</div>
</div>
<a aria-label="Call Buyer" className="w-9 h-9 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface hover:bg-surface-container transition-transform active:scale-95 shadow-sm" href="tel:0700000123">
<Icon name="phone" className="text-[18px]" />
</a>
</div>
<div className="flex items-center justify-between pt-1 font-body-sm text-body-sm bg-surface-bright p-2 rounded-lg">
<span className="text-secondary font-label-sm text-label-sm uppercase">Masked Contact</span>
<span className="font-mono text-on-surface font-semibold tracking-wider text-[13px]">07••••••123</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-xs">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center text-primary">
<Icon name="storefront" className="text-[20px]" />
</div>
<div>
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg font-bold text-on-surface">SoundCore Uganda Official</span>
<span className="bg-tertiary-fixed text-on-tertiary-container font-label-sm text-label-sm px-1.5 py-0.5 rounded flex items-center gap-0.5">
<Icon name="verified" className="text-[12px]" /> Official
              </span>
</div>
<p className="font-body-sm text-body-sm text-secondary">#SLR-0412 • Pioneer Mall CBD Ground Fl</p>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-1 font-body-sm text-body-sm bg-surface-bright p-2 rounded-lg">
<span className="text-secondary font-label-sm text-label-sm uppercase">Payable Holdback</span>
<span className="font-label-md text-label-md font-bold text-on-surface">UGX 248,500</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-xs">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-xl bg-primary-fixed flex items-center justify-center text-primary">
<Icon name="two_wheeler" className="text-[20px]" />
</div>
<div>
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Kizito Brian</span>
<span className="bg-primary-container text-on-primary font-label-sm text-label-sm px-1.5 py-0.5 rounded font-bold uppercase">En Route</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">#RDR-UG-4082 • Nakasero Stage Squad</p>
</div>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-tertiary bg-surface-container-low px-1.5 py-0.5 rounded font-bold">100% Insured</span>
</div>
</div>
<div className="flex items-center justify-between pt-1 font-body-sm text-body-sm bg-surface-bright p-2 rounded-lg">
<span className="text-secondary font-label-sm text-label-sm uppercase">Asset &amp; Reg</span>
<span className="font-label-md text-label-md font-bold text-on-surface">Bajaj Boxer <span className="bg-surface-container px-1 py-0.5 rounded font-mono text-[11px]">UEF 842X</span></span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<Icon name="radar" className="text-[18px] text-primary" />
<span className="font-label-md text-label-md text-on-surface font-bold uppercase">Corridor Telemetry</span>
</div>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-on-surface bg-surface-container-low px-2 py-0.5 rounded font-bold">Speed: 28 km/h</span>
<span className="font-label-sm text-label-sm text-primary font-extrabold bg-primary-fixed px-2 py-0.5 rounded">ETA 8m</span>
</div>
</div>

<div className="relative w-full h-44 rounded-xl overflow-hidden shadow-sm" data-alt="Light colored clean cartographic map showing Acacia Avenue and Lugogo Bypass in Kampala, with an overlay pinpoint marker indicating active courier location. Clean minimal roads, subtle green urban parks." data-location="Acacia Mall, Kampala, Uganda" style={{"backgroundImage":"url('/images/1caecfe8308ddb64.webp')"}}>
<div className="absolute inset-0 bg-gradient-to-t from-on-surface/50 via-transparent to-transparent pointer-events-none"></div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
<div className="relative flex items-center justify-center">
<span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-primary opacity-60"></span>
<div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg">
<Icon name="navigation" className="text-[18px]" />
</div>
</div>
<div className="mt-1 bg-surface-container-lowest text-on-surface px-2 py-0.5 rounded-full shadow-md font-label-sm text-[10px] font-extrabold tracking-wide flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Acacia Ave Node
        </div>
</div>

<div className="absolute bottom-2 left-2 right-2 flex items-center justify-between bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm">
<span className="font-body-sm text-[11px] text-on-surface font-semibold flex items-center gap-1">
<Icon name="pin_drop" className="text-[14px] text-secondary" /> Near Acacia Mall Bypass
        </span>
<span className="font-label-sm text-label-sm text-tertiary font-bold flex items-center gap-0.5">
<Icon name="satellite_alt" className="text-[13px]" /> GPS Accuracy 2m
        </span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<Icon name="account_balance_wallet" className="text-[18px] text-primary" />
<span className="font-label-md text-label-md text-on-surface font-bold uppercase">Payment Settlement Rail</span>
</div>
<span className="font-label-sm text-label-sm bg-surface-container-high px-2 py-0.5 rounded text-on-surface font-mono">MTN MoMo #TXN-884920</span>
</div>

<div className="space-y-space-xs font-body-sm text-body-sm pt-1">
<div className="flex items-center justify-between text-secondary">
<span>Escrow Total Ingested</span>
<span className="font-label-md text-label-md text-on-surface font-bold">UGX 253,500</span>
</div>
<div className="flex items-center justify-between text-secondary">
<span className="flex items-center gap-1">
          SwiftCart Platform Fee (5%)
          <Icon name="info" className="text-[13px] text-secondary" />
</span>
<span className="font-semibold text-error">-UGX 12,425</span>
</div>
<div className="flex items-center justify-between text-secondary">
<span>Boda Logistics Disburse</span>
<span className="font-semibold text-error">-UGX 5,000</span>
</div>
<div className="p-2.5 rounded-xl bg-surface-container-low flex items-center justify-between">
<div>
<div className="font-label-md text-label-md text-on-surface font-extrabold">Net Merchant Payable</div>
<div className="font-body-sm text-[11px] text-secondary">Auto-disburses upon Buyer OTP Match</div>
</div>
<div className="font-label-lg text-label-lg font-black text-tertiary">
          UGX 236,075
        </div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
<Icon name="cell_tower" className="text-[20px]" />
</div>
<div>
<div className="font-label-md text-label-md font-bold text-on-surface">Auto-Dispatch Notifications</div>
<p className="font-body-sm text-body-sm text-secondary">SMS &amp; Webhook broadcasts on stage exit</p>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked={true} className="sr-only peer" id="auto-notify-toggle" type="checkbox" />
<div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-tertiary"></div>
</label>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<Icon name="history_toggle_off" className="text-[18px] text-primary" />
<span className="font-label-md text-label-md text-on-surface font-bold uppercase">Dispatch Chronology</span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-mono">Live Sync</span>
</div>

<div className="relative pl-6 space-y-4 pt-2">

<div className="absolute left-2.5 top-3 bottom-2 w-0.5 bg-surface-container"></div>

<div className="relative flex items-start gap-space-xs">
<div className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-primary flex items-center justify-center ring-4 ring-primary-fixed"></div>
<div>
<div className="flex items-baseline gap-2">
<span className="font-label-sm text-label-sm font-bold text-primary font-mono">15:28</span>
<span className="font-label-md text-label-md font-bold text-on-surface">Acacia Corridor Active</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">In transit heading toward destination. Live GPS beacon broadcasting.</p>
</div>
</div>

<div className="relative flex items-start gap-space-xs">
<div className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-tertiary"></div>
<div>
<div className="flex items-baseline gap-2">
<span className="font-label-sm text-label-sm font-bold text-secondary font-mono">15:10</span>
<span className="font-label-md text-label-md font-bold text-on-surface">Package Handover Verified</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Handed to Kizito Brian at Pioneer Mall via NFC Driver Handshake.</p>
</div>
</div>

<div className="relative flex items-start gap-space-xs">
<div className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-tertiary"></div>
<div>
<div className="flex items-baseline gap-2">
<span className="font-label-sm text-label-sm font-bold text-secondary font-mono">14:25</span>
<span className="font-label-md text-label-md font-bold text-on-surface">Escrow Ingestion Clear</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">MoMo payment locked into Escrow Vault. MTN Webhook 200 OK.</p>
</div>
</div>

<div className="relative flex items-start gap-space-xs">
<div className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-secondary"></div>
<div>
<div className="flex items-baseline gap-2">
<span className="font-label-sm text-label-sm font-bold text-secondary font-mono">14:24</span>
<span className="font-label-md text-label-md font-bold text-on-surface">Order Placed</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Submitted by buyer Dennis M. via SwiftCart Client iOS.</p>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<Icon name="edit_note" className="text-[18px] text-primary" />
<span className="font-label-md text-label-md text-on-surface font-bold uppercase">Internal Admin Ledger</span>
</div>
<span className="font-label-sm text-label-sm text-secondary">1 Logged Note</span>
</div>

<div className="bg-surface-bright p-space-sm rounded-lg space-y-1">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm font-bold text-primary">Sarah K. (Ops Staff)</span>
<span className="font-body-sm text-[11px] text-secondary font-mono">15:15 EAT</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
        Boda driver confirmed high-value packaging sealed with tamper evident tape. Client alerted to verify seal before giving courier release OTP.
      </p>
</div>

<div className="space-y-space-xs pt-1">
<textarea className="w-full bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-lg p-2.5 focus:outline-none focus:bg-surface-container placeholder:text-secondary" id="admin-observation-input" placeholder="Record operational observations, geofence notes, merchant dispute memo..." rows={2}></textarea>
<div className="flex justify-end">
<button className="bg-surface-container-high hover:bg-surface-container text-on-surface font-label-md text-label-md py-2 px-3 rounded-lg flex items-center gap-1.5 active:scale-95 transition-transform" id="submit-admin-note" type="button">
<Icon name="add_circle" className="text-[16px]" />
          Add Internal Note
        </button>
</div>
</div>
</div>

<div className="space-y-space-xs pt-1">
<span className="font-label-md text-label-md text-on-surface font-bold uppercase px-1">Intervention Controls</span>

<button className="w-full bg-surface-container-lowest hover:bg-surface-container-low p-space-md rounded-xl flex items-center justify-between shadow-sm active:scale-[0.99] transition-all" type="button">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant">
<Icon name="flag" className="text-[20px]" />
</div>
<div className="text-left">
<div className="font-label-lg text-label-lg font-bold text-on-surface">Flag for Compliance Review</div>
<p className="font-body-sm text-body-sm text-secondary">Route dossier to Kampala Fraud &amp; Risk Desk</p>
</div>
</div>
<Icon name="chevron_right" className="text-secondary text-[20px]" />
</button>

<button className="w-full bg-surface-container-lowest hover:bg-surface-container-low p-space-md rounded-xl flex items-center justify-between shadow-sm active:scale-[0.99] transition-all" type="button">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-lg bg-secondary-container flex items-center justify-center text-secondary">
<Icon name="swap_horiz" className="text-[20px]" />
</div>
<div className="text-left">
<div className="font-label-lg text-label-lg font-bold text-on-surface">Reassign Boda Courier</div>
<p className="font-body-sm text-body-sm text-secondary">Dispatch fallback rider from Nakasero pool</p>
</div>
</div>
<Icon name="chevron_right" className="text-secondary text-[20px]" />
</button>

<button className="w-full bg-error text-on-error py-3.5 px-space-md rounded-xl font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all" id="halt-vault-btn" type="button">
<Icon name="gavel" className="text-[20px]" />
      Emergency Dispatch Hold (HALT VAULT)
    </button>
</div>
</div>
</main>
    </div>
  );
};

export default AdminOrderDetailOversightLight;
