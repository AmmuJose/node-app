exports.callAPI = function (songName, caller) {
    var spotify = require('spotify');
    var name = (getSongNameString(songName, caller) == "") ? 'Oops!... I Did It Again' : getSongNameString(songName, caller);

    spotify.search({ type: 'track', query: name }, function (err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        }
        var item = data.tracks.items[0];
        console.log("Artist(s) :\t" + item.artists[0].name)
        console.log("Song \t: \t" + item.name)
        console.log("Album \t:\t" + item.album.name)
        console.log("Preview Link :\t" + item.preview_url)
    });
};

function getSongNameString(songName, caller) {
    name = "";
    var initVal = (caller == 'random') ? 0 : 3;
    for (var i = initVal; i < songName.length; i++) {
        name += songName[i] + " ";
    }
    return name;
};


