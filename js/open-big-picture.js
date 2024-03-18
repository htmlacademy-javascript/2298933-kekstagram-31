import {isEscapeKey} from './util';
import {picturesBlock} from './create-picture';

const bigPictureModal = document.querySelector('.big-picture');
const pictureModalCloseButton = bigPictureModal.querySelector('.big-picture__cancel');
const bigPicture = bigPictureModal.querySelector('.picture__img, img');

function onPictureClick (evt) {
  if(evt.target.closest('.picture')){
    evt.preventDefault();
    bigPictureModal.classList.remove('hidden');
    document.body.classList.add('modal-open');
    pictureModalCloseButton.addEventListener('click', onCloseButtonClick);
    document.addEventListener('keydown', onEscKeydown);
    bigPicture.src = evt.target.src;
  }
}

function onCloseButtonClick () {
  bigPictureModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  pictureModalCloseButton.removeEventListener('click', onCloseButtonClick);
  document.removeEventListener('keydown', onEscKeydown);
}

function onEscKeydown (evt) {
  if(isEscapeKey(evt)){
    evt.preventDefault();
    bigPictureModal.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onEscKeydown);
    pictureModalCloseButton.removeEventListener('click', onCloseButtonClick);
  }
}

picturesBlock.addEventListener('click', onPictureClick);
