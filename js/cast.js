/* ── Stránka Obsazení ── */
/* Obsazení je natvrdo v HTML (obsazeni.html) kvůli SEO – skript jen dokresluje
   chování: zvětšení fotky po kliknutí a fallback na hlavní vizuál, když fotka chybí. */

const PORTRAIT_PH = 'images/karolina-meineke-muzikal-vizual.webp';

document.addEventListener('DOMContentLoaded', () => {
  createPhotoModal();

  document.querySelectorAll('.cast-photo').forEach((img) => {
    img.addEventListener('click', () => openPhotoModal(img));
    img.addEventListener('error', function onError() {
      img.removeEventListener('error', onError);
      img.src = PORTRAIT_PH;
    });
  });
});

// --- Photo modal ---------------------------------------------------------
function createPhotoModal() {
  if (document.getElementById('photo-modal')) return;
  const modal = document.createElement('div');
  modal.id = 'photo-modal';
  modal.className = 'photo-modal hidden';
  modal.innerHTML = `
    <div class="photo-modal-inner" role="dialog" aria-modal="true">
      <button class="photo-modal-close" aria-label="Zavřít">✕</button>
      <img class="photo-modal-img" alt="" />
    </div>`;
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closePhotoModal();
  });
  document.body.appendChild(modal);
  modal.querySelector('.photo-modal-close').addEventListener('click', closePhotoModal);
}

function openPhotoModal(imgElement) {
  const modal = document.getElementById('photo-modal');
  if (!modal) return;
  const modalImg = modal.querySelector('.photo-modal-img');
  modalImg.src = imgElement.currentSrc || imgElement.src;
  const actor = imgElement.closest('.cast-card')?.querySelector('.cast-actor');
  modalImg.alt = actor ? actor.textContent : '';
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  window.addEventListener('keydown', onKeyDownForModal);
}

function closePhotoModal() {
  const modal = document.getElementById('photo-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  document.body.style.overflow = '';
  window.removeEventListener('keydown', onKeyDownForModal);
}

function onKeyDownForModal(e) {
  if (e.key === 'Escape') closePhotoModal();
}
