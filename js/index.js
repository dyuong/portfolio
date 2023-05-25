$(document).ready(function() {
    $(".down").on("click", function() {
      var target = $(".travelbuddy").offset().top;
      var offset = target - (target * 0.1);
      $("html, body").animate({
        scrollTop: offset
      }, 500);
    });
  });
       

