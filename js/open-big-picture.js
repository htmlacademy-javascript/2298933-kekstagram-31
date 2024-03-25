import { isEscapeKey } from './util';
import { POSTS } from './create-post';
import { createComments } from './create-comments';
import { loadMoreComments } from './load-more-comments';

const picturesBlock = document.querySelector('.pictures');
const bigPictureModal = document.querySelector('.big-picture');
const pictureModalCloseButton = bigPictureModal.querySelector('.big-picture__cancel');
const loadMoreButton = document.querySelector('.social__comments-loader');


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
  loadMoreButton.addEventListener('click', loadMoreComments);
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
  createComments(currentPost.comments);
}


function onCloseButtonClick () {
  bigPictureModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  pictureModalCloseButton.removeEventListener('click', onCloseButtonClick);
  loadMoreButton.removeEventListener('click', loadMoreComments);
  document.removeEventListener('keydown', onEscKeydown);
}

function onEscKeydown (evt) {
  if(isEscapeKey(evt)){
    evt.preventDefault();
    bigPictureModal.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onEscKeydown);
    loadMoreButton.removeEventListener('click', loadMoreComments);
    pictureModalCloseButton.removeEventListener('click', onCloseButtonClick);
  }
}

function addClickPicture() {
  picturesBlock.addEventListener('click', onPictureClick);
}

export {addClickPicture};
