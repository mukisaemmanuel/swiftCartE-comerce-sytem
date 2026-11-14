// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/seller/seller_applications_kyc_verification_tablet/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface TabletProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Tablet: React.FC<TabletProps> = (props) => {
  const onNavigate = props.onNavigate;
  
  const { theme, toggleTheme } = useDashboardTheme();
  void theme;
  void toggleTheme;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const assetBase = '';
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className={`font-body-md text-body-md antialiased pt-safe pb-safe min-h-screen flex flex-col relative w-full overflow-x-hidden ${theme === 'dark' ? 'bg-[#0f172a] text-[#f9fafb]' : 'bg-[#f8fafc] text-[#0f172a]'}`}>
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-slate-900 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setDrawerOpen(false)}
        />
      )}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.45)]"><div className="h-28 w-full px-margin-desktop flex flex-col justify-between pt-3 pb-2"><div className="flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-md min-w-0"><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col"><div className="flex items-center gap-space-sm"><span className="font-headline-sm text-headline-sm text-on-surface tracking-tight whitespace-nowrap">SwiftCart Central Command</span><span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm"><span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow animate-pulse"></span>Super Admin • Enclave Verified</span></div></div></div><div className="flex items-center gap-space-lg"><div className="flex items-center gap-space-sm bg-surface-container-low px-3 py-1.5 rounded-lg"><div className="flex flex-col text-right"><span className="font-label-sm text-label-sm text-on-surface-variant uppercase">BoU Escrow</span><span className="font-label-md text-label-md text-tertiary">UGX 198.4M</span></div><div className="w-px h-6 bg-surface-container-highest"></div><div className="flex flex-col text-right"><span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Active Nodes</span><span className="font-label-md text-label-md text-secondary">142</span></div></div><div className="flex items-center gap-space-sm"><button aria-label="Theme Switcher" className="p-2 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors" type="button" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-[20px]" /></button><button aria-label="Notifications" className="relative p-2 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[20px]" /><span className="absolute -top-1 -right-1 flex h-4 min-w-[16px] px-1 items-center justify-center rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm">4</span></button></div><div className="flex items-center gap-space-sm pl-space-xs"><div className="flex flex-col text-right"><span className="font-label-md text-label-md text-on-surface whitespace-nowrap">Admin Officer Namubiru</span><span className="font-label-sm text-label-sm text-on-surface-variant">Superadmin Node</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></div><nav className="flex items-center gap-space-xs overflow-x-auto py-1 scrollbar-none" data-active-classes="bg-primary-container text-on-primary-container font-bold rounded-lg"><a className="px-3 py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="command-overview" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}>Command Overview</a><a aria-current="page" className="px-3 py-1.5 transition-colors whitespace-nowrap bg-primary-container text-on-primary-container font-bold rounded-lg" data-path="kyc-applications" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}>KYC Applications (12)</a><a className="px-3 py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="sellers-directory" href="#" onClick={() => alertToast('Action triggered')}>Sellers Directory</a><a className="px-3 py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="escrow-and-disputes" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}>Escrow &amp; Disputes (5)</a><a className="px-3 py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="orders-oversight" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}>Orders Oversight</a><a className="px-3 py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="payout-queue" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}>Payout Queue</a><a className="px-3 py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="system-and-health" href="#" onClick={() => alertToast('Action triggered')}>System &amp; Health</a></nav></div></header>
<main className="w-full pt-28 bg-surface min-h-screen"><div className="flex flex-col w-full">

<div className="px-margin-desktop py-2 bg-surface-container-lowest flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="inline-flex w-2 h-2 rounded-full bg-emerald-escrow animate-ping"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Live Gov Gateway: URSB Direct-Node #04 • NIRA Uganda v2.4 Active</span>
</div>
<div className="flex items-center gap-space-md font-label-sm text-label-sm text-on-surface-variant">
<span className="text-tertiary">API Latency: 42ms</span>
<span className="text-secondary">•</span>
<span>12 Unreviewed Applications</span>
</div>
</div>

<div className="w-full px-margin-desktop py-space-md grid grid-cols-12 gap-space-md">

<div className="col-span-5 flex flex-col gap-space-md">

<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-sm shadow-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<Icon name="verified_user" className="text-[18px] text-primary" />
<span className="font-label-lg text-label-lg text-on-surface">KYC Dossier Queue</span>
</div>
<span className="bg-surface-container-high px-2 py-0.5 rounded-full font-label-sm text-label-sm text-tertiary">Batch 834-UG</span>
</div>
<div className="relative w-full">
<Icon name="search" className="absolute left-3 top-2.5 text-[18px] text-on-surface-variant" />
<input className="w-full bg-surface-container-lowest text-on-surface pl-9 pr-3 py-2 rounded-lg font-body-sm text-body-sm placeholder:text-on-surface-variant/50 focus:outline-none" placeholder="Search TIN, URSB Reg, or Merchant..." type="text" value="Kampala Sound" />
</div>

<div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
<button className="bg-primary-container text-on-primary-container px-2.5 py-1 rounded-lg font-label-sm text-label-sm whitespace-nowrap shadow-sm" onClick={() => alertToast('Action triggered')}>
            Pending Review (12)
          </button>
<button className="bg-surface-container-high text-on-surface-variant hover:text-on-surface px-2.5 py-1 rounded-lg font-label-sm text-label-sm whitespace-nowrap" onClick={() => alertToast('Action triggered')}>
            Probationary (4)
          </button>
<button className="bg-surface-container-high text-on-surface-variant hover:text-on-surface px-2.5 py-1 rounded-lg font-label-sm text-label-sm whitespace-nowrap" onClick={() => alertToast('Action triggered')}>
            Approved (142)
          </button>
<button className="bg-surface-container-high text-on-surface-variant hover:text-on-surface px-2.5 py-1 rounded-lg font-label-sm text-label-sm whitespace-nowrap" onClick={() => alertToast('Action triggered')}>
            Rejected (8)
          </button>
</div>
</div>

<div className="flex flex-col gap-space-sm overflow-y-auto max-h-[820px] pr-1">

<div className="bg-surface-container-high rounded-xl p-space-md shadow-lg cursor-pointer transform transition-transform scale-[1.01] relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-action-gradient-start to-action-gradient-end"></div>
<div className="flex items-start justify-between gap-space-xs pl-2">
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-headline-sm text-headline-sm text-on-surface truncate">Kampala Sound Hub Ltd</span>
<Icon name="verified" className="text-[16px] text-tertiary" />
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Pioneer Mall G-14 • Electronics</span>
</div>
<span className="bg-tertiary-container/30 text-tertiary px-2 py-0.5 rounded font-label-sm text-label-sm whitespace-nowrap">
              Risk: 1.2% Low
            </span>
</div>
<div className="grid grid-cols-2 gap-2 mt-3 pt-2 bg-surface-container-lowest/40 rounded-lg p-2 pl-3">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">TIN IDENTIFIER</span>
<span className="font-code-display text-label-md text-on-surface">101-884-9023</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">URSB STATUS</span>
<span className="font-label-md text-label-md text-tertiary flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow"></span>Direct Match
              </span>
</div>
</div>
<div className="flex items-center justify-between mt-2 pl-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="flex items-center gap-1">
<Icon name="schedule" className="text-[14px]" /> Applied 2h ago
            </span>
<span className="text-primary font-label-md text-label-md flex items-center">
              Inspecting <Icon name="arrow_forward" className="text-[16px]" />
</span>
</div>
</div>

<div className="bg-surface-container-low hover:bg-surface-container rounded-xl p-space-md transition-colors cursor-pointer">
<div className="flex items-start justify-between gap-space-xs">
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-headline-sm text-headline-sm text-on-surface truncate">Mukwano Mobile Traders</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Kikuubo Market • Mobile Phones</span>
</div>
<span className="bg-amber-warning/20 text-amber-warning px-2 py-0.5 rounded font-label-sm text-label-sm whitespace-nowrap">
              Risk: 4.8% Mod
            </span>
</div>
<div className="grid grid-cols-2 gap-2 mt-3 pt-2 bg-surface-container-lowest/30 rounded-lg p-2">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">TIN IDENTIFIER</span>
<span className="font-code-display text-label-md text-on-surface">109-332-1144</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">URSB STATUS</span>
<span className="font-label-md text-label-md text-amber-warning flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-amber-warning"></span>Pending Seal
              </span>
</div>
</div>
<div className="flex items-center justify-between mt-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="flex items-center gap-1">
<Icon name="schedule" className="text-[14px]" /> Applied 3h ago
            </span>
<span className="text-secondary font-label-sm">4 Docs Uploaded</span>
</div>
</div>

<div className="bg-surface-container-low hover:bg-surface-container rounded-xl p-space-md transition-colors cursor-pointer">
<div className="flex items-start justify-between gap-space-xs">
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-headline-sm text-headline-sm text-on-surface truncate">Victoria Organic Foods</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Bugolobi Market • Fresh Groceries</span>
</div>
<span className="bg-tertiary-container/30 text-tertiary px-2 py-0.5 rounded font-label-sm text-label-sm whitespace-nowrap">
              Risk: 0.9% Low
            </span>
</div>
<div className="grid grid-cols-2 gap-2 mt-3 pt-2 bg-surface-container-lowest/30 rounded-lg p-2">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">TIN IDENTIFIER</span>
<span className="font-code-display text-label-md text-on-surface">104-551-9988</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">URSB STATUS</span>
<span className="font-label-md text-label-md text-tertiary flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow"></span>Verified Safe
              </span>
</div>
</div>
<div className="flex items-center justify-between mt-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="flex items-center gap-1">
<Icon name="schedule" className="text-[14px]" /> Applied 5h ago
            </span>
<span className="text-secondary font-label-sm">Awaiting Escrow</span>
</div>
</div>

<div className="bg-surface-container-low hover:bg-surface-container rounded-xl p-space-md transition-colors cursor-pointer">
<div className="flex items-start justify-between gap-space-xs">
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-headline-sm text-headline-sm text-on-surface truncate">Pearl Footwear Hub</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Downtown Arcade • Fashion &amp; Shoes</span>
</div>
<span className="bg-error-container/30 text-error px-2 py-0.5 rounded font-label-sm text-label-sm whitespace-nowrap">
              Risk: 8.4% High
            </span>
</div>
<div className="grid grid-cols-2 gap-2 mt-3 pt-2 bg-surface-container-lowest/30 rounded-lg p-2">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">TIN IDENTIFIER</span>
<span className="font-code-display text-label-md text-on-surface">108-912-4410</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">URSB STATUS</span>
<span className="font-label-md text-label-md text-error flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-danger-penalty"></span>TIN Mismatch
              </span>
</div>
</div>
<div className="flex items-center justify-between mt-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="flex items-center gap-1">
<Icon name="schedule" className="text-[14px]" /> Applied 1d ago
            </span>
<span className="text-danger-penalty font-label-sm">Hold Flagged</span>
</div>
</div>
</div>
</div>

<div className="col-span-7 flex flex-col gap-space-md">

<div className="bg-surface-container-low rounded-xl p-space-lg shadow-md flex flex-col gap-space-md">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-md">
<div className="w-14 h-14 rounded-xl bg-surface-container-high flex items-center justify-center text-primary overflow-hidden shadow-inner">
<Icon name="storefront" className="text-[32px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-sm">
<span className="font-headline-md text-headline-md text-on-surface">Kampala Sound Hub Ltd</span>
<span className="px-2 py-0.5 rounded-full bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm flex items-center gap-1">
<Icon name="gavel" className="text-[14px]" /> Tier-1 Merchant Candidate
                </span>
</div>
<div className="flex items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm mt-0.5">
<span>Business Reg: <strong className="text-on-surface font-code-display">URSB #800200389144</strong></span>
<span>•</span>
<span>Kampala Central Division</span>
</div>
</div>
</div>
<div className="flex flex-col items-end">
<span className="px-3 py-1 rounded-full bg-amber-warning/15 text-amber-warning font-label-sm text-label-sm flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-amber-warning animate-pulse"></span>
              Phase 3 of 4: Awaiting Admin Signature
            </span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1">SLA Deadline: 3h 12m remaining</span>
</div>
</div>

<div className="grid grid-cols-3 gap-space-sm bg-surface-container-lowest p-space-sm rounded-lg">
<div className="flex flex-col px-2">
<span className="font-label-sm text-label-sm text-on-surface-variant">NATIONAL TAX RECORD</span>
<div className="flex items-center gap-1.5 mt-0.5">
<Icon name="fact_check" className="text-tertiary text-[18px]" />
<span className="font-label-md text-label-md text-on-surface">URA TIN 101-884-9023</span>
</div>
</div>
<div className="flex flex-col px-2">
<span className="font-label-sm text-label-sm text-on-surface-variant">PHYSICAL INSPECTION</span>
<div className="flex items-center gap-1.5 mt-0.5">
<Icon name="pin_drop" className="text-tertiary text-[18px]" />
<span className="font-label-md text-label-md text-on-surface">GPS Pioneer G-14 (Rider Verified)</span>
</div>
</div>
<div className="flex flex-col px-2">
<span className="font-label-sm text-label-sm text-on-surface-variant">DUPLICATE RISK ENGINE</span>
<div className="flex items-center gap-1.5 mt-0.5">
<Icon name="security" className="text-tertiary text-[18px]" />
<span className="font-label-md text-label-md text-on-surface">0 Match (Zero Collision)</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-lg shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="badge" className="text-primary text-[20px]" />
<span className="font-headline-sm text-headline-sm text-on-surface">Statutory Compliance Documents (4/4)</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary bg-surface-container-high px-2 py-0.5 rounded">All Cryptographic Hashes Authenticated</span>
</div>
<div className="grid grid-cols-2 gap-space-md">

<div className="bg-surface-container-lowest p-space-sm rounded-xl flex flex-col gap-2 group hover:bg-surface-container-high transition-colors">
<div className="relative w-full h-32 rounded-lg bg-surface-container-high overflow-hidden">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" data-alt="Official Uganda Registration Services Bureau incorporation certificate on embossed textured security paper with formal Republic of Uganda coat of arms stamp in clean dark lighting." src={`${assetBase}/images/770b053e832aecdb.webp`} />
<span className="absolute top-2 left-2 bg-surface-dark/80 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-label-sm text-tertiary flex items-center gap-1">
<Icon name="verified" className="text-[12px]" /> 100% Match
              </span>
<button className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-surface-dark/90 text-on-surface hover:text-primary transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="fullscreen" className="text-[16px]" />
</button>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">URSB Certificate of Incorporation</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Hash: 0x8a9f...42e • Registry Sync OK</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-sm rounded-xl flex flex-col gap-2 group hover:bg-surface-container-high transition-colors">
<div className="relative w-full h-32 rounded-lg bg-surface-container-high overflow-hidden">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" data-alt="Kampala Capital City Authority official annual trading license sheet with QR verification code and serial stamp on dark administrative counter surface." src={`${assetBase}/images/767a62d4cfed7b18.webp`} />
<span className="absolute top-2 left-2 bg-surface-dark/80 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-label-sm text-tertiary flex items-center gap-1">
<Icon name="calendar_today" className="text-[12px]" /> Dec 2025 Valid
              </span>
<button className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-surface-dark/90 text-on-surface hover:text-primary transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="fullscreen" className="text-[16px]" />
</button>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">KCCA Trading License 2024/2025</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Division: Kampala Central (#KC-8991)</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-sm rounded-xl flex flex-col gap-2 group hover:bg-surface-container-high transition-colors">
<div className="relative w-full h-32 rounded-lg bg-surface-container-high overflow-hidden">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" data-alt="Commercial distribution authorization letter from electronics manufacturer Anker Innovations with corporate blue header and red wax seal authentication mark." src={`${assetBase}/images/75e143de6a78e373.webp`} />
<span className="absolute top-2 left-2 bg-surface-dark/80 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-label-sm text-tertiary flex items-center gap-1">
<Icon name="security" className="text-[12px]" /> OEM Seal Verified
              </span>
<button className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-surface-dark/90 text-on-surface hover:text-primary transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="fullscreen" className="text-[16px]" />
</button>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Anker SoundCore Distributor Letter</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Authorized East Africa Retail Hub</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-sm rounded-xl flex flex-col gap-2 group hover:bg-surface-container-high transition-colors">
<div className="relative w-full h-32 rounded-lg bg-surface-container-high overflow-hidden">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" data-alt="Biometric National Identification Card of the Republic of Uganda showing facial portrait holder and microprinted holographic security stripe under focused inspection lighting." src={`${assetBase}/images/b5ffbadf3a3159e9.webp`} />
<span className="absolute top-2 left-2 bg-surface-dark/80 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-label-sm text-tertiary flex items-center gap-1">
<Icon name="fingerprint" className="text-[12px]" /> NIRA Biometric Pass
              </span>
<button className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-surface-dark/90 text-on-surface hover:text-primary transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="fullscreen" className="text-[16px]" />
</button>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Director ID: Sarah Namubiru</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">NIN: CM8408819034K • Validated</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-lg shadow-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="account_balance" className="text-tertiary text-[20px]" />
<span className="font-headline-sm text-headline-sm text-on-surface">Bank of Uganda Regulated Settlement Ledger</span>
</div>
<span className="px-2 py-0.5 rounded bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm">
            Statutory Trust Compliant
          </span>
</div>
<div className="grid grid-cols-2 gap-space-md mt-1">

<div className="bg-surface-container-lowest p-space-md rounded-xl flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-on-surface-variant">NOMINATED MOBILE MONEY (PAYOUT ROUTE)</span>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-mtn-yellow"></span>
<span className="font-code-display text-on-surface text-[16px] font-bold">+256 772 ••• 456</span>
<Icon name="verified" className="text-tertiary text-[18px]" />
</div>
<span className="font-body-sm text-body-sm text-tertiary">URSB Name Match: Kampala Sound Hub Ltd</span>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-on-surface-variant">ESCROW PERFORMANCE BOND POSTED</span>
<div className="flex items-baseline gap-1">
<span className="font-label-sm text-label-sm text-tertiary">UGX</span>
<span className="font-price-display text-price-display text-tertiary">14,850,000</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Custody Account: Stanbic Bank Uganda (#90300188421)</span>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-lg shadow-lg flex flex-col gap-space-md">
<div className="flex flex-col gap-1">
<label className="font-label-md text-label-md text-on-surface flex items-center justify-between">
<span>Superadmin Compliance Note &amp; Audit Recommendation</span>
<span className="text-tertiary text-label-sm">Enclave Cryptographic Stamp #499</span>
</label>
<textarea className="w-full bg-surface-container-lowest text-on-surface p-3 rounded-lg font-body-sm text-body-sm focus:outline-none" rows={2}>All statutory documents match URSB &amp; NIRA APIs. Recommend approval for Tier-1 Electronics status with UGX 14.85M bond active in BoU escrow.</textarea>
</div>

<div className="flex items-center justify-between gap-space-md pt-2">
<div className="flex items-center gap-space-sm">
<button className="px-3.5 py-3 rounded-xl bg-amber-warning/10 text-amber-warning hover:bg-amber-warning/20 font-label-md text-label-md flex items-center gap-1.5 transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="contact_support" className="text-[18px]" />
              Request Additional Docs
            </button>
<button className="px-3.5 py-3 rounded-xl bg-danger-penalty/10 text-danger-penalty hover:bg-danger-penalty/20 font-label-md text-label-md flex items-center gap-1.5 transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="cancel" className="text-[18px]" />
              Reject Application
            </button>
</div>
<button className="flex-1 max-w-[280px] h-[52px] rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-[0_4px_18px_rgba(218,55,0,0.35)] hover:brightness-110 active:scale-[0.98] transition-transform" id="approve-btn" onClick={() => alertToast('Action triggered')}>
<Icon name="assignment_turned_in" className="text-[20px]" />
            Approve &amp; Issue Certificate
          </button>
</div>
</div>
</div>
</div>
</div>
</main>
    </div>
  );
};

export default Tablet;
