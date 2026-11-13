# SwiftCart build rules (read before building any screen)

Copy the mockups exactly. Do not change text, layout or features. Wording and
feature clean-ups are a later phase.

The mockups in design/ are to be reproduced EXACTLY: same layout, spacing,
colours, fonts, sizes, text, sample data, numbers, icons, images, header,
sidebar, bottom bar and features that are visible in the mockup. Do not redesign,
simplify, rename, reword, reorder or "improve" anything. Polishing, wording
changes and removing unwanted features come LATER in a separate phase.

## Banned copy (a test must fail the build if any of these appear in src/)
Bank of Uganda, BoU, NPS, Stanbic (as custody/escrow), regulated, statutory, HSM, enclave,
hardware token, FIDO2, dual-key, kill switch, root key, key rotation, attestation,
cryptographic, ledger hash, officer names (e.g. Patricia Namubiru), Arbitration Desk,
Chief Compliance Officer, board resolution, affidavit, VAT, URA, EFRIS, SwiftCoins, Afterpay,
Google Pay, instalments, "tamper seal / tamper bag" (unless sealed bags are really used).

## Approved replacement copy
- Payment protection: "Your payment is held safely by SwiftCart until you confirm delivery."
- Disputes are decided by "SwiftCart Support" (release to seller / refund buyer / partial refund, with a typed reason).
- Admin sign-in security: password + a code. Maintenance mode replaces the "kill switch".
- Privacy / Terms: placeholder text, to be reviewed by a lawyer before launch.

## Product rules
- Currency: UGX only, no decimals, thousands separators. Never $. Ugandan places, MTN MoMo, Airtel Money, Visa, Mastercard.
- Delivery / handover code: 6 digits. Shown ONLY on the buyer's screens. Riders and hub agents type it into 6 empty boxes. Admin and sellers never see it.
- Sellers do not see buyer phone or full address (first name + district only).
- Money or irreversible actions (refund, release, freeze, suspend, role change) need a confirm dialog with a typed reason.
- All mock names, order numbers and amounts are placeholders. Use real Firestore data.
- Do not invent features. If a screen shows something the backend does not do (live rider GPS, push, SMS), build the UI behind a feature flag and list it in docs/GAPS.md.

## Theme and layout
- Buyer side: light only.
- Dashboards (seller, admin, super-admin, rider, hub): dark by default, light available, ONE sun/moon toggle in the top bar. Menus say "Overview", not "Dashboard".
- Mobile: real app layout. Buyer, rider, hub = bottom tab bar. Seller, admin = hamburger drawer. No footer on buyer mobile.
- Tablet: buyer = top header; seller/admin = collapsible side rail; rider/hub = bottom tab bar with two columns.
- Desktop: buyer = orange header + search + "All Categories" hover panel; dashboards = fixed left sidebar.
- Minimum body text 14px (the dashboard mockups use text that is too small).
- Brand: orange #FF8A1F to #DA3700, navy #0E1B4D, cream #FFF8F2, Plus Jakarta Sans. Logos are in public/brand/.
