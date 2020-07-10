$(document).ready(function(){

  /* Анимация меню */
  $(window).on('scroll', function() {
    if($(window).scrollTop()){
      $('.header__menu').addClass('black');
    }
    else {
      $('.header__menu').removeClass('black');
    }
  });
  
  /* Скрипт для кнопки */
  $('.menu-btn').click( function() {
    console.log(this);
    $(this).toggleClass("active");
    if($('nav').css('display') =='none'){
      $('nav').slideDown();
    }else{
      $('nav').slideToggle();
    }

    /* Закрывает мобилльное меню при клике на раздел */
    $('.header__nav-link').click(function(){
      $('nav').slideUp();
    })
  });


  /* Swiper слайдер секция skills */
  let swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: 'auto',
    slideToClickedSlide: true,
     autoplay: {
       delay: 3000,
     },
   
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });  
});




  

