export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(Nname) {
    if (typeof Nname !== 'string') throw new TypeError('Name must be a string');
    this._name = Nname;
  }

  get code() {
    return this.code;
  }

  set code(Ncode) {
    if (typeof Ncode !== 'string') throw new TypeError('Code must be a string');
    this.code = Ncode;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
