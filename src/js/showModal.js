export default function (idPopup,submitHandler=()=>{},classCloseButton="modal__button-close",showClass="modal--show"){
    //Обработчик отправки формы

    const submitButtonHandler =(element,button,submit)=>(evt)=>{
        //Закрываем форму
        closeButtonClickHandler(element,button,submit);
        console.log(`Закрываем окно кнопкой сабмит`)
        //Запускаем переданный обработчик
        if (submitHandler) {
            submitHandler();
            console.log(`Запускаем дополнительный обработчик`,submitHandler);
        }
    }
    //Обработчик закрытия окна
    const closeButtonClickHandler = (element,button,submit)=>(evt)=>{
        //Кликнули за пределами формы - нужно закрывать - удаляем обработчики
        if (evt.target==element || evt.target==button || evt.target == submit){
            element.classList.remove(showClass);
            if (element)  button.removeEventListener('click',closeButtonClickHandler);
            if (button)  element.removeEventListener('click',closeButtonClickHandler);
            if (submit)  submit.removeEventListener('click',submitButtonHandler);
        }
    }
    
    const element = document.getElementById(idPopup);
    const button = element.querySelector(`.${classCloseButton}`);
    const submit = element.querySelector(`button[type=submit]`);
    if (!element) return null;
    
    if (!element.classList.contains(showClass)){
        element.classList.add(showClass);
    }

    element.addEventListener('click',closeButtonClickHandler(element,button,submit));
    if (button){
        button.addEventListener('click',closeButtonClickHandler(element,button,submit));
    } 
    if (submit){
        submit.addEventListener('click',submitButtonHandler(element,button,submit));
    } 
}
