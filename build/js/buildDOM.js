
var songHolder =$('.main').children()[0];
var songTemplate = require('../templates/songtemplate.hbs');

addSongsToDOM = function(songs){
  $(songHolder).html('');
  songs.forEach(function(e,i){
     e.id = i;
     return songHolder.innerHTML += songTemplate(e);
   });
};

module.exports = addSongsToDOM;
