export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  set size(Nsize) {
    if (typeof Nsize !== 'number') throw new TypeError('Size must be a number');
    this._size = Nsize;
  }

  set location(Nlocation) {
    if (typeof Nlocation !== 'string') throw new TypeError('Location must be a string');
    this._location = Nlocation;
  }

  get size() {
    return this._size;
  }

  get loccation() {
    return this._location;
  }

  valueof() {
    return this._size;
  }

  toString() {
    return this._location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    return this._location;
  }
}
