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
    }, 800)
  );
});

// const TIME_KEY = 'videoplayer-current-time';

// const iframe = document.querySelector('iframe');
// const player = new Player(iframe, {
//   loop: true,
//   fullscreen: true,
//   quality: '1080p',
// });

// const getCurrentTime = function (currentTime) {
//   const seconds = currentTime.seconds;
//   localStorage.setItem(TIME_KEY, JSON.stringify(seconds));
// };

// player.on('timeupdate', throttle(getCurrentTime, 1000));

// player.setCurrentTime(JSON.parse(localStorage.getItem(TIME_KEY)) || 0);

// const player = new Player(document.getElementById('vimeo-player'));

// const savedTime = localStorage.getItem('videoplayer-current-time');

// player.ready().then(function () {
//   if (savedTime) {
//     player.setCurrentTime(parseFloat(savedTime));
//   }

//   player.on(
//     'timeupdate',
//     throttle(function (data) {
//       const currentTime = data.seconds;

//       localStorage.setItem('videoplayer-current-time', currentTime.toString());
//     }, 1000)
//   );
// });
