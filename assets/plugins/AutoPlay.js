function AutoPlay() {}

AutoPlay.prototype.run = function (player) {
  if (!player.muted) {
    player.mute = true;
  }
  //player.mute();
  player.play();
};

export default AutoPlay;
