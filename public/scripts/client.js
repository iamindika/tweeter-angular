/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//Bug: Hardcoded time passed in datetime attribute till timeago bug is fixed. See time-passed.js
const createTweetElement = tweetData => {
  const { name, avatars, handle } = tweetData.user;
  const { text } = tweetData.content;
  const createdAt  = timeago.format(tweetData.created_at);

  const $tweet = $(`
    <article class="tweet">
    <header>
        <div class="avatar">
          <img src=${avatars} alt="Avatar for ${name}" /> 
          <p>${name}</p>
        </div>
        <p class="handle">${handle}</p>
    </header>
    <p class="tweet-text">${text}</p>
    <footer>
      <p class="time-ago">${createdAt}</p>
      <div class="icons">
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </div>
    </footer>
  </article>
  `);

  return $tweet;
};

const renderTweets = tweetDataArr => {
  let tweetsContainer = $('#tweets').html('');
  tweetDataArr.forEach(tweetData => {
    const $tweet = createTweetElement(tweetData);
    tweetsContainer.prepend($tweet);
  });
}

$(document).ready(function () {

  const loadTweets = () => {
    $.ajax('/tweets', {
      dataType: "json",
      success: renderTweets
    });
  }

  loadTweets();

  const form = $("#new-tweet").children();

  form.submit(function (e) {
    e.preventDefault();

    const postedTweet = $('#tweet-text').val(); 
    const newTweetLength = postedTweet.length;

    if (!postedTweet.trim()) {
      alert("Error: No empty Tweets or blank messages!");
    } else if (newTweetLength > 140) {
      alert("Error: Tweet cannot exceed 140 chars!");
    } else {
      $.ajax('/tweets', {
        method: 'POST',
        data: $(this).serialize()
      })
      .then(() => {
        $('#tweet-text').val('');
        loadTweets();
      })
    }
  });
});
