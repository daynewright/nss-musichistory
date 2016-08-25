"use strict";

const url = 'https://music-history-nss15.firebaseio.com';

function getSongs(){
  return new Promise(function(resolve, reject){
    $.ajax({
      url: `${url}/songs.json`
    }).done(function(songData){
      resolve(songData);
    });
  });
}

function deleteSong(songId){
  return new Promise(function(resolve, reject){
    $.ajax({
      url: `${url}/songs/${songId}.json`,
      type: 'DELETE'
    }).done(function(){
      console.warn(`Song  with the id ${songId} has been deleted`);
      resolve();
    });
  });
}

function addSong(songObj){
  return new Promise(function(resolve, reject){
    $.ajax({
      url: `${url}/songs.json`,
      type: 'POST',
      data: JSON.stringify(songObj),
      dataType: 'json'
    }).done(function(uniqueSongId){
      console.log(`The song titled ${songObj.title} was saved and given the unique id ${uniqueSongId}`);
      resolve(uniqueSongId);
    });
  });
}

function getSong(songId){
  return new Promise(function(resolve, reject){
    $.ajax({
      url: `${url}/songs/${songId}.json`
    }).done(function(song){
      console.log('Song returned');
      resolve(song);
    });
  });
}

function saveEdit(songObj, songId){
  return new Promise(function(resolve, reject){
    $.ajax({
      url: `${url}/songs/${songId}.json`,
      method: 'PUT',
      data: JSON.stringify(songObj)
    }).done(function(){
      console.log('Song updated!');
      resolve();
    });
  });
}
