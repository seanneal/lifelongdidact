/* ============================================
   lifelongdidact.com — main.js
   Light JS for flare effects only.
   Current flare: retro blinking cursor (CSS-driven, no JS needed).
   This file is a hook for future flare rotations.
   ============================================ */

(function () {
  'use strict';

  // --- Flare registry ---
  // When rotating flares, add/remove the active class here.
  // Currently the blinking cursor is pure CSS (.cursor-flare).
  // Future flares (scanlines, matrix rain, etc.) can be toggled below.

  const ACTIVE_FLARE = 'cursor'; // options: 'cursor' | (future: 'scanlines', 'matrix', etc.)

  function initFlare(flare) {
    switch (flare) {
      case 'cursor':
        // Pure CSS — nothing to do.
        break;

      // Future example:
      // case 'scanlines':
      //   document.body.classList.add('scanlines-flare');
      //   break;

      default:
        break;
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    initFlare(ACTIVE_FLARE);
  });
})();
