var lights = 'on';

function switchLights() {
	if (lights == 'on') {
		lights = 'off';
		$('body').addClass('dark');
		$('#light_switch').addClass('yellow')
		console.log(lights)
	}

	else {
		lights = 'on';
		$('body').removeClass('dark');	
		$('#light_switch').removeClass('yellow')
		console.log(lights)
	}
}

$(document).ready(function () {
	$('#light_switch').click(switchLights);
});