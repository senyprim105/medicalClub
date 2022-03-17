export default function () {
    const sliderContainer = `examples__slider`
    var examples = new Swiper(`.${sliderContainer}`, {
      effect: "coverflow",
      initialSlide: 1,
      slidesPerView: "auto",
      loop: true,
      centeredSlides: true,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      slideActiveClass: "examples__slider-item--active",
      slideNextClass: "examples__slider-item--next",
      slidePrevClass: "examples__slider-item--prev",
      coverflowEffect: {
        rotate: 0,
        stretch: 155,
        depth: 300,
        modifier: 1,
      },
      navigation: {
        nextEl: ".examples__slider-button--next",
        prevEl: ".examples__slider-button--prev",
      },
      pagination: {
        el: ".examples__slider-pagination",
        type: "fraction",
      },
    });
  }