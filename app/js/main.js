$(function(){

  var swiper = new Swiper('.portfolio__slider', {
    slidesPerView: 1,
    // centerInsufficientSlides:true,
    // edgeSwipeDetection:true,
    spaceBetween: 100,
    navigation: {
      nextEl: '.portfolio__slider-next',
      prevEl: '.portfolio__slider-prev',
    },
    pagination: {
      el: '.portfolio__slider-pagination',
      clickable: true,
    },
  });

  var swiper = new Swiper('.feedback__slider', {
    slidesPerView: 1,
    // effect: 'fade',
    // spaceBetween: 200,
    // cssMode:true,
    observer:true,
    navigation: {
      nextEl: '.feedback__slider-next',
      prevEl: '.feedback__slider-prev',
    },
    pagination: {
      el: '.feedback__slider-pagination',
      clickable: true,
    },
  });


})