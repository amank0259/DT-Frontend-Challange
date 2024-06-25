const toggleIcon = document.querySelector(".toggle-icon");
const journeyBoard = document.querySelector(".journey-board");
const journeyContent = document.querySelector(".journey-content");
const heading = document.querySelector(".journey-heading-text");
const one = document.querySelector(".one");
const right = document.querySelector(".fa-circle-arrow-right");
const left = document.querySelector(".fa-circle-arrow-left");

toggleIcon.addEventListener("click", () => {
    journeyBoard.classList.toggle("collapsed");
    journeyContent.classList.toggle("collapsed");
    heading.classList.toggle("collapsed");
    one.classList.toggle("collapsed");
    right.classList.toggle("collapsed");
    left.classList.toggle("collapsed");
});