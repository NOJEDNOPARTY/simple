window.onscroll    = function () {
  var scrolledPage = window.pageYOffset || document.documentElement.scrollTop;
  var topLine      = document.querySelector('.top-line');
  var header       = document.querySelector('header');

  if (scrolledPage > 0) {
    header.classList.add('scrolled');
    topLine.classList.add('line-scrolled');
  } else {
    header.classList.remove('scrolled');
    topLine.classList.remove('line-scrolled');
  }
}