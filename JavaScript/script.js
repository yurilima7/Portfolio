document.addEventListener('DOMContentLoaded', () => {
  // Verifica se a biblioteca de rolagem suave é suportada pelo navegador
  if ('scrollBehavior' in document.documentElement.style) {
    // Se for suportada, não é necessário fazer nada
  } else {
    // Se não for suportada, aplica o polyfill para habilitar a funcionalidade
    smoothscroll.polyfill();
  }

  // Adiciona o evento de clique aos links com a classe "scroll-link"
  const scrollLinks = document.querySelectorAll('.scroll-link');
  
  scrollLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const textElement = document.getElementById('typing-text');
  const subtextElement = document.getElementById('typing-subtext');
  const text = "Olá, sou o Yuri Lima";
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

  const downloadButton = document.getElementById('download-cv');

  downloadButton.addEventListener('click', () => {
    const pdfFilePath = 'Docs/Currículo.pdf';
    const link = document.createElement('a');

    link.href = pdfFilePath;
    link.download = 'Yuri_Curriculo.pdf';
    link.target = '_blank'; // Abrir o link em uma nova aba (opcional)

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

});
