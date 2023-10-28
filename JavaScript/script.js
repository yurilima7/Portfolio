document.addEventListener('DOMContentLoaded', () => {
    // menu drawer
    const drawer = document.querySelector('.drawer');
    const menu = document.querySelector('.menu');

    drawer.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && !drawer.contains(event.target)) {
            menu.classList.remove('active');
        }
    });

    const menuLinks = document.querySelectorAll('.menu li a');

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
        menu.classList.remove('active');
        });
    });

    // efeito de digitação
    const textElement = document.getElementById('typing-text');
    const subtextElement = document.getElementById('typing-subtext');
    const text = "Olá, sou Yuri Lima";
    const subtext = "Desenvolvedor Mobile";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100); // Ajuste o tempo de espera entre cada caractere digitado (em milissegundos)
        } else {
          index = 0;
          typeSubtextEffect();
        }
    }

    function typeSubtextEffect() {
        if (index < subtext.length) {
            subtextElement.textContent += subtext.charAt(index);
            index++;
            setTimeout(typeSubtextEffect, 100);
        }
    }
    
    typeEffect();

    // currículo
    const downloadButton = document.getElementById('download-cv');

    downloadButton.addEventListener('click', () => {
        const pdfFilePath = 'assets/docs/Currículo.pdf';
        const link = document.createElement('a');

        link.href = pdfFilePath;
        link.download = 'Curriculo.pdf';
        link.target = '_blank'; // Abrir o link em uma nova aba (opcional)

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
})
