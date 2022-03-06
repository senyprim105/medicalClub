// import {
//   Swiper,
//   Navigation,
//   Pagination,
//   Scrollbar,
//   EffectCoverflow
// } from 'swiper';

(function () {
  function inputMask() {
    const feedbackPhone = document.querySelector("#feedback__phone");
    if (feedbackPhone) {
      Inputmask({ mask: "+7 (999) 999-99-99" }).mask(feedbackPhone);
    }

    const questionPhone = document.querySelector(
      "#questions__form-input--phone"
    );
    if (questionPhone) {
      Inputmask({ mask: "+7 (999) 999-99-99" }).mask(questionPhone);
    }
  }
  function menu() {
    NO_JS_CLASS = "main-nav--no-js";
    NO_JS_MENU_CLASS = "main-nav__menu--no-js";
    NO_JS_MENU_BLOCK_CLASS = "main-nav__menu-block--no-js";

    NAV_OPEN_CLASS = "main-nav--open";
    MENU_OPEN_CLASS = "main-nav__menu--open";
    MENU_BLOCK_OPEN_CLASS = "main-nav__menu-block--open";
    const mainNav = document.querySelector(".main-nav");
    const menu = document.querySelector(".main-nav__menu");
    const button = document.querySelector(".main-nav__toggle");
    const menuBlock = document.querySelector(".main-nav__menu-block");
    //Убараем метки no--js
    menu.classList.remove(NO_JS_MENU_CLASS);
    mainNav.classList.remove(NO_JS_CLASS);
    menuBlock.classList.remove(NO_JS_MENU_BLOCK_CLASS);
    //Устанавливаем убираем классы открытия меню

    if (button) {
      button.addEventListener("click", () => {
        mainNav.classList.toggle(NAV_OPEN_CLASS);
        menu.classList.toggle(MENU_OPEN_CLASS);
        menuBlock.classList.toggle(MENU_BLOCK_OPEN_CLASS);
      });
    }
  }
  function select() {
    new Selectr(document.getElementById("filials"), {
      searchable: false,
      renderOption: renderer,
      renderSelection: rendererSelected,
      defaultSelected: false,
      placeholder: 'Выберете клинику<span class="red">*</span>',
      customClass: "feedback__filials",
    });

    function renderer(data) {
      var text = data.text;
      var template = [
        '<div class="filial"><span class="filial__name" >',
        data.dataset.filial,
        '</span> <span class="filial__address">',
        data.dataset.address,
        "</span></div>",
      ];
      return template.join("");
    }

    function rendererSelected(data) {
      var text = data.text;
      var template = [
        '<div class="filial filial--selected"><span class="filial__name" >',
        data.dataset.filial,
        '</span> <span class="filial__address">',
        data.dataset.address,
        "</span></div>",
      ];
      return template.join("");
    }
  }

  function selectInPriceSection() {
    new Selectr(document.querySelector(".prices__select"), {
      searchable: false,
      renderOption: renderer,
      renderSelection: rendererSelected,
      customClass: "prices__select",
    });
    function renderer(data) {
      var text = data.text;
      var template = ['<div class="prices__select-option">', text, "</div>"];
      return template.join("");
    }

    function rendererSelected(data) {
      var text = data.text;
      var template = ['<div class="prices__select--selected">', text, "</div>"];
      return template.join("");
    }
  }

  function sliderBenefits() {
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
  function sliderZones() {
    //Так как вначале сладера нет то либо при загрузке страницы создаем дублирующий слайдер
    //либо ставим обработчик на onResize который при лпределенном размере создаст слайдер а при другом удалит его

    //Метод 2
    //Создаем копию элемента и вставляем ее после оригинала
    const clone = document.createElement("div");
    clone.className="zones__slider-clone";
    clone.append(document.querySelector(".zones__images").cloneNode(true));
    clone.append(document.querySelector(".zones__slider-controls").cloneNode(true));
    document.querySelector(`.zones__slider`).after(clone);
    
    var slider = new Swiper(".zones__slider-clone", {
      slidesPerView: "auto",

      wrapperClass: "zones__images",
      slideClass: "zones__item",

      spaceBetween: 13,
      navigation: {
        nextEl: ".zones__slider-next",
        prevEl: ".zones__slider-prev",
      },
      pagination: {
        el: ".zones__slider-pagination",
        type: "fraction",
        currentClass: "zones__slider-pagination--curent",
        totalClass: "zones__slider-pagination--total",
      },
    });
  }

  function sliderExamples() {
    var examples = new Swiper(".examples__slider", {
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
  function sliderLicenses() {
    // Swiper.use([Navigation, Pagination, Scrollbar, EffectCoverflow]);
    var license = new Swiper(".questions__license-slider", {
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
        // slideShadows: true,
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

  function sliderReviews() {
    //Висит на соплях - настроить брейкпоинты
    var reviews = new Swiper(".reviews__slider", {
      slidesOffsetBefore: 0,
      slidesPerView: 2,
      // slidesPerGroup:2,
      wrapperClass: "reviews__slider-wrapper",
      slideClass: "reviews__slider-item",
      slideActiveClass: "reviews__slider-item--active",
      slideNextClass: "reviews__slider-item--right",
      slidePrevClass: "reviews__slider-item--left",

      navigation: {
        nextEl: ".reviews__slider-button--next",
        prevEl: ".reviews__slider-button--prev",
      },
    });
  }

  function sliderSale() {
    //Висит на соплях - настроить брейкпоинты
    var sales = new Swiper(".sale__slider", {
      // loop:true,
      slidesPerView: 3,
      slideClass: "sale__slider-item",
      // spaceBetween:30,

      slideActiveClass: "sale__slider-item--active",
      slideNextClass: "sale__slider-item--next",
      slidePrevClass: "sale__slider-item--prev",

      navigation: {
        nextEl: ".sale__slider-button--next",
        prevEl: ".sale__slider-button--prev",
      },
    });
  }
  function sliderStaff() {
    //Висит на соплях - настроить брейкпоинты
    var staff = new Swiper(".staff__slider", {
      // loop:true,

      slidesPerView: 2,
      spaceBetween: 30,
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
    });
  }

  //#region
  // function initMap() {
  //   // Создание экземпляра карты и его привязка к контейнеру с
  //   // заданным id ("map").
  //   const myMap = new ymaps.Map(
  //     "map",
  //     {
  //       // При инициализации карты обязательно нужно указать
  //       // её центр и коэффициент масштабирования.
  //       center: [59.938635, 30.323118], // Москва
  //       zoom: 17,
  //       controls: [],
  //     },
  //     {
  //       searchControlProvider: "yandex#search",
  //     }
  //   );
  //   const MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
  //     '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  //   );

  //   const myPlacemark = new ymaps.Placemark(
  //     myMap.getCenter(),
  //     {
  //       hintContent: "Собственный значок метки",
  //       balloonContent: "Это красивая метка",
  //     },
  //     {
  //       // Опции.
  //       // Необходимо указать данный тип макета.
  //       iconLayout: "default#image",
  //       // Своё изображение иконки метки.
  //       iconImageHref: "../img/map-pin@1x.png",
  //       // Размеры метки.
  //       iconImageSize: [50, 50],
  //       // Смещение левого верхнего угла иконки относительно
  //       // её "ножки" (точки привязки).
  //       iconImageOffset: [-5, -38],
  //     }
  //   );

  //   const myPlacemarkWithContent = new ymaps.Placemark(
  //     [55.661574, 37.573856],
  //     {
  //       hintContent: "Собственный значок метки с контентом",
  //       balloonContent: "А эта — новогодняя",
  //       iconContent: "12",
  //     },
  //     {
  //       // Опции.
  //       // Необходимо указать данный тип макета.
  //       iconLayout: "default#imageWithContent",
  //       // Своё изображение иконки метки.
  //       iconImageHref: "../img/map-pin@1x.png",
  //       // Размеры метки.
  //       iconImageSize: [20, 20],
  //       // Смещение левого верхнего угла иконки относительно
  //       // её "ножки" (точки привязки).
  //       iconImageOffset: [-24, -24],
  //       // Смещение слоя с содержимым относительно слоя с картинкой.
  //       iconContentOffset: [15, 15],
  //       // Макет содержимого.
  //       iconContentLayout: MyIconContentLayout,
  //     }
  //   );
  //   myMap.geoObjects.add(myPlacemark).add(myPlacemarkWithContent);
  // }
  //#endregion

  document.addEventListener("DOMContentLoaded", (event) => {
    console.log("load");
    menu();
    sliderBenefits();
    sliderZones();
    // sliderExamples();
    // sliderLicenses();
    // sliderReviews();
    // sliderSale();
    // sliderStaff();
    // inputMask();
    // select();
    selectInPriceSection();
    // ymaps.ready(initMap);
  });
})();
