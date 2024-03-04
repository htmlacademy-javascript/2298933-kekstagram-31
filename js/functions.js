//Функция перевода часов в минуты с 2мя элементами массива
const conversionToMinutes = (time) => {
  time = Number((time[0] * 60)) + Number(time[1]);
  return time;
};

//функция расчета попадания в рабочее время для ивентов
const getTiming = (workStart, workEnd, eventStart, eventTime) => {
  let result = false;
  workStart = workStart.split(':');
  workEnd = workEnd.split(':');
  eventStart = eventStart.split(':');

  workStart = conversionToMinutes(workStart);
  workEnd = conversionToMinutes(workEnd);
  eventStart = conversionToMinutes(eventStart);
  eventTime += eventStart;

  if (eventTime >= workStart && eventTime <= workEnd){
    result = true;
  }
  return result;
};

getTiming();

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
  let result = ' ';
  for (let i = 0; string.length - 1 >= i; i++) {
    numberString = parseInt(string[i], 10);
    if (!Number.isNaN(numberString)) {
      result += numberString;
    }
  }

  return Number(result);
};

getNumber();
