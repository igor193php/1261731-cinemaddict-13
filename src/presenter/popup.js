import MainInPoup from "../view/popup/main-poup.js";
import CommentsInPopup from "../view/popup/comments-popup.js";
import ControlsInPopup from "../view/popup/controls-popup.js";
import DetailsInPopup from "../view/popup/details-popup.js";
import {render, RenderPosition, closeWindow} from "../utils";

export default class Popup {
  constructor(popupContainer) {
    this._popupContainer = popupContainer;

    this._mainComponent = new MainInPoup();
    this._commentsComponent = new CommentsInPopup();
    this._controlsComponent = new ControlsInPopup();
    this._detailsComponent = new DetailsInPopup();
  }

  init(film) {
  this._film = film;

  this._renderMain();
  this._renderDetails(this._film);
  this._renderControls();
  this._renderComments();

  }

  _renderMain() {
    render(this._popupContainer, this._mainComponent, RenderPosition.BEFOREEND);
  }

  _renderDetails(film) {
    render(filmDetailsTopContainerElement, new DetailsInPopup(film), RenderPosition.BEFOREEND);
  }

  _renderControls() {
    render(filmDetailsInfoWrapElement, new ControlsInPopup(), RenderPosition.AFTEREND);
  }

  _renderComments() {
    render(filmDetailsBottomContainerElement, new CommentsInPopup(), RenderPosition.AFTERBEGIN);
  }

}
