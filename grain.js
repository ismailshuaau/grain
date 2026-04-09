/*!
 * GRAIN.JS v1.1.0 — Full
 * Tabs · Modal · Toast · Dropdown · Typewriter · Navbar
 * No dependencies. Vanilla JS.
 */
(function (global) {
  'use strict';

  var $ = function(sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function(sel, ctx) { return [].slice.call((ctx || document).querySelectorAll(sel)); };
  var on = function(el, ev, fn) { if (el) el.addEventListener(ev, fn); };

  /* ── Navbar — active link on scroll ── */
  function initNavbar() {
    var links = $$('.gr-navbar__link[href^="#"]');
    if (!links.length) return;
    var targets = links.map(function(link) {
      return document.querySelector(link.getAttribute('href'));
    });
    function onScroll() {
      var scrollY = window.scrollY + 80;
      var active = null;
      targets.forEach(function(target, i) {
        if (target && target.offsetTop <= scrollY) active = i;
      });
      links.forEach(function(link, i) {
        link.classList.toggle('is-active', i === active);
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Tabs ── */
  function initTabs() {
    $$('[data-grain-tabs]').forEach(function(root) {
      var tabs   = $$('.gr-tabs__tab', root);
      var panels = $$('.gr-tabs__panel', root);
      tabs.forEach(function(tab) {
        on(tab, 'click', function() {
          var target = tab.dataset.tab;
          tabs.forEach(function(t)   { t.classList.remove('is-active'); });
          panels.forEach(function(p) { p.classList.remove('is-active'); });
          tab.classList.add('is-active');
          var panel = $('[data-panel="' + target + '"]', root);
          if (panel) panel.classList.add('is-active');
        });
      });
    });
  }

  /* ── Modal ── */
  function initModals() {
    $$('[data-grain-modal-open]').forEach(function(trigger) {
      on(trigger, 'click', function() {
        var overlay = document.getElementById(trigger.dataset.grainModalOpen);
        if (overlay) Grain.modal.open(overlay);
      });
    });
    on(document, 'click', function(e) {
      if (e.target.closest && e.target.closest('[data-grain-modal-close]')) {
        var overlay = e.target.closest('.gr-modal-overlay');
        if (overlay) Grain.modal.close(overlay);
      }
      if (e.target.classList && e.target.classList.contains('gr-modal-overlay')) {
        Grain.modal.close(e.target);
      }
    });
    on(document, 'keydown', function(e) {
      if (e.key === 'Escape') {
        var open = $('.gr-modal-overlay.is-open');
        if (open) Grain.modal.close(open);
      }
    });
  }

  /* ── Toast ── */
  var ICONS = { 'default': '>', success: '✓', warning: '!', error: '✕' };

  function getOrCreateContainer() {
    var c = $('.gr-toast-container');
    if (!c) {
      c = document.createElement('div');
      c.className = 'gr-toast-container';
      document.body.appendChild(c);
    }
    return c;
  }

  function createToast(message, opts) {
    opts = opts || {};
    var type     = opts.type || 'default';
    var duration = opts.duration || 3500;
    var container = getOrCreateContainer();
    var toast = document.createElement('div');
    toast.className = 'gr-toast gr-toast--' + type;
    toast.innerHTML =
      '<span class="gr-toast__icon">' + (ICONS[type] || ICONS['default']) + '</span>' +
      '<span class="gr-toast__body">' + message + '</span>' +
      '<button class="gr-toast__close" aria-label="close">\u00D7</button>';
    container.appendChild(toast);

    requestAnimationFrame(function() {
      requestAnimationFrame(function() { toast.classList.add('is-visible'); });
    });

    function dismiss() {
      toast.classList.remove('is-visible');
      toast.addEventListener('transitionend', function() { toast.remove(); }, { once: true });
    }

    var timer = setTimeout(dismiss, duration);
    var closeBtn = toast.querySelector('.gr-toast__close');
    on(closeBtn, 'click', function() { clearTimeout(timer); dismiss(); });
    return toast;
  }

  function initToastTriggers() {
    on(document, 'click', function(e) {
      var trigger = e.target.closest && e.target.closest('[data-grain-toast]');
      if (trigger) {
        createToast(trigger.dataset.grainToast, { type: trigger.dataset.toastType || 'default' });
      }
    });
  }

  /* ── Dropdown ── */
  function initDropdowns() {
    on(document, 'click', function(e) {
      var trigger  = e.target.closest && e.target.closest('[data-dropdown-trigger]');
      var dropdown = trigger && trigger.closest('[data-grain-dropdown]');
      $$('.gr-dropdown__menu.is-open').forEach(function(menu) {
        if (!dropdown || !dropdown.contains(menu)) menu.classList.remove('is-open');
      });
      if (dropdown) {
        var menu = $('.gr-dropdown__menu', dropdown);
        if (menu) menu.classList.toggle('is-open');
      }
    });
  }

  /* ── Typewriter ── */
  function initTypewriters() {
    $$('[data-grain-type]').forEach(function(el) {
      var text  = el.dataset.grainType;
      var speed = parseInt(el.dataset.typeSpeed || '60', 10);
      var i = 0;
      el.textContent = '';
      function tick() {
        if (i < text.length) { el.textContent += text[i++]; setTimeout(tick, speed); }
      }
      if ('IntersectionObserver' in window) {
        var obs = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) { tick(); obs.unobserve(el); }
          });
        });
        obs.observe(el);
      } else {
        tick();
      }
    });
  }

  /* ── Public API ── */
  var Grain = {
    version: '1.1.0',
    modal: {
      open:  function(el) { if (typeof el === 'string') el = document.getElementById(el); if (el) el.classList.add('is-open'); },
      close: function(el) { if (typeof el === 'string') el = document.getElementById(el); if (el) el.classList.remove('is-open'); }
    },
    toast: function(message, opts) { return createToast(message, opts); },
    init: function() {
      initNavbar();
      initTabs();
      initModals();
      initToastTriggers();
      initDropdowns();
      initTypewriters();
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { Grain.init(); });
  } else {
    Grain.init();
  }

  global.Grain = Grain;
}(window));
