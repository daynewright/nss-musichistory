var Music = (function(music){

    var songs = [];

    // Load JSON data on load
    music.loadSongs = function (url) {
        return $.getJSON(url)
            .then(function (JSONsongs) {
              songs = songs.concat(JSONsongs);
              return songs;
            })
            .then(function (JSONsongs) {
              music.addSongsToDOM(JSONsongs);
            });
    };

    music.loadSongs('json/songs1.json');

    //methods on Music {}
    music.getAllSongs = function(){
      return songs;
    };

    music.addAnotherSong = function(name, artist, album){
      songs.push({ "artist" : artist,
                    "song"   : name,
                    "album"  : album
                  });

      music.addSongsToDOM(music.getAllSongs());

      $('input[name="song-name"]').val('');
      $('input[name="artist"]').val('');
      $('input[name="album"]').val('');
    };

    return music;

})(Music || {});
