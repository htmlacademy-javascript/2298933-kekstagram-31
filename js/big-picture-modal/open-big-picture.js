import { showBigPicture } from './show-big-picture';
import { addCloseEvent } from './close-big-picture';

const bigPictureBlock = document.querySelector('.big-picture');

function openBigPictureEvent() {
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
    addCloseEvent();
  }
}

export {openBigPictureEvent};
