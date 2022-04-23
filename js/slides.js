const slides = document.querySelectorAll(".slider");


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

    setTimeout(slide, 5000);

}

//Wykonywanie skryptu po wczytaniu całego dokumentu
window.onload = setTimeout(slide, 5000);
