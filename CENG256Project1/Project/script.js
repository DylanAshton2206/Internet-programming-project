const slideshowImages = document.querySelectorAll('.slideshow-image');
const slideInterval = 3000;
let currentSlide = 0;
function nextSlide() {
  slideshowImages[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slideshowImages.length;
  slideshowImages[currentSlide].classList.add('active');
}
setInterval(nextSlide, slideInterval);