import { getData } from './api.js';
import { createPostFragment } from './create-posts.js';
import { openGetDataError } from './errors-function/get-data-error.js';
import { openBigPictureEvent } from './big-picture-modal/open-big-picture.js';
import { onUploadForm } from './form-modal/form.js';


getData()
  .then((posts) => {
    createPostFragment(posts);
    openBigPictureEvent();
  })
  .catch(
    () => {
      openGetDataError();
    }
  );

onUploadForm();
