import {createElement} from "../utils";

export default class ViewAbstract {
  constructor() {
    if (new.target === ViewAbstract) {
      throw new Error(`Can't instantiate ViewAbstract, only concrete one.`);
    }

    this._element = null;
  }

  getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate`);
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