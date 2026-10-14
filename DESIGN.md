# Design

<!-- impeccable:design-schema 1 -->

## World

**Technical editorial** — the precision of a well-built developer tool (Linear, Vercel, dark.design)
fused with the restraint of a Swiss portfolio. The surface reads like a senior engineer's field
notebook: structured, confident, quiet. Mode: **Experience/Persuade** hybrid — the artifact leads,
the interface recedes, but every section earns a decision.

## Palette

Color strategy: **Committed** — a graphite field that owns the surface, with electric lime doing
real work (status, links, active states, accent marks). Never scattered decoration.

### Dark (default)

| Token           | Value               | Use                                           |
| --------------- | ------------------- | --------------------------------------------- |
| `ground`        | `#111215`           | page background                               |
| `surface`       | `#181A1F`           | cards, panels, elevated regions               |
| `surface-raise` | `#1E2127`           | hover/elevated card state                     |
| `border`        | `#2A2E37`           | 1px hairlines, card borders                   |
| `text-primary`  | `#F4F2ED`           | headings, body                                |
| `text-muted`    | `#8E95A2`           | metadata, secondary copy                      |
| `accent`        | `#A3E635`           | links, active nav, status dots, CTAs, kickers |
| `accent-soft`   | `#A3E635` at 10–15% | tinted backgrounds for pills/tags             |

### Light (toggle)

| Token          | Value     | Use                                      |
| -------------- | --------- | ---------------------------------------- |
| `ground`       | `#F8F8F6` | page background                          |
| `surface`      | `#FFFFFF` | cards                                    |
| `border`       | `#E2E4E9` | hairlines                                |
| `text-primary` | `#111215` | headings, body                           |
| `text-muted`   | `#5A6270` | secondary copy                           |
| `accent`       | `#65A30D` | links, CTAs (lime darkened for contrast) |

## Typography

| Role                   | Font             | Weights       | Notes                                                        |
| ---------------------- | ---------------- | ------------- | ------------------------------------------------------------ |
| Display / headings     | `Space Grotesk`  | 500, 700      | tight tracking (-0.02em), geometric personality              |
| Body / UI              | `Inter`          | 400, 500, 600 | generous line-height (1.6–1.75)                              |
| Metadata / code / tags | `JetBrains Mono` | 400, 500      | small caps feel: kickers, dates, stack tags, section numbers |

Kickoff pattern: `font-mono` kicker line (`01 / EXPERIÊNCIA`) above every `font-display` section
heading.

## Spacing & Rhythm

- 8pt base grid; section padding `py-20` to `py-28`
- Max content width `max-w-6xl` (`1152px`)
- Hairline borders `1px` on all cards/panels; `border-radius` minimal (`rounded-md` max, often
  `rounded-sm` or `rounded-none` for terminal feel)

## Components

- **Nav**: fixed, blur-backed, hairline bottom border; logo `darlei.dev` in mono (a handle = data,
  so mono is honest here); nav links in sans with active accent underline; status = current role in
  mono; theme toggle icon (phosphor)
- **Buttons**: primary = accent bg + graphite text, `rounded-sm`; secondary = 1px border,
  transparent
- **Section heading**: display font only — it carries its own weight (no kicker/eyebrow, no
  decorative section numbers). A mono meta line may sit in the _same row_ as the heading (e.g.
  count, range) as data, never stacked above it as a label
- **Experience item**: timeline with 1px rail; company in display font, role in body, period in mono
  (dates = data); stack tags as mono pills
- **Project row**: editorial list rows separated by 1px hairlines — title in display, description in
  body, stack pills and year in mono as trailing meta. No icon-card grid
- **Photo frame**: hairline border, mono caption below (name + location = data)
- **Status indicator**: CSS dot (`span.rounded-full.bg-accent` + pulse), never a unicode glyph

## Motion

- Transitions `duration-200`–`300`, `ease-out`; translate/color/border only
- Nav hide/show on scroll preserved from incumbent
- No scroll-jacking, no parallax, no gratuitous animation

## Browser surfaces

- `::selection` tinted accent (in global.css)
- Focus-visible ring: `outline-accent` offset 2px
- Scrollbar: thin, `edge` thumb on `ground` track
- Numeric data (dates, counts) uses `tabular-nums`
