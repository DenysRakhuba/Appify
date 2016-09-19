$(document).ready(function() {
	new WOW().init();

	// Navbar scrolling
	$(function() {
	    $('a.page-scroll').bind('click', function(event) {
	        var $anchor = $(this);
	        $('html, body').stop().animate({
	            scrollTop: $($anchor.attr('href')).offset().top
	        }, 1500, 'easeInOutExpo');
	        event.preventDefault();
	    });
	});

	// Highlight the top nav as scrolling occurs
	$('body').scrollspy({
	    target: '.navbar-fixed-top'
	})

	// Closes the Responsive Menu on Menu Item Click
	$('.navbar-collapse ul li a').click(function() {
	    $('.navbar-toggle:visible').click();
	});

 	// Slider
	$("#owl-demo").owlCarousel({
	 	autoplay: true,
		autoPlay: 2000, //Set AutoPlay to 3 seconds
		items: 5,
		responsiveClass:true,
		responsive:{
			992:{
				items:5
			},
			700:{
				items:4
			},
			0:{
				items: 2
			},
		},
	 	loop: true,
	});

	// mixitup
	$(function(){
    	$('#Container').mixItUp();
	});

	// hidden navbar
	$(window).scroll(
	    {
	        previousTop: 0
	    },
	    function () {
	    var currentTop = $(window).scrollTop();
	    if (currentTop < this.previousTop) {
	        $(".navbar").show();
	    } else {
	        $(".navbar").hide();
	    }
	    this.previousTop = currentTop;
	});

	// Fancy Box
	$(".various").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});
