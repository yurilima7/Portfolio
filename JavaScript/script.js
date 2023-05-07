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
});
