import Player from '@vimeo/player';
import { save, load } from './local-storage-service.js';

const LOCALSTORAGE_KEY_1 = 'videoplayer-current-time';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

function onPlay({ seconds }) {
  console.log(seconds);
  save(LOCALSTORAGE_KEY_1, seconds);
}

function playFromSavedTime() {
  const savedTime = load(LOCALSTORAGE_KEY_1);

  if (savedTime) {
    player.setCurrentTime(savedTime);
  }
}

playFromSavedTime();

player.on('play', throttle(onPlay, 1000));
