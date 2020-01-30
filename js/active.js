$(document).ready(function($){
	$(".testimonial-carousel").owlCarousel({
		items:1,
		dots:false,
		nav:true,
		navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
		loop: true,
		autoplay: false
	});
});