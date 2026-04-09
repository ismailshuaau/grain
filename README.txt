GRAIN v1.1.0
============
Built into everything. Dependent on nothing.

Deploy like infrastructure. Adopt like a framework.

Copy a folder. Serve a page. No internet required.


WHAT IS GRAIN?
--------------
Grain is a UI framework you deploy the same way
you deploy a school server — copy it once, and it
runs everywhere on the network, indefinitely,
without touching the internet again.

No CDN. No Google Fonts. No build step.
No ongoing dependency on anything outside
the folder you already copied.


FILES IN THIS FOLDER
--------------------
grain.css         Full framework (animations, transitions)
grain-lite.css    Lite version (no animations, older browsers)
grain.js          Full interactive components
grain-lite.js     Lite interactive components
fonts/            Self-hosted font files (woff2)
index.html        Living documentation — all components
README.txt        This file


HOW TO USE
----------
1. Copy this folder to your server.

2. In your HTML file, link the stylesheet and script:

   Full version (modern devices):
   <link rel="stylesheet" href="grain.css">
   <script src="grain.js"></script>

   Lite version (old devices, low-power hardware):
   <link rel="stylesheet" href="grain-lite.css">
   <script src="grain-lite.js"></script>

3. Build your page using .gr- classes.
   See index.html for every component with examples.


WHICH VERSION TO USE?
---------------------
Use grain.css + grain.js when:
- Devices are from 2018 or newer
- You want smooth animations and transitions
- Running on reasonably modern hardware

Use grain-lite.css + grain-lite.js when:
- Devices are older (2014-2018)
- Low-power hardware (Raspberry Pi, cheap tablets)
- You want maximum browser compatibility
- Animations cause lag or distraction


FONT FALLBACKS
--------------
If fonts/courier-prime-400.woff2 cannot load,
the browser falls back to:
  'Courier New', Courier, monospace

If fonts/lora-400.woff2 cannot load:
  Georgia, serif

The page will still look good with system fonts.


COMPONENTS
----------
Layout       .gr-container  .gr-stack  .gr-row
Frame        .gr-frame  .gr-frame__body
Topbar       .gr-topbar  .gr-topbar__dots  .gr-dot
Navbar       .gr-navbar  .gr-navbar__brand  .gr-navbar__logo  .gr-navbar__nav  .gr-navbar__link
Nav          .gr-nav  .gr-nav__link
Section      .gr-section-label  .gr-section-label--strong  .gr-rule
Callout      .gr-callout  .gr-callout__label  .gr-callout__body
Typography   .gr-h1-h4  .gr-prose  .gr-label  .gr-muted
Button       .gr-btn  --primary  --accent  --ghost  --bracket
Badge/Chip   .gr-badge  .gr-chip  .gr-status
Card         .gr-card  .gr-card__title  .gr-card__body
List         .gr-list  .gr-list__item  .gr-list__title
Forms        .gr-field  .gr-input  .gr-textarea  .gr-select
Surfaces     .gr-surface--ink
Cursor       .gr-cursor
ASCII        .gr-ascii
Tabs         [data-grain-tabs]  .gr-tabs__tab  .gr-tabs__panel
Modal        [data-grain-modal]  .gr-modal-overlay
Toast        [data-grain-toast]  Grain.toast('msg', {type:'success'})
Dropdown     [data-grain-dropdown]  [data-dropdown-trigger]
Table        .gr-table
Progress     .gr-progress  .gr-progress__bar  .gr-progress__fill


JAVASCRIPT API
--------------
Grain.modal.open('my-modal')
Grain.modal.close('my-modal')
Grain.toast('Message', { type: 'success', duration: 3000 })
  types: default | success | warning | error


COLORS (CSS VARIABLES)
----------------------
--gr-bg        #faf8f2   parchment background
--gr-ink       #0f0e0b   warm near-black text
--gr-mid       #9e9b91   muted secondary text
--gr-subtle    #e8e3d6   warm borders and dividers
--gr-accent    #b8973a   primary antique gold accent
--gr-accent2   #5a8fa8   slate blue accent
--gr-accent3   #6b8c52   olive green accent


CUSTOMISING COLORS
------------------
Override CSS variables in your own stylesheet:

  :root {
    --gr-accent: #your-color;
    --gr-bg:     #your-background;
  }


BROWSER SUPPORT
---------------
grain.css:       Chrome 60+, Firefox 55+, Safari 11+
grain-lite.css:  Chrome 49+, Firefox 45+, IE11+


LICENSES
--------
Grain CSS/JS: MIT License
Courier Prime: SIL Open Font License 1.1
Lora:          SIL Open Font License 1.1

Both fonts are free to use, embed, and redistribute.


OFFLINE DEPLOYMENT TIPS
------------------------
USB stick:    Copy entire folder to USB.
              Open index.html in any browser.

Local server: Place folder in your web server root.
              e.g. /var/www/html/grain/

Python server (quick test):
              cd grain/
              python3 -m http.server 8000
              Open http://localhost:8000

Raspberry Pi: Copy to /var/www/html/
              Works with Apache or Nginx out of the box.


VERSION
-------
1.1.0 — Added: .gr-navbar, .gr-section-label--strong, .gr-callout, .gr-surface--ink
1.0.0 — Initial release
Built for communities that don't get enough of either.
