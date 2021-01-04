import ViewAbstract from "./main-classes/view-abstract";

const KEY_ESC = 27;
const KEY_ENTER = 13;

const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  AFTEREND: `afterend`,
  BEFOREEND: `beforeend`
};

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const render = (container, child, place) => {
  if (container instanceof ViewAbstract) {
    container = container.getElement();
  }

  if (child instanceof ViewAbstract) {
    child = child.getElement();
  }

  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(child);
      break;
    case RenderPosition.BEFOREEND:
      container.append(child);
      break;
  }
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
  document.addEventListener(`keydown`, function (evt) {
    if (evt.keyCode === KEY_ESC) {
      hiddenElement();
    }
  });
};

const getRandomLengthFilm = () => {
  const MIN_LENGTH_FILM = 60;
  const MAX_LENGTH_FILM = 360;
  const filmLengthInMin = getRandomInteger(MIN_LENGTH_FILM, MAX_LENGTH_FILM);
  const ONE_HOUR_IN_MIN = 60;
  const randomHour = filmLengthInMin / ONE_HOUR_IN_MIN;
  const randomMin = filmLengthInMin % ONE_HOUR_IN_MIN;

  return Math.floor(randomHour) + `h ` + Math.floor(randomMin) + `m`;

};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstElementChild;
};

export {getRandomItem,
  getRandomInteger,
  getListItems,
  render,
  closeWindow,
  getRandomLengthFilm,
  createElement,
  RenderPosition};
