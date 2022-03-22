export default function (idPopup,classCloseButton="modal__button-close",showClass="modal--show"){
    //Обработчик закрытия окна
    const closeButtonClickHandler = (element,button)=>(evt)=>{
        element.classList.remove(showClass);
        button.removeEventListener('click',closeButtonClickHandler);
    }
    //Проверяем сто нажат был именно внешний элемент
    //Можно если нет контейнера на все окно использовать window
    const modalClickHandler = (element)=>(evt)=>{
        if (evt.target==element){
            element.classList.remove(showClass);
            element.removeEventListener('click',modalClickHandler);
        }
    }

    const element = document.getElementById(idPopup);
    if (!element) return null;
    if (!element.classList.contains(showClass)){
        element.classList.add(showClass);
    }
    const button = element.querySelector(`.${classCloseButton}`);
    if (button){
        element.addEventListener('click',modalClickHandler(element));
        button.addEventListener('click',closeButtonClickHandler(element,button));
    } 
}
