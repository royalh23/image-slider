import './style.css';

(() => {
  const images = Array.from(document.querySelectorAll('.image-slides > img'));

  function showNextImg() {
    images.forEach((img) => {
      if (img.classList.contains('visible')) {
        img.classList.toggle('visible');
        let nextImgIndex = images.indexOf(img) + 1;
        if (nextImgIndex === 3) nextImgIndex = 0;
        images[nextImgIndex].classList.toggle('visible');
      }
    });
  }

  function showPrevImg() {
    images.forEach((img) => {
      if (img.classList.contains('visible')) {
        img.classList.toggle('visible');
        let prevImgIndex = images.indexOf(img) - 1;
        if (prevImgIndex === -1) prevImgIndex = 2;
        images[prevImgIndex].classList.toggle('visible');
      }
    });
  }
})();