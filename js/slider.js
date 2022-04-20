const sliderContainer = document.querySelector("#slider");
const navigation = document.querySelector(".navigation");
const navigationLi = document.querySelectorAll("navigation .li");
const firstSlide = document.querySelector(".first-slide");
const secondSlide = document.querySelector(".second-slide");
const thirdSlide = document.querySelector(".third-slide");

navigation.addEventListener("click", function() {
    
    navigationLi.forEach(function(li, i) {
        if (li.clicked == true) {
        navigation.children[i].classList.add("selected");
        }
    })

})
