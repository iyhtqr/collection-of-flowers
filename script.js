// script.js
const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('closeBtn');

gallery.addEventListener('click', (e) => {
  if (e.target.tagName !== 'IMG') return;
  lightboxImg.src = e.target.src;
  lightboxImg.alt = e.target.alt;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
});

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImg.src = '';
  lightboxImg.alt = '';
}

closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});
