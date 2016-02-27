//Implement the red light using jQuery. Don't forget to add the script tags.
$( document ).ready(function() {
    console.log( "ready!" );

    function clearLights () {
    	
    }

    //red
    $('#stopButton').click(stopLight);

    function stopLight () {
    	clearLights ();
    	$('#stopLight').css("background-color","red");
    	console.log('STOP!');
    } 

    //yellow
    $('#slowButton').click(slowLight);

    function slowLight () {
    	clearLights ();
    	$('#slowLight').css("background-color","yellow");
    	console.log('SLOW!');
    }

    //green
    $('#goButton').click(goLight);

    function goLight () {
    	clearLights ();
    	$('#goLight').css("background-color","green");
    	console.log('GO!');
    }

  	function clearLights (){
      	$('.bulb').css("background-color","black")

  	}

});