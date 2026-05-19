const nav = document.querySelector('.nav');
const onScroll = () => {
  if (window.scrollY > 80) nav.style.background = 'rgba(7,17,31,.82)';
  else nav.style.background = 'rgba(7,17,31,.58)';
};
window.addEventListener('scroll', onScroll, { passive: true });

// Pause other videos when a new demo starts playing.
document.querySelectorAll('video').forEach((video) => {
  if (video.classList.contains('hero-video')) return;
  video.addEventListener('play', () => {
    document.querySelectorAll('video').forEach((other) => {
      if (other !== video && !other.classList.contains('hero-video')) other.pause();
    });
  });
});
