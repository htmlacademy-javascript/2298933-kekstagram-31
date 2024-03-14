import {createRandomNumber, getRandomArrayElement, createRandomNoRepeatInteger} from './util.js';

//Массив имён
const USER_NAMES = [
  'Данька',
  'Ярослав',
  'Егор',
  'Азат',
  'Балабама',
  'Алиса',
  'Оля',
  'Анжела',
  'Тамара',
  'Аня',
  'Нюра'
];

//Масив сообщений
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

//Масив описания картинок
const DESCRIPTIONS = [
  'Котек',
  'Котеки',
  'Дед познает сленг',
  'Это был момент',
  'Это мог бы момент, но момент уже был'
];

//Создает обьек коментариев
const COMMENT_ID = createRandomNoRepeatInteger(1, 30);
const createrComments = () => {
  const COMMENT = {
    id: COMMENT_ID(),
    avatar: `img/avatar-${createRandomNumber(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(USER_NAMES)
  };
  return COMMENT;
};

//Создает обьек поста
const POST_ID = createRandomNoRepeatInteger(1, 25);
const URL_ID = createRandomNoRepeatInteger(1, 25);
const createPost = () =>{
  const post = {
    id: POST_ID(),
    url: `photos/${URL_ID()}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: createRandomNumber(15, 200),
    comments: Array.from({length: createRandomNumber(0, 30)}, createrComments)
  };
  return post;
};

const POSTS = Array.from({length: 25}, createPost);

export {POSTS};
