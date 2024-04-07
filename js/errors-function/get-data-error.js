const templateDataError = document.querySelector('#data-error')
  .content
  .querySelector('.data-error');

function openGetDataError() {
  const errorModalTime = 5000;
  const errorModal = document.createDocumentFragment();
  const errorData = templateDataError.cloneNode(true);
  errorModal.appendChild(errorData);
  document.body.appendChild(errorModal);

  setTimeout(() => {
    errorData.remove();
  }, errorModalTime);
}

export {openGetDataError};
