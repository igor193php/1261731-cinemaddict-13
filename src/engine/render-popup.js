import {createMainInPoup} from "../view/popup/main-poup.js";
import {createCommentsInPopup} from "../view/popup/comments-popup.js";
import {createControlsInPopup} from "../view/popup/controls-popup.js";
import {createDetailsInPopup} from "../view/popup/details-popup.js";
import {render, closeWindow} from "../utils";

export const renderPopup = () => {
  const siteMainElement = document.querySelector(`.main`);
  render(siteMainElement, createMainInPoup(), `beforeend`);

  const filmDetailsTopContainerElement = document.querySelector(`.film-details__top-container`);
  render(filmDetailsTopContainerElement, createDetailsInPopup(), `beforeend`);

  const filmDetailsInfoWrapElement = document.querySelector(`.film-details__info-wrap`);
  render(filmDetailsInfoWrapElement, createControlsInPopup(), `afterend`);

  const filmDetailsBottomContainerElement = document.querySelector(`.film-details__bottom-container`);
  render(filmDetailsBottomContainerElement, createCommentsInPopup(), `afterbegin`);

  const popupCloseBotton = document.querySelector(`.film-details__close-btn`);
  const sectionFilmDetailsElement = document.querySelector(`.film-details`);

  closeWindow(popupCloseBotton, sectionFilmDetailsElement);

};
