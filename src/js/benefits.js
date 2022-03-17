export default function () {
    var slider = new Swiper(".benefits__slider", {
      slidesPerView: "auto",

      wrapperClass: "benefits__list",
      slideClass: "benefits__item",
      slideActiveClass: "benefits__item--active",
      slideNextClass: "benefits__item--right",
      slidePrevClass: "benefits__item--left",
      spaceBetween: 30,
      autoHeight: true,
      navigation: {
        nextEl: ".benefits__button--next",
        prevEl: ".benefits__button--prev",
      },
      breakpoints: {
        768: {
          spaceBetween: 20,
        },
      },
    });
  }