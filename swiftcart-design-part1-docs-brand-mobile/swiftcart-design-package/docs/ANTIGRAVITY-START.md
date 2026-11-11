# First prompt for Anti-Gravity (paste this)

This is a NEW SwiftCart project. Read docs/BUILD-RULES.md, design/INDEX.md and docs/MISSING-PAGES.md first.
Do NOT build screens yet. Do these setup tasks only:
1. Create the tooling: React + Vite + TypeScript + Tailwind v4. Put design tokens in src/styles/tokens.css
   (colours and font from BUILD-RULES.md, plus dark dashboard tokens read from the dark screens in design/).
2. Create a responsive app shell: buyer (top header on tablet/desktop, bottom tab bar on mobile),
   dashboard shell (drawer on mobile, side rail on tablet, fixed sidebar on desktop, one sun/moon toggle),
   rider/hub shell (bottom tab bar).
3. Copy public/brand/ logos into place; wire favicon, apple-touch-icon and web manifest icons (icon-192, icon-512).
4. Add tests/banned-copy.test.ts that scans src/ and fails if any banned phrase from BUILD-RULES.md appears.
5. Create docs/GAPS.md (empty list) for features that need backend work.
6. Report what you created and wait for the next prompt.
