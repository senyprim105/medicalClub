export default function () {
    //Висит на соплях - настроить брейкпоинты
    var sales = new Swiper(".sale__slider", {
      // loop:true,
      slidesPerView: "auto",
      slideClass: "sale__slider-item",
      spaceBetween:30,
      slideActiveClass: "sale__slider-item--active",
      slideNextClass: "sale__slider-item--next",
      slidePrevClass: "sale__slider-item--prev",

      navigation: {
        nextEl: ".sale__slider-button--next",
        prevEl: ".sale__slider-button--prev",
      },
    });
  }