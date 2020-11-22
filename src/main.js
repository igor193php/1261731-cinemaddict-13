import {createProfileRatingTemplate} from "./view/profile-rating.js";
import {createMainNavigationTemplate} from "./view/main-navigation.js";
import {createSortTemplate} from "./view/sort.js";
import {createFilmList} from "./view/film-list.js";
import {createFilmCard} from "./view/film-card.js";
import {createButtonShowMore} from "./view/button-show-more.js";
import {createParagraph} from "./view/paragraph.js";

const FILM_CARD_COUNT = 5;

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const siteFooterStaticsElement = document.querySelector(`.footer__statistics`);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

render(siteHeaderElement, createProfileRatingTemplate(), `beforeend`);
render(siteMainElement, createMainNavigationTemplate(), `beforeend`);
render(siteMainElement, createSortTemplate(), `beforeend`);
render(siteMainElement, createFilmList(), `beforeend`);

const siteFilmListContainerElement = document.querySelector(`.films-list__container`);
const siteFilmListElement = document.querySelector(`.films-list`);

for (let i = 0; i < FILM_CARD_COUNT; i++) {
  render(siteFilmListContainerElement, createFilmCard(), `beforeend`);
}

render(siteFilmListElement, createButtonShowMore(), `beforeend`);
render(siteFooterStaticsElement, createParagraph(), `beforeend`);
