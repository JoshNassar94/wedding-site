/*function to mark selection in nav bar as active*/
$(function() {
  $('.nav li').click(function() {
     $('.nav li').removeClass();
     $(this).addClass('active');
  });
});


//Smooth scrolling
$(document).ready(function(){
  // Add smooth scrolling to all links
  $('a[href*="#"]:not([href="#"])').on('click', function(event) {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
   
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  });
});
