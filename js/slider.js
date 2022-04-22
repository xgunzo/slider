const sliderContainer = document.querySelector("#slider");
const navigation = document.querySelector(".navigation");
const navigationLi = document.querySelectorAll("navigation .li");
const firstSlide = document.querySelector(".first-slide");
const secondSlide = document.querySelector(".second-slide");
const thirdSlide = document.querySelector(".third-slide");
const firstSliderNav = document.querySelector("#first-slide-nav");
const secondSliderNav = document.querySelector("#second-slide-nav");
const thirdSliderNav = document.querySelector("#third-slide-nav");

const keyFrames = [
        {opacity: 0.8},
       {transition: 0.8}
]

const timing = {
    duration: 1000
}

firstSliderNav.addEventListener("click", function() {
    firstSlide.style.display = "block";
    secondSlide.style.display = "none";
    thirdSlide.style.display = "none";
    firstSliderNav.className = "selected";
    secondSliderNav.classList.remove("selected");
    thirdSliderNav.classList.remove("selected"); 
    sliderContainer.style.background = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../images/1.jpg")';
    sliderContainer.style.backgroundPositionX = "53%";
    sliderContainer.style.backgroundSize = "cover";
    sliderContainer.style.animation = "fadeIn 3s";
    sliderContainer.animate(keyFrames, timing);
})

secondSliderNav.addEventListener("click", function() {
    firstSlide.style.display = "none";
    secondSlide.style.display = "block";
    thirdSlide.style.display = "none";
    firstSliderNav.classList.remove("selected");
    secondSliderNav.className = "selected";
    thirdSliderNav.classList.remove("selected");
    sliderContainer.style.background = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../images/2.jpg")';
    sliderContainer.style.backgroundPositionX = "53%";
    sliderContainer.style.backgroundSize = "cover";
    sliderContainer.style.animation = "fadeIn 3s";
    sliderContainer.animate(keyFrames, timing);
})


thirdSliderNav.addEventListener("click", function() {
    firstSliderNav.classList.remove("selected");
    secondSliderNav.classList.remove("selected");
    thirdSliderNav.className = "selected";
    firstSlide.style.display = "none";
    secondSlide.style.display = "none";
    thirdSlide.style.display = "block";
    sliderContainer.style.background = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../images/3.jpg")';
    sliderContainer.style.backgroundPositionX = "53%";
    sliderContainer.style.backgroundSize = "cover";
    sliderContainer.style.animation = "fadeIn 3s";
    sliderContainer.animate(keyFrames, timing);
})


