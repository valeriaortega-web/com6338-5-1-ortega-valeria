const hamburgerBtn = document.querySelector('.hamburger-btn');
const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerBtn.addEventListener('click', function() {
  hamburgerMenu.classList.toggle('show-menu');

  if (hamburgerMenu.classList.contains('show-menu')) {
    hamburgerBtn.setAttribute('aria-expanded', 'true');
  } else {
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  }
});

document.addEventListener('click', function(event) {
  if (
    !hamburgerMenu.contains(event.target) &&
    !hamburgerBtn.contains(event.target)
  ) {
    hamburgerMenu.classList.remove('show-menu');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  }
});

document.addEventListener('keydown', function(event) {
  if (
    event.key === 'Escape' &&
    hamburgerMenu.classList.contains('show-menu')
  ) {
    hamburgerMenu.classList.remove('show-menu');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    hamburgerBtn.focus();
  }
});