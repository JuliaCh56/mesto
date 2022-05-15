export class Card {
  constructor(data, cardSelector, handleCardClick ) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.alt;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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
    this._imageCaption = this._element.querySelector('.element__title'); 
    this._cardImage = this._element.querySelector('.element__foto');
    this._deleteButton = this._element.querySelector('.element__delete');
    this._likeButton = this._element.querySelector('.element__like');


    this._setEventListeners();
    this._imageCaption.textContent = this._name; 
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name; 
    return this._element;
  }
  _deleteCard() {
    this._element.remove();
  }
 
  _handleLikeButton () {
    this._likeButton.classList.toggle('like_active')
  }

  _setEventListeners() {  
    this._deleteButton.addEventListener('click', () => {
      this._deleteCard()
    });
    this._likeButton.addEventListener('click', () => { 
      this._handleLikeButton()
    });
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  };
}




