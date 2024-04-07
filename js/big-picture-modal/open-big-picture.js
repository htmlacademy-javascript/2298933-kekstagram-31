import { showBigPicture } from './show-big-picture.js';
import { addCloseEvent } from './close-big-picture.js';
import { DATA } from '../data.js';
import { createSocialHeader } from './create-social.js';
import { addLoadMoreCommentsEvent } from './load-more-comments.js';

const bigPictureBlock = document.querySelector('.big-picture');


function addBigPictureEvent() {
  const pictureBlock = document.querySelector('.pictures');
  pictureBlock.addEventListener('click', onPictureClick);
}

function onPictureClick(evt) {
  const currentPicture = evt.target.closest('.picture');
  if(currentPicture) {
    evt.preventDefault();
    bigPictureBlock.classList.remove('hidden');
    document.body.classList.add('modal-open');
    showBigPicture(currentPicture);
    createSocialHeader(DATA);
    addLoadMoreCommentsEvent();
    addCloseEvent();
  }
}

export {addBigPictureEvent};
