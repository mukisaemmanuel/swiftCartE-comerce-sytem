# swiftCartE-comerce-sytem
An ecommerce system


1. Start the Development Server

Run the development server with pnpm:

powershell
pnpm run dev

(Or simply pnpm dev)

Once started, Vite will output a local URL:

text
  VITE v6.4.6  ready in ~300 ms
  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose

Open http://localhost:5173 in your browser.

TIP

In development mode (DEV), the Floating Dev Role Switcher pill is visible at the bottom-right of the screen. You can use it to switch between roles (buyer, seller, admin, rider, hub) with one click to test different views and flows.

2. Available Terminal Commands
Task	Command	Description
Dev Server	pnpm run dev	Starts the hot-reloading Vite dev server at http://localhost:5173.
Run Tests	pnpm test	Runs the full Vitest suite (14 test files, 57 tests).
Type Check	pnpm run typecheck	Validates TypeScript types across the entire codebase (tsc --noEmit).
Lint	pnpm run lint	Runs ESLint across src/ and tests/.
Production Build	pnpm run build	Compiles TypeScript and creates optimized bundles in dist/.
Preview Build	pnpm run preview	Starts a local server to preview the production dist/ build.
3. Key Navigation Entrypoints in Browser
Buyer Storefront: http://localhost:5173/
Seller Dashboard (Overview): http://localhost:5173/seller
Seller Orders: http://localhost:5173/seller/orders
Seller Products: http://localhost:5173/seller/products
Seller 5-Step Product Wizard: http://localhost:5173/seller/add-product-step-1-photos-seller
Seller Wallet & Payouts: http://localhost:5173/seller/wallet
Seller Returns & Disputes: http://localhost:5173/seller/returns