import './index.css';
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js'
import {Section} from '../components/Section.js'
import {PopupWithImage} from '../components/PopupWithImage.js'
import {PopupWithForm} from '../components/PopupWithForm.js'
import {UserInfo} from '../components/UserInfo.js'
import {
  initialCards,
  openButtonEdit,
  openButtonAdd,
  popupEdit,
  popupAdd,
  nameInput,
  activityInput,
  namePlaceInput,
  urlPlaceInput, 
  formContent
} from '../utils/constants.js';

const validateFormEdit = new FormValidator(formContent, popupEdit);
const validateFormAdd = new FormValidator(formContent, popupAdd);
const popupWithImage = new PopupWithImage('.popup_big-image');


function createCard(item) {
  const card = new Card (item, '.element__template', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement
}


//вставка разметки на страницу
const cardList = new Section({
  data: initialCards,
  renderer: (data) => {
       cardList.addItem(createCard(data));
    }
}, '.elements__zone');

cardList.renderCard();

//ф-я открытия большой картинки
function handleCardClick (name, link) {
  popupWithImage.open(name, link);
};
popupWithImage.setEventListeners();

//добавление новой карточки
const popupWithFormAdd = new PopupWithForm({
  popupSelector: '#popup-add',
  handleFormSubmit: () => {
    const element = createCard({
      name: namePlaceInput.value,
      link: urlPlaceInput.value
    });
    cardList.addItem(element);
  }
});

//открытие формы добавления места
openButtonAdd.addEventListener('click', function () {
  validateFormAdd.resetValidation();
  popupWithFormAdd.open();
});

popupWithFormAdd.setEventListeners();


const userInfo = new UserInfo({
  nameSelector: '.profile__title',
  activitySelector: '.profile__subtitle'
});



const popupWithFormEdit = new PopupWithForm({
  popupSelector: '#popup-edit',
  handleFormSubmit: (formValues) => {
    userInfo.setUserInfo({name: formValues.name, activity:formValues.activity});
    popupWithFormEdit.close();
  }
});


openButtonEdit.addEventListener('click', function(){
  const userInfoGet = userInfo.getUserInfo();
  nameInput.value = userInfoGet.name;
  activityInput.value = userInfoGet.activity;
  validateFormEdit.resetValidation();
  popupWithFormEdit.open();
});
  popupWithFormEdit.setEventListeners();

validateFormAdd.enableValidation();
validateFormEdit.enableValidation();