import MediaPlayer from './MediaPlayer.js';
//import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const buttonPlay = document.querySelector('#play');
const buttonMute = document.querySelector('#mute');
/* const player = new MediaPlayer({ element: video, plugins: [new AutoPlay()] }); */
const player = new MediaPlayer({ element: video, plugins: [] });

buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();
