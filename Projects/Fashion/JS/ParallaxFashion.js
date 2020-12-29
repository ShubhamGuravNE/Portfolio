$(document).ready(function() {


  // ===========Product img change on hover===========
  $(function(){
    $(".product1").on({
       mouseenter: function(){
        $(".product1-hover-img").attr('src','Images/store-11.jpg');
      },
      mouseleave: function(){
        $(".product1-hover-img").attr('src','Images/store-1.jpg');
      }
    });

    $(".product2").on({
       mouseenter: function(){
        $(".product2-hover-img").attr('src','Images/store-22.jpg');
      },
      mouseleave: function(){
        $(".product2-hover-img").attr('src','Images/store-2.jpg');
      }
    });

    $(".product3").on({
       mouseenter: function(){
        $(".product3-hover-img").attr('src','Images/store-33.jpg');
      },
      mouseleave: function(){
        $(".product3-hover-img").attr('src','Images/store-3.jpg');
      }
    });

    $(".product4").on({
       mouseenter: function(){
        $(".product4-hover-img").attr('src','Images/store-44.jpg');
      },
      mouseleave: function(){
        $(".product4-hover-img").attr('src','Images/store-4.jpg');
      }
    });

    $(".product5").on({
       mouseenter: function(){
        $(".product5-hover-img").attr('src','Images/store-55.jpg');
      },
      mouseleave: function(){
        $(".product5-hover-img").attr('src','Images/store-5.jpg');
      }
    });

    $(".product6").on({
       mouseenter: function(){
        $(".product6-hover-img").attr('src','Images/store-66.jpg');
      },
      mouseleave: function(){
        $(".product6-hover-img").attr('src','Images/store-6.jpg');
      }
    });

    $(".product7").on({
       mouseenter: function(){
        $(".product7-hover-img").attr('src','Images/store-77.jpg');
      },
      mouseleave: function(){
        $(".product7-hover-img").attr('src','Images/store-7.jpg');
      }
    });

    $(".product8").on({
       mouseenter: function(){
        $(".product8-hover-img").attr('src','Images/store-88.jpg');
      },
      mouseleave: function(){
        $(".product8-hover-img").attr('src','Images/store-8.jpg');
      }
    });

    $(".product9").on({
       mouseenter: function(){
        $(".product9-hover-img").attr('src','Images/store-new-11.jpg');
      },
      mouseleave: function(){
        $(".product9-hover-img").attr('src','Images/store-new-1.jpg');
      }
    });

    $(".product10").on({
       mouseenter: function(){
        $(".product10-hover-img").attr('src','Images/store-new-22.jpg');
      },
      mouseleave: function(){
        $(".product10-hover-img").attr('src','Images/store-new-2.jpg');
      }
    });

    $(".product11").on({
       mouseenter: function(){
        $(".product11-hover-img").attr('src','Images/store-99.jpg');
      },
      mouseleave: function(){
        $(".product11-hover-img").attr('src','Images/store-9.jpg');
      }
    });

    $(".product12").on({
       mouseenter: function(){
        $(".product12-hover-img").attr('src','Images/store-1010.jpg');
      },
      mouseleave: function(){
        $(".product12-hover-img").attr('src','Images/store-10.jpg');
      }
    });

  });

  // =========== Owl Carousel ===========
  // var viewportWidth = $(window).width();
  //   if (viewportWidth > 720) {
  //           $(".owl-carousel").removeClass("owl-one");
  //   }
    
  //   $(window).resize(function () {
    
  //       if (viewportWidth > 720) {
  //           $(".owl-carousel").removeClass("owl-one");
  //       }
  //   });

  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      // nav:true,
      autoplay:true,
      dots: true,
      autoplayTimeout:2000,
      autoplaySpeed:1500,
      paginationSpeed : 1000,
      slideSpeed : 1000,
      responsive:{
          300:{
              items:1
          },
          500:{
              items:2
          },
          900:{
              items:3
          },
          1200:{
              items:4
          }

      }

  });


});



