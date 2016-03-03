$(document).ready(function() {

	var comparison;
	$('#submit').click(compare);

    function compare() {
    	var a = Number($('#a').val());
    	var b = Number($('#b').val());

    	if (a < b) {
    		comparison = '<';
    	}

    	else if (a > b) {
    		comparison = '>';
    	}

    	else if (a === b) {
    		comparison = '=';
    	}

    	else {
    		comparison = 'N/A';
    	} 

    	console.log(comparison);

    	$('#comparison').html(comparison);
    }

});
