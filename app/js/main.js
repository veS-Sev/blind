$(function () {
      // для ширины header на position:fixed;
      function getBodyWidth() {
        let width = $('body').prop('clientWidth');
        $('.header').css('width', `${width}px`);
      };
      getBodyWidth();
      window.addEventListener('resize', getBodyWidth);
      // 

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
          // $('body').css('overflow', 'hidden');

        });
      });
      $('.modal__request-close').on('click', function () {
        $('.modal__request').toggle('slow', function () {
          $('.content, .footer').css('filter', '');
          // $('body').css('overflow', '');
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

      function changeNav() {
        if (document.documentElement.clientWidth > 919) {
          $('.header__nav-inner-bottom, .header__nav-messengers').detach().insertBefore('.header__tel');
          $('.header__tel').addClass('long');
        };
      }
      changeNav();

      window.addEventListener('resize', function () {
        if ((document.documentElement.clientWidth < 919) && ($('.header__tel').hasClass('long'))) {
          $('.header__nav-inner-bottom').detach().appendTo('.header__nav-inner-wrap');
          $('.header__nav-messengers').detach().appendTo('.header__nav-inner-top');
          $('.header__tel').removeClass('long');
        } else(changeNav());

      });

      $('.examples__part-media-1').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        gallery: {
          enabled: true
        }
      });

      $('.examples__part-media-2').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        gallery: {
          enabled: true
        }
      });

      $('.examples__part-media-3').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        // если    fixedContentPos: false, то попап всплывает в райне хедера
        fixedContentPos: true,
        gallery: {
          enabled: true
        }
      });


      $('.product__counter-minus').click(function () {
        let $input = $(this).parent().find('input');
        let count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
      });
      $('.product__counter-plus').click(function () {
        let $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
      });

      $('.product__images').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        gallery: {
          enabled: true
        }
      });
      // categories color-radio
      $('.categories__aside-color-radio').on('click', function () {
        $(this).toggleClass('radio-checked');
        if($(this).hasClass('radio-checked')){
          $(this).prop('radio-checked', true);
        }else{
          $(this).prop('radio-checked', false);
        }
        });


        // 


      })