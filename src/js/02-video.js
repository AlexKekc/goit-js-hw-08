import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const throttle = require('lodash.throttle');

function onPlay(timeupdate) {
  console.log(timeupdate);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(timeupdate));
}

try {
  const LocalStorageJSON = localStorage.getItem(LOCALSTORAGE_KEY);
  const parceOfLocalStorageJSON = JSON.parse(LocalStorageJSON);
  player
    .setCurrentTime(parceOfLocalStorageJSON.seconds)
    .then(function (seconds) {})
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          break;

        default:
          break;
      }
    });
} catch {
  console.log('Error');
}

player.on('play', throttle(onPlay, 1000));
