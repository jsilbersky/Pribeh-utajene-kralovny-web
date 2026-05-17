/* ── Deníkové stránky (DiaryPages) ── */

const legends = [
  {
    title: 'Zázraky z Blanska',
    text: 'Místní lidé vyprávěli, že v domě, kde Caroline žila, se v noci zapalují svíčky samy od sebe. Děti, které ji navštívily nemocné, odcházely zdravé. Říkalo se, že má dar. Nebo prokletí.'
  },
  {
    title: 'Dopisy, které nedošly',
    text: 'Prý psala dopisy do Londýna po celý život. Žádný nebyl doručen. Po její smrti našli v truhle svázaný balík — stovky obálek, žádná otevřená. Adresátem byl vždy jen jeden člověk.'
  },
  {
    title: 'Blanenský obraz',
    text: 'V místním kostele visí obraz Madony. Starousedlíci přísahají, že tvář Madony má Carolininy rysy. Nikdo neví, kdo ho namaloval.'
  }
];

function renderDiary() {
  const slider = document.getElementById('diary-slider');
  if (!slider) return;

  const inner = slider.querySelector('.diary-slides-inner');
  const dotsContainer = slider.querySelector('.diary-dots');
  const prevBtn = slider.querySelector('.diary-prev');
  const nextBtn = slider.querySelector('.diary-next');

  let current = 0;

  legends.forEach((leg, i) => {
    const page = document.createElement('div');
    page.className = 'diary-page';
    page.innerHTML = `
      <span class="diary-ornament">✦</span>
      <h3 class="diary-title">${leg.title}</h3>
      <p class="diary-text">${leg.text}</p>`;
    inner.appendChild(page);

    const dot = document.createElement('div');
    dot.className = 'diary-dot' + (i === 0 ? ' active' : '');
    dotsContainer.appendChild(dot);
  });

  function goTo(idx) {
    current = (idx + legends.length) % legends.length;
    inner.style.transform = `translateX(-${current * 100}%)`;
    slider.querySelectorAll('.diary-dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  }

  prevBtn && prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn && nextBtn.addEventListener('click', () => goTo(current + 1));

  // Swipe (touch)
  let touchStartX = 0;
  inner.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  inner.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) goTo(current + (dx < 0 ? 1 : -1));
  });

  // Klávesy (pokud je slider ve focusu)
  slider.setAttribute('tabindex', '0');
  slider.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') goTo(current - 1);
    if (e.key === 'ArrowRight') goTo(current + 1);
  });
}

document.addEventListener('DOMContentLoaded', renderDiary);
