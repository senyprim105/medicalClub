export default function (idElement) {
    const element = document.getElementById(idElement);
    if (!element) return ;
    const select = new Selectr(element, {
      searchable: false,
      renderOption: renderer,
      renderSelection: rendererSelected,
      defaultSelected: false,
      placeholder: 'Выберете клинику<span class="red">*</span>',
      customClass: "feedback__filials",
    });
    return select;
    

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