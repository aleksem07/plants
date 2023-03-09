const headerWrapper = document.querySelector('.header');
const headerButton = headerWrapper.querySelector('.button-nav');
const headerMenu = headerWrapper.querySelector('.header__menu');

headerMenu.classList.add('close__nav');

headerButton.addEventListener('click', (evt) => {
  evt.preventDefault();

  headerMenu.classList.toggle('close__nav');
  headerButton.classList.toggle('button-nav--closed');
  headerButton.classList.toggle('button-nav--opened');
});
