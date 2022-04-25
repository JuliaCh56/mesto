export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const popup = document.querySelector('.popup'); 
export const openButtonEdit = document.querySelector('.profile__edit-button');
export const openButtonAdd = document.querySelector('.profile__add-button');
export const popupImage = document.querySelector('.popup_big-image');
export const popupEdit = document.querySelector('#popup-edit');
export const popupAdd = document.querySelector('#popup-add');
export const closeButtonAdd = popupAdd.querySelector('#button-close-add');
export const closeButtonEdit = popupEdit.querySelector('#button-close-edit');
export const closeButtonImage = popupImage.querySelector('#button-close-image');
export const nameInput = popup.querySelector('#name');
export const activityInput = popup.querySelector('#activity');
export const profileName = document.querySelector('.profile__title');
export const profileActivity = document.querySelector('.profile__subtitle'); 
export const elementsZone = document.querySelector('.elements__zone');
export const popupImageCaption = popupImage.querySelector(".popup__image-caption");
export const popupBigImage = popupImage.querySelector('.popup__image');
export const popupFormAdd = popupAdd.querySelector('#popup-form-add');
export const namePlaceInput = popupFormAdd.querySelector('#place'); 
export const urlPlaceInput = popupFormAdd.querySelector('#url');
export const popupButtonSubmit =  popupFormAdd.querySelector('.popup__button-save'); 

