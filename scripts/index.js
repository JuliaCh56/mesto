import {Card} from './card.js';
import {FormValidator, formContent} from './formValidator.js'
import {
  initialCards,
  openButtonEdit,
  openButtonAdd,
  popupImage,
  popupEdit,
  popupAdd,
  closeButtonAdd,
  closeButtonEdit,
  closeButtonImage,
  nameInput,
  activityInput,
  profileName,
  profileActivity,
  elementsZone,
  popupFormAdd,
  namePlaceInput,
  urlPlaceInput,
  popupButtonSubmit,
} from './constants.js';

const validateFormEdit = new FormValidator(formContent, popupEdit);
const validateFormAdd = new FormValidator(formContent, popupAdd);


initialCards.forEach((item) => {
  const card = new Card (item, '.element__template');
  const cardElement = card.generateCard();
  elementsZone.append(cardElement);
});


//функция открытия
export function openPopup(popup) {
  popup.classList.toggle('popup_opened');
  document.addEventListener('keydown', closePopupEscape);
  popup.addEventListener('mousedown', closePopupOverley)
} 

//функция закрытия
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEscape);
  popup.removeEventListener('mousedown', closePopupOverley)
}

// функция закрытия попапа по Escape
function closePopupEscape(evt) {
  if (evt.key === 'Escape') {
    const activePopup  = document.querySelector('.popup_opened');
    closePopup(activePopup);
  }
}


// функция закрытия по клику на оверлей
function closePopupOverley(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
};


//функция открытия формы редактирования
function handleOpenEditProfilePopup() {
  nameInput.value = profileName.textContent;
  activityInput.value = profileActivity.textContent;
  openPopup(popupEdit);
}

//функция добавления нового места
function createCardNew (evt) {
  evt.preventDefault();
  const placeNewTitle = namePlaceInput.value;
  const placeNewLink = urlPlaceInput.value;
  
  const newPlace = {name: placeNewTitle, link: placeNewLink};
  const newCard = new Card(newPlace, '.element__template');

  elementsZone.prepend(newCard.generateCard());
  closePopup(popupAdd);
  popupFormAdd.reset();

  popupButtonSubmit.classList.add('popup__button-save_disabled');
  popupButtonSubmit.setAttribute('disabled', true);
}


// функция сохранения данных о пользователи
function submitFormHandler(evt) {
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileActivity.textContent = activityInput.value;
  closePopup(popupEdit);
}

popupEdit.addEventListener('submit', submitFormHandler);
popupAdd.addEventListener('submit', createCardNew);

//открытие форм

openButtonEdit.addEventListener('click', function(){
validateFormEdit.reset();
handleOpenEditProfilePopup();

});


openButtonAdd.addEventListener('click', function () {
  openPopup(popupAdd);
  
});


//закрытие форм
closeButtonAdd.addEventListener('click', function () {
  closePopup(popupAdd);
});
closeButtonEdit.addEventListener('click', function () {
  closePopup(popupEdit);
});
closeButtonImage.addEventListener('click', function () {
  closePopup(popupImage);
});

validateFormAdd.enableValidation();
validateFormEdit.enableValidation();