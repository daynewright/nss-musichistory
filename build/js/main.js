var Music = (function(music){

//add selections to sidebar //
    (function(){
      var artist = $('select')[0];
      var button = $('.music-form button');
      var albumHTML = '';

      function getArtist() {
          console.log(artist.value);
          albumHTML = '<option value="" disabled selected>Options</option>';
          switch(artist.value) {
              case 'Gregory Alan Isakov':
                  albumHTML += addOptions(['The Weatherman','This Empty Northern Hemisphere','That Sea, The Gambler','Songs for October']);
                  break;
              case 'Dan Wilson':
                  albumHTML += addOptions(['Love Without Fear','Live At the Pantages','Free Life','Disappearing','Be Free EP']);
                  break;
              case 'Emerson Hart':
                  albumHTML += addOptions(['Beauty in Disrepair','Cigarettes and Gasoline']);
                  break;
              case 'Willy Tea Taylor':
                  albumHTML += addOptions(['Knuckleball Prime','Color This Album','4 Strings']);
                  break;
              case 'Damien Jurado':
                  albumHTML += addOptions(['Visions of Us on the Land','Brothers and Sisters of the External Son','Maraqopa','Live at Landlocked','Saint Barlett']);
                  break;
          }
         $ ($('select')[1]).html(albumHTML);
      }

      function addAnotherSongClick(){
        var songName = $('input[name="song-name"]').val();
        var songArtist = $('input[name="artist"]').val();
        var songAlbum = $('input[name="album"]').val();

        music.addAnotherSong(songName, songArtist, songAlbum);
      }

      function deleteSong(evt){
        music.getAllSongs().splice(evt.target.parentElement.id,1);
        music.addSongsToDOM(music.getAllSongs());
      }

      //artist.addEventListener('change', getArtist);
     $(artist).change(getArtist);

     //  document.querySelector("body").addEventListener("click", eventListenerCallBack);
      $("body").click(eventListenerCallBack);

      function eventListenerCallBack(evt){
        if(evt.target.id === 'add-music-btn'){
          addAnotherSongClick();
        }
        if(evt.target.id === 'del-btn'){
          deleteSong(evt);
        }
        if(evt.target.id === 'more-songs'){
          music.loadSongs('json/songs2.json');
          evt.target.disabled = true;
        }
      }

      //option helper function
      function addOptions(valueArray){
        var holder = '';
          valueArray.forEach(function(e){
              holder += `<option value="${e}">${e}</option>`;
          });
        return holder;
      }
    })();
// END add selections to sidebar //

  var songHolder =$('.main').children()[0];

  music.addSongsToDOM = function(songs){
   $(songHolder).html('');
    songs.forEach((e,i) => songHolder.innerHTML += (`
        <div id="${i}"class="song">
          <h2>${e.song}</h2>
          <button id="del-btn" type="button">Delete</button>
          <p>
            <span>${e.artist}</span>|<span>${e.album}</span>|<span>Genre</span>
          </p>
        </div>`)
      );
  };

return music;

})(Music || {});
