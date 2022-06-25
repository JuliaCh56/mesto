import { Popup } from './Popup.js'

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._buttonConfirmation = this._popup.querySelector('.popup__form');
  }

  setSubmitAction(submitAction) {
    this._handleSubmitCallback = submitAction;
  }

  setEventListeners() {
    super.setEventListeners();
    this._buttonConfirmation.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitCallback()
    });
  }
 
}