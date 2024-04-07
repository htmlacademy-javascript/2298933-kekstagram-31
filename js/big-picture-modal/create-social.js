function createSocialHeader(data) {
  const pictureId = getBigPictureDatasetId();
  const dataElement = getDataElement(data, pictureId);

  createSocialDescription(dataElement);

}

function createSocialDescription(dataElement) {
  const socialDescription = document.querySelector('.social__caption');
  const socialLikes = document.querySelector('.social__likes');

  socialDescription.textContent = dataElement.description;
  socialLikes.textContent = dataElement.likes;
}

function getBigPictureDatasetId() {
  const bigPicture = document.querySelector('.big-picture__img img');
  const pictureDatasetId = Number(bigPicture.dataset.pictureId);
  return pictureDatasetId;
}

function getDataElement(dataArray, datasetId) {
  let dataElement = '';
  for(let i = 0; dataArray.length > i; i++) {
    if(dataArray[i].id === datasetId){
      dataElement = dataArray[i];
    }
  }
  return dataElement;
}

export {createSocialHeader};
