const slides = document.querySelectorAll(".slider");

let timeoutHandle;

//Funkcja przełączająca między slajdami (w tym przypadku następnymi elementami drzewa) co 5 sekund
function slide() {

    const active = document.querySelector(".active");
    active.classList.remove("active");


    if (active.nextElementSibling) {
        active.nextElementSibling.classList.add("active");


    } else {
        /* Jeżeli nie ma już kolejnych elementów to funkcja wraca 
        do pierwszego elementu nadając mu klasę active */
        slides[0].classList.add("active");
    }
    clearTimeout(timeoutHandle);

    timeoutHandle = setTimeout(slide, 5000);

}

//Ręczne przełączanie slajdów

const slideOne = document.querySelector(".slide-one");
const slideTwo = document.querySelector(".slide-two");
const slideThree = document.querySelector(".slide-three");


//Funkcja manipulująca slajdem pierwszym
function firstSlide() {

    let firstSliderNav = document.querySelector(".slide-one #first-slide-nav");
    let secondSliderNav = document.querySelector(".slide-one #second-slide-nav");
    let thirdSliderNav = document.querySelector(".slide-one #third-slide-nav");

    /*
    EvenListener, który przechwytuje kliknięcie danego punktora.
    Następuje przypisanie i usunięcie klasy active do slajdów w zależności od tego, który z punktorów kliklniemy.
    Następnie setTimeout zostaje zresetowany i ponownie zainicjowany
    */
    firstSliderNav.addEventListener("click", function () {
        slideOne.classList.add("active");
        slideTwo.classList.remove("active");
        slideThree.classList.remove("active");
        clearTimeout(timeoutHandle);
        timeoutHandle = setTimeout(slide, 5000);
    })

    secondSliderNav.addEventListener("click", function () {
        slideOne.classList.remove("active");
        slideTwo.classList.add("active");
        slideThree.classList.remove("active");
        clearTimeout(timeoutHandle);
        timeoutHandle = setTimeout(slide, 5000);
    })


    thirdSliderNav.addEventListener("click", function () {
        slideOne.classList.remove("active");
        slideTwo.classList.remove("active");
        slideThree.classList.add("active");
        clearTimeout(timeoutHandle);
        timeoutHandle = setTimeout(slide, 5000);
    })

}
firstSlide();

//Funkcja manipulująca slajdem drugim
function secondSlide() {

    let firstSliderNav = document.querySelector(".slide-two #first-slide-nav");
    let secondSliderNav = document.querySelector(".slide-two #second-slide-nav");
    let thirdSliderNav = document.querySelector(".slide-two #third-slide-nav");


    firstSliderNav.addEventListener("click", function () {
        slideOne.classList.add("active");
        slideTwo.classList.remove("active");
        slideThree.classList.remove("active");
        clearTimeout(timeoutHandle);
        timeoutHandle = setTimeout(slide, 5000);

    })

    secondSliderNav.addEventListener("click", function () {
        slideOne.classList.remove("active");
        slideTwo.classList.add("active");
        slideThree.classList.remove("active");
        clearTimeout(timeoutHandle);
        timeoutHandle = setTimeout(slide, 5000);
    })


    thirdSliderNav.addEventListener("click", function () {
        slideOne.classList.remove("active");
        slideTwo.classList.remove("active");
        slideThree.classList.add("active");
        clearTimeout(timeoutHandle);
        timeoutHandle = setTimeout(slide, 5000);
    })

}
secondSlide();

//Funkcja manipulująca slajdem trzecim
function thirdSlide() {

    let firstSliderNav = document.querySelector(".slide-three #first-slide-nav");
    let secondSliderNav = document.querySelector(".slide-three #second-slide-nav");
    let thirdSliderNav = document.querySelector(".slide-three #third-slide-nav");

    firstSliderNav.addEventListener("click", function () {
        slideOne.classList.add("active");
        slideTwo.classList.remove("active");
        slideThree.classList.remove("active");
        clearTimeout(timeoutHandle);
        timeoutHandle = setTimeout(slide, 5000);
    })

    secondSliderNav.addEventListener("click", function () {
        slideOne.classList.remove("active");
        slideTwo.classList.add("active");
        slideThree.classList.remove("active");
        clearTimeout(timeoutHandle);
        timeoutHandle = setTimeout(slide, 5000);
    })


    thirdSliderNav.addEventListener("click", function () {
        slideOne.classList.remove("active");
        slideTwo.classList.remove("active");
        slideThree.classList.add("active");
        clearTimeout(timeoutHandle);
        timeoutHandle = setTimeout(slide, 5000);
    })

}
thirdSlide();


//Wykonywanie skryptu po wczytaniu całego dokumentu
window.onload = (function () {
    timeoutHandle = setTimeout(slide, 5000);
})
