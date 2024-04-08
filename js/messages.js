import { isEscapeKey } from './util.js';

const templateDataError = document.querySelector('#data-error')
  .content
  .querySelector('.data-error');

const templateErrorSendData = document.querySelector('#error')
  .content
  .querySelector('.error');

const templateSucceessSendData = document.querySelector('#success')
  .content
  .querySelector('.success');

function getDataErrorMessage() {
  const errorModalTime = 5000;
  const errorModal = document.createDocumentFragment();
  const errorData = templateDataError.cloneNode(true);
  errorModal.appendChild(errorData);
  document.body.appendChild(errorModal);

  setTimeout(() => {
    errorData.remove();
  }, errorModalTime);
}

function openErrorSendDataMessage() {
  const modalFragment = document.createDocumentFragment();
  const modal = templateErrorSendData.cloneNode(true);
  modalFragment.appendChild(modal);
  document.body.appendChild(modalFragment);
  document.querySelector('.error__button').addEventListener('click', onErrorSendDataButton);
  document.body.addEventListener('keydown', onEscKeydown);
}

function onErrorSendDataButton() {
  document.body.removeEventListener('keydown', onEscKeydown);
  document.querySelector('.error__button').removeEventListener('click', onErrorSendDataButton);
  document.querySelector('.error').remove();
}

function openSuccessSendDataMessage() {
  const modalFragment = document.createDocumentFragment();
  const modal = templateSucceessSendData.cloneNode(true);
  modalFragment.appendChild(modal);
  modalFragment.querySelector('.success__button').addEventListener('click', onSuccessSendDataButton);
  document.body.addEventListener('keydown', onEscKeydown);
  document.body.appendChild(modalFragment);
}

function onSuccessSendDataButton() {
  document.body.removeEventListener('keydown', onEscKeydown);
  document.querySelector('.success__button').removeEventListener('click', onSuccessSendDataButton);
  document.querySelector('.success').remove();
}

function onEscKeydown(evt) {
  if(isEscapeKey(evt)){
    document.querySelector('.success__button').removeEventListener('click', onSuccessSendDataButton);
    document.querySelector('.success').remove();
    document.querySelector('.error__button').removeEventListener('click', onErrorSendDataButton);
    document.querySelector('.error').remove();
  }
}

export {getDataErrorMessage, openErrorSendDataMessage, openSuccessSendDataMessage};
