  export default function () {
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