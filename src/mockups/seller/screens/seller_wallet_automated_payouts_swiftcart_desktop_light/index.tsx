// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/seller/seller_wallet_automated_payouts_swiftcart_desktop_light/code.html
import React, { useState } from 'react';
import Icon from '../../../../components/shared/Icon';
import { useDashboardTheme } from '../../../../context/ThemeContext';

export interface ScreenProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Screen: React.FC<ScreenProps> = (props) => {
  const onNavigate = props.onNavigate;
  
  const { theme, toggleTheme } = useDashboardTheme();
  void theme;
  void toggleTheme;
  const [drawerOpen, setDrawerOpen] = useState(false);
  
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
      <aside className="fixed z-50 left-0 top-0 h-full w-72 bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between overflow-y-auto"><div className="flex lg:hidden justify-end px-3 pt-2 pb-0"><button type="button" className="sidebar-close-btn p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface" aria-label="Close menu" onClick={() => setDrawerOpen(false)}><Icon name="close" className="text-[20px]" /></button></div><div className="flex flex-col"><div className="h-16 px-space-xl flex items-center gap-space-sm"><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/logo-full.png" /><span className="font-headline-sm text-headline-sm text-primary tracking-tight">SwiftCart</span><span className="ml-auto bg-surface-container text-on-surface-variant font-label-sm text-label-sm px-space-xs py-0.5 rounded-full uppercase tracking-wider">Merchant</span></div><div className="px-space-md py-space-sm mx-space-md mb-space-sm bg-surface-container-lowest rounded-xl flex items-center justify-between shadow-[0_1px_4px_rgba(14,27,77,0.03)]"><div className="flex items-center gap-space-sm min-w-0"><div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center shrink-0"><Icon name="verified" className="text-primary text-[18px]" /></div><div className="min-w-0"><p className="font-label-md text-label-md text-on-surface truncate">SoundCore Uganda</p><p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-tertiary inline-block"></span> Kampala Hub</p></div></div><Icon name="unfold_more" className="text-on-surface-variant text-[16px]" /></div><nav className="px-space-md space-y-1" data-active-classes="bg-primary-container text-on-primary-container font-label-md rounded-xl shadow-[0_2px_8px_rgba(218,55,0,0.20)]"><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="overview" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}><span className="flex items-center gap-space-md"><Icon name="grid_view" className="text-[20px]" />Overview</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><span className="flex items-center gap-space-md"><Icon name="receipt_long" className="text-[20px]" />Orders</span><span className="px-space-xs py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">14 Pending</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="products-inventory" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}><span className="flex items-center gap-space-md"><Icon name="inventory_2" className="text-[20px]" />Products &amp; Inventory</span><span className="px-space-xs py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">2 Low</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="riders-logistics" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}><span className="flex items-center gap-space-md"><Icon name="local_shipping" className="text-[20px]" />Riders &amp; Logistics</span><span className="px-space-xs py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">6 Active</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="returns-disputes" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}><span className="flex items-center gap-space-md"><Icon name="assignment_return" className="text-[20px]" />Returns &amp; Disputes</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="wallet-payouts" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}><span className="flex items-center gap-space-md"><Icon name="account_balance_wallet" className="text-[20px]" />Wallet &amp; Payouts</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="analytics-heatmaps" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}><span className="flex items-center gap-space-md"><Icon name="insights" className="text-[20px]" />Analytics &amp; Heatmaps</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="discounts-ads" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}><span className="flex items-center gap-space-md"><Icon name="campaign" className="text-[20px]" />Discounts &amp; Ads</span></a></nav></div><div className="p-space-md border-t border-surface-container-high space-y-1"><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="store-profile-kyc" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><span className="flex items-center gap-space-md"><Icon name="verified_user" className="text-[20px]" />Store Profile &amp; KYC</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="settings" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><span className="flex items-center gap-space-md"><Icon name="settings" className="text-[20px]" />Settings</span></a><div className="mt-space-md p-space-sm bg-surface-container rounded-xl flex items-center justify-between"><div className="flex items-center gap-2"><Icon name="shield" className="text-tertiary text-[18px]" /><span className="font-label-sm text-label-sm text-on-surface-variant">Swift Escrow Protected</span></div><Icon name="lock" className="text-tertiary text-[16px]" /></div></div></aside>
<div className="pl-72 flex flex-col min-h-screen"><header className="fixed top-0 left-72 right-0 h-16 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 px-space-xl flex items-center justify-between"><div className="flex items-center gap-space-lg flex-1 max-w-xl"><button type="button" className="sidebar-hamburger-btn lg:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container mr-2" aria-label="Open menu" onClick={() => setDrawerOpen(true)}><Icon name="menu" className="text-[22px]" /></button><div className="relative w-full"><Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" /><input className="w-full h-10 pl-10 pr-4 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm outline-none focus:ring-2 focus:ring-primary-container transition-all shadow-[0_1px_2px_rgba(14,27,77,0.02)]" placeholder="Search orders, SKU, customer phone (+256)..." type="search" /></div></div><div className="flex items-center gap-space-md"><div className="hidden lg:flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container-lowest shadow-[0_1px_2px_rgba(14,27,77,0.04)]"><span className="w-2 h-2 rounded-full bg-tertiary"></span><span className="font-label-sm text-label-sm text-on-surface">MTN &amp; Airtel Rails Active</span></div><button aria-label="Toggle Theme" className="w-9 h-9 rounded-xl bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container flex items-center justify-center transition-all shadow-[0_1px_2px_rgba(14,27,77,0.04)]" type="button" onClick={() => toggleTheme()}><Icon name="light_mode" className="text-[18px]" /></button><button aria-label="Notifications" className="relative w-9 h-9 rounded-xl bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container flex items-center justify-center transition-all shadow-[0_1px_2px_rgba(14,27,77,0.04)]" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[18px]" /><span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary-container ring-2 ring-surface-container-lowest"></span></button><div className="flex items-center gap-space-sm pl-space-sm"><div className="hidden sm:flex flex-col text-right"><span className="font-label-md text-label-md text-on-surface leading-tight">Kigozi Ronald</span><span className="font-label-sm text-label-sm text-on-surface-variant">Store General Manager</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header><main className="w-full pt-16 bg-surface min-h-[calc(100vh-4rem)]"><div className="flex flex-col w-full">

<div className="p-space-xl space-y-space-xl max-w-[1400px] mx-auto w-full">

<div className="flex flex-col gap-space-md">

<nav className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
<span className="hover:text-on-surface transition-colors cursor-pointer">Merchant Operations</span>
<Icon name="chevron_right" className="text-[14px]" />
<span className="hover:text-on-surface transition-colors cursor-pointer">Business &amp; Finance</span>
<Icon name="chevron_right" className="text-[14px]" />
<span className="text-primary font-semibold">Wallet &amp; Payouts</span>
</nav>

<div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-lg">
<div className="space-y-1.5">
<div className="flex flex-wrap items-center gap-space-sm">
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Merchant Wallet &amp; Automated Payouts</h1>
<span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm shadow-sm">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
              Direct Escrow Settlement Active
            </span>
</div>
<div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-body-sm text-body-sm text-on-surface-variant">
<span className="flex items-center gap-1">
<Icon name="bolt" className="text-tertiary text-[16px]" />
              MTN &amp; Airtel Rails Operational (Latency: 18ms)
            </span>
<span className="text-outline-variant">•</span>
<span className="flex items-center gap-1">
<Icon name="account_balance" className="text-secondary text-[16px]" />
              Bank of Uganda Regulatory Sandbox ID: <span className="font-mono font-medium text-on-surface">BOU-NPS-2024-918</span>
</span>
</div>
</div>

<div className="flex flex-wrap items-center gap-space-sm">

<div className="flex items-center gap-2 bg-surface-container-lowest px-space-md py-2 rounded-xl shadow-[0_1px_4px_rgba(14,27,77,0.04)] text-on-surface font-label-md text-label-md cursor-pointer hover:bg-surface-container transition-colors">
<Icon name="calendar_today" className="text-[18px] text-on-surface-variant" />
<span>Last 30 Days: Oct 1 - Oct 31, 2025</span>
<Icon name="expand_more" className="text-[16px] text-on-surface-variant" />
</div>

<div className="flex items-center gap-2 bg-surface-container-lowest px-space-md py-2 rounded-xl shadow-[0_1px_4px_rgba(14,27,77,0.04)] text-on-surface font-label-md text-label-md cursor-pointer hover:bg-surface-container transition-colors">
<Icon name="storefront" className="text-[18px] text-primary" />
<span>Nakasero Flagship</span>
<Icon name="expand_more" className="text-[16px] text-on-surface-variant" />
</div>

<button className="flex items-center gap-2 bg-surface-container-lowest hover:bg-surface-container text-on-surface px-space-md py-2.5 rounded-xl font-label-md text-label-md transition-all shadow-[0_1px_4px_rgba(14,27,77,0.04)]" onClick={() => alertToast('Action triggered')}>
<Icon name="receipt" className="text-[18px] text-secondary" />
<span>EFRIS Tax Report</span>
</button>

<button className="flex items-center gap-2 bg-gradient-to-r from-[#FF8A1F] to-primary-container text-on-primary-container hover:brightness-105 active:scale-[0.98] px-space-lg py-2.5 rounded-xl font-label-lg text-label-lg shadow-[0_4px_14px_rgba(218,55,0,0.25)] transition-all" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}>
<Icon name="currency_exchange" className="text-[20px]" />
<span>Request Instant Payout</span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">Cleared Available Balance</span>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-currency-code text-currency-code text-on-surface-variant">UGX</span>
<span className="font-headline-lg text-headline-lg text-on-surface tracking-tight">14,840,000</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed shadow-sm">
<Icon name="payments" className="text-[22px]" />
</div>
</div>
<div className="mt-space-md pt-space-sm flex flex-col gap-1.5 bg-surface-container-low -mx-space-lg -mb-space-lg p-space-md">
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<Icon name="schedule" className="text-tertiary text-[16px]" />
            Auto-disburses daily at 18:00 EAT
          </p>
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-primary font-semibold">MTN MoMo Default • Ready</span>
<span className="text-on-surface-variant bg-surface-container-highest px-1.5 py-0.5 rounded">1-Click</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">Escrow Custody Vault</span>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-currency-code text-currency-code text-on-surface-variant">UGX</span>
<span className="font-headline-lg text-headline-lg text-on-surface tracking-tight">12,450,000</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shadow-sm">
<Icon name="lock_clock" className="text-[22px]" />
</div>
</div>
<div className="mt-space-md pt-space-sm flex flex-col gap-1.5 bg-surface-container-low -mx-space-lg -mb-space-lg p-space-md">
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<Icon name="sync" className="text-secondary text-[16px]" />
            28 active orders in transit / OTP pending
          </p>
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-tertiary font-semibold">Central Bank Protected</span>
<span className="text-on-surface-variant bg-surface-container-highest px-1.5 py-0.5 rounded">100% Insured</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">30-Day Disbursed Payouts</span>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-currency-code text-currency-code text-on-surface-variant">UGX</span>
<span className="font-headline-lg text-headline-lg text-on-surface tracking-tight">48,220,000</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-on-primary-fixed shadow-sm">
<Icon name="outbox" className="text-[22px]" />
</div>
</div>
<div className="mt-space-md pt-space-sm flex flex-col gap-1.5 bg-surface-container-low -mx-space-lg -mb-space-lg p-space-md">
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<Icon name="check_circle" className="text-tertiary text-[16px]" />
            142 successful payouts • 0 failures
          </p>
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant">Last batch disburse:</span>
<span className="text-on-surface font-semibold">Yesterday 18:00 EAT</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">Platform Fees &amp; Subsidies</span>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-currency-code text-currency-code text-on-surface-variant">UGX</span>
<span className="font-headline-lg text-headline-lg text-on-surface tracking-tight">1,446,600</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface-variant shadow-sm">
<Icon name="price_change" className="text-[22px]" />
</div>
</div>
<div className="mt-space-md pt-space-sm flex flex-col gap-1.5 bg-surface-container-low -mx-space-lg -mb-space-lg p-space-md">
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">
            Effective Rate: 2.85% (SafeBoda Subsidy Applied)
          </p>
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-secondary font-semibold">URA EFRIS E-Invoicing</span>
<span className="text-tertiary bg-tertiary-fixed/30 px-1.5 py-0.5 rounded font-bold">Auto-Filed</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="space-y-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-[#FFCC00]/20 flex items-center justify-center font-black text-[#D97706] text-xs">
                MTN
              </div>
<div>
<h2 className="font-label-lg text-label-lg text-on-surface leading-tight">MTN Mobile Money</h2>
<span className="font-body-sm text-body-sm text-on-surface-variant">Direct API Rail • Merchant Push</span>
</div>
</div>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm">
<Icon name="verified" className="text-[14px]" /> PRIMARY
            </span>
</div>
<div className="bg-surface-container-low p-space-md rounded-lg space-y-2">
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant">Settlement MSISDN</span>
<span className="font-mono font-bold text-on-surface">+256 772 ••• 419</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant">Registered Merchant</span>
<span className="font-semibold text-on-surface">SoundCore Uganda Official</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant">KYC Tier Status</span>
<span className="font-semibold text-tertiary flex items-center gap-1">Tier 3 (UGX 20M / Day)</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant">Auto-Settlement</span>
<span className="font-semibold text-on-surface">Everyday @ 18:00 EAT</span>
</div>
</div>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between">
<span className="text-tertiary font-label-sm text-label-sm flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Rail Operational (0.8s)
          </span>
<button className="text-primary font-label-md text-label-md hover:underline flex items-center gap-0.5" onClick={() => alertToast('Action triggered')}>
            Edit Parameters <Icon name="arrow_forward" className="text-[16px]" />
</button>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="space-y-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-[#E11900]/15 flex items-center justify-center font-black text-[#E11900] text-xs">
                AIR
              </div>
<div>
<h2 className="font-label-lg text-label-lg text-on-surface leading-tight">Airtel Money Business</h2>
<span className="font-body-sm text-body-sm text-on-surface-variant">Automated Failover Rail</span>
</div>
</div>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">
              STANDBY
            </span>
</div>
<div className="bg-surface-container-low p-space-md rounded-lg space-y-2">
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant">Settlement MSISDN</span>
<span className="font-mono font-bold text-on-surface">+256 750 ••• 102</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant">Registered Merchant</span>
<span className="font-semibold text-on-surface">SoundCore Uganda Ltd</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant">Failover Condition</span>
<span className="font-semibold text-on-surface">If MTN Latency &gt; 120s</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant">Daily Limit</span>
<span className="font-semibold text-on-surface">UGX 15,000,000 / Day</span>
</div>
</div>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between">
<span className="text-secondary font-label-sm text-label-sm flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Standby Hot-Spare
          </span>
<button className="text-secondary font-label-md text-label-md hover:underline flex items-center gap-0.5" onClick={() => alertToast('Action triggered')}>
            Test Ping <Icon name="network_ping" className="text-[16px]" />
</button>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col justify-between">
<div className="space-y-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<Icon name="tune" className="text-[20px]" />
</div>
<div>
<h2 className="font-label-lg text-label-lg text-on-surface leading-tight">Settlement Rules &amp; Safeguards</h2>
<span className="font-body-sm text-body-sm text-on-surface-variant">Automated disburse thresholds</span>
</div>
</div>
<Icon name="shield" className="text-tertiary text-[20px]" />
</div>
<div className="space-y-2.5">
<div className="p-2.5 rounded-lg bg-surface-container-low flex items-start gap-2.5">
<Icon name="arrow_upward" className="text-primary text-[18px] shrink-0 mt-0.5" />
<div className="min-w-0">
<p className="font-label-md text-label-md text-on-surface leading-tight">Min Auto-Disburse Floor</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">UGX 500,000 (Balances below hold in escrow)</p>
</div>
</div>
<div className="p-2.5 rounded-lg bg-surface-container-low flex items-start gap-2.5">
<Icon name="lock_open" className="text-tertiary text-[18px] shrink-0 mt-0.5" />
<div className="min-w-0">
<p className="font-label-md text-label-md text-on-surface leading-tight">Fraud Blind Handshake</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Mandatory 6-digit OTP customer signoff</p>
</div>
</div>
</div>
</div>
<div className="mt-space-md pt-space-sm flex items-center gap-2">
<button className="flex-1 py-2 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" onClick={() => alertToast('Action triggered')}>
            Manage Accounts
          </button>
<button className="flex-1 py-2 rounded-xl bg-surface-container-high text-on-surface-variant font-label-md text-label-md hover:text-on-surface transition-colors" onClick={() => alertToast('Action triggered')}>
            Audit Logs
          </button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] overflow-hidden">

<div className="p-space-lg space-y-space-md">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Escrow Clearing &amp; Settlement Ledger</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Live cryptographically validated transaction journal with telecom carrier callbacks</p>
</div>
<div className="flex items-center gap-space-sm">

<div className="relative min-w-[240px]">
<Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[16px]" />
<input className="w-full h-9 pl-9 pr-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm outline-none focus:ring-1 focus:ring-primary transition-all" placeholder="Search Order #, Payout Ref, USSD..." type="text" />
</div>

<button className="h-9 px-3 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center gap-1.5 transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="view_column" className="text-[16px] text-on-surface-variant" />
<span>Columns</span>
</button>

<button className="h-9 px-3 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center gap-1.5 transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="download" className="text-[16px] text-on-surface-variant" />
<span>Export CSV</span>
</button>
</div>
</div>

<div className="flex items-center gap-2 overflow-x-auto pb-1">
<button className="px-space-md py-1.5 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md shrink-0 shadow-sm" onClick={() => alertToast('Action triggered')}>
            All Entries (184)
          </button>
<button className="px-space-md py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant font-label-md text-label-md shrink-0 transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}>
            MoMo Payouts (42)
          </button>
<button className="px-space-md py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant font-label-md text-label-md shrink-0 transition-colors" onClick={() => alertToast('Action triggered')}>
            Escrow Releases (112)
          </button>
<button className="px-space-md py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant font-label-md text-label-md shrink-0 transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}>
            Dispute Holds (2)
          </button>
<button className="px-space-md py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant font-label-md text-label-md shrink-0 transition-colors" onClick={() => alertToast('Action triggered')}>
            EFRIS Tax Deductions (28)
          </button>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left font-body-sm text-body-sm">
<thead className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<tr>
<th className="py-3 px-space-lg">Ref &amp; Carrier TX</th>
<th className="py-3 px-space-md">Timestamp</th>
<th className="py-3 px-space-md">Event Type</th>
<th className="py-3 px-space-md">Order Ref</th>
<th className="py-3 px-space-md text-right">Gross UGX</th>
<th className="py-3 px-space-md text-right">Deductions</th>
<th className="py-3 px-space-md text-right">Net Settled</th>
<th className="py-3 px-space-lg">Channel &amp; Status</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container">

<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-3.5 px-space-lg">
<div className="font-mono font-bold text-on-surface">#PAY-99214</div>
<div className="font-mono text-label-sm text-on-surface-variant">MTN-TX-88210948</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<span className="text-on-surface font-medium">Oct 24, 2025</span>
<span className="block text-on-surface-variant text-label-sm">18:00 EAT</span>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">
<Icon name="payments" className="text-[12px]" /> Automated Batch
                </span>
</td>
<td className="py-3.5 px-space-md text-on-surface font-medium whitespace-nowrap">
                18 Deliveries Batch
              </td>
<td className="py-3.5 px-space-md text-right font-mono font-medium text-on-surface">
                8,865,979
              </td>
<td className="py-3.5 px-space-md text-right font-mono text-on-surface-variant">
                -265,979 (3%)
              </td>
<td className="py-3.5 px-space-md text-right font-mono font-bold text-tertiary">
                +UGX 8,600,000
              </td>
<td className="py-3.5 px-space-lg whitespace-nowrap">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span className="font-label-md text-label-md text-on-surface">MTN MoMo</span>
<span className="text-on-surface-variant font-body-sm">• Completed (0.6s)</span>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low/60 transition-colors bg-surface-container-low/20">
<td className="py-3.5 px-space-lg">
<div className="font-mono font-bold text-on-surface">#ESC-98241</div>
<div className="font-mono text-label-sm text-on-surface-variant">OTP-BLIND-551029</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<span className="text-on-surface font-medium">Oct 24, 2025</span>
<span className="block text-on-surface-variant text-label-sm">14:35 EAT</span>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm">
<Icon name="lock_open" className="text-[12px]" /> Escrow Handover
                </span>
</td>
<td className="py-3.5 px-space-md text-on-surface font-medium whitespace-nowrap">
                #SC-98241 <span className="text-on-surface-variant font-normal text-body-sm">(SoundCore Space One)</span>
</td>
<td className="py-3.5 px-space-md text-right font-mono font-medium text-on-surface">
                380,000
              </td>
<td className="py-3.5 px-space-md text-right font-mono text-on-surface-variant">
                -11,400 (3%)
              </td>
<td className="py-3.5 px-space-md text-right font-mono font-bold text-tertiary">
                +UGX 368,600
              </td>
<td className="py-3.5 px-space-lg whitespace-nowrap">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span className="font-label-md text-label-md text-on-surface">Cleared to Available</span>
<span className="text-on-surface-variant font-body-sm">(Rider: Kigozi M.)</span>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-3.5 px-space-lg">
<div className="font-mono font-bold text-on-surface">#ESC-98239</div>
<div className="font-mono text-label-sm text-on-surface-variant">OTP-BLIND-994182</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<span className="text-on-surface font-medium">Oct 24, 2025</span>
<span className="block text-on-surface-variant text-label-sm">14:10 EAT</span>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm">
<Icon name="lock_open" className="text-[12px]" /> Escrow Handover
                </span>
</td>
<td className="py-3.5 px-space-md text-on-surface font-medium whitespace-nowrap">
                #SC-98239 <span className="text-on-surface-variant font-normal text-body-sm">(Anker 67W GaN Fast Charger)</span>
</td>
<td className="py-3.5 px-space-md text-right font-mono font-medium text-on-surface">
                165,000
              </td>
<td className="py-3.5 px-space-md text-right font-mono text-on-surface-variant">
                -4,950 (3%)
              </td>
<td className="py-3.5 px-space-md text-right font-mono font-bold text-tertiary">
                +UGX 160,050
              </td>
<td className="py-3.5 px-space-lg whitespace-nowrap">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span className="font-label-md text-label-md text-on-surface">Cleared to Available</span>
<span className="text-on-surface-variant font-body-sm">(Rider: Walugembe D.)</span>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low/60 transition-colors bg-surface-container-low/20">
<td className="py-3.5 px-space-lg">
<div className="font-mono font-bold text-on-surface">#PAY-99180</div>
<div className="font-mono text-label-sm text-on-surface-variant">MTN-TX-88192004</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<span className="text-on-surface font-medium">Oct 23, 2025</span>
<span className="block text-on-surface-variant text-label-sm">18:00 EAT</span>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">
<Icon name="payments" className="text-[12px]" /> Automated Batch
                </span>
</td>
<td className="py-3.5 px-space-md text-on-surface font-medium whitespace-nowrap">
                22 Deliveries Batch
              </td>
<td className="py-3.5 px-space-md text-right font-mono font-medium text-on-surface">
                9,742,268
              </td>
<td className="py-3.5 px-space-md text-right font-mono text-on-surface-variant">
                -292,268 (3%)
              </td>
<td className="py-3.5 px-space-md text-right font-mono font-bold text-tertiary">
                +UGX 9,450,000
              </td>
<td className="py-3.5 px-space-lg whitespace-nowrap">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span className="font-label-md text-label-md text-on-surface">MTN MoMo</span>
<span className="text-on-surface-variant font-body-sm">• Completed (USSD Ack)</span>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-3.5 px-space-lg">
<div className="font-mono font-bold text-on-surface">#REF-88190</div>
<div className="font-mono text-label-sm text-on-surface-variant">BODA-RET-4410</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<span className="text-on-surface font-medium">Oct 23, 2025</span>
<span className="block text-on-surface-variant text-label-sm">11:20 EAT</span>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">
<Icon name="assignment_return" className="text-[12px]" /> Dispute Return Fee
                </span>
</td>
<td className="py-3.5 px-space-md text-on-surface font-medium whitespace-nowrap">
                #SC-97914 <span className="text-on-surface-variant font-normal text-body-sm">(Wrong Spec Return)</span>
</td>
<td className="py-3.5 px-space-md text-right font-mono font-medium text-on-surface">
                0
              </td>
<td className="py-3.5 px-space-md text-right font-mono text-error font-semibold">
                -12,000
              </td>
<td className="py-3.5 px-space-md text-right font-mono font-bold text-error">
                -UGX 12,000
              </td>
<td className="py-3.5 px-space-lg whitespace-nowrap">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-error"></span>
<span className="font-label-md text-label-md text-on-surface">SafeBoda Return Leg</span>
<span className="text-on-surface-variant font-body-sm">(Deducted from Ledger)</span>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="p-space-md flex flex-col sm:flex-row items-center justify-between gap-space-md bg-surface-container-low text-on-surface-variant font-body-sm text-body-sm">
<span>Showing <strong className="text-on-surface">1-5</strong> of <strong className="text-on-surface">184</strong> recorded ledger events</span>
<div className="flex items-center gap-1">
<button className="w-8 h-8 rounded-lg flex items-center justify-center bg-surface-container-lowest text-on-surface shadow-sm font-label-md text-label-md" onClick={() => alertToast('Action triggered')}>1</button>
<button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-surface-container transition-colors text-on-surface font-label-md text-label-md" onClick={() => alertToast('Action triggered')}>2</button>
<button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-surface-container transition-colors text-on-surface font-label-md text-label-md" onClick={() => alertToast('Action triggered')}>3</button>
<span className="px-1 text-on-surface-variant">...</span>
<button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-surface-container transition-colors text-on-surface font-label-md text-label-md" onClick={() => alertToast('Action triggered')}>37</button>
<button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-surface-container transition-colors text-on-surface ml-1" onClick={() => alertToast('Action triggered')}>
<Icon name="chevron_right" className="text-[18px]" />
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pb-space-lg">

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-[0_1px_4px_rgba(14,27,77,0.03)] flex items-start gap-space-md">
<div className="w-9 h-9 rounded-lg bg-[#FFCC00]/20 flex items-center justify-center text-[#D97706] shrink-0 font-bold">
<Icon name="hub" className="text-[20px]" />
</div>
<div className="space-y-1">
<div className="flex items-center gap-2">
<h3 className="font-label-md text-label-md text-on-surface">MTN MoMo OpenAPI Node</h3>
<span className="px-1.5 py-0.2 rounded bg-tertiary-fixed text-on-tertiary-fixed text-label-sm font-semibold">99.98% Up</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Automatic retry queue with cryptographic idempotency key prevents duplicated disbursements.
          </p>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-[0_1px_4px_rgba(14,27,77,0.03)] flex items-start gap-space-md">
<div className="w-9 h-9 rounded-lg bg-[#E11900]/15 flex items-center justify-center text-[#E11900] shrink-0 font-bold">
<Icon name="sync_alt" className="text-[20px]" />
</div>
<div className="space-y-1">
<div className="flex items-center gap-2">
<h3 className="font-label-md text-label-md text-on-surface">Airtel Money B2C Rail</h3>
<span className="px-1.5 py-0.2 rounded bg-secondary-fixed text-on-secondary-fixed text-label-sm font-semibold">Standby (12ms)</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Dynamic failover kicks in within 120 seconds if MTN bulk disbursement reports network congestion.
          </p>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-[0_1px_4px_rgba(14,27,77,0.03)] flex items-start gap-space-md">
<div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0 font-bold">
<Icon name="verified_user" className="text-[20px]" />
</div>
<div className="space-y-1">
<div className="flex items-center gap-2">
<h3 className="font-label-md text-label-md text-on-surface">Bank of Uganda Escrow Policy</h3>
<span className="px-1.5 py-0.2 rounded bg-tertiary-fixed text-on-tertiary-fixed text-label-sm font-semibold">Sec 14 Compliant</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Funds from buyers are locked in licensed custodian partner trust accounts until delivery verification code is confirmed.
          </p>
</div>
</div>
</div>
</div>
</div></main></div>
    </div>
  );
};

export default Screen;
