import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player(document.getElementById('vimeo-player'));
const savedTime = localStorage.getItem('videoplayer-current-time');

player.ready().then(() => {
  if (savedTime) {
    player.setCurrentTime(parseFloat(savedTime));
  }

  player.on(
    'timeupdate',
    throttle(data => {
      const currentTime = data.seconds;

      localStorage.setItem('videoplayer-current-time', currentTime.toString());
    }, 1000)
  );
});
