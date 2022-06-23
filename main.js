(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i,a){var u=a.addLike,c=a.deleteLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._alt=e.alt,this._cardSelector=n,this._handleCardClick=o,this._handleDeleteClick=i,this._ownerId=r,this._addLike=u,this._deleteLike=c}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._element.setAttribute("id","a".concat(this._data._id)),this._imageCaption=this._element.querySelector(".element__title"),this._cardImage=this._element.querySelector(".element__foto"),this._deleteButton=this._element.querySelector(".element__delete"),this._likeButton=this._element.querySelector(".element__like"),this._likeCounter=this._element.querySelector(".element__like-number"),this.setLikeCounter(this._data),this._setEventListeners(),this._validationOwnerCard(),this._validationOwnerLike(),this._imageCaption.textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name,this._element}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_addLikeActive",value:function(){this._buttonLike.classList.add("like_active")}},{key:"_removeLikeActive",value:function(){this._buttonLike.classList.remove("like_active")}},{key:"_dislike",value:function(e){this._removeLikeActive(),this._deleteLike(e)}},{key:"_like",value:function(e){this._addLikeActive(),this._addLike(e)}},{key:"setLikeCounter",value:function(e){this._likeCounter.textContent=String(e.likes.length)}},{key:"_validationOwnerCard",value:function(){this._data.owner._id!==this._ownerId&&this._element(this._deleteButton)}},{key:"_validationOwnerLike",value:function(){var e=this;this._data.likes.forEach((function(t){t._id===e._ownerId&&e._addLikeActive()}))}},{key:"_setEventListeners",value:function(){var e=this;this._deleteButton.addEventListener("click",(function(){e._deleteCard()})),this._likeButton.addEventListener("click",(function(){e._likeButton.classList.contains("like_active")?e._dislike(e._data):e._like(e._data)})),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=function(){function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"_checkInputValidity",(function(e){e.validity.valid?o._hideInputError(e):o._showInputError(e,e.validationMessage)})),r(this,"_toggleButtonState",(function(){o._hasInvalidInput(o._inputList)?(o._buttonElement.classList.add(o._inactiveButtonClass),o._buttonElement.setAttribute("disabled",!0)):(o._buttonElement.classList.remove(o._inactiveButtonClass),o._buttonElement.removeAttribute("disabled"))})),this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(t.inputSelector)),this._buttonElement=this._formElement.querySelector(t.submitButtonSelector),this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass}var t,o;return t=e,(o=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),e.textContent=""}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_setInputListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setInputListeners()}}])&&n(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){var r=t.data,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialArray=r,this._container=document.querySelector(n),this._renderer=o}var t,n;return t=e,(n=[{key:"renderCard",value:function(){var e=this;this._initialArray.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(t),this._closeButtons=this._popup.querySelectorAll(".popup__button-close")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.toggle("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._closeButtons.forEach((function(t){t.addEventListener("click",(function(){return e.close()}))})),this._popup.addEventListener("click",(function(t){t.target===t.currentTarget&&e.close()}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=p(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},f.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function d(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImageCaption=t._popup.querySelector(".popup__image-caption"),t._popupBigImage=t._popup.querySelector(".popup__image"),t}return t=a,(n=[{key:"open",value:function(e,t){this._popupImageCaption.textContent=e,this._popupBigImage.src=t,this._popupBigImage.alt=e,f(y(a.prototype),"open",this).call(this)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function w(e,t){return w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},w(e,t)}function S(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function a(e){var t,n,r=e.popupSelector,o=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,r))._handleFormSubmit=o,t._popupContainer=t._popup.querySelector(".popup__form"),t._inputList=function(e){if(Array.isArray(e))return m(e)}(n=t._popupContainer.querySelectorAll(".popup__field"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),t._submitButton=t._form.querySelector(".popup__save-button"),t._initialSubmitButton=t._submitButton.textContent,t}return t=a,n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"renderLoading",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Cохранение...";this._submitButton.textContent=e?t:this._initialSubmitButton}},{key:"setEventListeners",value:function(){var e=this;g(E(a.prototype),"setEventListeners",this).call(this),this._popupContainer.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e.close()}))}},{key:"close",value:function(){g(E(a.prototype),"close",this).call(this),this._popupContainer.reset()}}],n&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t){var n=t.nameSelector,r=t.activitySelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._activity=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,activity:this._activity.textContent}}},{key:"setUserAvatar",value:function(e){this._avatar.src=e.avatar}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._activity.textContent=e.activity,this.setUserAvatar(e),this._avatar.alt="".concat(e.name," avatar")}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_handleAnswer",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then(this._handleAnswer)}},{key:"postCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._handleAnswer)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e._id),{method:"DELETE",headers:this._headers}).then(this._handleAnswer)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then(this._handleAnswer)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._handleAnswer)}},{key:"getInitialData",value:function(){return Promise.all([this.getUserInfo(),this.getCards()])}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._handleAnswer)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e._id),{method:"DELETE",headers:this._headers}).then(this._handleAnswer)}},{key:"setLike",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e._id),{method:"PUT",headers:this._headers}).then(this._handleAnswer)}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=B(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},q.apply(this,arguments)}function B(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}function T(e,t){return T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},T(e,t)}function R(e,t){if(t&&("object"===I(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return U(e)}function U(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function a(e){var t,n=e.popupSelector,r=e.submit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._submit=r,t._setEvent=t._setEvent.bind(U(t)),t}return t=a,(n=[{key:"handleSubmitConfirmation",value:function(e){this._submit=e}},{key:"_setEvent",value:function(e){e.preventDefault(),this._submit()}},{key:"open",value:function(){q(x(a.prototype),"open",this).call(this),this._popupSelector.addEventListener("submit",this._setEvent)}},{key:"close",value:function(){q(x(a.prototype),"close",this).call(this),this._popupSelector.removeEventListener("submit",this._setEvent)}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c),D={formSelector:".popup__form",inputSelector:".popup__field",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__button-save_disabled",inputErrorClass:"popup__field_type_error",errorClass:"popup__input-error_active"},F=document.querySelector(".profile__edit-button"),N=document.querySelector(".profile__add-button"),J=document.querySelector(".profile__avatar-container"),M=document.querySelector("#popup-edit"),z=document.querySelector("#popup-add"),G=document.querySelector("#popup-avatar"),H=(document.querySelector(".profile__avatar"),M.querySelector("#name")),$=M.querySelector("#activity"),K=(document.querySelector("#popup-form-avatar").querySelector("#url-avatar"),z.querySelector("#popup-form-add"));function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}K.querySelector("#place"),K.querySelector("#url");var W=null,X=new o(D,M),Y=new o(D,z),Z=new o(D,G),ee=new _(".popup_big-image"),te=new P({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-43",headers:{authorization:"1d323423-37e9-4ea0-a21a-000d87cb71da","Content-Type":"application/json"}});te.getInitialData().then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return Q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];W=o._id,ce.setUserInfo(o),cardsList.renderCard(i)})).catch((function(e){console.log(e)}));var ne=new V({popupSelector:"#popup-confirm",submit:function(e){te.deleteCard(e).then((function(){ne.close()})).catch((function(e){console.log(e)}))}});function re(e){var n=new t(e,".element__template",ie,ae,W,{addLike:function(e){te.setLike(e).then((function(e){n.setLikeCounter(e)})).catch((function(e){console.log(e)}))},deleteLike:function(e){te.deleteLike(e).then((function(e){n.setLikeCount(e)})).catch((function(e){console.log(e)}))}});return n}var oe=new a({renderer:function(e){var t=re(e),n=t.generateCard();t.setLikeCount(e),oe.addItem(n,"prepend")}},".elements__zone");function ie(e,t){ee.open(e,t)}function ae(e){ne.open(e)}ee.setEventListeners();var ue=new C({popupSelector:"#popup-add",handleFormSubmit:function(e){ue.renderLoading(!0),te.postCard(e).then((function(e){var t=re(e).generateCard();oe.addItem(t,"prepend")})).catch((function(e){console.log(e)})).finally((function(){ue.renderLoading(!1),ue.close()}))}});N.addEventListener("click",(function(){Y.resetValidation(),ue.open()})),ue.setEventListeners();var ce=new O({nameSelector:".profile__title",activitySelector:".profile__subtitle",avatarSelector:"profile__avatar"}),le=new C({popupSelector:"#popup-edit",handleFormSubmit:function(e){le.renderLoading(!0,"Загрузка..."),te.setUserInfo(e).then((function(e){ce.setUserInfo(e)})).catch((function(e){console.log(e)})).finally((function(){le.renderLoading(!1),le.close()}))}});le.setEventListeners(),F.addEventListener("click",(function(){var e=ce.getUserInfo();H.value=e.name,$.value=e.activity,X.resetValidation(),le.open()}));var se=new C({popupSelector:"#popup-avatar",handleFormSubmit:function(e){se.renderLoading(!0),te.setUserAvatar(e).then((function(e){ce.setUserAvatar(e)})).catch((function(e){console.log(e)})).finally((function(){se.renderLoading(!1),se.close()}))}});se.setEventListeners(),J.addEventListener("click",(function(){var e=ce.getUserInfo();console.log(e.avatar),$.value=e.src,Z.resetValidation(),se.open()})),Y.enableValidation(),Z.enableValidation(),X.enableValidation()})();