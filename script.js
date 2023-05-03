document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.menu-icon');
  const menuContainer = document.querySelector('.menu');
  const selContainer = document.querySelector('.sel');

  menuIcon.addEventListener('click', () => {
    menuContainer.classList.toggle('show-menu');
    selContainer.classList.toggle('show-menu');
    menu.style.opacity = (menu.style.opacity === '1') ? '0' : '1';
  });

  document.addEventListener('click', (event) => {
    const isClickInsideMenu = menuContainer.contains(event.target) || menuIcon.contains(event.target);
    
    if (!isClickInsideMenu && menuContainer.classList.contains('show-menu')) {
      menuContainer.classList.remove('show-menu');
      selContainer.classList.remove('show-menu');
    }
  });
});
