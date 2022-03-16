function select() {
    new Selectr(document.getElementById("filials"), {
      searchable: false,
      renderOption: renderer,
      renderSelection: rendererSelected,
      defaultSelected: false,
      placeholder: 'Выберете клинику<span class="red">*</span>',
      customClass: "feedback__filials",
    });

    function renderer(data) {
      var text = data.text;
      var template = [
        '<div class="filial"><span class="filial__name" >',
        data.dataset.filial,
        '</span> <span class="filial__address">',
        data.dataset.address,
        "</span></div>",
      ];
      return template.join("");
    }

    function rendererSelected(data) {
      var text = data.text;
      var template = [
        '<div class="filial filial--selected"><span class="filial__name" >',
        data.dataset.filial,
        '</span> <span class="filial__address">',
        data.dataset.address,
        "</span></div>",
      ];
      return template.join("");
    }
  }
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