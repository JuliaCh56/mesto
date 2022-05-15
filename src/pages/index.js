import './index.css';
import {Card} from '../components/Card.js';
import {FormValidator, formContent} from '../components/FormValidator.js'
import {Section} from '../components/Section.js'
import {PopupWithImage} from '../components/PopupWithImage.js'
import {PopupWithForm} from '../components/PopupWithForm.js'
import {UserInfo} from '../components/UserInfo.js'
import {
  initialCards,
  openButtonEdit,
  openButtonAdd,
  popupImage,
  popupEdit,
  popupAdd,
  nameInput,
  activityInput,
  elementsZone,
  namePlaceInput,
  urlPlaceInput, 
} from '../utils/constants.js';

const validateFormEdit = new FormValidator(formContent, popupEdit);
const validateFormAdd = new FormValidator(formContent, popupAdd);
const popupWithImage = new PopupWithImage(popupImage);


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
}, elementsZone);

cardList.renderCard();

//ф-я открытия большой картинки
function handleCardClick (name, link) {
  popupWithImage.open(name, link);
};
popupWithImage.setEventListeners();

//добавление новой карточки
const popupWithFormAdd = new PopupWithForm({
  popupSelector: popupAdd,
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
  popupWithFormAdd.open();
  validateFormAdd.resetValidation();
});

popupWithFormAdd.setEventListeners();


const userInfo = new UserInfo({
  name: '.profile__title',
  activity: '.profile__subtitle'
});

const popupWithFormEdit = new PopupWithForm({
  popupSelector: popupEdit,
  handleFormSubmit: (formValues) => {
    userInfo.setUserInfo({name: formValues.name, activity:formValues.activity});
    popupWithFormEdit.close();
  }
});

openButtonEdit.addEventListener('click', function(){
  popupWithFormEdit.open();
  nameInput.value = userInfo.getUserInfo().name;
  activityInput.value = userInfo.getUserInfo().activity;
  validateFormEdit.resetValidation();
});
  popupWithFormEdit.setEventListeners();

validateFormAdd.enableValidation();
validateFormEdit.enableValidation();