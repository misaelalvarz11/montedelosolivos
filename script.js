// Automatic image carousel
const carousel = document.querySelector('.carousel');
let index = 0;

function startCarousel() {
    const images = document.querySelectorAll('.carousel img');
    setInterval(() => {
        index = (index + 1) % images.length;
        carousel.style.transform = `translateX(-${index * 100}vw)`;
    }, 3000);
}

startCarousel();

// Botón de menú adaptativo
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Desplazamiento infinito de la tira de imágenes
const slider = document.querySelector('.image-slider');
let isPaused = false;

slider.addEventListener('mouseover', () => isPaused = true);
slider.addEventListener('mouseout', () => isPaused = false);

setInterval(() => {
    if (!isPaused) {
        const firstImage = slider.querySelector('img:first-child');
        slider.appendChild(firstImage.cloneNode(true));
        slider.removeChild(firstImage);
    }
}, 3000);


document.querySelector('.contact-form form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Tu mensaje ha sido enviado con éxito. ¡Gracias por contactarnos!');
    this.reset();
  });
  