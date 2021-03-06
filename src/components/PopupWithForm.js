import { Popup } from './Popup.js'

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupContainer = this._popup.querySelector('.popup__form');
    this._inputList = [...this._popupContainer.querySelectorAll('.popup__field')];
    this._buttonSave = this._popupContainer.querySelector('.popup__button-save');
    this._textButton = this._buttonSave.textContent;
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  renderButonSave(status){
    if(status){
      this._buttonSave.textContent = `Cохранение...`;
    } else {
      this._buttonSave.textContent = this._textButton;
    }
  } // renderSavin

  setEventListeners() {
    super.setEventListeners();
      this._popupContainer.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    })
  }

  close() {
    super.close();
    this._popupContainer.reset();
  }
}