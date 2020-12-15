import {renderIndex} from "./engine/render-index.js";
import {renderPopup} from "./engine/render-popup.js";
import {films, user, filters} from "./engine/data.js";

renderIndex(films, user, filters);

const filmCardElement = document.querySelector(`.film-card`);
let film = null;

filmCardElement.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  if (evt.target.matches(`.film-card__poster`)) {
    const idFilm = +filmCardElement.getAttribute(`id`);

    films.forEach((value) => {
      if (value.id === idFilm) {
        film = value;
      }
    });
    renderPopup(film);
  }

});
