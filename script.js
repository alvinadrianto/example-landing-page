const hamburgerMenu = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('nav');
const container = document.querySelector('.container');
const line = document.querySelectorAll('.line');

hamburgerMenu.addEventListener('click', () => {
  navbar.classList.toggle('opacity-display');
  //   container.classList.toggle('hide');
  line[0].classList.toggle('closeOne');
  line[1].classList.toggle('opacity-none');
  line[2].classList.toggle('closeTwo');
});

function closeNav() {
  navbar.classList.remove('opacity-display');
  line[0].classList.remove('closeOne');
  line[1].classList.remove('opacity-none');
  line[2].classList.remove('closeTwo');
}
