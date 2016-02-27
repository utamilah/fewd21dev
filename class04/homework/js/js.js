$( document ).ready(function() {
    console.log( "ready!" );

    $('.readmore').click(readMore);
    $('.readless').click(readLess);

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

});