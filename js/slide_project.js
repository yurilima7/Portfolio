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
    } else if (screenWidth >= 1024) {
        slidesToShow = 4;
    } else if (screenWidth >= 768) {
        slidesToShow = 3;
    } else if (screenWidth >= 480) {
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

// Pega a modal
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.getElementsByClassName('close')[0];

// Pega todas as imagens com a classe 'project_image'
const images = document.getElementsByClassName('project_image');

// Adiciona um evento de clique a cada imagem
for (let i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        modal.style.display = "flex"; // Exibe a modal
        modalImg.src = this.src; // Define a imagem da modal como a imagem clicada
    }
}

// Quando o usuário clica no botão de fechar, fecha a modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clica fora da imagem, também fecha a modal
modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
