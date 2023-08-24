document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener('click', function(e) {
    e.preventDefault();

    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = document.querySelector('.scroll-to').offsetHeight;
    // const topOffset = 0; // если не нужен отступ сверху
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});

const activeClass = 'nav__link--active';

const headerNavLink = document.querySelectorAll('.nav__link');

headerNavLink.forEach(link => {
  link.addEventListener('click', () => {
    headerNavLink.forEach((element)=> {element.classList.remove(activeClass)})
    link.classList.add(activeClass);
  })
});