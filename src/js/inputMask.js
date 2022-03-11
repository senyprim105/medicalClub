export default function () {
    const feedbackPhone = document.querySelector("#feedback__phone");
    if (feedbackPhone) {
      Inputmask({ mask: "+7 (999) 999-99-99" }).mask(feedbackPhone);
    }

    const questionPhone = document.querySelector(
      "#questions__form-input--phone"
    );
    if (questionPhone) {
      Inputmask({ mask: "+7 (999) 999-99-99" }).mask(questionPhone);
    }
}