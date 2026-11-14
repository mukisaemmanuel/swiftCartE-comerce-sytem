// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/admin/audit_log_swiftcart_admin_1/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface AuditLogSwiftcartAdmin1Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const AuditLogSwiftcartAdmin1: React.FC<AuditLogSwiftcartAdmin1Props> = (props) => {
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
      
      <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><button type="button" className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 mr-2" aria-label="Toggle Theme" title="Toggle Theme" onClick={() => toggleTheme()}>{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}</button><div className="flex items-center gap-space-xs"><button className="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors active:scale-95 text-on-surface" type="button"><Icon name="arrow_back" className="text-[24px]" /></button><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/swiftcart-logo-icon.png" /><h1 className="font-headline-sm text-headline-sm text-on-surface tracking-tight truncate max-w-[170px]">Audit Log</h1></div><div className="flex items-center gap-space-xs"><button className="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant" type="button"><Icon name="routine" className="text-[20px]" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-safe bg-surface"><div className="flex-1 w-full px-margin pt-space-md pb-space-lg"><div className="flex flex-col w-full gap-space-md">

<div className="w-full bg-inverse-surface text-inverse-on-surface rounded-xl p-space-sm shadow-md flex items-start gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-surface-tint/20 flex items-center justify-center shrink-0 text-primary-container">
<Icon name="verified_user" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0 flex-1">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-tertiary-container shrink-0 animate-pulse"></span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-surface-container-highest">Audit Node #UG-KLA-01</span>
</div>
<p className="font-label-sm text-label-sm font-bold text-inverse-on-surface leading-tight mt-0.5">
        IMMUTABLE SECURITY AUDIT TRAIL • READ ONLY
      </p>
<p className="font-body-sm text-body-sm text-surface-variant opacity-90 leading-tight mt-0.5">
        Compliant with Uganda Data Protection &amp; Privacy Act 2019
      </p>
</div>
</div>

<div className="grid grid-cols-2 gap-space-sm w-full">
<div className="bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-lg bg-tertiary-container/15 text-tertiary flex items-center justify-center shrink-0">
<Icon name="lock_clock" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-body-sm text-body-sm text-secondary truncate">Integrity Hash</span>
<span className="font-label-lg text-label-lg text-on-surface font-bold">100% VALID</span>
</div>
</div>
<div className="bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-lg bg-primary-container/15 text-primary flex items-center justify-center shrink-0">
<Icon name="hub" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-body-sm text-body-sm text-secondary truncate">Sync Pulse</span>
<span className="font-label-lg text-label-lg text-on-surface font-bold">0.4s Latency</span>
</div>
</div>
</div>

<div className="flex flex-col w-full gap-space-sm">
<div className="relative w-full">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-secondary">
<Icon name="search" className="text-[20px]" />
</div>
<input className="w-full h-11 pl-10 pr-10 bg-surface-container-lowest text-on-surface placeholder:text-secondary rounded-xl font-body-md text-body-md shadow-sm outline-none transition-all focus:bg-surface-container-low" id="auditSearchInput" placeholder="Filter by Staff, Order, or Action Type..." type="search" />
<div className="absolute inset-y-0 right-0 pr-3 flex items-center text-secondary cursor-pointer">
<Icon name="clear" className="text-[18px]" />
</div>
</div>

<div className="flex items-center gap-space-xs overflow-x-auto pb-1 -mx-margin px-margin no-scrollbar">
<button className="audit-chip shrink-0 px-3 py-1.5 rounded-full font-label-md text-label-md bg-inverse-surface text-inverse-on-surface transition-transform active:scale-95 shadow-sm">
        All Events (42)
      </button>
<button className="audit-chip shrink-0 px-3 py-1.5 rounded-full font-label-md text-label-md bg-surface-container-lowest text-secondary transition-transform active:scale-95 hover:bg-surface-container">
        Payouts
      </button>
<button className="audit-chip shrink-0 px-3 py-1.5 rounded-full font-label-md text-label-md bg-surface-container-lowest text-secondary transition-transform active:scale-95 hover:bg-surface-container">
        Dispatch Unlocks
      </button>
<button className="audit-chip shrink-0 px-3 py-1.5 rounded-full font-label-md text-label-md bg-surface-container-lowest text-secondary transition-transform active:scale-95 hover:bg-surface-container">
        KYC Approvals
      </button>
<button className="audit-chip shrink-0 px-3 py-1.5 rounded-full font-label-md text-label-md bg-surface-container-lowest text-secondary transition-transform active:scale-95 hover:bg-surface-container">
        Escrow Actions
      </button>
<button className="audit-chip shrink-0 px-3 py-1.5 rounded-full font-label-md text-label-md bg-surface-container-lowest text-secondary transition-transform active:scale-95 hover:bg-surface-container">
        Account Suspensions
      </button>
</div>
</div>

<div className="flex flex-col gap-space-md w-full" id="auditLogStream">

<div className="audit-card w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all duration-200" data-cat="PAYOUTS" data-search="patricia namubiru approved_seller_payout po-8812 kikuubo gadgets momo success">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm font-bold">
<Icon name="check_circle" className="text-[13px]" />
            SUCCESS
          </span>
<span className="font-label-sm text-label-sm text-secondary bg-surface-container-low px-2 py-0.5 rounded">
            11:42:19 AM EAT
          </span>
</div>
<button className="text-secondary hover:text-primary transition-colors flex items-center gap-0.5 font-label-sm text-label-sm" type="button">
<span>Metadata</span>
<Icon name="expand_more" className="text-[16px] transition-transform duration-200" />
</button>
</div>
<div className="mt-space-sm flex flex-col gap-space-xs">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md font-bold text-primary tracking-wide">
            APPROVED_SELLER_PAYOUT
          </span>
</div>
<div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-1">
<div className="flex items-center justify-between text-on-surface">
<span className="font-label-md text-label-md font-bold">Payout #PO-8812</span>
<span className="font-label-md text-label-md font-extrabold text-primary-container">UGX 5,280,000</span>
</div>
<div className="flex items-center gap-1 font-body-sm text-body-sm text-secondary truncate">
<Icon name="store" className="text-[15px] text-tertiary" />
<span className="truncate">Kikuubo Gadgets Ltd • MTN MoMo Merchant</span>
</div>
</div>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between text-secondary font-body-sm text-body-sm">
<div className="flex items-center gap-1.5 min-w-0">
<div className="w-5 h-5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center font-bold">P</div>
<span className="font-label-sm text-label-sm text-on-surface font-semibold truncate">Patricia Namubiru</span>
<span className="text-secondary opacity-75 text-[11px]">(Ops Admin)</span>
</div>
<span className="font-label-sm text-label-sm text-secondary shrink-0">197.239.4.12</span>
</div>

<div className="hidden mt-space-sm pt-space-sm bg-surface-container rounded-lg p-space-sm flex-col gap-1.5 text-on-surface" id="evt-meta-1">
<div className="flex items-center justify-between text-[11px]">
<span className="text-secondary font-label-sm text-label-sm">Location / ISP:</span>
<span className="font-label-sm text-label-sm font-semibold">Kampala MTN Fiber (Core-GW-04)</span>
</div>
<div className="flex items-center justify-between text-[11px]">
<span className="text-secondary font-label-sm text-label-sm">2FA Method:</span>
<span className="font-label-sm text-label-sm font-semibold text-tertiary">Hardware FIDO2 Security Key</span>
</div>
<div className="flex flex-col gap-0.5 mt-1">
<span className="text-secondary font-label-sm text-label-sm">SHA-256 Hash Digest:</span>
<span className="font-body-sm text-body-sm font-mono text-secondary break-all bg-surface-container-lowest p-1.5 rounded select-all">
            a7f43b8c9d1209e8633b49e0c5d79124fbcf79910d55e37861937f2d4e782194
          </span>
</div>
</div>
</div>

<div className="audit-card w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all duration-200" data-cat="DISPATCH" data-search="system automation dispatch_security_lock sc-9915 locked pin recipient">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-error-container text-error font-label-sm text-label-sm font-bold">
<Icon name="lock" className="text-[13px]" />
            LOCKED
          </span>
<span className="font-label-sm text-label-sm text-secondary bg-surface-container-low px-2 py-0.5 rounded">
            11:15:02 AM EAT
          </span>
</div>
<button className="text-secondary hover:text-primary transition-colors flex items-center gap-0.5 font-label-sm text-label-sm" type="button">
<span>Metadata</span>
<Icon name="expand_more" className="text-[16px] transition-transform duration-200" />
</button>
</div>
<div className="mt-space-sm flex flex-col gap-space-xs">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md font-bold text-error tracking-wide">
            DISPATCH_SECURITY_LOCK
          </span>
</div>
<div className="bg-error-container/20 rounded-lg p-space-sm flex flex-col gap-1">
<div className="flex items-center justify-between text-on-surface">
<span className="font-label-md text-label-md font-bold text-error">Order #SC-9915</span>
<span className="font-label-sm text-label-sm font-bold text-error bg-error-container px-2 py-0.5 rounded-full">3 Failed PINs</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface leading-tight mt-0.5">
            Automatic quarantine triggered. Courier handheld app locked delivery hand-off to prevent impersonation.
          </p>
</div>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between text-secondary font-body-sm text-body-sm">
<div className="flex items-center gap-1.5 min-w-0">
<div className="w-5 h-5 rounded-full bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm flex items-center justify-center font-bold">
<Icon name="smart_toy" className="text-[13px]" />
</div>
<span className="font-label-sm text-label-sm text-on-surface font-semibold truncate">SYSTEM AUTOMATION</span>
<span className="text-secondary opacity-75 text-[11px]">(Daemon)</span>
</div>
<span className="font-label-sm text-label-sm text-secondary shrink-0">Internal Bus</span>
</div>

<div className="hidden mt-space-sm pt-space-sm bg-surface-container rounded-lg p-space-sm flex-col gap-1.5 text-on-surface" id="evt-meta-2">
<div className="flex items-center justify-between text-[11px]">
<span className="text-secondary font-label-sm text-label-sm">Rider Device ID:</span>
<span className="font-label-sm text-label-sm font-semibold">BODA-POS-KLA-9421</span>
</div>
<div className="flex items-center justify-between text-[11px]">
<span className="text-secondary font-label-sm text-label-sm">Coordinates:</span>
<span className="font-label-sm text-label-sm font-semibold">0.3136° N, 32.5811° E (Ntinda)</span>
</div>
<div className="flex flex-col gap-0.5 mt-1">
<span className="text-secondary font-label-sm text-label-sm">SHA-256 Hash Digest:</span>
<span className="font-body-sm text-body-sm font-mono text-secondary break-all bg-surface-container-lowest p-1.5 rounded select-all">
            91d4e08c66bf91823a0c5b36489a22fbb1c3904e22384a838ccb4129e9d6d028
          </span>
</div>
</div>
</div>

<div className="audit-card w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all duration-200" data-cat="KYC" data-search="patricia namubiru kyc_tier2_approved seller vnd-8821 soundcore uganda verified nira nin ursb">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold">
<Icon name="badge" className="text-[13px]" />
            KYC VERIFIED
          </span>
<span className="font-label-sm text-label-sm text-secondary bg-surface-container-low px-2 py-0.5 rounded">
            10:48:44 AM EAT
          </span>
</div>
<button className="text-secondary hover:text-primary transition-colors flex items-center gap-0.5 font-label-sm text-label-sm" type="button">
<span>Metadata</span>
<Icon name="expand_more" className="text-[16px] transition-transform duration-200" />
</button>
</div>
<div className="mt-space-sm flex flex-col gap-space-xs">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md font-bold text-tertiary tracking-wide">
            KYC_TIER2_APPROVED
          </span>
</div>
<div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-1.5">
<div className="flex items-center justify-between text-on-surface">
<span className="font-label-md text-label-md font-bold truncate">Seller #VND-8821</span>
<span className="font-label-sm text-label-sm bg-tertiary-container/20 text-tertiary font-bold px-2 py-0.5 rounded">URSB Verified</span>
</div>
<div className="font-body-md text-body-md font-bold text-on-surface">
            SoundCore Uganda Official
          </div>
<div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm">
<span className="flex items-center gap-1">
<Icon name="check" className="text-[14px] text-tertiary" /> NIRA NIN Validated
            </span>
<span>•</span>
<span className="flex items-center gap-1">
<Icon name="check" className="text-[14px] text-tertiary" /> Tax TIN #100924192
            </span>
</div>
</div>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between text-secondary font-body-sm text-body-sm">
<div className="flex items-center gap-1.5 min-w-0">
<div className="w-5 h-5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center font-bold">P</div>
<span className="font-label-sm text-label-sm text-on-surface font-semibold truncate">Patricia Namubiru</span>
<span className="text-secondary opacity-75 text-[11px]">(KYC Lead)</span>
</div>
<span className="font-label-sm text-label-sm text-secondary shrink-0">197.239.4.12</span>
</div>

<div className="hidden mt-space-sm pt-space-sm bg-surface-container rounded-lg p-space-sm flex-col gap-1.5 text-on-surface" id="evt-meta-3">
<div className="flex items-center justify-between text-[11px]">
<span className="text-secondary font-label-sm text-label-sm">NIRA Gateway Ref:</span>
<span className="font-label-sm text-label-sm font-semibold">GOV-NIRA-ACK-90218</span>
</div>
<div className="flex items-center justify-between text-[11px]">
<span className="text-secondary font-label-sm text-label-sm">Certificate Vault:</span>
<span className="font-label-sm text-label-sm font-semibold">S3-ENC-AES256-KLA</span>
</div>
<div className="flex flex-col gap-0.5 mt-1">
<span className="text-secondary font-label-sm text-label-sm">SHA-256 Hash Digest:</span>
<span className="font-body-sm text-body-sm font-mono text-secondary break-all bg-surface-container-lowest p-1.5 rounded select-all">
            44c82b01e4a3875bb239f88c690184bceda772183cf99205164bc9930e4271ba
          </span>
</div>
</div>
</div>

<div className="audit-card w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all duration-200" data-cat="ESCROW" data-search="patrick o arbitration officer freeze_escrow_docket case rt-309 280000 ugx">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary-container/20 text-primary-container font-label-sm text-label-sm font-bold">
<Icon name="ac_unit" className="text-[13px]" />
            ESCROW FROZEN
          </span>
<span className="font-label-sm text-label-sm text-secondary bg-surface-container-low px-2 py-0.5 rounded">
            09:20:11 AM EAT
          </span>
</div>
<button className="text-secondary hover:text-primary transition-colors flex items-center gap-0.5 font-label-sm text-label-sm" type="button">
<span>Metadata</span>
<Icon name="expand_more" className="text-[16px] transition-transform duration-200" />
</button>
</div>
<div className="mt-space-sm flex flex-col gap-space-xs">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md font-bold text-on-surface tracking-wide">
            FREEZE_ESCROW_DOCKET
          </span>
</div>
<div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-1">
<div className="flex items-center justify-between text-on-surface">
<span className="font-label-md text-label-md font-bold">Case #RT-309</span>
<span className="font-label-md text-label-md font-extrabold text-on-surface">UGX 280,000</span>
</div>
<p className="font-body-sm text-body-sm text-secondary leading-tight mt-0.5">
            Disputed parcel transit: Damaged display panel reported by buyer. Funds locked in SwiftEscrow smart-vault.
          </p>
</div>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between text-secondary font-body-sm text-body-sm">
<div className="flex items-center gap-1.5 min-w-0">
<div className="w-5 h-5 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm flex items-center justify-center font-bold">O</div>
<span className="font-label-sm text-label-sm text-on-surface font-semibold truncate">Patrick O.</span>
<span className="text-secondary opacity-75 text-[11px]">(Arbitration Officer)</span>
</div>
<span className="font-label-sm text-label-sm text-secondary shrink-0">41.210.158.4</span>
</div>

<div className="hidden mt-space-sm pt-space-sm bg-surface-container rounded-lg p-space-sm flex-col gap-1.5 text-on-surface" id="evt-meta-4">
<div className="flex items-center justify-between text-[11px]">
<span className="text-secondary font-label-sm text-label-sm">Arbitration Docket:</span>
<span className="font-label-sm text-label-sm font-semibold">DISPUTE-2023-UG-882</span>
</div>
<div className="flex items-center justify-between text-[11px]">
<span className="text-secondary font-label-sm text-label-sm">Escrow Contract:</span>
<span className="font-label-sm text-label-sm font-semibold">SWIFT-ESCROW-V3-KLA</span>
</div>
<div className="flex flex-col gap-0.5 mt-1">
<span className="text-secondary font-label-sm text-label-sm">SHA-256 Hash Digest:</span>
<span className="font-body-sm text-body-sm font-mono text-secondary break-all bg-surface-container-lowest p-1.5 rounded select-all">
            6e32a488b1f544927cb701b22894fa301d4a088921ec56774438198fcd761290
          </span>
</div>
</div>
</div>
</div>

<div className="hidden flex-col items-center justify-center text-center p-space-xl bg-surface-container-lowest rounded-xl" id="auditEmptyState">
<div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-secondary mb-space-sm">
<Icon name="manage_search" className="text-[32px]" />
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">No Audit Records Found</h3>
<p className="font-body-sm text-body-sm text-secondary max-w-[240px] mt-1">
      No cryptographic entries match your filter parameters in the current audit block.
    </p>
</div>

<div className="w-full flex flex-col items-center justify-center text-center py-space-sm gap-1 opacity-70">
<div className="flex items-center gap-1.5 text-secondary font-label-sm text-label-sm">
<Icon name="fingerprint" className="text-[16px]" />
<span>BLOCK #891,440 CERTIFIED BY CENTRAL AUDIT LEDGER</span>
</div>
<span className="font-label-sm text-label-sm text-secondary">
      Next verification anchor in 18 minutes
    </span>
</div>
</div>
</div></main>
    </div>
  );
};

export default AuditLogSwiftcartAdmin1;
