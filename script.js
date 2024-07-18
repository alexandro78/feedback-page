const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slider-wrapper img');
const totalSlides = slides.length;
let currentIndex = 1;

// Set initial position without animation
sliderWrapper.style.transition = 'none';
sliderWrapper.style.transform = `translateX(-${currentIndex * 100}vw)`;

// Enable animation after the first move
setTimeout(() => {
    sliderWrapper.style.transition = 'transform 1s ease';
}, 0);

function moveSlider() {
    currentIndex++;
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}vw)`;
}

sliderWrapper.addEventListener('transitionend', () => {
    if (slides[currentIndex].classList.contains('clone')) {
        sliderWrapper.style.transition = 'none';
        if (currentIndex === totalSlides - 1) {
            currentIndex = 1;
        } else {
            currentIndex = totalSlides - 2;
        }
        sliderWrapper.style.transform = `translateX(-${currentIndex * 100}vw)`;
        setTimeout(() => {
            sliderWrapper.style.transition = 'transform 1s ease';
        }, 0);
    }
});

setInterval(moveSlider, 3000);