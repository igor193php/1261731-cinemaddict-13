import {createElement} from "../../utils.js";

const createParagraph = () => {
  return `<p>130 291 movies inside</p>`;
};


export default class Paragraph {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createParagraph();
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
