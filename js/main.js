'use strict';
const searchEL = document.querySelector('.search');
const searchInputEL = searchEL.querySelector('input');

searchEL.addEventListener('click', function () {
  searchInputEL.focus();
});

function focusHandle() {
  if (searchInputEL.focus) {
    searchEL.classList.add('focused');
    searchInputEL.setAttribute('placeholder', '통합검색');
  }
}
searchInputEL.addEventListener('focus', focusHandle);

searchInputEL.addEventListener('blur', function () {
  searchEL.classList.remove('focused');
  searchInputEL.setAttribute('placeholder', ' ');
});

const badgeEL = document.querySelector('header .badges');

window.addEventListener(
  'scroll',
  _.throttle(function () {
    if (window.scrollY > 500) {
      badgeEL.classList.add('active');
    } else badgeEL.classList.remove('active');
  }, 300)
);

const fadeEL = document.querySelectorAll('.visual .fade-in');
fadeEL.forEach(function (fadeEL, index) {
  // gsap.to(요소, 지속시간, 옵션)
  gsap.to(fadeEL, 1, {
    delay: (index + 1) * 0.7, // 0, 0.7, 1.4, 2.1, 2.7
    opacity: 1,
  });
});

new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});
