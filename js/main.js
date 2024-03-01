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
const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

//Масив описания картинок
const DESCRIPTION = [
  'Котек',
  'Котеки',
  'Дед познает сленг',
  'Это был момент',
  'Это мог бы момент, но момент уже был'
];

//Функция создания числа из диапазона чисел
const createRandomNumber = (min, max) => {
  const minNumber = Math.ceil(Math.min(min, max));
  const maxNumber = Math.ceil(Math.max(min, max));
  const result = Math.random() * (maxNumber - minNumber + 1) + minNumber;
  return Math.floor(result);
};

// Создание уникального ID
const createRandomId = (min, max) => {
  const idValue = [];
  return function () {
    let currentValue = createRandomNumber (min, max);
    if (idValue.length >= (max - min + 1)) {
      return null;
    }
    while(idValue.includes(currentValue)) {
      currentValue = createRandomNumber (min, max);
    }
    idValue.push(currentValue);
    return currentValue;
  };
};

//Присваивание ID переменным
const POST_ID = createRandomId(1, 25);
const COMMENT_ID = createRandomId(1, 30);

//Функция получения элемента массива
const getRandomArrayElement = (elements) => elements[createRandomNumber(0, elements.length - 1)];

const createrComments = () => ({
  id: COMMENT_ID(),
  avatar: `img/avatar-${createRandomNumber(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGE),
  name: getRandomArrayElement(USER_NAMES)
});

const createPost = () => ({
  id: POST_ID(),
  url: `photos/${createRandomNumber(1, 25)}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: createRandomNumber(15, 200),
  comments: Array.from({length: createRandomNumber(0, 30)}, createrComments)
});

const POST = Array.from({length: 25}, createPost);

POST();

// console.log(POST);
