// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/hub/delivery_addresses_hubs_swiftcart_desktop/code.html
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
      
      <main className="w-full pt-40 bg-background"><div className="flex flex-col w-full">

<div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-8 overflow-hidden">
<div className="absolute top-0 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute top-48 left-1/4 w-80 h-80 bg-tertiary/5 rounded-full blur-3xl pointer-events-none"></div>

<nav aria-label="Buyer Account Navigation" className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-none">
<a className="px-5 py-2.5 rounded-xl bg-surface-container-lowest shadow-sm text-on-surface-variant hover:text-primary transition-all font-label-md text-label-md whitespace-nowrap flex items-center gap-2" href="#">
<Icon name="account_circle" className="text-[18px]" />
<span>My Profile</span>
</a>
<a className="px-5 py-2.5 rounded-xl bg-surface-container-lowest shadow-sm text-on-surface-variant hover:text-primary transition-all font-label-md text-label-md whitespace-nowrap flex items-center gap-2" href="#">
<Icon name="package_2" className="text-[18px]" />
<span>My Orders</span>
</a>
<a className="px-5 py-2.5 rounded-xl bg-primary text-on-primary shadow-md font-label-md text-label-md whitespace-nowrap flex items-center gap-2 cursor-default" href="#">
<Icon name="location_on" className="text-[18px]" />
<span>Saved Addresses (Active)</span>
</a>
<a className="px-5 py-2.5 rounded-xl bg-surface-container-lowest shadow-sm text-on-surface-variant hover:text-primary transition-all font-label-md text-label-md whitespace-nowrap flex items-center gap-2" href="#">
<Icon name="payments" className="text-[18px]" />
<span>Payment Methods</span>
</a>
<a className="px-5 py-2.5 rounded-xl bg-surface-container-lowest shadow-sm text-on-surface-variant hover:text-primary transition-all font-label-md text-label-md whitespace-nowrap flex items-center gap-2" href="#">
<Icon name="loyalty" className="text-[18px]" />
<span>Vouchers &amp; SwiftPoints</span>
</a>
</nav>

<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mt-6 pb-6 border-b border-transparent">
<div>
<div className="flex items-center gap-2 text-tertiary font-label-sm text-label-sm uppercase tracking-wider">
<Icon name="verified" className="text-[16px]" />
<span>Escrow-Protected Kampala Delivery Hubs</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">
          Delivery Addresses &amp; Kampala Pickup Stations
        </h1>
<p className="font-body-md text-body-md text-on-surface-variant mt-1.5 max-w-2xl">
          Coordinate lightning SafeBoda dispatches, doorstep residential drop-offs, or zero-fee self-service locker pickups across Greater Kampala.
        </p>
</div>
<div className="flex items-center gap-3 flex-shrink-0">
<button className="h-12 px-5 rounded-xl bg-surface-container-lowest shadow-sm text-secondary font-label-lg text-label-lg hover:bg-surface-container-low transition-colors flex items-center gap-2" id="quick-switch-pickup-btn">
<Icon name="storefront" className="text-[20px]" />
<span>Find Nearest Locker</span>
</button>
<button className="h-12 px-6 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg shadow-md hover:bg-primary-container transition-all flex items-center gap-2 active:scale-95" id="open-address-modal-btn">
<Icon name="add_location_alt" className="text-[20px]" />
<span>+ Add New Delivery Address</span>
</button>
</div>
</div>

<div className="mt-4 p-4 rounded-xl bg-surface-container-low flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-tertiary/15 flex items-center justify-center text-tertiary flex-shrink-0">
<Icon name="two_wheeler" className="text-[22px]" />
</div>
<div>
<span className="font-label-md text-label-md text-on-surface flex items-center gap-2">
            SafeBoda Metro Dispatch Active
            <span className="w-2 h-2 rounded-full bg-tertiary inline-block animate-ping"></span>
</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            Orders placed with Nakawa, Central &amp; Kololo default addresses arrive within 45 mins. Pin accuracy guaranteed.
          </p>
</div>
</div>
<div className="flex items-center gap-2 text-tertiary font-label-sm text-label-sm bg-surface-container-lowest px-3 py-1.5 rounded-lg shadow-sm">
<Icon name="map" className="text-[16px]" />
<span>Kampala Metro Coverage: 98.4%</span>
</div>
</div>

<section aria-label="Saved Delivery Locations" className="mt-8">
<div className="flex items-center justify-between mb-4">
<h2 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
<span>Active Destinations</span>
<span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">3 Locations</span>
</h2>
<span className="font-body-sm text-body-sm text-on-surface-variant">Click any address to set as fast checkout target</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="relative flex flex-col justify-between rounded-xl bg-surface-container-lowest p-6 shadow-md transition-all hover:shadow-xl group">
<div className="absolute -top-3 left-6">
<span className="px-3 py-1 rounded-full bg-tertiary text-on-tertiary font-label-sm text-label-sm flex items-center gap-1 shadow-sm">
<Icon name="check_circle" className="text-[14px]" />
<span>Default Address</span>
</span>
</div>
<div>
<div className="flex items-start justify-between mt-2">
<div className="flex items-center gap-2.5">
<div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
<Icon name="home" className="text-[22px]" />
</div>
<div>
<h3 className="font-label-lg text-label-lg text-on-surface">Home - Nakawa Division</h3>
<span className="font-label-sm text-label-sm text-on-surface-variant">Residential Delivery</span>
</div>
</div>
<span className="px-2 py-1 rounded-md bg-surface-container-low text-primary font-label-sm text-label-sm flex items-center gap-1">
<Icon name="bolt" className="text-[14px]" />
<span>SafeBoda 45-Min</span>
</span>
</div>
<div className="mt-4 space-y-2">
<p className="font-body-md text-body-md text-on-surface leading-snug">
                Portbell Road near MUBS, Plot 12, Kampala
              </p>
<div className="p-3 rounded-lg bg-surface-container-low flex items-start gap-2">
<Icon name="signpost" className="text-[16px] text-primary flex-shrink-0 mt-0.5" />
<p className="font-body-sm text-body-sm text-on-surface-variant">
<span className="font-label-sm text-label-sm text-on-surface block">Rider Landmark Note:</span>
                  “Red gate opposite Total Energies, call on boda arrival.”
                </p>
</div>
</div>
<div className="mt-4 pt-3 flex flex-col gap-1.5 text-on-surface-variant font-body-sm text-body-sm bg-surface-container/40 p-3 rounded-lg">
<div className="flex items-center gap-2 text-on-surface">
<Icon name="person" className="text-[16px] text-tertiary" />
<span className="font-label-md text-label-md">Ronald Mukasa</span>
</div>
<div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
<Icon name="phone_iphone" className="text-[16px] text-primary" />
<span>+256 772 123 456 <span className="text-tertiary">(MTN MoMo Linked)</span></span>
</div>
</div>
</div>
<div className="mt-6 pt-4 flex items-center justify-between border-t border-surface-variant/30">
<span className="font-label-sm text-label-sm text-tertiary flex items-center gap-1">
<Icon name="local_shipping" className="text-[14px]" />
              Escrow Inspected
            </span>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm hover:bg-surface-variant transition-colors flex items-center gap-1">
<Icon name="edit" className="text-[14px]" />
<span>Edit</span>
</button>
<button className="px-3 py-1.5 rounded-lg text-error hover:bg-error-container/30 transition-colors font-label-sm text-label-sm flex items-center gap-1">
<Icon name="delete" className="text-[14px]" />
<span>Delete</span>
</button>
</div>
</div>
</article>

<article className="relative flex flex-col justify-between rounded-xl bg-surface-container-lowest p-6 shadow-md transition-all hover:shadow-xl group">
<div>
<div className="flex items-start justify-between">
<div className="flex items-center gap-2.5">
<div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
<Icon name="apartment" className="text-[22px]" />
</div>
<div>
<h3 className="font-label-lg text-label-lg text-on-surface">Office - Kololo</h3>
<span className="font-label-sm text-label-sm text-on-surface-variant">Commercial Hub</span>
</div>
</div>
<span className="px-2.5 py-1 rounded-md bg-secondary-container/40 text-on-secondary-container font-label-sm text-label-sm flex items-center gap-1">
<Icon name="schedule" className="text-[14px]" />
<span>Office Hours</span>
</span>
</div>
<div className="mt-4 space-y-2">
<p className="font-body-md text-body-md text-on-surface leading-snug">
                4th Floor Acacia Mall, Kisementi, Kampala
              </p>
<div className="p-3 rounded-lg bg-surface-container-low flex items-start gap-2">
<Icon name="desk" className="text-[16px] text-secondary flex-shrink-0 mt-0.5" />
<p className="font-body-sm text-body-sm text-on-surface-variant">
<span className="font-label-sm text-label-sm text-on-surface block">Front Desk Handover:</span>
                  “Deliver to reception desk, ask for Ronald Mukasa.”
                </p>
</div>
</div>
<div className="mt-4 pt-3 flex flex-col gap-1.5 text-on-surface-variant font-body-sm text-body-sm bg-surface-container/40 p-3 rounded-lg">
<div className="flex items-center gap-2 text-on-surface">
<Icon name="person" className="text-[16px] text-secondary" />
<span className="font-label-md text-label-md">Ronald Mukasa</span>
</div>
<div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
<Icon name="phone_iphone" className="text-[16px] text-primary" />
<span>+256 701 987 654 <span className="text-secondary">(Airtel UG)</span></span>
</div>
</div>
</div>
<div className="mt-6 pt-4 flex items-center justify-between border-t border-surface-variant/30">
<button className="text-primary hover:text-primary-container font-label-sm text-label-sm flex items-center gap-1 transition-colors">
<Icon name="radio_button_unchecked" className="text-[14px]" />
<span>Set as Default</span>
</button>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm hover:bg-surface-variant transition-colors flex items-center gap-1">
<Icon name="edit" className="text-[14px]" />
<span>Edit</span>
</button>
<button className="px-3 py-1.5 rounded-lg text-error hover:bg-error-container/30 transition-colors font-label-sm text-label-sm flex items-center gap-1">
<Icon name="delete" className="text-[14px]" />
<span>Delete</span>
</button>
</div>
</div>
</article>

<article className="relative flex flex-col justify-between rounded-xl bg-surface-container-lowest p-6 shadow-md transition-all hover:shadow-xl group">
<div>
<div className="flex items-start justify-between">
<div className="flex items-center gap-2.5">
<div className="w-10 h-10 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center">
<Icon name="local_convenience_store" className="text-[22px]" />
</div>
<div>
<h3 className="font-label-lg text-label-lg text-on-surface">SwiftCart Central Hub - Nakasero</h3>
<span className="font-label-sm text-label-sm text-on-surface-variant">Secure Physical Station</span>
</div>
</div>
<span className="px-2.5 py-1 rounded-md bg-tertiary/15 text-tertiary font-label-sm text-label-sm flex items-center gap-1">
<Icon name="savings" className="text-[14px]" />
<span className="whitespace-nowrap">Free (UGX 0)</span>
</span>
</div>
<div className="mt-4 space-y-2">
<p className="font-body-md text-body-md text-on-surface leading-snug">
                Plot 14 Lumumba Avenue, Nakasero, Kampala
              </p>
<div className="p-3 rounded-lg bg-surface-container-low flex items-start gap-2">
<Icon name="lock" className="text-[16px] text-tertiary flex-shrink-0 mt-0.5" />
<p className="font-body-sm text-body-sm text-on-surface-variant">
<span className="font-label-sm text-label-sm text-on-surface block">Automated Collection:</span>
                  “Self-Service Locker Ready. Enter SMS OTP on locker console to collect anytime.”
                </p>
</div>
</div>
<div className="mt-4 p-3 rounded-lg bg-tertiary/5 text-on-surface flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="access_time" className="text-[18px] text-tertiary" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface">Operating Hours</span>
<span className="font-body-sm text-body-sm text-tertiary font-semibold">7:00 AM – 9:00 PM (Daily)</span>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-tertiary text-on-tertiary font-label-sm text-label-sm">Open Now</span>
</div>
</div>
<div className="mt-6 pt-4 flex items-center justify-between border-t border-surface-variant/30">
<button className="text-primary hover:text-primary-container font-label-sm text-label-sm flex items-center gap-1 transition-colors">
<Icon name="radio_button_unchecked" className="text-[14px]" />
<span>Set as Default</span>
</button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm hover:bg-surface-variant transition-colors flex items-center gap-1">
<Icon name="map" className="text-[14px]" />
<span>Hub Details</span>
</button>
</div>
</article>
</div>
</section>

<div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-5 flex flex-col gap-6">
<div className="rounded-xl bg-surface-container-lowest p-6 shadow-md">
<div className="flex items-center justify-between mb-4">
<div>
<span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wide">Live GPS Verification</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Greater Kampala Metro Map</h3>
</div>
<div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<Icon name="near_me" className="text-[18px]" />
</div>
</div>

<div className="relative w-full h-72 rounded-xl overflow-hidden shadow-inner bg-cover bg-center" data-alt="Stylized top-down street map view of Kampala central business district, Nakawa, Kololo, and Victoria basin road nodes in soft earth tones and vibrant orange safe transit zones" data-location="Kampala, Uganda" style={{"backgroundImage":"url('/images/274ec9c245d45514.webp')"}}>

<div className="absolute inset-0 bg-inverse-surface/30 backdrop-blur-[1px] flex flex-col justify-between p-4 text-surface-bright">
<div className="flex items-center justify-between">
<span className="px-2.5 py-1 rounded bg-inverse-surface/80 text-surface-bright font-label-sm text-label-sm backdrop-blur-md flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-ping"></span>
                  SafeBoda Active Hubs
                </span>
<span className="px-2.5 py-1 rounded bg-primary/90 text-on-primary font-currency-code text-currency-code">
                  Avg Transit: 32 min
                </span>
</div>

<div className="relative w-full h-full my-auto flex items-center justify-around">
<div className="flex flex-col items-center">
<div className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg">
<Icon name="home" className="text-[16px]" />
</div>
<span className="mt-1 font-label-sm text-label-sm bg-inverse-surface/90 text-surface-bright px-1.5 py-0.5 rounded">Nakawa</span>
</div>
<div className="flex flex-col items-center">
<div className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow-lg">
<Icon name="apartment" className="text-[16px]" />
</div>
<span className="mt-1 font-label-sm text-label-sm bg-inverse-surface/90 text-surface-bright px-1.5 py-0.5 rounded">Kololo</span>
</div>
<div className="flex flex-col items-center">
<div className="w-7 h-7 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shadow-lg">
<Icon name="inventory" className="text-[16px]" />
</div>
<span className="mt-1 font-label-sm text-label-sm bg-inverse-surface/90 text-surface-bright px-1.5 py-0.5 rounded">Nakasero</span>
</div>
</div>
<div className="bg-surface-container-lowest/90 backdrop-blur-md text-on-surface p-2.5 rounded-lg flex items-center justify-between">
<span className="font-label-sm text-label-sm flex items-center gap-1">
<Icon name="check" className="text-[16px] text-tertiary" />
                  Zone 1: Zero Dispatch Surcharge
                </span>
<a className="text-primary font-label-sm text-label-sm hover:underline" href="#">Full Zones Map →</a>
</div>
</div>
</div>

<div className="mt-5 grid grid-cols-2 gap-3">
<div className="p-3 rounded-lg bg-surface-container-low flex flex-col justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Division Coverage</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-headline-md text-headline-md text-on-surface">5 / 5</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">100% City</span>
</div>

<div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden mt-2">
<div className="h-full bg-tertiary w-full rounded-full"></div>
</div>
</div>
<div className="p-3 rounded-lg bg-surface-container-low flex flex-col justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Locker Pickups</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-headline-md text-headline-md text-on-surface">18</span>
<span className="font-label-sm text-label-sm text-primary font-bold">Stations</span>
</div>
<div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden mt-2">
<div className="h-full bg-primary w-4/5 rounded-full"></div>
</div>
</div>
</div>

<div className="mt-4 p-3.5 rounded-lg bg-tertiary/10 text-on-surface flex items-start gap-3">
<Icon name="verified_user" className="text-[20px] text-tertiary flex-shrink-0 mt-0.5" />
<p className="font-body-sm text-body-sm text-on-surface-variant">
<strong className="font-label-sm text-label-sm text-tertiary block">Swift Escrow Guarantee:</strong>
              Your payment is only released to the merchant after the delivery rider has handed over the package to your designated recipient and you tap "Release Funds" on your phone.
            </p>
</div>
</div>

<div className="rounded-xl bg-surface-container-high p-5 shadow-sm flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-surface-container-lowest text-primary flex items-center justify-center flex-shrink-0 shadow-sm">
<Icon name="contact_support" className="text-[24px]" />
</div>
<div>
<h4 className="font-label-lg text-label-lg text-on-surface">Need a custom boda drop point?</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              Specify famous stages (e.g., “Busega Roundabout” or “Ntinda Complex”) in the delivery instructions note.
            </p>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="rounded-xl bg-surface-container-lowest p-6 lg:p-8 shadow-md">
<div className="flex items-center justify-between pb-5 border-b border-surface-variant/30">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
<Icon name="edit_location_alt" className="text-[22px]" />
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Add New Address or Locker Target</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Provide clear landmarks to eliminate boda rider delays</p>
</div>
</div>
<span className="px-2.5 py-1 rounded bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase">Step 1 of 1</span>
</div>
<form className="mt-6 space-y-5" id="new-address-form" onSubmit={(e) => e.preventDefault()}>

<div>
<label className="font-label-md text-label-md text-on-surface block mb-2">Location Classification</label>
<div className="grid grid-cols-3 gap-3">
<label className="flex items-center justify-center gap-2 p-3 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors has-[:checked]:bg-primary has-[:checked]:text-on-primary">
<input checked={true} className="hidden" name="address-type" type="radio" value="home" />
<Icon name="home" className="text-[18px]" />
<span className="font-label-sm text-label-sm">Home</span>
</label>
<label className="flex items-center justify-center gap-2 p-3 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors has-[:checked]:bg-primary has-[:checked]:text-on-primary">
<input className="hidden" name="address-type" type="radio" value="office" />
<Icon name="business" className="text-[18px]" />
<span className="font-label-sm text-label-sm">Office</span>
</label>
<label className="flex items-center justify-center gap-2 p-3 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors has-[:checked]:bg-primary has-[:checked]:text-on-primary">
<input className="hidden" name="address-type" type="radio" value="other" />
<Icon name="location_on" className="text-[18px]" />
<span className="font-label-sm text-label-sm">Pickup Hub</span>
</label>
</div>
</div>

<div>
<label className="font-label-md text-label-md text-on-surface block mb-1.5" htmlFor="district-select">
                District / Kampala Municipality <span className="text-primary">*</span>
</label>
<div className="relative">
<select className="w-full h-12 bg-surface-container-low rounded-xl px-4 text-on-surface font-body-md text-body-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary" id="district-select">
<option selected={true} value="nakawa">Nakawa Division (Bugolobi, Mbuya, Luzira, Ntinda)</option>
<option value="central">Kampala Central (Nakasero, Kololo, Old Kampala)</option>
<option value="kawempe">Kawempe Division (Kalerwe, Bwaise, Komamboga)</option>
<option value="makindye">Makindye Division (Kabalagala, Kansanga, Ggaba)</option>
<option value="rubaga">Rubaga Division (Mengo, Nateete, Busega)</option>
<option value="kira">Kira Municipality (Kyanja, Naalya, Namugongo)</option>
<option value="nansana">Nansana Municipality (Nabweru, Gombe)</option>
<option value="entebbe">Entebbe Municipality / Airport Corridor</option>
</select>
<Icon name="expand_more" className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" />
</div>
</div>

<div className="space-y-4">
<div>
<label className="font-label-md text-label-md text-on-surface block mb-1.5" htmlFor="street-address">
                  Street Name, Zone, or Village <span className="text-primary">*</span>
</label>
<div className="relative">
<Icon name="pin_drop" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" />
<input className="w-full h-12 bg-surface-container-low rounded-xl pl-11 pr-4 text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-primary" id="street-address" placeholder="e.g. Bukoto-Kisaasi Road, Plot 4" required={true} type="text" />
</div>
</div>
<div>
<div className="flex items-center justify-between mb-1.5">
<label className="font-label-md text-label-md text-on-surface" htmlFor="landmark-field">
                    Prominent Kampala Landmark <span className="text-primary">*</span>
</label>
<span className="font-label-sm text-label-sm text-tertiary">Vital for Boda Riders</span>
</div>
<div className="relative">
<Icon name="near_me" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-primary text-[18px]" />
<input className="w-full h-12 bg-surface-container-low rounded-xl pl-11 pr-4 text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-primary" id="landmark-field" placeholder="e.g. Opposite Shell Petrol Station, Behind Acacia Mall gate" required={true} type="text" />
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="font-label-md text-label-md text-on-surface block mb-1.5" htmlFor="recipient-name">
                  Recipient Full Name <span className="text-primary">*</span>
</label>
<div className="relative">
<Icon name="person" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" />
<input className="w-full h-12 bg-surface-container-low rounded-xl pl-11 pr-4 text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary" id="recipient-name" required={true} type="text" value="Ronald Mukasa" />
</div>
</div>
<div>
<label className="font-label-md text-label-md text-on-surface block mb-1.5" htmlFor="recipient-phone">
                  Mobile Number (MoMo / Airtel) <span className="text-primary">*</span>
</label>
<div className="flex items-center w-full h-12 bg-surface-container-low rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-primary">
<div className="flex items-center gap-1.5 px-3 bg-surface-container-high text-on-surface font-currency-code text-currency-code flex-shrink-0 h-full">
<Icon name="call" className="text-[16px] text-tertiary" />
<span>+256</span>
</div>
<input className="w-full h-full bg-transparent px-3 text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant/60 focus:outline-none" id="recipient-phone" placeholder="772 123 456" required={true} type="tel" />
</div>
</div>
</div>

<div>
<label className="font-label-md text-label-md text-on-surface block mb-1.5" htmlFor="delivery-notes">
                Rider Specific Delivery Instructions (Optional)
              </label>
<textarea className="w-full bg-surface-container-low rounded-xl p-3 text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-primary" id="delivery-notes" placeholder="e.g. Ring doorbell at black gate; if not picking, leave with building caretaker Mr. Okello." rows={3}></textarea>
</div>

<div className="flex items-center gap-3 pt-1">
<input className="w-5 h-5 rounded text-primary focus:ring-primary bg-surface-container-low cursor-pointer" id="set-default-check" type="checkbox" />
<label className="font-body-md text-body-md text-on-surface cursor-pointer select-none" htmlFor="set-default-check">
                Set as my default shipping &amp; express dispatch address
              </label>
</div>

<div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-surface-variant/30">
<button className="w-full sm:w-auto px-6 h-12 rounded-xl bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-variant transition-colors" type="button">
                Cancel
              </button>
<button className="w-full sm:w-auto px-8 h-12 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg shadow-md hover:bg-primary-container transition-all flex items-center justify-center gap-2 active:scale-95" type="submit">
<Icon name="check" className="text-[18px]" />
<span>Save Address &amp; Verify Pin</span>
</button>
</div>
</form>
</div>
</div>
</div>

<section className="mt-16 rounded-xl bg-surface-container-low p-8 shadow-sm">
<div className="max-w-3xl">
<h3 className="font-headline-sm text-headline-sm text-on-surface">SwiftCart Delivery &amp; Locker Network FAQs</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Need help setting up your drop-off points or choosing locker stations?</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
<div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm">
<div className="w-8 h-8 rounded-lg bg-tertiary/15 text-tertiary flex items-center justify-center mb-2">
<Icon name="verified" className="text-[18px]" />
</div>
<h4 className="font-label-lg text-label-lg text-on-surface">How does Boda Escrow work?</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            The rider inspects the merchant seal at dispatch. You only authorize release of payment via your MTN/Airtel prompt after physical verification.
          </p>
</div>
<div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm">
<div className="w-8 h-8 rounded-lg bg-secondary/15 text-secondary flex items-center justify-center mb-2">
<Icon name="lock_clock" className="text-[18px]" />
</div>
<h4 className="font-label-lg text-label-lg text-on-surface">How long do lockers hold goods?</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            Station lockers at Lumumba Avenue, Acacia, and Village Mall securely store items for up to 72 hours free of charge with single-use OTP codes.
          </p>
</div>
<div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm">
<div className="w-8 h-8 rounded-lg bg-primary/15 text-primary flex items-center justify-center mb-2">
<Icon name="motorcycle" className="text-[18px]" />
</div>
<h4 className="font-label-lg text-label-lg text-on-surface">What if a rider gets lost?</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            SwiftCart integrates real-time WhatsApp &amp; GSM calling directly with your saved prominent landmark to keep delivery times under 45 minutes.
          </p>
</div>
</div>
</section>
</div>
</div>
</main>
<footer className="w-full bg-inverse-surface text-inverse-on-surface mt-20"><div className="w-full bg-inverse-surface/90 border-b border-surface-variant/10"><div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"><div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-highest/10"><div className="w-12 h-12 rounded-xl bg-tertiary/20 flex items-center justify-center text-tertiary-fixed flex-shrink-0"><Icon name="verified" className="text-[28px]" /></div><div><h4 className="font-label-lg text-label-lg text-surface-bright">100% Escrow Protection</h4><p className="font-body-sm text-body-sm text-inverse-on-surface/70 mt-0.5">Seller paid only when you inspect and confirm goods.</p></div></div><div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-highest/10"><div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary-fixed flex-shrink-0"><Icon name="two_wheeler" className="text-[28px]" /></div><div><h4 className="font-label-lg text-label-lg text-surface-bright">45-Min SafeBoda City Hub</h4><p className="font-body-sm text-body-sm text-inverse-on-surface/70 mt-0.5">Lightning dispatch across Kampala &amp; Wakiso metro.</p></div></div><div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-highest/10"><div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary-fixed flex-shrink-0"><Icon name="contactless" className="text-[28px]" /></div><div><h4 className="font-label-lg text-label-lg text-surface-bright">Zero MoMo Fees</h4><p className="font-body-sm text-body-sm text-inverse-on-surface/70 mt-0.5">MTN MoMo &amp; Airtel Money deposits are 100% free.</p></div></div><div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-highest/10"><div className="w-12 h-12 rounded-xl bg-tertiary/20 flex items-center justify-center text-tertiary-fixed flex-shrink-0"><Icon name="gavel" className="text-[28px]" /></div><div><h4 className="font-label-lg text-label-lg text-surface-bright">URSB Certified Stores</h4><p className="font-body-sm text-body-sm text-inverse-on-surface/70 mt-0.5">Verified merchant licenses and physical showroom registry.</p></div></div></div></div><div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"><div className="flex flex-col gap-4"><div className="flex items-center gap-3"><img alt="SwiftCart" className="h-7 w-auto object-contain brightness-200" src="/brand/swiftcart-logo-icon.png" /><span className="font-headline-sm text-headline-sm text-surface-bright">SwiftCart</span></div><p className="font-body-sm text-body-sm text-inverse-on-surface/70">Empowering Kampala buyers and trusted Ugandan vendors through instantaneous telecom escrow settlements and safe express delivery.</p><div className="flex items-center gap-2 pt-2 font-label-md text-label-md text-tertiary-fixed"><Icon name="support_agent" className="text-[18px]" /><span>Plot 14 Lumumba Ave, Nakasero, Kampala</span></div></div><div className="flex flex-col gap-3"><h5 className="font-label-lg text-label-lg text-surface-bright tracking-wider uppercase">Marketplace Hubs</h5><ul className="flex flex-col gap-2.5 font-body-sm text-body-sm text-inverse-on-surface/70"><li><a className="hover:text-primary-fixed transition-colors" data-path="marketplace-home" href="#">Nakasero Organic Fresh Foods</a></li><li><a className="hover:text-primary-fixed transition-colors" data-path="consumer-electronics" href="#">Pioneer Mall Tech Depot</a></li><li><a className="hover:text-primary-fixed transition-colors" data-path="fashion-hub" href="#">Downtown Kikuubo Bulk Center</a></li><li><a className="hover:text-primary-fixed transition-colors" data-path="swift-express" href="#">Kisekka Genuine Auto Spares</a></li><li><a className="hover:text-primary-fixed transition-colors" data-path="escrow-deals" href="#">Daily Kampala Flash Discounts</a></li></ul></div><div className="flex flex-col gap-3"><h5 className="font-label-lg text-label-lg text-surface-bright tracking-wider uppercase">Buyer Security &amp; Escrow</h5><ul className="flex flex-col gap-2.5 font-body-sm text-body-sm text-inverse-on-surface/70"><li><a className="hover:text-primary-fixed transition-colors" href="#">How Swift Escrow Protects You</a></li><li><a className="hover:text-primary-fixed transition-colors" href="#">72-Hour Return &amp; Refund Guarantee</a></li><li><a className="hover:text-primary-fixed transition-colors" href="#">Verified Merchant Badge Process</a></li><li><a className="hover:text-primary-fixed transition-colors" href="#">Dispute Resolution Center</a></li><li><a className="hover:text-primary-fixed transition-colors" href="#">Safe Handover Inspection Guide</a></li></ul></div><div className="flex flex-col gap-4"><h5 className="font-label-lg text-label-lg text-surface-bright tracking-wider uppercase">Uganda Payment Rails</h5><p className="font-body-sm text-body-sm text-inverse-on-surface/70">Direct encrypted instant merchant settlement powered by local carriers:</p><div className="flex flex-wrap gap-2"><span className="px-3 py-1.5 rounded-lg bg-surface-container-highest/15 font-label-sm text-label-sm text-surface-bright flex items-center gap-1.5"><Icon name="cell_tower" className="text-[16px] text-tertiary-fixed" />MTN MoMo Pay</span><span className="px-3 py-1.5 rounded-lg bg-surface-container-highest/15 font-label-sm text-label-sm text-surface-bright flex items-center gap-1.5"><Icon name="sim_card" className="text-[16px] text-primary-fixed" />Airtel Money UG</span><span className="px-3 py-1.5 rounded-lg bg-surface-container-highest/15 font-label-sm text-label-sm text-surface-bright flex items-center gap-1.5"><Icon name="credit_card" className="text-[16px] text-secondary-fixed" />Visa / Stanbic FlexiPay</span></div><div className="pt-2"><span className="font-label-sm text-label-sm text-tertiary-fixed block">National ID (NIRA) Compliant</span><span className="font-body-sm text-body-sm text-inverse-on-surface/60">Bank of Uganda Sandbox Partner</span></div></div></div><div className="w-full border-t border-surface-variant/10 py-6"><div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4 font-body-sm text-body-sm text-inverse-on-surface/60"><p>© 2025 SwiftCart Uganda Technologies Ltd. Registered with URSB (Reg #800200331902). All rights reserved.</p><div className="flex items-center gap-6 font-label-sm text-label-sm"><span>Privacy Policy</span><span>Buyer Escrow Terms</span><span>Kampala Delivery SLA</span><span>Security Center</span></div></div></div></footer>
    </div>
  );
};

export default Desktop;
