$(function () {
    /*FixedHeader*/
    let header = $('#header');
    let scrollPos = $(window).scrollTop();

    $(window).on('scroll load resize', function () {
        let intro = $('#intro');
        intro = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        if (scrollPos > intro) {
            header.addClass('fixed');
        }
        else {
            header.removeClass('fixed');
        }
    });

    /*SmoothScroll*/

    $('[data-scroll]').on('click', function (event) {
       event.preventDefault();
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        $('html, body').animate({
            scrollTop: elementOffset - 70
        }, 700)
        nav.removeClass('show');
    });

 /*NavToggle*/

    let nav = $('#nav');
    let navToggle = $('#navToggle');
    navToggle.on('click', function(event) {
    event.preventDefault;

   nav.toggleClass('show');

  });

 /*Reviews: https://kenwheeler.github.io/slick/*/

 let slider = $('#reviewsSlider');

    slider.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: false,
      arrows: false
    });


});
