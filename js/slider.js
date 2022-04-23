const sliderContainer = document.querySelector(".slider");
const firstSlide = document.querySelector(".slide-one");
const secondSlide = document.querySelector(".slide-two");
const thirdSlide = document.querySelector(".slide-three");
const firstSliderNav = document.querySelector("#first-slide-nav");
const secondSliderNav = document.querySelector("#second-slide-nav");
const thirdSliderNav = document.querySelector("#third-slide-nav");

function clicked() {

firstSliderNav.addEventListener("click", function () {
    firstSlide.classList.add("active");
    secondSlide.classList.remove("active");
    thirdSlide.classList.remove("active");
})

secondSliderNav.addEventListener("click", function () {
    console.log("drugi");
    firstSlide.classList.remove("active");
    secondSlide.classList.add("active");
    thirdSlide.classList.remove("active");
})


thirdSliderNav.addEventListener("click", function () {
    console.log("trzeci");
    firstSlide.classList.remove("active");
    secondSlide.classList.remove("active");
    thirdSlide.classList.add("active");
})

}
