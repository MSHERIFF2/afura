// Add event listener to navigation links
navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
	link.addEventListener('click', event => {
		event.preventDefault();
		const target = event.target.getAttribute('href');
		document.querySelector(target).scrollIntoView();
	});
});

const slideContainer = document.querySelector('.slider-container')
const slides = slideContainer.querySelectorAll('.slide')

let currentSlide = 0;

const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

nextBtn.addEventListener('click', navigateNext);
prevBtn.addEventListener('click', navigatePrev);

function navigateNext(){
    currentSlide++;
    updateSlide();
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
}

function navigatePrev(){
    currentSlide--;
    updateSlide();
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
}

function updateSlide(){
    slides.forEach((slide, index)=>{
        slide.style.opacity = index === currentSlide ? 1: 0;
    })
}
// ... (rest of the code remains the same)

// Add a variable to store the interval ID
let intervalID = null;

// Function to start the autoplay
function startAutoplay() {
  intervalID = setInterval(() => {
    currentSlide++;
    updateSlide();
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
  }, 3000); // Change the interval time (in ms) as needed
}

// Call the startAutoplay function to start the slider
startAutoplay();

// ... (rest of the code remains the same)

nextBtn.addEventListener('click', () => {
    clearInterval(intervalID);
    navigateNext();
  });
  
  prevBtn.addEventListener('click', () => {
    clearInterval(intervalID);
    navigatePrev();
  });
updateSlide();