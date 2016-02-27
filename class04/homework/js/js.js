$( document ).ready(function() {
    console.log( "ready!" );

    $('.readmore').click(readMore);
    $('.readless').click(readLess);
    $('.learnmore').click(learnMore);

    function readMore (e) {
    e.preventDefault();
      $('#show-this-on-click').slideDown();
      $('.readless').show();
      $('.readmore').toggle();
    }

    function readLess (e) {
    e.preventDefault();
      $('.hide').slideUp();
      $('.readmore').toggle();
    }

      function learnMore (e) {
      e.preventDefault();
      $('#learnMoretext').slideToggle();
      $('.learnmore').hide();
    }

});