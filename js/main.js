import { DATA } from './data.js';
import { createPostFragments } from './create-posts.js';
import { addBigPictureEvent } from './big-picture-modal/open-big-picture.js';
import { onUploadForm } from './form.js';
import { addFilterEvent } from './filter.js';

createPostFragments(DATA);
addBigPictureEvent();
onUploadForm();
addFilterEvent();
document.querySelector('.img-filters').classList.remove('img-filters--inactive');
