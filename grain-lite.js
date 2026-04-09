/*!
 * GRAIN-LITE.JS v1.1.0
 * Minimal JS: Tabs + Modal + Dropdown + Navbar only.
 * No toast animations. No typewriter.
 * Compatible with IE11+, Chrome 49+, Firefox 45+
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
      var scrollY = (window.pageYOffset || document.documentElement.scrollTop) + 80;
      var active = null;
      targets.forEach(function(target, i) {
        if (target && target.offsetTop <= scrollY) active = i;
      });
      links.forEach(function(link, i) {
        if (i === active) link.classList.add('is-active');
        else link.classList.remove('is-active');
      });
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
  }

  /* ── Tabs ── */
  function initTabs() {
    $$('[data-grain-tabs]').forEach(function(root) {
      var tabs   = $$('.gr-tabs__tab', root);
      var panels = $$('.gr-tabs__panel', root);
      tabs.forEach(function(tab) {
        on(tab, 'click', function() {
          var target = tab.getAttribute('data-tab');
          tabs.forEach(function(t)   { t.classList.remove('is-active'); });
          panels.forEach(function(p) { p.classList.remove('is-active'); });
          tab.classList.add('is-active');
          var panel = $('[data-panel="' + target + '"]', root);
          if (panel) panel.classList.add('is-active');
        });
      });
    });
  }

  /* ── Modal (no animation — lite uses display:none/flex toggle) ── */
  function initModals() {
    $$('[data-grain-modal-open]').forEach(function(trigger) {
      on(trigger, 'click', function() {
        var overlay = document.getElementById(trigger.getAttribute('data-grain-modal-open'));
        if (overlay) overlay.classList.add('is-open');
      });
    });
    on(document, 'click', function(e) {
      var closeBtn = e.target.closest ? e.target.closest('[data-grain-modal-close]') : null;
      if (closeBtn) {
        var overlay = closeBtn.closest('.gr-modal-overlay');
        if (overlay) overlay.classList.remove('is-open');
      }
      if (e.target.classList && e.target.classList.contains('gr-modal-overlay')) {
        e.target.classList.remove('is-open');
      }
    });
    on(document, 'keydown', function(e) {
      if (e.key === 'Escape' || e.keyCode === 27) {
        var open = $('.gr-modal-overlay.is-open');
        if (open) open.classList.remove('is-open');
      }
    });
  }

  /* ── Toast (lite: no slide animation, simple show/hide) ── */
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
    toast.style.transform = 'none';
    toast.style.opacity = '1';
    toast.innerHTML =
      '<span class="gr-toast__icon">' + (ICONS[type] || '>') + '</span>' +
      '<span class="gr-toast__body">' + message + '</span>' +
      '<button class="gr-toast__close">\u00D7</button>';
    container.appendChild(toast);
    toast.classList.add('is-visible');

    function dismiss() { toast.remove(); }
    var timer = setTimeout(dismiss, duration);
    var btn = toast.querySelector('.gr-toast__close');
    if (btn) btn.addEventListener('click', function() { clearTimeout(timer); dismiss(); });
    return toast;
  }

  function initToastTriggers() {
    on(document, 'click', function(e) {
      var trigger = e.target.closest ? e.target.closest('[data-grain-toast]') : null;
      if (trigger) {
        createToast(
          trigger.getAttribute('data-grain-toast'),
          { type: trigger.getAttribute('data-toast-type') || 'default' }
        );
      }
    });
  }

  /* ── Dropdown ── */
  function initDropdowns() {
    on(document, 'click', function(e) {
      var trigger  = e.target.closest ? e.target.closest('[data-dropdown-trigger]') : null;
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

  /* ── Init ── */
  var GrainLite = {
    version: '1.1.0-lite',
    modal: {
      open:  function(id) { var el = document.getElementById(id); if (el) el.classList.add('is-open'); },
      close: function(id) { var el = document.getElementById(id); if (el) el.classList.remove('is-open'); }
    },
    toast: function(message, opts) { return createToast(message, opts); },
    init:  function() { initNavbar(); initTabs(); initModals(); initToastTriggers(); initDropdowns(); }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { GrainLite.init(); });
  } else {
    GrainLite.init();
  }

  global.Grain = GrainLite;
}(window));
