$(document).ready(function() {
    $("#skip").on("click", function() {
      var target = $(".prototype").offset().top;
      var offset = target - (target * 0.005);
      $("html, body").animate({
        scrollTop: offset
      }, 100);
    });
  });

