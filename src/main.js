import {renderIndex} from "./engine/render-index.js";
import {renderPopup} from "./engine/render-popup.js";

renderIndex();

const filmCardElement = document.querySelector(`.film-card__poster`);


filmCardElement.addEventListener(`click`, renderPopup);
