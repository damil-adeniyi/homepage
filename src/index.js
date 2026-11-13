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

// light mode toggle
const modeToggle = document.querySelector('.mode-toggle');
const modeimg = document.querySelector('.mode-img');
const body = document.body;
const heroImg = document.querySelector('.hero-profile');

import moon from './img/moon.png';
import sun from './img/sun.png';
import hero1 from './img/hero.jpg';
import hero2 from './img/hero2.jpg';

modeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');

  if (modeimg.getAttribute('src') === sun) {
        modeimg.src = moon;
    } else {
        modeimg.src = sun;
    }

  if (heroImg.getAttribute('src') === hero2) {
        heroImg.src = hero1;
    } else {
        heroImg.src = hero2;
    }

});