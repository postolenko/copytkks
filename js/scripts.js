var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


$(window).load(function() {

  if($(".scroll_box").length > 0) {
    $(".scroll_box").mCustomScrollbar();
  }

});

$(window).resize(function() {



});

$(document).scroll(function() {



});

$(document).ready(function() {

  if($("input[type = 'tel']").length > 0) {
    var im = new Inputmask("+7 - 9 9 9 - 9 9 9 - 9 9 - 9 9");
    im.mask($("input[type = 'tel']"));
  }

  if( $(".slider").length > 0 ) {
    $(".slider").not(".slick-initialized").slick({
        dots: true,
        arrows: true,
        // autoplay: true,
        autoplaySpeed: 4000,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        // fade: true,
        // centerPadding: '-120px',
        // centerMode: true,
        appendArrows: $(".slider_arrows"),
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="img/slick_left.svg"></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="img/slick_right.svg"></button>'
    });
  }

  $(".dr").each(function() {
    drContent = $(this).find(".dr_content");
    if($(this).hasClass("active")) {      
      drContent.slideDown(300);
    } else {
      drContent.slideUp(300);
    }
  });

  $(".dr_title").on("click", function(e) {
    e.preventDefault();
    parent = $(this).closest(".dr");
    sl = parent.find(".dr_content");
    if(sl.is(":hidden")) {
      parent.addClass("active");
      sl.slideDown(300);
    } else {
      parent.removeClass("active");
      sl.slideUp(300);
    }
  });

  // ---------------

// var rev = $('.rev_slider');
// rev.on('init', function(event, slick, currentSlide) {
//   var
//   cur = $(slick.$slides[slick.currentSlide]),
//   next = cur.next(),
//   prev = cur.prev();
//   prev.addClass('slick-sprev');
//   next.addClass('slick-snext');
//   cur.removeClass('slick-snext').removeClass('slick-sprev');
//   slick.$prev = prev;
//   slick.$next = next;
// }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
//   console.log('beforeChange');
//   var
//   cur = $(slick.$slides[nextSlide]);
//   console.log(slick.$prev, slick.$next);
//   slick.$prev.removeClass('slick-sprev');
//   slick.$next.removeClass('slick-snext');
//   next = cur.next(),
//   prev = cur.prev();
//   prev.prev();
//   prev.next();
//   prev.addClass('slick-sprev');
//   next.addClass('slick-snext');
//   slick.$prev = prev;
//   slick.$next = next;
//   cur.removeClass('slick-next').removeClass('slick-sprev');
// });

// rev.slick({
//   speed: 1000,
//   arrows: true,
//   dots: false,
//   focusOnSelect: true,
//   prevArrow: '<button> prev</button>',
//   nextArrow: '<button> next</button>',
//   infinite: true,
//   centerMode: true,
//   slidesPerRow: 1,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   centerPadding: '0',
//   swipe: true,
//   customPaging: function(slider, i) {
//     return '';
//   },
//   /*infinite: false,*/
// });

  Carousel.init($("#carousel"));
  $("#carousel").init();
  // ---------------
  var myElement = document.getElementById('carousel');
  var mc = new Hammer(myElement);
  mc.on("panleft panright tap press", function(ev) {
      if(ev.type == "panleft") {
        $(".video_slider .poster-prev-btn").trigger("click");
      }
      if(ev.type == "panright") {
        $(".video_slider .poster-next-btn").trigger("click");
      }
  });
  // ---------------
  $(".respmenubtn").on("click", function(e) {
    e.preventDefault();
    parent = $(this).closest(".dropdown_menu_wrapp");
    if($(this).hasClass("active")) {
      parent.removeClass("active");
      $(this).removeClass("active");
    } else {
      parent.addClass("active");
      $(this).addClass("active");
    }
  });

  $(this).keydown(function(eventObject){
    if (eventObject.which == 27) {
        $(".respmenubtn").removeClass("active");
        $(".dropdown_menu_wrapp").removeClass("active");
    }
  });

  $(document).mouseup(function(e) {
    hide_element = $(".dropdown_menu_wrapp");
    if (!hide_element.is(e.target)
        && hide_element.has(e.target).length === 0) {
        hide_element.removeClass("active");
        $(".respmenubtn").removeClass("active");
      }
  });

  // setInterval(function() {
  //   var date1 = new Date('2011-01-22');
  //   var date2 = new Date();
  //   console.log ('diff in secods :' + ( date2.getTime() - date1.getTime() ) / 1000);
  //   console.log ('</br>diff in minutes :' + ( date2.getTime() - date1.getTime() ) / 60000);
  //   console.log ('</br>diff in hours :' + ( date2.getTime() - date1.getTime() ) / 3600000);
  //   console.log ("_______");
  // }, 1000);
  
});