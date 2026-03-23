const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('closeBtn');

gallery.addEventListener('click', (e) => {
  const img = e.target.closest('img');
  if (!img) return;

  lightboxImg.src = img.src;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden'; // Prevent scroll
});

const closeGallery = () => {
  lightbox.classList.remove('open');
  document.body.style.overflow = ''; 
};

closeBtn.addEventListener('click', closeGallery);

// Close if user clicks the dark background
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
    closeGallery();
  }
});

// ESC key to close
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeGallery();
});
