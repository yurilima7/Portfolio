
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelector('.nav_links');
    const drawer = document.querySelector('.drawer');

    drawer.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
        if (!navLinks.contains(event.target) && !drawer.contains(event.target)) {
            navLinks.classList.remove('active');
        }
    });

    const menuLinks = document.querySelectorAll('.navLinks ul .link');

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    let swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
      
        pagination: {
          el: '.swiper-pagination',
        },
    
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
    
        scrollbar: {
            el: '.swiper-scrollbar',
          },
    
        breakpoints: {
            480: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1440: {
                slidesPerView: 6,
                spaceBetween: 60,
            }
        },
    
        autoplay: {
            delay: 1500,
            disableOnInteraction: true,
        },
    });

    window.addEventListener('resize', () => {
        swiper.update();
    });

    const titleElement = document.getElementById('title');
    const subtitleElement = document.getElementById('subtitle');
    const text = "Olá, sou Yuri Lima";
    const subtitle = "Desenvolvedor Mobile, Front-End e UI/UX Designer";
    let indexText = 0;

    function typeEffect() {
        if (indexText < text.length) {
            titleElement.textContent += text.charAt(indexText);
            indexText++;
            setTimeout(typeEffect, 100);
        } else {
          indexText = 0;
          typeSubtextEffect();
        }
    }

    function typeSubtextEffect() {
        if (indexText < subtitle.length) {
            subtitleElement.textContent += subtitle.charAt(indexText);
            indexText++;
            setTimeout(typeSubtextEffect, 100);
        }
    }

    typeEffect();

    const downloadButton = document.getElementById('download_cv');

    downloadButton.addEventListener('click', () => {
        const pdfFilePath = 'assets/docs/Currículo.pdf';
        const link = document.createElement('a');

        link.href = pdfFilePath;
        link.download = 'Curriculo.pdf';
        link.target = '_blank';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
