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

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //  1번 슬라이드가 가장 먼저 보이기
  loop: true,
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true, //사용자의 페이지 번호 요소를 제어할 수 있음
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  },
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
//gsap.to(요소, 시간, 옵션)
function floatingObejet(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}
floatingObejet('.floating1', 1, 15);
floatingObejet('.floating2', 0.5, 15);
floatingObejet('.floating3', 1.5, 20);

// Scroll Magic
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});
