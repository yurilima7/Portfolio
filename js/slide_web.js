let slideIndexWeb = 1;
let originalBackWeb = false;

showSlidesWeb(slideIndexWeb);

window.addEventListener('resize', () => {
    showSlidesWeb(slideIndexWeb);
});

function plusSlidesWeb(n) {
    showSlidesWeb(slideIndexWeb += n);
}

function currentSlideWeb(n) {
    showSlidesWeb(slideIndexWeb = n);
}

function showSlidesWeb(n) {
    let index;

    let slidesWeb = document.getElementsByClassName("card_web_project");
    let dots = document.getElementsByClassName("dot_web");

    const slideShowWeb = document.querySelector(".slide_show_web");
    const arraySlidesWeb = Array.from(slideShowWeb.getElementsByClassName("card_web_project"));

    let totalSlides = slidesWeb.length;
    let isWideScreen = window.innerWidth >= 768;

    if (n > totalSlides) { slideIndexWeb = 1; }
    if (n < 1) { slideIndexWeb = totalSlides; } 

    for (index = 0; index < totalSlides; index++) {
        slidesWeb[index].style.display = "none";
    }

    for (index = 0; index < dots.length; index++) {
        dots[index].className = dots[index].className.replace(" active_web", "");
    }

    let newIndex = slideIndexWeb - 1;
    dots[newIndex].className += " active_web";

    if (isWideScreen) {
        if (slideIndexWeb === totalSlides || originalBackWeb) {
            let reorderedSlides = arraySlidesWeb.slice();
            
            [reorderedSlides[0], reorderedSlides[reorderedSlides.length - 1]] = [reorderedSlides[reorderedSlides.length - 1], reorderedSlides[0]];

            reorderedSlides.forEach(slide => {
                slideShowWeb.appendChild(slide);
            });

            originalBackWeb = !originalBackWeb;
        }
        
        slidesWeb[newIndex].style.display = "flex";
        slidesWeb[(newIndex + 1) % totalSlides].style.display = "flex";
    } else {
        slidesWeb[newIndex].style.display = "flex";
    }
}
