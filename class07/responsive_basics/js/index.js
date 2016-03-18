/* when burger is clicked change nav display property */
$(document).ready(function(){
    $("header span").click(function(){
        $("body").toggleClass("active");
    });
});