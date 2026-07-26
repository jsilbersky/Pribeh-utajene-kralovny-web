/* ── Sdílený JS: navbar, countdown, show-calendar, lightbox ── */

// Navbar: scroll efekt + hamburger
(function () {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileClose = document.querySelector('.mobile-menu-close');

  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function openMenu() {
    hamburger && hamburger.classList.add('open');
    hamburger && hamburger.setAttribute('aria-expanded', 'true');
    mobileMenu && mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    hamburger && hamburger.classList.remove('open');
    hamburger && hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu && mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger && hamburger.addEventListener('click', openMenu);
  mobileClose && mobileClose.addEventListener('click', closeMenu);
  mobileMenu && mobileMenu.addEventListener('click', (e) => {
    // Klik mimo položky i klik na odkaz (kotva v rámci stránky) menu zavře
    if (e.target === mobileMenu || e.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  // Aktivní nav odkaz
  const path = location.pathname.replace(/\/$/, '');
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach((a) => {
    const href = a.getAttribute('href').replace(/\/$/, '');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

// Footer year
(function () {
  const footerYear = document.querySelector('.footer-copyright');
  if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.textContent = `© ${currentYear} Příběh utajené královny`;
  }
})();

// Countdown
(function () {
  const PREMIERE = new Date('2026-09-10T19:00:00+02:00');
  const LABEL = 'Premiéra proběhla 10. 9. 2026 v 19:00 · Divadlo na Orlí, Brno';
  const containers = document.querySelectorAll('[data-countdown]');
  if (!containers.length) return;

  function pad(n) { return String(n).padStart(2, '0'); }

  function tick() {
    const now = new Date();
    const diff = PREMIERE - now;

    containers.forEach((el) => {
      if (diff <= 0) {
        el.innerHTML = `<div class="countdown-badge">🎭 ${LABEL}</div>`;
        return;
      }
      const days  = Math.floor(diff / 86400000);
      const hours = Math.floor((diff % 86400000) / 3600000);
      const mins  = Math.floor((diff % 3600000)  / 60000);
      const secs  = Math.floor((diff % 60000)    / 1000);
      el.innerHTML = `
        <div class="countdown">
          <div class="countdown-block"><span class="countdown-num" id="cd-days">${days}</span><span class="countdown-label">DNY</span></div>
          <div class="countdown-block"><span class="countdown-num">${pad(hours)}</span><span class="countdown-label">HOD</span></div>
          <div class="countdown-block"><span class="countdown-num">${pad(mins)}</span><span class="countdown-label">MIN</span></div>
          <div class="countdown-block"><span class="countdown-num">${pad(secs)}</span><span class="countdown-label">SEK</span></div>
        </div>`;
    });
  }
  tick();
  setInterval(tick, 1000);
})();

// Lightbox
(function () {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  const img    = lightbox.querySelector('.lightbox-img');
  const close  = lightbox.querySelector('.lightbox-close');
  const prev   = lightbox.querySelector('.lightbox-prev');
  const next   = lightbox.querySelector('.lightbox-next');

  // Popisek — vytvoří se jen jednou, není potřeba ho mít v HTML
  let caption = lightbox.querySelector('.lightbox-caption');
  if (!caption) {
    caption = document.createElement('div');
    caption.className = 'lightbox-caption';
    lightbox.appendChild(caption);
  }

  let images = [];
  let captions = [];
  let current = 0;

  function open(srcs, idx, caps) {
    images = srcs;
    captions = Array.isArray(caps) ? caps : [];
    // Šipky jen když je co listovat
    const nav = images.length > 1 ? '' : 'none';
    if (prev) prev.style.display = nav;
    if (next) next.style.display = nav;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    show(idx);
  }
  function closeLB() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }
  function show(idx) {
    current = (idx + images.length) % images.length;
    img.src = images[current];
    const text = captions[current] || '';
    img.alt = text;
    caption.textContent = text;
  }

  close  && close.addEventListener('click', closeLB);
  prev   && prev.addEventListener('click', () => show(current - 1));
  next   && next.addEventListener('click', () => show(current + 1));
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLB(); });
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLB();
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });

  // Init: attach to all [data-gallery] groups
  document.querySelectorAll('[data-gallery]').forEach((group) => {
    const items = [...group.querySelectorAll('[data-lb-src]')];
    const srcs = items.map((el) => el.dataset.lbSrc);
    // [data-no-caption] — galerie bez popisků (alt zůstává kvůli přístupnosti)
    const noCaption = group.hasAttribute('data-no-caption');
    const caps = items.map((el) => {
      if (noCaption) return '';
      const inner = el.querySelector('img');
      return el.dataset.lbCaption || (inner ? inner.alt : '') || '';
    });
    items.forEach((el, i) => {
      el.addEventListener('click', () => open(srcs, i, caps));
      if (el.tagName === 'DIV' || el.tagName === 'FIGURE') {
        el.setAttribute('role', 'button');
        el.setAttribute('tabindex', '0');
        el.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(srcs, i, caps); }
        });
      }
    });
  });

  window.openLightbox = open;
})();

// IntersectionObserver pro .fade-up a cast/act/timeline
window.observeFadeUp = function observeFadeUp() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-up, .act, .cast-card-wrapper, .timeline-item').forEach((el) => {
    io.observe(el);
  });
}
document.addEventListener('DOMContentLoaded', window.observeFadeUp);

// Lazy YouTube embed (nahradí placeholder kliknutím)
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.video-placeholder').forEach((placeholder) => {
    const wrapper = placeholder.closest('.video-wrapper');
    const src = placeholder.dataset.ytSrc;
    if (!src) return;
    placeholder.addEventListener('click', () => {
      const iframe = document.createElement('iframe');
      iframe.src = src + '?autoplay=1';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      iframe.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:0;';
      wrapper.appendChild(iframe);
      placeholder.style.display = 'none';
    });
  });
});
