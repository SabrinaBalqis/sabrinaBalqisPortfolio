/* ================================================
   SABRINA BALQIS — script.js
   ================================================ */

/* ---- Footer year ---- */
const yearEl = document.getElementById('footer-year');
if (yearEl) yearEl.textContent = '© ' + new Date().getFullYear();

/* ---- Typewriter ---- */
const phrases = [
  'frontend developer',
  'ui/ux focused',
  'Sabrina Balqis',
  'design-to-code',
];
let phraseIdx = 0, charIdx = 0, deleting = false;
const typedEl = document.getElementById('typed');

function typeWriter() {
  if (!typedEl) return;
  const current = phrases[phraseIdx];
  if (!deleting) {
    typedEl.textContent = current.slice(0, ++charIdx);
    if (charIdx === current.length) {
      deleting = true;
      setTimeout(typeWriter, 2000);
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
    }
  }
  setTimeout(typeWriter, deleting ? 48 : 85);
}
typeWriter();

/* ---- Scroll reveal ---- */
const revealTargets = document.querySelectorAll(
  '.project-row, .exp-row, .stats__cell, .about__heading, .about__bio, .skills, .terminal, .contact__heading, .contact__links'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

revealTargets.forEach(el => revealObserver.observe(el));

/* ---- Active nav on scroll ---- */
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav__links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navAnchors.forEach(a => {
        const active = a.getAttribute('href') === '#' + id;
        a.style.color      = active ? 'var(--ink)' : '';
        a.style.fontWeight = active ? '500' : '';
      });
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });

sections.forEach(s => sectionObserver.observe(s));
