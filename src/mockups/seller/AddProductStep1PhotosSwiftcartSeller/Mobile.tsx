// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/seller/add_product_step_1_photos_swiftcart_seller/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface AddProductStep1PhotosSwiftcartSellerProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const AddProductStep1PhotosSwiftcartSeller: React.FC<AddProductStep1PhotosSwiftcartSellerProps> = (props) => {
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
      
      <div className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300" id="drawer-backdrop"></div>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-safe bg-surface"><div className="flex flex-col w-full pb-24">

<div className="px-gutter pt-space-sm pb-space-md bg-surface-container-low">
<div className="flex items-center justify-between mb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="px-2 py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-wider">Step 1 of 5</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Product Photos</span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-bold whitespace-nowrap">UGX Listing</span>
</div>

<div className="grid grid-cols-5 gap-1.5 mt-space-sm">
<div className="h-1.5 rounded-full bg-primary-container shadow-sm"></div>
<div className="h-1.5 rounded-full bg-surface-container-highest"></div>
<div className="h-1.5 rounded-full bg-surface-container-highest"></div>
<div className="h-1.5 rounded-full bg-surface-container-highest"></div>
<div className="h-1.5 rounded-full bg-surface-container-highest"></div>
</div>
<div className="flex justify-between items-center mt-1 text-[11px] font-label-sm">
<span className="text-primary font-bold">1. Photos</span>
<span className="text-secondary font-medium">2. AI Studio</span>
<span className="text-secondary font-medium">3. Copy</span>
<span className="text-secondary font-medium">4. Details</span>
<span className="text-secondary font-medium">5. Review</span>
</div>
</div>
<div className="px-gutter py-space-md space-y-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all duration-200" id="merchant-tips-card">
<div className="flex items-start justify-between cursor-pointer">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary-container shrink-0">
<Icon name="wb_sunny" className="text-[20px]" />
</div>
<div>
<div className="flex items-center gap-1.5">
<h4 className="font-label-lg text-label-lg text-on-surface">Kampala Seller Photo Checklist</h4>
<span className="px-1.5 py-0.2 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[10px] font-bold">Tips</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Natural light sells 3.4x faster in Kikuubo &amp; Nakasero</p>
</div>
</div>
<button aria-label="Toggle Tips" className="w-8 h-8 rounded-full flex items-center justify-center text-secondary hover:bg-surface-container" id="tips-arrow-btn" type="button">
<Icon name="expand_more" className="text-[20px] transition-transform duration-200" />
</button>
</div>

<div className="hidden pt-space-sm mt-space-sm space-y-space-xs" id="tips-expanded-content">
<div className="flex items-start gap-2 bg-surface-container-low p-2.5 rounded-lg">
<Icon name="lightbulb" className="text-primary-container text-[18px] shrink-0 mt-0.5" />
<p className="font-body-sm text-body-sm text-on-surface"><strong>Morning sunlight:</strong> Take shots outside near your shop window. Kikuubo corridor bulbs cause harsh glare.</p>
</div>
<div className="flex items-start gap-2 bg-surface-container-low p-2.5 rounded-lg">
<Icon name="check_circle" className="text-tertiary text-[18px] shrink-0 mt-0.5" />
<p className="font-body-sm text-body-sm text-on-surface"><strong>One SKU only:</strong> Remove extra phone cases, wires, and packaging that are not included in the UGX price.</p>
</div>
<div className="flex items-start gap-2 bg-surface-container-low p-2.5 rounded-lg">
<Icon name="verified_user" className="text-secondary text-[18px] shrink-0 mt-0.5" />
<p className="font-body-sm text-body-sm text-on-surface"><strong>Serial &amp; Seals:</strong> Photograph genuine Anker/Soundcore anti-counterfeit QR code or barcode to get the <em>Uganda Verified Tech</em> badge.</p>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-space-sm">
<button className="h-14 bg-surface-container-lowest rounded-xl flex items-center justify-center gap-space-sm text-on-surface font-label-lg text-label-lg shadow-sm active:scale-95 transition-transform" type="button">
<Icon name="photo_camera" className="text-primary text-[24px]" />
<span>Take Photo</span>
</button>
<button className="h-14 bg-surface-container-lowest rounded-xl flex items-center justify-center gap-space-sm text-on-surface font-label-lg text-label-lg shadow-sm active:scale-95 transition-transform" type="button">
<Icon name="photo_library" className="text-tertiary text-[24px]" />
<span>From Gallery</span>
</button>
</div>

<div className="flex items-center justify-between px-1">
<div className="flex items-center gap-1.5">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">Uploaded (4/8)</span>
<span className="font-body-sm text-body-sm text-secondary">• Drag to reorder</span>
</div>
<button className="flex items-center gap-1 text-primary font-label-sm text-label-sm font-bold" type="button">
<Icon name="drag_indicator" className="text-[16px]" />
<span>Sort Mode</span>
</button>
</div>

<div className="grid grid-cols-2 gap-space-sm" id="photo-grid">

<div className="relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm aspect-square flex flex-col group" id="photo-card-1">
<img className="w-full h-full object-cover" data-alt="Close-up crisp product photograph of matte black Soundcore wireless over-ear headphones placed on a pristine neutral studio pedestal with subtle orange ambient rim light." src="/images/0cd78a8acfa7ee04.webp" />

<div className="absolute top-2 left-2 z-10 flex items-center gap-1 bg-primary text-on-primary px-2 py-0.5 rounded-full font-label-sm text-label-sm shadow-md">
<Icon name="star" className="text-[12px]" />
<span>Cover Photo</span>
</div>

<div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm flex items-center justify-center text-on-surface shadow-sm cursor-grab active:cursor-grabbing">
<Icon name="drag_indicator" className="text-[18px]" />
</div>

<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-on-surface/80 via-on-surface/30 to-transparent p-2 flex items-center justify-between text-on-primary">
<span className="font-label-sm text-label-sm truncate">Front 45° Angle</span>
<div className="flex items-center gap-1">
<button aria-label="Retake" className="w-7 h-7 rounded-full bg-surface-container-lowest/30 flex items-center justify-center hover:bg-surface-container-lowest/60" type="button">
<Icon name="crop_rotate" className="text-[16px]" />
</button>
<button aria-label="Delete" className="w-7 h-7 rounded-full bg-error-container text-on-error-container flex items-center justify-center" type="button">
<Icon name="delete" className="text-[16px]" />
</button>
</div>
</div>
</div>

<div className="relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm aspect-square flex flex-col group" id="photo-card-2">
<img className="w-full h-full object-cover" data-alt="Soundcore headphones ear cup detail showing metallic hinge, soft leatherette cushion, slightly dimmed ambient shop illumination." src="/images/4cf2806b498ce55c.webp" />

<div className="absolute top-2 left-2 z-10 flex items-center gap-1 bg-error-container text-on-error-container px-2 py-0.5 rounded-full font-label-sm text-label-sm shadow-sm">
<Icon name="warning" className="text-[13px]" />
<span>Low light</span>
</div>
<div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm flex items-center justify-center text-on-surface shadow-sm cursor-grab">
<Icon name="drag_indicator" className="text-[18px]" />
</div>

<div className="absolute inset-x-2 bottom-10 z-10 bg-surface-container-lowest/90 backdrop-blur-md rounded-lg p-1.5 shadow-md flex items-center justify-between">
<span className="font-label-sm text-[10px] text-on-surface font-semibold">AI Auto-Brighten</span>
<button className="px-2 py-0.5 rounded bg-primary text-on-primary font-label-sm text-[10px] font-bold" type="button">Fix</button>
</div>
<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-on-surface/80 via-on-surface/30 to-transparent p-2 flex items-center justify-between text-on-primary">
<span className="font-label-sm text-label-sm truncate">Ear cushion</span>
<button aria-label="Delete" className="w-7 h-7 rounded-full bg-surface-container-lowest/30 flex items-center justify-center" type="button">
<Icon name="delete" className="text-[16px]" />
</button>
</div>
</div>

<div className="relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm aspect-square flex flex-col group" id="photo-card-3">
<img className="w-full h-full object-cover" data-alt="Close-up of retail box packaging for audio headset with visible seal, slightly soft focus on text, clean white table background." src="/images/75c4dfcc8514511e.webp" />

<div className="absolute top-2 left-2 z-10 flex items-center gap-1 bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full font-label-sm text-label-sm shadow-sm">
<Icon name="blur_on" className="text-[13px]" />
<span>Slightly blurry</span>
</div>
<div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm flex items-center justify-center text-on-surface shadow-sm cursor-grab">
<Icon name="drag_indicator" className="text-[18px]" />
</div>
<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-on-surface/80 via-on-surface/30 to-transparent p-2 flex items-center justify-between text-on-primary">
<span className="font-label-sm text-label-sm truncate">Retail Package</span>
<button aria-label="Delete" className="w-7 h-7 rounded-full bg-surface-container-lowest/30 flex items-center justify-center" type="button">
<Icon name="delete" className="text-[16px]" />
</button>
</div>
</div>

<div className="relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm aspect-square flex flex-col group" id="photo-card-4">
<img className="w-full h-full object-cover" data-alt="Headphones folded neatly inside carry pouch alongside braided charging cable, auxiliary jack, and warranty card with visible serial number barcode." src="/images/5fa7931fc6931ee8.webp" />
<div className="absolute top-2 left-2 z-10 flex items-center gap-1 bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded-full font-label-sm text-label-sm shadow-sm">
<Icon name="verified" className="text-[13px]" />
<span>Accessories</span>
</div>
<div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm flex items-center justify-center text-on-surface shadow-sm cursor-grab">
<Icon name="drag_indicator" className="text-[18px]" />
</div>
<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-on-surface/80 via-on-surface/30 to-transparent p-2 flex items-center justify-between text-on-primary">
<span className="font-label-sm text-label-sm truncate">What's in box</span>
<button aria-label="Delete" className="w-7 h-7 rounded-full bg-surface-container-lowest/30 flex items-center justify-center" type="button">
<Icon name="delete" className="text-[16px]" />
</button>
</div>
</div>

<button className="aspect-square bg-surface-container-low rounded-xl flex flex-col items-center justify-center p-3 text-center active:scale-95 transition-all hover:bg-surface-container" type="button">
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary mb-1">
<Icon name="add" className="text-[22px]" />
</div>
<span className="font-label-md text-label-md text-on-surface font-bold">Serial Barcode</span>
<span className="font-label-sm text-[10px] text-secondary mt-0.5">Increases trust</span>
</button>

<button className="aspect-square bg-surface-container-low rounded-xl flex flex-col items-center justify-center p-3 text-center active:scale-95 transition-all hover:bg-surface-container" type="button">
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-secondary mb-1">
<Icon name="add" className="text-[22px]" />
</div>
<span className="font-label-md text-label-md text-on-surface">Top View</span>
<span className="font-label-sm text-[10px] text-secondary mt-0.5">Slot 6 of 8</span>
</button>

<button className="aspect-square bg-surface-container-low rounded-xl flex flex-col items-center justify-center p-3 text-center active:scale-95 transition-all hover:bg-surface-container" type="button">
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-secondary mb-1">
<Icon name="add" className="text-[22px]" />
</div>
<span className="font-label-md text-label-md text-on-surface">Side View</span>
<span className="font-label-sm text-[10px] text-secondary mt-0.5">Slot 7 of 8</span>
</button>

<button className="aspect-square bg-surface-container-low rounded-xl flex flex-col items-center justify-center p-3 text-center active:scale-95 transition-all hover:bg-surface-container" type="button">
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-secondary mb-1">
<Icon name="add" className="text-[22px]" />
</div>
<span className="font-label-md text-label-md text-on-surface">Specification Tag</span>
<span className="font-label-sm text-[10px] text-secondary mt-0.5">Slot 8 of 8</span>
</button>
</div>

<div className="p-space-md rounded-xl bg-gradient-to-r from-surface-container-highest to-surface-container flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0">
<Icon name="auto_fix_high" className="text-[20px]" />
</div>
<div>
<span className="font-label-md text-label-md font-bold text-on-surface block leading-tight">Next Step: SwiftCart AI Studio</span>
<span className="font-body-sm text-body-sm text-on-surface-variant leading-tight">Remove busy shop backgrounds with one tap</span>
</div>
</div>
<span className="px-2 py-1 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm font-bold shadow-sm">Free</span>
</div>
</div>

<div className="fixed bottom-0 inset-x-0 z-30 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_-8px_24px_rgba(15,23,42,0.08)] px-gutter py-space-sm pb-safe flex items-center gap-space-sm">

<button className="h-12 px-4 rounded-xl text-on-surface font-label-lg text-label-lg hover:bg-surface-container active:scale-95 transition-all flex items-center justify-center gap-1.5 shrink-0" type="button">
<Icon name="bookmark" className="text-[20px]" />
<span>Draft</span>
</button>

<button className="flex-1 h-12 bg-gradient-to-r from-primary-container to-primary text-on-primary rounded-xl font-label-lg text-label-lg font-bold shadow-md active:scale-98 transition-all flex items-center justify-center gap-2" type="button">
<span>Next: AI Studio</span>
<Icon name="arrow_forward" className="text-[20px]" />
</button>
</div>


</div></main>
    </div>
  );
};

export default AddProductStep1PhotosSwiftcartSeller;
