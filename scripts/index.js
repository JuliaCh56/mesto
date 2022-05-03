import {Card} from './Card.js';
import {FormValidator, formContent} from './FormValidator.js'
import {
  initialCards,
  openButtonEdit,
  openButtonAdd,
  popupImage,
  popupEdit,
  popupAdd,
  nameInput,
  activityInput,
  profileName,
  profileActivity,
  elementsZone,
  popupFormAdd,
  namePlaceInput,
  urlPlaceInput,
  popupImageCaption, 
  popupBigImage
} from './constants.js';

const validateFormEdit = new FormValidator(formContent, popupEdit);
const validateFormAdd = new FormValidator(formContent, popupAdd);

function createCard(item) {
  const card = new Card (item, '.element__template', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement
}


initialCards.forEach((item) => {
  const cardElement = createCard(item);
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

function handleCardClick (name, link) {
  popupImageCaption.textContent = name;
  popupBigImage.src = link;
  popupBigImage.alt = name;

  openPopup(popupImage)
};

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
  const newCard = createCard(newPlace);
  elementsZone.prepend(newCard);
  closePopup(popupAdd);
  popupFormAdd.reset();

  validateFormAdd.resetValidation();
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
validateFormEdit.resetValidation();
handleOpenEditProfilePopup();
});


openButtonAdd.addEventListener('click', function () {
  openPopup(popupAdd);
  
});


//закрытие форм

const closeButtons = document.querySelectorAll('.popup__button-close');

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});


validateFormAdd.enableValidation();
validateFormEdit.enableValidation();