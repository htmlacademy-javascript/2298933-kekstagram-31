const uploadImagesForm = document.querySelector('.img-upload__form');

function addFormAtribute(form) {
  const formAction = 'https://31.javascript.htmlacademy.pro/kekstagram';
  const formMethod = 'post';
  const formEnctype = 'multipart/form-data';


  form.setAttribute('action', formAction);
  form.setAttribute('method', formMethod);
  form.setAttribute('enctype', formEnctype);
  return form;
}

addFormAtribute(uploadImagesForm);

