import ViewAbstract from "../../main-classes/view-abstract";


const createButtonShowMore = () => {
  return `<button class="films-list__show-more">Show more</button>`;
};

export default class ButtonShowMore extends ViewAbstract {

  getTemplate() {
    return createButtonShowMore();
  }

}
