const imageUploadForm = document.querySelector('.img-upload__form');
const hashtagsInput = imageUploadForm.querySelector('.text__hashtags');
const descriptionInput = imageUploadForm.querySelector('.text__description');

const MAX_DESCRIPTION_LENGTH = 140;
const DESCRIPTION_ERROR_MESSAGE = 'Должно быть не более 140 символов';

const MAX_HASHTAGS = 5;
const ERROR_HASHTAGS_MESSAGES = [
  `Не более ${MAX_HASHTAGS} хештегов`,
  'Не правильно введен хештег ',
  'Хештеги не должны повторяться',
];

const regexp = /^#[a-zа-яё0-9]{1,19}$/i;


const pristine = new Pristine(imageUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'text__error'
});

function isDescriptionValidate(inputValue) {
  const result = inputValue.length <= MAX_DESCRIPTION_LENGTH;
  return result;
}

function isHashtagValidate(inputValue) {
  const isValidate = {
    length: true,
    regular: true,
    repeated: true
  };
  const HASHTAGS = getHashtagsArray(inputValue);
  isValidate.length = checkHashtagsLength(HASHTAGS);
  isValidate.regular = checkValidateByRegular(HASHTAGS);
  isValidate.repeated = checkRepeatHeshtags(HASHTAGS);
  const result = getValidateResult(isValidate);
  return result;
}

function createErrorMessage(inputValue) {
  let result = true;
  if(inputValue.length === 0){
    return result;
  }

  const isValidate = {
    length: true,
    regular: true,
    repeated: true
  };
  const HASHTAGS = getHashtagsArray(inputValue);
  isValidate.length = checkHashtagsLength(HASHTAGS);
  isValidate.regular = checkValidateByRegular(HASHTAGS);
  isValidate.repeated = checkRepeatHeshtags(HASHTAGS);
  result = getErrorMessage(isValidate);
  return result;
}

function checkHashtagsLength(hashtags) {
  let result = false;
  if(hashtags.length === 0 || MAX_HASHTAGS >= hashtags.length) {
    result = true;
  }
  return result;
}

function checkRepeatHeshtags(heshtags) {
  let result = true;
  const duplicates = heshtags.filter((e, i, a) => a.indexOf(e) !== i);
  if(duplicates.length !== 0){
    result = false;
  }
  return result;
}

function checkValidateByRegular(hashtags) {
  let result = true;
  if(hashtags.length === 0){
    return result;
  }
  for(let i = 0; hashtags.length > i; i++){
    if(!regexp.test(hashtags[i])){
      result = false;
    }
  }
  return result;
}

function getValidateResult(validateObject) {
  let result = true;
  const keysValue = Object.values(validateObject);
  for(let i = 0; keysValue.length > i; i++) {
    if(keysValue[i] === false) {
      result = false;
    }
  }
  return result;
}

function getHashtagsArray(hashtags) {
  hashtags = (hashtags.toLowerCase().trim().split(' '));
  const result = hashtags.filter((hashtag) => hashtag !== '');
  return result;
}

function getErrorMessage(validateObject) {
  let result = true;
  const keysValue = Object.values(validateObject);
  for (let i = 0; keysValue.length > i; i++){
    if(keysValue[i] === false){
      result = ERROR_HASHTAGS_MESSAGES[i];
    }
  }
  return result;
}


pristine.addValidator(hashtagsInput, isHashtagValidate, createErrorMessage);
pristine.addValidator(descriptionInput, isDescriptionValidate, DESCRIPTION_ERROR_MESSAGE);

export {pristine};
