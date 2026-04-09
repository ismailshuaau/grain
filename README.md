# Grain

**Built into everything. Dependent on nothing.**

**[Live demo →](https://ismailshuaau.github.io/grain)**

Grain is a self-hosted UI framework designed for environments that can't rely on the internet — school networks, hospital intranets, offline kiosks, mesh networks, Raspberry Pi deployments, USB sticks. Copy the folder once. It runs forever.

No CDN. No Google Fonts. No build step. No npm. No ongoing dependency on anything outside the folder you copied.

---

## Files

```
grain/
├── grain.css          Full framework (animations, transitions)
├── grain-lite.css     Lite version (no animations, older browsers)
├── grain.js           Full interactive components
├── grain-lite.js      Lite interactive components
├── fonts/             Self-hosted woff2 font files
└── index.html         Living documentation — every component with examples
```

---

## Quick Start

1. Copy this folder to your server.
2. Add two lines to your HTML `<head>`:

```html
<link rel="stylesheet" href="grain.css">
<script src="grain.js"></script>
```

3. Use `.gr-` classes to build your UI. Open `index.html` to see every component.

---

## Full vs Lite

| | `grain.css` + `grain.js` | `grain-lite.css` + `grain-lite.js` |
|---|---|---|
| Target devices | 2018 or newer | 2014–2018 era |
| Animations | Yes | No |
| Typewriter effect | Yes | No |
| IE11 support | No | Yes |
| Browser support | Chrome 60+, Firefox 55+, Safari 11+ | Chrome 49+, Firefox 45+, IE11+ |

Use the lite version on low-power hardware (Raspberry Pi, older tablets), or when animations cause distraction.

---

## Design Tokens

Override any token in your own stylesheet:

```css
:root {
  --gr-accent: #your-color;
  --gr-bg:     #your-background;
}
```

### Colors

| Token | Default | Description |
|-------|---------|-------------|
| `--gr-bg` | `#faf8f2` | Parchment background |
| `--gr-ink` | `#0f0e0b` | Warm near-black text |
| `--gr-mid` | `#9e9b91` | Muted secondary text |
| `--gr-subtle` | `#e8e3d6` | Borders and dividers |
| `--gr-surface` | `#eee8d8` | Raised surface background |
| `--gr-accent` | `#b8973a` | Antique gold — primary accent |
| `--gr-accent2` | `#5a8fa8` | Slate blue — secondary accent |
| `--gr-accent3` | `#6b8c52` | Olive green — tertiary accent |
| `--gr-danger` | `#a83030` | Error / destructive |

### Typography

| Token | Value |
|-------|-------|
| `--gr-mono` | `'Courier Prime', 'Courier New', Courier, monospace` |
| `--gr-serif` | `'Lora', Georgia, serif` |

Font fallbacks are system fonts — the page looks good even if woff2 files can't load.

### Type Scale

| Token | Size |
|-------|------|
| `--gr-text-xs` | `0.68rem` |
| `--gr-text-sm` | `0.78rem` |
| `--gr-text-base` | `0.92rem` |
| `--gr-text-md` | `1.05rem` |
| `--gr-text-lg` | `1.25rem` |
| `--gr-text-xl` | `1.6rem` |

---

## Components

### Layout

```html
<div class="gr-container">…</div>        <!-- max 74ch, centered -->
<div class="gr-container--wide">…</div>  <!-- max 100ch, centered -->

<div class="gr-stack gr-stack--md">…</div>   <!-- vertical flex, gap: 1rem -->
<div class="gr-row gr-row--md">…</div>       <!-- horizontal flex, gap: 1rem -->
<div class="gr-row gr-row--between">…</div>  <!-- space-between -->
```

Stack/row gap modifiers: `--sm` (0.5rem) · `--md` (1rem) · `--lg` (2rem)

### Grid

Auto-responsive — columns form based on available space, no breakpoint math needed.

```html
<div class="gr-grid">…</div>           <!-- default: min 22ch per column -->
<div class="gr-grid gr-grid--narrow">  <!-- min 14ch -->
<div class="gr-grid gr-grid--wide">    <!-- min 32ch -->
<div class="gr-grid gr-grid--xl">      <!-- min 44ch -->
<div class="gr-grid gr-grid--xs">      <!-- min 10ch -->

<!-- Fixed columns -->
<div class="gr-grid gr-grid--2">
<div class="gr-grid gr-grid--3">
<div class="gr-grid gr-grid--4">

<!-- Gap control -->
<div class="gr-grid gr-grid--gap-none">
<div class="gr-grid gr-grid--gap-sm">   <!-- 0.5rem -->
<div class="gr-grid gr-grid--gap-lg">   <!-- 2rem -->
<div class="gr-grid gr-grid--gap-xl">   <!-- 3rem -->

<!-- Item spanning -->
<div class="gr-span-2">
<div class="gr-span-full">
```

### Typography

```html
<h1 class="gr-h1">Heading</h1>   <!-- also gr-h2, gr-h3, gr-h4 -->
<p class="gr-prose">Body text in Lora serif, 1.85 line-height</p>
<span class="gr-label">UPPERCASE LABEL</span>
<span class="gr-label gr-label--accent">GOLD LABEL</span>
<span class="gr-muted">Secondary text</span>
<code class="gr-code">inline code</code>
<pre class="gr-pre">code block</pre>
```

### Frame

```html
<div class="gr-frame">
  <div class="gr-frame__body">Content</div>
</div>
```

### Topbar

```html
<div class="gr-topbar">
  <div class="gr-topbar__dots">
    <span class="gr-dot"></span>
    <span class="gr-dot"></span>
    <span class="gr-dot"></span>
  </div>
  Window title
</div>
```

### Navbar

Supports active-link highlighting on scroll for `href="#anchor"` links.

```html
<nav class="gr-navbar">
  <a class="gr-navbar__brand" href="/">
    <span class="gr-navbar__logo">G</span>
    Brand
  </a>
  <div class="gr-navbar__nav">
    <a class="gr-navbar__link" href="#section1">Section 1</a>
    <a class="gr-navbar__link" href="#section2">Section 2</a>
  </div>
</nav>
```

### Nav (sidebar/inline)

```html
<nav class="gr-nav">
  <a class="gr-nav__link is-active" href="#">Active</a>
  <a class="gr-nav__link" href="#">Link</a>
</nav>
```

### Section Labels & Rules

```html
<div class="gr-section-label">Section Title</div>
<div class="gr-section-label gr-section-label--strong">Bold Section</div>
<hr class="gr-rule">
```

### Callout

```html
<div class="gr-callout">
  <div class="gr-callout__label">Note</div>
  <div class="gr-callout__body">Callout content goes here.</div>
</div>
```

### Buttons

```html
<button class="gr-btn gr-btn--primary">Primary</button>
<button class="gr-btn gr-btn--accent">Accent</button>
<button class="gr-btn gr-btn--ghost">Ghost</button>
<button class="gr-btn gr-btn--bracket">[ Bracket ]</button>
```

### Badge, Chip, Status

```html
<span class="gr-badge">Badge</span>
<span class="gr-chip">Chip</span>
<span class="gr-status gr-status--success">Online</span>
<span class="gr-status gr-status--warning">Pending</span>
<span class="gr-status gr-status--error">Offline</span>
```

### Card

```html
<div class="gr-card">
  <div class="gr-card__title">Card Title</div>
  <div class="gr-card__body">Card content.</div>
</div>
```

### List

```html
<ul class="gr-list">
  <li class="gr-list__item">
    <span class="gr-list__title">Item title</span>
    Description text
  </li>
</ul>
```

### Forms

```html
<div class="gr-field">
  <label class="gr-label">Field Label</label>
  <input class="gr-input" type="text" placeholder="Enter value">
</div>

<div class="gr-field">
  <label class="gr-label">Select</label>
  <select class="gr-select">
    <option>Option 1</option>
  </select>
</div>

<div class="gr-field">
  <label class="gr-label">Textarea</label>
  <textarea class="gr-textarea"></textarea>
</div>
```

### Table

```html
<table class="gr-table">
  <thead><tr><th>Column</th></tr></thead>
  <tbody><tr><td>Cell</td></tr></tbody>
</table>
```

### Progress

```html
<div class="gr-progress">
  <div class="gr-progress__bar">
    <div class="gr-progress__fill" style="width: 65%"></div>
  </div>
</div>
```

### Surfaces

```html
<div class="gr-surface--ink">Inverted surface — ink background, parchment text</div>
```

### Cursor

```html
<span class="gr-cursor"></span>  <!-- blinking block cursor -->
```

### ASCII

```html
<pre class="gr-ascii">
  ╔══════╗
  ║ GRAIN║
  ╚══════╝
</pre>
```

### Tabs

```html
<div data-grain-tabs>
  <div class="gr-row">
    <button class="gr-tabs__tab is-active" data-tab="one">Tab One</button>
    <button class="gr-tabs__tab" data-tab="two">Tab Two</button>
  </div>
  <div class="gr-tabs__panel is-active" data-panel="one">Panel one content</div>
  <div class="gr-tabs__panel" data-panel="two">Panel two content</div>
</div>
```

### Modal

```html
<!-- Trigger -->
<button data-grain-modal-open="my-modal">Open Modal</button>

<!-- Overlay -->
<div class="gr-modal-overlay" id="my-modal">
  <div class="gr-modal">
    <button data-grain-modal-close>Close</button>
    <p>Modal content</p>
  </div>
</div>
```

Close by clicking outside the modal or pressing `Escape`.

### Toast

**HTML trigger:**
```html
<button data-grain-toast="Saved successfully" data-toast-type="success">Save</button>
```

**JavaScript:**
```js
Grain.toast('Message here')
Grain.toast('Saved!',        { type: 'success', duration: 3000 })
Grain.toast('Watch out',     { type: 'warning' })
Grain.toast('Upload failed', { type: 'error' })
```

Toast types: `default` · `success` · `warning` · `error`

### Dropdown

```html
<div data-grain-dropdown>
  <button data-dropdown-trigger class="gr-btn gr-btn--ghost">Options ▾</button>
  <div class="gr-dropdown__menu">
    <a class="gr-dropdown__item" href="#">Item one</a>
    <a class="gr-dropdown__item" href="#">Item two</a>
  </div>
</div>
```

### Typewriter *(full version only)*

```html
<span data-grain-type="Text appears character by character." data-type-speed="60"></span>
```

Animates when the element scrolls into view. `data-type-speed` is milliseconds per character (default: `60`).

---

## JavaScript API

```js
// Modal
Grain.modal.open('modal-id')
Grain.modal.close('modal-id')

// Toast
Grain.toast('Message', { type: 'success', duration: 3500 })

// Version
Grain.version  // '1.1.0'
```

---

## Offline Deployment

**USB stick**
Copy the entire folder to a USB drive. Open `index.html` in any browser.

**Local server**
Place the folder in your web server root, e.g. `/var/www/html/grain/`.

**Quick test**
```bash
cd grain/
python3 -m http.server 8000
# Open http://localhost:8000
```

**Raspberry Pi**
Copy to `/var/www/html/` — works with Apache or Nginx out of the box.

---

## Changelog

**1.1.0** — Added `.gr-navbar`, `.gr-section-label--strong`, `.gr-callout`, `.gr-surface--ink`, grid system, typewriter effect

**1.0.0** — Initial release

---

## License

Grain CSS/JS is released under the **MIT License**.

Bundled fonts:
- [Courier Prime](https://github.com/quoteunquoteapps/CourierPrime) — SIL Open Font License 1.1
- [Lora](https://github.com/cyrealtype/Lora-Cyrillic) — SIL Open Font License 1.1

Both fonts are free to use, embed, and redistribute.

---

*Built for communities that don't get enough of either.*
