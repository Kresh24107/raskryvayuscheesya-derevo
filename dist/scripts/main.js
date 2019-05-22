'use strict';

const list = document.getElementsByClassName('tree')[0];

list.addEventListener('click', visible);
function visible() {
  if (event.target.children[0] !== undefined) {
    event.target.children[0].classList.toggle('visible');
  }
}
