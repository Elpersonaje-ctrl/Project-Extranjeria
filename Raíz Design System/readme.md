# RAÍZ — Design System

**Raíz - Asesores Expertos en Extranjería** is a small digital-first migration/foreigner-status (*extranjería*) advisory agency launching in Vigo, Galicia, Spain in 2026. It helps mostly Latin American migrants regularize their residency (*arraigo*), obtain Spanish nationality (including the *Ley de Nietos* / Grandchildren's Law), and renew permits — entirely online, without in-person appointments ("100% telemático, sin cita previa").

Tagline: *"Tu origen te define, tu futuro lo aseguramos nosotros."* ("Your origin defines you, we secure your future.")

This design system was built from the company's real marketing site and internal strategy docs — there is no app, no Figma file, and no existing component library beyond this one static site. Every token and component below is lifted directly from that source.

## Sources

- GitHub repo (marketing site + strategy docs): [Elpersonaje-ctrl/Project-Extranjeria](https://github.com/Elpersonaje-ctrl/Project-Extranjeria)
  - `index.html`, `style.css`, `script.js`, `blog.html` — the live site (source of all visual tokens and components in this system)
  - `BRAND_MANUAL.md` — official brand manual (palette, type, tone, photography direction)
  - `BUSINESS_MODEL_CANVAS.md` — customer segments, value proposition, pricing model
  - `PLAN_OPERATIVO_ETAPAS.md` — operating playbook, document-viability checklists by country of origin
  - `TIKTOK_STRATEGY.md` — content pillars and short-video funnel strategy
  - `SETUP-FORMULARIO.md` — contact form → Google Sheets integration notes

Explore this repo directly for more context (raw copy, additional detail on business processes, checklists per country of origin, etc.) if you have access — it will help you build more accurate, on-brand designs than this system alone can capture.

## Products / surfaces

Raíz has a single digital surface today: the **marketing website** (homepage + blog). There is no mobile app or customer portal in the source material.

## Components

Built from the site's real recurring UI patterns (no component library existed, so this system's inventory *is* the sections/elements found in `style.css`):

- **Core** — `Button` (primary / secondary / whatsapp variants), `Eyebrow` (uppercase section kicker)
- **Badges** — `Stamp` (APROBADO / RECHAZADO ink stamp), `StepStamp` (numbered dashed-circle step marker)
- **Cards** — `FileCard` (torn-paper "case file" problem→solution card), `ServiceCard` (§-marked service card), `BlogCard` (blog teaser)
- **Process** — `ProcessTracker` (horizontal numbered stage tracker with a stamped active-step detail panel, adapted from a reference layout the user supplied and restyled to the Raíz brand)
- **Navigation** — `Navbar` (sticky header), `SealLogo` (compact wordmark), `RootWordmark` (large brand lockup with root-line backdrop, for footers/dividers), `Footer` (dark footer with legal disclaimer)
- **Forms** — `FormField`, `TextInput`, `Select`, `Textarea` (contact-form primitives)

### Intentional additions
None beyond what the source site's markup already implies — every component above has a direct counterpart in `style.css`/`index.html`.

## UI Kits

- `ui_kits/raiz-website/` — interactive recreation of the homepage (`index.html`) and the blog listing (`blog.html`), composed from the components above. Includes a working (front-end only) contact form with the same validation and status messages as the source.

## Index / manifest

```
styles.css                    → root stylesheet (imports below)
tokens/
  colors.css                  → palette + semantic color aliases
  fonts.css                   → @font-face / Google Fonts import
  typography.css               → type scale
  spacing.css                  → spacing, radius, shadow, layout tokens
assets/
  brand/                       → seal + stamp SVGs and texture filters extracted from the source site (no logo file exists — see Iconography)
components/
  core/                        → Button, Eyebrow
  badges/                      → Stamp, StepStamp
  cards/                       → FileCard, ServiceCard, BlogCard
  navigation/                  → Navbar, SealLogo, Footer
  forms/                       → FormField, TextInput, Select, Textarea
guidelines/                    → foundation specimen cards (colors, type, spacing, brand)
ui_kits/raiz-website/          → homepage + blog recreation
SKILL.md                       → Claude Code-compatible skill file for this design system
```

---

## CONTENT FUNDAMENTALS

Source: `BRAND_MANUAL.md` §2, plus copy patterns across `index.html` and `blog.html`.

- **Tone**: professional, direct, reassuring, educational, solution-oriented ("resolutivo"). Explicitly **not** cold, overly technical/boring, arrogant, or overly casual/slangy.
- **Address**: uses **"tú"** (informal you) on social/marketing copy to connect on TikTok/Instagram and the marketing site, but switches to **"usted"** (formal you) in contracts and official resolutions. Always respectful, never condescending.
- **Voice balances legal authority with empathy** — the copy repeatedly frames bureaucracy as the *enemy* and Raíz as the ally: *"Haz lo mejor que puedas, que de los papeles nos encargamos nosotros"* ("Do your best — we'll take care of the paperwork").
- **Structure**: headlines pair a felt problem with a confident promise (eyebrow → bold H1/H2 → reassuring lead paragraph → CTA). The homepage's whole "pain points" section is literally structured as problem (stamped RECHAZADO) → Raíz's fix (stamped APROBADO).
- **Specificity as trust signal**: copy leans on concrete numbers and named systems rather than vague reassurance — *"0% rechazos"*, *"Honorarios justos por hitos: 50% – 30% – 20%"*, *"Respuesta en menos de 2 horas hábiles"*, named platforms (*Mercurio*, *AutoFirma*), named laws (*Ley de Nietos*, *Arraigo Social/Laboral/Formación*).
- **No emoji in body copy** — the only emoji usage on the whole site is the WhatsApp button icon (💬) and a checkmark (✓) in the trust badge. Do not scatter emoji elsewhere.
- **Casing**: sentence case for headings/body; eyebrows and stamps are in visual UPPERCASE (via `text-transform` / literal caps) — but written Spanish sentences are never over-capitalized.
- **Vibe**: warm bureaucratic-authority — an agency that respects the seriousness of someone's legal status while refusing to be cold about it. Legal/paperwork metaphors (expedientes, sellos/estampillas, "cero rechazos") are used constantly, deliberately, and literally in the UI (case-file cards, ink stamps) — this is the core creative conceit of the brand, not decoration.
- **Disclaimers matter**: every page states plainly that Raíz is an administrative representation agency, *not* a licensed law firm (colegiado), and does not handle judicial appeals — this legal boundary is stated in plain language, not buried in fine print.

## VISUAL FOUNDATIONS

Source: `BRAND_MANUAL.md` §3, `style.css` (all values below are copied verbatim, never rounded to a framework default).

- **Colors**: warm, "aged paper" background (`#F1EBD8`) instead of white — explicitly chosen in the brand manual to avoid "the classic boring lawyer blue." Primary is a deep forest green `#1C3B30` (growth, rootedness, stability); accent is a brass/gold `#B8874B` (the wax-seal, legitimacy); two "stamp ink" colors — oxblood red `#9C2B2B` for rejection and olive green `#2B6E4E` for approval/WhatsApp — are used exclusively for the stamp motif and success/error states, never as general decoration.
- **Type**: three-family system, each with one job. **Fraunces** (serif, display) carries all headings — chosen for legal authority and warmth. **Inter** (sans) is body copy — modern, agile, highly legible on screen. **Special Elite** (monospace typewriter face) is reserved for eyebrows, dates, stamps and "official form" labels — a deliberate nod to the typewritten immigration forms this agency replaces. Headings use `font-weight: 600`; body leans on regular/medium weights. *(A clean-sans + script alternative was tried and reverted — see Design decisions below.)*
- **Spacing**: generous section rhythm — 88px vertical section padding (`--space-14`) at desktop, collapsing to 56px on small screens. Card internal padding is 20–32px. Grids use explicit `gap` (28–30px) rather than margin-based spacing.
- **Backgrounds**: flat aged-paper color as the page background — no photography, no gradients, no repeating pattern tiles. The only "texture" is an SVG `feTurbulence` grain filter applied as a subtle multiply-blended overlay on the hero (`.hero-grain`), plus a second turbulence filter that distorts the ink stamps (`.stamp`, `.hero-stamp`) so they read as physically pressed rather than vector-perfect. No full-bleed imagery is used anywhere in the current site — this is a strong open point (see Iconography/Caveats).
- **Animation**: intentionally minimal and utilitarian — 0.15–0.2s ease transitions only, on `transform: translateY(...)` (button/card lift) and `background`/`box-shadow` changes. No bounces, no fades-on-scroll, no looping decorative animation. `prefers-reduced-motion` fully disables all transitions/animations site-wide.
- **Hover states**: primary button darkens to `--forest-light` and lifts 1px; secondary (outline) button inverts to a solid forest fill; WhatsApp button darkens slightly; cards (blog, file) lift via `translateY(-3px)` plus a soft shadow — no opacity-based hovers anywhere.
- **Press/active states**: not explicitly defined in source CSS beyond the hover transform — treat press as a slightly reduced version of the hover lift (no separate active styling was found; flag before inventing new press behavior).
- **Borders & shadows**: nearly all cards get a hairline `1px solid` border in the warm "rule" tan (`--rule` `#C7B78E`) plus a soft warm-toned outer shadow (`rgba(28,22,12,0.14)`, 10px blur/24px spread) — never a hard drop shadow, never an inner shadow, never a colored left-border accent.
- **Corner radii**: small and consistent — 6px is the base radius for buttons/cards/inputs; case-file cards use a near-square 2px radius instead, because their real signature shape is the **torn top edge** (`clip-path: polygon(...)`), not rounding.
- **Cards**: paper-card background (`#FBF8EF`, lighter than the page), 1px rule-tan border, base radius or torn edge, soft warm shadow. No colored accent borders, no icon badges — the file-tab label and stamp motif carry the visual interest instead.
- **Transparency/blur**: used exactly once — the sticky navbar (`rgba(paper, 0.92)` + `backdrop-filter: blur(6px)`) so content scrolling underneath softly diffuses. Not used elsewhere (no glassmorphism on cards/modals).
- **Imagery color vibe**: not present in the current codebase (no photography assets exist yet), but the brand manual is explicit: real faces (not stock-photo diversity), warm natural light, expressions of relief/happiness, Latin American diversity — explicitly rejecting "people in suits at a glass table" stock photography.
- **Layout rules**: single sticky element (the navbar); everything else scrolls normally in a centered `1160px` max-width container with 24px side padding. Two-column asymmetric grids (contact form) and 2/3-column card grids elsewhere.
- **Iconography approach**: no icon font or SVG icon set — see ICONOGRAPHY below.

## ICONOGRAPHY

The source site uses **no icon library, no icon font, and essentially no PNG/SVG icon set**. Instead it relies on:

- **Hand-set inline SVGs for the two brand-specific marks**: the circular dashed "seal" logo mark (with a lone serif "R") and the large hero "CERO RECHAZOS" circular stamp with text-on-a-path. Both are copied verbatim into `assets/brand/` (`seal-mark.svg`, `hero-stamp.svg`) — do not redraw or reinterpret these; they are the actual brand marks as coded by the source.
- **Typographic glyphs standing in for icons**: the § (section sign) marks each legal-service card instead of a pictogram; numbered dashed-circle "stamps" (`step-stamp-template.svg`) mark the 3-step process instead of icon badges.
- **Minimal emoji**: only 💬 (WhatsApp CTA) and ✓ (trust badge) — never used decoratively elsewhere.
- **SVG filter textures** (`stamp-texture`, `paper-grain`) are copied to `assets/brand/texture-filters.svg` — include this file's `<defs>` (or inline the two filters) wherever a stamp or the hero grain effect is reused.

**No company logo/wordmark image file exists in the source.** The "logo" on the live site is literally this inline SVG seal + serif "RAÍZ" text, not an image asset. This design system follows the same approach — `SealLogo.jsx` renders the mark from code. **Do not invent or draw a new logo.** If a real logo file is produced later, drop it into `assets/brand/` and update `SealLogo.jsx` to use it.

## Design decisions (post-launch revisions)

A clean-sans/no-stamp direction was tried per early feedback (Inter for all utility text, a flat status tag instead of the rotated ink stamp, a script accent for the hero's italic line) and then **reverted back to the original ink-stamp + Special Elite treatment** per follow-up feedback — the original read as more distinctive and on-brand. The `--font-utility` / `--font-script` (Yellowtail) tokens are still defined in `tokens/fonts.css` in case that direction is revisited, but nothing in the live components currently uses them.

## Caveats & open questions

- **No font files were vendored** — `tokens/fonts.css` pulls Fraunces / Inter / Special Elite from the Google Fonts CDN, matching the same approach the source repo used (it also links Google Fonts directly, with no local font binaries). If you need fully offline/self-hosted fonts, say so and real `.woff2` files can be sourced and swapped in.
- **No real photography or full-bleed imagery exists anywhere in the source** — the brand manual describes a clear photographic direction (real faces, warm natural light, Latin American diversity) but zero photos are checked into the repo. Any UI kit screens needing a photo currently use a plain placeholder block; please supply real photography or stock references to fill these in properly.
- **No press/active (`:active`) states are defined** in the source CSS — only `:hover`. Flagging this rather than inventing new interaction states.
- **Contact form backend is a stub** — the real site posts to a user-configured Google Apps Script URL (see `SETUP-FORMULARIO.md`); the UI kit recreates only the front-end validation/status messaging, not a live submission.

---

**This is a living system.** The richest source of ground truth is the linked GitHub repo — pull it again any time the live site changes, and treat this system as a snapshot that should be refreshed against it periodically.

**Ask:** point out anything here that reads off-brand, and tell us what's missing — a real logo file, real photography, more pages/screens (pricing? case-status portal for clients?) — and we'll fold it in and rebuild the affected parts.
