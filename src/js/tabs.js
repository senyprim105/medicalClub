
const setPriceTabs = function () {
  const config = {
    tabsContainer: "prices__item--header",
    dataContainer: `prices__tab--all`,
    dataItem: `prices__data`,
    hiddenClass: `visually-hidden`,
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

  const showField = (container, fieldName) => {
    const addClass = (container, selector, className) => {
      const items = container.querySelectorsAll(selector);
      items.forEach((element) => {
        element.classList.add(className);
      });
    };
    const removeClass = (container, selector, className) => {
      const items = container.querySelectorsAll(selector);
      items.forEach((element) => {
        element.classList.remove(className);
      });
    };
    config.tabs.forEach((tab) => {
      if (tab.name == fieldName)
        removeClass(container, `.${tab.dataName}`, config.hiddenClass);
      else addClass(container, `.${tab.dataName}`, config.hiddenClass);
    });
  };
  const setActiveTab = (container, fieldName) => {
    config.tabs.forEach((tab) => {
      if (tab.name == fieldName)
        removeClass(container, `.${tab.tabName}`, config.activeClass);
      else addClass(container, `.${tab.tabName}`, config.activeClass);
    });
  };
  const selectField = (fieldName) => {
    setActiveTab(config.tabsContainer, fieldName);
    showField(config.dataContainer, fieldName);
  };

  config.tabs.forEach(data=>{
      const container =document.querySelector(`.${config.tabsContainer}`);
      const tab = container.querySelector(`.${data.tabName}`);
      tab.addEventListener(`click`,()=>{
          selectField(data.name);
      })
  })
};
