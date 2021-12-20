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
