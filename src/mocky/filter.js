export const generateFilter = () => {
  const namesFilter = [
    `All movies`,
    `Watchlist`,
    `History`,
    `Favorites`
  ];

  return {
    name: filterName,
    count: countFilms(films)
  };
};
