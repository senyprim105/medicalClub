export default function () {
    //Висит на соплях - настроить брейкпоинты
    var staff = new Swiper(".staff__slider", {
      // loop:true,

      slidesPerView: "auto",
      spaceBetween: 15,
      slideClass: "staff__item",
      wrapperClass: "staff__slider-wrapper",

      slideActiveClass: "staff__item--active",
      slideNextClass: "staff__item--next",
      slidePrevClass: "staff__item--prev",
      slidesOffsetBefore: 0,

      navigation: {
        nextEl: ".staff__button--next",
        prevEl: ".staff__button--prev",
      },
      breakpoints:
      { 1200:{
        slidesPerView: 2,
        spaceBetween:30,
      }

      }
    });
  }