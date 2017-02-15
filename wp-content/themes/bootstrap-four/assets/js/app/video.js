var $ = jQuery;
var tag = document.createElement('script');
		tag.src = 'https://www.youtube.com/player_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var tv,
		playerDefaults = {
      autoplay: 0, 
      autohide: 1, 
      modestbranding: 0, 
      rel: 0, 
      showinfo: 0, 
      controls: 0, 
      disablekb: 1, 
      enablejsapi: 1, 
      iv_load_policy: 3,
    };

var vid = [
      {'videoId': 't6EYrwMJ7lo', 'suggestedQuality': 'hd720'},
			{'videoId': 'Mh4giMX_YK0', 'suggestedQuality': 'hd720'},
		],
		randomVid = Math.floor(Math.random() * vid.length),
    prevRand = randomVid,
    currVid = randomVid == prevRand ? randomVid : randomVid;


// function onYouTubePlayerAPIReady(){
//   tv = new YT.Player('vid', {events: {'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange}, playerVars: playerDefaults});
// }

function onPlayerReady(){
  console.log(vid.length)
  tv.loadVideoById(vid[currVid]);
  tv.mute();
}



function onPlayerStateChange(e){
    if (e.data === YT.PlayerState.ENDED) {
        console.log(vid.length)
        console.log(randomVid)
      console.log(vid[currVid])
       tv.loadVideoById(vid[currVid]);
    }
}













// function vidRescale(){

//   var w = $(window).width(),
//     h = $(window).height();

//   if (w/h > 16/9){
//     tv.setSize(w, w/16*9);
//     $('#vid').css({'left': '0px'});
//   } else {
//     tv.setSize(h/9*16, h);
//     $('#vid').css({'left': -($('#vid').outerWidth()-w)/2});
//   }
// }

// jQuery(window).on('load resize', function(){
//   vidRescale();
// });

