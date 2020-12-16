import {createElement} from "../../utils.js";

const createFilmList = () => {
  return `<section class="films">
    <section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>

      <div class="films-list__container">

      </div>
</section>
    </section>`;
};

export default class FilmList {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFilmList();
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
