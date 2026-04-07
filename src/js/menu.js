const openBtn = document.querySelector('.js-open-menu');
const closeBtn = document.querySelector('.js-close-menu');
const menu = document.querySelector('.js-menu-container');

openBtn.addEventListener('click', () => {
  menu.classList.add('is-open');
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', closeMenu);

function closeMenu() {
  menu.classList.remove('is-open');
  document.body.style.overflow = '';
}

// Клік поза меню
menu.addEventListener('click', e => {
  if (e.target === menu) {
    closeMenu();
  }
});

// ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeMenu();
  }
});
document.addEventListener('click', e => {
  const isClickInsideMenu = menu.contains(e.target);
  const isClickOnButton = openBtn.contains(e.target);

  if (
    !isClickInsideMenu &&
    !isClickOnButton &&
    menu.classList.contains('is-open')
  ) {
    closeMenu();
  }
});
const mobileLinks = document.querySelectorAll('.mobile-nav-list a');
const mobileBtn = document.querySelector('.mobile-btn');

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

mobileBtn.addEventListener('click', () => {
  closeMenu();
});
