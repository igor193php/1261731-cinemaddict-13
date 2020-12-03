import {createDetalePoup} from "../view/popup/ditale-poup.js";
import {render} from "../utils";

export const renderPopup = () => {
  const siteMainElement = document.querySelector(`.main`);

  render(siteMainElement, createDetalePoup(), `beforeend`);
};

