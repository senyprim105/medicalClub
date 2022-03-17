export default function () {
  //Висит на соплях - настроить брейкпоинты
  var reviews = new Swiper(".reviews__slider", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween:50,
    wrapperClass: "reviews__slider-wrapper",
    slideClass: "reviews__slider-item",
    slideActiveClass: "reviews__slider-item--active",
    slideNextClass: "reviews__slider-item--right",
    slidePrevClass: "reviews__slider-item--left",

    navigation: {
      nextEl: ".reviews__slider-button--next",
      prevEl: ".reviews__slider-button--prev",
    },
    breakpoints: {
      1200: {
        slidesOffsetBefore: 0,
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween:50,
        
      },
    },
  });
}
