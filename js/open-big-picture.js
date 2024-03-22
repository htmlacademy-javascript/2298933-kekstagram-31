import {isEscapeKey} from './util';
import {picturesBlock} from './create-picture';
import { POSTS } from './create-post';
import { createComments } from './create-comments';

const bigPictureModal = document.querySelector('.big-picture');
const pictureModalCloseButton = bigPictureModal.querySelector('.big-picture__cancel');


function onPictureClick (evt) {
  const currentPicture = evt.target.closest('.picture');
  if(currentPicture){
    evt.preventDefault();
    openBigPicture();
    createBigPicture(currentPicture.dataset.pictureId);
  }
}

function openBigPicture () {
  bigPictureModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  pictureModalCloseButton.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onEscKeydown);
}

function createBigPicture (pictureId) {
  let currentPost = {};
  for(let i = 0; POSTS.length > i; i++){
    if(POSTS[i].id === Number(pictureId)){
      currentPost = POSTS[i];
    }
  }
  bigPictureModal.querySelector('.big-picture__img img').src = currentPost.url;
  bigPictureModal.querySelector('.social__picture').src = currentPost.avatar;
  bigPictureModal.querySelector('.social__caption').textContent = currentPost.description;
  bigPictureModal.querySelector('.likes-count').textContent = currentPost.likes;
  bigPictureModal.querySelector('.social__comment-total-count').textContent = currentPost.comments.length;
  createComments(currentPost.comments);
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
