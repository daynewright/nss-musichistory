
var songHolder =$('.main').children()[0];

addSongsToDOM = function(songs){
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

module.exports = addSongsToDOM;
