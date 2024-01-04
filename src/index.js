import './style.css';

(() => {
  const images = Array.from(document.querySelectorAll('.image-slides > img'));
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');

  function showPrevImg() {
    const currentImg = document.querySelector('.visible');
    currentImg.classList.toggle('visible');
    let prevImgIndex = images.indexOf(currentImg) - 1;
    if (prevImgIndex === -1) prevImgIndex = 2;
    images[prevImgIndex].classList.toggle('visible');
  }

  function showNextImg() {
    const currentImg = document.querySelector('.visible');
    currentImg.classList.toggle('visible');
    let nextImgIndex = images.indexOf(currentImg) + 1;
    if (nextImgIndex === 3) nextImgIndex = 0;
    images[nextImgIndex].classList.toggle('visible');
  }

  leftArrow.addEventListener('click', showPrevImg);
  rightArrow.addEventListener('click', showNextImg);
})();
