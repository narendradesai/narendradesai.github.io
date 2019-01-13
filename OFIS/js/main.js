$(document).ready(function () {
  /**
   * Reduce height while scrolling
   */
  var scrollTop = 0;
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
    $('.counter').html(scrollTop);

    if (scrollTop >= 100) {
      $('#global-nav').addClass('scrolled-nav');
      $('.top-icons').css("display", "none");
    } else if (scrollTop < 100) {
      $('#global-nav').removeClass('scrolled-nav');
      var x = window.matchMedia("(max-width: 730px)");
      if (x.matches) {
        $('.top-icons').css("display", "none");
      } else {
        $('.top-icons').css("display", "flex");
      }

    }

  });
  /* Banner Navigation  */
  var slideIndex = 1;
  showSlides(slideIndex);


  // Banner slider event
  var touchstartX = 0;
  var touchendX = 0;

  var gesuredZone = document.getElementById('bannerArea');

  gesuredZone.addEventListener('mousedown', function (event) {
    touchstartX = event.screenX;
    event.preventDefault();

  }, false);

  gesuredZone.addEventListener('mouseup', function (event) {
    touchendX = event.screenX;
    handleGesure();
  }, false);

  function handleGesure() {
    var swiped = 'swiped: ';
    if (touchendX < touchstartX) {
      plusSlides(-1);
    }
    if (touchendX > touchstartX) {
      plusSlides(1);
    }
  }

  //   Learn More
  $("#learnMore1").click(function () {
    var elem = $("#learnMore1").text();
    if (elem.trim() == "Learn More") {
      $("#learnMore1").text("Learn Less");
      $("#learnMoretContent1").slideDown();
    } else {
      $("#learnMore1").text("Learn More");
      $("#learnMoretContent1").slideUp();
    }
  });
  $("#learnMore2").click(function () {
    var elem = $("#learnMore2").text();
    if (elem.trim() == "Learn More") {
      $("#learnMore2").text("Learn Less");
      $("#learnMoretContent2").slideDown();
    } else {
      $("#learnMore2").text("Learn More");
      $("#learnMoretContent2").slideUp();
    }
  });

});

/**
 * Responsive Navigation menu
 */
function expandMenu() {
  var x = document.getElementById("global-nav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}


/**
 * Banner Sliding
 */
var slideIndex = 1;
function plusSlides(n) {
  showSlides(slideIndex += n);


}

// Slider
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("banner-slider");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}





