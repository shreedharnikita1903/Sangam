// script.js

const testimonialContainer = document.querySelector('.testimonial-container');
const testimonialWrapper = testimonialContainer.querySelectorAll('.testimonial-wrapper');
const firstWrapper = testimonialWrapper[0];

testimonialContainer.addEventListener('animationiteration', () => {
  testimonialContainer.appendChild(firstWrapper);
});