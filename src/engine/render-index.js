import {createProfileRatingTemplate} from "../view/index/profile-rating.js";
import {createMainNavigationTemplate} from "../view/index/main-navigation.js";
import {createSortTemplate} from "../view/index/sort.js";
import {createFilmList} from "../view/index/film-list.js";
import {createFilmCard} from "../view/index/film-card.js";
import ButtonShowMore from "../view/index/button-show-more.js";
import {createParagraph} from "../view/index/paragraph.js";
import {render, renderElement, RenderPosition} from "../utils";

const FILM_COUNT_RER_STEP = 5;

const renderIndex = (films, user, filters) => {

  const siteHeaderElement = document.querySelector(`.header`);
  const siteMainElement = document.querySelector(`.main`);
  const siteFooterStaticsElement = document.querySelector(`.footer__statistics`);

  render(siteHeaderElement, createProfileRatingTemplate(user), `beforeend`);
  render(siteMainElement, createMainNavigationTemplate(filters), `beforeend`);
  render(siteMainElement, createSortTemplate(), `beforeend`);
  render(siteMainElement, createFilmList(), `beforeend`);

  const siteFilmListContainerElement = document.querySelector(`.films-list__container`);
  const siteFilmListElement = document.querySelector(`.films-list`);

  for (let i = 0; i < Math.min(films.length, FILM_COUNT_RER_STEP); i++) {
    render(siteFilmListContainerElement, createFilmCard(films[i]), `beforeend`);
  }

  if (films.length > FILM_COUNT_RER_STEP) {
    let renderedFilmCount = FILM_COUNT_RER_STEP;

    const showMoreButtonComponent = new ButtonShowMore();
    renderElement(siteFilmListElement, showMoreButtonComponent.getElement(), RenderPosition.BEFOREEND);

    showMoreButtonComponent.getElement().addEventListener(`click`, (evt) => {
      evt.preventDefault();

      films
        .slice(renderedFilmCount, renderedFilmCount + FILM_COUNT_RER_STEP)
        .forEach((film) => render(siteFilmListContainerElement, createFilmCard(film), `beforeend`));

      renderedFilmCount += FILM_COUNT_RER_STEP;

      if (renderedFilmCount >= films.length) {
        showMoreButtonComponent.getElement().remove();
        showMoreButtonComponent.removeElement();
      }

    });
  }

  render(siteFooterStaticsElement, createParagraph(), `beforeend`);

};

export {renderIndex};
