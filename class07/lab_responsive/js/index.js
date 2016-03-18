$( document ).ready(function() {
    console.log( "ready!" );
    $('header span').click(function(){
    	$('.navigation').slideToggle("active");
    });
});