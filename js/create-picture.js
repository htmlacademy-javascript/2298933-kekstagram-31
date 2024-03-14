/*
Отобразить фотографии других пользователей.

Заведите модуль, который будет отвечать за отрисовку миниатюр.

На основе временных данных для разработки и шаблона #picture создайте DOM-элементы, соответствующие фотографиям, и заполните их данными:

Адрес изображения url подставьте как атрибут src изображения.
Описание изображения description подставьте в атрибут alt изображения.
Количество лайков likes выведите в блок .picture__likes.
Количество комментариев comments выведите в блок .picture__comments.
Отрисуйте сгенерированные DOM-элементы в блок .pictures. Для вставки элементов используйте DocumentFragment.

Подключите модуль в проект.
*/

// import {createPosts} from './create-post.js';
import {POSTS} from './create-post.js';

const picturesBlock = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const postsFragments = POSTS;

const postFragment = document.createDocumentFragment();

postsFragments.forEach(({url, description, likes, comments}) => {
  const pictureLink = pictureTemplate.cloneNode(true);
  pictureLink.querySelector('.picture__img').src = url;
  pictureLink.querySelector('.picture__img').alt = description;
  pictureLink.querySelector('.picture__comments').textContent = comments.length;
  pictureLink.querySelector('.picture__likes').textContent = likes;
  picturesBlock.appendChild(pictureLink);
});

postFragment.appendChild(postsFragments);
