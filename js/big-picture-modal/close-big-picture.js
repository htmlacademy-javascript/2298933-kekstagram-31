import { isEscapeKey } from '../util.js';

const bigPictureModal = document.querySelector('.big-picture');
const closeBigPictureModal = document.querySelector('.big-picture__cancel');


function addCloseEvent() {
  closeBigPictureModal.addEventListener('click', onCloseButton);
  document.addEventListener('keydown', onEscKeydown);
}

function onCloseButton() {
  bigPictureModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeydown);
  closeBigPictureModal.removeEventListener('click', onCloseButton);

}

function onEscKeydown(evt) {
  if(isEscapeKey(evt)){
    evt.preventDefault();
    bigPictureModal.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onEscKeydown);
    closeBigPictureModal.removeEventListener('click', onCloseButton);

  }
}

export {addCloseEvent};
