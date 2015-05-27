
$(function() {
      $('#player').append('<audio>');
      var player = $('#player audio')[0];
      player.src = "/content";
      player.load();

      var isPlaying = false;
      var playButton = $('#playButton');
      playButton.on('click', function() {
         if (isPlaying) {
            player.pause();
            playButton.empty().append('Play');
            isPlaying = false;
         } else {
            player.play();
            playButton.empty().append('Pause');
            isPlaying = true;
         }
      });
})
