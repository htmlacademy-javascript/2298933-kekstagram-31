//Функция для проверки длины строки
const checkString = (string, length) => {
  const result = string.length <= length;
  return result;
};

console.log("1 " + checkString('stroke', 10)); // true
console.log("2 " + checkString('stroke', 6)); // true
console.log("3 " + checkString('stroke', 4)); // false

//------------------------------------------------------
//Функция для проверки, является ли строка палиндромом
const checkPalidrome = (string) => {
  string = string.toLowerCase().replaceAll(' ', '');
  const newString = string;
  let result = '';
  for (let i = newString.length - 1; i >= 0; i--) {
    result += newString[i];
  }
  return result === newString;
};

console.log("1 " + checkPalidrome('топот'));
console.log("2 " + checkPalidrome('Лёша на полке клопа нашёл '));
console.log("3 " + checkPalidrome('Кекс'));

//---------------------------------------------------------------------------------
//Функция ввывода чисел из строки

const getNumber = (string) => {
  string = string.toString();
  let numberString;
  let result = '';
  for (let i = 0; string.length - 1 >= i; i++) {
    numberString = parseInt(string[i]);
    if (!Number.isNaN(numberString)) {
      result += numberString;
    }
  }
  return result;
};

console.log("1 " + getNumber('2023 год 22'));
console.log("2 " + getNumber('ECMAScript 2022 22'));
console.log("3 " + getNumber(-1.2));
