import {renderIndex} from "./src/engine/render-index.js";
import {renderPopup} from "./src/engine/render-popup.js";

renderIndex();

const filmCardElement = document.querySelector(`.film-card__poster`);

filmCardElement.addEventListener(`click`, renderPopup());
