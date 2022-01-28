// import {
//   Swiper,
//   Navigation,
//   Pagination,
//   Scrollbar,
//   EffectCoverflow
// } from 'swiper';

(function () {
  function menu() {
    NO_JS_CLASS = "main-nav--no-js";
    MENU_OPEN_CLASS = "main-nav--open";
    const mainNav = document.querySelector(".main-nav");
    const button = document.querySelector(".main-nav__toggle");
    mainNav.classList.remove(NO_JS_CLASS);
    if (button) {
      button.addEventListener("click", () => {
        mainNav.classList.toggle(MENU_OPEN_CLASS);
      });
    }
  }
  function slider() {
    console.log('create slider');
    // Swiper.use([Navigation, Pagination, Scrollbar, EffectCoverflow]);
    var mySwiper = new Swiper('.examples__slider',
      {
        effect: 'coverflow',
        initialSlide: 2,
        slidesPerView: 1.93,
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        centeredSlidesBounds: true,
        // containerModifierClass: 'examples__slider--',
        coverflowEffect: {
          rotate: 0,
          stretch: 110,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        },
        navigation: {
          nextEl: '.examples__slider-next',
          prevEl: '.examples__slider-prev',
        },
      })
  }

  function initMap() {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    const myMap = new ymaps.Map(
      "map",
      {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [59.938635, 30.323118], // Москва
        zoom: 17,
        controls: [],
      },
      {
        searchControlProvider: "yandex#search",
      }
    );
    const MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    );

    const myPlacemark = new ymaps.Placemark(
      myMap.getCenter(),
      {
        hintContent: "Собственный значок метки",
        balloonContent: "Это красивая метка",
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        iconImageHref: "../img/map-pin@1x.png",
        // Размеры метки.
        iconImageSize: [50, 50],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38],
      }
    );

    const myPlacemarkWithContent = new ymaps.Placemark(
      [55.661574, 37.573856],
      {
        hintContent: "Собственный значок метки с контентом",
        balloonContent: "А эта — новогодняя",
        iconContent: "12",
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#imageWithContent",
        // Своё изображение иконки метки.
        iconImageHref: "../img/map-pin@1x.png",
        // Размеры метки.
        iconImageSize: [20, 20],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-24, -24],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [15, 15],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout,
      }
    );
    myMap.geoObjects.add(myPlacemark).add(myPlacemarkWithContent);
  }

  document.addEventListener('DOMContentLoaded', (event) => {
    console.log('load');
    // menu();
    slider();
    // ymaps.ready(initMap);
  })
})();
