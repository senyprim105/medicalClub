export default () => {
    //Так как в макете слайдер не сразу то делаем клон слайдера
    //и показываем либо оригинал либо клон
    const sourceClassName = "effect__slider";
    const sourceItemClassName = ['effect__list-item--left', 'effect__list-item--right'];
    const cloneClassName = "effect__slider-clone";
    const cloneWrapperClassName = "effect__list-clone";
    const cloneItemClassName = "effect__list-item--slide";
    const sliderSource = document.querySelector(`.${sourceClassName}`);

    const clone = sliderSource.cloneNode(true);
    //Чтобы при инициации слайдера не цеплялся первоначальный элемент добавляем новый класс
    clone.querySelector(`.effect__list`).className = cloneWrapperClassName;
    //Так как в слайдере нет левых и правых элементов меняем их классы на другие
    sourceItemClassName.forEach(className => {
        const items = clone.querySelectorAll(`.${className}`);
        if (!items) return;
        items.forEach(element => {
            element.classList.remove(className);
            element.classList.add(cloneItemClassName);
        });
    });

    clone.className = cloneClassName;
    sliderSource.after(clone);

    //инициируем слайдер
    var slider = new Swiper(`.${cloneClassName}`, {
        slidesPerView: "auto",

        wrapperClass: cloneWrapperClassName,
        slideClass: cloneItemClassName,
        spaceBetween: 15,
        navigation: {
            nextEl: ".effect__slider-next",
            prevEl: ".effect__slider-prev",
        },

        scrollbar: {
            el: ".effect__slider-scrollbar",
            dragClass:"effect__slider-scrollbar-drag",
            hide: false,
            dragSize:"auto",
         }
    });


}

