export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(Ncode) {
    if (typeof Ncode !== 'string') throw new TypeError('Code must be a string');
    this._code = Ncode;
  }

  get name() {
    return this._name;
  }

  set name(Nname) {
    if (typeof Nname !== 'string') throw new TypeError('Name must be a string');
    this._name = Nname;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
