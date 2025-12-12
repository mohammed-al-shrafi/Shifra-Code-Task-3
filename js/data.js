export const categories = {
  design: {
    name: 'Design Courses',
    courses: [
      {
        img: '../assets/imgs/courses/Design/UI UX.jpg',
        trainerImg: '../assets/imgs/global/team/instructor1.jpg',
        title: 'UI_UX',
        lessons: 12,
        students: 10,
        stars: 3,
        price: 55,
      },
      {
        img: '../assets/imgs/courses/Design/Motion Graphic.png',
        trainerImg: '../assets/imgs/global/team/instructor2.jpg',
        title: 'Motion Graphic',
        lessons: 30,
        students: 25,
        stars: 4,
        price: 29,
      },
      {
        img: '../assets/imgs/courses/Design/Graphic design.png',
        trainerImg: '../assets/imgs/global/team/instructor3.jpg',
        title: 'Graphic Design',
        lessons: 25,
        students: 25,
        stars: 4,
        price: 100,
      },
      {
        img: '../assets/imgs/courses/Design/Video Editing.png',
        trainerImg: '../assets/imgs/global/team/instructor4.jpg',
        title: 'Video montage',
        lessons: 12,
        students: 50,
        stars: 5,
        price: 20,
      },
    ],
  },
  marketing: {
    name: 'marketing',
    courses: [
      {
        img: '../assets/imgs/courses/Marketing/Digital Marketing.png',
        trainerImg: '../assets/imgs/global/team/instructor1.jpg',
        title: 'Digital Marketing',
        lessons: 10,
        students: 35,
        stars: 5,
        price: 70,
      },
      {
        img: '../assets/imgs/courses/Marketing/Social Media Marketing.png',
        trainerImg: '../assets/imgs/global/team/instructor2.jpg',
        title: 'Socail Media Marketing',
        lessons: 30,
        students: 15,
        stars: 4,
        price: 45,
      },
      {
        img: '../assets/imgs/courses/Marketing/Content Marketing.png',
        trainerImg: '../assets/imgs/global/team/instructor3.jpg',
        title: 'Content Marketing',
        lessons: 12,
        students: 25,
        stars: 4,
        price: 45,
      },
      {
        img: '../assets/imgs/courses/Marketing/Google Ads & analytivs.png',
        trainerImg: '../assets/imgs/global/team/instructor4.jpg',
        title: 'Google Ads & analytivs',
        lessons: 18,
        students: 70,
        stars: 5,
        price: 35,
      },
    ],
  },
  web: {
    name: 'Web Development',
    courses: [
      {
        img: '../assets/imgs/courses/Web/React-Js Essentails.png',
        trainerImg: '../assets/imgs/global/team/instructor1.jpg',
        title: 'React Js Essentails',
        lessons: 12,
        students: 10,
        stars: 3,
        price: 90,
      },
      {
        img: '../assets/imgs/courses/Web/Full-Stack Development.png',
        trainerImg: '../assets/imgs/global/team/instructor2.jpg',
        title: 'Full Stack Development',
        lessons: 120,
        students: 26,
        stars: 4,
        price: 300,
      },
      {
        img: '../assets/imgs/courses/Web/Database Mangement.png',
        trainerImg: '../assets/imgs/global/team/instructor3.jpg',
        title: 'Database Mangement',
        lessons: 18,
        students: 36,
        stars: 4,
        price: 87,
      },
      {
        img: '../assets/imgs/courses/Web/Front End Development.png',
        trainerImg: '../assets/imgs/global/team/instructor4.jpg',
        title: 'Front End Development',
        lessons: 33,
        students: 87,
        stars: 5,
        price: 70,
      },
    ],
  },
  cyber: {
    name: 'cyber Security',
    courses: [
      {
        img: '../assets/imgs/courses/Cyber/Eithical Hacking.png',
        trainerImg: '../assets/imgs/global/team/instructor1.jpg',
        title: 'Eithical Hacking',
        lessons: 12,
        students: 10,
        stars: 3,
        price: 55,
      },
      {
        img: '../assets/imgs/courses/Cyber/Network Security.png',
        trainerImg: '../assets/imgs/global/team/instructor2.jpg',
        title: 'Network Security',
        lessons: 30,
        students: 25,
        stars: 4,
        price: 29,
      },
      {
        img: '../assets/imgs/courses/Cyber/cyber security for web.png',
        trainerImg: '../assets/imgs/global/team/instructor3.jpg',
        title: 'cyber security for web',
        lessons: 25,
        students: 25,
        stars: 4,
        price: 100,
      },
      {
        img: '../assets/imgs/courses/Cyber/cyber security basic.png',
        trainerImg: '../assets/imgs/global/team/instructor4.jpg',
        title: 'cyber security basic',
        lessons: 12,
        students: 50,
        stars: 5,
        price: 20,
      },
    ],
  },
  content: {
    name: 'Content Writing',
    courses: [
      {
        img: '../assets/imgs/courses/Content Writing/Contaent Writing Basic.png',
        trainerImg: '../assets/imgs/global/team/instructor1.jpg',
        title: 'Contaent Writing Basic',
        lessons: 12,
        students: 10,
        stars: 3,
        price: 55,
      },
      {
        img: '../assets/imgs/courses/Content Writing/SEO Writing.png',
        trainerImg: '../assets/imgs/global/team/instructor2.jpg',
        title: 'SEO Writing',
        lessons: 30,
        students: 25,
        stars: 4,
        price: 28,
      },
      {
        img: '../assets/imgs/courses/Content Writing/Blog & Article Writing.png',
        trainerImg: '../assets/imgs/global/team/instructor3.jpg',
        title: 'Blog & Article Writing',
        lessons: 25,
        students: 25,
        stars: 4,
        price: 100,
      },
      {
        img: '../assets/imgs/courses/Content Writing/Copywriting Marketing.png',
        trainerImg: '../assets/imgs/global/team/instructor4.jpg',
        title: 'Copywriting Marketing',
        lessons: 12,
        students: 50,
        stars: 5,
        price: 20,
      },
    ],
  },
};

export function createStars(rating) {
  let starsHTML = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      starsHTML += `
        <svg class="star filled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
          <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
        </svg>
      `;
    } else {
      starsHTML += `
        <svg class="star empty" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
          <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/>
        </svg>
      `;
    }
  }
  return starsHTML;
}

export function createCourseCard(course, categoryKey) {
  const courseData = JSON.stringify({
    ...course,
    category: categoryKey,
  });

  return `
    <div class="course-card" data-course-info='${courseData}'>
      <img
        src="${course.img}"
        alt="${course.title}"
        class="course-card__image"
      />

      <div class="course-card__info">
        <img
          src="${course.trainerImg}"
          class="course-card__instructor-img"
          alt="Instructor"
        />

        <h4 class="course-card__title">${course.title}</h4>

        <div class="course-meta">
          <span class="course-meta__lessons">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_92_2616)">
              <path d="M8.08674 11.4917H3.91357C4.37077 11.2999 4.66824 10.8525 4.66824 10.3567V9.97583H7.33205V10.3567C7.33205 10.8525 7.62954 11.2999 8.08674 11.4917Z" fill="#6D6D6D"/>
              </g>
            </svg>
          ${course.lessons} lessons</span>

          <span class="course-meta__students">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_92_2555)">
              <path d="M3.1728 0.815894L0.838368 1.5001L0.773438 1.47927V6.45382C0.773438 6.45382 0.931042 7.08644 1.8738 6.93682L4.69563 5.52277V0.548218L3.1728 0.815894Z" fill="url(#paint0_linear_92_2555)"/>
              </g>
            </svg>
            ${course.students} students</span>
        </div>

        <div class="course-meta">
          <span class="course-meta__review">${createStars(course.stars)}</span>
          <span class="course-card__price">$${course.price}</span>
        </div>
      </div>
    </div>
  `;
}

export function createCourseGroup(category, categoryKey) {
  const coursesHTML = category.courses
    .map((course) => createCourseCard(course, categoryKey))
    .join('');

  return `
    <h2 class="courses-group__title">${category.name}</h2>
    <div class="courses-cards">
      ${coursesHTML}
    </div>
  `;
}

export function generateCourses(categoryKey = 'all') {
  const coursesGroupContainer = document.querySelector('.courses-group');

  // توقف بدون عرض خطأ إذا لم يكن العنصر موجود
  if (!coursesGroupContainer) {
    return;
  }

  let coursesHTML = '';

  if (categoryKey === 'all') {
    for (const key in categories) {
      coursesHTML += createCourseGroup(categories[key], key);
    }
  } else {
    if (categories[categoryKey]) {
      coursesHTML = createCourseGroup(categories[categoryKey], categoryKey);
    }
  }

  coursesGroupContainer.innerHTML = coursesHTML;

  attachCourseClickEvents();
}

function saveCourseToStorage(courseData) {
  try {
    localStorage.setItem('selected-course', JSON.stringify(courseData));
    return true;
  } catch (error) {
    return false;
  }
}

export function attachCourseClickEvents() {
  const courseCards = document.querySelectorAll('.course-card');

  courseCards.forEach((card) => {
    card.addEventListener('click', function () {
      const courseData = this.getAttribute('data-course-info');

      if (!courseData) {
        return;
      }

      try {
        const course = JSON.parse(courseData);

        const saved = saveCourseToStorage(course);

        if (saved) {
          window.location.href = 'course-details.html';
        } else {
          alert('حدث خطأ في حفظ بيانات الكورس');
        }
      } catch (error) {
        console.error('خطأ في معالجة بيانات الكورس:', error);
      }
    });
  });
}

export function initializeFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((btn) => btn.classList.remove('active'));

      button.classList.add('active');

      const category = button.getAttribute('data-category');

      generateCourses(category);
    });
  });
}
