// Функция из интернета по генерации случайного числа из диапазона
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomItem = (arrayItems) => {
  const randomIndex = getRandomInteger(0, arrayItems.length - 1);

  return arrayItems[randomIndex];
};

const getListItems = (arrayItems) => {
  const randomIdex = getRandomInteger(1, arrayItems.length - 1);
  let result = new Set();

  for (let i = 0; i <= randomIdex; i++) {
    result.add(arrayItems[i]);
  }

  result = Array.from(result);

  return result;

};

export {getRandomItem, getRandomInteger, getListItems};
