let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// let SlideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (SlideIndex > slides.length) {SlideIndex = 1}
//   slides[SlideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
// const slider = document.querySelector('.slider');
// const leftArrow = document.querySelector('.left')
// const rightArrow = document.querySelector('.right')
// var sectionIndex = 0;
// leftArrow.addEventListener('click', function() {
//     sectionIndex = (sectionIndex > 0 ) ? sectionIndex - 1: 2;
//     slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
// }); 
// rightArrow.addEventListener('click', function() {
//     sectionIndex = (sectionIndex < 2 ) ? sectionIndex + 1: 0;
//     slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
// });
