import ViewAbstract from "../../main-classes/view-abstract";

const createParagraph = () => {
  return `<p>130 291 movies inside</p>`;
};


export default class Paragraph extends ViewAbstract {

  getTemplate() {
    return createParagraph();
  }

}
