const hamBtn = document.querySelector('.hamburger');
const hdrText = document.querySelector('.header__text');
const header = document.querySelector('.header');

hamBtn.addEventListener('click', () => {
  hdrText.classList.toggle('change');
  header.classList.toggle('change');
});
