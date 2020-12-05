import {getRandomItem, getRandomInteger, getListItems} from "../utils.js";
import {TYPE_FILM} from "./const";

export const generateFilm = () => {

  const YEAR_LOW = 1980;
  const YEAR_HIGH = 2010;

  const appropriateAge = `18+`;

  const namesFilms = [
    `Bad Boys for Life`,
    `Tenet`,
    `Birds of Prey`,
    `The Invisible Man`,
    `Onward`,
    `Bloodshot`,
    `Gretel & Hansel`,
    `The Turning`,
    `The Hunt`,
    `Las Pildoras De Mi Novio`
  ];

  const posters = [
    `./images/posters/made-for-each-other.png`,
    `./images/posters/popeye-meets-sinbad.png`,
    `./images/posters/sagebrush-trail.jpg`,
    `./images/posters/santa-claus-conquers-the-martians.jpg`,
    `./images/posters/the-dance-of-life.jpg`,
    `./images/posters/the-great-flamarion.jpg`,
    `./images/posters/the-man-with-the-golden-arm.jpg`
  ];

  const shotDescriptions = [
    `Nulla facilisi etiam dignissim diam quis. Risus ultricies tristique nulla aliquet enim tortor at auctor urna.`,
    `Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Dolor morbi non arcu risus quis varius quam quisque id. Facilisi morbi tempus iaculis urna id volutpat lacus.`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In mollis nunc sed id semper risus in.`,
    `Cras ornare arcu dui vivamus arcu. Enim eu turpis egestas pretium aenean pharetra magna ac. Imperdiet proin fermentum leo vel orci porta non pulvinar neque.`,
    `Commodo elit at imperdiet dui accumsan sit amet nulla facilisi. Sit amet risus nullam eget felis eget. Euismod lacinia at quis risus sed vulputate.`
  ];

  const fullDescriptions = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
    dolore magna aliqua. Viverra orci sagittis eu volutpat odio facilisis mauris. Dui sapien eget mi proin. 
    In nibh mauris cursus mattis molestie a iaculis. Felis eget nunc lobortis mattis aliquam faucibus purus.`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
    dolore magna aliqua. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Ut sem nulla 
    pharetra diam sit amet nisl. Congue nisi vitae suscipit tellus mauris. Nunc eget lorem dolor sed viverra.`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
    et dolore magna aliqua. Imperdiet massa tincidunt nunc pulvinar sapien et ligula. Quam id leo in vitae 
    turpis massa. Odio ut enim blandit volutpat maecenas volutpat blandit. Gravida dictum fusce ut placerat
     orci nulla pellentesque.`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
    et dolore magna aliqua. Nunc non blandit massa enim. Tortor condimentum lacinia quis vel eros donec. 
    Non tellus orci ac auctor augue mauris augue neque. Mi bibendum neque egestas congue quisque egestas diam.`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
    dolore magna aliqua. Tristique et egestas quis ipsum suspendisse ultrices gravida. Lacinia at quis risus 
    sed vulputate. Quis risus sed vulputate odio. Odio pellentesque diam volutpat commodo sed egestas egestas.`
  ];

  const actors = [
    `Robert De Niro`,
    `Jack Nicholson`,
    `Marlon Brando`,
    `Denzel Washington`,
    `Katharine Hepburn`,
    `Humphrey Bogart`,
    `Daniel Day-Lewis`,
    `Sidney Poitier`
  ];

  const srceenwriters = [
    `Woody Allen`,
    `Marshall Brickman`,
    `Charles Brackett`,
    `Billy Wilder`,
    `Paddy Chayefsky`,
    `Diamond. Based`,
    `Francis Ford Coppola`,
    `Mario Puzo`
  ];

  const directors = [
    `David Lynch`,
    `Stanley Kubrick`,
    `Robert Bresson`,
    `Alfred Hitchcock`,
    `Martin Scorsese`,
    `Clint Eastwood`,
    `William Wyler`
  ];

  const countries = [
    `USA`,
    `Europe`
  ];

  const randomHour = getRandomInteger(1, 3);
  const randomMin = getRandomInteger(0, 59);

  return {
    poster: getRandomItem(posters),
    name: getRandomItem(namesFilms),
    rate: getRandomInteger(0, 10),
    year: getRandomInteger(YEAR_LOW, YEAR_HIGH),
    length: randomHour + `h ` + randomMin + `m`,
    type: getRandomItem(TYPE_FILM),
    shotDescription: getRandomItem(shotDescriptions),
    totalComments: getRandomInteger(0, 5),
    originalName: getRandomItem(namesFilms),
    director: getRandomItem(directors),
    screenwriters: getListItems(srceenwriters),
    actors: getListItems(actors),
    country: getRandomItem(countries),
    fullDescription: getRandomItem(fullDescriptions),
    appropriateAge,
    watchlist: Boolean(getRandomInteger(0, 1)),
    watched: Boolean(getRandomInteger(0, 1)),
    favorite: Boolean(getRandomInteger(0, 1))
  };

};
