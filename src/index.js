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

  let parentDisable = this.disable;
  this.disable = () => {
    if ( food.length > 0) {
      throw new Error('в холодильнике есть еда');
    }
    parentDisable.call(this);
  };

  this.removeFood = (item) => {
    let itemIndex = food.indexOf(item);
    if ( itemIndex != -1) food.splice(itemIndex, 1);
  }

  this.filterFood = (func) => {
    return food.filter(func);
  }
}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
  title: "котлета",
  calories: 100
});
fridge.addFood({
  title: "сок",
  calories: 30
});
fridge.addFood({
  title: "зелень",
  calories: 10
});
fridge.addFood({
  title: "варенье",
  calories: 150
});

fridge.removeFood("нет такой еды"); // без эффекта
alert( fridge.getFood().length ); // 4

var dietItems = fridge.filterFood(function(item) {
  return item.calories < 50;
});

dietItems.forEach(function(item) {
  alert( item.title ); // сок, зелень
  fridge.removeFood(item);
});

alert( fridge.getFood().length ); // 2

module.hot.accept();
