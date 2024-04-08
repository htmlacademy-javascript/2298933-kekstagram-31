import { DATA } from './data.js';
import { createPostFragments } from './create-posts.js';
import { addBigPictureEvent } from './big-picture-modal/big-picture.js';
import { addEventOnSubmitForm } from './form.js';
import { addFilterEvent } from './filter.js';
import './edit-effect-image.js';

createPostFragments(DATA);
addBigPictureEvent();
addFilterEvent();
addEventOnSubmitForm();
