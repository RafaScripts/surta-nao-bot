const config = require('./config');
const twit = require('twit')
const Twit = twit(config);

function searchTweets(params){

    Twit.get('search/tweets', params, (err, data, response) => {
        let tweets = data.statuses;
        if(!err) {
            for(let dat of tweets){
                let retweetId = dat.id_str;
                console.log(retweetId);
            }
        }else{
            console.log(err);
        }
    })
}

console.log('Aqui!')
searchTweets({q: '#javascript'})