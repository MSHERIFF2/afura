// Smooth Scroll
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.style.display =
    navMenu.style.display === "block" ? "none" : "block";
});

// Slider Logic
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
let intervalID;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.opacity = i === index ? "1" : "0";
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

document.getElementById("next-btn").addEventListener("click", () => {
  clearInterval(intervalID);
  nextSlide();
});

document.getElementById("prev-btn").addEventListener("click", () => {
  clearInterval(intervalID);
  prevSlide();
});

// Auto-play slider
function startAutoplay() {
  intervalID = setInterval(nextSlide, 3000);
}

startAutoplay();
showSlide(currentSlide);
