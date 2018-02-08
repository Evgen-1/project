// start animate text and blocks

$(document).ready(function(){
	$('.tx').addClass('strokeDashZiro');
});

new WOW().init();
$('.menu__item:last-child').click(function(e){
	e.preventDefault();
	$('html, body').animate({scrollTop:$('#about').position().top}, 2500);
});


	// smooth scroll from menu 

	$('.menu__item:first-child').click(function(e){
					e.preventDefault();

	$('html, body').animate({scrollTop:$('.video').position().top}, 2500);
				});

	$('.menu__item:nth-of-type(2n)').click(function(e){
					e.preventDefault();
					
	$('html, body').animate({scrollTop:$('#products').position().top}, 2500);
				});
				