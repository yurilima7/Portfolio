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
        if (n > valueBack) {  // Avançar no slideshow
            const firstSlide = arraySlides.shift();  // Remove o primeiro slide
            arraySlides.push(firstSlide);            // Adiciona ao final
        } else if (n < valueBack) {  // Voltar no slideshow
            const lastSlide = arraySlides.pop();     // Remove o último slide
            arraySlides.unshift(lastSlide);          // Adiciona no início
        }

        // Reanexa os slides reorganizados no container
        arraySlides.forEach(slide => {
            slideShow.appendChild(slide);
        });

        // Exibe os primeiros 5 slides reorganizados
        for (let i = 0; i < 5; i++) {
            arraySlides[i].style.display = "flex";
        }
    } else {
        slides[newIndex].style.display = "flex";
    }

    valueBack = n;
}
