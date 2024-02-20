//Функция для проверки длины строки
const checkString = (string, length) => {
  const result = string.length <= length;
  return result;
};

checkString();

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

checkPalidrome();

//---------------------------------------------------------------------------------
//Функция ввывода чисел из строки

const getNumber = (string) => {
  string = string.toString();
  let numberString = '';
  let result = '';
  for (let i = 0; string.length - 1 >= i; i++) {
    numberString = parseInt(string[i], 10);
    if (!Number.isNaN(numberString)) {
      result += numberString;
    }
  }

  return result === '' ? NaN : result;
};

getNumber();
