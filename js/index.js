new Swiper('.swiper', {
    navigation: {
      nextEl: '.portfolio__arrow_right',
      prevEl: '.portfolio__arrow_left',
      disabledClass: 'portfolio__arrow_disable',
    },

    breakpoints: {
        // when window width is >= 480px
        480: {
            grid: {
                fill: 'row',
                rows: 2
            }
            },
        768: {
            slidesPerView: 2,
            grid: {
                fill: 'row',
                rows: 2
            }
            }
        }

  });


  /* проверяем подключился ли jquery */
  /*
  $('body').text('jkk,jj');
  */



  /*
  $('.header__contacts-burger').click(function() {
    $('.header__contacts').slideToggle();
  });
  */
  /* или так */
  $('.header__contacts-burger').click(() => {
    $('.header__contacts').slideToggle();
  });


  /*
  $('.present__order-btn').click(() => {
    $('.page__overlay_modal').slideToggle(400); //
  });

  $('.modal__close').click(() => {
    $('.page__overlay_modal').slideToggle(400); //
  });
*/

   /* или так */
   /*
  $('.present__order-btn').click(() => {
    $('.page__overlay_modal').show(400); //
  });

  $('.modal__close').click(() => {
    $('.page__overlay_modal').hide(400); //
  });
  */


     /* или так */

  $('.present__order-btn').click(() => {
  /* съехало окно, исправляем -  .css('display', 'flex') */
    $('.page__overlay_modal').fadeIn(400).css('display', 'flex'); //
  });


  // крестик - закрыли
  $('.modal__close').click(() => {
    $('.page__overlay_modal').fadeOut(400); //
  });
 


  // jquery
// мимо окна - закрыли
  $('.page__overlay').click((event) => {
    if ($(event.target).hasClass('page__overlay')) {
    $('.page__overlay_modal').fadeOut(400);
    }
  });


  // js
  // мимо окна - закрыли
/*
  $('.page__overlay').click((event) => {
    if (event.target.classList.contains('page__overlay')) {
    $('.page__overlay_modal').fadeOut(400);
    }
  });
  */