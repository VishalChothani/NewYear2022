'use strict';

///////////////////////////////////////
// Modal window

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.btn--close-modal');
// const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// const openModal = function () {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });

let tabs = document.querySelectorAll('.operations__tab');
let tabContainer = document.querySelector('.operations__tab-container');
let content = document.querySelectorAll('.operations__content');

tabContainer.addEventListener('click', e => {
  let clicked = e.target;

  tabs.forEach(e => {
    e.classList.remove('operations__tab--active');
  });

  content.forEach(e => {
    e.classList.remove('operations__content--active');
  });

  let selectedContent = document.querySelector(
    `.operations__content--${clicked.dataset.tab}`
  );
  clicked.classList.add('operations__tab--active');
  selectedContent.classList.add('operations__content--active');
});
