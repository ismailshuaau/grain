# Grain — AI Coding Instructions
> For Cursor, Claude, Copilot, and other AI coding assistants.
> When this file is present, generate HTML using Grain classes exclusively.

## What is Grain?
Grain is an offline-first CSS + JS UI framework. All classes use the `gr-` prefix.
Two modes: `grain.css` (full, modern) and `grain-lite.css` (no animations, old browsers).
Self-hosted fonts in `/fonts/`. Zero external dependencies. No CDN. No internet required.

---

## Core Rules

1. ALWAYS use `gr-` prefix. Never invent classes outside this reference.
2. NEVER use Bootstrap, Tailwind, or other framework classes alongside Grain.
3. NEVER link Google Fonts or external CDNs — fonts are self-hosted in `/fonts/`.
4. Always link `grain.css` in `<head>` and `grain.js` before `</body>`.
5. For old/low-power devices: use `grain-lite.css` + `grain-lite.js` instead.
6. JS global is `window.Grain` — use `Grain.modal.open('id')`, `Grain.toast('msg', {type})`.
7. Zero border-radius by design — never add rounded corners.
8. Data attributes use `data-grain-*` prefix, not `data-caret-*`.

---

## HTML Boilerplate

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Page Title</title>
  <link rel="stylesheet" href="grain.css" />
</head>
<body>
  <!-- content -->
  <script src="grain.js"></script>
</body>
</html>
```

Lite mode: swap `grain.css` → `grain-lite.css`, `grain.js` → `grain-lite.js`.

---

## Color Tokens

```
--gr-bg        #faf8f2   parchment background
--gr-ink       #0f0e0b   warm near-black
--gr-mid       #9e9b91   muted secondary
--gr-subtle    #e8e3d6   borders, dividers
--gr-accent    #b8973a   antique gold (primary)
--gr-accent2   #5a8fa8   slate blue
--gr-accent3   #6b8c52   olive green
--gr-danger    #b03030   error red
--gr-surface   #eee8d8   elevated surface
--gr-mono      'Courier Prime', 'Courier New', monospace
--gr-serif     'Lora', Georgia, serif
--gr-unit      1rem
```

Override: `:root { --gr-accent: #your-color; }`

---

## Layout

```html
<div class="gr-container">         <!-- max 74ch -->
<div class="gr-container--wide">  <!-- max 100ch -->
<div class="gr-page">             <!-- 3.5rem top/bottom padding -->
<div class="gr-stack gr-stack--sm|md|lg">   <!-- col flex, gap 0.5|1|2rem -->
<div class="gr-row gr-row--sm|md|lg|between|wrap">  <!-- row flex -->
```

---

## Grid (auto-fit, no fixed columns needed)

```html
<div class="gr-grid">                  <!-- auto-fit min 22ch -->
<div class="gr-grid gr-grid--xs">      <!-- min 10ch -->
<div class="gr-grid gr-grid--narrow">  <!-- min 14ch -->
<div class="gr-grid gr-grid--wide">    <!-- min 32ch -->
<div class="gr-grid gr-grid--xl">      <!-- min 44ch -->
<div class="gr-grid gr-grid--2|3|4">   <!-- fixed cols -->
<div class="gr-grid gr-grid--gap-none|sm|md|lg|xl">
<div class="gr-grid gr-grid--top|middle|bottom|stretch">
<!-- Children: -->
<div class="gr-span-2|3|full">
<div class="gr-self-top|middle|bottom|stretch">
```

---

## Frame

```html
<div class="gr-frame gr-frame--dashed|subtle|accent">
  <span class="gr-corner-tr"></span>
  <span class="gr-corner-bl"></span>
  <div class="gr-frame__body">content</div>
</div>
```

---

## Topbar

```html
<div class="gr-topbar">
  <div class="gr-topbar__dots">
    <span class="gr-dot gr-dot--red"></span>
    <span class="gr-dot gr-dot--yellow"></span>
    <span class="gr-dot gr-dot--green"></span>
  </div>
  <span>filename.sh</span>
  <span class="gr-status gr-status--active">online</span>
</div>
```

---

## Nav

```html
<nav class="gr-nav">
  <a href="#" class="gr-nav__link is-active">~/home</a>
  <a href="#" class="gr-nav__link">~/about</a>
</nav>
```

---

## Section Label & Rule

```html
<div class="gr-section-label">section</div>
<hr class="gr-rule gr-rule--plain" />
<hr class="gr-rule gr-rule--dashed" />
<div class="gr-rule"><span class="gr-rule__label">label</span></div>
```

---

## Typography

```html
<h1 class="gr-h1">H1</h1>  <h2 class="gr-h2">H2</h2>
<h3 class="gr-h3">H3</h3>  <h4 class="gr-h4">H4</h4>
<div class="gr-prose"><p>Lora serif body.</p><p>Para 2.</p></div>
<p class="gr-label gr-label--accent|accent2|accent3">LABEL</p>
<p class="gr-muted">muted text</p>
<code class="gr-code">inline</code>
<pre class="gr-pre">block</pre>
```

---

## Buttons

```html
<button class="gr-btn">default</button>
<button class="gr-btn gr-btn--primary">primary</button>
<button class="gr-btn gr-btn--accent">accent</button>
<button class="gr-btn gr-btn--ghost">ghost</button>
<button class="gr-btn gr-btn--sm|lg">size</button>
<button class="gr-btn gr-btn--bracket">[ text ]</button>
<a href="#" class="gr-btn gr-btn--primary">link</a>
```

---

## Badges, Chips, Status

```html
<span class="gr-badge gr-badge--accent|accent2|accent3|filled">tag</span>
<span class="gr-chip">hoverable chip</span>
<span class="gr-status gr-status--active|warning|error|neutral">text</span>
```

---

## Cards

```html
<div class="gr-card gr-card--accent">
  <div class="gr-card__label">label</div>
  <div class="gr-card__title">Title</div>
  <div class="gr-card__body">Serif italic description.</div>
  <div class="gr-card__footer">
    <span class="gr-badge">tag</span>
    <a href="#" class="gr-btn gr-btn--ghost gr-btn--sm">view →</a>
  </div>
</div>
```

---

## List

```html
<ul class="gr-list">
  <li class="gr-list__item">
    <span class="gr-list__idx">01.</span>
    <div>
      <div class="gr-list__title">Title</div>
      <div class="gr-list__desc">Serif italic description.</div>
    </div>
  </li>
</ul>
```

---

## Forms

```html
<div class="gr-field">
  <label class="gr-field__label">label</label>
  <input class="gr-input" type="text" placeholder="..." />
  <span class="gr-field__hint">hint text</span>
  <span class="gr-field__error">! error</span>
</div>
<textarea class="gr-textarea"></textarea>
<select class="gr-select"><option>opt</option></select>
```

---

## Cursor

```html
<span class="gr-cursor"></span>
<span class="gr-cursor gr-cursor--ink|accent2|slow|fast"></span>
```

---

## ASCII Art

```html
<pre class="gr-ascii gr-ascii--accent|mid">ascii here</pre>
```

---

## Tabs (JS)

```html
<div class="gr-tabs" data-grain-tabs>
  <div class="gr-tabs__nav">
    <button class="gr-tabs__tab is-active" data-tab="a">tab a</button>
    <button class="gr-tabs__tab" data-tab="b">tab b</button>
  </div>
  <div class="gr-tabs__panel is-active" data-panel="a">Panel A</div>
  <div class="gr-tabs__panel" data-panel="b">Panel B</div>
</div>
```

---

## Modal (JS)

```html
<button data-grain-modal-open="my-modal" class="gr-btn gr-btn--primary">open</button>

<div class="gr-modal-overlay" id="my-modal" data-grain-modal>
  <div class="gr-modal">
    <div class="gr-modal__header">
      <span>title.sh</span>
      <button class="gr-modal__close" data-grain-modal-close>×</button>
    </div>
    <div class="gr-modal__body"><p class="gr-prose">Content.</p></div>
    <div class="gr-modal__footer">
      <button class="gr-btn gr-btn--ghost" data-grain-modal-close>cancel</button>
      <button class="gr-btn gr-btn--primary">confirm</button>
    </div>
  </div>
</div>
```

`Grain.modal.open('my-modal')` / `Grain.modal.close('my-modal')`

---

## Toast (JS)

```html
<button data-grain-toast="Saved!" data-toast-type="success">save</button>
```

```js
Grain.toast('Message');
Grain.toast('Saved!', { type: 'success', duration: 3000 });
// types: default | success | warning | error
```

---

## Dropdown (JS)

```html
<div class="gr-dropdown" data-grain-dropdown>
  <button class="gr-btn" data-dropdown-trigger>options ▾</button>
  <div class="gr-dropdown__menu">
    <button class="gr-dropdown__item">edit</button>
    <div class="gr-dropdown__divider"></div>
    <button class="gr-dropdown__item">delete</button>
  </div>
</div>
```

---

## Table

```html
<table class="gr-table">
  <thead><tr><th>col</th><th>status</th></tr></thead>
  <tbody>
    <tr>
      <td>value</td>
      <td><span class="gr-status gr-status--active">active</span></td>
    </tr>
  </tbody>
</table>
```

---

## Progress

```html
<div class="gr-progress">
  <div class="gr-progress__label"><span>label</span><span>75%</span></div>
  <div class="gr-progress__bar">
    <div class="gr-progress__fill gr-progress__fill--accent2" style="width:75%;"></div>
  </div>
</div>
<!-- fill variants: default (accent), --accent2, --accent3 -->
```

---

## Typewriter (JS, full only)

```html
<span data-grain-type="Text to type." data-type-speed="50"></span>
```

---

## Utilities

```html
<!-- Color -->
gr-text-accent | gr-text-accent2 | gr-text-accent3 | gr-text-mid | gr-text-ink

<!-- Spacing -->
gr-mt-sm | gr-mt-md | gr-mt-lg
gr-mb-sm | gr-mb-md | gr-mb-lg

<!-- Visibility -->
gr-hidden | gr-sr-only

<!-- Animations (full only) -->
gr-animate-in | gr-animate-up
gr-delay-1 | gr-delay-2 | gr-delay-3 | gr-delay-4 | gr-delay-5
```

---

## Common Patterns

### Portfolio hero
```html
<div class="gr-frame">
  <span class="gr-corner-tr"></span><span class="gr-corner-bl"></span>
  <div class="gr-topbar">
    <div class="gr-topbar__dots">
      <span class="gr-dot gr-dot--red"></span>
      <span class="gr-dot gr-dot--yellow"></span>
      <span class="gr-dot gr-dot--green"></span>
    </div>
    <span>portfolio.sh</span>
    <span class="gr-status gr-status--active">open to work</span>
  </div>
  <div class="gr-frame__body">
    <pre class="gr-ascii gr-ascii--accent">NAME IN ASCII</pre>
    <p class="gr-prose" style="color:var(--gr-mid);">Tagline.<span class="gr-cursor"></span></p>
    <nav class="gr-nav gr-mt-md">
      <a href="#" class="gr-nav__link is-active">~/work</a>
      <a href="#" class="gr-nav__link">~/about</a>
      <a href="#" class="gr-nav__link">~/contact</a>
    </nav>
  </div>
</div>
```

### School intranet
```html
<div class="gr-container gr-page">
  <h1 class="gr-h1">School Name<span class="gr-cursor gr-cursor--slow"></span></h1>
  <div class="gr-grid gr-mt-md">
    <div class="gr-card">
      <div class="gr-card__label">announcements</div>
      <div class="gr-card__title">Notice Title</div>
      <div class="gr-card__body">Content here.</div>
    </div>
    <div class="gr-card">
      <div class="gr-card__label">timetable</div>
      <div class="gr-card__title">Today's Schedule</div>
      <div class="gr-card__body">Schedule here.</div>
    </div>
  </div>
</div>
```

### NGO dashboard
```html
<div class="gr-container gr-page">
  <div class="gr-section-label">field status</div>
  <div class="gr-grid gr-grid--3 gr-mt-md">
    <div class="gr-card">
      <div class="gr-card__label">coverage</div>
      <div class="gr-card__title">72%</div>
      <div class="gr-progress gr-mt-sm">
        <div class="gr-progress__bar">
          <div class="gr-progress__fill" style="width:72%"></div>
        </div>
      </div>
    </div>
  </div>
</div>
```

---

## Never Do

- `class="btn"` → must be `gr-btn`
- Import Google Fonts → self-hosted only
- Add `border-radius` → zero by design
- Use `data-caret-*` → correct prefix is `data-grain-*`
- Invent `gr-` classes not listed above
- Mix Bootstrap/Tailwind with Grain

---

Grain v1.0.0 | MIT License | graincss.com

---

## Navbar (v1.1)

```html
<header class="gr-navbar">
  <div class="gr-navbar__brand">
    <a href="/" class="gr-navbar__logo">name<span>.sh</span></a>
  </div>
  <nav class="gr-navbar__nav">
    <a href="#work"    class="gr-navbar__link is-active">~/work</a>
    <a href="#about"   class="gr-navbar__link">~/about</a>
    <a href="#contact" class="gr-navbar__link">~/contact</a>
  </nav>
</header>
```

- Sticky by default (`position: sticky; top: 0; z-index: 200`)
- `.gr-navbar__logo span` renders in `--gr-accent` colour automatically
- JS auto-activates `.is-active` on scroll — no extra code needed
- Use `.gr-navbar` for site-wide navigation; use `.gr-nav` for inline/inline-block nav lists

---

## Section label — strong modifier (v1.1)

```html
<!-- Default (small, trailing rule) -->
<div class="gr-section-label">section name</div>

<!-- Strong (larger, gold underline, // prefix) -->
<div class="gr-section-label gr-section-label--strong">section name</div>
```

- `--strong` suppresses the default `::after` trailing rule
- Adds `//` prefix in `--gr-mid` automatically via `::before`
- Compatible with `gr-label--accent2` / `--accent3` on parent

---

## Callout (v1.1)

```html
<!-- Default (accent gold) -->
<div class="gr-callout">
  <span class="gr-callout__label">// currently</span>
  <p class="gr-callout__body">Status or highlight text here.</p>
</div>

<!-- Variants -->
<div class="gr-callout gr-callout--accent2">...</div>
<div class="gr-callout gr-callout--accent3">...</div>
<div class="gr-callout gr-callout--danger">...</div>
<div class="gr-callout gr-callout--neutral">...</div>
```

- Lighter than `.gr-frame` — left border only, no corner marks, no topbar slot
- `.gr-callout__label` is optional
- Use `.gr-frame` when you need full chrome; use `.gr-callout` for inline status signals

---

## Surface — ink / dark inverted (v1.1)

```html
<footer class="gr-surface--ink" style="padding: 2rem 0;">
  <div class="gr-container--wide">
    <p class="gr-muted">© 2026 Your Name</p>
    <nav class="gr-nav">
      <a href="#work" class="gr-nav__link">~/work</a>
    </nav>
  </div>
</footer>
```

- Flips background to `--gr-ink`, text to `--gr-bg`
- Auto-handles `.gr-nav__link`, `.gr-navbar__link`, `a`, `.gr-muted`, `hr`
- Does NOT auto-style `.gr-btn` — set button variant explicitly inside dark surfaces
- Works on any element: `<footer>`, `<section>`, `<div>`

---

## Never Do (updated v1.1)

All v1.0.0 rules still apply, plus:
- Use `.gr-navbar` for site navigation, not `.gr-topbar` (topbar is decorative chrome only)
- Never add `border-radius` to `.gr-callout` — zero radius is by design
- Never nest `.gr-frame` inside `.gr-callout` — use one or the other
