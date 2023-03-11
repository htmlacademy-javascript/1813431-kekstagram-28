//  Создать массив из 25 сгенерированных объектов

/*Структура каждого объекта:
- id, число. Идентификатор опубликованной фотографии.
  Это число от 1 до 25. Идентификаторы не должны повторяться.

- url, строка. Адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число
  от 1 до 25. Адреса картинок не должны повторяться.

- description, строка — описание фотографии. Описание придумайте
  самостоятельно.

- likes, число — количество лайков, поставленных фотографии.
  Случайное число от 15 до 200.
*/

const DESCRIPTION = [
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
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAME = [
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

// Выбор случайного числа из диапазоне
const getRandomInteger = (minNumber, maxNumber) => Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

// Выбор случайного элемента массива
const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];


const createPhotoDescription = () => {
  const randomInteger = getRandomInteger(1, 25);

  return {
    id: randomInteger,
    url: `photos/${randomInteger}`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomInteger(15, 200),
    comments: {
      id: getRandomInteger(1, 1000),
      avatar: `img/avatar-${getRandomInteger(1, 6)}`,
      message: getRandomArrayElement(MESSAGE),
      name: getRandomArrayElement(NAME),
    }
  };
};

const createPhotoInfo = Array.from({ length: PHOTO_CARDS_COUNT }, createPhotoDescription);

console.log(createPhotoInfo);

// const getRandomInteger = (a, b) => {
//   const lower = Math.ceil(Math.min(a, b));
//   const upper = Math.floor(Math.max(a, b));
//   const result = Math.random() * (upper - lower + 1) + lower;
//   return Math.floor(result);
// };
