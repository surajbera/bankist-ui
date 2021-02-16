'use strict';

/******** Modal Window ********/
const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  e.stopPropagation();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/******** Working with the DOM API ********/
const header = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = 'We use cookies for improved funtionality and analytics. <button class="btn btn--close-cookie">Got It!</button>'
header.append(message);

document.querySelector('.btn--close-cookie').addEventListener('click', function () {
  message.remove();
})

/******** Adding styles using JS ********/
message.style.backgroundColor = '#000';
message.style.width = '80%';
message.style.left = '50%';
message.style.transform = 'translate(-50%)';
message.style.borderTopLeftRadius = '10px';
message.style.borderTopRightRadius = '10px';
message.style.fontSize = '20px';

message.style.height = Number.parseInt(getComputedStyle(message).height) + 40 + 'px';

/******** Implementing Smooth Scrolling ********/

const buttonScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

buttonScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' })
})
