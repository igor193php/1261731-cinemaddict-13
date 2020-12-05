const KEY_ESC = 27;
const KEY_ENTER = 13;

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
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

const closeWindow = (buttonCloseWindowElement, popupWindowElement) => {
  const hiddenElement = () => {
    popupWindowElement.hidden = true;
  };

  buttonCloseWindowElement.addEventListener(`click`, hiddenElement);
  buttonCloseWindowElement.addEventListener(`keydown`, function (evt) {
    if (evt.keyCode === KEY_ESC) {
      hiddenElement();
    }
  });
};

export {getRandomItem, getRandomInteger, getListItems, render, closeWindow};
