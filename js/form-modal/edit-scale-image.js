const reducSizeButton = document.querySelector('.scale__control--smaller');
const increaseSizeButton = document.querySelector('.scale__control--bigger');
const imageScaleInputValue = document.querySelector('.scale__control--value');
const previewImage = document.querySelector('.img-upload__preview img');

const SCALE_STEP = 25;
const SCALE_MIN = 25;
const SCALE_MAX = 100;


function addEventOnScaleButton () {
  if(document.querySelector('.img-upload__overlay').classList.contains('hidden') === true){
    reducSizeButton.addEventListener('click', onReducSizeButton);
    increaseSizeButton.addEventListener('click', onIncreaseSizeButton);
  } else {
    reducSizeButton.removeEventListener('click', onReducSizeButton);
    increaseSizeButton.removeEventListener('click', onIncreaseSizeButton);
  }
}

function onReducSizeButton (){
  let currentValue = imageScaleInputValue.value.slice(0, -1);
  if(Number(currentValue) === SCALE_MIN){
    reducSizeButton.disabled = true;
  } else {
    reducSizeButton.disabled = false;
    increaseSizeButton.disabled = false;
    currentValue = Number(currentValue) - SCALE_STEP;
    previewImage.style.transform = `scale(${(Number(currentValue) / 100)})`;
    currentValue += '%';
    imageScaleInputValue.value = currentValue;
  }
}


function onIncreaseSizeButton (){
  let currentValue = imageScaleInputValue.value.slice(0, -1);
  if(Number(currentValue) > SCALE_MAX){
    increaseSizeButton.disabled = true;
  } else if (Number(currentValue) < SCALE_MAX) {
    reducSizeButton.disabled = false;
    increaseSizeButton.disabled = false;
    currentValue = Number(currentValue) + SCALE_STEP;
    previewImage.style.transform = `scale(${(Number(currentValue) / 100)})`;
    currentValue += '%';
    imageScaleInputValue.value = currentValue;
  }
}

export {addEventOnScaleButton};
