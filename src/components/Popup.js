export class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
    this._popupOpenedSelector = 'popup_opened';
    this._closeButtons = this._popup.querySelectorAll('.popup__button-close');
  }

  open(){
    this._popup.classList.toggle('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close(){
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (event) => {
    if (event.key === 'Escape') {
     this.close();
    }
  } 

  setEventListeners() {
    this._closeButtons.forEach((button) => {
      // const popup = button.closest('.popup');
      button.addEventListener('click', () => this.close());  //close(this)
    });

    this._popup.addEventListener('click', (evt) => {
      if (evt.target === evt.currentTarget) {
        this.close();
      }
    });
   
  }

}