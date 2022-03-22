import initSelectFilials from "./select-filials";
import menu from "./menu";
import effect from "./effect";
import examples from "./examples";
import choice from "./choice";
import questions from "./questions";
import inputMask from "./inputMask";
import reviews from "./reviews";
import prices from "./prices";
import sale from "./sale";
import staff from "./staff";
import benefits from "./benefits";
import zones from "./zones";
import showModal from "./showModal";



(function () {
  

  
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
    const showSignInModal=(idPopup,classCloseButton,showClass)=>(evt)=>{
      evt.preventDefault();
      showModal(idPopup);
      console.log('Показать модальное окно');
    }
    console.log("load");
    menu();
    benefits();
    zones();
    prices();
    effect();
    examples();
    choice();
    inputMask();
    questions();
    reviews();
    sale();
    staff();
    const formSelect=initSelectFilials("form-filials");
    const popupSelect=initSelectFilials("popup-filials");
    const popupOnSaleSelect=initSelectFilials("popup-onsale-filials");

    const headerButton= document.querySelector(`.main-nav__contact-button`);
    if (headerButton) headerButton.addEventListener('click',showSignInModal("popup-sign-in"));
    
    const equipmentButton = document.querySelector(`.equipment__button-wrapper`);
    if (equipmentButton) equipmentButton.addEventListener('click',showSignInModal("popup-sign-in"));
    
    const examplesButton = document.querySelector(`.examples__button`);
    if (examplesButton) examplesButton.addEventListener('click',showSignInModal("popup-sign-in"));


    const saleButton= document.querySelector(`.banner__button`);
    if (saleButton) saleButton.addEventListener('click',showSignInModal("popup-sign-in-onsale"));
    
  });
})();
