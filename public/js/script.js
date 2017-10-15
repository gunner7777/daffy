function ready() {
  document.querySelector('.mobile-nav__hamburger').addEventListener('click', function() {
    document.querySelector('.nav-main').style.zIndex = 10;
    document.querySelector('.mobile-nav__hamburger').style.display = "none";
    document.querySelector('.mobile-nav__close').style.opacity = 1;
  });

  document.querySelector('.mobile-nav__close').addEventListener('click', function() {
    document.querySelector('.nav-main').style.zIndex = -1;
    document.querySelector('.mobile-nav__hamburger').style.display = "block";
    document.querySelector('.mobile-nav__close').style.opacity = 0;
  });
}


document.addEventListener("DOMContentLoaded", ready);