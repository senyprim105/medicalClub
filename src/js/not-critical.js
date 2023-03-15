!(function () {
  "use strict";
  function e(e) {
    const s = document.getElementById(e);
    if (s)
      return new Selectr(s, {
        searchable: !1,
        renderOption: function (e) {
          return (
            e.text,
            [
              '<div class="filial"><span class="filial__name" >',
              e.dataset.filial,
              '</span> <span class="filial__address">',
              e.dataset.address,
              "</span></div>",
            ].join("")
          );
        },
        renderSelection: function (e) {
          return (
            e.text,
            [
              '<div class="filial filial--selected"><span class="filial__name" >',
              e.dataset.filial,
              '</span> <span class="filial__address">',
              e.dataset.address,
              "</span></div>",
            ].join("")
          );
        },
        defaultSelected: !1,
        placeholder: 'Выберете клинику<span class="red">*</span>',
        customClass: "feedback__filials",
      });
  }
  function s() {
    new Selectr(document.querySelector(".prices__select"), {
      searchable: !1,
      renderOption: function (e) {
        return ['<div class="prices__select-option">', e.text, "</div>"].join(
          ""
        );
      },
      renderSelection: function (e) {
        return [
          '<div class="prices__select--selected">',
          e.text,
          "</div>",
        ].join("");
      },
      customClass: "prices__select",
    }),
      (function () {
        const e = {
            tabsContainer: "prices__item--header",
            dataContainer: "prices__tab--all",
            dataItem: "prices__data",
            hiddenClass: "prices__data--hidden",
            activeClass: "prices__data--active-header",
            tabs: [
              {
                name: "women",
                tabName: "prices__data--women-header",
                dataName: "prices__data--women",
              },
              {
                name: "men",
                tabName: "prices__data--men-header",
                dataName: "prices__data--men",
              },
            ],
          },
          s = (e, s, t) => {
            e.querySelectorAll(s).forEach((e) => {
              e.classList.add(t);
            });
          },
          t = (e, s, t) => {
            e.querySelectorAll(s).forEach((e) => {
              e.classList.remove(t);
            });
          },
          i = (i, a, l) => {
            ((i, a) => {
              e.tabs.forEach((l) => {
                l.name == a
                  ? s(i, `.${l.tabName}`, e.activeClass)
                  : t(i, `.${l.tabName}`, e.activeClass);
              });
            })(i, l),
              ((i, a) => {
                e.tabs.forEach((l) => {
                  l.name == a
                    ? t(i, `.${l.dataName}`, e.hiddenClass)
                    : s(i, `.${l.dataName}`, e.hiddenClass);
                });
              })(a, l);
          };
        e.tabs.forEach((s) => {
          const t = document.querySelector(`.${e.tabsContainer}`),
            a = document.querySelector(`.${e.dataContainer}`);
          t.querySelector(`.${s.tabName}`).addEventListener("click", () => {
            i(t, a, s.name);
          });
        });
        const a = document.querySelector(`.${e.tabsContainer}`),
          l = document.querySelector(`.${e.dataContainer}`);
        i(a, l, e.tabs[0].name);
      })();
  }
  new Swiper(".benefits__slider", {
    slidesPerView: "auto",
    wrapperClass: "benefits__list",
    slideClass: "benefits__item",
    slideActiveClass: "benefits__item--active",
    slideNextClass: "benefits__item--right",
    slidePrevClass: "benefits__item--left",
    spaceBetween: 30,
    autoHeight: !0,
    navigation: {
      nextEl: ".benefits__button--next",
      prevEl: ".benefits__button--prev",
    },
    breakpoints: { 768: { spaceBetween: 20 } },
  }),
    (function () {
      const e = document.createElement("div");
      e.className = "zones__slider-clone";
      const s = document.querySelector(".zones__images");
      s &&
        (e.append(s.cloneNode(!0)),
        e.append(
          document.querySelector(".zones__slider-controls").cloneNode(!0)
        ),
        document.querySelector(".zones__slider").after(e),
        new Swiper(".zones__slider-clone", {
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
        }));
    })(),
    s(),
    (() => {
      const e = "effect__slider-clone",
        s = "effect__list-clone",
        t = "effect__list-item--slide",
        i = document.querySelector(".effect__slider"),
        a = i.cloneNode(!0);
      (a.querySelector(".effect__list").className = s),
        ["effect__list-item--left", "effect__list-item--right"].forEach((e) => {
          const s = a.querySelectorAll(`.${e}`);
          s &&
            s.forEach((s) => {
              s.classList.remove(e), s.classList.add(t);
            });
        }),
        (a.className = e),
        i.after(a),
        new Swiper(`.${e}`, {
          slidesPerView: "auto",
          wrapperClass: s,
          slideClass: t,
          spaceBetween: 15,
          navigation: {
            nextEl: ".effect__slider-next",
            prevEl: ".effect__slider-prev",
          },
          scrollbar: {
            el: ".effect__slider-scrollbar",
            dragClass: "effect__slider-scrollbar-drag",
            hide: !1,
            dragSize: "auto",
          },
        });
    })(),
    new Swiper(".examples__slider", {
      effect: "coverflow",
      initialSlide: 1,
      slidesPerView: "auto",
      loop: !0,
      centeredSlides: !0,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      slideActiveClass: "examples__slider-item--active",
      slideNextClass: "examples__slider-item--next",
      slidePrevClass: "examples__slider-item--prev",
      coverflowEffect: { rotate: 0, stretch: 155, depth: 300, modifier: 1 },
      navigation: {
        nextEl: ".examples__slider-button--next",
        prevEl: ".examples__slider-button--prev",
      },
      pagination: { el: ".examples__slider-pagination", type: "fraction" },
    }),
    (() => {
      const e = "choice__slider-clone",
        s = document.querySelector(".choice__slider"),
        t = s.cloneNode(!0);
      (t.className = e),
        s.after(t),
        new Swiper(`.${e}`, {
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
            dragClass: "choice__slider-scrollbar-drag",
            hide: !1,
            dragSize: "auto",
          },
        });
    })(),
    (function () {
      const e = document.querySelector("#feedback__phone");
      e && Inputmask({ mask: "+7 (999) 999-99-99" }).mask(e);
      const s = document.querySelector("#questions__form-input--phone");
      s && Inputmask({ mask: "+7 (999) 999-99-99" }).mask(s);
    })(),
    new Swiper(".questions__license-slider", {
      effect: "coverflow",
      initialSlide: 1,
      slidesPerView: "auto",
      centeredSlides: !0,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      slideClass: "questions__license-item",
      slideActiveClass: "questions__license-item--active",
      slideNextClass: "questions__license-item--next",
      slidePrevClass: "questions__license-item--prev",
      coverflowEffect: { rotate: 0, stretch: 140, depth: 200, modifier: 1 },
      navigation: {
        nextEl: ".questions__license-button--prev",
        prevEl: ".questions__license-button--next",
      },
      pagination: {
        el: ".questions__license-pagination",
        type: "fraction",
        currentClass: "questions__license-pagination--current",
      },
    }),
    new Swiper(".reviews__slider", {
      slidesPerView: "auto",
      centeredSlides: !0,
      spaceBetween: 50,
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
          centeredSlides: !1,
          spaceBetween: 50,
        },
      },
    }),
    new Swiper(".sale__slider", {
      slidesPerView: "auto",
      slideClass: "sale__slider-item",
      spaceBetween: 30,
      slideActiveClass: "sale__slider-item--active",
      slideNextClass: "sale__slider-item--next",
      slidePrevClass: "sale__slider-item--prev",
      navigation: {
        nextEl: ".sale__slider-button--next",
        prevEl: ".sale__slider-button--prev",
      },
    }),
    new Swiper(".staff__slider", {
      slidesPerView: "auto",
      spaceBetween: 15,
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
      breakpoints: { 1200: { slidesPerView: 2, spaceBetween: 30 } },
    }),
    e("form-filials"),
    e("popup-filials"),
    e("popup-onsale-filials");
})();
