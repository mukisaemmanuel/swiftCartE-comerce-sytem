# SwiftCart Polish-Later Log

This file tracks visual oddities, text/currency inconsistencies, and wording polish items preserved verbatim from the original Stitch mockups, to be cleaned in the polishing phase.

## Currency & Pricing Discrepancies
- **USD vs UGX Inconsistencies**: Several mockups (such as mobile `home_swiftcart_marketplace_2`) display prices in USD (`$18.90`, `$42.00`, `$4.99`, `$22.90`) alongside UGX amounts (`UGX 55,000`, `UGX 185,000`).
- **Standardization Requirement**: The application domain uses Ugandan Shillings (UGX) as an integer with zero decimals everywhere. In the polishing phase, all currency references and strikethrough original prices will be formatted as `UGX <amount>` without decimals.
- **Empty Price Safeguard**: Strikethrough old prices must always include the numeric value and never display "UGX" or "$" alone.

## Visual Fidelity & Layout Discrepancies (Documented per Stage M2 Part B.4)
- **Stitch `screen.png` Export Dimensions vs Responsive Viewports**:
  The static mockup reference images (`screen.png`) in `design/` were exported by Stitch using fixed device frames or downscaled preview rasters (e.g. `home_swiftcart_marketplace_2/screen.png` is rasterized at 284px width, others at 320px or 375px), whereas the application renders natively at standard responsive viewports (390x844 mobile, 834x1112 tablet, 1440x900 desktop).
  Rescaling a 284px raster up to 390px non-linearly stretches text kerning, line heights, and padding, causing pixelmatch discrepancy flags even though the rendered DOM, CSS classes, colors, and layout match `code.html` 100%.
- **Mobile Home Hero Carousel State**:
  The mobile home banner features two slides ("Super Tech Week" followed by "Mega Brand Sale") with dot indicators and no arrows per Stage M2 specification. The static `screen.png` captured the "Mega Brand Sale" slide state, creating an expected pixel delta during automated screenshot comparison of the active slide.
- **Offline Localized Assets vs Remote CDNs**:
  All remote images (originally hotlinked from Unsplash or Google Storage) were replaced with local offline WebP assets in `public/images/` and SVG placeholders in `public/placeholders/`. Icons are rendered via local inline SVGs (`<Icon name="..." />`), ensuring zero external network dependencies and sub-300 KB bundle chunks.
- **Mockup Sample Copy & Geographic Oddities**:
  Mockup copy contains location placeholders (such as "Lagos / NY" in header address dropdown, "Sarah", "Joshua Kato Mukasa") and sample data that are preserved verbatim during Stage M reproduction, scheduled for Ugandan localization during the polishing phase.
- **Theme Variants (Dark vs Light)**:
  Mockups across `design/*/seller/` include a mix of light and dark screens (`_light` vs `_dark`). The Seller dashboard defaults to dark theme (`#0f172a` background, `#f9fafb` text) and provides a theme toggle button for light mode.

## Stage M5 Additions & Intentional Differences
- **Role Dashboard Unified Shell (Seller, Admin, Super-Admin, Rider, Hub)**:
  Original Stitch phone mockups featured disconnected dummy `href="#"` links and fragmented navigation (e.g. 11 seller screens had baked-in drawers while others had none; hub screens had 3 conflicting menus). A persistent `RoleDashboardShell` now unifies all 5 roles with a shared top bar (logo, role title, theme toggle, hamburger), drawer with backdrop and close button, and active tab highlights. Inverted/baked-in headers were cleanly removed from screen components to avoid header duplication.
- **Buyer Tablet Minimum Font Size (834x1112 Accessibility)**:
  Stitch tablet mockups included multiple `text-[10px]` and `--text-label-sm: 10px` elements. For tablet readability and WCAG accessibility standards, typography on tablet viewports (>=768px) is enforced at a minimum of 12px (`--text-label-sm: 12px; font-size: 12px !important;`).
- **Modal Backdrops and Overlays**:
  Screens such as `/mtn-momo-ussd-165-pin-prompt` and `/add-money-bottom-sheet` render as interactive overlays (`fixed inset-0 z-50 flex flex-col justify-center items-center`) over the application context rather than isolated standalone pages, causing expected diff percent with isolated static mockup PNGs.
- **Dynamic Boda Map Graphics**:
  `/live-boda-rider-tracking` renders live SVG paths, boda rider speed indicators, and drop-off markers. The slight coordinate differences between static mockups and responsive tablet rendering account for pixel diffs while DOM structures remain authentic.

## Stage M9 Remaining BAD Screens & Non-Standard Stitch Mockup Dimensions

The automated pixelmatch fidelity audit tests screens at standard responsive target viewports (Mobile: 390x844, Tablet: 834x1112, Desktop: 1440x900). A subset of Stitch mockup `screen.png` reference assets were exported at non-standard canvas widths that do not match the target device viewports. While the code implements `code.html` verbatim, linear scaling of mismatched canvas widths causes expected layout, font-wrapping, and card-height reflow diffs:

### Desktop Viewport (1440x900)
- `home_marketplace_swiftcart_desktop_1`: Stitch exported a mobile canvas (448x1600) into desktop folder; scaling 448px to 1440px stretches cards 3.2x vs responsive 4-column layout.
- `home_marketplace_swiftcart_desktop_2`: Stitch exported a 663x1600 canvas into desktop folder; rescaled cards reflow differently than 1440px desktop grid.
- `store_page_soundcore_uganda_official_desktop_1`: Stitch exported a 905x1600 narrow canvas into desktop folder instead of 1440px.
- `product_detail_soundcore_space_one_desktop_1`: Stitch exported an 859x1600 tablet canvas into desktop folder instead of 1440px.
- `register_swiftcart_desktop_2`: Stitch exported a 1326x1600 canvas instead of 1440px, causing margin scaling delta.
- `terms_of_service_privacy_swiftcart_desktop`: Stitch exported a 378x1600 mobile column canvas into desktop folder.
- `help_centre_faq_swiftcart_desktop`: Stitch exported a 516x1600 mobile column canvas into desktop folder.

### Tablet Viewport (834x1112)
- `mtn_momo_ussd_pin_prompt_tablet`: Stitch exported a 1566x1600 desktop canvas into tablet folder; downscaling 1566px to 834px shrinks modal and fonts.
- `order_tracking_milestone_timeline_tablet`: Stitch exported a 1572x1600 desktop canvas into tablet folder.
- `search_categories_swiftcart_tablet`: Stitch exported an 1142x1600 wide canvas into tablet folder.
- `wishlist_swiftcart_buyer_tablet`: Stitch exported an 859x1600 canvas vs 834px tablet viewport.
- `search_results_filter_drawer_swiftcart_tablet`: Stitch exported an 859x1600 canvas vs 834px tablet viewport.

### Mobile Viewport (390x844)
- `mtn_momo_ussd_165_pin_prompt`: Stitch exported a 706x1600 2x canvas with modal overlay vs 390px mobile viewport.
- `add_product_step_1_photos_swiftcart_seller`: Stitch exported a 522x1600 canvas vs 390px mobile viewport.
- `add_product_step_2_ai_photo_studio_swiftcart_seller`: Stitch exported a 577x1600 canvas vs 390px mobile viewport.
- `add_product_step_5_buyer_preview_submit_swiftcart_seller`: Stitch exported a 488x1600 canvas vs 390px mobile viewport.
- `followed_stores_swiftcart_uganda_1`: Stitch exported a 524x1600 canvas vs 390px mobile viewport.
- `users_roles_swiftcart_super_admin`: Stitch exported a 431x1600 canvas vs 390px mobile viewport.
- `deliveries_swiftcart_rider`: Stitch exported a 473x1600 canvas vs 390px mobile viewport.

## Stage M11 Logged Visual Oddities
- **Buyer Home Hero Banner Headline Overlap**: On buyer desktop and tablet home (`/`, `/home-swiftcart-marketplace-2`), the headline text ("SoundCore Space One ANC") partially overlaps the headphone product image in the hero banner. This reproduces the original Stitch mockup (`home_marketplace_swiftcart_desktop_1` and `home_marketplace_swiftcart_desktop_2`) composition exactly, where the headline layer sits over the visual. Logged for future design refinement.





