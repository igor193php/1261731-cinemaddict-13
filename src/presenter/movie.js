import FilmCard from "../view/index/film-card.js";
import Popup from "./popup.js";
import {render, RenderPosition} from "../utils";

export default class Movie {
  constructor(filmListContainer) {
    this._filmListContainer = filmListContainer;

    this._filmCardComponent = null;
  }

  init(film) {

    this._filmCardComponent = new FilmCard(film);
    this._poupComponent = new Popup(film);

    this._renderCard();
  }

  _renderCard() {
    render(this._filmListContainer, this._filmCardComponent, RenderPosition.BEFOREEND);
  }

}
