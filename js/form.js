import { isEscapeKey } from './util';

const uploadImagesForm = document.querySelector('.img-upload__form');
const immageUploadOverlay = uploadImagesForm.querySelector('.img-upload__overlay');
const immageUploadButton = uploadImagesForm.querySelector('.img-upload__input');
const closeModalButton = immageUploadOverlay.querySelector('.img-upload__cancel');
const hashtagsInput = uploadImagesForm.querySelector('.text__hashtags');
const descriptionTextArea = uploadImagesForm.querySelector('.text__description');


const regexp = /^#[a-zа-яё0-9]{1,19}$/i;


function onImageUploadButton () {
  const reader = new FileReader();
  reader.onload = function (evt) {
    const previewUrl = evt.target.result;
    immageUploadOverlay.querySelector('.img-upload__preview img').src = previewUrl;
    addPreviewsImages(previewUrl);
  };
  reader.readAsDataURL(this.files[0]);
  immageUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  closeModalButton.addEventListener('click', onCloseModalButton);
  document.addEventListener('keydown', onEscKeydown);
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
    immageUploadOverlay.classList.add('hidden');
    document.body.classList.remove('modal-open');
    closeModalButton.removeEventListener('click', onCloseModalButton);
    document.removeEventListener('keydown', onEscKeydown);
  }
}

function onCloseModalButton(){
  immageUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  closeModalButton.removeEventListener('click', onCloseModalButton);
  document.removeEventListener('keydown', onEscKeydown);
}

function addFormAtribute(form) {
  const formAction = 'https://31.javascript.htmlacademy.pro/kekstagram';
  const formMethod = 'post';
  const formEnctype = 'multipart/form-data';


  form.setAttribute('action', formAction);
  form.setAttribute('method', formMethod);
  form.setAttribute('enctype', formEnctype);
  hashtagsInput.setAttribute('required', true);
  hashtagsInput.setAttribute('type', 'text');
  hashtagsInput.setAttribute('maxlength', 19);
  descriptionTextArea.setAttribute('maxlength', 140);

  immageUploadButton.addEventListener('change', onImageUploadButton);

  return form;
}


function createFormAtributt() {
  addFormAtribute(uploadImagesForm);
}


export {createFormAtributt};
