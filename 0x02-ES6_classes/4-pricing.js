import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(Namount) {
    if (typeof Namount !== 'number') throw new TypeError('Amount must be a number');
    this._amount = Namount;
  }

  get currency() {
    return this._currency;
  }

  set currency(Ncurrency) {
    if (!(Ncurrency instanceof Currency)) throw new TypeError('Currency must be an instance of Currency');
    this._currency = Ncurrency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') throw new TypeError('Amount and conversion must be a number');
    return amount * conversionRate;
  }
}
