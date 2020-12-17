import {createElement} from "../../utils.js";

const createDetailsInPopup = (film) => {
  const {
    poster,
    APPROPRIATE_AGE,
    name,
    originalName,
    rate,
    director,
    screenwriters,
    actors,
    length,
    country,
    type,
    fullDescription
  } = film;

  const writers = screenwriters.join(`, `);
  const actor = actors.join(`, `);

  return `<div class="film-details__info-wrap">
  <div class="film-details__poster">
  <img class="film-details__poster-img" src="${poster}" alt="">

  <p class="film-details__age">${APPROPRIATE_AGE}</p>
  </div>

  <div class="film-details__info">
  <div class="film-details__info-head">
  <div class="film-details__title-wrap">
  <h3 class="film-details__title">${name}</h3>
<p class="film-details__title-original">${originalName}</p>
</div>

<div class="film-details__rating">
  <p class="film-details__total-rating">${rate}</p>
  </div>
  </div>

  <table class="film-details__table">
  <tr class="film-details__row">
  <td class="film-details__term">Director</td>
  <td class="film-details__cell">${director}</td>
</tr>
<tr class="film-details__row">
  <td class="film-details__term">Writers</td>
  <td class="film-details__cell">${writers}</td>
</tr>
<tr class="film-details__row">
  <td class="film-details__term">Actors</td>
  <td class="film-details__cell">${actor}</td>
</tr>
<tr class="film-details__row">
  <td class="film-details__term">Release Date</td>
<td class="film-details__cell">30 March 1945</td>
</tr>
<tr class="film-details__row">
  <td class="film-details__term">Runtime</td>
  <td class="film-details__cell">${length}</td>
</tr>
<tr class="film-details__row">
  <td class="film-details__term">Country</td>
  <td class="film-details__cell">${country}</td>
  </tr>
  <tr class="film-details__row">
  <td class="film-details__term">Genres</td>
  <td class="film-details__cell">
  <span class="film-details__genre">${type}</span>
  </td>
</tr>
</table>

<p class="film-details__film-description">
  ${fullDescription}
</p>
</div>
</div>`
};


export default class DetailsInPopup {
  constructor(film) {
    this._film = film;
    this._element = null;
  }

  getTemplate() {
    return createDetailsInPopup(this._film);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
