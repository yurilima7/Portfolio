let slideIndex = 1;
let originalBack = false;

showSlides(slideIndex);

window.addEventListener('resize', () => {
    showSlides(slideIndex);
});

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let index;

    let slides = document.getElementsByClassName("card_project");
    let dots = document.getElementsByClassName("dot");

    const slideShow = document.querySelector(".slide_show");
    const arraySlides = Array.from(slideShow.getElementsByClassName("card_project"));

    let totalSlides = slides.length;
    let isWideScreen = window.innerWidth >= 768;

    if (n > totalSlides) { slideIndex = 1; }
    if (n < 1) { slideIndex = totalSlides; } 

    for (index = 0; index < totalSlides; index++) {
        slides[index].style.display = "none";
    }

    for (index = 0; index < dots.length; index++) {
        dots[index].className = dots[index].className.replace(" active", "");
    }

    let newIndex = slideIndex - 1;
    dots[newIndex].className += " active";

    if (isWideScreen) {
        if (slideIndex === totalSlides || originalBack) {
            let reorderedSlides = arraySlides.slice();
            
            [reorderedSlides[0], reorderedSlides[reorderedSlides.length - 1]] = [reorderedSlides[reorderedSlides.length - 1], reorderedSlides[0]];

            reorderedSlides.forEach(slide => {
                slideShow.appendChild(slide);
            });

            originalBack = !originalBack;
        }

        slides[newIndex].style.display = "flex";
        slides[(newIndex + 1) % totalSlides].style.display = "flex";
    } else {
        slides[newIndex].style.display = "flex";
    }
}
