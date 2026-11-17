# Copy to Clean: Master Audit & Resolution Log

This document tracks all banned phrases, placeholder copy, unverifiable claims, and non-existent payment rails identified in `src/` as part of **Stage C1 (DECISIONS 14 Nov 2026)**.

## Core Decisions & Policies
- **No Escrow:** SwiftCart is an online marketplace connecting buyers and sellers in Kampala, Uganda. Payments are processed exclusively via **Pesapal**. SwiftCart holds funds securely until the buyer confirms receipt with their 6-digit delivery code and the return window closes, after which funds are disbursed to the seller.
- **Truthful & Verifiable:** The platform must never make claims about regulatory licenses or institutional oversight it does not possess (e.g., Bank of Uganda, NPS Act, Stanbic custody, HSM enclaves).
- **Ugandan Localization:** All placeholder locations, currencies, and names use Ugandan equivalents (Kampala districts, UGX integers without decimals, Ugandan names, +256 phone numbers).

---

## Audit Status: 0 REMAINING VIOLATIONS

Both the static file scanner (`tests/banned-copy.test.ts`) and the live DOM Playwright E2E scanner across all routes at 390px, 834px, and 1440px (`tests/e2e/banned-copy.spec.ts`) pass with **0 violations**.

---

## Master Replacement Mapping

| Category | Banned Phrase / Pattern | Replacement Copy | Rationale / Rule | Status |
| --- | --- | --- | --- | --- |
| **Escrow** | `Escrow Protected` / `Swift Escrow Protected` | `Payment Protected` | Plain payment protection; no escrow license claimed | **Cleaned (0 remain)** |
| **Escrow** | `In Escrow` / `Held in Escrow` | `Held until delivery` | Accurate representation of Pesapal delivery hold | **Cleaned (0 remain)** |
| **Escrow** | `Escrow Released` / `Released` | `Paid to seller` | Clarifies disbursement to merchant | **Cleaned (0 remain)** |
| **Escrow** | `Escrow Balance` | `Pending clearance` / `Held balance` | Accurate merchant balance terminology | **Cleaned (0 remain)** |
| **Escrow** | `Escrow Ledger`, `Escrow & Disputes` | `Payment Holds`, `Payments & Disputes` | Descriptive, honest dashboard section headers | **Cleaned (0 remain)** |
| **Escrow** | "funds locked safely in escrow" | "You pay through Pesapal. We pay the seller after you confirm delivery with your 6-digit code." | Clear, accurate explanation of payment flow | **Cleaned (0 remain)** |
| **Vault / Custody** | `payment vault`, `vault balance`, `custody` | `secure balance`, `account balance`, `held balance` | Avoids banking/custodian terminology | **Cleaned (0 remain)** |
| **Locked Funds** | `locked funds`, `ringfenced` | `held funds`, `pending clearance` | Avoids legalistic trust fund jargon | **Cleaned (0 remain)** |
| **Central Bank** | `Bank of Uganda`, `BoU` | `SwiftCart Payments Team`, `Uganda marketplace operations` | We are not licensed or supervised by Bank of Uganda | **Cleaned (0 remain)** |
| **Payment Acts** | `NPS Act 2020`, `National Payment Systems Act` | `marketplace guidelines`, `terms of service` | Pesapal is the payment system provider; SwiftCart is a marketplace | **Cleaned (0 remain)** |
| **Custodian Bank** | `Stanbic custody`, `Stanbic Escrow` | `Pesapal payment processing`, `merchant payments` | Avoids claiming bank-level escrow custody | **Cleaned (0 remain)** |
| **Hardware Security** | `HSM`, `HSM-KM`, `enclave` | `Secure Server`, `Encrypted Gateway` | No dedicated hardware security module/enclave used | **Cleaned (0 remain)** |
| **Tokens & Keys** | `hardware token`, `FIDO2`, `dual-key`, `root key`, `kill switch` | `2FA verification`, `two-factor authentication`, `security protocol` | Realistic web/mobile 2FA terminology | **Cleaned (0 remain)** |
| **Attestation** | `attestation`, `cryptographic`, `ledger hash` | `verified record`, `transaction receipt`, `reference ID` | Removes false blockchain/cryptographic ledger claims | **Cleaned (0 remain)** |
| **Fictional Officers** | `Patricia Namubiru`, `Arbitration Desk`, `Chief Compliance Officer` | `Grace Nakato`, `Dispute Resolution Desk`, `Head of Operations` | Replaces placeholder personas with standard operations staff | **Cleaned (0 remain)** |
| **Legal Posturing** | `board resolution`, `affidavit`, `statutory` | `official review`, `written statement`, `platform policy` | Avoids courtroom terminology for simple disputes | **Cleaned (0 remain)** |
| **Tax & Fiscal** | `VAT`, `URA`, `EFRIS` | `Platform fee`, `Processing fee`, `Receipt` | SwiftCart is not an EFRIS tax invoicing agent | **Cleaned (0 remain)** |
| **Tamper Packaging** | `tamper seal`, `tamper bag`, `tamper-evident` | `package seal`, `delivery package`, `sealed parcel` | Standard courier packaging terminology | **Cleaned (0 remain)** |
| **Exaggerated Guarantees** | `100% guaranteed`, `underwritten 100%`, `insured` | `order protection`, `verified delivery`, `buyer protection` | Truthful representation of dispute remedies | **Cleaned (0 remain)** |
| **Virtual Currency** | `SwiftCoins` | `Store Credit` / `Discount voucher` | No proprietary token/coin exists | **Cleaned (0 remain)** |
| **Unsupported Methods** | `Afterpay`, `Google Pay`, `Apple Pay`, `PayPal`, `instalments` | `MTN Mobile Money`, `Airtel Money`, `Visa / Mastercard (via Pesapal)` | Only supported payment rails are presented | **Cleaned (0 remain)** |
| **Foreign Placeholders** | `Lagos`, `New York`, `NY` | `Kampala`, `Kololo`, `Nakawa`, `Bugolobi`, `Kansanga` | Accurate local Ugandan geography | **Cleaned (0 remain)** |
| **Placeholder Names** | `Alex`, `John Doe` | `Mukasa`, `Kato`, `Namubiru`, `Kizito` | Authentic Ugandan names | **Cleaned (0 remain)** |
| **Foreign Currency** | `$`, `USD`, decimals in UGX | `UGX` (integer amounts formatted with commas) | Ugandan Shillings do not use cents/decimals | **Cleaned (0 remain)** |
| **USSD Prompts** | `*165#`, `*185#`, dial codes | `You will receive a prompt on your phone to approve the payment` | USSD pushes are automated via Pesapal/telco STK push | **Cleaned (0 remain)** |

---

## Permanent Automated Quality Gates

1. **Vitest Codebase Quality Gate:** `tests/banned-copy.test.ts`
   - Scans all source code in `src/` (`.ts`, `.tsx`, `.js`, `.jsx`, `.css`, `.html`, `.json`).
   - Ensures no banned terms appear in source text, literals, or sample datasets.
   - Preserves CSS design system tokens (`--color-emerald-escrow`, `bg-emerald-escrow`) and internal route alias paths while banning user-visible text.

2. **Playwright E2E UI Quality Gate:** `tests/e2e/banned-copy.spec.ts`
   - Runs against real rendered pages in headless browser.
   - Evaluates all routes across three core viewports:
     - Phone: 390px × 844px
     - Tablet: 834px × 1112px
     - Desktop: 1440px × 900px
   - Inspects visible leaf nodes in the DOM to guarantee that no prohibited text is rendered to buyers, sellers, riders, hub agents, or admins.
