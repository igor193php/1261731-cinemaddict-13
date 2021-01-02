import ProfileRatingTemplate from "../view/index/profile-rating.js";
import MainNavigationTemplate from "../view/index/main-navigation.js";
import SortTemplate from "../view/index/sort.js";
import FilmList from "../view/index/film-list.js";
import FilmCard from "../view/index/film-card.js";
import ButtonShowMore from "../view/index/button-show-more.js";
import Paragraph from "../view/index/paragraph.js";
import EmptyList from "../view/index/empty-list.js";
import {render, RenderPosition} from "../utils";

const FILM_COUNT_RER_STEP = 5;

const renderIndex = (films, user, filters) => {

  const siteHeaderElement = document.querySelector(`.header`);
  const siteMainElement = document.querySelector(`.main`);
  const siteFooterStaticsElement = document.querySelector(`.footer__statistics`);

  render(siteHeaderElement, new ProfileRatingTemplate(user), RenderPosition.BEFOREEND);
  render(siteMainElement, new MainNavigationTemplate(filters), RenderPosition.BEFOREEND);
  render(siteMainElement, new SortTemplate(), RenderPosition.BEFOREEND);

  if (films === null || films === 0) {
    render(siteMainElement, new EmptyList(), RenderPosition.BEFOREEND);
  } else {
    render(siteMainElement, new FilmList(), RenderPosition.BEFOREEND);
    const siteFilmListContainerElement = document.querySelector(`.films-list__container`);
    const siteFilmListElement = document.querySelector(`.films-list`);


    for (let i = 0; i < Math.min(films.length, FILM_COUNT_RER_STEP); i++) {
      render(siteFilmListContainerElement, new FilmCard(films[i]), RenderPosition.BEFOREEND);
    }

    if (films.length > FILM_COUNT_RER_STEP) {
      let renderedFilmCount = FILM_COUNT_RER_STEP;

      const showMoreButtonComponent = new ButtonShowMore();
      render(siteFilmListElement, showMoreButtonComponent, RenderPosition.BEFOREEND);

      showMoreButtonComponent.setClickHandler(() => {
        films
          .slice(renderedFilmCount, renderedFilmCount + FILM_COUNT_RER_STEP)
          .forEach((film) => render(siteFilmListContainerElement, new FilmCard(film), RenderPosition.BEFOREEND));

        renderedFilmCount += FILM_COUNT_RER_STEP;

        if (renderedFilmCount >= films.length) {
          showMoreButtonComponent.getElement().remove();
          showMoreButtonComponent.removeElement();
        }

      });
    }
  }
  render(siteFooterStaticsElement, new Paragraph(), RenderPosition.BEFOREEND);

};

export {renderIndex};
