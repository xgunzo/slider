import { slide } from "./slides.js";
const slideOne = document.querySelector(".slide-one");
const slideTwo = document.querySelector(".slide-two");
const slideThree = document.querySelector(".slide-three");

let timeoutHandle = setTimeout(slide, 5000);

export function firstSlide() {

let firstSliderNav = document.querySelector(".slide-one #first-slide-nav");
let secondSliderNav = document.querySelector(".slide-one #second-slide-nav");
let thirdSliderNav = document.querySelector(".slide-one #third-slide-nav");

firstSliderNav.addEventListener("click", function () {

    slideOne.classList.add("active");
    slideTwo.classList.remove("active");
    slideThree.classList.remove("active");
    
})

secondSliderNav.addEventListener("click", function () {


    slideOne.classList.remove("active");
    slideTwo.classList.add("active");
    slideThree.classList.remove("active");
    
})


thirdSliderNav.addEventListener("click", function () {

    slideOne.classList.remove("active");
    slideTwo.classList.remove("active");
    slideThree.classList.add("active");
})

}
clearTimeout(timeoutHandle);

firstSlide();

 export function secondSlide() {
    let firstSliderNav = document.querySelector(".slide-two #first-slide-nav");
    let secondSliderNav = document.querySelector(".slide-two #second-slide-nav");
    let thirdSliderNav = document.querySelector(".slide-two #third-slide-nav");

    firstSliderNav.addEventListener("click", function () {
        slideOne.classList.add("active");
        slideTwo.classList.remove("active");
        slideThree.classList.remove("active");
        
    })
    
    secondSliderNav.addEventListener("click", function () {
        slideOne.classList.remove("active");
        slideTwo.classList.add("active");
        slideThree.classList.remove("active");
        
    })
    
    
    thirdSliderNav.addEventListener("click", function () {
        slideOne.classList.remove("active");
        slideTwo.classList.remove("active");
        slideThree.classList.add("active");
    })
    
    }
    clearTimeout(timeoutHandle);
    secondSlide();

    export function thirdSlide() {
        let firstSliderNav = document.querySelector(".slide-three #first-slide-nav");
        let secondSliderNav = document.querySelector(".slide-three #second-slide-nav");
        let thirdSliderNav = document.querySelector(".slide-three #third-slide-nav");        

        firstSliderNav.addEventListener("click", function () {
            slideOne.classList.add("active");
            slideTwo.classList.remove("active");
            slideThree.classList.remove("active");
        })
        
        secondSliderNav.addEventListener("click", function () {
            slideOne.classList.remove("active");
            slideTwo.classList.add("active");
            slideThree.classList.remove("active");
        })
        
        
        thirdSliderNav.addEventListener("click", function () {
            slideOne.classList.remove("active");
            slideTwo.classList.remove("active");
            slideThree.classList.add("active");
            
        })
        
        }
        clearTimeout(timeoutHandle);
        thirdSlide();