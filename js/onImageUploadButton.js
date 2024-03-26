import { immageUploadOverlay, addPreviewsImages, descriptionTextArea, submitButton, closeModalButton, onCloseModalButton, onEscKeydown, onCommentTextArea } from './form';

export function onImageUploadButton() {
  const reader = new FileReader();
  reader.onload = function (evt) {
    const previewUrl = evt.target.result;
    immageUploadOverlay.querySelector('.img-upload__preview img').src = previewUrl;
    addPreviewsImages(previewUrl);
  };
  descriptionTextArea.value = '';
  reader.readAsDataURL(this.files[0]);
  submitButton.setAttribute('disabled', true);
  immageUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  closeModalButton.addEventListener('click', onCloseModalButton);
  document.addEventListener('keydown', onEscKeydown);
  descriptionTextArea.addEventListener('change', onCommentTextArea);
}
