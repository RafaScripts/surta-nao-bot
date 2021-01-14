const config = require('./config');
const twit = require('twit')
const Twit = twit(config);

//Setting up a user stream
var stream = Twit.stream('statuses/filter', { track: '@surtanao_bb' });

stream.on('tweet', tweetEvent);

function tweetEvent(tweet) {
    // console.log(tweet)
    var reply_to = tweet.in_reply_to_screen_name;
    var text = tweet.text;
    var from = tweet.user.screen_name;
    var nameID = tweet.id_str;
    // params just to see what is going on with the tweets
    var params = { reply_to, text, from, nameID };
    console.log(params);

    let new_tweet = "It's me!!";
    if (from !== 'surtanao_bb') {
        new_tweet = 'Surta não @'+from+'!!! Ouça agora a nova música de Wander Luiz: https://bit.ly/SurtaNao';
    }

    var tweet = {
        status: new_tweet,
        in_reply_to_status_id: nameID
    }

    Twit.post('statuses/update', tweet, (err) => {
        if (err) {
            console.log("Something went wrong!", err);
        } else {
            console.log("It worked!");
        }
    });
}
