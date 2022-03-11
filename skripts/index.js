let popup = document.querySelector('.popup'); //определение области попап
let formElement = popup.querySelector('.popup__container'); // форма
let editButton = document.querySelector('.profile__edit-button'); //кнопка редактирования и открытия попапа 
let closeButton = popup.querySelector('.popup__button-close'); //кнопка закрытия попап
let nameInput = popup.querySelector('.popup__field_type_name'); // поле ввода имени
let activityInput = popup.querySelector('.popup__field_type_activity'); // поле ввода "о себе"
let profileName = document.querySelector('.profile__title'); // отображение имени
let profileActivity = document.querySelector('.profile__subtitle'); //отображение инфо "о себе"


let togglePopup = () => {
  popup.classList.toggle('popup_opened');
 if (popup.classList.contains('popup_opened')) {
  nameInput.value = profileName.textContent;
  activityInput.value = profileActivity.textContent;
 }
}

// popup.addEventListener('click', (event) => {
//   if (event.target === event.currentTarget){
//     togglePopup();
//   }
// })

function formSubmitHandler(evt) {
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileActivity.textContent = activityInput.value;
  togglePopup();
}

formElement.addEventListener('submit', formSubmitHandler);

editButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click', togglePopup);
