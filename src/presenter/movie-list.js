import FilmList from "../view/index/film-list.js";
import ButtonShowMore from "../view/index/button-show-more.js";
import EmptyList from "../view/index/empty-list.js";
import Movie from "./movie";
import {render, remove, RenderPosition} from "../utils";
import SortTemplate from "../view/index/sort";
import MainNavigationTemplate from "../view/index/main-navigation";
import {filters} from "../engine/data";

const FILM_COUNT_RER_STEP = 5;

export default class MovieList {
  constructor(listContainer) {
    this._listContainer = listContainer;
    this._renderedFilmCount = FILM_COUNT_RER_STEP;

    this._filmListComponent = new FilmList();
    this._buttonShowMoreComponent = new ButtonShowMore();
    this._emptyListComponent = new EmptyList();
    this._sortComponent = new SortTemplate();
    this._mainNavigationComponent = new MainNavigationTemplate(filters);

    this._handleShowMoreButtonClick = this._handleShowMoreButtonClick.bind(this);
  }

  init(films) {
    this._films = films;
    this._renderFilmList(this._films);
  }

  _renderEmptyList() {
    render(this._listContainer, this._emptyListComponent, RenderPosition.BEFOREEND);
  }

  _renderTemplateList() {
    render(this._listContainer, this._filmListComponent, RenderPosition.BEFOREEND);
  }

  _renderFilmList(films) {
    if (films === null || films === 0) {
      this._renderEmptyList();
    } else {
      this._renderMainNavigation();
      this._renderFilter();
      this._renderTemplateList();
      this._renderCardList();
    }
  }

  _renderFilter() {
    render(this._listContainer, this._sortComponent, RenderPosition.BEFOREEND);
  }

  _renderMainNavigation() {
    render(this._listContainer, this._mainNavigationComponent, RenderPosition.BEFOREEND);
  }

  _renderFilmCard(film) {
    const filmCardPresenter = new Movie(this._filmListComponent);
    filmCardPresenter.init(film);
  }

  _renderFilms(from, to) {
    this._films
      .slice(from, to)
      .forEach((film) => this._renderFilmCard(film));
  }

  _renderCardList() {
    this._renderFilms(0, Math.min(this._films.length, FILM_COUNT_RER_STEP));

    if (this._films.length > FILM_COUNT_RER_STEP) {
      this._renderShowMoreButton();
    }
  }

  _handleShowMoreButtonClick() {
    this._renderFilms(this._renderedFilmCount, this._renderedFilmCount + FILM_COUNT_RER_STEP);
    this._renderedFilmCount += FILM_COUNT_RER_STEP;

    if (this._renderedFilmCount >= this._films.length) {
      remove(this._buttonShowMoreComponent);
    }
  }

  _renderShowMoreButton() {
    render(this._listContainer, this._buttonShowMoreComponent, RenderPosition.BEFOREEND);

    this._buttonShowMoreComponent.setClickHandler(this._handleShowMoreButtonClick);

  }

}
