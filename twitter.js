var Twitter = require('twitter');
var keys = require('./keys.js');

//Twitter authentication
var client = new Twitter({
    consumer_key: keys.twitterKeys.consumer_key,
    consumer_secret: keys.twitterKeys.consumer_secret,
    access_token_key: keys.twitterKeys.access_token_key,
    access_token_secret: keys.twitterKeys.access_token_secret
});

exports.getTweets = function () {
    client.get('statuses/user_timeline', function (error, tweets, response) {
        if (!error) {
            var i = 1;
            for (tweet in tweets) {
                console.log(tweets[tweet].text); //display latest 20 tweets
                i++;
                if(i > 20) break;
            }
        }
    });
}

