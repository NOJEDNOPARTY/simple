var menuTrigger = document.getElementById("menuTrigger");
var navigation  = document.querySelector(".navigation");
var header      = document.querySelector("header");
var menuIsOpened;

menuTrigger.addEventListener('click', function () {
  if (menuIsOpened) {
    header.classList.remove('h-active');
    navigation.classList.remove('menu-active');
  }else {
    header.classList.add('h-active');
    navigation.classList.add('menu-active');
  }

  menuIsOpened = !menuIsOpened;
});

navigation.addEventListener("click", function(e) {
  if (e.target.href) {
    header.classList.remove('h-active');
    navigation.classList.remove('menu-active');

    menuIsOpened = false;
  }
});

