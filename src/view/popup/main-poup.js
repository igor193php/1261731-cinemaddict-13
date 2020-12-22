import {createElement} from "../../utils.js";

const createMainInPoup = () => {
  return `<section class="film-details">
  <form class="film-details__inner" action="" method="get">
    <div class="film-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>

    </div>

    <div class="film-details__bottom-container">

    </div>
  </form>
</section>`;
};

export default class MainInPoup {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createMainInPoup();
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
