export default function() {
    //Так как вначале сладера нет то либо при загрузке страницы создаем дублирующий слайдер
    //либо ставим обработчик на onResize который при лпределенном размере создаст слайдер а при другом удалит его

    //Метод 2
    //Создаем копию элемента и вставляем ее после оригинала
    const clone = document.createElement("div");
    clone.className = "zones__slider-clone";
    const addElement = document.querySelector(".zones__images");
    if (!addElement) return;
    clone.append(addElement.cloneNode(true));
    clone.append(
      document.querySelector(".zones__slider-controls").cloneNode(true)
    );
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