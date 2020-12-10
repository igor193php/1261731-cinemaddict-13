import {getRandomItem, getRandomInteger, getListItems} from "../utils.js";
import {
  TYPE_FILM,
  YEAR_LOW,
  YEAR_HIGH,
  APPROPRIATE_AGE,
  NAMES_FILMS,
  POSTERS,
  SHOT_DESCRIPTIONS,
  FULL_DESCRIPTIONS,
  ACTORS,
  SRCEEN_WRITERS,
  DIRECTORS,
  COUNTRIES
} from "./const";

export const generateFilm = () => {

  const randomHour = getRandomInteger(1, 3);
  const randomMin = getRandomInteger(0, 59);

  return {
    poster: getRandomItem(POSTERS),
    name: getRandomItem(NAMES_FILMS),
    rate: getRandomInteger(0, 10),
    year: getRandomInteger(YEAR_LOW, YEAR_HIGH),
    length: randomHour + `h ` + randomMin + `m`,
    type: getRandomItem(TYPE_FILM),
    shotDescription: getRandomItem(SHOT_DESCRIPTIONS),
    totalComments: getRandomInteger(0, 5),
    originalName: getRandomItem(NAMES_FILMS),
    director: getRandomItem(DIRECTORS),
    screenwriters: getListItems(SRCEEN_WRITERS),
    actors: getListItems(ACTORS),
    country: getRandomItem(COUNTRIES),
    fullDescription: getRandomItem(FULL_DESCRIPTIONS),
    APPROPRIATE_AGE,
    watchlist: Boolean(getRandomInteger(0, 1)),
    watched: Boolean(getRandomInteger(0, 1)),
    favorite: Boolean(getRandomInteger(0, 1))
  };

};
