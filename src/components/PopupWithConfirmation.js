import { Popup } from './Popup.js'

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
    this._buttonConfirmation = document.querySelector('.element__delete');
  }

  setSubmitAction(submitAction) {
    this._handleSubmitCallback = submitAction;
  }

  setEventListeners() {
    super.setEventListeners();
    // this._buttonConfirmation.addEventListener("submit", (evt) => {
    //   evt.preventDefault();
    //   this._handleSubmitCallback()
    // });
  }
 
}