var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
var settings, videoDescSliderTempl, videoRespSliderTempl;
function getThumbnailsSliderParams() {
  $(".thumbnails").not(".slick-initialized").slick({
    mobileFirst: true,
    dots: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 7000,
    speed: 1200,
    prevArrow: '<button class="slick-prev thumb_arrow thumb_arrow_left" aria-label="Previous" type="button"><img src="img/slick_thumb_left.svg"></button>',
    nextArrow: '<button class="slick-next thumb_arrow thumb_arrow_right" aria-label="Next" type="button"><img src="img/slick_thumb_right.svg"></button>',
    responsive: [
        {
          breakpoint: 0,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 901,
          settings: "unslick"
        }
      ]
  });
}

function getVideoSlider() {
  if(bodyWidth > 767) {
    if($("#videoSlider #videoRespSl").length > 0) {
      $("#videoRespSl").remove();
    }
    $("#videoSlider").html(videoDescSliderTempl);
    Carousel.init($("#carousel"));
    $("#carousel").init();
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
  } else {
    if($("#videoSlider #videoDescSl").length > 0) {
      $("#videoDescSl").remove();
    }
    $("#videoSlider").html(videoRespSliderTempl);
    $(".resp_video_slider").not(".slick-initialized").slick({
      dots: false,
      arrows: true,
      autoplay: false,
      autoplaySpeed: 7000,
      speed: 1200,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      prevArrow: '<button class="slick-prev thumb_arrow thumb_arrow_left" aria-label="Previous" type="button"><img src="img/slick_thumb_left.svg"></button>',
      nextArrow: '<button class="slick-next thumb_arrow thumb_arrow_right" aria-label="Next" type="button"><img src="img/slick_thumb_right.svg"></button>',
    });
  }
}

$(window).load(function() {
  if($(".scroll_box").length > 0) {
    $(".scroll_box").mCustomScrollbar();
  }
  if($(".scroll_x").length > 0) {
    $(".scroll_x").mCustomScrollbar({
      axis:"x"
    });
  }
});

$(window).resize(function() {
  bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
  getThumbnailsSliderParams();
  getVideoSlider();
});

$(document).scroll(function() {
});

$(document).ready(function() {
  bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
  getThumbnailsSliderParams();
  videoDescSliderTempl = $("#videoDescSl").html();
  videoRespSliderTempl = $("#videoRespSl").html();
  $("#videoDescSl").remove();
  $("#videoRespSl").remove();
  getVideoSlider();

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

  // ----------

  if($("#counter").length > 0) {

    var year = $("#counter").attr("data-startyear");
    var month = $("#counter").attr("data-startmonth");
    var day = $("#counter").attr("data-startday");
    var hours = $("#counter").attr("data-starthours");
    var minutes = $("#counter").attr("data-startminutes");
    var seconds = $("#counter").attr("data-startseconds");

    const creationDateObj = {
      year: year,
      month: month,
      day: day,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };

    const creationDate = new Date(
      creationDateObj.year,
      creationDateObj.month,
      creationDateObj.day,
      creationDateObj.hours,
      creationDateObj.minutes,
      creationDateObj.seconds
    );

    setInterval(() => {

      const now = new Date();
      const diffInMS = now - creationDate;
      const diffAsDate = new Date(diffInMS);

      const [
        years,
        months,
        days,
        hours,
        minutes,
        seconds
      ] = diffAsDate
          .toISOString()
          .split('T')
          .map(timePart => 
            timePart
              .split(/-|:|\./)
              .map(str => +str)
          )
          .flat();
       var y = years - 1970;
       var m = months - 1;
       var d = days - 1;
      $("#year").text(y);
      $("#month").text(m);
      $("#day").text(d);
      $("#hour").text(hours);
      $("#minutes").text(minutes);
      $("#second").text(seconds);
    }, 1000);

  }

// -----------

  $(".respmenubtn_2").click(function(e) {
    e.preventDefault();
    if( $("#resp_nav").is(":hidden") ) {
        $("#resp_nav").fadeIn(300);
        $(this).addClass("active");
    } else {
        $("#resp_nav").fadeOut(300);
        $(this).removeClass("active");
    }
  });
  $(".close_nav").click(function(e) {
    e.preventDefault();
    $("#resp_nav").fadeOut(300);
    $(".respmenubtn_2").removeClass("active");
  });
  $(this).keydown(function(eventObject){
      if (eventObject.which == 27 &&
          $("#resp_nav").is(":visible") &&
          bodyWidth <= 767) {
              $("#resp_nav").fadeOut(300);
              $(".respmenubtn_2").removeClass("active");
      }
  });

// -----------

  $(".resp_link_tab").on("click", function(e) {
    e.preventDefault();
    tab = $(this).attr("href");
    $(".resp_tab").removeClass("active");
    $(".res_nav_tabs").addClass("hidden");
    $(tab).addClass("active");
  });

  $(".resp_tab_header").on("click", function(e) {
    e.preventDefault();
    $(".resp_tab").removeClass("active");
    $(".res_nav_tabs").removeClass("hidden");
  });

// ------------

  $(".testimonial_slider").not(".slick-initialized").slick({
    dots: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 7000,
    speed: 1200,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<button class="slick-prev thumb_arrow thumb_arrow_left" aria-label="Previous" type="button"><img src="img/slick_thumb_left.svg"></button>',
    nextArrow: '<button class="slick-next thumb_arrow thumb_arrow_right" aria-label="Next" type="button"><img src="img/slick_thumb_right.svg"></button>',
    responsive: [
        {
          breakpoint: 1350,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: true,
          }
        },
        {
          breakpoint: 1050,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });

  $(".dr_2_ttile").on("click", function(e) {
    e.preventDefault();
    parent = $(this).closest(".dr_2_wrapp");
    dr = parent.find(".dr_2");
    if($(this).hasClass("active")) {
      dr.slideUp(300);
      $(this).removeClass("active");
    } else {
      dr.slideDown(300);
      $(this).addClass("active");
    }

  });

});