$(document).ready(function() {
  $(".clickable-flavors").click(function() {
    $("#flavors-content").toggle("slideToggle");
  });
  $(".clickable-origins").click(function() {
    $("#origins-content").toggle("slideToggle");
  });
  $(".clickable-body").click(function() {
    $("#body-content").toggle("slideToggle");
  });

});
