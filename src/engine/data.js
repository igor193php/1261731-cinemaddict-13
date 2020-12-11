import {generateFilm} from "../mocky/film.js";
import {generateUser} from "../mocky/user.js";
import {generateFilter} from "../mocky/filter.js";

const FILM_CARD_COUNT = 20;

const films = new Array(FILM_CARD_COUNT).fill().map(generateFilm);
console.log(films);

const user = generateUser();
  const filters = generateFilter(films);
  console.log(filters);

  export {films, user, films};
