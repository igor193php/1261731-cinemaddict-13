import ViewAbstract from "../../main-classes/view-abstract";

const createFilmCard = (film) => {
  const {id, name, rate, year, type, poster, length, shotDescription, totalComments} = film;

  return `<article class="film-card" id=${id}>
          <h3 class="film-card__title">${name}</h3>
          <p class="film-card__rating">${rate}</p>
          <p class="film-card__info">
            <span class="film-card__year">${year}</span>
            <span class="film-card__duration">${length}</span>
            <span class="film-card__genre">${type}</span>
          </p>
          <img src="${poster}" alt="" class="film-card__poster">
          <p class="film-card__description">${shotDescription}</p>
          <a class="film-card__comments">${totalComments} comments</a>
          <div class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite" type="button">Mark as favorite</button>
          </div>
        </article>`;
};

export default class FilmCard extends ViewAbstract {
  constructor(film) {
    super();
    this._film = film;

    this._cardPosterClickHandler = this._cardPosterClickHandler.bind(this);
    this._cardTitleClickHandler = this._cardTitleClickHandler.bind(this);
    this._cardCommentsClickHandler = this._cardCommentsClickHandler.bind(this);
  }

  getTemplate() {
    return createFilmCard(this._film);
  }

  _cardPosterClickHandler(evt) {
    evt.preventDefault();
    this._callback.cardPoster();
  }

  _cardTitleClickHandler(evt) {
    evt.preventDefault();
    this._callback.cardTitle();
  }

  _cardCommentsClickHandler(evt) {
    evt.preventDefault();
    this._callback.cardComments();
  }

  setFilmCardPosterClickHandler(callback) {
    this._callback.cardPoster = callback;
    this.getElement()
        .querySelector(`.film-card__poster`)
        .addEventListener(`click`, this._cardPosterClickHandler);
  }

  setCardTitleClickHandler(callback) {
    this._callback.cardTitle = callback;
    this.getElement()
        .querySelector(`.film-card__title`)
        .addEventListener(`click`, this._cardTitleClickHandler);
  }

  setCardCommentsClickHandler(callback) {
    this._callback.cardComments = callback;
    this.getElement()
        .querySelector(`.film-card__comments`)
        .addEventListener(`click`, this._cardCommentsClickHandler);
  }

}
