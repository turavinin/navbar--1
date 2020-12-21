const hamBtn = document.querySelector('.hamburger');
const hdrText = document.querySelector('.header__text');

hamBtn.addEventListener('click', () => {
  hdrText.classList.toggle('change');
});
