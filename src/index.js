import './style.css';

(() => {
  const images = Array.from(document.querySelectorAll('.image-slides > img'));
  const navigationsCircles = document.querySelectorAll('.circle');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');

  function toggleCurrentImgs(currentImg, currentCircle) {
    currentImg.classList.toggle('visible');
    currentCircle.classList.toggle('selected');
  }

  function showPrevImg() {
    const currentImg = document.querySelector('.visible');
    const currentCircle = document.querySelector('.selected');
    toggleCurrentImgs(currentImg, currentCircle);
    let prevImgIndex = images.indexOf(currentImg) - 1;
    if (prevImgIndex === -1) prevImgIndex = 2;
    images[prevImgIndex].classList.toggle('visible');
    navigationsCircles[prevImgIndex].classList.toggle('selected');
  }

  function showNextImg() {
    const currentImg = document.querySelector('.visible');
    const currentCircle = document.querySelector('.selected');
    toggleCurrentImgs(currentImg, currentCircle);
    let nextImgIndex = images.indexOf(currentImg) + 1;
    if (nextImgIndex === 3) nextImgIndex = 0;
    images[nextImgIndex].classList.toggle('visible');
    navigationsCircles[nextImgIndex].classList.toggle('selected');
  }

  function showSelectedImg(e) {
    const currentImg = document.querySelector('.visible');
    const currentCircle = document.querySelector('.selected');
    toggleCurrentImgs(currentImg, currentCircle);
    images[e.target.dataset.index].classList.toggle('visible');
    navigationsCircles[e.target.dataset.index].classList.toggle('selected');
  }

  leftArrow.addEventListener('click', showPrevImg);
  rightArrow.addEventListener('click', showNextImg);
  navigationsCircles.forEach((circle) =>
    circle.addEventListener('click', (e) => {
      showSelectedImg(e);
    }),
  );

  setInterval(showNextImg, 5000);
})();
