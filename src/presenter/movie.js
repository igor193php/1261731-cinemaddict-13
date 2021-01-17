import FilmCard from "../view/index/film-card.js";
import {render, RenderPosition} from "../utils";

export default class Movie {
  constructor(filmListContainer) {
    this._filmListContainer = filmListContainer;

    this._filmCardComponent = null;
  }

  init(film) {

    this._filmCardComponent = new FilmCard(film);

    render(this._filmListContainer, this._filmCardComponent, RenderPosition.BEFOREEND);
  }

}
