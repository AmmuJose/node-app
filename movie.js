//call API
exports.callAPI = function (movieName, jsName) {
    var rq = require("request");
    var name = (getMovieString(movieName, jsName) == "")? 'Mr.Nobody' : getMovieString(movieName, jsName);    

    function resp(err, rp, body) {
        if (!err && rp.statusCode === 200) {
            var info = JSON.parse(body);
            displayInfo(info);
        }
    }
    rq("http://www.omdbapi.com/?t=" + name + "&y=&plot=short&tomatoes=true&r=json", resp)
};

//create a query string from array
function getMovieString(movieName, jsName) {    
    name = "";
    //assign value to i depends on caller
    var initVal = (jsName == 'random') ? 0 : 3;  
    for (var i = initVal; i < movieName.length; i++) {
        name += movieName[i] + "+";
    }    
    return name;
};

//display movie info
function displayInfo(info) {
    console.log("Title \t: \t" + info.Title);
    console.log("Year \t: \t" + info.Year);
    console.log("Country : \t" + info.Country);
    console.log("Rating \t: \t" + info.Rated);
    console.log("Language: \t" + info.Language);
    console.log("Plot \t: \t" + info.Plot);
    console.log("Actors \t: \t" + info.Actors);
    console.log("Rotten Tomatoes Rating \t: " + info.tomatoRatings);
    console.log("Rotten Tomatoes URL \t: " + info.tomatoURL);
};

