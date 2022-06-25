(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r){var o=e.data,i=e.handleCardClick,a=e.handleDeleteClick,u=e.handleLikeClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._cardSelector=n,this._name=o.name,this._link=o.link,this._alt=o.alt,this._userId=r,this._handleCardClick=i,this._handleDeleteClick=a,this._handleLikeClick=u,this._idOwner=o.owner._id,this._cardId=o._id,this._likes=o.likes}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._imageCaption=this._element.querySelector(".element__title"),this._cardImage=this._element.querySelector(".element__foto"),this._deleteButton=this._element.querySelector(".element__delete"),this._likeButton=this._element.querySelector(".element__like"),this._imageCaption.textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name,this._userId!==this._idOwner&&this._deleteButton.remove(),this.setLikes(this._likes),this._setEventListeners(),this._element}},{key:"deleteUseCard",value:function(){this._element.remove(),this._element=null}},{key:"_testLike",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._userId}))}},{key:"setLikes",value:function(e){this._element.querySelector(".element__like-number").textContent=e.length,this._likes=e,this._testLike()?this._likeButton.classList.add("like_active"):this._likeButton.classList.remove("like_active")}},{key:"_setEventListeners",value:function(){var e=this;this._deleteButton.addEventListener("click",(function(){e._handleDeleteClick(e._cardId,e)})),this._likeButton.addEventListener("click",(function(){e._handleLikeClick(e._cardId,e._testLike(),e)})),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=function(){function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"_checkInputValidity",(function(e){e.validity.valid?o._hideInputError(e):o._showInputError(e,e.validationMessage)})),r(this,"_toggleButtonState",(function(){o._hasInvalidInput(o._inputList)?(o._buttonElement.classList.add(o._inactiveButtonClass),o._buttonElement.setAttribute("disabled",!0)):(o._buttonElement.classList.remove(o._inactiveButtonClass),o._buttonElement.removeAttribute("disabled"))})),this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(t.inputSelector)),this._buttonElement=this._formElement.querySelector(t.submitButtonSelector),this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass}var t,o;return t=e,(o=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),e.textContent=""}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_setInputListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setInputListeners()}}])&&n(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=document.querySelector(n),this._renderer=r}var t,n;return t=e,(n=[{key:"renderCard",value:function(e,t){var n=this;e.forEach((function(e){return n._renderer(e,t)}))}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"addItemPrepend",value:function(e){this._container.prepend(e)}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(t),this._closeButtons=this._popup.querySelectorAll(".popup__button-close")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.toggle("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._closeButtons.forEach((function(t){t.addEventListener("click",(function(){return e.close()}))})),this._popup.addEventListener("click",(function(t){t.target===t.currentTarget&&e.close()}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=p(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},f.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function y(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImageCaption=t._popup.querySelector(".popup__image-caption"),t._popupBigImage=t._popup.querySelector(".popup__image"),t}return t=a,(n=[{key:"open",value:function(e,t){this._popupImageCaption.textContent=e,this._popupBigImage.src=t,this._popupBigImage.alt=e,f(d(a.prototype),"open",this).call(this)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}function S(e,t){return S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},S(e,t)}function w(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function a(e,t){var n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleFormSubmit=t,n._popupContainer=n._popup.querySelector(".popup__form"),n._inputList=function(e){if(Array.isArray(e))return m(e)}(r=n._popupContainer.querySelectorAll(".popup__field"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n._buttonSave=n._popupContainer.querySelector(".popup__button-save"),n._textButton=n._buttonSave.textContent,n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"renderButonSave",value:function(e){this._buttonSave.textContent=e?"Cохранение...":this._textButton}},{key:"setEventListeners",value:function(){var e=this;k(C(a.prototype),"setEventListeners",this).call(this),this._popupContainer.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e.close()}))}},{key:"close",value:function(){k(C(a.prototype),"close",this).call(this),this._popupContainer.reset()}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t){var n=t.nameSelector,r=t.activitySelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._activity=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,activity:this._activity.textContent}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._activity.textContent=e.activity,this._avatar.src=avatar}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t,this._userUrl="".concat(this._url,"/users/me"),this._cardsUrl="".concat(this._url,"/cards"),this._likesUrl="".concat(this._url,"/cards/likes"),this._token=n.authorization}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return fetch(this._userUrl,{headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.activity;return fetch(this._userUrl,{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,activity:n})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._userUrl,"/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getCards",value:function(){return fetch(this._cardsUrl,{headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"postCard",value:function(e){var t=e.name,n=e.link;return fetch(this._cardsUrl,{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,link:n})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._cardsUrl,"/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"deleteLike",value:function(e){return fetch("".concat(this._likesUrl,"/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"setLike",value:function(e){return fetch("".concat(this._likesUrl,"/").concat(e),{method:"PUT",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=T(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},B.apply(this,arguments)}function T(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}function U(e,t){return U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},U(e,t)}function R(e,t){if(t&&("object"===I(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&U(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._buttonConfirmation=t._popup.querySelector(".popup__form"),t}return t=a,(n=[{key:"setSubmitAction",value:function(e){this._handleSubmitCallback=e}},{key:"setEventListeners",value:function(){var e=this;B(x(a.prototype),"setEventListeners",this).call(this),this._buttonConfirmation.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitCallback()}))}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c),V={formSelector:".popup__form",inputSelector:".popup__field",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__button-save_disabled",inputErrorClass:"popup__field_type_error",errorClass:"popup__input-error_active"},D=document.querySelector(".profile__edit-button"),z=document.querySelector(".profile__add-button"),N=document.querySelector(".profile__avatar-container"),J=document.querySelector("#popup-edit"),F=document.querySelector("#popup-add"),H=document.querySelector("#popup-avatar"),M=(document.querySelector(".profile__avatar"),J.querySelector("#name"),J.querySelector("#activity"),document.querySelector("#popup-form-avatar").querySelector("#url-avatar"),F.querySelector("#popup-form-add"));M.querySelector("#place"),M.querySelector("#url");var $,G,K,Q=J.querySelector(".popup__field"),W=new o(V,J),X=new o(V,F),Y=new o(V,H),Z=new _(".popup_big-image"),ee=new A("#popup-confirm"),te=new E("#popup-edit",(function(e){te.renderButonSave(!0),ie.saveUserChanges(e).then((function(e){ne.setUserInfo(e),te.close()})).catch((function(e){console.log(e)})).finally((function(){te.renderButonSave(!1)}))})),ne=new O((K=".profile__avatar",(G="activitySelector")in($={nameSelector:".profile__title",activitySelector:".profile__subtitle"})?Object.defineProperty($,G,{value:K,enumerable:!0,configurable:!0,writable:!0}):$[G]=K,$)),re=new E("#popup-add",(function(e){re.renderButonSave(!0),ie.postCard(e).then((function(e){se.addItemPrepend(le(e,e.owner._id)),re.close()})).catch((function(e){console.log(e)})).finally((function(){re.renderButonSave(!1)}))})),oe=new E("#popup-avatar",(function(e){oe.renderButonSave(!0),ie.setUserAvatar(e).then((function(e){ne.setUserInfo(e),oe.close()})).catch((function(e){console.log(e)})).finally((function(){oe.renderButonSave(!1)}))})),ie=new P({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-43",headers:{authorization:"1d323423-37e9-4ea0-a21a-000d87cb71da","Content-Type":"application/json"}});function ae(e,t){Z.open(e,t)}function ue(e,t){ee.setSubmitAction((function(){return function(e,t){ie.deleteCard(e).then((function(){t.deleteUseCard(),ee.close()})).catch((function(e){console.log(e)}))}(e,t)})),ee.open()}function ce(e,t,n){n?ie.deleteLike(e).then((function(e){t.setLikes(e.likes)})).catch((function(e){console.log(e)})):ie.setLike(e).then((function(e){t.setLikes(e.likes)})).catch((function(e){console.log(e)}))}function le(e,n){return new t({data:e,handleCardClick:ae,handleDeleteClick:ue,handleLikeClick:ce},"#card",n).generateCard()}Promise.all([ie.getUserInfo(),ie.getCards()]).then((function(e){ne.setUserInfo(e[0]),se.renderCard(e[1],e[0]._id)})).catch((function(e){console.log(e)}));var se=new a({renderer:function(e,t){se.addItem(le(e,t))}},".elements__zone");z.addEventListener("click",(function(){X.resetValidation(),re.open()})),D.addEventListener("click",(function(){var e;e=ne.getUserInfo(),Q.forEach((function(t){t.value=e[t.name]})),W.resetValidation(),te.open()})),N.addEventListener("click",(function(){oe.open(),Y.resetValidation()})),re.setEventListeners(),te.setEventListeners(),oe.setEventListeners(),Z.setEventListeners(),ee.setEventListeners(),X.enableValidation(),W.enableValidation(),Y.enableValidation()})();