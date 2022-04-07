const popup = document.querySelector('.popup'); 
const openButtonEdit = document.querySelector('.profile__edit-button');
const openButtonAdd = document.querySelector('.profile__add-button');
const popupImage = document.querySelector('.popup_big-image');
const popupEdit = document.querySelector('#popup-edit');
const popupAdd = document.querySelector('#popup-add');
const cardTemplate = document.querySelector('.element__template');

const closeButtonAdd = popupAdd.querySelector('#button-close-add');
const closeButtonEdit = popupEdit.querySelector('#button-close-edit');
const closeButtonImage = popupImage.querySelector('#button-close-image');

const nameInput = popup.querySelector('#name');
const activityInput = popup.querySelector('#activity');
const profileName = document.querySelector('.profile__title');
const profileActivity = document.querySelector('.profile__subtitle'); 
const elementsZone = document.querySelector('.elements__zone');
const popupImageCaption = popupImage.querySelector(".popup__image-caption");
const popupBigImage = popupImage.querySelector('.popup__image');

const popupFormAdd = popupAdd.querySelector('#popup-form-add');
const namePlaceInput = popupFormAdd.querySelector('#place'); 
const urlPlaceInput = popupFormAdd.querySelector('#url');
const popupButtonSubmit =  popupFormAdd.querySelector('.popup__button-save'); 

//функция открытия
function openPopup(popup) {
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

//функция удаления карточки
function deleteCard(evt) {
  evt.target.closest('.element').remove()
}

// функция установки "лайк"
function handleLikeButton (evt) {
  evt.target.classList.toggle('like_active')
}

// функция открытия попап с картиной
function openPopupBigImage(evt) {
  popupImageCaption.textContent = evt.target.alt;
  popupBigImage.src = evt.target.src;
  popupBigImage.alt = evt.target.alt;

  openPopup(popupImage)
};

// функция создания новой карточки
function createCardElement(item) {
  const newElement = cardTemplate.content.cloneNode(true);
  const elementTitle = newElement.querySelector('.element__title');
  const elementLink = newElement.querySelector('.element__foto');
  const deleteButton = newElement.querySelector('.element__delete');
  const handleLikeButtonClick = newElement.querySelector('.element__like');

  elementTitle.textContent = item.name;
  elementLink.src = item.link;
  elementLink.alt = item.name;

  deleteButton.addEventListener('click', deleteCard);
  elementLink.addEventListener('click', openPopupBigImage);
  handleLikeButtonClick.addEventListener('click', handleLikeButton);

  return newElement
}


//функция добавления нового места
function createCardNew (evt) {
  evt.preventDefault();
  const placeNewTitle = namePlaceInput.value;
  const placeNewLink = urlPlaceInput.value;
  const newPlace = createCardElement({name: placeNewTitle, link: placeNewLink});

  elementsZone.prepend(newPlace);

  popupFormAdd.reset();

  popupButtonSubmit.classList.add('popup__button-save_disabled');
  popupButtonSubmit.setAttribute('disabled', true);

  closePopup(popupAdd);
}


//отрисовка карт 
initialCards.forEach((item) => {
  elementsZone.append(createCardElement(item));
});


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

openButtonEdit.addEventListener('click', handleOpenEditProfilePopup);
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