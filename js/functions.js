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

/* const checkString = (string, maxLength) => {
  return string.length <= maxLength;
};*/

/* const checkString = (string, maxLength) => {
    string.length <= maxLength;
};*/

(checkString('проверяемая строка', 18));

// Задание № 2

// Проверка строки на полиндром
// Функция принимает один параметр
// Перед действиями преобразовать строку к одному виду (нижний/верхний регистр)
// Создать переменную с пустой строкой, в которую полодим перевернутое слово
// Цикл от количества символов в исходной строке до 0
// Перевернуть строку справа-налево. На кадом шаге цикла добавлять в новую переменную букву
// Если перевернутая строка = исходной строке, то возвращает true, если нет - false


const isPalindrome = (string) => {
  const tempString = string.toLowerCase();
  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString[i];
  }
  console.log(reverseString);
  if (tempString === reverseString) {
    return true;
  }
  return false;
};

// const isPalindrome = (string) => {
//   const tempString = string.toLowerCase();
//   let reverseString = '';
//   for (let i = tempString.length-1; i >= 0; i--) {
//     reverseString += tempString[i];
//   }
//   if (tempString === reverseString) {
//     return true;
//   } else {
//     return false;
//   }
// }

console.log(isPalindrome('121'));
