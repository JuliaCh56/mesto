import { Popup } from './Popup.js'

export class PopupWithImage extends Popup {
  constructor (popupSelector) {
    super(popupSelector)
    this._popupImageCaption = this._popup.querySelector('.popup__image-caption');
    this._popupBigImage = this._popup.querySelector('.popup__image');
  }
  
open(name, link) {
    super.open();
    this._popupImageCaption.textContent = name;
    this._popupBigImage.src = link;
    this._popupBigImage.alt = name;
  }
}