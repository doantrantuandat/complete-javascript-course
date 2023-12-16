'use strict';

let blueChange;

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  blueChange = function () {
    header.style.color = 'blue';
  };
})();

const body = document.querySelector('body');
body.addEventListener('click', blueChange);
