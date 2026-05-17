/* ── Stránka Obsazení ── */

const PORTRAIT_PH = 'images/Vizual.webp';
const PROD_PH     = 'images/hero.png';

const SOCIAL_ICONS = {
  instagram: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
  web:       '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>'
};

// ── Herci ──────────────────────────────────────────────────────────────────
// Fotky: vložte soubory do složky images/cast/
//   portrét →  images/cast/{id}.jpg
// ──────────────────────────────────────────────────────────────────────────
const castData = [
  {
    id: 'Mari',
    actorName: 'Maří-Magdalena Fotrová',
    characterName: 'Caroline von Linsingen',
    actorBio: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis tempor ligula, vitae scelerisque lacus cursus sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed feugiat congue libero, non lacinia eros convallis a. Aenean at odio eu odio sodales sollicitudin at at augue. Curabitur lorem est, tincidunt non rhoncus at, interdum at leo. Etiam vulputate justo et eros aliquam vulputate. Maecenas imperdiet in neque quis iaculis. Nunc rhoncus eu lorem vehicula blandit. Ut semper blandit lectus et blandit. Aliquam vitae hendrerit lectus.      </p> <p>Maecenas consequat finibus ligula in ultrices. Vestibulum arcu mauris, ultrices at ipsum ac, vestibulum pulvinar dui. Fusce eleifend sed mauris ut semper. Proin condimentum eros ut neque venenatis suscipit. Vestibulum urna nulla, tristique sed lectus ut, convallis mattis ex. Vestibulum euismod enim at orci consequat aliquet. Morbi euismod tortor malesuada porttitor venenatis.</p>',
    socials: { instagram: null, web: null }
  },
  {
    id: 'Karolina',
    actorName: 'Karolína Bútorová',
    characterName: 'Karolina Meineke',
        actorBio: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis tempor ligula, vitae scelerisque lacus cursus sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed feugiat congue libero, non lacinia eros convallis a. Aenean at odio eu odio sodales sollicitudin at at augue. Curabitur lorem est, tincidunt non rhoncus at, interdum at leo. Etiam vulputate justo et eros aliquam vulputate. Maecenas imperdiet in neque quis iaculis. Nunc rhoncus eu lorem vehicula blandit. Ut semper blandit lectus et blandit. Aliquam vitae hendrerit lectus.      </p> <p>Maecenas consequat finibus ligula in ultrices. Vestibulum arcu mauris, ultrices at ipsum ac, vestibulum pulvinar dui. Fusce eleifend sed mauris ut semper. Proin condimentum eros ut neque venenatis suscipit. Vestibulum urna nulla, tristique sed lectus ut, convallis mattis ex. Vestibulum euismod enim at orci consequat aliquet. Morbi euismod tortor malesuada porttitor venenatis.</p>',
    socials: { instagram: null, web: null }
  },
  {
    id: 'Richard',
    actorName: 'Richard Ciller',
    characterName: 'princ William',
        actorBio: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis tempor ligula, vitae scelerisque lacus cursus sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed feugiat congue libero, non lacinia eros convallis a. Aenean at odio eu odio sodales sollicitudin at at augue. Curabitur lorem est, tincidunt non rhoncus at, interdum at leo. Etiam vulputate justo et eros aliquam vulputate. Maecenas imperdiet in neque quis iaculis. Nunc rhoncus eu lorem vehicula blandit. Ut semper blandit lectus et blandit. Aliquam vitae hendrerit lectus.      </p> <p>Maecenas consequat finibus ligula in ultrices. Vestibulum arcu mauris, ultrices at ipsum ac, vestibulum pulvinar dui. Fusce eleifend sed mauris ut semper. Proin condimentum eros ut neque venenatis suscipit. Vestibulum urna nulla, tristique sed lectus ut, convallis mattis ex. Vestibulum euismod enim at orci consequat aliquet. Morbi euismod tortor malesuada porttitor venenatis.</p>',
    socials: { instagram: null, web: null }
  },
  {
    id: 'Matyas',
    actorName: 'Matyáš Kyncl',
    characterName: 'Adolph Meineke',
        actorBio: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis tempor ligula, vitae scelerisque lacus cursus sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed feugiat congue libero, non lacinia eros convallis a. Aenean at odio eu odio sodales sollicitudin at at augue. Curabitur lorem est, tincidunt non rhoncus at, interdum at leo. Etiam vulputate justo et eros aliquam vulputate. Maecenas imperdiet in neque quis iaculis. Nunc rhoncus eu lorem vehicula blandit. Ut semper blandit lectus et blandit. Aliquam vitae hendrerit lectus.      </p> <p>Maecenas consequat finibus ligula in ultrices. Vestibulum arcu mauris, ultrices at ipsum ac, vestibulum pulvinar dui. Fusce eleifend sed mauris ut semper. Proin condimentum eros ut neque venenatis suscipit. Vestibulum urna nulla, tristique sed lectus ut, convallis mattis ex. Vestibulum euismod enim at orci consequat aliquet. Morbi euismod tortor malesuada porttitor venenatis.</p>',
    socials: { instagram: null, web: null }
  },
  {
    id: 'Veronika',
    actorName: 'Veronika Martinů',
    characterName: 'Henrietta Meineke',
        actorBio: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis tempor ligula, vitae scelerisque lacus cursus sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed feugiat congue libero, non lacinia eros convallis a. Aenean at odio eu odio sodales sollicitudin at at augue. Curabitur lorem est, tincidunt non rhoncus at, interdum at leo. Etiam vulputate justo et eros aliquam vulputate. Maecenas imperdiet in neque quis iaculis. Nunc rhoncus eu lorem vehicula blandit. Ut semper blandit lectus et blandit. Aliquam vitae hendrerit lectus.      </p> <p>Maecenas consequat finibus ligula in ultrices. Vestibulum arcu mauris, ultrices at ipsum ac, vestibulum pulvinar dui. Fusce eleifend sed mauris ut semper. Proin condimentum eros ut neque venenatis suscipit. Vestibulum urna nulla, tristique sed lectus ut, convallis mattis ex. Vestibulum euismod enim at orci consequat aliquet. Morbi euismod tortor malesuada porttitor venenatis.</p>',
    socials: { instagram: null, web: null }
  },
  {
    id: 'Natalia',
    actorName: 'Natália Klotková',
    characterName: 'Emílie von Linsingen',
        actorBio: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis tempor ligula, vitae scelerisque lacus cursus sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed feugiat congue libero, non lacinia eros convallis a. Aenean at odio eu odio sodales sollicitudin at at augue. Curabitur lorem est, tincidunt non rhoncus at, interdum at leo. Etiam vulputate justo et eros aliquam vulputate. Maecenas imperdiet in neque quis iaculis. Nunc rhoncus eu lorem vehicula blandit. Ut semper blandit lectus et blandit. Aliquam vitae hendrerit lectus.      </p> <p>Maecenas consequat finibus ligula in ultrices. Vestibulum arcu mauris, ultrices at ipsum ac, vestibulum pulvinar dui. Fusce eleifend sed mauris ut semper. Proin condimentum eros ut neque venenatis suscipit. Vestibulum urna nulla, tristique sed lectus ut, convallis mattis ex. Vestibulum euismod enim at orci consequat aliquet. Morbi euismod tortor malesuada porttitor venenatis.</p>',
    socials: { instagram: null, web: null }
  },
  {
    id: 'Hynek',
    actorName: 'Hynek Mikuš',
    characterName: 'Ernst von Linsingen / Gustav Friese',
        actorBio: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis tempor ligula, vitae scelerisque lacus cursus sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed feugiat congue libero, non lacinia eros convallis a. Aenean at odio eu odio sodales sollicitudin at at augue. Curabitur lorem est, tincidunt non rhoncus at, interdum at leo. Etiam vulputate justo et eros aliquam vulputate. Maecenas imperdiet in neque quis iaculis. Nunc rhoncus eu lorem vehicula blandit. Ut semper blandit lectus et blandit. Aliquam vitae hendrerit lectus.      </p> <p>Maecenas consequat finibus ligula in ultrices. Vestibulum arcu mauris, ultrices at ipsum ac, vestibulum pulvinar dui. Fusce eleifend sed mauris ut semper. Proin condimentum eros ut neque venenatis suscipit. Vestibulum urna nulla, tristique sed lectus ut, convallis mattis ex. Vestibulum euismod enim at orci consequat aliquet. Morbi euismod tortor malesuada porttitor venenatis.</p>',
    socials: { instagram: null, web: null }
  },
  {
    id: 'Vaclav',
    actorName: 'Václav Fiala',
    characterName: 'Carl Teubner',
        actorBio: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis tempor ligula, vitae scelerisque lacus cursus sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed feugiat congue libero, non lacinia eros convallis a. Aenean at odio eu odio sodales sollicitudin at at augue. Curabitur lorem est, tincidunt non rhoncus at, interdum at leo. Etiam vulputate justo et eros aliquam vulputate. Maecenas imperdiet in neque quis iaculis. Nunc rhoncus eu lorem vehicula blandit. Ut semper blandit lectus et blandit. Aliquam vitae hendrerit lectus.      </p> <p>Maecenas consequat finibus ligula in ultrices. Vestibulum arcu mauris, ultrices at ipsum ac, vestibulum pulvinar dui. Fusce eleifend sed mauris ut semper. Proin condimentum eros ut neque venenatis suscipit. Vestibulum urna nulla, tristique sed lectus ut, convallis mattis ex. Vestibulum euismod enim at orci consequat aliquet. Morbi euismod tortor malesuada porttitor venenatis.</p>',
    socials: { instagram: null, web: null }
  },
  {
    id: 'Katerina',
    actorName: 'Kateřina Michková',
    characterName: 'Dory Jordan',
        actorBio: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis tempor ligula, vitae scelerisque lacus cursus sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed feugiat congue libero, non lacinia eros convallis a. Aenean at odio eu odio sodales sollicitudin at at augue. Curabitur lorem est, tincidunt non rhoncus at, interdum at leo. Etiam vulputate justo et eros aliquam vulputate. Maecenas imperdiet in neque quis iaculis. Nunc rhoncus eu lorem vehicula blandit. Ut semper blandit lectus et blandit. Aliquam vitae hendrerit lectus.      </p> <p>Maecenas consequat finibus ligula in ultrices. Vestibulum arcu mauris, ultrices at ipsum ac, vestibulum pulvinar dui. Fusce eleifend sed mauris ut semper. Proin condimentum eros ut neque venenatis suscipit. Vestibulum urna nulla, tristique sed lectus ut, convallis mattis ex. Vestibulum euismod enim at orci consequat aliquet. Morbi euismod tortor malesuada porttitor venenatis.</p>',
    socials: { instagram: null, web: null }
  },
  {
    id: 'Martina',
    actorName: 'Martina Pavlínová',
    characterName: 'Královna Charlotta / Augusta Friese',
        actorBio: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis tempor ligula, vitae scelerisque lacus cursus sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed feugiat congue libero, non lacinia eros convallis a. Aenean at odio eu odio sodales sollicitudin at at augue. Curabitur lorem est, tincidunt non rhoncus at, interdum at leo. Etiam vulputate justo et eros aliquam vulputate. Maecenas imperdiet in neque quis iaculis. Nunc rhoncus eu lorem vehicula blandit. Ut semper blandit lectus et blandit. Aliquam vitae hendrerit lectus.      </p> <p>Maecenas consequat finibus ligula in ultrices. Vestibulum arcu mauris, ultrices at ipsum ac, vestibulum pulvinar dui. Fusce eleifend sed mauris ut semper. Proin condimentum eros ut neque venenatis suscipit. Vestibulum urna nulla, tristique sed lectus ut, convallis mattis ex. Vestibulum euismod enim at orci consequat aliquet. Morbi euismod tortor malesuada porttitor venenatis.</p>',
    socials: { instagram: null, web: null }
  }
];

// Formáty, které se zkouší (v pořadí priority)
const FORMATS = ['jpg', 'jpeg', 'png', 'webp', 'gif'];

// Cesty k fotkám odvozené z id — bez závislosti na formátu
function portraitSrc(id) {
  return FORMATS.map(fmt => `images/cast/${id}.${fmt}`);
}
function prodSrc(id, n) {
  return FORMATS.map(fmt => `images/cast/${id}-${n}.${fmt}`);
}

// Zkusí postupně všechny formáty, nebo fallback pokud žádný neexistuje
function withFormatTryAndFallback(img, srcs, fallback) {
  if (!Array.isArray(srcs)) srcs = [srcs];
  let currentIndex = 0;
  const originalOnerror = img.onerror;

  function tryNext() {
    if (currentIndex >= srcs.length) {
      if (fallback) {
        img.src = fallback;
        img.onerror = null;
      } else {
        // Zavolej custom error handler pokud všechny formáty selžou
        img.onerror = null;
        if (originalOnerror && typeof originalOnerror === 'function') {
          originalOnerror.call(img);
        }
      }
      return;
    }
    img.src = srcs[currentIndex];
    currentIndex++;
  }

  img.onerror = tryNext;
  tryNext();
}

// Pokud obrázek neexistuje, přepne na placeholder
function withFallback(img, fallback) {
  img.onerror = () => { img.src = fallback; img.onerror = null; };
}

// ── Grid karet ──────────────────────────────────────────────────────────────
function renderCast() {
  const grid = document.getElementById('cast-grid');
  if (!grid) return;

  castData.forEach((member, i) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'cast-card-wrapper';
    wrapper.style.transitionDelay = `${i * 60}ms`;

    const card = document.createElement('div');
    card.className = 'cast-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `${member.actorName} — ${member.characterName}`);

    const img = document.createElement('img');
    img.alt = member.actorName;
    img.loading = 'lazy';
    withFormatTryAndFallback(img, portraitSrc(member.id), PORTRAIT_PH);

    const info = document.createElement('div');
    info.className = 'cast-card-info';
    info.innerHTML = `
      <div class="cast-actor">${member.actorName}</div>
      <div class="cast-character">${member.characterName}</div>`;

    card.appendChild(img);
    card.appendChild(info);
    card.addEventListener('click', () => openModal(member));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(member); }
    });

    wrapper.appendChild(card);
    grid.appendChild(wrapper);
  });
}

// ── Modal ────────────────────────────────────────────────────────────────────
const overlay = document.getElementById('cast-modal');

function openModal(m) {
  if (!overlay) return;

  // Portrét
  const portraitImg = overlay.querySelector('.modal-img img');
  const portraitContainer = overlay.querySelector('.modal-img');
  portraitImg.alt = m.actorName;

  // Pokud se i placeholder nenačte, zobrazí placeholder div
  const origOnError = portraitImg.onerror;
  portraitImg.onerror = () => {
    portraitImg.style.display = 'none';
    if (!portraitContainer.querySelector('.modal-portrait-placeholder')) {
      const ph = document.createElement('div');
      ph.className = 'modal-portrait-placeholder';
      ph.textContent = 'Portrét není dostupný';
      portraitContainer.appendChild(ph);
    }
  };

  withFormatTryAndFallback(portraitImg, portraitSrc(m.id), PORTRAIT_PH);

  // Textové info
  overlay.querySelector('[data-modal-actor]').textContent = m.actorName;
  overlay.querySelector('[data-modal-character]').textContent = m.characterName;
  overlay.querySelector('[data-modal-bio]').innerHTML = m.actorBio;

  // Sociální sítě
  const socialsEl = overlay.querySelector('.modal-socials');
  socialsEl.innerHTML = '';
  ['instagram', 'web'].forEach(type => {
    const url = m.socials?.[type];
    const a = document.createElement('a');
    a.className = 'modal-social-btn' + (url ? '' : ' modal-social-btn--empty');
    a.innerHTML = SOCIAL_ICONS[type];
    a.setAttribute('aria-label', type === 'instagram' ? 'Instagram' : 'Web');
    if (url) {
      a.href = url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    } else {
      a.href = '#';
      a.setAttribute('aria-disabled', 'true');
      a.addEventListener('click', e => e.preventDefault());
    }
    socialsEl.appendChild(a);
  });

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  overlay.querySelector('.modal-close').focus();
}

function closeModal() {
  overlay && overlay.classList.remove('open');
  document.body.style.overflow = '';
}

if (overlay) {
  overlay.querySelector('.modal-close').addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
}
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

document.addEventListener('DOMContentLoaded', () => {
  renderCast();
  requestAnimationFrame(() => { if (typeof window.observeFadeUp === 'function') window.observeFadeUp(); });
});
