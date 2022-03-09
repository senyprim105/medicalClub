export default function menu() {
    const NO_JS_CLASS = "main-nav--no-js";
    const NO_JS_MENU_CLASS = "main-nav__menu--no-js";
    const NO_JS_MENU_BLOCK_CLASS = "main-nav__menu-block--no-js";

    const NAV_OPEN_CLASS = "main-nav--open";
    const MENU_OPEN_CLASS = "main-nav__menu--open";
    const MENU_BLOCK_OPEN_CLASS = "main-nav__menu-block--open";
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