// Импортирует модуль для генерации данных
import { createPhotoCards } from './data.js';
// Импортирует модуль генерации случайного целого числа и максимальное
// количество комментариев
import { getRandomInteger } from './util.js';
import { COMMENT_COUNT } from './data.js';

// Сюда отрисуем миниатюры
const picturesList = document.querySelector('.pictures');

// Находим шаблон
const miniPhotoTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const miniPhotos = createPhotoCards();

const picturesListFragment = document.createDocumentFragment();

// Клонируем шаблон и отрисовываем в списке
miniPhotos.forEach(({miniPhoto}) => {
  const miniPhotoElement = miniPhotoTemplate.cloneNode(true);
  miniPhotoElement.querySelector('.picture__img').src = miniPhoto.url;
  miniPhotoElement.querySelector('.picture__likes').textContent = miniPhoto.likes;
  miniPhotoElement.querySelector('.picture__comments').textContent = getRandomInteger(1, COMMENT_COUNT);
  picturesListFragment.appendChild(miniPhotoElement);
});

picturesList.appendChild(picturesListFragment);


/*
На основе временных данных для разработки и шаблона #picture
создайте DOM-элементы, соответствующие фотографиям, и заполните их данными:

- Адрес изображения url подставьте как атрибут src изображения.
- Количество лайков likes выведите в блок .picture__likes.
- Количество комментариев comments выведите в блок .picture__comments.

Отрисуйте сгенерированные DOM-элементы в блок .pictures. Для вставки элементов
используйте DocumentFragment.
*/
