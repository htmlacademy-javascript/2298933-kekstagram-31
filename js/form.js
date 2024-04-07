import { isEscapeKey } from './util';
import { addEventOnScaleButton } from './edit-scale-image';
import { addEffectsEvent } from './edit-effect-image';

const uploadImagesForm = document.querySelector('.img-upload__form');
const immageUploadOverlay = uploadImagesForm.querySelector('.img-upload__overlay');
const immageUploadButton = uploadImagesForm.querySelector('.img-upload__input');
const closeModalButton = immageUploadOverlay.querySelector('.img-upload__cancel');
const submitButton = uploadImagesForm.querySelector('.img-upload__submit');
const descriptionTextArea = uploadImagesForm.querySelector('.text__description');
const hashtagsInput = uploadImagesForm.querySelector('.text__hashtags');


const MAX_HASHTAGS = 5;
const MAX_COMMENT_LENGTH = 140;

const pristine = new Pristine(uploadImagesForm);


const isFormValid = {
  comment: true,
  hashtags: false
};

uploadImagesForm.addEventListener('submit', (evt)=>{
  evt.preventDefault();

  const isValid = pristine.validate();

  if(isValid && isFormValid.comment && isFormValid.hashtags){
    const formData = new FormData(evt.target);

    fetch(
      'https://31.javascript.htmlacademy.pro/kekstagram',
      {
        method: 'POST',
        body: formData,
      },
    );
    onCloseModalButton();
    onFormSuccess();
  } else {
    onFormError();
  }
});

function onFormSuccess() {
  const successTemplate = document.querySelector('#success')
    .content
    .querySelector('.success');

  const modalSucces = document.createDocumentFragment();
  const success = successTemplate.cloneNode(true);
  modalSucces.appendChild(success);
  document.body.appendChild(modalSucces);
  document.body.classList.add('modal-open');
  success.querySelector('.success__button').addEventListener('click', onSuccessButton);
}

function onSuccessButton() {
  document.querySelector('.success').querySelector('.success__button').removeEventListener('click', onSuccessButton);
  document.querySelector('.success').remove();
}

function onFormError() {
  const errorTemplate = document.querySelector('#error')
    .content
    .querySelector('.error');

  const modalError = document.createDocumentFragment();
  const error = errorTemplate.cloneNode(true);
  modalError.appendChild(error);
  document.body.appendChild(modalError);
  document.body.classList.add('modal-open');
  error.querySelector('.error__button').addEventListener('click', onErrorButton);
}

function onErrorButton() {
  document.querySelector('.error').querySelector('.error__button').removeEventListener('click', onErrorButton);
  document.querySelector('.error').remove();
}

const newCommentDiv = document.createElement('div');
const newHashtagsDiv = document.createElement('div');

function onCommentTextArea () {
  newCommentDiv.classList.add('img-upload__field-wrapper--error');
  newCommentDiv.classList.add('pristine-error');

  let errorComment = 0;


  if(descriptionTextArea.value.length >= MAX_COMMENT_LENGTH){
    errorComment = 1;
  } else {
    errorComment = 0;
  }


  if(hashtagsInput.value === ''){
    errorComment = 2;
  }

  if(descriptionTextArea.value.length === 0){
    errorComment = 0;
  }

  switch(errorComment){
    case 0:
      isFormValid.comment = true;
      submitButton.disabled = false;
      newCommentDiv.remove();
      break;
    case 1:
      descriptionTextArea.after(newCommentDiv);
      isFormValid.comment = false;
      submitButton.disabled = true;
      newCommentDiv.textContent = `Не более ${MAX_COMMENT_LENGTH} символов`;
      break;
    case 2:
      descriptionTextArea.after(newCommentDiv);
      isFormValid.comment = false;
      newCommentDiv.textContent = 'Пожалуйста введите хештеги';
      submitButton.disabled = true;
      break;
  }

}

function onHashtagInput () {
  const regexp = /^#[a-zа-яё0-9]{1,19}$/i;
  newHashtagsDiv.classList.add('img-upload__field-wrapper--error');
  newHashtagsDiv.classList.add('pristine-error');

  const dublicateHashtags = [];

  const errorHashtags = {
    errorMessage: 0,
  };

  if(hashtagsInput.value !== ''){
    newCommentDiv.remove();
  }

  const hashtagsArray = hashtagsInput.value.split(' ');

  for(let i = 0; hashtagsArray.length > i; i++){
    hashtagsArray[i] = hashtagsArray[i].toLowerCase();
  }

  for(let i = 0; hashtagsArray.length > i; i++){
    const isValidate = regexp.test(hashtagsArray[i]);
    if(isValidate) {
      errorHashtags.errorMessage = 0;
    } else {
      errorHashtags.errorMessage = 1;
    }
  }

  for (let i = 0; i < hashtagsArray.length; i++) {
    for (let j = i + 1; j < hashtagsArray.length; j++) {
      if (hashtagsArray[i] === hashtagsArray[j] && !dublicateHashtags.includes(hashtagsArray[i])) {
        dublicateHashtags.push(hashtagsArray[i]);
      }
    }
  }

  for(let i = 0; dublicateHashtags.length > i; i++){
    const dublicateHashtag = dublicateHashtags[i];
    for(let j = 0; hashtagsArray.length > j; j++){
      if(dublicateHashtag === hashtagsArray[j]){
        errorHashtags.errorMessage = 2;
      }
    }
  }

  if(hashtagsArray.length > 5){
    errorHashtags.errorMessage = 3;
  }

  if(hashtagsInput.value === '') {
    errorHashtags.errorMessage = 0;
  }

  switch(errorHashtags.errorMessage){
    case 0:
      isFormValid.hashtags = true;
      submitButton.disabled = false;
      newHashtagsDiv.remove();
      break;
    case 1:
      hashtagsInput.after(newHashtagsDiv);
      submitButton.disabled = true;
      isFormValid.hashtags = false;
      newHashtagsDiv.textContent = 'Не правильно записан хештег';
      break;
    case 2:
      hashtagsInput.after(newHashtagsDiv);
      submitButton.disabled = true;
      isFormValid.hashtags = false;
      newHashtagsDiv.textContent = 'Хештеги повторяются';
      break;
    case 3:
      hashtagsInput.after(newHashtagsDiv);
      submitButton.disabled = true;
      isFormValid.hashtags = false;
      newHashtagsDiv.textContent = `Должно быть не более ${MAX_HASHTAGS} хештегов`;
      break;
  }

}

function onImageUploadButton () {
  const reader = new FileReader();
  reader.onload = function (e) {
    const previewUrl = e.target.result;
    immageUploadOverlay.querySelector('.img-upload__preview img').src = previewUrl;
    immageUploadOverlay.querySelector('.img-upload__preview img').style = '';
    addPreviewsImages(previewUrl);
  };
  submitButton.disabled = 'true';
  addEffectsEvent();
  addEventOnScaleButton();
  reader.readAsDataURL(this.files[0]);
  immageUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  closeModalButton.addEventListener('click', onCloseModalButton);
  document.addEventListener('keydown', onEscKeydown);
  descriptionTextArea.addEventListener('input', onCommentTextArea);
  hashtagsInput.addEventListener('input', onHashtagInput);
}

function addPreviewsImages(url){
  const radioImputs = uploadImagesForm.querySelectorAll('.effects__preview');
  for(let i = 0; radioImputs.length > i; i++){
    radioImputs[i].style.backgroundImage = `url(${url})`;
  }
}

function onEscKeydown(evt){
  if(isEscapeKey(evt)){
    evt.preventDefault();
    addEffectsEvent();
    addEventOnScaleButton();
    immageUploadOverlay.classList.add('hidden');
    document.body.classList.remove('modal-open');
    closeModalButton.removeEventListener('click', onCloseModalButton);
    document.removeEventListener('keydown', onEscKeydown);
    descriptionTextArea.removeEventListener('input', onCommentTextArea);
    descriptionTextArea.value = '';
    hashtagsInput.value = '';
    immageUploadButton.value = '';
    newCommentDiv.remove();
    newHashtagsDiv.remove();
  }
}

function onCloseModalButton() {
  addEventOnScaleButton();
  addEffectsEvent();
  immageUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  closeModalButton.removeEventListener('click', onCloseModalButton);
  document.removeEventListener('keydown', onEscKeydown);
  descriptionTextArea.removeEventListener('input', onCommentTextArea);
  immageUploadButton.value = '';
  descriptionTextArea.value = '';
  hashtagsInput.value = '';
  newCommentDiv.remove();
  newHashtagsDiv.remove();
}

function onUploadForm() {
  immageUploadButton.addEventListener('change', onImageUploadButton);
}


export {onUploadForm};
