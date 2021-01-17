//import {renderPopup} from "./engine/render-popup.js";
import ProfileRatingTemplate from "./view/index/profile-rating.js";
import MainNavigationTemplate from "./view/index/main-navigation.js";
import SortTemplate from "./view/index/sort.js";
import Paragraph from "./view/index/paragraph.js";
import MovieList from "./presenter/movie-list.js";
import {films, user, filters} from "./engine/data.js";
import {render, RenderPosition} from "./utils";


const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const filmCardElement = document.querySelector(`.film-card`);
const bodyElement = document.querySelector(`body`);

render(siteHeaderElement, new ProfileRatingTemplate(user), RenderPosition.BEFOREEND);
render(siteMainElement, new MainNavigationTemplate(filters), RenderPosition.BEFOREEND);

let film = null;

const movieListPresenter = new MovieList(siteMainElement);
movieListPresenter.init(films);

const siteFooterStaticsElement = document.querySelector(`.footer__statistics`);

render(siteFooterStaticsElement, new Paragraph(), RenderPosition.BEFOREEND);
/*
filmCardElement.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  if (evt.target.matches(`.film-card__poster`) || evt.target.matches(`.film-card__title`) || evt.target.matches(`.film-card__comments`)) {
    const idFilm = +filmCardElement.getAttribute(`id`);

    films.forEach((value) => {
      if (value.id === idFilm) {
        film = value;
      }
    });
    bodyElement.classList.add(`hide-overflow`);
    renderPopup(film);
  }

}); */
