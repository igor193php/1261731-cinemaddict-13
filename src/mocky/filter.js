const filmToFilterMap = {
  Watchlist: (films) => films.filter((film) => film.watchlist === true).length,
  History: (films) => films.filter((film) => film.watched === true).length,
  Favorites: (films) => films.filter((film) => film.favorite === true).length
};

export const generateFilter = (films) => {
  return Object.entries(filmToFilterMap).map(([filterName, countFilms]) => {
    return {
      name: filterName,
      count: countFilms(films)
    };
  });

};
