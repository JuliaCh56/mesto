const popup = document.querySelector('.popup'); 
const openButtonEdit = document.querySelector('.profile__edit-button');
const openButtonAdd = document.querySelector('.profile__add-button');
const popupImage = document.querySelector('.popup_big-image');
const popupEdit = document.querySelector('#popup-edit');
const popupAdd = document.querySelector('#popup-add');

const closeButtonAdd = popupAdd.querySelector('#button-close-add');
const closeButtonEdit = popupEdit.querySelector('#button-close-edit');
const closeButtonImage = popupImage.querySelector('#button-close-image');

const nameInput = popup.querySelector('.popup__field_type_name');
const activityInput = popup.querySelector('.popup__field_type_activity');
const profileName = document.querySelector('.profile__title');
const profileActivity = document.querySelector('.profile__subtitle'); 
const elementsZone = document.querySelector('.elements__zone');


//открытие формы редактирования
function openPopupEdit() {
  nameInput.value = profileName.textContent;
  activityInput.value = profileActivity.textContent;
  openPopup(popupEdit);
}



function createCardcloneNode(item) {
  const newElement = document.querySelector('.element__template').content.cloneNode(true);
  const elementTitle = newElement.querySelector('.element__title');
  const elementLink = newElement.querySelector('.element__foto');
  const deleteButton = newElement.querySelector('.element__delete'); 

  elementTitle.textContent = item.name;
  elementLink.src = item.link;
  elementLink.alt = item.name;

deleteButton.addEventListener('click', function () {
  const listItem = deleteButton.closest('.element');
  listItem.remove();
});

  elementLink.addEventListener('click', function () {
    const popupImageCaption = popupImage.querySelector(".popup__image-caption");
    const popupBigImage = popupImage.querySelector('.popup__image');
    popupImageCaption.textContent = elementTitle.textContent;
    popupBigImage.src = elementLink.src;
    popupBigImage.alt = elementTitle.textContent;

    openPopup(popupImage)
  });

  newElement.querySelector('.element__like').addEventListener('click', function toPutLike (evt) {
    evt.target.classList.toggle('like_active')
  });

  return newElement
}

function renderList () {
  const element= initialCards.map(createCardcloneNode);
  elementsZone.append(...element);
}


//добавление нового места
function createCardNew (evt) {
  evt.preventDefault();
  const popupFormAdd = popupAdd.querySelector('#popup-form-add');
  const namePlaceInput = popupFormAdd.querySelector('.popup__field_type_name-place'); 
  const urlPlaceInput = popupFormAdd.querySelector('.popup__field_type_url-place');
  const placeNewTitle = namePlaceInput.value;
  const placeNewLink = urlPlaceInput.value;
  const newPlace = createCardcloneNode({name: placeNewTitle, link: placeNewLink});

  elementsZone.prepend(newPlace);

  namePlaceInput.value = '';
  urlPlaceInput.value = '';

  closePopup(popupAdd);
}

renderList();

//функция открытия
function openPopup(popup) {
  popup.classList.toggle('popup_opened');
} 

//функция закрытия
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}


function formSubmitHandler(evt) {
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileActivity.textContent = activityInput.value;
  closePopup(popupEdit);
}

popupEdit.addEventListener('submit', formSubmitHandler);
popupAdd.addEventListener('submit', createCardNew);

//открытие форм

openButtonEdit.addEventListener('click', openPopupEdit);
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