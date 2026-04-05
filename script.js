// ============================================
//  Arquitetura DNC — script.js
//  Version: 2.0
// ============================================

/* ── NAVBAR: scroll glass effect ─────────────── */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

/* ── MOBILE: hamburger menu ───────────────────── */
const navToggle = document.getElementById('navToggle');
const navMenu   = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  navToggle.classList.toggle('active', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Close on nav link click
navMenu.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* ── SCROLL REVEAL ────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── COUNTER ANIMATION ────────────────────────── */
function animateCounter(el, target, duration = 2000) {
  let start = null;

  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    // easeOutCubic
    const ease  = 1 - Math.pow(1 - progress, 3);
    const value = Math.floor(ease * target);

    el.textContent = value >= 1000
      ? value.toLocaleString('pt-BR')
      : String(value);

    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}

const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.querySelectorAll('.stat-number[data-target]').forEach(num => {
        const target = parseInt(num.dataset.target, 10);
        delete num.dataset.target; // animate only once
        animateCounter(num, target);
      });

      statsObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.5 }
);

const statsEl = document.getElementById('stats');
if (statsEl) statsObserver.observe(statsEl);

/* ── ACTIVE NAV HIGHLIGHT ─────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link:not(.nav-cta)');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        const isActive = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('active', isActive);
      });
    });
  },
  { threshold: 0.4 }
);

sections.forEach(sec => sectionObserver.observe(sec));

/* ── FORM VALIDATION ─────────────────────────── */
const form = document.getElementById('contactForm');

if (form) {
  const nomeInput  = form.querySelector('#nome');
  const emailInput = form.querySelector('#email');
  const nomeError  = document.getElementById('nome-error');
  const emailError = document.getElementById('email-error');
  const btnText    = form.querySelector('.btn-text');
  const btnLoading = form.querySelector('.btn-loading');

  const setError = (input, errorEl, msg) => {
    input.classList.add('error');
    input.classList.remove('success');
    if (errorEl) errorEl.textContent = msg;
  };

  const setSuccess = (input, errorEl) => {
    input.classList.remove('error');
    input.classList.add('success');
    if (errorEl) errorEl.textContent = '';
  };

  const validateNome = () => {
    const val = nomeInput.value.trim();
    if (!val)        { setError(nomeInput, nomeError, 'Por favor, informe seu nome.'); return false; }
    if (val.length < 3) { setError(nomeInput, nomeError, 'O nome deve ter ao menos 3 caracteres.'); return false; }
    setSuccess(nomeInput, nomeError);
    return true;
  };

  const validateEmail = () => {
    const val = emailInput.value.trim();
    // Basic RFC-5322 surface check — no regex injection risk
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    if (!val) { setError(emailInput, emailError, 'Por favor, informe seu e-mail.'); return false; }
    if (!ok)  { setError(emailInput, emailError, 'Informe um e-mail válido.'); return false; }
    setSuccess(emailInput, emailError);
    return true;
  };

  nomeInput.addEventListener('blur',  validateNome);
  emailInput.addEventListener('blur', validateEmail);

  form.addEventListener('submit', (e) => {
    const valid = validateNome() & validateEmail();
    if (!valid) {
      e.preventDefault();
      return;
    }
    btnText.hidden    = true;
    btnLoading.hidden = false;
  });
}
