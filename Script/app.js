const navToggle = document.querySelector(".nav__toggle");
const menuMobile = document.querySelector(".menu");
navToggle.addEventListener("click", function () {
  navToggle.classList.toggle("nav__toggle--open");
  menuMobile.classList.toggle("menu--open");
});
const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 110,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    576: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 35,
    },
  },
});
