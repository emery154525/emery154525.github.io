$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".nav a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
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
    } // End if
  });

  var onScroll = function () {
    var list = $(".nav li a");
    var windowTop = $(document).scrollTop();
    var selectedIndex = 0;

    for (var i = 0; i < list.length; i ++) {
      var element = list[i];
      var elementTop = $(element.hash).offset().top;
      if (windowTop >= elementTop) {
        selectedIndex = i;
      }
    }
    $(".nav li a").removeClass('active');
    list[selectedIndex].classList.add('active');
  }
  
  $(document).on('scroll', onScroll);
  onScroll();

});
