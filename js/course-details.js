function createStars(rating) {
  let starsHTML = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      starsHTML += `★`;
    } else {
      starsHTML += `☆`;
    }
  }
  return starsHTML;
}

function displayCourseDetails() {
  const courseData = localStorage.getItem('selected-course');

  if (!courseData) {
    alert("Data didnt't save well ");
    window.location.href = 'index.html';
    return;
  }

  try {
    const course = JSON.parse(courseData);

    const courseTitle = document.querySelector('.courseInfo .global--title');
    if (courseTitle) {
      courseTitle.textContent = course.title;
    }

    const pageTitle = document.querySelector('title');
    if (pageTitle) {
      pageTitle.textContent = course.title;
    }


    const courseDescription = document.querySelector('.info__description p');
    if (courseDescription) {
      courseDescription.textContent = `Start your journey in ${course.title}. Hands-on projects, cutting-edge tools, and expert advice from expert instructors.`;
    }

    const courseImage = document.querySelector('.info__img');
    if (courseImage) {
      courseImage.src = course.img;
      courseImage.alt = course.title;
    }

    const instructorImage = document.querySelector('.instructor__img');
    if (instructorImage) {
      instructorImage.src = course.trainerImg;
      instructorImage.alt = 'Instructor Img';
    }

    const priceElement = document.querySelector('.about__price p');
    if (priceElement) {
      priceElement.textContent = `$${course.price}`;
    }

    const starsElement = document.querySelector('.about__stars');
    if (starsElement) {
      starsElement.innerHTML = `
        <span class="stars">${createStars(course.stars)}</span>
        <span class="rating-text">${course.stars}/5 (${
        course.students
      } students)</span>
      `;
    }

    const lessonsElement = document.querySelector('.lessons p');
    if (lessonsElement) {
      lessonsElement.textContent = `${course.lessons} Lessons`;
    }
  } catch (error) {
    alert('Error in lodaing course content');
  }
}

document.addEventListener('DOMContentLoaded', displayCourseDetails);
