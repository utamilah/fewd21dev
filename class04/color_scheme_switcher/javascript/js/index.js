// On click white button set colors based on ID
document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('redButton').onclick = switchRed;

// function to make colors Gray
function switchGray () {
	// change background color
	document.body.style.backgroundColor = 'gray';
	// change text color
	document.body.style.color = 'white';
}

// function to make colors White
function switchWhite () {
	document.body.style.backgroundColor = 'white';
	document.body.style.color = 'black';
	document.body.style.fontSize = 'larger';
}

// function to make colors Red
function switchRed () {
	document.body.style.backgroundColor = '#CC0000';
	document.body.style.color = 'white';
	document.body.style.fontSize = 'smaller';
}

	if (document.body.backgroundColor = '#CC0000') {
		console.log('Red')
	} 


	else {
		console.log ('notRed')
	};