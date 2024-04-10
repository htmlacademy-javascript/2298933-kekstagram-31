import { getData } from './api.js';
import { openErrorSendDataMessage } from './messages.js';
import { createPostFragments } from './create-posts.js';

const createData = async () => {
  try {
    const dataFiles = await getData();
    createPostFragments(dataFiles);
    return dataFiles;
  } catch {
    openErrorSendDataMessage();
  }
};

const DATA = await createData();

export {DATA};

