import MainInPoup from "../view/popup/main-poup.js";
import CommentsInPopup from "../view/popup/comments-popup.js";
import ControlsInPopup from "../view/popup/controls-popup.js";
import DetailsInPopup from "../view/popup/details-popup.js";
import {render, RenderPosition, closeWindow} from "../utils";

export const renderPopup = (film) => {

  const siteMainElement = document.querySelector(`.main`);
  render(siteMainElement, new MainInPoup().getElement(), RenderPosition.BEFOREEND);

  const filmDetailsTopContainerElement = document.querySelector(`.film-details__top-container`);
  render(filmDetailsTopContainerElement, new DetailsInPopup(film).getElement(), RenderPosition.BEFOREEND);

  const filmDetailsInfoWrapElement = document.querySelector(`.film-details__info-wrap`);
  render(filmDetailsInfoWrapElement, new ControlsInPopup().getElement(), RenderPosition.AFTEREND);

  const filmDetailsBottomContainerElement = document.querySelector(`.film-details__bottom-container`);
  render(filmDetailsBottomContainerElement, new CommentsInPopup().getElement(), RenderPosition.AFTERBEGIN);

  const popupCloseBotton = document.querySelector(`.film-details__close-btn`);
  const sectionFilmDetailsElement = document.querySelector(`.film-details`);

  closeWindow(popupCloseBotton, sectionFilmDetailsElement);

};
