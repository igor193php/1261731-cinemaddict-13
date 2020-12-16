import ProfileRatingTemplate from "../view/index/profile-rating.js";
import MainNavigationTemplate from "../view/index/main-navigation.js";
import SortTemplate from "../view/index/sort.js";
import FilmList from "../view/index/film-list.js";
import FilmCard from "../view/index/film-card.js";
import ButtonShowMore from "../view/index/button-show-more.js";
import Paragraph from "../view/index/paragraph.js";
import {render, renderElement, RenderPosition} from "../utils";

const FILM_COUNT_RER_STEP = 5;

const renderIndex = (films, user, filters) => {

  const siteHeaderElement = document.querySelector(`.header`);
  const siteMainElement = document.querySelector(`.main`);
  const siteFooterStaticsElement = document.querySelector(`.footer__statistics`);

  render(siteHeaderElement, new ProfileRatingTemplate(user).getElement(), RenderPosition.BEFOREEND);
  render(siteMainElement, new MainNavigationTemplate(filters).getElement(), RenderPosition.BEFOREEND);
  render(siteMainElement, new SortTemplate().getElement(), RenderPosition.BEFOREEND);
  render(siteMainElement, new FilmList().getElement(), RenderPosition.BEFOREEND);

  const siteFilmListContainerElement = document.querySelector(`.films-list__container`);
  const siteFilmListElement = document.querySelector(`.films-list`);

  const filmCard = new FilmCard();

  for (let i = 0; i < Math.min(films.length, FILM_COUNT_RER_STEP); i++) {
    render(siteFilmListContainerElement, filmCard(films[i]).getElement(), RenderPosition.BEFOREEND);
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

  render(siteFooterStaticsElement, new Paragraph().getElement(), RenderPosition.BEFOREEND);

};

export {renderIndex};
