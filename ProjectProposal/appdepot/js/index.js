$(document).ready(function(e){
	//Examples of how to assign the Colorbox event to elements			
	$(".inline").colorbox({inline:true});

	$('.appContainer').mixItUp();

	$(".nav").sticky({topSpacing:0});

	$.scrollIt();

	$('.downArrow').addClass('animated bounce');
	
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
})