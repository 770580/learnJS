'use strict';
function Machine(power) {
  this._power = power;
  this._enabled = false;

  this.enable = function() {
    this._enabled = true;
  };

  this.disable = function() {
    this._enabled = false;
  };
}

function Fridge(power) {
  Machine.call(this, power);

  let food = [];

  this.addFood = (...items) => {
    if (!this._enabled) {
      throw new Error('Холодильник выключен');
    }

    let newFood = food.concat(items);

    if (newFood.length > this._power / 100) {
      throw new Error('Слишком много еды');
    }

    food = newFood;
  }

  this.getFood = () => food.slice();
}