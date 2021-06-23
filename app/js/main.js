$(function () {

  $('.header__nav-burger').on('click', function () {
    $('.header__nav').toggle('slow', function () {
          $('section, footer').css('filter', 'blur(3px)');
        });
  });

  $('.header__nav-close').on('click', function () {
    $('.header__nav').toggle('slow', function () {
      $('section, footer').css('filter', '');
    
    });
  });

  $('.top__banner-btn, .cycle__item-btn, .examples__request-btn').on('click', function () {
    $('.modal__request').toggle('slow', function () {
      $('.content, .footer').css('filter', 'blur(3px)');
      $('body').css('overflow', 'hidden');
      
    });
  });
  $('.modal__request-close').on('click', function () {
    $('.modal__request').toggle('slow', function () {
      $('.content, .footer').css('filter', '');
      $('body').css('overflow', '');
    });
  });

  var swiper = new Swiper('.portfolio__slider', {
    slidesPerView: 1,
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
    effect: 'fade',
    observer: true,
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
