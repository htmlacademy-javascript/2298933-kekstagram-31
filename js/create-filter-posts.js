import { createPostFragments } from './create-posts.js';

const picturesBlock = document.querySelector('.pictures');
let pictures = [];


function clearPosts() {
  picturesBlock.querySelectorAll('.picture').forEach((item) => item.remove());
}

function setPosts(dataArray) {
  clearPosts();
  pictures = dataArray;
  createPostFragments(pictures);
}


export { setPosts };
