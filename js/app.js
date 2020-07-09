$(document).ready(function(){

  $(window).on('scroll', function() {
    if($(window).scrollTop()){
      $('.header__menu').addClass('black');
    }
    else {
      $('.header__menu').removeClass('black');
    }


  


  });
  
  
  $('.menu-btn').click( function() {
    console.log(this);
    $(this).toggleClass("active");
    if($('nav').css('display') =='none'){
      $('nav').slideDown();
    }else{
      $('nav').slideToggle();
    }
  });

});




  

