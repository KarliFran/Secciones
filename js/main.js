
jQuery(document).ready(function($) {

	"use strict";

	
	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);



	}; 
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	
	

    var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
		    center: false,
		    items: 4,
		    loop: true,
		    stagePadding: 0,
		    margin: 100,
		    smartSpeed: 1000,
		    autoplay: false,
		    nav: true,
            navText: ["<span class='fas fa-arrow-left'><span/>", "<span class='fas fa-arrow-right'><span/>"],
		    dots: false,
		    responsive:{
	        600:{
	        	margin: 56,
	          items: 2
	        },
	        1000:{
	        	margin: 10,
	        	stagePadding: 10,
                items: 4
	        }
		    }
			});
			$('.custom-next').click(function(e) {
				e.preventDefault();
				$('.nonloop-block-13').trigger('next.owl.carousel');
			})
			$('.custom-prev').click(function(e) {
				e.preventDefault();
				$('.nonloop-block-13').trigger('prev.owl.carousel');
			})

			
		}

	

	
		$('.slide-one-item').owlCarousel({
	     loop: true,
        margin: 100,
        items: 4,
        dots: false,
        nav: true,
        navText: ["<span class='fas fa-arrow-left'><span/>", "<span class='fas fa-arrow-right'><span/>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: false,
        responsive: {

            0: {
                items: 1,
            },

            480: {
                items: 2,
            },

            768: {
                items: 3,
            },

            992: {
                items: 4,
            }
        }
    });

	  if ( $('.owl-all').length > 0 ) {
			$('.owl-all').owlCarousel({
		    center: false,
		    items: 1,
		    loop: false,
			stagePadding: 0,
		    margin: 10,
		    autoplay: false,
		    nav: true,
		    dots: false,
		    touchDrag: true,
  			mouseDrag: true,
  			smartSpeed: 1000,
			
		    responsive:{
	        768:{
	        	margin: 10,
	        	nav: false,
	        	responsiveRefreshRate: 10,
	          items: 1
	        },
	        992:{
	        	margin: 30,
	        	stagePadding: 0,
	        	nav: false,
	        	responsiveRefreshRate: 10,
	        	touchDrag: false,
  			    mouseDrag: false,
	            items: 4
	        },
	        1200:{
	        	margin: 10,
	        	stagePadding: 0,
	        	nav: false,
	        	responsiveRefreshRate: 10,
	        	touchDrag: false,
  			    mouseDrag: false,
	            items: 4
	        }
		    }
			});
		}
		
	};
	siteCarousel();

$(document).ready(function(){ 
  $('.fa-arrow-left').css("display", "none");
   $('.fa-arrow-right').on('click',function(){
      $('.fa-arrow-left').toggle();

   });
});
	
	})

	
  

  
  


  
	