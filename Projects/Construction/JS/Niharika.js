

//MANUAL CODE
// ----====Price Card====----
var slideIndex=1 ;
showSlides(slideIndex);

// Next/previous controls
function pushSlides(n) {
  showSlides(slideIndex += n);
}

// controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  // n=0
  var i;
  var slides = document.getElementsByClassName("mySlides");
 
  var dots = document.getElementsByClassName("page-item");
  if (n > slides.length) {slideIndex = 1;} 
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
	     
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].classList.remove('active');
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
// ----====Price Card End====----

 
// ----====Number CountTo====----
(function ($) {
  $.fn.countTo = function (options) {
    return this.each(function () {
      //-- Arrange
      var FRAME_RATE = 60; // Predefine default frame rate to be 60fps
      var $el = $(this);
      var countFrom = parseInt($el.attr("data-count-from"));
      var countTo = parseInt($el.attr("data-count-to"));
      var countSpeed = $el.attr("data-count-speed"); // Number increment per second

      //-- Action
      var rafId;
      var increment;
      var currentCount = countFrom;
      var countAction = function () {
        // Self looping local function via requestAnimationFrame
        if (currentCount < countTo) {
          // Perform number incremeant
          $el.text(Math.floor(currentCount)); // Update HTML display
          increment = countSpeed / FRAME_RATE; // Calculate increment step
          currentCount += increment; // Increment counter
          rafId = requestAnimationFrame(countAction);
        } else {
          // Terminate animation once it reaches the target count number
          $el.text(countTo); // Set to the final value before everything stops
          //cancelAnimationFrame(rafId);
        }
      };
      rafId = requestAnimationFrame(countAction); // Initiates the looping function
    });
  };
})    (jQuery);

//----====Number CountTo====


// ==========Animation==========
// ----====Other Services====----
$(window).scroll(function() {
  let position = $(this).scrollTop();
    if(position >= 4300) {
      $('.right').addClass('slideInRight');
      $('.left').addClass('slideInLeft');
    }
    else {
      $('.right').removeClass('slideInRight');
      $('.left').removeClass('slideInLeft');
    }
});

// ----====Circular Progressbar====----
$(window).scroll(function() {
  let position = $(this).scrollTop();
    if(position >= 3400) {
      $('.progress').addClass('circle');
    }
    else {
      $('.progress').removeClass('circle');
    }
});

// ----====Number CountTo====----
$(window).scroll(function() {
    let position = $(this).scrollTop();
    if(position >= 1400) {
        $("").countTo();
      
    } else {
      $(".number-counter").countTo();
     
    }
  });
// Animation End


// Image Filter
// By jQuery
$(document).ready(function(){

  $('#item2').click(function(){
    $('.all').hide();
    $('.a').show();
  });
  $('#item3').click(function(){
    $('.all').hide();
    $('.b').show();
  });
  $('#item4').click(function(){
    $('.all').hide();
    $('.c').show();
  });
  $('#item1').click(function(){
    $('.all').show();

  });
});

$('.img-filter').click(function() {
  $(this).addClass('active-item').siblings().removeClass('active-item');
});
// Image Filter
