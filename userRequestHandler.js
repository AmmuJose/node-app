var movieInfo = require("./movie.js");
var songInfo = require("./spotify.js");
var getTweets = require("./twitter.js");
var random = require("./random.js");

//call API's depends on user command
exports.userInputHandler = function(userInput1, args, caller){
    switch (userInput1) {
        case "movie-this": movieInfo.callAPI(args, caller);            
            break;

        case "spotify-this-song": songInfo.callAPI(args, caller);
            break;

        case "my-tweets": getTweets.getTweets();
            break;

        case "do-what-it-says": random.readFile();
            break;

        default: console.log("");
            console.log("Error!!! Please Enter:");
            console.log("");
            console.log("my-tweets \t-\t For Tweets");
            console.log("spotify-this-song-\t For Song Info ");
            console.log("movie-this \t-\t For Movie Info ");
            console.log("do-what-it-says -\t For Random Command");
            break;
    }
}
