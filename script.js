'use strict';

// Modal window
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
  /* commented because the page scrolls up on fixed positioning to body */
  // body.classList.add('modal-active');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  // body.classList.remove('modal-active');
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

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

const header = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved funtionality and analytics';
message.innerHTML = 'We use cookies for improved funtionality and analytics. <button class="btn btn--close-cookie">Got It!</button>'
// header.prepend(message);
// header.prepend(message.cloneNode(true));
header.append(message);

// header.before(message.cloneNode(true));
// header.after(message.cloneNode(true));

document.querySelector('.btn--close-cookie').addEventListener('click', function() {
  message.remove();
  // message.parentElement.removeChild(message);
})

/******** Adding styles using JS ********/

/* adding styles */
message.style.backgroundColor = '#000';
message.style.width = '80%';
message.style.left = '50%';
message.style.transform = 'translate(-50%)';
message.style.borderTopLeftRadius = '10px';
message.style.borderTopRightRadius = '10px';
message.style.fontSize = '20px';

/* getting styles */
/* by this method, you can only get the styles which are set by JS */
// console.log(message.style.color); 
// console.log(message.style.backgroundColor);

// console.log('getComputedStyle(message).color:', getComputedStyle(message).color);
// console.log('getComputedStyle(message).height:', getComputedStyle(message).height);

message.style.height = Number.parseInt(getComputedStyle(message).height) + 40 + 'px';

/* setting the root css propertie's */
// document.documentElement.style.setProperty('--color-primary', 'bisque');

/* Attributes */
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// logo.alt = 'Beautifull minimalistic logo';

/* Non Standard */
// console.log('logo.designer', logo.designer);
// console.log('logo.getAttribute(\'designer\')', logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');

/* one returns absolute url and one returns relative url */
// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.twitter-link');
// console.log(link.href);
// console.log(link.getAttribute('href'));

/* data attribute */
// console.log(logo.dataset.versionNumber);
// logo.dataset.versionNumber = '4.0';
// console.log(logo.dataset.versionNumber);

/* Classes */
// logo.classList.add('c', 'j');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c');
// logo.classList.contains('c');

/* Don't Use */
// logo.className = 'custom-class';