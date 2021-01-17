import ProfileRatingTemplate from "./view/index/profile-rating.js";
import Paragraph from "./view/index/paragraph.js";
import MovieList from "./presenter/movie-list.js";
import {films, user} from "./engine/data.js";
import {render, RenderPosition} from "./utils";


const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);

render(siteHeaderElement, new ProfileRatingTemplate(user), RenderPosition.BEFOREEND);

const movieListPresenter = new MovieList(siteMainElement);
movieListPresenter.init(films);

const siteFooterStaticsElement = document.querySelector(`.footer__statistics`);

render(siteFooterStaticsElement, new Paragraph(), RenderPosition.BEFOREEND);

