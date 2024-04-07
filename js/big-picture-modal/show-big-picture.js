function showBigPicture(currentPicture) {
  const bigPictureModal = document.querySelector('.big-picture__img img');
  const currentImage = currentPicture.querySelector('img');
  bigPictureModal.src = currentImage.src;
  bigPictureModal.dataset.pictureId = currentPicture.dataset.pictureId;
}

export {showBigPicture};
