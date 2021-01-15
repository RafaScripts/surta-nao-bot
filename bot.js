const config = require('./config');
const twit = require('twit')
const Twit = twit(config);

//Setting up a user stream
var stream = Twit.stream('statuses/filter', { track: '@surtanao_bb' });
var stream_tag = Twit.stream('statuses/filter', { track: ['#surtanao', '#surta_nao', '#SurtaNao', '#SurtaNão', '#SurtaNaoTeste', '#surtanão', '#surta_não'] });

var messages = [
    'Se liga na música',
    'Vem com Wander Luiz!!',
    'Ouve aí',
    'Já foi lá curtir??',
    'Essa é Hit!!!',
    'Corre lá:', 
    'Vem q é sucesso'
];

stream.on('tweet', tweetEvent);
stream_tag.on('tweet', (tweet) => tweetEvent(tweet));

function tweetEvent(tweet) {
    const message = messages[Math.floor(Math.random() * messages.length)];
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
        new_tweet = 'Surta não @'+from+' '+message+ ' https://sl.onerpm.com/7032476516?_ga=2.229323420.1417882663.1610680040-814832288.1609726552';
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
