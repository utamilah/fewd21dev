$(document).ready(function(){
	console.log('ready');

	$("#submit-btn").click(function(e){
	e.preventDefault();	

		var citytype = $('#city-type').val();

		$('#city-type').val('');
		
		citytype = citytype.toLowerCase().trim();

		if(citytype == 'sf' || citytype == 'san francisco' || citytype == 'bay area'){
        	$('body').attr('class','sf');
        	console.log('welcome to california');
     	}

     	if(citytype == 'new york city' || citytype == 'new york' || citytype == 'nyc'){
        	$('body').attr('class','nyc');
        	console.log('welcome to new york');
     	}

     	if(citytype == 'austin' || citytype == 'atx'){
        	$('body').attr('class','austin');
        	console.log('welcome to austin');
     	}

     	if(citytype == 'los angeles' || citytype == 'la' || citytype == 'lax'){
        	$('body').attr('class','la');
        	console.log('welcome to LA');
     	}

     	if(citytype == 'sydney' || citytype == 'syd'){
        	$('body').attr('class','sydney');
        	console.log('welcome to sydney');
     	}

	});

});