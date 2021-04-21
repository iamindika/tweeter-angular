/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
};

const createTweetElement = tweetData => {
  const { name, avatars, handle } = tweetData.user;
  const { text } = tweetData.content;
  const { created_at: createdAt } = tweetData.created_at;

  const $tweet = `
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
      <p class="time-ago" datetime=${createdAt}></p>
      <div class="icons">
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </div>
    </footer>
  </article>
  `;

  return $tweet;
};

const $tweet = createTweetElement(tweetData);

$(document).ready(function () {
  $('#container').append($tweet);
});
