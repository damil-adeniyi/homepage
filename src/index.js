import "./styles.css";

// back to top button
const backToTopBtn = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 700) {
    backToTopBtn.style.display = 'flex';
    backToTopBtn.style.opacity = '0.7';
    backToTopBtn.style.transition = '0.5s';
  } else {
    backToTopBtn.style.display = 'none';
    backToTopBtn.style.opacity = '0';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// chat button
const chatBtn = document.querySelector('.chat-btn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 700) {
    chatBtn.style.display = 'flex';
    chatBtn.style.opacity = '0.7';
    chatBtn.style.transition = '0.5s';
  } else {
    chatBtn.style.display = 'none';
    chatBtn.style.opacity = '0';
  }
});

// chatBtn.addEventListener('click', () => {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth'
//   });
// });

// light mode toggle
const modeToggle = document.querySelector('.mode-toggle');
const modeimg = document.querySelector('.mode-img');
const body = document.body;
const heroImg = document.querySelector('.hero-profile');
modeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');

  if (modeimg.getAttribute('src') === 'img/moon.png') {
        modeimg.src = 'img/sun.png';
    } else {
        modeimg.src = 'img/moon.png';
    }

  if (heroImg.getAttribute('src') === 'img/hero.jpg') {
        heroImg.src = 'img/hero2.jpg';
    } else {
        heroImg.src = 'img/hero.jpg';
    }

});