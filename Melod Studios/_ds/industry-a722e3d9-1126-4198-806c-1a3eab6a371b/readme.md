# MnM Adventures design system

MnM Adventures is Melod Nawabi &amp; Meena Sukhram-Nawabi's travel, influence and monetization brand — "2 passports, 1 adventure." Clean and practical over precious: white/off-white grounds, structured grids, hairline dividers, soft shadows instead of heavy framing, rounded-friendly type (Fredoka over Nunito), and a two-accent palette (MnM Blue for brand/business moments, MnM Yellow for fan-facing calls to action). The site this system serves has one commercial job — land brand sponsorships — and one editorial job — be a genuinely useful, fun travel resource, written in "we."

## How to use this

- Link the one stylesheet from every page — `<link rel="stylesheet" href="styles.css">` (adjust the relative path) — and take every color, font, spacing, radius and shadow from its variables (`var(--color-*)`, `var(--font-*)`, `var(--space-*)`, `var(--radius-*)`, `var(--shadow-*)`). Never hard-code a hex, a font name or a px value the tokens already carry.
- Build with the classes below rather than inventing parallel ones; the component pages are plain HTML, so view source and copy the markup.
- `templates/mnm-adventures/` is the actual website — nine Design Components (one per page) sharing a `Nav` and `Footer`. A consuming project copies the whole folder.
- The whole system was derived from `theme.json`. To change the look, edit the tokens at the top of `styles.css` — every page, the thumbnail and this guide read from them — and keep `theme.json` and this file in step so they don't drift from what the CSS actually does.

## Brand

- Founders: Melod Nawabi and Meena Sukhram-Nawabi — they travel solo and together, and the site speaks as one voice, "we," not two bylines.
- Tagline: "2 passports, 1 adventure."
- Voice: adventurous &amp; bold, playful &amp; fun, practical &amp; helpful — never precious, never stiff. Real stories over generic travel-blog copy.
- Channels: YouTube @mnmadventure, Instagram @mnmadventure_.
- No logo file exists yet (the Looka brand kit needs a login we don't have) — every page sets "MnM Adventures" in `--font-heading` as the wordmark. Swap in the real mark the moment it's exported; don't hand-draw a substitute.
- Never invent specific biographical facts (how they met, dates, home base, past brand deals) or real follower counts. Any number or story beat that isn't confirmed ships as a clearly-labeled placeholder ("*sample figures") so it reads as a placeholder, not a lie.

## Color

A white ground (`--color-bg` #ffffff, `--color-surface` #f6f7f9 for banding) with `--color-text` #1c2430 and two real accents: `--color-accent` #1e5fa8 (MnM Blue) and `--color-accent-2` #ffc93c (MnM Yellow). Each role carries a 100–900 tonal ramp — light steps (100–300) for tints/hovers/badges, 500 the role's base, dark steps (700–900) for text-on-tint and pressed states. The working split across the site: **blue** for navigation, links, and brand/business moments (media kit CTA, stats); **yellow** for the fan-facing primary action (watch, read, follow). Don't mix that up page to page. Use `--shadow-sm/md/lg` for elevation, not ad-hoc box-shadows.

## Type

Fredoka for headings over Nunito for body text (`--font-heading` / `--font-body`) — rounded, friendly, still legible at practical sizes. Radius runs generous (`--radius-sm` 8px, `--radius-md` 14px, `--radius-lg` 22px, `--radius-pill` for buttons/tags) — round corners are part of the friendly voice, not decoration to dial back.

## Icons

Use Lucide icons (https://lucide.dev), stroke-width 1.5.

## Interaction states

Interactive states are themed, never browser defaults: a `:hover` tint and a pressed state one step past the base on the relevant ramp, `:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }`, `::selection` a yellow tint. Don't restyle per page.

## Imagery

Real, natural-color travel photography — no duotone wash, no filters baked into the system. Until real photos land, use the `.ph-img` placeholder (a striped block with a monospace caption naming the shot, e.g. "PHOTO — Amalfi Coast, Italy") so pages read as obviously-placeholder, never as a finished broken image.

## Components

| Class | What it is | Shown in |
| --- | --- | --- |
| `.btn` with `.btn-primary` (yellow, fan actions), `.btn-accent` (blue, brand/business actions), `.btn-secondary`, `.btn-ghost`, `.btn-icon`, `.btn-block` | Actions | components/buttons.html |
| `.tag` with `.tag-accent`, `.tag-accent-2`, `.tag-neutral`, `.tag-outline` | Small labels tinted from the ramps | components/buttons.html |
| `.field` + `label`, `.input`, `.radio` + `.dot`, `.seg` + `.seg-opt` | Form fields and choices on native elements — no script | components/forms.html |
| `.card` with `.card-kicker`, `.card-title`, `.card-body`, `.card-meta`; `.elev-sm/md/lg` | White cards, hairline border by default, soft shadow on elevation | components/cards.html |
| `.nav` + `.nav-brand` | The header bar | components/navigation.html |
| `.table` | Data tables with themed header and row rules | components/table.html |
| `.dialog-backdrop` + `.dialog` (+ `.dialog-title/-body/-actions`) | A modal at the top elevation | components/dialog.html |
| `.ph-img` | The photograph-not-dropped-in-yet placeholder | foundations/image.html |
| `.hr` | A horizontal rule — present, but this system prefers whitespace | — |

States are built in: hovers/pressed states come from the ramps, keyboard focus is the 2px accent ring, `::selection` is a yellow tint, disabled controls drop to 45% opacity.

## Do

- Keep grounds white/off-white with hairline dividers; let color come from the two accents, not from tinting every surface.
- Color-code intent: yellow primary buttons for what a fan/follower does, blue for brand/business moments (media kit, partner CTAs, stats).
- Round generously and keep type in Fredoka/Nunito — friendly is the point.
- Caption every unfilled photo slot with `.ph-img` so it's obviously a placeholder.

## Don't

- Don't invent biographical facts, past brand partners, or follower counts — placeholder and label it, or leave it for Melod &amp; Meena to fill in.
- Don't duotone or filter photography; travel photos should read as real.
- Don't flatten cards back to transparent hairline boxes — this system's cards are solid white with a border or soft shadow.
- Don't draw a substitute logo. Type the wordmark until the real mark is exported from Looka.

## Files

- `styles.css` — the only stylesheet: tokens plus the component layer. Link it from every page.
- `readme.md` — this guide.
- `theme.json` — the parameters these files were derived from.
- `thumbnail.html` — the project cover (wordmark + swatches).
- `foundations/` , `components/` — token and component specimen pages inherited from this system's starting scaffold; still on the prior "Industry" copy in places — due for a pass, flagged here so it isn't mistaken for finished guidance.
- `templates/mnm-adventures/` — the actual MnM Adventures website: `Home`, `OurStory`, `TravelGuides`, `DestinationMap`, `Videos`, `WorkWithUs`, `Shop`, `Contact`, `Press`, plus shared `Nav`/`Footer`. Every page loads tokens via `ds-base.js`.
- `templates/deck/`, `templates/landing/` — generic starters inherited from the prior scaffold, not MnM-specific.
- `assets/photo.jpg` — a reference photograph from the prior scaffold.
