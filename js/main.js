import {
  generateCourses,
  initializeFilter,
  attachCourseClickEvents,
} from './data.js';

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-bar__links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const coursesGroup = document.querySelector('.courses-group');

  if (coursesGroup) {
    generateCourses('all');
    initializeFilter();

  }
});
