export class Section {
  constructor({renderer}, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  renderCard (arr, id) {
    arr.forEach((item)=> this._renderer(item, id));
  } // renderItems

  addItem(element) {
    this._container.append(element)
  } 

  addItemPrepend(element) {
    this._container.prepend(element);
  }

}