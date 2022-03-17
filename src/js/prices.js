function tabsPrice() {
  const config = {
    tabsContainer: "prices__item--header",
    dataContainer: `prices__tab--all`,
    dataItem: `prices__data`,
    hiddenClass: `prices__data--hidden`,
    activeClass: `prices__data--active-header`,
    tabs: [
      {
        name: `women`,
        tabName: `prices__data--women-header`,
        dataName: `prices__data--women`,
      },
      {
        name: `men`,
        tabName: `prices__data--men-header`,
        dataName: `prices__data--men`,
      },
    ],
  };

  const addClass = (container, selector, className) => {
    const items = container.querySelectorAll(selector);
    items.forEach((element) => {
      element.classList.add(className);
    });
  };
  const removeClass = (container, selector, className) => {
    const items = container.querySelectorAll(selector);
    items.forEach((element) => {
      element.classList.remove(className);
    });
  };
  //Перебираем данные о табах - в искомом удаляем клас hidden
  //В остальных добавляем
  const showField = (dataContainer, fieldName) => {
    config.tabs.forEach((tab) => {
      if (tab.name == fieldName) {
        removeClass(dataContainer, `.${tab.dataName}`, config.hiddenClass);
      } else {
        addClass(dataContainer, `.${tab.dataName}`, config.hiddenClass);
      }
    });
  };
  //Перебираем данные о табах - в искомом добавляем клас hidden
  //В остальных убираем
  const setActiveTab = (tabContainer, fieldName) => {
    config.tabs.forEach((tab) => {
      if (tab.name == fieldName)
        addClass(tabContainer, `.${tab.tabName}`, config.activeClass);
      else removeClass(tabContainer, `.${tab.tabName}`, config.activeClass);
    });
  };

  const selectField = (tabContainer, dataContainer, fieldName) => {
    setActiveTab(tabContainer, fieldName);
    showField(dataContainer, fieldName);
  };
  //Устанавливаем обработчики
  config.tabs.forEach((data) => {
    const tabContainer = document.querySelector(`.${config.tabsContainer}`);
    const dataContainer = document.querySelector(`.${config.dataContainer}`);
    const tab = tabContainer.querySelector(`.${data.tabName}`);

    tab.addEventListener(`click`, () => {
      selectField(tabContainer, dataContainer, data.name);
    });
  });
  //Устанавливаем начальное состояние
  const tabContainer = document.querySelector(`.${config.tabsContainer}`);
  const dataContainer = document.querySelector(`.${config.dataContainer}`);
  selectField(tabContainer, dataContainer, config.tabs[0].name);
}
function selectPrice() {
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

export default function () {
  selectPrice();
  tabsPrice();
}
