$(document).ready(function () {
  // Bug: timeago.render does not yield current time
  // const currentDate = new Date();
  // const timeAgoNode = $("article.tweet").find("p.time-ago");
  // $(timeAgoNode).attr('datetime', currentDate);
  timeago.render(document.querySelectorAll(".time-ago"));
});