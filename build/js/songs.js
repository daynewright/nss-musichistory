var buildDOM = require('./buildDOM');


var songs = [];

// Load JSON data on load
loadSongs = function (url) {
    return $.getJSON(url)
        .then(function (JSONsongs) {
          songs = songs.concat(JSONsongs);
          return songs;
        })
        .then(function (JSONsongs) {
          buildDOM(JSONsongs);
        });
};

loadSongs('json/songs1.json');

//methods on Music {}
getAllSongs = function(){
  return songs;
};

addAnotherSong = function(name, artist, album){
  songs.push({ "artist" : artist,
                "song"   : name,
                "album"  : album
              });

  buildDOM(songs);

  $('input[name="song-name"]').val('');
  $('input[name="artist"]').val('');
  $('input[name="album"]').val('');
};

module.exports = {loadSongs, getAllSongs, addAnotherSong};
