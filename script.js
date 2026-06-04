/* ============================================================
   Planetclaire — minimal interactions
   Just scroll-triggered section reveals. Keeping it light,
   matching the refined/minimal aesthetic.
   ============================================================ */

(() => {
  'use strict';

  // Reveal sections as they scroll into view
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  sections.forEach(s => observer.observe(s));

  // Nav: subtle shadow once scrolled past hero
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        nav.style.borderBottom = '1px solid var(--rule)';
      } else {
        nav.style.borderBottom = '1px solid transparent';
      }
    }, { passive: true });
  }
})();
