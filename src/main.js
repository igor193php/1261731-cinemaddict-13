import {renderIndex} from "./engine/render-index.js";
import {renderPopup} from "./engine/render-popup.js";
import {films, user, filters} from "./engine/data.js";

renderIndex(films, user, filters);

const filmCardElement = document.querySelector(`.film-card__poster`);

filmCardElement.addEventListener(`click`, (evt) => {
  evt.preventDefault();


  renderPopup(film);
});
