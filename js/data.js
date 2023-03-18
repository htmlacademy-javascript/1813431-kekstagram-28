import { getRandomInteger, createUniqueValue, getRandomArrayElement } from './util';

//  Создать массив из 25 сгенерированных объектов

const DESCRIPTIONS = [
  'Описание 1',
  'Описание 2',
  'Описание 3',
  'Описание 4',
  'Описание 5',
  'Описание 6',
  'Описание 7',
  'Описание 8',
  'Описание 9',
  'Описание 10',
  'Описание 11',
  'Описание 12',
  'Описание 13',
  'Описание 14',
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAMES = [
  'Вова',
  'Стёпа',
  'Лиза',
  'Марина',
  'Саша',
  'Артём',
  'Лёша',
  'Влад'
];

const PHOTO_CARDS_COUNT = 25;
const AVATAR_COUNT = 6;
const MIN_LIKE_COUNT = 15;
const MAX_LIKE_COUNT = 200;
const COMMENT_COUNT = 5;

// Генерирует id по возрастанию, начиная с 1

const getIdGenerator = () => {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generateCommentId = getIdGenerator();

// Генерация комментария к фото

const getComments = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

// Генерация информации о фото

const createPhotoDescription = () => {
  const uniqueValue = createUniqueValue();

  return {
    id: uniqueValue,
    url: `photos/${uniqueValue}`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(MIN_LIKE_COUNT, MAX_LIKE_COUNT),
    comments: Array.from({ length: getRandomInteger(1, COMMENT_COUNT) }, getComments)
  };
};

// Создание массива из объектов фото

const createPhotoCards = () => Array.from({ length: PHOTO_CARDS_COUNT }, createPhotoDescription);

// createPhotoCards();

export { createPhotoCards };
