$(document).ready(function(){
	console.log('ready');


	$('.toggleMenu').on('click', function( event ){
	 	event.preventDefault();
	 	$('nav').toggle();
	});
});