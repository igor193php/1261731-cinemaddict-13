import {generateFilm} from "../mocky/film.js";
import {generateUser} from "../mocky/user.js";
import {generateFilter} from "../mocky/filter.js";
import {FILM_CARD_COUNT} from "../mocky/const.js";


const films = new Array(FILM_CARD_COUNT).fill().map(generateFilm);

const user = generateUser();
const filters = generateFilter(films);


export {films, user, filters};
