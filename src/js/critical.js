!(function () {
  "use strict";
  function e(e) {
    let n =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : () => {},
      t =
        arguments.length > 2 && void 0 !== arguments[2]
          ? arguments[2]
          : "modal__button-close",
      o =
        arguments.length > 3 && void 0 !== arguments[3]
          ? arguments[3]
          : "modal--show";
    const c = (e, t, o) => (c) => {
        s(e, t, o),
          console.log("Закрываем окно кнопкой сабмит"),
          n && (n(), console.log("Запускаем дополнительный обработчик", n));
      },
      s = (e, n, t) => (i) => {
        (i.target != e && i.target != n && i.target != t) ||
          (e.classList.remove(o),
          e && n.removeEventListener("click", s),
          n && e.removeEventListener("click", s),
          t && t.removeEventListener("click", c));
      },
      i = document.getElementById(e),
      l = i.querySelector(`.${t}`),
      r = i.querySelector("button[type=submit]");
    if (!i) return null;
    i.classList.contains(o) || i.classList.add(o),
      i.addEventListener("click", s(i, l, r)),
      l && l.addEventListener("click", s(i, l, r)),
      r && r.addEventListener("click", c(i, l, r));
  }
  document.addEventListener("DOMContentLoaded", (n) => {
    function t(e) {
      const n = document.createElement("script");
      n.setAttribute("src", e), (n.async = !1), document.body.appendChild(n);
    }
    const o = () => {
      removeEventListener("scroll", o),
        removeEventListener("keypress", o),
        removeEventListener("click", o),
        t("js/lib.js"),
        t("js/not-critical.js"),
        console.log("exec handler not-critical");
    };
    console.log("Критикал js запучен"),
      (function () {
        const e = document.querySelector(".main-nav"),
          n = document.querySelector(".main-nav__menu"),
          t = document.querySelector(".main-nav__toggle"),
          o = document.querySelector(".main-nav__menu-block");
        n.classList.remove("main-nav__menu--no-js"),
          e.classList.remove("main-nav--no-js"),
          o.classList.remove("main-nav__menu-block--no-js"),
          t &&
            t.addEventListener("click", () => {
              e.classList.toggle("main-nav--open"),
                n.classList.toggle("main-nav__menu--open"),
                o.classList.toggle("main-nav__menu-block--open");
            });
      })(),
      console.log("Обработчик меню установлен"),
      (function () {
        console.log("Устанвливаем обработчики на кнопки");
        const n = function (n) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : () => {};
            return (o) => {
              o && o.preventDefault(), e(n, t);
            };
          },
          t = (t) => n(t, () => e("popup-message-sign-in")),
          o = document.querySelector(".main-nav__contact-button");
        o && o.addEventListener("click", t("popup-sign-in"));
        const c = document.querySelector(".banner__button");
        c &&
          c.addEventListener(
            "click",
            n("popup-sign-in-onsale", () => e("popup-message-sign-in--onsale"))
          );
        const s = document.querySelector(".equipment__button-wrapper");
        s && s.addEventListener("click", t("popup-sign-in"));
        const i = document.querySelector(".examples__button");
        i && i.addEventListener("click", t("popup-sign-in"));
        const l = document.querySelectorAll(".sale-item__button");
        l && l.forEach((e) => e.addEventListener("click", t("popup-sign-in")));
        const r = document.querySelector(".main-nav__filials-link");
        r && r.addEventListener("click", n("popup-filials-list"));
      })(),
      console.log("Обработчик кнопок установлен"),
      addEventListener("click", o),
      addEventListener("scroll", o),
      addEventListener("keypress", o),
      console.log(
        "Выполнение не критического js установлено на click scroll keypress"
      );
  });
})();
