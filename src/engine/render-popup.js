import {createDetalePoup} from "./view/index/ditale-poup.js";

export const renderPopup = () => {
  const siteMainElement = document.querySelector(`.main`);

  render(siteMainElement, createDetalePoup(), `beforeend`);
};

