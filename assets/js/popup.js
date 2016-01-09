//popup subscribe form

 $(document).ready(function(event){
      function loadPopup(event){
            if($("#popup-overlay").hasClass("popup-hide")){
                $("#popup-overlay").removeClass("popup-hide");
            }else{
                $("#popup-overlay").addClass("popup-show");
            }
      }
       setTimeout(loadPopup, 3000);
          
        $("#close").click(function(e){
            $('#popup-overlay').addClass("popup-hide");
            e.preventDefault();
            console.log("Modal closed.");
        })
    });


$(document).ready(function() {
  var hideTheModal = $.cookie('hideTheModal');
  // если cookie не установлено...
  if(hideTheModal == null){
    // задержка 7 секунд
    setTimeout(function(){
    // вызвать модальное окно
        function loadPopup(event){
            if($("#popup-overlay").hasClass("popup-hide")){
                $("#popup-overlay").removeClass("popup-hide");
            }else{
                $("#popup-overlay").addClass("popup-show");
            }
            console.log("WASUP");
        }
    }, 7000);
    // когда кнопка "Закрыть" нажата
    $('.close-modal').click(function(){
    // добавить cookie
    $.cookie('hideTheModal', 'true', { expires: 30 });
    });
  }
});