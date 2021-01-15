import FilmList from "../view/index/film-list.js";
import FilmCard from "../view/index/film-card.js";
import ButtonShowMore from "../view/index/button-show-more.js";
import EmptyList from "../view/index/empty-list.js";
import {render, RenderPosition} from "../utils";

const FILM_COUNT_RER_STEP = 5;

export default class MovieList {
  constructor(listContainer) {
    this._listContainer = listContainer;

    this._filmListComponent = new FilmList();
    this._buttonShowMoreComponent = new ButtonShowMore();
    this._emptyListComponent = new EmptyList();
  }

  init(films) {
    this._films = films;
    this._renderFilmList(this._films);
  }

  _renderEmptyList() {
    render(this._listContainer, this._emptyListComponent, RenderPosition.BEFOREEND);
  }

  _upPopupPage() {
    const filmCardElement = document.querySelector(`.film-card`);
    filmCardElement.addEventListener(`click`, this._renderPopup());
  }

  _renderPopup() {
    const bodyElement = document.querySelector(`body`);
    evt.preventDefault();
    if (evt.target.matches(`.film-card__poster`) || evt.target.matches(`.film-card__title`) || evt.target.matches(`.film-card__comments`)) {
      const idFilm = +filmCardElement.getAttribute(`id`);

      films.forEach((value) => {
        if (value.id === idFilm) {
          film = value;
        }
      });
      bodyElement.classList.add(`hide-overflow`);
      renderPopup(film);
  }
}

  _handleGetPopup() {
    this._upPopupPage();
  }

  _renderTemplateList() {
    render(this._listContainer, this._filmListComponent, RenderPosition.BEFOREEND);
  }

  _renderFilmList(films) {
    if (films === null || films === 0) {
      this._renderEmptyList();
    } else {
      this._renderTemplateList();
      this._renderFilmCards();
    }

    if (films.length > FILM_COUNT_RER_STEP) {
      this._renderShowMoreButton();
    }
  }

  _renderFilmCards() {
    for (let i = 0; i < Math.min(this._films.length, FILM_COUNT_RER_STEP); i++) {
      render(this._filmListComponent, new FilmCard(this._films[i]), RenderPosition.BEFOREEND);
    }
  }

  _renderShowMoreButton() {
    let renderedFilmCount = FILM_COUNT_RER_STEP;

    const showMoreButtonComponent = this._buttonShowMoreComponent;
    render(this._listContainer, showMoreButtonComponent, RenderPosition.BEFOREEND);

    showMoreButtonComponent.setClickHandler(() => {
      this._films
        .slice(renderedFilmCount, renderedFilmCount + FILM_COUNT_RER_STEP)
        .forEach((film) => render(this._filmListComponent, new FilmCard(film), RenderPosition.BEFOREEND));

      renderedFilmCount += FILM_COUNT_RER_STEP;

      if (renderedFilmCount >= this._films.length) {
        showMoreButtonComponent.getElement().remove();
        showMoreButtonComponent.removeElement();
      }

    });
  }

}
