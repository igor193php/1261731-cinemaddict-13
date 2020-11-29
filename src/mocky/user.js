import {getRandomItem, getRandomInteger} from "../utils.js";
import {TYPE_FILM, RANKS_USER, NAMES_USER} from "./const";

const NUMBER_WATCH_FILM_MIN = 0;
const NUMBER_WATCH_FILM_MAX = 300;

const getRankUser = (numberWatchedFilms) => {
  let rankUser = ``;

  if (numberWatchedFilms >= 1 && numberWatchedFilms <= 10) {
    rankUser = RANKS_USER[0];
  }

  if (numberWatchedFilms >= 11 && numberWatchedFilms <= 20) {
    rankUser = RANKS_USER[1];
  }

  if (numberWatchedFilms >= 21) {
    rankUser = RANKS_USER[2];
  }

  return rankUser;
};

export const generateUser = () => {
  const lengthFilmInHour = 2;

  const numberWatchedFilms = getRandomInteger(NUMBER_WATCH_FILM_MIN, NUMBER_WATCH_FILM_MAX);
  const rank = getRankUser(numberWatchedFilms);
  const timeWatchedInHour = numberWatchedFilms * lengthFilmInHour;
  const timeWatchedInMin = getRandomInteger(0, 59);

  return {
    name: getRandomItem(NAMES_USER),
    numberWatchedFilms,
    rank,
    timeWatched: timeWatchedInHour + `h ` + timeWatchedInMin + `m`,
    favoriteTypeOfFilm: getRandomItem(TYPE_FILM)
  };

};

