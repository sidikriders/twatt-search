const express = require('express');
const app = express();
const OAuth = require('oauth');
require('dotenv').config();

var index = require('./routes/index');

app.use('/', function(req, res) {
  let key = req.headers.key
  let keyword = key.split(' ').join('%20')
  // let keyword = keyw[0]
  var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.APP_CONS_KEY,
    // 'BjW6fAJLGmCXX1QjOp3KtQqPW',
    'AuuwqNwJzOPHOpSH6RSBf61sLQ2KL9TOyD9M1Tu6pui5z4tClb',
    '1.0A',
    null,
    'HMAC-SHA1'
  )

  oauth.get(
      `https://api.twitter.com/1.1/search/tweets.json?q=%40${keyword}&src=typd`,
      '320621031-a9AL3hth99QLzz5Ybq7HkQfqqm0Q94pxd8lHoxor', //test user token
      'q9rkQmtdrWk6xrJQBxbNwgEUgNyDkxGSbD69dDcr7Fgjx', //test user secret
      function (e, data){
        if (e) console.error(e);
        res.send(data)
      })
})

app.listen(3000)
