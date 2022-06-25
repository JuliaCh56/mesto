export class Card {
  constructor({data,  handleCardClick, handleDeleteClick, handleLikeClick}, cardSelector, userId ) {
    this._cardSelector = cardSelector;
    this._name = data.name;
    this._link = data.link;
    this._alt = data.alt;
    this._userId = userId;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
    this._idOwner = data.owner._id;
    this._cardId = data._id;
    this._likes = data.likes;
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
    this._imageCaption.textContent = this._name; 
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name; 

      if (this._userId !== this._idOwner) {
        this._deleteButton.remove();
      }

    this.setLikes(this._likes);
    this._setEventListeners();
    return this._element;
  }



  deleteUseCard() {
    this._element.remove();
    this._element = null;
  } // removeCard

  _testLike() {
    return this._likes.some(like => {
      return like._id === this._userId;
    });
  } //  checkLike

  setLikes(arr) {
    this._element.querySelector('.element__like-number').textContent = arr.length;
    this._likes = arr;
    if (this._testLike()) {
      this._likeButton.classList.add('like_active');
    } else {
      this._likeButton.classList.remove('like_active');
    }
  }


  _setEventListeners() {  
    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteClick(this._cardId, this);
    });
    this._likeButton.addEventListener('click', () => { 
      this._handleLikeClick(this._cardId, this._testLike(), this)
    });
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  };
}

