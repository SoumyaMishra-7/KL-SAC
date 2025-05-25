// Show events section when Explore Events button is clicked
document.getElementById('explore-events').addEventListener('click', function(e) {
    e.preventDefault();
    hideAllSections();
    document.getElementById('events-section').style.display = 'block';
    window.scrollTo({
        top: document.getElementById('events-section').offsetTop,
        behavior: 'smooth'
    });
});

// Show gallery section when Gallery button is clicked
document.getElementById('explore-gallery').addEventListener('click', function(e) {
    e.preventDefault();
    hideAllSections();
    document.getElementById('gallery-section').style.display = 'block';
    window.scrollTo({
        top: document.getElementById('gallery-section').offsetTop,
        behavior: 'smooth'
    });
});

// Navigation menu functionality
document.getElementById('nav-events').addEventListener('click', function(e) {
    e.preventDefault();
    hideAllSections();
    document.getElementById('events-section').style.display = 'block';
    window.scrollTo({
        top: document.getElementById('events-section').offsetTop,
        behavior: 'smooth'
    });
});

document.getElementById('nav-gallery').addEventListener('click', function(e) {
    e.preventDefault();
    hideAllSections();
    document.getElementById('gallery-section').style.display = 'block';
    window.scrollTo({
        top: document.getElementById('gallery-section').offsetTop,
        behavior: 'smooth'
    });
});

document.getElementById('nav-about').addEventListener('click', function(e) {
    e.preventDefault();
    hideAllSections();
    document.getElementById('about-section').style.display = 'block';
    window.scrollTo({
        top: document.getElementById('about-section').offsetTop,
        behavior: 'smooth'
    });
});

document.getElementById('nav-contact').addEventListener('click', function(e) {
    e.preventDefault();
    hideAllSections();
    document.getElementById('contact-section').style.display = 'block';
    window.scrollTo({
        top: document.getElementById('contact-section').offsetTop,
        behavior: 'smooth'
    });
});

document.getElementById('nav-register').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.registration-form').style.display = 'flex';
});

function hideAllSections() {
    document.getElementById('events-section').style.display = 'none';
    document.getElementById('gallery-section').style.display = 'none';
    document.getElementById('about-section').style.display = 'none';
    document.getElementById('contact-section').style.display = 'none';
}

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.event-slide');
const totalSlides = slides.length;

// Auto rotate every 30 seconds
setInterval(() => {
    moveToNextSlide();
}, 30000);

// Navigation buttons
document.querySelector('.prev-btn').addEventListener('click', moveToPrevSlide);
document.querySelector('.next-btn').addEventListener('click', moveToNextSlide);

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function moveToPrevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

function moveToNextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Registration form functionality
const registerBtns = document.querySelectorAll('.register-btn');
const registrationForm = document.querySelector('.registration-form');
const closeForm = document.querySelector('.close-form');

registerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        registrationForm.style.display = 'flex';
    });
});

closeForm.addEventListener('click', () => {
    registrationForm.style.display = 'none';
});

// Close form when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === registrationForm) {
        registrationForm.style.display = 'none';
    }
});

// Form submission
document.getElementById('event-registration').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Registration submitted successfully!');
    registrationForm.style.display = 'none';
    this.reset();
});