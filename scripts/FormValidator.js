export const formContent = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__field_type_error',
  errorClass: 'popup__input-error_active'
};

export class FormValidator {
  constructor(formContent, formElement) {
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(formContent.inputSelector));
    this._buttonElement = this._formElement.querySelector(formContent.submitButtonSelector);
    this._inactiveButtonClass = formContent.inactiveButtonClass;
    this._inputErrorClass = formContent.inputErrorClass;
    this._errorClass = formContent.errorClass;
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

 
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    inputElement.textContent = '';
  };

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  resetValidation() {
    this._toggleButtonState()   
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });

}

_hasInvalidInput() {
  return this._inputList.some(inputElement => !inputElement.validity.valid);
};

  _setInputListeners() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);  
        this._toggleButtonState()
      }); 
    });
  }


  _toggleButtonState = () => {
    if (this._hasInvalidInput(this._inputList)) {
      this._buttonElement.classList.add(this._inactiveButtonClass); 
      this._buttonElement.setAttribute('disabled', true); 
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled'); 
    }
  };

  enableValidation() {
    this._setInputListeners();
  }
}
