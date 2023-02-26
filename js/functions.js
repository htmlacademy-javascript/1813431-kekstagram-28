// Задание № 1

// С помощью JavaScript настраивается проверка длины строки.

// Функция принимает строку и число (максимальную длину)
// Если строка меньше указанной длины, тогда true
// Если строка больше укащанной длины, тогда false

const checkString = (string, maxLength) => {
  if (string.length <= maxLength) {
    return true;
  }
  return false;
};

(checkString('проверяемая строка', 18));

