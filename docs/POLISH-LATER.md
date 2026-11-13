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


