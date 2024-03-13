//Функция создания числа из диапазона чисел
const createRandomNumber = (min, max) => {
  const minNumber = Math.ceil(Math.min(min, max));
  const maxNumber = Math.ceil(Math.max(min, max));
  const result = Math.random() * (maxNumber - minNumber + 1) + minNumber;
  return Math.floor(result);
};

export {createRandomNumber};

//Получение случайного элемента массива
const getRandomArrayElement = (elements) => elements[createRandomNumber(0, elements.length - 1)];

export {getRandomArrayElement};

// Создание уникального ID
const createRandomNoRepeatInteger = (min, max) => {
  const idValue = [];
  return function () {
    let currentValue = createRandomNumber (min, max);
    if (idValue.length >= (max - min + 1)) {
      return null;
    }
    while(idValue.includes(currentValue)) {
      currentValue = createRandomNumber (min, max);
    }
    idValue.push(currentValue);
    return currentValue;
  };
};

export {createRandomNoRepeatInteger};
