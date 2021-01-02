import MainInPoup from "../view/popup/main-poup.js";
import CommentsInPopup from "../view/popup/comments-popup.js";
import ControlsInPopup from "../view/popup/controls-popup.js";
import DetailsInPopup from "../view/popup/details-popup.js";
import {render, RenderPosition, closeWindow} from "../utils";

export const renderPopup = (film) => {

  const siteMainElement = document.querySelector(`.main`);
  render(siteMainElement, new MainInPoup(), RenderPosition.BEFOREEND);

  const filmDetailsTopContainerElement = document.querySelector(`.film-details__top-container`);
  render(filmDetailsTopContainerElement, new DetailsInPopup(film), RenderPosition.BEFOREEND);

  const filmDetailsInfoWrapElement = document.querySelector(`.film-details__info-wrap`);
  render(filmDetailsInfoWrapElement, new ControlsInPopup(), RenderPosition.AFTEREND);

  const filmDetailsBottomContainerElement = document.querySelector(`.film-details__bottom-container`);
  render(filmDetailsBottomContainerElement, new CommentsInPopup(), RenderPosition.AFTERBEGIN);

  const popupCloseBotton = document.querySelector(`.film-details__close-btn`);
  const sectionFilmDetailsElement = document.querySelector(`.film-details`);

  closeWindow(popupCloseBotton, sectionFilmDetailsElement);

};
