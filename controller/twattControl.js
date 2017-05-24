const OAuth = require('oauth');


function searchTwat(req, res, next) {
  let key = req.headers.key
  let keyword = key.split(' ').join('%20')
  // let keyword = keyw[0]
  var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    // process.env.APP_CONS_KEY,
    'Y0DFClhw4wEPLzBwryFjxf302',
    'xGA5VcPcYV1B6tnX1clYgn20E5LYnbNGUzWDdwjsCLaxq74o1h',
    '1.0A',
    null,
    'HMAC-SHA1'
  )

  oauth.get(
      `https://api.twitter.com/1.1/search/tweets.json?q=${keyword}`,
      '320621031-a9AL3hth99QLzz5Ybq7HkQfqqm0Q94pxd8lHoxor', //test user token
      'q9rkQmtdrWk6xrJQBxbNwgEUgNyDkxGSbD69dDcr7Fgjx', //test user secret
      function (e, data){
        if (e) console.error(e);
        let obj = JSON.parse(data).statuses
        let text = []
        obj.forEach( x => {
          text.push({"text": x.text})
        })
        res.send(text)
      })
}

function homeTL(req, res, next) {
  let username = req.headers.username
  var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    // process.env.APP_CONS_KEY,
    'Y0DFClhw4wEPLzBwryFjxf302',
    'xGA5VcPcYV1B6tnX1clYgn20E5LYnbNGUzWDdwjsCLaxq74o1h',
    '1.0A',
    null,
    'HMAC-SHA1'
  )

  oauth.get(
      `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${username}&count=5`,
      '320621031-a9AL3hth99QLzz5Ybq7HkQfqqm0Q94pxd8lHoxor', //test user token
      'q9rkQmtdrWk6xrJQBxbNwgEUgNyDkxGSbD69dDcr7Fgjx', //test user secret
      function (e, data){
        if (e) console.error(e);
        let tl = JSON.parse(data).map( x => {
          return 'Tweet: ' + x.text
        })
        res.send(tl)
      })
}

module.exports = {
  searchTwat,
  homeTL
}
