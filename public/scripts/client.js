/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

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

const renderTweets = tweetDataArr => {
  tweetDataArr.forEach(tweetData => {
    const $tweet = createTweetElement(tweetData);
    $('#container').append($tweet);
  });
}

$(document).ready(function () {
  renderTweets(data);
});
