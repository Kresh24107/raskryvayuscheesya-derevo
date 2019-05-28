'use strict';

const list = document.querySelector('.tree');

list.addEventListener('click', showToggle);

function showToggle() {
  console.dir(event.target);
  if (event.target.tagName !== 'LI') {
    return;
  }
  const elem = event.target.firstElementChild;
  if (elem) {
    elem.classList.toggle('visible');
  }
}
