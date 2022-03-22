const initSelect = function(){
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