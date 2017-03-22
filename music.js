console.log(Artist);
console.log(Song);
// // Define the Artist constructor function here, with a 'name' property that can be set at instantiation,
// // and a 'songs' property that is an empty array to start
// function Artist(name) {
//   this.name = name;
//   this.song = [];
// }
// Artist.prototype.addSong = function () {
//   this.song.push(song);
// }
// // Define the Song constructor function here, with 'title' and 'artist' properties that can be set at instantiation,
// // and a 'playCount' property that is set to 0
// function Song(song) {
//   this.song = song;
//   // this.artist = artist;
//   // When a new song is instantiated, you'll want to add that song to its artist's 'songs' array.
//   // You'll probably want to do that in here somewhere...
// }

// Artist.prototype.getSongCount = function() {
//   return this.songs.length;
// }

// Artist.prototype.addSong = function () {
//   this.songs.push(song);
// }

// Artist.prototype.deploy = function() {
//   for(var i=0, x=this.song.length; i<x; i++){
//     this.song[i]
//   }
//   }

// // *console.log('Playing ' + Artist.getSongCount());
// // artist.addSong(song);
// // This is how we should be able to use your constructor functions once they work!
// var vanHalen = new Artist("Van Halen");
// var jump = new Song("Jump!", vanHalen);

//tried that first then this...im missing something...?

function Artist(name) {
    this.name = name;
}
function Song(name, title) {
  this.title = title;
}

var vanHalen = new Artist("vanHalen")
var jump = new Song("Jump")

 Artist.prototype.addSong = function() {
  this.title.push(title);
 }












