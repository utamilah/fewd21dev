//define arrays
var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

//Load the DOM
$(document).ready(function() {
//In case more items are added to the array, this tells it to operate on each item
  for(i=0;i<cities.length;i++) {
    $('#city-type').append('<option value="' + cities[i] + '">' + cities[i] + '</option>');
  }
//change #city-type when one when one of the items below are selected
  $('form').on('change', '#city-type',function(){
    var city = $('#city-type').val();
    //if the user selects NYC from the menu, change the background class to the NYC image
    if(city == 'NYC') {
      $('body').attr('class','nyc');
    }
    //if the user selects SF from the menu, change the background class to the SF image
    else if (city == 'SF') {
      $('body').attr('class','sf');
    }
    //if the user selects LA from the menu, change the background class to the LA image
    else if (city == 'LA') {
      $('body').attr('class','la');
    }
    //if the user selects ATX from the menu, change the background class to the ATX image
    else if (city == 'ATX') {
      $('body').attr('class','austin');
    }
    //if the user selects SYD from the menu, change the background class to the SYD image
    else if (city == 'SYD') {
      $('body').attr('class','sydney');
    }
  });
});