import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector('video');
const buttonPlay = document.querySelector('#play');
const buttonMute = document.querySelector('#mute');
/* const player = new MediaPlayer({ element: video, plugins: [new AutoPlay()] }); */
const player = new MediaPlayer({
  element: video,
  plugins: [new AutoPlay(), new AutoPause()],
});

buttonMute.onclick = () => player.toggleMute();
buttonPlay.onclick = () => player.togglePlay();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch((error) => {
    console.log(error.message);
  });
}
