/*eslint-env browser*/
var hamburgerButton = document.querySelector('.burger');
var nav = document.querySelector('nav ul');

/*jshint strict: true */
function toggleMenu() {
    "use strict";
    nav.classList.toggle('nav-active');
}

hamburgerButton.addEventListener('click', toggleMenu);


//Popup JS:
