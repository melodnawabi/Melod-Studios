# Melod Studio Design System

A bold, editorial web design system from **Melod Studios** for Kitchener-Waterloo / Waterloo Region businesses — local food spots, trades, salons, event and DJ businesses, professional services. Signature aqua grounds, hot magenta accents, one electric-violet action, heavy Fraunces headlines. It should feel confident, warm and a little playful, never corporate.

The studio uses this system to build client websites. Two layers:
1. **Core system (Aqua Pop)** — the studio's own brand tokens + `ms-*` components.
2. **Remix Lab** — 10 client website templates with switches for palette (11), font pairing (8), hero style (6), layout, density, corners and light/dark.

## Sources
- GitHub: https://github.com/melodnawabi/Melod-Studios (branch `main`) — `tokens.css`, `tokens.json`, `components.css`, `components/*`, `remix-palettes.css`, `melod-studio-style-guide.html`, `fresh-nest-cleaning-quote.html`. Explore it further for the full Remix Lab templates (T01–T10) when building client sites.
- The README references six Claude Design canvases (Heroes, Grids, Storytelling, Showcase, Apps and dashboards, Sections) and a Remix Lab canvas; those were not in the repo.

## Index
- `styles.css` — entry point (imports only)
- `tokens/` — `colors.css` (core + semantic aliases, dark theme), `palettes.css` (Remix palette keys), `typography.css` (fonts + scale), `spacing.css` (space, radii, shadows, motion)
- `components/components.css` — `ms-*` classes the components use
- `components/` — actions/Button · labels/Badge, Eyebrow · content/Card, StatTile, TrustRow · navigation/TabStrip · forms/FormField · brand/Cover
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `ui_kits/remix-lab/` — Fresh Nest Cleaning instant-quote site (Remix Lab T08)
- `ui_kits/style-studies/` — AI Compass + Inkwell, each in Build / Pentagram / Takram styles (reference layouts, own styling)
- `thumbnail.html`, `SKILL.md`, `github.md`

## Components
- **Button** — primary (violet, once per view), outline (magenta), text
- **Badge** — announcement pill (magenta dot) or small mono tag
- **Eyebrow** — uppercase mono, bullet-separated
- **Card** — surface card with signature magenta card bar; skeleton variant
- **StatTile** — big mono number, label, success delta
- **TrustRow** — ✓ facts + avatar stack with count
- **TabStrip** — numbered 01–05 section strip
- **FormField** — labelled input on paper, magenta focus ring
- **Cover** — 960×340 brand cover composition (from `components/Cover/preview.html`)

## CONTENT FUNDAMENTALS
- **Headlines state the benefit in ≤10 words.** "Fresh cuts, booked in seconds" — not "Online appointment scheduling platform". "Your price in 30 seconds. Your home clean by Friday."
- **Hero order is fixed:** pill/eyebrow → headline → 1–2 sentence sub → primary + secondary action → trust signals → visual.
- **Eyebrows:** uppercase mono, bullet separator, 2–4 words: `SALON • KITCHENER`, `NOW BOOKING • FALL 2026`, `HOME CLEANING • WATERLOO REGION`.
- **Voice: a neighbour, not a brochure.** Short sentences. Address the reader as "you", the business as "we" ("We'll confirm by text."). Real numbers ("312 five-star reviews", "18 min average pickup") and local names (Uptown Waterloo, King St, Victoria Park).
- **Sentence case** for headlines, buttons and labels. Buttons are short verbs + object: "Get my price", "Book this clean", "See what's included", "Start over".
- **No em dashes in UI copy** — use a period, comma or bullet (·, •).
- **One primary action per view**; secondaries are outline or text.
- **No emoji.** Unicode glyphs used sparingly as typography: ✓ (trust facts), ★ (ratings), ▲ (deltas), · and • separators.
- Placeholders for unknown client data are bracketed: `[Client first name]`, `[PHONE]`, `[EMAIL]`.
- Reassurance copy is concrete: "No phone tag, no surprise add-ons." "Cancel or reschedule free up to 24 hours before."

## VISUAL FOUNDATIONS
- **Colour.** `ground` (#00dcc8 aqua) is the room; dark theme turns it deep tide teal (#062b2e). `surface` cards sit on ground with **no border**; `line` only for dividers, fields, skeleton bars. `magenta` (#d4006f) is for shapes — card bars, outline borders, chart highlight, focus rings; small magenta text uses `magenta-text` (#9e0058, passes 4.5:1). `violet` (#6200ea) is the single primary action fill. Section moods break long pages: `paper` (calm reading), `mood-violet` (testimonials, stats), `mood-magenta` (CTA band) — never two mood bands adjacent.
- **Type.** Fraunces 800–900 for every headline, tight leading (.95–.98), slight negative tracking (-.015 to -.02em). Manrope for body/UI/buttons (700 for buttons). JetBrains Mono for eyebrows, tab numbers, stats, prices in tables.
- **Layout.** 12-col grid, 1280 max, 48px gutters desktop / 16px mobile. Sections breathe: 96px (`space-24`) top/bottom. Asymmetry welcome (layout variance 7/10): split heroes, offset grids, mixed bento tiles. Avoid three identical centered sections in a row. Density 4/10 marketing, 7/10 dashboards.
- **Backgrounds.** Flat solid colour fields — no gradients except the photo-slot placeholder. No textures, no patterns. Full-bleed colour bands (mood bands) are the main rhythm device.
- **Corners.** Buttons `radius-md` 6px, cards `radius-lg` 12px, fields/bars `radius-sm` 4px, pills 999px. Remix Lab corner switch: sharp 0 / rounded 18·12·8 / pill 32·999·999.
- **Cards.** Surface fill, 12px radius, 24px padding, no border, no shadow. Signature **card bar**: magenta bar 40% × 8px top-left, then two `line` skeleton bars.
- **Shadows.** Mostly flat. `shadow-card` (soft teal drop) only on lifted mockups; `shadow-hard` (6px 6px 0 #111) once per view as a poster accent. Remix templates use hard ink offset shadows on sticker/zine layouts.
- **Borders.** 1px `line` dividers (tab strip, footer). 2px for fields and buttons. Outline buttons use magenta (core) or ink (Remix).
- **Imagery.** Photos get the **duotone**: shadows → `mood-violet`, highlights → ground aqua, then 12% magenta overlay. Where photos don't fit, use illustrated mockups built from tokens (phone/browser frames, booking cards, mini charts). No stock handshakes, no blue-purple gradient blobs, no emoji grids. Full-bleed photo heroes use a black bottom protection gradient (0.78 → 0.18).
- **Motion (5/10).** Hover lifts 2px; 200ms colour fades; scroll reveals fade up 12px; Remix marquee scrolls linearly (26s). All respect `prefers-reduced-motion`.
- **States.** Hover: translateY(-2px), no colour change. Focus: 3px magenta outline, 2–3px offset. Selected options: accent border + 2px accent ring. Disabled/sold-out: opacity .5–.55. No press-shrink.
- **Transparency/blur.** Rare: photo labels on rgba(0,0,0,.55) chips; no backdrop blur.

## ICONOGRAPHY
- Simple **1.75px stroke** icons (the hamburger in source uses 2px), rounded caps, drawn in `ink` or `magenta`, 22px box (`.ico`). Inline SVG only — no icon font, no sprite, no PNGs in the repo.
- No icon set ships in the source. For new icons use **Lucide** (CDN, rounded caps, set `stroke-width=1.75`) — a substitution; flag it.
- Unicode as icons: ✓ trust checks (in `success`), ★ ratings, ▲ deltas. No emoji.
- **Logo:** none provided. Client and studio names are set in the display font (`.logo`: Fraunces 900, 24px). Do not draw a mark.

## Fonts
All from Google Fonts (no binaries in repo): Fraunces, Manrope, JetBrains Mono, plus Remix pairings (Cormorant Garamond, Sora, Anton, Inter Tight, Bricolage Grotesque, DM Sans, Archivo Black, Archivo, Shrikhand, Space Grotesk, Space Mono, IBM Plex Sans). A licensed DaFont display face may later fill the "Yours" slot.

## Intentional additions
- `Cover` as a React component (source only had it as a preview HTML).
- Semantic aliases in `colors.css` (`--text-body`, `--surface-card`, `--action-primary`…) mapping onto source tokens.
