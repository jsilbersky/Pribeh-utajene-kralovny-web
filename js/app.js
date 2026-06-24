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
    mobileMenu && mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    hamburger && hamburger.classList.remove('open');
    mobileMenu && mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger && hamburger.addEventListener('click', openMenu);
  mobileClose && mobileClose.addEventListener('click', closeMenu);
  mobileMenu && mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) closeMenu();
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

// Show calendar
(function () {
  const container = document.getElementById('show-calendar');
  if (!container) return;

  fetch('data/shows.json')
    .then((r) => r.json())
    .then(renderShows)
    .catch(() => {
      renderShows([
        { id: 'premiere-2026',       date: '2026-09-10', dayOfWeek: 'čt', time: '19:00', venue: 'Divadlo na Orlí, Brno', note: 'PREMIÉRA', ticketUrl: 'https://goout.net/cs/pribeh-utajene-kralovny/ezqadri/', sold_out: false },
        { id: 'repriza-2026-09-17',  date: '2026-09-17', dayOfWeek: 'čt', time: '19:00', venue: 'Divadlo na Orlí, Brno', note: 'Repríza',  ticketUrl: 'https://goout.net/cs/pribeh-utajene-kralovny/ezqadri/', sold_out: false },
      ]);
    });

  function isValidUrl(string) {
    try {
      return string && (string.startsWith('http://') || string.startsWith('https://'));
    } catch (e) {
      return false;
    }
  }

  function renderShows(shows) {
    const grid = document.createElement('div');
    grid.className = 'shows-grid';

    shows.sort((a, b) => new Date(a.date) - new Date(b.date));

    shows.forEach((show) => {
      const isPast = new Date(show.date + 'T' + show.time) < new Date();
      const dateStr = new Date(show.date).toLocaleDateString('cs-CZ', {
        day: 'numeric', month: 'long', year: 'numeric'
      });

      let noteBadge = '';
      if (show.note === 'PREMIÉRA') noteBadge = '<span class="show-note note-premiere">PREMIÉRA</span>';
      else if (show.note) noteBadge = `<span class="show-note note-repriza">${show.note}</span>`;

      // 🔑 Klíčová změna: detekce URL vs. text
      let cta = '';
      const hasValidUrl = isValidUrl(show.ticketUrl);

      if (hasValidUrl && !isPast) {
        // Odkaz na vstupenky
        cta = `<a href="${show.ticketUrl}" target="_blank" rel="noopener" class="btn btn-gold btn-sm">Koupit vstupenky →</a>`;
      } else if (show.label) {
        // Vlastní text (např. "Pro zvané")
        cta = `<div class="show-label">${show.label}</div>`;
      } else if (isPast) {
        // Minulé představení — zašedlé tlačítko
        cta = `<div class="show-label-disabled">Představení proběhlo</div>`;
      }

      const card = document.createElement('div');
      card.className = 'show-card fade-up' + (isPast ? ' past' : '');
      card.innerHTML = `
        ${noteBadge}
        <div class="show-date">${show.dayOfWeek} ${dateStr}</div>
        <div class="show-time-venue">${show.time} · ${show.venue}</div>
        ${cta}`;
      grid.appendChild(card);
    });

    container.appendChild(grid);
    injectEventSchema(shows);
    observeFadeUp();
  }

  function injectEventSchema(shows) {
    const events = shows.map((s) => ({
      '@type': 'Event',
      name: 'Příběh utajené královny',
      startDate: s.date + 'T' + s.time + ':00+02:00',
      location: { '@type': 'Place', name: s.venue },
      offers: { '@type': 'Offer', url: s.ticketUrl, availability: s.sold_out ? 'SoldOut' : 'InStock' }
    }));
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': events });
    document.head.appendChild(script);
  }
})();

// Lightbox
(function () {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  const img    = lightbox.querySelector('.lightbox-img');
  const close  = lightbox.querySelector('.lightbox-close');
  const prev   = lightbox.querySelector('.lightbox-prev');
  const next   = lightbox.querySelector('.lightbox-next');

  let images = [];
  let current = 0;

  function open(srcs, idx) {
    images = srcs; current = idx;
    img.src = images[current];
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLB() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }
  function show(idx) {
    current = (idx + images.length) % images.length;
    img.src = images[current];
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
    items.forEach((el, i) => {
      el.addEventListener('click', () => open(srcs, i));
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
