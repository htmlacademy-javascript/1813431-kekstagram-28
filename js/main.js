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

const getRandomInteger = (minNumber, maxNumber) => {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
};

// console.log(getRandomInteger(3, 6));

const createPhotoDescription = () => {
  const randomInteger = getRandomInteger(1, 25);

  return {
    id: randomInteger,
    url: `photos/${randomInteger}`,
    // description: '',
    // likes:
  };
};

// console.log(createPhotoDescription());

const createPhotoInfo = Array.from({ length: 25 }, createPhotoDescription);

console.log(createPhotoInfo);

// const getRandomInteger = (a, b) => {
//   const lower = Math.ceil(Math.min(a, b));
//   const upper = Math.floor(Math.max(a, b));
//   const result = Math.random() * (upper - lower + 1) + lower;
//   return Math.floor(result);
// };
