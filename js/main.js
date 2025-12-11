import { generateCourses, initializeFilter } from './data.js';

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-bar__links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// تشغيل الكورسات والفلترة
document.addEventListener('DOMContentLoaded', () => {
  generateCourses('all'); // عرض جميع الكورسات في البداية
  initializeFilter(); // تفعيل الفلترة
});
