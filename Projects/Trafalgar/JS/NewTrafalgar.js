$(document).ready(function(){
      $('.single-item').slick({
      	dots: true,
      	arrows: true,
        infinite: true,
  		autoplay: true,
    	// slidesToShow: 1,
    	slidesToScroll: 1,
    	lazyLoad: 'ondemand'
    	// fade: true,
  		// cssEase: 'linear'
      });
    });