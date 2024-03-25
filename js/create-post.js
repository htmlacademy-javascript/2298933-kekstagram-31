import {USER_NAMES, MESSAGES, DESCRIPTIONS} from './data.js';
import {createRandomNoRepeatInteger, createRandomNumber, getRandomArrayElement} from './util.js';

const POSTS_LENGTH = 25;

//Создает обьек коментариев
const COMMENT_ID = createRandomNoRepeatInteger(1, 3000);
const createrComments = () => {
  const COMMENT = {
    id: COMMENT_ID,
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
    avatar: `img/avatar-${createRandomNumber(1, 6)}.svg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: createRandomNumber(15, 200),
    comments: Array.from({length: createRandomNumber(0, 30)}, createrComments)
  };
  return post;
};

const POSTS = Array.from({length: POSTS_LENGTH}, createPost);

//-----------------------------------------------------------
const FUN_URL = [
  'fun/thisispower.png',
  'fun/hey-vergil.png',
  'fun/saska-baby.jpg',
  'fun/dio.jpg',
  'fun/gul.jpg',
];

const FUN_DESCRIPTIONS = [
  'THIS IS POWER!',
  'Hey Vergil your portal opening days are over, give me the Yamato',
  'It’s a boy',
  'THUGI WA JOTARO, KISAMA DA!',
  'Oshiete, oshiete yo, sono shikumi wo',
];

const FUN_POST_ID = createRandomNoRepeatInteger(3000, 8000);

const createFunPost = (url, description, likes) => {
  const funPost = {};
  funPost.url = url;
  funPost.id = FUN_POST_ID();
  funPost.description = description;
  funPost.likes = likes;
  return funPost;
};

const FUN_COMMENTS_ID = createRandomNoRepeatInteger(26, 100);

const createFunComments = (avatarUrl, avatarName, comments) =>{
  const COMMENTS = [];
  for (let i = 0; comments.length > i; i++){
    const comment = {};
    comment.id = FUN_COMMENTS_ID;
    comment.avatar = avatarUrl[i];
    comment.message = comments[i];
    comment.name = avatarName[i];
    COMMENTS.push(comment);
  }
  return COMMENTS;
};

//-------THIS IS POWER----------
const FUN_AVATARS_NAMES_VERGIL = [
  'Power',
  'El_Dante',
  'Vergil'
];

const FUN_COMMENTS_VERGIL = [
  'HEY! LET ME GO!',
  'Hah...ha ha ha',
  'Stop lavding'
];

const FUN_AVATARS_VERGIL = [
  'fun/power-avatar.png',
  'fun/dante-avatar.png',
  'fun/vergil-avatar.png'
];

const VERGIL = createFunPost(FUN_URL[0], FUN_DESCRIPTIONS[0], 1);
VERGIL.comments = createFunComments(FUN_AVATARS_VERGIL, FUN_AVATARS_NAMES_VERGIL, FUN_COMMENTS_VERGIL);
VERGIL.avatar = 'fun/vergil-avatar.png';

//HEY VERGIL
const HEY_VERGIL_NAME = [
  'Vergil',
  'El_Dante',
];

const HEY_VERGIL_COMMENTS = [
  'If you want it then you’ll have to take it, But you already knew that',
  'I had a feeling youd say that...'
];

const HEY_VERGIL_AVATARS = [
  'fun/vergil-avatar.png',
  'fun/dante-avatar.png',
];

const HEY_VERGIL = createFunPost(FUN_URL[1], FUN_DESCRIPTIONS[1], 4);
HEY_VERGIL.comments = createFunComments(HEY_VERGIL_AVATARS, HEY_VERGIL_NAME, HEY_VERGIL_COMMENTS);
HEY_VERGIL.avatar = 'fun/dante-avatar.png';


//NARUTOOOOOO
const NARUTOOOOOO_NAME = [
  'Kushina',
  'Naruto',
  'Sasuke',
];

const NARUTOOOOOO_COMMENTS = [
  'What’s his name?',
  'SASUKEEEEEEEEEEEEEEE!!!',
  'NARUTOOOOOOOOOOOOOOO!!!',
];

const NARUTOOOOOO_AVATARS = [
  'fun/kushina-avatar.png',
  'fun/naruto-avatar.png',
  'fun/saska-avatar.png',
];

const NARUTOOOOOO = createFunPost(FUN_URL[2], FUN_DESCRIPTIONS[2], createRandomNumber(15, 200));
NARUTOOOOOO.comments = createFunComments(NARUTOOOOOO_AVATARS, NARUTOOOOOO_NAME, NARUTOOOOOO_COMMENTS);
NARUTOOOOOO.avatar = 'fun/sasuke-mom.png';

//DIO
const DIO_NAME = [
  'Jotaro',
  'Dio',
  'Jotaro',
  'Dio',
];

const DIO_COMMENTS = [
  'YAROU... DIO!',
  'HO... MUKATTA KURUNO KA? NIGETSU NI KONO DIO NI CHIKAZUITE KURUNO KA? SEKKAKU SOFU NO JOSEFU GA, WATASHI NO ZA WARUDO NO SHOTAI WO. SHIKEN SHURYU CHAMI CHOKUZEN MADE MONDAI YO TOITTE IRU JUKENSEE NE YOU NA? KISSHI KOITA KIBUN DE WO SHIETEKURE TA TO YUU NO NI?',
  'CHIKADZU KANAKA, TEME WO BUCHI NO ME TENAIN DE NA.',
  'HOHO! DEWA JUUBUN CHIKAZUKANAI YOUI.',
];

const DIO_AVATARS = [
  'fun/jotaro-avatar.jpg',
  'fun/dio-avatar.jpg',
  'fun/jotaro-avatar.jpg',
  'fun/dio-avatar.jpg',
];

const DIO = createFunPost(FUN_URL[3], FUN_DESCRIPTIONS[3], createRandomNumber(15, 200));
DIO.comments = createFunComments(DIO_AVATARS, DIO_NAME, DIO_COMMENTS);
DIO.avatar = 'fun/dio-avatar.jpg';

//Ошихетео Ощихетеооо----------------------------------------------------------
const GUL_NAME = [
  'Kaneki',
  'Dead Inside',
  'ZXC 1000-7',
];

const GUL_COMMENTS = [
  'Boku no naka ni, dare ka iru no?',
  'Kowareta kowareta yo, kono sekai de',
  'Kimi ga warau, nani mo miezu ni',
];

const GUL_AVATARS = [
  'fun/kaneki-avatar.jpg',
  'fun/dead-inside-avatar.jpg',
  'fun/zxc-avatar.jpg',
];

const GUL = createFunPost(FUN_URL[4], FUN_DESCRIPTIONS[4], createRandomNumber(15, 200));
GUL.comments = createFunComments(GUL_AVATARS, GUL_NAME, GUL_COMMENTS);
GUL.avatar = 'fun/kaneki-avatar.jpg';

//----------------------------------------------------------
const FUN_RANDOM_ARR_NUMBER = createRandomNoRepeatInteger(0, 24);
POSTS[FUN_RANDOM_ARR_NUMBER()] = VERGIL;
POSTS[FUN_RANDOM_ARR_NUMBER()] = HEY_VERGIL;
POSTS[FUN_RANDOM_ARR_NUMBER()] = NARUTOOOOOO;
POSTS[FUN_RANDOM_ARR_NUMBER()] = DIO;
POSTS[FUN_RANDOM_ARR_NUMBER()] = GUL;
//---------------------------------------------------------------------------------------

export {POSTS};
