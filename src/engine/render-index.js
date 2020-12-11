import {createProfileRatingTemplate} from "../view/index/profile-rating.js";
import {createMainNavigationTemplate} from "../view/index/main-navigation.js";
import {createSortTemplate} from "../view/index/sort.js";
import {createFilmList} from "../view/index/film-list.js";
import {createFilmCard} from "../view/index/film-card.js";
import {createButtonShowMore} from "../view/index/button-show-more.js";
import {createParagraph} from "../view/index/paragraph.js";
import {render} from "../utils";
import {films, user, films} from "./data.js";


const renderIndex = () => {

  const siteHeaderElement = document.querySelector(`.header`);
  const siteMainElement = document.querySelector(`.main`);
  const siteFooterStaticsElement = document.querySelector(`.footer__statistics`);

  render(siteHeaderElement, createProfileRatingTemplate(user), `beforeend`);
  render(siteMainElement, createMainNavigationTemplate(filters), `beforeend`);
  render(siteMainElement, createSortTemplate(), `beforeend`);
  render(siteMainElement, createFilmList(), `beforeend`);

  const siteFilmListContainerElement = document.querySelector(`.films-list__container`);
  const siteFilmListElement = document.querySelector(`.films-list`);

  for (let i = 0; i < FILM_CARD_COUNT; i++) {
    render(siteFilmListContainerElement, createFilmCard(films[i]), `beforeend`);
  }

  render(siteFilmListElement, createButtonShowMore(), `beforeend`);
  render(siteFooterStaticsElement, createParagraph(), `beforeend`);

};

export {renderIndex};
