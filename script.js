'use strict'

const open = document.querySelector('.header__open');
const close = document.querySelector('.header__close');
const nav = document.querySelector('nav');
const buttonTop = document.querySelector('.top-btn');
const body = document.querySelector('body');

open.addEventListener('click' , () => {
  nav.classList.add('active');
})

close.addEventListener('click' , () => {
  nav.classList.remove('active');
})

buttonTop.addEventListener('click' , () => {
  window.scrollTo(0,0);
})