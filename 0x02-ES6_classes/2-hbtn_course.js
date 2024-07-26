export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    if (typeof length !== 'number') throw new TypeError('Length must be a number');
    if (!Array.isArray(students)) throw new TypeError('Students must be an array of strings');
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(Nname) {
    if (typeof Nname !== 'string') throw new TypeError('Name must be a string');
    this._name = Nname;
  }

  set length(Nlength) {
    if (typeof Nlength !== 'number') throw new TypeError('Length must be a number');
    this._length = Nlength;
  }

  set students(Nstudents) {
    if (!Array.isArray(Nstudents)) throw new TypeError('students must be an array of strings');
    this._students = Nstudents;
  }
}
