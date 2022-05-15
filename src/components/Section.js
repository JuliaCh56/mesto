export class Section {
  constructor({ data, renderer}, containerSelector) {
    this._initialArray = data;
    this._container = containerSelector;
    this._renderer = renderer;
  }
  renderCard () {
    this._initialArray.forEach(item => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._container.prepend(element)
  } 

}