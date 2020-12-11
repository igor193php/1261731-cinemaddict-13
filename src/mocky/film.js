import {getRandomItem, getRandomInteger, getListItems, getRandomLengthFilm} from "../utils.js";
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

const START_ID = 1;
const END_ID = 10000;

const START_RATE = 0;
const END_RATE = 10;

const START_COMMENT = 0;
const END_COMMENT = 5;

export const generateFilm = () => {

  return {
    id: getRandomInteger(START_ID, END_ID),
    poster: getRandomItem(POSTERS),
    name: getRandomItem(NAMES_FILMS),
    rate: getRandomInteger(START_RATE, END_RATE),
    year: getRandomInteger(YEAR_LOW, YEAR_HIGH),
    length: getRandomLengthFilm,
    type: getRandomItem(TYPE_FILM),
    shotDescription: getRandomItem(SHOT_DESCRIPTIONS),
    totalComments: getRandomInteger(START_COMMENT, END_COMMENT),
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
