import {popupImageCaption, popupBigImage, popupImage} from './constants.js';
import {openPopup} from './index.js';

export class Card {
  constructor(data, cardSelector ) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.alt;
    this._cardSelector = cardSelector;

  }

  _getTemplate() {
    const newElement =      
    document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);

    return newElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.element__title').textContent = this._name; 
    this._element.querySelector('.element__foto').src = this._link;
    this._element.querySelector('.element__foto').alt = this._name; 
    return this._element;
  }
  _deleteCard() {
    const deleteCardActive = this._element.querySelector('.element__delete').closest('.element');
    deleteCardActive.remove();
  }
 
  _handleLikeButton () {
    const activeLikeButton = this._element.querySelector('.element__like'); 
    activeLikeButton.classList.toggle('like_active')
  }

  _openPopupBigImage() {
    popupImageCaption.textContent = this._name;
    popupBigImage.src = this._link;
    popupBigImage.alt = this._name;
  
    openPopup(popupImage)
  };

  _setEventListeners() {
    const elementLink = this._element.querySelector('.element__foto');
    const deleteButton = this._element.querySelector('.element__delete');
    const handleLikeButtonClick = this._element.querySelector('.element__like');
    
    deleteButton.addEventListener('click', () => {
      this._deleteCard()
    });
    elementLink.addEventListener('click', () => {
      this._openPopupBigImage()
    });
    handleLikeButtonClick.addEventListener('click', () => { 
      this._handleLikeButton()
    });
  };
}




