$(function(){

	$("#about").click(function(){
		$('html,body').animate({
			scrollTop: $("#about").offset().top
		}, 'slow', 'swing');
	});

	$("#member").click(function(){
		$('html,body').animate({
			scrollTop: $("#member").offset().top
		}, 'slow', 'swing');
	});

	$("#activity").click(function(){
		$('html,body').animate({
			scrollTop: $("#activity").offset().top
		}, 'slow', 'swing');
	});

	$("#goal").click(function(){
		$('html,body').animate({
			scrollTop: $("#goal").offset().top
		}, 'slow', 'swing');
	});


});