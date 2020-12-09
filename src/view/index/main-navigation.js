const createFilterItemTemplate = (filter) => {
  const {name, count} = filter;

  return (
    `<a href="#${name.toLowerCase()}" class="main-navigation__item">${name} <span class="main-navigation__item-count">${count}</span></a>`
  );
};


export const createMainNavigationTemplate = (filterItems) => {
  const filterItemsTemplate = filterItems
    .map((filter) => createFilterItemTemplate(filter))
    .join(``);
  const activeClass = `main-navigation__item--active`;

  return `<nav class="main-navigation">
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item ${activeClass}">All movies</a>
    ${filterItemsTemplate}   
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`;
};
