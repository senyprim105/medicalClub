export default function () {
  var slider = new Swiper(".questions__license-slider", {
    effect: "coverflow",
    initialSlide: 1,
    slidesPerView: "auto",
    centeredSlides: true,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    // wrapperClass:"questions__license-wrapper", Убрал свой клас так как не знаю как уменьшить слайдеры
    slideClass: "questions__license-item",
    slideActiveClass: "questions__license-item--active",
    slideNextClass: "questions__license-item--next",
    slidePrevClass: "questions__license-item--prev",
    coverflowEffect: {
      rotate: 0,
      stretch: 140,
      depth: 200,
      modifier: 1,
    },
    navigation: {
      nextEl: ".questions__license-button--prev",
      prevEl: ".questions__license-button--next",
    },
    pagination: {
      el: ".questions__license-pagination",
      type: "fraction",
      currentClass: "questions__license-pagination--current",
    },
  });
}
