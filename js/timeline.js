/* ── Časová osa (karolina-meineke.html) ── */
/* Obsah časové osy je natvrdo v HTML (karolina-meineke.html) kvůli SEO. Fotky v ose
   používají standardní [data-gallery]/[data-lb-src] lightbox z app.js – skript
   tady jen dokresluje postupně se vyplňující čáru při scrollování. */

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('timeline');
  const progress = container && container.querySelector('.timeline-progress');
  if (!container || !progress) return;

  let raf = null;
  function updateProgress() {
    raf = null;
    const rect = container.getBoundingClientRect();
    const mark = window.innerHeight * 0.55; // "čtecí" linka
    const filled = Math.min(Math.max(mark - rect.top, 0), rect.height);
    progress.style.height = filled + 'px';
  }
  function onScroll() {
    if (raf === null) raf = requestAnimationFrame(updateProgress);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  updateProgress();
});
