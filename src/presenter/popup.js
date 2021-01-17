import MainInPoup from "../view/popup/main-poup.js";
import CommentsInPopup from "../view/popup/comments-popup.js";
import ControlsInPopup from "../view/popup/controls-popup.js";
import DetailsInPopup from "../view/popup/details-popup.js";
import {render, RenderPosition} from "../utils";

export default class Popup {
  constructor(popupContainer) {
    this._popupContainer = popupContainer;

    this._mainComponent = new MainInPoup();
    this._commentsComponent = new CommentsInPopup();
    this._controlsComponent = new ControlsInPopup();
  }

  init(film) {

    this._detailsPoupComponent = new DetailsInPopup(film);

    this._renderPoupPage();
  }

  _renderPoupPage() {
    this._renderMain();
    this._renderDetails();
    this._renderControls();
    this._renderComments();
  }

  _renderMain() {
    render(this._popupContainer, this._mainComponent, RenderPosition.BEFOREEND);
  }

  _renderDetails() {
    render(this._mainComponent, this._detailsPoupComponent, RenderPosition.BEFOREEND);
  }

  _renderControls() {
    render(this._mainComponent,  this._controlsComponent, RenderPosition.AFTEREND);
  }

  _renderComments() {
    render(this._mainComponent,  this._commentsComponent, RenderPosition.AFTERBEGIN);
  }

}
