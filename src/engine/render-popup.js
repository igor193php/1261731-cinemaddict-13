import {createMainInPoup} from "../view/popup/main-poup.js";
import {createCommentsInPopup} from "../view/popup/comments-popup.js";
import {createControlsInPopup} from "../view/popup/controls-popup.js";
import {createDetailsInPopup} from "../view/popup/details-popup.js";
import {render} from "../utils";

export const renderPopup = () => {
  const siteMainElement = document.querySelector(`.main`);

  render(siteMainElement, createMainInPoup(), `beforeend`);

  const filmDetailsTopContainerElement = document.querySelector(`.film-details__top-container`);
  render(filmDetailsTopContainerElement, createDetailsInPopup(), `beforeend`);

};

