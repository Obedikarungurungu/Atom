const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left')
const rightArrow = document.querySelector('.right')
var sectionIndex = 0;
leftArrow.addEventListener('click', function() {
    sectionIndex = (sectionIndex > 0 ) ? sectionIndex - 1: 2;
    slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
}); 
rightArrow.addEventListener('click', function() {
    sectionIndex = (sectionIndex < 2 ) ? sectionIndex + 1: 0;
    slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
}); 