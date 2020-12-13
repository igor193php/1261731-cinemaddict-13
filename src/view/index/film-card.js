export const createFilmCard = (film) => {
  const {id, name, rate, year, type, poster, length, shotDescription, totalComments} = film;

  return `<article class="film-card" id=${id}>
          <h3 class="film-card__title">${name}</h3>
          <p class="film-card__rating">${rate}</p>
          <p class="film-card__info">
            <span class="film-card__year">${year}</span>
            <span class="film-card__duration">${length}</span>
            <span class="film-card__genre">${type}</span>
          </p>
          <img src="${poster}" alt="" class="film-card__poster">
          <p class="film-card__description">${shotDescription}</p>
          <a class="film-card__comments">${totalComments} comments</a>
          <div class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite" type="button">Mark as favorite</button>
          </div>
        </article>`;
};
