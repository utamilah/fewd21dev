$(document).ready(function(e){
	//Examples of how to assign the Colorbox event to elements			

	$(".inline").colorbox({
		inline: true,
		width: "75%",
		reposition: true
	});

	$.colorbox.close();

	$.scrollIt();

	$('.appContainer').mixItUp();

	$('.downArrow').addClass('animated bounce');

	$('.menu-link').bigSlide({
 		easyClose: true,
 		speed: 100
	 });

	 $('.nav > ul > li > a').click(function(){
	 	console.log('close me when clicked');
	 	$('#menu').css('left','-15.625em');
	 	$('#menu-toggle').css('left','0');
	 });

	 if ($(window).width() < 650) {
            $('.appContainer').mixItUp('destroy', true);
            console.log('destroy mixItUp');
        }
	
});


var waypoints = $('.stats').waypoint({
  handler: function(direction) {
    console.log('reached')

   var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
	$('#number1').animateNumber(
	  {
	    number: 1600000,
	    numberStep: comma_separator_number_step
	  }
	);

	$('#number2').animateNumber(
	  {
	    number: 1500000,
	    numberStep: comma_separator_number_step
	  }
	);

	$('#number3').animateNumber(
	  {
	    number: 400000,
	    numberStep: comma_separator_number_step
	  }
	);

	$('#number4').animateNumber(
	  {
	    number: 340000,
	    numberStep: comma_separator_number_step
	  }
	);

  }
});








