import {createElement} from "../../utils.js";

const createFilterItemTemplate = (filter) => {
  const {name, count} = filter;

  return (
    `<a href="#${name.toLowerCase()}" class="main-navigation__item">${name} <span class="main-navigation__item-count">${count}</span></a>`
  );
};


const createMainNavigationTemplate = (filterItems) => {
  const filterItemsTemplate = filterItems
    .map((filter) => createFilterItemTemplate(filter))
    .join(``);
  const activeClass = `main-navigation__item--active`;

  return `<nav class="main-navigation">
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item ${activeClass}">All movies</a>
    ${filterItemsTemplate}
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`;
};


export default class MainNavigationTemplate {
  constructor(filterItems) {
    this._filterItems = filterItems;
    this._element = null;
  }

  getTemplate() {
    return createMainNavigationTemplate(this._filterItems);
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
