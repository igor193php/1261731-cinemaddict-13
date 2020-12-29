import ViewAbstract from "../../main-classes/view-abstract";

const createEmptyList = () => {
  return `<section class="films">
  <section class="films-list">
  <h2 class="films-list__title">There are no movies in our database</h2>
</section>
</section>
</main>`;
};

export default class EmptyList extends ViewAbstract {

  getTemplate() {
    return createEmptyList();
  }

}
