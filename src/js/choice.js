export default () => {
    //Так как в макете слайдер не сразу то делаем клон слайдера
    //и показываем либо оригинал либо клон
    const sourceClassName = "choice__slider";
    const cloneClassName = "choice__slider-clone";
    const sliderSource = document.querySelector(`.${sourceClassName}`);

    const clone = sliderSource.cloneNode(true);
    clone.className = cloneClassName;
    sliderSource.after(clone);

    //инициируем слайдер
    var slider = new Swiper(`.${cloneClassName}`, {
        slidesPerView: "auto",

        wrapperClass: "choice__slider-wrapper",
        slideClass: "choice__slider-item",
        spaceBetween: 15,
        navigation: {
            nextEl: ".choice__slider-next",
            prevEl: ".choice__slider-prev",
        },
        scrollbar: {
            el: ".choice__slider-scrollbar",
            dragClass:"choice__slider-scrollbar-drag",
            hide: false,
            dragSize:"auto",
         }
    });
}

