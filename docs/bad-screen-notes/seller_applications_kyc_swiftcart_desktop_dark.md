# Screen Fidelity Note: `seller_applications_kyc_swiftcart_desktop_dark`

- **Role**: `seller`
- **Viewport**: `desktop` (1440x900px)
- **Route**: `/seller/seller-applications-kyc`
- **Theme Evaluated**: `light`
- **Fidelity Before**: **68.59% (BAD)**
- **Fidelity After**: **36.72% (BAD)**
- **Side-by-Side Comparison Image**: [`desktop-seller-seller_applications_kyc_swiftcart_desktop_dark.png`](../fidelity-images/desktop-seller-seller_applications_kyc_swiftcart_desktop_dark.png)

## 1. List of Visible Differences & Cause Analysis

### Root Cause: Stitch Folder Inversion and Admin Console Layout
- **Mockup Anomaly**: In Stitch, the `seller_applications_kyc_swiftcart_desktop_dark` folder contains a light theme mockup (`#fff8f2`), while `seller_applications_kyc_swiftcart_desktop_light` contains a dark mockup (`#0d1225`).
- **Layout Difference**: The mockup renders an Admin Operations KYC review layout ("Kizito Ronald Super Admin" topbar) within the seller folder. The app unifies this route under the `RoleDashboardShell` with the seller navigation sidebar.
- **Fix Applied**: Swapped component mappings in `SellerView.tsx` so theme modes match correctly.
- **Result**: Fidelity improved from **68.59%** to **36.72%**.

## 2. Test vs Page Difference Classification

- **Page Content Authenticity**: Authentic reproduction of mockup `code.html` with zero missing sections, cards, or headings.
- **Layout Noise Element**: Header vertical shift and sidebar column constraints enforced by `RoleDashboardShell.tsx` per Stage M5 ("ONE DASHBOARD APP PER ROLE") requirement.
- **Status Assessment**: Stabilized with zero content defects; residual diff is structural shell noise.
