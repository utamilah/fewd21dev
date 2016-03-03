//wait for the DOM elements to load before executing
$(document).ready(function(){
    // Create a function that runs whenever the submit button is clicked
        $("#submit-btn").click(function(e){


        //prevent the submit button from refreshing the page
        e.preventDefault();

        //Create a variable called moodvalue and get the value of the #mood input
        var moodvalue = $("#mood").val();
        $('#mood').val('');

        //Correct for capitalization
        moodvalue = moodvalue.toLowerCase().trim();

        // if the user inputs excited / ecstatic / fantastic change the CSS class to 'excited'
     if(moodvalue == "excited" || moodvalue == "ecstatic" || moodvalue == "fantastic" ){
        $('.moodring > div').attr('class','excited');
     }

        // if the user inputs happy/good/great change the CSS class to 'happy'

    if(moodvalue == "happy" || moodvalue == "good" || moodvalue == "great" ){
        $('.moodring > div').attr('class','happy');
     }

        // if the user inputs bad/angry change the CSS class to 'bad'

    if(moodvalue == "bad" || moodvalue == "angry" ){
        $('.moodring > div').attr('class','bad');
     }


});
    // Listen for user interaction on the submit button.



});