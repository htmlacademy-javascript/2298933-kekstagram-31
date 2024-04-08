const reducSizeButton = document.querySelector('.scale__control--smaller');
const increaseSizeButton = document.querySelector('.scale__control--bigger');
const imageScaleInputValue = document.querySelector('input.scale__control--value');
const previewImage = document.querySelector('.img-upload__preview img');


function addEventOnScaleButton() {
  reducSizeButton.addEventListener('click', onReducSizeButton);
  increaseSizeButton.addEventListener('click', onIncreaseSizeButton);

}

function removeEventOnScaleButton() {
  reducSizeButton.removeEventListener('click', onReducSizeButton);
  increaseSizeButton.removeEventListener('click', onIncreaseSizeButton);
}

function onReducSizeButton() {
  if (imageScaleInputValue.value === '25%') {
    imageScaleInputValue.setAttribute('value', '25%');
    imageScaleInputValue.value = '25%';
    previewImage.style.transform = `scale(${imageScaleInputValue.value})`;
  } else {
    const currenValue = parseInt(imageScaleInputValue.value, 10) - 25;
    imageScaleInputValue.setAttribute('value', `${currenValue}%`);
    imageScaleInputValue.value = `${currenValue}%`;
    previewImage.style.transform = `scale(${imageScaleInputValue.value})`;
  }
}


function onIncreaseSizeButton() {
  if (imageScaleInputValue.value === '100%') {
    imageScaleInputValue.setAttribute('value', '100%');
    imageScaleInputValue.value = '100%';
    previewImage.style.transform = `scale(${imageScaleInputValue.value})`;
  } else {
    const currenValue = parseInt(imageScaleInputValue.value, 10) + 25;
    imageScaleInputValue.setAttribute('value', `${currenValue}%`);
    imageScaleInputValue.value = `${currenValue}%`;
    previewImage.style.transform = `scale(${imageScaleInputValue.value})`;
  }
}

export {addEventOnScaleButton, removeEventOnScaleButton};
