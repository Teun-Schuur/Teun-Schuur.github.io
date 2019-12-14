
$(function(){
    var flag = 0;
    $('.menu-icon').on('click', function(e){
      e.preventDefault();
      if(flag == 0 ){
        $('.menu-icon').addClass("active");
        $('.menu').addClass('visible');
        flag = 1;
      }else {
        $('.menu-icon').removeClass("active");
        $('.menu').removeClass('visible');
        flag = 0;
      }
   });
});
