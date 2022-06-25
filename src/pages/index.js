import './index.css';
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js'
import {Section} from '../components/Section.js'
import {PopupWithImage} from '../components/PopupWithImage.js'
import {PopupWithForm} from '../components/PopupWithForm.js'
import {UserInfo} from '../components/UserInfo.js'
import {Api} from '../components/Api.js'
import {PopupWithConfirmation} from '../components/PopupWithConfirmation.js'
import {
  initialCards,
  openButtonEdit,
  openButtonAdd,
  popupEdit,
  popupAdd,
  popupAvatar,
  openButtonAvatar,
  // nameInput,
  // activityInput,
  // namePlaceInput,
  // urlPlaceInput, 
  formContent
} from '../utils/constants.js';

const profileInput = popupEdit.querySelector('.popup__field');

//селекторы классов
const  initialClass = {
  popupConfirmationSelector: '#popup-confirm', //popupConfirmSelector
  popupEditSelector: '#popup-edit', //popupProfileSelector
  popupAddSelector: '#popup-add', //popupAddCardSelector
  popupAvatarSelector: '#popup-avatar',//popupChangeAvatarSelector
  containerSelector: '.elements__zone', // elementsSelector
  profileNameSelector: '.profile__title',//profileNameSelector
  profileActivitySelector: '.profile__subtitle',//profileJobSelector
  popupImageSelector: '.popup_big-image', //popupImageSelector
  cardId: '#card',//cardId
  deleteCardButton: '.element__delete', //trashCard
  avatarImage:'.profile__avatar', //avatarSelector
};
//selectorObj

const validateFormEdit = new FormValidator(formContent, popupEdit);
const validateFormAdd = new FormValidator(formContent, popupAdd);
const validateFormAvatar = new FormValidator(formContent, popupAvatar);
const popupWithImage = new PopupWithImage(initialClass.popupImageSelector);
const popupWithConfirmation = new PopupWithConfirmation (initialClass.popupConfirmationSelector);
const popupWithFormEdit = new PopupWithForm(initialClass.popupEditSelector, handleFormSubmitEdit);
const userInfo = new UserInfo({
  nameSelector: initialClass.profileNameSelector,
  activitySelector: initialClass.profileActivitySelector,
  activitySelector: initialClass.avatarImage,
});

const popupWithFormAdd = new PopupWithForm(initialClass.popupAddSelector, handleFormSubmitAdd);

const popupWithFormAvatar = new PopupWithForm(initialClass.popupAvatarSelector, handleFormSubmitAvatar);



const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-43',
  headers: {
    authorization: '1d323423-37e9-4ea0-a21a-000d87cb71da',
    'Content-Type': 'application/json'
  }
});

Promise.all([
  api.getUserInfo(),
  api.getCards()
])
.then((values) => {
  userInfo.setUserInfo(values[0])
  cardList.renderCard(values[1], values[0]._id); //section renderCard
})
.catch((err) => {
  console.log(err);
});


//ф-я открытия большой картинки
function handleCardClick (name, link) {
  popupWithImage.open(name, link);
};



// ф-я открытия подтверждения удаления 
function handleDeleteClick(id, card) {
  popupWithConfirmation.setSubmitAction(() => handleConfirmation(id, card))
  popupWithConfirmation.open();
}


// ф-я удаления
function handleConfirmation(id, card) {
  api.deleteCard(id)
    .then(() => {
      card.deleteUseCard();
      popupWithConfirmation.close();
    })
    .catch((err) => {
      console.log(err);
    });
}

// ф-я лайк (установить/снять)
function handleLikeClick(id, card, isLiked) {
  if (isLiked) {
    api.deleteLike(id)
      .then((data) => {
        card.setLikes(data.likes);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
     api.setLike(id)
      .then((data) => {
        card.setLikes(data.likes);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}


//ф-я сабмита формы ред профиля
function handleFormSubmitEdit(inputsData) {
  popupWithFormEdit.renderButonSave(true);

  api.saveUserChanges(inputsData)
    .then((data) => {
      userInfo.setUserInfo(data);
      popupWithFormEdit.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupWithFormEdit.renderButonSave(false);
    })
}



// ф-я заполнения инпутов
function handleInput() {
  const userData = userInfo.getUserInfo();
  profileInput.forEach(input => {
    input.value = userData[input.name];
  });
} // handleTextInput
 

//создание карт
function createCard(dataCard, id) {
  const card = new Card ({
  data: dataCard,  
  handleCardClick, 
  handleDeleteClick, 
  handleLikeClick}, 
  initialClass.cardId, 
  id);

  const cardElement = card.generateCard();
  return cardElement
} //newCard


//вставка разметки на страницу
const cardList = new Section({
  renderer: (cardItem, id) => {
       cardList.addItem(createCard(cardItem, id));
    }
}, initialClass.containerSelector);


//ф-я добавление новой карточки

function handleFormSubmitAdd(inputsData) {
  popupWithFormAdd.renderButonSave(true);

  api.postCard(inputsData)
    .then((data) => {
      cardList.addItemPrepend(createCard(data, data.owner._id));
      popupWithFormAdd.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupWithFormAdd.renderButonSave(false);
    })
}

//ф-я изм аватара
function handleFormSubmitAvatar(inputsData) {
  popupWithFormAvatar.renderButonSave(true);

  api.setUserAvatar(inputsData)
    .then((data) => {
      userInfo.setUserInfo(data);
      popupWithFormAvatar.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupWithFormAvatar.renderButonSave(false);
    })
}


//открытие формы добавления места
openButtonAdd.addEventListener('click', function () {
  validateFormAdd.resetValidation();
  popupWithFormAdd.open();
});

//открытие формы данных о пользователе

openButtonEdit.addEventListener('click', function(){
  handleInput();
  validateFormEdit.resetValidation();
  popupWithFormEdit.open();
});

// открытие формы смены аватара

openButtonAvatar.addEventListener('click', () => {
  popupWithFormAvatar.open();
  validateFormAvatar.resetValidation();
});


popupWithFormAdd.setEventListeners();
popupWithFormEdit.setEventListeners();
popupWithFormAvatar.setEventListeners();
popupWithImage.setEventListeners();
popupWithConfirmation.setEventListeners();

validateFormAdd.enableValidation();
validateFormEdit.enableValidation();
validateFormAvatar.enableValidation();