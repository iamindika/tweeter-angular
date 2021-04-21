$(document).ready(function () {
  $("#tweet-text").on("input", function (e) {
    let charCount = 140 - $(this).val().length;
    let counterNode = $(this).parent().find(".counter");
    $(counterNode).toggleClass("exceeded", charCount < 0);
    $(counterNode).val(charCount);
  });
});