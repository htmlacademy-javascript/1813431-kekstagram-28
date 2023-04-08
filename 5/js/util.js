// Выбор случайного числа из диапазоне

const getRandomInteger = (minNumber, maxNumber) =>
  Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

// Выбор неповторяющегося числа

const getUniqueValue = (min, max) => {
  const previousValue = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValue.length >= (max - min + 1)) {
      return null;
    }
    while (previousValue.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValue.push(currentValue);
    return currentValue;
  };
};

const createUniqueValue = getUniqueValue(1, 25);

// Выбор случайного элемента массива

const getRandomArrayElement = (array) =>
  array[getRandomInteger(0, array.length - 1)];

export { getRandomInteger, createUniqueValue, getRandomArrayElement };
