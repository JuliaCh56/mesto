export  class Api {
  constructor(url, headers) {
    this._url = url;
    this._userUrl = `${this._url}/users/me`;
    this._cardsUrl = `${this._url}/cards`;
    this._likesUrl = `${this._url}/cards/likes`;
    this._token = headers['authorization']; //token
  }

//получение данных о пользователе
getUserInfo() {
  return fetch(this._userUrl, {
    headers: {
      authorization: this._token,
    }
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
} // getUserData

 //обновление данных о пользователе
 setUserInfo({name, activity}) {
  return fetch(this._userUrl, {
    method: 'PATCH',
    headers: {
      authorization: this._token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      activity: activity,
    })
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
} //  saveUserChanges

// установка аватара
setUserAvatar(src) {
  return fetch(`${this._userUrl}/avatar`, {
    method: 'PATCH',
    headers: {
      authorization: this._token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avatar: src.link
    })
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
} // changedAvatar

  //получение карт
  getCards() {
    return fetch(this._cardsUrl, {
        headers: {
          authorization: this._token,
        }
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  } // getInitialCards

  //добавление карточек
postCard({name, link}) {
  return fetch(this._cardsUrl, {
    method: 'POST',
    headers: {
      authorization: this._token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      link: link,
    })
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
  } //postNewCard



//удаление карточки
  deleteCard(cardId) {
    return fetch(`${this._cardsUrl}/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
}


//удаление лайка
  deleteLike(cardId) {
    return fetch(`${this._likesUrl}/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  } // dislikedCard


  // обновление лайка
  setLike(cardId) {
    return fetch(`${this._likesUrl}/${cardId}`, {
      method: 'PUT',
      headers: {
        authorization: this._token,
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  } // likedCard

}