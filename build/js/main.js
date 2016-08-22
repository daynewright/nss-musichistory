var nav = require('./nav.js');
var allSongs = require('./songs');
var buildDOM = require('./buildDOM');

nav.addNavLinkEvents();
nav.showPage(location.hash);


//add selections to sidebar //
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

  allSongs.addAnotherSong(songName, songArtist, songAlbum);
}

function deleteSong(evt){
  allSongs.getAllSongs().splice(evt.target.parentElement.id,1);
  buildDOM(allSongs.getAllSongs());
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
    allSongs.loadSongs('json/songs2.json');
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
// END add selections to sidebar //
