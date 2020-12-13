import {getRandomItem} from "../utils.js";
import {NAMES_USER} from "./const";
import dayjs from "dayjs";
import {getRandomInteger} from "../utils";

export const generateComment = () => {

  const getDate = () => {
    const maxDayGap = 250;
    const daysGap = getRandomInteger(0, maxDayGap);

    return dayjs().add(daysGap, `day`).toDate();
  };

  const emotions = [
    `smile`,
    `sleeping`,
    `puke`,
    `angry`
  ];

  const texts = [
    `Sagittis aliquam malesuada bibendum arcu vitae. Eget magna fermentum iaculis eu non diam phasellus.`,
    `Purus non enim praesent elementum. Suspendisse interdum consectetur libero id faucibus.`,
    `Lectus mauris ultrices eros in cursus turpis massa tincidunt. A scelerisque purus semper eget duis at.`,
    `Non enim praesent elementum facilisis. At in tellus integer feugiat scelerisque varius morbi.`,
    `Non enim praesent elementum facilisis. At in tellus integer feugiat scelerisque varius morbi.`
  ];

  return {
    text: getRandomItem(texts),
    emotion: getRandomItem(emotions),
    author: getRandomItem(NAMES_USER),
    date: getDate()
  };
};
