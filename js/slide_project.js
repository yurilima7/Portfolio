let slideIndex = 1;
let valueBack = 0;

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

    let slides = document.getElementsByClassName("print_project");
    let dots = document.getElementsByClassName("dot");

    const slideShow = document.querySelector(".slide_show");
    const arraySlides = Array.from(slideShow.getElementsByClassName("print_project"));

    let totalSlides = slides.length;
    let screenWidth = window.innerWidth;
    let isWideScreen = screenWidth >= 480;
    let slidesToShow;

    if (screenWidth >= 1440) {
        slidesToShow = 5;
    } 
    else if (screenWidth >= 1024 && screenWidth < 1440) {
        slidesToShow = 4;
    } else if (screenWidth >= 768 && screenWidth < 1024) {
        slidesToShow = 3;
    } else if (screenWidth >= 480 && screenWidth < 768) {
        slidesToShow = 2;
    } else {
        slidesToShow = 1;
    }

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
        if (n > valueBack) {
            const firstSlide = arraySlides.shift();
            arraySlides.push(firstSlide);
        } else if (n < valueBack) {
            const lastSlide = arraySlides.pop();
            arraySlides.unshift(lastSlide);
        }

        arraySlides.forEach(slide => {
            slideShow.appendChild(slide);
        });

        for (let i = 0; i < slidesToShow; i++) {
            arraySlides[i].style.display = "flex";
        }
    } else {
        slides[newIndex].style.display = "flex";
    }

    valueBack = n;
}
