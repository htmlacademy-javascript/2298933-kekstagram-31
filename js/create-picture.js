import {POSTS} from './create-post.js';

const picturesBlock = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const postsFragments = POSTS;

const postFragment = document.createDocumentFragment();

postsFragments.forEach(({url, description, likes, comments, id}) => {
  const pictureLink = pictureTemplate.cloneNode(true);
  pictureLink.dataset.pictureId = id;
  pictureLink.querySelector('.picture__img').src = url;
  pictureLink.querySelector('.picture__img').alt = description;
  pictureLink.querySelector('.picture__comments').textContent = comments.length;
  pictureLink.querySelector('.picture__likes').textContent = likes;
  postFragment.appendChild(pictureLink);
});

picturesBlock.appendChild(postFragment);

export{picturesBlock};
