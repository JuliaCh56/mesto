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

const nameInput = popup.querySelector('.popup__field_type_name');
const activityInput = popup.querySelector('.popup__field_type_activity');
const profileName = document.querySelector('.profile__title');
const profileActivity = document.querySelector('.profile__subtitle'); 
const elementsZone = document.querySelector('.elements__zone');
const popupImageCaption = popupImage.querySelector(".popup__image-caption");
const popupBigImage = popupImage.querySelector('.popup__image');

const popupFormAdd = popupAdd.querySelector('#popup-form-add');
const namePlaceInput = popupFormAdd.querySelector('.popup__field_type_name-place'); 
const urlPlaceInput = popupFormAdd.querySelector('.popup__field_type_url-place');


//функция открытия
function openPopup(popup) {
  popup.classList.toggle('popup_opened');
} 

//функция закрытия
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}


//открытие формы редактирования
function handleOpenEditProfilePopup() {
  nameInput.value = profileName.textContent;
  activityInput.value = profileActivity.textContent;
  openPopup(popupEdit);
}

//удаление
function deleteCard(evt) {
  evt.target.closest('.element').remove()
}

// отметка лайк
function handleLikeButton (evt) {
  evt.target.classList.toggle('like_active')
}


function createCardElement(item) {
  const newElement = cardTemplate.content.cloneNode(true);
  const elementTitle = newElement.querySelector('.element__title');
  const elementLink = newElement.querySelector('.element__foto');
  const deleteButton = newElement.querySelector('.element__delete');
  const likeButton = newElement.querySelector('.element__like');

  elementTitle.textContent = item.name;
  elementLink.src = item.link;
  elementLink.alt = item.name;


  deleteButton.addEventListener('click', deleteCard);

  elementLink.addEventListener('click', function () {

    popupImageCaption.textContent = elementTitle.textContent;
    popupBigImage.src = elementLink.src;
    popupBigImage.alt = elementTitle.textContent;

    openPopup(popupImage)
  });

  likeButton.addEventListener('click', handleLikeButton);

  return newElement
}



//добавление нового места
function createCardNew (evt) {
  evt.preventDefault();
  const placeNewTitle = namePlaceInput.value;
  const placeNewLink = urlPlaceInput.value;
  const newPlace = createCardElement({name: placeNewTitle, link: placeNewLink});

  elementsZone.prepend(newPlace);

  namePlaceInput.value = '';
  urlPlaceInput.value = '';

  closePopup(popupAdd);
}


//отрисовка карт 
initialCards.forEach((item) => {
  elementsZone.append(createCardElement(item));
});



function formSubmitHandler(evt) {
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileActivity.textContent = activityInput.value;
  closePopup(popupEdit);
}

popupEdit.addEventListener('submit', formSubmitHandler);
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