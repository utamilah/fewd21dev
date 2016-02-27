// document.getElementById('grayButton').onclick = switchGray;
// document.getElementById('whiteButton').onclick = switchWhite;

// function switchGray() {
//   document.body.style.backgroundColor = 'gray';
//  document.body.style.color = 'white';
// }

// function switchWhite() {
//   document.body.style.backgroundColor = 'white';
//   document.body.style.color = 'black';
// }

$( document ).ready(function() {
	$('#grayButton').click(switchGray);

		function switchGray () {
			$('body').css("background-color", "gray");
			$('body').css("color", "white");
			console.log("dark");
		}

	$('#whiteButton').click(switchWhite);

		function switchWhite () {
			$('body').css("background-color", "white");
			$('body').css("color", "black");
			console.log("light");
		}
    
    console.log( "ready!" );

    var person = prompt("Please enter your name");

if (person != null) {
    document.getElementById("para").innerHTML =
    "Hello " + person + "! How are you today?";
}


});

